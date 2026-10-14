/* Grass lettering: any [data-grass] word is covered in individually drawn blades of grass.
   The real text stays in the page (for layout, search and screen readers) but is hidden
   under a canvas. Blades grow from points inside the letter shapes, sway in a breeze and
   bend away from the pointer. The canvas only animates while it is on screen. */
(() => {
  const words = document.querySelectorAll('[data-grass]');
  if (!words.length) return;
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const greens = ['#2f7d1f', '#3a8f22', '#46a32a', '#4fb52f', '#5cc23a', '#6dcf45', '#3f9a26', '#7fd957'];

  words.forEach((el) => {
    const canvas = document.createElement('canvas');
    canvas.className = 'grass__canvas';
    canvas.setAttribute('aria-hidden', 'true');
    el.appendChild(canvas);
    const ctx = canvas.getContext('2d');
    let blades = [], W = 0, H = 0, pad = 0, dpr = 1, soil = null;
    let visible = false, raf = 0, last = 0;
    const pointer = { x: -1e4, y: -1e4, power: 0 };

    function build() {
      const cs = getComputedStyle(el);
      const size = parseFloat(cs.fontSize);
      const rect = el.getBoundingClientRect();
      pad = Math.round(size * 0.16);
      W = Math.ceil(rect.width + pad * 2);
      H = Math.ceil(rect.height + pad * 2);
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.style.left = canvas.style.top = -pad + 'px';
      canvas.style.width = W + 'px'; canvas.style.height = H + 'px';
      canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);

      // the letter shapes, drawn exactly where the hidden text sits
      const mask = document.createElement('canvas');
      mask.width = W; mask.height = H;
      const m = mask.getContext('2d');
      m.font = `${cs.fontStyle} ${cs.fontWeight} ${size}px ${cs.fontFamily}`;
      m.textBaseline = 'alphabetic';
      if ('letterSpacing' in m) m.letterSpacing = cs.letterSpacing;
      // place the baseline the way CSS does: the font's ascent + descent centred in the line
      const metrics = m.measureText(el.firstChild.textContent);
      const asc = metrics.fontBoundingBoxAscent, desc = metrics.fontBoundingBoxDescent;
      const lineH = parseFloat(cs.lineHeight) || size;
      const baseline = pad + parseFloat(cs.paddingTop) + (lineH - (asc + desc)) / 2 + asc;
      m.fillText(el.firstChild.textContent, pad + parseFloat(cs.paddingLeft), baseline);
      const alpha = m.getImageData(0, 0, W, H).data;
      soil = mask;

      // blades: denser where there is more letter, tallest near the middle of each stroke
      blades = [];
      const step = Math.max(1.5, size / 44);
      const bladeLen = size * 0.105;
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          const jx = x + Math.random() * step, jy = y + Math.random() * step;
          if (jx >= W || jy >= H) continue;
          if (alpha[((jy | 0) * W + (jx | 0)) * 4 + 3] < 128) continue;
          blades.push({
            x: jx, y: jy,
            h: bladeLen * (0.55 + Math.random() * 0.7),
            lean: (Math.random() - 0.5) * 0.45,
            phase: Math.random() * Math.PI * 2,
            w: Math.max(0.9, size / 80) * (0.8 + Math.random() * 0.5),
            c: greens[(Math.random() * greens.length) | 0],
            tip: Math.random() < 0.18,
          });
        }
      }
      blades.sort((a, b) => a.y - b.y);   // back rows first
      draw(performance.now() / 1000);
    }

    function draw(t) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, W, H);
      // a dark, mossy base so no gaps show between blades
      ctx.globalAlpha = 1;
      ctx.drawImage(soil, 0, 0);
      ctx.globalCompositeOperation = 'source-in';
      const g = ctx.createLinearGradient(0, pad, 0, H - pad);
      g.addColorStop(0, '#3b8a22'); g.addColorStop(1, '#245c16');
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
      ctx.globalCompositeOperation = 'source-over';
      ctx.lineCap = 'round';
      const breeze = reduced ? 0 : 1;
      for (const b of blades) {
        let sway = b.lean + breeze * (Math.sin(t * 1.6 + b.x * 0.045 + b.phase * 0.3) * 0.16 + Math.sin(t * 0.7 + b.x * 0.012) * 0.09);
        if (pointer.power > 0.01) {
          const dx = b.x - pointer.x, dy = b.y - pointer.y, d2 = dx * dx + dy * dy, r = 60;
          if (d2 < r * r) sway += (dx >= 0 ? 1 : -1) * (1 - Math.sqrt(d2) / r) * 1.1 * pointer.power;
        }
        const tx = b.x + Math.sin(sway) * b.h, ty = b.y - Math.cos(sway) * b.h;
        ctx.strokeStyle = b.c;
        ctx.lineWidth = b.w;
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        ctx.quadraticCurveTo(b.x + Math.sin(sway * 0.5) * b.h * 0.5, b.y - b.h * 0.55, tx, ty);
        ctx.stroke();
        if (b.tip) {
          ctx.strokeStyle = '#b4ee7c';
          ctx.lineWidth = b.w * 0.7;
          ctx.beginPath();
          ctx.moveTo(b.x + (tx - b.x) * 0.7, b.y + (ty - b.y) * 0.7);
          ctx.lineTo(tx, ty);
          ctx.stroke();
        }
      }
    }

    function frame(now) {
      raf = 0;
      if (!visible || document.hidden) return;
      if (now - last > 33) {          // ~30fps is plenty for grass
        last = now;
        pointer.power *= 0.9;
        draw(now / 1000);
      }
      raf = requestAnimationFrame(frame);
    }
    const loop = () => { if (!raf && !reduced) raf = requestAnimationFrame(frame); };

    el.addEventListener('pointermove', (e) => {
      const r = canvas.getBoundingClientRect();
      pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.power = 1;
      if (reduced) draw(0); else loop();
    });

    new IntersectionObserver(([en]) => { visible = en.isIntersecting; if (visible) loop(); }).observe(el);
    document.addEventListener('visibilitychange', loop);
    let resizeTimer = 0;
    new ResizeObserver(() => { clearTimeout(resizeTimer); resizeTimer = setTimeout(build, 120); }).observe(el);
    (document.fonts ? document.fonts.ready : Promise.resolve()).then(build);
  });
})();
