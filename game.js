// =====================================================================
// CONTEXTOS DE JUGADA — Sin repetición dentro del mismo partido
// Cada función recibe (p, match) y devuelve un string HTML
// =====================================================================

const CONTEXTOS_ATAQUE = [
    // ── TRANSICIONES Y FAST BREAK ─────────────────────────────────
    (p, m) => `El árbitro señala falta en ataque a ${m.rival.name}. El pabellón ruge. <b>${p.name}</b> coge el balón en el medio del campo con la defensa todavía recolocándose.`,
    (p, m) => `Robo de balón fulminante del equipo. El contraataque es 2 contra 1. <b>${p.name}</b> lleva el ritmo y tiene tiempo de decidir.`,
    (p, m) => `Rebote en ataque después de un tiro fallado. El reloj de posesión se reinicia. <b>${p.name}</b> recibe el balón limpio a quince metros del aro.`,
    (p, m) => `Saque de banda propio en la cancha del rival. El entrenador grita indicaciones desde el banquillo. <b>${p.name}</b> tiene libertad total para improvisar.`,
    (p, m) => `Salen corriendo. ${m.rival.name} no ha tenido tiempo de montar la defensa. <b>${p.name}</b> va por delante y el espacio es enorme.`,

    // ── SITUACIONES DE PICK AND ROLL ──────────────────────────────
    (p, m) => `El pívot monta una pantalla perfecta al defensor. <b>${p.name}</b> sale libre por la derecha con el balón en la mano y ventaja de dos pasos.`,
    (p, m) => `Doble pantalla en el lado débil. Los defensores de ${m.rival.name} se confunden. <b>${p.name}</b> emerge limpio en el perímetro.`,
    (p, m) => `El entrenador ha pedido el pick-and-roll favorito. Se ejecuta a la perfección y <b>${p.name}</b> aparece con el defensor todavía pegado a la pantalla.`,

    // ── ISOLATION Y MANO A MANO ───────────────────────────────────
    (p, m) => `El equipo despeja el lado para <b>${p.name}</b>. Uno contra uno. El defensor de ${m.rival.name} adopta posición baja. La cancha entera está mirando.`,
    (p, m) => `Tiempo muerto del rival. Cuando se reanuda el juego, <b>${p.name}</b> tiene al defensor más flojo de ${m.rival.name} enfrente. Matchup ganado antes de empezar.`,
    (p, m) => `El alero rival ha cogido dos faltas. Sale del campo entre protestas. Entra un base menudo a defenderle. <b>${p.name}</b> lo nota y pide el balón con autoridad.`,
    (p, m) => `Situación de uno contra uno en la esquina derecha. El público de casa empieza a ponerse de pie anticipando lo que puede venir.`,

    // ── ÚLTIMOS SEGUNDOS DE POSESIÓN ──────────────────────────────
    (p, m) => `El reloj de posesión marca cuatro segundos. El árbitro ya tiene el brazo levantado. <b>${p.name}</b> tiene que decidir ya o pierde el balón.`,
    (p, m) => `Siete segundos en el reloj de posesión. El equipo ha perdido el ritmo de la jugada. <b>${p.name}</b> recibe en banda y tiene que inventarse algo.`,
    (p, m) => `El receptor de la jugada diseñada ha resbalado en el poste bajo. El balón llega a <b>${p.name}</b> cuando el crono ya marca seis. Sin tiempo para pensar.`,

    // ── PARCIALES Y MOMENTUM ──────────────────────────────────────
    (p, m) => `${m.rival.name} lleva un parcial de 8-0 y el entrenador ha pedido tiempo muerto. Nada más reanudarse, el balón llega a <b>${p.name}</b>. Momento de cortar la racha.`,
    (p, m) => `El equipo lleva cinco canastas seguidas. El público está en pie. <b>${p.name}</b> recibe el balón con el estadio en ebullición y el rival sin ideas defensivas.`,
    (p, m) => `El marcador está igualado y los dos banquillos están tensos. Nadie ha anotado en los últimos tres minutos. <b>${p.name}</b> decide romper el empate.`,
    (p, m) => `Tras el tiempo muerto rival, ${m.rival.name} ha cambiado la defensa. Han pasado a una zona 2-3 inesperada. <b>${p.name}</b> tiene que encontrar el hueco.`,

    // ── SITUACIONES DE FALTA ──────────────────────────────────────
    (p, m) => `El equipo rival lleva cinco faltas de equipo en el cuarto. Una falta más manda a <b>${p.name}</b> a la línea. El defensor lo sabe y retrocede.`,
    (p, m) => `El pivot de ${m.rival.name} tiene cuatro faltas personales. Cada vez que <b>${p.name}</b> se acerca al aro, se aparta. El espacio interior es libre.`,

    // ── SITUACIONES TÁCTICAS ESPECÍFICAS ─────────────────────────
    (p, m) => `Jugada de pizarra después del saque de fondo. Dos bloqueos ciegos y una cortina final dejan a <b>${p.name}</b> totalmente solo en el vértice.`,
    (p, m) => `Media hora antes del partido el entrenador mostró un vídeo de cómo defender al escolta rival. Ahora es al contrario: <b>${p.name}</b> explota ese mismo punto débil.`,
    (p, m) => `El entrenador grita «¡ISO izquierda!» desde el banquillo. Los compañeros abren la cancha. <b>${p.name}</b> recibe en el bono derecho y se planta solo ante el aro.`,
    (p, m) => `Jugada de fin de cuarto. El reloj del partido marca 0:12 y el entrenador ha apostado todo por <b>${p.name}</b> para cerrar el parcial.`,

    // ── ATMÓSFERA Y CONTEXTO EMOCIONAL ───────────────────────────
    (p, m) => `El pabellón está en silencio sepulcral. Partido de máxima tensión. Cada posesión cuenta el doble. <b>${p.name}</b> respira hondo y coge el balón.`,
    (p, m) => `Los aficionados de ${m.rival.name} silban con fuerza cada vez que <b>${p.name}</b> toca el balón. El ambiente es hostil. Momento de responder.`,
    (p, m) => `El estadio entero está coreando el nombre de <b>${p.name}</b>. Los compañeros le miran y le abren el espacio. No puede fallar.`,
    (p, m) => `Partido en casa. El público lleva toda la noche empujando. <b>${p.name}</b> siente el calor de la grada detrás. Los de ${m.rival.name} están intimidados.`,
    (p, m) => `Partido fuera. El pabellón rival está a reventar y el ruido es ensordecedor. <b>${p.name}</b> hace señas a sus compañeros para que se calmen. Concentración.`,

    // ── FÍSICO Y FATIGA ───────────────────────────────────────────
    (p, m) => `<b>${p.name}</b> lleva veintiocho minutos en pista sin apenas descanso. Las piernas pesan, pero la mente sigue fresca. Recibe el balón a media cancha.`,
    (p, m) => `Acaba de salir del banquillo después de tres minutos de descanso. Las piernas están frescas. <b>${p.name}</b> siente que puede correr toda la noche.`,
    (p, m) => `La defensa de ${m.rival.name} lleva siguiendo a <b>${p.name}</b> todo el partido. El defensor está agotado. Ahora mismo hay un paso de ventaja real.`,

    // ── RIVALIDAD Y NARRATIVA ─────────────────────────────────────
    (p, m) => `El defensor asignado a <b>${p.name}</b> ha dicho algo al oído en el último saque. Palabras que duelen. El árbitro no ha visto nada. Hora de responder en la cancha.`,
    (p, m) => `Después de un mate fallido en la jugada anterior, <b>${p.name}</b> recibe el balón de nuevo. Los del banquillo de ${m.rival.name} sonríen. Mala idea.`,
    (p, m) => `El entrenador rival ha pedido doble marcaje sobre <b>${p.name}</b> todo el partido. Ahora hay un hueco enorme en el lado débil. El pase o la decisión individual.`,
    (p, m) => `El scouting de ${m.rival.name} ha preparado bien el partido. Pero el entrenador propio tiene un as en la manga. La jugada que se lleva ensayando tres días.`,

    // ── SITUACIONES DE MARCADOR ───────────────────────────────────
    (p, m) => `El equipo gana de uno. Posesión decisiva. Si meten canasta abren brecha. Si fallan, el rival puede irse. <b>${p.name}</b> lleva el balón con calma.`,
    (p, m) => `El equipo pierde de cuatro. Quedan tres minutos. Dos canastas seguidas pueden igualarlo todo. <b>${p.name}</b> sabe que este es el momento.`,
    (p, m) => `Empate en el marcador. Nadie quiere cometer el error que decida el partido. <b>${p.name}</b> recibe el balón en posición favorable y tiene que actuar.`,
    (p, m) => `El equipo gana de ocho. ${m.rival.name} ha subido la intensidad defensiva. <b>${p.name}</b> recibe el balón y puede liquidar el partido si anota.`,

    // ── ERRORES Y SEGUNDA OPORTUNIDAD ────────────────────────────
    (p, m) => `La jugada diseñada ha salido fatal. El pase ha botado en el suelo pero <b>${p.name}</b> ha recuperado el control. Improvisa. Ahora mismo tiene una oportunidad limpia.`,
    (p, m) => `Fallo técnico del entrenador rival por protestar. Tiro libre técnico más posesión. <b>${p.name}</b> coge el balón con ventaja psicológica enorme.`,
    (p, m) => `El pivot ha perdido el balón en el poste bajo pero <b>${p.name}</b> ha sido el más rápido en reaccionar. Balón recuperado. Segunda oportunidad de oro.`,

    // ── CONTEXTOS DE PARTIDO ESPECÍFICO ──────────────────────────
    (p, m) => `Primer cuarto. El ritmo del partido todavía se está estableciendo. <b>${p.name}</b> quiere marcar el tono desde el primer momento con esta posesión.`,
    (p, m) => `Segundo cuarto. El entrenador ha metido a los suplentes pero le ha pedido a <b>${p.name}</b> que se quede en pista para mantener el nivel.`,
    (p, m) => `Tercer cuarto. El cuarto del partido que más le gusta a <b>${p.name}</b>. Las piernas siguen bien y la mente está centrada. Posesión limpia.`,
    (p, m) => `Cuarto cuarto. El partido se decide ahora. <b>${p.name}</b> recibe el balón sabiendo que estas posesiones son las que construyen leyendas o las rompen.`,
    (p, m) => `Minuto de descanso entre cuartos. El entrenador ha pedido calma. <b>${p.name}</b> sale a la pista con la instrucción clara: buscar el tiro propio.`,

    // ── SITUACIONES ESPECIALES ────────────────────────────────────
    (p, m) => `El árbitro lleva un partido muy igualado sin pitar apenas. Ambos equipos juegan al límite. <b>${p.name}</b> decide no arriesgar la falta y busca el tiro limpio.`,
    (p, m) => `Balón robado en campo propio. El equipo sale a la carrera. <b>${p.name}</b> lleva el balón y tiene dos opciones frente a un solo defensor.`,
    (p, m) => `El marcador electrónico del pabellón falla un momento. Caos en la pista. El árbitro pita pausa. Al reanudar, <b>${p.name}</b> es el primero en reaccionar.`,
    (p, m) => `El entrenador grita desde el banquillo: «¡Tú, tírala!». No hay ninguna duda de a quién va dirigido. <b>${p.name}</b> recibe el balón con plena confianza del cuerpo técnico.`,
];

const CONTEXTOS_DEFENSA = [
    // ── PRESIÓN EN EL PERÍMETRO ───────────────────────────────────
    (p, m) => `La estrella de ${m.rival.name} viene con el balón. Lleva quince puntos ya. <b>${p.name}</b> se planta en su camino con los brazos abiertos y los pies firmes.`,
    (p, m) => `${m.rival.name} sube el balón lento buscando la jugada diseñada. <b>${p.name}</b> lee el movimiento antes de que empiece y adelanta la posición.`,
    (p, m) => `El base rival intenta driblar hacia la derecha por tercera vez consecutiva. <b>${p.name}</b> ya lo ha memorizado. Espera el momento exacto para actuar.`,
    (p, m) => `El alero de ${m.rival.name} ha recibido el pase en el poste alto. Espalda al aro. <b>${p.name}</b> presiona por detrás sin dejarle girarse.`,

    // ── ROTACIONES DEFENSIVAS ─────────────────────────────────────
    (p, m) => `Pick-and-roll rival. El armador ha driblado a su defensor y viene hacia <b>${p.name}</b> que tiene que decidir si cerrar al portador o cubrir al posteador.`,
    (p, m) => `El compañero ha resbalado en el tercer cuarto y hay un mano a mano inesperado. <b>${p.name}</b> es el último hombre. Solo entre el rival y el aro.`,
    (p, m) => `Movimiento de tijera en el poste. Dos rivales cruzan en el mismo espacio. <b>${p.name}</b> tiene que elegir bien a quién seguir o la canasta está hecha.`,
    (p, m) => `El sistema ofensivo de ${m.rival.name} ha generado una ventaja clara. <b>${p.name}</b> hace la rotación defensiva en el último momento para tapar el hueco.`,

    // ── SITUACIONES DE REBOTE ─────────────────────────────────────
    (p, m) => `El tiro del rival ha golpeado el aro con fuerza. El balón sale disparado hacia el lado de <b>${p.name}</b>. Primer bloqueo y luego a por el rebote.`,
    (p, m) => `El pivot rival ha fallado la entrada al aro. El rebote sale largo. <b>${p.name}</b> anticipa la trayectoria y se lanza a por el balón antes que nadie.`,
    (p, m) => `Tiro de tres fallado por ${m.rival.name}. El balón rebota lejos del aro. Varios jugadores saltan al mismo tiempo. <b>${p.name}</b> tiene que imponerse.`,
    (p, m) => `Situación de cinco contra cuatro en el rebote defensivo. Alguien no ha bloqueado. <b>${p.name}</b> ve el peligro y se mueve para cerrar el espacio más comprometido.`,

    // ── CONTEXTOS DE ATMÓSFERA ────────────────────────────────────
    (p, m) => `${m.rival.name} lleva un parcial de seis puntos seguidos. El entrenador grita para subir la intensidad. <b>${p.name}</b> asume la responsabilidad de frenar la sangría.`,
    (p, m) => `El público local celebra cada posesión defensiva. La presión del pabellón está asfixiando al rival. <b>${p.name}</b> canaliza esa energía en la pista.`,
    (p, m) => `El pivot rival lleva el partido dominando el juego interior. <b>${p.name}</b> recibe la orden del entrenador: hazle la vida imposible esta jugada.`,
    (p, m) => `El escolta de ${m.rival.name} ha metido dos triples seguidos desde la esquina. El entrenador señala a <b>${p.name}</b> y le indica que lo siga a donde vaya.`,

    // ── ROBO DE BALÓN ─────────────────────────────────────────────
    (p, m) => `El base rival está dribblando con la cabeza abajo, buscando a un compañero. <b>${p.name}</b> ve el balón al descubierto y calcula el momento exacto para intentar el robo.`,
    (p, m) => `Pase al poste bajo con poco ángulo. El balón va lento. <b>${p.name}</b> intercepta la línea de pase antes de que el rival pueda reaccionar.`,
    (p, m) => `El pivote rival recibe en el poste y empieza a girar. <b>${p.name}</b> espera el momento de la vuelta para intentar el strip sin hacer falta.`,
    (p, m) => `El armador de ${m.rival.name} ha levantado la cabeza un segundo demasiado. <b>${p.name}</b> lee la intención del pase antes de que salga el balón.`,

    // ── TAPÓN ─────────────────────────────────────────────────────
    (p, m) => `El ala-pívot rival viene en carrera hacia el aro. Tiene ventaja de un paso. Pero <b>${p.name}</b> tiene el timing y la altura para recuperar el vuelo.`,
    (p, m) => `Última fila defensiva. El rival va solo hacia el aro después de un contraataque. <b>${p.name}</b> vuela desde el lado y llega justo a tiempo para plantarse.`,
    (p, m) => `El pívot de ${m.rival.name} recibe el balón en el poste bajo y eleva para el gancho. <b>${p.name}</b> salta con él y su mano derecha está en el camino del balón.`,
    (p, m) => `Entrada directa al aro. El base rival no ha esperado a nadie. <b>${p.name}</b> deja a su hombre y viene a tapar la entrada limpiamente por detrás.`,

    // ── DEFENSA EN EL POSTE ───────────────────────────────────────
    (p, m) => `El pivot de ${m.rival.name} tiene veinte kilos más. Empuja hacia el aro en el poste bajo. <b>${p.name}</b> aguanta el cuerpo a cuerpo sabiendo que la posición es clave.`,
    (p, m) => `El cuatro rival recibe en el codo y finta el tiro. <b>${p.name}</b> no pica. Se queda en el suelo esperando el movimiento real antes de actuar.`,
    (p, m) => `El alero de ${m.rival.name} tiene el balón en el lado débil con poco espacio. <b>${p.name}</b> le cierra la línea de pase y le fuerza a girar hacia el lado bueno de la defensa.`,

    // ── DEFENSA DE EQUIPO ─────────────────────────────────────────
    (p, m) => `La zona 2-3 del equipo está funcionando. ${m.rival.name} no encuentra el hueco. <b>${p.name}</b> cubre la zona baja y espera el ataque interior con los brazos arriba.`,
    (p, m) => `Presión en campo rival. El equipo sube la defensa para generar el caos. <b>${p.name}</b> está en primera línea presionando el saque de fondo.`,
    (p, m) => `El entrenador ha pedido defensa individual dura. Sin ayudas. <b>${p.name}</b> tiene que frenar solo a su hombre durante toda la posesión sin ceder ni un centímetro.`,
    (p, m) => `Trampa defensiva en la esquina. El rival está acorralado entre la línea de fondo y <b>${p.name}</b>. Si se va a la derecha, un compañero cierra. Si se queda, la presión puede forzar el error.`,

    // ── SITUACIONES DE JUEGO FÍSICO ───────────────────────────────
    (p, m) => `El partido se ha puesto muy físico. Contacto en cada jugada. <b>${p.name}</b> aguanta el juego duro sin caer en la trampa de la falta fácil.`,
    (p, m) => `Dos canastas seguidas han llegado por faltas tontas de compañeros. El entrenador ha gritado que no más faltas estúpidas. <b>${p.name}</b> lo tiene claro.`,
    (p, m) => `El partido entra en la última defensa de la primera mitad. ${m.rival.name} busca el tiro de los últimos segundos del cuarto. <b>${p.name}</b> cubre su zona con los brazos bien abiertos.`,

    // ── CONTEXTOS NARRATIVOS ──────────────────────────────────────
    (p, m) => `El entrenador le gritó durante el tiempo muerto: «¡Tú le defiendes, nadie más!». Ahora el rival está enfrente. <b>${p.name}</b> tiene la encomienda clara.`,
    (p, m) => `El escolta de ${m.rival.name} ha fanfarroneado después del último triple. <b>${p.name}</b> le mira fijamente. Esta posesión no va a ser tan fácil.`,
    (p, m) => `El equipo necesita una parada defensiva para recuperar el control del partido. <b>${p.name}</b> pide el balón con los ojos: yo me encargo.`,
];

// ─────────────────────────────────────────────────────────────────────
// FUNCIÓN PRINCIPAL — Devuelve un contexto único para la jugada
// ─────────────────────────────────────────────────────────────────────
function getContextoJugada(tipo, p, match) {
    let pool = tipo === "ATAQUE" ? CONTEXTOS_ATAQUE : CONTEXTOS_DEFENSA;
    let key  = tipo === "ATAQUE" ? "ataque" : "defensa";

    if (!match.usedContexts) match.usedContexts = { ataque: [], defensa: [] };

    // Índices no usados aún
    let disponibles = [];
    for (let i = 0; i < pool.length; i++) {
        if (!match.usedContexts[key].includes(i)) disponibles.push(i);
    }

    // Si se agotaron (no debería pasar con el pool actual) devuelve vacío
    if (disponibles.length === 0) return "";

    let elegido = disponibles[Math.floor(Math.random() * disponibles.length)];
    match.usedContexts[key].push(elegido);
    return pool[elegido](p, match);
}

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
    viralidad: 0, 
    sponsorContratos: [], 
    sponsorRechazadas: [], 
    sponsorObjetivo: null, 
    agenciaOfertas: null, 
    rings: 0, 
    mvps: 0, 
    allStars: 0, 
    dpoys: 0, 
    rookies: 0, 
    sixthMan: 0, 
    copas: 0, 
    ligasJunior: 0, 
    ligasACB: 0,
        rivalReconciled: false, 
                            ofertaPendiente: "",
    tiro: 65, 
    fisico: 65, 
    bandeja: 65, 
    mate: 65,
    manejo: 65, 
    def: 65,
    tapón: 65,
    robo: 65,
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
    debutadoACB: false, debutadoNBA: false,
    copaPlayedThisSeason: false, 
    isCopa: false, 
    copaStage: "", 
    copaRival: null,
    rivalTeam: "", 
    rivalStyle: "",
    felicidad: 50,
    aswPlayedThisSeason: false,
    aswDone: null,
    animCompradas: ["t_base", "b_base", "m_base", "a_base"],
    animEquipadas: { tiro: "t_base", bandeja: "b_base", mate: "m_base", manejo: "a_base" },
    isMercado: false, 
    fichajesIA: [] 
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

// Devuelve la posición real de un jugador:
// - Titulares/6M: su campo p directamente
// - Suplentes BAN: el campo rp (posición real en datos), ya no se usa inferencia por índice
function getPosReal(jug) {
    if (jug.p !== "BAN") return jug.p;
    return jug.rp || jug.p;
}

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

// =====================================================================
// BASE DE DATOS DE ANIMACIONES (PRECIOS AJUSTADOS)
// =====================================================================
const DB_ANIMACIONES = {
    tiro: [
        { id: "t_base", nombre: "Tiro Clásico", precio: 0, bono: 0, desc: "Mecánica estándar de tiro." },
        { id: "t_rapido", nombre: "Tiro Rápido", precio: 2000, bono: 1, desc: "+1% de Acierto en Triples." },
        { id: "t_pro", nombre: "Mecánica Perfecta", precio: 4000, bono: 2, desc: "+2% de Acierto en Triples." },
        { id: "t_klay", nombre: "Tiro de K. Thompson", precio: 5500, bono: 3, famaBono: 0.2, desc: "+3% Acierto | +0.2 Fama por triple." },
        { id: "t_kd", nombre: "Tiro de K. Durant", precio: 6500, bono: 4, famaBono: 0.2, desc: "+4% Acierto | +0.2 Fama por triple." },
        { id: "t_curry", nombre: "Tiro de S. Curry", precio: 8000, bono: 5, famaBono: 0.2, desc: "+5% Acierto | +0.2 Fama por triple." }
    ],
    bandeja: [
        { id: "b_base", nombre: "Bandeja Básica", precio: 0, bono: 0, desc: "Finalización estándar." },
        { id: "b_euro", nombre: "Euro-Step", precio: 1800, bono: 1, desc: "+1% de Acierto en Bandejas." },
        { id: "b_jelly", nombre: "Jelly Layup", precio: 3800, bono: 2, desc: "+2% de Acierto en Bandejas." },
        { id: "b_harden", nombre: "Euro de J. Harden", precio: 5000, bono: 3, famaBono: 0.2, desc: "+3% Acierto | +0.2 Fama por bandeja." },
        { id: "b_ja", nombre: "Acrobacia de Ja Morant", precio: 6500, bono: 4, famaBono: 0.2, desc: "+4% Acierto | +0.2 Fama por bandeja." },
        { id: "b_kyrie", nombre: "Finalización de Kyrie", precio: 8000, bono: 5, famaBono: 0.2, desc: "+5% Acierto | +0.2 Fama por bandeja." }
    ],
    mate: [
        { id: "m_base", nombre: "Mate a una mano", precio: 0, bono: 0, desc: "Mate seguro y conservador." },
        { id: "m_toma", nombre: "Tomahawk", precio: 2500, bono: 1, desc: "+1% de Acierto en Mates." },
        { id: "m_360", nombre: "Mate 360º", precio: 4500, bono: 2, desc: "+2% de Acierto en Mates." },
        { id: "m_giannis", nombre: "Vuelo de Giannis", precio: 6000, bono: 3, famaBono: 0.2, desc: "+3% Acierto | +0.2 Fama por mate." },
        { id: "m_lebron", nombre: "Tomahawk de LeBron", precio: 7000, bono: 4, famaBono: 0.2, desc: "+4% Acierto | +0.2 Fama por mate." },
        { id: "m_vince", nombre: "Molinillo de V. Carter", precio: 8000, bono: 5, famaBono: 0.2, desc: "+5% Acierto | +0.2 Fama por mate." }
    ],
    manejo: [
        { id: "a_base", nombre: "Bote de Control", precio: 0, bono: 0, desc: "Dribbling básico." },
        { id: "a_cross", nombre: "Crossover Letal", precio: 2000, bono: 1, desc: "+1% de Acierto al Asistir." },
        { id: "a_ankle", nombre: "Ankle Breaker", precio: 4000, bono: 2, desc: "+2% de Acierto al Asistir." },
        { id: "a_ai", nombre: "Crossover de Iverson", precio: 5500, bono: 3, famaBono: 0.2, desc: "+3% Acierto | +0.2 Fama por asistencia." },
        { id: "a_kyrie", nombre: "Handles de Kyrie", precio: 6800, bono: 4, famaBono: 0.2, desc: "+4% Acierto | +0.2 Fama por asistencia." },
        { id: "a_magic", nombre: "Pases de Magic", precio: 8000, bono: 5, famaBono: 0.2, desc: "+5% Acierto | +0.2 Fama por asistencia." }
    ]
};

function getAnimBonus(tipoAccion) {
    let cat = tipoAccion === 't' ? 'tiro' : (tipoAccion === 'b' ? 'bandeja' : (tipoAccion === 'm' ? 'mate' : (tipoAccion === 'a' ? 'manejo' : null)));
    if (!cat) return 0;
    let animId = p.animEquipadas[cat];
    let animObj = DB_ANIMACIONES[cat].find(a => a.id === animId);
    return Math.min(6, animObj ? animObj.bono : 0);
}

// =====================================================================
// SISTEMA DE MERCADO Y RECALCULO DE OVR
// =====================================================================
function recalcularMediasEquipos() {
    leagueTable.forEach(t => {
        if (t.roster && t.roster.length > 0) {
            let sortedRoster = [...t.roster].sort((a, b) => b.o - a.o);
            let top5 = sortedRoster.slice(0, 5);
            let sumOvr = top5.reduce((acc, jug) => acc + jug.o, 0);
            t.ovr = Math.round(sumOvr / top5.length);
            
            t.star = top5[0].n;
            t.starOvr = top5[0].o;
        }
    });
}

function simularMercadoIA() {
    p.fichajesIA = [];
    if (p.fase === 0) return; 
    
    let todosJugadores = [];
    leagueTable.forEach(t => {
        if (t.name !== p.team) {
            t.roster.forEach(j => {
                if (j.n !== p.name && j.n !== p.rivalName && j.o >= 75) {
                    todosJugadores.push({ jug: j, equipoViejo: t });
                }
            });
        }
    });
    
    todosJugadores.sort(() => 0.5 - Math.random());
    let jugadoresMover = todosJugadores.slice(0, 3 + Math.floor(Math.random() * 2));
    
    jugadoresMover.forEach(mov => {
        let equiposPosibles = leagueTable.filter(t => t.name !== mov.equipoViejo.name && t.name !== p.team);
        if (equiposPosibles.length > 0) {
            let equipoNuevo = equiposPosibles[Math.floor(Math.random() * equiposPosibles.length)];
            
            mov.equipoViejo.roster = mov.equipoViejo.roster.filter(j => j.n !== mov.jug.n);
            equipoNuevo.roster.push(mov.jug);
            
            p.fichajesIA.push({ nombre: mov.jug.n, ovr: mov.jug.o, de: mov.equipoViejo.name, a: equipoNuevo.name });
        }
    });
    
    recalcularMediasEquipos();
}

function renderMercado() {
    let act = document.getElementById('actions');
    if(!act) return;
    if(p.mercadoIntentos === undefined) p.mercadoIntentos = 3;

    let html = `
        <div style="font-size:0.7em; color:var(--accent); text-align:center; margin-bottom:10px; font-weight:bold;">--- 🔄 MERCADO DE VERANO ---</div>
        <div style="font-size:0.55em; color:#fff; margin-bottom:10px; text-align:center;">Tienes <b style="color:gold;">${p.mercadoIntentos}</b> intento${p.mercadoIntentos !== 1 ? 's' : ''} restante${p.mercadoIntentos !== 1 ? 's' : ''} de fichaje.</div>
        
        <div style="background:rgba(0,0,0,0.5); border:1px solid #444; border-radius:5px; padding:10px; margin-bottom:12px;">
            <div style="color:gold; font-size:0.65em; font-weight:bold; margin-bottom:5px;">🔥 MOVIMIENTOS DESTACADOS EN LA LIGA</div>`;
            
    if (p.fichajesIA && p.fichajesIA.length > 0) {
        p.fichajesIA.forEach(f => {
            html += `<div style="font-size:0.55em; color:#ccc; margin-bottom:3px;">➡️ <b style="color:#fff;">${f.nombre}</b> (OVR ${f.ovr}) abandona <i>${f.de}</i> y firma por <b style="color:var(--accent);">${f.a}</b>.</div>`;
        });
    } else {
        html += `<div style="font-size:0.55em; color:#888;">Mercado tranquilo esta ventana.</div>`;
    }
    
    html += `</div>`;

    if (p.mercadoIntentos > 0) {
        html += `
        <div style="background:rgba(0,0,0,0.5); border:1px solid var(--accent); border-radius:5px; padding:10px; margin-bottom:10px;">
            <div style="color:var(--accent); font-size:0.65em; font-weight:bold; margin-bottom:5px;">📋 SUGERIR UN FICHAJE PARA ${p.team.toUpperCase()}</div>
            <p style="font-size:0.55em; color:#aaa; margin-bottom:8px;">El rol ofrecido depende de la media del jugador vs tu plantilla actual.</p>
            
            <select id="sel-fichaje" style="width:100%; padding:5px; background:#222; color:#fff; border:1px solid #555; margin-bottom:8px;" onchange="calcularProbabilidadFichaje()">
                <option value="">-- Selecciona un jugador --</option>`;
                
        let opcionesFichaje = [];
        leagueTable.forEach(t => {
            if (t.name !== p.team && t.roster) {
                t.roster.forEach(j => {
                    if (j.n !== p.name && j.n !== p.rivalName && !j.n.includes("Jugador")) {
                        opcionesFichaje.push({ j: j, tName: t.name });
                    }
                });
            }
        });
        opcionesFichaje.sort((a,b) => b.j.o - a.j.o);
        opcionesFichaje.forEach(opt => {
            html += `<option value="${opt.j.n}|${opt.tName}|${opt.j.o}">${opt.j.n} (${opt.tName}) - OVR ${opt.j.o}</option>`;
        });
                
        html += `</select>
            <div id="prob-fichaje-txt" style="font-size:0.6em; color:gold; text-align:center; margin-bottom:8px;">Selecciona a alguien para ver la probabilidad.</div>
            <button onclick="intentarFichaje()" class="btn-main" style="border-color:var(--success); color:var(--success); width:100%;">🤝 INTENTAR FICHAJE (${p.mercadoIntentos} restantes)</button>
        </div>`;
    } else {
        html += `<div style="font-size:0.6em; color:#555; text-align:center; margin-bottom:10px; padding:8px; border:1px solid #333; border-radius:4px;">Has agotado tus intentos de fichaje esta ventana.</div>`;
    }
    
    html += `<button onclick="cerrarMercado()" class="btn-main" style="border-color:#555; color:#ccc; width:100%;">⏭️ CERRAR MERCADO Y EMPEZAR TEMPORADA</button>`;
    
    act.innerHTML = html;
}
            
function calcularProbabilidadFichaje() {
    let sel = document.getElementById('sel-fichaje');
    let txt = document.getElementById('prob-fichaje-txt');
    if (!sel || !sel.value) { txt.innerHTML = "Selecciona a alguien para ver la probabilidad."; return; }
    
    let parts = sel.value.split('|');
    let targetOvr = parseInt(parts[2]);
    let miEquipo = leagueTable.find(t => t.name === p.team);
    
    let probBase = Math.floor((p.fame * 0.6) + ((miEquipo.ovr - targetOvr) * 2.5) + 30);
    probBase = Math.max(1, Math.min(95, probBase));
    
    let color = probBase > 60 ? 'var(--success)' : (probBase > 30 ? 'gold' : 'var(--danger)');
    txt.innerHTML = `Probabilidad de convencerle: <b style="color:${color}; font-size:1.2em;">${probBase}%</b>`;
    sel.dataset.prob = probBase;
}

function intentarFichaje() {
    let sel = document.getElementById('sel-fichaje');
    if (!sel || !sel.value) return alert("Selecciona a un jugador primero.");
    if (p.mercadoIntentos <= 0) return alert("No te quedan intentos de fichaje.");
    
    let prob = parseInt(sel.dataset.prob) || 50;
    let parts = sel.value.split('|');
    let targetName = parts[0];
    let oldTeamName = parts[1];
    let targetOvr = parseInt(parts[2]);
    
    p.mercadoIntentos--;
    let roll = Math.random() * 100;
    
    if (roll <= prob) {
        let oldTeam = leagueTable.find(t => t.name === oldTeamName);
        let miEquipo = leagueTable.find(t => t.name === p.team);
        
        if (oldTeam && miEquipo) {
            let jugadorObj = oldTeam.roster.find(j => j.n === targetName);
            if (jugadorObj) {
                oldTeam.roster = oldTeam.roster.filter(j => j.n !== targetName);
                miEquipo.roster.push(jugadorObj);

                // Rol realista: si su OVR supera al mejor titular, es Estrella
                let titulares = miEquipo.roster.filter(j => j.n !== targetName).sort((a,b) => b.o - a.o);
                let mejorOvr = titulares.length > 0 ? titulares[0].o : 70;
                let rolNuevo = targetOvr >= mejorOvr + 3 ? "Estrella" : (targetOvr >= mejorOvr - 4 ? "Titular" : "Suplente");

                escribirDialogo(`🚨 ¡BOMBAZO! <b style="color:var(--success);">${targetName}</b> (OVR ${targetOvr}) ficha como <b>${rolNuevo}</b> por ${p.team}. Intentos restantes: ${p.mercadoIntentos}.`);
            }
        }
    } else {
        escribirDialogo(`❌ El fichaje de <b style="color:var(--danger);">${targetName}</b> se ha frustrado. Intentos restantes: ${p.mercadoIntentos}.`);
    }
    
    recalcularMediasEquipos();
    renderMercado();
}

function cerrarMercado() {
    p.isMercado = false;
    updateUI();
    renderMenu();
    escribirDialogo(`SISTEMA:<br>El mercado ha cerrado. Las plantillas están confirmadas. ¡A por la Temporada ${p.season}!`);
    guardarPartida();
}

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

    let rivalOvr = Math.min(DB[p.fase].maxOvr, p.ovr + Math.floor(Math.random() * 3));
    
    if (!p.rivalStyle) {
        const estilos = ['anotador','defensor','pasador','reboteador','completo'];
        p.rivalStyle = estilos[Math.floor(Math.random() * estilos.length)];
    }
    
    if (p.fase === 0) {
        p.rivalTeam = p.team;
    } else {
        if (!p.rivalTeam || p.rivalTeam === p.team || !DB[p.fase].teams.find(t => t.name === p.rivalTeam)) {
            let posibles = DB[p.fase].teams.filter(t => t.name !== p.team);
            posibles = posibles.sort((a, b) => b.ovr - a.ovr).slice(0, 6);
            let randomTeam = posibles[Math.floor(Math.random() * posibles.length)];
            p.rivalTeam = randomTeam.name;
        }
    }

    let tDB = DB[p.fase].teams.find(t => t.name === p.rivalTeam);
    if (tDB) {
        if (!tDB.roster) {
            tDB.roster = [
                {n: p.rivalName, p: "B", o: rivalOvr, pts:0, reb:0, ast:0, rob:0, tap:0},
                {n: "Jugador 2", p: "E", o: tDB.ovr}, {n: "Jugador 3", p: "A", o: tDB.ovr-1},
                {n: "Jugador 4", p: "AP", o: tDB.ovr-1}, {n: "Jugador 5", p: "P", o: tDB.ovr},
                {n: "Sexto", p: "6M", o: tDB.ovr-2}
            ];
        } else {
            let slot = (p.rivalTeam === p.team) ? 1 : 0; 
            if(tDB.roster[slot]) {
                tDB.roster[slot].n = p.rivalName; 
                tDB.roster[slot].o = rivalOvr;
                if(tDB.roster[slot].pts === undefined) { tDB.roster[slot].pts = 0; tDB.roster[slot].reb = 0; tDB.roster[slot].ast = 0; tDB.roster[slot].rob = 0; tDB.roster[slot].tap = 0; }
            }
        }
        tDB.star = p.rivalName; 
        if(leagueTable.length > 0) {
            let leagueTeam = leagueTable.find(t => t.name === p.rivalTeam);
            if(leagueTeam) leagueTeam.star = p.rivalName;
        }
    }
}

function distributeRivalStats(jug) {
    let m = Math.max(1, leagueTable.find(t=>t.name===p.rivalTeam)?.v + leagueTable.find(t=>t.name===p.rivalTeam)?.d || 1);
    let base = jug.o;
    const mults = {
        anotador:    {pts:1.5, ast:0.6, reb:0.7, rob:0.7, tap:0.6},
        defensor:    {pts:0.7, ast:0.7, reb:1.2, rob:1.6, tap:1.5},
        pasador:     {pts:0.8, ast:1.8, reb:0.7, rob:1.2, tap:0.6},
        reboteador:  {pts:0.8, ast:0.6, reb:1.8, rob:0.8, tap:1.2},
        completo:    {pts:1.1, ast:1.1, reb:1.1, rob:1.1, tap:1.1},
    };
    let w = mults[p.rivalStyle] || mults.completo;
    let pts = Math.floor((8 + base/8 + Math.random()*8) * w.pts);
    let ast = Math.floor((1 + base/35 + Math.random()*4) * w.ast);
    let reb = Math.floor((2 + base/25 + Math.random()*5) * w.reb);
    let rob = Math.floor((0.5 + base/60 + Math.random()*2) * w.rob);
    let tap = Math.floor((0.3 + base/65 + Math.random()*1.5) * w.tap);
    jug.pts += pts; jug.ast += ast; jug.reb += reb; jug.rob += rob; jug.tap += tap;
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
// 3. INICIO DE PARTIDA Y CONFERENCIAS
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
            
            if (!p.animCompradas) p.animCompradas = ["t_base", "b_base", "m_base", "a_base"];
            if (!p.animEquipadas) p.animEquipadas = { tiro: "t_base", bandeja: "b_base", mate: "m_base", manejo: "a_base" };
            if (p.sponsorTimeLeft === undefined) p.sponsorTimeLeft = 0;
            if (p.ofertaPendiente === undefined) p.ofertaPendiente = "";

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
            
            if(p.isMercado) {
                renderMercado();
            } else {
                renderMenu();
                escribirDialogo(`SISTEMA:<br>Partida cargada. Temporada ${p.season}/17.`);
            }
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
        p.mate = 65;
        p.tapón = 65;
        p.robo = 65;

        if (p.style === "mate_tapon")    { p.fisico+=14; p.mate+=16; p.tapón+=14; p.tiro-=10; p.manejo-=6; p.bandeja-=4; }
        if (p.style === "tiro_robo")     { p.tiro+=14; p.robo+=14; p.def+=8; p.fisico-=8; p.manejo-=4; p.bandeja-=4; }
        if (p.style === "manejo_bandeja"){ p.manejo+=14; p.bandeja+=14; p.fisico+=4; p.def-=8; p.tiro-=4; }
        if (p.style === "tiro_manejo")   { p.tiro+=14; p.manejo+=12; p.bandeja+=4; p.def-=8; p.fisico-=4; }
        
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
    
    if (!p.teamData || p.teamData.name === "") {
        p.teamData = leagueTable[0];
        p.team = p.teamData.name;
    }
    
    recalcularMediasEquipos();
}

// =====================================================================
// 4. MENÚS, ENTRENAMIENTO Y VIDA PRIVADA
// =====================================================================

function calcOvr() {
    const weights = {
        'Base':      { tiro:0.18, manejo:0.22, fisico:0.14, def:0.12, bandeja:0.12, mate:0.08, tapón:0.06, robo:0.08 },
        'Escolta':   { tiro:0.22, manejo:0.16, fisico:0.14, def:0.12, bandeja:0.12, mate:0.10, tapón:0.06, robo:0.08 },
        'Alero':     { tiro:0.18, manejo:0.14, fisico:0.16, def:0.12, bandeja:0.14, mate:0.12, tapón:0.08, robo:0.06 },
        'Ala-Pívot': { tiro:0.12, manejo:0.10, fisico:0.18, def:0.14, bandeja:0.14, mate:0.16, tapón:0.10, robo:0.06 },
        'Pívot':     { tiro:0.08, manejo:0.08, fisico:0.20, def:0.14, bandeja:0.12, mate:0.18, tapón:0.14, robo:0.06 },
    };
    let w = weights[p.pos] || weights['Alero'];
    let raw = p.tiro*w.tiro + p.manejo*w.manejo + p.fisico*w.fisico + p.def*w.def
            + p.bandeja*w.bandeja + p.mate*w.mate + (p['tapón']||p.tapón||65)*w.tapón + p.robo*w.robo;
    return Math.round(raw);
}

function toggleEntrenar() {
    let panel = document.getElementById('panel-entrenar');
    if (panel) panel.style.display = panel.style.display === 'none' ? 'block' : 'none';
}

// =====================================================================
// SISTEMA BUILD POINTS ESTILO 2K
// =====================================================================

// Caps máximos por posición y estilo (adaptado de 2K según posición)
function getAttrCaps() {
    const h = parseInt(p.height) || 190;
    const pos = p.pos;
    // Base: tiro y manejo altos, mate y tapón bajos
    // Pívot: mate y tapón altos, tiro y manejo bajos
    // La altura también afecta: alto = mejor mate/tap/reb, peor manejo/tiro
    
    let altoBonus = h >= 210 ? 8 : (h >= 205 ? 5 : (h >= 200 ? 2 : 0));
    let altoNerf  = h >= 210 ? 12 : (h >= 205 ? 8 : (h >= 200 ? 4 : 0));

    const caps = {
        'Base':      { fisico:90, tiro:99, manejo:99, bandeja:90, mate:75+altoBonus, def:85, tapón:72+altoBonus, robo:88 },
        'Escolta':   { fisico:90, tiro:99, manejo:92, bandeja:92, mate:82+altoBonus, def:88, tapón:78+altoBonus, robo:85 },
        'Alero':     { fisico:92, tiro:92, manejo:86, bandeja:94, mate:90+altoBonus, def:90, tapón:85+altoBonus, robo:82 },
        'Ala-Pívot': { fisico:95, tiro:85, manejo:78, bandeja:96, mate:95+altoBonus, def:94, tapón:92+altoBonus, robo:78 },
        'Pívot':     { fisico:99, tiro:75, manejo:70, bandeja:98, mate:99,           def:96, tapón:99,           robo:72 },
    };

    let c = caps[pos] || caps['Alero'];
    // Aplicar nerf de altura en tiro/manejo para jugadores altos
    if (altoNerf > 0) {
        c = { ...c };
        c.tiro    = Math.max(70, c.tiro    - altoNerf);
        c.manejo  = Math.max(65, c.manejo  - altoNerf);
        c.robo    = Math.max(65, c.robo    - Math.floor(altoNerf/2));
    }
    // Nunca superar 99
    Object.keys(c).forEach(k => { c[k] = Math.min(99, c[k]); });
    return c;
}

// Puntos de build gastados = suma de (valor - 65) por cada atributo
function getBuildPointsUsed() {
    const attrs = ['fisico','tiro','manejo','bandeja','mate','def','tapón','robo'];
    return attrs.reduce((s, a) => s + Math.max(0, (p[a]||65) - 65), 0);
}

const TOTAL_BUILD_POINTS = 450; // Total de puntos disponibles (como 2K)

function getAttrCost(val) {
    // Coste en dinero — escala con el valor actual del atributo
    if (val >= 93) return 12000;
    if (val >= 88) return 7000;
    if (val >= 83) return 3500;
    if (val >= 78) return 1500;
    if (val >= 73) return 600;
    if (val >= 68) return 200;
    return 80;
}

function trainAttr(attr) {
    let capOvr = (p.fase === 1) ? 83 : DB[p.fase].maxOvr;
    if (p.ovr >= capOvr) return alert(`Límite OVR alcanzado en esta liga (${capOvr}).`);

    // Check build points
    let used = getBuildPointsUsed();
    if (used >= TOTAL_BUILD_POINTS) return alert(`Has gastado todos tus puntos de build (${TOTAL_BUILD_POINTS}). Para subir un atributo debes tener puntos libres.`);

    // Check attribute cap by position+height
    let caps = getAttrCaps();
    let capAttr = caps[attr] || 99;
    if ((p[attr]||65) >= capAttr) return alert(`Este atributo está al máximo para tu posición y altura (${capAttr}).`);

    let cost = getAttrCost(p[attr]||65);
    let cMod = p.personality === "deportista" ? Math.floor(cost * 0.8) : cost;
    if (p.money < cMod) return alert(`Fondos insuficientes. Necesitas ${cMod}€.`);

    p.money -= cMod;
    p[attr] = (p[attr]||65) + 1;
    p.ovr = Math.min(capOvr, calcOvr());

    const nombres = { fisico:'FÍSICO', tiro:'TIRO', def:'DEFENSA', manejo:'MANEJO', bandeja:'BANDEJA', mate:'MATE', 'tapón':'TAPÓN', robo:'ROBO' };
    let remaining = TOTAL_BUILD_POINTS - getBuildPointsUsed();
    escribirDialogo(`💪 ${nombres[attr]} → ${p[attr]}. OVR: ${p.ovr}. Puntos restantes: ${remaining}/${TOTAL_BUILD_POINTS}.`);
    evalRole(); updateUI(); renderMenu();
}

function renderMenu() {
    if (p.isMercado) { renderMercado(); return; }

    if (!p.teamData) { 
        p.teamData = leagueTable.find(t => t.name === p.team) || leagueTable[0]; 
    }
    if (!p.teamData) return;

    let numEquiposConf = leagueTable.filter(t => t.conf === p.teamData.conf).length;
    let partidosTemporada = (p.fase === 0) ? (numEquiposConf - 1) * 2 : (leagueTable.length - 1) * 2;
    let restantes = partidosTemporada - p.sMatches;
    
    let btnText = p.isCopa ? `▶ JUGAR COPA (${p.copaStage})` : (p.isPlayoffs ? `▶ JUGAR ${p.playoffStage}` : "▶ JUGAR PARTIDO");
    let btnBorder = p.isCopa ? 'border-color: #0ff; color: #0ff;' : (p.isPlayoffs ? 'border-color: gold; color: gold;' : '');
    
    let caps = getAttrCaps();
    let bpUsed = getBuildPointsUsed();
    let bpLeft = TOTAL_BUILD_POINTS - bpUsed;
    let bpColor = bpLeft <= 20 ? 'var(--danger)' : (bpLeft <= 80 ? 'gold' : 'var(--success)');

    let cFis = p.personality==="deportista" ? Math.floor(getAttrCost(p.fisico)*0.8)  : getAttrCost(p.fisico);
    let cTir = p.personality==="deportista" ? Math.floor(getAttrCost(p.tiro)*0.8)    : getAttrCost(p.tiro);
    let cDef = p.personality==="deportista" ? Math.floor(getAttrCost(p.def)*0.8)     : getAttrCost(p.def);
    let cMan = p.personality==="deportista" ? Math.floor(getAttrCost(p.manejo)*0.8)  : getAttrCost(p.manejo);
    let cBan = p.personality==="deportista" ? Math.floor(getAttrCost(p.bandeja)*0.8) : getAttrCost(p.bandeja);
    let cMat = p.personality==="deportista" ? Math.floor(getAttrCost(p.mate)*0.8)    : getAttrCost(p.mate);
    let cTap = p.personality==="deportista" ? Math.floor(getAttrCost(p['tapón'])*0.8): getAttrCost(p['tapón']);
    let cRob = p.personality==="deportista" ? Math.floor(getAttrCost(p.robo)*0.8)    : getAttrCost(p.robo);

    // Función helper para botón con cap
    const attrBtn = (fn, icon, label, val, cap, cost) => {
        let atMax = val >= cap || bpLeft <= 0;
        let col = val >= cap ? '#555' : 'inherit';
        let capTxt = val >= cap ? ' [MAX]' : `/${cap}`;
        return `<button onclick="trainAttr('${fn}')" class="btn-main" style="font-size:0.52em;padding:5px;text-transform:none;${atMax?'border-color:#333;color:#555;':''}">${icon} ${label} ${val}${capTxt} — ${cost}€</button>`;
    };

    let act = document.getElementById('actions');
    if(!act) return;
    act.style.display = 'flex';
    act.innerHTML = `
        <div style="color: #00ff00; font-size: 0.6em; margin-bottom: 5px; font-weight:bold; display:flex; justify-content:space-between;">
            <span>PARTIDOS RESTANTES: ${restantes > 0 ? restantes : 'Playoffs'}</span>
            <span>QUÍMICA: ${p.chem}%</span>
        </div>
        <button onclick="play()" class="btn-main" style="${btnBorder}">${btnText}</button>
        <div style="display:flex; gap:5px;">
            <button onclick="toggleEntrenar()" class="btn-main" style="flex:1;">💪 ENTRENAR</button>
            <button onclick="mostrarPremios()" class="btn-main" style="flex:1; border-color:#0ff; color:#0ff;">🏆 PREMIOS</button>
        </div>
        <div id="panel-entrenar" style="display:none; background:#111; border:1px solid #333; border-radius:4px; padding:6px; margin-top:2px;">
            <div style="color:${bpColor};font-size:0.55em;text-align:center;margin-bottom:5px;font-weight:bold;">🧬 PUNTOS BUILD: ${bpLeft}/${TOTAL_BUILD_POINTS}</div>
            <div style="display:grid; grid-template-columns:1fr 1fr; gap:4px;">
                ${attrBtn('fisico',  '🏃', 'FÍS', p.fisico,   caps.fisico,   cFis)}
                ${attrBtn('tiro',    '🎯', 'TIR', p.tiro,     caps.tiro,     cTir)}
                ${attrBtn('manejo',  '🏀', 'MAN', p.manejo,   caps.manejo,   cMan)}
                ${attrBtn('bandeja', '🤸', 'BAN', p.bandeja,  caps.bandeja,  cBan)}
                ${attrBtn('mate',    '💥', 'MAT', p.mate,     caps.mate,     cMat)}
                ${attrBtn('def',     '🛡️', 'DEF', p.def,      caps.def,      cDef)}
                ${attrBtn('tapón',   '✋', 'TAP', p['tapón'], caps['tapón'], cTap)}
                ${attrBtn('robo',    '⚡', 'ROB', p.robo,     caps.robo,     cRob)}
            </div>
        </div>
        <div style="display:flex; gap:5px;">
            <button onclick="renderAgencia()" class="btn-main" style="flex:1; border-color:#0ff; color:#0ff;">🏢 AGENCIA</button>
            <button onclick="renderVidaPrivada()" class="btn-main" style="flex:1; border-color: gold; color: gold;">💵 VIDA PRIVADA</button>
            <button onclick="pedirTraspaso()" class="btn-main btn-trade" style="flex:1;" ${p.isPlayoffs || p.isCopa ? 'disabled' : ''}>🔄 TRASPASO</button>
        </div>
        <button onclick="renderAnimaciones()" class="btn-main" style="border-color: #0ff; color: #0ff; margin-top:5px; margin-bottom:5px; width:100%;">🎬 ANIMACIONES</button>
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

function verCuadroPlayoffs() {
    let title = p.fase === 0 ? "CUADRO PLAYOFFS JUNIOR" : (p.fase === 1 ? "CUADRO PLAYOFFS ACB" : "CUADRO PLAYOFFS NBA");
    
    let html = `
    <div class="dialog-box log-entry" style="border-color:gold; padding:10px; background:#111;">
        <h3 style="color:gold; text-align:center; margin-bottom:10px; font-size:0.85em;">🏆 ${title} 🏆</h3>
        <div style="font-size:0.65em; text-align:center; color:#fff; margin-bottom:15px;">Fase Actual: <b style="color:var(--accent);">${p.playoffStage}</b></div>
        
        <div style="display:flex; justify-content:space-between; font-size:0.5em; text-align:center;">`;

    if (p.fase === 0 || p.fase === 1) {
        html += `
            <div style="flex:1; border-right:1px solid #333; padding-right:5px;">
                <b style="color:#0ff; display:block; margin-bottom:5px; font-size:1.2em;">TOP 8</b>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='CUARTOS' ? 'border-color:var(--accent); color:var(--accent);' : ''}">CUARTOS DE FINAL</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='SEMIFINAL' ? 'border-color:var(--accent); color:var(--accent);' : ''}">SEMIFINAL</div>
            </div>
            <div style="flex:1; display:flex; align-items:center; justify-content:center; flex-direction:column; padding:0 8px;">
                <div style="border:2px solid gold; padding:10px; background:#222; font-weight:bold; width:100%; border-radius:4px; font-size:1.1em; ${p.playoffStage==='GRAN FINAL' ? 'box-shadow:0 0 10px gold;' : ''}">GRAN FINAL</div>
            </div>`;
    } else {
        html += `
            <div style="flex:1.2; border-right:1px solid #333; padding-right:5px;">
                <b style="color:#0ff; display:block; margin-bottom:5px; font-size:1.2em;">OESTE</b>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='PRIMERA RONDA' ? 'border-color:var(--accent); color:var(--accent);' : ''}">1º vs 8º / 4º vs 5º</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='SEMIFINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">SEMIFINAL CONF</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='FINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">FINAL CONF</div>
            </div>
            <div style="flex:1; display:flex; align-items:center; justify-content:center; flex-direction:column; padding:0 8px;">
                <div style="border:2px solid gold; padding:10px; background:#222; font-weight:bold; width:100%; border-radius:4px; font-size:1.1em; ${p.playoffStage==='GRAN FINAL' ? 'box-shadow:0 0 10px gold;' : ''}">FINAL</div>
            </div>
            <div style="flex:1.2; border-left:1px solid #333; padding-left:5px;">
                <b style="color:#0ff; display:block; margin-bottom:5px; font-size:1.2em;">ESTE</b>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='PRIMERA RONDA' ? 'border-color:var(--accent); color:var(--accent);' : ''}">2º vs 7º / 3º vs 6º</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='SEMIFINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">SEMIFINAL CONF</div>
                <div style="border:1px solid #444; margin:8px 0; background:#222; padding:4px; border-radius:3px; ${p.playoffStage==='FINAL CONF' ? 'border-color:var(--accent); color:var(--accent);' : ''}">FINAL CONF</div>
            </div>`;
    }

    html += `
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
    
    let soyRookie = (p.fase === 0) || 
                    (p.fase === 1 && p.history.acb.matches === 0) || 
                    (p.fase === 2 && p.history.nba.matches === 0);
    
    let rookieList = getTop5(allPlayers.filter(x => {
        if (x.isMe) return soyRookie;
        if (p.fase === 0) return true;
        if (p.fase === 1) return x.ovr <= 78;
        return x.ovr <= 82;
    }), 'mvpScore');

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
    
    if (p.fase > 0 || rookieList.length > 0) {
        html += renderList("ROOKIE DEL AÑO", rookieList, 'mvp');
    }

    let ptsLeaders = getTop5(allPlayers, 'ppp');
    let rebLeaders = getTop5(allPlayers, 'rpp');
    let astLeaders = getTop5(allPlayers, 'app');
    let robLeaders = getTop5(allPlayers, 'ropp');
    let tapLeaders = getTop5(allPlayers, 'tapp');

    const renderLeader = (titulo, list, statKey, unit) => {
        let section = `<div style="margin-bottom:14px; font-size:0.75em;">
            <b style="color:#ff0; font-size:1.1em; border-bottom:1px solid #444; display:block; margin-bottom:5px;">📊 ${titulo}</b>`;
        list.forEach((x, i) => {
            let color = x.isMe ? "var(--success)" : (i === 0 ? "gold" : "#eee");
            section += `<div style="display:flex; justify-content:space-between; color:${color}; margin-bottom:2px;">
                <span>${i+1}. ${x.isMe ? '⭐ ' : ''}${x.name} <small style="color:#888;">(${x.team})</small></span>
                <span style="font-family:monospace;">${x[statKey].toFixed(1)} ${unit}</span>
            </div>`;
        });
        return section + `</div>`;
    };

    html += `<div style="margin-top:10px; border-top:1px solid #333; padding-top:10px;">
        <b style="color:#ff0; font-size:0.8em; display:block; margin-bottom:8px; text-align:center;">📊 LÍDERES ESTADÍSTICOS</b>`;
    html += renderLeader("ANOTACIÓN", ptsLeaders, 'ppp', 'p/p');
    html += renderLeader("REBOTES", rebLeaders, 'rpp', 'r/p');
    html += renderLeader("ASISTENCIAS", astLeaders, 'app', 'a/p');
    html += renderLeader("ROBOS", robLeaders, 'ropp', 'ro/p');
    html += renderLeader("TAPONES", tapLeaders, 'tapp', 'tapp');
    html += `</div>`;
    
    html += `</div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom();
}

function renderVidaPrivada() {
    let act = document.getElementById('actions');
    if(!act) return;
    let fel = p.felicidad || 50;
    let felColor = fel >= 70 ? 'var(--success)' : (fel <= 30 ? 'var(--danger)' : 'gold');
    let felMsg = fel >= 70 ? '😄 Feliz (+2 Qui/partido)' : (fel <= 30 ? '😢 Triste (-3 Qui/partido)' : '😐 Normal');
    act.innerHTML = `
        <div style="font-size:0.7em;color:gold;margin-bottom:6px;text-align:center;font-weight:bold;">--- VIDA PRIVADA ---</div>
        <div style="font-size:0.6em;color:${felColor};text-align:center;margin-bottom:8px;padding:4px;border:1px solid ${felColor};border-radius:4px;">😊 FELICIDAD: ${fel}/100 — ${felMsg}</div>
        
        <div style="display:flex; justify-content:space-around; background: #111; padding: 5px; border-radius: 5px; margin-bottom: 10px;">
            <span style="color:#aaa; font-size:0.65em;">🌟 Fama: <b style="color:#fff;">${p.fame}</b></span>
            <span style="color:#aaa; font-size:0.65em;">📱 Viralidad: <b style="color:#00ffcc;">${p.viralidad}</b></span>
        </div>

        <button onclick="renderAgencia()" class="btn-main" style="border-color: gold; color: gold; margin-bottom: 10px;">
            🏢 IR A LA AGENCIA DE PATROCINIOS
        </button>
        
        <button onclick="accionRedesSociales()" class="btn-main" style="border-color: #00ffcc; color: #00ffcc; margin-bottom: 10px;">
            📱 GESTIONAR REDES (-50€) | +2 Viralidad, +1 Fama
        </button>

        <div style="color:var(--accent);font-size:0.55em;margin-bottom:3px;letter-spacing:1px;">🍔 OCIO</div>
        <button onclick="ejecutarGasto('kebab')" class="btn-main" style="text-transform:none;font-size:0.7em;">🥙 KEBAB (15€) | -1 Vir, -2 Fel</button>
        <button onclick="ejecutarGasto('fiesta')" class="btn-main" style="text-transform:none;font-size:0.7em;">🍺 FIESTA (500€) | +3 Fam, -5 Qui, +8 Fel</button>
        <button onclick="ejecutarGasto('crio')" class="btn-main" style="text-transform:none;font-size:0.7em;">❄️ CRIOTERAPIA (1.5K€) | +5 Vir, +5 Fel</button>
        <button onclick="ejecutarGasto('vaca')" class="btn-main" style="text-transform:none;font-size:0.7em;">🏖️ VACACIONES (2K€) | +10 Vir, +20 Fel</button>
        
        <div style="color:var(--accent);font-size:0.55em;margin:6px 0 3px;letter-spacing:1px;">👨‍👩‍👧 FAMILIA & AMIGOS</div>
        <button onclick="ejecutarGasto('llamada')" class="btn-main" style="text-transform:none;font-size:0.7em;border-color:#ff9;color:#ff9;">📞 Llamar a casa (gratis) | +5 Fel</button>
        <button onclick="ejecutarGasto('amigos')" class="btn-main" style="text-transform:none;font-size:0.7em;border-color:#ff9;color:#ff9;">👬 Salir con amigos (200€) | +10 Fel, +8 Qui</button>
        <button onclick="ejecutarGasto('familia')" class="btn-main" style="text-transform:none;font-size:0.7em;border-color:#ff9;color:#ff9;">👨‍👩‍👧 Cena familiar (300€) | +15 Fel, +5 Qui</button>
        <button onclick="ejecutarGasto('psicologo')" class="btn-main" style="text-transform:none;font-size:0.7em;border-color:#ff9;color:#ff9;">🧠 Psicólogo (800€) | +20 Fel, +10 Qui</button>
        <button onclick="ejecutarGasto('viaje')" class="btn-main" style="text-transform:none;font-size:0.7em;border-color:#ff9;color:#ff9;">✈️ Viaje familia (3K€) | +25 Fel, +10 Qui</button>
        <button onclick="ejecutarGasto('donacion')" class="btn-main" style="text-transform:none;font-size:0.7em;border-color:#ff9;color:#ff9;">❤️ Donación (1K€) | +10 Fam, +15 Fel</button>
        
        <button onclick="renderAnimaciones()" class="btn-main" style="border-color:#0ff;color:#0ff;margin-top:5px;width:100%;">🎬 ANIMACIONES</button>
        <button onclick="renderMenu()" class="btn-main" style="border-color:#555;color:#ccc;margin-top:5px;">⬅ VOLVER</button>
    `;
}

function accionRedesSociales() {
    if (p.money < 50) {
        alert("Necesitas al menos 50€ para invertir en tus redes.");
        return;
    }
    p.money -= 50;
    p.viralidad += 2;
    p.fame += 1;
    escribirDialogo("📱 Has invertido 50€ en crear contenido. ¡+2 Viralidad, +1 Fama!");
    updateUI();
    renderVidaPrivada();
}

function ejecutarGasto(tipo) {
    let f = p.felicidad || 50;
    if (tipo === 'kebab' && p.money >= 15) { 
        p.money -= 15; p.viralidad = Math.max(0, p.viralidad-1); p.felicidad = Math.max(0, f-2);
        escribirDialogo("🥙 KEBAB: Comida basura en directo. -1 Viralidad, -2 Felicidad."); 
    } else if (tipo === 'fiesta' && p.money >= 500) { 
        p.money -= 500; p.fame += 3; p.chem -= 5; p.felicidad = Math.min(100, f+8);
        escribirDialogo("🍺 FIESTA: Noche VIP. +3 Fama, -5 Química, +8 Felicidad."); 
    } else if (tipo === 'crio' && p.money >= 1500) { 
        p.money -= 1500; p.viralidad += 5; p.felicidad = Math.min(100, f+5);
        escribirDialogo("❄️ CRIOTERAPIA: Recuperación extrema. +5 Viralidad, +5 Felicidad."); 
    } else if (tipo === 'vaca' && p.money >= 2000) { 
        p.money -= 2000; p.viralidad += 10; p.felicidad = Math.min(100, f+20);
        escribirDialogo("🏖️ VACACIONES: Desconexión total. +10 Viralidad, +20 Felicidad."); 
    } else if (tipo === 'llamada') { 
        p.felicidad = Math.min(100, f+5);
        escribirDialogo("📞 LLAMADA A CASA: Escuchar la voz de tu familia lo cambia todo. +5 Felicidad."); 
    } else if (tipo === 'amigos' && p.money >= 200) { 
        p.money -= 200; p.chem = Math.min(100, p.chem+8); p.felicidad = Math.min(100, f+10);
        escribirDialogo("👬 AMIGOS: Una noche con los de siempre. +8 Química, +10 Felicidad."); 
    } else if (tipo === 'familia' && p.money >= 300) { 
        p.money -= 300; p.chem = Math.min(100, p.chem+5); p.felicidad = Math.min(100, f+15);
        escribirDialogo("👨‍👩‍👧 CENA FAMILIAR: Nada como la familia. +5 Química, +15 Felicidad."); 
    } else if (tipo === 'psicologo' && p.money >= 800) { 
        p.money -= 800; p.chem = Math.min(100, p.chem+10); p.felicidad = Math.min(100, f+20);
        escribirDialogo("🧠 PSICÓLOGO: Gestión emocional de alto rendimiento. +10 Química, +20 Felicidad."); 
    } else if (tipo === 'viaje' && p.money >= 3000) { 
        p.money -= 3000; p.chem = Math.min(100, p.chem+10); p.felicidad = Math.min(100, f+25);
        escribirDialogo("✈️ VIAJE FAMILIAR: Una semana mágica. +10 Química, +25 Felicidad."); 
    } else if (tipo === 'donacion' && p.money >= 1000) { 
        p.money -= 1000; p.fame = Math.min(FAME_MAX, p.fame+10); p.felicidad = Math.min(100, f+15);
        escribirDialogo("❤️ DONACIÓN: Dar sin esperar nada. +10 Fama, +15 Felicidad."); 
    } else if (tipo === 'entrenador' && p.money >= 5000) { 
        p.money -= 5000; p.chem = Math.min(100, p.chem+15); p.felicidad = Math.min(100, f+5);
        escribirDialogo("🧠 COACH MENTAL: +15 Química, +5 Felicidad."); 
    } else { 
        alert("No tienes suficiente dinero."); return;
    }
    
    p.felicidad = Math.max(0, Math.min(100, p.felicidad||50));
    if (p.chem > 100) p.chem = 100;
    if (p.chem < 0) p.chem = 0;
    if (p.fame > FAME_MAX) p.fame = FAME_MAX;
    updateUI(); 
    renderVidaPrivada();
}

// Patrocinios gestionados por sponsors.js — ver renderAgencia(), checkObjetivoSponsor(), procesarContratosFinTemporada(), getSponsorBonus()

function renderAnimaciones() {
    let act = document.getElementById('actions');
    if(!act) return;
    
    let html = `
        <div style="font-size: 0.7em; color: #0ff; margin-bottom: 10px; text-align:center; font-weight:bold;">--- 🎬 ANIMACIONES Y ESTILO ---</div>
        <div style="font-size: 0.55em; color: #ccc; margin-bottom: 10px; text-align:center;">Mejora tus movimientos para obtener % de ventaja real en la cancha.</div>
    `;
    
    Object.keys(DB_ANIMACIONES).forEach(cat => {
        html += `<div style="margin-bottom: 10px; border: 1px solid #333; padding: 6px; border-radius: 4px; background: rgba(0,0,0,0.4);">`;
        html += `<div style="color: var(--accent); font-size: 0.65em; text-transform: uppercase; margin-bottom: 8px; font-weight: bold; border-bottom: 1px solid #444; padding-bottom: 3px;">🏀 ${cat}</div>`;
        
        DB_ANIMACIONES[cat].forEach(anim => {
            let isOwned = p.animCompradas.includes(anim.id);
            let isEquipped = p.animEquipadas[cat] === anim.id;
            
            let btnText = isEquipped ? "✅ EQUIPADO" : (isOwned ? "🔄 EQUIPAR" : `🛒 ${anim.precio}€`);
            let btnStyle = isEquipped ? "border-color: var(--success); color: var(--success);" : (isOwned ? "border-color: #0ff; color: #0ff;" : "border-color: #888; color: #ccc;");
            
            html += `
            <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom: 6px; font-size: 0.6em; background: #111; padding: 5px; border-radius: 3px;">
                <div style="flex:1; padding-right: 10px;">
                    <b style="color:#fff; font-size:1.1em;">${anim.nombre}</b> <br>
                    <span style="color:#aaa;">${anim.desc}</span>
                </div>
                <button onclick="comprarOEquiparAnim('${cat}', '${anim.id}', ${anim.precio})" class="btn-main" style="width: auto; padding: 6px 10px; font-size: 0.85em; text-transform:none; margin:0; ${btnStyle}" ${isEquipped ? 'disabled' : ''}>
                    ${btnText}
                </button>
            </div>`;
        });
        html += `</div>`;
    });
    
    html += `<button onclick="renderMenu()" class="btn-main" style="border-color: #555; color: #ccc; margin-top:5px;">⬅ VOLVER</button>`;
    act.innerHTML = html;
}

function comprarOEquiparAnim(cat, id, precio) {
    let animInfo = DB_ANIMACIONES[cat].find(a => a.id === id);
    
    if (p.animCompradas.includes(id)) {
        p.animEquipadas[cat] = id;
        escribirDialogo(`🎬 Has equipado tu animación de ${cat}: <b>${animInfo.nombre}</b>.`);
    } else {
        if (p.money >= precio) {
            p.money -= precio;
            p.animCompradas.push(id);
            p.animEquipadas[cat] = id; 
            escribirDialogo(`🛒 Compra exitosa. Has equipado <b>${animInfo.nombre}</b>. Ahora tienes una ventaja en tus partidos.`);
            updateUI();
        } else {
            alert(`Fondos insuficientes. Cuesta ${precio}€ y tienes ${p.money}€.`);
            return;
        }
    }
    guardarPartida();
    renderAnimaciones();
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
    
    if (p.fase === 2) {
        match.finalBaseMyScore -= 1.5;
        match.finalBaseRivScore += 1.5;
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
    match.usedContexts = { ataque: [], defensa: [] };

    match.ritmo = ["LENTO", "NORMAL", "RÁPIDO"][Math.floor(Math.random()*3)];

    let sb = document.getElementById('live-scoreboard');
    if(sb) {
        sb.style.display = 'flex';
        sb.style.position = 'sticky';
        sb.style.top = '0';
        sb.style.zIndex = '50';
        sb.style.borderBottom = '2px solid var(--accent)';
        sb.style.marginBottom = '8px';
    }
    
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

    let baseProb = (accion==='m') ? p.mate :
                   (accion==='b') ? p.bandeja :
                   (accion==='t') ? p.tiro :
                   (accion==='a') ? p.manejo :
                   (accion==='ro') ? p.robo :
                   (accion==='ta') ? p['tapón'] : Math.max(p.fisico, p.def)+10;
                   
    let proNerf = p.fase === 1 ? 12 : (p.fase === 2 ? 14 : 0); 
    
    let chemMod = 0;
    if (p.chem < 40) chemMod = -5;
    if (p.chem > 80) chemMod = 5;

    let fatiga = Math.floor(match.j * 1.0); 

    let bonusAnimacion = getAnimBonus(accion);
    let finalProb = baseProb + mod - proNerf - (GLOBAL_DIFF * 10) + chemMod - fatiga + bonusAnimacion;
    
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

function getMsgRes(tipo, result) {
    if (typeof COMENTARIOS_RESULTADOS !== 'undefined' && COMENTARIOS_RESULTADOS[tipo] && COMENTARIOS_RESULTADOS[tipo][result]) {
        let arr = COMENTARIOS_RESULTADOS[tipo][result];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    return result === 'ok' ? "¡Buena jugada!" : "Falla la acción.";
}

function getMsgFalta(tipo) {
    let key = 'falta_' + tipo;
    if (typeof COMENTARIOS_RESULTADOS !== 'undefined' && COMENTARIOS_RESULTADOS[key]) {
        let arr = COMENTARIOS_RESULTADOS[key];
        return arr[Math.floor(Math.random() * arr.length)];
    }
    return "¡Falta personal! Va a la línea de tiros libres.";
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
    
    let diferenciaPuntos = Math.abs(match.myScore - match.rivScore);
    let esUltimaJugada = (match.j === match.numPlays - 1);
    let esClutch = esUltimaJugada && diferenciaPuntos <= 3 && tipo === "ATAQUE";

    let html = `
    <div class="dialog-box log-entry">
        <span style="font-size:0.7em; color:var(--accent); font-weight:bold;">SITUACIÓN: ${tipo} ${esClutch ? '🔥 MOMENTO CLUTCH 🔥' : ''}</span>
        <div class="action-btns" id="btns-${match.j}" style="display: grid; grid-template-columns: 1fr 1fr; gap: 5px; margin-top:10px;">`;
    
    if (esClutch) {
        let comentarioRandom = typeof COMENTARIOS_DECISIVOS !== 'undefined' ? COMENTARIOS_DECISIVOS[Math.floor(Math.random() * COMENTARIOS_DECISIVOS.length)] : "¡Tensión en la cancha!";
        html += `
            <div style="grid-column: span 2; font-size: 0.75em; font-style: italic; color: #fff; background: linear-gradient(90deg, rgba(255,215,0,0.2) 0%, rgba(255,140,0,0.5) 50%, rgba(255,215,0,0.2) 100%); border: 1px solid gold; border-radius: 5px; padding: 10px; text-align: center; margin-bottom: 12px; text-shadow: 0 0 5px gold; box-shadow: 0 0 10px rgba(255,215,0,0.5);">
                ${comentarioRandom}
            </div>
            <button onclick="res('clutch_tl', ${match.j})" style="grid-column: span 2; border-color: gold; color: gold; box-shadow: 0 0 5px gold;">🎯 TIRAR TIROS LIBRES DECISIVOS [${Math.min(90, p.tiro + 5)}%]</button>
            <button onclick="res('t', ${match.j})" style="grid-column: span 2;">TRIPLE HEROICO [${getProbabilidad('t')}%]</button>
        `;
    } else {
        let contexto = (typeof getContextoJugada === 'function')
            ? getContextoJugada(tipo, p, match)
            : (typeof COMENTARIOS_NORMALES !== 'undefined' ? COMENTARIOS_NORMALES[Math.floor(Math.random() * COMENTARIOS_NORMALES.length)] : "");
        if (contexto) {
            html += `
            <div style="grid-column: span 2; font-size: 0.65em; font-style: italic; color: #0ff; background: rgba(0, 255, 255, 0.07); border-left: 3px solid #0ff; padding: 10px 12px; margin-bottom: 12px; text-shadow: 0 0 3px #0ff; line-height: 1.5;">
                ${contexto}
            </div>`;
        }
        
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
    }
    html += `</div><div id="res-${match.j}" style="margin-top: 15px; font-size: 0.75em; text-align:center;"></div></div>`;
    
    let gl = document.getElementById('game-log');
    if(gl) gl.insertAdjacentHTML('beforeend', html); 
    scrollToBottom();
}

function tirarTirosLibres(numTiros, id, callback) {
    let ptsLogrados = 0;
    let probTiroLibre = Math.max(30, Math.min(95, p.tiro + 10)); 
    let mensaje = "Tiros libres: ";

    for(let i = 0; i < numTiros; i++) {
        p.stats.tcAttempt++; 
        if (Math.random() * 100 < probTiroLibre) {
            ptsLogrados++;
            p.stats.tcMake++;
            mensaje += "🟢 ";
        } else {
            mensaje += "🔴 ";
        }
    }
    
    match.ok += ptsLogrados;
    match.myScore += ptsLogrados;
    match.pts += ptsLogrados;
    p.stats.pts += ptsLogrados;

    updateScoreboard();
    
    let colorFinal = ptsLogrados > 0 ? 'var(--success)' : 'var(--danger)';
    let colorFondo = ptsLogrados > 0 ? '0,255,0' : '255,0,0';

    let rd = document.getElementById(`res-${id}`);
    if(rd) rd.innerHTML = `<div style="background: rgba(${colorFondo}, 0.1); border: 1px solid ${colorFinal}; padding: 8px; border-radius: 4px;"><b style="color:${colorFinal}; text-shadow: 0 0 5px ${colorFinal};">🎙️: "${mensaje} (+${ptsLogrados} PTS)"</b></div>`;
    
    setTimeout(callback, 1500);
}

function res(tipo, id) {
    document.querySelectorAll(`#btns-${id} button`).forEach(b => b.disabled = true);
    
    if (tipo === 'clutch_tl') {
        return tirarTirosLibres(2, id, () => { match.j++; scrollToBottom(); next(); });
    }

    let ok = (Math.random() * 100 < getProbabilidad(tipo)); 
    let msg = ""; 
    let pts = 0;
    let faltaForzada = false;
    
    if(['m','t','b'].includes(tipo)) p.stats.tcAttempt++;
    if(tipo==='t') p.stats.t3Attempt++;

    if(tipo === 'm') { 
        if(ok){ pts=2; match.tc++; p.stats.tcMake++; msg=getMsgRes('m', 'ok'); } 
        else if (Math.random() < 0.25) { faltaForzada = true; msg=getMsgFalta('m'); }
        else { msg=getMsgRes('m', 'fail'); } 
    }
    else if(tipo === 'b') { 
        if(ok){ pts=2; match.tc++; p.stats.tcMake++; msg=getMsgRes('b', 'ok'); } 
        else if (Math.random() < 0.20) { faltaForzada = true; msg=getMsgFalta('b'); }
        else { msg=getMsgRes('b', 'fail'); } 
    }
    else if(tipo === 't') { 
        if(ok){ pts=3; match.tc++; p.stats.tcMake++; p.stats.t3Make++; msg=getMsgRes('t', 'ok'); } 
        else if (Math.random() < 0.10) { faltaForzada = true; msg=getMsgFalta('t'); }
        else { msg=getMsgRes('t', 'fail'); } 
    }
    else if(tipo === 'a') { 
        if(ok){ pts=2; match.ast++; msg=getMsgRes('a', 'ok'); } 
        else { msg=getMsgRes('a', 'fail'); } 
    }
    else if(tipo === 'ro') { 
        if(ok){ match.rob++; match.rivScore -= 2; msg=getMsgRes('ro', 'ok'); } 
        else { msg=getMsgRes('ro', 'fail'); } 
    }
    else if(tipo === 'ta') { 
        if(ok){ match.tap++; match.rivScore -= 2; msg=getMsgRes('ta', 'ok'); } 
        else { msg=getMsgRes('ta', 'fail'); } 
    }
    else if(tipo === 're') { 
        if(ok){ match.reb++; match.rivScore -= 2; msg=getMsgRes('re', 'ok'); } 
        else { msg=getMsgRes('re', 'fail'); } 
    }

    if (faltaForzada) {
        let rd = document.getElementById(`res-${id}`);
        if(rd) rd.innerHTML = `<div style="background: rgba(255,215,0,0.1); border: 1px solid gold; padding: 8px; border-radius: 4px;"><b style="color:gold; text-shadow: 0 0 5px gold;">🎙️: "${msg}"</b></div>`;
        let numTiros = tipo === 't' ? 3 : 2;
        setTimeout(() => tirarTirosLibres(numTiros, id, () => { match.j++; scrollToBottom(); next(); }), 1500);
        return;
    }

    if(ok) { 
        match.ok++; 
        match.myScore += (['m','b','t','a'].includes(tipo)) ? pts : 0; 
        match.pts += (['m','b','t'].includes(tipo)) ? pts : 0;
        match.pts = Math.floor(match.pts); 
        
        let cat = tipo === 't' ? 'tiro' : (tipo === 'b' ? 'bandeja' : (tipo === 'm' ? 'mate' : (tipo === 'a' ? 'manejo' : null)));
        if (cat) {
            let animId = p.animEquipadas[cat];
            let animObj = DB_ANIMACIONES[cat].find(a => a.id === animId);
            if (animObj && animObj.famaBono) {
                p.fame = Math.min(FAME_MAX, p.fame + animObj.famaBono);
            }
        }
    } else { 
        match.rivScore += 2; 
    }

    updateScoreboard(); 
    
    let colorFinal = ok ? 'var(--success)' : 'var(--danger)';
    let colorFondo = ok ? '0,255,0' : '255,0,0';
    
    let rd = document.getElementById(`res-${id}`);
    if(rd) rd.innerHTML = `<div style="background: rgba(${colorFondo}, 0.1); border: 1px solid ${colorFinal}; padding: 8px; border-radius: 4px;"><b style="color:${colorFinal}; text-shadow: 0 0 5px ${colorFinal};">🎙️: "${msg}"</b></div>`;
    
    match.j++; 
    scrollToBottom(); 
    setTimeout(next, 1500);
}

function distributeStats(roster, totalPts) {
    if(!roster || roster.length === 0) return;
    
    roster.forEach((jug, idx) => {
        let isBench = (idx >= 5 || jug.p === "6M" || jug.p === "BAN");
        let mult = isBench ? 0.5 : 1.0;

        let pts, ast, reb, rob, tap;
        
        if (jug.o >= 80 && jug.o <= 88) {
            let t = (jug.o - 80) / 8;
            pts = Math.round(Math.max(15, Math.min(28, (18 + t * 7) + (Math.random()*10 - 5))));
        } else if (jug.o >= 89) {
            let t = Math.min(1, (jug.o - 89) / 10);
            pts = Math.round(Math.max(20, Math.min(45, (25 + t * 13) + (Math.random()*15 - 5))));
        } else {
            pts = Math.round(3 + (jug.o / 12) + Math.random() * 6); 
        }

        if (jug.o < 75) {
            reb = 1 + Math.random() * 2; 
            ast = 0 + Math.random() * 2; 
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

function finish() {
    let sb = document.getElementById('live-scoreboard');
    if(sb) sb.style.display = 'none';
    
    let roleMult = p.role === "Estrella" ? 1.2 : (p.role === "Titular" ? 1.0 : 0.6); 
    
    let gamePts, minAst, maxAst, minReb, maxRob, minTap, maxTap;

    if (p.ovr >= 80 && p.ovr <= 88) {
        let t = (p.ovr - 80) / 8; 
        gamePts = Math.round(Math.max(15, Math.min(28, (18 + t * 7) + (Math.random() * 10 - 5))));
    } else if (p.ovr >= 89) {
        let t = (p.ovr - 89) / 10; 
        gamePts = Math.round(Math.max(20, Math.min(45, (25 + t * 13) + (Math.random() * 15 - 5))));
    } else {
        gamePts = Math.round(match.pts + Math.floor((Math.random() * 4 + (p.ovr / 10)) * roleMult));
    }

    if (p.ovr < 75) {
        minAst = 2; maxAst = 5; 
        minReb = 3; maxReb = 6; 
        minRob = 0; maxRob = 1; 
        minTap = 0; maxTap = 1;
    } else if (p.ovr < 85) {
        minAst = 4; maxAst = 8; 
        minReb = 5; maxReb = 9; 
        minRob = 0; maxRob = 2; 
        minTap = 0; maxTap = 2;
    } else if (p.ovr < 92) {
        minAst = 6; maxAst = 11; 
        minReb = 7; maxReb = 12; 
        minRob = 1; maxRob = 3; 
        minTap = 1; maxTap = 3;
    } else {
        minAst = 8; maxAst = 15; 
        minReb = 9; maxReb = 15; 
        minRob = 1; maxRob = 4; 
        minTap = 1; maxTap = 4;
    }

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
        
        // Simulación realista del resto de equipos según OVR
        let avgOvr = p.fase === 0 ? 70 : (p.fase === 1 ? 80 : 90); 
        leagueTable.forEach(r => { 
            if(!r.isPlayer && r.name !== match.rival.name) { 
                let simScore = Math.floor(70 + Math.random()*25); 
                r.pts += simScore; 
                
                let winChance = 0.50 + ((r.ovr - avgOvr) * 0.05);
                winChance = Math.max(0.10, Math.min(0.90, winChance));
                
                if(Math.random() < winChance) r.v++; 
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
    
    if (gamePts >= 20) {
        p.stats.streak15++; 
    } else {
        p.stats.streak15 = 0;
    }
    
    if (p.stats.streak15 >= 3) { 
        fameChange += 1; 
        p.stats.streak15 = 0; 
        escribirDialogo("🔥 ESTÁS ON FIRE: Bono +1 Fama por racha (+20pts en 3 partidos)."); 
    }

    if (win) { 
        p.chem += 2; 
        p.stats.lossStreak = 0; 
        fameChange += 0.25;
        if (match.rival.ovr > getMyTeamOvr()) fameChange += 0.5; 
    } else { 
        fameChange -= 1.5; 
        p.chem -= 1; 
        p.stats.lossStreak++; 
    }

    if (p.stats.gamesSinceBig >= 6) { 
        fameChange -= 2; 
        p.stats.gamesSinceBig = 0; 
        escribirDialogo("📉 El público te está olvidando (6 partidos sin anotar 20 pts). -2 Fama."); 
    }

    let fameBefore = Math.floor(p.fame);

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

    let fameAfter = Math.floor(p.fame);
    let fameDiff = fameAfter - fameBefore;
    let fameDiffStr = fameDiff > 0 ? `+${fameDiff}` : `${fameDiff}`;

    // Patrocinios (sponsors.js)
    let sueldo = p.role === "Estrella" ? 450 : p.role === "Titular" ? 250 : 200;
    let extraSponsor = typeof getSponsorBonus === 'function' ? getSponsorBonus(win) : 0;
    if (typeof checkObjetivoSponsor === 'function') checkObjetivoSponsor(Math.floor(gamePts), Math.floor(gameAst), Math.floor(gameReb), Math.floor(gameRob), Math.floor(gameTap), win);
    
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

    if (win) p.felicidad = Math.min(100, (p.felicidad||50) + 2);
    else     p.felicidad = Math.max(0,   (p.felicidad||50) - 3);
    if (gamePts >= 20) p.felicidad = Math.min(100, p.felicidad + 1);
    if (p.felicidad >= 70) p.chem = Math.min(100, p.chem + 2);
    if (p.felicidad <= 30) p.chem = Math.max(0,   p.chem - 3);

    let endHtml = `
    <div class="dialog-box log-entry" style="text-align:center; border-color:${win ? 'var(--success)' : 'var(--danger)'}">
        <p style="font-size:1.2em; margin-bottom:10px;">${match.myScore} - ${match.rivScore}</p>
        <p style="font-size:0.7em; color:${win ? 'var(--success)' : 'var(--danger)'}; font-weight:bold;">${endMsg}</p>
        <p style="font-size:0.55em; color:#aaa; margin-top:10px;">
            Tus stats hoy: ${Math.floor(gamePts)} PTS | ${Math.floor(gameAst)} AST | ${Math.floor(gameReb)} REB | ${Math.floor(gameRob)} ROB | ${Math.floor(gameTap)} TAP
        </p>
        <p style="font-size:0.55em; color:gold; margin-top:5px;">Fama: ${fameAfter} (${fameDiffStr}) | Química: ${p.chem}% | 😊 Felicidad: ${p.felicidad}</p>
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
        p.copaPlayedThisSeason = true;
        let clasificadosCopa = [];
        
        if (p.fase === 0) {
            for(let i=1; i<=4; i++) {
                let confT = leagueTable.filter(t => t.conf === i).sort((a,b) => b.v - a.v);
                if(confT[0]) clasificadosCopa.push(confT[0]);
                if(confT[1]) clasificadosCopa.push(confT[1]);
            }
            clasificadosCopa.sort((a,b) => b.v - a.v);
        } else {
            clasificadosCopa = [...leagueTable].sort((a,b) => b.v - a.v).slice(0, 8);
        }
        
        let miPos = clasificadosCopa.findIndex(t => t.name === p.team) + 1;
        
        if (miPos > 0 && miPos <= 8) {
            p.isCopa = true;
            p.copaStage = "CUARTOS";
            p.copaRival = clasificadosCopa[8 - miPos]; 
            if(!p.copaRival || p.copaRival.name === p.team) {
                p.copaRival = clasificadosCopa.find(t => t.name !== p.team); 
            }
            escribirDialogo(`🏆 ¡CLASIFICADOS PARA LA COPA! Entramos como ${miPos}º a mitad de temporada y jugaremos contra ${p.copaRival.name}.`);
            setTimeout(renderMenu, 5000);
            return;
        } else {
            escribirDialogo(`❌ No nos hemos clasificado para la Copa (Top 2 de cada conf. en Junior). Toca verla por la tele.`);
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

    if (p.isPlayoffs) {
        let simularSerie = (tA, tB) => {
            if(!tA) return tB; if(!tB) return tA;
            return Math.random() < (tA.v >= tB.v ? 0.70 : 0.30) ? tA : tB;
        };

        if (p.fase === 0 || p.fase === 1) { 
            if (p.playoffStage === "CUARTOS") {
                if (win) {
                    p.playoffStage = "SEMIFINAL";
                    let b = p.playoffBracket || {};
                    
                    b.win1v8 = (b.seedMiPos === 1 || b.seedMiPos === 8) ? p.teamData : simularSerie(b.s1, b.s8);
                    b.win4v5 = (b.seedMiPos === 4 || b.seedMiPos === 5) ? p.teamData : simularSerie(b.s4, b.s5);
                    b.win3v6 = (b.seedMiPos === 3 || b.seedMiPos === 6) ? p.teamData : simularSerie(b.s3, b.s6);
                    b.win2v7 = (b.seedMiPos === 2 || b.seedMiPos === 7) ? p.teamData : simularSerie(b.s2, b.s7);

                    let sp = b.seedMiPos;
                    if (sp === 1 || sp === 8) p.playoffRival = b.win4v5;
                    else if (sp === 4 || sp === 5) p.playoffRival = b.win1v8;
                    else if (sp === 2 || sp === 7) p.playoffRival = b.win3v6;
                    else if (sp === 3 || sp === 6) p.playoffRival = b.win2v7;

                    if (!p.playoffRival || p.playoffRival.name === p.team) {
                        p.playoffRival = leagueTable.filter(t => t.name !== p.team && t.v > 0).sort((a,b)=>b.v-a.v)[0];
                    }
                    p.playoffBracket = b;
                    escribirDialogo(`🏆 ¡Pasamos a Semis contra ${p.playoffRival.name}!`);
                    setTimeout(renderMenu, 4000);
                } else {
                    escribirDialogo(`❌ Eliminados en Cuartos de Final.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.playoffStage === "SEMIFINAL") {
                if (win) { 
                    p.playoffStage = "GRAN FINAL"; 
                    let b = p.playoffBracket || {};
                    
                    let finalistaArriba = (b.seedMiPos === 1 || b.seedMiPos === 8 || b.seedMiPos === 4 || b.seedMiPos === 5) ? p.teamData : simularSerie(b.win1v8, b.win4v5);
                    let finalistaAbajo = (b.seedMiPos === 2 || b.seedMiPos === 7 || b.seedMiPos === 3 || b.seedMiPos === 6) ? p.teamData : simularSerie(b.win2v7, b.win3v6);

                    if (b.seedMiPos === 1 || b.seedMiPos === 8 || b.seedMiPos === 4 || b.seedMiPos === 5) {
                        p.playoffRival = finalistaAbajo;
                    } else {
                        p.playoffRival = finalistaArriba;
                    }

                    if(!p.playoffRival || p.playoffRival.name === p.team) {
                        p.playoffRival = leagueTable.find(t=>t.name !== p.team && !t.isPlayer);
                    }

                    escribirDialogo(`🏆 ¡A LA GRAN FINAL contra ${p.playoffRival.name}!`); 
                    setTimeout(renderMenu, 4000); 
                } else { 
                    escribirDialogo(`❌ Eliminados en Semis.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.playoffStage === "GRAN FINAL") {
                if(win) { 
                    if(p.fase === 0) {
                        p.ligasJunior++; 
                        escribirDialogo(`🥇 ¡CAMPEONES JUNIOR! (Total: ${p.ligasJunior})`); 
                    } else {
                        p.ligasACB++; 
                        escribirDialogo(`🥇 ¡CAMPEONES ABSOLUTOS DE ACB! Haces historia. (Ligas ACB: ${p.ligasACB})`); 
                    }
                } else {
                    escribirDialogo(`🥈 Perdemos la final...`);
                }
                setTimeout(draft, 4000);
            }
        } else if (p.fase === 2) { 
            if (p.playoffStage === "PRIMERA RONDA") {
                if (win) { 
                    p.playoffStage = "SEMIFINAL CONF"; 
                    let b = p.playoffBracket || {};
                    
                    b.win1v8 = (b.seedMiPos === 1 || b.seedMiPos === 8) ? p.teamData : simularSerie(b.s1, b.s8);
                    b.win4v5 = (b.seedMiPos === 4 || b.seedMiPos === 5) ? p.teamData : simularSerie(b.s4, b.s5);
                    b.win3v6 = (b.seedMiPos === 3 || b.seedMiPos === 6) ? p.teamData : simularSerie(b.s3, b.s6);
                    b.win2v7 = (b.seedMiPos === 2 || b.seedMiPos === 7) ? p.teamData : simularSerie(b.s2, b.s7);

                    if (b.seedMiPos === 1 || b.seedMiPos === 8) p.playoffRival = b.win4v5;
                    else if (b.seedMiPos === 4 || b.seedMiPos === 5) p.playoffRival = b.win1v8;
                    else if (b.seedMiPos === 2 || b.seedMiPos === 7) p.playoffRival = b.win3v6;
                    else if (b.seedMiPos === 3 || b.seedMiPos === 6) p.playoffRival = b.win2v7;

                    if (!p.playoffRival || p.playoffRival.name === p.team) {
                        let confTeams = leagueTable.filter(t => t.conf === p.teamData.conf && t.name !== p.team);
                        p.playoffRival = confTeams[Math.floor(Math.random() * confTeams.length)];
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

                    let finalistaArriba = (b.seedMiPos === 1 || b.seedMiPos === 8 || b.seedMiPos === 4 || b.seedMiPos === 5) ? p.teamData : simularSerie(b.win1v8, b.win4v5);
                    let finalistaAbajo = (b.seedMiPos === 2 || b.seedMiPos === 7 || b.seedMiPos === 3 || b.seedMiPos === 6) ? p.teamData : simularSerie(b.win2v7, b.win3v6);

                    if (b.seedMiPos === 1 || b.seedMiPos === 8 || b.seedMiPos === 4 || b.seedMiPos === 5) {
                        p.playoffRival = finalistaAbajo;
                    } else {
                        p.playoffRival = finalistaArriba;
                    }

                    if (!p.playoffRival || p.playoffRival.name === p.team) {
                        let confTeams = leagueTable.filter(t => t.conf === p.teamData.conf && t.name !== p.team);
                        p.playoffRival = confTeams[Math.floor(Math.random() * confTeams.length)];
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
                    let b = p.playoffBracket || {};
                    
                    let ow18 = simularSerie(b.o1, b.o8);
                    let ow45 = simularSerie(b.o4, b.o5);
                    let ow36 = simularSerie(b.o3, b.o6);
                    let ow27 = simularSerie(b.o2, b.o7);
                    
                    let oSemiArriba = simularSerie(ow18, ow45);
                    let oSemiAbajo = simularSerie(ow27, ow36);
                    
                    p.playoffRival = simularSerie(oSemiArriba, oSemiAbajo); 

                    if (!p.playoffRival || p.playoffRival.name === p.team) {
                        let otraConfTeams = leagueTable.filter(t => t.conf !== p.teamData.conf);
                        p.playoffRival = otraConfTeams[Math.floor(Math.random() * otraConfTeams.length)];
                    }

                    escribirDialogo(`🏆 ¡SOMOS CAMPEONES DE CONFERENCIA! A LA GRAN FINAL CONTRA ${p.playoffRival.name}!`); 
                    setTimeout(renderMenu, 4000); 
                } else { 
                    escribirDialogo(`❌ Caemos en la Final de Conferencia.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.playoffStage === "GRAN FINAL") {
                if(win) {
                    p.rings++; 
                    p.fame = Math.min(FAME_MAX, p.fame + 10); 
                    escribirDialogo(`💍 ¡HAS GANADO UN ANILLO DE LA NBA! (Total: ${p.rings})`); 
                } else {
                    escribirDialogo(`🥈 Subcampeones... nos quedamos a las puertas de la gloria.`);
                }
                setTimeout(draft, 4000);
            }
        }
    } else {
        if(p.sMatches >= partidosTemporada) {
            if (p.fase === 0 || p.fase === 1) {
                let clasificadosPlayoff = [];
                if (p.fase === 0) {
                    for(let i=1; i<=4; i++) {
                        let confT = leagueTable.filter(t => t.conf === i).sort((a,b) => b.v - a.v);
                        if(confT[0]) clasificadosPlayoff.push(confT[0]);
                        if(confT[1]) clasificadosPlayoff.push(confT[1]);
                    }
                    clasificadosPlayoff.sort((a,b) => b.v - a.v);
                } else {
                    clasificadosPlayoff = [...leagueTable].sort((a,b) => b.v - a.v).slice(0, 8);
                }
                
                let miPos = clasificadosPlayoff.findIndex(t => t.name === p.team) + 1;
                
                if(miPos > 0 && miPos <= 8) {
                    p.isPlayoffs = true; 
                    p.playoffStage = "CUARTOS";
                    
                    // CORRECCIÓN: Asegurar semillas exactas
                    let s = {};
                    for(let i=1; i<=8; i++) s[`s${i}`] = clasificadosPlayoff[i-1];
                    
                    p.playoffRival = s[`s${9 - miPos}`];

                    p.playoffBracket = {
                        seedMiPos: miPos,
                        s1: s.s1, s8: s.s8,
                        s4: s.s4, s5: s.s5,
                        s3: s.s3, s6: s.s6,
                        s2: s.s2, s7: s.s7
                    };
                    
                    escribirDialogo(`🌟 ¡CLASIFICADOS A PLAYOFFS! Entramos como ${miPos}º del ranking.`);
                    setTimeout(renderMenu, 5000);
                } else { 
                    escribirDialogo(`No logramos clasificar a Playoffs. Temporada terminada.`); 
                    setTimeout(draft, 4000); 
                }
            } else if (p.fase === 2) { 
                let miConfTeams = leagueTable.filter(t => t.conf === p.teamData.conf).sort((a,b) => b.v - a.v);
                let miPos = miConfTeams.findIndex(t => t.name === p.team) + 1;
                let otraConfTeams = leagueTable.filter(t => t.conf !== p.teamData.conf).sort((a,b) => b.v - a.v);
                
                let qualifies = false;
                let finalSeed = miPos;

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
                
                if (qualifies) {
                    p.isPlayoffs = true;
                    p.playoffStage = "PRIMERA RONDA";
                    
                    // CORRECCIÓN: Reconstruir 8 clasificados limpios y sin duplicar equipos.
                    let clasificadosMiConf = miConfTeams.slice(0, 6); // Los 6 primeros seguros
                    
                    // Determinar qué IAs entran si el jugador se cuela
                    let ai7 = miConfTeams[6].name !== p.team ? miConfTeams[6] : miConfTeams[7];
                    let ai8 = miConfTeams[7].name !== p.team ? miConfTeams[7] : miConfTeams[8];
                    
                    if (finalSeed === 7) {
                        clasificadosMiConf.push(p.teamData); // Tú como 7º
                        clasificadosMiConf.push(ai8);        // IA como 8º
                    } else if (finalSeed === 8) {
                        clasificadosMiConf.push(ai7);        // IA como 7º
                        clasificadosMiConf.push(p.teamData); // Tú como 8º
                    } else {
                        clasificadosMiConf.push(ai7);        // Normal
                        clasificadosMiConf.push(ai8);        // Normal
                    }

                    let clasificadosOtraConf = otraConfTeams.slice(0, 8);
                    
                    // Construir el bracket mapeando exacto del array (asegura que s8 no sea s1, etc)
                    let s = {};
                    for(let i=1; i<=8; i++) s[`s${i}`] = clasificadosMiConf[i-1];
                    let o = {};
                    for(let i=1; i<=8; i++) o[`o${i}`] = clasificadosOtraConf[i-1];

                    let rivalSeed = 9 - finalSeed;
                    p.playoffRival = s[`s${rivalSeed}`];
                    
                    p.playoffBracket = { 
                        seedMiPos: finalSeed,
                        s1: s.s1, s8: s.s8, s4: s.s4, s5: s.s5,
                        s3: s.s3, s6: s.s6, s2: s.s2, s7: s.s7,
                        o1: o.o1, o8: o.o8, o4: o.o4, o5: o.o5,
                        o3: o.o3, o6: o.o6, o2: o.o2, o7: o.o7
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
            escribirDialogo(`🏆 MVP: Eres el Jugador Más Valioso. ${myPPG.toFixed(1)}p ${myAPG.toFixed(1)}r por partido.`);
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

        let isRookie = (p.fase === 1 && !p.debutadoACB) || (p.fase === 2 && !p.debutadoNBA);
        if (isRookie) {
            let rookiePool = allPlayers.filter(x => x.ovr <= p.ovr + 5); 
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
        if (p.fase === 1) p.debutadoACB = true;
        if (p.fase === 2) p.debutadoNBA = true;

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
    if (p.fase === 1 && p.fame >= 30 && p.ovr >= 76) targetFase = 2; 

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
            let sueldo = rol === "Estrella" ? 450 : rol === "Titular" ? 250 : 200;
            renovHtml += `<button onclick="ejecutarAscenso(${p.fase}, '${eq.name}', '${rol}')" class="btn-main" style="text-transform:none; font-size:0.72em; margin-bottom:4px;">${eq.name} | ${rol} | ${sueldo}€/p</button>`;
        });
        
        renovHtml += `<button onclick="ejecutarAscenso(${p.fase}, '${p.team}', '${p.role}')" class="btn-main" style="border-color:#555; color:#888; font-size:0.7em; margin-top:4px; text-transform:none;">🔄 Renovar con ${p.team}</button>`;
        renovHtml += `</div>`;
        if(gl) gl.insertAdjacentHTML('beforeend', renovHtml); 
        scrollToBottom();
    }
    guardarPartida();
}

function saltarDraftACB() {
    p.season++;
    
    if (typeof procesarContratosFinTemporada === "function") procesarContratosFinTemporada();
    
    p.sMatches = 0;
    p.isPlayoffs = false;
    p.playoffStage = "";
    p.isCopa = false;
    p.copaPlayedThisSeason = false;
    p.aswPlayedThisSeason = false;
    prepararLiga();
    updateUI();
    let gl = document.getElementById('game-log');
    if(gl) gl.innerHTML = '';
    escribirDialogo(`DECISIÓN: Decides no presentarte al Draft este año. Seguirás en ${p.team} mejorando. Temporada ${p.season}/17.`);
    
    p.isMercado = true; p.mercadoIntentos = 3;
    simularMercadoIA();
    renderMercado();
    guardarPartida();
}

function rechazarDraft() {
    let gl = document.getElementById('game-log');
    if(gl) gl.innerHTML = '';
    escribirDialogo(`Has decidido no presentarte al Draft este año y continuar tu desarrollo un año más en <b>${p.team}</b>.`);
    ejecutarAscenso(p.fase, p.team, p.role);
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
    
    if (typeof procesarContratosFinTemporada === "function") procesarContratosFinTemporada();
    
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
    
    p.isMercado = true; p.mercadoIntentos = 3;
    simularMercadoIA();
    renderMercado();
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
            let posReal = getPosReal(jug);
            let posStr = posMap[posReal] || posReal || "S";
            if(posStr.length > 5) posStr = posReal;
            
            let jugPPP = (jug.pts / mAI).toFixed(1);
            let jugRPP = (jug.reb / mAI).toFixed(1);
            let jugAPP = (jug.ast / mAI).toFixed(1);
            let jugROP = (jug.rob / mAI).toFixed(1);
            let jugTAP = (jug.tap / mAI).toFixed(1);

            html += `
            <div style="background: ${bgColor}; border: 1px solid ${borderColor}; border-radius: 8px; padding: 10px; text-align: center;">
                <div style="font-size: 0.8em; color: var(--accent); font-weight: bold; margin-bottom: 4px;">${posStr}</div>
                <div style="color: ${nameColor}; margin-bottom: 6px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; font-size:0.85em;">${isRival ? '🔥 ' : ''}${jug.n}</div>
                <div style="font-size: 0.7em; background: rgba(0,0,0,0.5); padding: 4px; border-radius: 4px; margin-bottom: 5px;">OVR: <span style="color:#fff; font-weight:bold;">${jug.o || 70}</span></div>
                <div style="font-size: 0.65em; color: #ccc;">${jugPPP}p | ${jugRPP}r | ${jugAPP}a</div>
                <div style="font-size: 0.6em; color: #888;">${jugROP}ro | ${jugTAP}ta</div>
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
    
    if(e('pr-tiro'))    e('pr-tiro').innerText    = p.tiro; 
    if(e('pr-fisico'))  e('pr-fisico').innerText  = p.fisico;
    if(e('pr-bandeja')) e('pr-bandeja').innerText = p.bandeja;
    if(e('pr-manejo'))  e('pr-manejo').innerText  = p.manejo; 
    if(e('pr-def'))     e('pr-def').innerText     = p.def;
    if(e('pr-mate'))    e('pr-mate').innerText    = p.mate;
    if(e('pr-tapón'))   e('pr-tapón').innerText   = p['tapón'];
    if(e('pr-robo'))    e('pr-robo').innerText    = p.robo;
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
// ACTUALIZACIÓN UI CON LÍNEAS DE COLORES
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

        const renderRow = (r, i, groupSize) => {
            let isPlayoff = false; 
            let isPlayin = false; 
            let pos = i + 1;
            
            if (p.fase === 0) {
                if (pos <= 2) isPlayoff = true;
            } else if (p.fase === 1) { 
                if (pos <= 8) isPlayoff = true; 
            } else if (p.fase === 2) { 
                if (pos <= 6) isPlayoff = true; 
                else if (pos >= 7 && pos <= 10) isPlayin = true; 
            }

            let numColor = isPlayoff ? '#00ff00' : (isPlayin ? '#ffd700' : '#666'); 
            let rowColor = r.isPlayer ? 'color:var(--accent); font-weight:bold;' : (r.star === p.rivalName ? 'color:gold; font-weight:bold;' : 'color:#ddd;');
            let borderStyle = 'border-bottom: 1px solid rgba(255,255,255,0.05);';
            
            if ((p.fase === 0 || p.fase === 1) && pos === 8) borderStyle = 'border-bottom: 1px dashed #00ff00;'; 
            if (p.fase === 2 && pos === 6) borderStyle = 'border-bottom: 1px dashed #00ff00;'; 
            if (p.fase === 2 && pos === 10) borderStyle = 'border-bottom: 1px dashed #ffd700;'; 

            return `<tr style="${rowColor} ${borderStyle}">
                        <td style="padding: 5px 0;"><span style="color:${numColor}; font-family:monospace; margin-right:4px;">${pos}.</span> ${r.name.substring(0,12)}</td>
                        <td style="text-align:right; padding: 5px 0;">${r.v}-${r.d}</td>
                    </tr>`;
        };

        if (p.fase === 1) {
            let allTeams = [...leagueTable].sort((a,b) => b.v - a.v);
            if(tableVd1) tableVd1.innerHTML = allTeams.map((r,i) => renderRow(r, i, allTeams.length)).join('');
            if(titleConf2) titleConf2.style.display = 'none'; 
            if(tableVd2) tableVd2.innerHTML = '';
        } else {
            let eqMiConf = leagueTable.filter(t => t.conf === miConfNum).sort((a,b) => b.v - a.v);
            if(tableVd1) tableVd1.innerHTML = eqMiConf.map((r,i) => renderRow(r, i, eqMiConf.length)).join('');
            
            if(titleConf2 && tableVd2) {
                if (p.fase === 0) {
                    titleConf2.style.display = 'block'; 
                    titleConf2.innerText = "OTRAS CONFERENCIAS";
                    let otherHtml = "";
                    for (let c = 1; c <= 4; c++) {
                        if (c === miConfNum) continue;
                        let eqConf = leagueTable.filter(t => t.conf === c).sort((a,b) => b.v - a.v);
                        if (eqConf.length > 0) {
                            otherHtml += `<tr><td colspan="2" style="text-align:center; color:var(--accent); font-size:0.7em; padding-top:12px; padding-bottom:4px; border-bottom:1px solid #333;">GRUPO ${c}</td></tr>`;
                            otherHtml += eqConf.map((r,i) => renderRow(r, i, eqConf.length)).join('');
                        }
                    }
                    tableVd2.innerHTML = otherHtml;
                } else {
                    let eqOtraConf = leagueTable.filter(t => t.conf !== miConfNum).sort((a,b) => b.v - a.v);
                    if(eqOtraConf.length > 0) {
                        titleConf2.style.display = 'block'; 
                        titleConf2.innerText = miConfNum === 1 ? 'CONFERENCIA OESTE' : 'CONFERENCIA ESTE';
                        tableVd2.innerHTML = eqOtraConf.map((r,i) => renderRow(r, i, eqOtraConf.length)).join('');
                    } else { 
                        titleConf2.style.display = 'none'; 
                        tableVd2.innerHTML = ''; 
                    }
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
        let diff = p.ovr - eq.ovr;
        let rol = diff >= 5 ? "Estrella" : diff >= -2 ? "Titular" : diff >= -8 ? "Suplente" : "Suplente";
        if (eq.ovr >= 85 && p.ovr < eq.ovr - 5) rol = "Suplente";
        if (eq.ovr >= 90 && p.ovr < eq.ovr - 2) rol = "Suplente";
        let sueldo = rol === "Estrella" ? 450 : rol === "Titular" ? 250 : 200;
        let badge = rol === "Estrella" ? "🌟" : rol === "Titular" ? "✅" : "🔋";
        html += `
        <button onclick="ejecutarAscenso(1, '${eq.name}', '${rol}')" class="btn-main"
            style="text-transform:none; font-size:0.72em; border-color:#0ff; color:#fff; margin-bottom:5px; text-align:left; padding:10px;">
            ${badge} <b>${eq.name}</b> &nbsp;<small style="color:#aaa;">Media ${eq.ovr} OVR | ${rol} | ${sueldo}€/partido</small>
        </button>`;
    });

    html += `<button onclick="rechazarDraft()" class="btn-main" style="border-color:#555; color:#aaa; margin-top:10px; font-size:0.65em;">❌ Rechazar Draft (Quedarme en Junior un año más)</button>`;
    
    if (p.history.acb.matches === 0 && p.season <= 3) {
        html += `<button onclick="saltarDraftACB()" class="btn-main" style="border-color:#888; color:#888; margin-top:5px; font-size:0.65em;">⏭️ No presentarme este año al Draft (Seguir en Junior y mejorar)</button>`;
    }
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
    
    if (p.ovr >= 78 || p.fame >= 55) { 
        pick = Math.floor(1 + Math.random() * 4);  
        tier = "🥇 Pick de Lotería TOP 5";    
    }
    else if (p.ovr >= 77 || p.fame >= 45) { 
        pick = Math.floor(5 + Math.random() * 9);  
        tier = "⭐ Lotería (Top 14)";          
    }
    else if (p.ovr >= 76 || p.fame >= 35) { 
        pick = Math.floor(14 + Math.random() * 16); 
        tier = "📋 Primera Ronda";             
    }
    else { 
        pick = Math.floor(30 + Math.random() * 30); 
        tier = "📄 Segunda Ronda";             
    }

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
        let diff = p.ovr - eq.ovr;
        let rol = diff >= 5 ? "Estrella" : diff >= -2 ? "Titular" : "Suplente";
        if (eq.ovr >= 88 && p.ovr < eq.ovr - 3) rol = "Suplente";
        if (eq.ovr >= 93 && p.ovr < eq.ovr) rol = "Suplente";
        let sueldo = rol === "Estrella" ? 450 : rol === "Titular" ? 250 : 200;
        let badge = rol === "Estrella" ? "🌟" : rol === "Titular" ? "✅" : "🔋";
        html += `
        <button onclick="ejecutarAscenso(2, '${eq.name}', '${rol}')" class="btn-main"
            style="text-transform:none; font-size:0.72em; border-color:gold; color:#fff; margin-bottom:5px; text-align:left; padding:10px;">
            ${badge} <b>${eq.name}</b> &nbsp;<small style="color:#aaa;">Media ${eq.ovr} OVR | ${rol} | ${sueldo}€/partido</small>
        </button>`;
    });

    html += `<button onclick="rechazarDraft()" class="btn-main" style="border-color:#555; color:#aaa; margin-top:10px; font-size:0.65em;">❌ Rechazar Draft (Quedarme en ACB un año más)</button></div>`;
    
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
    
    p.isMercado = true; p.mercadoIntentos = 3;
    simularMercadoIA();
    renderMercado();
    guardarPartida();
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
