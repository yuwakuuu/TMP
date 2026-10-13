(() => {
  const doc = document.documentElement;
  doc.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Navigation: border on scroll, mobile sheet, active link ------------------ */
  const nav = document.getElementById('nav');
  const toggle = nav.querySelector('.nav__toggle');
  const sheet = document.getElementById('sheet');

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  const setMenu = (open) => {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    sheet.hidden = !open;
  };
  toggle.addEventListener('click', () => setMenu(sheet.hidden));
  sheet.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sheet.hidden) { setMenu(false); toggle.focus(); } });
  window.matchMedia('(min-width: 861px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

  const navLinks = [...nav.querySelectorAll('.nav__links a')];
  const sections = navLinks.map((a) => document.querySelector(a.getAttribute('href'))).filter(Boolean);
  const spy = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((a) => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach((s) => spy.observe(s));

  /* Reveal on scroll, staggered within groups -------------------------------- */
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const siblings = [...el.parentElement.children].filter((c) => c.classList.contains('reveal'));
    const i = siblings.indexOf(el);
    if (i > 0) el.style.transitionDelay = Math.min(i, 5) * 80 + 'ms';
  });
  if ('IntersectionObserver' in window && !reduceMotion) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add('is-in'); io.unobserve(entry.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add('is-in'));
  }

  /* Hero showcase: laptop + phone cycle through projects ---------------------- */
  const projects = [
    { name: 'MadeByWaku', url: 'yuwakuuu.github.io/madebywaku' },
    { name: 'Happy Pets Palace', url: 'yuwakuuu.github.io/happypetspalace-redesign' },
    { name: 'Total Quality Management', url: 'tqm-website.vercel.app' },
    { name: 'The TOB Company', url: 'yuwakuonline.tail28063a.ts.net' },
  ];
  const lapImgs = document.querySelectorAll('.laptop__view img');
  const phoneImgs = document.querySelectorAll('.phone__view img');
  const dots = document.querySelectorAll('.dots button');
  const caption = document.querySelector('[data-caption]');
  const urlBar = document.querySelector('[data-url]');
  let current = 0;
  let timer;

  const show = (n) => {
    current = (n + projects.length) % projects.length;
    [lapImgs, phoneImgs].forEach((set) => set.forEach((img, i) => img.classList.toggle('is-on', i === current)));
    dots.forEach((d, i) => d.setAttribute('aria-selected', String(i === current)));
    caption.style.opacity = 0;
    setTimeout(() => {
      caption.textContent = projects[current].name;
      urlBar.textContent = projects[current].url;
      caption.style.opacity = 1;
    }, 200);
  };
  const play = () => {
    clearInterval(timer);
    if (!reduceMotion) timer = setInterval(() => show(current + 1), 4200);
  };
  dots.forEach((d, i) => d.addEventListener('click', () => { show(i); play(); }));
  // Pause while the hero is off screen or the tab is hidden.
  const showcase = document.querySelector('.showcase');
  let visible = true;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; visible ? play() : clearInterval(timer); }).observe(showcase);
  document.addEventListener('visibilitychange', () => { document.hidden ? clearInterval(timer) : visible && play(); });

  /* Statement: words light up as you scroll ----------------------------------- */
  const statement = document.querySelector('[data-scrub]');
  if (statement) {
    const words = [];
    const wrap = (node, accent) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const w = document.createElement('span');
            w.className = accent ? 'w accent-w' : 'w';
            w.textContent = part;
            words.push(w);
            frag.appendChild(w);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1) {
          wrap(child, true);
        }
      });
    };
    wrap(statement, false);

    if (reduceMotion) {
      words.forEach((w) => w.classList.add('is-lit'));
    } else {
      let ticking = false;
      const update = () => {
        ticking = false;
        const r = statement.getBoundingClientRect();
        const vh = window.innerHeight;
        // 0 when the block enters the lower part of the screen, 1 when it reaches the upper third.
        const p = Math.min(1, Math.max(0, (vh * 0.85 - r.top) / (r.height + vh * 0.45)));
        const lit = Math.round(p * words.length);
        words.forEach((w, i) => w.classList.toggle('is-lit', i < lit));
      };
      window.addEventListener('scroll', () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } }, { passive: true });
      window.addEventListener('resize', update);
      update();
    }
  }

  /* Pricing buttons pre-select the matching interest in the form ------------- */
  const form = document.getElementById('contact-form');
  document.querySelectorAll('[data-interest]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const box = form.querySelector(`input[name="interest"][value="${CSS.escape(btn.dataset.interest)}"]`);
      if (box) box.checked = true;
    });
  });

  /* Contact form: validate, then open the visitor's email app ---------------- */
  const note = form.querySelector('.form__note');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const name = form.elements.name;
    const email = form.elements.email;
    let firstBad = null;
    [name, email].forEach((input) => {
      const ok = input.value.trim() && input.checkValidity();
      input.classList.toggle('is-invalid', !ok);
      if (!ok && !firstBad) firstBad = input;
    });
    if (firstBad) {
      note.textContent = firstBad === name ? 'Please add your name.' : 'Please add a valid email address.';
      firstBad.focus();
      return;
    }
    const interests = data.getAll('interest');
    const lines = [
      `Name: ${data.get('name')}`,
      data.get('business') && `Business: ${data.get('business')}`,
      `Email: ${data.get('email')}`,
      data.get('phone') && `Phone: ${data.get('phone')}`,
      interests.length && `Interested in: ${interests.join(', ')}`,
      '',
      data.get('message') || '',
    ].filter((l) => l !== false && l !== null && l !== undefined && l !== 0);
    const subject = `New project inquiry${data.get('business') ? ' — ' + data.get('business') : ''}`;
    window.location.href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join('\n'))}`;
    note.textContent = 'Opening your email app… Thanks for reaching out!';
  });
  form.querySelectorAll('input').forEach((input) => input.addEventListener('input', () => input.classList.remove('is-invalid')));

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
