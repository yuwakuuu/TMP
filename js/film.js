/* The TMP film: plays inline in the #film section. Only the poster loads with the page;
   the video starts downloading when someone presses play (720p on phones and slow or
   data-saving connections, 1080p otherwise). While it plays, the background music
   (js/ambient.js) steps aside and comes back after. Without JavaScript the play button
   is a plain link to the video file. */
(() => {
  const box = document.querySelector('[data-brand-film]');
  if (!box) return;
  const video = box.querySelector('.film__video');
  const start = box.querySelector('.film__start');
  const replay = box.querySelector('[data-film-replay]');
  const SRC = { hd: 'assets/video/tmp-film-1080.mp4', sd: 'assets/video/tmp-film-720.mp4' };

  const pick = () => {
    const c = navigator.connection || {};
    const slow = c.saveData || /(^|-)(2g|3g)$/.test(c.effectiveType || '');
    return slow || box.clientWidth < 700 ? SRC.sd : SRC.hd;
  };

  // the floating sound button shows whether the background music is on
  const music = document.getElementById('sound');
  let musicWasOn = false;
  const musicOff = () => {
    if (music && music.classList.contains('is-on')) { music.click(); musicWasOn = true; }
  };
  const musicBack = () => {
    if (musicWasOn && music && !music.classList.contains('is-on')) music.click();
    musicWasOn = false;
  };

  const play = (fromStart) => {
    if (!video.getAttribute('src')) video.src = pick();
    if (fromStart) video.currentTime = 0;
    box.classList.remove('is-ended');
    box.classList.add('is-playing');
    start.setAttribute('tabindex', '-1');
    const p = video.play();
    if (p && p.catch) p.catch(() => {}); // the controls are showing, so a second tap still works
    video.focus({ preventScroll: true });
  };

  // a browser that can't play it here: put the poster back and let the button open the file itself
  let cantPlay = false;
  video.addEventListener('error', () => {
    cantPlay = true;
    box.classList.remove('is-playing');
    start.removeAttribute('tabindex');
    start.href = video.currentSrc || video.getAttribute('src') || start.href;
  });

  start.addEventListener('click', (e) => { if (cantPlay) return; e.preventDefault(); play(); });
  replay.addEventListener('click', () => play(true));

  // "Watch the film" links elsewhere on the page bring the player into view and start it
  document.querySelectorAll('a[href="#film"][data-film-start]').forEach((a) => {
    a.addEventListener('click', (e) => {
      e.preventDefault();
      box.scrollIntoView({ behavior: 'smooth', block: 'center' });
      if (!cantPlay) play();
    });
  });

  video.addEventListener('play', () => { box.classList.remove('is-ended'); musicOff(); });
  video.addEventListener('pause', musicBack);
  video.addEventListener('ended', () => {
    box.classList.add('is-ended');
    if (document.fullscreenElement === video && document.exitFullscreen) document.exitFullscreen().catch(() => {});
  });

  // scrolled fully out of view while playing: pause, so it isn't talking from off screen
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting && !video.paused && document.fullscreenElement !== video) video.pause();
    }).observe(box);
  }
})();
