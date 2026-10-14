// The extra layer of motion: a cursor that reacts to what it is over, a flowing field of
// light in the hero that moves with the music, headings that rise word by word, eyebrows
// that decode, work screenshots that wipe in, a spotlight across the service tiles,
// icons that draw themselves, dark sections that open out to full width, a comet along
// the process line, rolling nav links, liquid button hovers and a few small touches.
// Everything here is decoration: with reduced motion none of it runs.
(() => {
  const doc = document.documentElement;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const M = window.Motion && window.Motion.animate ? window.Motion : null;
  const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  const lite = window.matchMedia('(pointer: coarse), (max-width: 700px)').matches || (navigator.hardwareConcurrency || 8) <= 4;
  const whenLoaded = (fn) => (doc.classList.contains('loaded') ? fn() : window.addEventListener('tmp:loaded', fn, { once: true }));
  const level = () => (window.TMP_AUDIO ? window.TMP_AUDIO.level() : 0);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const onScreen = (el, cb, margin = '0px') => {
    const io = new IntersectionObserver(([en]) => cb(en.isIntersecting), { rootMargin: margin });
    io.observe(el);
  };

  /* Beat: sections with a glow breathe on every kick drum ------------------------- */
  // --beat is a registered number (styles.css), so it can be animated
  // (only the ones on screen, since a change to --beat restyles everything inside)
  const beaters = new Set();
  document.querySelectorAll('.hero, .statement, .playground, .membership').forEach((el) => {
    onScreen(el, (v) => (v ? beaters.add(el) : beaters.delete(el)));
  });
  let beatT = 0;
  window.addEventListener('tmp:beat', (e) => {
    const now = performance.now();
    if (now - beatT < 120 || document.hidden) return;
    beatT = now;
    const k = e.detail || 1;
    beaters.forEach((el) => {
      if (!el.animate) return;
      el.animate([{ '--beat': k }, { '--beat': 0 }], { duration: 650, easing: 'cubic-bezier(.2, .7, .3, 1)' });
    });
    field.kick(k);
  });

  /* Hero: a field of light that flows around the logo ----------------------------- */
  const field = (() => {
    const hero = document.querySelector('.hero');
    const none = { kick() {} };
    if (!hero) return none;
    const canvas = document.createElement('canvas');
    canvas.className = 'hero__field';
    canvas.setAttribute('aria-hidden', 'true');
    const glow = hero.querySelector('.hero__glow');
    if (glow) glow.after(canvas); else hero.prepend(canvas);
    const ctx = canvas.getContext('2d');
    if (!ctx) return none;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const N = lite ? 80 : 240;
    const hues = [[143, 184, 255], [198, 181, 255], [255, 140, 200], [120, 220, 255]];
    let w = 0, h = 0, raf = 0, last = 0, t = 0, visible = true, boost = 0;
    const mouse = { x: -1e4, y: -1e4, on: false };
    const ps = [];
    const spawn = (p) => {
      p.x = Math.random() * w; p.y = Math.random() * h;
      p.life = 0; p.max = 4 + Math.random() * 7;
      p.c = hues[(Math.random() * hues.length) | 0];
      p.s = 0.4 + Math.random() * 1.2;
      return p;
    };
    const size = () => {
      w = hero.clientWidth; h = hero.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    size();
    for (let i = 0; i < N; i++) { const p = spawn({}); p.life = Math.random() * p.max; ps.push(p); }
    new ResizeObserver(size).observe(hero);

    // a smooth, slowly changing direction for every point on the screen
    const flow = (x, y) => {
      const a = Math.sin(x * 0.0023 + t * 0.21) + Math.cos(y * 0.0031 - t * 0.17) + Math.sin((x + y) * 0.0012 + t * 0.09);
      return a * 1.2;
    };
    const draw = (now) => {
      raf = 0;
      const dt = Math.min(0.05, (now - (last || now)) / 1000); last = now;
      t += dt;
      const lv = level();
      boost *= Math.exp(-dt * 5);
      const speed = 26 + lv * 60 + boost * 160;
      // fade the trails out (keeps the canvas transparent over the glow behind it)
      ctx.globalCompositeOperation = 'destination-out';
      ctx.fillStyle = `rgba(0, 0, 0, ${0.12 + boost * 0.04})`;
      ctx.fillRect(0, 0, w, h);
      ctx.globalCompositeOperation = 'lighter';
      ctx.lineCap = 'round';
      for (const p of ps) {
        const a = flow(p.x, p.y);
        let vx = Math.cos(a) * speed * p.s, vy = Math.sin(a) * speed * p.s;
        // the pointer pushes light aside and stirs it into a swirl
        if (mouse.on) {
          const dx = p.x - mouse.x, dy = p.y - mouse.y, d2 = dx * dx + dy * dy;
          if (d2 < 32000) {
            const f = (1 - d2 / 32000) * 220;
            const d = Math.sqrt(d2) || 1;
            vx += (dx / d) * f + (-dy / d) * f * 0.8;
            vy += (dy / d) * f + (dx / d) * f * 0.8;
          }
        }
        const nx = p.x + vx * dt, ny = p.y + vy * dt;
        p.life += dt;
        const fade = Math.sin(Math.PI * clamp(p.life / p.max, 0, 1));
        const alpha = fade * (0.16 + lv * 0.45 + boost * 0.35);
        ctx.strokeStyle = `rgba(${p.c[0]}, ${p.c[1]}, ${p.c[2]}, ${alpha.toFixed(3)})`;
        ctx.lineWidth = 0.8 + p.s * 0.9 + boost * 1.2;
        ctx.beginPath(); ctx.moveTo(p.x, p.y); ctx.lineTo(nx, ny); ctx.stroke();
        p.x = nx; p.y = ny;
        if (p.life > p.max || p.x < -20 || p.x > w + 20 || p.y < -20 || p.y > h + 20) spawn(p);
      }
      ctx.globalCompositeOperation = 'source-over';
      if (visible && !document.hidden) raf = requestAnimationFrame(draw);
    };
    const wake = () => { if (!raf && visible && !document.hidden) { last = 0; raf = requestAnimationFrame(draw); } };
    onScreen(hero, (v) => { visible = v; wake(); });
    document.addEventListener('visibilitychange', wake);
    if (fine) {
      hero.addEventListener('pointermove', (e) => {
        const r = hero.getBoundingClientRect();
        mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; mouse.on = true;
      });
      hero.addEventListener('pointerleave', () => { mouse.on = false; });
    }
    hero.addEventListener('pointerdown', () => { boost = Math.max(boost, 0.8); });
    whenLoaded(() => { canvas.classList.add('is-on'); wake(); });
    return { kick(k) { boost = Math.max(boost, k); } };
  })();

  /* Cursor: a ring that trails the pointer and reacts to what it is over ---------- */
  if (fine) {
    const cur = document.createElement('div');
    cur.className = 'cursor';
    cur.setAttribute('aria-hidden', 'true');
    cur.innerHTML = '<span class="cursor__ring"><span class="cursor__label"></span></span><span class="cursor__dot"></span>';
    document.body.appendChild(cur);
    const ring = cur.firstChild, dot = cur.lastChild, label = ring.firstChild;
    let x = -100, y = -100, rx = -100, ry = -100, raf = 0, shown = false;
    const kinds = [
      ['.card-work, .tile--strip a', 'View'],
      ['#tmp-3d, #eternal-3d, .infinity__canvas', 'Drag'],
      ['.game__canvas', 'Pop'],
      ['iframe, input, textarea, select', 'hide'],
      ['a, button, summary, label, [role="tab"]', 'link'],
    ];
    const loop = () => {
      raf = 0;
      rx += (x - rx) * 0.2; ry += (y - ry) * 0.2;
      ring.style.transform = `translate(${rx.toFixed(1)}px, ${ry.toFixed(1)}px)`;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      if (Math.abs(x - rx) + Math.abs(y - ry) > 0.2) raf = requestAnimationFrame(loop);
    };
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      x = e.clientX; y = e.clientY;
      if (!shown) { shown = true; rx = x; ry = y; cur.classList.add('is-on'); }
      if (!raf) raf = requestAnimationFrame(loop);
    }, { passive: true });
    document.addEventListener('pointerover', (e) => {
      let state = '', text = '';
      for (const [sel, k] of kinds) {
        if (!e.target.closest || !e.target.closest(sel)) continue;
        if (k === 'link' || k === 'hide') state = k; else { state = 'label'; text = k; }
        break;
      }
      cur.dataset.state = state;
      label.textContent = text;
    });
    document.documentElement.addEventListener('pointerleave', () => cur.classList.remove('is-on'));
    document.documentElement.addEventListener('pointerenter', () => { if (shown) cur.classList.add('is-on'); });
    window.addEventListener('pointerdown', () => cur.classList.add('is-down'));
    window.addEventListener('pointerup', () => cur.classList.remove('is-down'));
  }

  if (!M) return;
  const { animate, scroll, inView, stagger } = M;

  /* Headings rise word by word out of a mask; chrome words wipe in ---------------- */
  const heads = [...document.querySelectorAll('main h2')].filter((h) => !h.closest('.hero, .sam'));
  heads.forEach((h) => {
    const inner = [], chromes = [];
    const walk = (node) => {
      [...node.childNodes].forEach((child) => {
        if (child.nodeType === 3) {
          const frag = document.createDocumentFragment();
          child.textContent.split(/(\s+)/).forEach((part) => {
            if (!part) return;
            if (/^\s+$/.test(part)) { frag.appendChild(document.createTextNode(part)); return; }
            const m = document.createElement('span'), i = document.createElement('span');
            m.className = 'sw'; i.className = 'sw__i'; i.textContent = part;
            m.appendChild(i); frag.appendChild(m); inner.push(i);
          });
          child.replaceWith(frag);
        } else if (child.nodeType === 1 && child.classList.contains('chrome')) {
          chromes.push(child);
        } else if (child.nodeType === 1) {
          walk(child);
        }
      });
    };
    walk(h);
    inner.forEach((i) => { i.style.transform = 'translateY(110%) rotate(5deg)'; });
    chromes.forEach((c) => { c.style.opacity = '0'; });
    inView(h, () => {
      animate(inner, { y: ['110%', '0%'], rotate: [5, 0] }, { duration: 1, ease: [0.16, 1, 0.3, 1], delay: stagger(0.055) });
      chromes.forEach((c, k) => {
        const d = 0.18 + inner.length * 0.055 + k * 0.1;
        animate(c, { opacity: [0, 1], clipPath: ['inset(-40% 100% -60% -10%)', 'inset(-40% -10% -60% -10%)'], y: [18, 0] },
          { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: d }).then(() => { c.style.clipPath = ''; });
      });
    }, { margin: '0px 0px -12% 0px' });
  });

  /* Eyebrows decode from scrambled letters ------------------------------------------ */
  const GLYPHS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ#%&*+=?/<>';
  document.querySelectorAll('main .eyebrow').forEach((el) => {
    if (el.closest('.hero, .sam') || el.children.length) return;
    const text = el.textContent;
    el.setAttribute('aria-label', text);
    inView(el, () => {
      const t0 = performance.now(), dur = 900;
      const step = (now) => {
        const p = Math.min(1, (now - t0) / dur);
        const fixed = Math.floor(p * text.length);
        let out = text.slice(0, fixed);
        for (let i = fixed; i < text.length; i++) out += text[i] === ' ' ? ' ' : GLYPHS[(Math.random() * GLYPHS.length) | 0];
        el.textContent = out;
        if (p < 1) requestAnimationFrame(step); else el.textContent = text;
      };
      requestAnimationFrame(step);
    }, { margin: '0px 0px -8% 0px' });
  });

  /* Work: screenshots wipe up into their frames ------------------------------------- */
  document.querySelectorAll('.card-work').forEach((card) => {
    const img = card.querySelector('.frame img');
    const body = [...card.querySelectorAll('.card-work__body > *')];
    if (img) img.style.clipPath = 'inset(100% 0 0 0)';
    body.forEach((b) => { b.style.opacity = '0'; });
    inView(card, () => {
      if (img) {
        animate(img, { clipPath: ['inset(100% 0% 0% 0%)', 'inset(0% 0% 0% 0%)'], scale: [1.3, 1] }, { duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.15 })
          .then(() => { img.style.clipPath = ''; img.style.transform = ''; });
      }
      animate(body, { opacity: [0, 1], y: [24, 0] }, { duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: stagger(0.07, { startDelay: 0.5 }) });
    }, { margin: '0px 0px -15% 0px' });
  });

  /* Icons draw themselves ------------------------------------------------------------- */
  document.querySelectorAll('.tile__icon svg, .perks__icon svg').forEach((svg) => {
    const parts = [...svg.querySelectorAll('path, rect, circle, line, polyline, ellipse')];
    const lens = parts.map((p) => { try { return Math.ceil(p.getTotalLength()); } catch (e) { return 0; } });
    if (lens.some((l) => !l)) return;
    parts.forEach((p, i) => { p.style.strokeDasharray = lens[i]; p.style.strokeDashoffset = lens[i]; });
    inView(svg, () => {
      parts.forEach((p, i) => {
        animate(p, { strokeDashoffset: [lens[i], 0] }, { duration: 1.2, ease: [0.65, 0, 0.35, 1], delay: 0.2 + i * 0.15 })
          .then(() => { p.style.strokeDasharray = ''; p.style.strokeDashoffset = ''; });
      });
    }, { margin: '0px 0px -10% 0px' });
  });

  /* Service tiles share one spotlight that follows the pointer ----------------------- */
  const bento = document.querySelector('.bento');
  if (bento && fine) {
    const tiles = [...bento.querySelectorAll('.tile')];
    let raf = 0, ev = null;
    const apply = () => {
      raf = 0;
      tiles.forEach((t) => {
        const r = t.getBoundingClientRect();
        t.style.setProperty('--sx', (ev.clientX - r.left).toFixed(0) + 'px');
        t.style.setProperty('--sy', (ev.clientY - r.top).toFixed(0) + 'px');
      });
    };
    bento.addEventListener('pointermove', (e) => { ev = e; if (!raf) raf = requestAnimationFrame(apply); });
  }

  /* Dark sections open out from a rounded card to full width as they arrive -------- */
  const inset = lite ? 3.5 : 6;
  document.querySelectorAll('.statement, .playground, .membership').forEach((el) => {
    let enter = 0, exit = 0;
    const apply = () => {
      const k = Math.max(1 - enter, exit);
      const e = k * k * (3 - 2 * k);
      el.style.clipPath = e < 0.002 ? '' : `inset(0 ${(e * inset).toFixed(2)}% round ${(e * 48).toFixed(1)}px)`;
    };
    scroll((p) => { enter = p; apply(); }, { target: el, offset: ['start end', 'start 25%'] });
    scroll((p) => { exit = p; apply(); }, { target: el, offset: ['end 75%', 'end start'] });
  });

  /* Process: a comet runs along the line as it draws -------------------------------- */
  const line = document.querySelector('.steps__line');
  const stepsList = document.querySelector('[data-steps]');
  if (line && stepsList) {
    const comet = document.createElement('span');
    comet.className = 'steps__comet';
    comet.setAttribute('aria-hidden', 'true');
    line.after(comet);
    line.parentElement.style.position = 'relative';
    let geo = null;
    const measure = () => { geo = { left: line.offsetLeft, top: line.offsetTop + line.offsetHeight / 2, w: line.offsetWidth }; };
    measure();
    window.addEventListener('resize', measure);
    scroll((p) => {
      if (!geo.w) measure();
      comet.style.transform = `translate(${(geo.left + p * geo.w).toFixed(1)}px, ${geo.top}px)`;
      comet.style.opacity = p > 0.002 && p < 0.998 ? '1' : '0';
    }, { target: stepsList, offset: ['start 85%', 'end 60%'] });
    // the step cards turn in like pages
    const lis = [...stepsList.children];
    inView(stepsList, () => {
      animate(lis, { rotateY: [-35, 0], transformPerspective: [900, 900] }, { duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: stagger(0.12) });
      animate(lis.map((li) => li.querySelector('.steps__n')).filter(Boolean), { scale: [0.4, 1], opacity: [0, 1] },
        { type: 'spring', stiffness: 300, damping: 14, delay: stagger(0.12, { startDelay: 0.25 }) });
    }, { margin: '0px 0px -15% 0px' });
  }

  /* Footer: the big wordmark rises up as you reach the end -------------------------- */
  const word = document.querySelector('.footer__word');
  if (word) {
    scroll(animate(word, { y: ['60%', '0%'], opacity: [0, 1], scale: [0.9, 1] }, { ease: 'linear' }),
      { target: word.closest('footer'), offset: ['start end', 'start 35%'] });
  }

  /* FAQ answers slide open ------------------------------------------------------------- */
  document.querySelectorAll('.faq details').forEach((d) => {
    d.addEventListener('toggle', () => {
      if (!d.open) return;
      const body = [...d.children].filter((c) => c.tagName !== 'SUMMARY');
      animate(body, { opacity: [0, 1], y: [-10, 0], filter: ['blur(6px)', 'blur(0px)'] }, { duration: 0.5, ease: [0.16, 1, 0.3, 1] });
    });
  });

  /* Nav and footer links roll their text over on hover ------------------------------ */
  if (fine) {
    document.querySelectorAll('.nav__links a, .footer__cols a').forEach((a) => {
      if (a.children.length) return;
      const text = a.textContent;
      a.setAttribute('aria-label', text);
      a.innerHTML = '';
      const roll = document.createElement('span');
      roll.className = 'roll';
      roll.setAttribute('aria-hidden', 'true');
      for (const k of ['a', 'b']) {
        const s = document.createElement('span');
        s.className = 'roll__' + k;
        [...text].forEach((ch, i) => {
          const c = document.createElement('span');
          c.textContent = ch === ' ' ? ' ' : ch;
          c.style.transitionDelay = i * 14 + 'ms';
          s.appendChild(c);
        });
        roll.appendChild(s);
      }
      a.appendChild(roll);
    });
  }

  /* Buttons: liquid fill from where the pointer enters, and a gentle pull ------------ */
  if (fine) {
    document.querySelectorAll('main .btn, .nav .btn, .footer .btn').forEach((btn) => {
      btn.classList.add('btn--fx');
      btn.addEventListener('pointerenter', (e) => {
        const r = btn.getBoundingClientRect();
        btn.style.setProperty('--bx', (e.clientX - r.left).toFixed(0) + 'px');
        btn.style.setProperty('--by', (e.clientY - r.top).toFixed(0) + 'px');
      });
      if (btn.classList.contains('magnetic') || btn.closest('.game, form')) return;
      btn.addEventListener('pointermove', (e) => {
        const r = btn.getBoundingClientRect();
        const dx = e.clientX - (r.left + r.width / 2), dy = e.clientY - (r.top + r.height / 2);
        animate(btn, { x: dx * 0.12, y: dy * 0.2 }, { type: 'spring', stiffness: 300, damping: 18 });
      });
      btn.addEventListener('pointerleave', () => animate(btn, { x: 0, y: 0 }, { type: 'spring', stiffness: 220, damping: 12 }));
    });
  }

  /* Hero: the copy drifts a touch against the pointer, for depth ---------------------- */
  const copy = document.querySelector('.hero__copy');
  const heroEl = document.querySelector('.hero');
  if (copy && heroEl && fine) {
    heroEl.addEventListener('pointermove', (e) => {
      const nx = e.clientX / window.innerWidth - 0.5, ny = e.clientY / window.innerHeight - 0.5;
      animate(copy, { x: nx * -14, y: ny * -8 }, { type: 'spring', stiffness: 60, damping: 18 });
    });
    heroEl.addEventListener('pointerleave', () => animate(copy, { x: 0, y: 0 }, { type: 'spring', stiffness: 60, damping: 18 }));
  }

  /* Statement: the lit words pick up a soft parallax as you scroll ------------------- */
  const statement = document.querySelector('.statement__text');
  if (statement) {
    scroll(animate(statement, { y: [60, -60] }, { ease: 'linear' }), { target: statement.closest('section'), offset: ['start end', 'end start'] });
  }

  /* A few section titles get a slow 3D lean as they pass ------------------------------ */
  document.querySelectorAll('.showcase-section .section__head, .playground .section__head, #pricing .section__head').forEach((el) => {
    scroll(animate(el, { rotateX: [14, 0, -6], transformPerspective: [1000, 1000, 1000] }, { ease: 'linear' }),
      { target: el, offset: ['start end', 'center center', 'end start'] });
  });
})();
