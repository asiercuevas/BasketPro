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
            { text: "ARROGANCIA (Soy el mejor) [-2 Fama, +1 Viralidad por ego]", action: () => { p.fame -= 2; p.viralidad += 1; } }
        ], 'flash_' + Date.now());
    },

    // ---------------------------------------------------------
    // EVENTOS ALEATORIOS (Más de 20, se repiten con ID dinámico)
    // ---------------------------------------------------------
    lanzarEventoAleatorio: function() {
        let pool = [
            { t: "📸 FAN PESADO", d: "Estás cenando y un fan muy pesado te pide una foto mientras comes. Es la quinta vez que te interrumpe.",
              o: [{ text: "Sonreír y hacerte la foto (+2 Fama, -1 Viralidad)", action: () => { p.fame += 2; p.viralidad -= 1; } },
                  { text: "Decirle educadamente que te deje cenar (-1 Fama, +1 Química)", action: () => { p.fame -= 1; p.chem += 1; } }]},
            { t: "✈️ VUELO RETRASADO", d: "El vuelo del equipo se ha retrasado 6 horas. Estáis atrapados en el aeropuerto.",
              o: [{ text: "Dormir en el suelo (-5 Felicidad)", action: () => { p.felicidad = Math.max(0, p.felicidad - 5); } },
                  { text: "Jugar a las cartas con el equipo (+5 Química, -2 Felicidad)", action: () => { p.chem = Math.min(100, p.chem+5); p.felicidad -= 2; } }]},
            { t: "📰 RUMOR FALSO", d: "Un portal de noticias inventa que te peleaste con el entrenador en el último entreno.",
              o: [{ text: "Desmentirlo en X/Twitter (+1 Fama)", action: () => { p.fame += 1; } },
                  { text: "Ignorarlo, el vestuario sabe la verdad (+3 Química)", action: () => { p.chem = Math.min(100, p.chem+3); } }]},
            { t: "🍔 CENA TRAMPA", d: "El equipo ha pedido comida rápida gigante para celebrar. Huele increíble.",
              o: [{ text: "Comer como si no hubiera un mañana (-1 Viralidad, +4 Química)", action: () => { p.viralidad = Math.max(0, p.viralidad - 1); p.chem = Math.min(100, p.chem+4); } },
                  { text: "Comer tu ensalada triste (+2 Felicidad, -2 Química)", action: () => { p.felicidad += 2; p.chem -= 2; } }]},
            { t: "👟 ZAPATILLAS NUEVAS", d: "Te han enviado unas zapatillas en fase de pruebas. Son bonitas pero te aprietan un poco.",
              o: [{ text: "Jugar con ellas por la foto (+2 Fama, -5 Felicidad)", action: () => { p.fame += 2; p.felicidad -= 5; } },
                  { text: "Usar las viejas confiables (+1 Química)", action: () => { p.chem += 1; } }]},
            { t: "🎙️ PODCAST VIRAL", d: "Te invitan a un podcast muy polémico de internet. Promete mucha audiencia.",
              o: [{ text: "Ir y dar grandes titulares (+5 Viralidad, -5 Química)", action: () => { p.viralidad += 5; p.chem -= 5; } },
                  { text: "Rechazarlo educadamente (+2 Química)", action: () => { p.chem += 2; } }]},
            { t: "🏥 VISITA AL HOSPITAL", d: "El club organiza una visita sorpresa a la planta infantil del hospital de la ciudad.",
              o: [{ text: "Ir encantado y regalar camisetas (+5 Fama, +3 Química)", action: () => { p.fame += 5; p.chem = Math.min(100, p.chem+3); } }]},
            { t: "🎮 NOCHE DE CONSOLA", d: "Varios compañeros están jugando online hasta las 4 AM. Te invitan a la partida.",
              o: [{ text: "Jugar hasta el amanecer (+5 Química, -5 Felicidad)", action: () => { p.chem = Math.min(100, p.chem+5); p.felicidad -= 5; } },
                  { text: "Irte a dormir (+5 Felicidad, -2 Química)", action: () => { p.felicidad += 5; p.chem -= 2; } }]},
            { t: "😡 FAN TÓXICO", d: "Un aficionado rival te insulta gravemente desde la primera fila mientras sacas de banda.",
              o: [{ text: "Guiñarle el ojo y sonreír (+3 Viralidad)", action: () => { p.viralidad += 3; } },
                  { text: "Encararte con él (-3 Fama, +2 Viralidad por polémica)", action: () => { p.fame -= 3; p.viralidad += 2; } }]},
            { t: "💸 COMPAÑERO EN APUROS", d: "Un compañero novato ha gastado de más y te pide 500€ prestados hasta cobrar.",
              o: [{ text: "Prestarle el dinero (-500€, +8 Química)", action: () => { if(p.money >= 500) { p.money -= 500; p.chem = Math.min(100, p.chem+8); } else { p.chem -= 2; } } },
                  { text: "Decirle que debe ser responsable (-3 Química)", action: () => { p.chem -= 3; } }]},
            { t: "📺 DECLARACIONES DE LEYENDA", d: "Una vieja gloria del baloncesto critica a tu generación diciendo que sois blandos.",
              o: [{ text: "Darle la razón y ser humilde (+2 Química)", action: () => { p.chem += 2; } },
                  { text: "Responderle y defender a los tuyos (+3 Viralidad, -2 Química)", action: () => { p.viralidad += 3; p.chem -= 2; } }]},
            { t: "🤑 MICRO-PATROCINIO", d: "Un restaurante local te ofrece comida gratis todo el mes a cambio de un post en redes.",
              o: [{ text: "Aceptar (+1 Viralidad, +50€)", action: () => { p.viralidad += 1; p.money += 50; } },
                  { text: "Ignorarlo, estás a otro nivel (+0)", action: () => {} }]},
            { t: "👕 ROBO EN EL VESTUARIO", d: "Vas a cambiarte y alguien te ha escondido la ropa de calle. ¡Es una broma del equipo!",
              o: [{ text: "Reírte de la broma (+5 Química)", action: () => { p.chem = Math.min(100, p.chem+5); } },
                  { text: "Enfadarte y buscar al culpable (-5 Química)", action: () => { p.chem -= 5; } }]},
            { t: "🔥 LIDERAZGO NECESARIO", d: "El equipo lleva una mala semana de entrenamientos. Falta energía.",
              o: [{ text: "Dar una charla motivacional (+5 Química Si Fama > 30)", action: () => { if(p.fame>30) p.chem+=5; else p.chem-=2; } },
                  { text: "Predicar con el ejemplo (Callar y entrenar) (+5 Felicidad)", action: () => { p.felicidad += 5; } }]},
            { t: "🚗 PINCHAZO EN LA RUEDA", d: "Vas tarde al pabellón porque has pinchado una rueda.",
              o: [{ text: "Correr los últimos 2km (-5 Felicidad, no llegas tarde)", action: () => { p.felicidad -= 5; } },
                  { text: "Esperar a la grúa y llegar tarde (-5 Química)", action: () => { p.chem -= 5; } }]},
            { t: "🤳 CAZADO EN LA CALLE", d: "Un paparazzi te graba saliendo despeinado de una panadería.",
              o: [{ text: "Reírte de ti mismo en redes (+3 Viralidad)", action: () => { p.viralidad += 3; } }]},
            { t: "🧼 DUCHAS FRÍAS", d: "Se ha roto el calentador de agua del pabellón. El agua sale helada.",
              o: [{ text: "Ducharte como un espartano (+2 Felicidad)", action: () => { p.felicidad += 2; } },
                  { text: "Irte sin ducharte (-2 Fama)", action: () => { p.fame -= 2; } }]},
            { t: "🎬 CAMEOS", d: "Te ofrecen salir 5 segundos en una serie de televisión famosa.",
              o: [{ text: "Aceptar (+5 Viralidad, -2 Química por faltar al entreno)", action: () => { p.viralidad += 5; p.chem -= 2; } },
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
        // 🚨 NUEVO: EVENTOS DINÁMICOS DEL RIVAL 🚨
        // Estos dependen de tu rendimiento actual, rachas, fama o trofeos.
        // ==========================================

        // 1. MALA RACHA DE DERROTAS
        if (p.stats.lossStreak >= 3 && !p.rivalReconciled && !this.events.includes('dyn_rival_loss_streak')) {
            this.trigger("📰 BURLA EN LA PRENSA (MALA RACHA)",
            `Tu equipo lleva 3 derrotas seguidas. La prensa local le pregunta a ${p.rivalName} por tu bache y él responde riendo: "No me sorprende que pierdan, el chico nunca tuvo madera de líder."`,
            [ { text: "Ignorarlo y centrarte en ganar (+5 Química)", action: () => { p.chem += 5; } },
              { text: "Atacar a tus compañeros por no defender (-15 Química, +5 Viralidad)", action: () => { p.chem -= 15; p.viralidad += 5; } } ], 'dyn_rival_loss_streak');
            return;
        }

        // 2. SELECCIÓN AL ALL-STAR
        if (p.allStars > 0 && !p.rivalReconciled && !this.events.includes('dyn_rival_allstar')) {
            this.trigger("⭐ LA ENVIDIA DEL ALL-STAR",
            `¡Has sido elegido para el All-Star! ${p.rivalName} publica en sus redes: "El All-Star se ha convertido en un concurso de popularidad, ya no importa el talento real."`,
            [ { text: "Retuitear con un emoji de payaso (+8 Viralidad, -5 Química)", action: () => { p.viralidad += 8; p.chem -= 5; } },
              { text: "No responder y disfrutar de tu logro (+5 Felicidad, +2 Fama)", action: () => { p.felicidad = Math.min(100, p.felicidad + 5); p.fame += 2; } } ], 'dyn_rival_allstar');
            return;
        }

        // 3. OFERTA DE TV CONJUNTA (Requiere alta fama)
        if (p.fame >= 40 && p.season >= 2 && !p.rivalReconciled && !this.events.includes('dyn_rival_tv')) {
            this.trigger("🎬 OFERTA DE TELEVISIÓN TÓXICA",
            `Una marca deportiva internacional te ofrece 1.500€ por protagonizar un spot. Pero hay trampa: el guion exige que salgas bromeando y dándote un abrazo con ${p.rivalName}.`,
            [ { text: "Aceptar, el dinero manda (+1500€, +10 Viralidad, -15 Felicidad)", action: () => { p.money += 1500; p.viralidad += 10; p.felicidad = Math.max(0, p.felicidad - 15); } },
              { text: "Rechazar por principios (+5 Química, +10 Felicidad)", action: () => { p.chem += 5; p.felicidad = Math.min(100, p.felicidad + 10); } } ], 'dyn_rival_tv');
            return;
        }

        // 4. GUERRA VIRAL (Si tu viralidad es alta)
        if (p.viralidad >= 30 && !p.rivalReconciled && !this.events.includes('dyn_rival_viral')) {
            this.trigger("📱 GUERRA DE INFLUENCERS",
            `Tus redes sociales están explotando. ${p.rivalName} sube un vídeo imitándote de forma ridícula y burlándose de tus patrocinios. El vídeo se ha hecho súper viral.`,
            [ { text: "Subir un vídeo enseñando tus trofeos (+10 Fama, -5 Química)", action: () => { p.fame += 10; p.chem -= 5; } },
              { text: "Hacer un directo ignorándole (+5 Química, -2 Viralidad)", action: () => { p.chem += 5; p.viralidad = Math.max(0, p.viralidad - 2); } } ], 'dyn_rival_viral');
            return;
        }

        // 5. GASTAR SUELDO / LUJO
        if (p.money >= 50000 && !p.rivalReconciled && !this.events.includes('dyn_rival_dinero')) {
            this.trigger("💸 EL PRECIO DE LA FAMA",
            `${p.rivalName} aparece en un podcast presumiendo de su nuevo coche deportivo y lanza una pulla: "Algunos prefieren ahorrar porque saben que su carrera será corta".`,
            [ { text: "Gastar 10.000€ en una cadena de diamantes para callarle (+15 Viralidad)", action: () => { p.money -= 10000; p.viralidad += 15; } },
              { text: "Pasar del tema, tu cuenta bancaria habla sola (+5 Felicidad)", action: () => { p.felicidad = Math.min(100, p.felicidad + 5); } } ], 'dyn_rival_dinero');
            return;
        }

        // 6. EL ANILLO DE CAMPEÓN
        if (p.rings > 0 && !p.rivalReconciled && !this.events.includes('dyn_rival_ring')) {
            this.trigger("💍 LA SOMBRA DEL CAMPEÓN",
            `¡Tienes un anillo! Durante la rueda de prensa de celebración, un periodista te pregunta si te acuerdas de los que dudaron de ti desde el barrio, refiriéndose claramente a ${p.rivalName}.`,
            [ { text: "'No pienso en los perdedores hoy' (+15 Viralidad, -10 Química)", action: () => { p.viralidad += 15; p.chem -= 10; } },
              { text: "'El anillo es de todo mi equipo' (+20 Química, +5 Fama)", action: () => { p.chem = Math.min(100, p.chem + 20); p.fame += 5; } } ], 'dyn_rival_ring');
            return;
        }

        // ==========================================
        // FASE 0: LIGA JUNIOR (Los orígenes)
        // ==========================================
        if (totalMatches >= 1 && p.fase === 0 && !this.events.includes('inicio')) {
            this.trigger("LA PROMESA DEL BARRIO", 
            `El olor a reflex y goma gastada inunda el pabellón. Tú y ${p.rivalName} os ponéis la camiseta. Él te choca el puño: "Oye, uno de los dos va a llegar a la NBA y sacará a su familia de este agujero. Que gane el mejor."`, 
            [{text: "Sellar el pacto (+2 Fama, +5 Química)", action: () => { p.fame += 2; p.chem += 5; }}], 'inicio');
            return;
        }

        if (totalMatches >= 2 && p.fase === 0 && !this.events.includes('zapatillas_rotas')) {
            this.trigger("ZAPATILLAS ROTAS", "En pleno contraataque, la suela de tu zapatilla izquierda se despega. No tienes dinero para unas nuevas.", 
            [ {text: "Pegarlas con cinta (-5 Felicidad, +5 Quím)", action: () => { p.felicidad -= 5; p.chem += 5; }},
              {text: "Pedir prestadas al banquillo (+5 Felicidad, -5 Quím)", action: () => { p.felicidad += 5; p.chem -= 5; }} ], 'zapatillas_rotas');
            return;
        }

        if (totalMatches >= 5 && p.fase === 0 && !this.events.includes('rival_1')) {
            this.trigger(`⚔️ RIVALIDAD: EL GOLPE`, 
            `En un partido de entrenamiento, ${p.rivalName} te da un codazo muy duro al penetrar a canasta. Te caes al suelo y él te mira por encima del hombro riéndose. "Levanta, llorón".`, 
            [ {text: "Devolvérsela en la siguiente jugada (-10 Quím, +2 Viralidad)", action: () => { p.viralidad += 2; p.chem -= 10; }},
              {text: "Callar y seguir jugando limpio (+5 Fama, +5 Felicidad)", action: () => { p.felicidad += 5; p.fame += 5; }} ], 'rival_1');
            return;
        }

        if (totalMatches >= 8 && p.fase === 0 && !this.events.includes('presion_padres')) {
            this.trigger("PRESIÓN EN CASA", `Tus padres te sientan a hablar. "El baloncesto está muy bien, pero tus notas están bajando. O apruebas, o te borramos del equipo".`, 
            [ {text: "Pasar la noche estudiando (-5 Felicidad, +5 Química)", action: () => { p.felicidad -= 5; p.chem += 5; }},
              {text: "Escaparte por la ventana a entrenar (+5 Viralidad, -5 Quím)", action: () => { p.viralidad += 5; p.chem -= 5; }} ], 'presion_padres');
            return;
        }

        if (totalMatches >= 11 && p.fase === 0 && !this.events.includes('rival_2')) {
            this.trigger(`⚔️ RIVALIDAD: LA PRENSA LOCAL`, 
            `Un periódico de la ciudad publica un artículo titulado: "${p.rivalName}, la verdadera joya de la corona". Te mencionan de pasada como su "escudero".`, 
            [ {text: "Picarte y jugar a lo chupón en el próximo partido (-15 Quím, +5 Viralidad)", action: () => { p.chem -= 15; p.viralidad += 5; }},
              {text: "Usarlo de motivación silenciosa (+5 Felicidad, -2 Fama)", action: () => { p.felicidad += 5; p.fame -= 2; }} ], 'rival_2');
            return;
        }

        // ==========================================
        // FASE 1: LIGA ACB / PROFESIONAL
        // ==========================================
        if (p.fase === 1 && acbMatches >= 1 && !this.events.includes('debut_acb')) {
            this.trigger("BIENVENIDO A LA ÉLITE", "El salto a la liga profesional es brutal. El entrenador te dice: 'Aquí no eres ninguna estrella todavía. Defiende y pásala.'", 
            [ {text: "Asentir y ser disciplinado (+5 Fama, +10 Quím)", action: () => { p.fame += 5; p.chem += 10; }},
              {text: "Ignorarle y tirar (-15 Quím, +5 Viralidad)", action: () => { p.chem -= 15; p.viralidad += 5; }} ], 'debut_acb');
            return;
        }

        if (p.fase === 1 && acbMatches >= 3 && !this.events.includes('rival_3')) {
            this.trigger(`⚔️ RIVALIDAD: EL MENSAJE`, 
            `Te llega un WhatsApp de ${p.rivalName}: "He visto tu debut en la ACB por la tele. Vas a ritmo de tortuga. Tienes suerte de no jugar contra mí todavía".`, 
            [ {text: "Bloquear su número (+5 Química)", action: () => { p.chem += 5; }},
              {text: "Responder: 'Míralo bien, estaré en lo más alto' (+5 Fama, -2 Química)", action: () => { p.fame += 5; p.chem -= 2; }} ], 'rival_3');
            return;
        }

        if (p.fase === 1 && acbMatches >= 10 && !this.events.includes('tavares')) {
            this.trigger("⛰️ EL GIGANTE BLANCO", "Edy Tavares te dice: 'Tienes talento, chico, pero te comerán vivo si no juegas en equipo'.",
            [ { text: "Pedirle ayuda (+5 Fama, +10 Quím)", action: () => { p.fame += 5; p.chem += 10; } },
              { text: "Decirle que eres mejor (-10 Fama, +5 Viralidad)", action: () => { p.fame -= 10; p.viralidad += 5; } } ], 'tavares');
            return;
        }

        if (p.fase === 1 && acbMatches >= 18 && !this.events.includes('rival_4')) {
            this.trigger(`⚔️ RIVALIDAD: CARA A CARA`, 
            `Te toca enfrentarte directamente a ${p.rivalName}. En la línea de tiros libres se te acerca y te susurra: "No perteneces a esta liga. Estás temblando".`, 
            [ {text: "Reírte en su cara y estar tranquilo (+5 Felicidad, +5 Fama)", action: () => { p.felicidad += 5; p.fame += 5; }},
              {text: "Dejar que te afecte y enfadarte (-5 Felicidad, +5 Viralidad por pelea)", action: () => { p.felicidad -= 5; p.viralidad += 5; }} ], 'rival_4');
            return;
        }

        if (p.fase === 1 && acbMatches >= 25 && !this.events.includes('novatada_acb')) {
            this.trigger("LA NOVATADA", "Tu ropa de calle está empapada en agua. Los veteranos se ríen.",
            [ { text: "Reírte con ellos (+15 Quím, -2 Fama)", action: () => { p.chem += 15; p.fame -= 2; } },
              { text: "Encararte con el capitán (-20 Quím, +5 Fama)", action: () => { p.chem -= 20; p.fame += 5; } } ], 'novatada_acb');
            return;
        }

        if (p.fase === 1 && acbMatches >= 35 && !this.events.includes('rival_5')) {
            this.trigger(`⚔️ RIVALIDAD: LA TRAMPA`, 
            `${p.rivalName} te invita de forma inesperada a la zona VIP de una discoteca la noche antes de vuestro partido. "Venga, por los viejos tiempos, solo un rato".`, 
            [ {text: "Ir a la fiesta (-15 Felicidad, -15 Química, +10 Fama)", action: () => { p.felicidad -= 15; p.chem -= 15; p.fame += 10; }},
              {text: "Quedarte en casa durmiendo (+15 Felicidad, +5 Química)", action: () => { p.felicidad += 15; p.chem += 5; }} ], 'rival_5');
            return;
        }

        // ==========================================
        // FASE 2: LA NBA (El Camino a Leyenda)
        // ==========================================
        if (p.fase === 2 && nbaMatches >= 1 && !this.events.includes('debut_nba')) {
            this.trigger("🇺🇸 THE AMERICAN DREAM", "Luces, cámaras, espectáculo. Estás en la NBA.", 
            [ {text: "Ir a por todas (+5 Fama, +2 Viralidad)", action: () => { p.fame += 5; p.viralidad += 2; }},
              {text: "Centrarte en el equipo (+5 Química, +5 Felicidad)", action: () => { p.chem += 5; p.felicidad += 5; }} ], 'debut_nba');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 8 && !this.events.includes('rival_6')) {
            this.trigger(`⚔️ RIVALIDAD: EL MENOSPRECIO`, 
            `Ambos habéis llegado a la NBA. En una rueda de prensa de su equipo, le preguntan por ti a ${p.rivalName}. Él responde: "¿Quién? No me preocupo por jugadores de equipos mediocres".`, 
            [ {text: "Hacer un tweet incendiario respondiéndole (+15 Fama, -10 Química)", action: () => { p.fame += 15; p.chem -= 10; }},
              {text: "Responder ignorándolo (+5 Felicidad, +5 Química)", action: () => { p.felicidad += 5; p.chem += 5; }} ], 'rival_6');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 30 && !this.events.includes('marca_zapatillas')) {
            this.trigger("👟 LA FIRMA DE TUS SUEÑOS", "Una gran marca deportiva te ofrece tus propias zapatillas (Signature Shoes).",
            [ { text: "Firmar el contrato (+20 Viralidad, +10 Fama)", action: () => { p.viralidad += 20; p.fame += 10; } },
              { text: "Rechazar por otra marca underground (+5 Viralidad, +10 Quím)", action: () => { p.viralidad += 5; p.chem += 10; } } ], 'marca_zapatillas');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 45 && !this.events.includes('rival_7')) {
            this.trigger(`⚔️ RIVALIDAD: EL BOICOT`, 
            `Empiezan las votaciones para el All-Star. ${p.rivalName} hace una campaña enorme en sus redes sociales pidiendo explícitamente a sus fans que NO te voten a ti para que él pueda ser titular.`, 
            [ {text: "Criticar su inmadurez en directo (+10 Fama, +5 Química)", action: () => { p.fame += 10; p.chem += 5; }},
              {text: "Pedir a tus fans que lo saboteen a él (+20 Viralidad, -20 Química)", action: () => { p.viralidad += 20; p.chem -= 20; }} ], 'rival_7');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 60 && !this.events.includes('lebron_respect')) {
            this.trigger("👑 EL REY TE OBSERVA", "LeBron James asiente con la cabeza desde la grada en señal de respeto tras tu gran jugada.",
            [ { text: "Señalarle desafiante (+15 Fama, -15 Quím)", action: () => { p.fame += 15; p.chem -= 15; } },
              { text: "Agachar la cabeza y jugar en equipo (+5 Felicidad, +10 Quím)", action: () => { p.felicidad += 5; p.chem += 10; } } ], 'lebron_respect');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 70 && !this.events.includes('rival_8')) {
            this.trigger(`⚔️ RIVALIDAD: LAS CHISPAS VUELAN`, 
            `¡Tensión máxima! En una lucha por el rebote, ${p.rivalName} y tú acabáis empujándoos brutalmente. Los árbitros os pitan doble técnica. Sus compañeros van a defenderle, ¿y los tuyos?`, 
            [ {text: "Calmarte y pedir disculpas al equipo (+20 Química, -5 Fama)", action: () => { p.chem += 20; p.fame -= 5; }},
              {text: "Buscar la pelea física (+15 Viralidad, -30 Química, Multa)", action: () => { p.viralidad += 15; p.chem -= 30; p.money = Math.max(0, p.money - 5000); }} ], 'rival_8');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 80 && !this.events.includes('documental')) {
            this.trigger("🎬 THE LAST DANCE 2.0", "Netflix te ofrece 10.000€ por grabarte 24/7.",
            [ { text: "Aceptar (+10.000€, +15 Fama, -20 Quím)", action: () => { p.money += 10000; p.fame += 15; p.chem -= 20; } },
              { text: "Rechazar (+10 Quím)", action: () => { p.chem += 10; } } ], 'documental');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 100 && !this.events.includes('rival_9')) {
            this.trigger(`⚔️ RIVALIDAD: LA CAÍDA`, 
            `${p.rivalName} ha sufrido una fea lesión de rodilla y estará fuera varias semanas. Todo el mundo del baloncesto manda mensajes de apoyo. ¿Qué haces tú?`, 
            [ {text: "Mandarle un mensaje sincero de apoyo (+15 Química, Inicia Deshielo)", action: () => { p.chem += 15; }},
              {text: "No decir nada. Es el karma (+10 Fama, -10 Química)", action: () => { p.fame += 10; p.chem -= 10; }} ], 'rival_9');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 110 && !this.events.includes('agente_nuevo')) {
            this.trigger("👔 EL AGENTE TIBURÓN", "Un superagente de Hollywood te promete el oro y el moro.",
            [ { text: "Contratarlo (+20 Viralidad, -25 Quím)", action: () => { p.viralidad += 20; p.chem -= 25; } },
              { text: "Quedarte con el de siempre (+10 Quím)", action: () => { p.chem += 10; } } ], 'agente_nuevo');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 125 && !this.events.includes('rival_10')) {
            this.trigger(`⚔️ RIVALIDAD: BATALLA MEDIÁTICA`, 
            `En un programa nacional de TV, ${p.rivalName} declara: "Los periodistas aman a este chico por la prensa que mueve, no por su talento real."`, 
            [ {text: "Ignorar el ruido (+5 Felicidad, +5 Química)", action: () => { p.felicidad += 5; p.chem += 5; }},
              {text: "Soltar una bomba mediática contra él (+30 Viralidad, -20 Química)", action: () => { p.viralidad += 30; p.chem -= 20; }} ], 'rival_10');
            return;
        }

        if (p.fase === 2 && nbaMatches >= 140 && !this.events.includes('reconciliacion_rival')) {
            this.trigger("🤝 EL PASADO LLAMA", 
            `Han pasado años desde aquella promesa en la pista del barrio. Recibes una llamada de ${p.rivalName}. "Hemos peleado mucho, pero quiero felicitarte por lo que estás logrando. ¿Hacemos las paces?"`,
            [
                { text: "Aceptar sus disculpas (+20 Química, Historia Cerrada)", action: () => { p.rivalReconciled = true; p.chem += 20; } },
                { text: "Colgarle el teléfono. La guerra sigue (+10 Fama, -20 Química)", action: () => { p.fame += 10; p.chem -= 20; } }
            ], 'reconciliacion_rival');
            return;
        }

        // ==========================================
        // EVENTOS DE PASO DE ANTORCHA Y DINASTÍAS (Largo Plazo)
        // ==========================================
        if (p.season === 5 && !this.events.includes('cambio_generacional')) {
            this.trigger("👑 EL CAMBIO DE ERA", 
            "Las viejas leyendas de la liga están anunciando sus retiros. Los periodistas afirman que el baloncesto necesita una nueva cara visible para la próxima década. Todas las miradas se centran en la nueva generación de estrellas.", 
            [ { text: "Asumir la presión mediática (+10 Viralidad, -5 Química)", action: () => { p.viralidad += 10; p.chem -= 5; } },
              { text: "Trabajar en silencio (+5 Felicidad, +5 Química)", action: () => { p.felicidad += 5; p.chem += 5; } } ], 'cambio_generacional');
            eventFired = true;
        }

        if (p.season === 10 && !this.events.includes('nueva_regla')) {
            this.trigger("⚖️ CAMBIO DE REGLAS EN LA LIGA", 
            "El comité de competición acaba de endurecer las faltas defensivas. A partir de ahora, jugar agresivo será más arriesgado, favoreciendo a los atacantes habilidosos.", 
            [ { text: "Adaptar tu juego (+10 Fama, +5 Felicidad)", action: () => { p.fame += 10; p.felicidad += 5; } },
              { text: "Protestar la norma (+5 Viralidad, Sanción Económica)", action: () => { p.viralidad += 5; p.money = Math.max(0, p.money - 3000); } } ], 'nueva_regla');
            eventFired = true;
        }

        if (p.season === 15 && !this.events.includes('paso_antorcha')) {
            this.trigger("🔥 EL PASO DE LA ANTORCHA", 
            "Un novato prodigio ha llegado a la liga. Te busca al terminar el partido y te pide consejo. Te recuerda muchísimo a ti mismo cuando empezaste.", 
            [ { text: "Tomarlo bajo tu tutela (+20 Química, +10 Fama)", action: () => { p.chem += 20; p.fame += 10; } },
              { text: "Darle una lección de realidad en la pista (+10 Viralidad, -15 Química)", action: () => { p.viralidad += 10; p.chem -= 15; } } ], 'paso_antorcha');
            eventFired = true;
        }

        // Lanzar eventos aleatorios solo si NO ha saltado ningún evento principal (15% probabilidad)
        if (!eventFired && Math.random() > 0.85) {
            this.lanzarEventoAleatorio();
        }
    }
};