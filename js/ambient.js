// Background music: a slow lo-fi groove played live with Web Audio, so there is no audio
// file to download and it never repeats exactly. Soft electric piano, a warm pad, round
// bass, brushed drums and vinyl crackle, all through a dark filter and a little reverb.
// It starts after the intro (or on the first tap when the visitor chose sound earlier),
// and the floating button turns it on and off. The choice is remembered.
(() => {
  const btn = document.getElementById('sound');
  const AC = window.AudioContext || window.webkitAudioContext;
  if (!btn || !AC) return;
  const label = btn.querySelector('.sound__label');
  const KEY = 'tmp-sound';
  const pref = () => { try { return localStorage.getItem(KEY); } catch (e) { return null; } };
  const save = (v) => { try { localStorage.setItem(KEY, v); } catch (e) { /* storage blocked */ } };

  const BPM = 74, BEAT = 60 / BPM, SWING = 0.6, LEVEL = 0.55;
  const hz = (m) => 440 * Math.pow(2, (m - 69) / 12);
  // two bars per chord: Fmaj9, Em7, Dm9, Cmaj9 (MIDI notes; bass root first)
  const CHORDS = [
    [41, 57, 60, 64, 67],
    [40, 59, 62, 64, 67],
    [38, 53, 57, 60, 64],
    [36, 52, 55, 59, 62],
  ];
  const MELODY = [72, 74, 76, 79, 81, 84]; // C major pentatonic, over every chord

  let ctx = null, master, bus, verb, lfo, noise, meter, crackle = null;
  let on = false, timer = 0, next = 0, beat = 0;

  function build() {
    ctx = new AC();
    try { if (navigator.audioSession) navigator.audioSession.type = 'playback'; } catch (e) { /* older Safari */ }
    master = ctx.createGain();
    master.gain.value = 0;
    const comp = ctx.createDynamicsCompressor();
    comp.threshold.value = -18; comp.ratio.value = 3; comp.attack.value = 0.02; comp.release.value = 0.3;
    master.connect(comp).connect(ctx.destination);
    // the page's visuals can follow the music (see TMP_AUDIO below)
    meter = ctx.createAnalyser();
    meter.fftSize = 512;
    comp.connect(meter);
    // everything rolls off above ~3.6 kHz for that warm, slightly worn sound
    const tone = ctx.createBiquadFilter();
    tone.type = 'lowpass'; tone.frequency.value = 3600; tone.Q.value = 0.4;
    tone.connect(master);
    bus = ctx.createGain();
    bus.connect(tone);
    // reverb from a generated impulse: 3 s of decaying stereo noise
    verb = ctx.createConvolver();
    const len = ctx.sampleRate * 3, ir = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = ir.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, 3.2);
    }
    verb.buffer = ir;
    const wet = ctx.createGain();
    wet.gain.value = 0.32;
    verb.connect(wet).connect(tone);
    // tape wobble: every pitched voice drifts a few cents together
    lfo = ctx.createOscillator();
    lfo.frequency.value = 0.45;
    const depth = ctx.createGain();
    depth.gain.value = 6;
    lfo.connect(depth);
    lfo.start();
    lfo.out = depth;
    // one second of white noise, reused by the drums
    noise = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const n = noise.getChannelData(0);
    for (let i = 0; i < n.length; i++) n[i] = Math.random() * 2 - 1;
  }

  // out: a voice's gain node, routed dry plus a reverb send
  function voice(send = 0.5, pan = 0) {
    const g = ctx.createGain();
    const p = ctx.createStereoPanner ? ctx.createStereoPanner() : null;
    if (p) { p.pan.value = pan; g.connect(p).connect(bus); } else g.connect(bus);
    if (send) { const s = ctx.createGain(); s.gain.value = send; g.connect(s).connect(verb); }
    return g;
  }
  const osc = (type, f, t, end, out) => {
    const o = ctx.createOscillator();
    o.type = type; o.frequency.value = f;
    lfo.out.connect(o.detune);
    o.connect(out); o.start(t); o.stop(end);
    o.onended = () => { try { lfo.out.disconnect(o.detune); } catch (e) { /* already gone */ } };
    return o;
  };

  // electric piano: a sine bell, struck harder at first (FM) and mellowing as it rings
  function keys(m, t, vel = 1, len = 2.6) {
    const f = hz(m), out = voice(0.6, (m - 64) / 40);
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(0.055 * vel, t + 0.006);
    amp.gain.exponentialRampToValueAtTime(0.0008, t + len);
    amp.connect(out);
    const car = osc('sine', f, t, t + len + 0.05, amp);
    car.detune.value = (Math.random() - 0.5) * 8;
    const mod = ctx.createOscillator(), idx = ctx.createGain();
    mod.frequency.value = f;
    idx.gain.setValueAtTime(f * 1.4 * vel, t);
    idx.gain.exponentialRampToValueAtTime(f * 0.08, t + 0.45);
    mod.connect(idx).connect(car.frequency);
    mod.start(t); mod.stop(t + len);
  }

  function pad(notes, t, len) {
    for (const m of notes) {
      const out = voice(0.8, (m - 60) / 30);
      const lp = ctx.createBiquadFilter();
      lp.type = 'lowpass'; lp.frequency.value = 650; lp.Q.value = 0.3;
      const amp = ctx.createGain();
      amp.gain.setValueAtTime(0, t);
      amp.gain.linearRampToValueAtTime(0.012, t + 1.8);
      amp.gain.setValueAtTime(0.012, t + len - 0.4);
      amp.gain.linearRampToValueAtTime(0, t + len + 2.2);
      lp.connect(amp).connect(out);
      for (const d of [-7, 7]) osc('sawtooth', hz(m), t, t + len + 2.3, lp).detune.value = d;
    }
  }

  function bass(m, t, len) {
    const out = voice(0, 0);
    const lp = ctx.createBiquadFilter();
    lp.type = 'lowpass'; lp.frequency.value = 280;
    const amp = ctx.createGain();
    amp.gain.setValueAtTime(0, t);
    amp.gain.linearRampToValueAtTime(0.2, t + 0.02);
    amp.gain.setTargetAtTime(0.13, t + 0.05, 0.3);
    amp.gain.setTargetAtTime(0, t + len, 0.08);
    lp.connect(amp).connect(out);
    osc('sine', hz(m), t, t + len + 0.6, lp);
    osc('triangle', hz(m), t, t + len + 0.6, lp);
  }

  function kick(t) {
    const out = voice(0, 0), amp = ctx.createGain(), o = ctx.createOscillator();
    o.frequency.setValueAtTime(120, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.14);
    amp.gain.setValueAtTime(0.42, t);
    amp.gain.exponentialRampToValueAtTime(0.001, t + 0.42);
    o.connect(amp).connect(out); o.start(t); o.stop(t + 0.45);
  }

  function hit(t, { type, f, q = 0.8, gain, decay, send = 0.2, pan = 0 }) {
    const s = ctx.createBufferSource(), bp = ctx.createBiquadFilter(), amp = ctx.createGain();
    s.buffer = noise;
    bp.type = type; bp.frequency.value = f; bp.Q.value = q;
    amp.gain.setValueAtTime(gain, t);
    amp.gain.exponentialRampToValueAtTime(0.0005, t + decay);
    s.connect(bp).connect(amp).connect(voice(send, pan));
    s.start(t, Math.random() * 0.5, decay + 0.05);
  }
  const snare = (t) => {
    hit(t, { type: 'bandpass', f: 1600, q: 0.7, gain: 0.16, decay: 0.24, send: 0.45 });
    const o = ctx.createOscillator(), amp = ctx.createGain();
    o.frequency.value = 185;
    amp.gain.setValueAtTime(0.07, t);
    amp.gain.exponentialRampToValueAtTime(0.001, t + 0.1);
    o.connect(amp).connect(voice(0.2, 0)); o.start(t); o.stop(t + 0.12);
  };
  const hat = (t, vel) => hit(t, { type: 'highpass', f: 7000, gain: 0.03 * vel, decay: 0.05, send: 0.1, pan: 0.25 });

  // vinyl: soft hiss with the odd pop, looping under everything
  function startCrackle() {
    const len = ctx.sampleRate * 5, b = ctx.createBuffer(1, len, ctx.sampleRate), d = b.getChannelData(0);
    for (let i = 0; i < len; i++) {
      d[i] = (Math.random() * 2 - 1) * 0.015;
      if (Math.random() < 0.00018) d[i] += (Math.random() < 0.5 ? -1 : 1) * (0.2 + Math.random() * 0.5);
    }
    crackle = ctx.createBufferSource();
    crackle.buffer = b; crackle.loop = true;
    const bp = ctx.createBiquadFilter();
    bp.type = 'bandpass'; bp.frequency.value = 2400; bp.Q.value = 0.5;
    const g = ctx.createGain();
    g.gain.value = 0.35;
    crackle.connect(bp).connect(g).connect(bus);
    crackle.start();
  }

  // one beat at a time; the groove sits out the first 4 bars and every 16th-bar break
  function schedule(i, t) {
    const bar = Math.floor(i / 4), b = i % 4;
    const chord = CHORDS[Math.floor(bar / 2) % CHORDS.length];
    const groove = bar >= 4 && bar % 16 < 14;
    const half = BEAT * SWING;
    if (b === 0 && bar % 2 === 0) pad(chord.slice(1), t, BEAT * 8);
    if (b === 0) {
      chord.slice(1).forEach((m, k) => keys(m, t + k * 0.018 + 0.01, 0.75));
      bass(chord[0], t, BEAT * 1.6);
    }
    if (b === 2 && Math.random() < 0.55) chord.slice(2).forEach((m, k) => keys(m, t + half + k * 0.015, 0.45, 1.6));
    if (b === 3 && Math.random() < 0.4) bass(chord[0] + 7, t + half, BEAT * 0.4);
    // a few melody notes drift over the top
    if (Math.random() < (bar < 4 ? 0.25 : 0.42)) {
      const m = MELODY[Math.floor(Math.random() * MELODY.length)];
      keys(m, t + (Math.random() < 0.5 ? 0 : half), 0.5 + Math.random() * 0.3, 3.2);
    }
    if (!groove) return;
    if (b === 0 || (b === 2 && Math.random() < 0.7)) {
      const at = t + (b === 2 ? half : 0);
      kick(at);
      // tell the page when the kick lands, so things can pulse in time
      setTimeout(() => window.dispatchEvent(new CustomEvent('tmp:beat', { detail: b === 0 ? 1 : 0.6 })), Math.max(0, (at - ctx.currentTime) * 1000));
    }
    if (b === 1 || b === 3) snare(t + 0.012);
    hat(t, 0.8 + Math.random() * 0.4);
    if (Math.random() < 0.85) hat(t + half, 0.5 + Math.random() * 0.4);
  }

  function pump() {
    while (next < ctx.currentTime + 0.25) {
      schedule(beat++, next);
      next += BEAT;
    }
  }

  function start(fade = 3) {
    if (!ctx) build();
    if (ctx.state !== 'running') ctx.resume();
    on = true;
    if (!crackle) startCrackle();
    if (!timer) {
      next = Math.max(next, ctx.currentTime + 0.1);
      timer = setInterval(pump, 60);
    }
    const g = master.gain, now = ctx.currentTime;
    g.cancelScheduledValues(now);
    g.setValueAtTime(g.value, now);
    g.linearRampToValueAtTime(LEVEL, now + fade);
    show();
  }

  function stop() {
    on = false;
    show();
    if (!ctx) return;
    const g = master.gain, now = ctx.currentTime;
    g.cancelScheduledValues(now);
    g.setValueAtTime(g.value, now);
    g.linearRampToValueAtTime(0, now + 0.6);
    setTimeout(() => {
      if (on) return;
      clearInterval(timer); timer = 0;
      ctx.suspend();
    }, 700);
  }

  function show() {
    btn.classList.toggle('is-on', on);
    btn.setAttribute('aria-pressed', String(on));
    btn.setAttribute('aria-label', on ? 'Turn music off' : 'Turn music on');
    label.textContent = on ? 'Sound on' : 'Sound off';
  }

  // loudness right now, 0 to about 1 (0 while the music is off)
  const wave = new Uint8Array(512);
  window.TMP_AUDIO = {
    level() {
      if (!on || !meter || ctx.state !== 'running') return 0;
      meter.getByteTimeDomainData(wave);
      let sum = 0;
      for (let i = 0; i < wave.length; i += 4) { const v = (wave[i] - 128) / 128; sum += v * v; }
      return Math.min(1, Math.sqrt(sum / (wave.length / 4)) * 6);
    },
  };

  btn.addEventListener('click', () => {
    if (on) { stop(); save('off'); } else { start(1.2); save('on'); }
  });

  // the intro's buttons: build the audio inside that tap (so the browser allows it),
  // then fade the music in as the page opens
  let wanted = false;
  window.addEventListener('tmp:sound', (e) => {
    wanted = !!e.detail;
    save(wanted ? 'on' : 'off');
    if (wanted) { if (!ctx) build(); ctx.resume(); }
  });
  const reveal = () => {
    btn.hidden = false;
    if (wanted) { start(4); return; }
    show();
    // no intro this time: if they had sound on before, it comes back on their first tap
    if (pref() !== 'on' || ctx) return;
    const evs = ['pointerdown', 'keydown', 'touchend'];
    const first = (e) => {
      evs.forEach((ev) => window.removeEventListener(ev, first, true));
      if (!on && !btn.contains(e.target)) start(3);
    };
    evs.forEach((ev) => window.addEventListener(ev, first, true));
  };
  if (document.documentElement.classList.contains('loaded')) reveal();
  else window.addEventListener('tmp:loaded', reveal, { once: true });

  // rest while the tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (!ctx || !on) return;
    if (document.hidden) ctx.suspend();
    else { ctx.resume(); next = Math.max(next, ctx.currentTime + 0.1); }
  });
})();
