import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Feather, RotateCcw, CheckCircle2 } from 'lucide-react';
import { soundManager } from '../utils/sound';

const FULL_LETTER_PARAGRAPHS = [
  "Hey meri pyaari Nidhi... 🥺❤️",
  "Mujhe pata hai tum mujhse bahut gussa ho, aur shayad meri kisi baat se tumhara dil dukha hai.",
  "I am genuinely sorry, meri jaan. 💗",
  "Tum mere liye bahut special ho. Main kabhi nahi chahta ki meri wajah se tumhari smile kho jaaye.",
  "Main sirf sorry bolkar sab theek karne ka pretend nahi karna chahta. Main tumhari feelings samajhna chahta hoon aur apni galti sudhaarna chahta hoon.",
  "Tumhe jitna time chahiye, le lena. Main tumhari feelings aur space ki respect karunga.",
  "Bas jab tumhara mann kare, mujhe bata dena ki main kaise cheezein better kar sakta hoon.",
  "I am really, really sorry, Nidhi. 🥺🫶🏻",
  "Tumhari smile mere liye bahut precious hai. Aur agar abhi tum smile nahi kar paa rahi ho, toh main patiently uss smile ke wapas aane ka wait karunga.",
  "Sending you the biggest virtual hug ever! 🧸💗",
  "— Tumhara pagal sa person ❤️",
];

export default function ApologyLetter({ onGoToHug }) {
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);
  const [isTyping, setIsTyping] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!isTyping) {
      setDisplayedParagraphs(FULL_LETTER_PARAGRAPHS);
      return;
    }

    if (currentIndex < FULL_LETTER_PARAGRAPHS.length) {
      const timer = setTimeout(() => {
        setDisplayedParagraphs((prev) => [...prev, FULL_LETTER_PARAGRAPHS[currentIndex]]);
        setCurrentIndex((prev) => prev + 1);
      }, 750);
      return () => clearTimeout(timer);
    } else {
      setIsTyping(false);
    }
  }, [currentIndex, isTyping]);

  const handleReplay = () => {
    soundManager.playPop();
    setDisplayedParagraphs([]);
    setCurrentIndex(0);
    setIsTyping(true);
  };

  const handleShowAll = () => {
    soundManager.playPop();
    setDisplayedParagraphs(FULL_LETTER_PARAGRAPHS);
    setIsTyping(false);
  };

  const handleRequestHug = () => {
    soundManager.playChime();
    confetti({
      particleCount: 60,
      spread: 60,
      origin: { y: 0.7 },
      colors: ['#ff4d6d', '#ff758f', '#ffccd5'],
    });
    if (onGoToHug) {
      onGoToHug();
    } else {
      const el = document.getElementById('hug');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="apology" className="py-16 px-4 relative z-10 max-w-4xl mx-auto">
      {/* Section Title */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold border border-pink-200">
          <Feather className="w-4 h-4 text-pink-500" />
          <span>Section 3 • Dil Ki Baat</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-5xl font-bold text-pink-800">
          My Heartfelt Apology 💌
        </h2>
        <p className="text-sm sm:text-base text-pink-600 font-semibold max-w-md mx-auto">
          Every word written here is straight from my soul for you, Nidhi.
        </p>
      </div>

      {/* Decorative Letter Card with Vintage Paper Styling */}
      <div className="relative bg-[#FFFDF9] rounded-3xl p-6 sm:p-10 shadow-2xl border-2 border-pink-200/80 overflow-hidden">
        {/* Cute Washi Tapes on corners */}
        <div className="absolute -top-3 left-8 w-24 h-7 bg-pink-200/80 -rotate-6 rounded-sm shadow-sm backdrop-blur-sm pointer-events-none" />
        <div className="absolute -top-3 right-8 w-24 h-7 bg-rose-200/80 rotate-6 rounded-sm shadow-sm backdrop-blur-sm pointer-events-none" />

        {/* Vintage Stamp */}
        <div className="absolute top-6 right-6 hidden sm:flex flex-col items-center justify-center w-16 h-20 border-2 border-dashed border-pink-300 rounded-lg bg-pink-50/60 p-1 rotate-3 select-none">
          <Heart className="w-6 h-6 text-pink-500 fill-pink-400" />
          <span className="text-[9px] font-bold text-pink-600 mt-1 uppercase tracking-tighter">Nidhi's Heart</span>
          <span className="text-[8px] text-pink-400 font-mono">Special Post</span>
        </div>

        {/* Floating animated hearts on borders */}
        <div className="absolute top-1/4 -left-3 animate-float text-2xl select-none">💖</div>
        <div className="absolute bottom-1/3 -right-3 animate-float-slow text-2xl select-none">🌸</div>
        <div className="absolute top-2/3 -left-3 animate-wiggle text-2xl select-none">🧸</div>

        {/* Letter Header */}
        <div className="border-b border-pink-100 pb-4 mb-6 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-2xl">💌</span>
            <span className="font-romantic text-lg sm:text-xl text-pink-700">
              For my Dearest Nidhi
            </span>
          </div>

          {/* Typing Controls */}
          <div className="flex items-center gap-2">
            {isTyping ? (
              <button
                onClick={handleShowAll}
                className="text-xs bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-full font-bold flex items-center gap-1 transition-colors"
                title="Read entire letter at once"
              >
                <span>Read Instantly</span>
              </button>
            ) : (
              <button
                onClick={handleReplay}
                className="text-xs bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1 rounded-full font-bold flex items-center gap-1 transition-colors"
                title="Watch typing effect again"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Replay</span>
              </button>
            )}
          </div>
        </div>

        {/* Letter Body with Typing Animation */}
        <div className="space-y-4 text-left sm:px-4 font-body leading-relaxed text-[#4A3B47]">
          {displayedParagraphs.map((para, idx) => {
            const isHighlight =
              para.includes('I am genuinely sorry') ||
              para.includes('I am really, really sorry');
            const isSignature = para.startsWith('—');

            return (
              <p
                key={idx}
                className={`transition-all duration-500 text-base sm:text-lg ${
                  isHighlight
                    ? 'font-bold text-rose-600 text-lg sm:text-xl bg-pink-50/70 p-2.5 rounded-xl border-l-4 border-rose-400'
                    : isSignature
                    ? 'font-heading text-2xl sm:text-3xl font-bold text-pink-700 text-right pt-4'
                    : 'text-[#4A3B47]'
                }`}
              >
                {para}
              </p>
            );
          })}

          {isTyping && (
            <div className="flex items-center gap-2 text-pink-400 text-sm italic font-semibold pt-2">
              <span className="animate-spin text-base">✍️</span>
              <span>Janab is pouring his heart out for Nidhi...</span>
              <span className="inline-block w-2 h-4 bg-pink-500 animate-pulse" />
            </div>
          )}
        </div>

        {/* Bottom Call to Action Button */}
        <div className="mt-10 pt-6 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs text-pink-500 font-semibold">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span>Written with 100% genuine guilt & unconditional love</span>
          </div>

          <button
            onClick={handleRequestHug}
            className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-base shadow-lg shadow-pink-300 hover:shadow-xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2"
          >
            <span className="text-xl">🥹</span>
            <span>Ek Hug Milega? 🥹🫂</span>
            <Sparkles className="w-4 h-4 text-yellow-200" />
          </button>
        </div>
      </div>
    </section>
  );
}
