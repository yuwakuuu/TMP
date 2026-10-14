(() => {
  const doc = document.documentElement;
  doc.classList.add('js');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const M = !reduceMotion && window.Motion && window.Motion.animate ? window.Motion : null;
  if (M) doc.classList.add('has-motion');
  const spring = (stiffness = 140, damping = 20, extra = {}) => ({ type: 'spring', stiffness, damping, ...extra });

  /* Loading screen: fonts, page and the reveal video fill the bar. Then a tap starts the
     TMP logo reveal with its soundtrack (browsers only allow sound after a tap), and the
     page opens when it ends. Return visits in the same tab and reduced motion skip it. */
  const loader = document.getElementById('loader');
  if (loader) {
    const bar = loader.querySelector('[data-progress]');
    const pct = loader.querySelector('[data-pct]');
    const gate = loader.querySelector('[data-gate]');
    const skip = loader.querySelector('[data-skip]');
    const video = loader.querySelector('video');
    const quick = doc.classList.contains('quick-load') || reduceMotion || !video;
    const started = performance.now();
    const minTime = quick ? 300 : 1200;
    let target = 0.08, shown = 0, done = false;
    const steps = { fonts: 0.3, page: 0.3, video: 0.4 };
    const complete = (name) => { if (steps[name]) { target += steps[name]; steps[name] = 0; } };
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => complete('fonts'));
    if (document.readyState === 'complete') complete('page'); else window.addEventListener('load', () => complete('page'));
    if (quick) complete('video');
    else {
      window.TMP_GATE = true;
      video.preload = 'auto';
      video.load();
      // phones may not buffer until play, so don't wait on the video forever
      ['canplaythrough', 'error'].forEach((ev) => video.addEventListener(ev, () => complete('video'), { once: true }));
      setTimeout(() => complete('video'), 4000);
    }
    const finish = () => {
      if (done) return;
      done = true;
      doc.classList.add('loaded');
      window.dispatchEvent(new Event('tmp:loaded'));
      try { sessionStorage.setItem('tmp-loaded', '1'); } catch (e) { /* private mode */ }
      setTimeout(() => { if (video) video.pause(); loader.remove(); }, 1400);
    };
    const play = (withSound) => {
      loader.classList.add('is-playing');
      window.dispatchEvent(new CustomEvent('tmp:sound', { detail: withSound }));
      video.muted = !withSound;
      video.addEventListener('ended', finish, { once: true });
      video.addEventListener('error', finish, { once: true });
      // the soundtrack's last chord rings out; open the page as it fades
      video.addEventListener('timeupdate', () => { if (video.duration && video.currentTime > video.duration - 0.6) finish(); });
      const p = video.play();
      if (p) p.catch(() => { video.muted = true; video.play().catch(finish); });
      setTimeout(() => { skip.hidden = false; }, 1200);
    };
    gate.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-enter]');
      if (btn) play(btn.dataset.enter === 'sound');
    });
    skip.addEventListener('click', finish);
    const openGate = () => {
      loader.classList.add('is-ready');
      gate.hidden = false;
      gate.querySelector('[data-enter]').focus({ preventScroll: true });
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
      if ((target >= 0.99 && shown > 0.985 && elapsed > minTime) || elapsed > 6500) {
        bar.style.transform = 'scaleX(1)';
        pct.textContent = '100';
        setTimeout(quick ? finish : openGate, quick ? 0 : 260);
        return;
      }
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  } else {
    doc.classList.add('loaded');
    window.dispatchEvent(new Event('tmp:loaded'));
  }

  /* Chrome lettering: the bubble filter is measured in pixels, so each size of text gets
     its own copy scaled from the 96px master (#chrome-l). Re-run when the layout resizes. */
  const chromeMaster = document.getElementById('chrome-l');
  if (chromeMaster) {
    const defs = chromeMaster.parentNode;
    const made = new Set();
    const SCALED = { radius: 1, stdDeviation: 1, surfaceScale: 1, dy: 1 };
    const onLight = (el) => el.classList.contains('chrome--light') || !!el.closest('.footer, .section:not([data-dark]), .showcase-section');
    // text on light backgrounds uses a deeper, rimmed variant so it doesn't wash out
    const lightMaster = document.getElementById('chrome-light') || chromeMaster;
    const filterFor = (px, light) => {
      const k = Math.max(0.2, Math.round((px / 96) * 20) / 20);   // steps of 0.05
      const id = (light ? 'chrome-lt-k' : 'chrome-k') + Math.round(k * 100);
      if (!made.has(id)) {
        const f = (light ? lightMaster : chromeMaster).cloneNode(true);
        f.id = id;
        f.querySelectorAll('*').forEach((node) => {
          for (const attr of Object.keys(SCALED)) {
            const v = node.getAttribute(attr);
            if (v !== null && !isNaN(+v)) node.setAttribute(attr, (+v * k).toFixed(2));
          }
        });
        defs.appendChild(f);
        made.add(id);
      }
      return `url(#${id})`;
    };
    const chromeEls = [...document.querySelectorAll('.chrome')];
    const fitChrome = () => chromeEls.forEach((el) => { el.style.filter = filterFor(parseFloat(getComputedStyle(el).fontSize), onLight(el)); });
    fitChrome();
    let resizeTimer = 0;
    window.addEventListener('resize', () => { clearTimeout(resizeTimer); resizeTimer = setTimeout(fitChrome, 150); });
    if (document.fonts) document.fonts.ready.then(fitChrome);
  }

  /* Live demo: the TOB site loads only when asked, so it costs nothing until then */
  document.querySelectorAll('[data-live-start]').forEach((btn) => {
    btn.addEventListener('click', () => {
      const frame = btn.parentElement.querySelector('iframe');
      frame.src = frame.dataset.src;
      frame.hidden = false;
      btn.classList.add('is-gone');
      setTimeout(() => btn.remove(), 500);
      frame.focus({ preventScroll: true });
    });
  });

  /* Neon sign: split into letter tubes, switch on with a stutter, then buzz now and then */
  const neon = document.querySelector('[data-neon]');
  if (neon) {
    const text = neon.textContent;
    neon.textContent = '';
    const sr = document.createElement('span');
    sr.className = 'sr'; sr.textContent = text;
    const tubes = document.createElement('span');
    tubes.setAttribute('aria-hidden', 'true');
    const letters = [];
    for (const ch of text) {
      const l = document.createElement('span');
      l.className = 'nl'; l.textContent = ch;
      if (ch.trim()) letters.push(l);
      tubes.appendChild(l);
    }
    neon.append(sr, tubes);
    if (!reduceMotion) {
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      const flicker = async (target, pattern) => {
        for (let i = 0; i < pattern.length; i++) {
          target.classList.toggle('is-off', i % 2 === 0);
          await wait(pattern[i]);
        }
        target.classList.remove('is-off');
      };
      let heroVisible = true;
      new IntersectionObserver(([en]) => { heroVisible = en.isIntersecting; }).observe(neon);
      // one tired tube that acts up more than the rest, like a real diner sign
      const tired = letters[Math.min(9, letters.length - 1)];
      const buzz = async () => {
        if (heroVisible && !document.hidden) {
          const pick = Math.random() < 0.45 ? tired : letters[(Math.random() * letters.length) | 0];
          const n = 2 + ((Math.random() * 4) | 0);
          const pattern = [];
          for (let i = 0; i < n * 2; i++) pattern.push(30 + Math.random() * (i % 2 ? 90 : 140));
          if (Math.random() < 0.12) await flicker(neon, [70, 60, 50, 140]);   // the whole sign dips
          else await flicker(pick, pattern);
        }
        setTimeout(buzz, 2200 + Math.random() * 4200);
      };
      neon.classList.add('is-off');
      const switchOn = async () => {
        await wait(700);
        await flicker(neon, [90, 60, 40, 220, 60, 90]);
        letters.forEach((l, i) => { if (i % 4 === 1) flicker(l, [50, 80, 40, 120]); });
        setTimeout(buzz, 2500);
      };
      if (doc.classList.contains('loaded')) switchOn(); else window.addEventListener('tmp:loaded', switchOn, { once: true });
    }
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
  if (M) {
    // hidden under the loading screen, then sprung into place as each one scrolls in
    reveals.forEach((el) => { el.style.opacity = '0'; el.style.transform = 'translateY(44px)'; });
    M.inView('.reveal', (el) => {
      const i = +(el.style.getPropertyValue('--i') || 0);
      M.animate(el, { opacity: [0, 1], y: [44, 0], scale: [0.97, 1] },
        { ...spring(110, 19), opacity: { duration: 0.6, delay: i * 0.08 }, delay: i * 0.08 })
        .then(() => { el.style.transform = ''; });
    }, { margin: '0px 0px -12% 0px' });
  } else if ('IntersectionObserver' in window && !reduceMotion) {
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
    { name: 'The TOB Company', url: 'thetobcompany · live demo' },
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
        if (M) M.animate(btn, { x: dx * 0.18, y: dy * 0.28 }, spring(300, 18));
        else btn.style.transform = `translate(${(dx * 0.18).toFixed(1)}px, ${(dy * 0.28).toFixed(1)}px)`;
      });
      btn.addEventListener('pointerleave', () => { if (M) M.animate(btn, { x: 0, y: 0 }, spring(220, 12)); else btn.style.transform = ''; });
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
          out.textContent = fmt(Math.round(end * eased));
          if (p < 1) requestAnimationFrame(step); else out.textContent = fmt(end);
        };
        requestAnimationFrame(step);
      });
    }, { threshold: 0.6 });
    counters.forEach((c) => countIO.observe(c));
  }

  /* A tap on a chrome object gives a tiny buzz on phones that support it */
  document.addEventListener('tmp:splash', () => { try { navigator.vibrate && navigator.vibrate(12); } catch (e) { /* not supported */ } });

  /* Motion: entrance, scroll-linked scenes and springy touch feedback --------- */
  if (M) {
    const { animate, scroll, inView, stagger, press, hover } = M;

    // hero: the logo springs up out of the dark, then the headline arrives word by word
    const heroTitle = document.querySelector('.hero__title');
    if (heroTitle) {
      const first = heroTitle.firstChild;
      if (first && first.nodeType === 3) {
        const frag = document.createDocumentFragment();
        first.textContent.split(/(\s+)/).forEach((w) => {
          if (!w) return;
          if (/^\s+$/.test(w)) { frag.appendChild(document.createTextNode(w)); return; }
          const span = document.createElement('span');
          span.className = 'word'; span.textContent = w;
          frag.appendChild(span);
        });
        first.replaceWith(frag);
      }
    }
    const heroIns = [...document.querySelectorAll('.hero__in')];
    const heroWords = [...document.querySelectorAll('.hero__title .word')];
    const stage = document.querySelector('.hero__stage');
    const intro = () => {
      animate(stage, { opacity: [0, 1], scale: [0.6, 1], y: [40, 0] }, { ...spring(55, 11), opacity: { duration: 0.8 } });
      heroIns.forEach((el) => { el.style.opacity = '1'; el.style.transform = 'none'; });
      animate(heroIns.filter((el) => el !== heroTitle), { opacity: [0, 1], y: [30, 0] },
        { ...spring(120, 18), delay: stagger(0.12, { startDelay: 0.35 }) });
      animate(heroWords, { opacity: [0, 1], y: [50, 0], rotateX: [-70, 0] },
        { ...spring(130, 16), delay: stagger(0.08, { startDelay: 0.2 }) });
    };
    if (doc.classList.contains('loaded')) intro(); else window.addEventListener('tmp:loaded', intro, { once: true });

    // the logo floats back and dims as the hero scrolls away
    const hero = document.querySelector('.hero');
    scroll(animate('.hero__float', { y: ['0%', '30%'], scale: [1, 0.82], opacity: [1, 0.1] }, { ease: 'linear' }),
      { target: hero, offset: ['start start', 'end start'] });

    // the laptop hinges open toward you
    const showcase = document.querySelector('.showcase');
    if (showcase) {
      scroll(animate('.showcase__stage', { rotateX: [34, 0], scale: [0.84, 1], y: [80, 0], opacity: [0.35, 1] }, { ease: 'linear' }),
        { target: showcase, offset: ['start end', 'center center'] });
      scroll(animate('.phone', { x: [80, 0], rotate: [8, 0] }, { ease: 'linear' }),
        { target: showcase, offset: ['start end', 'center center'] });
    }

    // page progress and the process line
    scroll(animate('.progress', { scaleX: [0, 1] }, { ease: 'linear' }));
    const steps = document.querySelector('[data-steps]');
    if (steps) scroll(animate('.steps__line', { scaleX: [0, 1] }, { ease: 'linear' }), { target: steps, offset: ['start 85%', 'end 60%'] });

    // the marquee leans with your scroll speed
    const track = document.querySelector('.marquee__track');
    if (track) {
      let lastY = window.scrollY, skew = 0, raf = 0;
      const settle = () => {
        raf = 0;
        skew *= 0.88;
        track.style.setProperty('--lean', skew.toFixed(2) + 'deg');
        if (Math.abs(skew) > 0.05) raf = requestAnimationFrame(settle);
      };
      window.addEventListener('scroll', () => {
        const dy = window.scrollY - lastY; lastY = window.scrollY;
        skew = Math.max(-10, Math.min(10, skew + dy * 0.05));
        if (!raf) raf = requestAnimationFrame(settle);
      }, { passive: true });
    }

    // skill chips pop in one after another
    const chips = document.querySelectorAll('.skills span');
    chips.forEach((c) => { c.style.opacity = '0'; });
    inView('.skills', () => {
      animate(chips, { opacity: [0, 1], scale: [0.5, 1], y: [16, 0] }, { ...spring(320, 16), delay: stagger(0.035) });
    }, { margin: '0px 0px -10% 0px' });

    // #4SAMMY glows softly, like a heartbeat
    const tag = document.querySelector('.sam__tag');
    if (tag) animate(tag, { textShadow: ['0 0 24px rgba(224,27,36,.25)', '0 0 56px rgba(224,27,36,.7)'] }, { duration: 2.4, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' });

    // springy press on every button and chip; tiles lift on hover
    press('.btn, .skills span, .chips span, .dots button', (el) => {
      animate(el, { scale: 0.93 }, spring(700, 22));
      return () => animate(el, { scale: 1 }, spring(500, 12));
    });
    if (finePointer) {
      hover('.tile, .pledge, .price', (el) => {
        animate(el, { y: -6 }, spring(300, 20));
        return () => animate(el, { y: 0 }, spring(240, 16));
      });
    }
  }

  document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = new Date().getFullYear(); });
})();
