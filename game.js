// =====================================================================
// 1. VARIABLES PRINCIPALES Y ESTADÍSTICAS DEL LEGADO
// =====================================================================
let p = {
    name: "", 
    rivalName: "Riki", 
    personality: "deportista", 
    dorsal: "17", 
    height: 195, 
    nat: "", 
    team: "", 
    pos: "Base", 
    style: "equilibrado", 
    ovr: 65, 
    money: 0, 
    season: 1, 
    trainCount: 0,
    fame: 10, 
    chem: 50, 
    rings: 0, 
    mvps: 0, 
    allStars: 0, 
    dpoys: 0, 
    rookies: 0, 
    sixthMan: 0, 
    copas: 0, 
    ligasJunior: 0, 
    ligasACB: 0,
    hasShoe: false, 
    rivalReconciled: false, 
    hasHouse: false, 
    hasCar: false, 
    hasWatch: false, 
    proGear: false, 
    sponsor: "Ninguno",
    tiro: 65, 
    fisico: 65, 
    bandeja: 65, 
    manejo: 65, 
    def: 65,
    stats: { 
        pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, 
        tcAttempt: 0, tcMake: 0, t3Attempt: 0, t3Make: 0, 
        matches: 0, streak15: 0, gamesSinceBig: 0, lossStreak: 0 
    },
    history: {
        junior: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, matches: 0 },
        acb: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, matches: 0 },
        nba: { pts: 0, ast: 0, reb: 0, rob: 0, tap: 0, matches: 0 }
    },
    sMatches: 0, 
    fase: 0, 
    role: "Titular",
    teamData: { v: 0, d: 0, pts: 0, conf: 0, name: "" },
    isPlayoffs: false, 
    playoffStage: "", 
    playoffRival: null, 
    playoffOtherWinner: null, 
    playoffBracket: null,
    copaPlayedThisSeason: false, 
    isCopa: false, 
    copaStage: "", 
    copaRival: null,
    rivalTeam: "", 
    aswPlayedThisSeason: false,
    aswDone: null
};

let leagueTable = []; 
let match = { 
    j: 0, 
    numPlays: 5, 
    pool: [], 
    rival: null, 
    myScore: 0, 
    rivScore: 0, 
    finalBaseMyScore: 0, 
    finalBaseRivScore: 0,
    pts: 0, 
    ast: 0, 
    reb: 0, 
    rob: 0, 
    tap: 0, 
    tc: 0, 
    ok: 0, 
    ritmo: "NORMAL"
};

const posMap = { 
    "B": "Base", 
    "E": "Escolta", 
    "A": "Alero", 
    "AP": "Ala-Pívot", 
    "P": "Pívot", 
    "6M": "6º Hombre", 
    "BAN": "Banquillo" 
};

const FAME_MAX = 100;
const FAME_ACB_LIMIT = 60;
const GLOBAL_DIFF = 0.2; 

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

const DB = [
    DB_JUNIOR, 
    typeof DB_ACB !== 'undefined' ? DB_ACB : DB_JUNIOR, 
    typeof DB_NBA !== 'undefined' ? DB_NBA : DB_JUNIOR
];

function ubicarRival() {
    if(!p.rivalName) return;
    
    DB[p.fase].teams.forEach(t => {
        if (t.star === p.rivalName) {
            t.star = "Estrella";
        }
        if (t.roster) {
            t.roster.forEach(r => { 
                if (r.n === p.rivalName) { 
                    r.n = "Veterano"; 
                    r.o -= 5; 
                } 
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
            }
            let randomTeam = posibles[Math.floor(Math.random() * posibles.length)];
            p.rivalTeam = randomTeam.name;
        }
    }

    let tDB = DB[p.fase].teams.find(t => t.name === p.rivalTeam);
    if (tDB) {
        if (!tDB.roster) {
            tDB.roster = [
                {n: p.rivalName, p: "B", o: rivalOvr},
                {n: "Jugador 2", p: "E", o: tDB.ovr}, 
                {n: "Jugador 3", p: "A", o: tDB.ovr-1},
                {n: "Jugador 4", p: "AP", o: tDB.ovr-1}, 
                {n: "Jugador 5", p: "P", o: tDB.ovr}, 
                {n: "Sexto", p: "6M", o: tDB.ovr-2}
            ];
        } else {
            let slot = (p.rivalTeam === p.team) ? 1 : 0; 
            if(tDB.roster[slot]) {
                tDB.roster[slot].n = p.rivalName; 
                tDB.roster[slot].o = rivalOvr;
            }
        }
        tDB.star = p.rivalName; 
        
        if(leagueTable.length > 0) {
            let leagueTeam = leagueTable.find(t => t.name === p.rivalTeam);
            if(leagueTeam) {
                leagueTeam.star = p.rivalName;
            }
        }
    }
}

function getMyTeamOvr() { 
    let obj = DB[p.fase].teams.find(t => t.name === p.team); 
    return obj ? obj.ovr : 70; 
}

function evalRole() {
    let equipoOvr = getMyTeamOvr();
    if (p.fase === 0) {
        p.role = "Titular"; 
    } else {
        if (p.ovr >= equipoOvr + 3) {
            p.role = "Estrella";
        } else if (p.ovr >= equipoOvr - 5) {
            p.role = "Titular";
        } else {
            p.role = "Suplente";
        }
    }
}

// =====================================================================
// 3. INICIO DE PARTIDA Y CONFERENCIAS (BLINDADO)
// =====================================================================
window.onload = function() {
    try {
        if(localStorage.getItem('basketSaveData')) {
            let btn = document.getElementById('btn-continuar');
            if (btn) btn.style.display = 'block';
        }
    } catch(e) {}
};

function guardarPartida() {
    try {
        const saveData = { 
            jugador: p, 
            liga: leagueTable, 
            storyEvents: (typeof StorySystem !== 'undefined' ? StorySystem.events : []) 
        };
        localStorage.setItem('basketSaveData', JSON.stringify(saveData));
    } catch(e) {}
}

function cargarPartida() {
    try {
        const data = JSON.parse(localStorage.getItem('basketSaveData'));
        if(data) {
            p = { ...p, ...data.jugador };
            leagueTable = data.liga;
            p.teamData = leagueTable.find(t => t.name === p.team);
            p.ovr = calcOvr();
            
            if(typeof StorySystem !== 'undefined' && data.storyEvents) {
                StorySystem.events = data.storyEvents;
            }

            let setupUI = document.getElementById('setup-screen');
            if (setupUI) setupUI.style.display = 'none';
            let mainUI = document.getElementById('main-game-ui');
            if (mainUI) mainUI.style.display = 'flex';
            
            ubicarRival(); 
            evalRole(); 
            updateUI(); 
            renderMenu();
            escribirDialogo(`SISTEMA:<br>Partida cargada. Temporada ${p.season}/17.`);
        }
    } catch(e) {
        console.error("Error al cargar:", e);
    }
}

function iniciarCarrera() {
    try {
        let val = (id, def) => { let el = document.getElementById(id); return el ? el.value : def; };

        p.name = val('in-name', "Jugador");
        p.rivalName = val('in-rival-name', "Riki");
        p.dorsal = val('in-dorsal', "17");
        p.height = val('in-height', 195);
        
        let natSelect = document.getElementById('in-nat');
        p.nat = natSelect ? natSelect.value.substring(0, 4) : "🇪🇸"; 
        
        p.team = val('in-team', "C.B. Berenguer Dalma"); 
        p.pos = val('in-pos', "Base");
        p.style = val('in-style', "equilibrado");
        p.personality = val('in-personality', "deportista");
        
        p.tiro = 65; 
        p.fisico = 65; 
        p.manejo = 65; 
        p.def = 65; 
        p.bandeja = 65;

        if (p.style === "mate_tapon") { p.fisico += 14; p.def += 12; p.tiro -= 10; p.manejo -= 6; p.bandeja -= 4; }
        if (p.style === "tiro_robo") { p.tiro += 12; p.def += 10; p.fisico -= 8; p.manejo -= 4; p.bandeja -= 4; }
        if (p.style === "manejo_bandeja") { p.manejo += 12; p.bandeja += 12; p.fisico += 4; p.def -= 8; p.tiro -= 4; }
        if (p.style === "tiro_manejo") { p.tiro += 12; p.manejo += 10; p.bandeja += 4; p.def -= 8; p.fisico -= 4; }
        
        if (p.personality === "ambicioso") { p.money += 1500; }
        if (p.personality === "fiestero") { p.fame += 20; p.money += 500; }
        
        p.ovr = calcOvr();

        let setupUI = document.getElementById('setup-screen');
        if (setupUI) setupUI.style.display = 'none';
        
        let mainUI = document.getElementById('main-game-ui');
        if (mainUI) mainUI.style.display = 'flex';
        
        prepararLiga(); 
        evalRole(); 
        updateUI(); 
        renderMenu();

        escribirDialogo(`AGENTE:<br>Jugarás de ${p.pos} con el #${p.dorsal} en ${p.team}. ¡A por la Temporada ${p.season}!`);
        
        setTimeout(() => {
            if(typeof StorySystem !== 'undefined') {
                try {
                    StorySystem.trigger(
                        "🏀 BIENVENIDO A TU CARRERA",
                        `Esta es tu historia. Empiezas en la Liga Junior con ${p.ovr} OVR y los bolsillos vacíos. Tu meta: llegar a la NBA y convertirte en el G.O.A.T.<br><br>
                        ▶ <b>JUGAR</b> — Toma decisiones en cada partido.<br>
                        💪 <b>ENTRENAR</b> — En ACB y NBA, requerirás entrenar 2 veces para subir atributos.<br>
                        💵 <b>VIDA PRIVADA</b> — Gestiona tu dinero y tu fama.<br>
                        🏆 <b>PREMIOS</b> — Los gana quien más promedia, no quien tiene más OVR.<br><br>
                        Tienes 17 temporadas. ¡El balón es tuyo!`,
                        [{ text: "🔥 ¡A por el G.O.A.T.!", action: () => { p.fame += 2; updateUI(); renderMenu(); } }],
                        'intro_juego'
                    );
                } catch(e) {}
            }
        }, 600);

        guardarPartida();
    } catch(err) {
        alert("Atención: Hubo un pequeño fallo al leer el HTML. Abriendo partida por seguridad.");
        console.error(err);
    }
}

function prepararLiga() {
    ubicarRival(); 
    leagueTable = [];
    let phaseDB = [...DB[p.fase].teams];

    if (p.fase === 0) {
        phaseDB.sort(() => Math.random() - 0.5);
    }

    phaseDB.forEach((t, i) => {
        let conf = t.conf || 1;
        if (p.fase === 0) {
            conf = Math.floor(i / 5) + 1;
        }

        let defaultRoster = t.roster ? JSON.parse(JSON.stringify(t.roster)) : [
            {n: t.star||"Estrella", p:"B", o:t.ovr+3},
            {n: "Jugador 2", p:"E", o:t.ovr}, 
            {n: "Jugador 3", p:"A", o:t.ovr-1},
            {n: "Jugador 4", p:"AP", o:t.ovr-1}, 
            {n: "Jugador 5", p:"P", o:t.ovr}, 
            {n: "Sexto", p:"6M", o:t.ovr-2}
        ];
        
        defaultRoster.forEach(r => { 
            r.pts = 0; 
            r.reb = 0; 
            r.ast = 0; 
            r.rob = 0; 
            r.tap = 0; 
        });

        let equipo = { 
            name: t.name, 
            ovr: t.ovr, 
            star: defaultRoster[0].n, 
            starOvr: defaultRoster[0].o,
            starPts: 0, 
            v: 0, 
            d: 0, 
            pts: 0, 
            conf: conf, 
            roster: defaultRoster,
            isPlayer: (t.name === p.team) 
        };

        if (equipo.isPlayer) {
            p.teamData = equipo;
        }
        leagueTable.push(equipo);
    });
    
    // Blindaje extra
    if (!p.teamData || p.teamData.name === "") {
        p.teamData = leagueTable[0];
        p.team = p.teamData.name;
    }
}

// =====================================================================
// 4. MENÚS, ENTRENAMIENTO Y VIDA PRIVADA
// =====================================================================

// Sistema OVR estilo 2K: media ponderada por posición
function calcOvr() {
    // Pesos por posición (como en 2K: lo más importante de tu posición pesa más)
    const weights = {
        'Base':         { tiro: 0.20, manejo: 0.28, fisico: 0.18, def: 0.16, bandeja: 0.18 },
        'Escolta':      { tiro: 0.26, manejo: 0.20, fisico: 0.18, def: 0.18, bandeja: 0.18 },
        'Alero':        { tiro: 0.22, manejo: 0.18, fisico: 0.22, def: 0.18, bandeja: 0.20 },
        'Ala-Pívot':    { tiro: 0.16, manejo: 0.14, fisico: 0.26, def: 0.22, bandeja: 0.22 },
        'Pívot':        { tiro: 0.10, manejo: 0.10, fisico: 0.28, def: 0.28, bandeja: 0.24 },
    };
    let w = weights[p.pos] || weights['Alero'];
    let raw = p.tiro * w.tiro + p.manejo * w.manejo + p.fisico * w.fisico + p.def * w.def + p.bandeja * w.bandeja;
    return Math.round(raw);
}

function getAttrCost(val) {
    if (val >= 90) return 8000;
    if (val >= 85) return 4000;
    if (val >= 80) return 1500;
    if (val >= 75) return 600;
    if (val >= 70) return 250;
    return 100;
}

function trainAttr(attr) {
    let capOvr = (p.fase === 1) ? 83 : DB[p.fase].maxOvr;
    if (p.ovr >= capOvr) return alert(`Límite OVR alcanzado en esta liga (${capOvr}).`);

    let cost = getAttrCost(p[attr]);
    let cMod = p.personality === "deportista" ? Math.floor(cost * 0.8) : cost;
    if (p.money < cMod) return alert(`Fondos insuficientes. Necesitas ${cMod}€.`);

    p.money -= cMod;
    p[attr] += 1;
    p.ovr = Math.min(capOvr, calcOvr());

    const nombres = { fisico:'FÍSICO', tiro:'TIRO', def:'DEFENSA', manejo:'MANEJO', bandeja:'BANDEJA' };
    escribirDialogo(`💪 ${nombres[attr]} subido a ${p[attr]}. OVR: ${p.ovr}.`);
    evalRole(); updateUI(); renderMenu();
}

function renderMenu() {
    if (!p.teamData) { 
        p.teamData = leagueTable.find(t => t.name === p.team) || leagueTable[0]; 
    }
    if (!p.teamData) return;

    let numEquiposConf = leagueTable.filter(t => t.conf === p.teamData.conf).length;
    let partidosTemporada = (p.fase === 0) ? (numEquiposConf - 1) * 2 : (leagueTable.length - 1) * 2;
    let restantes = partidosTemporada - p.sMatches;
    
    let btnText = p.isCopa ? `▶ JUGAR COPA (${p.copaStage})` : (p.isPlayoffs ? `▶ JUGAR ${p.playoffStage}` : "▶ JUGAR PARTIDO");
    let btnBorder = p.isCopa ? 'border-color: #0ff; color: #0ff;' : (p.isPlayoffs ? 'border-color: gold; color: gold;' : '');
    
    let costMod = p.personality === "deportista" ? Math.floor(getAttrCost(65) * 0.8) : getAttrCost(65);

    // Costes individuales por atributo
    let cFis = p.personality==="deportista" ? Math.floor(getAttrCost(p.fisico)*0.8) : getAttrCost(p.fisico);
    let cTir = p.personality==="deportista" ? Math.floor(getAttrCost(p.tiro)*0.8)   : getAttrCost(p.tiro);
    let cDef = p.personality==="deportista" ? Math.floor(getAttrCost(p.def)*0.8)    : getAttrCost(p.def);
    let cMan = p.personality==="deportista" ? Math.floor(getAttrCost(p.manejo)*0.8) : getAttrCost(p.manejo);
    let cBan = p.personality==="deportista" ? Math.floor(getAttrCost(p.bandeja)*0.8): getAttrCost(p.bandeja);

    let act = document.getElementById('actions');
    if(!act) return;
    act.style.display = 'flex';
    act.innerHTML = `
        <div style="color: #00ff00; font-size: 0.6em; margin-bottom: 5px; font-weight:bold; display:flex; justify-content:space-between;">
            <span>PARTIDOS RESTANTES: ${restantes > 0 ? restantes : 'Playoffs'}</span>
            <span>QUÍMICA: ${p.chem}%</span>
        </div>
        <button onclick="play()" class="btn-main" style="${btnBorder}">${btnText}</button>
        <div style="background:#111; border:1px solid #333; border-radius:4px; padding:6px; margin-top:2px;">
            <div style="color:#0f0; font-size:0.55em; text-align:center; margin-bottom:5px; letter-spacing:1px;">💪 ENTRENAR ATRIBUTO</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;">
                <button onclick="trainAttr('fisico')" class="btn-main" style="font-size:0.55em; padding:5px; text-transform:none;">🏃 FÍS ${p.fisico} — ${cFis}€</button>
                <button onclick="trainAttr('tiro')" class="btn-main" style="font-size:0.55em; padding:5px; text-transform:none;">🎯 TIR ${p.tiro} — ${cTir}€</button>
                <button onclick="trainAttr('def')" class="btn-main" style="font-size:0.55em; padding:5px; text-transform:none;">🛡️ DEF ${p.def} — ${cDef}€</button>
                <button onclick="trainAttr('manejo')" class="btn-main" style="font-size:0.55em; padding:5px; text-transform:none;">🏀 MAN ${p.manejo} — ${cMan}€</button>
            </div>
            <button onclick="trainAttr('bandeja')" class="btn-main" style="width:100%; font-size:0.55em; padding:5px; margin-top:4px; text-transform:none;">🤸 BAN ${p.bandeja} — ${cBan}€</button>
        </div>
        <div style="display:flex; gap:5px;">
            <button onclick="mostrarPremios()" class="btn-main" style="flex:1; border-color:#0ff; color:#0ff;">🏆 PREMIOS</button>
        <div style="display:flex; gap:5px;">
            <button onclick="renderVidaPrivada()" class="btn-main" style="flex:1; border-color: gold; color: gold;">💵 VIDA PRIVADA</button>
            <button onclick="pedirTraspaso()" class="btn-main btn-trade" style="flex:1;" ${p.isPlayoffs || p.isCopa ? 'disabled' : ''}>🔄 TRASPASO</button>
        </div>
        <div style="display:flex; gap:5px; margin-bottom:5px;">
            <button onclick="abrirPerfil()" class="btn-main" style="flex:1; border-color: #555; color: #ccc; margin:0; padding:8px; font-size:0.65em;">📊 PERFIL</button>
            <button onclick="abrirEquipos()" class="btn-main" style="flex:1; border-color: #555; color: #ccc; margin:0; padding:8px; font-size:0.65em;">⛹️ EQUIPOS</button>
            <button onclick="abrirCalendario()" class="btn-main" style="flex:1; border-color: #555; color: #ccc; margin:0; padding:8px; font-size:0.65em;">📅 PARTIDOS</button>
        </div>
    `;
    
    if(p.isPlayoffs) {
        act.innerHTML += `<button onclick="verCuadroPlayoffs()" class="btn-main" style="border-color:#f0f; color:#f0f; margin-top:5px;">🏀 VER CUADRO DE PLAYOFFS</button>`;
    }

    guardarPartida();
}

// ---------------------------------------------------------------------
// CUADRO DE PLAYOFFS REALISTA (8 EQUIPOS, 4 RONDAS)
// ---------------------------------------------------------------------
function verCuadroPlayoffs() {
    let title = p.fase === 1 ? "CUADRO PLAYOFFS ACB" : "CUADRO PLAYOFFS NBA";
    
    let html = `
    <div class="dialog-box log-entry" style="border-color:gold; padding:10px; background:#111;">
        <h3 style="color:gold; text-align:center; margin-bottom:10px; font-size:0.85em;">🏆 ${title} 🏆</h3>
        <div style="font-size:0.65em; text-align:center; color:#fff; margin-bottom:15px;">Fase Actual: <b style="color:var(--accent);">${p.playoffStage}</b></div>
        
        <div style="display:flex; justify-content:space-between; font-size:0.5em; text-align:center;">
            
            <!-- CONFERENCIA / LADO IZQUIERDO -->
            <div style="flex:1.2; border-right:1px solid #333; padding-right:5px;">
                <b style="color:#0ff; display:block; margin-bottom:5px; font-size:1.2em;">${p.fase===1 ? 'LLAVES A' : 'OESTE'}</b>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='PRIMERA RONDA' ? 'border-color:var(--accent); color:var(--accent);' : ''}">1º vs 8º / 4º vs 5º</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='SEMIFINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">SEMIFINAL CONF</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='FINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">FINAL CONF</div>
            </div>
            
            <!-- CENTRO / GRAN FINAL -->
            <div style="flex:1; display:flex; align-items:center; justify-content:center; flex-direction:column; padding:0 8px;">
                <div style="border:2px solid gold; padding:10px; background:#222; font-weight:bold; width:100%; border-radius:4px; font-size:1.1em; ${p.playoffStage==='GRAN FINAL' ? 'box-shadow:0 0 10px gold;' : ''}">FINAL</div>
            </div>
            
            <!-- CONFERENCIA / LADO DERECHO -->
            <div style="flex:1.2; border-left:1px solid #333; padding-left:5px;">
                <b style="color:#0ff; display:block; margin-bottom:5px; font-size:1.2em;">${p.fase===1 ? 'LLAVES B' : 'ESTE'}</b>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='PRIMERA RONDA' ? 'border-color:var(--accent); color:var(--accent);' : ''}">2º vs 7º / 3º vs 6º</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='SEMIFINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">SEMIFINAL CONF</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='FINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">FINAL CONF</div>
            </div>

        </div>
        
        <div style="background:rgba(255,255,255,0.05); padding:8px; border-radius:6px; margin-top:15px; border:1px solid #333;">
            <p style="text-align:center; color:#ccc; font-size:0.65em; margin:0;">
                <span style="color:var(--accent);">TU EQUIPO:</span> <b style="color:#fff;">${p.team}</b><br><br>
                <span style="color:var(--danger);">TU RIVAL:</span> <b style="color:#fff;">${p.playoffRival ? p.playoffRival.name : 'N/A'}</b>
            </p>
        </div>
    </div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
}

function mostrarPremios() {
    let m = Math.max(1, p.stats.matches);
    let allPlayers = [];
    
    allPlayers.push({
        name: p.name.substring(0,12), 
        team: p.team, 
        isMe: true, 
        role: p.role, 
        v: p.teamData.v, 
        ovr: p.ovr, 
        def: p.def,
        ppp: p.stats.pts / m, 
        rpp: p.stats.reb / m, 
        app: p.stats.ast / m, 
        ropp: p.stats.rob / m, 
        tapp: p.stats.tap / m
    });

    leagueTable.forEach(t => {
        let mAI = Math.max(1, t.v + t.d);
        if(t.roster) {
            t.roster.forEach((jug, idx) => {
                if (t.isPlayer && jug.n === p.name) return; 
                if (jug.n.includes("Jugador") || jug.n === "Sexto" || jug.n === "Veterano") return; 
                
                allPlayers.push({
                    name: jug.n.substring(0,12), 
                    team: t.name, 
                    isMe: false, 
                    role: (idx >= 5 || jug.p === "6M") ? "Suplente" : "Titular", 
                    v: t.v, 
                    ovr: jug.o, 
                    def: jug.o - 4,
                    ppp: jug.pts / mAI, 
                    rpp: jug.reb / mAI, 
                    app: jug.ast / mAI, 
                    ropp: jug.rob / mAI, 
                    tapp: jug.tap / mAI
                });
            });
        }
    });

    allPlayers.forEach(x => {
        x.mvpScore = (x.ppp * 1.0) + (x.rpp * 1.2) + (x.app * 1.5) + (x.ropp * 2.0) + (x.tapp * 2.0) + (x.v * 0.5);
        x.dpoyScore = (x.ropp * 4.0) + (x.tapp * 4.0) + (x.def * 0.1) + (x.rpp * 0.5) + (x.v * 0.2);
    });

    const getTop5 = (arr, key) => [...arr].sort((a, b) => b[key] - a[key]).slice(0, 5);

    let mvpList = getTop5(allPlayers, 'mvpScore');
    let dpoyList = getTop5(allPlayers, 'dpoyScore');
    let sixthList = getTop5(allPlayers.filter(x => x.role === "Suplente"), 'mvpScore');
    let rookieList = getTop5(allPlayers.filter(x => x.ovr < 80 && x.ovr >= 70), 'mvpScore');

    let html = `
    <div class="dialog-box log-entry" style="border-color:#0ff; padding: 15px; background: rgba(0,0,0,0.8);">
        <h3 style="color:#0ff; text-align:center; margin-bottom:15px; font-size:1em;">🏆 CARRERA POR LOS PREMIOS (TOP 5) 🏆</h3>`;

    const renderList = (titulo, list, statType) => {
        let section = `<div style="margin-bottom:18px; font-size:0.75em;">
            <b style="color:var(--accent); font-size:1.1em; border-bottom:1px solid #444; display:block; margin-bottom:5px;">${titulo}</b>`;
        
        list.forEach((x, i) => {
            let color = x.isMe ? "var(--success)" : (i === 0 ? "gold" : "#eee");
            let statsText = statType === 'mvp' ? `${x.ppp.toFixed(1)}p ${x.app.toFixed(1)}a ${x.rpp.toFixed(1)}r` : `${x.ropp.toFixed(1)}ro ${x.tapp.toFixed(1)}ta`;
            
            section += `
            <div style="display:flex; justify-content:space-between; color:${color}; margin-bottom:2px;">
                <span>${i+1}. ${x.isMe ? '⭐ ' : ''}${x.name} <small style="color:#888;">(${x.team})</small></span>
                <span style="font-family:monospace;">${statsText}</span>
            </div>`;
        });
        return section + `</div>`;
    };

    html += renderList("M.V.P. (Most Valuable Player)", mvpList, 'mvp');
    html += renderList("DEFENSOR DEL AÑO (DPOY)", dpoyList, 'def');
    html += renderList("6º HOMBRE DEL AÑO", sixthList, 'mvp');
    html += renderList("ROOKIE DEL AÑO", rookieList, 'mvp');
    html += `</div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom();
}

function renderVidaPrivada() {
    let act = document.getElementById('actions');
    if(!act) return;
    act.innerHTML = `
        <div style="font-size: 0.7em; color: gold; margin-bottom: 10px; text-align:center; font-weight:bold;">--- VIDA PRIVADA ---</div>
        <button onclick="ejecutarGasto('kebab')" class="btn-main" style="text-transform:none; font-size: 0.7em;">🥙 KEBAB (15€) | -1 Qui</button>
        <button onclick="ejecutarGasto('fiesta')" class="btn-main" style="text-transform:none; font-size: 0.7em;">🍺 FIESTA (500€) | +3 Fam, -5 Qui</button>
        <button onclick="ejecutarGasto('crio')" class="btn-main" style="text-transform:none; font-size: 0.7em;">❄️ CRIOTERAPIA (1.5K€) | +5 Qui</button>
        <button onclick="ejecutarGasto('vaca')" class="btn-main" style="text-transform:none; font-size: 0.7em;">🏖️ VACACIONES (2K€) | Reset Qui</button>
        <button onclick="ejecutarGasto('gear')" class="btn-main" ${p.proGear?'disabled':''} style="text-transform:none; font-size: 0.7em; ${p.proGear ? 'border-color:#333; color:#555;' : ''}">👟 EQUIPO PRO (3K€) | +10 Fam</button>
        <button onclick="ejecutarGasto('entrenador')" class="btn-main" style="text-transform:none; font-size: 0.7em;">🧠 COACH MENTAL (5K€) | +15 Qui</button>
        <button onclick="ejecutarGasto('reloj')" class="btn-main" ${p.hasWatch?'disabled':''} style="text-transform:none; font-size: 0.7em; ${p.hasWatch ? 'border-color:#333; color:#555;' : ''}">⌚ RELOJ ORO (12K€) | +4 Fam</button>
        <button onclick="ejecutarGasto('coche')" class="btn-main" ${p.hasCar?'disabled':''} style="text-transform:none; font-size: 0.7em; ${p.hasCar ? 'border-color:#333; color:#555;' : ''}">🏎️ DEPORTIVO (50K€) | +5 Fam</button>
        <button onclick="ejecutarGasto('mansion')" class="btn-main" ${p.hasHouse?'disabled':''} style="text-transform:none; font-size: 0.7em; border-color:gold; ${p.hasHouse ? 'border-color:#333; color:#555;' : 'color:gold;'}">🏠 MANSIÓN (150K€) | +10 Fam</button>
        <button onclick="renderMenu()" class="btn-main" style="border-color: #555; color: #ccc; margin-top:10px;">⬅ VOLVER</button>
    `;
}

function ejecutarGasto(tipo) {
    if (tipo === 'kebab' && p.money >= 15) { 
        p.money -= 15; 
        p.chem -= 1; 
        escribirDialogo("🥙 KEBAB: Te saltas la dieta. -1 Química en el vestuario."); 
    } 
    else if (tipo === 'fiesta' && p.money >= 500) { 
        p.money -= 500; 
        p.fame += 3; 
        p.chem -= 5; 
        escribirDialogo("🍺 FIESTA: Noche VIP. +3 Fama, -5 Química."); 
    } 
    else if (tipo === 'crio' && p.money >= 1500) { 
        p.money -= 1500; 
        p.chem += 5; 
        escribirDialogo("❄️ CRIOTERAPIA: Gran actitud profesional. +5 Química con el equipo."); 
    } 
    else if (tipo === 'vaca' && p.money >= 2000) { 
        p.money -= 2000; 
        p.chem = 100; 
        escribirDialogo("🏖️ VACACIONES: Desconexión total. Química recuperada al 100%."); 
    } 
    else if (tipo === 'gear' && p.money >= 3000) { 
        p.money -= 3000; 
        p.proGear = true; 
        p.fame += 10; 
        escribirDialogo("👟 EQUIPO PRO: Todos hablan de tus zapatillas. +10 Fama."); 
    } 
    else if (tipo === 'entrenador' && p.money >= 5000) { 
        p.money -= 5000; 
        p.chem += 15; 
        escribirDialogo("🧠 COACH MENTAL: Sesión de cohesión. +15 Química."); 
    } 
    else if (tipo === 'reloj' && p.money >= 12000) { 
        p.money -= 12000; 
        p.hasWatch = true; 
        p.fame += 4; 
        escribirDialogo("⌚ RELOJ DE ORO: Puro estatus. +4 Fama al instante."); 
    } 
    else if (tipo === 'coche' && p.money >= 50000) { 
        p.money -= 50000; 
        p.hasCar = true; 
        p.fame += 5; 
        escribirDialogo("🏎️ DEPORTIVO: Llegas al pabellón rugiendo. +5 Fama."); 
    } 
    else if (tipo === 'mansion' && p.money >= 150000) { 
        p.money -= 150000; 
        p.hasHouse = true; 
        p.fame += 10; 
        escribirDialogo("🏠 MANSIÓN: Una casa de locura. +10 Fama."); 
    } 
    else { 
        alert("No tienes suficiente dinero."); 
    }
    
    if (p.chem > 100) p.chem = 100;
    if (p.chem < 0) p.chem = 0;
    if (p.fame > FAME_MAX) p.fame = FAME_MAX;

    updateUI(); 
    renderVidaPrivada();
}

function checkPatrocinios() {
    if (p.fame >= 20 && p.sponsor === "Ninguno") {
        p.sponsor = "Deportes Paco";
        escribirDialogo("🤝 <b>PATROCINIO:</b> 'Deportes Paco' ha visto tu potencial. Te pagarán 50€ extra por victoria.");
    } else if (p.fame >= 45 && (p.sponsor === "Ninguno" || p.sponsor === "Deportes Paco")) {
        p.sponsor = "Kicks Brand";
        escribirDialogo("👟 <b>PATROCINIO:</b> ¡La marca 'Kicks Brand' te ficha! Te pagarán 150€ extra por victoria.");
    } else if (p.fame >= 75 && p.sponsor === "Kicks Brand") {
        p.sponsor = "Global Sports";
        escribirDialogo("🌍 <b>PATROCINIO MILLONARIO:</b> ¡Eres una estrella global! 'Global Sports' te firma un contrato de 400€ extra por victoria.");
    }
}

// =====================================================================
// 5. MOTOR DE PARTIDO Y ESTADÍSTICAS
// =====================================================================
function play() {
    evalRole(); 
    updateUI();
    
    let posiblesRivales;
    if (p.isCopa) {
        posiblesRivales = [p.copaRival];
    } else if (p.isPlayoffs) {
        posiblesRivales = [p.playoffRival];
    } else {
        posiblesRivales = leagueTable.filter(t => !t.isPlayer && (p.fase===0 ? t.conf===p.teamData.conf : true));
    }
    
    match.rival = posiblesRivales[p.sMatches % posiblesRivales.length];
    match.j = 0; 
    match.pts = 0; 
    match.ast = 0; 
    match.reb = 0; 
    match.rob = 0; 
    match.tap = 0; 
    match.tc = 0; 
    match.ok = 0;
    
    let diff = getMyTeamOvr() - match.rival.ovr; 
    match.finalBaseMyScore = 70 + Math.floor(diff * 0.3) + Math.floor(Math.random() * 8);
    match.finalBaseRivScore = 70 - Math.floor(diff * 0.3) + Math.floor(Math.random() * 8); 

    if (p.fase === 0) { 
        match.finalBaseMyScore += 1; 
        match.finalBaseRivScore -= 1; 
    } 

    match.myScore = 0; 
    match.rivScore = 0;
    match.numPlays = p.role === "Suplente" ? 8 : (p.role === "Titular" ? 12 : 15);
    
    let defPlays = Math.floor(match.numPlays * 0.4);
    let attPlays = match.numPlays - defPlays;
    
    match.pool = [];
    for(let i=0; i<attPlays; i++) match.pool.push("ATAQUE");
    for(let i=0; i<defPlays; i++) match.pool.push("DEFENSA");
    match.pool.sort(() => Math.random() - 0.5);

    match.ritmo = ["LENTO", "NORMAL", "RÁPIDO"][Math.floor(Math.random()*3)];

    let sb = document.getElementById('live-scoreboard');
    if(sb) sb.style.display = 'flex';
    
    let myt = document.getElementById('sb-my-team');
    if(myt) myt.innerText = p.team.substring(0, 10).toUpperCase();
    
    let riv = document.getElementById('sb-rival-name');
    if(riv) riv.innerText = match.rival.name.substring(0, 10).toUpperCase();
    
    let sbt = document.getElementById('sb-time');
    if(sbt) sbt.innerHTML = `1Q | 10:00<br><span style="font-size:0.6em; color:var(--accent);">RITMO: ${match.ritmo}</span>`;
    
    updateScoreboard();

    let gl = document.getElementById('game-log');
    if(gl) gl.innerHTML = ''; 
    
    let previaTexto = diff < -5 ? `Partido reñido. Tienen más calidad, ¡pero podemos ganar!` : `Somos favoritos. ¡A ganar!`;
    
    if(p.isCopa) {
        previaTexto = `🏆 ¡ELIMINATORIA DE COPA! A vida o muerte.`;
    } else if(p.isPlayoffs) {
        previaTexto = `¡Tensión máxima! Nos jugamos todo en los Playoffs.`;
    }
    
    escribirDialogo(`RETRANSMISIÓN:<br><br>¡Balón al aire! Jugamos contra ${match.rival.name}.<br>${previaTexto}`);
    
    let act = document.getElementById('actions');
    if(act) act.innerHTML = ''; 
    
    setTimeout(next, 2000);
}

function updateScoreboard() {
    let myp = document.getElementById('sb-my-pts');
    if(myp) myp.innerText = match.myScore;
    
    let rvp = document.getElementById('sb-riv-pts');
    if(rvp) rvp.innerText = match.rivScore;
}

function getProbabilidad(accion) {
    let diffOvr = p.ovr - match.rival.ovr;
    let mod = diffOvr; 
    
    if (p.fase === 0) mod += 2; 

    let baseProb = (accion==='m') ? p.fisico :
                   (accion==='b') ? p.bandeja :
                   (accion==='t') ? p.tiro :
                   (accion==='a') ? p.manejo :
                   (accion==='ro') ? p.def-5 :
                   (accion==='ta') ? p.def : Math.max(p.fisico,p.def)+10;
                   
    let proNerf = p.fase === 1 ? 15 : (p.fase === 2 ? 10 : 0); 
    
    let chemMod = 0;
    if (p.chem < 40) chemMod = -5;
    if (p.chem > 80) chemMod = 5;

    let fatiga = Math.floor(match.j * 1.0); 

    let finalProb = baseProb + mod - proNerf - (GLOBAL_DIFF * 10) + chemMod - fatiga;
    
    if (accion === 'ro' || accion === 'ta') finalProb -= 10; 
    if (p.ovr >= 75 && p.ovr <= 85) finalProb -= 5;
    
    return Math.max(10, Math.min(80, finalProb));
}

function getPlayTime(j, totalPlays) {
    let maxSecs = 40 * 60; 
    let secPerPlay = Math.floor(maxSecs / totalPlays);
    let elapsed = j * secPerPlay;
    
    let q = Math.floor(elapsed / 600) + 1;
    if(q > 4) q = 4;
    
    let secInQ = 600 - (elapsed % 600);
    if(j === totalPlays - 1) {
        secInQ = Math.floor(Math.random()*15); 
    }
    
    let m = Math.floor(secInQ/60);
    let s = secInQ%60;
    return `${q}Q | ${m<10?'0'+m:m}:${s<10?'0'+s:s}`;
}

function next() {
    if (match.j >= match.numPlays) {
        return finish();
    }
    
    let multRitmo = match.ritmo === "RÁPIDO" ? 1.3 : (match.ritmo === "LENTO" ? 0.7 : 1);
    match.myScore += Math.floor((match.finalBaseMyScore / match.numPlays) * multRitmo);
    match.rivScore += Math.floor((match.finalBaseRivScore / match.numPlays) * multRitmo);
    
    let sbt = document.getElementById('sb-time');
    if(sbt) sbt.innerHTML = `${getPlayTime(match.j, match.numPlays)}<br><span style="font-size:0.6em; color:var(--accent);">RITMO: ${match.ritmo}</span>`;
    
    updateScoreboard();
    
    let tipo = match.pool[match.j];
    let html = `
    <div class="dialog-box log-entry">
        <span style="font-size:0.7em; color:var(--accent);">SITUACIÓN: ${tipo}</span>
        <div class="action-btns" id="btns-${match.j}" style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px;">`;
    
    if (tipo === "ATAQUE") {
        html += `
            <button onclick="res('m', ${match.j})">MATE [${getProbabilidad('m')}%]</button>
            <button onclick="res('b', ${match.j})">BANDEJA [${getProbabilidad('b')}%]</button>
            <button onclick="res('t', ${match.j})">TRIPLE [${getProbabilidad('t')}%]</button>
            <button onclick="res('a', ${match.j})">ASISTIR [${getProbabilidad('a')}%]</button>`;
    } else {
        html += `
            <button onclick="res('ro', ${match.j})">ROBO [${getProbabilidad('ro')}%]</button>
            <button onclick="res('ta', ${match.j})">TAPÓN [${getProbabilidad('ta')}%]</button>
            <button onclick="res('re', ${match.j})">REBOTE [${getProbabilidad('re')}%]</button>
            <button disabled style="border:none;"></button>`;
    }
    html += `</div><div id="res-${match.j}" style="margin-top: 15px; font-size: 0.7em;"></div></div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom();
}

function res(tipo, id) {
    document.querySelectorAll(`#btns-${id} button`).forEach(b => b.disabled = true);
    
    let ok = (Math.random() * 100 < getProbabilidad(tipo)); 
    let msg = ""; 
    let pts = 0;
    
    if(['m','t','b'].includes(tipo)) p.stats.tcAttempt++;
    if(tipo==='t') p.stats.t3Attempt++;

    if(tipo === 'm') { 
        if(ok){ pts=2; match.tc++; p.stats.tcMake++; msg=`¡Póster brutal!`; } 
        else { msg=`Bloqueado por la defensa.`; } 
    }
    else if(tipo === 'b') { 
        if(ok){ pts=2; match.tc++; p.stats.tcMake++; msg=`¡Bandeja con mucha clase!`; } 
        else { msg=`Falla la bandeja bajo el aro.`; } 
    }
    else if(tipo === 't') { 
        if(ok){ pts=3; match.tc++; p.stats.tcMake++; p.stats.t3Make++; msg=`¡Triple limpio!`; } 
        else { msg=`El tiro sale fuera.`; } 
    }
    else if(tipo === 'a') { 
        if(ok){ pts=2; match.ast++; msg=`Asistencia de manual.`; } 
        else { msg=`Pase interceptado.`; } 
    }
    else if(tipo === 'ro') { 
        if(ok){ match.rob++; match.rivScore -= 2; msg=`¡Gran robo! Evitas sus puntos.`; } 
        else { msg=`Falta personal.`; } 
    }
    else if(tipo === 'ta') { 
        if(ok){ match.tap++; match.rivScore -= 2; msg=`¡Tapón tremendo! Frenas su ataque.`; } 
        else { msg=`Llega tarde, canasta rival.`; } 
    }
    else if(tipo === 're') { 
        if(ok){ match.reb++; match.rivScore -= 2; msg=`Rebote defensivo asegurado.`; } 
        else { msg=`Pierde el rebote.`; } 
    }

    if(ok) { 
        match.ok++; 
        match.myScore += (['m','b','t','a'].includes(tipo)) ? pts : 0; 
        match.pts += (['m','b','t'].includes(tipo)) ? pts : 0; 
    } else { 
        match.rivScore += 2; 
    }

    updateScoreboard(); 
    let rd = document.getElementById(`res-${id}`);
    if(rd) rd.innerHTML = `<b style="color:${ok ? 'var(--success)' : 'var(--danger)'}">🎙️: "${msg}"</b>`;
    
    match.j++; 
    scrollToBottom(); 
    setTimeout(next, 1500);
}

// --- LÓGICA DE MÁRGENES BASADOS ESTRICTAMENTE EN OVR PARA LA IA ---
function distributeStats(roster, totalPts) {
    if(!roster || roster.length === 0) return;
    
    roster.forEach((jug, idx) => {
        let isBench = (idx >= 5 || jug.p === "6M" || jug.p === "BAN");
        let mult = isBench ? 0.5 : 1.0;

        let pts, ast, reb, rob, tap;
        
        // Puntos
        if (jug.o >= 80 && jug.o <= 88) {
            let t = (jug.o - 80) / 8;
            pts = Math.max(15, Math.min(28, (18 + t * 7) + (Math.random()*10 - 5)));
        } else if (jug.o >= 89) {
            let t = Math.min(1, (jug.o - 89) / 10);
            pts = Math.max(20, Math.min(45, (25 + t * 13) + (Math.random()*15 - 5)));
        } else {
            pts = 8 + (jug.o / 8) + Math.random() * 8;
        }

        // Rebotes, Asistencias, Robos y Tapones con márgenes por OVR
        if (jug.o < 75) {
            reb = 1 + Math.random() * 3; 
            ast = 0 + Math.random() * 3; 
            rob = Math.random() * 1; 
            tap = Math.random() * 1;
        } else if (jug.o < 85) {
            reb = 3 + Math.random() * 4; 
            ast = 2 + Math.random() * 4; 
            rob = Math.random() * 2; 
            tap = Math.random() * 1.5;
        } else if (jug.o < 92) {
            reb = 5 + Math.random() * 5; 
            ast = 4 + Math.random() * 5; 
            rob = 0.5 + Math.random() * 2; 
            tap = 0.5 + Math.random() * 2;
        } else {
            reb = 7 + Math.random() * 6; 
            ast = 6 + Math.random() * 6; 
            rob = 1 + Math.random() * 2.5; 
            tap = 1 + Math.random() * 2.5;
        }

        jug.pts += Math.floor(pts * mult);
        jug.reb += Math.floor(reb * mult);
        jug.ast += Math.floor(ast * mult);
        jug.rob += Math.floor(rob * mult);
        jug.tap += Math.floor(tap * mult);
    });
}

// --- LÓGICA DE MÁRGENES BASADOS ESTRICTAMENTE EN OVR PARA EL JUGADOR ---
function finish() {
    let sb = document.getElementById('live-scoreboard');
    if(sb) sb.style.display = 'none';
    
    let roleMult = p.role === "Estrella" ? 1.2 : (p.role === "Titular" ? 1.0 : 0.6); 
    
    let gamePts, minAst, maxAst, minReb, maxReb, minRob, maxRob, minTap, maxTap;

    // Puntos (Igual que antes, basado en OVR)
    if (p.ovr >= 80 && p.ovr <= 88) {
        let t = (p.ovr - 80) / 8; 
        gamePts = Math.max(15, Math.min(28, (18 + t * 7) + (Math.random() * 10 - 5)));
    } else if (p.ovr >= 89) {
        let t = (p.ovr - 89) / 10; 
        gamePts = Math.max(20, Math.min(45, (25 + t * 13) + (Math.random() * 15 - 5)));
    } else {
        gamePts = match.pts + Math.floor((Math.random() * 4 + (p.ovr / 10)) * roleMult);
    }

    // Márgenes estrictos para Stats Secundarias basados en OVR
    if (p.ovr < 75) {
        minAst = 1; maxAst = 4; 
        minReb = 2; maxReb = 5; 
        minRob = 0; maxRob = 1; 
        minTap = 0; maxTap = 1;
    } else if (p.ovr < 85) {
        minAst = 3; maxAst = 7; 
        minReb = 4; maxReb = 8; 
        minRob = 0; maxRob = 2; 
        minTap = 0; maxTap = 2;
    } else if (p.ovr < 92) {
        minAst = 5; maxAst = 10; 
        minReb = 6; maxReb = 11; 
        minRob = 1; maxRob = 3; 
        minTap = 1; maxTap = 3;
    } else {
        minAst = 7; maxAst = 14; 
        minReb = 8; maxReb = 14; 
        minRob = 1; maxRob = 4; 
        minTap = 1; maxTap = 4;
    }

    // Sumamos lo que hayas hecho manualmente en el partido + el simulado con márgenes y rol
    let gameAst = match.ast + Math.floor((minAst + Math.random() * (maxAst - minAst)) * roleMult);
    let gameReb = match.reb + Math.floor((minReb + Math.random() * (maxReb - minReb)) * roleMult);
    let gameRob = match.rob + Math.floor((minRob + Math.random() * (maxRob - minRob)) * roleMult);
    let gameTap = match.tap + Math.floor((minTap + Math.random() * (maxTap - minTap)) * roleMult);

    let extTcAtt = Math.floor(gamePts / 2) + Math.floor(Math.random() * 4);
    let extTcMak = Math.floor(gamePts / 2);
    let extT3Att = Math.floor(Math.random() * 4);
    let extT3Mak = Math.floor(Math.random() * (extT3Att + 1));

    p.stats.tcAttempt += extTcAtt; 
    p.stats.tcMake += extTcMak;
    p.stats.t3Attempt += extT3Att; 
    p.stats.t3Make += extT3Mak;

    let win = match.myScore > match.rivScore;
    if(match.myScore === match.rivScore) { 
        if(Math.random() > 0.4) { 
            match.myScore += 2; 
            win = true; 
        } else { 
            match.rivScore += 2; 
            win = false; 
        } 
    }

    if (!p.isPlayoffs && !p.isCopa) {
        if(win) { 
            p.teamData.v++; 
            match.rival.d++; 
        } else { 
            p.teamData.d++; 
            match.rival.v++; 
        }
        match.rival.pts += match.rivScore; 
        
        let myTeamRestPts = Math.max(0, match.myScore - gamePts);
        distributeStats(p.teamData.roster, myTeamRestPts);
        distributeStats(match.rival.roster, match.rivScore);
        match.rival.starPts = match.rival.roster[0].pts;
        
        leagueTable.forEach(r => { 
            if(!r.isPlayer && r.name !== match.rival.name) { 
                let simScore = Math.floor(70 + Math.random()*25); 
                r.pts += simScore; 
                
                if(Math.random() > 0.5) r.v++; 
                else r.d++; 
                
                distributeStats(r.roster, simScore);
                r.starPts = r.roster[0].pts;
            }
        });
    }

    p.stats.pts += gamePts; 
    p.stats.ast += gameAst; 
    p.stats.reb += gameReb; 
    p.stats.rob += gameRob; 
    p.stats.tap += gameTap;
    p.stats.matches++; 
    
    if(!p.isCopa && !p.isPlayoffs) {
        p.sMatches++; 
        p.teamData.pts += gamePts;
    }
    
    let fameChange = 0;
    
    if (gamePts >= 20) { 
        fameChange += 0.5; 
        p.stats.gamesSinceBig = 0; 
    } else { 
        p.stats.gamesSinceBig++; 
    }
    
    if (gamePts >= 15) {
        p.stats.streak15++; 
    } else {
        p.stats.streak15 = 0;
    }
    
    if (p.stats.streak15 >= 3) { 
        fameChange += 1; 
        p.stats.streak15 = 0; 
        escribirDialogo("🔥 ESTÁS ON FIRE: Bono +1 Fama por racha (+15pts en 3 partidos)."); 
    }

    if (win) { 
        fameChange += 0.2; 
        p.chem += 2; 
        p.stats.lossStreak = 0; 
        if (match.rival.ovr > getMyTeamOvr()) fameChange += 0.3; 
    } else { 
        fameChange -= 1.5; 
        p.chem -= 1; 
        p.stats.lossStreak++; 
    }

    if (p.stats.gamesSinceBig >= 6) { 
        fameChange -= 2; 
        p.stats.gamesSinceBig = 0; 
        escribirDialogo("📉 El público te está olvidando (6 partidos sin 20 pts). -2 Fama."); 
    }

    let proMultiplier = p.fase === 0 ? 1.0 : (p.fase === 1 ? 0.8 : 0.6);
    if (p.fame >= 55 && fameChange > 0) { 
        fameChange *= 0.3; 
    }
    p.fame += (fameChange * proMultiplier);

    if (p.fase === 1 && p.fame > FAME_ACB_LIMIT) p.fame = FAME_ACB_LIMIT;
    if (p.fame > FAME_MAX) p.fame = FAME_MAX;
    if (p.fame < 0) p.fame = 0;
    if (p.chem > 100) p.chem = 100;
    if (p.chem < 0) p.chem = 0;

    checkPatrocinios();

    let sueldo = p.role === "Estrella" ? 400 : (p.role === "Titular" ? 200 : 150);
    let extraSponsor = 0;
    if (p.sponsor === "Deportes Paco") extraSponsor = 50;
    if (p.sponsor === "Kicks Brand") extraSponsor = 150;
    if (p.sponsor === "Global Sports") extraSponsor = 400;
    
    if (p.personality === "ambicioso") { 
        sueldo = Math.floor(sueldo * 1.5); 
        extraSponsor = Math.floor(extraSponsor * 1.5); 
    }
    if(p.personality === "fiestero" && win) {
        sueldo += 50; 
    }
    
    let carCost = p.hasCar ? 100 : 0; 
    p.money += (win ? sueldo : Math.floor(sueldo / 2)) + extraSponsor - carCost; 

    let endMsg = win ? `¡Victoria de ${p.team}!` : `Derrota para ${p.team}...`;
    let endHtml = `
    <div class="dialog-box log-entry" style="text-align:center; border-color:${win ? 'var(--success)' : 'var(--danger)'}">
        <p style="font-size:1.2em; margin-bottom:10px;">${match.myScore} - ${match.rivScore}</p>
        <p style="font-size:0.7em; color:${win ? 'var(--success)' : 'var(--danger)'}; font-weight:bold;">${endMsg}</p>
        <p style="font-size:0.55em; color:#aaa; margin-top:10px;">
            Tus stats reales hoy: ${gamePts} PTS | ${gameAst} AST | ${gameReb} REB | ${gameRob} ROB | ${gameTap} TAP
        </p>
        <p style="font-size:0.55em; color:gold; margin-top:5px;">Fama: ${p.fame.toFixed(1)} | Química: ${p.chem}%</p>
    </div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', endHtml); 
    scrollToBottom(); 
    updateUI();
    
    if(typeof StorySystem !== 'undefined') {
        try { StorySystem.checkEvents(); } catch(e){}
    }

    let numEquiposConf = leagueTable.filter(t => t.conf === p.teamData.conf).length;
    let partidosTemporada = (p.fase === 0) ? (numEquiposConf - 1) * 2 : (leagueTable.length - 1) * 2;

    if (p.sMatches === Math.floor(partidosTemporada / 2) && !p.copaPlayedThisSeason && !p.isPlayoffs && !p.isCopa) {
        let misEquipos = p.fase === 0 ? leagueTable.filter(t => t.conf === p.teamData.conf) : leagueTable;
        misEquipos.sort((a,b) => b.v - a.v);
        let miPos = misEquipos.findIndex(t => t.name === p.team) + 1;
        p.copaPlayedThisSeason = true;
        
        if (miPos <= 8) {
            p.isCopa = true;
            p.copaStage = "CUARTOS";
            p.copaRival = misEquipos[7 - (miPos - 1)]; 
            if(!p.copaRival || p.copaRival.name === p.team) {
                p.copaRival = misEquipos.find(t => t.name !== p.team); 
            }
            escribirDialogo(`🏆 ¡CLASIFICADOS PARA LA COPA! Entramos como ${miPos}º a mitad de temporada y jugaremos contra ${p.copaRival.name}.`);
            setTimeout(renderMenu, 5000);
            return;
        } else {
            escribirDialogo(`❌ No nos hemos clasificado para la Copa (${miPos}º a mitad de temporada). Toca verla por la tele.`);
        }
    }

    if (p.isCopa) {
        if (p.copaStage === "CUARTOS") {
            if(win) { 
                p.copaStage = "SEMIFINAL"; 
                p.copaRival = leagueTable.filter(t => t.name !== p.team)[Math.floor(Math.random() * 4)]; 
                escribirDialogo(`🏆 ¡Pasamos a Semis de Copa! Siguiente rival: ${p.copaRival.name}`); 
                setTimeout(renderMenu, 4000); 
            } else { 
                p.isCopa = false; 
                escribirDialogo(`❌ Eliminados de la Copa en Cuartos. Volvemos a la liga.`); 
                setTimeout(renderMenu, 4000); 
            }
        } else if (p.copaStage === "SEMIFINAL") {
            if(win) { 
                p.copaStage = "GRAN FINAL"; 
                p.copaRival = leagueTable.filter(t => t.name !== p.team)[Math.floor(Math.random() * 2)]; 
                escribirDialogo(`🏆 ¡A LA GRAN FINAL DE COPA! Rival: ${p.copaRival.name}`); 
                setTimeout(renderMenu, 4000); 
            } else { 
                p.isCopa = false; 
                escribirDialogo(`❌ Caemos en Semis de Copa. Qué lástima.`); 
                setTimeout(renderMenu, 4000); 
            }
        } else if (p.copaStage === "GRAN FINAL") {
            if(win) { 
                p.copas++; 
                p.fame = Math.min(FAME_MAX, p.fame + 5); 
                p.money += 2000; 
                escribirDialogo(`🥇 ¡CAMPEONES DE COPA! (Total copas: ${p.copas}) +5 Fama, +2000€`); 
            } else { 
                escribirDialogo(`🥈 Subcampeones de Copa... duele, pero volvemos a la liga regular.`); 
            }
            p.isCopa = false;
            updateUI(); 
            setTimeout(renderMenu, 4000);
        }
        return;
    }

    // ==========================================
    // LÓGICA DE PLAYOFFS EN CURSO
    // ==========================================
    if (p.isPlayoffs) {
        if (p.fase === 0) { 
            if (p.playoffStage === "SEMIFINAL") {
                if (win) { 
                    p.playoffStage = "GRAN FINAL"; 
                    p.playoffRival = p.playoffOtherWinner; 
                    escribirDialogo(`🏆 ¡A LA FINAL contra ${p.playoffRival.name}!`); 
                    setTimeout(renderMenu, 4000); 
                } else { 
                    escribirDialogo(`❌ Eliminados en Semis.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.playoffStage === "GRAN FINAL") {
                if(win) { 
                    p.ligasJunior++; 
                    escribirDialogo(`🥇 ¡CAMPEONES JUNIOR! (Total: ${p.ligasJunior})`); 
                } else {
                    escribirDialogo(`🥈 Perdemos la final...`);
                }
                setTimeout(draft, 4000);
            }
        } else if (p.fase === 1 || p.fase === 2) { 
            if (p.playoffStage === "PRIMERA RONDA") {
                if (win) { 
                    p.playoffStage = "SEMIFINAL CONF"; 
                    let b = p.playoffBracket || {};
                    let confTeams = leagueTable.filter(t => t.conf === p.teamData.conf).sort((a,b) => b.v - a.v);
                    
                    // Tu rival de Semifinales es estrictamente el ganador de la llave cruzada
                    if (b.seedMiPos) {
                        if (b.seedMiPos === 1 || b.seedMiPos === 8) p.playoffRival = b.win4v5;
                        else if (b.seedMiPos === 4 || b.seedMiPos === 5) p.playoffRival = b.win1v8;
                        else if (b.seedMiPos === 2 || b.seedMiPos === 7) p.playoffRival = b.win3v6;
                        else if (b.seedMiPos === 3 || b.seedMiPos === 6) p.playoffRival = b.win2v7;
                    } else {
                        let posibles = confTeams.slice(0, 8).filter(t => t.name !== p.team);
                        p.playoffRival = posibles[Math.floor(Math.random() * posibles.length)];
                    }

                    if (!p.playoffRival || p.playoffRival.name === p.team) {
                        p.playoffRival = confTeams.find(t => t.name !== p.team);
                    }

                    escribirDialogo(`🏆 ¡Pasamos a Semifinales de Conferencia contra ${p.playoffRival.name}!`); 
                    setTimeout(renderMenu, 4000); 
                } else { 
                    escribirDialogo(`❌ Eliminados en Primera Ronda. Fin de temporada.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.playoffStage === "SEMIFINAL CONF") {
                if(win) { 
                    p.playoffStage = "FINAL CONF"; 
                    let b = p.playoffBracket || {};
                    let confTeams = leagueTable.filter(t => t.conf === p.teamData.conf).sort((a,b) => b.v - a.v);

                    if (b.seedMiPos) {
                        let finalistaArriba = (b.win1v8.v > b.win4v5.v) ? b.win1v8 : b.win4v5;
                        let finalistaAbajo = (b.win2v7.v > b.win3v6.v) ? b.win2v7 : b.win3v6;

                        if (b.seedMiPos === 1 || b.seedMiPos === 8 || b.seedMiPos === 4 || b.seedMiPos === 5) {
                            p.playoffRival = finalistaAbajo;
                        } else {
                            p.playoffRival = finalistaArriba;
                        }
                    } else {
                        let posibles = confTeams.slice(0, 4).filter(t => t.name !== p.team);
                        p.playoffRival = posibles[Math.floor(Math.random() * posibles.length)] || confTeams[1];
                    }

                    if (!p.playoffRival || p.playoffRival.name === p.team) {
                        p.playoffRival = confTeams.find(t => t.name !== p.team);
                    }

                    escribirDialogo(`🏆 ¡Pasamos a la Final de Conferencia contra ${p.playoffRival.name}!`); 
                    setTimeout(renderMenu, 4000); 
                } else { 
                    escribirDialogo(`❌ Caemos en Semifinales de Conferencia.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.playoffStage === "FINAL CONF") {
                if(win) { 
                    p.playoffStage = "GRAN FINAL"; 
                    p.playoffRival = p.playoffBracket.otraConfChamp; 
                    escribirDialogo(`🏆 ¡SOMOS CAMPEONES DE CONFERENCIA! A LA GRAN FINAL CONTRA ${p.playoffRival.name}!`); 
                    setTimeout(renderMenu, 4000); 
                } else { 
                    escribirDialogo(`❌ Caemos en la Final de Conferencia.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.playoffStage === "GRAN FINAL") {
                if(win) {
                    if(p.fase === 1) { 
                        p.ligasACB++; 
                        escribirDialogo(`🥇 ¡CAMPEONES ABSOLUTOS DE ACB! Haces historia. (Ligas ACB: ${p.ligasACB})`); 
                    } else { 
                        p.rings++; 
                        p.fame = Math.min(FAME_MAX, p.fame + 10); 
                        escribirDialogo(`💍 ¡HAS GANADO UN ANILLO DE LA NBA! (Total: ${p.rings})`); 
                    }
                } else {
                    escribirDialogo(`🥈 Subcampeones... nos quedamos a las puertas de la gloria.`);
                }
                setTimeout(draft, 4000);
            }
        }
    } else {
        // ==========================================
        // FIN TEMPORADA REGULAR Y CLASIFICACIÓN A PLAYOFFS (8 EQUIPOS / PLAY-IN)
        // ==========================================
        if(p.sMatches >= partidosTemporada) {
            if (p.fase === 0) {
                let c1 = leagueTable.filter(t => t.conf === 1).sort((a,b) => b.v - a.v)[0];
                let c2 = leagueTable.filter(t => t.conf === 2).sort((a,b) => b.v - a.v)[0];
                let c3 = leagueTable.filter(t => t.conf === 3).sort((a,b) => b.v - a.v)[0];
                let c4 = leagueTable.filter(t => t.conf === 4).sort((a,b) => b.v - a.v)[0];
                
                let ganadores = [c1, c2, c3, c4];
                if(ganadores.find(t => t && t.name === p.team)) {
                    p.isPlayoffs = true; 
                    p.playoffStage = "SEMIFINAL";
                    
                    if (p.teamData.conf === 1) { p.playoffRival = c2; p.playoffOtherWinner = c3.v > c4.v ? c3 : c4; }
                    if (p.teamData.conf === 2) { p.playoffRival = c1; p.playoffOtherWinner = c3.v > c4.v ? c3 : c4; }
                    if (p.teamData.conf === 3) { p.playoffRival = c4; p.playoffOtherWinner = c1.v > c2.v ? c1 : c2; }
                    if (p.teamData.conf === 4) { p.playoffRival = c3; p.playoffOtherWinner = c1.v > c2.v ? c1 : c2; }
                    
                    escribirDialogo(`🌟 ¡CAMPEONES DE CONFERENCIA! Entramos a Playoffs.`);
                    setTimeout(renderMenu, 5000);
                } else { 
                    escribirDialogo(`No ganamos la conferencia. Temporada terminada.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.fase === 1 || p.fase === 2) { 
                let miConfTeams = leagueTable.filter(t => t.conf === p.teamData.conf).sort((a,b) => b.v - a.v);
                let miPos = miConfTeams.findIndex(t => t.name === p.team) + 1;
                let otraConfTeams = leagueTable.filter(t => t.conf !== p.teamData.conf).sort((a,b) => b.v - a.v);
                
                let qualifies = false;
                let finalSeed = miPos;

                if (p.fase === 1) {
                    if (miPos <= 8) qualifies = true;
                } else if (p.fase === 2) {
                    if (miPos <= 6) {
                        qualifies = true;
                    } else if (miPos >= 7 && miPos <= 10) {
                        let winPlayin = (Math.random() * 100) < (p.ovr - 55); 
                        if (winPlayin) {
                            qualifies = true;
                            finalSeed = (miPos === 7 || miPos === 8) ? 7 : 8; 
                            escribirDialogo(`🔥 ¡LOCURA DE PLAY-IN! Superas la muerte súbita y te metes en Playoffs como ${finalSeed}º.`);
                        } else {
                            escribirDialogo(`❌ Derrota dolorosa en el Play-In. Te quedas a las puertas de Playoffs.`);
                        }
                    }
                }
                
                if (qualifies) {
                    p.isPlayoffs = true;
                    p.playoffStage = "PRIMERA RONDA";
                    
                    let rivalSeed;
                    if (finalSeed === 1) rivalSeed = 8;
                    else if (finalSeed === 8) rivalSeed = 1;
                    else if (finalSeed === 4) rivalSeed = 5;
                    else if (finalSeed === 5) rivalSeed = 4;
                    else if (finalSeed === 3) rivalSeed = 6;
                    else if (finalSeed === 6) rivalSeed = 3;
                    else if (finalSeed === 2) rivalSeed = 7;
                    else if (finalSeed === 7) rivalSeed = 2;

                    p.playoffRival = miConfTeams[rivalSeed - 1] || miConfTeams[0];
                    if (p.playoffRival.name === p.team) p.playoffRival = miConfTeams[1]; 
                    
                    // SIMULAR EL CUADRO RESTANTE CON EQUIPOS QUE SÍ CLASIFICARON (TOP 8)
                    let w18 = (finalSeed === 1 || finalSeed === 8) ? p.teamData : (Math.random() > 0.2 ? miConfTeams[0] : miConfTeams[7]);
                    let w45 = (finalSeed === 4 || finalSeed === 5) ? p.teamData : (Math.random() > 0.4 ? miConfTeams[3] : miConfTeams[4]);
                    let w36 = (finalSeed === 3 || finalSeed === 6) ? p.teamData : (Math.random() > 0.3 ? miConfTeams[2] : miConfTeams[5]);
                    let w27 = (finalSeed === 2 || finalSeed === 7) ? p.teamData : (Math.random() > 0.2 ? miConfTeams[1] : miConfTeams[6]);
                    
                    // Prevenir posibles nulos
                    if(!w18) w18 = miConfTeams[0]; if(!w45) w45 = miConfTeams[3]; 
                    if(!w36) w36 = miConfTeams[2]; if(!w27) w27 = miConfTeams[1];

                    p.playoffBracket = { 
                        seedMiPos: finalSeed,
                        win1v8: w18,
                        win4v5: w45,
                        win3v6: w36,
                        win2v7: w27,
                        otraConfChamp: otraConfTeams[0].v > otraConfTeams[1].v ? otraConfTeams[0] : otraConfTeams[1] 
                    };
                    
                    escribirDialogo(`🌟 CLASIFICADOS A PLAYOFFS. Jugamos la PRIMERA RONDA contra ${p.playoffRival.name} (${rivalSeed}º).`);
                    setTimeout(renderMenu, 5000);
                } else { 
                    escribirDialogo(`No logramos clasificar a Playoffs (${miPos}º). Temporada terminada.`); 
                    setTimeout(draft, 4000); 
                }
            } else { 
                setTimeout(draft, 3000); 
            }
        } else { 
            setTimeout(renderMenu, 3000); 
        }
    }
}

// =====================================================================
// 6. DRAFT, TRASPASOS, G.O.A.T. Y UI MODALS
// =====================================================================
function draft() {
    if (p.fase === 2 && (p.ovr >= 85 || p.fame >= 60) && !p.aswPlayedThisSeason) { 
        p.aswPlayedThisSeason = true; 
        allStarWeekend(); 
        return; 
    }

    if (p.fase > 0) {
        if (p.fase === 1 && (p.ovr >= 85 || p.fame >= 60) && !p.aswPlayedThisSeason) { 
            p.aswPlayedThisSeason = true;
            p.allStars++; 
            escribirDialogo("🌟 ALL-STAR ACB: Convocado para el All-Star de la liga."); 
        }

        let m = Math.max(1, p.stats.matches);
        let myPPG = p.stats.pts / m; 
        let myRPG = p.stats.reb / m; 
        let myAPG = p.stats.ast / m;
        let myROPG = p.stats.rob / m; 
        let myTAPG = p.stats.tap / m; 
        let myWins = p.teamData ? p.teamData.v : 0;

        let allPlayers = [];
        leagueTable.forEach(t => {
            if (!t.roster) return;
            let tGames = Math.max(1, t.v + t.d);
            t.roster.forEach((jug, idx) => {
                let isBench = (idx >= 5 || jug.p === "6M");
                allPlayers.push({ 
                    name: jug.n, 
                    team: t.name, 
                    wins: t.v, 
                    ppg: jug.pts / tGames, 
                    rpg: jug.reb / tGames, 
                    apg: jug.ast / tGames, 
                    ropg: jug.rob / tGames, 
                    tapg: jug.tap / tGames, 
                    isBench, 
                    ovr: jug.o 
                });
            });
        });

        const mvpScore = (x) => x.ppg * 1.0 + x.rpg * 0.8 + x.apg * 1.2 + x.ropg * 1.5 + x.tapg * 1.5 + x.wins * 0.3;
        const dpoyScore = (x) => x.ropg * 4.5 + x.tapg * 4.5 + x.rpg * 0.5 + x.wins * 0.2;
        const sixthScore = (x) => x.ppg + x.apg * 1.5 + x.rpg * 0.8;

        let myMvp = mvpScore ({ppg:myPPG, rpg:myRPG, apg:myAPG, ropg:myROPG, tapg:myTAPG, wins:myWins});
        let myDpoy = dpoyScore({ropg:myROPG, tapg:myTAPG, rpg:myRPG, wins:myWins});
        let mySixth = sixthScore({ppg:myPPG, apg:myAPG, rpg:myRPG});

        let bestMvp = Math.max(...allPlayers.map(mvpScore));
        let bestDpoy = Math.max(...allPlayers.map(dpoyScore));
        let bestSixth = Math.max(...allPlayers.filter(x=>x.isBench).map(sixthScore));
        let bestRookie = Math.max(...allPlayers.filter(x=>x.ovr < 78).map(mvpScore));

        if (myMvp >= bestMvp) {
            p.mvps++; 
            p.fame = Math.min(FAME_MAX, p.fame + 10);
            escribirDialogo(`🏆 MVP: Eres el Jugador Más Valioso. ${myPPG.toFixed(1)}p ${myAPG.toFixed(1)}a ${myRPG.toFixed(1)}r por partido.`);
        } else {
            let winner = allPlayers.sort((a,b) => mvpScore(b) - mvpScore(a))[0];
            if(winner) escribirDialogo(`🏆 MVP: ${winner.name} (${winner.team}) — ${winner.ppg.toFixed(1)}p ${winner.apg.toFixed(1)}a ${winner.rpg.toFixed(1)}r`);
        }

        if (myDpoy >= bestDpoy) {
            p.dpoys++; 
            p.fame = Math.min(FAME_MAX, p.fame + 5);
            escribirDialogo(`🛡️ DPOY: Mejor Defensor del Año. ${myROPG.toFixed(1)}rob ${myTAPG.toFixed(1)}tap por partido.`);
        } else {
            let winner = [...allPlayers].sort((a,b) => dpoyScore(b) - dpoyScore(a))[0];
            if(winner) escribirDialogo(`🛡️ DPOY: ${winner.name} (${winner.team}) — ${winner.ropg.toFixed(1)}rob ${winner.tapg.toFixed(1)}tap`);
        }

        // ROOKIE: primera temporada en la liga actual — sin filtro de OVR, cualquiera puede ser rookie
        let isRookie = (p.fase === 1 && p.history.acb.matches === 0) || (p.fase === 2 && p.history.nba.matches === 0);
        if (isRookie) {
            let rookiePool = allPlayers.filter(x => x.ovr <= p.ovr + 5); // rookies con OVR similar o menor
            let bestRookieScore = rookiePool.length > 0 ? Math.max(...rookiePool.map(mvpScore)) : 0;
            if (rookiePool.length === 0 || myMvp >= bestRookieScore) {
                p.rookies++; 
                p.fame = Math.min(FAME_MAX, p.fame + 5);
                escribirDialogo(`👶 ROOKIE DEL AÑO: El mejor debutante de la liga. ${myPPG.toFixed(1)}p por partido.`);
            } else {
                let winner = [...rookiePool].sort((a,b) => mvpScore(b) - mvpScore(a))[0];
                if(winner) escribirDialogo(`👶 ROOKIE DEL AÑO: ${winner.name} (${winner.team}) — ${winner.ppg.toFixed(1)}p`);
            }
        }

        if (p.role === "Suplente") {
            if (allPlayers.filter(x=>x.isBench).length === 0 || mySixth >= bestSixth) {
                p.sixthMan++; 
                p.fame = Math.min(FAME_MAX, p.fame + 3);
                escribirDialogo(`🔥 6º HOMBRE DEL AÑO: El mejor desde el banco. ${myPPG.toFixed(1)}p por partido.`);
            } else {
                let winner = allPlayers.filter(x=>x.isBench).sort((a,b)=>sixthScore(b)-sixthScore(a))[0];
                if(winner) escribirDialogo(`🔥 6º HOMBRE: ${winner.name} (${winner.team}) — ${winner.ppg.toFixed(1)}p`);
            }
        }
    }

    if (p.season >= 17) {
        escribirDialogo(`⏳ TEMPORADA 17 FINALIZADA. Tu cuerpo no da más de sí. Has agotado el tiempo.`);
        setTimeout(() => retirarse(false), 5000); 
        return;
    }

    let act = document.getElementById('actions'); 
    if(act) act.innerHTML = '';
    
    let msg = `Temporada ${p.season} finalizada. Tu OVR es ${p.ovr} y tu Fama ${p.fame.toFixed(1)}.`;
    let html = `
    <div class="dialog-box log-entry">
        <p style="font-size:0.7em; line-height:1.8; color:#fff;">${msg}</p>`;
    
    let targetFase = p.fase;
    if (p.fase === 0) targetFase = 1; 
    if (p.fase === 1 && p.fame >= 40 && p.ovr >= 80) targetFase = 2; 

    html += `</div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom();

    if (p.fase > 0) {
        let equiposOrdenados = DB[p.fase].teams.sort((a,b) => a.ovr - b.ovr);
        equiposOrdenados[0].ovr += 2;
        equiposOrdenados[1].ovr += 1;
        equiposOrdenados[2].ovr += 1;
        if(equiposOrdenados[0].roster) equiposOrdenados[0].roster[0].o += 2;
        escribirDialogo("🔄 MERCADO: Los peores equipos de la liga han fichado agentes libres para mejorar sus plantillas.");
    }

    if (targetFase === 2 && p.fase === 1) {
        mostrarDraftNBA();
    } else if (targetFase === 1 && p.fase === 0) {
        mostrarDraftACB();
    } else {
        let equiposRenova = DB[p.fase].teams.sort(() => 0.5 - Math.random()).slice(0, 3);
        let renovHtml = `
        <div class="dialog-box log-entry" style="border-color:#555; padding:12px;">
            <p style="color:#aaa; font-size:0.7em; margin-bottom:10px;">Tu agente ha negociado estas ofertas:</p>`;
            
        equiposRenova.forEach(eq => {
            let rol = p.ovr >= eq.ovr + 3 ? "Estrella" : (p.ovr >= eq.ovr - 4 ? "Titular" : "Suplente");
            let sueldo = rol === "Estrella" ? 400 : rol === "Titular" ? 200 : 150;
            renovHtml += `<button onclick="ejecutarAscenso(${p.fase}, '${eq.name}', '${rol}')" class="btn-main" style="text-transform:none; font-size:0.72em; margin-bottom:4px;">${eq.name} | ${rol} | ${sueldo}€/p</button>`;
        });
        
        renovHtml += `<button onclick="ejecutarAscenso(${p.fase}, '${p.team}', '${p.role}')" class="btn-main" style="border-color:#555; color:#888; font-size:0.7em; margin-top:4px; text-transform:none;">🔄 Renovar con ${p.team}</button>`;
        renovHtml += `</div>`;
        if(gl) gl.insertAdjacentHTML('beforeend', renovHtml); 
        scrollToBottom();
    }
    guardarPartida();
}

function ejecutarAscenso(faseTarget, teamName, rolTarget) {
    let claveLiga = p.fase === 0 ? "junior" : (p.fase === 1 ? "acb" : "nba");
    p.history[claveLiga].pts += p.stats.pts; 
    p.history[claveLiga].ast += p.stats.ast; 
    p.history[claveLiga].reb += p.stats.reb;
    p.history[claveLiga].rob += p.stats.rob; 
    p.history[claveLiga].tap += p.stats.tap; 
    p.history[claveLiga].matches += p.stats.matches;
    
    p.stats.pts = 0; 
    p.stats.ast = 0; 
    p.stats.reb = 0; 
    p.stats.rob = 0; 
    p.stats.tap = 0; 
    p.stats.tcAttempt = 0; 
    p.stats.tcMake = 0; 
    p.stats.t3Attempt = 0; 
    p.stats.t3Make = 0; 
    p.stats.matches = 0;

    let oldFase = p.fase;
    let oldTeam = p.team;

    p.team = teamName; 
    if (oldTeam !== teamName) p.chem = 50; 

    p.fase = faseTarget; 
    p.role = rolTarget; 
    p.sMatches = 0; 
    p.season++; 
    p.isPlayoffs = false; 
    p.playoffStage = ""; 
    p.aswPlayedThisSeason = false; 
    p.copaPlayedThisSeason = false; 
    p.isCopa = false;
    
    if (oldFase !== faseTarget) p.rivalTeam = ""; 
    
    prepararLiga(); 
    updateUI(); 
    let gl = document.getElementById('game-log');
    if(gl) gl.innerHTML = '';
    escribirDialogo(`NOTICIA:<br><br>Oficial. ${p.name} jugará en ${p.team}. ¡A por la Temporada ${p.season} de 17!`);
    
    if (oldFase !== faseTarget) {
        escribirDialogo(`🚨 ATENCIÓN: Tu rival ${p.rivalName} ha fichado por ${p.rivalTeam}.`);
    }
    
    renderMenu(); 
    guardarPartida();
}

function pedirTraspaso() {
    let options = DB[p.fase].teams.filter(t => t.name !== p.team);
    let html = `
    <div class="dialog-box log-entry">
        <span style="color:var(--accent);">AGENTE: ¿A qué equipo quieres irte?</span>
        <select id="trade-target" style="margin: 10px 0;">`;
        
    options.forEach(o => html += `<option value="${o.name}">${o.name} (OVR: ${o.ovr})</option>`);
    
    html += `
        </select>
        <button onclick="ejecutarTraspaso()" class="btn-main">SOLICITAR</button>
        <button onclick="renderMenu()" class="btn-main btn-trade">CANCELAR</button>
    </div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom();
}

function ejecutarTraspaso() {
    let targetEl = document.getElementById('trade-target');
    if(!targetEl) return;
    let targetName = targetEl.value;
    let targetObj = DB[p.fase].teams.find(t => t.name === targetName);
    
    if(p.ovr >= targetObj.ovr - 5) {
        p.team = targetName; 
        p.chem = 50; 
        
        leagueTable.forEach(t => t.isPlayer = false);
        p.teamData = leagueTable.find(t => t.name === targetName);
        if(p.teamData) p.teamData.isPlayer = true;
        
        evalRole(); 
        updateUI(); 
        escribirDialogo(`🚨 BOMBAZO: Has sido traspasado a ${targetName}. Tu química se reinicia a 50 pero la liga continúa.`); 
        renderMenu();
    } else {
        escribirDialogo(`AGENTE:<br>El GM de ${targetName} dice que no tienes nivel para jugar allí.`);
    }
}

function abrirEquipos() {
    let select = document.getElementById('sel-equipo'); 
    if(!select) return;
    select.innerHTML = '';
    
    DB[p.fase].teams.forEach(t => { 
        select.innerHTML += `<option value="${t.name}">${t.name}</option>`; 
    });
    
    select.value = p.team; 
    mostrarEquipoInfo();
    let mod = document.getElementById('teams-modal');
    if(mod) mod.style.display = 'block';
}

function cerrarEquipos() { 
    let mod = document.getElementById('teams-modal');
    if(mod) mod.style.display = 'none'; 
}

function mostrarEquipoInfo() {
    let sel = document.getElementById('sel-equipo');
    if(!sel) return;
    let tName = sel.value;
    let realTeamObj = DB[p.fase].teams.find(x => x.name === tName);
    let equipoLiga = leagueTable.find(t => t.name === tName);
    let matchesPlayed = p.stats.matches || 0;
    
    let mAI = equipoLiga ? Math.max(1, equipoLiga.v + equipoLiga.d) : 1;
    let m = (tName === p.team) ? Math.max(1, matchesPlayed) : mAI;
    
    let html = `
    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:15px;">
        <h3 style="color:var(--accent); margin:0;">${tName.toUpperCase()}</h3>
        <span style="color:#fff; background:#222; padding:4px 8px; border-radius:4px; font-weight:bold; font-size:0.9em;">MEDIA: ${realTeamObj ? realTeamObj.ovr : 70}</span>
    </div>`;
    
    html += `<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(130px, 1fr)); gap: 12px; max-height: 380px; overflow-y: auto; padding-right: 5px;">`;
    
    if(p.team === tName) {
        let ppp = matchesPlayed === 0 ? "0.0" : (p.stats.pts/m).toFixed(1);
        let rpp = matchesPlayed === 0 ? "0.0" : (p.stats.reb/m).toFixed(1);
        let app = matchesPlayed === 0 ? "0.0" : (p.stats.ast/m).toFixed(1);
        
        html += `
        <div style="background: rgba(255,102,0,0.1); border: 1px solid var(--accent); border-radius: 8px; padding: 10px; text-align: center; box-shadow: 0 4px 10px rgba(255,102,0,0.2);">
            <div style="font-size: 0.8em; color: var(--accent); font-weight: bold; margin-bottom: 4px;">${p.pos.toUpperCase()}</div>
            <div style="color: var(--accent); font-weight: bold; margin-bottom: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size:0.85em;">🌟 ${p.name} (TÚ)</div>
            <div style="font-size: 0.7em; background: rgba(0,0,0,0.5); padding: 4px; border-radius: 4px; margin-bottom: 5px;">OVR: <span style="color:#fff; font-weight:bold;">${p.ovr}</span></div>
            <div style="font-size: 0.65em; color: #ccc;">${ppp}p | ${rpp}r | ${app}a</div>
        </div>`;
    }
    
    if(equipoLiga && equipoLiga.roster) {
        equipoLiga.roster.forEach(jug => {
            if(tName === p.team && jug.n === p.name) return;
            
            let isRival = (jug.n === p.rivalName);
            let bgColor = isRival ? "rgba(255,215,0,0.05)" : "rgba(255,255,255,0.03)";
            let borderColor = isRival ? "gold" : "rgba(255,255,255,0.1)";
            let nameColor = isRival ? "gold" : "#f4f4f7";
            let posStr = posMap[jug.p] || jug.p || "S";
            if(posStr.length > 5) posStr = jug.p;
            
            let jugPPP = (jug.pts / mAI).toFixed(1);
            let jugRPP = (jug.reb / mAI).toFixed(1);
            let jugAPP = (jug.ast / mAI).toFixed(1);

            html += `
            <div style="background: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 8px; padding: 10px; text-align: center;">
                <div style="font-size: 0.8em; color: var(--accent); font-weight: bold; margin-bottom: 4px;">${posStr}</div>
                <div style="color: ${nameColor}; margin-bottom: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size:0.85em;">${isRival ? '🔥 ' : ''}${jug.n}</div>
                <div style="font-size: 0.7em; background: rgba(0,0,0,0.5); padding: 4px; border-radius: 4px; margin-bottom: 5px;">OVR: <span style="color:#fff; font-weight:bold;">${jug.o || 70}</span></div>
                <div style="font-size: 0.65em; color: #ccc;">${jugPPP}p | ${jugRPP}r | ${jugAPP}a</div>
            </div>`;
        });
    } else {
        html += `<div style="color:#888; font-size: 0.9em;">Plantilla no disponible.</div>`;
    }
    
    html += `</div>`;
    let ros = document.getElementById('team-roster-div');
    if(ros) ros.innerHTML = html;
}

function retirarse(force = false) {
    if (force && !confirm("¿Seguro que quieres retirarte de forma anticipada? Perderás tiempo valioso para ser el G.O.A.T.")) return;

    let tPts = p.history.junior.pts + p.history.acb.pts + p.history.nba.pts + p.stats.pts;
    let tMat = p.history.junior.matches + p.history.acb.matches + p.history.nba.matches + p.stats.matches;
    let ppp = tMat > 0 ? (tPts/tMat).toFixed(1) : 0;
    
    let isGOAT = (p.rings >= 12 && p.ovr >= 99 && p.fame >= 100 && tPts >= 35000 && p.rivalReconciled && p.money >= 500000 && p.hasHouse && p.mvps >= 5 && p.allStars >= 15 && p.dpoys >= 1);

    let endText = isGOAT ? 
        `👑 ERES EL MEJOR JUGADOR DE TODOS LOS TIEMPOS 👑\n\nHas superado a los más grandes de la historia. Has asegurado el futuro de tu familia con tu fortuna (${p.money}€), te has reconciliado con tu amigo ${p.rivalName}. Has completado la Misión G.O.A.T.` : 
        `🏀 RESUMEN DE CARRERA DE LEYENDA 🏀\n\nHa sido una gran carrera, pero no has logrado cumplir los estrictos 10 Mandamientos del G.O.A.T. El mundo te recordará como una estrella, pero el trono absoluto sigue perteneciendo a los mitos del pasado.`;

    alert(endText + `\n\n🏀 ESTADÍSTICAS FINALES 🏀\n\nTemporadas Jugadas: ${p.season}/17\nPartidos Totales: ${tMat}\nPuntos Totales: ${tPts}\nPromedio Histórico: ${ppp} PPP\nOVR Final: ${p.ovr}`);
    localStorage.removeItem('basketSaveData'); 
    location.reload();
}

function abrirPerfil() {
    let e = (id) => document.getElementById(id);
    
    if(e('pr-tiro')) e('pr-tiro').innerText = p.tiro; 
    if(e('pr-fisico')) e('pr-fisico').innerText = p.fisico;
    if(e('pr-bandeja')) e('pr-bandeja').innerText = p.bandeja;
    if(e('pr-manejo')) e('pr-manejo').innerText = p.manejo; 
    if(e('pr-def')) e('pr-def').innerText = p.def;
    if(e('pr-ovr')) e('pr-ovr').innerText = p.ovr; 
    
    let cur = (p.fase===0) ? "junior" : (p.fase===1 ? "acb" : "nba");
    let sumPts = JSON.parse(JSON.stringify(p.history));
    sumPts[cur].pts += p.stats.pts; 
    sumPts[cur].ast += p.stats.ast;
    sumPts[cur].reb += p.stats.reb;
    sumPts[cur].rob += p.stats.rob;
    sumPts[cur].tap += p.stats.tap;
    sumPts[cur].matches += p.stats.matches;
    
    let tPts = sumPts.junior.pts + sumPts.acb.pts + sumPts.nba.pts;
    
    let cl = `
    ${p.rings >= 12 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 12 Anillos NBA (${p.rings})<br>
    ${p.mvps >= 5 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 5x MVP Temporada (${p.mvps})<br>
    ${p.allStars >= 15 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 15x All-Star Game (${p.allStars})<br>
    ${p.dpoys >= 1 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 1x Defensor del Año (${p.dpoys})<br>
    ${p.ovr >= 99 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} Nivel 99 OVR (${p.ovr})<br>
    ${tPts >= 35000 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 35.000 Puntos (${tPts})<br>
    ${p.fame >= 100 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 100 Fama Mundial (${Math.floor(p.fame)})<br>
    ${p.money >= 500000 ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} 500.000€ Familia (${p.money}€)<br>
    ${p.hasHouse ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} Mansión (Comprada)<br>
    ${p.rivalReconciled ? '<span style="color:var(--success);">✅</span>' : '<span style="color:var(--danger);">❌</span>'} Paz con ${p.rivalName}
    `;
    if(e('goat-checklist')) e('goat-checklist').innerHTML = cl;

    let getAvgs = (obj) => {
        if(obj.matches === 0) return `0.0p 0.0a 0.0r 0.0ro 0.0t`;
        return `${(obj.pts/obj.matches).toFixed(1)}p ${(obj.ast/obj.matches).toFixed(1)}a ${(obj.reb/obj.matches).toFixed(1)}r ${(obj.rob/obj.matches).toFixed(1)}ro ${(obj.tap/obj.matches).toFixed(1)}t`;
    };

    let histHtml = `
        <span style="color:var(--accent);">JUNIOR (${sumPts.junior.matches} PJ):</span><br> <span style="font-size:0.9em; color:#fff;">${getAvgs(sumPts.junior)}</span><br>
        <span style="color:var(--accent); margin-top:5px; display:block;">ACB/PRO (${sumPts.acb.matches} PJ):</span><br> <span style="font-size:0.9em; color:#fff;">${getAvgs(sumPts.acb)}</span><br>
        <span style="color:var(--accent); margin-top:5px; display:block;">NBA (${sumPts.nba.matches} PJ):</span><br> <span style="font-size:0.9em; color:#fff;">${getAvgs(sumPts.nba)}</span>
    `;
    if(e('history-content')) e('history-content').innerHTML = histHtml;

    let palmaresId = 'palmares-content';
    if (!e(palmaresId)) {
        let sec = document.createElement('div');
        sec.style.cssText = 'background:#0a0a0a; padding:15px; border-radius:6px; border:2px solid gold; margin-top:15px;';
        sec.innerHTML = `<h3 style="color:gold;font-size:0.7em;margin-bottom:12px;text-align:center;letter-spacing:2px;">🏆 PALMARÉS DE TÍTULOS</h3><div id="${palmaresId}" style="font-size:0.6em;line-height:2;"></div>`;
        let modal = e('profile-modal');
        if (modal) modal.appendChild(sec);
    }

    const trofeo = (cond, icon, label, val) => {
        let color = cond ? 'gold' : '#555';
        return `
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
            <span style="font-size:1.3em;">${icon}</span>
            <div style="flex:1;display:flex;justify-content:space-between;color:${color};">
                <span>${label}</span><span style="font-weight:bold;">${val}</span>
            </div>
            <span>${cond?'✅':'⬜'}</span>
        </div>`;
    };

    let palmHtml = '';
    palmHtml += trofeo(p.rings > 0, '💍', 'Anillos NBA', p.rings);
    palmHtml += trofeo(p.ligasACB > 0, '🏆', 'Ligas ACB', p.ligasACB);
    palmHtml += trofeo(p.copas > 0, '🥇', 'Copas del Rey', p.copas);
    palmHtml += trofeo(p.ligasJunior > 0, '🎖️', 'Ligas Junior', p.ligasJunior);
    palmHtml += trofeo(p.mvps > 0, '🌟', 'MVPs Temporada', p.mvps);
    palmHtml += trofeo(p.allStars > 0, '⭐', 'All-Stars', p.allStars);
    palmHtml += trofeo(p.dpoys > 0, '🛡️', 'DPOY (Mejor Defensor)', p.dpoys);
    palmHtml += trofeo(p.rookies > 0, '👶', 'Rookie del Año', p.rookies);
    palmHtml += trofeo(p.sixthMan > 0, '🔥', '6º Hombre del Año', p.sixthMan);
    
    if(e(palmaresId)) {
        e(palmaresId).innerHTML = palmHtml || '<span style="color:#555;">Aún sin títulos. ¡A por ellos!</span>';
    }

    if(e('profile-modal')) {
        e('profile-modal').style.display = 'block';
    }
}

function cerrarPerfil() { 
    let m = document.getElementById('profile-modal'); 
    if(m) m.style.display = 'none'; 
}

// ---------------------------------------------------------------------
// ACTUALIZACIÓN UI CON LÍNEAS DE COLORES (CLASIFICACIÓN 8 EQUIPOS / PLAY-IN)
// ---------------------------------------------------------------------
function updateUI() {
    try {
        let e = (id) => document.getElementById(id);
        
        if(e('ui-name')) e('ui-name').innerText = p.name.toUpperCase();
        if(e('ui-team')) e('ui-team').innerText = p.team.toUpperCase();
        if(e('ui-season')) e('ui-season').innerText = p.season || "1";
        if(e('ui-money')) e('ui-money').innerText = p.money + "€";
        if(e('ui-fame')) e('ui-fame').innerText = Math.floor(p.fame);
        if(e('ui-ovr')) e('ui-ovr').innerText = p.ovr;
        if(e('ui-dorsal')) e('ui-dorsal').innerText = `#${p.dorsal}`;
        if(e('ui-height')) e('ui-height').innerText = p.height;
        if(e('ui-nat')) e('ui-nat').innerText = p.nat;
        
        let rolBadge = e('ui-rol');
        if(rolBadge) {
            rolBadge.innerText = p.role.toUpperCase();
            rolBadge.style.color = p.role === "Estrella" ? "gold" : (p.role === "Titular" ? "var(--accent)" : "var(--danger)");
        }

        let matchesPlayed = p.stats.matches;
        let m = matchesPlayed === 0 ? 1 : matchesPlayed;
        
        let tcPercent = p.stats.tcAttempt > 0 ? ((p.stats.tcMake / p.stats.tcAttempt) * 100).toFixed(1) : 0;
        let t3Percent = p.stats.t3Attempt > 0 ? ((p.stats.t3Make / p.stats.t3Attempt) * 100).toFixed(1) : 0;

        if(e('st-ppp')) e('st-ppp').innerText = (p.stats.pts / m).toFixed(1);
        if(e('st-app')) e('st-app').innerText = (p.stats.ast / m).toFixed(1);
        if(e('st-rpp')) e('st-rpp').innerText = (p.stats.reb / m).toFixed(1);
        if(e('st-ropp')) e('st-ropp').innerText = (p.stats.rob / m).toFixed(1);
        if(e('st-tpp')) e('st-tpp').innerText = (p.stats.tap / m).toFixed(1);
        if(e('st-tc')) e('st-tc').innerText = tcPercent + "%";
        if(e('st-t3')) e('st-t3').innerText = t3Percent + "%";
        
        if (!p.teamData) return;
        
        let miConfNum = p.teamData.conf || 1;

        let tablePts = e('table-pts');
        if(tablePts) {
            let tpts = [];
            tpts.push({ name: p.name.substring(0,10), ppp: p.stats.pts / m, isMe: true, isRival: false });

            leagueTable.forEach(t => {
                if(!t.isPlayer) {
                    let matchesAI = Math.max(1, t.v + t.d);
                    let isRival = (t.star === p.rivalName);
                    tpts.push({ name: (t.star||"").substring(0,10), ppp: t.starPts / matchesAI, isMe: false, isRival: isRival });
                }
            });
            
            tpts = tpts.sort((a,b) => b.ppp - a.ppp);
            tablePts.innerHTML = tpts.slice(0,10).map((r,i) => {
                let color = r.isMe ? 'var(--accent)' : (r.isRival ? 'gold' : '#ccc');
                let icon = r.isMe ? '🌟' : (r.isRival ? '⭐' : '');
                return `<tr style="color:${color};"><td>${i+1}. ${icon}${r.name}</td><td style="text-align:right">${r.ppp.toFixed(1)}</td></tr>`;
            }).join('');
        }
        
        let tableVd1 = e('table-vd-1');
        let titleConf2 = e('title-conf2');
        let tableVd2 = e('table-vd-2');

        const renderRow = (r, i) => {
            let isPlayoff = false; 
            let isPlayin = false; 
            let pos = i + 1;
            
            if (p.fase === 1) { 
                if (pos <= 8) isPlayoff = true; 
            } else if (p.fase === 2) { 
                if (pos <= 6) isPlayoff = true; 
                else if (pos >= 7 && pos <= 10) isPlayin = true; 
            } else { 
                if (pos === 1) isPlayoff = true; 
            }

            let numColor = isPlayoff ? '#00ff00' : (isPlayin ? '#ffd700' : '#666'); 
            let rowColor = r.isPlayer ? 'color:var(--accent); font-weight:bold;' : (r.star === p.rivalName ? 'color:gold; font-weight:bold;' : 'color:#ddd;');
            let borderStyle = 'border-bottom: 1px solid rgba(255,255,255,0.05);';
            
            if (p.fase === 1 && pos === 8) borderStyle = 'border-bottom: 1px dashed #00ff00;'; 
            if (p.fase === 2 && pos === 6) borderStyle = 'border-bottom: 1px dashed #00ff00;'; 
            if (p.fase === 2 && pos === 10) borderStyle = 'border-bottom: 1px dashed #ffd700;'; 
            if (p.fase === 0 && pos === 1) borderStyle = 'border-bottom: 1px dashed #00ff00;'; 

            return `<tr style="${rowColor} ${borderStyle}">
                        <td style="padding: 5px 0;"><span style="color:${numColor}; font-family:monospace; margin-right:4px;">${pos}.</span> ${r.name.substring(0,12)}</td>
                        <td style="text-align:right; padding: 5px 0;">${r.v}-${r.d}</td>
                    </tr>`;
        };

        if (p.fase === 1) {
            let allTeams = [...leagueTable].sort((a,b) => b.v - a.v);
            if(tableVd1) tableVd1.innerHTML = allTeams.map((r,i) => renderRow(r, i)).join('');
            if(titleConf2) titleConf2.style.display = 'none'; 
            if(tableVd2) tableVd2.innerHTML = '';
        } else {
            let eqMiConf = leagueTable.filter(t => t.conf === miConfNum).sort((a,b) => b.v - a.v);
            if(tableVd1) tableVd1.innerHTML = eqMiConf.map((r,i) => renderRow(r, i)).join('');
            
            let eqOtraConf = leagueTable.filter(t => t.conf !== miConfNum).sort((a,b) => b.v - a.v);
            if(titleConf2 && tableVd2) {
                if(eqOtraConf.length > 0) {
                    titleConf2.style.display = 'block'; 
                    titleConf2.innerText = p.fase === 0 ? "OTRAS CONFERENCIAS" : (miConfNum === 1 ? 'CONFERENCIA ESTE' : 'CONFERENCIA OESTE');
                    tableVd2.innerHTML = eqOtraConf.map((r,i) => renderRow(r, i)).join('');
                } else { 
                    titleConf2.style.display = 'none'; 
                    tableVd2.innerHTML = ''; 
                }
            }
        }
    } catch(err) { 
        console.error("Error en updateUI:", err); 
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

// =====================================================================
// DRAFT ACB — DEBUT PROFESIONAL
// =====================================================================
function mostrarDraftACB() {
    let equipos = [...DB[1].teams].sort(() => 0.5 - Math.random()).slice(0, 3);
    let html = `
    <div class="dialog-box log-entry" style="border-color:#0ff; background:rgba(0,255,255,0.04); padding:15px;">
        <h3 style="color:#0ff; text-align:center; margin-bottom:6px; font-size:1em;">📋 DEBUT PROFESIONAL — ACB</h3>
        <p style="color:#ddd; font-size:0.65em; text-align:center; margin-bottom:12px;">
            Tu agente ha recibido <b>3 ofertas de clubes ACB</b>. Elige dónde empieza tu carrera profesional.
        </p>`;

    equipos.forEach(eq => {
        let rol = p.ovr >= eq.ovr + 3 ? "Estrella" : (p.ovr >= eq.ovr - 4 ? "Titular" : "Suplente");
        let sueldo = rol === "Estrella" ? 400 : rol === "Titular" ? 200 : 150;
        let badge = rol === "Estrella" ? "🌟" : rol === "Titular" ? "✅" : "🔋";
        html += `
        <button onclick="ejecutarAscenso(1, '${eq.name}', '${rol}')" class="btn-main"
            style="text-transform:none; font-size:0.72em; border-color:#0ff; color:#fff; margin-bottom:5px; text-align:left; padding:10px;">
            ${badge} <b>${eq.name}</b> &nbsp;<small style="color:#aaa;">Media ${eq.ovr} OVR | ${rol} | ${sueldo}€/partido</small>
        </button>`;
    });

    html += `</div>`;
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
}

// =====================================================================
// DRAFT NBA — NOCHE DEL DRAFT
// =====================================================================
function mostrarDraftNBA() {
    let pick, tier;
    
    if (p.ovr >= 92 || p.fame >= 58) { 
        pick = Math.floor(1 + Math.random() * 4);  
        tier = "🥇 Pick de Lotería TOP 5";    
    }
    else if (p.ovr >= 87 || p.fame >= 50) { 
        pick = Math.floor(5 + Math.random() * 9);  
        tier = "⭐ Lotería (Top 14)";          
    }
    else if (p.ovr >= 83 || p.fame >= 42) { 
        pick = Math.floor(14 + Math.random() * 16); 
        tier = "📋 Primera Ronda";             
    }
    else if (p.ovr >= 80) { 
        pick = Math.floor(30 + Math.random() * 30); 
        tier = "📄 Segunda Ronda";             
    }
    else { 
        pick = 0; 
        tier = "🤝 Agente Libre";          
    }

    let rol = pick === 0 ? "Suplente" : pick <= 5 ? "Estrella" : pick <= 20 ? "Titular" : "Suplente";

    let nbaTeams = [...DB[2].teams];
    let interesados;
    
    if (pick > 0 && pick <= 5) {
        interesados = nbaTeams.sort((a,b) => a.ovr - b.ovr).slice(0, 5);
    } else if (pick > 5 && pick <= 14) {
        interesados = nbaTeams.sort(() => 0.5 - Math.random()).slice(0, 5);
    } else {
        interesados = nbaTeams.sort((a,b) => b.ovr - a.ovr).slice(0, 5);
    }

    let ofertas = interesados.slice(0, 3);
    let sueldo = rol === "Estrella" ? 400 : rol === "Titular" ? 200 : 150;
    let pickLabel = pick === 0 ? "Sin pick — Agente Libre" : `Pick #${pick}`;

    let html = `
    <div class="dialog-box log-entry" style="border-color:gold; background:rgba(255,215,0,0.06); padding:15px;">
        <h3 style="color:gold; text-align:center; margin-bottom:8px; font-size:1.05em;">🏀 NOCHE DEL DRAFT NBA 🏀</h3>

        <div style="background:rgba(0,0,0,0.4); border:1px solid #444; border-radius:6px; padding:10px; margin-bottom:12px; text-align:center;">
            <p style="color:#aaa; font-size:0.6em; margin-bottom:3px; text-transform:uppercase; letter-spacing:1px;">Tu posición en el draft</p>
            <p style="color:gold; font-size:1.4em; font-weight:bold; margin:0;">${pickLabel}</p>
            <p style="color:#ccc; font-size:0.62em; margin-top:3px;">${tier}</p>
        </div>

        <p style="color:#ddd; font-size:0.68em; text-align:center; margin-bottom:12px;">
            ${pick <= 5 ? `El Comisionado sube al escenario: <i>"Con el pick número <b style='color:gold;'>${pick}</b> del Draft NBA..."</i>` 
                        : pick === 0 ? 'No has sido seleccionado en el draft. Tu agente negocia contratos de agente libre.' 
                        : `Tu nombre suena en el Barclays Center. Pick #${pick}.`}
        </p>

        <p style="color:#aaa; font-size:0.65em; text-align:center; margin-bottom:10px;">Estas franquicias quieren fichar contigo:</p>`;

    ofertas.forEach(eq => {
        let badge = rol === "Estrella" ? "🌟" : rol === "Titular" ? "✅" : "🔋";
        html += `
        <button onclick="ejecutarAscenso(2, '${eq.name}', '${rol}')" class="btn-main"
            style="text-transform:none; font-size:0.72em; border-color:gold; color:#fff; margin-bottom:5px; text-align:left; padding:10px;">
            ${badge} <b>${eq.name}</b> &nbsp;<small style="color:#aaa;">Media ${eq.ovr} OVR | ${rol} | ${sueldo}€/partido</small>
        </button>`;
    });

    html += `</div>`;
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html);
    scrollToBottom();
}

// =====================================================================
// ALL-STAR WEEKEND 
// =====================================================================
const ASW_DUNKERS = [
    { name: "Ja Morant", skill: 93 }, { name: "Zach LaVine", skill: 89 }, { name: "Aaron Gordon", skill: 85 },
    { name: "Anfernee Simons", skill: 83 }, { name: "Obi Toppin", skill: 82 }, { name: "Miles Bridges", skill: 84 },
    { name: "Scottie Barnes", skill: 80 }, { name: "Jalen Green", skill: 86 }, { name: "Mac McClung", skill: 88 },
    { name: "KJ Martin", skill: 81 }, { name: "Kenyon Martin Jr.", skill: 79 }, { name: "Derrick Jones Jr.", skill: 83 },
    { name: "Hamidou Diallo", skill: 82 }, { name: "Dennis Smith Jr.", skill: 80 }, { name: "Cassius Stanley", skill: 78 }
];

const ASW_SHOOTERS = [
    { name: "Stephen Curry", skill: 99 }, { name: "Klay Thompson", skill: 92 }, { name: "Damian Lillard", skill: 90 },
    { name: "Trae Young", skill: 88 }, { name: "Luke Kennard", skill: 87 }, { name: "Buddy Hield", skill: 86 },
    { name: "Tyler Herro", skill: 85 }, { name: "Duncan Robinson", skill: 86 }, { name: "Malik Monk", skill: 83 },
    { name: "Joe Harris", skill: 85 }, { name: "Seth Curry", skill: 87 }, { name: "Fred VanVleet", skill: 84 },
    { name: "Desmond Bane", skill: 85 }, { name: "Mike Conley", skill: 83 }, { name: "Anfernee Simons", skill: 86 }
];

function getAswRivales() {
    let seed = (p.season * 1103515245 + p.allStars * 6547) >>> 0;
    const rand = () => { 
        seed = (seed * 1664525 + 1013904223) >>> 0; 
        return seed / 4294967296; 
    };
    const shuffle = arr => {
        let a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            let j = Math.floor(rand() * (i + 1)); 
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    };
    return { 
        dunkers: shuffle(ASW_DUNKERS).slice(0, 3), 
        shooters: shuffle(ASW_SHOOTERS).slice(0, 3) 
    };
}

function allStarWeekend() {
    p.allStars++; 
    p.fame = Math.min(FAME_MAX, p.fame + 3); 
    p.aswDone = { mates: false, triples: false, game: false };
    
    let rivals = getAswRivales();
    escribirDialogo(`🌟 ALL-STAR WEEKEND — Temporada ${p.season}. En mates: ${rivals.dunkers.map(r=>r.name).join(', ')}. En triples: ${rivals.shooters.map(r=>r.name).join(', ')}.`);
    
    mostrarMenuAllStar();
}

function mostrarMenuAllStar() {
    let done = p.aswDone; 
    let doneCount = [done.mates, done.triples, done.game].filter(Boolean).length;
    let act = document.getElementById('actions'); 
    if(!act) return;
    
    act.style.display = 'flex';
    act.innerHTML = `
        <div style="color:gold; font-size:0.62em; text-align:center; margin-bottom:6px; font-weight:bold;">🌟 ALL-STAR WEEKEND — ${doneCount}/3 completados</div>
        <button onclick="concursoMates()" class="btn-main" style="text-transform:none; font-size:0.75em; border-color:${done.mates?'#333':'gold'}; color:${done.mates?'#444':'gold'};" ${done.mates?'disabled':''}>${done.mates ? '✅ Mates completado' : '🏀 CONCURSO DE MATES'}</button>
        <button onclick="concursoTriples()" class="btn-main" style="text-transform:none; font-size:0.75em; border-color:${done.triples?'#333':'#0ff'}; color:${done.triples?'#444':'#0ff'};" ${done.triples?'disabled':''}>${done.triples ? '✅ Triples completado' : '🎯 CONCURSO DE TRIPLES'}</button>
        <button onclick="allStarGame()" class="btn-main" style="text-transform:none; font-size:0.75em; border-color:${done.game?'#333':'var(--success)'}; color:${done.game?'#444':'var(--success)'};" ${done.game?'disabled':''}>${done.game ? '✅ All-Star Game jugado' : '🏆 ALL-STAR GAME'}</button>
        ${doneCount === 3 ? '<button onclick="finalizarAllStar()" class="btn-main" style="border-color:gold; color:gold; margin-top:6px; font-size:0.75em;">⏭ CONTINUAR A LA SIGUIENTE TEMPORADA</button>' : ''}
    `;
}

function concursoMates() {
    let rivals = getAswRivales().dunkers; 
    let myRounds = [];
    
    for (let i = 0; i < 3; i++) {
        myRounds.push(Math.min(50, Math.max(18, Math.round((p.bandeja / 100) * 44 + (Math.random() * 14 - 5)))));
    }
    
    let myTotal = myRounds.reduce((a, b) => a + b, 0);
    
    let rivalResults = rivals.map(r => { 
        let total = 0; 
        for (let i = 0; i < 3; i++) {
            total += Math.min(50, Math.max(14, Math.round((r.skill / 100) * 44 + (Math.random() * 14 - 5)))); 
        }
        return { name: r.name, total, isMe: false }; 
    });
    
    let all = [{ name: '⭐ ' + p.name.substring(0, 10), total: myTotal, isMe: true }, ...rivalResults];
    all.sort((a, b) => b.total - a.total); 
    
    let pos = all.findIndex(x => x.isMe) + 1;
    let fameGain = pos === 1 ? 10 : pos === 2 ? 5 : 2; 
    
    p.fame = Math.min(FAME_MAX, p.fame + fameGain); 
    p.aswDone.mates = true;

    let html = `
    <div class="dialog-box log-entry" style="border-color:gold; background:rgba(255,215,0,0.05);">
        <h3 style="color:gold; text-align:center; margin-bottom:8px; font-size:0.9em;">🏀 CONCURSO DE MATES</h3>
        <p style="font-size:0.6em; color:#aaa; text-align:center; margin-bottom:8px;">Tus rondas: ${myRounds.join(' / ')} pts</p>`;
        
    all.forEach((r, i) => { 
        html += `
        <div style="display:flex; justify-content:space-between; color:${r.isMe ? 'var(--success)' : i === 0 ? 'gold' : '#ccc'}; font-size:0.7em; margin-bottom:3px;">
            <span>${i + 1}. ${r.name}</span>
            <span style="font-family:monospace;">${r.total} pts</span>
        </div>`; 
    });
    
    html += `
        <p style="color:${pos===1?'gold':'#ccc'}; font-size:0.75em; text-align:center; margin-top:10px; font-weight:bold;">${pos===1?'🥇 ¡CAMPEÓN DE MATES!':pos===2?'🥈 2º puesto':'🥉 Participante'} | +${fameGain} Fama</p>
    </div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom(); 
    mostrarMenuAllStar();
}

function concursoTriples() {
    let rivals = getAswRivales().shooters;
    
    const calcScore = skill => { 
        let s = 0; 
        for (let rack = 0; rack < 5; rack++) { 
            for (let ball = 0; ball < 5; ball++) { 
                if (Math.random() < (skill / 100) * 0.82) s++; 
            } 
            if (Math.random() < (skill / 100) * 0.70) s += 2; 
        } 
        return s; 
    };
    
    let myScore = calcScore(p.tiro); 
    let rivalResults = rivals.map(r => ({ name: r.name, total: calcScore(r.skill), isMe: false }));
    
    let all = [{ name: '⭐ ' + p.name.substring(0, 10), total: myScore, isMe: true }, ...rivalResults];
    all.sort((a, b) => b.total - a.total); 
    
    let pos = all.findIndex(x => x.isMe) + 1;
    let fameGain = pos === 1 ? 10 : pos === 2 ? 5 : 2; 
    
    p.fame = Math.min(FAME_MAX, p.fame + fameGain); 
    if (pos === 1) p.tiro = Math.min(99, p.tiro + 2); 
    p.aswDone.triples = true;

    let html = `
    <div class="dialog-box log-entry" style="border-color:#0ff; background:rgba(0,255,255,0.03);">
        <h3 style="color:#0ff; text-align:center; margin-bottom:8px; font-size:0.9em;">🎯 CONCURSO DE TRIPLES</h3>
        <p style="font-size:0.6em; color:#aaa; text-align:center; margin-bottom:8px;">Máximo posible: 30 pts</p>`;
        
    all.forEach((r, i) => { 
        html += `
        <div style="display:flex; justify-content:space-between; color:${r.isMe ? 'var(--success)' : i === 0 ? '#0ff' : '#ccc'}; font-size:0.7em; margin-bottom:3px;">
            <span>${i + 1}. ${r.name}</span>
            <span style="font-family:monospace;">${r.total}/30</span>
        </div>`; 
    });
    
    html += `
        <p style="color:${pos===1?'#0ff':'#ccc'}; font-size:0.75em; text-align:center; margin-top:10px; font-weight:bold;">${pos===1?'🥇 ¡CAMPEÓN DE TRIPLES! +2 Tiro':pos===2?'🥈 2º puesto':'🥉 Participante'} | +${fameGain} Fama</p>
    </div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom(); 
    mostrarMenuAllStar();
}

function allStarGame() {
    let myPts = Math.floor(8 + Math.random() * (p.ovr / 2.8)); 
    let myAst = Math.floor(1 + Math.random() * 9); 
    let myReb = Math.floor(1 + Math.random() * 7);
    
    let eastScore = Math.floor(138 + Math.random() * 52); 
    let westScore = Math.floor(138 + Math.random() * 52); 
    
    while (eastScore === westScore) {
        westScore++;
    }
    
    let myTeam = Math.random() > 0.5 ? 'ESTE' : 'OESTE'; 
    let myTeamScore = myTeam === 'ESTE' ? eastScore : westScore; 
    let rivalScore = myTeam === 'ESTE' ? westScore : eastScore;
    
    let gameWon = myTeamScore > rivalScore; 
    let isMVP = gameWon && myPts >= 25; 
    let fameGain = isMVP ? 15 : gameWon ? 5 : 2;
    
    p.fame = Math.min(FAME_MAX, p.fame + fameGain); 
    p.aswDone.game = true;

    let html = `
    <div class="dialog-box log-entry" style="border-color:var(--success); background:rgba(0,255,0,0.03);">
        <h3 style="color:var(--success); text-align:center; margin-bottom:8px; font-size:0.9em;">🏆 ALL-STAR GAME</h3>
        <p style="font-size:0.85em; text-align:center; color:#fff; font-weight:bold; margin-bottom:4px;">ESTE ${eastScore} — ${westScore} OESTE</p>
        <p style="font-size:0.65em; text-align:center; color:#aaa; margin-bottom:10px;">Equipo ${myTeam}: ${gameWon ? '✅ Victoria' : '❌ Derrota'}</p>
        <p style="font-size:0.72em; text-align:center; color:var(--success);">Tus stats: <b>${myPts} PTS</b> | ${myAst} AST | ${myReb} REB</p>
        <p style="color:${isMVP?'gold':'#ccc'}; font-size:0.78em; text-align:center; margin-top:10px; font-weight:bold;">${isMVP ? '🌟 ¡MVP DEL ALL-STAR GAME!' : gameWon ? 'Victoria con tu equipo' : 'Buena actuación'} | +${fameGain} Fama</p>
    </div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom(); 
    mostrarMenuAllStar();
}

function finalizarAllStar() {
    p.aswDone = null;
    escribirDialogo('✅ All-Star Weekend finalizado. Los despachos preparan el final de temporada y la Agencia Libre...');
    setTimeout(draft, 2500); 
}

// ==========================================
// FUNCIONES DEL CALENDARIO
// ==========================================
function crearModalCalendario() {
    if(!document.getElementById('calendario-modal')) {
        let div = document.createElement('div'); 
        div.id = 'calendario-modal'; 
        div.className = 'dialog-box';
        div.style.cssText = 'display: none; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 90%; max-width: 600px; z-index: 120; box-shadow: 0 0 0 2000px rgba(0,0,0,0.85); background: #111; border: 2px solid #555; max-height: 80vh; overflow-y: auto;';
        
        div.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #333; padding-bottom: 15px; position: sticky; top: 0; background: #111; z-index: 5;">
            <h2 style="color: #fff; font-size: 1.1em;">📅 CALENDARIO</h2>
            <button onclick="cerrarCalendario()" style="background: none; border: none; color: var(--danger); cursor: pointer; font-size: 1.2em; font-weight: bold;">X</button>
        </div>
        <div id="calendario-content" style="margin-top: 15px; font-size: 0.7em;"></div>`;
        
        document.body.appendChild(div);
    }
}

function abrirCalendario() {
    crearModalCalendario();
    
    let numEquiposConf = leagueTable.filter(t => t.conf === p.teamData.conf).length;
    let partidosTemporada = (p.fase === 0) ? (numEquiposConf - 1) * 2 : (leagueTable.length - 1) * 2;
    
    let posiblesRivales = p.isPlayoffs ? [p.playoffRival] : leagueTable.filter(t => !t.isPlayer && (p.fase===0 ? t.conf===p.teamData.conf : true));
    let html = `<h3 style="color:var(--accent); margin-bottom: 15px; text-align: center;">TEMPORADA ${p.season} - ${p.fase === 0 ? "JUNIOR" : p.fase === 1 ? "ACB" : "NBA"}</h3>`;
    
    if (p.isCopa) {
        html += `<div style="text-align:center; color:#fff; padding:20px;">🏆 JUGANDO LA COPA<br><br>Rival actual: <b style="color:#0ff; font-size:1.5em;">${p.copaRival.name}</b></div>`;
    } else if (p.isPlayoffs) {
        html += `<div style="text-align:center; color:#fff; padding:20px;">Estás en Playoffs. Tu rival actual es:<br><br><b style="color:gold; font-size:1.5em;">${p.playoffRival.name}</b></div>`;
    } else {
        html += `<div style="display: flex; flex-direction: column; gap: 8px;">`;
        for(let i=0; i<partidosTemporada; i++) {
            let r = posiblesRivales[i % posiblesRivales.length];
            let jugado = i < p.sMatches; 
            let esActual = i === p.sMatches;
            let bg = esActual ? "rgba(255,102,0,0.2)" : (jugado ? "rgba(255,255,255,0.05)" : "rgba(0,0,0,0.5)");
            let border = esActual ? "1px solid var(--accent)" : (jugado ? "1px solid #444" : "1px dashed #333");
            let op = jugado ? "0.6" : "1";
            
            html += `
            <div style="background: ${bg}; border: ${border}; opacity: ${op}; padding: 10px; border-radius: 6px; display: flex; justify-content: space-between; align-items: center;">
                <span style="color: #888; width: 40px; font-family:'Press Start 2P', monospace; font-size:0.8em;">J.${i+1}</span>
                <span style="color: #fff; flex: 1; font-weight: ${esActual?'bold':'normal'};">${p.team} <span style="color:#555;">vs</span> ${r.name}</span>
                <span style="color: ${jugado?'#888':(esActual?'var(--accent)':'#fff')}; font-weight: bold; font-family:'Press Start 2P', monospace; font-size:0.7em;">${jugado ? '✓ JUGADO' : (esActual ? '▶ PRÓXIMO' : 'PENDIENTE')}</span>
            </div>`;
        }
        html += `</div>`;
    }
    
    let cc = document.getElementById('calendario-content');
    if(cc) cc.innerHTML = html; 
    
    let mod = document.getElementById('calendario-modal');
    if(mod) mod.style.display = 'block';
}

function cerrarCalendario() { 
    let mod = document.getElementById('calendario-modal'); 
    if(mod) mod.style.display = 'none'; 
}