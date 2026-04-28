const StorySystem = {
    events: [],

    // FORMATO CLARO: Se integra en el historial del juego (chat) como en las capturas
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
        
        // Bloqueamos acciones (oculta botones inferiores) para forzar la decisión en el log
        let act = document.getElementById('actions');
        if(act) act.style.display = 'none';
        
        options.forEach((opt, idx) => {
            document.getElementById(`st-btn-${eventId}-${idx}`).onclick = function() {
                opt.action();
                document.getElementById(`story-${eventId}`).innerHTML = `<span style="color:gold; font-size:0.7em;">✅ Decisión tomada: ${opt.text.split('(')[0].trim()}</span>`;
                
                // Restaura los botones inferiores
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
            { text: "HUMILDAD (Elogiar a los compañeros) [+1 Fama, +2 Química]", action: () => { p.fame += 1; p.chem += 2; } },
            { text: "ARROGANCIA (Soy el mejor) [-2 Fama, +1 Físico por ego]", action: () => { p.fame -= 2; p.fisico = Math.min(100, p.fisico+1); } }
        ], 'flash_' + Date.now());
    },

    concursoTriples: function() {
        this.trigger("🏀 ALL-STAR: CONCURSO DE TRIPLES", 
        `Has sido seleccionado para el Concurso de Triples. Todo depende de tu estadística de Tiro (Actualmente: ${p.tiro}). Intenta encestar la mayor cantidad de balones.`,
        [
            { text: "¡LANZAR RÁFAGA!", action: () => { 
                let score = Math.floor(Math.random() * 10) + Math.floor(p.tiro / 6);
                if (score >= 20) {
                    p.fame += 5; p.money += 2000; p.chem += 5;
                    alert(`¡HAS GANADO EL CONCURSO CON ${score} PUNTOS!\n\nTe llevas el trofeo, +5 de Fama, +5 Química y 2.000€.`);
                } else {
                    p.fame -= 1;
                    alert(`Te has quedado en ${score} puntos. Fuiste eliminado en la primera ronda.\n\nPierdes -1 de Fama.`);
                }
            }}
        ], '3pt_contest_' + p.season);
    },

    concursoMates: function() {
        this.trigger("💥 ALL-STAR: CONCURSO DE MATES", 
        `Te invitan al espectacular Concurso de Mates. Tu éxito depende de tu estadística de Físico (Actualmente: ${p.fisico}). Tienes que hacer vibrar a la grada y convencer a los jueces.`,
        [
            { text: "¡VOLAR HACIA EL ARO!", action: () => { 
                let score = Math.floor(Math.random() * 10) + Math.floor(p.fisico / 6);
                if (score >= 20) {
                    p.fame += 6; p.money += 2500; p.chem += 5;
                    alert(`¡MATE HISTÓRICO! Los jueces te dan un 50.\n\n+6 de Fama, +5 Química y 2.500€.`);
                } else {
                    p.fame -= 1;
                    alert(`Has fallado el mate en el último intento. El público abuchea levemente.\n\nPierdes -1 de Fama.`);
                }
            }}
        ], 'dunk_contest_' + p.season);
    },

    checkEvents: function() {
        let totalMatches = p.history.junior.matches + p.history.acb.matches + p.history.nba.matches + p.stats.matches;
        let acbMatches = p.history.acb.matches + (p.fase === 1 ? p.stats.matches : 0);
        let nbaMatches = p.history.nba.matches + (p.fase === 2 ? p.stats.matches : 0);

        // ==========================================
        // FASE 0: LIGA JUNIOR (Los orígenes)
        // ==========================================
        if (totalMatches === 0 && !this.events.includes('inicio')) {
            this.trigger("LA PROMESA DEL BARRIO", 
            `El olor a reflex y goma gastada inunda el pabellón. Tú y ${p.rivalName} os ponéis la camiseta de entrenamiento. Él te choca el puño y dice: "Oye, uno de los dos va a llegar a la NBA y sacará a su familia de este agujero. Que gane el mejor, hermano."`, 
            [{text: "Sellar el pacto (+2 Fama, +5 Química)", action: () => { p.fame += 2; p.chem += 5; }}], 'inicio');
        }

        if (totalMatches === 2 && p.fase === 0 && !this.events.includes('zapatillas_rotas')) {
            this.trigger("ZAPATILLAS ROTAS", 
            `En pleno contraataque, la suela de tu zapatilla izquierda se despega por completo. No tienes dinero para unas nuevas y el partido está ajustado.`, 
            [
                {text: "Pegarlas con cinta y seguir jugando (-2 Físico, +5 Química)", action: () => { p.fisico -= 2; p.chem += 5; }},
                {text: "Pedir unas prestadas al banquillo (+2 Físico, -5 Química)", action: () => { p.fisico += 2; p.chem -= 5; }}
            ], 'zapatillas_rotas');
        }

        if (totalMatches === 4 && p.fase === 0 && !this.events.includes('ojeador_junior')) {
            this.trigger("OJOS EN LA GRADA", 
            `Hay un ojeador del Real Madrid en la grada tomando notas. ${p.rivalName} está acaparando todos los tiros para lucirse. Si quieres llamar la atención tendrás que hacer algo.`, 
            [
                {text: "Pasarle más balones y jugar en equipo (+15 Química, -1 Fama)", action: () => { p.chem += 15; p.fame -= 1; }},
                {text: "Quitarle el balón y tirar tú (+3 Fama, -15 Química)", action: () => { p.chem -= 15; p.fame += 3; }}
            ], 'ojeador_junior');
        }

        if (totalMatches === 6 && p.fase === 0 && !this.events.includes('pelea_barrio')) {
            this.trigger("TENSIÓN EN EL BARRIO", 
            `Volviendo a casa, unos chicos de otro instituto se meten contigo por llevar la chaqueta de tu equipo. Te retan a un 1vs1 apostando 50€.`, 
            [
                {text: "Aceptar el reto y destrozarlos (+50€, +2 Fama)", action: () => { p.money += 50; p.fame += 2; }},
                {text: "Ignorarlos y evitar problemas (+2 Química, -1 Fama)", action: () => { p.chem += 2; p.fame -= 1; }}
            ], 'pelea_barrio');
        }

        if (totalMatches === 8 && p.fase === 0 && !this.events.includes('presion_padres')) {
            this.trigger("PRESIÓN EN CASA", 
            `Tus padres te sientan a hablar. "El baloncesto está muy bien, pero tus notas están bajando. Si no apruebas los exámenes, te borramos del equipo".`, 
            [
                {text: "Pasar la noche estudiando (-3 Físico, +2 Tiro)", action: () => { p.fisico -= 3; p.tiro += 2; }},
                {text: "Escaparte por la ventana para entrenar (+3 Físico, -5 Química)", action: () => { p.fisico += 3; p.chem -= 5; }}
            ], 'presion_padres');
        }

        // ==========================================
        // FASE 1: LIGA ACB / PROFESIONAL
        // ==========================================
        if (p.fase === 1 && acbMatches === 0 && !this.events.includes('debut_acb')) {
            this.trigger("BIENVENIDO A LA ÉLITE", 
            `El salto a la liga profesional es brutal. El ritmo de juego es altísimo. El entrenador te llama a un lado: "Aquí no eres ninguna estrella todavía. Defiende y pásala."`, 
            [
                {text: "Asentir y centrarte en defender (+3 Defensa, +10 Química)", action: () => { p.def += 3; p.chem += 10; }},
                {text: "Ignorarle y buscar tus tiros (-15 Química, +3 Tiro)", action: () => { p.chem -= 15; p.tiro += 3; }}
            ], 'debut_acb');
        }

        if (p.fase === 1 && acbMatches === 5 && !this.events.includes('novatada_acb')) {
            this.trigger("LA NOVATADA", 
            "Llegas al vestuario y toda tu ropa de calle está empapada en agua fría. Los veteranos se están riendo. Es la clásica novatada de la liga.",
            [
                { text: "Reírte con ellos y aguantar (+15 Química, -2 Fama)", action: () => { p.chem += 15; p.fame -= 2; } },
                { text: "Enfadarte y encararte con el capitán (-20 Química, +5 Fama)", action: () => { p.chem -= 20; p.fame += 5; } }
            ], 'novatada_acb');
        }

        if (p.fase === 1 && acbMatches === 10 && !this.events.includes('tavares')) {
            this.trigger("⛰️ EL GIGANTE BLANCO", 
            "Tras un partido duro contra el Madrid, Edy Tavares se te acerca en el túnel. Te saca tres cabezas. 'Tienes talento, chico, pero en esta liga te van a comer vivo si no endureces esa defensa'.",
            [
                { text: "Aceptar su consejo y pedirle ayuda (+5 Defensa, +5 Química)", action: () => { p.def = Math.min(99, p.def+5); p.chem += 5; } },
                { text: "Provocarle y decirle que eres mejor (-10 Fama, +5 Tiro por ego)", action: () => { p.fame -= 10; p.tiro = Math.min(99, p.tiro+5); } }
            ], 'tavares');
        }

        if (p.fase === 1 && acbMatches === 15 && !this.events.includes('entrenador_duro')) {
            this.trigger("😡 LA BRONCA DEL MÍSTER", 
            "El entrenador te grita en un tiempo muerto delante de toda la grada porque no has bajado a defender un contraataque.",
            [
                { text: "Pedir perdón y bajar el culo (+10 Defensa, +5 Química)", action: () => { p.def += 10; p.chem += 5; } },
                { text: "Responderle gritando (-15 Química, +5 Fama)", action: () => { p.chem -= 15; p.fame += 5; } }
            ], 'entrenador_duro');
        }

        if (p.fase === 1 && acbMatches === 20 && !this.events.includes('oferta_rara')) {
            this.trigger("UN PATROCINIO EXTRAÑO", 
            "Una marca de colchones te ofrece 1.000€ si sales en su anuncio de televisión vestido con un pijama de osito. Es dinero fácil, pero podrías ser el hazmerreír.",
            [
                { text: "Hacer el ridículo por dinero (+1000€, -5 Fama, -10 Química)", action: () => { p.money += 1000; p.fame -= 5; p.chem -= 10; } },
                { text: "Rechazar por dignidad (+3 Fama)", action: () => { p.fame += 3; } }
            ], 'oferta_rara');
        }

        // ==========================================
        // FASE 2: LA NBA (El Camino a Leyenda)
        // ==========================================
        if (p.fase === 2 && nbaMatches === 0 && !this.events.includes('debut_nba')) {
            this.trigger("🇺🇸 THE AMERICAN DREAM", 
            `Luces, cámaras, espectáculo. Estás en la NBA. El pabellón es gigantesco. ${p.rivalName} te manda un mensaje de texto: "He visto que has llegado. A ver cuánto duras en mi liga."`, 
            [
                {text: "Responder: Nos vemos en la pista (+3 Fama, +2 Tiro)", action: () => { p.fame += 3; p.tiro += 2; }},
                {text: "Ignorar y centrarte en el partido (+5 Química, +2 Físico)", action: () => { p.chem += 5; p.fisico += 2; }}
            ], 'debut_nba');
        }

        if (p.fase === 2 && nbaMatches === 12 && !this.events.includes('tatum')) {
            this.trigger("☘️ EL RESPETO DE LAS ESTRELLAS", 
            "Jayson Tatum te saluda en el intercambio de camisetas. 'He oído que quieres mi trono y ser el G.O.A.T. Demuéstralo en los Playoffs si es que tu equipo logra llegar'.",
            [
                { text: "Intercambiar camiseta amistosamente (+10 Fama, +5 Química)", action: () => { p.fame += 10; p.chem += 5; } },
                { text: "Retarle a 1vs1 delante de las cámaras (-10 Química, +5 Fama)", action: () => { p.fame += 5; p.chem -= 10; } }
            ], 'tatum');
        }

        if (p.fase === 2 && nbaMatches === 30 && !this.events.includes('marca_zapatillas')) {
            this.trigger("👟 LA FIRMA DE TUS SUEÑOS", 
            "Una gran marca deportiva multinacional quiere sacarte tus propias zapatillas (Signature Shoes). Te ofrecen un contrato espectacular, pero tendrás que asistir a muchas fiestas promocionales.",
            [
                { text: "Firmar el contrato de Zapatillas (Activa Patrocinio, -5 Físico, +10 Fama)", action: () => { p.hasShoe = true; p.fisico -= 5; p.fame += 10; } },
                { text: "Rechazar para centrarte en entrenar (+5 Físico, +10 Química)", action: () => { p.fisico += 5; p.chem += 10; } }
            ], 'marca_zapatillas');
        }

        if (p.fase === 2 && nbaMatches === 60 && !this.events.includes('lebron_respect')) {
            this.trigger("👑 EL REY TE OBSERVA", 
            "Durante un partido televisado a nivel nacional, LeBron James está en primera fila. Acabas de hacer un mate espectacular y él asiente con la cabeza desde la grada en señal de respeto.",
            [
                { text: "Señalarle desafiante tras la canasta (+15 Fama, -15 Química)", action: () => { p.fame += 15; p.chem -= 15; } },
                { text: "Agachar la cabeza y volver a defender (+5 Defensa, +10 Química)", action: () => { p.def += 5; p.chem += 10; } }
            ], 'lebron_respect');
        }

        if (p.fase === 2 && nbaMatches === 80 && !this.events.includes('documental')) {
            this.trigger("🎬 THE LAST DANCE 2.0", 
            "Netflix te ofrece 10.000€ para grabar un documental siguiéndote 24/7. Las cámaras en el vestuario pondrán nerviosos a tus compañeros.",
            [
                { text: "Aceptar el documental (+10.000€, +15 Fama, -20 Química)", action: () => { p.money += 10000; p.fame += 15; p.chem -= 20; } },
                { text: "Rechazar. El vestuario es sagrado (+10 Química)", action: () => { p.chem += 10; } }
            ], 'documental');
        }

        if (p.fase === 2 && nbaMatches === 90 && !this.events.includes('prensa_toxica')) {
            this.trigger("📰 NARRATIVAS DE LA PRENSA", 
            "El principal programa matutino deportivo está diciendo que eres un jugador egoísta que solo busca sus números y que tus compañeros te odian en secreto.",
            [
                { text: "Atacar al periodista en Twitter (-10 Fama, -10 Química)", action: () => { p.fame -= 10; p.chem -= 10; } },
                { text: "Dar 15 asistencias en el próximo partido (+5 Manejo, +20 Química)", action: () => { p.manejo += 5; p.chem += 20; } }
            ], 'prensa_toxica');
        }

        if (p.fase === 2 && nbaMatches === 110 && !this.events.includes('agente_nuevo')) {
            this.trigger("👔 EL AGENTE TIBURÓN", 
            "Un superagente de Hollywood se te acerca. Te promete contratos millonarios y mucha más prensa, pero a tu equipo actual no le gustará nada.",
            [
                { text: "Contratar al superagente (+20 Fama, -25 Química)", action: () => { p.fame += 20; p.chem -= 25; } },
                { text: "Quedarte con tu agente de siempre (+10 Química)", action: () => { p.chem += 10; } }
            ], 'agente_nuevo');
        }

        // ==========================================
        // LA MISIÓN G.O.A.T. Y REDENCIÓN (Final de carrera)
        // ==========================================
        if (p.fase === 2 && nbaMatches === 130 && !this.events.includes('reconciliacion_rival')) {
            this.trigger("🤝 EL PASADO LLAMA", 
            `Han pasado años desde aquella promesa en la pista del barrio. Recibes una llamada de ${p.rivalName}. "Hemos peleado mucho, pero quiero felicitarte por lo que estás logrando. ¿Hacemos las paces?"`,
            [
                { text: "Aceptar sus disculpas (+Cumple Misión GOAT, +20 Química)", action: () => { p.rivalReconciled = true; p.chem += 20; } },
                { text: "Colgarle el teléfono. La guerra sigue (+10 Fama, -20 Química)", action: () => { p.fame += 10; p.chem -= 20; } }
            ], 'reconciliacion_rival');
        }

        if (p.fase === 2 && p.season >= 14 && !this.events.includes('cuerpo_cansado')) {
            this.trigger("🦴 EL PESO DEL TIEMPO", 
            "Te levantas de la cama y te duelen las rodillas de una forma que no conocías. El médico del equipo te dice que tu cuerpo ya no es el de un chaval de 20 años. Tienes que cambiar tu estilo de juego.",
            [
                { text: "Gastar en Crioterapia de choque (-10.000€, Mantiene Físico)", action: () => { if(p.money>=10000) p.money-=10000; else p.fisico-=10; } },
                { text: "Jugar más inteligente, no más duro (-10 Físico, +10 Tiro, +10 Manejo)", action: () => { p.fisico -= 10; p.tiro += 10; p.manejo += 10; } }
            ], 'cuerpo_cansado');
        }

        // ==========================================
        // EVENTOS DINÁMICOS Y DE ESTILO DE VIDA (Random)
        // ==========================================
        
        if (p.hasCar && !this.events.includes('car_story_1') && Math.random() > 0.95) {
            this.trigger("📸 ESCÁNDALO AL VOLANTE", 
            "Te han grabado haciendo un caballito peligroso con tu nuevo deportivo en un semáforo. El vídeo se hace viral y la directiva del equipo está furiosa.",
            [
                { text: "Presumir de ello en Redes Sociales (+5 Fama, -20 Química)", action: () => { p.fame += 5; p.chem -= 20; } },
                { text: "Pedir disculpas públicamente (+10 Química, -2 Fama)", action: () => { p.chem += 10; p.fame -= 2; } }
            ], 'car_story_1');
        }

        if (p.hasHouse && !this.events.includes('robo_mansion') && Math.random() > 0.96) {
            this.trigger("🚨 SUSTO EN CASA", 
            "Mientras jugabas un partido fuera de casa, han entrado a robar en tu mansión. Afortunadamente no había nadie, pero se han llevado cosas de valor.",
            [
                { text: "Pagar seguridad privada extrema (-15.000€)", action: () => { p.money = Math.max(0, p.money - 15000); } },
                { text: "Aceptar las pérdidas y mudarte (-5 Química, -5 Físico)", action: () => { p.chem -= 5; p.fisico -= 5; } }
            ], 'robo_mansion');
        }

        if (p.money >= 50000 && !this.events.includes('inversion_cripto') && Math.random() > 0.97) {
            this.trigger("💸 LA INVERSIÓN DEL VESTUARIO", 
            "Varios compañeros de equipo te intentan convencer para meter 20.000€ en una nueva criptomoneda 'infalible' patrocinada por un influencer.",
            [
                { text: "Invertir los 20.000€ (Riesgo total)", action: () => { 
                    if(Math.random() > 0.5) { alert("¡La moneda se dispara! Has ganado 50.000€."); p.money += 30000; p.chem += 10; }
                    else { alert("Era una estafa. Lo has perdido todo."); p.money -= 20000; p.chem -= 15; }
                }},
                { text: "Rechazar. Eres jugador, no broker (+5 Físico, -5 Química)", action: () => { p.fisico += 5; p.chem -= 5; } }
            ], 'inversion_cripto');
        }

        if (p.money >= 50000 && !this.events.includes('donacion') && Math.random() > 0.95) {
            this.trigger("❤️ NO OLVIDES DE DÓNDE VIENES", 
            "La vieja cancha de tu barrio natal está destrozada. El alcalde te pide una donación de 10.000€ para reformarla por completo y ponerle tu nombre.",
            [
                { text: "Donar el dinero (-10.000€, +10 Fama, +10 Química)", action: () => { p.money -= 10000; p.fame += 10; p.chem += 10; } },
                { text: "Rechazar. Es problema del alcalde (-5 Fama)", action: () => { p.fame -= 5; } }
            ], 'donacion');
        }
    }
};