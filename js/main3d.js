// Boots the two chrome scenes. The hero wordmark starts right away (the loading screen
// waits for it); the infinity loop starts when the membership section comes near.
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
  if (hero) {
    scenes.initWordmark(hero, { reduced, lite, onPulse: splash, onReady: () => ready('wordmark') });
  } else {
    ready('wordmark');
  }

  const loop = document.getElementById('infinity-3d');
  if (loop) {
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      scenes.initInfinity(loop, { reduced, lite, onPulse: splash });
    }, { rootMargin: '600px 0px' });
    io.observe(loop);
  }
}

boot();
