import React from 'react';
import { motion } from 'framer-motion';

// 1. Puppy Eyes Pleading Sticker (Interactive Kawaii Shimmer)
export function PuppyEyesSticker({ className = '', size = 80 }) {
  return (
    <motion.div
      animate={{ y: [0, -6, 0], rotate: [-2, 2, -2] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Soft yellow/cream face */}
        <circle cx="50" cy="50" r="42" fill="#FFEAA7" stroke="#FDCB6E" strokeWidth="3" />
        {/* Rosy blush cheeks */}
        <ellipse cx="25" cy="58" rx="8" ry="5" fill="#FF7675" opacity="0.6" />
        <ellipse cx="75" cy="58" rx="8" ry="5" fill="#FF7675" opacity="0.6" />
        {/* Big Pleading Left Eye */}
        <circle cx="34" cy="42" r="14" fill="#2D3436" />
        <circle cx="31" cy="38" r="5" fill="white" />
        <circle cx="38" cy="46" r="2.5" fill="white" />
        <circle cx="28" cy="46" r="1.5" fill="white" />
        {/* Big Pleading Right Eye */}
        <circle cx="66" cy="42" r="14" fill="#2D3436" />
        <circle cx="63" cy="38" r="5" fill="white" />
        <circle cx="70" cy="46" r="2.5" fill="white" />
        <circle cx="60" cy="46" r="1.5" fill="white" />
        {/* Wobbly sad cute mouth */}
        <path d="M43 64 Q50 58 57 64" stroke="#2D3436" strokeWidth="3" strokeLinecap="round" fill="none" />
        {/* Puppy eyebrows */}
        <path d="M26 26 Q35 22 40 28" stroke="#D63031" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M74 26 Q65 22 60 28" stroke="#D63031" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Tiny sparkle tear on cheek */}
        <motion.path
          animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          d="M74 65 C74 65 77 69 77 71 C77 73 75.5 74 74 74 C72.5 74 71 73 71 71 C71 69 74 65 74 65 Z"
          fill="#74B9FF"
        />
      </svg>
    </motion.div>
  );
}

// 2. Dramatic Crying Waterfall Tears Sticker
export function DramaticCryingSticker({ className = '', size = 90 }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0], scale: [1, 1.03, 1] }}
      transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Face */}
        <circle cx="50" cy="48" r="40" fill="#FFEAA7" stroke="#FDCB6E" strokeWidth="3" />
        {/* Closed weeping eyes ^ ^ */}
        <path d="M28 42 Q36 34 44 42" stroke="#2D3436" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        <path d="M56 42 Q64 34 72 42" stroke="#2D3436" strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* Wide open crying mouth */}
        <path d="M38 56 Q50 78 62 56 Z" fill="#D63031" stroke="#2D3436" strokeWidth="2" />
        <path d="M44 64 Q50 68 56 64" fill="#FF7675" />
        {/* Dramatic Waterfall Tears Left */}
        <motion.path
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut' }}
          d="M32 44 C26 50 24 75 28 92 C32 94 38 94 40 92 C36 75 36 50 36 44 Z"
          fill="#0984E3"
          opacity="0.85"
        />
        {/* Dramatic Waterfall Tears Right */}
        <motion.path
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 0.8, repeat: Infinity, ease: 'easeInOut', delay: 0.2 }}
          d="M68 44 C64 50 64 75 60 92 C62 94 68 94 72 92 C76 75 74 50 68 44 Z"
          fill="#0984E3"
          opacity="0.85"
        />
      </svg>
    </motion.div>
  );
}

// 3. Funny Sit-ups Apology / Workout Sticker (Boy doing sit-ups with sweat drops)
export function SitupsWorkoutSticker({ className = '', size = 95 }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-3, 3, -3] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Head */}
        <circle cx="50" cy="38" r="22" fill="#FFEAA7" stroke="#FDCB6E" strokeWidth="2.5" />
        {/* Hair */}
        <path d="M30 36 C30 20 70 20 70 36 C65 26 55 24 50 25 C45 24 35 26 30 36 Z" fill="#2D3436" />
        {/* Red headband */}
        <rect x="29" y="30" width="42" height="7" rx="3" fill="#E84393" />
        {/* Holding ears hands */}
        <circle cx="26" cy="38" r="6" fill="#FDCB6E" stroke="#E17055" strokeWidth="1.5" />
        <circle cx="74" cy="38" r="6" fill="#FDCB6E" stroke="#E17055" strokeWidth="1.5" />
        {/* Squinting tired apology eyes */}
        <path d="M40 38 L45 42 L40 46" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M60 38 L55 42 L60 46" stroke="#2D3436" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        {/* Exhausted open mouth */}
        <ellipse cx="50" cy="49" rx="4" ry="5" fill="#D63031" />
        {/* Sweat drops flying */}
        <motion.path
          animate={{ y: [-3, 3, -3], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 1.2, repeat: Infinity }}
          d="M78 24 C78 24 83 29 83 32 C83 35 80.5 37 78 37 C75.5 37 73 35 73 32 C73 29 78 24 78 24 Z"
          fill="#00CEC9"
        />
        <motion.path
          animate={{ y: [2, -4, 2], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1.4, repeat: Infinity, delay: 0.3 }}
          d="M22 22 C22 22 26 26 26 29 C26 31.5 24 33 22 33 C20 33 18 31.5 18 29 C18 26 22 22 22 22 Z"
          fill="#74B9FF"
        />
        {/* Body doing squat/situp */}
        <path d="M42 60 L35 75 L45 88" stroke="#0984E3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M58 60 L65 75 L55 88" stroke="#0984E3" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M50 60 L50 78" stroke="#2D3436" strokeWidth="8" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

// 4. Sweat Drop 3D Sticker
export function SweatDropSticker({ className = '', size = 32 }) {
  return (
    <motion.div
      animate={{ y: [0, 4, 0], scale: [1, 1.15, 1] }}
      transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 50 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path
          d="M25 5 C25 5 45 30 45 42 C45 52 36 60 25 60 C14 60 5 52 5 42 C5 30 25 5 25 5 Z"
          fill="url(#sweatGrad)"
        />
        <ellipse cx="18" cy="40" rx="5" ry="9" fill="white" opacity="0.65" transform="rotate(-20 18 40)" />
        <defs>
          <linearGradient id="sweatGrad" x1="25" y1="5" x2="25" y2="60" gradientUnits="userSpaceOnUse">
            <stop stopColor="#74B9FF" />
            <stop offset="1" stopColor="#0984E3" />
          </linearGradient>
        </defs>
      </svg>
    </motion.div>
  );
}

// 5. Praying Apology Sticker (Cute Bunny / Bear with Folded Hands)
export function PrayingApologySticker({ className = '', size = 85 }) {
  return (
    <motion.div
      animate={{ y: [0, -5, 0], scale: [1, 1.02, 1] }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Bunny Ears */}
        <ellipse cx="38" cy="22" rx="7" ry="18" fill="#FFF" stroke="#FFB3C6" strokeWidth="2.5" transform="rotate(-10 38 22)" />
        <ellipse cx="38" cy="22" rx="3.5" ry="12" fill="#FFCCD5" transform="rotate(-10 38 22)" />
        <ellipse cx="62" cy="22" rx="7" ry="18" fill="#FFF" stroke="#FFB3C6" strokeWidth="2.5" transform="rotate(10 62 22)" />
        <ellipse cx="62" cy="22" rx="3.5" ry="12" fill="#FFCCD5" transform="rotate(10 62 22)" />
        {/* Head */}
        <circle cx="50" cy="50" r="32" fill="#FFF" stroke="#FFB3C6" strokeWidth="3" />
        {/* Eyes closed praying */}
        <path d="M38 46 Q43 51 48 46" stroke="#4A154B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M52 46 Q57 51 62 46" stroke="#4A154B" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Nose and blushing mouth */}
        <polygon points="50,53 48,51 52,51" fill="#FF7675" />
        <path d="M47 56 Q50 58 53 56" stroke="#4A154B" strokeWidth="2" strokeLinecap="round" fill="none" />
        {/* Cheeks */}
        <circle cx="34" cy="53" r="5" fill="#FFB3C6" opacity="0.7" />
        <circle cx="66" cy="53" r="5" fill="#FFB3C6" opacity="0.7" />
        {/* Praying Hands Pressed Together */}
        <path d="M44 68 C44 62 50 60 50 60 C50 60 56 62 56 68 L53 78 L47 78 Z" fill="#FFEAA7" stroke="#FDCB6E" strokeWidth="2" />
        {/* Floating Halo of Hearts */}
        <motion.path
          animate={{ scale: [0.8, 1.1, 0.8], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          d="M50 14 C50 14 47 11 44 11 C41 11 39 13.5 39 16 C39 20 45 23 50 26 C55 23 61 20 61 16 C61 13.5 59 11 56 11 C53 11 50 14 50 14 Z"
          fill="#FB6F92"
        />
      </svg>
    </motion.div>
  );
}

// 6. Warm Squishy Hug Sticker
export function BigWarmHugSticker({ className = '', size = 90 }) {
  return (
    <motion.div
      animate={{ scale: [1, 1.05, 1], rotate: [-2, 2, -2] }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Left Bear (Brown) */}
        <circle cx="38" cy="50" r="26" fill="#D4A373" stroke="#CCD5AE" strokeWidth="2" />
        <circle cx="20" cy="32" r="8" fill="#D4A373" />
        <circle cx="20" cy="32" r="4" fill="#FAEDCD" />
        {/* Right Bear (White/Cream) */}
        <circle cx="62" cy="50" r="26" fill="#FEFAE0" stroke="#CCD5AE" strokeWidth="2" />
        <circle cx="80" cy="32" r="8" fill="#FEFAE0" />
        <circle cx="80" cy="32" r="4" fill="#FAEDCD" />
        {/* Closed happy cozy eyes */}
        <path d="M28 48 Q33 52 38 48" stroke="#583101" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <path d="M62 48 Q67 52 72 48" stroke="#583101" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        {/* Big hugging arms wrapped around each other */}
        <path d="M38 60 Q50 68 62 60" stroke="#583101" strokeWidth="4" strokeLinecap="round" fill="none" />
        {/* Blushing cheeks */}
        <circle cx="26" cy="54" r="4" fill="#FF7675" opacity="0.6" />
        <circle cx="74" cy="54" r="4" fill="#FF7675" opacity="0.6" />
        {/* Floating Heart between them */}
        <motion.path
          animate={{ y: [0, -6, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          d="M50 26 C50 26 46 22 42 22 C38 22 36 25 36 28 C36 33 43 37 50 41 C57 37 64 33 64 28 C64 25 62 22 58 22 C54 22 50 26 50 26 Z"
          fill="#E01E5A"
        />
      </svg>
    </motion.div>
  );
}

// 7. Flying Love Letter with Wings Sticker
export function FlyingLoveLetterSticker({ className = '', size = 80 }) {
  return (
    <motion.div
      animate={{ y: [0, -8, 0], rotate: [-4, 4, -4] }}
      transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-md ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        {/* Left Feather Wing */}
        <path d="M30 42 C15 35 5 45 10 60 C15 55 22 56 26 52 Z" fill="#FFF" stroke="#FFB3C6" strokeWidth="2" />
        {/* Right Feather Wing */}
        <path d="M70 42 C85 35 95 45 90 60 C85 55 78 56 74 52 Z" fill="#FFF" stroke="#FFB3C6" strokeWidth="2" />
        {/* Envelope Base */}
        <rect x="25" y="36" width="50" height="34" rx="4" fill="#FFF8FA" stroke="#FB6F92" strokeWidth="2.5" />
        {/* Flap lines */}
        <path d="M25 36 L50 56 L75 36" stroke="#FB6F92" strokeWidth="2" fill="none" />
        <path d="M25 70 L42 50" stroke="#FFB3C6" strokeWidth="1.5" />
        <path d="M75 70 L58 50" stroke="#FFB3C6" strokeWidth="1.5" />
        {/* Wax Seal Heart in Center */}
        <circle cx="50" cy="56" r="8" fill="#E01E5A" />
        <path d="M50 54 C50 54 48 52 46 52 C44 52 43 53.5 43 55 C43 57.5 47 59.5 50 61.5 C53 59.5 57 57.5 57 55 C57 53.5 56 52 54 52 C52 52 50 54 50 54 Z" fill="#FFF" />
      </svg>
    </motion.div>
  );
}

// 8. Cute Pressed Velvet Rose Sticker
export function VelvetRoseSticker({ className = '', size = 50 }) {
  return (
    <motion.div
      animate={{ rotate: [-2, 2, -2] }}
      transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
      className={`inline-block select-none filter drop-shadow-sm ${className}`}
      style={{ width: size, height: size }}
    >
      <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M28 55 Q30 40 32 30" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 42 Q20 38 18 45 Q26 46 30 42 Z" fill="#52B788" />
        <circle cx="32" cy="24" r="14" fill="#9E0031" />
        <path d="M24 20 Q32 14 40 20 Q32 28 24 20 Z" fill="#C9184A" />
        <path d="M26 24 Q32 20 38 24 Q32 30 26 24 Z" fill="#FF4D6D" />
        <circle cx="32" cy="25" r="4" fill="#FF758F" />
      </svg>
    </motion.div>
  );
}

// 9. Playful Washi Tape Sticker (Scrapbook Tape)
export function WashiTapeSticker({ color = 'pink', className = '', rotate = '-4deg' }) {
  const bgStyles = {
    pink: 'bg-rose-200/80 border-rose-300/60',
    purple: 'bg-purple-200/80 border-purple-300/60',
    gold: 'bg-amber-200/80 border-amber-300/60',
    peach: 'bg-orange-200/80 border-orange-300/60',
  };

  return (
    <div
      className={`h-5 w-20 rounded-xs border-dashed border-t border-b backdrop-blur-xs opacity-85 shadow-xs pointer-events-none ${bgStyles[color] || bgStyles.pink} ${className}`}
      style={{ transform: `rotate(${rotate})` }}
    />
  );
}

// 10. Intelligent Safe Web GIF / Sticker with Smooth Fallback
export function SafeGifSticker({ src, alt, fallbackComponent: Fallback, className = '', size = 100 }) {
  const [hasError, setHasError] = React.useState(false);
  const [loaded, setLoaded] = React.useState(false);

  if (hasError || !src) {
    return Fallback ? <Fallback className={className} size={size} /> : null;
  }

  return (
    <div className={`relative inline-block ${className}`} style={{ width: size, height: size }}>
      {!loaded && Fallback && (
        <div className="absolute inset-0">
          <Fallback size={size} />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoaded(true)}
        onError={() => setHasError(true)}
        className={`w-full h-full object-contain filter drop-shadow-md select-none transition-opacity duration-300 ${
          loaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
