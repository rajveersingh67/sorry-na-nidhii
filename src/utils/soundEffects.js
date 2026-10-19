// Self-contained Web Audio API synthesizer for romantic ambient music and interaction sounds
// Requires zero external audio files, works 100% offline and reliably across all browsers!

class RomanticAudioEngine {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.melodyTimer = null;
    this.currentStep = 0;
    this.volume = 0.35;
    this.gainNode = null;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  // Romantic chord progression in F Major / D Minor (gentle, tender, dreamy)
  // Fmaj7 -> Dm9 -> Bbmaj7 -> C9sus4
  getMelodyNotes() {
    return [
      // Chord 1: F Major 7 (F3, C4, E4, A4)
      { freq: 174.61, duration: 2.2, type: 'sine', delay: 0 },
      { freq: 261.63, duration: 2.0, type: 'triangle', delay: 0.1 },
      { freq: 329.63, duration: 1.8, type: 'sine', delay: 0.3 },
      { freq: 440.00, duration: 2.2, type: 'sine', delay: 0.5 },
      { freq: 523.25, duration: 1.5, type: 'triangle', delay: 1.1 },

      // Chord 2: D Minor 9 (D3, A3, F4, C5, E5)
      { freq: 146.83, duration: 2.2, type: 'sine', delay: 2.4 },
      { freq: 220.00, duration: 2.0, type: 'triangle', delay: 2.5 },
      { freq: 349.23, duration: 1.8, type: 'sine', delay: 2.7 },
      { freq: 523.25, duration: 1.6, type: 'sine', delay: 3.1 },
      { freq: 659.25, duration: 1.4, type: 'triangle', delay: 3.6 },

      // Chord 3: Bb Major 7 (Bb2, F3, D4, A4)
      { freq: 116.54, duration: 2.2, type: 'sine', delay: 4.8 },
      { freq: 174.61, duration: 2.0, type: 'triangle', delay: 4.9 },
      { freq: 293.66, duration: 1.8, type: 'sine', delay: 5.1 },
      { freq: 440.00, duration: 2.0, type: 'sine', delay: 5.4 },
      { freq: 349.23, duration: 1.4, type: 'triangle', delay: 5.9 },

      // Chord 4: C Suspended / Cadd9 (C3, G3, E4, D5)
      { freq: 130.81, duration: 2.2, type: 'sine', delay: 7.2 },
      { freq: 196.00, duration: 2.0, type: 'triangle', delay: 7.3 },
      { freq: 329.63, duration: 1.8, type: 'sine', delay: 7.5 },
      { freq: 587.33, duration: 1.8, type: 'sine', delay: 7.9 },
      { freq: 440.00, duration: 1.4, type: 'triangle', delay: 8.4 },
    ];
  }

  playNote(freq, duration, type = 'sine', startTime = 0) {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const osc = this.ctx.createOscillator();
      const noteGain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

      // Warm romantic low-pass filter
      const filter = this.ctx.createBiquadFilter();
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(1200, this.ctx.currentTime + startTime);

      // Smooth envelope (soft piano attack, lingering release)
      const now = this.ctx.currentTime + startTime;
      noteGain.gain.setValueAtTime(0.001, now);
      noteGain.gain.exponentialRampToValueAtTime(0.22, now + 0.12);
      noteGain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

      osc.connect(filter);
      filter.connect(noteGain);
      noteGain.connect(this.gainNode);

      osc.start(now);
      osc.stop(now + duration + 0.1);
    } catch (e) {
      console.warn("Audio playback notice:", e);
    }
  }

  startMelodyLoop() {
    if (!this.isPlaying) return;
    const notes = this.getMelodyNotes();
    notes.forEach(note => {
      this.playNote(note.freq, note.duration, note.type, note.delay);
    });

    const loopDurationMs = 9600;
    this.melodyTimer = setTimeout(() => {
      if (this.isPlaying) {
        this.startMelodyLoop();
      }
    }, loopDurationMs);
  }

  play() {
    this.init();
    if (this.isPlaying) return;
    this.isPlaying = true;
    this.startMelodyLoop();
  }

  pause() {
    this.isPlaying = false;
    if (this.melodyTimer) {
      clearTimeout(this.melodyTimer);
      this.melodyTimer = null;
    }
  }

  toggle() {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play();
      return true;
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.gainNode && this.ctx) {
      this.gainNode.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  // Sweet chime for button clicks & heart interactions
  playChime() {
    try {
      this.init();
      if (!this.ctx) return;
      const pitches = [523.25, 659.25, 783.99, 1046.50]; // C E G C
      pitches.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const g = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.08);

        const now = this.ctx.currentTime + idx * 0.08;
        g.gain.setValueAtTime(0.001, now);
        g.gain.exponentialRampToValueAtTime(0.12, now + 0.04);
        g.gain.exponentialRampToValueAtTime(0.0001, now + 0.6);

        osc.connect(g);
        g.connect(this.ctx.destination);
        osc.start(now);
        osc.stop(now + 0.7);
      });
    } catch (e) {
      // Audio permission or unsupported
    }
  }

  // Soft romantic flutter sound for paper unfold
  playPaperSound() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const g = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(330, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(440, this.ctx.currentTime + 0.3);

      const now = this.ctx.currentTime;
      g.gain.setValueAtTime(0.001, now);
      g.gain.linearRampToValueAtTime(0.08, now + 0.1);
      g.gain.exponentialRampToValueAtTime(0.0001, now + 0.5);

      osc.connect(g);
      g.connect(this.ctx.destination);
      osc.start(now);
      osc.stop(now + 0.6);
    } catch (e) {}
  }
}

export const romanticAudio = new RomanticAudioEngine();
