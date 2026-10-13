// Boots the 3D scenes. The hero wordmark starts right away (the loading screen waits for
// it); the balloon and chrome infinity loops start when their sections come near.
// Without WebGL both fall back to CSS chrome lettering.
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const lite = window.matchMedia('(pointer: coarse), (max-width: 700px)').matches || (navigator.hardwareConcurrency || 8) <= 4;

const ready = (name) => window.dispatchEvent(new CustomEvent('tmp:3d', { detail: name }));

function webgl() {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}

async function boot() {
  if (!webgl()) {
    document.documentElement.classList.add('no-webgl');
    ready('none');
    return;
  }
  let scenes;
  try {
    scenes = await import('./scenes.js');
  } catch (err) {
    document.documentElement.classList.add('no-webgl');
    ready('none');
    return;
  }

  const splash = () => document.dispatchEvent(new CustomEvent('tmp:splash'));
  const hero = document.getElementById('tmp-3d');
  const startHero = () => { if (hero) scenes.initWordmark(hero, { reduced, lite, onPulse: splash }); };

  // First visit: the loading screen spins its own copy of the logo, then hands over to the
  // hero and frees its GPU context once the page is showing.
  const loaderCanvas = document.getElementById('loader-3d');
  const quick = document.documentElement.classList.contains('quick-load');
  if (loaderCanvas && !quick) {
    const loaderLogo = scenes.initWordmark(loaderCanvas, {
      reduced, lite, spin: true,
      onReady: () => { ready('wordmark'); startHero(); },
    });
    const release = () => setTimeout(() => loaderLogo.dispose(), 1500);
    if (document.documentElement.classList.contains('loaded')) release();
    else window.addEventListener('tmp:loaded', release, { once: true });
  } else {
    startHero();
    ready('wordmark');
  }

  // scenes further down start only as they come near
  const later = (id, init) => {
    const el = document.getElementById(id);
    if (!el) return;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      init(el, { reduced, lite, onPulse: splash });
    }, { rootMargin: '600px 0px' });
    io.observe(el);
  };
  later('infinity-3d', scenes.initInfinity);
  later('eternal-3d', scenes.initEternal);
}

boot();
