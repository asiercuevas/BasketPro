const StorySystem = {
    events: [],
    
    checkEvents: function() {
        let totalMatches = p.history.junior.matches + p.history.acb.matches + p.history.nba.matches + p.stats.matches;
        let acbMatches = p.history.acb.matches + (p.fase === 1 ? p.stats.matches : 0);
        let nbaMatches = p.history.nba.matches + (p.fase === 2 ? p.stats.matches : 0);

        // ==========================================
        // CAPÍTULO 1: JUNIOR (Empieza en el partido 0)
        // ==========================================
        if (totalMatches === 0 && !this.events.includes('inicio')) {
            this.trigger("LA PROMESA DEL BARRIO", 
            `El olor a reflex y goma gastada inunda el pabellón. Tú y ${p.rivalName} os ponéis la camiseta de entrenamiento. Él te choca el puño y dice: "Oye, uno de los dos va a llegar a la NBA y sacará a su familia de este agujero. Que gane el mejor, hermano."`, 
            [{text: "Sellar el pacto", action: () => { p.fame += 2; }}], 'inicio');
        }

        if (p.fase === 0 && p.stats.matches === 4 && !this.events.includes('ojeador_junior')) {
            this.trigger("OJOS EN LA GRADA", 
            `Hay un ojeador del Real Madrid en la grada tomando notas. ${p.rivalName} está acaparando todos los tiros para lucirse. Tu madre te mira desde la banda con cara de nervios. ¿Qué haces?`, 
            [
                {text: "Jugar en equipo (+ OVR)", action: () => { p.tiro += 1; p.ovr = Math.round((p.tiro+p.fisico+p.manejo+p.def+p.bandeja)/5); }},
                {text: "Forzar tus tiros (+ Fama)", action: () => { p.fame += 5; }}
            ], 'ojeador_junior');
        }

        // ==========================================
        // CAPÍTULO 2: ACB
        // ==========================================
        if (p.fase === 1 && p.stats.matches === 0 && !this.events.includes('acb_debut')) {
            let texto = p.ovr >= 75 ? `Llegas a la Liga Endesa como la gran promesa del país. Las cámaras te siguen. ${p.rivalName} también ha debutado, pero en otro equipo, y en su rueda de prensa ha dicho: "${p.name} tiene mucho hype, veremos si lo demuestra en la pista".` : `Llegas a la ACB desde abajo, con un contrato modesto. Nadie confía en ti. Tendrás que trabajar el doble que ${p.rivalName}, que ha fichado por un grande.`;
            this.trigger("BIENVENIDO A LA ÉLITE", texto, [{text: "Es hora de demostrar", action: () => { p.fame += 5; }}], 'acb_debut');
        }

        if (p.fase === 1 && acbMatches === 4 && !this.events.includes('primer_sueldo')) {
            this.trigger("EL PRIMER CHEQUE", 
            `Acabas de cobrar tu primer mes como profesional. Tienes dinero fresco en el banco. Tus amigos del barrio quieren que los invites al reservado de una discoteca, pero tus padres llevan años sin irse de vacaciones.`, 
            [
                {text: "Pagar viaje a tus padres (-100€)", action: () => { p.money -= 100; p.fame += 2; escribirDialogo("Tu madre te manda una foto llorando de alegría desde el hotel."); }},
                {text: "Fiesta VIP con los colegas (-100€)", action: () => { p.money -= 100; p.fame += 10; escribirDialogo("Sales en las revistas del corazón. Tu fama se dispara, pero el míster te mira mal."); }}
            ], 'primer_sueldo');
        }

        // ==========================================
        // CAPÍTULO 3: NBA
        // ==========================================
        if (p.fase === 2 && p.stats.matches === 0 && !this.events.includes('nba_debut')) {
            let texto = p.fame >= 40 ? `¡El mundo entero habla de ti! Llegas a la NBA como una superestrella mediática. Te comparan con Luka Dončić. ${p.rivalName} te mira con recelo desde su franquicia.` : `Has llegado a la NBA por puro talento, pero en América no te conoce nadie. Eres un novato más. Toca ganarse el respeto a base de sudor.`;
            this.trigger("EL SUEÑO AMERICANO", texto, [{text: "Pisar el parqué", action: () => { p.fame += 10; }}], 'nba_debut');
        }

        if (p.fase === 2 && nbaMatches === 10 && !this.events.includes('rookie_wall')) {
            this.trigger("EL MURO DEL NOVATO", 
            `El ritmo de 82 partidos de la NBA te está destrozando. Te duelen las rodillas y hoy juegas en back-to-back. El fisio te recomienda descansar, pero hay cazatalentos de Nike viéndote hoy.`, 
            [
                {text: "Descansar (+ Físico)", action: () => { p.fisico += 1; p.ovr = Math.round((p.tiro+p.fisico+p.manejo+p.def+p.bandeja)/5); }},
                {text: "Forzar y jugar (+ Fama)", action: () => { p.fame += 8; escribirDialogo("Acabas reventado, pero los fans aplauden tu entrega."); }}
            ], 'rookie_wall');
        }

        // ==========================================
        // ANILLOS Y RECONCILIACIÓN
        // ==========================================
        if (p.rings === 1 && !this.events.includes('ring_1')) {
            this.trigger("HERMANOS DE SANGRE", 
            `El confeti cae del techo. Eres Campeón de la NBA. En medio del caos en el túnel de vestuarios, aparece ${p.rivalName}. La envidia ha desaparecido de sus ojos. Te abraza fuerte y te dice al oído: "Perdóname por lo de España. Eres el mejor que he visto en una pista, hermano. Lo hemos logrado."`, 
            [{text: "Abrazar a tu hermano", action: () => { p.rivalReconciled = true; p.fame += 15; }}], 'ring_1');
        }

        if (p.rings === 3 && !this.events.includes('ring_3')) {
            this.trigger("¿UNA DINASTÍA?", 
            `Tres anillos. Los periodistas ya no te preguntan si eres bueno, te preguntan si tu equipo es la mayor dinastía del siglo XXI. La presión por mantener el trono es asfixiante.`, 
            [{text: "A por el cuarto", action: () => { p.money += 2000; }}], 'ring_3');
        }

        if (p.rings === 6 && !this.events.includes('ring_6')) {
            this.trigger("LA SOMBRA DEL 23", 
            `¡SEIS ANILLOS! Has igualado a Michael Jordan. Internet está ardiendo debatiendo quién es el mejor. Nike te ha preparado un anuncio global coronándote. Pero tú sabes que la misión es superar a Russell. Faltan 6 más.`, 
            [{text: "Aceptar la Corona", action: () => { p.fame += 20; p.money += 10000; }}], 'ring_6');
        }

        if (p.rings === 12 && !this.events.includes('ring_12')) {
            this.trigger("EL OLIMPO ABSOLUTO", 
            `¡DOCE ANILLOS! Has destrozado el récord inalcanzable de Bill Russell. Eres una anomalía estadística, un Dios del baloncesto. Tu nombre será leyenda durante los próximos 1000 años. El mismísimo Comisionado de la NBA se arrodilla (metafóricamente) ante ti.`, 
            [{text: "Disfrutar de la Eternidad", action: () => { p.fame = 100; p.money += 50000; }}], 'ring_12');
        }

        // ==========================================
        // TIEMPO (17 TEMPORADAS)
        // ==========================================
        if (p.season === 10 && p.sMatches === 0 && !this.events.includes('season_10')) {
            this.trigger("LA VETERANÍA", 
            `Temporada 10. Ya no eres el joven explosivo de antes. Los novatos te llaman "señor" en la pista. Empiezas a notar el peso de los años, pero tu mente es más rápida que nunca. Quedan 7 temporadas para el fin.`, 
            [{text: "Tirar de experiencia", action: () => { p.tiro += 1; p.manejo += 1; p.fisico -= 1; p.ovr = Math.round((p.tiro+p.fisico+p.manejo+p.def+p.bandeja)/5); }}], 'season_10');
        }

        if (p.season === 15 && p.sMatches === 0 && !this.events.includes('season_15')) {
            this.trigger("EL OCASO DE LA LEYENDA", 
            `Temporada 15. Te cuesta levantarte de la cama después de los partidos. Tu familia te dice que ya has hecho suficiente, que te retires. Pero tú miras tu vitrina de trofeos y el Checklist del G.O.A.T. Solo te quedan 3 temporadas. El reloj hace tic-tac.`, 
            [{text: "Dar el último aliento", action: () => { p.fame += 10; }}], 'season_15');
        }

        // ==========================================
        // PATROCINIOS Y PREMIOS
        // ==========================================
        if (p.fame >= 30 && !this.events.includes('patroc_local')) {
            this.trigger("EL HÉROE DE LA CIUDAD", 
            "Una cadena de restaurantes local quiere que hagas un anuncio comiendo su hamburguesa gigante. Es algo cutre, pero pagan bien.", 
            [
                {text: "Hacer el anuncio (+1.500€)", action: () => { p.money += 1500; p.fame += 5; }},
                {text: "Rechazar (Miras más alto)", action: () => { p.fame += 10; }}
            ], 'patroc_local');
        }
        
        if (p.fame >= 80 && !this.events.includes('signature_shoe')) {
            this.trigger("SIGNATURE SHOE: TU PROPIA MARCA", 
            "¡Lo has logrado! Tras meses de reuniones, una marca deportiva global acaba de lanzar la línea de zapatillas con tu nombre y logo. Niños en todo el planeta llevan tus zapas para ir al colegio. Eres un Icono.", 
            [{text: "Firmar el contrato de tu vida", action: () => { p.hasShoe = true; p.money += 50000; p.fame += 15; }}], 'signature_shoe');
        }

        if (p.fame >= 95 && p.money >= 100000 && !this.events.includes('documental')) {
            this.trigger("EL DOCUMENTAL DE NETFLIX", 
            "Una productora de Hollywood ha estrenado 'Ecos de Grandeza', una serie documental de 10 episodios sobre tu vida. Desde las canchas del barrio hasta la cima del mundo. Tu historia inspira a millones.", 
            [{text: "Ver la premiere con tu familia", action: () => { p.fame = 100; p.money += 20000; }}], 'documental');
        }
    },

    trigger: function(title, text, options, eventId) {
        this.events.push(eventId);
        let html = `<div class="dialog-box log-entry" id="story-${eventId}" style="border-color: gold; text-align:center; padding: 20px; box-shadow: 0 0 15px rgba(255, 215, 0, 0.3); background: #111; margin-top: 15px;">
            <h3 style="color: gold; margin-bottom: 15px; font-size: 1.1em; text-transform: uppercase;">📰 ${title}</h3>
            <p style="font-size: 0.75em; line-height: 1.6; margin-bottom: 20px; color: #ddd; text-align: justify;">${text}</p>
            <div style="display:flex; flex-direction:column; gap:10px;">`;
        
        options.forEach((opt, idx) => {
            html += `<button class="btn-main" id="st-btn-${eventId}-${idx}" style="text-transform:none; font-size:0.8em; padding:10px; border-color:gold; color:gold;">${opt.text}</button>`;
        });
        html += `</div></div>`;
        
        document.getElementById('game-log').insertAdjacentHTML('beforeend', html);
        
        // ¡Magia! Bloqueamos los botones de acción para forzar leer la historia
        let act = document.getElementById('actions');
        if(act) act.style.display = 'none';
        
        options.forEach((opt, idx) => {
            document.getElementById(`st-btn-${eventId}-${idx}`).onclick = function() {
                opt.action();
                document.getElementById(`story-${eventId}`).innerHTML = `<span style="color:var(--success); font-size:0.8em; font-weight:bold;">✅ Decisión tomada. Tu legado continúa.</span>`;
                
                if(typeof updateUI === 'function') updateUI();
                if(typeof guardarPartida === 'function') guardarPartida();
                
                // Restauramos los botones
                let act2 = document.getElementById('actions');
                if(act2) act2.style.display = 'block';
            };
        });
        
        if(typeof scrollToBottom === 'function') scrollToBottom();
    }
};