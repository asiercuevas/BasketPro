// =====================================================================
// AGENCIA DE REPRESENTACIÓN — Sistema completo de patrocinios
// =====================================================================

const MARCAS = [
    // ── TIER 1: Fama < 42 ────────────────────────────────────────────
    {
        id: "kebab_barrio",
        nombre: "Kebab Barrio",
        logo: "🥙",
        tier: 1,
        minFame: 0,
        maxFame: 42,
        minViralidad: 0,
        dinero: 70,
        duracion: 2,
        bonus: { viralidad: 1 },
        descripcion: "El rey del durum. Bono económico y +1 Viralidad pasiva.",
        objetivoTexto: "Anota 10+ puntos en el próximo partido",
        objetivoStat: "pts",
        objetivoVal: 10,
        objetivoPremio: 150,
    },
    {
        id: "empresa_local",
        nombre: "Empresa local del barrio",
        logo: "🏪",
        tier: 1,
        minFame: 0,
        maxFame: 42,
        minViralidad: 3,
        dinero: 80,
        duracion: 2,
        esRopa: true, 
        bonus: { viralidad: 1 },
        descripcion: "Negocio de toda la vida apoyando tu carrera. +1 Viralidad.",
        objetivoTexto: "Consigue 3+ asistencias en el próximo partido",
        objetivoStat: "ast",
        objetivoVal: 3,
        objetivoPremio: 120,
    },
    {
        id: "energia_max",
        nombre: "EnergíaMax",
        logo: "⚡",
        tier: 1,
        minFame: 7,
        maxFame: 49,
        minViralidad: 7,
        dinero: 75,
        duracion: 2,
        bonus: { viralidad: 2 },
        descripcion: "Bebida energética. +2 Viralidad por las campañas en redes.",
        objetivoTexto: "Gana el próximo partido",
        objetivoStat: "win",
        objetivoVal: 1,
        objetivoPremio: 160,
    },
    {
        id: "sport_city",
        nombre: "Sport City Gym",
        logo: "🏋️",
        tier: 1,
        minFame: 0,
        maxFame: 56,
        minViralidad: 11,
        dinero: 65,
        duracion: 3,
        bonus: { viralidad: 1 },
        fameBonus: 1,
        descripcion: "Cadena de gimnasios. +1 Viralidad y +1 Fama al firmar.",
        objetivoTexto: "Consigue 2+ robos o tapones en el próximo partido",
        objetivoStat: "rob_tap",
        objetivoVal: 2,
        objetivoPremio: 130,
    },

    // ── TIER 2: Fama Media ───────────────────────────────────────────
    {
        id: "nike_junior",
        nombre: "Nike Academy",
        logo: "✔️",
        tier: 2,
        minFame: 28,
        maxFame: 84,
        minViralidad: 21,
        dinero: 140,
        duracion: 2,
        esRopa: true, 
        bonus: { viralidad: 2 },
        descripcion: "Línea junior de Nike. Visibilidad media. +2 Viralidad.",
        objetivoTexto: "Anota 20+ puntos en el próximo partido",
        objetivoStat: "pts",
        objetivoVal: 20,
        objetivoPremio: 400,
    },
    {
        id: "gatorade",
        nombre: "Gatorade",
        logo: "🥤",
        tier: 2,
        minFame: 35,
        maxFame: 91,
        minViralidad: 28,
        dinero: 160,
        duracion: 2,
        bonus: { viralidad: 3 },
        descripcion: "La bebida de los campeones. Gran presencia mediática. +3 Viralidad.",
        objetivoTexto: "Captura 6+ rebotes en el próximo partido",
        objetivoStat: "reb",
        objetivoVal: 6,
        objetivoPremio: 350,
    },
    {
        id: "under_armour",
        nombre: "Under Armour",
        logo: "🦺",
        tier: 2,
        minFame: 42,
        maxFame: 91,
        minViralidad: 35,
        dinero: 150,
        duracion: 2,
        esRopa: true, 
        bonus: { viralidad: 2 },
        fameBonus: 2,
        descripcion: "Ropa de alto rendimiento. +2 Viralidad, +2 Fama extra.",
        objetivoTexto: "Consigue 3+ robos en el próximo partido",
        objetivoStat: "rob",
        objetivoVal: 3,
        objetivoPremio: 380,
    },
    {
        id: "red_bull_basket",
        nombre: "Red Bull Basket",
        logo: "🐂",
        tier: 2,
        minFame: 49,
        maxFame: 98,
        minViralidad: 42,
        dinero: 170,
        duracion: 2,
        bonus: { viralidad: 4 },
        descripcion: "Red Bull quiere vídeos espectaculares tuyos. +4 Viralidad.",
        objetivoTexto: "Consigue un partido de 25+ puntos",
        objetivoStat: "pts",
        objetivoVal: 25,
        objetivoPremio: 500,
    },
    {
        id: "spalding",
        nombre: "Spalding Pro",
        logo: "🏀",
        tier: 2,
        minFame: 28,
        maxFame: 84,
        minViralidad: 21,
        dinero: 130,
        duracion: 3,
        bonus: { viralidad: 1 },
        descripcion: "Patrocinador de balones. Da imagen de profesionalidad. +1 Viralidad.",
        objetivoTexto: "Consigue 5+ asistencias en el próximo partido",
        objetivoStat: "ast",
        objetivoVal: 5,
        objetivoPremio: 320,
    },
    {
        id: "wilson_signature",
        nombre: "Wilson Signature",
        logo: "⚾",
        tier: 2,
        minFame: 42,
        maxFame: 84,
        minViralidad: 35,
        dinero: 125,
        duracion: 3,
        bonus: { viralidad: 2 },
        descripcion: "Balones y accesorios de calidad. +2 Viralidad.",
        objetivoTexto: "Anota 3+ triples en el próximo partido",
        objetivoStat: "t3",
        objetivoVal: 3,
        objetivoPremio: 300,
    },

    // ── TIER 3: Fama Alta ─────────────────────────────────────────────
    {
        id: "adidas_elite",
        nombre: "Adidas Elite",
        logo: "🌟",
        tier: 3,
        minFame: 70,
        maxFame: 100,
        minViralidad: 63,
        dinero: 290,
        duracion: 2,
        esRopa: true, 
        bonus: { viralidad: 5 },
        descripcion: "La élite europea te llama. Anuncios en TV y redes. +5 Viralidad.",
        objetivoTexto: "Anota 30+ puntos en el próximo partido",
        objetivoStat: "pts",
        objetivoVal: 30,
        objetivoPremio: 1000,
    },
    {
        id: "jordan_brand",
        nombre: "Jordan Brand",
        logo: "⛹️",
        tier: 3,
        minFame: 84,
        maxFame: 100,
        minViralidad: 77,
        dinero: 340,
        duracion: 2,
        esRopa: true, 
        bonus: { viralidad: 6 },
        fameBonus: 3,
        descripcion: "El sello del mejor. Contenido icónico. +6 Viralidad, +3 Fama.",
        objetivoTexto: "Consigue un doble-doble (10+ pts y 10+ reb/ast)",
        objetivoStat: "doble_doble",
        objetivoVal: 1,
        objetivoPremio: 1200,
    },
    {
        id: "apple_sports",
        nombre: "Apple Sports",
        logo: "🍎",
        tier: 3,
        minFame: 77,
        maxFame: 100,
        minViralidad: 84,
        dinero: 320,
        duracion: 2,
        bonus: { viralidad: 3 },
        fameBonus: 5,
        descripcion: "Tech y basket. Campañas exclusivas. +3 Viralidad y +5 Fama.",
        objetivoTexto: "Gana 3 partidos seguidos",
        objetivoStat: "racha_victorias",
        objetivoVal: 3,
        objetivoPremio: 1500,
    },
    {
        id: "beats_by_hoop",
        nombre: "Beats by Hoop",
        logo: "🎧",
        tier: 3,
        minFame: 84,
        maxFame: 100,
        minViralidad: 91,
        dinero: 300,
        duracion: 3,
        bonus: { viralidad: 8 },
        fameBonus: 3,
        descripcion: "Audio de élite. Eres tendencia musical. +8 Viralidad y +3 Fama.",
        objetivoTexto: "Consigue un partido de 35+ puntos",
        objetivoStat: "pts",
        objetivoVal: 35,
        objetivoPremio: 1800,
    },
    {
        id: "mountain_dew_nba",
        nombre: "Mountain Dew NBA",
        logo: "🍋",
        tier: 3,
        minFame: 77,
        maxFame: 100,
        minViralidad: 70,
        dinero: 280,
        duracion: 2,
        bonus: { viralidad: 4 },
        descripcion: "La bebida oficial de los que vuelan. +4 Viralidad.",
        objetivoTexto: "Consigue 4+ tapones en el próximo partido",
        objetivoStat: "tap",
        objetivoVal: 4,
        objetivoPremio: 900,
    },

    // ── TIER 4: NBA / Fama altísima ───────────────────────────────────────
    {
        id: "nike_signature",
        nombre: "Nike Signature",
        logo: "👑",
        tier: 4,
        minFame: 98,
        maxFame: 100,
        minViralidad: 112,
        dinero: 540,
        duracion: 3,
        esRopa: true, 
        bonus: { viralidad: 10 },
        fameBonus: 5,
        descripcion: "Tu propia zapatilla Nike. Eres un ícono global. +10 Viralidad, +5 Fama.",
        objetivoTexto: "Anota 40+ puntos en el próximo partido",
        objetivoStat: "pts",
        objetivoVal: 40,
        objetivoPremio: 2500,
    },
    {
        id: "global_sports_intl",
        nombre: "Global Sports Intl.",
        logo: "🌍",
        tier: 4,
        minFame: 100,
        maxFame: 100,
        minViralidad: 119,
        dinero: 490,
        duracion: 3,
        bonus: { viralidad: 12 },
        descripcion: "Documentales sobre tu vida y giras mundiales. +12 Viralidad.",
        objetivoTexto: "Consigue un partido de triple-doble (10+/10+/10+)",
        objetivoStat: "triple_doble",
        objetivoVal: 1,
        objetivoPremio: 3000,
    },
    {
        id: "emirates_nba",
        nombre: "Emirates NBA",
        logo: "✈️",
        tier: 4,
        minFame: 91,
        maxFame: 100,
        minViralidad: 105,
        dinero: 440,
        duracion: 3,
        bonus: { viralidad: 5 },
        fameBonus: 8,
        descripcion: "La aerolínea de los campeones. Puro estatus. +5 Viralidad, +8 Fama.",
        objetivoTexto: "Gana los playoffs de tu liga",
        objetivoStat: "playoffs_win",
        objetivoVal: 1,
        objetivoPremio: 5000,
    },
];

// =====================================================================
// ESTADO Y LÓGICA PRINCIPAL
// =====================================================================

function getOfertasDisponibles() {
    let virActual = p.viralidad || 0;

    let disponibles = MARCAS.filter(m => {
        let tieneContrato = p.sponsorContratos && p.sponsorContratos.some(c => c.id === m.id);
        let yaRechazada = p.sponsorRechazadas && p.sponsorRechazadas.includes(m.id + '_' + p.season);
        
        return !tieneContrato && !yaRechazada && p.fame >= m.minFame && p.fame <= m.maxFame && virActual >= m.minViralidad;
    });

    disponibles.sort(() => Math.random() - 0.5);
    return disponibles.slice(0, 3);
}

function renderAgencia() {
    let act = document.getElementById('actions');
    if (!act) return;

    if (!p.sponsorContratos)  p.sponsorContratos  = [];
    if (!p.sponsorRechazadas) p.sponsorRechazadas = [];
    if (!p.sponsorObjetivo)   p.sponsorObjetivo   = null;
    if (p.viralidad === undefined) p.viralidad = 0; 
    if (p.money === undefined) p.money = 0;

    let activos = p.sponsorContratos.filter(c => c.temporadasLeft > 0);
    let renovaciones = p.sponsorContratos.filter(c => c.temporadasLeft === 0);

    let numActivos = activos.length;
    let tieneRopa = activos.some(c => {
        let marcaInfo = MARCAS.find(x => x.id === c.id);
        return marcaInfo && marcaInfo.esRopa;
    });

    let html = `
    <div style="color:gold;font-size:0.75em;font-weight:bold;text-align:center;margin-bottom:8px;letter-spacing:1px;">🏢 AGENCIA DE REPRESENTACIÓN</div>
    
    <div style="display:flex; justify-content:space-around; background: #111; padding: 5px; border-radius: 5px; margin-bottom: 10px;">
        <span style="color:#aaa; font-size:0.65em;">💵 Saldo: <b style="color:#0f0;">${p.money}€</b></span>
        <span style="color:#aaa; font-size:0.65em;">🌟 Fama: <b style="color:#fff;">${p.fame}</b></span>
        <span style="color:#aaa; font-size:0.65em;">📱 Viralidad: <b style="color:#00ffcc;">${p.viralidad}</b></span>
    </div>
    
    <div style="font-size:0.55em; color:#ccc; text-align:center; margin-bottom:10px;">
        Patrocinios activos: <b style="color:${numActivos >= 3 ? '#f00' : '#0f0'};">${numActivos}/3</b> | 
        Exclusividad ropa: <b style="color:${tieneRopa ? '#f00' : '#0f0'};">${tieneRopa ? 'SÍ' : 'NO'}</b>
    </div>`;

    if (p.sponsorObjetivo) {
        let ob = p.sponsorObjetivo;
        let obColor = ob.cumplido ? 'var(--success)' : (ob.fallado ? 'var(--danger)' : '#0ff');
        let obMsg   = ob.cumplido ? '✅ CUMPLIDO' : (ob.fallado ? '❌ FALLADO' : `⏳ Pendiente`);
        html += `
        <div style="background:rgba(0,255,255,0.05);border:1px solid #0ff;border-radius:4px;padding:8px;margin-bottom:8px;font-size:0.6em;">
            <b style="color:#0ff;">🎯 OBJETIVO ACTIVO — ${ob.marca}</b><br>
            ${ob.texto}<br>
            <span style="color:${obColor};font-weight:bold;">${obMsg} — Premio: ${ob.premio}€</span>
        </div>`;
    }

    if (activos.length > 0) {
        html += `<div style="font-size:0.55em;color:#0ff;margin-bottom:4px;letter-spacing:1px;">📋 CONTRATOS ACTIVOS</div>`;
        activos.forEach(c => {
            let bonusTxt = Object.entries(c.bonus || {}).map(([k,v]) => `+${v} ${k.toUpperCase()}`).join(', ');
            let mInfo = MARCAS.find(x => x.id === c.id);
            let penalizacion = [5, 8, 12, 15][(mInfo ? mInfo.tier : 1) - 1]; // Calculamos lo que perderá si rompe

            html += `
            <div style="background:rgba(0,255,255,0.05);border:1px solid #333;border-radius:4px;padding:7px;margin-bottom:5px;font-size:0.58em;position:relative;">
                ${c.logo} <b style="color:#fff;">${c.nombre}</b> — ${c.dinero}€/victoria
                ${bonusTxt ? `<br><span style="color:#0f0;">${bonusTxt}</span>` : ''}
                <br><span style="color:#888;">⏳ ${c.temporadasLeft} temporada${c.temporadasLeft !== 1 ? 's' : ''} restante${c.temporadasLeft !== 1 ? 's' : ''}</span>
                
                <div style="margin-top:6px; text-align:right;">
                    <button onclick="romperContrato('${c.id}')" class="btn-main" style="border-color:#f00; color:#f00; font-size:0.55em; padding:4px 8px;" title="Cuesta 1000€ y pierdes ${penalizacion} Fama/Viralidad">✂️ ROMPER CONTRATO</button>
                </div>
            </div>`;
        });
    }

    if (renovaciones.length > 0) {
        html += `<div style="font-size:0.55em;color:#ffaa00;margin:10px 0 4px;letter-spacing:1px;">⚠️ PENDIENTES DE RENOVACIÓN</div>`;
        renovaciones.forEach(c => {
            let mInfo = MARCAS.find(x => x.id === c.id);
            let checkRopa = mInfo && mInfo.esRopa;
            
            let bloqueado = false;
            let razonBloqueo = "";

            if (numActivos >= 3) {
                bloqueado = true;
                razonBloqueo = "Límite de 3 patrocinios activos. Libera espacio para renovar.";
            } else if (checkRopa && tieneRopa) {
                bloqueado = true;
                razonBloqueo = "Ya tienes contrato de ropa exclusivo. No puedes renovar este.";
            }

            html += `
            <div style="background:rgba(255,170,0,0.05);border:1px solid #ffaa00;border-radius:5px;padding:8px;margin-bottom:5px;">
                <div style="font-size:0.6em;color:#fff;margin-bottom:5px;">${c.logo} <b>${c.nombre}</b> quiere renegociar contigo.</div>
                ${bloqueado 
                    ? `<div style="font-size:0.55em;color:#f55;margin-bottom:5px;">🔒 ${razonBloqueo}</div>
                       <button onclick="cancelarRenovacion('${c.id}')" class="btn-main" style="border-color:#555;color:#888;font-size:0.6em;padding:5px;width:100%;">❌ DEJAR IR</button>`
                    : `<div style="display:flex;gap:5px;">
                        <button onclick="renovarPatrocinio('${c.id}')" class="btn-main" style="flex:1;border-color:#0f0;color:#0f0;font-size:0.6em;padding:5px;">✅ RENOVAR (${mInfo.duracion}T)</button>
                        <button onclick="cancelarRenovacion('${c.id}')" class="btn-main" style="flex:1;border-color:#555;color:#888;font-size:0.6em;padding:5px;">❌ DEJAR IR</button>
                       </div>`
                }
            </div>`;
        });
    }

    let ofertas = (p.agenciaOfertas && p.agenciaOfertas.season === p.season)
        ? p.agenciaOfertas.lista
        : null;
    if (!ofertas) {
        ofertas = getOfertasDisponibles();
        p.agenciaOfertas = { season: p.season, lista: ofertas };
    }

    html += `<div style="font-size:0.55em;color:gold;margin:10px 0 4px;letter-spacing:1px;">📨 NUEVAS OFERTAS DE ESTA TEMPORADA</div>`;

    if (ofertas.length === 0) {
        html += `<div style="font-size:0.6em;color:#555;text-align:center;padding:8px;">Sin ofertas. Sube tu Fama y Viralidad para atraer marcas.</div>`;
    } else {
        ofertas.forEach(m => {
            let bonusTxt = Object.entries(m.bonus || {}).map(([k,v]) => `+${v} ${k.toUpperCase()}`).join(' · ');
            let fameTxt  = m.fameBonus ? `+${m.fameBonus} FAMA` : '';
            let tierColor = m.tier === 4 ? 'gold' : (m.tier === 3 ? '#0ff' : (m.tier === 2 ? '#0f0' : '#888'));

            let bloqueado = false;
            let razonBloqueo = "";

            if (numActivos >= 3) {
                bloqueado = true;
                razonBloqueo = "Límite de 3 patrocinios activos.";
            } else if (m.esRopa && tieneRopa) {
                bloqueado = true;
                razonBloqueo = "Ya tienes contrato de exclusividad de ropa.";
            }

            html += `
            <div style="background:#0a0a0a;border:1px solid ${tierColor};border-radius:5px;padding:10px;margin-bottom:8px; opacity: ${bloqueado ? '0.6' : '1'};">
                <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:4px;">
                    <span style="font-size:0.75em;color:${tierColor};font-weight:bold;">${m.logo} ${m.nombre} ${m.esRopa ? '👕' : ''}</span>
                    <span style="font-size:0.65em;color:#fff;background:#222;padding:2px 6px;border-radius:3px;">${m.dinero}€/vic · ${m.duracion}T</span>
                </div>
                <div style="font-size:0.58em;color:#ccc;margin-bottom:5px;">${m.descripcion}</div>
                <div style="font-size:0.55em;color:#ff6600;margin-bottom:4px;">🔒 Req: ${m.minFame} Fama / ${m.minViralidad} Viralidad</div>
                ${bonusTxt || fameTxt ? `<div style="font-size:0.58em;color:#0f0;margin-bottom:4px;">${[bonusTxt, fameTxt].filter(Boolean).join(' · ')}</div>` : ''}
                <div style="font-size:0.55em;color:#0ff;margin-bottom:6px;">🎯 Objetivo: ${m.objetivoTexto} → +${m.objetivoPremio}€</div>
                
                ${bloqueado 
                    ? `<div style="font-size:0.6em;color:#f55;text-align:center;padding:4px;border:1px dashed #f55;">🔒 ${razonBloqueo}</div>`
                    : `<div style="display:flex;gap:5px;">
                        <button onclick="firmarPatrocinio('${m.id}')" class="btn-main" style="flex:1;border-color:${tierColor};color:${tierColor};font-size:0.6em;padding:6px;">✅ FIRMAR</button>
                        <button onclick="rechazarOferta('${m.id}')" class="btn-main" style="flex:1;border-color:#555;color:#888;font-size:0.6em;padding:6px;">❌ RECHAZAR</button>
                    </div>`
                }
            </div>`;
        });
    }

    html += `<button onclick="renderMenu()" class="btn-main" style="border-color:#555;color:#ccc;margin-top:5px;width:100%;">⬅ VOLVER</button>`;
    act.innerHTML = html;
}

function firmarPatrocinio(marcaId) {
    let m = MARCAS.find(x => x.id === marcaId);
    if (!m) return;
    if (!p.sponsorContratos)  p.sponsorContratos  = [];
    if (p.viralidad === undefined) p.viralidad = 0;

    let activos = p.sponsorContratos.filter(c => c.temporadasLeft > 0);
    if (activos.length >= 3) return;

    Object.entries(m.bonus || {}).forEach(([stat, val]) => {
        if (p[stat] !== undefined) p[stat] += val; 
        else if (stat === 'viralidad') p.viralidad += val;
    });
    
    if (m.fameBonus) {
        p.fame = Math.min(typeof FAME_MAX !== 'undefined' ? FAME_MAX : 100, p.fame + m.fameBonus);
    }
    
    p.sponsorContratos.push({
        id: m.id,
        nombre: m.nombre,
        logo: m.logo,
        dinero: m.dinero,
        bonus: m.bonus,
        temporadasLeft: m.duracion
    });

    p.sponsorObjetivo = {
        marcaId: m.id,
        marca: m.nombre,
        texto: m.objetivoTexto,
        stat: m.objetivoStat,
        val: m.objetivoVal,
        premio: m.objetivoPremio,
        cumplido: false,
        fallado: false,
        partidoBase: p.stats.matches,
    };

    if (p.agenciaOfertas && p.agenciaOfertas.lista) {
        p.agenciaOfertas.lista = p.agenciaOfertas.lista.filter(x => x.id !== m.id);
    }

    let bonusTxt = Object.entries(m.bonus || {}).map(([k,v]) => `+${v} ${k.toUpperCase()}`).join(', ');
    escribirDialogo(`🤝 <b>${m.nombre}</b> — Contrato firmado. ${bonusTxt ? bonusTxt + '.' : ''} Objetivo: <i>${m.objetivoTexto}</i>`);
    updateUI();
    guardarPartida();
    renderAgencia();
}

function romperContrato(marcaId) {
    if (p.money < 1000) {
        escribirDialogo(`❌ No puedes permitirte romper el contrato. Necesitas 1000€ para pagar la cláusula de rescisión.`);
        return;
    }

    let index = p.sponsorContratos.findIndex(c => c.id === marcaId);
    if (index === -1) return;

    let mInfo = MARCAS.find(x => x.id === marcaId);
    let tier = mInfo ? mInfo.tier : 1;
    
    // Calcular la penalización según el tier
    let penalizacion = [5, 8, 12, 15][tier - 1] || 5;

    // Cobrar la cláusula y aplicar el bajón de stats
    p.money -= 1000;
    p.fame = Math.max(0, p.fame - penalizacion);
    if (p.viralidad !== undefined) {
        p.viralidad = Math.max(0, p.viralidad - penalizacion);
    }

    let nombre = p.sponsorContratos[index].nombre;
    p.sponsorContratos.splice(index, 1); // Borramos el contrato

    // Si el objetivo activo era de esta marca, lo anulamos
    if (p.sponsorObjetivo && p.sponsorObjetivo.marcaId === marcaId) {
        p.sponsorObjetivo = null;
    }

    escribirDialogo(`✂️ Has roto tu contrato con <b>${nombre}</b>. Pagar la cláusula de 1000€ ha dolido, pero la mala prensa ha sido peor: pierdes ${penalizacion} de Fama y Viralidad.`);
    
    if (typeof updateUI === 'function') updateUI();
    guardarPartida();
    renderAgencia();
}

function renovarPatrocinio(marcaId) {
    let index = p.sponsorContratos.findIndex(c => c.id === marcaId);
    if (index === -1) return;

    let m = MARCAS.find(x => x.id === marcaId);
    if (!m) return;

    if (p.fame < m.minFame || (p.viralidad || 0) < m.minViralidad) {
        escribirDialogo(`❌ <b>${m.nombre}</b> ha retirado la oferta de renovación. Tu fama o viralidad actual es demasiado baja para ellos.`);
        p.sponsorContratos.splice(index, 1);
    } else {
        p.sponsorContratos[index].temporadasLeft = m.duracion;
        escribirDialogo(`🤝 Has renovado tu acuerdo con <b>${m.nombre}</b> por ${m.duracion} temporadas más.`);
    }

    guardarPartida();
    renderAgencia();
}

function cancelarRenovacion(marcaId) {
    let index = p.sponsorContratos.findIndex(c => c.id === marcaId);
    if (index > -1) {
        let nombre = p.sponsorContratos[index].nombre;
        p.sponsorContratos.splice(index, 1);
        escribirDialogo(`👋 Has decidido romper lazos con <b>${nombre}</b>.`);
    }
    guardarPartida();
    renderAgencia();
}

function rechazarOferta(marcaId) {
    if (!p.sponsorRechazadas) p.sponsorRechazadas = [];
    p.sponsorRechazadas.push(marcaId + '_' + p.season);
    
    if (p.agenciaOfertas && p.agenciaOfertas.lista) {
        p.agenciaOfertas.lista = p.agenciaOfertas.lista.filter(x => x.id !== marcaId);
    }
    guardarPartida();
    renderAgencia();
}

function checkObjetivoSponsor(gamePts, gameAst, gameReb, gameRob, gameTap, win) {
    if (!p.sponsorObjetivo || p.sponsorObjetivo.cumplido || p.sponsorObjetivo.fallado) return;
    let ob = p.sponsorObjetivo;

    if (p.stats.matches <= ob.partidoBase) return;

    let cumplido = false;
    switch(ob.stat) {
        case 'pts':           cumplido = gamePts >= ob.val; break;
        case 'ast':           cumplido = gameAst >= ob.val; break;
        case 'reb':           cumplido = gameReb >= ob.val; break;
        case 'rob':           cumplido = gameRob >= ob.val; break;
        case 'tap':           cumplido = gameTap >= ob.val; break;
        case 't3':            cumplido = (p.stats.t3m || 0) >= ob.val; break;
        case 'win':           cumplido = win; break;
        case 'rob_tap':       cumplido = (gameRob + gameTap) >= ob.val; break;
        case 'doble_doble':   cumplido = (gamePts >= 10 && (gameReb >= 10 || gameAst >= 10)); break;
        case 'triple_doble':  cumplido = (gamePts >= 10 && gameReb >= 10 && gameAst >= 10); break;
        case 'racha_victorias': cumplido = ((p.stats.winStreak || 0) >= ob.val); break;
        case 'playoffs_win':  cumplido = false; break; 
        default: cumplido = false;
    }

    if (cumplido) {
        ob.cumplido = true;
        p.money += ob.premio;
        p.fame = Math.min(typeof FAME_MAX !== 'undefined' ? FAME_MAX : 100, p.fame + 2);
        if(p.viralidad !== undefined) p.viralidad += 1; 
        escribirDialogo(`🎯 OBJETIVO CUMPLIDO: <b>${ob.marca}</b> — "${ob.texto}". ¡+${ob.premio}€ y +1 Viralidad!`);
        p.sponsorObjetivo = null;
    } else {
        let statsIndividuales = ['pts','ast','reb','rob','tap','t3','win','rob_tap','doble_doble','triple_doble'];
        if (statsIndividuales.includes(ob.stat) && p.stats.matches > ob.partidoBase) {
            ob.fallado = true;
            escribirDialogo(`❌ OBJETIVO FALLADO: <b>${ob.marca}</b> — "${ob.texto}". Sin bonus.`);
            p.sponsorObjetivo = null;
        }
    }
}

function procesarContratosFinTemporada() {
    if (!p.sponsorContratos) return;
    p.sponsorContratos.forEach(c => {
        if (c.temporadasLeft > 0) {
            c.temporadasLeft--;
            if (c.temporadasLeft === 0) {
                escribirDialogo(`⏳ Tu contrato con <b>${c.nombre}</b> ha terminado. ¡Revisa tu agencia de representación para negociar la renovación!`);
            }
        }
    });
    p.agenciaOfertas = null; 
}

function getSponsorBonus(win) {
    if (!p.sponsorContratos) return 0;
    return p.sponsorContratos
        .filter(c => c.temporadasLeft > 0)
        .reduce((sum, c) => sum + (win ? c.dinero : 0), 0);
}