/* Pay respect: every tap leaves Sammy a flower. Flowers float from the button to the foot
   of his photo, and a shared counter shows how many have been left by everyone.
   The count lives in Abacus (abacus.jasoncameron.dev), a free public counter service, because
   this site is static. If it can't be reached, flowers still fall and the visitor is thanked,
   but no number is shown: the page never invents a count. */
(() => {
  const root = document.querySelector('[data-respect]');
  if (!root) return;
  const API = 'https://abacus.jasoncameron.dev';
  const COUNTER = 'yuwakuuu-tmp/sammy-flowers';
  const btn = root.querySelector('[data-respect-btn]');
  const label = root.querySelector('[data-respect-count]');
  const bouquet = document.querySelector('.bouquet');
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const M = window.Motion;
  const COLORS = [['#ff4d6d', '#ffd166'], ['#ff8fa3', '#fff3b0'], ['#ffffff', '#ffd166'], ['#e5383b', '#ffe066'], ['#ffb3c6', '#ffd166'], ['#c9184a', '#ffd166']];
  const MAX_IN_BOUQUET = 36;
  let total = null;      // null = unknown (service unreachable)
  let shown = 0;         // flowers currently lying in the bouquet

  const fmt = (n) => n.toLocaleString('en-US');
  function render() {
    if (total === null) return;
    label.innerHTML = total === 0
      ? 'Be the first to leave Sammy a flower.'
      : `<b>${fmt(total)}</b> ${total === 1 ? 'flower' : 'flowers'} left for Sammy. You are still missed.`;
  }

  function flower(size = 34) {
    const [petal, core] = COLORS[(Math.random() * COLORS.length) | 0];
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', size); svg.setAttribute('height', size);
    const petals = [[12, 6.6], [17.1, 10.3], [15.2, 16.3], [8.8, 16.3], [6.9, 10.3]]
      .map(([x, y]) => `<circle cx="${x}" cy="${y}" r="3.6" fill="${petal}"/>`).join('');
    svg.innerHTML = `<g transform="rotate(${(Math.random() * 72) | 0} 12 12)">${petals}<circle cx="12" cy="11.8" r="2.7" fill="${core}"/></g>`;
    svg.style.filter = 'drop-shadow(0 2px 3px rgba(0,0,0,.45))';
    return svg;
  }

  // lay a flower in the bouquet; spots are spread along the foot of the photo
  function place(f, i) {
    const x = ((i * 37) % 100) / 100, row = (i * 0.618) % 1;
    f.style.left = `calc(${(x * 100).toFixed(1)}% - 17px)`;
    f.style.bottom = `${(row * 26).toFixed(0)}px`;
    f.style.transform = `rotate(${((i * 53) % 60) - 30}deg) scale(${0.8 + ((i * 29) % 40) / 100})`;
    return f;
  }
  function addToBouquet() {
    if (shown >= MAX_IN_BOUQUET) return null;
    const f = place(flower(), shown++);
    bouquet.appendChild(f);
    return f;
  }

  // a flower flies from the button and settles into the bouquet
  function fly() {
    const target = addToBouquet();
    if (reduced || !M) return;
    const from = btn.getBoundingClientRect();
    const to = (target || bouquet).getBoundingClientRect();
    const f = flower(38);
    f.classList.add('flower-fly');
    document.body.appendChild(f);
    if (target) target.style.opacity = '0';
    const sx = from.left + from.width / 2 - 19, sy = from.top - 10;
    const ex = to.left + (target ? 0 : to.width / 2), ey = to.top;
    const mx = (sx + ex) / 2 + (Math.random() - 0.5) * 160, my = Math.min(sy, ey) - 80 - Math.random() * 60;
    M.animate(f, {
      x: [sx, mx, ex], y: [sy, my, ey],
      rotate: [0, (Math.random() - 0.5) * 360, (Math.random() - 0.5) * 60],
      scale: [0.4, 1.2, 0.9],
      opacity: [0, 1, 1],
    }, { duration: 1.3, ease: 'easeInOut' }).then(() => {
      f.remove();
      if (target) target.style.opacity = '';
    });
  }

  function burst() {
    if (reduced || !M) return;
    const r = btn.getBoundingClientRect();
    for (let i = 0; i < 7; i++) {
      const f = flower(20 + Math.random() * 14);
      f.classList.add('flower-fly');
      document.body.appendChild(f);
      const a = (i / 7) * Math.PI * 2 + Math.random() * 0.4, d = 50 + Math.random() * 50;
      const x0 = r.left + r.width / 2 - 14, y0 = r.top + r.height / 2 - 14;
      M.animate(f, { x: [x0, x0 + Math.cos(a) * d], y: [y0, y0 + Math.sin(a) * d - 30], opacity: [1, 0], scale: [0.3, 1], rotate: [0, (Math.random() - 0.5) * 240] },
        { duration: 0.9, ease: 'easeOut' }).then(() => f.remove());
    }
  }

  async function call(path) {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 6000);
    try {
      const res = await fetch(`${API}/${path}/${COUNTER}`, { signal: ctrl.signal, cache: 'no-store' });
      if (res.status === 404 && path === 'get') return 0;   // nobody has left one yet
      if (!res.ok) throw new Error(res.status);
      const data = await res.json();
      return typeof data.value === 'number' ? data.value : null;
    } catch (e) {
      return null;
    } finally {
      clearTimeout(timer);
    }
  }

  // read the total once the section comes near, and lay that many flowers (up to a bouquet)
  let loaded = false;
  new IntersectionObserver(async ([en], io) => {
    if (!en.isIntersecting || loaded) return;
    loaded = true; io.disconnect();
    const v = await call('get');
    if (v === null) return;
    total = Math.max(total ?? 0, v);
    for (let i = shown; i < Math.min(total, MAX_IN_BOUQUET); i++) addToBouquet();
    render();
  }, { rootMargin: '400px 0px' }).observe(root);

  let busy = false, pending = Promise.resolve();
  btn.addEventListener('click', () => {
    if (busy) return;
    busy = true; setTimeout(() => { busy = false; }, 700);
    btn.classList.remove('is-thanked'); void btn.offsetWidth; btn.classList.add('is-thanked');
    burst();
    fly();
    try { navigator.vibrate && navigator.vibrate(15); } catch (e) { /* not supported */ }
    if (total !== null) { total += 1; render(); }
    else label.textContent = 'Thank you for remembering Sammy.';
    // count it for real; requests go one at a time so none are lost
    pending = pending.then(async () => {
      const v = await call('hit');
      if (v === null) return;
      total = Math.max(total ?? 0, v);
      render();
    });
  });
})();
