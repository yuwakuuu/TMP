// Boots the 3D scenes. The hero wordmark starts right away; the chrome infinity in
// Sammy's section starts when it comes near.
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

// One 3D scene failing (an old GPU, low memory) must never take the others down with it.
function safely(start, onFail) {
  try {
    return start();
  } catch (err) {
    onFail(err);
    return null;
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
  // the hero logo builds behind the intro video, so it is ready when the page opens
  const markFailed = () => hero?.closest('[data-stage]')?.classList.add('is-failed');
  if (hero) safely(() => scenes.initWordmark(hero, { reduced, lite, onPulse: splash, onError: markFailed }), markFailed);
  ready('wordmark');

  // scenes further down start only as they come near
  const later = (id, init) => {
    const el = document.getElementById(id);
    if (!el) return;
    const io = new IntersectionObserver(([en]) => {
      if (!en.isIntersecting) return;
      io.disconnect();
      const markFailed = () => el.closest('[data-stage]')?.classList.add('is-failed');
      safely(() => init(el, { reduced, lite, onPulse: splash, onError: markFailed }), markFailed);
    }, { rootMargin: '600px 0px' });
    io.observe(el);
  };
  later('eternal-3d', scenes.initEternal);
}

boot();
