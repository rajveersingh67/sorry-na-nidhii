import React from 'react';
import { Heart, ArrowUp, Sparkles } from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function Footer() {
  const scrollToTop = () => {
    soundManager.playPop();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-4 relative z-10 text-center border-t border-pink-200/60 bg-white/40 backdrop-blur-md">
      <div className="max-w-4xl mx-auto space-y-4">
        {/* Soft Heartbeat Icon */}
        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-100 text-rose-500 animate-heartbeat shadow-sm">
          <Heart className="w-6 h-6 fill-rose-500" />
        </div>

        {/* Closing Note */}
        <p className="font-heading text-2xl sm:text-3xl text-pink-700 font-bold">
          "Hamesha tumhara, chahe tum gussa raho ya muskurao."
        </p>

        <p className="text-xs sm:text-sm text-pink-600/80 font-semibold max-w-md mx-auto">
          Crafted with 100% pure love, genuine remorse, and endless patience exclusively for my girl,{' '}
          <span className="text-rose-600 font-bold">Nidhi 💗</span>
        </p>

        <div className="text-xs text-pink-400 font-mono pt-2">
          Made for Nidhi • Tumhara Pagal Sa Person ❤️
        </div>

        {/* Scroll To Top Button */}
        <div className="pt-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/80 hover:bg-pink-100 text-pink-700 text-xs font-bold border border-pink-200 shadow-sm transition-all hover:scale-105 active:scale-95"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Back to Top 🧸</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
