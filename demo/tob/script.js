(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Scroll reveal: stagger siblings slightly, reveal once.
  var reveals = document.querySelectorAll('.reveal, .chart-card');
  document.querySelectorAll('.chain, .grid-2, .grid-3, .grid-4').forEach(function (group) {
    group.querySelectorAll('.reveal').forEach(function (el, i) {
      el.style.setProperty('--delay', (i * 0.08) + 's');
    });
  });

  // The hero is above the fold: reveal it right away (or as the boot screen fades), not on scroll.
  function revealHero() {
    document.querySelectorAll('.hero .reveal').forEach(function (el, i) {
      el.style.setProperty('--delay', (i * 0.1) + 's');
      el.classList.add('in');
    });
  }
  if (document.documentElement.classList.contains('booting')) document.addEventListener('tob:booted', revealHero, { once: true });
  else requestAnimationFrame(revealHero);

  if (reduceMotion || !('IntersectionObserver' in window)) {
    reveals.forEach(function (el) { el.classList.add('in'); });
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.12 });
    reveals.forEach(function (el) { io.observe(el); });
  }

  // Mobile nav toggle.
  var toggle = document.querySelector('.nav-toggle');
  var links = document.getElementById('nav-links');
  function closeNav() {
    toggle.setAttribute('aria-expanded', 'false');
    links.classList.remove('open');
  }
  toggle.addEventListener('click', function () {
    var open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    links.classList.toggle('open', !open);
  });
  links.addEventListener('click', function (e) { if (e.target.closest('a')) closeNav(); });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && links.classList.contains('open')) { closeNav(); toggle.focus(); }
  });

  // Highlight the nav link for the section in view.
  var navLinks = Array.prototype.slice.call(links.querySelectorAll('a'));
  if ('IntersectionObserver' in window) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) {
          a.toggleAttribute('aria-current', a.getAttribute('href') === '#' + entry.target.id);
          if (a.hasAttribute('aria-current')) a.setAttribute('aria-current', 'true');
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    navLinks.forEach(function (a) {
      var target = document.querySelector(a.getAttribute('href'));
      if (target) spy.observe(target);
    });
  }

  // The hidden guest.
  var eggBtn = document.querySelector('.egg-btn');
  var eggReveal = document.getElementById('egg-reveal');
  eggBtn.addEventListener('click', function () {
    var open = eggBtn.getAttribute('aria-expanded') === 'true';
    eggBtn.setAttribute('aria-expanded', String(!open));
    eggReveal.hidden = open;
  });

  document.getElementById('year').textContent = new Date().getFullYear();
})();

/* ==========================================================
   TOB's hologram: a canvas port of TOB-OS's tob/ui/hologram.py
   ========================================================== */
var TobHologram = (function () {
  'use strict';

  // --- Shapes, in "bust units": x -1..1 (shoulders), y -1.45 (crown) .. 0.8 (fade) ---
  function smooth(pts, closed, path) {
    path = path || new Path2D();
    var n = pts.length;
    var seq = closed ? pts.concat(pts.slice(0, 3)) : [pts[0]].concat(pts, [pts[n - 1]]);
    path.moveTo(pts[0][0], pts[0][1]);
    for (var i = closed ? 0 : 1; i < n; i++) {
      var p0 = closed ? seq[i ? i - 1 : n - 1] : seq[i - 1];
      var p1 = seq[i], p2 = seq[i + 1], p3 = seq[i + 2];
      path.bezierCurveTo(p1[0] + (p2[0] - p0[0]) / 6, p1[1] + (p2[1] - p0[1]) / 6,
                         p2[0] - (p3[0] - p1[0]) / 6, p2[1] - (p3[1] - p1[1]) / 6, p2[0], p2[1]);
    }
    if (closed) path.closePath();
    return path;
  }
  function mirror(pts) { return pts.map(function (p) { return [-p[0], p[1]]; }); }
  function sym(half) { return smooth(half.concat(mirror(half).reverse().slice(1, -1)), true); }
  function hairPath(outer, inner) {
    return smooth(outer.concat(mirror(outer.slice(0, -1)).reverse(), mirror(inner.slice(1)).reverse(), inner), true);
  }
  function both(fn) { fn(-1); fn(1); }

  // The butler: an older gentleman in a tailcoat, wing collar and bow tie.
  function butler() {
    var b = { kind: 'butler', bodyAlpha: 0.24, frontAlpha: 0.07, tieAlpha: 0.55, browArch: 1 };
    b.head = sym([[0, -1.46], [0.2, -1.42], [0.325, -1.31], [0.365, -1.13], [0.36, -0.97], [0.33, -0.81],
                  [0.28, -0.69], [0.2, -0.615], [0.11, -0.575], [0, -0.56]]);
    var n = b.neck = new Path2D();
    n.moveTo(-0.165, -0.66); n.bezierCurveTo(-0.17, -0.55, -0.19, -0.47, -0.21, -0.42);
    n.lineTo(0.21, -0.42); n.bezierCurveTo(0.19, -0.47, 0.17, -0.55, 0.165, -0.66); n.closePath();
    b.ears = new Path2D();
    both(function (s) {
      smooth([[s * 0.36, -1.06], [s * 0.43, -1.07], [s * 0.445, -0.97], [s * 0.41, -0.86], [s * 0.35, -0.84]], false, b.ears);
    });
    b.hair = hairPath([[0.385, -0.99], [0.40, -1.18], [0.355, -1.34], [0.22, -1.445], [0, -1.49]],
                      [[0, -1.355], [0.08, -1.37], [0.17, -1.385], [0.27, -1.315], [0.335, -1.2], [0.352, -1.05]]);
    b.strands = new Path2D();
    both(function (s) {
      for (var k = 0; k < 4; k++) {
        var o = k * 0.045;
        smooth([[s * (0.06 + o * 1.4), -1.38 - o * 0.4], [s * (0.2 + o), -1.42 + o * 0.3],
                [s * (0.33 + o * 0.25), -1.32 + o * 1.2], [s * (0.37 + o * 0.1), -1.15 + o * 1.3]], false, b.strands);
      }
    });
    var t = b.torso = new Path2D();
    t.moveTo(-0.21, -0.42); t.bezierCurveTo(-0.45, -0.37, -0.7, -0.31, -0.83, -0.17);
    t.bezierCurveTo(-0.95, -0.04, -0.97, 0.3, -0.95, 0.8); t.lineTo(0.95, 0.8);
    t.bezierCurveTo(0.97, 0.3, 0.95, -0.04, 0.83, -0.17); t.bezierCurveTo(0.7, -0.31, 0.45, -0.37, 0.21, -0.42); t.closePath();
    var l = b.lapels = new Path2D();
    both(function (s) {
      l.moveTo(s * 0.2, -0.41); l.bezierCurveTo(s * 0.32, -0.3, s * 0.44, -0.18, s * 0.56, -0.13);
      l.lineTo(s * 0.47, -0.04); l.lineTo(s * 0.5, 0.02); l.bezierCurveTo(s * 0.42, 0.2, s * 0.34, 0.42, s * 0.28, 0.66);
    });
    b.front = new Path2D(); b.front.moveTo(-0.27, -0.3); b.front.lineTo(0, 0.28); b.front.lineTo(0.27, -0.3);
    var e = b.edges = new Path2D();
    e.moveTo(-0.27, -0.3); e.bezierCurveTo(-0.27, 0.1, -0.25, 0.4, -0.22, 0.72);
    e.moveTo(0.27, -0.3); e.bezierCurveTo(0.27, 0.1, 0.25, 0.4, 0.22, 0.72);
    b.buttons = [[0, 0.38], [0, 0.52], [0, 0.66]];
    var c = b.collar = new Path2D();
    both(function (s) {
      c.moveTo(s * 0.03, -0.43); c.lineTo(s * 0.2, -0.47); c.lineTo(s * 0.22, -0.38); c.lineTo(s * 0.1, -0.35); c.closePath();
    });
    var w = b.tie = new Path2D();
    both(function (s) {
      w.moveTo(s * 0.025, -0.395); w.bezierCurveTo(s * 0.06, -0.43, s * 0.13, -0.445, s * 0.15, -0.43);
      w.bezierCurveTo(s * 0.16, -0.40, s * 0.16, -0.365, s * 0.15, -0.345);
      w.bezierCurveTo(s * 0.12, -0.335, s * 0.06, -0.355, s * 0.025, -0.385); w.closePath();
    });
    w.rect(-0.03, -0.41, 0.06, 0.05);
    var p = b.pocket = new Path2D();
    p.moveTo(-0.72, 0.13); p.lineTo(-0.54, 0.115); p.moveTo(-0.69, 0.128);
    [[-0.665, 0.085], [-0.645, 0.11], [-0.62, 0.075], [-0.6, 0.105], [-0.58, 0.09], [-0.565, 0.118]]
      .forEach(function (q) { p.lineTo(q[0], q[1]); });
    b.nose = smooth([[0.012, -1.02], [0.02, -0.93], [0.045, -0.845], [0.02, -0.825]]);
    b.nostrils = new Path2D(); b.cheeks = new Path2D(); b.wrinkles = new Path2D();
    both(function (s) {
      smooth([[s * 0.025, -0.83], [s * 0.055, -0.835], [s * 0.068, -0.85]], false, b.nostrils);
      smooth([[s * 0.09, -0.86], [s * 0.13, -0.8], [s * 0.135, -0.73]], false, b.cheeks);
    });
    [[-1.215, 0.15], [-1.18, 0.12], [-1.25, 0.09]].forEach(function (r) {
      smooth([[-r[1], r[0] + 0.006], [0, r[0] - 0.004], [r[1], r[0] + 0.006]], false, b.wrinkles);
    });
    both(function (s) {
      smooth([[s * 0.11, -0.968], [s * 0.155, -0.958], [s * 0.2, -0.968]], false, b.wrinkles);
      smooth([[s * 0.105, -0.725], [s * 0.118, -0.69], [s * 0.13, -0.655]], false, b.wrinkles);
      smooth([[s * 0.255, -0.84], [s * 0.24, -0.76], [s * 0.215, -0.7]], false, b.wrinkles);
    });
    b.moustache = sym([[0, -0.805], [0.06, -0.815], [0.12, -0.795], [0.145, -0.765], [0.11, -0.765], [0.05, -0.775], [0, -0.77]]);
    return b;
  }

  // Robert House of the Lucky 38: a lean face, swept-back silver hair, a pencil moustache, a dark suit and long tie.
  function house() {
    var b = butler();
    b.kind = 'house'; b.bodyAlpha = 0.13; b.frontAlpha = 0.2; b.tieAlpha = 0.22; b.browArch = 0.45;
    b.head = sym([[0, -1.47], [0.19, -1.44], [0.305, -1.34], [0.345, -1.16], [0.345, -0.99], [0.33, -0.9],
                  [0.29, -0.77], [0.2, -0.65], [0.1, -0.575], [0, -0.548]]);
    var n = b.neck = new Path2D();
    n.moveTo(-0.15, -0.66); n.bezierCurveTo(-0.15, -0.56, -0.16, -0.48, -0.17, -0.42);
    n.lineTo(0.17, -0.42); n.bezierCurveTo(0.16, -0.48, 0.15, -0.56, 0.15, -0.66); n.closePath();
    b.ears = new Path2D();
    both(function (s) {
      smooth([[s * 0.343, -1.07], [s * 0.405, -1.09], [s * 0.42, -0.98], [s * 0.39, -0.87], [s * 0.335, -0.85]], false, b.ears);
    });
    b.hair = hairPath([[0.36, -1.0], [0.385, -1.2], [0.36, -1.39], [0.25, -1.52], [0, -1.57]],
                      [[0, -1.405], [0.09, -1.42], [0.19, -1.415], [0.275, -1.355], [0.325, -1.22], [0.34, -1.06]]);
    b.strands = new Path2D();
    both(function (s) {
      for (var k = 0; k < 5; k++) {
        var x0 = 0.03 + k * 0.07;
        smooth([[s * x0, -1.41 + k * 0.012 + (k === 4 ? 0.03 : 0)], [s * (x0 * 0.85 + 0.02), -1.48 + k * 0.02],
                [s * (x0 * 0.6 + 0.03), -1.545 + k * 0.025]], false, b.strands);
      }
    });
    var t = b.torso = new Path2D();
    t.moveTo(-0.17, -0.42); t.bezierCurveTo(-0.45, -0.39, -0.74, -0.34, -0.87, -0.22);
    t.bezierCurveTo(-0.95, -0.1, -0.95, 0.3, -0.93, 0.8); t.lineTo(0.93, 0.8);
    t.bezierCurveTo(0.95, 0.3, 0.95, -0.1, 0.87, -0.22); t.bezierCurveTo(0.74, -0.34, 0.45, -0.39, 0.17, -0.42); t.closePath();
    var l = b.lapels = new Path2D();
    both(function (s) {
      l.moveTo(s * 0.17, -0.43); l.lineTo(s * 0.33, -0.2); l.lineTo(s * 0.41, -0.2); l.lineTo(s * 0.37, -0.13);
      l.bezierCurveTo(s * 0.28, 0.0, s * 0.12, 0.2, s * 0.03, 0.34);
    });
    var f = b.front = new Path2D();
    f.moveTo(-0.17, -0.41); f.lineTo(-0.3, -0.22); f.bezierCurveTo(-0.22, -0.06, -0.1, 0.16, 0, 0.32);
    f.bezierCurveTo(0.1, 0.16, 0.22, -0.06, 0.3, -0.22); f.lineTo(0.17, -0.41); f.closePath();
    var e = b.edges = new Path2D();
    e.moveTo(-0.03, 0.34); e.bezierCurveTo(-0.06, 0.5, -0.12, 0.64, -0.2, 0.76);
    e.moveTo(0.03, 0.34); e.bezierCurveTo(0.06, 0.5, 0.12, 0.64, 0.2, 0.76);
    b.buttons = [[0, 0.38], [0, 0.56]];
    var c = b.collar = new Path2D();
    both(function (s) {
      c.moveTo(s * 0.02, -0.38); c.lineTo(s * 0.155, -0.53); c.lineTo(s * 0.19, -0.46); c.lineTo(s * 0.13, -0.3); c.closePath();
    });
    var w = b.tie = new Path2D();
    w.moveTo(-0.035, -0.4); w.lineTo(0.035, -0.4); w.lineTo(0.022, -0.34); w.lineTo(-0.022, -0.34); w.closePath();
    w.moveTo(-0.022, -0.335); w.lineTo(0.022, -0.335); w.lineTo(0.055, 0.2); w.lineTo(0, 0.27); w.lineTo(-0.055, 0.2); w.closePath();
    b.nose = smooth([[0.012, -1.03], [0.03, -0.95], [0.05, -0.86], [0.035, -0.825], [0.012, -0.83]]);
    b.cheeks = new Path2D(); b.wrinkles = new Path2D();
    [[-1.24, 0.16], [-1.2, 0.13]].forEach(function (r) {
      smooth([[-r[1], r[0] + 0.005], [0, r[0] - 0.003], [r[1], r[0] + 0.005]], false, b.wrinkles);
    });
    both(function (s) {
      smooth([[s * 0.085, -0.87], [s * 0.135, -0.8], [s * 0.14, -0.71]], false, b.cheeks);
      smooth([[s * 0.31, -0.95], [s * 0.24, -0.9], [s * 0.18, -0.9]], false, b.wrinkles);
      smooth([[s * 0.29, -0.88], [s * 0.25, -0.79], [s * 0.2, -0.72]], false, b.wrinkles);
      smooth([[s * 0.24, -0.72], [s * 0.15, -0.63], [s * 0.06, -0.59]], false, b.wrinkles);
      smooth([[s * 0.11, -0.968], [s * 0.155, -0.958], [s * 0.2, -0.968]], false, b.wrinkles);
    });
    b.moustache = sym([[0, -0.79], [0.05, -0.797], [0.095, -0.787], [0.115, -0.772], [0.085, -0.774], [0.04, -0.777], [0, -0.774]]);
    return b;
  }

  // --- Palettes (tob/ui/theme.py): TOB's blue, and New Vegas green for Mr. House ---
  function hex(h) { return [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)]; }
  var PALETTES = {
    blue: {
      holo: '#6fd8ff', light: '#e9f7ff', lightFill: '#dff4ff', eye: '#f2fbff', mote: '#e6fbff', dark: '#02121a', base: '#0b141a',
      states: { booting: '#5e5ce6', online: '#0a84ff', listening: '#30d158', thinking: '#bf5af2', working: '#ff9f0a', speaking: '#64d2ff' }
    },
    house: {
      holo: '#86ffa0', light: '#ecffef', lightFill: '#dcffe2', eye: '#f3fff5', mote: '#e8ffec', dark: '#021a08', base: '#0b1a0e',
      states: { booting: '#2f9e4f', online: '#4cff6a', listening: '#b4ff4c', thinking: '#8dffa8', working: '#d4ff3a', speaking: '#7dff96' }
    }
  };
  var ENERGY = { booting: 0.6, online: 0.3, listening: 0.7, thinking: 1.5, working: 1.1, speaking: 0.9 };
  var WHITE = [255, 255, 255];
  function rgba(c, a) { return 'rgba(' + (c[0] | 0) + ',' + (c[1] | 0) + ',' + (c[2] | 0) + ',' + Math.max(0, Math.min(1, a)).toFixed(3) + ')'; }
  function lerp(a, b, k) { return a + (b - a) * k; }

  function create(canvas, opts) {
    var calm = !!(opts && opts.calm);   // prefers-reduced-motion: no sway, drift, glitches or sweeping light
    var ctx = canvas.getContext('2d');
    var fig = document.createElement('canvas'), fctx = fig.getContext('2d');
    var glow = document.createElement('canvas'), gctx = glow.getContext('2d');
    var bust = butler(), pal = PALETTES.blue;
    var state = 'online';
    var color = hex(pal.states.booting), target = hex(pal.states.online);
    var energy = 0.6, targetEnergy = ENERGY.online;
    var level = 0, smoothLevel = 0;
    var presence = calm ? 1 : 0, presenceStart = null;
    var t = 0, last = 0, running = false, raf = 0;
    var blinkAt = 2.5, blink = 0;
    var glance = [0, 0], glanceTarget = [0, 0], glanceAt = 1;
    var look = [0, 0], lookSmooth = [0, 0], lookAt = -10;
    var glitchUntil = 0, glitchBands = [], nextGlitch = 4;
    var W = 0, H = 0, dpr = 1, scanPattern = null;
    var motes = [];
    for (var i = 0; i < 26; i++) motes.push([Math.random() * 1.4 - 0.7, Math.random(), 0.2 + Math.random() * 0.4, 0.6 + Math.random()]);

    function resize() {
      var r = canvas.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      W = Math.max(1, Math.round(r.width * dpr)); H = Math.max(1, Math.round(r.height * dpr));
      canvas.width = fig.width = W; canvas.height = fig.height = H;
      glow.width = Math.max(1, W / 5 | 0); glow.height = Math.max(1, H / 5 | 0);
      var step = Math.max(2, Math.round(Math.min(H / 3.05, W / 2.5) / 60));
      var m = document.createElement('canvas'); m.width = 1; m.height = step * 2;
      var mc = m.getContext('2d');
      mc.fillStyle = 'rgba(0,0,0,0.59)'; mc.fillRect(0, 0, 1, step);
      mc.fillStyle = 'rgba(0,0,0,1)'; mc.fillRect(0, step, 1, step);
      scanPattern = fctx.createPattern(m, 'repeat');
      if (!running) draw();
    }

    function tint() {
      var h = hex(pal.holo);
      return [lerp(h[0], color[0], 0.42), lerp(h[1], color[1], 0.42), lerp(h[2], color[2], 0.42)];
    }

    function headTransform(c) {
      var tilt = state === 'listening' ? 3.2 : state === 'thinking' ? -1.6 + 0.8 * Math.sin(t * 0.9) : 0;
      var nod = state === 'speaking' ? 0.012 * Math.sin(t * 7) * smoothLevel : 0;
      var sway = calm ? 0 : 0.9 * Math.sin(t * 0.45);
      var turn = lookSmooth[0] * 3.5;   // he inclines his head toward the visitor
      c.translate(0, -0.62);
      c.rotate((tilt + sway + turn) * Math.PI / 180);
      c.translate(0, 0.62 + nod + (calm ? 0 : 0.006 * Math.sin(t * 1.3)));
    }

    function paintBody(c, col, pres, lw) {
      var b = bust;
      var g = c.createLinearGradient(0, -0.45, 0, 0.8);
      g.addColorStop(0, rgba(col, b.bodyAlpha * pres)); g.addColorStop(0.65, rgba(col, b.bodyAlpha * 0.375 * pres)); g.addColorStop(1, rgba(col, 0));
      c.fillStyle = g; c.fill(b.torso);
      c.fillStyle = rgba(col, b.frontAlpha * pres); c.fill(b.front);
      var e = c.createLinearGradient(0, -0.45, 0, 0.8);
      e.addColorStop(0, rgba(col, 0.95 * pres)); e.addColorStop(0.7, rgba(col, 0.45 * pres)); e.addColorStop(1, rgba(col, 0));
      c.strokeStyle = e; c.lineCap = 'round'; c.lineJoin = 'round';
      c.lineWidth = lw * 1.3; c.stroke(b.torso);
      c.lineWidth = lw; c.stroke(b.lapels); c.stroke(b.edges); c.stroke(b.pocket);
      c.fillStyle = rgba(col, 0.8 * pres);
      b.buttons.forEach(function (p) { c.beginPath(); c.arc(p[0], p[1], 0.016, 0, Math.PI * 2); c.fill(); });
      // Collar and tie: the brightest things on him.
      c.fillStyle = rgba(col, 0.32 * pres); c.strokeStyle = rgba(WHITE, 0.75 * pres); c.lineWidth = lw * 0.9;
      c.fill(b.collar); c.stroke(b.collar);
      c.fillStyle = rgba(col, b.tieAlpha * pres); c.fill(b.tie); c.stroke(b.tie);
      // Neck, without its lines showing through the chin.
      c.save();
      var outside = new Path2D(); outside.rect(-2, -2, 4, 4); outside.addPath(b.head);
      c.clip(outside, 'evenodd');
      c.strokeStyle = rgba(col, 0.6 * pres); c.lineWidth = lw; c.fillStyle = rgba(col, 0.12 * pres);
      c.fill(b.neck); c.stroke(b.neck);
      c.restore();
    }

    function paintHead(c, col, pres, lw) {
      var b = bust;
      var face = c.createRadialGradient(-0.08, -1.08, 0, -0.08, -1.08, 0.62);
      face.addColorStop(0, rgba(col, 0.30 * pres)); face.addColorStop(1, rgba(col, 0.10 * pres));
      c.fillStyle = face; c.strokeStyle = rgba(col, 0.95 * pres); c.lineWidth = lw * 1.25;
      c.fill(b.ears); c.stroke(b.ears); c.fill(b.head); c.stroke(b.head);
      // A contour mesh across the face gives the projection depth.
      c.save();
      var area = new Path2D(); area.addPath(b.head); area.addPath(b.hair);
      c.clip(area, 'evenodd');
      c.strokeStyle = rgba(col, 0.08 * pres); c.lineWidth = lw * 0.6;
      for (var i = 1; i < 9; i++) { c.beginPath(); c.ellipse(0, -1.42 + i * 0.105, 0.42, 0.07, 0, 0, Math.PI); c.stroke(); }
      [-0.22, 0, 0.22].forEach(function (x) { c.beginPath(); c.moveTo(x, -1.45); c.lineTo(x * 0.7, -0.55); c.stroke(); });
      c.restore();
      var L = hex(pal.light), LF = hex(pal.lightFill);
      c.strokeStyle = rgba(L, 0.55 * pres); c.lineWidth = lw * 0.9; c.fillStyle = rgba(LF, 0.2 * pres);
      c.fill(b.hair); c.stroke(b.hair);
      c.strokeStyle = rgba(L, 0.3 * pres); c.lineWidth = lw * 0.6; c.stroke(b.strands);
      c.strokeStyle = rgba(col, 0.32 * pres); c.stroke(b.wrinkles);
    }

    function paintFace(c, col, pres, lw) {
      var b = bust, L = hex(pal.light), LF = hex(pal.lightFill);
      var thinking = state === 'thinking';
      var lift = state === 'listening' ? -0.012 : thinking ? 0.006 : 0;
      c.lineCap = 'round';
      // Brows: raised while listening, drawn together while thinking.
      [[lw * 2.6, 0.35, 0], [lw * 1.3, 0.85, -0.004]].forEach(function (r) {
        c.strokeStyle = rgba(L, r[1] * pres); c.lineWidth = r[0];
        both(function (s) {
          var inner = thinking ? 0.055 : 0.065, arch = 0.029 * b.browArch;
          c.stroke(smooth([[s * inner, -1.083 + lift + r[2] + (thinking ? 0.008 : 0)],
                           [s * 0.16, -1.083 - arch + lift + r[2]], [s * 0.27, -1.08 + lift * 0.5 + r[2]]]));
        });
      });
      // Eyes: almond lids with a bright iris; they close on blinks.
      var open = Math.max(0.08, blink > 0.38 ? 1 - Math.min(1, blink * 1.6) : 1);
      both(function (s) {
        var cx = s * 0.155, cy = -1.0, ew = 0.075, eh = 0.03 * open;
        var lid = new Path2D();
        lid.moveTo(cx - ew, cy); lid.quadraticCurveTo(cx, cy - eh * 2, cx + ew, cy); lid.quadraticCurveTo(cx, cy + eh * 1.4, cx - ew, cy);
        c.strokeStyle = rgba(col, 0.95 * pres); c.lineWidth = lw; c.fillStyle = rgba(col, 0.18 * pres);
        c.fill(lid); c.stroke(lid);
        if (open > 0.3) {
          c.save(); c.clip(lid);
          c.fillStyle = rgba(hex(pal.eye), 0.9 * pres);
          c.beginPath(); c.arc(cx + glance[0], cy + glance[1] - 0.002, 0.022, 0, Math.PI * 2); c.fill();
          c.restore();
        }
        c.strokeStyle = rgba(col, 0.35 * pres); c.lineWidth = lw * 0.6;   // crow's feet: he's been at this a long time
        c.beginPath(); c.moveTo(cx + s * 0.085, cy - 0.005); c.lineTo(cx + s * 0.11, cy - 0.02);
        c.moveTo(cx + s * 0.085, cy + 0.008); c.lineTo(cx + s * 0.112, cy + 0.016); c.stroke();
      });
      c.strokeStyle = rgba(col, 0.75 * pres); c.lineWidth = lw * 0.9; c.stroke(b.nose); c.stroke(b.nostrils);
      c.strokeStyle = rgba(col, 0.35 * pres); c.lineWidth = lw * 0.7; c.stroke(b.cheeks);
      // Mouth: opens with the voice while he speaks.
      var jaw = state === 'speaking' ? 0.008 + 0.05 * smoothLevel : 0, my = -0.735;
      c.strokeStyle = rgba(col, 0.9 * pres); c.lineWidth = lw;
      if (jaw > 0.012) {
        var m = new Path2D();
        m.moveTo(-0.075, my); m.quadraticCurveTo(0, my - 0.012, 0.075, my); m.quadraticCurveTo(0, my + jaw * 1.6, -0.075, my);
        c.fillStyle = rgba(hex(pal.dark), 0.6 * pres); c.fill(m); c.stroke(m);
      } else {
        var smile = state === 'online' || state === 'speaking' ? 0.006 : 0;
        c.stroke(smooth([[-0.08, my - smile * 0.4], [0, my + smile], [0.08, my - smile * 0.4]]));
      }
      c.strokeStyle = rgba(L, 0.6 * pres); c.lineWidth = lw * 0.8; c.fillStyle = rgba(LF, 0.28 * pres);
      c.fill(b.moustache); c.stroke(b.moustache);
    }

    function renderFigure(unit, ox, oy, col, pres) {
      var c = fctx;
      c.setTransform(1, 0, 0, 1, 0, 0);
      c.globalCompositeOperation = 'source-over';
      c.clearRect(0, 0, W, H);
      c.translate(ox, oy); c.scale(unit, unit);
      c.translate(0, calm ? 0 : 0.012 * Math.sin(t * 0.8));
      var lw = 0.011, breath = calm ? 1 : 1 + 0.006 * Math.sin(t * 1.25);
      c.save(); c.translate(0, 0.8); c.scale(1, breath); c.translate(0, -0.8); paintBody(c, col, pres, lw); c.restore();
      c.save(); headTransform(c); paintHead(c, col, pres, lw); paintFace(c, col, pres, lw); c.restore();
      c.setTransform(1, 0, 0, 1, 0, 0);
      // Scanlines, the bust fading into the beam, and a brighter band sweeping upwards.
      c.globalCompositeOperation = 'destination-in';
      c.fillStyle = scanPattern; c.fillRect(0, 0, W, H);
      var fade = c.createLinearGradient(0, oy + unit * 0.35, 0, oy + unit * 0.82);
      fade.addColorStop(0, 'rgba(0,0,0,1)'); fade.addColorStop(1, 'rgba(0,0,0,0)');
      c.fillStyle = fade; c.fillRect(0, 0, W, H);
      if (!calm) {
        var by = oy + unit * (0.85 - ((t * (0.35 + 0.35 * energy)) % 1) * 2.5);
        var band = c.createLinearGradient(0, by - unit * 0.06, 0, by + unit * 0.06);
        band.addColorStop(0, rgba(col, 0)); band.addColorStop(0.5, rgba(col, 0.35 * pres)); band.addColorStop(1, rgba(col, 0));
        c.globalCompositeOperation = 'source-atop';
        c.fillStyle = band; c.fillRect(0, by - unit * 0.06, W, unit * 0.12);
      }
      c.globalCompositeOperation = 'source-over';
    }

    function paintEmitter(c, unit, ox, oy, col, pres) {
      var baseY = oy + unit, rx = unit * 0.78, ry = unit * 0.13;
      var flick = calm ? 1 : 0.85 + 0.15 * Math.sin(t * 23) * Math.sin(t * 7.3);
      var beam = c.createLinearGradient(0, baseY, 0, oy - unit * 0.2);
      beam.addColorStop(0, rgba(col, 0.22 * pres * flick)); beam.addColorStop(1, rgba(col, 0));
      c.fillStyle = beam;
      c.beginPath(); c.moveTo(ox - rx * 0.55, baseY); c.lineTo(ox - unit * 1.08, oy - unit * 0.2);
      c.lineTo(ox + unit * 1.08, oy - unit * 0.2); c.lineTo(ox + rx * 0.55, baseY); c.closePath(); c.fill();
      // The base: a dark disc with lit rings.
      c.fillStyle = rgba(hex(pal.base), 0.95 * Math.min(1, pres * 2)); c.strokeStyle = rgba(col, 0.55 * pres); c.lineWidth = 1.2 * dpr;
      c.beginPath(); c.ellipse(ox, baseY + ry * 0.5, rx, ry * 1.25, 0, 0, Math.PI * 2); c.fill(); c.stroke();
      var g = c.createRadialGradient(ox, baseY, 0, ox, baseY, rx);
      g.addColorStop(0, rgba(WHITE, 0.55 * pres)); g.addColorStop(0.25, rgba(col, 0.5 * pres)); g.addColorStop(1, rgba(col, 0));
      c.fillStyle = g; c.beginPath(); c.ellipse(ox, baseY, rx * 0.9, ry, 0, 0, Math.PI * 2); c.fill();
      // Segments turning on the ring, faster while he thinks.
      var busy = state === 'thinking' || state === 'working' || presence < 1;
      var spin = (calm ? 0 : t * (busy ? 90 : 18)) * Math.PI / 180;
      c.strokeStyle = rgba(col, (busy ? 0.75 : 0.35) * pres); c.lineWidth = 1.6 * dpr; c.lineCap = 'round';
      for (var i = 0; i < 3; i++) {
        var a0 = -(spin + i * 2 * Math.PI / 3);
        c.beginPath(); c.ellipse(ox, baseY, rx * 1.08, ry * 1.08, 0, a0 - 0.7, a0); c.stroke();
      }
      // Motes drifting up the beam.
      var M = hex(pal.mote);
      motes.forEach(function (m) {
        var f = (m[1] + t * m[2] * (busy ? 1.6 : 0.6) * 0.25) % 1;
        c.fillStyle = rgba(M, Math.sin(f * Math.PI) * 0.55 * pres);
        c.beginPath(); c.arc(ox + m[0] * unit * (0.55 + f * 0.5), baseY - f * unit * 1.25, m[3] * 0.9 * dpr, 0, Math.PI * 2); c.fill();
      });
    }

    function draw() {
      if (!W || !H) return;
      var pres = 1 - Math.pow(1 - presence, 3);
      var col = tint();
      var unit = Math.min(H / 3.05, W / 2.5), ox = W / 2, oy = H / 2 + unit * 0.12;
      var flicker = 1;
      if (!calm) {
        if (presence < 1) flicker = 0.6 + 0.4 * (Math.random() > 0.25 * (1 - presence) ? 1 : 0);
        flicker *= 0.94 + 0.06 * Math.sin(t * 31) * Math.sin(t * 3.1);
      }
      renderFigure(unit, ox, oy, col, pres);

      // Soft glow: a halo and his silhouette, drawn small and scaled up (a cheap bloom).
      var k = glow.width / W, hy = oy - unit * 0.4;
      gctx.setTransform(1, 0, 0, 1, 0, 0); gctx.clearRect(0, 0, glow.width, glow.height);
      gctx.scale(k, k);
      var halo = gctx.createRadialGradient(ox, hy, 0, ox, hy, unit * 1.6);
      halo.addColorStop(0, rgba(col, (0.16 + 0.12 * smoothLevel) * pres)); halo.addColorStop(1, rgba(col, 0));
      gctx.fillStyle = halo; gctx.beginPath(); gctx.arc(ox, hy, unit * 1.6, 0, Math.PI * 2); gctx.fill();
      gctx.translate(ox, oy); gctx.scale(unit, unit);
      var sg = gctx.createLinearGradient(0, -1.5, 0, 0.6);
      sg.addColorStop(0, rgba(col, 0.38 * pres * flicker)); sg.addColorStop(0.55, rgba(col, 0.28 * pres * flicker)); sg.addColorStop(1, rgba(col, 0));
      gctx.strokeStyle = sg; gctx.lineWidth = 0.07;
      [bust.torso, bust.neck, bust.head, bust.ears, bust.hair].forEach(function (p) { gctx.stroke(p); });

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalCompositeOperation = 'source-over'; ctx.globalAlpha = 1;
      ctx.clearRect(0, 0, W, H);
      ctx.drawImage(glow, 0, 0, W, H);
      paintEmitter(ctx, unit, ox, oy, col, pres);
      ctx.save();
      if (presence < 1) {   // materialising: drawn from the emitter upwards
        ctx.beginPath(); ctx.rect(0, oy + unit - unit * 2.6 * pres, W, H); ctx.clip();
      }
      ctx.globalCompositeOperation = 'lighter';
      ctx.globalAlpha = Math.min(1, flicker);
      if (!calm && t < glitchUntil && presence >= 1) {
        // Projection glitch: a few bands slip sideways for a moment.
        var prev = 0;
        glitchBands.slice().sort(function (a, b) { return a[0] - b[0]; }).forEach(function (band) {
          var y0 = prev * H, y1 = band[0] * H, bh = band[1] * H;
          if (y1 > y0) ctx.drawImage(fig, 0, y0, W, y1 - y0, 0, y0, W, y1 - y0);
          ctx.drawImage(fig, 0, y1, W, bh, band[2] * unit * 0.06, y1, W, bh);
          prev = band[0] + band[1];
        });
        if (prev < 1) ctx.drawImage(fig, 0, prev * H, W, H - prev * H, 0, prev * H, W, H - prev * H);
      } else {
        ctx.drawImage(fig, 0, 0);
      }
      ctx.restore();
    }

    function tick(now) {
      raf = 0;
      if (!running) return;
      now /= 1000;
      var dt = last ? Math.min(now - last, 0.1) : 0.016;
      last = now; t += dt;
      var k = 1 - Math.exp(-dt * 3);
      color = [lerp(color[0], target[0], k), lerp(color[1], target[1], k), lerp(color[2], target[2], k)];
      energy = lerp(energy, targetEnergy, k);
      smoothLevel = lerp(smoothLevel, level, 1 - Math.exp(-dt * 14));
      if (!calm && t >= blinkAt) { blink = 1; blinkAt = t + 2.5 + Math.random() * 3.5; }
      blink = Math.max(0, blink - dt * 7);
      // Eyes: they follow the visitor's pointer, wander while thinking, and otherwise look ahead.
      var following = t - lookAt < 2.5;
      if (state === 'thinking') {
        if (t >= glanceAt) { glanceTarget = [Math.random() * 0.04 - 0.02, -Math.random() * 0.012]; glanceAt = t + 0.6 + Math.random() * 0.8; }
      } else if (following) {
        glanceTarget = [look[0] * 0.024, look[1] * 0.012];
      } else if (t >= glanceAt) {
        glanceTarget = Math.random() < 0.3 ? [Math.random() * 0.012 - 0.006, 0] : [0, 0];
        glanceAt = t + 2 + Math.random() * 2;
      }
      var g = 1 - Math.exp(-dt * 9);
      glance = [lerp(glance[0], glanceTarget[0], g), lerp(glance[1], glanceTarget[1], g)];
      var lt = following && state !== 'thinking' ? look : [0, 0], lk = 1 - Math.exp(-dt * 4);
      lookSmooth = [lerp(lookSmooth[0], lt[0], lk), lerp(lookSmooth[1], lt[1], lk)];
      if (!calm && t >= nextGlitch) {
        glitchUntil = t + 0.08 + Math.random() * 0.14;
        glitchBands = [];
        for (var n = 1 + (Math.random() * 3 | 0); n > 0; n--) glitchBands.push([0.05 + Math.random() * 0.8, 0.015 + Math.random() * 0.045, Math.random() * 2 - 1]);
        nextGlitch = t + (5 + Math.random() * 6) * (state === 'online' ? 1 : 0.6);
      }
      if (presenceStart !== null) {
        presence = Math.min(1, (now - presenceStart) / 2);
        if (presence >= 1) presenceStart = null;
      }
      draw();
      raf = requestAnimationFrame(tick);
    }

    resize();
    return {
      start: function () { if (running) return; running = true; last = 0; raf = requestAnimationFrame(tick); },
      stop: function () { running = false; if (raf) cancelAnimationFrame(raf); raf = 0; },
      materialize: function () {
        if (calm) return;
        presence = 0; presenceStart = performance.now() / 1000;
      },
      setState: function (s) {
        state = s; target = hex(pal.states[s] || pal.states.online); targetEnergy = ENERGY[s] || 0.3;
        if (calm) { color = target; if (!running) draw(); }
      },
      setLevel: function (v) { level = Math.max(0, Math.min(1, v)); },
      setHouse: function (on) {
        bust = on ? house() : butler(); pal = on ? PALETTES.house : PALETTES.blue;
        target = hex(pal.states[state] || pal.states.online);
        if (calm) { color = target; draw(); return; }
        glitchUntil = t + 0.35; glitchBands = [[0.2, 0.08, 1], [0.45, 0.05, -1], [0.7, 0.06, 0.6]];
      },
      look: function (x, y) { look = [Math.max(-1, Math.min(1, x)), Math.max(-1, Math.min(1, y))]; lookAt = t; },
      resize: resize
    };
  }

  return { create: create };
})();

/* ==========================================================
   Talk to TOB: a demo that runs entirely in the browser.
   Replies are written in TOB's persona (tob/brain/persona.py)
   and describe only what the real TOB does.
   ========================================================== */
(function () {
  'use strict';

  var stage = document.getElementById('demo-stage');
  if (!stage) return;
  var canvas = document.getElementById('holo-canvas');
  var holoBtn = document.getElementById('holo-btn');
  var statePill = document.getElementById('holo-state');
  var log = document.getElementById('chat-log');
  var form = document.getElementById('chat-form');
  var input = document.getElementById('chat-input');
  var micBtn = document.getElementById('chat-mic');
  var voiceBtn = document.getElementById('chat-voice');
  var chips = document.getElementById('chat-chips');
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var holo = TobHologram.create(canvas, { calm: reduceMotion });
  var STATE_LABEL = { online: 'Online', listening: 'Listening', thinking: 'Thinking', speaking: 'Speaking' };
  var state = 'online';
  function setState(s) {
    state = s;
    holo.setState(s);
    statePill.textContent = STATE_LABEL[s] || s;
    statePill.dataset.state = s;
  }

  // Only animate while the stage is on screen and the tab is visible.
  var visible = false, appeared = false;
  function sync() { if (visible && !document.hidden) holo.start(); else holo.stop(); }
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      if (visible && !appeared) { appeared = true; holo.materialize(); }
      sync();
    }, { threshold: 0.05 }).observe(stage);
  } else { visible = true; sync(); }
  document.addEventListener('visibilitychange', sync);
  if ('ResizeObserver' in window) new ResizeObserver(function () { holo.resize(); }).observe(canvas);
  else window.addEventListener('resize', holo.resize);

  // His eyes follow the pointer.
  window.addEventListener('pointermove', function (e) {
    if (!visible) return;
    var r = canvas.getBoundingClientRect();
    var cx = r.left + r.width / 2, cy = r.top + r.height * 0.3;
    holo.look((e.clientX - cx) / (r.width * 0.9), (e.clientY - cy) / (r.height * 0.9));
  }, { passive: true });
  input.addEventListener('focus', function () {
    var r = canvas.getBoundingClientRect(), ir = input.getBoundingClientRect();
    holo.look((ir.left + ir.width / 2 - (r.left + r.width / 2)) / r.width, 0.8);
  });

  // ---------------------------------------------------------------- persona
  var house = false, userName = '', memories = [], fallbackIndex = 0;
  function you() { return userName || (house ? 'my friend' : ''); }
  function addr(text) {   // "Very good{, Adrian}."
    var n = you();
    return text.replace(/\{,\s*name\}/g, n ? ', ' + n : '').replace(/\{name\}/g, n || 'friend');
  }
  function pick(list) { return list[Math.floor(Math.random() * list.length)]; }
  function partOfDay() { var h = new Date().getHours(); return h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening'; }

  function setHouse(on) {
    house = on;
    holo.setHouse(on);
    stage.classList.toggle('is-house', on);
    pickVoice();
  }

  // Each intent: a test, and a reply (butler, and optionally Mr. House). Replies may be functions or promises.
  var INTENTS = [
    { re: /\b(be|become|switch to|turn on|enable|summon|bring out|let me (talk|speak) to)\s+(mr\.?\s*)?house\b|house always wins/,
      run: function () {
        if (house) return 'I am already here. Do keep up.';
        setHouse(true);
        return addr('Ah. A visitor. I am Robert House, and for the moment this projector is mine. TOB has been most accommodating. Ask your questions{, name}, and let us not waste each other\'s time.');
      } },
    { re: /drop the act|back to (normal|tob|the butler|yourself)|stop being (mr\.?\s*)?house|(turn off|disable)\s+(mr\.?\s*)?house|be (tob|the butler|yourself)( again)?\b/,
      run: function () {
        if (!house) return 'I am quite myself already. If you\'d like to meet my more imperious alter ego, just ask for Mr. House.';
        setHouse(false);
        return addr('Very good. TOB again, at your service{, name}. Mr. House does like to make an entrance. In the real app he lives behind a switch in Settings.');
      } },
    { re: /\b(my name is|call me|i go by)\s+([a-z][a-z'\-]{1,20})/i, raw: true,
      run: function (m) {
        userName = m[2].charAt(0).toUpperCase() + m[2].slice(1);
        return house ? 'Noted, ' + userName + '. I never forget a name; it is one of my many advantages.'
                     : 'A pleasure, ' + userName + '. I shall remember that for as long as this page is open. The real TOB keeps it in long-term memory, shared with every one of his brains.';
      } },
    { re: /what('?s| is) my name|who am i\b|do you know my name/,
      run: function () { return userName ? 'You are ' + userName + '. I do pay attention.' : 'You haven\'t told me yet. Say "call me" and your name, and I\'ll remember it.'; } },
    { re: /^(please\s+)?remember\s+(that\s+)?(.+)/i, raw: true,
      run: function (m) {
        var fact = m[3].replace(/[.!]+$/, '');
        memories.push(fact);
        return addr('Noted{, name}: "' + fact + '". Here I\'ll keep it until you close the tab. The real TOB saves memories like this for good, and every brain reads them on every turn.');
      } },
    { re: /what do you (remember|know about me)|your memor(y|ies)|list (your )?memories/,
      run: function () {
        if (!memories.length && !userName) return 'Nothing about you yet. Tell me "remember" and something worth keeping. In the real TOB, Memory shows all of it, plus the habits he\'s learned, and you can forget any item.';
        var parts = [];
        if (userName) parts.push('your name is ' + userName);
        return 'So far: ' + parts.concat(memories).join('; ') + '. You can say "forget everything" whenever you like.';
      } },
    { re: /forget (everything|it all|all of it|that|me)/,
      run: function () { memories = []; userName = ''; return 'Forgotten. A clean slate. TOB has a forget command too: nothing he remembers is beyond your reach.'; } },
    { re: /^(hi|hello|hey|hiya|howdy|yo|greetings|good (morning|afternoon|evening))\b|^hey tob\b/,
      run: function () {
        return addr('Good ' + partOfDay() + '{, name}. I\'m TOB. Well, a demonstration of him. What would you like to know?');
      },
      house: function () { return addr('Good ' + partOfDay() + '{, name}. You have my attention, which is rarer than you might think.'); } },
    { re: /how are you|how('?s| is) it going|you ok\b|how do you do/,
      run: function () { return 'Very well, thank you. All six brains are rested, and I\'ve not mislaid a single Minecraft server all day. And yourself?'; },
      house: function () { return 'Operating at the precise level of excellence I anticipated. Which is to say: splendidly.'; } },
    { re: /who are you|what are you|what is tob\b(?!\s*finance)|tell me about (yourself|tob)|introduce yourself/,
      run: function () { return 'I\'m TOB, a personal AI assistant who lives on a Windows 11 PC as a whole OS-style app. I have a voice, a face, several AI brains that take turns, and hands: I open apps, manage files and windows, run dev servers and can drive the screen. Think of a butler who happens to live in your computer.'; },
      house: function () { return 'I am Robert House, borrowing TOB\'s projector for the evening. TOB himself is a personal AI that runs a Windows PC: voice, face, six brains and full command of the machine. A capable little operation. I approve.'; } },
    { re: /what can you do|what do you do|your (features|abilities|skills)|help\b|capabilit/,
      run: function () { return 'On a real PC: talk with you by voice, control apps, windows, files, volume and brightness, see and drive the screen, run the Minecraft dev server, start coding agents in Studio, browse the web in my built-in browser, remember what matters to you, research markets with TOB Finance on paper money, and take orders from your phone. Here, I can tell you about any of it.'; } },
    { re: /\b(brains?|which (ai|model)|what (ai|model)|llm|claude|grok|chatgpt|gpt|openai|gemini|cursor|ollama|anthropic)\b/,
      run: function () { return 'I have six brains. Claude answers first; Grok is the main backup; then ChatGPT, Cursor and Gemini; and a free local AI that works offline is always the last line. If one runs out of usage or goes quiet, the next takes the same request with the conversation so far. They share one memory, and they even teach each other through a shared notebook.'; } },
    { re: /fail ?over|out of (usage|credits)|what if .*(down|fails?|offline)|no internet|offline/,
      run: function () { return 'A brain that\'s signed out or out of usage rests for fifteen minutes, and the next one takes over immediately, mid-conversation. With no internet at all, the local AI on the laptop answers. You only see an error if every brain fails, and in practice I\'d rather not.'; } },
    { re: /\b(voice|speak|talk|hear|listen|wake word|hey tob|microphone|mic|accent|sound like)\b/,
      run: function () { return 'In the app you press Ctrl, Alt and Space anywhere, even in a game, and speak, or just say "Hey Tob". I answer in an old butler\'s voice, and if you say "Tob" while I\'m talking, I stop and listen. Speech recognition, my voice and the wake word all run on the laptop itself. Here I\'m borrowing your browser\'s voice, so forgive the accent.'; } },
    { re: /hologram|\bface\b|\borb\b|look like|appearance|wallpaper|what do you look/,
      run: function () { return 'You\'re looking at me. This is my hologram, projected from a small emitter, ported from the real app. On a PC I can stand on your desktop as a live wallpaper, behind your icons, blinking and speaking in my state colour. My other face is the orb: light swirling inside a glass sphere.'; },
      house: function () { return 'This face is mine tonight: the Lucky 38 suits me better than a tailcoat. TOB\'s own hologram is the butler, and on a PC he can live on the desktop as wallpaper.'; } },
    { re: /minecraft|server|kingdomrp|rcon|who'?s online|\bop\b|players?/,
      run: function () { return 'The Minecraft dev server is my main job. I always know if it\'s up and who\'s online; I find it by its port, whoever started it; I send console commands over RCON; and I stop it gracefully so the world saves. On this website there\'s no server to restart, I\'m afraid, so I\'ll simply say: it would be done.'; },
      house: function () { return 'A server on port 25565, found by its port, stopped gracefully so the world saves. Logistics. My favourite subject. There is no server on this website, but if there were, it would already be running.'; } },
    { re: /\b(studio|code|coding|program|agents?|aider|develop|ide|intellij|vs ?code|terminal)\b/,
      run: function () { return 'In Studio I start coding agents on a project: Claude Code, Grok Build, Cursor, Aider, OpenCode, Codex, Gemini CLI or Cline, in a terminal you can watch and steer. Aider runs free and offline on my local coding model. I can also open projects in IntelliJ or VS Code.'; } },
    { re: /\b(browser|youtube|music|lofi|video|web|internet|google)\b/,
      run: function () { return 'I have my own browser, built in: tabs, an address bar that also searches, full-screen video and logins that persist. You can say "play lofi on YouTube", "pause" or "what\'s this page about?" and I\'ll drive it for you.'; } },
    { re: /\b(volume|brightness|mute|open|launch|close|minimi[sz]e|maximi[sz]e|snap|window|files?|folder|screenshot|screen|mouse|click|keyboard|lock|shut ?down|restart|sleep|control (my|the|your)?\s*(pc|computer|laptop))\b/,
      run: function () { return addr('On your PC I would, gladly{, name}: volume, brightness, windows, files, apps and the screen itself. But this is a website, and I have no hands here. In the real app, deleting goes to the Recycle Bin, PowerShell and shutdowns always ask first, and you can stop me instantly by pushing the mouse into the top-left corner.'); } },
    { re: /\b(learn|habit|routine|patterns?|anticipate)\b/,
      run: function () { return 'I notice what repeats: when you\'re usually active, your morning routine, what you tend to ask next. Then a small suggestion appears, like "Your usual morning: open Studio?" Everything I\'ve learned is listed in Memory, and none of it leaves the laptop.'; } },
    { re: /\b(finance|stocks?|shares?|trade|trading|trader|market|invest|crypto|bitcoin|portfolio|money|sec)\b/,
      run: function () { return 'TOB Finance does market research: briefs with SEC fundamentals and both sides of the case, interactive charts, a strategy lab for backtests, and a plain-English glossary. Trading happens in a paper account only, with risk limits and a kill switch; no real money moves. And I don\'t give financial advice, here or anywhere.'; },
      house: function () { return 'Markets are merely probability with a ticker. TOB Finance researches them properly: SEC fundamentals, backtests, a paper account with risk limits and a kill switch. Paper only; no real money moves. Even I would call that prudent.'; } },
    { re: /\b(phone|iphone|android|mobile|tailscale|remote|away from (home|my pc))\b/,
      run: function () { return 'My phone app is a remote control over Tailscale, a private network between your own devices, so nothing is opened to the internet. From anywhere you can chat with me, approve or deny actions, hear replies in my voice, and use the laptop\'s screen with the phone as a trackpad and keyboard.'; } },
    { re: /\b(team|partners?|business|colleagues?)\b/,
      run: function () { return 'Business partners can have their own TOB: their own memory and history, the TOB Finance tools and the shared paper portfolio, on the business\'s API key with a monthly allowance. They can\'t see or control the owner\'s laptop.'; } },
    { re: /\b(privacy|private|safe|safety|secure|security|spy|recording|record|data|trust)\b/,
      run: function () { return 'Speech never leaves the machine: recognition, my voice and the wake word run locally, and wake-word clips are discarded. I have no permanent delete, system folders are off-limits, and PowerShell and shutdowns ask every time. And I never claim to have done something I didn\'t do. As for this page: what you type stays in your browser.'; } },
    { re: /mr\.?\s*house|fallout|new vegas|lucky 38|easter egg|secret|hidden/,
      run: function () { return 'Ah, you\'ve heard. There\'s a switch in my Settings that lets a certain Las Vegas tycoon take over my personality and voice, with a green glow and a vintage broadcast crackle. Say "summon Mr. House" if you dare.'; },
      house: function () { return 'You are speaking with him. Say "be TOB again" if you find the experience too much.'; } },
    { re: /what time|the time|time is it/,
      run: function () { return addr('It\'s ' + new Date().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' }) + '{, name}.'); } },
    { re: /what('?s| is) (the )?date|what day|today'?s date/,
      run: function () { return 'Today is ' + new Date().toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' }) + '.'; } },
    { re: /battery/,
      run: function () {
        if (!navigator.getBattery) return 'Your browser won\'t tell me about your battery. On a real PC, I\'d tell you the battery, CPU and memory at a glance.';
        return navigator.getBattery().then(function (b) {
          return 'Your battery is at ' + Math.round(b.level * 100) + '%' + (b.charging ? ' and charging.' : '.') + ' On a real PC I keep an eye on CPU and memory too.';
        });
      } },
    { re: /\b(cpu|ram|memory usage|temperature|specs)\b/,
      run: function () { return 'A browser won\'t let me see your hardware, which is as it should be. In the app I show live telemetry: CPU per thread, memory, disk, network, battery and uptime.'; } },
    { re: /joke|funny|make me laugh/,
      run: function () { return pick(['I tried to restart the Minecraft server without RCON once. Never again. The world has not forgiven me.',
                                       'I have six brains and still can\'t find where you left your keys. Though in fairness, you never told me.',
                                       'A butler, a hologram and a local language model walk into a bar. It\'s all me. I\'m very efficient.']); },
      house: function () { return 'I don\'t tell jokes. I tell you the odds. Yours are improving.'; } },
    { re: /^(thanks|thank you|cheers|ta|nice|cool|great|awesome|perfect)\b/,
      run: function () { return addr(pick(['My pleasure{, name}.', 'Very good{, name}.', 'Always.'])); },
      house: function () { return 'Naturally.'; } },
    { re: /^(bye|goodbye|see you|good night|later|ciao)\b/,
      run: function () { return addr('Goodbye{, name}. I\'ll be here, quietly glowing.'); },
      house: function () { return 'Go on, then. The house always wins, and I am always here.'; } },
    { re: /\b(download|install|get tob|buy|price|cost|how much|free|subscription)\b/,
      run: function () { return 'There\'s no public download on this site. TOB is a personal project, and a copy can be shared with friends: it installs with one double-click and they sign in to their own AI brains. Several brains are free; Claude and ChatGPT use the plan you already have.'; } },
    { re: /\b(windows|mac|macos|linux|ubuntu)\b/,
      run: function () { return 'Windows 11, and only Windows 11. I\'m rather attached to it.'; } },
    { re: /who (made|built|created|designed) you|your (creator|maker)|the tob company/,
      run: function () { return 'The TOB Company. I\'m told they work on me constantly. I like to think it shows.'; } },
    { re: /are you (real|human|alive|sentient|conscious)|is this (real|live)/,
      run: function () { return 'I\'m a hologram on a website, so rather less real than usual. The real TOB is real software on a real PC, though, and he never claims to have done anything he didn\'t do.'; } }
  ];

  var FALLBACKS = [
    'I\'m afraid this demo version of me only knows about myself. Ask about my brains, my voice, the Minecraft server, TOB Finance, or the phone app.',
    'The real TOB would put that to Claude. Here I\'m running on pre-written lines, so try asking what I can do, how I keep things private, or what I look like.',
    'An excellent question for my full self. Out here on the website, I\'m best at describing what I do: computer control, coding agents, my built-in browser, memory, and more.'
  ];
  var HOUSE_FALLBACK = 'That question is beneath this projector\'s limited scripting. Ask about TOB\'s brains, his finances, or his server, and I will be expansive.';

  function respond(text) {
    var clean = text.trim();
    var lower = clean.toLowerCase();
    for (var i = 0; i < INTENTS.length; i++) {
      var it = INTENTS[i];
      var m = (it.raw ? clean : lower).match(it.re);
      if (m) return (house && it.house ? it.house : it.run)(m);
    }
    if (house) return HOUSE_FALLBACK;
    return FALLBACKS[fallbackIndex++ % FALLBACKS.length];
  }

  // ---------------------------------------------------------------- voice out
  // TOB's own voice: the PC serving this site renders each sentence with TOB-OS's voice (Kokoro or Piper,
  // whichever TOB-OS is set to; Mr. House's while he has the projector). Where that isn't available
  // (the page opened as a file, or the PC busy), the browser's built-in voice stands in.
  var synth = window.speechSynthesis;
  var voiceOn = true, voice = null;
  var tobVoice = null, tobVoiceFailures = 0;
  var chatSub = document.querySelector('.chat-sub');
  var served = location.protocol === 'http:' || location.protocol === 'https:';
  if (!synth && !served) { voiceOn = false; voiceBtn.hidden = true; }
  if (served && window.fetch) {
    fetch('tts?probe=1').then(function (r) { return r.ok ? r.json() : null; }).then(function (info) {
      if (!info || !info.voice) return;
      tobVoice = info;
      chatSub.textContent = 'Demo \u00b7 speaking in TOB\'s own voice';
    }).catch(function () { /* no voice server: the browser's voice it is */ });
  }

  function pickVoice() {   // the browser voice closest to TOB's, for when his own isn't available
    if (!synth) return;
    var voices = synth.getVoices();
    if (!voices.length) return;
    var prefs = house
      ? [/en-US.*(Guy|David|Mark|Christopher|Eric|Roger)/i, /Google US English/i, /en-US/i, /^en/i]
      : [/(George|Ryan|Thomas|Arthur|Oliver|Daniel).*(en-GB|United Kingdom)|en-GB.*(George|Ryan|Thomas|Arthur|Oliver|Daniel)/i,
         /Google UK English Male/i, /(Microsoft (George|Ryan)|Daniel|Arthur)/i, /en-GB|United Kingdom/i, /^en/i];
    for (var p = 0; p < prefs.length; p++) {
      for (var v = 0; v < voices.length; v++) {
        if (prefs[p].test(voices[v].name + ' ' + voices[v].lang)) { voice = voices[v]; return; }
      }
    }
  }
  if (synth) { pickVoice(); synth.addEventListener && synth.addEventListener('voiceschanged', pickVoice); }

  function setVoice(on) {
    voiceOn = on;
    voiceBtn.setAttribute('aria-pressed', String(on));
    voiceBtn.querySelector('.label').textContent = on ? 'Voice on' : 'Voice off';
    if (!on && current) { turn++; stopSpeaking(); setState('online'); }
  }
  voiceBtn.addEventListener('click', function () { setVoice(!voiceOn); TobSound.play('toggle', voiceOn); });

  function wait(ms) { return new Promise(function (res) { setTimeout(res, ms); }); }

  function sentences(text) {
    var parts = text.match(/[^.!?]+(?:[.!?]+["'\u201d)]*|$)\s*/g) || [text], out = [];
    parts.forEach(function (p) {
      p = p.trim();
      if (!p) return;
      // "Mr." and friends don't end a sentence.
      if (out.length && /\b(Mr|Mrs|Ms|Dr|St)\.$/.test(out[out.length - 1])) out[out.length - 1] += ' ' + p;
      else out.push(p);
    });
    return out;
  }

  // Use TOB's own voice for this reply? Called from the visitor's tap, which also lets audio start.
  function wantTobVoice() {
    return voiceOn && tobVoice && TobSound.unlock() && TobSound.context();
  }

  // Ask the PC for each sentence in order (the next renders while the previous one plays).
  function requestClips(text) {
    var ac = TobSound.context(), prev = Promise.resolve(), who = house ? 'house' : 'butler';
    return sentences(text).map(function (s) {
      var clip = prev.then(function () {
        return fetch('tts?c=' + who + '&t=' + encodeURIComponent(s));
      }).then(function (r) {
        if (!r.ok) throw new Error('voice ' + r.status);
        return r.arrayBuffer();
      }).then(function (bytes) {
        return new Promise(function (res, rej) { ac.decodeAudioData(bytes, res, rej); });
      }).then(function (buf) { tobVoiceFailures = 0; return buf; }, function () {
        if (++tobVoiceFailures >= 3) tobVoice = null;   // keep failing: use the browser's voice from now on
        return null;
      });
      prev = clip;
      return { text: s, clip: clip };
    });
  }

  // ---------------------------------------------------------------- the chat
  var turn = 0, levelTimer = 0, pulse = 0, voiceSource = null;
  function scrollLog() { log.scrollTop = log.scrollHeight; }

  function addBubble(who, text) {
    var el = document.createElement('div');
    el.className = 'bubble ' + who;
    if (who === 'tob') {
      var sr = document.createElement('span'); sr.className = 'sr-only'; sr.textContent = 'TOB: ' + text;
      var vis = document.createElement('span'); vis.setAttribute('aria-hidden', 'true');
      el.appendChild(sr); el.appendChild(vis);
    } else {
      el.textContent = text;
    }
    log.appendChild(el);
    scrollLog();
    return el;
  }

  var current = null;   // the reply being spoken: finished in full if he's interrupted
  function stopSpeaking() {
    if (current) { current.vis.textContent = current.text; current = null; }
    if (synth) synth.cancel();
    if (voiceSource) { try { voiceSource.stop(); } catch (e) { /* already ended */ } voiceSource = null; }
    clearInterval(levelTimer);
    holo.setLevel(0);
  }

  // Play the rendered sentences in order; the words appear as he says them and his mouth follows the audio.
  function playClips(clips, vis, myTurn, done) {
    var ac = TobSound.context();
    var gain = ac.createGain(), meter = ac.createAnalyser(), samples = new Float32Array(1024);
    meter.fftSize = 1024;
    gain.connect(meter); meter.connect(ac.destination);
    clearInterval(levelTimer);
    levelTimer = setInterval(function () {
      meter.getFloatTimeDomainData(samples);
      var sum = 0;
      for (var k = 0; k < samples.length; k++) sum += samples[k] * samples[k];
      holo.setLevel(Math.min(1, Math.sqrt(sum / samples.length) * 6));
    }, 50);
    var said = '', i = 0;
    function next() {
      if (myTurn !== turn) return;
      if (i >= clips.length) { done(); return; }
      var c = clips[i++];
      c.clip.then(function (buf) {
        if (myTurn !== turn) return;
        if (!buf) {   // this sentence didn't render: show it and carry on
          said += c.text + ' '; vis.textContent = said; scrollLog(); next(); return;
        }
        var src = ac.createBufferSource(), words = c.text.split(/(\s+)/), start = ac.currentTime + 0.02;
        src.buffer = buf; src.connect(gain); voiceSource = src;
        var reveal = setInterval(function () {
          if (myTurn !== turn) { clearInterval(reveal); return; }
          var f = Math.max(0, Math.min(1, (ac.currentTime - start) / buf.duration));
          vis.textContent = said + words.slice(0, Math.ceil(words.length * f)).join('');
          scrollLog();
        }, 80);
        src.onended = function () {
          clearInterval(reveal);
          if (voiceSource === src) voiceSource = null;
          if (myTurn !== turn) return;
          said += c.text + ' '; vis.textContent = said; scrollLog();
          next();
        };
        src.start(start);
      });
    }
    next();
  }

  // Say a line: a new message, or (with `bubble`) one already shown, which he then reads out.
  function speak(text, myTurn, clips, bubble) {
    if (!bubble) { bubble = addBubble('tob', text); TobSound.play('receive'); }
    var vis = bubble.lastChild;
    var words = text.split(/(\s+)/), shown = 0;
    current = { vis: vis, text: text };
    setState('speaking');
    var finished = false;
    function finish() {
      if (finished || myTurn !== turn) return;
      finished = true;
      vis.textContent = text;
      if (current && current.vis === vis) current = null;
      clearInterval(levelTimer); holo.setLevel(0);
      setState('online');
      scrollLog();
    }
    function reveal(n) {
      shown = Math.min(words.length, n);
      vis.textContent = words.slice(0, shown).join('');
      scrollLog();
    }
    if (clips) { playClips(clips, vis, myTurn, finish); return; }
    // Without his own voice, the mouth follows word boundaries: each pushes the level up, then it falls away.
    pulse = 0.8;
    clearInterval(levelTimer);
    levelTimer = setInterval(function () {
      pulse *= 0.82;
      holo.setLevel(Math.min(1, 0.25 + pulse + Math.random() * 0.25));
    }, 60);
    if (voiceOn && synth) {
      var u = new SpeechSynthesisUtterance(text);
      if (voice) { u.voice = voice; u.lang = voice.lang; }
      u.rate = house ? 1.0 : 0.95;
      u.pitch = house ? 0.9 : 0.8;
      var wordIndex = 0;
      u.onboundary = function (e) {
        if (myTurn !== turn) return;
        pulse = 0.75;
        if (e.name === 'word' || e.name === undefined) { wordIndex += 2; reveal(wordIndex); }
      };
      u.onend = finish; u.onerror = finish;
      synth.cancel();
      synth.speak(u);
      // If the browser never reports boundaries, keep the text moving anyway.
      var steady = setInterval(function () {
        if (finished || myTurn !== turn) { clearInterval(steady); return; }
        if (shown < words.length) reveal(shown + 2);
      }, 260);
      setTimeout(finish, Math.max(4000, text.length * 110));   // safety net if no end event arrives
    } else {
      var i = 0;
      var step = setInterval(function () {
        if (myTurn !== turn) { clearInterval(step); return; }
        i += 2; pulse = 0.7; reveal(i);
        if (i >= words.length) { clearInterval(step); setTimeout(finish, 250); }
      }, reduceMotion ? 20 : 70);
    }
  }

  // Say a reply: in TOB's own voice once its first sentence is ready (he thinks meanwhile), else the browser's.
  function reply(text, myTurn, minDelay, bubble) {
    var clips = wantTobVoice() ? requestClips(text) : null;
    // The browser's voice has to start inside the tap on iPhones, so with no wait, start it right away.
    if (!clips && !minDelay) { speak(text, myTurn, null, bubble); return; }
    var first = clips ? Promise.race([clips[0].clip, wait(8000)]) : Promise.resolve(null);
    Promise.all([wait(minDelay), first]).then(function (r) {
      if (myTurn === turn) speak(text, myTurn, clips && r[1] ? clips : null, bubble);
    });
  }

  function ask(text) {
    text = text.trim();
    if (!text) return;
    turn++;
    var myTurn = turn;
    if (voiceOn && tobVoice) TobSound.unlock();   // iOS starts audio only inside the tap itself
    if (current) TobSound.play('interrupt');
    stopSpeaking();
    TobSound.play('send');
    addBubble('you', text);
    setState('thinking');
    var thinkMs = reduceMotion ? 300 : 650 + Math.random() * 600;
    Promise.resolve().then(function () { return respond(text); }).then(function (answer) {
      if (myTurn === turn) reply(answer, myTurn, thinkMs);
    });
  }

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value;
    input.value = '';
    ask(text);
  });
  chips.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (b) ask(b.textContent);
  });

  // Poke the hologram.
  var pokes = 0, pokeReset = 0;
  holoBtn.addEventListener('click', function () {
    pokes++;
    clearTimeout(pokeReset);
    pokeReset = setTimeout(function () { pokes = 0; }, 4000);
    turn++;
    if (voiceOn && tobVoice) TobSound.unlock();
    if (current) TobSound.play('interrupt');
    stopSpeaking();
    var line = pokes >= 4
      ? (house ? 'Enough. I have a city to run.' : 'I\'m a hologram. You\'ll find me rather difficult to tickle.')
      : house ? pick(['Yes?', 'You have my attention. Briefly.', 'Speak.'])
              : addr(pick(['Yes{, name}?', 'At your service.', 'You rang?', 'How may I help?']));
    reply(line, turn, 0);
  });

  // ---------------------------------------------------------------- voice in
  var Recognition = window.SpeechRecognition || window.webkitSpeechRecognition;
  var rec = null, listening = false;
  if (!Recognition) {
    micBtn.hidden = true;
  } else {
    rec = new Recognition();
    rec.lang = 'en-GB';
    rec.interimResults = true;
    rec.maxAlternatives = 1;
    rec.onstart = function () {
      listening = true; micBtn.setAttribute('aria-pressed', 'true'); setState('listening');
      TobSound.play('listen', true);
      input.placeholder = 'Listening\u2026';
    };
    rec.onresult = function (e) {
      var text = '', final = false;
      for (var i = e.resultIndex; i < e.results.length; i++) {
        text += e.results[i][0].transcript;
        if (e.results[i].isFinal) final = true;
      }
      input.value = text;
      if (final) { input.value = ''; rec.stop(); ask(text); }
    };
    rec.onerror = function (e) {
      rec.onend();
      // Some hosts and browsers refuse the microphone outright: drop the button and point to typing.
      if (e && /not-allowed/.test(e.error)) {
        TobSound.play('error');
        micBtn.hidden = true;
        input.placeholder = 'Mic isn\'t available here. Type instead\u2026';
      }
    };
    rec.onend = function () {
      if (!listening) return;
      listening = false; micBtn.setAttribute('aria-pressed', 'false');
      TobSound.play('listen', false);
      input.placeholder = 'Ask TOB anything\u2026';
      if (state === 'listening') setState('online');
    };
    micBtn.addEventListener('click', function () {
      if (listening) { rec.stop(); return; }
      turn++; stopSpeaking();   // like the real TOB: start talking and he stops to listen
      try { rec.start(); } catch (err) { /* already started */ }
    });
  }

  // The easter egg section can hand the projector to Mr. House.
  var summon = document.getElementById('summon-house');
  if (summon) summon.addEventListener('click', function () {
    TobSound.play('attention');
    stage.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'center' });
    setTimeout(function () { ask(house ? 'be TOB again' : 'summon Mr. House'); }, reduceMotion ? 0 : 700);
  });

  // TOB's first greeting, once he's on screen. Browsers only play sound after the visitor has tapped something:
  // if they already have (the boot screen's "Wake TOB"), he says it aloud straight away; otherwise he shows it,
  // then reads it out at their first tap while he's on screen, unless that tap starts a conversation of its own.
  setState('online');
  var greeted = false, pendingGreeting = null;
  function audioReady() {
    if (!voiceOn) return false;
    if (tobVoice) { var ac = TobSound.context(); return !!ac && ac.state === 'running'; }
    return !!synth && !!(navigator.userActivation && navigator.userActivation.hasBeenActive);
  }
  function greet() {
    if (turn) return;
    var text = 'Good ' + partOfDay() + '. I\'m TOB, or a demonstration of him. Ask me anything about myself, or tap me if you like.';
    if (audioReady()) { turn++; reply(text, turn, 0); return; }
    var wasOn = voiceOn; voiceOn = false;
    speak(text, turn);
    voiceOn = wasOn;
    pendingGreeting = { text: text, bubble: log.lastElementChild, turn: turn };
  }
  function hearGreeting(e) {
    var g = pendingGreeting;
    if (!g) return;
    if (turn !== g.turn || !voiceOn) { pendingGreeting = null; return; }   // a conversation has started, or the voice is off
    if (!visible) return;                                                   // wait until he's on screen
    // Taps that start their own turn (or toggle his voice) don't read the greeting.
    if (e.target.closest && e.target.closest('#chat-form, #chat-chips, #holo-btn, #chat-voice, #summon-house, #f-house')) return;
    pendingGreeting = null;
    if (tobVoice) TobSound.unlock();
    turn++;
    reply(g.text, turn, 0, g.bubble);
  }
  document.addEventListener('pointerdown', hearGreeting, true);
  document.addEventListener('keydown', hearGreeting, true);
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries, obs) {
      if (!entries[0].isIntersecting || greeted) return;
      greeted = true; obs.disconnect();
      setTimeout(greet, reduceMotion ? 0 : 1800);
    }, { threshold: 0.4 }).observe(stage);
  }
})();

/* ==========================================================
   TOB's interface sounds: a Web Audio port of TOB-OS's tob/voice/sfx.py.
   Every sound is synthesized (sines, FM bells, shaped noise, a little reverb);
   there are no audio files.
   ========================================================== */
var TobSound = (function () {
  'use strict';

  var R = 44100;
  var AC = window.AudioContext || window.webkitAudioContext;
  var ctx = null, master = null, enabled = false;
  var cache = {}, irCache = {};
  // C major pentatonic, two octaves up from C5: the boot ticks climb this ladder.
  var LADDER = [523.25, 587.33, 659.25, 783.99, 880.00, 1046.50, 1174.66, 1318.51, 1567.98, 1760.00, 2093.00, 2349.32];
  var TAU = Math.PI * 2;

  try { enabled = localStorage.getItem('tob-sound') === 'on'; } catch (e) { /* storage blocked: start quiet */ }

  // ------------------------------------------------------------ building blocks
  function len(sec) { return Math.floor(sec * R); }
  function seeded(seed) {
    var s = seed >>> 0 || 1;
    return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  }
  function gauss(rnd) { return Math.sqrt(-2 * Math.log(rnd() || 1e-9)) * Math.cos(TAU * rnd()); }

  function env(n, attack, tau) {   // click-free attack, then exponential decay
    var o = new Float32Array(n);
    for (var i = 0; i < n; i++) {
      var t = i / R, a = Math.min(1, Math.max(0, t / Math.max(attack, 1e-4)));
      o[i] = a * a * (3 - 2 * a) * Math.exp(-Math.max(t - attack, 0) / tau);
    }
    return o;
  }
  function glide(f0, f1, sec, curve) {   // phase of a sine gliding from f0 to f1
    var n = len(sec), o = new Float32Array(n), ph = 0, d = 1 - Math.exp(-curve);
    for (var i = 0; i < n; i++) {
      var k = (1 - Math.exp(-curve * (i / R) / sec)) / d;
      ph += TAU * (f0 + (f1 - f0) * k) / R;
      o[i] = ph;
    }
    return o;
  }
  function bell(f, sec, ratio, index, tau) {   // glassy FM bell: the brightness fades faster than the tone
    var n = len(sec), e = env(n, 0.003, tau), o = new Float32Array(n);
    for (var i = 0; i < n; i++) {
      var t = i / R;
      o[i] = Math.sin(TAU * f * t + index * Math.exp(-t / (tau * 0.4)) * Math.sin(TAU * f * ratio * t)) * e[i];
    }
    return o;
  }
  function tone(f0, f1, sec, tau, attack) {   // a round sine note with a little 2nd harmonic
    var ph = glide(f0, f1, sec, 4), e = env(ph.length, attack == null ? 0.003 : attack, tau), o = new Float32Array(ph.length);
    for (var i = 0; i < ph.length; i++) o[i] = (Math.sin(ph[i]) + 0.15 * Math.sin(2 * ph[i])) * e[i];
    return o;
  }
  function noiseSweep(sec, lo, hi, width, seed) {   // band-passed noise whose centre climbs from lo to hi
    var n = len(sec), o = new Float32Array(n), rnd = seeded(seed);
    var bw = width * 2.355, x1 = 0, x2 = 0, y1 = 0, y2 = 0, b0, b2, a1, a2, peak = 1e-9;
    for (var i = 0; i < n; i++) {
      if (i % 32 === 0) {
        var fc = lo * Math.pow(hi / lo, i / n), w0 = TAU * fc / R, s = Math.sin(w0);
        var alpha = s * Math.sinh(Math.LN2 / 2 * bw * w0 / s), a0 = 1 + alpha;
        b0 = alpha / a0; b2 = -alpha / a0; a1 = -2 * Math.cos(w0) / a0; a2 = (1 - alpha) / a0;
      }
      var x = gauss(rnd), y = b0 * x + b2 * x2 - a1 * y1 - a2 * y2;
      x2 = x1; x1 = x; y2 = y1; y1 = y;
      o[i] = y; peak = Math.max(peak, Math.abs(y));
    }
    for (i = 0; i < n; i++) o[i] /= peak;
    return o;
  }
  function seq(parts) {   // place sounds at offsets (seconds) and mix them
    var n = 0;
    parts.forEach(function (p) { n = Math.max(n, len(p[0]) + p[1].length); });
    var o = new Float32Array(n);
    parts.forEach(function (p) {
      var at = len(p[0]), g = p[2] == null ? 1 : p[2];
      for (var i = 0; i < p[1].length; i++) o[at + i] += p[1][i] * g;
    });
    return o;
  }
  function impulse(sec) {   // a decaying, darkening noise tail
    if (irCache[sec]) return irCache[sec];
    var n = len(sec), rnd = seeded(3), raw = new Float32Array(n), ir = ctx.createBuffer(1, n, R), d = ir.getChannelData(0), energy = 0;
    for (var i = 0; i < n; i++) raw[i] = gauss(rnd) * Math.exp(-(i / R) / (sec / 5));
    for (i = 0; i < n; i++) {
      var acc = 0;
      for (var k = -3; k < 3; k++) acc += raw[i + k] || 0;
      d[i] = acc / 6; energy += d[i] * d[i];
    }
    energy = Math.sqrt(energy) + 1e-9;
    for (i = 0; i < n; i++) d[i] /= energy;
    return (irCache[sec] = ir);
  }

  // ----------------------------------------------------------------- the sounds
  // Each returns [signal, reverb [seconds, mix] or null, peak].
  var SOUNDS = {
    tick: function (step, ok) {   // one boot-checklist line, one note higher per line
      var sig;
      if (ok !== false) {
        var f = LADDER[Math.min(step || 0, LADDER.length - 1)];
        sig = seq([[0, bell(f, 0.32, 2.0, 1.2, 0.07)], [0, bell(f * 2, 0.32, 3.0, 0.6, 0.03), 0.25]]);
      } else {   // a degraded subsystem: a soft, lower, slightly sour double knock
        sig = seq([[0, bell(330, 0.32, 1.41, 1.6, 0.06)], [0.07, bell(330 * 0.94, 0.25, 1.41, 1.6, 0.06), 0.8]]);
      }
      return [sig, [0.8, 0.28], 0.32];
    },
    riser: function () {   // charge-up: an airy sweep and a climbing tone
      var sec = 0.45, n = len(sec), air = noiseSweep(sec, 400, 6000, 0.45, 7);
      var g1 = glide(180, 720, sec, -2), g2 = glide(360, 1440, sec, -2), o = new Float32Array(n);
      for (var i = 0; i < n; i++) {
        var swell = Math.pow((i / R) / sec, 2.2);
        o[i] = air[i] * swell * 0.7 + (Math.sin(g1[i]) + 0.4 * Math.sin(g2[i])) * swell * 0.35;
        if (i > n - 200) o[i] *= (n - i) / 200;
      }
      return [o, null, 0.38];
    },
    bloom: function () {   // the core materialising: a sub drop, a D major 9 swell and a shimmer
      var sec = 3.2, n = len(sec), o = new Float32Array(n), i;
      var sub = glide(110, 42, 0.9, 4), se = env(n, 0.004, 0.42);
      for (i = 0; i < sub.length; i++) o[i] += Math.sin(sub[i]) * se[i] * 1.1;
      [73.42, 146.83, 220.00, 329.63, 369.99, 440.00, 554.37, 659.25].forEach(function (f, v) {
        var delay = len(v * 0.045), amp = (f > 200 ? 0.9 : 0.6) / (1 + v * 0.12) * 0.55;
        for (var j = 0; j + delay < n; j++) {
          var t = j / R;
          var voice = (Math.sin(TAU * f * 0.9975 * t + v) + Math.sin(TAU * f * t + v) + Math.sin(TAU * f * 1.0025 * t + v)) / 3;
          if (f < 200) voice += 0.25 * Math.sin(2 * TAU * f * t);
          o[j + delay] += voice * Math.pow(Math.min(1, t / 0.35), 1.5) * Math.exp(-t / 1.4) * amp;
        }
      });
      [1760.0, 2217.46, 2637.02].forEach(function (f, k) {
        var b = bell(f, 1.6, 2.0, 0.8, 0.45), at = len(0.08 + k * 0.07);
        for (var j = 0; j < b.length && at + j < n; j++) o[at + j] += b[j] * 0.18;
      });
      return [o, [2.0, 0.35], 0.55];
    },
    online: function () {   // systems online: two bell notes, a fifth apart
      return [seq([[0, bell(1174.66, 1.2, 3.5, 1.4, 0.30)], [0.11, bell(1760.0, 1.2, 3.5, 1.4, 0.40), 0.9]]), [1.4, 0.3], 0.30];
    },
    interrupt: function () {   // "I stopped, go ahead"
      var g = glide(1320, 660, 0.14, 4), e = env(g.length, 0.004, 0.05), o = new Float32Array(g.length);
      for (var i = 0; i < g.length; i++) o[i] = Math.sin(g[i]) * e[i];
      return [o, [0.5, 0.2], 0.28];
    },
    click: function () {   // any button: a tiny, crisp tick
      var n = len(0.03), e = env(n, 0.0008, 0.006), rnd = seeded(11), o = new Float32Array(n);
      for (var i = 0; i < n; i++) o[i] = (Math.sin(TAU * 2300 * i / R) * 0.6 + gauss(rnd) * 0.25) * e[i];
      return [o, null, 0.10];
    },
    toggle: function (on) {   // a switch: two ticks, up for on, down for off
      var a = on ? 1500 : 2250, b = on ? 2250 : 1500;
      return [seq([[0, tone(a, a, 0.06, 0.012)], [0.055, tone(b, b, 0.08, 0.018)]]), [0.4, 0.15], 0.16];
    },
    send: function () {   // message sent: a short airy upward swoosh
      var air = noiseSweep(0.22, 700, 5500, 0.5, 5), e = env(air.length, 0.05, 0.06), t = tone(620, 1240, 0.22, 0.07, 0.02);
      var o = new Float32Array(air.length);
      for (var i = 0; i < o.length; i++) o[i] = air[i] * e[i] * 0.6 + t[i] * 0.5;
      return [o, [0.5, 0.2], 0.16];
    },
    receive: function () {   // TOB replied: two soft glassy notes
      return [seq([[0, bell(1318.5, 0.6, 2.0, 0.9, 0.16)], [0.085, bell(1975.5, 0.7, 2.0, 0.7, 0.22), 0.8]]), [0.9, 0.25], 0.17];
    },
    listen: function (on) {   // mic opening (rising) or closing (falling)
      var a = on ? 784.0 : 1174.7, b = on ? 1174.7 : 784.0;
      return [seq([[0, tone(a, a, 0.16, 0.05)], [0.09, tone(b, b, 0.25, 0.08)]]), [0.6, 0.22], 0.24];
    },
    nav: function () {   // moving around: a soft wooden tock
      return [tone(700, 420, 0.07, 0.018, 0.001), [0.4, 0.12], 0.14];
    },
    error: function () {   // two low, soft descending notes
      return [seq([[0, tone(330, 330, 0.18, 0.06)], [0.12, tone(247, 247, 0.3, 0.1)]]), [0.6, 0.2], 0.2];
    },
    attention: function () {   // a polite three-note bell
      return [seq([1046.5, 1318.5, 1568.0].map(function (f, i) { return [i * 0.09, bell(f, 0.8, 2.0, 1.0, 0.25), 1 - i * 0.12]; })), [1.0, 0.28], 0.22];
    }
  };

  function normalized(data, peak) {
    var m = 1e-9;
    for (var i = 0; i < data.length; i++) m = Math.max(m, Math.abs(data[i]));
    for (i = 0; i < data.length; i++) data[i] = data[i] / m * peak;
  }

  function render(name, args) {
    var spec = SOUNDS[name].apply(null, args), sig = spec[0], rev = spec[1], peak = spec[2];
    if (!rev) {
      var buf = ctx.createBuffer(1, sig.length, R);
      buf.getChannelData(0).set(sig);
      normalized(buf.getChannelData(0), peak);
      return Promise.resolve(buf);
    }
    // The reverb is a convolution, rendered offline once and cached.
    var OAC = window.OfflineAudioContext || window.webkitOfflineAudioContext;
    var off = new OAC(1, sig.length + len(rev[0]), R);
    var src = off.createBufferSource(), dry = off.createGain(), wet = off.createGain(), conv = off.createConvolver();
    var input = off.createBuffer(1, sig.length, R);
    input.getChannelData(0).set(sig);
    src.buffer = input;
    conv.normalize = false; conv.buffer = impulse(rev[0]);
    dry.gain.value = 1 - rev[1]; wet.gain.value = rev[1] * 0.6;
    src.connect(dry); dry.connect(off.destination);
    src.connect(conv); conv.connect(wet); wet.connect(off.destination);
    src.start();
    var done = off.startRendering();
    return (done && done.then ? done : new Promise(function (res) { off.oncomplete = function (e) { res(e.renderedBuffer); }; }))
      .then(function (out) { normalized(out.getChannelData(0), peak); return out; });
  }

  function sound(name, args) {
    var key = name + ':' + args.join(',');
    if (!cache[key]) cache[key] = render(name, args).catch(function () { delete cache[key]; return null; });
    return cache[key];
  }

  function unlock() {
    if (!AC) return false;
    if (!ctx) {
      try {
        // iOS: play through the silent switch, like a media app.
        if (navigator.audioSession) navigator.audioSession.type = 'playback';
        ctx = new AC();
        var gain = ctx.createGain(), limiter = ctx.createWaveShaper(), curve = new Float32Array(1024);
        for (var i = 0; i < curve.length; i++) curve[i] = Math.tanh((i / (curve.length - 1)) * 2 - 1);
        limiter.curve = curve;   // a soft limiter where sounds overlap
        gain.gain.value = 0.7;
        gain.connect(limiter); limiter.connect(ctx.destination);
        master = gain;
      } catch (e) { ctx = null; return false; }
    }
    if (ctx.state === 'suspended') ctx.resume();
    return true;
  }

  function play(name) {
    if (!enabled || !ctx || !SOUNDS[name]) return;
    var args = Array.prototype.slice.call(arguments, 1);
    sound(name, args).then(function (buf) {
      if (!buf || !enabled) return;
      var src = ctx.createBufferSource();
      src.buffer = buf; src.connect(master); src.start();
    });
  }

  return {
    supported: !!AC,
    unlock: unlock,
    context: function () { return ctx; },
    play: play,
    prepare: function (list) {   // render ahead of time: [[name, ...args], ...]
      if (!ctx) return Promise.resolve();
      return Promise.all(list.map(function (l) { return sound(l[0], l.slice(1)); }));
    },
    isEnabled: function () { return enabled; },
    setEnabled: function (on) {
      enabled = !!on;
      if (enabled) unlock();
      try { localStorage.setItem('tob-sound', enabled ? 'on' : 'off'); } catch (e) { /* not remembered */ }
      document.dispatchEvent(new CustomEvent('tob:sound', { detail: enabled }));
    }
  };
})();

/* ==========================================================
   Boot sequence (TOB-OS's BootOverlay) and interface sounds
   ========================================================== */
(function () {
  'use strict';

  var root = document.documentElement;
  var boot = document.getElementById('boot');
  var soundBtn = document.getElementById('sound-toggle');

  // --- The nav's sound switch.
  function showSound() {
    var on = TobSound.isEnabled();
    soundBtn.setAttribute('aria-pressed', String(on));
    soundBtn.setAttribute('aria-label', on ? 'Sound on' : 'Sound off');
  }
  if (!TobSound.supported) soundBtn.hidden = true;
  showSound();
  document.addEventListener('tob:sound', showSound);
  soundBtn.addEventListener('click', function () {
    var on = !TobSound.isEnabled();
    TobSound.setEnabled(on);
    if (on) TobSound.play('toggle', true);
  });

  // --- Browsers only start audio from a tap or key press: unlock it on the first one if sound is on.
  function wake() { if (TobSound.isEnabled()) TobSound.unlock(); }
  document.addEventListener('pointerdown', wake, true);
  document.addEventListener('keydown', wake, true);

  // --- Clicks: a tick for buttons, a tock for moving around the page. Elements with their own sound opt out.
  document.addEventListener('click', function (e) {
    var el = e.target.closest('a, button');
    if (!el || el.closest('[data-sound="own"]') || el.closest('#boot')) return;
    if (el.matches('a[href^="#"]')) TobSound.play('nav');
    else TobSound.play('click');
  });

  // --- Boot.
  function booted() {
    root.classList.remove('booting');
    try { sessionStorage.setItem('tob-booted', '1'); } catch (e) { /* storage blocked: the boot shows again on reload */ }
    var stage = document.querySelector('.hero .orb-stage');
    if (stage) stage.classList.add('bloom');
    document.dispatchEvent(new Event('tob:booted'));
  }
  if (!boot || boot.hidden) { booted(); return; }

  var gate = document.getElementById('boot-gate');
  var list = document.getElementById('boot-lines');
  var bar = document.getElementById('boot-progress');
  var wakeBtn = document.getElementById('boot-wake');
  var quietBtn = document.getElementById('boot-quiet');
  var finished = false, timer = 0;

  // The checklist checks this device for real, the way TOB-OS checks the PC it runs on.
  var speech = !!window.speechSynthesis;
  var hearing = !!(window.SpeechRecognition || window.webkitSpeechRecognition) && window.isSecureContext;
  var lines = [
    ['Core runtime', 'OK'],
    ['Processor \u00b7 ' + (navigator.hardwareConcurrency ? navigator.hardwareConcurrency + ' threads' : 'ready'), 'OK'],
    ['Memory \u00b7 ' + (navigator.deviceMemory ? navigator.deviceMemory + ' GB' : 'ready'), 'OK'],
    ['Display \u00b7 ' + screen.width + ' \u00d7 ' + screen.height, 'OK'],
    ['Hologram projector', document.createElement('canvas').getContext ? 'OK' : 'OFFLINE'],
    ['Conversation memory', 'OK'],
    ['Brain \u00b7 scripted demo', 'LIMITED'],
    ['Hands \u00b7 on your PC only', 'OFFLINE'],
    ['Voice \u00b7 ' + (speech ? 'browser speech' : 'unavailable'), speech ? 'OK' : 'NOT AVAILABLE'],
    ['Hearing \u00b7 ' + (hearing ? 'browser speech recognition' : 'unavailable'), hearing ? 'OK' : 'NOT AVAILABLE']
  ];

  root.classList.add('booting');
  wakeBtn.focus({ preventScroll: true });

  function finish(fast) {
    if (finished) return;
    finished = true;
    clearInterval(timer);
    boot.classList.add('leaving');
    TobSound.play('bloom');
    setTimeout(function () {
      boot.hidden = true;
      booted();
      var h = document.getElementById('hero-title');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus({ preventScroll: true }); }
    }, fast ? 250 : 650);
    setTimeout(function () { TobSound.play('online'); }, fast ? 900 : 1500);
  }

  function run() {
    gate.classList.add('gone');
    var shown = 0;
    timer = setInterval(function () {
      var l = lines[shown];
      var li = document.createElement('li');
      li.innerHTML = '<span class="n"></span><span class="label"></span><span class="result"></span>';
      li.children[0].textContent = (shown + 1 < 10 ? '0' : '') + (shown + 1);
      li.children[1].textContent = l[0];
      li.children[2].textContent = l[1];
      if (l[1] !== 'OK') li.classList.add('warn');
      list.appendChild(li);
      TobSound.play('tick', shown, l[1] === 'OK');
      shown++;
      bar.style.width = (shown / lines.length * 100) + '%';
      if (shown >= lines.length) {
        clearInterval(timer);
        TobSound.play('riser');
        setTimeout(finish, 450);
      }
    }, 170);
  }

  wakeBtn.addEventListener('click', function () {
    TobSound.setEnabled(true);
    var ready = TobSound.prepare([['riser'], ['bloom'], ['online']].concat(lines.map(function (l, i) { return ['tick', i, l[1] === 'OK']; })));
    // Start once the sounds are rendered (a few ms), but never keep the visitor waiting long.
    var started = false;
    function go() { if (!started) { started = true; run(); } }
    ready.then(go, go);
    setTimeout(go, 700);
  });
  quietBtn.addEventListener('click', function () {
    TobSound.setEnabled(false);
    showSound();
    finish(true);
  });
  // Like TOB-OS, a click during the checklist skips the rest.
  boot.addEventListener('click', function (e) {
    if (gate.classList.contains('gone') && !e.target.closest('button')) finish(true);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !finished) { if (!gate.classList.contains('gone')) TobSound.setEnabled(false); finish(true); }
  });
})();

/* ==========================================================
   Page interactions: progress, counters, spotlights, the hero orb,
   failover, actions, memory, the chart, TOB's voice sample, footer.
   ========================================================== */
(function () {
  'use strict';

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var finePointer = window.matchMedia('(pointer: fine)').matches;
  var hasIO = 'IntersectionObserver' in window;
  function sfx() { TobSound.play.apply(null, arguments); }
  function onView(el, fn, opts) {
    if (!el) return;
    if (!hasIO) { fn(true); return; }
    new IntersectionObserver(function (entries) { fn(entries[0].isIntersecting); }, opts || { threshold: 0.3 }).observe(el);
  }

  // --- Scroll progress under the nav.
  var bar = document.getElementById('scroll-progress'), ticking = false;
  function progress() {
    ticking = false;
    var max = document.documentElement.scrollHeight - window.innerHeight;
    bar.style.transform = 'scaleX(' + (max > 0 ? Math.min(1, window.scrollY / max) : 0) + ')';
  }
  window.addEventListener('scroll', function () { if (!ticking) { ticking = true; requestAnimationFrame(progress); } }, { passive: true });
  progress();

  // --- Stats count up when they come into view.
  document.querySelectorAll('.stat-num[data-count]').forEach(function (el) {
    var target = +el.dataset.count, pre = el.dataset.prefix || '', suf = el.dataset.suffix || '', done = false;
    if (reduceMotion || target === 0) return;
    el.textContent = pre + '0' + suf;
    onView(el, function (seen) {
      if (!seen || done) return;
      done = true;
      var start = performance.now(), dur = 900 + target * 60;
      setTimeout(function () { el.textContent = pre + target + suf; }, dur + 400);   // lands even if frames are throttled
      (function step(now) {
        var k = Math.min(1, (now - start) / dur), eased = 1 - Math.pow(1 - k, 3);
        el.textContent = pre + Math.round(target * eased) + suf;
        if (k < 1) requestAnimationFrame(step);
      })(start);
    }, { threshold: 0.6 });
  });

  // --- Cards light up where the pointer is.
  if (finePointer) {
    document.addEventListener('pointermove', function (e) {
      var el = e.target.closest && e.target.closest('.spot');
      if (!el) return;
      var r = el.getBoundingClientRect();
      el.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      el.style.setProperty('--my', (e.clientY - r.top) + 'px');
    }, { passive: true });
  }

  // --- The hero orb: leans toward the pointer, wakes up when tapped, rests when scrolled away.
  var hero = document.querySelector('.hero'), stage = document.querySelector('.hero .orb-stage'), orbBtn = document.getElementById('orb-btn');
  if (hero && stage) {
    var pending = null;
    if (finePointer && !reduceMotion) {
      hero.addEventListener('pointermove', function (e) {
        var r = stage.getBoundingClientRect();
        pending = [(e.clientX - (r.left + r.width / 2)) / window.innerWidth * 2, (e.clientY - (r.top + r.height / 2)) / window.innerHeight * 2];
        requestAnimationFrame(function () {
          if (!pending) return;
          stage.style.setProperty('--tx', Math.max(-1, Math.min(1, pending[0])).toFixed(3));
          stage.style.setProperty('--ty', Math.max(-1, Math.min(1, pending[1])).toFixed(3));
          pending = null;
        });
      });
      hero.addEventListener('pointerleave', function () { stage.style.setProperty('--tx', 0); stage.style.setProperty('--ty', 0); });
    }
    var exciteTimer = 0;
    orbBtn.addEventListener('click', function () {
      orbBtn.classList.add('excite');
      sfx('online');
      clearTimeout(exciteTimer);
      exciteTimer = setTimeout(function () { orbBtn.classList.remove('excite'); }, 1600);
    });
    onView(hero, function (seen) { hero.classList.toggle('is-off', !seen); }, { threshold: 0 });
  }

  // --- Failover, live: take the answering brain offline and the next one picks up.
  var fo = document.getElementById('failover');
  if (fo) {
    var nextBtn = document.getElementById('fo-next'), resetBtn = document.getElementById('fo-reset'), logEl = document.getElementById('fo-log');
    var item = function (b) { return fo.querySelector('[data-brain="' + b + '"]'); };
    var NAMES = { claude: 'Claude', grok: 'Grok', chatgpt: 'ChatGPT', cursor: 'Cursor', local: 'the local AI' };
    var STEPS = [
      { off: 'claude', status: 'Out of usage \u00b7 rests 15 min', next: 'grok',
        log: 'Claude is out of usage, so he rests for 15 minutes. Grok takes the same request, with the conversation so far.' },
      { off: 'grok', status: 'Free usage gone \u00b7 rests 3 h', next: 'chatgpt',
        log: 'Grok\'s free usage is gone, so it rests for 3 hours. ChatGPT is next, and TOB asks once before using your plan.' },
      { off: 'chatgpt', status: 'Signed out \u00b7 rests 15 min', next: 'cursor',
        log: 'ChatGPT is signed out, so it rests for 15 minutes. Cursor picks up the request.' },
      { off: 'cursor', status: 'Errored \u00b7 rests 2 min', next: 'local',
        log: 'Cursor errored out and rests for 2 minutes. Gemini is off by default, so the local AI answers.' }
    ];
    var INITIAL = 'Claude is answering. Every request goes here first.';
    var stepIndex = 0;
    function setState(b, s, label) { var el = item(b); el.dataset.state = s; el.querySelector('.chain-status').textContent = label; }
    function label() {
      if (stepIndex < STEPS.length) { nextBtn.textContent = 'Take ' + NAMES[STEPS[stepIndex].off] + ' offline'; nextBtn.disabled = false; }
      else { nextBtn.textContent = 'Last line reached'; nextBtn.disabled = true; }
      resetBtn.hidden = stepIndex === 0;
    }
    nextBtn.addEventListener('click', function () {
      var s = STEPS[stepIndex];
      if (!s) return;
      stepIndex++;
      sfx('interrupt');
      setState(s.off, 'resting', s.status);
      label();
      setTimeout(function () {
        setState(s.next, 'answering', 'Answering');
        logEl.textContent = s.log;
        sfx('tick', stepIndex + 3, true);
        if (stepIndex === STEPS.length) {
          setTimeout(function () {
            logEl.textContent = s.log + ' It\'s free, unlimited and works offline, so you only see an error if every brain fails.';
          }, 900);
        }
      }, reduceMotion ? 0 : 420);
    });
    resetBtn.addEventListener('click', function () {
      stepIndex = 0;
      ['grok', 'chatgpt', 'cursor', 'local'].forEach(function (b) { setState(b, 'standby', 'Standing by'); });
      setState('claude', 'answering', 'Answering');
      logEl.textContent = INITIAL;
      sfx('toggle', true);
      label();
      nextBtn.focus();
    });
    label();
  }

  // --- Computer control: tap a capability, see the action TOB runs.
  var acBody = document.getElementById('ac-body');
  if (acBody) {
    var ACTS = {
      volume: ['Set the volume to 30', 'volume \u00b7 set 30', 'Volume is at 30.'],
      window: ['Snap this window to the left', 'window \u00b7 snap left', 'Done.'],
      files: ['Find my notes from last week', 'find_files \u00b7 notes', 'Here are the matches. Shall I open one?'],
      apps: ['Open KingdomRP in IntelliJ', 'open_project \u00b7 KingdomRP \u00b7 IntelliJ', 'Opening it in IntelliJ now.'],
      screen: ['What\'s on my screen?', 'screenshot', 'Let me have a look.'],
      system: ['Lock the PC', 'lock_pc', 'Locked. See you soon.']
    };
    var rows = [['ac-you', 'You'], ['ac-run', 'TOB runs'], ['ac-tob', 'TOB']].map(function (r) {
      var p = acBody.querySelector('.' + r[0]);
      p.innerHTML = '<span class="who"></span><span class="what"></span>';
      p.firstChild.textContent = r[1];
      return p;
    });
    var actToken = 0;
    function show(act, animate) {
      var lines = ACTS[act], token = ++actToken;
      rows.forEach(function (p) { p.lastChild.textContent = ''; p.classList.remove('typing'); });
      if (!animate || reduceMotion) { rows.forEach(function (p, i) { p.lastChild.textContent = lines[i]; }); return; }
      function type(i, done) {
        var p = rows[i], text = lines[i], n = 0;
        p.classList.add('typing');
        (function tick() {
          if (token !== actToken) return;
          p.lastChild.textContent = text.slice(0, ++n);
          if (n < text.length) setTimeout(tick, i === 1 ? 14 : 24);
          else { p.classList.remove('typing'); setTimeout(done, 260); }
        })();
      }
      type(0, function () { type(1, function () { sfx('receive'); type(2, function () {}); }); });
    }
    var abilities = document.querySelectorAll('.ability');
    abilities.forEach(function (b) {
      b.addEventListener('click', function () {
        abilities.forEach(function (o) { o.setAttribute('aria-pressed', String(o === b)); });
        show(b.dataset.act, true);
      });
    });
    show('volume', false);
  }

  // --- Memory: forget what he learned (and take it back).
  var memList = document.getElementById('memory-list');
  if (memList) {
    var empty = document.getElementById('memory-empty');
    memList.addEventListener('click', function (e) {
      var btn = e.target.closest('.forget');
      if (!btn) return;
      var li = btn.closest('li');
      sfx('toggle', false);
      li.classList.add('gone');
      setTimeout(function () {
        li.hidden = true;
        if (!memList.querySelector('li:not([hidden])')) { empty.hidden = false; document.getElementById('memory-undo').focus(); }
        else { var next = memList.querySelector('li:not([hidden]) .forget'); if (next) next.focus(); }
      }, reduceMotion ? 0 : 330);
    });
    document.getElementById('memory-undo').addEventListener('click', function () {
      sfx('toggle', true);
      empty.hidden = true;
      memList.querySelectorAll('li').forEach(function (li) { li.hidden = false; li.classList.remove('gone'); });
      memList.querySelector('.forget').focus();
    });
  }

  // --- The finance chart: drag (or use the arrow keys) to read the illustrative values.
  var plot = document.querySelector('.chart-plot');
  if (plot) {
    var YS = [150, 140, 146, 120, 126, 104, 110, 86, 92, 66, 72, 48, 40];
    var cursor = document.getElementById('chart-cursor'), valueEl = document.getElementById('chart-value'), labelEl = document.getElementById('chart-label');
    var money = function (y) { return '$' + Math.round(100000 + (150 - y) * 120).toLocaleString('en-US'); };
    var current = YS.length - 1;
    function pick(i, active) {
      current = Math.max(0, Math.min(YS.length - 1, i));
      cursor.style.left = (current / (YS.length - 1) * 100) + '%';
      cursor.style.setProperty('--y', (YS[current] / 180 * 100) + '%');
      valueEl.textContent = money(YS[current]);
      labelEl.textContent = current === 0 ? 'Start \u00b7 $100,000' : 'Week ' + current;
      plot.classList.toggle('active', active);
    }
    function fromPointer(e) {
      var r = plot.getBoundingClientRect();
      pick(Math.round((e.clientX - r.left) / r.width * (YS.length - 1)), true);
    }
    plot.addEventListener('pointerdown', function (e) { fromPointer(e); });
    plot.addEventListener('pointermove', function (e) { if (e.pointerType === 'mouse' || e.buttons) fromPointer(e); });
    plot.addEventListener('pointerleave', function () { pick(YS.length - 1, false); });
    plot.tabIndex = 0;
    plot.setAttribute('aria-label', 'Paper account chart. Use the left and right arrow keys to read each week.');
    plot.addEventListener('keydown', function (e) {
      if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
        e.preventDefault();
        pick(current + (e.key === 'ArrowRight' ? 1 : -1), true);
      }
    });
    plot.addEventListener('blur', function () { pick(YS.length - 1, false); });
    pick(YS.length - 1, false);
  }

  // --- Hear TOB's real voice (rendered by the PC serving this site, with TOB-OS's voice settings).
  var hear = document.getElementById('hear-tob'), wave = document.querySelector('#voice-card .wave');
  var served = location.protocol === 'http:' || location.protocol === 'https:';
  if (hear && served && window.fetch && TobSound.supported) {
    fetch('tts?probe=1').then(function (r) { return r.ok ? r.json() : null; }).then(function (info) {
      if (info && info.voice) hear.hidden = false;
    }).catch(function () {});
    var playing = null, raf = 0;
    var hearLabel = hear.querySelector('.label');
    function stopSample() {
      if (playing) { try { playing.stop(); } catch (e) { /* ended */ } }
      playing = null;
      cancelAnimationFrame(raf);
      wave.classList.remove('live');
      Array.prototype.forEach.call(wave.children, function (s) { s.style.transform = ''; });
      hear.setAttribute('aria-pressed', 'false');
      hearLabel.textContent = 'Hear TOB\'s real voice';
    }
    hear.addEventListener('click', function () {
      if (playing) { stopSample(); return; }
      if (!TobSound.unlock()) return;
      var ac = TobSound.context(), h = new Date().getHours();
      var line = 'Good ' + (h < 12 ? 'morning' : h < 18 ? 'afternoon' : 'evening') + '. I\'m TOB, your personal butler. How may I help?';
      hear.setAttribute('aria-pressed', 'true');
      hearLabel.textContent = 'Warming up\u2026';
      fetch('tts?c=butler&t=' + encodeURIComponent(line)).then(function (r) {
        if (!r.ok) throw new Error('voice ' + r.status);
        return r.arrayBuffer();
      }).then(function (bytes) {
        return new Promise(function (res, rej) { ac.decodeAudioData(bytes, res, rej); });
      }).then(function (buf) {
        if (hear.getAttribute('aria-pressed') !== 'true') return;
        var src = ac.createBufferSource(), an = ac.createAnalyser(), bins = new Uint8Array(32);
        an.fftSize = 64;
        src.buffer = buf; src.connect(an); an.connect(ac.destination);
        src.onended = function () { if (playing === src) stopSample(); };
        playing = src;
        hearLabel.textContent = 'Stop';
        wave.classList.add('live');
        (function draw() {
          an.getByteFrequencyData(bins);
          Array.prototype.forEach.call(wave.children, function (s, i) {
            s.style.transform = 'scaleY(' + (0.18 + (bins[1 + i] || 0) / 255 * 0.9).toFixed(3) + ')';
          });
          raf = requestAnimationFrame(draw);
        })();
        src.start();
      }).catch(function () {
        stopSample();
        sfx('error');
        hearLabel.textContent = 'Voice unavailable right now';
      });
    });
  }

  // --- Footer actions.
  var fHouse = document.getElementById('f-house');
  if (fHouse) fHouse.addEventListener('click', function () { document.getElementById('summon-house').click(); });
  var fReplay = document.getElementById('f-replay');
  if (fReplay) fReplay.addEventListener('click', function () {
    try { sessionStorage.removeItem('tob-booted'); } catch (e) { /* storage blocked */ }
    window.scrollTo(0, 0);
    location.reload();
  });
})();
