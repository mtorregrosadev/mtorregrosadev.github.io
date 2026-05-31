(function () {
  'use strict';

  // ── Translations (loaded from translations.json) ─────────────
  // Fallback keeps the page renderable when opened via file:// without a server.
  // translations.json is the canonical source — edit that, not this object.
  const FALLBACK = {
    en: {
      "nav-about": "About", "nav-skills": "Skills", "nav-experience": "Experience",
      "nav-projects": "Projects", "nav-contact": "Contact",
      "hero-eyebrow": "Hello, I'm", "hero-role": "// Junior Developer · CS Student",
      "hero-tagline": "I build things that solve real problems — from AI apps to hackathon wins.",
      "hero-cta-work": "View work ↓", "hero-cta-contact": "Get in touch",
      "hero-terminal": "> print('Ready for new challenges')",
      "about-toolbar-loc": "📍 Montgat, Catalonia", "about-toolbar-status": "💻 Open to opportunities",
      "about-role": "// Junior Developer · CS Student",
      "about-bio": "Computer Engineering student at La Salle Campus Barcelona (2025–2029), passionate about building tech with real impact. I've worked on embedded systems at MICA ECO (C++ / ESP32), taught programming at Algorithmics, and won two hackathons. I enjoy projects that promote sustainability, efficiency, and social good — always learning, always shipping.",
      "skills-lang-label": "Languages", "skills-lang-sort": "sorted by proficiency",
      "skills-cat-fw": "Frameworks & Libraries", "skills-cat-cloud": "Cloud & IoT",
      "skills-cat-tools": "Tools & OS", "skills-cat-certs": "Certifications",
      "exp-toolbar-count": "3 positions", "exp-toolbar-sort": "Sort: recent",
      "exp-algo-role": "Programming Teacher", "exp-algo-company": "Algorithmics Barcelona",
      "exp-algo-period": "May 2026 — Present · Barcelona",
      "exp-algo-b1": "Teaching <strong>programming</strong>, computational thinking, and game development to students aged 6–18 in small, dynamic groups.",
      "exp-algo-b2": "Translating complex technical concepts (logic, algorithms) into engaging lessons using innovative methodologies.",
      "exp-mica-role": "Engineering Apprentice", "exp-mica-company": "MICA ECO",
      "exp-mica-period": "May 2025 — January 2026 · Barcelona",
      "exp-mica-b1": "Embedded software development with <strong>C++</strong> for <strong>ESP32</strong> microcontrollers on the Mica water recirculation system.",
      "exp-mica-b2": "System architecture design leveraging <strong>FreeRTOS</strong> and <strong>PlatformIO</strong> for real-time task management.",
      "exp-mica-b3": "Hands-on experience with <strong>Git / GitHub</strong> for version control, issue tracking and collaborative workflows.",
      "exp-sales-role": "Youth Activity Monitor", "exp-sales-company": "CJS Som-hi Tots!",
      "exp-sales-period": "July 2023 — June 2025 · Barcelona",
      "exp-sales-b1": "Planning and running educational activities and summer camps for children.",
      "exp-sales-b2": "Managing groups of children, resolving conflicts, and communicating with families.",
      "footer-built": "Built with retro vibes", "cv-link-label": "Download CV",
      "proj-clawd-desc": "Dashboard to see how much Claude usage you have left in real time.",
      "cert-english": "English B2.2"
    },
    es: {
      "nav-about": "Sobre mí", "nav-skills": "Habilidades", "nav-experience": "Experiencia",
      "nav-projects": "Proyectos", "nav-contact": "Contacto",
      "hero-eyebrow": "Hola, soy", "hero-role": "// Junior Developer · Estudiante de CS",
      "hero-tagline": "Construyo cosas que resuelven problemas reales — de apps de IA a premios en hackathons.",
      "hero-cta-work": "Ver proyectos ↓", "hero-cta-contact": "Contactar",
      "hero-terminal": "> print('Ready for new challenges')",
      "about-toolbar-loc": "📍 Montgat, Cataluña", "about-toolbar-status": "💻 Abierto a oportunidades",
      "about-role": "// Junior Developer · Estudiante de CS",
      "about-bio": "Estudiante de Ingeniería Informática en La Salle Campus Barcelona (2025–2029), apasionado por crear tecnología con impacto real. He trabajado en sistemas embebidos en MICA ECO (C++ / ESP32), enseñado programación en Algorithmics y ganado dos hackathons. Me interesan proyectos que promueven la sostenibilidad, la eficiencia y el bien social — siempre aprendiendo, siempre construyendo.",
      "skills-lang-label": "Lenguajes", "skills-lang-sort": "ordenados por nivel",
      "skills-cat-fw": "Frameworks y Librerías", "skills-cat-cloud": "Cloud e IoT",
      "skills-cat-tools": "Herramientas y SO", "skills-cat-certs": "Certificaciones",
      "exp-toolbar-count": "3 posiciones", "exp-toolbar-sort": "Orden: reciente",
      "exp-algo-role": "Profesor de Programación", "exp-algo-company": "Algorithmics Barcelona",
      "exp-algo-period": "Mayo 2026 — Presente · Barcelona",
      "exp-algo-b1": "Enseñanza de <strong>programación</strong>, pensamiento computacional y desarrollo de videojuegos a estudiantes de 6 a 18 años en grupos dinámicos.",
      "exp-algo-b2": "Transformación de conceptos técnicos complejos (lógica, algoritmos) en lecciones atractivas con metodologías innovadoras.",
      "exp-mica-role": "Becario de Ingeniería", "exp-mica-company": "MICA ECO",
      "exp-mica-period": "Mayo 2025 — Enero 2026 · Barcelona",
      "exp-mica-b1": "Desarrollo de software embebido con <strong>C++</strong> para microcontroladores <strong>ESP32</strong> en el sistema de recirculación de agua Mica.",
      "exp-mica-b2": "Diseño de arquitectura de sistema utilizando <strong>FreeRTOS</strong> y <strong>PlatformIO</strong> para gestión de tareas en tiempo real.",
      "exp-mica-b3": "Experiencia práctica con <strong>Git / GitHub</strong> para control de versiones, seguimiento de issues y flujos de trabajo colaborativos.",
      "exp-sales-role": "Monitor de Tiempo Libre", "exp-sales-company": "CJS Som-hi Tots!",
      "exp-sales-period": "Julio 2023 — Junio 2025 · Barcelona",
      "exp-sales-b1": "Planificación y dinamización de actividades educativas y campamentos de verano para niños.",
      "exp-sales-b2": "Gestión de grupos de niños, resolución de conflictos y comunicación con las familias.",
      "footer-built": "Hecho con vibes retro", "cv-link-label": "Descargar CV",
      "proj-clawd-desc": "Dashboard para ver cuánto uso de Claude te queda en tiempo real.",
      "cert-english": "Inglés B2.2"
    },
    ca: {
      "nav-about": "Sobre mi", "nav-skills": "Habilitats", "nav-experience": "Experiència",
      "nav-projects": "Projectes", "nav-contact": "Contacte",
      "hero-eyebrow": "Hola, soc", "hero-role": "// Junior Developer · Estudiant de CS",
      "hero-tagline": "Construeixo coses que solucionen problemes reals — d'apps d'IA a premis en hackathons.",
      "hero-cta-work": "Veure projectes ↓", "hero-cta-contact": "Contactar",
      "hero-terminal": "> print('Ready for new challenges')",
      "about-toolbar-loc": "📍 Montgat, Catalunya", "about-toolbar-status": "💻 Obert a oportunitats",
      "about-role": "// Junior Developer · Estudiant de CS",
      "about-bio": "Estudiant d'Enginyeria Informàtica a La Salle Campus Barcelona (2025–2029), apassionat per crear tecnologia amb impacte real. He treballat en sistemes encastats a MICA ECO (C++ / ESP32), ensenyat programació a Algorithmics i guanyat dos hackathons. M'agraden els projectes que promouen la sostenibilitat, l'eficiència i el bé social — sempre aprenent, sempre construint.",
      "skills-lang-label": "Llenguatges", "skills-lang-sort": "ordenats per nivell",
      "skills-cat-fw": "Frameworks i Llibreries", "skills-cat-cloud": "Cloud i IoT",
      "skills-cat-tools": "Eines i SO", "skills-cat-certs": "Certificacions",
      "exp-toolbar-count": "3 posicions", "exp-toolbar-sort": "Ordre: recent",
      "exp-algo-role": "Professor de Programació", "exp-algo-company": "Algorithmics Barcelona",
      "exp-algo-period": "Maig 2026 — Actualitat · Barcelona",
      "exp-algo-b1": "Ensenyament de <strong>programació</strong>, pensament computacional i desenvolupament de videojocs a estudiants de 6 a 18 anys en grups dinàmics.",
      "exp-algo-b2": "Transformació de conceptes tècnics complexos (lògica, algoritmes) en leccions atractives amb metodologies innovadores.",
      "exp-mica-role": "Becari d'Enginyeria", "exp-mica-company": "MICA ECO",
      "exp-mica-period": "Maig 2025 — Gener 2026 · Barcelona",
      "exp-mica-b1": "Desenvolupament de software encastat amb <strong>C++</strong> per a microcontroladors <strong>ESP32</strong> en el sistema de recirculació d'aigua Mica.",
      "exp-mica-b2": "Disseny d'arquitectura de sistema amb <strong>FreeRTOS</strong> i <strong>PlatformIO</strong> per a la gestió de tasques en temps real.",
      "exp-mica-b3": "Experiència pràctica amb <strong>Git / GitHub</strong> per a control de versions, seguiment d'issues i fluxos de treball col·laboratius.",
      "exp-sales-role": "Monitor de Lleure", "exp-sales-company": "CJS Som-hi Tots!",
      "exp-sales-period": "Juliol 2023 — Juny 2025 · Barcelona",
      "exp-sales-b1": "Planificació i dinamització d'activitats educatives i casals d'estiu per a infants.",
      "exp-sales-b2": "Gestió de grups d'infants, resolució de conflictes i comunicació amb les famílies.",
      "footer-built": "Fet amb vibes retro", "cv-link-label": "Descarregar CV",
      "proj-clawd-desc": "Dashboard per veure quant ús de Claude et queda en temps real.",
      "cert-english": "Anglès B2.2"
    }
  };

  let T = FALLBACK;

  function setLang(lang) {
    const t = T[lang] || T.en || {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      const key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll('[data-i18n-desc]').forEach(el => {
      const key = el.getAttribute('data-i18n-desc');
      if (t[key] !== undefined) el.setAttribute('data-modal-desc', t[key]);
    });
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.documentElement.setAttribute('lang', lang);
    try { localStorage.setItem('mt_lang', lang); } catch (_) {}
  }

  let _currentLang = 'en';
  try { _currentLang = localStorage.getItem('mt_lang') || 'en'; } catch (_) {}

  // Render immediately with fallback so the page is never blank
  setLang(_currentLang);
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      _currentLang = btn.dataset.lang;
      setLang(_currentLang);
    });
  });

  // Fetch JSON to get all languages; re-applies current selection when done
  fetch('translations.json')
    .then(r => r.json())
    .then(data => { T = data; setLang(_currentLang); })
    .catch(() => {});

  // ── Navbar active link ───────────────────────────────────────
  const sections = Array.from(document.querySelectorAll('section[id]'));
  const navLinks = Array.from(document.querySelectorAll('.nav-links a'));
  const menubar  = document.getElementById('menubar');

  function setActive(id) {
    navLinks.forEach(a => {
      if (a.getAttribute('href') === '#' + id) {
        a.dataset.active = '';
      } else {
        delete a.dataset.active;
      }
    });
  }

  // Toggle compact class on scroll (optimized)
  let isScrolled = false;
  window.addEventListener('scroll', () => {
    const shouldBeScrolled = window.scrollY > 50;
    if (shouldBeScrolled !== isScrolled) {
      isScrolled = shouldBeScrolled;
      if (isScrolled) {
        menubar.classList.add('scrolled');
      } else {
        menubar.classList.remove('scrolled');
      }
    }
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) setActive(e.target.id); });
    }, { threshold: 0.35 });
    sections.forEach(s => obs.observe(s));
  }

  // ── Project modal ────────────────────────────────────────────
  (function () {
    const overlay   = document.getElementById('proj-modal');
    const closeBtn  = document.getElementById('modal-close');
    if (!overlay) return;

    function openModal(card) {
      const d = card.dataset;
      document.getElementById('modal-title').textContent     = d.modalTitle   || '';
      document.getElementById('modal-name').textContent      = d.modalName    || '';
      document.getElementById('modal-desc').textContent      = d.modalDesc    || '';
      document.getElementById('modal-pip').textContent       = d.modalIcon    || '';
      document.getElementById('modal-pip-label').textContent = d.modalImgfile || '';

      const awardBar = document.getElementById('modal-award-bar');
      if (d.modalAward) {
        awardBar.textContent = d.modalAward;
        awardBar.classList.add('visible');
      } else {
        awardBar.textContent = '';
        awardBar.classList.remove('visible');
      }

      const tagsEl = document.getElementById('modal-tags');
      tagsEl.innerHTML = (d.modalTags || '').split(',').map(t =>
        `<span class="tag">${t.trim()}</span>`
      ).join('');

      const link = document.getElementById('modal-link');
      link.href        = d.modalLink      || '#';
      link.textContent = '→ ' + (d.modalLinklabel || 'view project');

      const liLink = document.getElementById('modal-linkedin');
      if (d.modalLinkedin) {
        liLink.href = d.modalLinkedin;
        liLink.style.display = '';
      } else {
        liLink.style.display = 'none';
      }

      // ── Image carousel ───────────────────────────────────────────
      const imgs = d.modalImgs
        ? d.modalImgs.split(',').map(s => s.trim()).filter(Boolean)
        : (d.modalImg ? [d.modalImg] : []);

      const track       = document.getElementById('modal-carr-track');
      const prevBtn     = document.getElementById('modal-carr-prev');
      const nextBtn     = document.getElementById('modal-carr-next');
      const dotsEl      = document.getElementById('modal-carr-dots');
      const placeholder = document.getElementById('modal-placeholder');

      track.innerHTML  = '';
      dotsEl.innerHTML = '';

      if (imgs.length > 0) {
        placeholder.style.display = 'none';
        imgs.forEach((src, i) => {
          const img = document.createElement('img');
          img.src       = src;
          img.alt       = d.modalImgalt || '';
          img.className = 'modal-carr-img' + (i === 0 ? ' active' : '');
          
          // Open lightbox on click
          img.addEventListener('click', () => {
            const lightbox = document.getElementById('lightbox-overlay');
            const lImg = document.getElementById('lightbox-img');
            if(lightbox && lImg) {
              lImg.src = src;
              lightbox.classList.add('is-open');
              lightbox.removeAttribute('aria-hidden');
            }
          });
          
          track.appendChild(img);
        });
      } else {
        placeholder.style.display = '';
      }

      if (imgs.length > 1) {
        imgs.forEach((_, i) => {
          const dot = document.createElement('button');
          dot.className = 'modal-c-dot' + (i === 0 ? ' active' : '');
          dot.setAttribute('aria-label', 'Image ' + (i + 1));
          dotsEl.appendChild(dot);
        });
        prevBtn.style.display = '';
        nextBtn.style.display = '';
      } else {
        prevBtn.style.display = 'none';
        nextBtn.style.display = 'none';
      }

      let current   = 0;
      const allImgs = Array.from(track.querySelectorAll('.modal-carr-img'));
      const allDots = Array.from(dotsEl.querySelectorAll('.modal-c-dot'));

      function goTo(idx) {
        current = Math.max(0, Math.min(allImgs.length - 1, idx));
        allImgs.forEach((el, i) => el.classList.toggle('active', i === current));
        allDots.forEach((el, i) => el.classList.toggle('active', i === current));
        prevBtn.disabled = current === 0;
        nextBtn.disabled = current === allImgs.length - 1;
      }

      prevBtn.onclick = () => goTo(current - 1);
      nextBtn.onclick = () => goTo(current + 1);
      allDots.forEach((dot, i) => { dot.onclick = () => goTo(i); });

      if (allImgs.length > 1) goTo(0);

      overlay.classList.add('is-open');
      overlay.removeAttribute('aria-hidden');
      closeBtn.focus();

      // Support mobile back button
      if (!window.history.state || !window.history.state.modalOpen) {
        const newState = { modalOpen: true };
        if (window.history.state && window.history.state.projectsOpen) {
          newState.projectsOpen = true;
        }
        window.history.pushState(newState, "");
      }
    }

    function closeModalUI() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
    }

    function closeModal() {
      if (window.history.state && window.history.state.modalOpen) {
        window.history.back();
      } else {
        closeModalUI();
      }
    }

    window.addEventListener('popstate', (e) => {
      if (!e.state || !e.state.modalOpen) {
        closeModalUI();
      }
    });

    closeBtn?.addEventListener('click', closeModal);
    closeBtn?.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') closeModal(); });
    overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeModal(); });

    // open on card click (not on link click)
    document.querySelectorAll('.project-win').forEach(card => {
      card.addEventListener('click', e => {
        // Prevent opening if clicking a link or inside the spotlight carousel
        if (e.target.closest('.project-link') || card.closest('.spotlight-track') || card.closest('.proj-page-grid')) return;
        openModal(card);
      });
      card.addEventListener('keydown', e => {
        if (card.closest('.spotlight-track') || card.closest('.proj-page-grid')) return;
        if (e.key === 'Enter' || e.key === ' ') openModal(card);
      });
    });
  })();

  // ── Projects carousel ────────────────────────────────────────
  (function () {
    const track = document.getElementById('projects-track');
    const dotsEl = document.getElementById('proj-dots');
    const prevBtn = document.getElementById('proj-prev');
    const nextBtn = document.getElementById('proj-next');
    if (!track || !dotsEl || !prevBtn || !nextBtn) return;

    const cards = Array.from(track.querySelectorAll('.project-win'));
    const dots  = Array.from(dotsEl.querySelectorAll('.c-dot'));
    let current = 0;

    function visibleCount() {
      // how many cards fit in the track's visible width
      const cardW = cards[0] ? cards[0].offsetWidth + 20 : 1;
      return Math.max(1, Math.round(track.clientWidth / cardW));
    }

    function setActive(idx) {
      current = Math.max(0, Math.min(cards.length - 1, idx));
      dots.forEach((d, i) => d.classList.toggle('active', i === current));
      prevBtn.disabled = current === 0;
      nextBtn.disabled = current >= cards.length - visibleCount();
    }

    function scrollTo(idx) {
      setActive(idx);
      const card = cards[current];
      track.scrollTo({ left: card.offsetLeft - track.offsetLeft, behavior: 'smooth' });
    }

    prevBtn.addEventListener('click', () => scrollTo(current - 1));
    nextBtn.addEventListener('click', () => scrollTo(current + 1));
    dots.forEach((d, i) => d.addEventListener('click', () => scrollTo(i)));

    // sync dot on native scroll (swipe)
    let scrollTimer;
    track.addEventListener('scroll', () => {
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        const cardW = cards[0] ? cards[0].offsetWidth + 20 : 1;
        const idx = Math.round(track.scrollLeft / cardW);
        setActive(idx);
      }, 80);
    }, { passive: true });

    // init
    setActive(0);
  })();

  // ── Card image auto-slideshow ────────────────────────────────
  (function () {
    document.querySelectorAll('.project-win[data-modal-imgs]').forEach(card => {
      const srcs = card.dataset.modalImgs.split(',').map(s => s.trim()).filter(Boolean);
      if (srcs.length <= 1) return;
      const img = card.querySelector('.project-screenshot');
      if (!img) return;
      let idx = 0;
      setInterval(() => {
        idx = (idx + 1) % srcs.length;
        img.style.opacity = '0';
        setTimeout(() => {
          img.src = srcs[idx];
          img.style.opacity = '1';
        }, 340);
      }, 3500);
    });
  })();

  // ── Projects full-page view ──────────────────────────────────
  (function () {
    const overlay    = document.getElementById('proj-page-overlay');
    const closeBtn   = document.getElementById('proj-page-close');
    const expandBtn  = document.getElementById('projects-expand-btn');
    const grid       = document.getElementById('proj-page-grid');
    const spotPrev   = document.getElementById('spot-prev');
    const spotNext   = document.getElementById('spot-next');
    const spotPrevCard   = document.getElementById('spot-prev-card');
    const spotCenterCard = document.getElementById('spot-center-card');
    const spotNextCard   = document.getElementById('spot-next-card');
    if (!overlay || !expandBtn || !grid) return;

    const srcCards = Array.from(document.querySelectorAll('#projects .project-win'));
    let spotIdx = 0;

    function getProjectData(i) {
      const n = srcCards.length;
      const card = srcCards[((i % n) + n) % n];
      if (!card) return null;
      const d = card.dataset;
      const imgs = d.modalImgs
        ? d.modalImgs.split(',').map(s => s.trim()).filter(Boolean)
        : (d.modalImg ? [d.modalImg] : []);
      return { 
        name: d.modalName, 
        icon: d.modalIcon, 
        award: d.modalAward,
        desc: d.modalDesc, /* Added description */
        img: imgs[0] || '', 
        tags: (d.modalTags || '').split(','), 
        realIdx: ((i % n) + n) % n 
      };
    }

    function renderSpotCard(el, i) {
      const d = getProjectData(i);
      if (!d) { el.innerHTML = ''; return; }
      el.innerHTML =
        `<div class="spot-img">` +
          (d.img ? `<img src="${d.img}" alt="${d.name}" loading="lazy">` : `<span class="spot-icon">${d.icon || ''}</span>`) +
          (d.award ? `<div class="spot-award">${d.award}</div>` : '') +
        `</div>` +
        `<div class="spot-info">` +
          `<div class="spot-name">${d.name || ''}</div>` +
          (el.classList.contains('spot-center') && d.desc ? `<div class="spot-desc">${d.desc}</div>` : '') +
          `<div class="tag-list">${d.tags.map(t => `<span class="tag">${t.trim()}</span>`).join('')}</div>` +
        `</div>`;
      el.dataset.realIdx = d.realIdx;
    }

    function updateSpotlight() {
      const n = srcCards.length;
      const prevIdx   = ((spotIdx - 1) % n + n) % n;
      const nextIdx   = (spotIdx + 1) % n;
      renderSpotCard(spotPrevCard,   prevIdx);
      renderSpotCard(spotCenterCard, spotIdx);
      renderSpotCard(spotNextCard,   nextIdx);
      // highlight active card in grid
      grid.querySelectorAll('.project-win').forEach((c, i) => {
        c.classList.toggle('spot-active', i === spotIdx);
      });
    }

    function openModal(realIdx) {
      const card = srcCards[realIdx];
      if (!card) return;
      card.click();
    }

    function populateGrid() {
      grid.innerHTML = '';
      srcCards.forEach((card, i) => {
        const clone = card.cloneNode(true);
        clone.style.flex = '';
        clone.addEventListener('click', e => {
          if (e.target.closest('.project-link')) return;
          spotIdx = i;
          updateSpotlight();
          spotCenterCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        grid.appendChild(clone);
      });
    }

    function openProjectsPage(startIdx) {
      spotIdx = startIdx || 0;
      populateGrid();
      updateSpotlight();
      overlay.classList.add('is-open');
      overlay.removeAttribute('aria-hidden');
      document.body.style.overflow = 'hidden';

      // Support mobile back button
      if (!window.history.state || !window.history.state.projectsOpen) {
        window.history.pushState({ projectsOpen: true }, "");
      }
    }

    function closeProjectsPageUI() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    function closeProjectsPage() {
      if (window.history.state && window.history.state.projectsOpen) {
        window.history.back();
      } else {
        closeProjectsPageUI();
      }
    }

    window.addEventListener('popstate', (e) => {
      if (!e.state || !e.state.projectsOpen) {
        closeProjectsPageUI();
      }
    });

    expandBtn.addEventListener('click', () => openProjectsPage(0));

    closeBtn.addEventListener('click', closeProjectsPage);
    closeBtn.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') closeProjectsPage(); });
    overlay.addEventListener('click', e => { if (e.target === overlay) closeProjectsPage(); });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeProjectsPage();
    });

    spotPrev.addEventListener('click', () => {
      spotIdx = ((spotIdx - 1) % srcCards.length + srcCards.length) % srcCards.length;
      updateSpotlight();
    });
    spotNext.addEventListener('click', () => {
      spotIdx = (spotIdx + 1) % srcCards.length;
      updateSpotlight();
    });

    // clicking a spotlight card opens the detail modal
    [spotPrevCard, spotCenterCard, spotNextCard].forEach(el => {
      el.addEventListener('click', () => {
        const ri = parseInt(el.dataset.realIdx);
        if (!isNaN(ri)) {
          if (el === spotCenterCard) {
            openModal(ri);
          } else {
            spotIdx = ri;
            updateSpotlight();
          }
        }
      });
    });
  })();

  // ── ⌘ logo click → Snake ────────────────────────────────────
  document.getElementById('logo-cmd')?.addEventListener('click', (e) => {
    e.preventDefault();
    startSnakeGame();
  });

  // ── Interactive terminal ─────────────────────────────────────
  const terminal   = document.getElementById('terminal');
  const tInput     = document.getElementById('t-input');
  const tTyped     = document.getElementById('t-typed');
  const tOutput    = document.getElementById('terminal-output');
  const tHint      = document.getElementById('t-mobile-hint');

  if (!terminal || !tInput || !tTyped || !tOutput) return;

  const history = [];
  let historyIdx = -1;

  // SVG brand icons (used in `contact` command output)
  const ICON_MAIL = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M2 4h20v16H2V4zm10 9L4 7v11h16V7l-8 6zM4 5l8 6 8-6H4z"/></svg>';
  const ICON_GH   = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2c-3.3.7-4-1.6-4-1.6-.6-1.4-1.4-1.8-1.4-1.8-1.1-.7.1-.7.1-.7 1.2 0 1.9 1.2 1.9 1.2 1.1 1.9 2.9 1.4 3.6 1 0-.8.4-1.4.7-1.7-2.7-.3-5.5-1.3-5.5-6 0-1.2.5-2.3 1.3-3.1-.2-.4-.6-1.6 0-3.2 0 0 1-.3 3.4 1.2a11.5 11.5 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.7 1.6.2 2.8.1 3.2.8.8 1.3 1.9 1.3 3.1 0 4.6-2.8 5.6-5.5 5.9.5.4.9 1.1.9 2.3v3.3c0 .3.1.7.8.6A12 12 0 0 0 12 .3"/></svg>';
  const ICON_LI   = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.7a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4zM20 19h-3v-5.6c0-1.4-.5-2.3-1.7-2.3-1 0-1.5.6-1.7 1.3-.1.2-.1.6-.1.9V19h-3V8h3v1.3c.4-.6 1.1-1.5 2.8-1.5 2 0 3.6 1.3 3.6 4.2V19z"/></svg>';

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, c => ({
      '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
    })[c]);
  }

  function appendRaw(html, cls) {
    const el = document.createElement('span');
    el.className = cls || 't-out-line';
    el.innerHTML = html;
    tOutput.appendChild(el);
  }

  function appendLine(html) { appendRaw(html, 't-out-line'); }
  function appendArt(text)  { appendRaw(text, 't-mac-art'); }
  function appendBomb(text) { appendRaw(text, 't-bomb'); }
  function appendBlank()    { appendRaw('&nbsp;', 't-out-line'); }

  function scrollDown() {
    requestAnimationFrame(() => { terminal.scrollTop = terminal.scrollHeight; });
  }

  // ── Easter-egg ASCII art (classic Mac vibes) ─────────────────
  const HAPPY_MAC =
`    _______________
   |   ___________ |
   |  |           ||
   |  |  ◠     ◠  ||
   |  |     ⌣     ||
   |  |___________||
   |_______________|
        \\_______/
        Welcome to Macintosh.`;

  const SAD_MAC =
`    _______________
   |   ___________ |
   |  |           ||
   |  |  X     X  ||
   |  |     ⌒     ||
   |  |___________||
   |_______________|
        \\_______/
        System Failure.`;

  const BOMB =
`   ╔══════════════════════════╗
   ║                          ║
   ║   ●  Sorry, a system     ║
   ║      error occurred.     ║
   ║                          ║
   ║      ID = 02   Bomb      ║
   ║                          ║
   ║     ┌─────────────┐      ║
   ║     │   Restart   │      ║
   ║     └─────────────┘      ║
   ║                          ║
   ╚══════════════════════════╝`;

  const COFFEE =
`        (  )   (   )  )
         ) (   )  (  (
         ( )  (    ) )
        _____________
       <_____________> ___
       |             |/ _ \\
       |               | | |
       |               |_| |
    ___|             |\\___/
   /    \\___________/    \\
   \\_____________________/

   "It compiles. Time for coffee."`;

  const FLOPPY =
`    ┌──────────────────┐
    │ ████   ╔══════╗  │
    │        ║      ║  │
    │        ║      ║  │
    │        ║      ║  │
    │        ║ M T  ║  │
    │        ║ .dev ║  │
    │        ║      ║  │
    │        ╚══════╝  │
    └──────────────────┘
    saved to disk.`;

  const FORTUNES = [
    'Talk is cheap. Show me the code.   — Linus Torvalds',
    'Premature optimization is the root of all evil.  — Donald Knuth',
    'Walking on water and developing software from a specification are easy if both are frozen.  — Edward V. Berard',
    'There are only two hard things in CS: cache invalidation and naming things.  — Phil Karlton',
    'Programs must be written for people to read.  — Harold Abelson',
    'Simplicity is the ultimate sophistication.  — Leonardo da Vinci',
    'Make it work, make it right, make it fast.  — Kent Beck',
    'Design is not just what it looks like. Design is how it works.  — Steve Jobs',
    'The best way to predict the future is to invent it.  — Alan Kay',
    'Real artists ship.  — Steve Jobs'
  ];

  function matrixRain() {
    const chars = '01ABCDEF∆∇⌘□◇◆◈◉◐◑◒◓✦';
    for (let i = 0; i < 8; i++) {
      let line = '';
      for (let j = 0; j < 56; j++) {
        line += chars[Math.floor(Math.random() * chars.length)];
      }
      appendLine('<span class="t-comment">' + escapeHtml(line) + '</span>');
    }
    appendLine('wake up.');
  }

  function bootSequence() {
    [
      'Booting System 1.0...',
      'Checking memory... <span class="t-cmd">OK (128K)</span>',
      'Loading Finder... <span class="t-cmd">OK</span>',
      'Mounting disk... <span class="t-cmd">OK</span>',
      ' '
    ].forEach(l => appendLine(l));
    appendArt(HAPPY_MAC);
  }

  // ── Commands ─────────────────────────────────────────────────
  const commands = {
    'whoami': () => {
      appendLine('marc lumbreras — junior developer & cs student, barcelona.');
      appendLine('currently building things that matter.');
    },

    'ls': () => {
      appendLine('drwxr--  project_01/   portfolio_website');
      appendLine('drwxr--  project_02/   open_source_tool');
      appendLine('drwxr--  project_03/   saas_product');
    },

    'cat about.txt': () => {
      appendLine('name:     Marc Lumbreras');
      appendLine('role:     Junior Developer · CS Student');
      appendLine('stack:    Python, TypeScript, React, Playwright');
      appendLine('edu:      Computer Engineering, TecnoCampus');
      appendLine('status:   open to opportunities');
      appendLine('vibe:     clean code, good UX, ship fast');
    },

    'cat cv.pdf': () => {
      appendLine('Downloading CV...');
      const a = document.createElement('a');
      a.href = 'Profile.pdf';
      a.download = 'Marc_Lumbreras_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    },

    'cv': () => {
      appendLine('Opening CV...');
      const a = document.createElement('a');
      a.href = 'Profile.pdf';
      a.download = 'Marc_Lumbreras_CV.pdf';
      document.body.appendChild(a);
      a.click();
      a.remove();
    },

    'contact': () => {
      appendLine('<a class="t-link" href="mailto:mtorregrosadev@gmail.com">' + ICON_MAIL + 'mtorregrosadev@gmail.com<span class="t-link-arrow">↗</span></a>');
      appendLine('<a class="t-link" href="https://github.com/mtorregrosadev" target="_blank" rel="noopener">' + ICON_GH + 'github.com/mtorregrosadev<span class="t-link-arrow">↗</span></a>');
      appendLine('<a class="t-link" href="https://linkedin.com/in/marclumbreras" target="_blank" rel="noopener">' + ICON_LI + 'linkedin.com/in/marclumbreras<span class="t-link-arrow">↗</span></a>');
    },

    'help': () => {
      appendLine('Available commands:');
      appendLine('  whoami         — who am I');
      appendLine('  ls             — list projects');
      appendLine('  cat about.txt  — read my bio');
      appendLine('  cat cv.pdf     — download my CV');
      appendLine('  cv             — download my CV');
      appendLine('  contact        — get my links');
      appendLine('  clear          — clear terminal');
      appendLine('  help           — show this list');
      appendLine('  sudo hire marc — (try it)');
      appendLine('<span class="t-comment">  // psst — there are easter eggs hidden around here.</span>');
    },

    'sudo hire marc': () => {
      appendLine('Permission granted.');
      appendLine('Redirecting to contact form...');
      setTimeout(() => {
        const target = document.getElementById('contact');
        if (target) target.scrollIntoView({ behavior: 'smooth' });
      }, 600);
    },

    'clear': () => {
      tOutput.innerHTML = '';
    },

    // ── Easter eggs (classic Mac) ─────────────────────────────
    'happy':    () => appendArt(HAPPY_MAC),
    'happymac': () => appendArt(HAPPY_MAC),
    'sad':      () => appendArt(SAD_MAC),
    'sadmac':   () => appendArt(SAD_MAC),
    'bomb':     () => appendBomb(BOMB),
    'crash':    () => appendBomb(BOMB),
    'coffee':   () => appendArt(COFFEE),
    'save':     () => appendArt(FLOPPY),
    'boot':     () => bootSequence(),
    'reboot':   () => bootSequence(),
    'matrix':   () => matrixRain(),
    'fortune':  () => appendLine('<span class="t-comment">' + escapeHtml(FORTUNES[Math.floor(Math.random() * FORTUNES.length)]) + '</span>'),
    'snake':    () => { appendLine('booting snake.app...'); setTimeout(startSnakeGame, 250); },
    'play':     () => { appendLine('booting snake.app...'); setTimeout(startSnakeGame, 250); },
    'tux': () => {
      appendArt(
`     .--.          def marc():
    |o_o |            skills = ["Python","TS","C++","ESP32"]
    |:_/ |            certs  = ["IT Specialist - Python"]
   //   \\ \\           awards = ["TecnoCampus Hack","InterHack"]
  (|     | )          while True:
 /'\\_ _/'\\              learn(); build(); ship()
 \\___)=(___/`
      );
    },
    'linux':  () => commands['tux'](),
    'uname':  () => appendLine('Linux marc-portfolio 6.1.0-lasalle #1 SMP Barcelona, Spain GNU/Linux x86_64'),
    'uname -a': () => commands['uname'](),
    'hello':    () => appendLine('Hi there. Try `help` to see what I can do.'),
    'date':     () => appendLine(new Date().toString()),
    'konami':   () => appendLine('<span class="t-comment">↑ ↑ ↓ ↓ ← → ← → B A   ...try it.</span>'),
    'exit':   () => appendLine('there is no escape.'),
    'quit':   () => appendLine('there is no escape.'),
    ':q':     () => appendLine('this isn\'t vim, friend.'),
    ':wq':    () => appendLine('this isn\'t vim, friend.'),
    'cd':     () => appendLine('there\'s nowhere to go from here.'),
    'rm -rf /': () => {
      appendLine('nice try.');
      appendBomb(BOMB);
    },
    'sudo make me a sandwich':  () => appendLine('okay.'),
    'make me a sandwich':       () => appendLine('what? make it yourself.'),
    'echo':  () => appendLine(''),
    'pwd':   () => appendLine('/home/marc/portfolio'),
    'man':   () => appendLine('what manual page do you want?'),
    'open':  () => appendLine('usage: open <url>')
  };

  // ── Run a command ────────────────────────────────────────────
  function runCommand(raw) {
    const cmd = raw.trim();
    appendLine(
      '<span class="t-prompt">user@mtorregrosa:~$ </span>' +
      '<span class="t-cmd">' + escapeHtml(cmd) + '</span>'
    );

    if (cmd !== '') {
      history.push(cmd);
      historyIdx = history.length;
    }

    if (cmd === '') {
      // just a blank line
    } else {
      let key = cmd.toLowerCase();
      // aliases
      if (key === 'ls projects/' || key === 'ls projects') key = 'ls';
      if (key.startsWith('echo ')) {
        appendLine(escapeHtml(cmd.slice(5)));
      } else if (key.startsWith('open ')) {
        const url = cmd.slice(5).trim();
        appendLine('opening ' + escapeHtml(url) + ' ...');
        try { window.open(url, '_blank', 'noopener'); } catch (_) {}
      } else if (commands[key]) {
        commands[key]();
      } else {
        appendLine('command not found: ' + escapeHtml(cmd));
        appendLine("type 'help' to see available commands.");
      }
    }
    appendBlank();
    scrollDown();
  }

  // ── Input wiring (no offscreen input → no scroll jump) ──────
  function focusInput() {
    tInput.focus({ preventScroll: true });
    if (tHint) tHint.classList.add('is-hidden');
  }

  // CTA "Get in touch" link logic
  const ctaContact = document.querySelector('[data-i18n="hero-cta-contact"]');
  if (ctaContact) {
    ctaContact.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById('contact');
      if (target) target.scrollIntoView({ behavior: 'smooth' });
      // Small delay for scroll animation
      setTimeout(() => {
        tOutput.innerHTML = ''; // Always clear first
        runCommand('contact');
        focusInput();
      }, 650);
    });
  }

  terminal.addEventListener('mousedown', (e) => {
    if (e.target.closest && e.target.closest('a')) return;
    // don't hijack text selection
    const sel = window.getSelection && window.getSelection().toString();
    if (sel) return;
    // schedule focus AFTER the click so we don't fight the browser
    setTimeout(focusInput, 0);
  });

  tInput.addEventListener('input', () => {
    tTyped.textContent = tInput.value;
    scrollDown();
  });

  tInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      runCommand(tInput.value);
      tInput.value = '';
      tTyped.textContent = '';
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length === 0) return;
      historyIdx = Math.max(0, historyIdx - 1);
      tInput.value = history[historyIdx] || '';
      tTyped.textContent = tInput.value;
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (history.length === 0) return;
      historyIdx = Math.min(history.length, historyIdx + 1);
      tInput.value = history[historyIdx] || '';
      tTyped.textContent = tInput.value;
    } else if (e.key === 'l' && (e.ctrlKey || e.metaKey)) {
      e.preventDefault();
      tOutput.innerHTML = '';
    } else if (e.key === 'Tab') {
      e.preventDefault();
    }
  });

  // ── Konami code (↑↑↓↓←→←→BA) ────────────────────────────────
  const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a'];
  let kIdx = 0;
  window.addEventListener('keydown', (e) => {
    const expected = KONAMI[kIdx];
    if (e.key.toLowerCase() === expected.toLowerCase()) {
      kIdx++;
      if (kIdx === KONAMI.length) {
        kIdx = 0;
        triggerKonami();
      }
    } else {
      kIdx = (e.key === KONAMI[0]) ? 1 : 0;
    }
  });

  function triggerKonami() {
    // clear any stray 'ba' the user might have typed into the input
    tInput.value = '';
    tTyped.textContent = '';
    appendLine('<span class="t-cmd">>>> CHEAT CODE ACCEPTED <<<</span>');
    appendLine('<span class="t-comment">launching snake.app...</span>');
    appendBlank();
    scrollDown();
    setTimeout(startSnakeGame, 350);
  }

  // ── Snake game (Konami / `snake` command) ───────────────────
  let gameActive = false;

  function startSnakeGame() {
    if (gameActive) return;
    gameActive = true;

    // High score from localStorage
    let high = 0;
    try { high = parseInt(localStorage.getItem('mt_snake_high') || '0', 10) || 0; } catch (_) {}

    const overlay = document.createElement('div');
    overlay.className = 'game-overlay';
    overlay.innerHTML = `
      <div class="game-window" role="dialog" aria-label="Snake game">
        <div class="title-bar">
          <div class="dots">
            <span class="dot red" data-action="quit" title="Close"></span>
            <span class="dot yellow"></span>
            <span class="dot green"></span>
          </div>
          <span class="title-text">snake.app</span>
        </div>
        <div class="game-body">
          <div class="game-hud">
            <span>SCORE: <b id="g-score">0</b></span>
            <span class="g-best">BEST: <b id="g-high">${high}</b></span>
          </div>
          <div class="game-stage">
            <canvas id="g-canvas" width="400" height="300"></canvas>
            <div class="game-screen" id="g-screen">
              <p class="g-screen-title">SNAKE</p>
              <p class="g-screen-sub">eat the apples. don't bite yourself.</p>
              <button class="game-btn primary" id="g-start" type="button">PRESS  ▶  START</button>
              <p class="g-screen-hint">← ↑ ↓ → to move · SPACE to pause · ESC to quit</p>
            </div>
          </div>
          <div class="game-buttons">
            <button class="game-btn" id="g-quit" type="button">Quit</button>
            <button class="game-btn primary" id="g-restart" type="button">New game</button>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    const canvas = overlay.querySelector('#g-canvas');
    const ctx    = canvas.getContext('2d');
    const screen = overlay.querySelector('#g-screen');
    const scoreEl = overlay.querySelector('#g-score');
    const highEl  = overlay.querySelector('#g-high');

    const CELL = 20;
    const COLS = canvas.width  / CELL;   // 20
    const ROWS = canvas.height / CELL;   // 15
    const TICK_MS = 110;

    let snake, dir, nextDir, food, score, alive, paused, started, timer;

    function reset() {
      snake = [{x:8,y:7},{x:7,y:7},{x:6,y:7}];
      dir = 'right';
      nextDir = 'right';
      food = newFood();
      score = 0;
      alive = true;
      paused = false;
      started = false;
      scoreEl.textContent = '0';
      showScreen('SNAKE', 'eat the apples. don\'t bite yourself.', 'PRESS  ▶  START');
      draw();
    }

    function newFood() {
      let p;
      do {
        p = { x: Math.floor(Math.random() * COLS), y: Math.floor(Math.random() * ROWS) };
      } while (snake.some(s => s.x === p.x && s.y === p.y));
      return p;
    }

    function showScreen(title, sub, btnLabel, hideHint) {
      screen.style.display = 'flex';
      screen.innerHTML =
        `<p class="g-screen-title">${title}</p>` +
        (sub ? `<p class="g-screen-sub">${sub}</p>` : '') +
        (btnLabel ? `<button class="game-btn primary" id="g-start" type="button">${btnLabel}</button>` : '') +
        (hideHint ? '' : '<p class="g-screen-hint">← ↑ ↓ → / SWIPE to move<br>SPACE / TAP to pause</p>');
      const startBtn = screen.querySelector('#g-start');
      if (startBtn) startBtn.addEventListener('click', startTick);
    }

    function hideScreen() { screen.style.display = 'none'; }

    function startTick() {
      // if the previous game ended, reset state before resuming
      if (!alive) reset();
      hideScreen();
      started = true;
      alive = true;
      paused = false;
      clearInterval(timer);
      timer = setInterval(tick, TICK_MS);
    }

    function tick() {
      if (!alive || paused) return;
      dir = nextDir;
      const head = { x: snake[0].x, y: snake[0].y };
      if (dir === 'up')    head.y -= 1;
      if (dir === 'down')  head.y += 1;
      if (dir === 'left')  head.x -= 1;
      if (dir === 'right') head.x += 1;

      if (head.x < 0 || head.x >= COLS || head.y < 0 || head.y >= ROWS ||
          snake.some(s => s.x === head.x && s.y === head.y)) {
        gameOver();
        return;
      }

      snake.unshift(head);
      if (head.x === food.x && head.y === food.y) {
        score += 1;
        scoreEl.textContent = score;
        food = newFood();
      } else {
        snake.pop();
      }
      draw();
    }

    function draw() {
      // background
      ctx.fillStyle = '#FAF7F0';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // dotted grid (subtle)
      ctx.fillStyle = 'rgba(26,26,26,0.08)';
      for (let y = 0; y < ROWS; y++) {
        for (let x = 0; x < COLS; x++) {
          ctx.fillRect(x * CELL + CELL/2 - 0.5, y * CELL + CELL/2 - 0.5, 1, 1);
        }
      }

      // food: little pixel apple (red square + dark stem)
      const fx = food.x * CELL, fy = food.y * CELL;
      ctx.fillStyle = '#CC3300';
      ctx.fillRect(fx + 4, fy + 6, 12, 12);
      ctx.fillRect(fx + 5, fy + 5, 10, 1);
      ctx.fillRect(fx + 5, fy + 18, 10, 1);
      ctx.fillStyle = '#1A1A1A';
      ctx.fillRect(fx + 11, fy + 3, 2, 3); // stem
      ctx.fillStyle = '#5BAD72';
      ctx.fillRect(fx + 13, fy + 4, 3, 2); // leaf

      // snake
      snake.forEach((s, i) => {
        ctx.fillStyle = i === 0 ? '#1A1A1A' : '#4A7C59';
        ctx.fillRect(s.x * CELL + 1, s.y * CELL + 1, CELL - 2, CELL - 2);
        if (i === 0) {
          // eyes
          ctx.fillStyle = '#FAF7F0';
          ctx.fillRect(s.x * CELL + 5,  s.y * CELL + 5, 3, 3);
          ctx.fillRect(s.x * CELL + 12, s.y * CELL + 5, 3, 3);
        }
      });

      // border
      ctx.strokeStyle = '#1A1A1A';
      ctx.lineWidth = 2;
      ctx.strokeRect(1, 1, canvas.width - 2, canvas.height - 2);
    }

    function gameOver() {
      alive = false;
      clearInterval(timer);
      if (score > high) {
        high = score;
        highEl.textContent = high;
        try { localStorage.setItem('mt_snake_high', String(high)); } catch (_) {}
        showScreen('NEW HIGH SCORE', 'score: ' + score, 'PRESS  ▶  PLAY AGAIN');
      } else {
        showScreen('GAME OVER', 'score: ' + score + ' · best: ' + high, 'PRESS  ▶  PLAY AGAIN');
      }
    }

    function close() {
      clearInterval(timer);
      document.removeEventListener('keydown', onKey, true);
      overlay.removeEventListener('click', onOverlayClick);
      canvas.removeEventListener('touchstart', onTouchStart);
      canvas.removeEventListener('touchmove', onTouchMove);
      canvas.removeEventListener('touchend', onTouchEnd);
      overlay.remove();
      gameActive = false;
      focusInput();
    }

    function onKey(e) {
      // capture-phase: stops the terminal from seeing these keys
      if (e.key === 'Escape') { e.preventDefault(); e.stopPropagation(); close(); return; }
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault(); e.stopPropagation();
        if (!started) { startTick(); return; }
        if (!alive)   { reset(); startTick(); return; }
        paused = !paused;
        if (paused) showScreen('PAUSED', null, 'RESUME');
        else        hideScreen();
        return;
      }
      if (e.key === 'Enter') {
        e.preventDefault(); e.stopPropagation();
        if (!started || !alive) { reset(); startTick(); }
        return;
      }
      const k = e.key;
      if (k === 'ArrowUp'    && dir !== 'down')  { nextDir = 'up';    e.preventDefault(); e.stopPropagation(); }
      if (k === 'ArrowDown'  && dir !== 'up')    { nextDir = 'down';  e.preventDefault(); e.stopPropagation(); }
      if (k === 'ArrowLeft'  && dir !== 'right') { nextDir = 'left';  e.preventDefault(); e.stopPropagation(); }
      if (k === 'ArrowRight' && dir !== 'left')  { nextDir = 'right'; e.preventDefault(); e.stopPropagation(); }
    }

    // ── Touch Controls (Swipe) ──────────────────────────────────
    let touchStartX = 0;
    let touchStartY = 0;

    function onTouchStart(e) {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    }

    function onTouchMove(e) {
      // Prevent scrolling the page while swiping on the canvas
      e.preventDefault();
    }

    function onTouchEnd(e) {
      if (!started || !alive) return;
      
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      const dx = touchEndX - touchStartX;
      const dy = touchEndY - touchStartY;
      const absDx = Math.abs(dx);
      const absDy = Math.abs(dy);

      // Threshold to distinguish swipe from tap
      if (Math.max(absDx, absDy) > 30) {
        if (absDx > absDy) {
          // Horizontal swipe
          if (dx > 0 && dir !== 'left')  nextDir = 'right';
          if (dx < 0 && dir !== 'right') nextDir = 'left';
        } else {
          // Vertical swipe
          if (dy > 0 && dir !== 'up')   nextDir = 'down';
          if (dy < 0 && dir !== 'down') nextDir = 'up';
        }
      } else {
        // Tap to pause/resume
        paused = !paused;
        if (paused) showScreen('PAUSED', null, 'RESUME', true); // hide hints on pause screen
        else        hideScreen();
      }
    }

    function onOverlayClick(e) {
      const action = e.target.getAttribute && e.target.getAttribute('data-action');
      if (action === 'quit') return close();
      if (e.target.id === 'g-quit') return close();
      if (e.target.id === 'g-restart') { reset(); startTick(); return; }
      // click outside the window closes
      if (e.target === overlay) close();
    }

    document.addEventListener('keydown', onKey, true);
    overlay.addEventListener('click', onOverlayClick);
    
    // Attach touch listeners to canvas
    canvas.addEventListener('touchstart', onTouchStart, { passive: false });
    canvas.addEventListener('touchmove', onTouchMove, { passive: false });
    canvas.addEventListener('touchend', onTouchEnd);


    reset();
  }

  // ── Lightbox Logic ───────────────────────────────────────────
  (function() {
    const overlay = document.getElementById('lightbox-overlay');
    const closeBtn = document.getElementById('lightbox-close');
    
    if (!overlay || !closeBtn) return;

    function closeLightbox() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
    }

    closeBtn.addEventListener('click', closeLightbox);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) closeLightbox();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) closeLightbox();
    });
  })();
})();
