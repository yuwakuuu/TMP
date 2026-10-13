(() => {
  const doc = document.documentElement;
  doc.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

  /* Loading screen: fonts, page and the 3D logo each fill part of the bar ------- */
  const loader = document.getElementById('loader');
  if (loader) {
    const bar = loader.querySelector('[data-progress]');
    const pct = loader.querySelector('[data-pct]');
    const quick = doc.classList.contains('quick-load') || reduceMotion;
    const started = performance.now();
    const minTime = quick ? 350 : 1900;
    let target = 0.08, shown = 0, done = false;
    const steps = { fonts: 0.3, page: 0.3, logo: 0.4 };
    const complete = (name) => { if (steps[name]) { target += steps[name]; steps[name] = 0; } };
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => complete('fonts'));
    if (document.readyState === 'complete') complete('page'); else window.addEventListener('load', () => complete('page'));
    window.addEventListener('tmp:3d', (e) => { if (e.detail !== 'infinity') complete('logo'); });
    const finish = () => {
      if (done) return;
      done = true;
      doc.classList.add('loaded');
      try { sessionStorage.setItem('tmp-loaded', '1'); } catch (e) { /* private mode */ }
      setTimeout(() => loader.remove(), 1400);
    };
    const tick = () => {
      if (done) return;
      const elapsed = performance.now() - started;
      // creep toward the next milestone so the bar never stalls
      const ceiling = Math.min(0.97, target + 0.12);
      shown += (Math.min(ceiling, Math.max(target, shown + 0.0015)) - shown) * 0.12;
      if (target >= 0.99) shown += (1 - shown) * 0.25;
      bar.style.transform = `scaleX(${shown.toFixed(3)})`;
      pct.textContent = Math.round(shown * 100);
      if ((target >= 0.99 && shown > 0.985 && elapsed > minTime) || elapsed > 4500) {
        bar.style.transform = 'scaleX(1)';
        pct.textContent = '100';
        setTimeout(finish, quick ? 0 : 260);
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  } else {
    doc.classList.add('loaded');
  }

  /* Navigation: border on scroll, mobile sheet, active link ------------------ */
  const nav = document.getElementById('nav');
  const toggle = nav.querySelector('.nav__toggle');
  const sheet = document.getElementById('sheet');

  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 8);

  // the nav turns dark while a dark section sits underneath it
  const darkUnder = new Set();
  const darkIO = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? darkUnder.add(en.target) : darkUnder.delete(en.target)));
    nav.classList.toggle('is-dark', darkUnder.size > 0);
  }, { rootMargin: '0px 0px -96% 0px' });
  document.querySelectorAll('[data-dark]').forEach((el) => darkIO.observe(el));
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
    if (i > 0) { el.style.transitionDelay = Math.min(i, 5) * 80 + 'ms'; el.style.setProperty('--i', Math.min(i, 5)); }
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

  /* Contact form: validate, then prepare the message to send ---------------- */
  const note = form.querySelector('.form__note');
  const ready = document.getElementById('form-ready');
  const copyBtn = document.getElementById('copy-message');
  let message = '';
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
    const body = lines.join('\n');
    message = `Subject: ${subject}\n\n${body}`;
    ready.querySelector('[data-email-text]').textContent = form.dataset.email;
    ready.querySelector('#open-mail').href = `mailto:${form.dataset.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    note.textContent = '';
    ready.hidden = false;
    ready.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'nearest' });
  });
  copyBtn.addEventListener('click', () => {
    const done = () => { copyBtn.textContent = 'Copied'; setTimeout(() => { copyBtn.textContent = 'Copy message'; }, 2000); };
    const fallback = () => {
      const t = document.createElement('textarea');
      t.value = message; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); done(); } catch (_) { note.textContent = 'Select and copy your message from the form above.'; }
      t.remove();
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(message).then(done, fallback);
    else fallback();
  });
  form.querySelectorAll('input').forEach((input) => input.addEventListener('input', () => input.classList.remove('is-invalid')));

  /* Cards lean toward the pointer, with a soft glare ------------------------- */
  if (finePointer && !reduceMotion) {
    document.querySelectorAll('.tilt').forEach((card) => {
      let raf = 0, ev = null;
      const apply = () => {
        raf = 0;
        const r = card.getBoundingClientRect();
        const x = (ev.clientX - r.left) / r.width, y = (ev.clientY - r.top) / r.height;
        card.style.setProperty('--ry', ((x - 0.5) * 8).toFixed(2) + 'deg');
        card.style.setProperty('--rx', ((0.5 - y) * 6).toFixed(2) + 'deg');
        card.style.setProperty('--mx', (x * 100).toFixed(1) + '%');
        card.style.setProperty('--my', (y * 100).toFixed(1) + '%');
      };
      card.addEventListener('pointermove', (e) => { ev = e; card.classList.add('is-tilting'); if (!raf) raf = requestAnimationFrame(apply); });
      card.addEventListener('pointerleave', () => { card.classList.remove('is-tilting'); card.style.removeProperty('--rx'); card.style.removeProperty('--ry'); });
    });

    /* Buttons drift toward the cursor a little */
    document.querySelectorAll('.magnetic').forEach((btn) => {
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        btn.style.transform = `translate(${(dx * 0.18).toFixed(1)}px, ${(dy * 0.28).toFixed(1)}px)`;
      });
      btn.addEventListener('pointerleave', () => { btn.style.transform = ''; });
    });
  }

  /* Prices count up the first time they scroll into view --------------------- */
  const counters = document.querySelectorAll('[data-count]');
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const fmt = (n) => n.toLocaleString('en-US');
    const countIO = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        countIO.unobserve(en.target);
        const out = en.target.querySelector('b');
        const end = +en.target.dataset.count;
        const t0 = performance.now(), dur = 1100;
        const step = (now) => {
          const p = Math.min(1, (now - t0) / dur);
          const eased = 1 - Math.pow(1 - p, 4);
          out.textContent = fmt(Math.round(end * eased / (end >= 1000 ? 10 : 5)) * (end >= 1000 ? 10 : 5));
          if (p < 1) requestAnimationFrame(step); else out.textContent = fmt(end);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => countIO.observe(c));
  }

  /* A tap on a chrome object gives a tiny buzz on phones that support it */
  document.addEventListener('tmp:splash', () => { try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* not supported */ } });

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
