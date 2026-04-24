// =====================================================================
// 1. VARIABLES PRINCIPALES Y ESTADÍSTICAS DEL LEGADO
// =====================================================================
let p = {
    name: "", rivalName: "Riki", personality: "deportista", dorsal: "17", height: 195, nat: "", team: "", pos: "Base", style: "equilibrado", 
    ovr: 65, money: 0, season: 1,
    fame: 10, rings: 0, mvps: 0, allStars: 0, dpoys: 0, hasShoe: false, rivalReconciled: false,
    tiro: 65, fisico: 65, bandeja: 65, manejo: 65, def: 65,
    stats: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, tcAttempt: 0, tcMake: 0, matches: 0 },
    history: {
        junior: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, matches: 0 },
        acb: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, matches: 0 },
        nba: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, matches: 0 }
    },
    sMatches: 0, fase: 0, role: "Titular",
    teamData: { v: 0, d: 0, pts: 0, conf: 0, name: "" },
    isPlayoffs: false, playoffStage: "", playoffRival: null, playoffOtherWinner: null,
    rivalTeam: "" 
};

let leagueTable = []; 
let match = { 
    j: 0, numPlays: 5, pool: [], rival: null, 
    myScore: 0, rivScore: 0, finalBaseMyScore: 0, finalBaseRivScore: 0,
    pts: 0, ast:0, reb:0, rob:0, tap:0, tc:0, ok: 0, ritmo: "NORMAL"
};

const posMap = { "B": "Base", "E": "Escolta", "A": "Alero", "AP": "Ala-Pívot", "P": "Pívot", "6M": "6º Hombre", "BAN": "Banquillo" };

// =====================================================================
// 2. BASE DE DATOS JUNIOR
// =====================================================================
const DB_JUNIOR = { 
    n: "JUNIOR ESPAÑA", maxOvr: 75, 
    teams: [
        { name: "Real Madrid Jr.", ovr: 78, star: "Hugo G.", conf: 1, roster: [{n:"D. Almansa", p:"B", o:76}, {n:"M. Ndiaye", p:"E", o:77}, {n:"Hugo G.", p:"A", o:81}, {n:"E. Diagne", p:"AP", o:78}, {n:"I. Traore", p:"P", o:79}] },
        { name: "Estudiantes Jr.", ovr: 73, star: "Lucas", conf: 1, roster: [{n:"A. Perez", p:"B", o:72}, {n:"Lucas M.", p:"E", o:76}, {n:"J. Garcia", p:"A", o:73}, {n:"P. Orenga", p:"AP", o:74}, {n:"M. Ndongo", p:"P", o:74}] },
        { name: "Baskonia Jr.", ovr: 74, star: "Joseba", conf: 1, roster: [{n:"Joseba K.", p:"B", o:77}, {n:"A. Hrabar", p:"E", o:74}, {n:"O. Diop", p:"A", o:73}, {n:"M. Ndiaye", p:"AP", o:75}, {n:"S. Faye", p:"P", o:74}] },
        { name: "Bilbao Basket Jr.", ovr: 69, star: "Iker", conf: 1, roster: [{n:"A. Gomez", p:"B", o:68}, {n:"Iker L.", p:"E", o:72}, {n:"U. Barandika", p:"A", o:69}, {n:"M. Ruiz", p:"AP", o:70}, {n:"K. Sylla", p:"P", o:68}] },
        { name: "Zaragoza Jr.", ovr: 71, star: "Alejandro", conf: 1, roster: [{n:"P. Alocen", p:"B", o:70}, {n:"Alejandro M.", p:"E", o:74}, {n:"J. Minzer", p:"A", o:72}, {n:"B. Traore", p:"AP", o:71}, {n:"S. Vidarte", p:"P", o:70}] },
        { name: "Barça Jr.", ovr: 77, star: "Kasparas", conf: 2, roster: [{n:"M. Sarr", p:"B", o:76}, {n:"Kasparas J.", p:"E", o:80}, {n:"D. Ivisic", p:"A", o:77}, {n:"M. Keita", p:"AP", o:78}, {n:"S. Grujic", p:"P", o:76}] },
        { name: "Joventut Jr.", ovr: 76, star: "I. Majadas", conf: 2, roster: [{n:"A. Ganal", p:"B", o:75}, {n:"R. Prey", p:"E", o:76}, {n:"I. Majadas", p:"A", o:79}, {n:"K. Domínguez", p:"AP", o:77}, {n:"M. Okeke", p:"P", o:75}] },
        { name: "Valencia Basket Jr.", ovr: 75, star: "De Larrea", conf: 2, roster: [{n:"S. De Larrea", p:"B", o:78}, {n:"P. Navarro", p:"E", o:74}, {n:"D. Barbera", p:"A", o:76}, {n:"M. Codoñer", p:"AP", o:75}, {n:"S. Ousmane", p:"P", o:75}] },
        { name: "C.B. Berenguer Dalma", ovr: 70, star: "Marc", conf: 2, roster: [{n:"P. Roig", p:"B", o:69}, {n:"A. Ferrando", p:"E", o:68}, {n:"Marc P.", p:"A", o:73}, {n:"J. Miquel", p:"AP", o:71}, {n:"K. Diop", p:"P", o:70}] },
        { name: "Amics Castelló", ovr: 62, star: "David", conf: 2, roster: [{n:"J. Perez", p:"B", o:61}, {n:"David M.", p:"E", o:65}, {n:"M. Ortiz", p:"A", o:62}, {n:"A. Ruiz", p:"AP", o:63}, {n:"L. Garcia", p:"P", o:62}] },
        { name: "Unicaja Jr.", ovr: 74, star: "Mario", conf: 3, roster: [{n:"G. Del Pino", p:"B", o:73}, {n:"Mario S.", p:"E", o:77}, {n:"M. Nuñez", p:"A", o:75}, {n:"A. Martinez", p:"AP", o:74}, {n:"B. Badji", p:"P", o:74}] },
        { name: "UCAM Murcia Jr.", ovr: 69, star: "Pablo", conf: 3, roster: [{n:"J. Hurtado", p:"B", o:68}, {n:"A. Gomez", p:"E", o:67}, {n:"Pablo R.", p:"A", o:72}, {n:"M. Dieng", p:"AP", o:70}, {n:"F. Lopez", p:"P", o:69}] },
        { name: "Paterna", ovr: 65, star: "Sento", conf: 3, roster: [{n:"Sento B.", p:"B", o:68}, {n:"J. Vila", p:"E", o:64}, {n:"M. Torres", p:"A", o:66}, {n:"P. Navarro", p:"AP", o:65}, {n:"L. Costa", p:"P", o:65}] },
        { name: "Godella", ovr: 64, star: "Joan", conf: 3, roster: [{n:"M. Boix", p:"B", o:63}, {n:"Joan F.", p:"E", o:67}, {n:"A. Giner", p:"A", o:65}, {n:"P. Sanchis", p:"AP", o:64}, {n:"J. Alapont", p:"P", o:64}] },
        { name: "C.B. Torrent", ovr: 68, star: "Andrés", conf: 3, roster: [{n:"J. Miquel", p:"B", o:67}, {n:"A. Gimeno", p:"E", o:66}, {n:"Andrés M.", p:"A", o:71}, {n:"P. Company", p:"AP", o:69}, {n:"M. Ndiaye", p:"P", o:68}] },
        { name: "Gran Canaria Jr.", ovr: 72, star: "F. Diener", conf: 4, roster: [{n:"F. Diener", p:"B", o:75}, {n:"A. Perez", p:"E", o:72}, {n:"J. Garcia", p:"A", o:73}, {n:"L. Ndongo", p:"AP", o:71}, {n:"M. Fall", p:"P", o:72}] },
        { name: "Tenerife Jr.", ovr: 70, star: "Diego", conf: 4, roster: [{n:"J. Santos", p:"B", o:69}, {n:"Diego R.", p:"E", o:73}, {n:"A. Exposito", p:"A", o:71}, {n:"P. Delgado", p:"AP", o:70}, {n:"S. Diouf", p:"P", o:69}] },
        { name: "L'Horta", ovr: 63, star: "Pau", conf: 4, roster: [{n:"A. Soriano", p:"B", o:62}, {n:"J. Llorens", p:"E", o:61}, {n:"Pau V.", p:"A", o:66}, {n:"M. Raga", p:"AP", o:64}, {n:"S. Esteve", p:"P", o:63}] },
        { name: "Obradoiro Jr.", ovr: 67, star: "Antón", conf: 4, roster: [{n:"A. Rey", p:"B", o:66}, {n:"Antón L.", p:"E", o:70}, {n:"J. Pazos", p:"A", o:68}, {n:"M. Gomez", p:"AP", o:67}, {n:"P. Niang", p:"P", o:67}] },
        { name: "Betis Jr.", ovr: 68, star: "Luis", conf: 4, roster: [{n:"J. Rodriguez", p:"B", o:67}, {n:"A. Marin", p:"E", o:68}, {n:"Luis C.", p:"A", o:71}, {n:"M. Fofana", p:"AP", o:69}, {n:"S. Sylla", p:"P", o:68}] }
    ]
};

const DB = [DB_JUNIOR, DB_ACB, DB_NBA];

// =====================================================================
// FUNCIÓN DE RIVALIDAD DINÁMICA
// =====================================================================
function ubicarRival() {
    if(!p.rivalName) return;
    
    DB[p.fase].teams.forEach(t => {
        if (t.star === p.rivalName) t.star = "Estrella";
        if (t.roster) {
            t.roster.forEach(r => {
                if (r.n === p.rivalName) { r.n = "Veterano"; r.o -= 5; } 
            });
        }
    });

    let rivalOvr = Math.min(DB[p.fase].maxOvr, p.ovr + 1);

    if (p.fase === 0) {
        p.rivalTeam = p.team;
    } else {
        if (!p.rivalTeam || p.rivalTeam === p.team || !DB[p.fase].teams.find(t => t.name === p.rivalTeam)) {
            let posibles = DB[p.fase].teams.filter(t => t.name !== p.team);
            if (rivalOvr >= (DB[p.fase].maxOvr - 5) || p.fame >= 60) {
                posibles = posibles.sort((a, b) => b.ovr - a.ovr).slice(0, 5);
            } else {
                let equiposAcordes = posibles.filter(t => rivalOvr >= t.ovr - 4);
                if(equiposAcordes.length > 0) posibles = equiposAcordes;
            }
            let randomTeam = posibles[Math.floor(Math.random() * posibles.length)];
            p.rivalTeam = randomTeam.name;
        }
    }

    let tDB = DB[p.fase].teams.find(t => t.name === p.rivalTeam);
    if (tDB && tDB.roster && tDB.roster.length > 0) {
        let slot = (p.rivalTeam === p.team) ? 1 : 0; 
        tDB.roster[slot].n = p.rivalName;
        tDB.roster[slot].o = rivalOvr;
        tDB.star = p.rivalName; 
        
        if(leagueTable.length > 0) {
            let leagueTeam = leagueTable.find(t => t.name === p.rivalTeam);
            if(leagueTeam) leagueTeam.star = p.rivalName;
        }
    }
}

// =====================================================================
// 3. SISTEMA DE AUTOGUARDADO Y CARGA
// =====================================================================
window.onload = function() {
    if(localStorage.getItem('basketSaveData')) {
        document.getElementById('btn-continuar').style.display = 'block';
    }
};

function guardarPartida() {
    const saveData = { jugador: p, liga: leagueTable, historia: (typeof StorySystem !== 'undefined') ? StorySystem.events : [] };
    localStorage.setItem('basketSaveData', JSON.stringify(saveData));
}

function cargarPartida() {
    const data = JSON.parse(localStorage.getItem('basketSaveData'));
    if(data) {
        p = data.jugador;
        leagueTable = data.liga;
        if(typeof StorySystem !== 'undefined') StorySystem.events = data.historia || [];
        p.teamData = leagueTable.find(t => t.name === p.team);
        
        if (p.bandeja === undefined) p.bandeja = Math.floor((p.fisico + p.manejo) / 2);
        if (p.fame === undefined) { p.fame = 10; p.rings = 0; p.mvps = 0; p.allStars = 0; p.dpoys = 0; p.hasShoe = false; p.rivalReconciled = false; }
        if (p.height === undefined) p.height = 195;
        if (p.nat === undefined) p.nat = "🇪🇸 ESP";
        if (p.rivalTeam === undefined) p.rivalTeam = "";
        
        p.ovr = Math.round((p.tiro + p.fisico + p.manejo + p.def + p.bandeja) / 5);

        document.getElementById('setup-screen').style.display = 'none';
        document.getElementById('main-game-ui').style.display = 'flex';
        
        ubicarRival(); 
        evalRole(); updateUI(); renderMenu();
        escribirDialogo(`SISTEMA:<br>Partida cargada. Te quedan ${18 - p.season} temporadas para el retiro.`);
    }
}

// =====================================================================
// 4. INICIO DE LEYENDA (NUEVA PARTIDA)
// =====================================================================
function iniciarCarrera() {
    p.name = document.getElementById('in-name').value || "Jugador";
    p.rivalName = document.getElementById('in-rival-name').value || "Riki";
    p.dorsal = document.getElementById('in-dorsal').value || "17";
    p.height = document.getElementById('in-height').value || 195;
    p.nat = document.getElementById('in-nat').value || "🇪🇸 ESP";
    p.team = document.getElementById('in-team').value; 
    p.pos = document.getElementById('in-pos').value;
    p.style = document.getElementById('in-style').value;
    p.personality = document.getElementById('in-personality').value;
    
    p.tiro = 65; p.fisico = 65; p.manejo = 65; p.def = 65; p.bandeja = 65;
    
    if (p.style === "mate_tapon") { p.fisico += 12; p.def += 10; p.tiro -= 8; p.manejo -= 4; p.bandeja -= 2; }
    if (p.style === "tiro_robo") { p.tiro += 12; p.def += 10; p.fisico -= 8; p.manejo -= 4; p.bandeja -= 4; }
    if (p.style === "manejo_bandeja") { p.manejo += 12; p.bandeja += 12; p.fisico += 4; p.def -= 8; p.tiro -= 4; }
    if (p.style === "tiro_manejo") { p.tiro += 12; p.manejo += 10; p.bandeja += 4; p.def -= 8; p.fisico -= 4; }
    
    if (p.personality === "fiestero") { p.fame += 20; p.money += 500; }
    
    p.ovr = Math.round((p.tiro + p.fisico + p.manejo + p.def + p.bandeja) / 5);

    document.getElementById('setup-screen').style.display = 'none';
    document.getElementById('main-game-ui').style.display = 'flex';
    
    prepararLiga(); evalRole(); updateUI(); renderMenu();
    escribirDialogo(`AGENTE:<br>Jugarás de ${p.pos} con el #${p.dorsal} en ${p.team}. ¡A por la Temporada ${p.season}!`);
    
    if(typeof StorySystem !== 'undefined') StorySystem.checkEvents();
    guardarPartida();
}

function prepararLiga() {
    ubicarRival(); 
    leagueTable = [];
    let phaseDB = DB[p.fase].teams;
    phaseDB.forEach((t, i) => {
        let conf = t.conf || 1;
        if (p.fase === 1 || p.fase === 2) conf = (i < phaseDB.length / 2) ? 1 : 2;
        let equipo = { name: t.name, ovr: t.ovr, star: t.star, v: 0, d: 0, pts: 0, conf: conf, isPlayer: (t.name === p.team) };
        if (equipo.isPlayer) p.teamData = equipo;
        leagueTable.push(equipo);
    });
}

function getMyTeamOvr() { let obj = DB[p.fase].teams.find(t => t.name === p.team); return obj ? obj.ovr : 70; }
function evalRole() {
    let equipoOvr = getMyTeamOvr();
    if (p.ovr >= equipoOvr + 3) p.role = "Estrella";
    else if (p.ovr >= equipoOvr - 4) p.role = "Titular";
    else p.role = "Suplente";
}
function getTrainCost() { return p.ovr >= 90 ? 1000 : (p.ovr >= 80 ? 600 : (p.ovr >= 70 ? 300 : 150)); }

// =====================================================================
// 5. MENÚS Y TRASPASOS
// =====================================================================
function renderMenu() {
    let cost = getTrainCost();
    let costMod = p.personality === "deportista" ? Math.floor(cost * 0.8) : cost;
    let btnText = p.isPlayoffs ? `▶ JUGAR ${p.playoffStage}` : "▶ JUGAR PARTIDO";
    
    document.getElementById('actions').innerHTML = `
        <button onclick="play()" class="btn-main" style="${p.isPlayoffs ? 'border-color: gold; color: gold;' : ''}">${btnText}</button>
        <button onclick="train()" class="btn-main">▶ ENTRENAR (${costMod}€)</button>
        <button onclick="abrirPerfil()" class="btn-main" style="border-color: #555; color: #ccc;">📊 PERFIL Y G.O.A.T.</button>
        <button onclick="abrirEquipos()" class="btn-main" style="border-color: #555; color: #ccc;">⛹️ VER EQUIPOS</button>
        <button onclick="pedirTraspaso()" class="btn-main btn-trade" ${p.isPlayoffs ? 'disabled' : ''}>🔄 PEDIR TRASPASO</button>
        <button onclick="retirarse(true)" class="btn-main" style="background:#400; border-color:#f00; margin-top:15px; font-size:0.8em;">⚠️ FORZAR RETIRO</button>
    `;
    guardarPartida();
}

function pedirTraspaso() {
    let options = DB[p.fase].teams.filter(t => t.name !== p.team);
    let html = `<div class="dialog-box log-entry"><span style="color:var(--accent);">AGENTE: ¿A qué equipo quieres irte? (Se reiniciará tu temporada)</span>
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
        let claveLiga = p.fase === 0 ? "junior" : (p.fase === 1 ? "acb" : "nba");
        p.history[claveLiga].pts += p.stats.pts; p.history[claveLiga].ast += p.stats.ast; p.history[claveLiga].reb += p.stats.reb;
        p.history[claveLiga].rob += p.stats.rob; p.history[claveLiga].tap += p.stats.tap; p.history[claveLiga].matches += p.stats.matches;
        p.stats = { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, tcAttempt: 0, tcMake: 0, matches: 0 };
        p.team = targetName; p.sMatches = 0; p.season++; 
        prepararLiga(); evalRole(); updateUI(); 
        escribirDialogo(`🚨 BOMBAZO: Traspasado a ${targetName}. Empiezas una nueva temporada.`); 
        guardarPartida();
    } else escribirDialogo(`AGENTE:<br>El GM de ${targetName} dice que con ${p.ovr} OVR no tienes nivel para jugar allí.`);
}

function abrirEquipos() {
    let select = document.getElementById('sel-equipo'); select.innerHTML = '';
    DB[p.fase].teams.forEach(t => { select.innerHTML += `<option value="${t.name}">${t.name}</option>`; });
    select.value = p.team; mostrarEquipoInfo();
    document.getElementById('teams-modal').style.display = 'block';
}
function cerrarEquipos() { document.getElementById('teams-modal').style.display = 'none'; }

function mostrarEquipoInfo() {
    let tName = document.getElementById('sel-equipo').value;
    let realTeamObj = DB[p.fase].teams.find(x => x.name === tName);
    let html = `<h3 style="color:var(--accent); margin-bottom:10px;">${tName.toUpperCase()} - <span style="color:#fff;">MEDIA: ${realTeamObj.ovr}</span></h3><hr style="border-color:#333; margin-bottom:15px;">`;
    if(p.team === tName) html += `<p style="color:var(--success); margin-bottom: 5px;">🌟 <b>${p.name} (TÚ)</b> - ${p.pos} | <b>${p.ovr} OVR</b></p>`;
    
    if(realTeamObj.roster) {
        realTeamObj.roster.forEach(jug => {
            let icon = ["B","E","A","AP","P"].includes(jug.p) ? "👤" : "🔄";
            let color = (jug.n === realTeamObj.star) ? "color:var(--accent);" : "color:#ccc;";
            let extraIcon = (jug.n === realTeamObj.star) ? "⭐" : icon;
            html += `<p style="${color} margin-bottom:5px;">${extraIcon} ${jug.n} (${posMap[jug.p] || "S"}) | <b style="color:#fff;">${jug.o || 70} OVR</b></p>`;
        });
    } else html += `<p style="color:#888;">Plantilla no disponible.</p>`;
    document.getElementById('team-roster-div').innerHTML = html;
}

// =====================================================================
// 6. MOTOR DE PARTIDO
// =====================================================================
function play() {
    evalRole(); updateUI();
    let posiblesRivales = p.isPlayoffs ? [p.playoffRival] : leagueTable.filter(t => !t.isPlayer && (p.fase===0 ? t.conf===p.teamData.conf : true));
    match.rival = posiblesRivales[p.sMatches % posiblesRivales.length];
    match.j = 0; match.pts = 0; match.ast = 0; match.reb = 0; match.rob = 0; match.tap = 0; match.tc = 0; match.ok = 0;
    
    let diff = getMyTeamOvr() - match.rival.ovr; 
    match.finalBaseMyScore = 70 + Math.floor(diff * 0.3) + Math.floor(Math.random() * 8);
    match.finalBaseRivScore = 70 - Math.floor(diff * 0.3) + Math.floor(Math.random() * 8); 
    match.myScore = 0; match.rivScore = 0;
    match.numPlays = p.role === "Suplente" ? 3 : (p.role === "Titular" ? 5 : 6);
    match.pool = ["ATAQUE", "ATAQUE", "ATAQUE", "DEFENSA", "DEFENSA", "ATAQUE"].sort(() => Math.random() - 0.5).slice(0, match.numPlays);
    match.ritmo = ["LENTO", "NORMAL", "RÁPIDO"][Math.floor(Math.random()*3)];

    document.getElementById('live-scoreboard').style.display = 'flex';
    document.getElementById('sb-my-team').innerText = p.team.substring(0, 10).toUpperCase();
    document.getElementById('sb-rival-name').innerText = match.rival.name.substring(0, 10).toUpperCase();
    document.getElementById('sb-time').innerHTML = `1Q | 10:00<br><span style="font-size:0.6em; color:var(--accent);">RITMO: ${match.ritmo}</span>`;
    updateScoreboard();

    document.getElementById('game-log').innerHTML = ''; 
    let previaTexto = diff < -5 ? `Partido reñido. Tienen más calidad, ¡pero podemos ganar!` : `Somos favoritos. ¡A ganar!`;
    if(p.isPlayoffs) previaTexto = `¡Tensión máxima! Nos jugamos todo en los Playoffs.`;
    escribirDialogo(`RETRANSMISIÓN:<br><br>¡Balón al aire! Jugamos contra ${match.rival.name}.<br>${previaTexto}`);
    document.getElementById('actions').innerHTML = ''; 
    setTimeout(next, 2000);
}

function updateScoreboard() {
    document.getElementById('sb-my-pts').innerText = match.myScore;
    document.getElementById('sb-riv-pts').innerText = match.rivScore;
}

function getProbabilidad(accion) {
    let diffOvr = p.ovr - match.rival.ovr;
    let mod = diffOvr; if (p.fase === 0) mod -= 2; 
    let prob = (accion==='m')?p.fisico:(accion==='b')?p.bandeja:(accion==='t')?p.tiro:(accion==='a')?p.manejo:(accion==='ro')?p.def-5:(accion==='ta')?p.def:Math.max(p.fisico,p.def)+10;
    if (p.ovr >= 75 && p.ovr <= 85) mod -= 5;
    return Math.max(15, Math.min(95, prob + mod));
}

function next() {
    if (match.j >= match.numPlays) return finish();
    let multRitmo = match.ritmo === "RÁPIDO" ? 1.3 : (match.ritmo === "LENTO" ? 0.7 : 1);
    match.myScore += Math.floor((match.finalBaseMyScore / match.numPlays) * multRitmo);
    match.rivScore += Math.floor((match.finalBaseRivScore / match.numPlays) * multRitmo);
    
    let times3 = ["3Q | 03:00", "4Q | 06:10", "4Q | 00:54"];
    let times5 = ["1Q | 04:30", "2Q | 06:15", "3Q | 02:50", "4Q | 05:00", "4Q | 00:45"];
    let times6 = ["1Q | 06:30", "2Q | 08:15", "2Q | 01:50", "3Q | 05:00", "4Q | 07:45", "4Q | 00:20"];
    let arrTimes = (match.numPlays === 6) ? times6 : ((match.numPlays === 5) ? times5 : times3);
    document.getElementById('sb-time').innerHTML = `${arrTimes[match.j]}<br><span style="font-size:0.6em; color:var(--accent);">RITMO: ${match.ritmo}</span>`;
    updateScoreboard();
    
    let tipo = match.pool[match.j];
    let html = `<div class="dialog-box log-entry"><span style="font-size:0.7em; color:var(--accent);">SITUACIÓN: ${tipo}</span>
        <div class="action-btns" id="btns-${match.j}" style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">`;
    
    if (tipo === "ATAQUE") {
        html += `<button onclick="res('m', ${match.j})">MATE [${getProbabilidad('m')}%]</button>
                 <button onclick="res('b', ${match.j})">BANDEJA [${getProbabilidad('b')}%]</button>
                 <button onclick="res('t', ${match.j})">TRIPLE [${getProbabilidad('t')}%]</button>
                 <button onclick="res('a', ${match.j})">ASISTIR [${getProbabilidad('a')}%]</button>`;
    } else {
        html += `<button onclick="res('ro', ${match.j})">ROBO [${getProbabilidad('ro')}%]</button>
                 <button onclick="res('ta', ${match.j})">TAPÓN [${getProbabilidad('ta')}%]</button>
                 <button onclick="res('re', ${match.j})">REBOTE [${getProbabilidad('re')}%]</button><button disabled style="border:none;"></button>`;
    }
    html += `</div><div id="res-${match.j}" style="margin-top: 15px; font-size: 0.7em;"></div></div>`;
    document.getElementById('game-log').insertAdjacentHTML('beforeend', html); scrollToBottom();
}

function res(tipo, id) {
    document.querySelectorAll(`#btns-${id} button`).forEach(b => b.disabled = true);
    let ok = (Math.random() * 100 < getProbabilidad(tipo)); let msg = ""; let pts = 0;
    
    if(['m','t','b'].includes(tipo)) p.stats.tcAttempt++;
    if(tipo==='m') { if(ok){ pts=2; match.tc++; p.stats.tcMake++; msg=`¡Póster brutal!`; } else msg=`Bloqueado por la defensa.`; }
    else if(tipo==='b') { if(ok){ pts=2; match.tc++; p.stats.tcMake++; msg=`¡Bandeja con mucha clase!`; } else msg=`Falla la bandeja bajo el aro.`; }
    else if(tipo==='t') { if(ok){ pts=3; match.tc++; p.stats.tcMake++; msg=`¡Triple limpio!`; } else msg=`El tiro sale fuera.`; }
    else if(tipo==='a') { if(ok){ pts=2; match.ast++; msg=`Asistencia de manual.`; } else msg=`Pase interceptado.`; }
    else if(tipo==='ro') { if(ok){ match.rob++; match.rivScore -= 2; msg=`¡Gran robo! Evitas sus puntos.`; } else msg=`Falta personal.`; }
    else if(tipo==='ta') { if(ok){ match.tap++; match.rivScore -= 2; msg=`¡Tapón tremendo! Frenas su ataque.`; } else msg=`Llega tarde, canasta rival.`; }
    else if(tipo==='re') { if(ok){ match.reb++; match.rivScore -= 2; msg=`Rebote defensivo asegurado.`; } else msg=`Pierde el rebote.`; }

    if(ok) { match.ok++; match.myScore += (['m','b','t','a'].includes(tipo)) ? pts : 0; match.pts += (['m','b','t'].includes(tipo)) ? pts : 0; } 
    else { match.rivScore += 2; if(p.personality==="fiestero" && Math.random()>0.8) p.fame -= 1; }

    updateScoreboard(); document.getElementById(`res-${id}`).innerHTML = `<b style="color:${ok ? 'var(--success)' : 'var(--danger)'}">🎙️: "${msg}"</b>`;
    match.j++; scrollToBottom(); setTimeout(next, 1500);
}

// =====================================================================
// 7. FIN DE PARTIDO Y CÁLCULO DE FAMA
// =====================================================================
function finish() {
    document.getElementById('live-scoreboard').style.display = 'none';
    let minMult = p.role === "Estrella" ? 2.0 : (p.role === "Titular" ? 1.5 : 0.8); 
    let gamePts = match.pts + Math.floor((Math.random() * 4 + (p.ovr / 15)) * minMult);
    let gameAst = match.ast + Math.floor(Math.random() * 3 * minMult);
    let gameReb = match.reb + Math.floor(Math.random() * 4 * minMult);
    let gameRob = match.rob + Math.floor(Math.random() * 2 * minMult);
    let gameTap = match.tap + Math.floor(Math.random() * 2 * minMult);

    p.stats.tcAttempt += Math.floor(gamePts/2) + Math.floor(Math.random()*4); p.stats.tcMake += Math.floor(gamePts / 2); 

    let win = match.myScore > match.rivScore;
    if(match.myScore === match.rivScore) { if(Math.random()>0.4){ match.myScore+=2; win=true; } else { match.rivScore+=2; win=false; } }

    if (!p.isPlayoffs) {
        if(win) { p.teamData.v++; match.rival.d++; } else { p.teamData.d++; match.rival.v++; }
        leagueTable.forEach(r => { if(!r.isPlayer && r.name !== match.rival.name) { r.pts += Math.floor(15 + Math.random()*15); if(Math.random() > 0.5) r.v++; else r.d++; }});
    }

    p.stats.pts += gamePts; p.stats.ast += gameAst; p.stats.reb += gameReb; p.stats.rob += gameRob; p.stats.tap += gameTap;
    p.stats.matches++; p.sMatches++; p.teamData.pts += gamePts;
    
    let sueldo = p.role === "Estrella" ? 400 : (p.role === "Titular" ? 200 : 150);
    if(p.personality === "fiestero" && win) sueldo += 50; 
    p.money += win ? sueldo : Math.floor(sueldo/2); 

    // ¡NUEVO! SISTEMA DINÁMICO DE FAMA (Subes fama según lo que anotas)
    let fameGained = 0;
    if (gamePts >= 30) fameGained += 3;
    else if (gamePts >= 20) fameGained += 2;
    else if (gamePts >= 10) fameGained += 1;
    
    if (p.personality === "fiestero" && fameGained > 0) fameGained += 1; // Los fiesteros sacan más rédito mediático
    if (win && (match.myScore > match.rivScore + 15)) fameGained += 1; // Ganar de paliza da fama
    
    p.fame += fameGained;
    
    let endMsg = win ? `¡Victoria de ${p.team}!` : `Derrota para ${p.team}...`;
    let famaStr = fameGained > 0 ? `<p style="font-size:0.6em; color:gold; margin-top:5px;">🌟 ¡Actuación estelar! Sumas +${fameGained} Fama.</p>` : '';
    
    let endHtml = `<div class="dialog-box log-entry" style="text-align:center; border-color:${win?'var(--success)':'var(--danger)'}">
        <p style="font-size:1.2em; margin-bottom:10px;">${match.myScore} - ${match.rivScore}</p>
        <p style="font-size:0.7em; color:${win?'var(--success)':'var(--danger)'}; font-weight:bold;">${endMsg}</p>
        <p style="font-size:0.55em; color:#aaa; margin-top:10px;">Tus stats: ${gamePts} PTS | ${gameAst} AST | ${gameReb} REB</p>
        ${famaStr}
    </div>`;
    document.getElementById('game-log').insertAdjacentHTML('beforeend', endHtml); scrollToBottom(); updateUI();

    if(typeof StorySystem !== 'undefined') StorySystem.checkEvents();

    let numEquiposConf = leagueTable.filter(t => t.conf === p.teamData.conf).length;
    let partidosTemporada = (p.fase === 0) ? (numEquiposConf - 1) * 2 : (leagueTable.length - 1);

    if (p.isPlayoffs) {
        if (p.fase === 0) { 
            if (p.playoffStage === "SEMIFINAL") {
                if (win) { p.playoffStage = "GRAN FINAL"; p.playoffRival = p.playoffOtherWinner; escribirDialogo(`🏆 ¡A LA FINAL!`); setTimeout(renderMenu, 4000); } 
                else { escribirDialogo(`❌ Eliminados en Semis.`); setTimeout(draft, 4000); }
            } else if (p.playoffStage === "GRAN FINAL") {
                if(win) escribirDialogo(`🥇 ¡CAMPEONES JUNIOR!`); else escribirDialogo(`🥈 Perdemos la final...`);
                setTimeout(draft, 4000);
            }
        } else if (p.fase === 1 || p.fase === 2) { 
            if (p.playoffStage === "CUARTOS") {
                if (win) { p.playoffStage = "SEMIFINAL"; p.playoffRival = p.playoffOtherWinner || leagueTable.filter(t=>t.conf!==p.teamData.conf)[0]; escribirDialogo(`🏆 ¡Pasamos a Semifinales!`); setTimeout(renderMenu, 4000); } 
                else { escribirDialogo(`❌ Eliminados en Cuartos. Fin de temporada.`); setTimeout(draft, 4000); }
            } else if (p.playoffStage === "SEMIFINAL") {
                if(win) { p.playoffStage = "GRAN FINAL"; let otraConf = leagueTable.filter(t=>t.conf!==p.teamData.conf).sort((a,b)=>b.v-a.v); let miConf = leagueTable.filter(t=>t.conf===p.teamData.conf).sort((a,b)=>b.v-a.v); p.playoffRival = p.playoffRival.conf === p.teamData.conf ? otraConf[0] : miConf[0]; escribirDialogo(`🏆 ¡A LA GRAN FINAL!`); setTimeout(renderMenu, 4000); } 
                else { escribirDialogo(`❌ Caemos en Semifinales.`); setTimeout(draft, 4000); }
            } else if (p.playoffStage === "GRAN FINAL") {
                if(win) {
                    escribirDialogo(`🥇 ¡CAMPEONES! Haces historia.`);
                    if(p.fase === 2) { p.rings++; p.fame += 10; escribirDialogo(`💍 ¡HAS GANADO UN ANILLO DE LA NBA! (Total: ${p.rings})`); }
                } else escribirDialogo(`🥈 Subcampeones... hemos estado tan cerca.`);
                setTimeout(draft, 4000);
            }
        }
    } else {
        if(p.sMatches >= partidosTemporada) {
            if (p.fase === 0) {
                let miConfTeams = leagueTable.filter(t => t.conf === p.teamData.conf).sort((a,b)=>b.v - a.v);
                if(miConfTeams[0].name === p.team) {
                    p.isPlayoffs = true; p.playoffStage = "SEMIFINAL";
                    let w1 = leagueTable.filter(t=>t.conf===1).sort((a,b)=>b.v-a.v)[0];
                    let w2 = leagueTable.filter(t=>t.conf===2).sort((a,b)=>b.v-a.v)[0];
                    let ganadores = [w1,w2].filter(w => w && w.name !== p.team);
                    p.playoffRival = ganadores[0]; p.playoffOtherWinner = ganadores[1] || ganadores[0];
                    escribirDialogo(`🌟 ¡CAMPEONES DE CONFERENCIA! Entramos a Playoffs.`);
                    setTimeout(renderMenu, 5000);
                } else { escribirDialogo(`No ganamos la conferencia. Temporada terminada.`); setTimeout(draft, 4000); }
            } else if (p.fase === 1 || p.fase === 2) { 
                let miConfTeams = leagueTable.filter(t => t.conf === p.teamData.conf).sort((a,b)=>b.v - a.v);
                let miPos = miConfTeams.findIndex(t => t.name === p.team) + 1;
                let otraConfTeams = leagueTable.filter(t => t.conf !== p.teamData.conf).sort((a,b)=>b.v - a.v);
                
                if (miPos <= 3) {
                    p.isPlayoffs = true;
                    if (miPos === 1) { p.playoffStage = "SEMIFINAL"; p.playoffRival = otraConfTeams[1]; p.playoffOtherWinner = miConfTeams[1]; escribirDialogo(`🌟 Quedamos 1º de Conferencia. ¡Pasamos a SEMIFINALES!`); } 
                    else { p.playoffStage = "CUARTOS"; p.playoffRival = (miPos === 2) ? otraConfTeams[2] : otraConfTeams[1]; p.playoffOtherWinner = miConfTeams[0]; escribirDialogo(`🔥 Quedamos ${miPos}º de Conferencia. Nos jugamos los CUARTOS.`); }
                    setTimeout(renderMenu, 5000);
                } else { escribirDialogo(`No logramos clasificar a Playoffs (${miPos}º). Temporada terminada.`); setTimeout(draft, 4000); }
            } else { setTimeout(draft, 3000); }
        } else { setTimeout(renderMenu, 3000); }
    }
}

// =====================================================================
// 8. DRAFT, PREMIOS Y EL LÍMITE DE 17 TEMPORADAS
// =====================================================================
function draft() {
    if (p.fase === 2) {
        if (p.ovr >= 85 || p.fame >= 60) { p.allStars++; escribirDialogo(`🌟 Has sido seleccionado para el ALL-STAR GAME.`); }
        if (p.ovr >= 95 && p.teamData.v >= 10) { p.mvps++; p.fame += 15; escribirDialogo(`🏆 ¡HAS GANADO EL M.V.P. DE LA TEMPORADA!`); }
        if (p.def >= 90) { p.dpoys++; escribirDialogo(`🛡️ Premio al Mejor Defensor del Año (DPOY).`); }
    }
    if (p.season >= 17) {
        escribirDialogo(`⏳ TEMPORADA 17 FINALIZADA. Tu cuerpo no da más de sí. Has agotado el tiempo. Es hora del adiós.`);
        setTimeout(() => retirarse(false), 5000); return;
    }

    document.getElementById('actions').innerHTML = '';
    let msg = `Temporada ${p.season} finalizada. Tu OVR es ${p.ovr} y tu Fama ${p.fame}.`;
    let html = `<div class="dialog-box log-entry"><p style="font-size:0.7em; line-height:1.8; color:#fff;">${msg}</p>`;
    
    let targetFase = p.fase;
    if (p.fase === 0) targetFase = 1; 
    if (p.fase === 1 && p.fame >= 40 && p.ovr >= 80) targetFase = 2; 

    let equiposAscenso = DB[targetFase].teams.sort(() => 0.5 - Math.random()).slice(0, 3);
    equiposAscenso.forEach(eq => {
        let rol = p.ovr >= eq.ovr + 3 ? "Estrella" : (p.ovr >= eq.ovr - 4 ? "Titular" : "Suplente");
        let sueldo = rol === "Estrella" ? 400 : (rol === "Titular" ? 200 : 150);
        html += `<button onclick="ejecutarAscenso(${targetFase}, '${eq.name}', '${rol}')" class="btn-main" style="margin-top:10px; text-transform:none;">${eq.name} | ${rol} (${sueldo}€)</button>`;
    });

    if (p.fase > 0) html += `<button onclick="ejecutarAscenso(${p.fase}, '${p.team}', '${p.role}')" class="btn-main" style="margin-top:10px; border-color:#888; color:#888;">Renovar con ${p.team}</button>`;
    html += `</div>`;
    document.getElementById('game-log').insertAdjacentHTML('beforeend', html); scrollToBottom(); guardarPartida();
}

function ejecutarAscenso(faseTarget, teamName, rolTarget) {
    let claveLiga = p.fase === 0 ? "junior" : (p.fase === 1 ? "acb" : "nba");
    p.history[claveLiga].pts += p.stats.pts; p.history[claveLiga].ast += p.stats.ast; p.history[claveLiga].reb += p.stats.reb;
    p.history[claveLiga].rob += p.stats.rob; p.history[claveLiga].tap += p.stats.tap; p.history[claveLiga].matches += p.stats.matches;
    p.stats.pts=0; p.stats.ast=0; p.stats.reb=0; p.stats.rob=0; p.stats.tap=0; p.stats.tcAttempt=0; p.stats.tcMake=0; p.stats.matches=0;

    p.team = teamName; p.fase = faseTarget; p.role = rolTarget; p.sMatches = 0; p.season++; p.isPlayoffs = false; p.playoffStage = ""; 
    
    if (faseTarget !== p.fase) p.rivalTeam = ""; 
    
    prepararLiga(); updateUI(); document.getElementById('game-log').innerHTML = '';
    escribirDialogo(`NOTICIA:<br><br>Oficial. ${p.name} jugará en ${p.team}. ¡A por la Temporada ${p.season} de 17!`);
    
    if (p.rivalTeam && p.rivalTeam !== p.team) {
        escribirDialogo(`📰 RUMORES:<br>¡Ojo! Las noticias dicen que ${p.rivalName} ha firmado un contratazo con ${p.rivalTeam}.`);
    }

    renderMenu(); guardarPartida();
}

// =====================================================================
// 9. ENTRENAMIENTO, UI Y RETIRADA G.O.A.T.
// =====================================================================
function retirarse(force = false) {
    if (force && !confirm("¿Seguro que quieres retirarte de forma anticipada? Perderás tiempo valioso para ser el G.O.A.T.")) return;

    let tPts = p.history.junior.pts + p.history.acb.pts + p.history.nba.pts + p.stats.pts;
    let tMat = p.history.junior.matches + p.history.acb.matches + p.history.nba.matches + p.stats.matches;
    let ppp = tMat > 0 ? (tPts/tMat).toFixed(1) : 0;
    
    let isGOAT = (p.rings >= 12 && p.ovr >= 99 && p.fame >= 100 && tPts >= 35000 && p.rivalReconciled && p.money >= 500000 && p.hasShoe && p.mvps >= 5 && p.allStars >= 15 && p.dpoys >= 1);

    let endText = isGOAT ? 
        `👑 ERES EL MEJOR JUGADOR DE TODOS LOS TIEMPOS 👑\n\nHas superado a Jordan y a Bill Russell. Has asegurado el futuro de tu familia con tu fortuna (${p.money}€), te has reconciliado con tu amigo ${p.rivalName} y el mundo entero usa tus zapatillas. Has completado la Misión G.O.A.T. Tu leyenda será eterna.` : 
        `🏀 RESUMEN DE CARRERA DE LEYENDA 🏀\n\nHa sido una gran carrera, pero no has logrado cumplir los estrictos 10 Mandamientos del G.O.A.T. El mundo te recordará como una estrella, pero el trono absoluto sigue perteneciendo a los mitos del pasado.\n\nAnillos: ${p.rings}/12 | Puntos: ${tPts}/35000 | Fama: ${p.fame}/100`;

    alert(endText + `\n\n🏀 ESTADÍSTICAS FINALES 🏀\n\nTemporadas Jugadas: ${p.season}/17\nPartidos Totales: ${tMat}\nPuntos Totales: ${tPts}\nPromedio Histórico: ${ppp} PPP\nOVR Final: ${p.ovr}`);
    localStorage.removeItem('basketSaveData'); location.reload();
}

function train() {
    let cost = getTrainCost(); let cMod = p.personality === "deportista" ? Math.floor(cost * 0.8) : cost; 
    if(p.money < cMod) return alert(`Fondos insuficientes. El coste es de ${cMod}€.`);
    if(p.ovr >= DB[p.fase].maxOvr) return alert(`Límite OVR alcanzado en esta liga (${DB[p.fase].maxOvr}).`);
    
    p.money -= cMod; p.fisico += 1; p.tiro += 1; p.def += 1; p.manejo += 1; p.bandeja += 1;
    p.ovr = Math.min(DB[p.fase].maxOvr, Math.round((p.fisico+p.tiro+p.def+p.manejo+p.bandeja)/5));
    
    if(p.personality === "deportista" && Math.random() > 0.7) { 
        p.fisico += 1; escribirDialogo("ENTRENAMIENTO:<br>Tu ética de trabajo implacable te da un bonus extra de físico."); 
    } else escribirDialogo(`ENTRENAMIENTO:<br><br>Atributos mejorados. Nueva Media: ${p.ovr} OVR.`);
    
    evalRole(); updateUI(); renderMenu(); 
}

function abrirPerfil() {
    let e = (id) => document.getElementById(id);
    if(e('pr-tiro')) e('pr-tiro').innerText = p.tiro; 
    if(e('pr-fisico')) e('pr-fisico').innerText = p.fisico;
    if(e('pr-bandeja')) e('pr-bandeja').innerText = p.bandeja;
    if(e('pr-manejo')) e('pr-manejo').innerText = p.manejo; 
    if(e('pr-def')) e('pr-def').innerText = p.def;
    if(e('pr-ovr')) e('pr-ovr').innerText = p.ovr; 
    
    let getPPP = (pts, m) => m > 0 ? (pts/m).toFixed(1) : "0.0";
    let getAPP = (ast, m) => m > 0 ? (ast/m).toFixed(1) : "0.0";
    
    let cur = (p.fase===0) ? "junior" : (p.fase===1 ? "acb" : "nba");
    let sumPts = JSON.parse(JSON.stringify(p.history));
    sumPts[cur].pts += p.stats.pts; sumPts[cur].ast += p.stats.ast; sumPts[cur].matches += p.stats.matches;
    let tPts = sumPts.junior.pts + sumPts.acb.pts + sumPts.nba.pts;
    
    let cl = `
    ${p.rings >= 12 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 12 Anillos NBA (${p.rings})<br>
    ${p.mvps >= 5 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 5x MVP Temporada (${p.mvps})<br>
    ${p.allStars >= 15 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 15x All-Star Game (${p.allStars})<br>
    ${p.dpoys >= 1 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 1x Defensor del Año (${p.dpoys})<br>
    ${p.ovr >= 99 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} Nivel 99 OVR (${p.ovr})<br>
    ${tPts >= 35000 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 35.000 Puntos (${tPts})<br>
    ${p.fame >= 100 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 100 Fama Mundial (${p.fame})<br>
    ${p.money >= 500000 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 500.000€ Familia (${p.money}€)<br>
    ${p.hasShoe ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} Zapatillas (Signature Shoe)<br>
    ${p.rivalReconciled ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} Paz con ${p.rivalName}
    `;
    if(e('goat-checklist')) e('goat-checklist').innerHTML = cl;
    
    let hHtml = `
    <div style="margin-bottom:10px; background:#111; padding:8px; border-radius:4px;"><strong style="color:var(--accent);">JUNIOR</strong><br>
    PTS: ${sumPts.junior.pts} | PPP: ${getPPP(sumPts.junior.pts, sumPts.junior.matches)} | APP: ${getAPP(sumPts.junior.ast, sumPts.junior.matches)} | PJ: ${sumPts.junior.matches}</div>
    <div style="margin-bottom:10px; background:#111; padding:8px; border-radius:4px;"><strong style="color:var(--accent);">LIGA ACB</strong><br>
    PTS: ${sumPts.acb.pts} | PPP: ${getPPP(sumPts.acb.pts, sumPts.acb.matches)} | APP: ${getAPP(sumPts.acb.ast, sumPts.acb.matches)} | PJ: ${sumPts.acb.matches}</div>
    <div style="background:#111; padding:8px; border-radius:4px;"><strong style="color:var(--accent);">NBA</strong><br>
    PTS: ${sumPts.nba.pts} | PPP: ${getPPP(sumPts.nba.pts, sumPts.nba.matches)} | APP: ${getAPP(sumPts.nba.ast, sumPts.nba.matches)} | PJ: ${sumPts.nba.matches}</div>
    `;
    if(e('history-content')) e('history-content').innerHTML = hHtml;
    if(e('profile-modal')) e('profile-modal').style.display = 'block';
}

function cerrarPerfil() { let m = document.getElementById('profile-modal'); if(m) m.style.display = 'none'; }

function updateUI() {
    let e = (id) => document.getElementById(id);
    
    if(e('ui-name')) e('ui-name').innerText = p.name.toUpperCase();
    if(e('ui-dorsal')) e('ui-dorsal').innerText = "#" + p.dorsal;
    if(e('ui-nat')) e('ui-nat').innerText = p.nat ? p.nat.split(" ")[0] : "🇪🇸";
    if(e('ui-team')) e('ui-team').innerText = `${p.team.toUpperCase()} | ${p.pos.toUpperCase()}`;
    if(e('ui-height')) e('ui-height').innerText = p.height || "195";
    if(e('ui-season')) e('ui-season').innerText = p.season || "1";
    if(e('ui-money')) e('ui-money').innerText = p.money + "€";
    if(e('ui-fame')) e('ui-fame').innerText = p.fame;
    if(e('ui-ovr')) e('ui-ovr').innerText = p.ovr;
    if(e('ui-liga')) e('ui-liga').innerText = p.isPlayoffs ? "PLAYOFFS" : DB[p.fase].n;
    
    let rolBadge = e('ui-rol');
    if(rolBadge) {
        rolBadge.innerText = p.role.toUpperCase();
        rolBadge.style.color = p.role === "Estrella" ? "gold" : (p.role === "Titular" ? "var(--accent)" : "var(--danger)");
    }

    let m = p.stats.matches || 1;
    if(e('st-ppp')) e('st-ppp').innerText = (p.stats.pts/m).toFixed(1);
    if(e('st-app')) e('st-app').innerText = (p.stats.ast/m).toFixed(1);
    if(e('st-rpp')) e('st-rpp').innerText = (p.stats.reb/m).toFixed(1);
    if(e('st-ropp')) e('st-ropp').innerText = (p.stats.rob/m).toFixed(1);
    if(e('st-tpp')) e('st-tpp').innerText = (p.stats.tap/m).toFixed(1);
    
    let tcPerc = p.stats.tcAttempt > 0 ? Math.round((p.stats.tcMake / p.stats.tcAttempt) * 100) : 0;
    if(e('st-tc')) e('st-tc').innerText = tcPerc + "%";

    // ¡NUEVO! LÍDERES DE ANOTACIÓN (PUNTOS POR PARTIDO DE JUGADORES)
    let tablePts = e('table-pts');
    if(tablePts) {
        let tpts = leagueTable.map(t => {
            let ppp = t.isPlayer ? (p.stats.pts / m) : ((t.pts / m) * (0.35 + (t.ovr/1000))); 
            if (t.star === p.rivalName) ppp = ppp * 1.15; // Tu rival siempre está fuerte
            return { name: t.isPlayer ? p.name.substring(0,10) : t.star.substring(0,10), team: t.name.substring(0,3), ppp: ppp, isMe: t.isPlayer, isRival: (t.star === p.rivalName) };
        }).sort((a,b) => b.ppp - a.ppp);

        tablePts.innerHTML = tpts.slice(0,5).map((r,i) => {
            let color = r.isMe ? 'var(--accent)' : (r.isRival ? 'gold' : '#ccc');
            let icon = r.isMe ? '🌟' : (r.isRival ? '⭐' : '');
            return `<tr style="color:${color};"><td>${i+1}. ${icon}${r.name} <span style="font-size:0.7em; color:#555;">(${r.team.toUpperCase()})</span></td><td style="text-align:right">${r.ppp.toFixed(1)}</td></tr>`;
        }).join('');
    }
    
    // ¡NUEVO! CLASIFICACIÓN DE CONFERENCIAS (MI CONF y OTRA CONF)
    let tableVd1 = e('table-vd-1');
    let tableVd2 = e('table-vd-2');
    let tConf1 = e('title-conf1');
    let tConf2 = e('title-conf2');

    if(tableVd1 && tableVd2) {
        let miConf = p.teamData.conf;
        let eqMiConf = leagueTable.filter(t => t.conf === miConf).sort((a,b) => b.v - a.v);
        let eqOtraConf = leagueTable.filter(t => t.conf !== miConf).sort((a,b) => b.v - a.v);

        tConf1.innerText = `MI CONF. (${p.fase===0 ? 'GRUPO '+miConf : (miConf===1?'ESTE':'OESTE')})`;
        tableVd1.innerHTML = eqMiConf.map((r,i) => `<tr style="${r.isPlayer ? 'color:var(--accent);' : (r.star===p.rivalName ? 'color:gold;' : '')}"><td>${i+1}.${r.name.substring(0,12)}</td><td style="text-align:right">${r.v}-${r.d}</td></tr>`).join('');

        if(eqOtraConf.length > 0) {
            tConf2.style.display = 'block';
            tConf2.innerText = p.fase===0 ? "OTROS LÍDERES" : (miConf===1?'CONF. OESTE':'CONF. ESTE');
            
            if(p.fase === 0) {
                // En Junior hay 4 grupos, mostramos al líder de cada uno de los otros
                let lideresOtros = [];
                [1,2,3,4].forEach(c => {
                    if(c !== miConf) {
                        let top = leagueTable.filter(t => t.conf === c).sort((a,b) => b.v - a.v)[0];
                        if(top) lideresOtros.push(top);
                    }
                });
                tableVd2.innerHTML = lideresOtros.sort((a,b)=>b.v-a.v).map((r,i) => `<tr style="${r.star===p.rivalName ? 'color:gold;':''}"><td>${r.name.substring(0,12)}</td><td style="text-align:right">${r.v}-${r.d}</td></tr>`).join('');
            } else {
                // En ACB/NBA mostramos los top 8 de la otra conferencia
                tableVd2.innerHTML = eqOtraConf.slice(0,8).map((r,i) => `<tr style="${r.star===p.rivalName ? 'color:gold;':''}"><td>${i+1}.${r.name.substring(0,12)}</td><td style="text-align:right">${r.v}-${r.d}</td></tr>`).join('');
            }
        } else {
            tConf2.style.display = 'none';
            tableVd2.innerHTML = '';
        }
    }
}

function escribirDialogo(txt) {
    let log = document.getElementById('game-log');
    if(log) log.insertAdjacentHTML('beforeend', `<div class='dialog-box log-entry'><p style="font-size:0.7em; line-height:1.6; color:#ccc;">${txt}</p></div>`);
    scrollToBottom();
}

function scrollToBottom() { 
    let view = document.getElementById('game-view'); 
    if(view) view.scrollTo({ top: view.scrollHeight, behavior: 'smooth' }); 
}