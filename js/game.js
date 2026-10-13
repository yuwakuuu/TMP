/* Bubble Pop: a 20-second game on a 2D canvas. Chrome bubbles rise and wobble; tap them
   for a point. Red balloons are rarer and worth five. Pops burst into droplets and play a
   short synthesized "pop" (only after the player presses Play, so no audio autoplays). */
(() => {
  const root = document.getElementById('game');
  if (!root) return;
  const canvas = root.querySelector('canvas');
  const ctx = canvas.getContext('2d');
  const $ = (s) => root.querySelector(s);
  const scoreEl = $('[data-score]'), timeEl = $('[data-time]'), bestEl = $('[data-best]');
  const overlay = $('[data-overlay]'), msg = $('[data-msg]'), startBtn = $('[data-start]');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const ROUND = 20;

  let W = 0, H = 0, dpr = 1;
  const resize = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    if (!running) draw(0);
  };

  let best = 0;
  try { best = +localStorage.getItem('tmp-bubble-best') || 0; } catch (e) { /* storage blocked */ }
  bestEl.textContent = best;

  let bubbles = [], drops = [], score = 0, timeLeft = ROUND, running = false, last = 0, spawnIn = 0, raf = 0, visible = true;
  let audio = null;

  const rand = (a, b) => a + Math.random() * (b - a);
  function spawn(initial = false) {
    const red = Math.random() < 0.14;
    const r = red ? rand(22, 30) : rand(18, 42) * Math.min(1, W / 700 + 0.35);
    bubbles.push({
      x: rand(r, W - r), y: initial ? rand(H * 0.2, H + r) : H + r + 4, r, red,
      vy: rand(38, 80) * (red ? 1.35 : 1), wob: rand(0, Math.PI * 2), wobS: rand(1.2, 2.4), born: performance.now(),
    });
  }

  function pop(b) {
    const n = b.red ? 18 : 12;
    for (let i = 0; i < n; i++) {
      const a = (i / n) * Math.PI * 2 + rand(-0.2, 0.2), sp = rand(80, 220);
      drops.push({ x: b.x, y: b.y, vx: Math.cos(a) * sp, vy: Math.sin(a) * sp - 40, life: 1, r: rand(2, 4.5), red: b.red });
    }
    drops.push({ ring: true, x: b.x, y: b.y, r: b.r, life: 1, red: b.red });
    score += b.red ? 5 : 1;
    scoreEl.textContent = score;
    sound(b.red);
    try { navigator.vibrate && navigator.vibrate(8); } catch (e) { /* not supported */ }
  }

  function sound(red) {
    if (!audio) return;
    const t = audio.currentTime;
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = 'sine';
    const f = red ? 380 : rand(520, 760);
    o.frequency.setValueAtTime(f, t);
    o.frequency.exponentialRampToValueAtTime(f * 2.6, t + 0.06);
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(0.22, t + 0.008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.12);
    o.connect(g).connect(audio.destination);
    o.start(t); o.stop(t + 0.14);
  }

  function hit(e) {
    if (!running) return;
    const r = canvas.getBoundingClientRect();
    const x = e.clientX - r.left, y = e.clientY - r.top;
    for (let i = bubbles.length - 1; i >= 0; i--) {
      const b = bubbles[i];
      const bx = b.x + Math.sin(b.wob) * 6;
      if ((x - bx) ** 2 + (y - b.y) ** 2 <= (b.r + 8) ** 2) {
        bubbles.splice(i, 1);
        pop({ ...b, x: bx });
        break;
      }
    }
  }
  canvas.addEventListener('pointerdown', hit);

  function drawBubble(b) {
    const x = b.x + Math.sin(b.wob) * 6, y = b.y, r = b.r;
    ctx.save();
    if (b.red) {
      // a little red balloon with a knot and string
      ctx.strokeStyle = 'rgba(255,255,255,.35)'; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(x, y + r * 1.15); ctx.quadraticCurveTo(x + 6, y + r * 1.8, x - 2, y + r * 2.5); ctx.stroke();
      const g = ctx.createRadialGradient(x - r * 0.35, y - r * 0.45, r * 0.1, x, y, r * 1.15);
      g.addColorStop(0, '#ff8a8a'); g.addColorStop(0.35, '#e01b24'); g.addColorStop(1, '#6d0710');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.ellipse(x, y, r * 0.88, r * 1.1, 0, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = '#9a0c15';
      ctx.beginPath(); ctx.moveTo(x - 4, y + r * 1.18); ctx.lineTo(x + 4, y + r * 1.18); ctx.lineTo(x, y + r * 1.04); ctx.fill();
      ctx.fillStyle = 'rgba(255,255,255,.75)';
      ctx.beginPath(); ctx.ellipse(x - r * 0.35, y - r * 0.5, r * 0.16, r * 0.26, -0.5, 0, Math.PI * 2); ctx.fill();
    } else {
      // chrome bubble: dark core, bright rim, horizon band and a sharp highlight
      const g = ctx.createRadialGradient(x - r * 0.3, y - r * 0.35, r * 0.05, x, y, r);
      g.addColorStop(0, '#ffffff'); g.addColorStop(0.25, '#c9d3e2'); g.addColorStop(0.55, '#4b5361');
      g.addColorStop(0.8, '#1a1d24'); g.addColorStop(0.94, '#b7c6dd'); g.addColorStop(1, 'rgba(220,230,255,.2)');
      ctx.fillStyle = g;
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.55; ctx.fillStyle = '#e8eefa';
      ctx.beginPath(); ctx.ellipse(x, y + r * 0.42, r * 0.62, r * 0.12, 0, 0, Math.PI * 2); ctx.fill();
      ctx.globalAlpha = 0.95; ctx.fillStyle = '#fff';
      ctx.beginPath(); ctx.ellipse(x - r * 0.38, y - r * 0.42, r * 0.18, r * 0.11, -0.7, 0, Math.PI * 2); ctx.fill();
    }
    ctx.restore();
  }

  function draw(dt) {
    ctx.clearRect(0, 0, W, H);
    for (const b of bubbles) drawBubble(b);
    for (const d of drops) {
      if (d.ring) {
        ctx.strokeStyle = d.red ? `rgba(255,90,90,${d.life})` : `rgba(220,232,255,${d.life})`;
        ctx.lineWidth = 2 * d.life;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r * (1.9 - d.life * 0.9), 0, Math.PI * 2); ctx.stroke();
      } else {
        ctx.fillStyle = d.red ? `rgba(255,70,80,${d.life})` : `rgba(235,242,255,${d.life})`;
        ctx.beginPath(); ctx.arc(d.x, d.y, d.r * d.life + 0.5, 0, Math.PI * 2); ctx.fill();
      }
    }
  }

  function step(now) {
    raf = 0;
    const dt = Math.min(0.05, (now - last) / 1000 || 0);
    last = now;
    if (running) {
      timeLeft -= dt;
      timeEl.textContent = Math.max(0, Math.ceil(timeLeft));
      spawnIn -= dt;
      const rate = 0.55 - (1 - timeLeft / ROUND) * 0.3;          // it speeds up as time runs out
      if (spawnIn <= 0) { spawn(); spawnIn = rate; }
      if (timeLeft <= 0) end();
    }
    for (const b of bubbles) { b.y -= b.vy * dt; b.wob += b.wobS * dt * (reduced ? 0.3 : 1); }
    bubbles = bubbles.filter((b) => b.y > -b.r * 3);
    for (const d of drops) {
      d.life -= dt * (d.ring ? 2.4 : 1.8);
      if (!d.ring) { d.x += d.vx * dt; d.y += d.vy * dt; d.vy += 420 * dt; }
    }
    drops = drops.filter((d) => d.life > 0);
    draw(dt);
    if ((running || bubbles.length || drops.length) && visible) raf = requestAnimationFrame(step);
  }
  const loop = () => { if (!raf && visible) { last = performance.now(); raf = requestAnimationFrame(step); } };

  function start() {
    try {
      audio = audio || new (window.AudioContext || window.webkitAudioContext)();
      audio.resume && audio.resume();
    } catch (e) { audio = null; }
    score = 0; timeLeft = ROUND; spawnIn = 0; drops = [];
    bubbles = [];
    for (let i = 0; i < 6; i++) spawn(true);
    scoreEl.textContent = 0; timeEl.textContent = ROUND;
    running = true;
    overlay.hidden = true;
    canvas.focus({ preventScroll: true });
    loop();
  }

  function end() {
    running = false;
    const record = score > best;
    if (record) {
      best = score; bestEl.textContent = best;
      try { localStorage.setItem('tmp-bubble-best', String(best)); } catch (e) { /* storage blocked */ }
    }
    msg.textContent = record ? `New best: ${score}! Imagine what we could build for your business.` : `You scored ${score}. Your best is ${best}. Go again?`;
    startBtn.textContent = 'Play again';
    overlay.hidden = false;
    if (!attractTimer) attract();
  }

  startBtn.addEventListener('click', start);

  // idle attract mode: a few bubbles drift past behind the Play button
  let attractTimer = 0;
  function attract() {
    attractTimer = 0;
    if (running || !visible) return;
    if (bubbles.length < 7 && !reduced) spawn();
    loop();
    attractTimer = setTimeout(attract, 900);
  }

  new ResizeObserver(resize).observe(canvas);
  new IntersectionObserver(([en]) => {
    visible = en.isIntersecting;
    if (visible) { loop(); if (!attractTimer) attract(); }
  }).observe(canvas);
  resize();
})();
