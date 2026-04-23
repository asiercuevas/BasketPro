// =====================================================================
// 1. VARIABLES PRINCIPALES Y ESTADÍSTICAS
// =====================================================================
let p = {
    name: "", dorsal: "17", nat: "", team: "", pos: "Base", style: "equilibrado", 
    ovr: 65, money: 0, 
    tiro: 65, fisico: 65, manejo: 65, def: 65,
    stats: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, tcAttempt: 0, tcMake: 0, matches: 0 },
    sMatches: 0, fase: 0, role: "Titular",
    teamData: { v: 0, d: 0, pts: 0, conf: 0 },
    isPlayoffs: false, playoffStage: "", playoffRival: null, playoffOtherWinner: null
};

let leagueTable = []; 
let match = { 
    j: 0, numPlays: 5, pool: [], rival: null, 
    myScore: 0, rivScore: 0, finalBaseMyScore: 0, finalBaseRivScore: 0,
    pts: 0, ast:0, reb:0, rob:0, tap:0, tc:0, ok: 0 
};

const posMap = { "B": "Base", "E": "Escolta", "A": "Alero", "AP": "Ala-Pívot", "P": "Pívot", "6M": "6º Hombre", "BAN": "Banquillo" };

// =====================================================================
// 2. BASE DE DATOS JUNIOR
// =====================================================================
const DB_JUNIOR = { 
    n: "JUNIOR ESPAÑA", maxOvr: 75, 
    teams: [
        { name: "Real Madrid Jr.", ovr: 78, star: "Hugo G.", conf: 1, roster: [
            {n:"D. Almansa", p:"B", o:76}, {n:"M. Ndiaye", p:"E", o:77}, {n:"Hugo G.", p:"A", o:81}, {n:"E. Diagne", p:"AP", o:78}, {n:"I. Traore", p:"P", o:79}, {n:"K. Vide", p:"6M", o:75}, {n:"G. Boscafiori", p:"BAN", o:73}] },
        { name: "Estudiantes Jr.", ovr: 73, star: "Lucas", conf: 1, roster: [
            {n:"A. Perez", p:"B", o:72}, {n:"Lucas M.", p:"E", o:76}, {n:"J. Garcia", p:"A", o:73}, {n:"P. Orenga", p:"AP", o:74}, {n:"M. Ndongo", p:"P", o:74}, {n:"I. Cruz", p:"6M", o:71}, {n:"C. Blanco", p:"BAN", o:69}] },
        { name: "Baskonia Jr.", ovr: 74, star: "Joseba", conf: 1, roster: [
            {n:"Joseba K.", p:"B", o:77}, {n:"A. Hrabar", p:"E", o:74}, {n:"O. Diop", p:"A", o:73}, {n:"M. Ndiaye", p:"AP", o:75}, {n:"S. Faye", p:"P", o:74}, {n:"E. Ciss", p:"6M", o:71}, {n:"J. Iru", p:"BAN", o:68}] },
        { name: "Bilbao Basket Jr.", ovr: 69, star: "Iker", conf: 1, roster: [
            {n:"A. Gomez", p:"B", o:68}, {n:"Iker L.", p:"E", o:72}, {n:"U. Barandika", p:"A", o:69}, {n:"M. Ruiz", p:"AP", o:70}, {n:"K. Sylla", p:"P", o:68}, {n:"J. Echevarria", p:"6M", o:66}, {n:"D. Castro", p:"BAN", o:65}] },
        { name: "Zaragoza Jr.", ovr: 71, star: "Alejandro", conf: 1, roster: [
            {n:"P. Alocen", p:"B", o:70}, {n:"Alejandro M.", p:"E", o:74}, {n:"J. Minzer", p:"A", o:72}, {n:"B. Traore", p:"AP", o:71}, {n:"S. Vidarte", p:"P", o:70}, {n:"M. Aso", p:"6M", o:68}, {n:"L. Urdi", p:"BAN", o:66}] },
        
        { name: "Barça Jr.", ovr: 77, star: "Kasparas", conf: 2, roster: [
            {n:"M. Sarr", p:"B", o:76}, {n:"Kasparas J.", p:"E", o:80}, {n:"D. Ivisic", p:"A", o:77}, {n:"M. Keita", p:"AP", o:78}, {n:"S. Grujic", p:"P", o:76}, {n:"J. Villar", p:"6M", o:74}, {n:"A. Diez", p:"BAN", o:73}] },
        { name: "Joventut Jr.", ovr: 76, star: "I. Majadas", conf: 2, roster: [
            {n:"A. Ganal", p:"B", o:75}, {n:"R. Prey", p:"E", o:76}, {n:"I. Majadas", p:"A", o:79}, {n:"K. Domínguez", p:"AP", o:77}, {n:"M. Okeke", p:"P", o:75}, {n:"A. Lopez", p:"6M", o:73}, {n:"D. Pazo", p:"BAN", o:71}] },
        { name: "Valencia Basket Jr.", ovr: 75, star: "De Larrea", conf: 2, roster: [
            {n:"S. De Larrea", p:"B", o:78}, {n:"P. Navarro", p:"E", o:74}, {n:"D. Barbera", p:"A", o:76}, {n:"M. Codoñer", p:"AP", o:75}, {n:"S. Ousmane", p:"P", o:75}, {n:"L. Mari", p:"6M", o:72}, {n:"A. Campoy", p:"BAN", o:70}] },
        { name: "C.B. Berenguer Dalma", ovr: 70, star: "Marc", conf: 2, roster: [
            {n:"P. Roig", p:"B", o:69}, {n:"A. Ferrando", p:"E", o:68}, {n:"Marc P.", p:"A", o:73}, {n:"J. Miquel", p:"AP", o:71}, {n:"K. Diop", p:"P", o:70}, {n:"L. Grau", p:"6M", o:68}, {n:"H. Sanxo", p:"BAN", o:65}] },
        { name: "Amics Castelló", ovr: 62, star: "David", conf: 2, roster: [
            {n:"J. Perez", p:"B", o:61}, {n:"David M.", p:"E", o:65}, {n:"M. Ortiz", p:"A", o:62}, {n:"A. Ruiz", p:"AP", o:63}, {n:"L. Garcia", p:"P", o:62}, {n:"S. Lopez", p:"6M", o:60}, {n:"R. Soler", p:"BAN", o:59}] },
        
        { name: "Unicaja Jr.", ovr: 74, star: "Mario", conf: 3, roster: [
            {n:"G. Del Pino", p:"B", o:73}, {n:"Mario S.", p:"E", o:77}, {n:"M. Nuñez", p:"A", o:75}, {n:"A. Martinez", p:"AP", o:74}, {n:"B. Badji", p:"P", o:74}, {n:"J. Vicente", p:"6M", o:71}, {n:"D. Garcia", p:"BAN", o:69}] },
        { name: "UCAM Murcia Jr.", ovr: 69, star: "Pablo", conf: 3, roster: [
            {n:"J. Hurtado", p:"B", o:68}, {n:"A. Gomez", p:"E", o:67}, {n:"Pablo R.", p:"A", o:72}, {n:"M. Dieng", p:"AP", o:70}, {n:"F. Lopez", p:"P", o:69}, {n:"L. Mendez", p:"6M", o:66}, {n:"C. Diaz", p:"BAN", o:65}] },
        { name: "Paterna", ovr: 65, star: "Sento", conf: 3, roster: [
            {n:"Sento B.", p:"B", o:68}, {n:"J. Vila", p:"E", o:64}, {n:"M. Torres", p:"A", o:66}, {n:"P. Navarro", p:"AP", o:65}, {n:"L. Costa", p:"P", o:65}, {n:"D. Serra", p:"6M", o:63}, {n:"A. Ribes", p:"BAN", o:62}] },
        { name: "Godella", ovr: 64, star: "Joan", conf: 3, roster: [
            {n:"M. Boix", p:"B", o:63}, {n:"Joan F.", p:"E", o:67}, {n:"A. Giner", p:"A", o:65}, {n:"P. Sanchis", p:"AP", o:64}, {n:"J. Alapont", p:"P", o:64}, {n:"L. Cases", p:"6M", o:61}, {n:"H. Pons", p:"BAN", o:60}] },
        { name: "C.B. Torrent", ovr: 68, star: "Andrés", conf: 3, roster: [
            {n:"J. Miquel", p:"B", o:67}, {n:"A. Gimeno", p:"E", o:66}, {n:"Andrés M.", p:"A", o:71}, {n:"P. Company", p:"AP", o:69}, {n:"M. Ndiaye", p:"P", o:68}, {n:"S. Roig", p:"6M", o:66}, {n:"V. Baixauli", p:"BAN", o:64}] },

        { name: "Gran Canaria Jr.", ovr: 72, star: "F. Diener", conf: 4, roster: [
            {n:"F. Diener", p:"B", o:75}, {n:"A. Perez", p:"E", o:72}, {n:"J. Garcia", p:"A", o:73}, {n:"L. Ndongo", p:"AP", o:71}, {n:"M. Fall", p:"P", o:72}, {n:"D. Suarez", p:"6M", o:69}, {n:"C. Lopez", p:"BAN", o:68}] },
        { name: "Tenerife Jr.", ovr: 70, star: "Diego", conf: 4, roster: [
            {n:"J. Santos", p:"B", o:69}, {n:"Diego R.", p:"E", o:73}, {n:"A. Exposito", p:"A", o:71}, {n:"P. Delgado", p:"AP", o:70}, {n:"S. Diouf", p:"P", o:69}, {n:"L. Mendez", p:"6M", o:67}, {n:"D. Cabrera", p:"BAN", o:65}] },
        { name: "L'Horta", ovr: 63, star: "Pau", conf: 4, roster: [
            {n:"A. Soriano", p:"B", o:62}, {n:"J. Llorens", p:"E", o:61}, {n:"Pau V.", p:"A", o:66}, {n:"M. Raga", p:"AP", o:64}, {n:"S. Esteve", p:"P", o:63}, {n:"V. Peris", p:"6M", o:60}, {n:"J. Coll", p:"BAN", o:59}] },
        { name: "Obradoiro Jr.", ovr: 67, star: "Antón", conf: 4, roster: [
            {n:"A. Rey", p:"B", o:66}, {n:"Antón L.", p:"E", o:70}, {n:"J. Pazos", p:"A", o:68}, {n:"M. Gomez", p:"AP", o:67}, {n:"P. Niang", p:"P", o:67}, {n:"D. Souto", p:"6M", o:64}, {n:"C. Varela", p:"BAN", o:63}] },
        { name: "Betis Jr.", ovr: 68, star: "Luis", conf: 4, roster: [
            {n:"J. Rodriguez", p:"B", o:67}, {n:"A. Marin", p:"E", o:68}, {n:"Luis C.", p:"A", o:71}, {n:"M. Fofana", p:"AP", o:69}, {n:"S. Sylla", p:"P", o:68}, {n:"P. Garcia", p:"6M", o:65}, {n:"R. Lopez", p:"BAN", o:64}] }
    ]
};

const DB = [DB_JUNIOR, DB_ACB, DB_NBA];

// =====================================================================
// 3. SISTEMA DE AUTOGUARDADO (LOCALSTORAGE)
// =====================================================================

// Se ejecuta al cargar la página para ver si existe partida guardada
window.onload = function() {
    if(localStorage.getItem('basketSaveData')) {
        document.getElementById('btn-continuar').style.display = 'block';
    }
};

function guardarPartida() {
    const saveData = { jugador: p, liga: leagueTable };
    localStorage.setItem('basketSaveData', JSON.stringify(saveData));
}

function cargarPartida() {
    const data = JSON.parse(localStorage.getItem('basketSaveData'));
    if(data) {
        p = data.jugador;
        leagueTable = data.liga;
        document.getElementById('setup-screen').style.display = 'none';
        document.getElementById('main-game-ui').style.display = 'flex';
        evalRole(); updateUI(); renderMenu();
        escribirDialogo(`SISTEMA:<br>Partida cargada correctamente. ¡Bienvenido de nuevo, ${p.name}!`);
    }
}

// =====================================================================
// 4. CONFIGURACIÓN INICIAL Y MENÚS
// =====================================================================
function iniciarCarrera() {
    p.name = document.getElementById('in-name').value || "Jugador";
    p.dorsal = document.getElementById('in-dorsal').value || "17";
    p.nat = document.getElementById('in-nat').value;
    p.team = document.getElementById('in-team').value; 
    p.pos = document.getElementById('in-pos').value;
    p.style = document.getElementById('in-style').value;
    
    p.tiro = 65; p.fisico = 65; p.manejo = 65; p.def = 65;
    if (p.style === "tirador") { p.tiro += 12; p.fisico -= 5; p.def -= 5; }
    if (p.style === "defensor") { p.def += 12; p.tiro -= 5; p.manejo -= 5; }
    if (p.style === "organizador") { p.manejo += 12; p.fisico -= 5; p.tiro -= 2; }
    if (p.style === "atletico") { p.fisico += 12; p.tiro -= 5; p.manejo -= 5; }
    p.ovr = Math.round((p.tiro + p.fisico + p.manejo + p.def) / 4);

    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('main-game-ui').style.display = 'flex';
    
    prepararLiga(); evalRole(); updateUI(); renderMenu();
    escribirDialogo(`AGENTE:<br><br>Todo firmado. Jugarás de ${p.pos} con el #${p.dorsal} en ${p.team}. ¡A por la liga!`);
    guardarPartida(); // Guardamos justo al crear el jugador
}

function prepararLiga() {
    leagueTable = [];
    let myTeamObj = DB[p.fase].teams.find(t => t.name === p.team);
    p.teamData = { name: p.team, v: 0, d: 0, pts: 0, isPlayer: true, conf: myTeamObj?.conf };
    
    DB[p.fase].teams.forEach(t => {
        if(t.name !== p.team) {
            leagueTable.push({ name: t.name, ovr: t.ovr, star: t.star, v: 0, d: 0, pts: 0, isPlayer: false, conf: t.conf });
        }
    });
    leagueTable.push(p.teamData);
}

function getMyTeamOvr() {
    let obj = DB[p.fase].teams.find(t => t.name === p.team);
    return obj ? obj.ovr : 70; 
}

function evalRole() {
    if (p.fase === 0) p.role = "Titular"; 
    else p.role = (p.ovr >= getMyTeamOvr() - 4) ? "Titular" : "Suplente";
}

function getTrainCost() {
    if(p.ovr >= 90) return 1000;
    if(p.ovr >= 80) return 600;
    if(p.ovr >= 70) return 300;
    return 150;
}

function renderMenu() {
    let cost = getTrainCost();
    let btnText = p.isPlayoffs ? "▶ JUGAR PLAYOFFS" : "▶ JUGAR PARTIDO";
    document.getElementById('actions').innerHTML = `
        <button onclick="play()" class="btn-main" style="${p.isPlayoffs ? 'border-color: var(--success); color: var(--success);' : ''}">${btnText}</button>
        <button onclick="train()" class="btn-main">▶ ENTRENAR (${cost}€)</button>
        <button onclick="abrirPerfil()" class="btn-main" style="border-color: #555; color: #ccc;">📊 VER MI PERFIL</button>
        <button onclick="abrirEquipos()" class="btn-main" style="border-color: #555; color: #ccc;">⛹️ VER EQUIPOS</button>
        <button onclick="pedirTraspaso()" class="btn-main btn-trade" ${p.isPlayoffs ? 'disabled' : ''}>🔄 PEDIR TRASPASO</button>
    `;
    guardarPartida(); // Auto-guardado cada vez que volvemos al menú principal
}

function pedirTraspaso() {
    let options = DB[p.fase].teams.filter(t => t.name !== p.team && (p.fase > 0 || t.conf === p.teamData.conf));
    let html = `<div class="dialog-box log-entry"><span style="color:var(--accent);">AGENTE: ¿A qué equipo quieres irte?</span>
        <select id="trade-target" style="margin: 10px 0;">`;
    options.forEach(o => html += `<option value="${o.name}">${o.name} (OVR: ${o.ovr})</option>`);
    html += `</select><button onclick="ejecutarTraspaso()" class="btn-main">ENVIAR SOLICITUD</button><button onclick="cancelarTraspaso()" class="btn-main btn-trade">CANCELAR</button></div>`;
    document.getElementById('game-log').insertAdjacentHTML('beforeend', html); scrollToBottom();
}

function cancelarTraspaso() { escribirDialogo("AGENTE:<br>De acuerdo, nos quedamos donde estamos."); }

function ejecutarTraspaso() {
    let targetName = document.getElementById('trade-target').value;
    let targetObj = DB[p.fase].teams.find(t => t.name === targetName);
    if(p.ovr >= targetObj.ovr - 6) {
        p.team = targetName; prepararLiga(); p.sMatches = 0; p.stats.matches = 0; 
        p.stats.pts=0; p.stats.ast=0; p.stats.reb=0; p.stats.rob=0; p.stats.tap=0; p.stats.tcMake=0; p.stats.tcAttempt=0;
        evalRole(); escribirDialogo(`🚨 BOMBAZO: Traspasado a ${targetName}.`); updateUI();
        guardarPartida(); // Guardar tras traspaso
    } else escribirDialogo(`AGENTE:<br>El GM de ${targetName} dice que con ${p.ovr} OVR no tienes nivel para jugar allí.`);
}

// === PESTAÑA EQUIPOS ===
function abrirEquipos() {
    let select = document.getElementById('sel-equipo');
    select.innerHTML = '';
    DB[p.fase].teams.forEach(t => { select.innerHTML += `<option value="${t.name}">${t.name}</option>`; });
    select.value = p.team; 
    mostrarEquipoInfo();
    document.getElementById('teams-modal').style.display = 'block';
}

function cerrarEquipos() { document.getElementById('teams-modal').style.display = 'none'; }

function mostrarEquipoInfo() {
    let tName = document.getElementById('sel-equipo').value;
    let realTeamObj = DB[p.fase].teams.find(x => x.name === tName);
    let ovr = realTeamObj.ovr;
    
    let html = `<h3 style="color:var(--accent); margin-bottom:10px;">${tName.toUpperCase()} - <span style="color:#fff;">MEDIA: ${ovr}</span></h3><hr style="border-color:#333; margin-bottom:15px;">`;
    if(p.team === tName) html += `<p style="color:var(--success); margin-bottom: 5px;">🌟 <b>${p.name} (TÚ)</b> - ${p.pos} | <b>${p.ovr} OVR</b></p>`;
    
    if(realTeamObj.roster) {
        realTeamObj.roster.forEach(jug => {
            let icon = ["B","E","A","AP","P"].includes(jug.p) ? "👤" : "🔄";
            let color = (jug.n === realTeamObj.star) ? "color:var(--accent);" : "color:#ccc;";
            let extraIcon = (jug.n === realTeamObj.star) ? "⭐" : icon;
            html += `<p style="${color} margin-bottom:5px;">${extraIcon} ${jug.n} (${posMap[jug.p]}) | <b style="color:#fff;">${jug.o} OVR</b></p>`;
        });
    } else html += `<p style="color:#888;">Plantilla no disponible.</p>`;
    
    document.getElementById('team-roster-div').innerHTML = html;
}

// =====================================================================
// 5. MOTOR DE PARTIDO
// =====================================================================
function play() {
    evalRole(); updateUI();
    
    let posiblesRivales;
    if (p.isPlayoffs) posiblesRivales = [p.playoffRival];
    else if (p.fase === 0) posiblesRivales = leagueTable.filter(t => !t.isPlayer && t.conf === p.teamData.conf);
    else posiblesRivales = leagueTable.filter(t => !t.isPlayer);
    
    match.rival = posiblesRivales[p.sMatches % posiblesRivales.length];
    match.j = 0; match.pts = 0; match.ast = 0; match.reb = 0; match.rob = 0; match.tap = 0; match.tc = 0; match.ok = 0;
    
    let diff = getMyTeamOvr() - match.rival.ovr; 
    match.finalBaseMyScore = 65 + Math.floor(diff * 1.5) + Math.floor(Math.random() * 10);
    match.finalBaseRivScore = 65 - Math.floor(diff * 1.5) + Math.floor(Math.random() * 10); 
    if (p.fase === 0) match.finalBaseRivScore += 4;
    
    match.myScore = 0; match.rivScore = 0;
    match.numPlays = p.role === "Suplente" ? 3 : 5;
    match.pool = ["ATAQUE", "ATAQUE", "ATAQUE", "DEFENSA", "DEFENSA"].sort(() => Math.random() - 0.5).slice(0, match.numPlays);

    document.getElementById('live-scoreboard').style.display = 'flex';
    document.getElementById('sb-my-team').innerText = p.team.substring(0, 10).toUpperCase();
    document.getElementById('sb-rival-name').innerText = match.rival.name.substring(0, 10).toUpperCase();
    document.getElementById('sb-time').innerText = "1Q | 10:00";
    updateScoreboard();

    document.getElementById('game-log').innerHTML = ''; 
    let previaTexto = diff < -5 ? `Partido muy difícil hoy. ${match.rival.name} es superior.` : `Partido igualado. ¡A ganar!`;
    if(p.isPlayoffs) previaTexto = `¡Tensión máxima! Nos jugamos todo en los Playoffs.`;
    
    escribirDialogo(`RETRANSMISIÓN:<br><br>¡Balón al aire! Jugamos contra ${match.rival.name}, liderados por ${match.rival.star}.<br>${previaTexto}`);
    document.getElementById('actions').innerHTML = ''; 
    setTimeout(next, 2000);
}

function updateScoreboard() {
    document.getElementById('sb-my-pts').innerText = match.myScore;
    document.getElementById('sb-riv-pts').innerText = match.rivScore;
}

function getProbabilidad(accion) {
    let diffOvr = p.ovr - match.rival.ovr;
    let mod = Math.floor(diffOvr / 2); 
    if (p.fase === 0) mod -= 4; 
    
    let prob = (accion==='m')?p.fisico:(accion==='t')?p.tiro:(accion==='a')?p.manejo:(accion==='ro')?p.def-5:(accion==='ta')?p.def:Math.max(p.fisico,p.def)+10;
    return Math.max(5, Math.min(95, prob + mod));
}

function next() {
    if (match.j >= match.numPlays) return finish();
    
    let stepMy = Math.floor(match.finalBaseMyScore / match.numPlays);
    let stepRiv = Math.floor(match.finalBaseRivScore / match.numPlays);
    match.myScore += stepMy; match.rivScore += stepRiv;
    
    let times5 = ["1Q | 04:30", "2Q | 06:15", "3Q | 02:50", "4Q | 05:00", "4Q | 00:45"];
    let times3 = ["3Q | 03:00", "4Q | 06:10", "4Q | 00:54"];
    document.getElementById('sb-time').innerText = (match.numPlays === 5) ? times5[match.j] : times3[match.j];
    updateScoreboard();
    
    let tipo = match.pool[match.j];
    let html = `<div class="dialog-box log-entry"><span style="font-size:0.7em; color:var(--accent);">SITUACIÓN: ${tipo}</span>
        <div class="action-btns" id="btns-${match.j}">`;
    if (tipo === "ATAQUE") {
        html += `<button onclick="res('m', ${match.j})">MATE ESPECTACULAR [${getProbabilidad('m')}%]</button>
                 <button onclick="res('t', ${match.j})">TRIPLE [${getProbabilidad('t')}%]</button>
                 <button onclick="res('a', ${match.j})">ASISTIR [${getProbabilidad('a')}%]</button>`;
    } else {
        html += `<button onclick="res('ro', ${match.j})">INTENTAR ROBO [${getProbabilidad('ro')}%]</button>
                 <button onclick="res('ta', ${match.j})">TAPÓN [${getProbabilidad('ta')}%]</button>
                 <button onclick="res('re', ${match.j})">REBOTE DEF. [${getProbabilidad('re')}%]</button>`;
    }
    html += `</div><div id="res-${match.j}" style="margin-top: 15px; font-size: 0.7em;"></div></div>`;
    document.getElementById('game-log').insertAdjacentHTML('beforeend', html); scrollToBottom();
}

function res(tipo, id) {
    document.querySelectorAll(`#btns-${id} button`).forEach(b => b.disabled = true);
    let ok = (Math.random() * 100 < getProbabilidad(tipo)); 
    let msg = ""; let pts = 0;
    if(tipo==='m' || tipo==='t') p.stats.tcAttempt++;

    if(tipo==='m') { if(ok){ pts=2; match.tc++; p.stats.tcMake++; msg=`¡Póster brutal!`; } else msg=`Bloqueado por la defensa.`; }
    else if(tipo==='t') { if(ok){ pts=3; match.tc++; p.stats.tcMake++; msg=`¡Triple limpio!`; } else msg=`El tiro sale fuera.`; }
    else if(tipo==='a') { if(ok){ pts=2; match.ast++; msg=`Asistencia de manual.`; } else msg=`Pase interceptado.`; }
    else if(tipo==='ro') { if(ok){ pts=2; match.rob++; msg=`¡Robo y anota!`; } else msg=`Falta personal.`; }
    else if(tipo==='ta') { if(ok){ match.tap++; msg=`¡Tapón espectacular!`; } else msg=`Llega tarde, canasta rival.`; }
    else if(tipo==='re') { if(ok){ match.reb++; msg=`Rebote asegurado.`; } else msg=`Pierde el salto. Canasta.`; }

    if(ok) { match.ok++; match.myScore += (tipo!=='ta'&&tipo!=='re') ? pts : 0; match.pts += (tipo==='m'||tipo==='t')?pts:0; } 
    else { match.rivScore += 2; }

    updateScoreboard(); 
    document.getElementById(`res-${id}`).innerHTML = `<b style="color:${ok ? 'var(--success)' : 'var(--danger)'}">🎙️: "${msg}"</b>`;
    match.j++; scrollToBottom(); setTimeout(next, 1500);
}

// =====================================================================
// 6. FIN DEL PARTIDO Y DRAFT
// =====================================================================
function finish() {
    document.getElementById('live-scoreboard').style.display = 'none';
    let minMult = p.role === "Titular" ? 1.5 : 0.8; 

    let gamePts = match.pts + Math.floor((Math.random() * 4 + (p.ovr / 15)) * minMult);
    let gameAst = match.ast + Math.floor(Math.random() * 3 * minMult);
    let gameReb = match.reb + Math.floor(Math.random() * 4 * minMult);
    let gameRob = match.rob + Math.floor(Math.random() * 2 * minMult);
    let gameTap = match.tap + Math.floor(Math.random() * 2 * minMult);

    p.stats.tcAttempt += Math.floor(gamePts/2) + Math.floor(Math.random()*4);
    p.stats.tcMake += Math.floor(gamePts / 2); 

    let win = match.myScore > match.rivScore;
    if(match.myScore === match.rivScore) { if(Math.random()>0.4){ match.myScore+=2; win=true; } else { match.rivScore+=2; win=false; } }

    if (!p.isPlayoffs) {
        if(win) { p.teamData.v++; match.rival.d++; } else { p.teamData.d++; match.rival.v++; }
        leagueTable.forEach(r => { 
            if(!r.isPlayer && r.name !== match.rival.name && (p.fase > 0 || r.conf === p.teamData.conf)) {
                r.pts += Math.floor(15 + Math.random()*15); 
                if(Math.random() > 0.5) r.v++; else r.d++; 
            }
        });
    }

    p.stats.pts += gamePts; p.stats.ast += gameAst; p.stats.reb += gameReb; p.stats.rob += gameRob; p.stats.tap += gameTap;
    p.stats.matches++; p.sMatches++; p.teamData.pts += gamePts;
    p.money += (win ? 300 : 100) + (gamePts >= 20 ? 100 : 0); 
    
    let endMsg = win ? `¡Victoria de ${p.team}!` : `Derrota para ${p.team}...`;
    let endHtml = `<div class="dialog-box log-entry" style="text-align:center; border-color:${win?'var(--success)':'var(--danger)'}">
        <p style="font-size:1.2em; margin-bottom:10px;">${match.myScore} - ${match.rivScore}</p>
        <p style="font-size:0.7em; color:${win?'var(--success)':'var(--danger)'}; font-weight:bold;">${endMsg}</p>
        <p style="font-size:0.55em; color:#aaa; margin-top:10px;">Tus stats: ${gamePts} PTS | ${gameAst} AST | ${gameReb} REB</p>
    </div>`;
    document.getElementById('game-log').insertAdjacentHTML('beforeend', endHtml); scrollToBottom(); updateUI();

    let numEquiposConf = leagueTable.filter(t => t.conf === p.teamData.conf).length;
    let partidosTemporada = (p.fase === 0) ? (numEquiposConf - 1) * 2 : (leagueTable.length - 1);

    if (p.isPlayoffs) {
        if (p.playoffStage === "SEMIFINAL") {
            if (win) {
                p.playoffStage = "GRAN FINAL"; p.playoffRival = p.playoffOtherWinner;
                escribirDialogo(`🏆 ¡A LA FINAL! Tras una dura semifinal, nos jugamos el título contra ${p.playoffRival.name}.`);
                setTimeout(renderMenu, 4000);
            } else {
                escribirDialogo(`❌ Eliminados en Semifinales. Un golpe muy duro para el equipo.`);
                setTimeout(draft, 4000);
            }
        } else if (p.playoffStage === "GRAN FINAL") {
            if(win) escribirDialogo(`🥇 ¡CAMPEONES JUNIOR! Has liderado a tu equipo hasta el título.`);
            else escribirDialogo(`🥈 Perdemos la final... Hemos estado tan cerca. Cabeza alta.`);
            setTimeout(draft, 4000);
        }
    } else {
        if(p.sMatches >= partidosTemporada) {
            if (p.fase === 0) {
                let miConfTeams = leagueTable.filter(t => t.conf === p.teamData.conf).sort((a,b)=>b.v - a.v);
                if(miConfTeams[0].name === p.team) {
                    p.isPlayoffs = true; p.playoffStage = "SEMIFINAL";
                    let w1 = leagueTable.filter(t=>t.conf===1).sort((a,b)=>b.v-a.v)[0];
                    let w2 = leagueTable.filter(t=>t.conf===2).sort((a,b)=>b.v-a.v)[0];
                    let w3 = leagueTable.filter(t=>t.conf===3).sort((a,b)=>b.v-a.v)[0];
                    let w4 = leagueTable.filter(t=>t.conf===4).sort((a,b)=>b.v-a.v)[0];
                    let ganadores = [w1,w2,w3,w4].filter(w => w && w.name !== p.team);
                    p.playoffRival = ganadores[0]; p.playoffOtherWinner = (Math.random() > 0.5) ? ganadores[1] : ganadores[2];
                    escribirDialogo(`🌟 ¡CAMPEONES DE CONFERENCIA! Entramos a Playoffs. Rival Semis: ${p.playoffRival.name}.`);
                    setTimeout(renderMenu, 5000);
                } else {
                    escribirDialogo(`No hemos logrado ganar la conferencia. Nos quedamos fuera de Playoffs. Temporada terminada.`);
                    setTimeout(draft, 4000);
                }
            } else { setTimeout(draft, 3000); }
        } else { setTimeout(renderMenu, 3000); }
    }
}

function draft() {
    document.getElementById('actions').innerHTML = '';
    let msg = p.fase === 0 ? `Temporada Junior finalizada.<br>Las franquicias ACB han mostrado interés en ti.` : 
             (p.fase === 1 ? `Has dominado la ACB. La directiva de la NBA te invita al DRAFT.` : `Temporada NBA concluida.<br>Tu legado continúa.`);
    let btnText = p.fase === 0 ? "FICHAR POR EQUIPO ACB" : (p.fase === 1 ? "ASISTIR AL DRAFT NBA" : "NUEVA TEMPORADA");
    let draftHtml = `<div class="dialog-box log-entry" style="text-align:center; border-color:var(--accent);">
        <p style="font-size:0.7em; line-height:1.8; color:#fff;">${msg}</p><button onclick="ascender()" class="btn-main" style="margin-top:15px;">${btnText}</button></div>`;
    document.getElementById('game-log').insertAdjacentHTML('beforeend', draftHtml); scrollToBottom();
    guardarPartida(); // Guardar antes de elegir ascender
}

function ascender() {
    if(p.fase < 2) p.fase++; 
    p.isPlayoffs = false; p.playoffStage = ""; 
    let options = DB[p.fase].teams;
    let html = `<div class="dialog-box log-entry"><span style="color:var(--accent);">AGENTE: Tienes ofertas en la ${DB[p.fase].n}. ¿Dónde quieres jugar?</span>
        <select id="draft-target" style="margin: 10px 0;">`;
    options.forEach(o => html += `<option value="${o.name}">${o.name}</option>`);
    html += `</select><button onclick="ejecutarAscenso()" class="btn-main">FIRMAR CONTRATO</button></div>`;
    document.getElementById('game-log').innerHTML = html; document.getElementById('actions').innerHTML = '';
}

function ejecutarAscenso() {
    p.team = document.getElementById('draft-target').value;
    p.sMatches = 0; p.stats.matches = 0;
    p.stats.pts=0; p.stats.ast=0; p.stats.reb=0; p.stats.rob=0; p.stats.tap=0; p.stats.tcAttempt=0; p.stats.tcMake=0;
    prepararLiga(); evalRole(); updateUI(); 
    document.getElementById('game-log').innerHTML = '';
    escribirDialogo(`NOTICIA:<br><br>Oficial. ${p.name} jugará en ${p.team}. La exigencia competitiva será máxima en la ${DB[p.fase].n}.`);
    renderMenu();
    guardarPartida(); // Guardar tras firmar contrato
}

function train() {
    let cost = getTrainCost();
    if(p.money < cost) return alert(`Fondos insuficientes. El coste es de ${cost}€.`);
    if(p.ovr >= DB[p.fase].maxOvr) return alert(`Límite OVR alcanzado en esta liga (${DB[p.fase].maxOvr}).`);
    p.money -= cost; p.fisico += 1; p.tiro += 1; p.def += 1; p.manejo += 1;
    p.ovr = Math.min(DB[p.fase].maxOvr, Math.round((p.fisico+p.tiro+p.def+p.manejo)/4));
    evalRole(); updateUI(); renderMenu(); 
    escribirDialogo(`ENTRENAMIENTO:<br><br>Atributos mejorados. Nueva Media: ${p.ovr} OVR.`);
}

function abrirPerfil() {
    document.getElementById('pr-tiro').innerText = p.tiro; document.getElementById('pr-fisico').innerText = p.fisico;
    document.getElementById('pr-manejo').innerText = p.manejo; document.getElementById('pr-def').innerText = p.def;
    document.getElementById('pr-ovr').innerText = p.ovr; document.getElementById('pr-matches').innerText = p.stats.matches;
    document.getElementById('pr-pts').innerText = p.stats.pts; document.getElementById('pr-ast').innerText = p.stats.ast;
    document.getElementById('pr-reb').innerText = p.stats.reb; document.getElementById('pr-rob').innerText = p.stats.rob;
    document.getElementById('pr-tap').innerText = p.stats.tap; document.getElementById('profile-modal').style.display = 'block';
}
function cerrarPerfil() { document.getElementById('profile-modal').style.display = 'none'; }

function updateUI() {
    document.getElementById('ui-name').innerText = p.name.toUpperCase();
    document.getElementById('ui-dorsal').innerText = "#" + p.dorsal;
    document.getElementById('ui-nat').innerText = p.nat.split(" ")[0];
    document.getElementById('ui-team').innerText = `${p.team.toUpperCase()} | ${p.pos.toUpperCase()}`;
    document.getElementById('ui-money').innerText = p.money + "€";
    document.getElementById('ui-ovr').innerText = p.ovr;
    document.getElementById('ui-liga').innerText = p.isPlayoffs ? "PLAYOFFS JUNIOR" : DB[p.fase].n;
    
    let rolBadge = document.getElementById('ui-rol');
    rolBadge.innerText = p.role.toUpperCase();
    rolBadge.style.color = p.role === "Titular" ? "var(--accent)" : "var(--danger)";

    let m = p.stats.matches || 1;
    document.getElementById('st-ppp').innerText = (p.stats.pts/m).toFixed(1);
    document.getElementById('st-app').innerText = (p.stats.ast/m).toFixed(1);
    document.getElementById('st-rpp').innerText = (p.stats.reb/m).toFixed(1);
    document.getElementById('st-ropp').innerText = (p.stats.rob/m).toFixed(1);
    document.getElementById('st-tpp').innerText = (p.stats.tap/m).toFixed(1);
    
    let tcPerc = p.stats.tcAttempt > 0 ? Math.round((p.stats.tcMake / p.stats.tcAttempt) * 100) : 0;
    document.getElementById('st-tc').innerText = tcPerc + "%";

    let eqFiltrados = p.fase === 0 && !p.isPlayoffs ? leagueTable.filter(t => t.conf === p.teamData.conf) : leagueTable;

    let tpts = eqFiltrados.map(t => ({ name: t.isPlayer ? "TÚ" : t.star, pts: t.pts })).sort((a,b) => b.pts - a.pts);
    document.getElementById('table-pts').innerHTML = tpts.slice(0,5).map((r,i) => `<tr class="${r.name === 'TÚ' ? 'my-row':''}"><td>${i+1}.${r.name.substring(0,10)}</td><td style="text-align:right">${(r.pts/m).toFixed(1)}</td></tr>`).join('');
    
    let eqData = [...eqFiltrados].sort((a,b) => b.v - a.v);
    document.getElementById('table-vd').innerHTML = eqData.map((r,i) => `<tr class="${r.isPlayer ? 'my-row':''}"><td>${i+1}.${r.name.substring(0,12)}</td><td style="text-align:right">${r.v}-${r.d}</td></tr>`).join('');
}

function escribirDialogo(txt) {
    document.getElementById('game-log').insertAdjacentHTML('beforeend', `<div class='dialog-box log-entry'><p style="font-size:0.7em; line-height:1.6; color:#ccc;">${txt}</p></div>`);
    scrollToBottom();
}

function scrollToBottom() { let view = document.getElementById('game-view'); view.scrollTo({ top: view.scrollHeight, behavior: 'smooth' }); }