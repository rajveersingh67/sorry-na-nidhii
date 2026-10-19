import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pin, HeartHandshake, CheckCircle2, Sparkles, Heart } from 'lucide-react';
import { romanticAudio } from '../utils/soundEffects';

export default function PromiseWallSection() {
  const [sealedPromises, setSealedPromises] = useState({});

  const promises = [
    {
      id: 1,
      text: 'I will try to listen before reacting.',
      detail: 'When emotions run high, I will take a breath, quiet my defensive instincts, and truly hear what is hurting you.',
      rotation: '-rotate-2',
      tapeColor: 'bg-rose-200/80',
      pinColor: 'text-rose-500',
    },
    {
      id: 2,
      text: 'I will take your feelings seriously.',
      detail: 'Your emotions are never "too much" or unreasonable. If it matters to you, it automatically matters to me.',
      rotation: 'rotate-1',
      tapeColor: 'bg-purple-200/80',
      pinColor: 'text-purple-500',
    },
    {
      id: 3,
      text: 'I will communicate more honestly and clearly.',
      detail: 'No bottling things up, no silence that creates distance. I will speak with openness and gentle words.',
      rotation: '-rotate-1',
      tapeColor: 'bg-pink-200/80',
      pinColor: 'text-pink-500',
    },
    {
      id: 4,
      text: 'I will own my mistakes instead of making excuses.',
      detail: 'When I am wrong, I will admit it immediately. Protecting your peace is infinitely more important than my pride.',
      rotation: 'rotate-2',
      tapeColor: 'bg-amber-200/80',
      pinColor: 'text-amber-500',
    },
    {
      id: 5,
      text: 'I will show my love through consistent actions, not just words.',
      detail: 'Words are easy, but consistency is where love proves itself. I will show you every day that I value having you in my life.',
      rotation: '-rotate-1',
      tapeColor: 'bg-rose-300/80',
      pinColor: 'text-red-500',
    },
  ];

  const toggleSeal = (id) => {
    romanticAudio.playChime();
    setSealedPromises((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="promises" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs sm:text-sm font-medium mb-3 border border-rose-200">
          <HeartHandshake className="w-3.5 h-3.5 text-rose-500" />
          <span>Pinned Onto My Heart</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
          Things I Want To Do Better For Nidhi 🫶
        </h2>
        <p className="mt-3 text-base text-gray-600 font-light">
          I don't promise perfection, because I am human. But I promise honest effort, patience, and love that never quits on Nidhi.
        </p>
      </div>

      {/* Scrapbook Board Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 items-stretch">
        {promises.map((p, index) => {
          const isSealed = Boolean(sealedPromises[p.id]);

          return (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              whileHover={{ scale: 1.03, rotate: 0 }}
              onClick={() => toggleSeal(p.id)}
              className={`paper-card pin-shadow rounded-2xl p-6 sm:p-7 relative transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                p.rotation
              } ${isSealed ? 'ring-2 ring-rose-400 bg-rose-50/90' : ''} ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Pushpin / Washi Tape decoration at top */}
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center">
                <div className="w-6 h-6 rounded-full bg-gradient-to-tr from-amber-600 to-amber-300 shadow-md border-2 border-white flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/80" />
                </div>
              </div>

              {/* Decorative translucent washi tape */}
              <div
                className={`absolute -top-2 left-6 w-16 h-5 ${p.tapeColor} opacity-75 transform -rotate-6 rounded-sm shadow-xs pointer-events-none`}
              />

              <div className="pt-3">
                {/* Promise Number */}
                <span className="text-[11px] font-mono font-bold tracking-widest text-rose-400/90 uppercase mb-2 block">
                  Promise #{p.id}
                </span>

                {/* Sincere Title */}
                <h3 className="font-serif font-bold text-lg sm:text-xl text-gray-900 leading-snug mb-3">
                  "{p.text}"
                </h3>

                {/* Sincere Detail */}
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {p.detail}
                </p>
              </div>

              {/* Bottom Scrapbook Seal Toggle */}
              <div className="mt-6 pt-4 border-t border-rose-200/50 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-rose-800 font-serif italic">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Pinned with care</span>
                </div>

                <div
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium transition-all ${
                    isSealed
                      ? 'bg-rose-500 text-white shadow-sm'
                      : 'bg-rose-100 text-rose-800 hover:bg-rose-200'
                  }`}
                >
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{isSealed ? 'Sealed in heart' : 'Hold me to this'}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
