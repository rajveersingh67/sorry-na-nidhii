import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#180816] text-rose-200/80 py-12 px-4 border-t border-rose-900/40 relative z-10 text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center justify-center space-y-4">
        {/* Heart Icon */}
        <div className="flex items-center gap-2 text-rose-400">
          <Sparkles className="w-4 h-4 text-amber-300" />
          <Heart className="w-5 h-5 fill-rose-500 text-rose-500 animate-pulse" />
          <Sparkles className="w-4 h-4 text-amber-300" />
        </div>

        <p className="font-serif italic text-lg sm:text-xl text-rose-100 font-medium">
          "Made with all my heart for Nidhi, meri jaan ❤️"
        </p>

        <p className="text-xs sm:text-sm text-rose-300/60 max-w-md font-light leading-relaxed">
          Every word, every animation, and every small detail was created to show Nidhi how much she truly means to me. Take your time, Nidhi. I will always be right here.
        </p>

        <div className="pt-4 border-t border-rose-900/40 w-full max-w-xs text-[11px] text-rose-400/50 flex items-center justify-between">
          <span>Forever Your Silly Boy</span>
          <span>Dil Se 🥺💗</span>
        </div>
      </div>
    </footer>
  );
}
