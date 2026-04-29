document.addEventListener('DOMContentLoaded', () => {
    // --- 1. Sticky Navbar Effect ---
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // --- 1c. Fallback video: si el MP4 local falla, usar YouTube ---
    const heroVideo = document.getElementById('hero-video');
    const heroFallback = document.getElementById('hero-video-fallback');
    if (heroVideo && heroFallback) {
        heroVideo.addEventListener('error', () => {
            heroVideo.style.display = 'none';
            heroFallback.src = heroFallback.getAttribute('data-src');
            heroFallback.style.display = 'block';
        });
    }

    // --- 1b. Menú Hamburguesa (Mobile) ---
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    // Crear botón X para cerrar el menú
    const closeMenuBtn = document.createElement('button');
    closeMenuBtn.innerHTML = '<i class="fas fa-times"></i>';
    closeMenuBtn.setAttribute('aria-label', 'Cerrar menú');
    closeMenuBtn.style.cssText = 'position:fixed;top:22px;right:22px;z-index:1001;background:none;border:none;color:#fff;font-size:2rem;cursor:pointer;display:none;';
    document.body.appendChild(closeMenuBtn);

    function openMenu() {
        navLinks.classList.add('nav-open');
        closeMenuBtn.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        navLinks.classList.remove('nav-open');
        closeMenuBtn.style.display = 'none';
        document.body.style.overflow = '';
    }

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', openMenu);
    }

    closeMenuBtn.addEventListener('click', closeMenu);

    // Cerrar al tocar cualquier link del menú
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // --- 2. Smooth Reveal Animations (Intersection Observer) ---
    // Aparecer suavemente los elementos al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15 // Se activa cuando el 15% del elemento es visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Dejamos de observar para que la animación solo ocurra una vez
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-in-up');
    fadeElements.forEach(el => observer.observe(el));

    // --- 3. Datos de la Discografía ---
    // Simulación de una base de datos de álbumes. 
    // REEMPLAZA "#" CON LOS ENLACES REALES A YOUTUBE O SPOTIFY.
    const albumsData = {
        rhlm: {
            title: "Real Hasta La Muerte",
            year: "2018",
            cover: "img/rhlm.jpg",
            tracks: [
                { title: "Na' Nuevo", duration: "4:44", link: "#" },
                { title: "Ella Quiere Beber", duration: "3:08", link: "#" },
                { title: "Hipócrita (feat. Zion)", duration: "3:13", link: "#" },
                { title: "Modo de Avión", duration: "3:39", link: "#" },
                { title: "Bandolera", duration: "3:11", link: "#" },
                { title: "Pensando en Ti (feat. Wisin)", duration: "3:00", link: "#" },
                { title: "Brindemos (feat. Ozuna)", duration: "3:00", link: "#" },
                { title: "Espina", duration: "3:00", link: "#" },
                { title: "Tu No Lo Amas", duration: "3:00", link: "#" },
                { title: "Naturaleza", duration: "3:00", link: "#" },
                { title: "Yeezy (feat. Ñengo Flow)", duration: "3:00", link: "#" },
                { title: "Te Necesito", duration: "3:00", link: "#" }
            ],
            albumLink: "https://www.youtube.com/results?search_query=Anuel+AA+Real+Hasta+La+Muerte+Album"
        },
        emmanuel: {
            title: "Emmanuel",
            year: "2020",
            cover: "img/emmanuel.jpg",
            tracks: [
                { title: "No Llores Mujer", duration: "3:33", link: "#" },
                { title: "Somo' O No Somos", duration: "3:41", link: "#" },
                { title: "Reggaetonera", duration: "3:32", link: "#" },
                { title: "Jangueo", duration: "3:51", link: "#" },
                { title: "Hasta Que Dios Diga", duration: "4:06", link: "#" },
                { title: "Narcos", duration: "4:20", link: "#" },
                { title: "Fútbol & Rumba", duration: "3:00", link: "#" },
                { title: "Que Se Joda", duration: "3:00", link: "#" },
                { title: "Ferrari", duration: "3:00", link: "#" },
                { title: "El Manual", duration: "3:00", link: "#" },
                { title: "Estrés Postraumático", duration: "3:00", link: "#" },
                { title: "¿Los Hombres No Lloran?", duration: "3:00", link: "#" },
                { title: "Así Soy Yo", duration: "3:00", link: "#" },
                { title: "El Problema", duration: "3:00", link: "#" },
                { title: "Bandido", duration: "3:00", link: "#" },
                { title: "Rifles Rusos", duration: "3:00", link: "#" },
                { title: "Mi Vieja", duration: "3:00", link: "#" },
                { title: "Nubes Negras", duration: "3:00", link: "#" },
                { title: "Tocándote", duration: "3:00", link: "#" },
                { title: "Antes Y Después", duration: "3:00", link: "#" },
                { title: "Secreto", duration: "3:00", link: "#" },
                { title: "China", duration: "3:00", link: "#" }
            ],
            albumLink: "https://www.youtube.com/results?search_query=Anuel+AA+Emmanuel+Album"
        },
        losdioses: {
            title: "Los Dioses",
            year: "2021",
            cover: "img/los-dioses.jpg",
            tracks: [
                { title: "Los Dioses", duration: "4:38", link: "#" },
                { title: "100", duration: "3:35", link: "#" },
                { title: "Antes", duration: "3:26", link: "#" },
                { title: "Dime Tú", duration: "2:58", link: "#" },
                { title: "RD", duration: "3:18", link: "#" },
                { title: "Nada Bueno", duration: "3:20", link: "#" },
                { title: "Contra el Mundo", duration: "2:53", link: "#" },
                { title: "Perreo", duration: "3:37", link: "#" },
                { title: "Perfecto", duration: "4:16", link: "#" },
                { title: "La María", duration: "3:10", link: "#" },
                { title: "Nunca", duration: "4:32", link: "#" },
                { title: "Municiones", duration: "2:56", link: "#" }
            ],
            albumLink: "https://www.youtube.com/results?search_query=Anuel+AA+Ozuna+Los+Dioses+Album"
        },
        llnm: {
            title: "Las Leyendas Nunca Mueren",
            year: "2021",
            cover: "img/llnm.jpg",
            tracks: [
                { title: "Real Hasta la Muerte", duration: "3:00", link: "#" },
                { title: "North Carolina", duration: "3:00", link: "#" },
                { title: "Rick Flair", duration: "3:00", link: "#" },
                { title: "1942", duration: "3:00", link: "#" },
                { title: "Pin", duration: "3:00", link: "#" },
                { title: "Mcgregor", duration: "4:43", link: "#" },
                { title: "Llorando En Un Ferrari", duration: "3:13", link: "#" },
                { title: "Leyenda", duration: "3:40", link: "#" },
                { title: "Esa Cruz", duration: "2:50", link: "#" },
                { title: "300", duration: "3:00", link: "#" },
                { title: "Exit", duration: "3:00", link: "#" },
                { title: "Una Palabra", duration: "3:00", link: "#" },
                { title: "Dictadura", duration: "3:00", link: "#" },
                { title: "Mi Voz Cuesta Un Billón", duration: "3:00", link: "#" },
                { title: "Súbelo", duration: "3:00", link: "#" },
                { title: "Última Canción", duration: "3:00", link: "#" }
            ],
            albumLink: "https://www.youtube.com/results?search_query=Anuel+AA+Las+Leyendas+Nunca+Mueren+Album"
        },
        llnm2: {
            title: "LLNM2",
            year: "2022",
            cover: "img/llnm2.jpg",
            tracks: [
                { title: "BRRR", duration: "2:54", link: "#" },
                { title: "Borracha & Loca", duration: "3:18", link: "#" },
                { title: "Vibra", duration: "3:00", link: "#" },
                { title: "La Máquina", duration: "3:45", link: "#" },
                { title: "Hoodie", duration: "3:00", link: "#" },
                { title: "Si Yo Me Muero", duration: "3:00", link: "#" },
                { title: "Sufro", duration: "3:00", link: "#" },
                { title: "Las Jordan", duration: "3:00", link: "#" },
                { title: "Wakanda", duration: "3:00", link: "#" },
                { title: "Somo Así", duration: "3:00", link: "#" },
                { title: "Me Siento HP", duration: "3:00", link: "#" },
                { title: "Del Kilo", duration: "3:00", link: "#" },
                { title: "Contra la Corriente", duration: "3:00", link: "#" },
                { title: "Mintiendo", duration: "3:00", link: "#" },
                { title: "El Nene", duration: "3:00", link: "#" },
                { title: "Diamantes en Mis Dientes", duration: "3:00", link: "#" },
                { title: "Teteo", duration: "3:00", link: "#" },
                { title: "Monstruo", duration: "3:22", link: "#" },
                { title: "Mercedes Tintia", duration: "3:15", link: "#" },
                { title: "1ro", duration: "3:00", link: "#" },
                { title: "Mientes", duration: "3:00", link: "#" },
                { title: "40", duration: "3:00", link: "#" },
                { title: "La 2blea", duration: "3:00", link: "#" },
                { title: "Sin Ti", duration: "3:00", link: "#" },
                { title: "Airbnb", duration: "3:00", link: "#" },
                { title: "Ascensor", duration: "3:00", link: "#" },
                { title: "Anuel & Emmanuel", duration: "3:00", link: "#" },
                { title: "Tú Lo Sabes", duration: "3:00", link: "#" },
                { title: "Coroné", duration: "3:00", link: "#" },
                { title: "Tiene Novio", duration: "3:00", link: "#" }
            ],
            albumLink: "https://www.youtube.com/results?search_query=Anuel+AA+LLNM2+Album"
        }
    };

    // --- 4. Lógica del Modal (Solo si existe en la página) ---
    const modal = document.getElementById('album-modal');
    const closeModal = document.querySelector('.close-modal');
    const albumCards = document.querySelectorAll('.album-card');

    if (modal) {
        // Referencias a los elementos dentro del modal
        const modalCover = document.getElementById('modal-cover');
        const modalTitle = document.getElementById('modal-title');
        const modalYear = document.getElementById('modal-year');
        const modalTracklist = document.getElementById('modal-tracklist');
        const modalPlayBtn = document.getElementById('modal-play-btn');

        // Abrir modal al hacer clic en un álbum
        albumCards.forEach(card => {
        card.addEventListener('click', () => {
            const albumId = card.getAttribute('data-album');
            const data = albumsData[albumId];

            if (data) {
                // Rellenar la información del modal
                modalCover.src = data.cover;
                document.getElementById('modal-cover-link').href = data.albumLink;
                modalTitle.textContent = data.title;
                document.getElementById('modal-title-link').href = data.albumLink;
                modalYear.textContent = data.year;
                modalPlayBtn.href = data.albumLink;

                // Limpiar el tracklist anterior
                modalTracklist.innerHTML = '';

                // Generar dinámicamente el tracklist
                data.tracks.forEach((track, index) => {
                    const li = document.createElement('li');
                    li.className = 'track-item';
                    
                    // Si el link es #, generamos una búsqueda en YouTube para la canción automáticamente
                    const songLink = (track.link === "#" || !track.link) 
                        ? `https://www.youtube.com/results?search_query=${encodeURIComponent("Anuel AA " + track.title)}` 
                        : track.link;
                    
                    li.innerHTML = `
                        <a href="${songLink}" target="_blank">
                            <span class="track-number">${index + 1}</span>
                            <i class="fas fa-play track-play-icon"></i>
                            <span class="track-title">${track.title}</span>
                            <span class="track-duration">${track.duration}</span>
                        </a>
                    `;
                    modalTracklist.appendChild(li);
                });

                // Mostrar el modal
                modal.classList.add('active');
                // Bloquear el scroll en el body
                document.body.style.overflow = 'hidden';
            }
        });
    }); // fin albumCards.forEach
    } // fin if (modal)



    // =============================================
    // ZONA FAN: GEMINI AI (Trivia Infinita)
    // =============================================
    let triviaScore = 0;
    let triviaStreak = 0;
    let triviaQNum = 0;
    let triviaRunning = false;

    const startBtn   = document.getElementById('trivia-start');
    const startCont  = document.getElementById('trivia-start-container');
    const liveStats  = document.getElementById('trivia-live-stats');
    const aiTyping   = document.getElementById('ai-typing');
    const aiMessage  = document.getElementById('ai-message');
    const optionsEl  = document.getElementById('trivia-options');
    const resultEl   = document.getElementById('trivia-result');
    const resultScoreEl = document.getElementById('trivia-score');
    const resultMsgEl   = document.getElementById('trivia-result-msg');
    const restartBtn    = document.getElementById('trivia-restart');
    const liveScoreEl   = document.getElementById('live-score');
    const liveStreakEl  = document.getElementById('live-streak');
    const liveQnumEl    = document.getElementById('live-qnum');
    const levelBarEl    = document.getElementById('trivia-level-bar');
    const currentLevelEl = document.getElementById('trivia-current-level');
    const progressTextEl = document.getElementById('trivia-progress-text');
    const progressFillEl = document.getElementById('trivia-progress-fill');
    const highscoreDisplayEl = document.getElementById('fan-highscore-display');

    // Mostrar highscore al cargar
    const savedHs = parseInt(localStorage.getItem('anuelTriviaHighScore') || '0');
    if (highscoreDisplayEl) highscoreDisplayEl.textContent = savedHs;

    // 30 preguntas por niveles
    const triviaQuestions = [
        // Nivel 1: Fácil
        { q: "¿Cuál es el nombre real de Anuel AA?", opts: ["Benito Antonio Martínez Ocasio", "Emmanuel Gazmey Santiago", "Juan Carlos Ozuna Rosado", "Austin Agustín Santos"], ans: 1 },
        { q: "¿Cuál es la frase más famosa y el lema principal de su carrera?", opts: ["La Nueva Religión", "Viva la vida", "Real Hasta La Muerte", "Los Dioses"], ans: 2 },
        { q: "¿En qué país nació y se crio Anuel AA?", opts: ["República Dominicana", "Colombia", "Puerto Rico", "Estados Unidos"], ans: 2 },
        { q: "¿Con qué famosa cantante colombiana tuvo una de las relaciones más mediáticas del género urbano?", opts: ["Karol G", "Shakira", "Farina", "Greeicy"], ans: 0 },
        { q: "¿Cuál de estas canciones es un éxito mundial masivo en el que Anuel AA participa junto a Daddy Yankee, Karol G, Ozuna y J Balvin?", opts: ["Pepas", "Despacito", "China", "Dakiti"], ans: 2 },
        
        // Nivel 2: Medio
        { q: "¿En qué año fue arrestado Anuel AA por las autoridades en Puerto Rico?", opts: ["2014", "2015", "2016", "2018"], ans: 2 },
        { q: "¿Cómo se llama el álbum debut que lanzó por sorpresa exactamente el mismo día que salió de prisión?", opts: ["Emmanuel", "Real Hasta La Muerte", "Las Leyendas Nunca Mueren", "Los Dioses"], ans: 1 },
        { q: "¿Con qué artista puertorriqueño lanzó el álbum colaborativo 'Los Dioses'?", opts: ["Bad Bunny", "Jhayco", "Myke Towers", "Ozuna"], ans: 3 },
        { q: "¿Cuál es el nombre de su primer hijo?", opts: ["Pablo Anuel", "Mateo Emmanuel", "Noah", "Thiago"], ans: 0 },
        { q: "Durante gran parte de su ascenso a la cima, ¿quién fue su mánager y mejor amigo de la industria?", opts: ["DJ Luian", "Raphy Pina", "Frabian Eli", "Vicente Saavedra"], ans: 2 },
        
        // Nivel 3: Difícil
        { q: "¿Qué cargo importante ocupaba el padre de Anuel, José Gazmey, en la industria musical?", opts: ["Dueño de Pina Records", "Productor principal de Héctor El Father", "Vicepresidente de A&R de Sony Music en Puerto Rico", "Ingeniero de sonido de Daddy Yankee"], ans: 2 },
        { q: "¿En qué icónico remix de trap grabó su verso a través de una llamada telefónica directamente desde la cárcel?", opts: ["Ayer 2", "Esclava Remix", "La Ocasión", "Diles"], ans: 0 },
        { q: "¿Qué polémico artista internacional colaboró con Anuel AA en temas como 'MALA' y 'BEBE'?", opts: ["Drake", "Travis Scott", "6ix9ine", "Post Malone"], ans: 2 },
        { q: "¿Qué tatuaje gigante en la espalda generó muchísima controversia y luego intentó cubrirse?", opts: ["Un logo enorme de los Chicago Bulls", "Una foto de su rostro junto al de Karol G", "Una cruz con calaveras y armas", "El nombre 'Real Hasta La Muerte' en estilo gótico"], ans: 1 },
        { q: "¿En qué exitoso tema de trap puro colaboran Anuel AA y Eladio Carrión, demostrando la versatilidad de ambos artistas con los flows?", opts: ["Tata", "Kemba Walker", "North Carolina", "Me Gusta"], ans: 2 },
        
        // Nivel 4: Fan
        { q: "¿Qué marca de autos de hiperlujo compró Anuel y presumió en múltiples canciones, siendo uno de los primeros en la isla en tener uno?", opts: ["Pagani", "Bugatti", "Koenigsegg", "McLaren"], ans: 1 },
        { q: "En su controversial tiradera 'Intocable', ¿a qué artista le tiró, lo que luego le obligó a pedir disculpas públicas por unos versos pasados de tono?", opts: ["Residente", "Tempo", "Arcángel", "Cosculluela"], ans: 3 },
        { q: "¿Cómo se llama la hija que tuvo producto de su relación con la cantante Yailin La Más Viral?", opts: ["Cattleya", "Gianella", "Vida Isabelle", "Alana"], ans: 0 },
        { q: "¿En qué ciudad o municipio exacto de Puerto Rico nació Anuel AA?", opts: ["Bayamón", "San Juan", "Carolina", "Ponce"], ans: 2 },
        { q: "Además de Frabian Eli, ¿qué dúo de productores fundadores de Hear This Music fue fundamental para hacer explotar el trap latino con 'La Ocasión'?", opts: ["Luny Tunes", "Mambo Kingz y DJ Luian", "Play-N-Skillz", "Musicólogo y Menes"], ans: 1 },
        
        // Nivel 5: Muy Difícil
        { q: "¿Qué leyenda del reguetón le dedicó a Anuel AA la extensa tiradera 'Feliz Navidad 8' (FN8) tras varios cruces en redes sociales?", opts: ["Don Omar", "Cosculluela", "Arcángel", "Tito El Bambino"], ans: 2 },
        { q: "Antes de hacerse solista y famoso en el underground, Anuel formó un dúo musical en 2011. ¿Con quién era?", opts: ["Bryant Myers", "Jory Boy", "Lito Kirino", "Casper Mágico"], ans: 3 },
        { q: "Su padre era músico profesional antes de ser ejecutivo de discográfica. ¿Qué instrumento tocaba?", opts: ["La trompeta", "La batería", "El bajo", "El piano"], ans: 2 },
        { q: "¿En qué centro de detención federal en Florida cumplió gran parte de los últimos meses de su condena?", opts: ["FDC Miami", "ADX Florence", "Rikers Island", "MDC Brooklyn"], ans: 0 },
        { q: "¿Cómo se llama el álbum conceptual que lanzó en 2021 dedicado al mundo de los deportes y donde rinde homenaje a figuras como Kobe Bryant?", opts: ["Los Dioses", "Las Leyendas Nunca Mueren", "LLNM2", "Emmanuel"], ans: 1 },
        
        // Nivel 6: RHLM (Modo Diablo)
        { q: "En uno de sus primeros éxitos underground absolutos en 2015, 'Nacimos Pa' Morir', ¿qué artista es el encargado de cantar el coro?", opts: ["Ñengo Flow", "Jory Boy", "De La Ghetto", "Kendo Kaponi"], ans: 1 },
        { q: "En las letras de trap de su etapa 'Free Anuel', ¿qué modelo y calibre de pistola es probablemente el más mencionado en sus versos explícitos?", opts: ["Glock .40 (con peine de 30)", "Beretta 9mm", "Desert Eagle .50", "Revólver .38"], ans: 0 },
        { q: "¿Qué tema oscuro e icónico unió a Anuel AA con Almighty, consolidando a ambos como pioneros crudos de la escena trap antes de 2016?", opts: ["Ocho", "Coronamos", "Iluminati", "Esclava"], ans: 2 },
        { q: "¿Cuál de estas canciones clásicas de Anuel AA NO pertenece al tracklist del álbum de estudio Real Hasta La Muerte (2018)?", opts: ["Brindemos", "Quiere Beber", "Sola", "Hipócrita"], ans: 2 },
        { q: "Durante su tiempo en prisión, a Anuel se le asignó un número de registro federal que a veces aparece de forma sutil en la estética del 'Free Anuel'. ¿Cuál era su número real de recluso?", opts: ["22973-069", "1942-015", "1905-112", "40219-069"], ans: 0 }
    ];

    const LEVEL_NAMES = ['🔥 NIVEL 1','⚡ NIVEL 2','🔥 NIVEL 3','🚀 NIVEL 4','💀 NIVEL 5','👑 NIVEL 6'];
    let shuffledQuestions = [];

    function showQuestion(qData, index) {
        const levelIndex = Math.floor(index / 5);
        const levelBadge = LEVEL_NAMES[levelIndex] || '👑 NIVEL 6';

        aiMessage.style.display = 'block';
        aiMessage.innerHTML = `<span style="font-size:0.75rem; color:var(--primary-red); font-weight:800; display:block; margin-bottom:8px;">${levelBadge}</span>${qData.q}`;

        optionsEl.innerHTML = '';
        const labels = ['A', 'B', 'C', 'D'];
        qData.opts.forEach((opt, i) => {
            const btn = document.createElement('button');
            btn.className = 'trivia-btn';
            btn.textContent = `${labels[i]}. ${opt}`;
            btn.addEventListener('click', () => handleAnswer(i, qData.ans, btn));
            optionsEl.appendChild(btn);
        });
    }

    function handleAnswer(selected, correct, btn) {
        const allBtns = optionsEl.querySelectorAll('.trivia-btn');
        allBtns.forEach(b => b.style.pointerEvents = 'none');

        if (selected === correct) {
            btn.classList.add('correct');
            triviaScore++;
            triviaStreak++;
        } else {
            btn.classList.add('incorrect');
            allBtns[correct].classList.add('correct');
            triviaStreak = 0;
        }

        const hs = parseInt(localStorage.getItem('anuelTriviaHighScore') || '0');
        if (triviaScore > hs) {
            localStorage.setItem('anuelTriviaHighScore', triviaScore);
            if (highscoreDisplayEl) highscoreDisplayEl.textContent = triviaScore;
        }

        liveScoreEl.textContent = triviaScore;
        liveStreakEl.textContent = triviaStreak;

        setTimeout(() => nextQuestion(), 1300);
    }

    function nextQuestion() {
        if (triviaQNum >= shuffledQuestions.length) {
            // Fin de la trivia
            aiMessage.style.display = 'none';
            optionsEl.innerHTML = '';
            resultEl.style.display = 'block';
            const pct = Math.round((triviaScore / shuffledQuestions.length) * 100);
            resultScoreEl.textContent = `${triviaScore} / ${shuffledQuestions.length} correctas (${pct}%)`;
            let msg = '';
            if (triviaScore === shuffledQuestions.length) msg = '🏆 ¡PERFECTO! Eres un soldado RHLM legendario.';
            else if (triviaScore >= 25) msg = '👑 Nivel 6 desbloqueado. Eres un fan real.';
            else if (triviaScore >= 20) msg = '💀 Muy bien. Casi perfecto.';
            else if (triviaScore >= 15) msg = '🔥 Buen trabajo. Eres un verdadero fan.';
            else if (triviaScore >= 10) msg = '⚡ Vas bien, sigue practicando.';
            else msg = 'Brrrr... repasa la historia de Anuel. 👹';
            if (resultMsgEl) resultMsgEl.textContent = msg;

            if (triviaScore >= 15) {
                launchConfetti();
                
                // Mostrar una imagen épica si completó con buen puntaje
                const resultImgId = 'trivia-reward-img';
                let imgEl = document.getElementById(resultImgId);
                if (!imgEl) {
                    imgEl = document.createElement('img');
                    imgEl.id = resultImgId;
                    imgEl.src = 'img/llnm.jpg'; // Usamos una de las imagenes existentes
                    imgEl.style.width = '200px';
                    imgEl.style.borderRadius = '10px';
                    imgEl.style.marginTop = '20px';
                    imgEl.style.boxShadow = '0 0 20px var(--primary-red)';
                    imgEl.style.animation = 'pulseTour 2s infinite';
                    resultEl.insertBefore(imgEl, restartBtn);
                }
            } else {
                const imgEl = document.getElementById('trivia-reward-img');
                if (imgEl) imgEl.remove();
            }

            return;
        }

        // Actualizar barra de progreso y nivel
        const levelIndex = Math.floor(triviaQNum / 5);
        const posInLevel = triviaQNum % 5;
        if (currentLevelEl) currentLevelEl.textContent = LEVEL_NAMES[Math.min(levelIndex, 5)];
        if (progressTextEl) progressTextEl.textContent = `${triviaQNum + 1} / ${shuffledQuestions.length}`;
        if (progressFillEl) progressFillEl.style.width = `${((triviaQNum + 1) / shuffledQuestions.length) * 100}%`;

        const qData = shuffledQuestions[triviaQNum];
        liveQnumEl.textContent = triviaQNum + 1;
        showQuestion(qData, triviaQNum);
        triviaQNum++;
    }

    function startTrivia() {
        triviaScore = 0; triviaStreak = 0; triviaQNum = 0;
        shuffledQuestions = [...triviaQuestions];
        startCont.style.display = 'none';
        resultEl.style.display = 'none';
        liveStats.style.display = 'flex';
        if (levelBarEl) levelBarEl.style.display = 'block';
        if (progressFillEl) progressFillEl.style.width = '0%';
        liveScoreEl.textContent = '0';
        liveStreakEl.textContent = '0';
        liveQnumEl.textContent = '1';
        nextQuestion();
    }




    if (startBtn) startBtn.addEventListener('click', startTrivia);
    if (restartBtn) restartBtn.addEventListener('click', startTrivia);

    function launchConfetti() {
        const colors = ['#d90429', '#ffd700', '#ffffff', '#000000'];
        for (let i = 0; i < 100; i++) {
            const confetti = document.createElement('div');
            confetti.style.position = 'fixed';
            confetti.style.width = '10px';
            confetti.style.height = '10px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.left = Math.random() * 100 + 'vw';
            confetti.style.top = '-10px';
            confetti.style.zIndex = '9999';
            confetti.style.pointerEvents = 'none';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            document.body.appendChild(confetti);

            const animation = confetti.animate([
                { transform: `translate3d(0,0,0) rotate(0deg)`, opacity: 1 },
                { transform: `translate3d(${Math.random()*200 - 100}px, 100vh, 0) rotate(${Math.random()*720}deg)`, opacity: 0 }
            ], {
                duration: Math.random() * 2000 + 3000,
                easing: 'cubic-bezier(.37,0,.63,1)'
            });

            animation.onfinish = () => confetti.remove();
        }
    }

    // =============================================
    // Modal: Cerrar (solo si el modal existe)
    // =============================================
    if (modal && closeModal) {
        // Función para cerrar el modal
        const closeEvent = () => {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        };

        // Cerrar al hacer clic en la "X"
        closeModal.addEventListener('click', closeEvent);

        // Cerrar al hacer clic fuera del contenedor del modal
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeEvent();
            }
        });
    }
    // =============================================
    // TOUR DINÁMICO: FETCH API Y RENDERIZADO
    // =============================================
    
    // Función para simular una llamada a la API
    function fetchTourDates() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const apiResponse = {
                    globalUrl: "https://realhastalamuerte2tour.com/", // URL oficial del tour obtenida de la API
                    events: [
                        {
                            datetime: "2026-06-27T20:00:00",
                            venue: "Hallenstadion",
                            city: "Zúrich",
                            country: "Suiza",
                            ticketUrl: "https://www.stubhub.com/ozuna-zurich-tickets-6-27-2026/event/160452738/?clickref=1011lCmXQAgD&t=t1.aff.partnerize_concerts50-publisher_program-Content-1101l799-0&utm_source=partnerize_concerts50&utm_medium=publisher_program&utm_sub_medium=Content&utm_campaign=1101l799&utm_content=0&PCID=partnerize_all&quantity=0",
                            isSoldOut: false
                        },
                        {
                            datetime: "2026-07-05T21:00:00",
                            venue: "Ex-Base Nato",
                            city: "Nápoles",
                            country: "Italia",
                            ticketUrl: "https://www.stubhub.com/anuel-aa-napoli-tickets-7-5-2026/event/160132466/?clickref=1100lCgCrZ9x&t=t1.aff.partnerize_concerts50-publisher_program-Content-1101l799-0&utm_source=partnerize_concerts50&utm_medium=publisher_program&utm_sub_medium=Content&utm_campaign=1101l799&utm_content=0&PCID=partnerize_all&quantity=0",
                            isSoldOut: true // Simulamos que está sold out para probar el estado
                        },
                        {
                            datetime: "2026-07-10T21:00:00",
                            venue: "Parco Gondar",
                            city: "Gallipoli",
                            country: "Italia",
                            ticketUrl: "https://www.stubhub.com/anuel-aa-gallipoli-tickets-7-10-2026/event/160465759/?clickref=1011lCmXQEcc&t=t1.aff.partnerize_concerts50-publisher_program-Content-1101l799-0&utm_source=partnerize_concerts50&utm_medium=publisher_program&utm_sub_medium=Content&utm_campaign=1101l799&utm_content=0&PCID=partnerize_all&quantity=0",
                            isSoldOut: false
                        },
                        {
                            datetime: "2026-07-19T20:30:00",
                            venue: "MIND Milano Innovation District",
                            city: "Milán",
                            country: "Italia",
                            ticketUrl: "https://www.stubhub.com/anuel-aa-milan-tickets-7-19-2026/event/160132469/?clickref=1100lCgCs4HZ&t=t1.aff.partnerize_concerts50-publisher_program-Content-1101l799-0&utm_source=partnerize_concerts50&utm_medium=publisher_program&utm_sub_medium=Content&utm_campaign=1101l799&utm_content=0&PCID=partnerize_all&quantity=0",
                            isSoldOut: false
                        }
                    ]
                };
                resolve(apiResponse);
            }, 800); // 0.8s simulando red
        });
    }

    async function loadTourDates() {
        const container = document.getElementById('dynamic-tour-dates');
        if (!container) return;

        try {
            // Ejemplo si hubiera API real:
            // const response = await fetch('https://rest.bandsintown.com/artists/Anuel%20AA/events?app_id=MY_APP_ID');
            // const data = await response.json();
            
            const data = await fetchTourDates();
            
            // Actualizar el enlace principal del tour de manera dinámica
            const globalUrl = data.globalUrl;
            const posterLink = document.getElementById('tour-poster-link');
            const allDatesBtn = document.getElementById('tour-all-dates-btn');
            
            if (posterLink) posterLink.href = globalUrl;
            if (allDatesBtn) allDatesBtn.href = globalUrl;

            container.innerHTML = ''; // Limpiar loader

            const meses = ["ENE", "FEB", "MAR", "ABR", "MAY", "JUN", "JUL", "AGO", "SEP", "OCT", "NOV", "DIC"];

            data.events.forEach((event, index) => {
                const dateObj = new Date(event.datetime);
                const day = String(dateObj.getDate()).padStart(2, '0');
                const monthStr = meses[dateObj.getMonth()];

                // Condición para el estado del botón (Sold Out vs Disponible)
                let ticketBtnHtml = '';
                if (event.isSoldOut) {
                    ticketBtnHtml = `
                        <a href="#" class="btn-ticket" style="pointer-events:none; border-color:#555; color:#555;">
                            <i class="fas fa-times"></i> Sold Out
                        </a>
                    `;
                } else {
                    ticketBtnHtml = `
                        <a href="${event.ticketUrl}" target="_blank" class="btn-ticket">
                            <i class="fas fa-ticket-alt"></i> Entradas
                        </a>
                    `;
                }

                // Generación de la tarjeta con EXACTAMENTE las mismas clases CSS pedidas
                const cardHtml = `
                    <div class="tour-date-card" id="tour-date-${index + 1}">
                        <div class="tour-date-block">
                            <span class="tour-day">${day}</span>
                            <span class="tour-month">${monthStr}</span>
                        </div>
                        <div class="tour-info">
                            <p class="tour-venue">${event.venue}</p>
                            <p class="tour-city"><i class="fas fa-globe-europe"></i> ${event.city}, ${event.country}</p>
                        </div>
                        ${ticketBtnHtml}
                    </div>
                `;

                container.insertAdjacentHTML('beforeend', cardHtml);
            });

        } catch (error) {
            console.error("Error al cargar fechas del tour:", error);
            container.innerHTML = '<div style="text-align: center; padding: 20px; color: var(--primary-red);">Error al cargar las fechas. Intenta más tarde.</div>';
        }
    }

    // Disparar carga dinámica
    loadTourDates();

});
