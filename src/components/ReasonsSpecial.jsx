import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Star, Smile, ShieldCheck, HeartHandshake, Eye } from 'lucide-react';
import { soundManager } from '../utils/sound';

const REASONS = [
  {
    id: 1,
    icon: '💌',
    title: 'Favourite Notification',
    quote: 'Your smile is my favourite notification. 💌',
    deepNote: 'Phone par koi bhi message aaye, par jab tumhara text aata hai na, mera chehra apne aap khil uthta hai.',
    color: 'from-pink-500 to-rose-400',
  },
  {
    id: 2,
    icon: '🥹',
    title: 'Top Priority',
    quote: 'Tumhari happiness mere liye important hai. 🥹',
    deepNote: 'Main duniya ki koi bhi khushi de sakta hoon, bas tum khush raho. Tumhara udas hona mujhe andar se tod deta hai.',
    color: 'from-rose-500 to-pink-600',
  },
  {
    id: 3,
    icon: '❤️',
    title: 'Deserving of Pure Love',
    quote: 'You deserve love, respect, and understanding. ❤️',
    deepNote: 'Aap sirf ordinary pyaar nahi, balki respect, care aur patient understanding deserve karti ho.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 4,
    icon: '🫶🏻',
    title: 'Cute Even When Angry',
    quote: 'Tum gussa bhi hoti ho toh cute lagti ho, par main tumhara gussa lightly nahi leta. 🫶🏻',
    deepNote: 'Haan sach mein tum gusse mein bohot pyaari lagti ho, lekin tumhari takleef mere liye mazak nahi hai.',
    color: 'from-pink-600 to-rose-500',
  },
  {
    id: 5,
    icon: '💗',
    title: 'Constantly Learning',
    quote: 'I want to become better at understanding you. 💗',
    deepNote: 'Main har roz seekh raha hoon ki kaise tumhari feelings ko aur achhe se samjhun aur tumhari respect karun.',
    color: 'from-rose-400 to-pink-500',
  },
  {
    id: 6,
    icon: '🌷',
    title: 'Feelings Matter Always',
    quote: 'Tumhari feelings matter karti hain, always. 🌷',
    deepNote: 'Chahe jo bhi ho, tumhari har ek baat, har ek chinta aur har ek feeling mere liye sabse upar hai.',
    color: 'from-pink-500 to-purple-500',
  },
];

export default function ReasonsSpecial() {
  const [clickedCards, setClickedCards] = useState({});

  const handleCardClick = (id) => {
    soundManager.playPop();
    setClickedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));

    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.7 },
      colors: ['#ff4d6d', '#ff8fa3', '#ffc2d1', '#ffd166'],
    });
  };

  return (
    <section id="special" className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-10 space-y-2">
        <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold border border-pink-200">
          <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
          <span>Section 7 • You Mean The World To Me</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-pink-800">
          Reasons Why Nidhi Is Special 💗
        </h2>
        <p className="text-sm sm:text-base text-pink-600 font-semibold max-w-md mx-auto">
          Tap each card to feel the love and see why you are irreplaceable in my life.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REASONS.map((item) => {
          const isExpanded = clickedCards[item.id];

          return (
            <div
              key={item.id}
              onClick={() => handleCardClick(item.id)}
              className={`glass-card p-6 sm:p-7 rounded-3xl cursor-pointer transition-all duration-300 relative group overflow-hidden border-2 select-none ${
                isExpanded
                  ? 'border-pink-400 bg-gradient-to-br from-white via-pink-50 to-rose-50 shadow-xl shadow-pink-200/50 scale-[1.02]'
                  : 'border-pink-200/80 bg-white/80 hover:border-pink-300 hover:shadow-lg hover:-translate-y-1'
              }`}
            >
              {/* Top Accent Icon & Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-4xl filter drop-shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </span>
                <span className="text-[11px] font-bold text-pink-600 bg-pink-100/80 px-3 py-1 rounded-full border border-pink-200">
                  {item.title}
                </span>
              </div>

              {/* Main Required Quote */}
              <blockquote className="font-heading text-2xl sm:text-2xl font-bold text-pink-900 leading-snug mb-3">
                "{item.quote}"
              </blockquote>

              {/* Detailed heart explanation toggle */}
              <div
                className={`transition-all duration-500 overflow-hidden text-xs sm:text-sm font-body text-[#4A3B47] leading-relaxed pt-2 border-t border-pink-100 ${
                  isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p className="font-semibold text-rose-700 bg-pink-50/80 p-3 rounded-xl border border-pink-200/60 mt-1">
                  {item.deepNote}
                </p>
              </div>

              {/* Card Footer Hint */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-bold text-pink-400 group-hover:text-pink-600 transition-colors">
                <span>{isExpanded ? 'Tap to close 💗' : 'Tap to read more 💌'}</span>
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
              </div>
            </div>
          );
        })}
      </div>

      {/* Bonus Infinite Reasons Banner */}
      <div className="mt-8 text-center">
        <div className="inline-block bg-gradient-to-r from-pink-500 via-rose-500 to-purple-500 text-white p-4 sm:px-8 sm:py-4 rounded-3xl shadow-lg shadow-pink-300/50 text-sm sm:text-base font-bold">
          ✨ Aur aise hazaaron reasons hain meri Nidhi, jo shabdon mein bayan nahi ho sakte! 🧸💖
        </div>
      </div>
    </section>
  );
}
