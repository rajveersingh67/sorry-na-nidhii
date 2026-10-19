import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, MailOpen, ArrowDown } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/soundEffects';
import { PuppyEyesSticker, PrayingApologySticker, FlyingLoveLetterSticker, WashiTapeSticker } from './RomanticStickers';

export default function HeroSection({ onOpenHeart, isMusicPlaying, setIsMusicPlaying }) {
  const [isOpening, setIsOpening] = useState(false);
  const [envelopeOpened, setEnvelopeOpened] = useState(false);

  const handleOpenHeart = () => {
    setIsOpening(true);
    romanticAudio.playChime();
    romanticAudio.playPaperSound();

    if (!isMusicPlaying) {
      romanticAudio.play();
      setIsMusicPlaying(true);
    }

    confetti({
      particleCount: 50,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#FB6F92', '#FFB3C6', '#E8DFF5', '#FFF0F5', '#E01E5A'],
      shapes: ['heart', 'circle'],
      scalar: 1.2,
    });

    setTimeout(() => {
      setEnvelopeOpened(true);
      setIsOpening(false);
      onOpenHeart();

      const target = document.getElementById('photos');
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }, 900);
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 pt-24 pb-16 overflow-hidden"
    >
      {/* Background ambient lighting */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-[520px] h-[520px] bg-gradient-to-tr from-rose-200/40 via-pink-100/50 to-purple-200/30 rounded-full blur-3xl" />
      </div>

      {/* Floating Animated Scrapbook Stickers in Background/Margins */}
      <div className="hidden lg:block absolute left-8 top-32 pointer-events-none">
        <PuppyEyesSticker size={95} />
        <div className="mt-1 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-serif italic text-rose-800 shadow-xs border border-rose-200 text-center">
          Pleading for 1 smile... 🥺
        </div>
      </div>

      <div className="hidden lg:block absolute right-8 top-36 pointer-events-none">
        <FlyingLoveLetterSticker size={90} />
        <div className="mt-1 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-full text-[11px] font-serif italic text-rose-800 shadow-xs border border-rose-200 text-center">
          Special Delivery 💌
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full text-center relative z-10">
        {/* Cute Sad Character / Emoji Hero Avatar */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-8 relative inline-block"
        >
          {/* Glowing Aura Ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-rose-400 to-pink-300 blur-xl opacity-60 animate-pulse-glow" />

          {/* Avatar Container */}
          <div className="relative w-36 h-36 sm:w-44 sm:h-44 mx-auto rounded-full p-2 bg-gradient-to-b from-white via-rose-100 to-pink-200 shadow-romantic-lg animate-float-slow">
            <div className="w-full h-full rounded-full overflow-hidden bg-white/90 p-2 flex items-center justify-center border-2 border-white shadow-inner">
              <img
                src="/assets/crying-emoji.jpg"
                alt="Sad crying emoji asking for forgiveness"
                className="w-full h-full object-contain drop-shadow-md select-none pointer-events-none"
              />
            </div>

            {/* Little floating apology badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -bottom-2 right-2 bg-white/95 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-rose-700 shadow-md border border-rose-200 flex items-center gap-1"
            >
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500" />
              <span>Forgive me?</span>
            </motion.div>

            {/* Left cute pleading badge */}
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-1 -left-3 bg-rose-500 text-white px-2.5 py-0.5 rounded-full text-[10px] font-bold shadow-md tracking-wider uppercase"
            >
              Plead: 1000% 😭
            </motion.div>
          </div>
        </motion.div>

        {/* Animated Lines of Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-4"
        >
          {/* Subheading greeting */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/70 text-rose-800 text-xs sm:text-sm font-medium border border-rose-200/60 shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            <span>A message straight from the heart for Nidhi</span>
            <span className="text-rose-500">🌸</span>
          </div>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-gray-900 tracking-tight leading-tight">
            Hey Nidhi, My Favourite Person...{' '}
            <span className="inline-block animate-bounce">🥺</span>
            <span className="text-rose-600 inline-block">❤️</span>
          </h1>

          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-xl sm:text-2xl md:text-3xl font-serif italic text-rose-800 font-medium max-w-2xl mx-auto"
          >
            "Nidhi, I Know You're Angry With Me..."
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-base sm:text-lg text-gray-700 max-w-xl mx-auto leading-relaxed font-light"
          >
            I don't want to make excuses. I just want a chance to tell you what's in my heart.
          </motion.p>
        </motion.div>

        {/* Envelope & Action Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-10 flex flex-col items-center justify-center gap-4"
        >
          <button
            onClick={handleOpenHeart}
            disabled={isOpening}
            className="relative group px-8 sm:px-10 py-4 rounded-full text-base sm:text-lg font-semibold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-romantic-lg hover:shadow-rose-400/50 hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 overflow-hidden cursor-pointer"
          >
            <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />

            <MailOpen className="w-5 h-5 text-rose-100 group-hover:rotate-12 transition-transform duration-300" />
            <span className="tracking-wide">
              {isOpening ? 'Unsealing with love...' : 'Open My Heart 💌'}
            </span>
            <Heart className="w-5 h-5 text-rose-200 fill-rose-200 animate-pulse" />
          </button>

          <p className="text-xs text-rose-600/75 italic flex items-center gap-1.5 mt-1">
            <span>Tap to unlock my letter and soft romantic music</span>
            <span className="text-rose-400">🎶</span>
          </p>

          {/* Downward indicator */}
          <a
            href="#photos"
            className="mt-8 text-rose-400 hover:text-rose-600 transition-colors animate-bounce p-2"
            aria-label="Scroll to apology photos"
          >
            <ArrowDown className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
