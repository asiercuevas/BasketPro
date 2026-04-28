const StorySystem = {
    events: [],

    // FORMATO CLARO: Se integra en el historial del juego (chat)
    trigger: function(titulo, text, options, eventId) {
        if (this.events.includes(eventId)) return;
        this.events.push(eventId);

        let html = `<div class="dialog-box log-entry story-event" id="story-${eventId}" style="border-color: gold; border-width: 2px; margin-bottom:15px; background: rgba(255,215,0,0.05);">
            <h3 style="color: gold; margin-bottom: 8px; font-size: 0.9em;">${titulo}</h3>
            <p style="font-size: 0.7em; line-height: 1.5; margin-bottom: 15px; color: #ddd; text-align: justify;">${text}</p>
            <div style="display:flex; flex-direction:column; gap:8px;">`;
        
        options.forEach((opt, idx) => {
            html += `<button class="btn-main" id="st-btn-${eventId}-${idx}" style="text-transform:none; font-size:0.75em; padding:8px; border-color:gold; color:gold;">${opt.text}</button>`;
        });
        html += `</div></div>`;
        
        document.getElementById('game-log').insertAdjacentHTML('beforeend', html);
        if(typeof scrollToBottom === 'function') scrollToBottom();
        
        // Bloqueamos acciones para forzar la decisión
        let act = document.getElementById('actions');
        if(act) act.style.display = 'none';
        
        options.forEach((opt, idx) => {
            document.getElementById(`st-btn-${eventId}-${idx}`).onclick = function() {
                opt.action();
                document.getElementById(`story-${eventId}`).innerHTML = `<span style="color:gold; font-size:0.7em;">✅ Decisión tomada: ${opt.text.split('(')[0].trim()}</span>`;
                
                // Restaura los botones
                let act2 = document.getElementById('actions');
                if(act2) act2.style.display = 'flex';
                
                if(typeof updateUI === 'function') updateUI();
                if(typeof renderMenu === 'function') renderMenu();
                if(typeof guardarPartida === 'function') guardarPartida();
                if(typeof scrollToBottom === 'function') scrollToBottom();
            };
        });
    },

    mostrarAnuncio: function(titulo, texto) {
        this.trigger(titulo, texto, [{ text: "ENTENDIDO", action: () => {} }], 'anuncio_' + Date.now());
    },

    triggerEntrevista: function() {
        this.trigger("🎤 PREGUNTA FLASH DE LA PRENSA", 
        "Los periodistas te asaltan en el túnel de vestuarios. Tienes un micrófono en la cara. ¿Qué actitud vas a mostrar ante las cámaras hoy?",
        [
            { text: "CARISMA (Bromear con la prensa) [+1.5 Fama]", action: () => { p.fame += 1.5; } },
            { text: "HUMILDAD (Elogiar a los compañeros) [+1 Fama, +2 Química]", action: () => { p.fame += 1; p.chem = Math.min(100, p.chem+2); } },
            { text: "ARROGANCIA (Soy el mejor) [-2 Fama, +1 Físico por ego]", action: () => { p.fame -= 2; p.fisico = Math.min(100, p.fisico+1); } }
        ], 'flash_' + Date.now());
    },

    // ---------------------------------------------------------
    // EVENTOS ALEATORIOS (Más de 20, se repiten con ID dinámico)
    // ---------------------------------------------------------
    lanzarEventoAleatorio: function() {
        let pool = [
            { t: "📸 FAN PESADO", d: "Estás cenando y un fan muy pesado te pide una foto mientras comes. Es la quinta vez que te interrumpe.",
              o: [{ text: "Sonreír y hacerte la foto (+2 Fama, -1 Físico)", action: () => { p.fame += 2; p.fisico -= 1; } },
                  { text: "Decirle educadamente que te deje cenar (-1 Fama, +1 Química)", action: () => { p.fame -= 1; p.chem += 1; } }]},
            { t: "✈️ VUELO RETRASADO", d: "El vuelo del equipo se ha retrasado 6 horas. Estáis atrapados en el aeropuerto.",
              o: [{ text: "Dormir en el suelo (-3 Físico)", action: () => { p.fisico -= 3; } },
                  { text: "Jugar a las cartas con el equipo (+5 Química, -1 Físico)", action: () => { p.chem = Math.min(100, p.chem+5); p.fisico -= 1; } }]},
            { t: "📰 RUMOR FALSO", d: "Un portal de noticias inventa que te peleaste con el entrenador en el último entreno.",
              o: [{ text: "Desmentirlo en X/Twitter (+1 Fama)", action: () => { p.fame += 1; } },
                  { text: "Ignorarlo, el vestuario sabe la verdad (+3 Química)", action: () => { p.chem = Math.min(100, p.chem+3); } }]},
            { t: "🍔 CENA TRAMPA", d: "El equipo ha pedido comida rápida gigante para celebrar. Huele increíble.",
              o: [{ text: "Comer como si no hubiera un mañana (-2 Físico, +4 Química)", action: () => { p.fisico -= 2; p.chem = Math.min(100, p.chem+4); } },
                  { text: "Comer tu ensalada triste (+2 Físico, -2 Química)", action: () => { p.fisico += 2; p.chem -= 2; } }]},
            { t: "👟 ZAPATILLAS NUEVAS", d: "Te han enviado unas zapatillas en fase de pruebas. Son bonitas pero te aprietan un poco.",
              o: [{ text: "Jugar con ellas por la foto (+2 Fama, -2 Bandeja)", action: () => { p.fame += 2; p.bandeja -= 2; } },
                  { text: "Usar las viejas confiables (+1 Manejo)", action: () => { p.manejo += 1; } }]},
            { t: "🎙️ PODCAST VIRAL", d: "Te invitan a un podcast muy polémico de internet. Promete mucha audiencia.",
              o: [{ text: "Ir y dar grandes titulares (+5 Fama, -5 Química)", action: () => { p.fame += 5; p.chem -= 5; } },
                  { text: "Rechazarlo educadamente (+2 Química)", action: () => { p.chem += 2; } }]},
            { t: "🏥 VISITA AL HOSPITAL", d: "El club organiza una visita sorpresa a la planta infantil del hospital de la ciudad.",
              o: [{ text: "Ir encantado y regalar camisetas (+5 Fama, +3 Química)", action: () => { p.fame += 5; p.chem = Math.min(100, p.chem+3); } }]},
            { t: "🎮 NOCHE DE CONSOLA", d: "Varios compañeros están jugando online hasta las 4 AM. Te invitan a la partida.",
              o: [{ text: "Jugar hasta el amanecer (+5 Química, -3 Físico)", action: () => { p.chem = Math.min(100, p.chem+5); p.fisico -= 3; } },
                  { text: "Irte a dormir (+3 Físico, -2 Química)", action: () => { p.fisico += 3; p.chem -= 2; } }]},
            { t: "😡 FAN TÓXICO", d: "Un aficionado rival te insulta gravemente desde la primera fila mientras sacas de banda.",
              o: [{ text: "Guiñarle el ojo y sonreír (+3 Fama)", action: () => { p.fame += 3; } },
                  { text: "Encararte con él (-3 Fama, +1 Físico por rabia)", action: () => { p.fame -= 3; p.fisico += 1; } }]},
            { t: "🏋️ SESIÓN EXTRA", d: "El gimnasio está vacío. Tienes la tarde libre, pero podrías mejorar tus debilidades.",
              o: [{ text: "Machacarte haciendo pesas (+2 Físico, -1 Tiro)", action: () => { p.fisico += 2; p.tiro -= 1; } },
                  { text: "Tirar 500 triples (+2 Tiro, -1 Físico)", action: () => { p.tiro += 2; p.fisico -= 1; } }]},
            { t: "💸 COMPAÑERO EN APUROS", d: "Un compañero novato ha gastado de más y te pide 500€ prestados hasta cobrar.",
              o: [{ text: "Prestarle el dinero (-500€, +8 Química)", action: () => { if(p.money >= 500) { p.money -= 500; p.chem = Math.min(100, p.chem+8); } else { p.chem -= 2; } } },
                  { text: "Decirle que debe ser responsable (-3 Química)", action: () => { p.chem -= 3; } }]},
            { t: "📺 DECLARACIONES DE LEYENDA", d: "Una vieja gloria del baloncesto critica a tu generación diciendo que sois blandos.",
              o: [{ text: "Darle la razón y ser humilde (+2 Química)", action: () => { p.chem += 2; } },
                  { text: "Responderle y defender a los tuyos (+3 Fama, -2 Química)", action: () => { p.fame += 3; p.chem -= 2; } }]},
            { t: "🤑 MICRO-PATROCINIO", d: "Un restaurante local te ofrece comida gratis todo el mes a cambio de un post en redes.",
              o: [{ text: "Aceptar (+1 Fama, +50€)", action: () => { p.fame += 1; p.money += 50; } },
                  { text: "Ignorarlo, estás a otro nivel (+0)", action: () => {} }]},
            { t: "🎯 APUESTA DE TIROS LIBRES", d: "Al final del entreno, el equipo apuesta 100€ a ver quién mete más tiros libres seguidos.",
              o: [{ text: "Entrar a la apuesta (Ganas si tienes más de 75 de Tiro)", action: () => { 
                  if(p.tiro > 75) { alert("¡Ganaste!"); p.money += 100; p.chem += 2; } 
                  else { alert("Perdiste..."); p.money = Math.max(0, p.money - 100); p.chem += 2; } 
              }}]},
            { t: "👕 ROBO EN EL VESTUARIO", d: "Vas a cambiarte y alguien te ha escondido la ropa de calle. ¡Es una broma del equipo!",
              o: [{ text: "Reírte de la broma (+5 Química)", action: () => { p.chem = Math.min(100, p.chem+5); } },
                  { text: "Enfadarte y buscar al culpable (-5 Química)", action: () => { p.chem -= 5; } }]},
            { t: "🔥 LIDERAZGO NECESARIO", d: "El equipo lleva una mala semana de entrenamientos. Falta energía.",
              o: [{ text: "Dar una charla motivacional (+5 Química Si Fama > 30)", action: () => { if(p.fame>30) p.chem+=5; else p.chem-=2; } },
                  { text: "Predicar con el ejemplo (Callar y entrenar) (+2 Físico)", action: () => { p.fisico += 2; } }]},
            { t: "🚗 PINCHAZO EN LA RUEDA", d: "Vas tarde al pabellón porque has pinchado una rueda.",
              o: [{ text: "Correr los últimos 2km (-3 Físico, no llegas tarde)", action: () => { p.fisico -= 3; } },
                  { text: "Esperar a la grúa y llegar tarde (-5 Química)", action: () => { p.chem -= 5; } }]},
            { t: "🤳 CAZADO EN LA CALLE", d: "Un paparazzi te graba saliendo despeinado de una panadería.",
              o: [{ text: "Reírte de ti mismo en redes (+3 Fama)", action: () => { p.fame += 3; } }]},
            { t: "🛌 MALA NOCHE", d: "No has podido dormir por el ruido de los vecinos.",
              o: [{ text: "Tomar mucho café (-2 Físico, +1 Manejo)", action: () => { p.fisico -= 2; p.manejo += 1; } },
                  { text: "Ir a entrenar cansado (-2 Bandeja)", action: () => { p.bandeja -= 2; } }]},
            { t: "🧼 DUCHAS FRÍAS", d: "Se ha roto el calentador de agua del pabellón. El agua sale helada.",
              o: [{ text: "Ducharte como un espartano (+2 Físico)", action: () => { p.fisico += 2; } },
                  { text: "Irte sin ducharte (-2 Fama)", action: () => { p.fame -= 2; } }]},
            { t: "🎬 CAMEOS", d: "Te ofrecen salir 5 segundos en una serie de televisión famosa.",
              o: [{ text: "Aceptar (+5 Fama, -2 Química por faltar al entreno)", action: () => { p.fame += 5; p.chem -= 2; } },
                  { text: "Rechazar (+2 Química)", action: () => { p.chem += 2; } }]}
        ];

        let ev = pool[Math.floor(Math.random() * pool.length)];
        // Disparamos con un ID basado en el tiempo para que se pueda repetir
        this.trigger(ev.t, ev.d, ev.o, 'rand_' + Date.now());
    },

    checkEvents: function() {
        let totalMatches = p.history.junior.matches + p.history.acb.matches + p.history.nba.matches + p.stats.matches;
        let acbMatches = p.history.acb.matches + (p.fase === 1 ? p.stats.matches : 0);
        let nbaMatches = p.history.nba.matches + (p.fase === 2 ? p.stats.matches : 0);
        let eventFired = false;

        // ==========================================
        // FASE 0: LIGA JUNIOR (Los orígenes)
        // ==========================================
        if (totalMatches === 0 && !this.events.includes('inicio')) {
            this.trigger("LA PROMESA DEL BARRIO", 
            `El olor a reflex y goma gastada inunda el pabellón. Tú y ${p.rivalName} os ponéis la camiseta. Él te choca el puño: "Oye, uno de los dos va a llegar a la NBA y sacará a su familia de este agujero. Que gane el mejor."`, 
            [{text: "Sellar el pacto (+2 Fama, +5 Química)", action: () => { p.fame += 2; p.chem += 5; }}], 'inicio');
            eventFired = true;
        }

        if (totalMatches === 2 && p.fase === 0 && !this.events.includes('zapatillas_rotas')) {
            this.trigger("ZAPATILLAS ROTAS", "En pleno contraataque, la suela de tu zapatilla izquierda se despega. No tienes dinero para unas nuevas.", 
            [ {text: "Pegarlas con cinta (-2 Físico, +5 Quím)", action: () => { p.fisico -= 2; p.chem += 5; }},
              {text: "Pedir prestadas al banquillo (+2 Físico, -5 Quím)", action: () => { p.fisico += 2; p.chem -= 5; }} ], 'zapatillas_rotas');
            eventFired = true;
        }

        // TRAMA RIVAL 1
        if (totalMatches === 5 && p.fase === 0 && !this.events.includes('rival_1')) {
            this.trigger(`⚔️ RIVALIDAD: EL GOLPE`, 
            `En un partido de entrenamiento, ${p.rivalName} te da un codazo muy duro al penetrar a canasta. Te caes al suelo y él te mira por encima del hombro riéndose. "Levanta, llorón".`, 
            [ {text: "Devolvérsela en la siguiente jugada (+3 Físico, -10 Quím)", action: () => { p.fisico += 3; p.chem -= 10; }},
              {text: "Callar y meterle un triple en su cara (+5 Tiro, +5 Fama)", action: () => { p.tiro += 5; p.fame += 5; }} ], 'rival_1');
            eventFired = true;
        }

        if (totalMatches === 8 && p.fase === 0 && !this.events.includes('presion_padres')) {
            this.trigger("PRESIÓN EN CASA", `Tus padres te sientan a hablar. "El baloncesto está muy bien, pero tus notas están bajando. O apruebas, o te borramos del equipo".`, 
            [ {text: "Pasar la noche estudiando (-3 Físico, +2 Tiro)", action: () => { p.fisico -= 3; p.tiro += 2; }},
              {text: "Escaparte por la ventana a entrenar (+3 Físico, -5 Quím)", action: () => { p.fisico += 3; p.chem -= 5; }} ], 'presion_padres');
            eventFired = true;
        }

        // TRAMA RIVAL 2
        if (totalMatches === 11 && p.fase === 0 && !this.events.includes('rival_2')) {
            this.trigger(`⚔️ RIVALIDAD: LA PRENSA LOCAL`, 
            `Un periódico de la ciudad publica un artículo titulado: "${p.rivalName}, la verdadera joya de la corona". Te mencionan de pasada como su "escudero".`, 
            [ {text: "Picarte y jugar a lo chupón en el próximo partido (-15 Quím, +5 Manejo)", action: () => { p.chem -= 15; p.manejo += 5; }},
              {text: "Usarlo de motivación para defender mejor (+8 Defensa, -2 Fama)", action: () => { p.def += 8; p.fame -= 2; }} ], 'rival_2');
            eventFired = true;
        }

        // ==========================================
        // FASE 1: LIGA ACB / PROFESIONAL
        // ==========================================
        if (p.fase === 1 && acbMatches === 0 && !this.events.includes('debut_acb')) {
            this.trigger("BIENVENIDO A LA ÉLITE", "El salto a la liga profesional es brutal. El entrenador te dice: 'Aquí no eres ninguna estrella todavía. Defiende y pásala.'", 
            [ {text: "Asentir y defender (+3 Def, +10 Quím)", action: () => { p.def += 3; p.chem += 10; }},
              {text: "Ignorarle y tirar (-15 Quím, +3 Tiro)", action: () => { p.chem -= 15; p.tiro += 3; }} ], 'debut_acb');
            eventFired = true;
        }

        // TRAMA RIVAL 3
        if (p.fase === 1 && acbMatches === 2 && !this.events.includes('rival_3')) {
            this.trigger(`⚔️ RIVALIDAD: EL MENSAJE`, 
            `Te llega un WhatsApp de ${p.rivalName}: "He visto tu debut en la ACB por la tele. Vas a ritmo de tortuga. Tienes suerte de no jugar contra mí todavía".`, 
            [ {text: "Bloquear su número (+5 Química)", action: () => { p.chem += 5; }},
              {text: "Responder: 'Míralo bien, porque estaré en lo más alto' (+5 Fama, -2 Química)", action: () => { p.fame += 5; p.chem -= 2; }} ], 'rival_3');
            eventFired = true;
        }

        if (p.fase === 1 && acbMatches === 10 && !this.events.includes('tavares')) {
            this.trigger("⛰️ EL GIGANTE BLANCO", "Edy Tavares te dice: 'Tienes talento, chico, pero te comerán vivo si no endureces esa defensa'.",
            [ { text: "Pedirle ayuda (+5 Def, +5 Quím)", action: () => { p.def += 5; p.chem += 5; } },
              { text: "Decirle que eres mejor (-10 Fama, +5 Tiro)", action: () => { p.fame -= 10; p.tiro += 5; } } ], 'tavares');
            eventFired = true;
        }

        // TRAMA RIVAL 4
        if (p.fase === 1 && acbMatches === 18 && !this.events.includes('rival_4')) {
            this.trigger(`⚔️ RIVALIDAD: CARA A CARA`, 
            `Te toca enfrentarte directamente a ${p.rivalName}. En la línea de tiros libres se te acerca y te susurra: "No perteneces a esta liga. Estás temblando".`, 
            [ {text: "Reírte en su cara y meter los tiros (+5 Bandeja, +5 Fama)", action: () => { p.bandeja += 5; p.fame += 5; }},
              {text: "Dejar que te afecte y fallar (-5 Tiro, +10 Defensa por rabia)", action: () => { p.tiro -= 5; p.def += 10; }} ], 'rival_4');
            eventFired = true;
        }

        if (p.fase === 1 && acbMatches === 25 && !this.events.includes('novatada_acb')) {
            this.trigger("LA NOVATADA", "Tu ropa de calle está empapada en agua. Los veteranos se ríen.",
            [ { text: "Reírte con ellos (+15 Quím, -2 Fama)", action: () => { p.chem += 15; p.fame -= 2; } },
              { text: "Encararte con el capitán (-20 Quím, +5 Fama)", action: () => { p.chem -= 20; p.fame += 5; } } ], 'novatada_acb');
            eventFired = true;
        }

        // TRAMA RIVAL 5
        if (p.fase === 1 && acbMatches === 35 && !this.events.includes('rival_5')) {
            this.trigger(`⚔️ RIVALIDAD: LA TRAMPA`, 
            `${p.rivalName} te invita de forma inesperada a la zona VIP de una discoteca la noche antes de vuestro partido. "Venga, por los viejos tiempos, solo un rato".`, 
            [ {text: "Ir a la fiesta (-10 Físico, -15 Química, +10 Fama)", action: () => { p.fisico -= 10; p.chem -= 15; p.fame += 10; }},
              {text: "Quedarte en casa durmiendo (+10 Físico, +5 Química)", action: () => { p.fisico += 10; p.chem += 5; }} ], 'rival_5');
            eventFired = true;
        }

        // ==========================================
        // FASE 2: LA NBA (El Camino a Leyenda)
        // ==========================================
        if (p.fase === 2 && nbaMatches === 0 && !this.events.includes('debut_nba')) {
            this.trigger("🇺🇸 THE AMERICAN DREAM", "Luces, cámaras, espectáculo. Estás en la NBA.", 
            [ {text: "Ir a por todas (+5 Fama, +2 Tiro)", action: () => { p.fame += 5; p.tiro += 2; }},
              {text: "Centrarte en el equipo (+5 Química, +2 Físico)", action: () => { p.chem += 5; p.fisico += 2; }} ], 'debut_nba');
            eventFired = true;
        }

        // TRAMA RIVAL 6
        if (p.fase === 2 && nbaMatches === 8 && !this.events.includes('rival_6')) {
            this.trigger(`⚔️ RIVALIDAD: EL MENOSPRECIO`, 
            `Ambos habéis llegado a la NBA. En una rueda de prensa de su equipo, le preguntan por ti a ${p.rivalName}. Él responde: "¿Quién? No me preocupo por jugadores de equipos mediocres".`, 
            [ {text: "Hacer un tweet incendiario respondiéndole (+15 Fama, -10 Química)", action: () => { p.fame += 15; p.chem -= 10; }},
              {text: "Responder en la cancha con un partido histórico (+8 Tiro, +8 Físico)", action: () => { p.tiro += 8; p.fisico += 8; }} ], 'rival_6');
            eventFired = true;
        }

        if (p.fase === 2 && nbaMatches === 30 && !this.events.includes('marca_zapatillas')) {
            this.trigger("👟 LA FIRMA DE TUS SUEÑOS", "Una gran marca deportiva te ofrece tus propias zapatillas (Signature Shoes).",
            [ { text: "Firmar el contrato (Zapatillas PRO, -5 Fis, +10 Fama)", action: () => { p.hasShoe = true; p.fisico -= 5; p.fame += 10; } },
              { text: "Rechazar para entrenar (+5 Fis, +10 Quím)", action: () => { p.fisico += 5; p.chem += 10; } } ], 'marca_zapatillas');
            eventFired = true;
        }

        // TRAMA RIVAL 7
        if (p.fase === 2 && nbaMatches === 45 && !this.events.includes('rival_7')) {
            this.trigger(`⚔️ RIVALIDAD: EL BOICOT`, 
            `Empiezan las votaciones para el All-Star. ${p.rivalName} hace una campaña enorme en sus redes sociales pidiendo explícitamente a sus fans que NO te voten a ti para que él pueda ser titular.`, 
            [ {text: "Criticar su inmadurez en directo (+10 Fama, +5 Química)", action: () => { p.fame += 10; p.chem += 5; }},
              {text: "Pedir a tus fans que lo saboteen a él (+20 Fama, -20 Química)", action: () => { p.fame += 20; p.chem -= 20; }} ], 'rival_7');
            eventFired = true;
        }

        if (p.fase === 2 && nbaMatches === 60 && !this.events.includes('lebron_respect')) {
            this.trigger("👑 EL REY TE OBSERVA", "LeBron James asiente con la cabeza desde la grada en señal de respeto tras tu gran jugada.",
            [ { text: "Señalarle desafiante (+15 Fama, -15 Quím)", action: () => { p.fame += 15; p.chem -= 15; } },
              { text: "Agachar la cabeza y defender (+5 Def, +10 Quím)", action: () => { p.def += 5; p.chem += 10; } } ], 'lebron_respect');
            eventFired = true;
        }

        // TRAMA RIVAL 8
        if (p.fase === 2 && nbaMatches === 70 && !this.events.includes('rival_8')) {
            this.trigger(`⚔️ RIVALIDAD: LAS CHISPAS VUELAN`, 
            `¡Tensión máxima! En una lucha por el rebote, ${p.rivalName} y tú acabáis empujándoos brutalmente. Los árbitros os pitan doble técnica. Sus compañeros van a defenderle, ¿y los tuyos?`, 
            [ {text: "Calmarte y pedir disculpas al equipo (+20 Química, -5 Fama)", action: () => { p.chem += 20; p.fame -= 5; }},
              {text: "Buscar la pelea física (+15 Físico, -30 Química, Sanción económica)", action: () => { p.fisico += 15; p.chem -= 30; p.money = Math.max(0, p.money - 5000); }} ], 'rival_8');
            eventFired = true;
        }

        if (p.fase === 2 && nbaMatches === 80 && !this.events.includes('documental')) {
            this.trigger("🎬 THE LAST DANCE 2.0", "Netflix te ofrece 10.000€ por grabarte 24/7.",
            [ { text: "Aceptar (+10.000€, +15 Fama, -20 Quím)", action: () => { p.money += 10000; p.fame += 15; p.chem -= 20; } },
              { text: "Rechazar (+10 Quím)", action: () => { p.chem += 10; } } ], 'documental');
            eventFired = true;
        }

        // TRAMA RIVAL 9
        if (p.fase === 2 && nbaMatches === 100 && !this.events.includes('rival_9')) {
            this.trigger(`⚔️ RIVALIDAD: LA CAÍDA`, 
            `${p.rivalName} ha sufrido una fea lesión de rodilla y estará fuera varias semanas. Todo el mundo del baloncesto manda mensajes de apoyo. ¿Qué haces tú?`, 
            [ {text: "Mandarle un mensaje privado sincero de apoyo (+15 Química, Inicia Deshielo)", action: () => { p.chem += 15; }},
              {text: "No decir nada. Es el karma (+10 Fama, -10 Química)", action: () => { p.fame += 10; p.chem -= 10; }} ], 'rival_9');
            eventFired = true;
        }

        if (p.fase === 2 && nbaMatches === 110 && !this.events.includes('agente_nuevo')) {
            this.trigger("👔 EL AGENTE TIBURÓN", "Un superagente de Hollywood te promete el oro y el moro.",
            [ { text: "Contratarlo (+20 Fama, -25 Quím)", action: () => { p.fame += 20; p.chem -= 25; } },
              { text: "Quedarte con el de siempre (+10 Quím)", action: () => { p.chem += 10; } } ], 'agente_nuevo');
            eventFired = true;
        }

        // TRAMA RIVAL 10
        if (p.fase === 2 && nbaMatches === 125 && !this.events.includes('rival_10')) {
            this.trigger(`⚔️ RIVALIDAD: BATALLA POR EL MVP`, 
            `La carrera por el MVP está entre tú y ${p.rivalName}. En un programa nacional de TV, él declara: "Si los periodistas saben de baloncesto de verdad, me lo darán a mí. Lo suyo es pura fachada."`, 
            [ {text: "Ignorar el ruido y jugar tu mejor basket (+10 a todos los Stats, -5 Fama)", action: () => { p.tiro+=10; p.fisico+=10; p.manejo+=10; p.def+=10; p.bandeja+=10; p.fame-=5; }},
              {text: "Soltar una bomba mediática contra él (+30 Fama, -20 Química)", action: () => { p.fame += 30; p.chem -= 20; }} ], 'rival_10');
            eventFired = true;
        }

        // ==========================================
        // LA MISIÓN G.O.A.T. Y REDENCIÓN (Final)
        // ==========================================
        if (p.fase === 2 && nbaMatches >= 140 && !this.events.includes('reconciliacion_rival')) {
            this.trigger("🤝 EL PASADO LLAMA", 
            `Han pasado años desde aquella promesa en la pista del barrio. Recibes una llamada de ${p.rivalName}. "Hemos peleado mucho, pero quiero felicitarte por lo que estás logrando. ¿Hacemos las paces?"`,
            [
                { text: "Aceptar sus disculpas (+Cumple Misión GOAT, +20 Química)", action: () => { p.rivalReconciled = true; p.chem += 20; } },
                { text: "Colgarle el teléfono. La guerra sigue (+10 Fama, -20 Química)", action: () => { p.fame += 10; p.chem -= 20; } }
            ], 'reconciliacion_rival');
            eventFired = true;
        }

        if (p.fase === 2 && p.season >= 14 && !this.events.includes('cuerpo_cansado')) {
            this.trigger("🦴 EL PESO DEL TIEMPO", "Te duelen las rodillas. Tu cuerpo ya no es el de un chaval de 20 años.",
            [ { text: "Gastar en Crioterapia de choque (-10.000€)", action: () => { if(p.money>=10000) p.money-=10000; else p.fisico-=10; } },
              { text: "Jugar más inteligente (-10 Fis, +10 Tiro, +10 Man)", action: () => { p.fisico -= 10; p.tiro += 10; p.manejo += 10; } } ], 'cuerpo_cansado');
            eventFired = true;
        }

        // Lanzar eventos aleatorios solo si NO ha saltado ningún evento de historia principal en este turno (15% probabilidad)
        if (!eventFired && Math.random() > 0.85) {
            this.lanzarEventoAleatorio();
        }
    }
};