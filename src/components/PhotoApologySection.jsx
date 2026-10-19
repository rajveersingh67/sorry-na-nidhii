import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';
import { WashiTapeSticker, DramaticCryingSticker, PrayingApologySticker } from './RomanticStickers';

export default function PhotoApologySection() {
  const cards = [
    {
      id: 'crying-emoji',
      image: '/assets/crying-emoji.jpg',
      alt: 'Crying emoji asking for forgiveness',
      caption: 'Me right now, asking for your forgiveness 🥺',
      description: 'Eyes watery and heart heavy, wishing I could turn back the clock to before I hurt you.',
      badge: 'Dil Se Sorry',
      badgeColor: 'bg-rose-100 text-rose-800 border-rose-200',
      tapeColor: 'pink',
      memeTag: 'Tears could fill an ocean 🌊😭',
      sticker: DramaticCryingSticker,
    },
    {
      id: 'bowing-man',
      image: '/assets/bowing-man.jpg',
      alt: 'Man bowing down in sincere apology',
      caption: "My ego doesn't matter more than your feelings.",
      description: 'Winning an argument means nothing if it costs me the smile that lights up my whole world.',
      badge: 'Zero Ego, 100% Love',
      badgeColor: 'bg-purple-100 text-purple-800 border-purple-200',
      tapeColor: 'purple',
      memeTag: 'Full Surrender 🏳️🙇‍♂️',
    },
    {
      id: 'kneeling-character',
      image: '/assets/kneeling-character.jpg',
      alt: '3D character kneeling and praying in apology',
      caption: "I'm genuinely sorry, Nidhi meri jaan. ❤️",
      description: 'On my knees, asking for your gentle patience while I learn to love you better every day.',
      badge: 'Only For Nidhi',
      badgeColor: 'bg-pink-100 text-pink-800 border-pink-200',
      tapeColor: 'peach',
      memeTag: 'कान पकड़ के सॉरी 🙏',
      sticker: PrayingApologySticker,
    },
  ];

  return (
    <section id="photos" className="py-20 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs sm:text-sm font-medium mb-3 border border-rose-200 shadow-xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-rose-500" />
          <span>From The Depths Of My Heart</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight"
        >
          My Regret, Shown Truly to Nidhi 🥺
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3 text-base text-gray-600 font-light"
        >
          If you could see inside my mind right now, you would see how much I wish I had never made you feel upset.
        </motion.p>
      </div>

      {/* 3 Apology Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
        {cards.map((card, index) => {
          const StickerComponent = card.sticker;

          return (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="glass-card rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative group overflow-visible border border-rose-200/70 hover:border-rose-400/80 hover:shadow-romantic-lg"
            >
              {/* Scrapbook washi tape in corner */}
              <div className="absolute -top-3 left-8 z-20">
                <WashiTapeSticker color={card.tapeColor} rotate={index % 2 === 0 ? '-6deg' : '5deg'} />
              </div>

              {/* Floating cute sticker in top corner */}
              {StickerComponent && (
                <div className="absolute -top-6 -right-4 z-20 hidden sm:block pointer-events-none">
                  <StickerComponent size={60} />
                </div>
              )}

              {/* Top Badge & Meme Tag */}
              <div className="flex items-center justify-between mb-4 pt-1">
                <span className={`text-[11px] font-semibold px-3 py-1 rounded-full border ${card.badgeColor}`}>
                  {card.badge}
                </span>
                <span className="text-[11px] bg-rose-50 border border-rose-200/80 text-rose-700 px-2 py-0.5 rounded-md font-medium">
                  {card.memeTag}
                </span>
              </div>

              {/* Image Container with preserved aspect ratio */}
              <div className="w-full bg-gradient-to-b from-white/95 to-rose-50/50 rounded-2xl p-4 flex items-center justify-center min-h-[220px] max-h-[260px] shadow-inner border border-rose-100/80 mb-6 overflow-hidden relative">
                <img
                  src={card.image}
                  alt={card.alt}
                  className="max-h-52 w-auto max-w-full object-contain filter drop-shadow-sm transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Caption & Description */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-bold text-lg sm:text-xl text-rose-950 leading-snug mb-2 group-hover:text-rose-600 transition-colors">
                    "{card.caption}"
                  </h3>
                  <p className="text-sm text-gray-600 font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                {/* Bottom Little Accent */}
                <div className="mt-5 pt-4 border-t border-rose-100/80 flex items-center justify-between text-xs text-rose-500/80 font-serif italic">
                  <span>With genuine remorse</span>
                  <span>Dil se 💗</span>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
