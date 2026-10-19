// Web Audio API romantic synthesizer and SFX generator
// 100% offline, zero external dependencies, no broken links!

class SoundManager {
  constructor() {
    this.ctx = null;
    this.bgmPlaying = false;
    this.bgmTimer = null;
    this.bgmStep = 0;
    this.sfxEnabled = true;
    this.masterGain = null;
    this.bgmGain = null;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(0.7, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);

        this.bgmGain = this.ctx.createGain();
        this.bgmGain.gain.setValueAtTime(0.25, this.ctx.currentTime);
        this.bgmGain.connect(this.masterGain);
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Play a gentle music box tone
  playTone(freq, duration = 1.2, timeOffset = 0, gainVal = 0.15) {
    if (!this.ctx) return;
    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      // Sine wave with slight triangle warmth
      osc.type = 'sine';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + timeOffset);

      const startTime = this.ctx.currentTime + timeOffset;
      noteGain.gain.setValueAtTime(0.0001, startTime);
      noteGain.gain.exponentialRampToValueAtTime(gainVal, startTime + 0.04);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

      osc.connect(noteGain);
      noteGain.connect(this.bgmGain || this.masterGain);

      osc.start(startTime);
      osc.stop(startTime + duration + 0.1);
    } catch {
      // Audio fallback silent
    }
  }

  // Start romantic background music box loop
  startBGM(onStateChange) {
    this.init();
    if (this.bgmPlaying) return;
    this.bgmPlaying = true;
    if (onStateChange) onStateChange(true);

    // Sweet romantic melody notes (Canon/Lullaby style in C Major / A Minor)
    // Notes in Hz: C4: 261.63, D4: 293.66, E4: 329.63, F4: 349.23, G4: 392.00, A4: 440.00, B4: 493.88
    // C5: 523.25, D5: 587.33, E5: 659.25, F5: 698.46, G5: 783.99, A5: 880.00
    const melody = [
      { f: 523.25, d: 1.0 }, // C5
      { f: 659.25, d: 0.8 }, // E5
      { f: 783.99, d: 1.2 }, // G5
      { f: 659.25, d: 0.8 }, // E5

      { f: 587.33, d: 1.0 }, // D5
      { f: 698.46, d: 0.8 }, // F5
      { f: 880.00, d: 1.2 }, // A5
      { f: 698.46, d: 0.8 }, // F5

      { f: 659.25, d: 1.0 }, // E5
      { f: 783.99, d: 0.8 }, // G5
      { f: 1046.50, d: 1.4 }, // C6
      { f: 880.00, d: 0.8 }, // A5

      { f: 783.99, d: 1.2 }, // G5
      { f: 659.25, d: 0.8 }, // E5
      { f: 587.33, d: 1.0 }, // D5
      { f: 523.25, d: 1.6 }, // C5
    ];

    const stepInterval = 650; // ms per note

    const playNext = () => {
      if (!this.bgmPlaying) return;
      const note = melody[this.bgmStep % melody.length];
      this.playTone(note.f, note.d, 0, 0.16);

      // Play soft bass accompaniment every 4 notes
      if (this.bgmStep % 4 === 0) {
        const bassFreqs = [261.63, 220.00, 174.61, 196.00];
        const bassNote = bassFreqs[Math.floor((this.bgmStep / 4) % bassFreqs.length)];
        this.playTone(bassNote / 2, 2.2, 0, 0.10);
      }

      this.bgmStep++;
      this.bgmTimer = setTimeout(playNext, stepInterval);
    };

    playNext();
  }

  stopBGM(onStateChange) {
    this.bgmPlaying = false;
    if (this.bgmTimer) {
      clearTimeout(this.bgmTimer);
      this.bgmTimer = null;
    }
    if (onStateChange) onStateChange(false);
  }

  toggleBGM(onStateChange) {
    if (this.bgmPlaying) {
      this.stopBGM(onStateChange);
      return false;
    } else {
      this.startBGM(onStateChange);
      return true;
    }
  }

  // SFX: Cute Pop Sound
  playPop() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = 'sine';
      osc.frequency.setValueAtTime(450, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.08);

      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // fallback
    }
  }

  // SFX: Sparkling Chimes (hug / envelope open / love meter)
  playChime() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const notes = [523.25, 659.25, 783.99, 1046.50, 1318.51];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = now + idx * 0.07;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.001, startTime);
        gain.gain.linearRampToValueAtTime(0.18, startTime + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.6);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(startTime);
        osc.stop(startTime + 0.65);
      });
    } catch {
      // fallback
    }
  }

  // SFX: Sit-up bounce sound
  playSitupSound() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(260, now);
      osc.frequency.exponentialRampToValueAtTime(420, now + 0.12);

      gain.gain.setValueAtTime(0.25, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 0.16);
    } catch {
      // fallback
    }
  }

  // SFX: Heartbeat thump thump
  playHeartbeat() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const playThump = (offset, freq, vol) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const t = now + offset;

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, t);
        osc.frequency.exponentialRampToValueAtTime(40, t + 0.18);

        gain.gain.setValueAtTime(vol, t);
        gain.gain.exponentialRampToValueAtTime(0.001, t + 0.2);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(t);
        osc.stop(t + 0.22);
      };

      playThump(0, 85, 0.35);
      playThump(0.18, 70, 0.25);
    } catch {
      // fallback
    }
  }

  // SFX: 100 Sit-up Fanfare celebration
  playFanfare() {
    if (!this.sfxEnabled) return;
    this.init();
    try {
      const now = this.ctx.currentTime;
      const fanfare = [
        { f: 523.25, t: 0, d: 0.15 },
        { f: 523.25, t: 0.15, d: 0.15 },
        { f: 523.25, t: 0.30, d: 0.15 },
        { f: 659.25, t: 0.45, d: 0.4 },
        { f: 587.33, t: 0.85, d: 0.2 },
        { f: 659.25, t: 1.05, d: 0.2 },
        { f: 783.99, t: 1.25, d: 0.7 },
      ];

      fanfare.forEach((n) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const start = now + n.t;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(n.f, start);

        gain.gain.setValueAtTime(0.01, start);
        gain.gain.linearRampToValueAtTime(0.25, start + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, start + n.d);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(start);
        osc.stop(start + n.d + 0.05);
      });
    } catch {
      // fallback
    }
  }
}

export const soundManager = new SoundManager();
