import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Mail, MailOpen, ArrowDown } from 'lucide-react';
import { soundManager } from '../utils/sound';
import { emojiCryingPraying, kneelingPraying3d } from '../assets/images';


export default function Hero({ onOpenHeart }) {
  const [envelopeOpen, setEnvelopeOpen] = useState(false);

  const handleOpenHeart = () => {
    soundManager.playChime();
    setEnvelopeOpen(true);

    // Burst cute confetti and hearts
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.65 },
      colors: ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffccd5', '#d8b4e2'],
    });

    if (onOpenHeart) {
      setTimeout(() => {
        onOpenHeart();
      }, 500);
    }
  };

  return (
    <section id="hero" className="relative min-h-[92vh] flex flex-col items-center justify-center text-center px-4 py-12 overflow-hidden">
      {/* Decorative floating badges */}
      <div className="absolute top-8 left-4 sm:left-16 animate-float hidden sm:block">
        <div className="bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-200 text-xs font-bold text-pink-500 shadow-sm flex items-center gap-1.5">
          <span>🧸</span> Special Apology For Nidhi
        </div>
      </div>

      <div className="absolute top-12 right-4 sm:right-16 animate-float-slow hidden sm:block">
        <div className="bg-white/80 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-pink-200 text-xs font-bold text-rose-500 shadow-sm flex items-center gap-1.5">
          <span>🥺</span> Please maan jao na?
        </div>
      </div>

      {/* Main Cute Sticker & Character Showcase */}
      <div className="relative mb-6">
        {/* Soft glowing aura */}
        <div className="absolute -inset-4 bg-gradient-to-tr from-pink-300/40 via-rose-300/30 to-purple-300/40 rounded-full blur-2xl animate-pulse-glow" />

        <div className="relative flex items-center justify-center gap-3 sm:gap-6">
          {/* Cute SVG Teddy Bear with Heart */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/90 p-2 rounded-3xl border-2 border-pink-200/80 shadow-lg shadow-pink-200/50 flex flex-col items-center justify-center transform -rotate-6 hover:rotate-0 transition-transform">
            <svg viewBox="0 0 100 100" className="w-20 h-20">
              {/* Teddy Ears */}
              <circle cx="28" cy="28" r="14" fill="#D4A373" />
              <circle cx="28" cy="28" r="8" fill="#FAEDCD" />
              <circle cx="72" cy="28" r="14" fill="#D4A373" />
              <circle cx="72" cy="28" r="8" fill="#FAEDCD" />
              {/* Teddy Head */}
              <circle cx="50" cy="50" r="30" fill="#E29578" />
              {/* Muzzle */}
              <ellipse cx="50" cy="58" rx="14" ry="10" fill="#FFF1E6" />
              {/* Eyes */}
              <circle cx="40" cy="46" r="3.5" fill="#4A3E3D" />
              <circle cx="60" cy="46" r="3.5" fill="#4A3E3D" />
              <circle cx="41.5" cy="44.5" r="1.2" fill="#FFFFFF" />
              <circle cx="61.5" cy="44.5" r="1.2" fill="#FFFFFF" />
              {/* Rosy Cheeks */}
              <ellipse cx="34" cy="54" rx="4.5" ry="3" fill="#FF8FA3" opacity="0.6" />
              <ellipse cx="66" cy="54" rx="4.5" ry="3" fill="#FF8FA3" opacity="0.6" />
              {/* Nose & Mouth */}
              <ellipse cx="50" cy="54" rx="3.5" ry="2.5" fill="#4A3E3D" />
              <path d="M 48 56 Q 50 59 52 56" stroke="#4A3E3D" strokeWidth="1.5" fill="none" />
              {/* Bow or Heart on Bear */}
              <path d="M 46 72 C 40 65, 30 75, 50 92 C 70 75, 60 65, 54 72 Z" fill="#FF4D6D" className="animate-heartbeat" />
            </svg>
            <span className="text-[10px] font-bold text-pink-600 mt-0.5">Holding Heart</span>
          </div>

          {/* User's Uploaded Crying & Praying Emoji (Main Hero Sticker!) */}
          <div className="relative group cursor-pointer" onClick={() => soundManager.playPop()}>
            <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-full bg-white/95 p-2 border-4 border-pink-300 shadow-xl shadow-pink-300/50 flex items-center justify-center transform group-hover:scale-105 transition-all overflow-hidden">
              <img
                src={emojiCryingPraying}
                alt="Nidhi Please Forgive Me - Crying Emoji"
                className="w-full h-full object-cover rounded-full filter drop-shadow-sm"
              />
            </div>
            <div className="absolute -bottom-2 -right-1 bg-gradient-to-r from-pink-500 to-rose-500 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
              <span>🥺</span> Praying
            </div>
          </div>

          {/* User's Kneeling/Prostrating 3D Figure Badge */}
          <div className="w-24 h-24 sm:w-32 sm:h-32 bg-white/90 p-2 rounded-3xl border-2 border-pink-200/80 shadow-lg shadow-pink-200/50 flex flex-col items-center justify-center transform rotate-6 hover:rotate-0 transition-transform">
            <div className="w-16 h-16 sm:w-20 sm:h-20 overflow-hidden rounded-2xl flex items-center justify-center">
              <img
                src={kneelingPraying3d}
                alt="Janab Kneeling for Apology"
                className="w-full h-full object-cover"
              />
            </div>

            <span className="text-[10px] font-bold text-rose-500 mt-0.5">Kneeling Sorry</span>
          </div>
        </div>
      </div>

      {/* Main Heading & Subtitle */}
      <div className="max-w-2xl mx-auto space-y-3 z-10">
        <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-sm font-bold border border-pink-200/80 shadow-sm animate-wiggle">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>A message straight from my heart</span>
          <Sparkles className="w-4 h-4 text-pink-500" />
        </div>

        <h1 className="font-heading text-6xl sm:text-7xl md:text-8xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-rose-500 to-purple-600 drop-shadow-sm">
          Nidhiiii 🥺💗
        </h1>

        <p className="font-body text-lg sm:text-xl md:text-2xl font-bold text-pink-800/90 max-w-xl mx-auto leading-relaxed">
          "Ek chhota sa pagal insaan tumse kuch kehna chahta hai..."
        </p>

        <p className="text-sm sm:text-base text-pink-600/80 max-w-md mx-auto">
          I know you're upset, and I hate being the reason behind your sadness. Please tap the envelope below to read my heart.
        </p>
      </div>

      {/* Adorable Animated Envelope & Button */}
      <div className="mt-8 z-10 flex flex-col items-center">
        <div
          onClick={handleOpenHeart}
          className="group relative cursor-pointer transform hover:-translate-y-1.5 transition-all duration-300"
        >
          {/* Envelope Graphic */}
          <div className="w-64 sm:w-72 h-40 bg-gradient-to-br from-pink-100 to-rose-200 rounded-2xl border-2 border-pink-300/80 shadow-xl flex flex-col items-center justify-center relative overflow-hidden group-hover:shadow-pink-300/50">
            {/* Top flap decoration */}
            <div
              className={`absolute top-0 inset-x-0 h-16 bg-gradient-to-b from-pink-200 to-pink-100 border-b border-pink-300 origin-top transition-transform duration-500 ${
                envelopeOpen ? '-rotate-180 opacity-0' : 'rotate-0'
              }`}
              style={{ clipPath: 'polygon(0 0, 100% 0, 50% 100%)' }}
            />

            {/* Wax Seal */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-rose-600 to-pink-500 text-white flex items-center justify-center shadow-lg border-2 border-pink-200 z-10 group-hover:scale-110 transition-transform">
              {envelopeOpen ? (
                <MailOpen className="w-6 h-6 animate-bounce" />
              ) : (
                <Heart className="w-6 h-6 fill-white animate-pulse" />
              )}
            </div>

            <span className="font-romantic text-xs text-pink-700 font-bold mt-2 z-10">
              For: Meri Pyaari Nidhi 🎀
            </span>
            <span className="text-[10px] text-pink-500 z-10">
              Sealed with infinite love & sorry
            </span>
          </div>

          {/* Action Button */}
          <button
            onClick={handleOpenHeart}
            className="mt-4 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white text-base sm:text-lg font-bold shadow-lg shadow-pink-300/70 hover:shadow-xl hover:shadow-pink-400/80 flex items-center gap-2 transform active:scale-95 transition-all"
          >
            <Mail className="w-5 h-5" />
            <span>Open My Heart 💌</span>
            <Sparkles className="w-5 h-5 text-yellow-200" />
          </button>
        </div>

        {/* Subtle scroll down hint */}
        <a
          href="#apology"
          onClick={() => soundManager.playPop()}
          className="mt-6 flex flex-col items-center text-xs font-bold text-pink-400/80 hover:text-pink-600 transition-colors"
        >
          <span>Scroll to explore my apology</span>
          <ArrowDown className="w-4 h-4 animate-bounce mt-1" />
        </a>
      </div>
    </section>
  );
}
