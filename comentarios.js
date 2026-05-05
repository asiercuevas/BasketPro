// comentarios.js
var COMENTARIOS_DECISIVOS = [
    "🎙️ COMENTARISTA: '¡El pabellón entero contiene la respiración!'",
    "🎙️ COMENTARISTA: '¡Hielo en las venas! Se prepara para el tiro que puede cambiar la historia.'",
    "🎙️ COMENTARISTA: 'Momentos como este separan a los buenos de las verdaderas leyendas.'",
    "🎙️ COMENTARISTA: 'Se masca la tensión. Absolutamente nadie se sienta en la grada.'",
    "🎙️ COMENTARISTA: 'Las miradas de miles de personas están clavadas en él.'",
    "🎙️ COMENTARISTA: 'El balón debe pesar una tonelada en este preciso instante.'",
    "🎙️ COMENTARISTA: 'Si mete esto, se corona. Si falla, será una noche muy, muy larga.'",
    "🎙️ COMENTARISTA: '¡Qué presión! Se seca las manos, respira y mira al aro con determinación.'",
    "🎙️ COMENTARISTA: '¡Es la hora de la verdad! Todo o nada desde la línea de personal.'",
    "🎙️ COMENTARISTA: 'Silencio sepulcral en el estadio. Solo se escucha el bote del balón en la madera.'",
    "🎙️ COMENTARISTA: 'El entrenador rival no quiere ni mirar. Sabe lo que se les viene.'",
    "🎙️ COMENTARISTA: 'Sus compañeros confían ciegamente en él. Es su territorio.'",
    "🎙️ COMENTARISTA: '¡Cuánta sangre fría hay que tener para plantarse ahí ahora mismo!'",
    "🎙️ COMENTARISTA: 'La bocina está a punto de sonar, pero antes... llega la sentencia.'",
    "🎙️ COMENTARISTA: 'Respira hondo... sabe que el mundo entero está pendiente de sus manos.'",
    "🎙️ COMENTARISTA: '¡Las pulsaciones a mil por hora! Pero él parece estar en su propio mundo.'",
    "🎙️ COMENTARISTA: 'Es en estos finales de absoluto infarto donde nacen los verdaderos G.O.A.T.'",
    "🎙️ COMENTARISTA: 'Un momento puramente decisivo. Una línea delgada entre la gloria o la agonía.'",
    "🎙️ COMENTARISTA: 'El árbitro le entrega el balón. El destino del partido está en sus manos.'",
    "🎙️ COMENTARISTA: 'Nadie querría estar en su piel con esta presión, pero él ha nacido para esto.'"
];

var COMENTARIOS_NORMALES = [
    "🎙️ COMENTARISTA: 'El balón circula con rapidez buscando un hueco en la defensa.'",
    "🎙️ COMENTARISTA: '¡Vaya ritmo de partido! No hay respiro para nadie.'",
    "🎙️ COMENTARISTA: 'La defensa está muy cerrada, habrá que inventar algo desde el perímetro.'",
    "🎙️ COMENTARISTA: 'Se palpa la intensidad en cada bloqueo, saltan chispas en la pintura.'",
    "🎙️ COMENTARISTA: 'El entrenador pide calma y cabeza desde el banquillo.'",
    "🎙️ COMENTARISTA: 'Buena presión a toda pista, a ver cómo salen de esta.'",
    "🎙️ COMENTARISTA: 'Pide el bloqueo y continuación. Lectura clásica de partido.'",
    "🎙️ COMENTARISTA: 'El público empieza a animar, necesitan un buen ataque ahora.'",
    "🎙️ COMENTARISTA: 'Busca el aclarado. Se la va a jugar en el uno contra uno.'",
    "🎙️ COMENTARISTA: '¡Qué gran movimiento de balón! Han mareado a la defensa.'",
    "🎙️ COMENTARISTA: 'Duelo táctico espectacular en estos últimos minutos.'",
    "🎙️ COMENTARISTA: 'Piden tiempo muerto mental en la pista. Nadie quiere cometer un error.'",
    "🎙️ COMENTARISTA: 'Se perfila hacia la canasta... la defensa le flota un poco.'",
    "🎙️ COMENTARISTA: 'Intenta sacar ventaja de su defensor, que es algo más lento.'",
    "🎙️ COMENTARISTA: '¡Ojo que hay ventaja al poste bajo!'",
    "🎙️ COMENTARISTA: 'Transición rápida. Si no le paran ahora, tenemos canasta fácil.'",
    "🎙️ COMENTARISTA: 'Jugada de pizarra clara. Vamos a ver si sale como la ensayaron.'",
    "🎙️ COMENTARISTA: 'Agota los segundos de posesión buscando el mejor tiro posible.'",
    "🎙️ COMENTARISTA: 'La defensa llega a las ayudas perfectamente sincronizada.'",
    "🎙️ COMENTARISTA: 'La afición rival aprieta, cada bote de balón va acompañado de un pitido.'",
    "🎙️ COMENTARISTA: 'Empiezan a fallar las fuerzas, el físico va a ser clave aquí.'",
    "🎙️ COMENTARISTA: 'Buen trabajo sin balón, moviendo a su par por toda la zona.'",
    "🎙️ COMENTARISTA: 'Se preparan para el rebote por si acaso, saben que es un tiro forzado.'",
    "🎙️ COMENTARISTA: 'El entrenador rival cruza los brazos, no le está gustando lo que ve.'",
    "🎙️ COMENTARISTA: 'Doble marcaje. Tienen que mover la bola rápido para encontrar al hombre libre.'",
    "🎙️ COMENTARISTA: 'Se frena en seco... finta de tiro y busca la penetración.'",
    "🎙️ COMENTARISTA: 'El ritmo es de vértigo, el balón cruza la pista en apenas dos pases.'",
    "🎙️ COMENTARISTA: 'Mucha pelea bajo los aros. Esto es baloncesto en estado puro.'",
    "🎙️ COMENTARISTA: 'Cuidado con las faltas, ya están en bonus y no conviene regalar tiros libres.'",
    "🎙️ COMENTARISTA: 'El ataque posicional les está costando, necesitan correr más.'",
    "🎙️ COMENTARISTA: 'Lee a la perfección la defensa en zona y busca el pase al poste alto.'",
    "🎙️ COMENTARISTA: '¡Espectáculo en el parqué! Ambos equipos están dando el 100%.'",
    "🎙️ COMENTARISTA: 'El banquillo se levanta pidiendo pasos, ¡pero el árbitro no pita nada!'",
    "🎙️ COMENTARISTA: 'Se nota la tensión, cada canasta cuesta sangre, sudor y lágrimas.'",
    "🎙️ COMENTARISTA: 'Intenta aprovechar su envergadura frente a un defensor más bajo.'",
    "🎙️ COMENTARISTA: 'Pide el balón al poste, quiere hacer valer su juego de pies.'",
    "🎙️ COMENTARISTA: 'La bola quema en las manos. Hay que tomar una decisión ya.'",
    "🎙️ COMENTARISTA: 'Excelente cambio de ritmo, ha roto por completo los esquemas defensivos.'",
    "🎙️ COMENTARISTA: 'La grada es un clamor. Qué maravilla de ambiente se respira hoy.'",
    "🎙️ COMENTARISTA: 'Prepara el sistema... levanta el puño marcando la jugada.'"
];

var COMENTARIOS_RESULTADOS = {
    m: {
        ok: [
            "¡VAYA VUELO! ¡Póster para la historia!",
            "¡REVIENTA EL ARO! Qué brutalidad física.",
            "¡Tomahawk espectacular! Se cuelga a una mano con tremenda fuerza.",
            "¡Baaaaang! La hundió sin piedad en la cara de su defensor."
        ],
        fail: [
            "¡El aro escupe ese mate! Qué lástima.",
            "Fue con todo, pero la defensa le cerró la puerta.",
            "Se quedó corto en el salto. Pierde una oportunidad de oro.",
            "¡Taponazo en el mismísimo aro! Le negaron el vuelo."
        ]
    },
    b: {
        ok: [
            "¡Bandeja con muchísima clase!",
            "Usa el cristal a la perfección. Dos puntos fáciles.",
            "Acrobacia en el aire y la deja suave contra la tabla.",
            "Pasa por debajo de la defensa y anota la bandeja a aro pasado."
        ],
        fail: [
            "Falla la bandeja bajo el aro. Increíble.",
            "Demasiada fuerza contra el cristal, se sale de dentro.",
            "Le punzaron bien el tiro en el último instante y falla.",
            "Se lio con el juego de pies y la tira a cualquier parte."
        ]
    },
    t: {
        ok: [
            "¡TRIPLEEE LIMPIO! Solo red.",
            "¡Bingo desde el perímetro! Vaya muñeca tiene.",
            "¡Desde su casa! ¡Y entra limpia!",
            "Tiro precioso, parábola perfecta y... ¡DENTRO!"
        ],
        fail: [
            "El tiro se queda muy corto. ¡Agua!",
            "Golpea en la parte trasera de la plancha. Muy forzado.",
            "Esa bola da dos vueltas por el aro y se sale.",
            "Le puntearon bien y el triple ni siquiera toca aro."
        ]
    },
    a: {
        ok: [
            "¡Asistencia de manual! Le dejó solo.",
            "Visión de rayos X. Pase espectacular por la espalda.",
            "¡Qué visión de juego! Sirve el balón en bandeja de plata.",
            "Rompe a la defensa y dobla el balón magistralmente."
        ],
        fail: [
            "Pase interceptado. No se entendió con su compañero.",
            "Demasiado arriesgado ese pase, la envía a la grada.",
            "La defensa leyó perfectamente sus intenciones. Robo rival.",
            "Mala entrega, el balón se le escurre de las manos."
        ]
    },
    ro: {
        ok: [
            "¡Gran robo! Manos rapidísimas.",
            "¡Ladrón de guante blanco! Se lleva la pelota sin falta.",
            "Corta la línea de pase magistralmente.",
            "Le roba la cartera en un despiste tremendo de la ofensiva."
        ],
        fail: [
            "Intenta meter la mano y... falta personal.",
            "Llega muy tarde al robo y golpea en el brazo.",
            "El rival protege bien la bola y se lo quita de encima.",
            "Se lanzó a por el robo pero acabó en el suelo sin premio."
        ]
    },
    ta: {
        ok: [
            "¡TAPÓN TREMENDO! Le dice que por ahí no se pasa.",
            "¡Gorro monumental! La envía a la tercera fila.",
            "Aparece de la nada para poner un pincho de merluza histórico.",
            "Cierra la persiana con un bloqueo espectacular."
        ],
        fail: [
            "Llega tarde a la ayuda y concede la canasta rival.",
            "Se come la finta y el rival anota a placer.",
            "Intenta taponar pero le saca la falta y el dos más uno.",
            "Salto precipitado, no llega ni a rozar la pelota."
        ]
    },
    re: {
        ok: [
            "¡Rebote defensivo asegurado! Domina los cielos.",
            "Cierra muy bien el rebote y se queda la posesión.",
            "Salto poderoso entre tres rivales para atrapar ese balón.",
            "Palmea y se hace con la bola en la pintura."
        ],
        fail: [
            "Pierde la posición y el rival atrapa el rebote ofensivo.",
            "El balón le pasa rozando los dedos, rebote perdido.",
            "Demasiada pelea bajo el aro, acaba perdiendo la posición.",
            "No bloqueó a su hombre y se lo cogen por encima."
        ]
    },
    falta_m: [
        "¡Falta durísima intentando el mate! Se va directo a la línea.",
        "Le pararon con falta cuando iba a reventar el aro. Tiros libres.",
        "El defensor no tuvo más remedio que hacer falta para evitar el póster."
    ],
    falta_b: [
        "Recibe un fuerte empujón en la bandeja. ¡A los tiros libres!",
        "Contacto ilegal cuando iniciaba el paso. El árbitro lo tiene claro.",
        "¡Falta! No pudo finalizar la bandeja por el golpe en el brazo."
    ],
    falta_t: [
        "¡Falta en el triple! Le barrieron el brazo. ¡Irá 3 veces a la línea!",
        "El defensor no le deja espacio para aterrizar. Falta en el triple.",
        "¡Qué error defensivo! Toca la mano del tirador en pleno vuelo."
    ]
};