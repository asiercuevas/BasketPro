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
