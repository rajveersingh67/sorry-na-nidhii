import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles, Smile, MessageCircleHeart, Flame, Compass } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/soundEffects';

export default function ReasonsSection() {
  const [likedCards, setLikedCards] = useState({});

  const reasons = [
    {
      num: '01',
      title: 'Your smile can make an ordinary day feel special.',
      tag: 'Pyaari Smile 🌸',
      description: 'Even on gray, exhausting days, one glimpse of your genuine smile changes my entire mood instantly.',
      icon: Smile,
      gradient: 'from-pink-500 to-rose-400',
    },
    {
      num: '02',
      title: 'Talking to you makes even the simplest moments meaningful.',
      tag: 'Our Conversations 💬',
      description: 'Random late-night thoughts, silly banter, or deep silent moments — sharing them with you feels like home.',
      icon: MessageCircleHeart,
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      num: '03',
      title: 'You have a special place in my heart that nobody else can fill.',
      tag: 'Irreplaceable Nidhi 🔐',
      description: 'You are not just a part of my life; you are the reason my heart feels so soft, full, and grounded.',
      icon: Heart,
      gradient: 'from-rose-500 to-red-500',
    },
    {
      num: '04',
      title: 'The little things about you are often the things I cherish most.',
      tag: 'Sweet Details ✨',
      description: 'The little pauses in your voice, the way you care, your expressions, and that tender sweetness unique only to you.',
      icon: Sparkles,
      gradient: 'from-amber-400 to-rose-400',
    },
    {
      num: '05',
      title: 'Even when things are difficult, I want to learn, grow, and become a better partner.',
      tag: 'Growing Together 🤝',
      description: 'I will never walk away from our bond. I want to become the person who makes you feel safe, heard, and cherished.',
      icon: Compass,
      gradient: 'from-rose-600 to-purple-600',
    },
  ];

  const handleCardClick = (e, index) => {
    romanticAudio.playChime();
    setLikedCards((prev) => ({
      ...prev,
      [index]: (prev[index] || 0) + 1,
    }));

    // Trigger local heart burst at click position
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 25,
      spread: 60,
      origin: { x, y },
      colors: ['#FB6F92', '#FFB3C6', '#E01E5A', '#F4D06F'],
      shapes: ['heart'],
      scalar: 1.1,
    });
  };

  return (
    <section id="reasons" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs sm:text-sm font-medium mb-3 border border-rose-200">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
          <span>Just A Few Truths</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
          5 Little Reasons Nidhi Means So Much To Me 💖
        </h2>
        <p className="mt-3 text-base text-gray-600 font-light">
          Tap any card to send a heart burst. Every single one is true.
        </p>
      </div>

      {/* 5 Reasons Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {reasons.map((item, index) => {
          const IconComponent = item.icon;
          const likes = likedCards[index] || 0;

          return (
            <motion.div
              key={item.num}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
              onClick={(e) => handleCardClick(e, index)}
              className={`glass-card rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-romantic cursor-pointer transition-all duration-300 relative group flex flex-col justify-between overflow-hidden ${
                index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {/* Background ambient corner shine */}
              <div className="absolute -top-12 -right-12 w-28 h-28 rounded-full bg-gradient-to-br from-rose-200/30 to-transparent blur-xl pointer-events-none group-hover:scale-150 transition-transform duration-500" />

              <div>
                {/* Header row: Number & Tag */}
                <div className="flex items-center justify-between mb-5">
                  <span className={`text-2xl font-serif font-bold bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.num}
                  </span>

                  <span className="text-[11px] font-semibold px-3 py-1 rounded-full bg-rose-100/70 text-rose-800 border border-rose-200/60">
                    {item.tag}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-serif font-bold text-gray-900 leading-snug mb-3 group-hover:text-rose-600 transition-colors">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom Interactive Area */}
              <div className="mt-6 pt-4 border-t border-rose-100/80 flex items-center justify-between">
                <div className="flex items-center gap-1.5 text-xs text-rose-700/80 font-medium">
                  <IconComponent className="w-4 h-4 text-rose-500" />
                  <span>Click to send love</span>
                </div>

                <div className="flex items-center gap-1 bg-white/80 px-2.5 py-1 rounded-full border border-rose-200/60 text-xs font-semibold text-rose-600 group-hover:bg-rose-50 transition-colors">
                  <Heart className={`w-3.5 h-3.5 ${likes > 0 ? 'text-rose-600 fill-rose-600 animate-bounce' : 'text-rose-400'}`} />
                  <span>{likes > 0 ? `${likes} ❤️` : 'Tap me'}</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
