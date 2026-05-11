// =====================================================================
// DRAFT_SYSTEM.JS — Sistema de Draft Real (ACB / NBA)
// =====================================================================
// INSTRUCCIONES:
//   Añade este <script> DESPUÉS de data_rookies.js en tu HTML:
//   <script src="draft_system.js"></script>
//
// Este módulo REEMPLAZA la función inyectarRookiesTemporada() con un
// draft real por orden de clasificación (peores equipos primero).
// Si el jugador forma parte del pool de rookies ese año,
// vivirá su propio momento de ser drafteado con una pantalla especial.
// =====================================================================


// =====================================================================
// UTILIDADES INTERNAS
// =====================================================================

/**
 * Devuelve los equipos de una fase ordenados por clasificación inversa
 * (el peor equipo primero). Usa leagueTable si está disponible; si no,
 * usa DB[faseIdx].teams ordenados por ovr ascendente.
 */
function _getOrdenDraft(faseIdx) {
    const dbTeams = DB[faseIdx].teams;

    // Intentar usar leagueTable (resultados reales de la temporada)
    if (typeof leagueTable !== 'undefined' && leagueTable.length > 0) {
        const listaConStats = dbTeams.map(team => {
            const ligaEntry = leagueTable.find(t => t.name === team.name);
            const wins = ligaEntry ? (ligaEntry.v || 0) : 0;
            const losses = ligaEntry ? (ligaEntry.d || 0) : 0;
            return { team, wins, losses };
        });
        // El peor equipo (menos victorias) elige primero
        listaConStats.sort((a, b) => a.wins - b.wins || b.losses - a.losses);
        return listaConStats.map(x => x.team);
    }

    // Fallback: ordenar por OVR ascendente
    return [...dbTeams].sort((a, b) => a.ovr - b.ovr);
}

/**
 * Devuelve la posición más necesitada de un equipo comparando
 * cuántos jugadores titulares tiene de cada posición.
 * Posiciones ACB/NBA: B, E, A, AP, P
 */
function _posicionNecesitada(roster) {
    const posiciones = ['B', 'E', 'A', 'AP', 'P'];
    const conteo = {};
    posiciones.forEach(pos => conteo[pos] = 0);

    if (!roster) return 'B';
    roster.forEach(j => {
        const pos = j.rp || j.p;
        if (conteo[pos] !== undefined) conteo[pos]++;
    });

    // La posición con menos jugadores es la más necesitada
    return posiciones.reduce((min, pos) =>
        conteo[pos] < conteo[min] ? pos : min, posiciones[0]);
}

/**
 * Elige el mejor rookie disponible del pool para una posición dada.
 * Prioriza la posición necesitada, pero puede elegir el mejor OVR
 * si hay poca diferencia.
 */
function _elegirRookiePorNecesidad(pool, posNecesitada) {
    if (pool.length === 0) return null;

    // Candidatos de la posición ideal
    const candidatosPosicion = pool.filter(r => r.p === posNecesitada);

    // Si hay candidatos de esa posición, elegir el mejor OVR
    if (candidatosPosicion.length > 0) {
        return candidatosPosicion.reduce((best, r) =>
            (r.o + r.pot * 0.3) > (best.o + best.pot * 0.3) ? r : best,
            candidatosPosicion[0]
        );
    }

    // Si no hay de esa posición, coger el de mayor OVR general
    return pool.reduce((best, r) =>
        (r.o + r.pot * 0.3) > (best.o + best.pot * 0.3) ? r : best,
        pool[0]
    );
}


// =====================================================================
// DRAFT AUTOMÁTICO (función principal que reemplaza inyectarRookiesTemporada)
// =====================================================================

/**
 * draftTemporada(faseIdx, season, rivalName)
 *
 * Ejecuta el draft de la temporada. Reemplaza inyectarRookiesTemporada().
 * Si el jugador humano está en el pool de rookies, lanza la pantalla
 * de draft dramática. En caso contrario lo procesa en silencio.
 *
 * @param {number} faseIdx   - 1 (ACB) o 2 (NBA)
 * @param {number} season    - Temporada actual (los rookies de entry===season+1)
 * @param {string} rivalName - Nombre del rival del jugador (no se retira)
 */
function draftTemporada(faseIdx, season, rivalName) {
    const nextSeason = season + 1;
    const pool = (faseIdx === 1 ? ROOKIES_ACB : ROOKIES_NBA)
        .filter(r => r.entry === nextSeason);

    if (pool.length === 0) return; // Nada que draftear

    const ordenEquipos = _getOrdenDraft(faseIdx);
    const rookiesDisponibles = [...pool];

    // Comprobar si el jugador humano está en este draft
    // (solo relevante para la acción narrativa; el jugador humano ya eligió equipo
    //  mediante mostrarDraftACB/NBA, pero podemos mostrarle el momento)
    const esDraftJugador = (
        typeof p !== 'undefined' &&
        p.fase === faseIdx &&
        typeof p._draftPendiente !== 'undefined' &&
        p._draftPendiente === nextSeason
    );

    if (esDraftJugador) {
        // Mostrar pantalla dramática de draft y luego procesar el resto
        mostrarPantallaDraft(faseIdx, ordenEquipos, rookiesDisponibles, rivalName, nextSeason);
        return;
    }

    // Draft silencioso: los equipos eligen por turno
    _ejecutarDraftSilencioso(ordenEquipos, rookiesDisponibles, rivalName);
}

/**
 * Draft silencioso: distribuye rookies entre equipos sin animación.
 * Cada equipo elige según su posición más necesitada.
 */
function _ejecutarDraftSilencioso(ordenEquipos, pool, rivalName) {
    const ROSTER_MAX = 13;
    let poolRestante = [...pool];

    ordenEquipos.forEach(team => {
        if (poolRestante.length === 0) return;
        if (!team.roster) team.roster = [];
        if (team.roster.length >= ROSTER_MAX) return;

        // Cuántos rookies puede recibir este equipo
        const huecos = ROSTER_MAX - team.roster.length;
        const fichajesMax = Math.min(huecos, Math.ceil(pool.length / ordenEquipos.length));

        for (let i = 0; i < fichajesMax; i++) {
            if (poolRestante.length === 0) break;

            const posNecesitada = _posicionNecesitada(team.roster);
            const elegido = _elegirRookiePorNecesidad(poolRestante, posNecesitada);
            if (!elegido) break;

            // No duplicar y no usar el rival
            if (!team.roster.find(j => j.n === elegido.n) && elegido.n !== rivalName) {
                team.roster.push({
                    n: elegido.n,
                    p: "BAN",       // Empieza como suplente hasta consolidarse
                    rp: elegido.p,
                    o: elegido.o,
                    pot: elegido.pot,
                    a: elegido.a,
                    d: elegido.d,
                    pts: 0, reb: 0, ast: 0, rob: 0, tap: 0,
                    isRookie: true
                });
            }

            // Eliminar del pool (sea cual sea el resultado)
            poolRestante = poolRestante.filter(r => r.n !== elegido.n);
        }
    });

    if (typeof recalcularMediasEquipos === 'function') recalcularMediasEquipos();
}


// =====================================================================
// PANTALLA DRAMÁTICA DE DRAFT
// =====================================================================

/**
 * Muestra la pantalla de draft cuando el jugador humano es drafteado.
 * Simula los picks anteriores con animación y al llegar al equipo del
 * jugador lanza un momento especial.
 *
 * @param {number} faseIdx
 * @param {Array}  ordenEquipos   - Equipos en orden de draft
 * @param {Array}  pool           - Rookies disponibles
 * @param {string} rivalName
 * @param {number} nextSeason
 */
function mostrarPantallaDraft(faseIdx, ordenEquipos, pool, rivalName, nextSeason) {
    // Insertar el overlay de draft en el DOM
    const overlay = document.createElement('div');
    overlay.id = 'draft-overlay';
    overlay.innerHTML = _htmlPantallaDraft(faseIdx);
    document.body.appendChild(overlay);

    // Datos del draft
    const totalPicks = Math.min(ordenEquipos.length * 2, pool.length + ordenEquipos.length);
    const picksLog = [];
    let poolRestante = [...pool];
    let pickIdx = 0;

    // Calcular en qué pick se espera al jugador (heurística: según su OVR dentro del pool)
    const myOvr = (typeof p !== 'undefined') ? p.ovr : 75;
    const poolOrdenado = [...pool].sort((a, b) => (b.o + b.pot) - (a.o + a.pot));
    const playerPickEstimado = Math.floor(ordenEquipos.length * 0.3 + (1 - myOvr / 99) * ordenEquipos.length * 0.5);
    const equipoQueElige = ordenEquipos[Math.min(playerPickEstimado, ordenEquipos.length - 1)];

    // Pre-calcular todos los picks de la IA
    const picksPrecalculados = [];
    let poolSim = [...pool];
    ordenEquipos.forEach((team, idx) => {
        if (poolSim.length === 0) return;
        const pos = _posicionNecesitada(team.roster || []);
        const elegido = _elegirRookiePorNecesidad(poolSim, pos);
        if (!elegido) return;

        const esJugador = (idx === Math.min(playerPickEstimado, ordenEquipos.length - 1));
        picksPrecalculados.push({ pick: idx + 1, team, rookie: elegido, esJugador });
        poolSim = poolSim.filter(r => r.n !== elegido.n);
    });

    // Función para animar los picks uno a uno
    function mostrarPickSiguiente() {
        if (pickIdx >= picksPrecalculados.length) {
            // Draft terminado — aplicar resultados y cerrar
            _aplicarResultadosDraft(picksPrecalculados, ordenEquipos, poolRestante, rivalName);
            setTimeout(() => _cerrarPantallaDraft(), 3000);
            return;
        }

        const pick = picksPrecalculados[pickIdx];
        pickIdx++;

        if (pick.esJugador) {
            // ¡MOMENTO DEL JUGADOR!
            _animarPickJugador(pick, faseIdx, () => {
                // Tras el momento especial, continuar con el resto en silencio
                _aplicarResultadosDraft(picksPrecalculados, ordenEquipos, poolRestante, rivalName);
                setTimeout(() => _cerrarPantallaDraft(), 4000);
            });
            return;
        }

        // Pick normal de la IA
        _animarPickNormal(pick, () => setTimeout(mostrarPickSiguiente, 600));
    }

    // Actualizar contador total en UI
    const totalEl = document.getElementById('draft-total-picks');
    if (totalEl) totalEl.textContent = picksPrecalculados.length;

    // Empezar la animación
    setTimeout(mostrarPickSiguiente, 800);
}

function _htmlPantallaDraft(faseIdx) {
    const esNBA = faseIdx === 2;
    const color = esNBA ? '#c8a84b' : '#4b9fc8';
    const titulo = esNBA ? '🏀 NBA DRAFT' : '🏅 ACB DRAFT';
    const subtitulo = esNBA ? 'Los 30 equipos de la NBA realizan sus selecciones' : 'Los equipos de la ACB eligen a los nuevos talentos';

    return `
    <div id="draft-overlay-inner" style="
        position: fixed; top: 0; left: 0; width: 100%; height: 100%;
        background: rgba(0,0,0,0.97);
        z-index: 9999;
        display: flex; flex-direction: column; align-items: center;
        font-family: 'Courier New', monospace;
        overflow-y: auto;
    ">
        <!-- Cabecera -->
        <div style="
            width: 100%; max-width: 520px;
            padding: 28px 20px 0;
            text-align: center;
        ">
            <div style="
                font-size: 0.6em;
                letter-spacing: 0.25em;
                color: ${color};
                text-transform: uppercase;
                margin-bottom: 6px;
                opacity: 0.8;
            ">EN DIRECTO</div>
            <div style="
                font-size: 1.6em;
                font-weight: 900;
                color: #fff;
                letter-spacing: 0.08em;
                margin-bottom: 4px;
            ">${titulo}</div>
            <div style="
                font-size: 0.62em;
                color: #666;
                margin-bottom: 20px;
            ">${subtitulo}</div>
            <div style="
                width: 100%; height: 1px;
                background: linear-gradient(90deg, transparent, ${color}, transparent);
                margin-bottom: 16px;
            "></div>
        </div>

        <!-- Pick actual en curso -->
        <div id="draft-pick-actual" style="
            width: 100%; max-width: 520px;
            padding: 0 20px;
            min-height: 80px;
            display: flex; align-items: center; justify-content: center;
        ">
            <div style="color: #444; font-size: 0.7em; letter-spacing: 0.1em;">
                INICIANDO DRAFT...
            </div>
        </div>

        <!-- Log de picks -->
        <div id="draft-picks-log" style="
            width: 100%; max-width: 520px;
            padding: 8px 20px;
            flex: 1;
        "></div>

        <!-- Footer -->
        <div style="
            padding: 16px;
            color: #333;
            font-size: 0.55em;
            letter-spacing: 0.15em;
            text-transform: uppercase;
        ">Pick <span id="draft-pick-num">0</span> / <span id="draft-total-picks">?</span></div>
    </div>
    `;
}

function _animarPickNormal(pick, callback) {
    const numEl = document.getElementById('draft-pick-num');
    if (numEl) numEl.textContent = pick.pick;

    const actualEl = document.getElementById('draft-pick-actual');
    if (actualEl) {
        actualEl.innerHTML = `
        <div style="text-align: center; animation: fadeIn 0.3s ease;">
            <div style="color: #555; font-size: 0.55em; letter-spacing: 0.2em; margin-bottom: 4px;">
                PICK #${pick.pick}
            </div>
            <div style="color: #999; font-size: 0.72em; margin-bottom: 2px;">
                ${pick.team.name}
            </div>
            <div style="color: #fff; font-size: 0.9em; font-weight: bold;">
                ${pick.rookie.n}
            </div>
            <div style="color: #555; font-size: 0.6em; margin-top: 2px;">
                ${_nombrePosicion(pick.rookie.p)} · OVR ${pick.rookie.o}
            </div>
        </div>`;
    }

    // Añadir al log
    const log = document.getElementById('draft-picks-log');
    if (log) {
        const entry = document.createElement('div');
        entry.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            padding: 5px 0;
            border-bottom: 1px solid #1a1a1a;
            animation: fadeIn 0.2s ease;
            font-size: 0.65em;
        `;
        entry.innerHTML = `
            <span style="color: #444; width: 24px;">#${pick.pick}</span>
            <span style="color: #666; flex: 1; padding: 0 8px;">${pick.team.name}</span>
            <span style="color: #ccc; flex: 1; text-align: right;">${pick.rookie.n}</span>
            <span style="color: #555; width: 28px; text-align: right; margin-left: 8px;">${pick.rookie.o}</span>
        `;
        log.appendChild(entry);
        log.scrollTop = log.scrollHeight;
    }

    if (callback) callback();
}

function _animarPickJugador(pick, faseIdx, callback) {
    const numEl = document.getElementById('draft-pick-num');
    if (numEl) numEl.textContent = pick.pick;

    const esNBA = faseIdx === 2;
    const color = esNBA ? '#c8a84b' : '#4b9fc8';
    const playerName = (typeof p !== 'undefined') ? p.name || 'TÚ' : 'TÚ';

    const actualEl = document.getElementById('draft-pick-actual');
    if (actualEl) {
        actualEl.innerHTML = `
        <div style="
            text-align: center;
            padding: 20px;
            width: 100%;
            animation: draftReveal 0.8s ease;
        ">
            <div style="
                font-size: 0.5em;
                letter-spacing: 0.4em;
                color: ${color};
                text-transform: uppercase;
                margin-bottom: 10px;
                animation: pulse 1.5s infinite;
            ">
                ★ CON EL PICK #${pick.pick} ★
            </div>
            <div style="
                font-size: 0.7em;
                color: #888;
                margin-bottom: 6px;
                letter-spacing: 0.1em;
            ">${pick.team.name} SELECCIONA A...</div>
            <div style="
                font-size: 2.2em;
                font-weight: 900;
                color: #fff;
                letter-spacing: 0.05em;
                text-shadow: 0 0 40px ${color}88;
                margin: 10px 0;
                line-height: 1.1;
            ">${playerName}</div>
            <div style="
                font-size: 0.65em;
                color: ${color};
                letter-spacing: 0.15em;
                margin-top: 4px;
            ">
                ${_nombrePosicion(pick.rookie ? pick.rookie.p : 'B')} · OVR ${(typeof p !== 'undefined') ? p.ovr : '?'}
            </div>
            <div style="
                margin-top: 20px;
                font-size: 0.6em;
                color: #555;
                letter-spacing: 0.08em;
            ">
                Tu carrera en ${esNBA ? 'la NBA' : 'la ACB'} comienza aquí.
            </div>
        </div>`;
    }

    // Añadir al log con estilo especial
    const log = document.getElementById('draft-picks-log');
    if (log) {
        const entry = document.createElement('div');
        entry.style.cssText = `
            display: flex; justify-content: space-between; align-items: center;
            padding: 7px 0;
            border-bottom: 1px solid ${color}44;
            border-top: 1px solid ${color}44;
            margin: 4px 0;
            animation: fadeIn 0.3s ease;
            font-size: 0.65em;
        `;
        entry.innerHTML = `
            <span style="color: ${color}; width: 24px; font-weight: bold;">#${pick.pick}</span>
            <span style="color: #888; flex: 1; padding: 0 8px;">${pick.team.name}</span>
            <span style="color: ${color}; flex: 1; text-align: right; font-weight: bold;">★ ${playerName}</span>
            <span style="color: ${color}88; width: 28px; text-align: right; margin-left: 8px;">${(typeof p !== 'undefined') ? p.ovr : '?'}</span>
        `;
        log.appendChild(entry);
        log.scrollTop = log.scrollHeight;
    }

    // Guardar el equipo del jugador para el ascenso posterior
    if (typeof p !== 'undefined' && pick.team) {
        p._draftTeam = pick.team.name;
        p._draftPendiente = null;
    }

    setTimeout(() => {
        if (callback) callback();
    }, 3500);
}

function _cerrarPantallaDraft() {
    const overlay = document.getElementById('draft-overlay');
    if (overlay) {
        overlay.style.opacity = '0';
        overlay.style.transition = 'opacity 0.8s ease';
        setTimeout(() => {
            overlay.remove();
            // Si el jugador fue drafteado, procesar el ascenso
            if (typeof p !== 'undefined' && p._draftTeam) {
                const team = p._draftTeam;
                delete p._draftTeam;
                if (typeof ejecutarAscenso === 'function') {
                    const fase = p.fase + 1;
                    const rol = p.ovr >= 80 ? 'Titular' : 'Suplente';
                    ejecutarAscenso(fase, team, rol);
                }
            }
        }, 800);
    }
}

function _aplicarResultadosDraft(picks, ordenEquipos, poolRestante, rivalName) {
    picks.forEach(pick => {
        if (!pick.esJugador && pick.rookie && pick.team) {
            const team = pick.team;
            if (!team.roster) team.roster = [];
            if (!team.roster.find(j => j.n === pick.rookie.n) && pick.rookie.n !== rivalName) {
                team.roster.push({
                    n: pick.rookie.n,
                    p: "BAN",
                    rp: pick.rookie.p,
                    o: pick.rookie.o,
                    pot: pick.rookie.pot,
                    a: pick.rookie.a,
                    d: pick.rookie.d,
                    pts: 0, reb: 0, ast: 0, rob: 0, tap: 0,
                    isRookie: true
                });
            }
        }
    });

    // Rookies que sobraron (más picks que rookies disponibles)
    if (poolRestante.length > 0) {
        _ejecutarDraftSilencioso(ordenEquipos, poolRestante, rivalName);
    }

    if (typeof recalcularMediasEquipos === 'function') recalcularMediasEquipos();
    if (typeof guardarPartida === 'function') guardarPartida();
}


// =====================================================================
// SISTEMA DE RETIRO POR EDAD
// =====================================================================

/**
 * Configuración del sistema de retiro.
 * Ajusta estos valores para cambiar el comportamiento global.
 */
const RETIRO_CONFIG = {
    // Edad mínima a partir de la cual un jugador puede retirarse
    edadMinRetiro: 34,
    // Edad a partir de la cual el retiro es casi seguro
    edadRetiroForzado: 42,
    // Probabilidad base de retiro al alcanzar edadMinRetiro (0-1)
    probBase: 0.08,
    // Incremento de probabilidad por cada año adicional tras edadMinRetiro
    probPorAnio: 0.12,
    // Penalización extra si el OVR es bajo (jugadores mediocres se retiran antes)
    penalizacionOvrBajo: 0.10,   // se aplica si ovr < umbralOvrBajo
    umbralOvrBajo: 68,
    // Bonus de longevidad para estrellas (OVR alto aguanta más)
    bonusEstrella: -0.08,        // reduce la prob si ovr >= umbralEstrella
    umbralEstrella: 82,
};

/**
 * Calcula la probabilidad de retiro de un jugador según su edad y OVR.
 *
 * @param {number} edad  - Edad del jugador en años
 * @param {number} ovr   - Overall del jugador
 * @returns {number}     - Probabilidad de retiro (0-1)
 */
function calcularProbRetiro(edad, ovr) {
    if (edad < RETIRO_CONFIG.edadMinRetiro) return 0;
    if (edad >= RETIRO_CONFIG.edadRetiroForzado) return 1;

    const aniosExtra = edad - RETIRO_CONFIG.edadMinRetiro;
    let prob = RETIRO_CONFIG.probBase + aniosExtra * RETIRO_CONFIG.probPorAnio;

    // Ajuste por OVR
    if (ovr < RETIRO_CONFIG.umbralOvrBajo) {
        prob += RETIRO_CONFIG.penalizacionOvrBajo;
    } else if (ovr >= RETIRO_CONFIG.umbralEstrella) {
        prob += RETIRO_CONFIG.bonusEstrella;
    }

    return Math.min(1, Math.max(0, prob));
}

/**
 * Envejece un jugador un año al inicio de temporada.
 * Asigna edad aleatoria inicial si no tiene campo `edad`.
 *
 * @param {Object} jugador  - Objeto jugador del roster
 * @param {number} season   - Temporada actual (para calcular edad desde birthYear)
 */
function envejecerJugador(jugador, season) {
    if (jugador.birthYear) {
        // Calcular edad real desde el año de nacimiento
        jugador.edad = season - jugador.birthYear;
    } else if (typeof jugador.edad === 'number') {
        jugador.edad += 1;
    } else {
        // Primera vez: asignar edad inicial según si es rookie o veterano
        if (jugador.isRookie) {
            jugador.edad = 18 + Math.floor(Math.random() * 3); // 18-20
        } else {
            // Edad aleatoria entre 22-32 para jugadores sin dato de edad
            jugador.edad = 22 + Math.floor(Math.random() * 11);
        }
    }
}

/**
 * Aplica el progreso de stats y decadencia de OVR a un roster.
 * Llama a envejecerJugador() internamente.
 * Sustituye o complementa a la función existente aplicarProgresoRoster().
 *
 * @param {Array}  roster   - Array de jugadores del equipo
 * @param {number} tGames   - Partidos jugados en la temporada
 * @param {number} [season] - Temporada actual (opcional, para calcular edad)
 */
function aplicarProgresoRoster(roster, tGames, season) {
    if (!roster) return;

    roster.forEach(jugador => {
        // Envejecer
        envejecerJugador(jugador, season);

        const edad = jugador.edad || 25;

        // Progresión de jóvenes (hasta 26 años)
        if (edad <= 26 && jugador.pot) {
            const ganancia = Math.random() < 0.6 ? Math.floor(Math.random() * 2) : 0;
            jugador.o = Math.min(jugador.pot, (jugador.o || 60) + ganancia);
        }

        // Decadencia a partir de los 30
        if (edad >= 30) {
            const aniosDecadencia = edad - 30;
            const probDecadencia = 0.15 + aniosDecadencia * 0.07;
            if (Math.random() < probDecadencia) {
                jugador.o = Math.max(50, (jugador.o || 60) - 1);
            }
        }

        // Actualizar OVR visible si existe
        if (typeof jugador.ovr === 'number') {
            jugador.ovr = jugador.o;
        }
    });
}

/**
 * Procesa los retiros de un roster al final de temporada.
 * Devuelve { activos, retirados } para que el llamador actualice el roster.
 *
 * @param {Array}  roster      - Array de jugadores del equipo
 * @param {string} rivalName   - Nombre del rival del jugador (nunca se retira)
 * @returns {{ activos: Array, retirados: string[] }}
 */
function procesarRetirosRoster(roster, rivalName) {
    if (!roster) return { activos: [], retirados: [] };

    const activos = [];
    const retirados = [];

    roster.forEach(jugador => {
        const edad = jugador.edad || 0;
        const ovr  = jugador.o || jugador.ovr || 60;
        const esRival = jugador.n === rivalName;

        // El rival nunca se retira (lo gestiona el juego)
        if (esRival) {
            activos.push(jugador);
            return;
        }

        const prob = calcularProbRetiro(edad, ovr);

        if (prob >= 1 || (prob > 0 && Math.random() < prob)) {
            retirados.push(jugador.n);
            // Marcar para posible log narrativo
            jugador._retirado = true;
        } else {
            activos.push(jugador);
        }
    });

    return { activos, retirados };
}

/**
 * Comprueba si el jugador humano (p) debe retirarse este fin de temporada.
 * Devuelve true si debe retirarse; en ese caso también dispara la pantalla
 * de retiro si existe la función mostrarPantallaRetiro().
 *
 * @param {Object} jugador  - Objeto p (jugador humano)
 * @param {number} season   - Temporada actual
 * @returns {boolean}
 */
function comprobarRetiroJugador(jugador, season) {
    if (!jugador) return false;

    envejecerJugador(jugador, season);

    const edad = jugador.edad || 0;
    const ovr  = jugador.ovr || jugador.o || 60;
    const prob = calcularProbRetiro(edad, ovr);

    if (prob <= 0) return false;

    // El jugador humano decide (no se fuerza salvo edad máxima)
    if (prob >= 1) {
        _mostrarAnuncioRetiroJugador(jugador, true);
        return true;
    }

    // A partir de edadMinRetiro se muestra una advertencia
    if (edad >= RETIRO_CONFIG.edadMinRetiro) {
        _mostrarAnuncioRetiroJugador(jugador, false);
        // La decisión final queda en manos del juego / jugador
    }

    return false;
}

/**
 * Muestra un mensaje/overlay cuando el jugador humano se acerca al retiro.
 * Si forzado=true muestra el retiro definitivo.
 */
function _mostrarAnuncioRetiroJugador(jugador, forzado) {
    const nombre = jugador.name || 'Jugador';
    const edad   = jugador.edad || RETIRO_CONFIG.edadRetiroForzado;

    if (forzado) {
        if (typeof escribirDialogo === 'function') {
            escribirDialogo(
                `🏅 <b>${nombre}</b> cumple ${edad} años. Ha llegado el momento de colgar las botas. ` +
                `Una carrera legendaria llega a su fin.`
            );
        }
    } else {
        if (typeof escribirDialogo === 'function') {
            escribirDialogo(
                `⏳ <b>${nombre}</b> tiene ${edad} años. El retiro empieza a llamar a la puerta. ` +
                `¿Cuántas temporadas más le quedan?`
            );
        }
    }
}


// =====================================================================
// HELPERS
// =====================================================================

function _nombrePosicion(pos) {
    const map = { B: 'Base', E: 'Escolta', A: 'Alero', AP: 'Ala-Pívot', P: 'Pívot' };
    return map[pos] || pos;
}

// CSS para animaciones de la pantalla de draft
(function inyectarEstilosDraft() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(4px); }
            to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes draftReveal {
            0%   { opacity: 0; transform: scale(0.92); }
            60%  { opacity: 1; transform: scale(1.02); }
            100% { transform: scale(1); }
        }
        @keyframes pulse {
            0%, 100% { opacity: 1; }
            50%       { opacity: 0.5; }
        }
    `;
    document.head.appendChild(style);
})();


// =====================================================================
// INTEGRACIÓN: Reemplazar inyectarRookiesTemporada en procesarTemporadaLiga
// =====================================================================

/**
 * Sobrescribe procesarTemporadaLiga para usar draftTemporada() en lugar
 * de inyectarRookiesTemporada(). Compatible con data_rookies.js.
 *
 * IMPORTANTE: este script debe cargarse DESPUÉS de data_rookies.js.
 */
const _originalProcesarTemporadaLiga = typeof procesarTemporadaLiga === 'function'
    ? procesarTemporadaLiga : null;

function procesarTemporadaLiga(season, rivalName) {
    if (typeof DB === 'undefined' || typeof leagueTable === 'undefined') return;

    const retirosLog = [];

    [1, 2].forEach(faseIdx => {
        DB[faseIdx].teams.forEach(dbTeam => {
            const ligaTeam = leagueTable.find(t => t.name === dbTeam.name);
            const tGames = ligaTeam ? Math.max(1, (ligaTeam.v || 0) + (ligaTeam.d || 0)) : 1;

            if (ligaTeam && ligaTeam.roster) {
                ligaTeam.roster.forEach(lt => {
                    const db = dbTeam.roster && dbTeam.roster.find(d => d.n === lt.n);
                    if (db) {
                        db.pts = lt.pts || 0;
                        db.reb = lt.reb || 0;
                        db.ast = lt.ast || 0;
                    }
                });
            }

            if (!dbTeam.roster) return;

            aplicarProgresoRoster(dbTeam.roster, tGames);

            const { activos, retirados } = procesarRetirosRoster(dbTeam.roster, rivalName || '');
            if (retirados.length > 0) {
                retirados.forEach(n => retirosLog.push({ nombre: n, equipo: dbTeam.name }));
            }
            dbTeam.roster = activos;
        });

        // ── DRAFT en lugar de inyección directa ──────────────────
        draftTemporada(faseIdx, season, rivalName || '');
    });

    if (retirosLog.length > 0 && typeof escribirDialogo === 'function') {
        const txt = retirosLog.slice(0, 4).map(r => `<b>${r.nombre}</b> (${r.equipo})`).join(', ');
        const extra = retirosLog.length > 4 ? ` y ${retirosLog.length - 4} más` : '';
        escribirDialogo(`🏅 <span style="color:#aaa;">RETIROS:</span> ${txt}${extra} se despiden del baloncesto profesional.`);
    }

    if (typeof recalcularMediasEquipos === 'function') recalcularMediasEquipos();
}


// =====================================================================
// FUNCIÓN AUXILIAR PÚBLICA: marcar al jugador como prospect del draft
// =====================================================================

/**
 * Llama a esta función cuando quieras que el jugador VIVA su draft
 * en vez de simplemente elegir equipo.
 *
 * Uso: antes de que termine la temporada, en lugar de mostrarDraftACB/NBA,
 * puedes llamar a marcarJugadorComoDraftable(nextSeason).
 * El draft se lanzará automáticamente dentro de procesarTemporadaLiga.
 *
 * Ejemplo:
 *   // En el momento en que detectas que el jugador merece ser drafteado:
 *   marcarJugadorComoDraftable(p.season + 1);
 */
function marcarJugadorComoDraftable(nextSeason) {
    if (typeof p !== 'undefined') {
        p._draftPendiente = nextSeason;
    }
}


console.log("✅ draft_system.js cargado: Sistema de Draft Real + Retiro por Edad activo.");
