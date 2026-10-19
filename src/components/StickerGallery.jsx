import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Heart, Filter } from 'lucide-react';
import { soundManager } from '../utils/sound';

const STICKERS = [
  // 1. Uploaded Crying & Praying Emoji
  {
    id: 1,
    category: 'pleading',
    type: 'image',
    src: '/images/emoji_crying_praying.jpg',
    name: 'Pleading Emoji',
    dialogue: 'Nidhi pleaseee maan jao na, dekho kitne aansu baha raha hoon! 😭🙏',
    emoji: '🥺',
  },
  // 2. Uploaded Kneeling 3D Figure
  {
    id: 2,
    category: 'pleading',
    type: 'image',
    src: '/images/kneeling_praying_3d.jpg',
    name: 'Ghutne Par Sorry',
    dialogue: 'Janab ghutne par baith kar aapse maafi maang rahe hain! 🧎‍♂️🥺',
    emoji: '🧎‍♂️',
  },
  // 3. Uploaded Dogeza Apology Meme
  {
    id: 3,
    category: 'pleading',
    type: 'image',
    src: '/images/dogeza_apology_prostrating.jpg',
    name: 'Zameen Par Prostrating',
    dialogue: 'Extreme Dogeza Apology! Zameen par jhuk kar sorry bolta hoon! 🙇‍♂️❤️',
    emoji: '🙇‍♂️',
  },
  // 4. Praying hands
  {
    id: 4,
    category: 'pleading',
    type: 'emoji',
    icon: '🙏🏻',
    name: 'Both Hands Praying',
    dialogue: 'Haath jod ke dil se maafi maang raha hoon meri jaan 🙏🏻💗',
  },
  // 5. Crying river emoji
  {
    id: 5,
    category: 'pleading',
    type: 'emoji',
    icon: '😭',
    name: 'Puddle of Tears',
    dialogue: 'Tumhare gusse se mera dil ro raha hai... Please forgive me! 💧🥺',
  },
  // 6. Blushing puppy eyes
  {
    id: 6,
    category: 'pleading',
    type: 'emoji',
    icon: '🥹',
    name: 'Puppy Eyes',
    dialogue: 'Ek baar pyaar se dekh lo na Nidhi, dekho kitni masoom aankhein hain! 🥹✨',
  },
  // 7. Teddy holding beating heart
  {
    id: 7,
    category: 'hugs',
    type: 'emoji',
    icon: '🧸',
    name: 'Teddy with Heart',
    dialogue: 'Yeh teddy keh raha hai ki Nidhi sabse pyaari hai! 🧸💖',
  },
  // 8. Fluffy bunny cuddle
  {
    id: 8,
    category: 'hugs',
    type: 'emoji',
    icon: '🐰',
    name: 'Fluffy Bunny',
    dialogue: 'Soft bunny hug incoming directly to wrap you in warmth! 🐰🌸',
  },
  // 9. Two bears hugging
  {
    id: 9,
    category: 'hugs',
    type: 'emoji',
    icon: '🫂',
    name: 'Infinite Tight Hug',
    dialogue: 'A tighttt wala hug that melts away all sadness! 🫂💗',
  },
  // 10. Flying Kiss Bunny
  {
    id: 10,
    category: 'romance',
    type: 'emoji',
    icon: '😚',
    name: 'Gentle Forehead Kiss',
    dialogue: 'Forehead kiss on your forehead to make all worries vanish! 💋❤️',
  },
  // 11. Red Kiss Mark
  {
    id: 11,
    category: 'romance',
    type: 'emoji',
    icon: '💋',
    name: 'Sweet Kiss',
    dialogue: 'A million sweet kisses for meri dearest Nidhi! 💋✨',
  },
  // 12. Sparkle Heart
  {
    id: 12,
    category: 'romance',
    type: 'emoji',
    icon: '💖',
    name: 'Sparkling Heart',
    dialogue: 'Mera dil tumhare liye hamesha sparkle karta hai! 💖✨',
  },
  // 13. Beating Heart
  {
    id: 13,
    category: 'romance',
    type: 'emoji',
    icon: '💓',
    name: 'Beating Heart',
    dialogue: 'Dhak-dhak sirf Nidhi ke naam par! 💓',
  },
  // 14. Heart with Ribbon
  {
    id: 14,
    category: 'romance',
    type: 'emoji',
    icon: '💝',
    name: 'Gifted Heart',
    dialogue: 'Mera dil permanently tumhare paas safely packed hai! 💝🎀',
  },
  // 15. Pink Tulip
  {
    id: 15,
    category: 'sweetness',
    type: 'emoji',
    icon: '🌷',
    name: 'Apology Tulip',
    dialogue: 'Fresh tulip flowers for my prettiest girl! 🌷🌸',
  },
  // 16. Cherry Blossom
  {
    id: 16,
    category: 'sweetness',
    type: 'emoji',
    icon: '🌸',
    name: 'Cherry Blossom',
    dialogue: 'Tumhari smile bloom karti hai toh duniya beautiful ho jaati hai! 🌸',
  },
  // 17. Love Letter with Wings
  {
    id: 17,
    category: 'romance',
    type: 'emoji',
    icon: '💌',
    name: 'Flying Love Letter',
    dialogue: 'Yeh chitthi tumhare gusse ko pyaar mein badal degi! 💌🕊️',
  },
  // 18. Shy Blushing Face
  {
    id: 18,
    category: 'pleading',
    type: 'emoji',
    icon: '🙈',
    name: 'Shy & Ashamed',
    dialogue: 'Apni harkat par sharminda hoon... Ab muskura bhi do! 🙈🥺',
  },
  // 19. Pinky Promise
  {
    id: 19,
    category: 'romance',
    type: 'emoji',
    icon: '🤙',
    name: 'Pinky Promise',
    dialogue: 'Saccha wala pinky promise, aage se tumhe hurt nahi hone doonga! 🤙💗',
  },
  // 20. Cute Pink Ribbon
  {
    id: 20,
    category: 'sweetness',
    type: 'emoji',
    icon: '🎀',
    name: 'Coquette Bow',
    dialogue: 'Cute ribbon for meri princess Nidhi! 🎀✨',
  },
  // 21. Band-aid on Heart (Healing)
  {
    id: 21,
    category: 'sweetness',
    type: 'emoji',
    icon: '🩹',
    name: 'Healing Band-Aid',
    dialogue: 'Tumhare har dukh par pyaar ka marham lagane aaya hoon! 🩹❤️',
  },
  // 22. Cute Panda
  {
    id: 22,
    category: 'hugs',
    type: 'emoji',
    icon: '🐼',
    name: 'Sleepy Panda',
    dialogue: 'Panda jaisa lazy hoon, par tumhare liye sit-ups bhi kar raha hoon! 🐼💤',
  },
  // 23. Sweet Strawberry
  {
    id: 23,
    category: 'sweetness',
    type: 'emoji',
    icon: '🍓',
    name: 'Sweet Strawberry',
    dialogue: 'Sweet sweet treat for the sweetest girl in the universe! 🍓🍰',
  },
  // 24. Twinkling Stars
  {
    id: 24,
    category: 'sweetness',
    type: 'emoji',
    icon: '✨',
    name: 'Magic Dust',
    dialogue: 'Magic dust to blow away all negative moods! ✨🪄',
  },
  // 25. Warm Cocoa Mug
  {
    id: 25,
    category: 'hugs',
    type: 'emoji',
    icon: '☕',
    name: 'Warm Cocoa',
    dialogue: 'Ek cup hot chocolate aur meri dher saari baatein jab tum ready ho! ☕💕',
  },
  // 26. Cute Kitten Begging
  {
    id: 26,
    category: 'pleading',
    type: 'emoji',
    icon: '🐱',
    name: 'Boba Eyes Kitty',
    dialogue: 'Meowww... Nidhi please forgive your silly human! 🐱🐾',
  },
  // 27. Cloud Raining Hearts
  {
    id: 27,
    category: 'sweetness',
    type: 'emoji',
    icon: '🌧️',
    name: 'Heart Shower',
    dialogue: 'Dil se pyaar ki barish ho rahi hai sirf tumhare liye! 🌧️💖',
  },
  // 28. Innocent Angel
  {
    id: 28,
    category: 'pleading',
    type: 'emoji',
    icon: '👼',
    name: 'Little Angel',
    dialogue: 'Tum meri angel ho, aur main tumhara galti karne wala mortal! 👼🤍',
  },
  // 29. Sweet Ice Cream
  {
    id: 29,
    category: 'sweetness',
    type: 'emoji',
    icon: '🍨',
    name: 'Ice Cream Offer',
    dialogue: 'Tumhara favourite ice cream flavor order karoon kya? 🍨😋',
  },
  // 30. Forever Lock & Key
  {
    id: 30,
    category: 'romance',
    type: 'emoji',
    icon: '🔐',
    name: 'Heart Lock',
    dialogue: 'Mera dil permanently Nidhi ke paas locked hai! 🔐❤️',
  },
];

export default function StickerGallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedSticker, setSelectedSticker] = useState(null);

  const categories = [
    { id: 'all', label: 'All Stickers (30) ✨' },
    { id: 'pleading', label: 'Apologies & Pleading 🥺' },
    { id: 'hugs', label: 'Cuddles & Hugs 🧸' },
    { id: 'romance', label: 'Love & Romance 💖' },
    { id: 'sweetness', label: 'Flowers & Sweets 🌸' },
  ];

  const filteredStickers =
    activeCategory === 'all'
      ? STICKERS
      : STICKERS.filter((s) => s.category === activeCategory);

  const handleStickerClick = (sticker) => {
    soundManager.playPop();
    setSelectedSticker(sticker);

    confetti({
      particleCount: 25,
      spread: 45,
      origin: { y: 0.75 },
      colors: ['#ff4d6d', '#ff8fa3', '#ffc2d1', '#ffd166'],
    });
  };

  return (
    <section id="stickers" className="py-20 px-4 relative z-10 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold border border-pink-200">
          <Sparkles className="w-4 h-4 text-pink-500" />
          <span>Section 6 • Kawaii Emotion Vault</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-pink-700">
          Cute Sticker Gallery 🐻✨
        </h2>
        <p className="text-sm sm:text-base text-pink-600 font-semibold max-w-lg mx-auto">
          Tap or click any sticker to hear what it has to say to you! Every single one wants to make you smile.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => {
              soundManager.playPop();
              setActiveCategory(cat.id);
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
              activeCategory === cat.id
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-300 scale-105'
                : 'bg-white/80 text-pink-700 border border-pink-200 hover:bg-pink-100/60'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Active Dialogue Popup / Toast */}
      {selectedSticker && (
        <div className="mb-8 max-w-md mx-auto animate-float">
          <div className="bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white p-4 rounded-3xl shadow-xl shadow-pink-300 flex items-center gap-3">
            <div className="text-3xl shrink-0 bg-white/20 p-2 rounded-2xl">
              {selectedSticker.type === 'image' ? (
                <img
                  src={selectedSticker.src}
                  alt={selectedSticker.name}
                  className="w-8 h-8 rounded-full object-cover"
                />
              ) : (
                selectedSticker.icon
              )}
            </div>
            <div className="text-left text-xs sm:text-sm font-bold leading-relaxed flex-1">
              <span className="block text-[11px] text-pink-200 uppercase font-extrabold tracking-wide">
                {selectedSticker.name} speaks:
              </span>
              "{selectedSticker.dialogue}"
            </div>
            <button
              onClick={() => setSelectedSticker(null)}
              className="text-white/80 hover:text-white font-bold text-xs bg-white/10 hover:bg-white/20 p-1.5 rounded-full"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {/* Stickers Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-3 sm:gap-4">
        {filteredStickers.map((sticker) => {
          const isSelected = selectedSticker?.id === sticker.id;

          return (
            <div
              key={sticker.id}
              onClick={() => handleStickerClick(sticker)}
              className={`glass-card p-3 rounded-2xl flex flex-col items-center justify-center cursor-pointer transition-all duration-300 relative group select-none ${
                isSelected
                  ? 'border-2 border-rose-400 bg-pink-100/90 scale-105 shadow-lg shadow-pink-300/50'
                  : 'hover:border-pink-300 hover:bg-white/95 hover:-translate-y-1 hover:shadow-md'
              }`}
            >
              {/* Sticker Content */}
              <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center transform group-hover:scale-115 transition-transform duration-300">
                {sticker.type === 'image' ? (
                  <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-pink-300 shadow-sm">
                    <img
                      src={sticker.src}
                      alt={sticker.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <span className="text-3xl sm:text-4xl filter drop-shadow-sm group-hover:animate-wiggle">
                    {sticker.icon}
                  </span>
                )}
              </div>

              {/* Title */}
              <span className="text-[11px] font-bold text-pink-800 text-center mt-2 line-clamp-1">
                {sticker.name}
              </span>

              {/* Cute hover badge */}
              <span className="text-[9px] text-pink-400 font-semibold group-hover:text-pink-600 transition-colors">
                Tap me! 💖
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
