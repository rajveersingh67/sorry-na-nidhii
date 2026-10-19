import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Coffee } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/soundEffects';
import { BigWarmHugSticker, PrayingApologySticker, PuppyEyesSticker } from './RomanticStickers';

export default function ApologyGameSection() {
  const [selectedResponse, setSelectedResponse] = useState(null);

  const handleOkay = (e) => {
    romanticAudio.playChime();
    setSelectedResponse('okay');

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 65,
      spread: 85,
      origin: { x, y },
      colors: ['#FB6F92', '#FFB3C6', '#E01E5A', '#F4D06F', '#FFCCD5'],
      shapes: ['heart'],
      scalar: 1.3,
    });
  };

  const handleAngry = () => {
    romanticAudio.playPaperSound();
    setSelectedResponse('angry');
  };

  return (
    <section id="game" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-8 sm:p-12 text-center shadow-romantic-lg border border-rose-200/90 relative overflow-hidden"
      >
        {/* Ambient background blur */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-rose-200/40 rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-800 text-xs sm:text-sm font-medium mb-4 border border-rose-200">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Just Checking In On You</span>
        </div>

        <h2 className="text-2xl sm:text-4xl font-serif font-bold text-gray-900 tracking-tight mb-4">
          Can Your Silly Boy Have One Little Moment, Nidhi? 🥺
        </h2>

        <p className="text-base text-gray-600 max-w-lg mx-auto font-light mb-8">
          Whatever you are feeling right now is 100% valid. Click how you truly feel — I am listening.
        </p>

        {/* Cute Character Holding A Heart */}
        <div className="relative inline-block mb-8">
          <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto rounded-full bg-gradient-to-tr from-rose-200 via-pink-100 to-purple-100 p-2 shadow-romantic flex items-center justify-center animate-float-slow">
            <div className="w-full h-full rounded-full bg-white/95 flex flex-col items-center justify-center relative overflow-hidden border border-rose-100">
              {selectedResponse === 'angry' ? (
                <div className="animate-pulse">
                  <BigWarmHugSticker size={75} />
                </div>
              ) : selectedResponse === 'okay' ? (
                <div className="text-5xl select-none animate-bounce">
                  🥰
                </div>
              ) : (
                <PrayingApologySticker size={80} />
              )}
            </div>
          </div>

          <div className="absolute -top-2 -right-2 text-xl animate-bounce">
            💌
          </div>
        </div>

        {/* The Two Choice Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-8">
          {/* Button 1: Okay, Tell Me ❤️ */}
          <button
            onClick={handleOkay}
            className={`w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 cursor-pointer ${
              selectedResponse === 'okay'
                ? 'bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-rose-300/60 scale-105 ring-4 ring-rose-200'
                : 'bg-white hover:bg-rose-50 text-rose-700 border-2 border-rose-300 hover:border-rose-400'
            }`}
          >
            <span>Okay, Tell Me</span>
            <span className="text-xl">❤️</span>
          </button>

          {/* Button 2: I'm Still Angry 😤 */}
          <button
            onClick={handleAngry}
            className={`w-full sm:w-auto px-8 py-4 rounded-full text-base font-semibold transition-all duration-300 shadow-sm flex items-center justify-center gap-2.5 cursor-pointer ${
              selectedResponse === 'angry'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-purple-300/60 scale-105 ring-4 ring-purple-200'
                : 'bg-white hover:bg-purple-50 text-purple-800 border-2 border-purple-200 hover:border-purple-300'
            }`}
          >
            <span>I'm Still Angry</span>
            <span className="text-xl">😤</span>
          </button>
        </div>

        {/* Interactive Response Message Box */}
        <AnimatePresence mode="wait">
          {selectedResponse === 'okay' && (
            <motion.div
              key="okay-msg"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-rose-50 border border-rose-200 max-w-xl mx-auto shadow-sm"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <Sparkles className="w-5 h-5 text-rose-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-rose-800">
                  Thank You, Nidhi Meri Jaan
                </span>
                <Sparkles className="w-5 h-5 text-rose-500" />
              </div>
              <p className="text-base sm:text-lg font-serif italic text-rose-950 font-medium leading-relaxed">
                "Thank you for giving me a chance to talk, Nidhi meri jaan. I'll listen to you with an open heart. ❤️"
              </p>
              <div className="mt-3 flex items-center justify-center gap-2 text-xs text-rose-600 font-medium">
                <span>Sending 10,000 gentle kisses & hugs to Nidhi</span>
                <span>💋✨</span>
              </div>
            </motion.div>
          )}

          {selectedResponse === 'angry' && (
            <motion.div
              key="angry-msg"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -15 }}
              transition={{ duration: 0.4 }}
              className="p-6 rounded-2xl bg-purple-50 border border-purple-200 max-w-xl mx-auto shadow-sm"
            >
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-xl">🫂</span>
                <span className="text-xs font-bold uppercase tracking-wider text-purple-900">
                  Your Feelings Come First, Nidhi
                </span>
                <span className="text-xl">🫂</span>
              </div>
              <p className="text-base sm:text-lg font-serif italic text-purple-950 font-medium leading-relaxed">
                "That's okay, Nidhi. You have every right to feel what you feel. Take your time. I'm here when you're ready to talk. 🫂"
              </p>
              <div className="mt-4 p-3 rounded-xl bg-white/80 border border-purple-200/70 flex items-center justify-center gap-2 text-xs text-purple-800">
                <Coffee className="w-4 h-4 text-amber-600" />
                <span>Here is a warm blanket and hot chocolate for Nidhi while you take your time 🧸☕</span>
              </div>
            </motion.div>
          )}

          {!selectedResponse && (
            <p className="text-xs text-gray-400 italic">
              Tap either button above — neither button will run away or guilt-trip you.
            </p>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
