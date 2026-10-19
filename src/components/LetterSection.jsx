import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, RefreshCw, Feather } from 'lucide-react';
import { romanticAudio } from '../utils/soundEffects';
import { VelvetRoseSticker, FlyingLoveLetterSticker, WashiTapeSticker } from './RomanticStickers';

const FULL_LETTER_TEXT = `My Love Nidhi, Meri Pyaari Si Jaan... ❤️🥺

I know you're angry with me right now, and honestly, it hurts knowing that I am the reason behind your sadness. I keep thinking about everything, about your feelings, about your smile, and about how I wish I could go back and handle things differently.

Nidhi baby, I'm genuinely sorry. I'm not writing this just to make you stop being angry with me. I'm writing this because your feelings matter to me, and I never want you to feel like your emotions don't matter.

Sometimes I make mistakes. Sometimes I don't express myself properly, and sometimes I realize the importance of my words only after they have hurt the person I love the most. I know that saying sorry cannot magically erase what happened, and I don't expect everything to become okay instantly just because I made this website.

But I want you to know something from the bottom of my heart: you are incredibly special to me, Nidhi. Your happiness matters to me. Your tears matter to me. Your silence matters to me. Even when you're angry with me, I still care about what you're feeling.

Nidhi meri jaan, if my words hurt you, I'm sorry. If my actions made you feel ignored, unimportant, or misunderstood, I'm truly sorry.

You deserve patience, respect, understanding, honesty, and love. I want to become better at giving you those things, not only through sweet messages but through my actions too.

I don't want to win an argument and lose the smile that means so much to me. I'd rather listen to you, understand you, and learn from my mistakes than pretend that nothing happened.

I miss our happy moments, our silly conversations, our little jokes, and those moments when even the smallest things made us smile. I hope we can create many more beautiful memories together, but I also understand that you may need time before you're ready to smile with me again.

You don't have to forgive me immediately, Nidhi. Take your time. If you want to talk, I'll listen. If you need some space, I'll respect that too. I don't want you to feel pressured into forgiving me.

I just wanted to make something special for you because a simple 'sorry' didn't feel like enough to express everything I wanted to say.

So here's my little corner of the internet, made especially for Nidhi, the girl who means so much to me. Every heart, every animation, every little detail is my way of saying that I'm thinking about you and that I'm sorry.

Nidhi meri pyaari si jaan, please take care of that beautiful heart of yours. And when you're ready, I'd love the chance to listen to you, understand you better, and make things right.

I'm sorry, Nidhi. Dil se. ❤️

With all my love,
Your silly boy, who is hoping to earn back Nidhi's smile. 🥺💗`;

export default function LetterSection() {
  const [displayedLength, setDisplayedLength] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [hasStarted, setHasStarted] = useState(false);
  const letterRef = useRef(null);

  useEffect(() => {
    if (!hasStarted) return;
    if (!isTyping) {
      setDisplayedLength(FULL_LETTER_TEXT.length);
      return;
    }

    if (displayedLength < FULL_LETTER_TEXT.length) {
      const timeout = setTimeout(() => {
        const step = Math.min(FULL_LETTER_TEXT.length - displayedLength, Math.floor(Math.random() * 3) + 3);
        setDisplayedLength((prev) => prev + step);
      }, 22);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedLength, isTyping, hasStarted]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.15 }
    );

    if (letterRef.current) {
      observer.observe(letterRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  const handleReplay = () => {
    romanticAudio.playPaperSound();
    setDisplayedLength(0);
    setIsTyping(true);
    setHasStarted(true);
    if (letterRef.current) {
      letterRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleSkip = () => {
    romanticAudio.playChime();
    setDisplayedLength(FULL_LETTER_TEXT.length);
    setIsTyping(false);
  };

  const currentText = FULL_LETTER_TEXT.slice(0, displayedLength);

  return (
    <section
      id="letter"
      ref={letterRef}
      className="py-24 px-4 sm:px-6 max-w-4xl mx-auto relative z-10"
    >
      {/* Section Header */}
      <div className="text-center mb-12 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/90 text-rose-800 text-xs sm:text-sm font-medium mb-3 border border-rose-200 shadow-sm">
          <Feather className="w-3.5 h-3.5 text-rose-500" />
          <span>Handwritten Just For You</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-serif font-bold text-gray-900 tracking-tight">
          A Letter From My Heart 💌
        </h2>
        <p className="mt-2 text-sm sm:text-base text-gray-600 font-light">
          Written late at night, with every thought centered around you.
        </p>

        {/* Floating winged envelope sticker */}
        <div className="hidden sm:block absolute right-0 top-0 pointer-events-none">
          <FlyingLoveLetterSticker size={65} />
        </div>
      </div>

      {/* Romantic Paper Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative paper-card rounded-3xl p-6 sm:p-12 shadow-2xl border border-rose-200/80 overflow-visible"
      >
        {/* Washi Tapes on corners */}
        <div className="absolute -top-3 left-10 z-20">
          <WashiTapeSticker color="gold" rotate="-5deg" />
        </div>
        <div className="absolute -top-3 right-10 z-20">
          <WashiTapeSticker color="pink" rotate="6deg" />
        </div>

        {/* Vintage Top Ribbon & Wax Seal */}
        <div className="flex items-center justify-between border-b border-rose-200/60 pb-6 mb-8 pt-2">
          <div className="flex items-center gap-3">
            {/* Wax Seal Design */}
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-rose-700 via-rose-600 to-red-800 flex items-center justify-center text-white shadow-md border-2 border-rose-300/40 relative">
              <Heart className="w-6 h-6 fill-rose-100 text-rose-100" />
              <div className="absolute inset-0 rounded-full border border-dashed border-rose-200/40" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-rose-900">
                Private & Personal
              </p>
              <p className="text-[11px] text-rose-600/80 font-serif italic">
                To the girl who holds my heart
              </p>
            </div>
          </div>

          {/* Quick Action buttons */}
          <div className="flex items-center gap-2">
            {isTyping ? (
              <button
                onClick={handleSkip}
                className="text-xs px-3 py-1.5 rounded-full bg-rose-100 text-rose-800 hover:bg-rose-200 transition-colors font-medium flex items-center gap-1 cursor-pointer"
                title="Display whole letter immediately"
              >
                <span>Read All Instantly</span>
                <Sparkles className="w-3 h-3" />
              </button>
            ) : (
              <button
                onClick={handleReplay}
                className="text-xs px-3.5 py-1.5 rounded-full bg-gradient-to-r from-rose-500 to-pink-500 text-white hover:from-rose-600 hover:to-pink-600 transition-all shadow-sm flex items-center gap-1.5 font-medium transform hover:scale-105 cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Read My Letter Again 💌</span>
              </button>
            )}
          </div>
        </div>

        {/* The Letter Text Content */}
        <div className="relative font-serif text-gray-800 leading-relaxed text-base sm:text-lg whitespace-pre-line tracking-wide">
          {/* Subtle rose watermark */}
          <div className="absolute right-4 bottom-4 pointer-events-none opacity-5 select-none text-9xl">
            🌹
          </div>

          {/* Render formatted paragraphs */}
          <div className="space-y-4">
            {currentText.split('\n\n').map((paragraph, idx) => {
              const isGreeting = idx === 0;
              const isClosing = idx >= currentText.split('\n\n').length - 2;

              return (
                <p
                  key={idx}
                  className={`${
                    isGreeting
                      ? 'text-xl sm:text-2xl font-bold text-rose-900 font-handwriting tracking-normal mb-6'
                      : isClosing
                      ? 'font-handwriting text-lg sm:text-xl text-rose-950 font-bold pt-4'
                      : 'text-gray-700/90 leading-loose'
                  }`}
                >
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Realistic Typing Cursor */}
          {isTyping && (
            <span className="inline-block w-2 h-5 bg-rose-500 ml-1 translate-y-1 animate-pulse" />
          )}
        </div>

        {/* Cute Post-It Sticky Note Sticker on bottom corner */}
        <motion.div
          whileHover={{ rotate: 0, scale: 1.05 }}
          className="mt-8 p-4 rounded-xl bg-amber-100 border border-amber-300/80 shadow-md transform -rotate-2 max-w-sm relative"
        >
          <div className="w-3 h-3 rounded-full bg-red-400 absolute -top-1.5 left-1/2 -translate-x-1/2 shadow-xs" />
          <p className="font-handwriting text-base sm:text-lg text-amber-950 font-bold leading-snug">
            "P.S. Nidhi, you're still the prettiest girl in the world even when you're angry with me 🌸🥺"
          </p>
        </motion.div>

        {/* Replay Button & Pressed Rose at the Bottom */}
        <div className="mt-8 pt-6 border-t border-rose-200/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <VelvetRoseSticker size={40} />
            <p className="font-handwriting text-2xl text-rose-700">
              Always & Forever Yours, Nidhi ✨
            </p>
          </div>

          <button
            onClick={handleReplay}
            className="px-6 py-2.5 rounded-full text-sm font-semibold text-rose-800 bg-rose-100/80 hover:bg-rose-200/90 border border-rose-300/60 shadow-sm transition-all duration-200 flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RefreshCw className="w-4 h-4 text-rose-600" />
            <span>Read My Letter Again 💌</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}
