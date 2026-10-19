import React, { useState } from 'react';
import { Music, Volume2, VolumeX, Sparkles, Heart, Bell, BellOff } from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function Navbar({ isMusicPlaying, setIsMusicPlaying, sfxEnabled, setSfxEnabled }) {
  const [navOpen, setNavOpen] = useState(false);

  const toggleMusic = () => {
    soundManager.playPop();
    const playing = soundManager.toggleBGM((state) => {
      setIsMusicPlaying(state);
    });
    setIsMusicPlaying(playing);
  };

  const toggleSfx = () => {
    const newState = !sfxEnabled;
    soundManager.sfxEnabled = newState;
    setSfxEnabled(newState);
    if (newState) soundManager.playPop();
  };

  const navLinks = [
    { label: '💌 Apology', href: '#apology' },
    { label: '🧸 Hugs', href: '#hug' },
    { label: '🏋️ Sit-Ups', href: '#situps' },
    { label: '🐻 Stickers', href: '#stickers' },
    { label: '💗 Why Special', href: '#special' },
    { label: '🎁 Surprise', href: '#surprise' },
    { label: '💞 Love Meter', href: '#love-meter' },
    { label: '🥹 Final Note', href: '#final' },
  ];

  return (
    <header className="sticky top-0 z-50 px-3 sm:px-6 py-2.5 backdrop-blur-md bg-white/70 border-b border-pink-200/60 shadow-sm transition-all">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-2">
        {/* Brand */}
        <a
          href="#hero"
          onClick={() => soundManager.playPop()}
          className="flex items-center gap-2 group cursor-pointer"
        >
          <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-pink-400 to-rose-400 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition-transform">
            <Heart className="w-5 h-5 fill-white" />
          </div>
          <div className="text-left">
            <span className="font-heading text-xl sm:text-2xl font-bold text-pink-600 block leading-none">
              Nidhi & Me 🥺
            </span>
            <span className="text-[10px] text-pink-400 font-bold uppercase tracking-wider block">
              I am so sorry meri jaan
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden lg:flex items-center gap-1.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => soundManager.playPop()}
              className="px-3 py-1.5 rounded-full text-xs font-bold text-pink-700/80 hover:text-pink-600 hover:bg-pink-100/70 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Controls: Music & SFX */}
        <div className="flex items-center gap-2">
          {/* Music Toggle */}
          <button
            onClick={toggleMusic}
            title={isMusicPlaying ? 'Mute Romantic Music' : 'Play Romantic Music'}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${
              isMusicPlaying
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white animate-pulse'
                : 'bg-pink-100/90 text-pink-700 hover:bg-pink-200/90'
            }`}
          >
            {isMusicPlaying ? (
              <>
                <Volume2 className="w-4 h-4 animate-bounce" />
                <span className="hidden sm:inline">Music: Playing 🎶</span>
                <span className="sm:hidden">🎵</span>
              </>
            ) : (
              <>
                <VolumeX className="w-4 h-4 text-pink-400" />
                <span className="hidden sm:inline">Romantic Music: Off</span>
                <span className="sm:hidden">🔇</span>
              </>
            )}
          </button>

          {/* SFX Toggle */}
          <button
            onClick={toggleSfx}
            title={sfxEnabled ? 'Turn Off Sound Effects' : 'Turn On Sound Effects'}
            className="p-1.5 rounded-full bg-pink-100/90 text-pink-700 hover:bg-pink-200 transition-colors text-xs font-bold"
          >
            {sfxEnabled ? <Bell className="w-4 h-4 text-pink-600" /> : <BellOff className="w-4 h-4 text-pink-300" />}
          </button>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setNavOpen(!navOpen)}
            className="lg:hidden p-1.5 rounded-full bg-pink-100 text-pink-700 font-bold text-xs"
          >
            {navOpen ? '✕' : '☰'}
          </button>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      {navOpen && (
        <div className="lg:hidden mt-2 pt-2 border-t border-pink-200/60 flex flex-wrap gap-1.5 justify-center py-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                soundManager.playPop();
                setNavOpen(false);
              }}
              className="px-3 py-1 rounded-full text-xs font-semibold bg-pink-50 text-pink-700 hover:bg-pink-100"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
