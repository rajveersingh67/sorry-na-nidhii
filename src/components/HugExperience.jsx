import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, RefreshCw, Smile, Award } from 'lucide-react';
import { soundManager } from '../utils/sound';

const HUG_MODES = [
  { id: 'teddy', name: 'Teddy Bear Hug 🧸', desc: 'Soft, fluffy & warm like a giant plushie' },
  { id: 'bunny', name: 'Bunny Snuggle 🐰', desc: 'Gentle nose boops & endless warmth' },
  { id: 'cuddle', name: 'Tighttt Cuddle 🌸', desc: 'The "never letting you go" kind of hug' },
  { id: 'heart', name: 'Heart-to-Heart 💖', desc: 'Two hearts beating together in sync' },
];

export default function HugExperience() {
  const [hugCount, setHugCount] = useState(() => {
    const saved = localStorage.getItem('nidhi_virtual_hugs');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [isHugging, setIsHugging] = useState(false);
  const [activeMode, setActiveMode] = useState('teddy');
  const [hugMessage, setHugMessage] = useState('');
  const [heartbeatActive, setHeartbeatActive] = useState(false);

  useEffect(() => {
    localStorage.setItem('nidhi_virtual_hugs', hugCount.toString());
  }, [hugCount]);

  const triggerHug = () => {
    // Play sounds
    soundManager.playHeartbeat();
    setTimeout(() => soundManager.playChime(), 400);

    setIsHugging(true);
    setHeartbeatActive(true);
    setHugCount((prev) => prev + 1);

    const messages = [
      'A tightttt wala hug sirf meri Nidhi ke liyeee! 🫂💗',
      'Warmth transferred 100%! Nidhi is surrounded by love! 🥰🌸',
      'Super squeeezeee! Sab theek ho jaayega meri jaan! 🥺💖',
      'Holding you close in thoughts, always and forever! 🧸🫶🏻',
      'Ek aur extra soft wala hug for my most precious person! 💕✨',
    ];
    setHugMessage(messages[Math.floor(Math.random() * messages.length)]);

    // Massive cute heart & sparkle burst
    confetti({
      particleCount: 75,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff758f', '#ff8fa3', '#f72585', '#b5179e', '#ffffff'],
    });

    // Reset hugging animation state after a cozy squeeze duration
    setTimeout(() => {
      setHeartbeatActive(false);
    }, 2800);
  };

  return (
    <section id="hug" className="py-20 px-4 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-rose-100/90 text-rose-700 px-4 py-1.5 rounded-full text-xs font-bold border border-rose-200">
          <Heart className="w-4 h-4 text-rose-500 fill-rose-400 animate-pulse" />
          <span>Section 4 • Virtual Comfort Station</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-rose-700">
          The Cutest Virtual Hug Experience 🧸🫂
        </h2>
        <p className="text-sm sm:text-base text-rose-600 font-semibold max-w-lg mx-auto">
          Made 100x cuter than anything else, because you deserve the softest, warmest comfort in the world.
        </p>
      </div>

      {/* Hug Modes Selector */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
        {HUG_MODES.map((mode) => (
          <button
            key={mode.id}
            onClick={() => {
              soundManager.playPop();
              setActiveMode(mode.id);
            }}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-sm ${
              activeMode === mode.id
                ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white scale-105 shadow-md shadow-pink-300'
                : 'bg-white/80 text-pink-700 border border-pink-200 hover:bg-pink-50'
            }`}
          >
            {mode.name}
          </button>
        ))}
      </div>

      {/* Main Hug Stage Card */}
      <div
        className={`relative glass-card rounded-3xl p-6 sm:p-10 border-2 transition-all duration-700 overflow-hidden ${
          heartbeatActive
            ? 'border-rose-400 bg-gradient-to-b from-rose-50/95 via-pink-50/90 to-purple-50/95 shadow-2xl shadow-rose-300/60'
            : 'border-pink-200/80 bg-white/85 shadow-xl shadow-pink-200/40'
        }`}
      >
        {/* Soft Warm Pulsing Glow */}
        {heartbeatActive && (
          <div className="absolute inset-0 bg-radial from-rose-300/30 via-pink-200/20 to-transparent pointer-events-none animate-pulse-glow" />
        )}

        {/* Floating Hug Reaction Badges (Includes User's Uploaded Crying Emoji) */}
        <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex items-center gap-2 bg-white/90 px-3 py-1.5 rounded-full border border-pink-200 shadow-sm text-xs font-bold text-pink-700">
          <div className="w-6 h-6 rounded-full overflow-hidden border border-pink-300">
            <img
              src="/images/emoji_crying_praying.jpg"
              alt="Praying Emoji"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="hidden sm:inline">Pleading for Forgiveness</span>
        </div>

        {/* Virtual Hugs Counter */}
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 bg-gradient-to-r from-pink-100 to-rose-100 px-4 py-1.5 rounded-full border border-pink-300 shadow-sm">
          <Award className="w-4 h-4 text-rose-500" />
          <span className="text-xs sm:text-sm font-bold text-rose-700">
            Virtual Hugs Given: <span className="font-mono text-base text-rose-600 font-extrabold">{hugCount}</span>
          </span>
        </div>

        {/* Interactive Animated Stage */}
        <div className="my-8 sm:my-12 relative h-56 sm:h-64 flex items-center justify-center overflow-hidden">
          {/* Ground shadow */}
          <div className="absolute bottom-2 w-72 sm:w-96 h-6 bg-pink-200/50 rounded-full blur-md" />

          {/* Left Character (Janab Bear / Bunny) */}
          <div
            className={`absolute transition-all duration-700 ease-out flex flex-col items-center select-none ${
              isHugging
                ? 'translate-x-[-28px] sm:translate-x-[-38px] scale-105'
                : 'translate-x-[-110px] sm:translate-x-[-170px] scale-100'
            }`}
          >
            {activeMode === 'bunny' ? (
              /* Left Bunny */
              <svg viewBox="0 0 100 120" className="w-28 h-32 sm:w-36 sm:h-40 filter drop-shadow-md">
                {/* Ears */}
                <ellipse cx="38" cy="24" rx="8" ry="24" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                <ellipse cx="38" cy="24" rx="4" ry="16" fill="#FFCCD5" />
                <ellipse cx="58" cy="24" rx="8" ry="24" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                <ellipse cx="58" cy="24" rx="4" ry="16" fill="#FFCCD5" />
                {/* Head */}
                <circle cx="48" cy="62" r="26" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                {/* Eyes */}
                {isHugging ? (
                  <path d="M 38 62 Q 43 56 48 62" stroke="#4A3E3D" strokeWidth="2.5" fill="none" />
                ) : (
                  <circle cx="42" cy="60" r="3" fill="#4A3E3D" />
                )}
                {/* Cheeks */}
                <circle cx="34" cy="68" r="4" fill="#FF8FA3" opacity="0.7" />
                <circle cx="62" cy="68" r="4" fill="#FF8FA3" opacity="0.7" />
                {/* Nose */}
                <polygon points="46,65 50,65 48,68" fill="#FF758F" />
                {/* Body */}
                <ellipse cx="48" cy="95" rx="20" ry="18" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                {/* Extended Arms */}
                <ellipse
                  cx={isHugging ? '62' : '64'}
                  cy="92"
                  rx={isHugging ? '14' : '10'}
                  ry="6"
                  fill="#FFFFFF"
                  stroke="#F3C4D0"
                  strokeWidth="2"
                  className={isHugging ? 'rotate-12' : 'rotate-45'}
                />
              </svg>
            ) : (
              /* Left Bear (Janab) */
              <svg viewBox="0 0 100 120" className="w-28 h-32 sm:w-36 sm:h-40 filter drop-shadow-md">
                {/* Ears */}
                <circle cx="28" cy="35" r="14" fill="#C59B73" />
                <circle cx="28" cy="35" r="8" fill="#FFE5D9" />
                <circle cx="72" cy="35" r="14" fill="#C59B73" />
                <circle cx="72" cy="35" r="8" fill="#FFE5D9" />
                {/* Head */}
                <circle cx="50" cy="58" r="28" fill="#DDB892" />
                {/* Muzzle */}
                <ellipse cx="50" cy="65" rx="14" ry="10" fill="#FFF1E6" />
                {/* Eyes */}
                {isHugging ? (
                  <>
                    <path d="M 38 56 Q 43 50 48 56" stroke="#3D312A" strokeWidth="2.5" fill="none" />
                    <path d="M 52 56 Q 57 50 62 56" stroke="#3D312A" strokeWidth="2.5" fill="none" />
                  </>
                ) : (
                  <>
                    <circle cx="41" cy="54" r="3.5" fill="#3D312A" />
                    <circle cx="59" cy="54" r="3.5" fill="#3D312A" />
                    <circle cx="42" cy="53" r="1.2" fill="#FFFFFF" />
                    <circle cx="60" cy="53" r="1.2" fill="#FFFFFF" />
                  </>
                )}
                {/* Rosy Cheeks */}
                <ellipse cx="34" cy="63" rx="4.5" ry="3" fill="#FF8FA3" opacity="0.7" />
                <ellipse cx="66" cy="63" rx="4.5" ry="3" fill="#FF8FA3" opacity="0.7" />
                {/* Nose & Mouth */}
                <ellipse cx="50" cy="63" rx="3.5" ry="2.5" fill="#3D312A" />
                <path d="M 48 65 Q 50 68 52 65" stroke="#3D312A" strokeWidth="1.5" fill="none" />
                {/* Body */}
                <ellipse cx="50" cy="95" rx="22" ry="20" fill="#DDB892" />
                {/* Belly patch */}
                <ellipse cx="50" cy="96" rx="14" ry="12" fill="#FFF1E6" />
                {/* Reaching arm */}
                <path
                  d={
                    isHugging
                      ? 'M 60 90 Q 75 88 84 94'
                      : 'M 60 90 Q 75 82 82 86'
                  }
                  stroke="#C59B73"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <span className="text-[11px] font-bold text-pink-700 bg-white/90 px-2 py-0.5 rounded-full mt-1 border border-pink-200 shadow-sm">
              Tumhara Pagal 🥺
            </span>
          </div>

          {/* Center Heartburst & Glow when Hugging */}
          {isHugging && (
            <div className="absolute z-20 flex flex-col items-center justify-center animate-heartbeat pointer-events-none">
              <div className="text-4xl sm:text-5xl select-none">💖</div>
              <div className="text-xs font-bold text-rose-600 bg-white/95 px-2.5 py-0.5 rounded-full shadow-md border border-rose-300 mt-1 animate-wiggle">
                *Squeeezeee*
              </div>
            </div>
          )}

          {/* Right Character (Nidhi Bear / Bunny with Bow) */}
          <div
            className={`absolute transition-all duration-700 ease-out flex flex-col items-center select-none ${
              isHugging
                ? 'translate-x-[28px] sm:translate-x-[38px] scale-105'
                : 'translate-x-[110px] sm:translate-x-[170px] scale-100'
            }`}
          >
            {activeMode === 'bunny' ? (
              /* Right Bunny (Nidhi) */
              <svg viewBox="0 0 100 120" className="w-28 h-32 sm:w-36 sm:h-40 filter drop-shadow-md">
                {/* Ears */}
                <ellipse cx="42" cy="24" rx="8" ry="24" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                <ellipse cx="42" cy="24" rx="4" ry="16" fill="#FFCCD5" />
                <ellipse cx="62" cy="24" rx="8" ry="24" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                <ellipse cx="62" cy="24" rx="4" ry="16" fill="#FFCCD5" />
                {/* Cute Pink Bow on ear */}
                <circle cx="36" cy="38" r="4" fill="#FF4D6D" />
                <path d="M 32 36 L 24 33 L 26 42 Z" fill="#FF758F" />
                <path d="M 40 36 L 48 33 L 46 42 Z" fill="#FF758F" />
                {/* Head */}
                <circle cx="52" cy="62" r="26" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                {/* Eyes */}
                {isHugging ? (
                  <path d="M 44 62 Q 49 56 54 62" stroke="#4A3E3D" strokeWidth="2.5" fill="none" />
                ) : (
                  <circle cx="48" cy="60" r="3" fill="#4A3E3D" />
                )}
                {/* Cheeks */}
                <circle cx="40" cy="68" r="4" fill="#FF8FA3" opacity="0.8" />
                <circle cx="68" cy="68" r="4" fill="#FF8FA3" opacity="0.8" />
                {/* Nose */}
                <polygon points="52,65 56,65 54,68" fill="#FF758F" />
                {/* Body */}
                <ellipse cx="52" cy="95" rx="20" ry="18" fill="#FFFFFF" stroke="#F3C4D0" strokeWidth="2" />
                {/* Arms */}
                <ellipse
                  cx={isHugging ? '38' : '36'}
                  cy="92"
                  rx={isHugging ? '14' : '10'}
                  ry="6"
                  fill="#FFFFFF"
                  stroke="#F3C4D0"
                  strokeWidth="2"
                  className={isHugging ? '-rotate-12' : '-rotate-45'}
                />
              </svg>
            ) : (
              /* Right Bear (Nidhi) */
              <svg viewBox="0 0 100 120" className="w-28 h-32 sm:w-36 sm:h-40 filter drop-shadow-md">
                {/* Ears */}
                <circle cx="28" cy="35" r="14" fill="#E8B4B8" />
                <circle cx="28" cy="35" r="8" fill="#FFF0F3" />
                <circle cx="72" cy="35" r="14" fill="#E8B4B8" />
                <circle cx="72" cy="35" r="8" fill="#FFF0F3" />
                {/* Pretty Bow on head */}
                <circle cx="32" cy="26" r="4" fill="#FF4D6D" />
                <polygon points="28,26 20,21 21,32" fill="#FF758F" />
                <polygon points="36,26 44,21 43,32" fill="#FF758F" />
                {/* Head */}
                <circle cx="50" cy="58" r="28" fill="#F3C4D0" />
                {/* Muzzle */}
                <ellipse cx="50" cy="65" rx="14" ry="10" fill="#FFF5F7" />
                {/* Eyes */}
                {isHugging ? (
                  <>
                    <path d="M 38 56 Q 43 50 48 56" stroke="#4A3E3D" strokeWidth="2.5" fill="none" />
                    <path d="M 52 56 Q 57 50 62 56" stroke="#4A3E3D" strokeWidth="2.5" fill="none" />
                  </>
                ) : (
                  <>
                    <circle cx="41" cy="54" r="3.5" fill="#4A3E3D" />
                    <circle cx="59" cy="54" r="3.5" fill="#4A3E3D" />
                    <circle cx="42" cy="53" r="1.2" fill="#FFFFFF" />
                    <circle cx="60" cy="53" r="1.2" fill="#FFFFFF" />
                  </>
                )}
                {/* Rosy Cheeks */}
                <ellipse cx="34" cy="63" rx="4.5" ry="3" fill="#FF4D6D" opacity="0.6" />
                <ellipse cx="66" cy="63" rx="4.5" ry="3" fill="#FF4D6D" opacity="0.6" />
                {/* Nose & Mouth */}
                <ellipse cx="50" cy="63" rx="3.5" ry="2.5" fill="#4A3E3D" />
                <path d="M 48 65 Q 50 68 52 65" stroke="#4A3E3D" strokeWidth="1.5" fill="none" />
                {/* Body */}
                <ellipse cx="50" cy="95" rx="22" ry="20" fill="#F3C4D0" />
                <ellipse cx="50" cy="96" rx="14" ry="12" fill="#FFF5F7" />
                {/* Reaching arm */}
                <path
                  d={
                    isHugging
                      ? 'M 40 90 Q 25 88 16 94'
                      : 'M 40 90 Q 25 82 18 86'
                  }
                  stroke="#E8B4B8"
                  strokeWidth="10"
                  strokeLinecap="round"
                />
              </svg>
            )}
            <span className="text-[11px] font-bold text-rose-700 bg-white/90 px-2.5 py-0.5 rounded-full mt-1 border border-rose-200 shadow-sm">
              Meri Pyaari Nidhi 🎀
            </span>
          </div>
        </div>

        {/* Dynamic Hug Message Display */}
        <div className="min-h-[56px] flex items-center justify-center text-center px-4">
          {hugMessage ? (
            <div className="animate-float bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-base sm:text-lg px-6 py-2.5 rounded-full shadow-lg shadow-pink-300 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-yellow-200" />
              <span>{hugMessage}</span>
              <Sparkles className="w-4 h-4 text-yellow-200" />
            </div>
          ) : (
            <p className="text-sm sm:text-base text-pink-600 font-semibold italic">
              "Click the button below to bring them together into the warmest hug! 🥺🫂"
            </p>
          )}
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={triggerHug}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-rose-300 hover:shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2.5"
          >
            <span className="text-2xl animate-wiggle">🫂</span>
            <span>{hugCount === 0 ? 'Hug Me, Please 🥺🫂' : 'One More Hug! 🥹💕'}</span>
            <Heart className="w-5 h-5 fill-white" />
          </button>

          {hugCount > 0 && (
            <button
              onClick={() => {
                soundManager.playPop();
                setIsHugging(false);
              }}
              className="w-full sm:w-auto px-5 py-3 rounded-full bg-white/80 hover:bg-pink-100 text-pink-700 font-bold text-xs sm:text-sm border border-pink-200 transition-colors flex items-center justify-center gap-1.5"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>Step Back (Ready for next hug)</span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
