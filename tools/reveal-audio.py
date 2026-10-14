"""Synthesizes the soundtrack for the TMP logo reveal (9 s, 48 kHz stereo WAV).
Everything is generated here, so there is nothing to license.
  0.0  low drone swells in
  0.6  whoosh rises as the logo flies in from the dark
  3.4  impact: sub drop, body thump and a bright metallic ring
  3.9  shimmer as the light sweeps the chrome
  5.0  neon buzz as the sign stutters on
  4.1+ warm chord pad under the name, fading out at the end
usage: python3 tools/reveal-audio.py out.wav"""
import sys, wave
import numpy as np

SR = 48000
DUR = 9.0
N = int(SR * DUR)
t = np.arange(N) / SR
rng = np.random.default_rng(4)
L = np.zeros(N); R = np.zeros(N)

def env(start, attack, hold, release, curve=2.0):
    e = np.zeros(N)
    a0, a1 = start, start + attack
    h1 = a1 + hold
    r1 = h1 + release
    m = (t >= a0) & (t < a1); e[m] = ((t[m] - a0) / attack) ** curve
    m = (t >= a1) & (t < h1); e[m] = 1
    m = (t >= h1) & (t < r1); e[m] = (1 - (t[m] - h1) / release) ** curve
    return e

def lowpass(x, cutoff):
    # one-pole low-pass; cutoff may vary over time (array)
    y = np.zeros_like(x)
    c = np.broadcast_to(np.asarray(cutoff, dtype=float), x.shape)
    a = 1 - np.exp(-2 * np.pi * c / SR)
    acc = 0.0
    for i in range(len(x)):
        acc += a[i] * (x[i] - acc)
        y[i] = acc
    return y

def add(sig, pan=0.0, gain=1.0):
    global L, R
    L += sig * gain * np.sqrt(0.5 * (1 - pan))
    R += sig * gain * np.sqrt(0.5 * (1 + pan))

# drone: two detuned saws, filtered, slowly opening
drone = sum(np.sign(np.sin(2 * np.pi * f * t)) * 0.5 + np.sin(2 * np.pi * f * t) for f in (55.0, 55.4, 82.4))
drone = lowpass(drone, 180 + 500 * np.clip(t / 3.4, 0, 1))
add(drone * env(0, 2.5, 4.0, 2.5) * 0.07, gain=1)

# whoosh: noise through a rising filter, swelling into the impact
noise = rng.standard_normal(N)
cut = 200 + 7000 * np.clip((t - 0.6) / 2.8, 0, 1) ** 2.2
whoosh = lowpass(noise, cut) - lowpass(noise, cut * 0.25)
w_env = env(0.6, 2.75, 0.0, 0.25, curve=2.6)
add(whoosh * w_env * 0.3, pan=-0.3)
add(np.roll(whoosh, 240) * w_env * 0.3, pan=0.3)

# impact at 3.4 s
T0 = 3.4
dt = np.clip(t - T0, 0, None)
on = t >= T0
sub = np.sin(2 * np.pi * (38 + 70 * np.exp(-dt * 14)) * dt) * np.exp(-dt * 2.6) * on
thump = lowpass(rng.standard_normal(N), 900) * np.exp(-dt * 22) * on
ring = sum(np.sin(2 * np.pi * f * dt + p) * np.exp(-dt * d) for f, d, p in ((1318.5, 2.2, 0), (1975.5, 3.1, 1), (2637.0, 4.0, 2), (3520.0, 5.5, 3))) * on
add(sub * 0.9)
add(thump * 0.8)
add(ring * 0.07, pan=0.15)
add(np.roll(ring, 480) * 0.07, pan=-0.15)

# shimmer: rising sparkle partials during the light sweep
for i, f in enumerate((2093.0, 2637.0, 3136.0, 3951.0, 4186.0)):
    st = 3.9 + i * 0.16
    s = np.sin(2 * np.pi * f * t) * env(st, 0.05, 0.0, 1.4, curve=1.5)
    add(s * 0.04, pan=(-1) ** i * 0.6)

# neon buzz: 120 Hz mains hum with harmonics, gated by the sign's stutter
gate = np.zeros(N)
for a, b in ((5.0, 5.08), (5.16, 5.2), (5.3, 5.55), (5.62, 9.0)):
    gate[(t >= a) & (t < b)] = 1
gate[(t > 7.1) & (t < 7.16)] = 0
gate = lowpass(gate, 300)
hum = sum(np.sin(2 * np.pi * 120 * k * t) / k for k in range(1, 7))
crackle = (rng.random(N) < 0.002) * rng.standard_normal(N) * 0.6
fade = np.clip((8.7 - t) / 1.2, 0, 1)
add((hum * 0.05 + crackle * 0.3) * gate * fade * np.where(t < 5.7, 1.0, 0.45), pan=0.1)
click = np.zeros(N)
for a in (5.0, 5.16, 5.3, 5.62):
    i = int(a * SR); click[i:i + 200] += np.exp(-np.arange(200) / 30) * rng.standard_normal(200)
add(lowpass(click, 4000) * 0.5)

# pad: a warm major chord under the name, fading out
chord = (261.63, 329.63, 392.0, 523.25)
pad = sum(np.sin(2 * np.pi * f * t + np.sin(2 * np.pi * 0.3 * t + k) * 0.6) + 0.3 * np.sin(2 * np.pi * f * 2.003 * t) for k, f in enumerate(chord))
pad = lowpass(pad, 1400)
p_env = env(4.1, 1.8, 1.4, 1.7, curve=1.6)
add(pad * p_env * 0.06, pan=-0.25)
add(np.roll(pad, 900) * p_env * 0.06, pan=0.25)

# simple stereo reverb-ish tail: a few decaying delays
for d, g in ((0.031, 0.35), (0.053, 0.28), (0.089, 0.2), (0.137, 0.14)):
    k = int(d * SR)
    L[k:] += R[:-k] * g * 0.5
    R[k:] += L[:-k] * g * 0.5

mix = np.stack([L, R], axis=1)
mix *= np.clip(np.minimum(t / 0.05, (DUR - t) / 0.4), 0, 1)[:, None]
peak = np.max(np.abs(mix))
mix = np.tanh(mix / peak * 1.05) / np.tanh(1.05) * 0.89
pcm = (mix * 32767).astype('<i2')
with wave.open(sys.argv[1], 'wb') as w:
    w.setnchannels(2); w.setsampwidth(2); w.setframerate(SR)
    w.writeframes(pcm.tobytes())
print('wrote', sys.argv[1], f'{DUR}s')
