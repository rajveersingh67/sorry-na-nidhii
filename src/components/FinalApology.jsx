import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Smile, MessageCircleHeart, Clock, Check } from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function FinalApology() {
  const [selectedResponse, setSelectedResponse] = useState(null);

  const handleSmileClick = () => {
    soundManager.playChime();
    setSelectedResponse('smile');

    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.7 },
      colors: ['#ff4d6d', '#ffd166', '#ff758f', '#ffccd5'],
    });
  };

  const handleHugAccepted = () => {
    soundManager.playHeartbeat();
    setTimeout(() => soundManager.playChime(), 350);

    // Increment localStorage hugs
    const currentHugs = parseInt(localStorage.getItem('nidhi_virtual_hugs') || '0', 10);
    localStorage.setItem('nidhi_virtual_hugs', (currentHugs + 1).toString());

    setSelectedResponse('hug');

    confetti({
      particleCount: 80,
      spread: 80,
      origin: { y: 0.65 },
      colors: ['#ff4d6d', '#ff8fa3', '#b5179e', '#ffffff'],
    });
  };

  const handleTalkLater = () => {
    soundManager.playPop();
    setSelectedResponse('talk');
  };

  return (
    <section id="final" className="py-20 px-4 relative z-10 max-w-4xl mx-auto">
      {/* Section Header with Teddy holding sign */}
      <div className="flex flex-col items-center text-center mb-8 space-y-4">
        {/* Cute Teddy Bear Holding an Apology Sign SVG */}
        <div className="relative w-40 h-44 sm:w-48 sm:h-52 flex items-center justify-center">
          <svg viewBox="0 0 120 140" className="w-full h-full filter drop-shadow-md">
            {/* Bear Ears */}
            <circle cx="34" cy="30" r="14" fill="#C59B73" />
            <circle cx="34" cy="30" r="7" fill="#FFE5D9" />
            <circle cx="86" cy="30" r="14" fill="#C59B73" />
            <circle cx="86" cy="30" r="7" fill="#FFE5D9" />
            {/* Bear Head */}
            <circle cx="60" cy="52" r="28" fill="#DDB892" />
            {/* Muzzle */}
            <ellipse cx="60" cy="60" rx="14" ry="10" fill="#FFF1E6" />
            {/* Pleading Eyes */}
            <circle cx="51" cy="50" r="3.5" fill="#3D312A" />
            <circle cx="69" cy="50" r="3.5" fill="#3D312A" />
            <circle cx="52.5" cy="48.5" r="1.2" fill="#FFFFFF" />
            <circle cx="70.5" cy="48.5" r="1.2" fill="#FFFFFF" />
            {/* Blushing cheeks */}
            <circle cx="43" cy="58" r="4.5" fill="#FF8FA3" opacity="0.7" />
            <circle cx="77" cy="58" r="4.5" fill="#FF8FA3" opacity="0.7" />
            {/* Nose */}
            <ellipse cx="60" cy="57" rx="3.5" ry="2.5" fill="#3D312A" />
            {/* Body */}
            <ellipse cx="60" cy="98" rx="26" ry="24" fill="#DDB892" />
            {/* Apology Sign held by bear */}
            <rect
              x="25"
              y="85"
              width="70"
              height="35"
              rx="6"
              fill="#FFFDF9"
              stroke="#FF8FA3"
              strokeWidth="2"
              className="filter drop-shadow-sm"
            />
            <text x="60" y="100" fontSize="8" fill="#E63946" textAnchor="middle" fontWeight="bold">
              SORRY NIDHI
            </text>
            <text x="60" y="112" fontSize="7" fill="#FF758F" textAnchor="middle" fontWeight="bold">
              I Love You ❤️
            </text>
            {/* Paws holding the sign */}
            <ellipse cx="28" cy="98" rx="6" ry="8" fill="#C59B73" />
            <ellipse cx="92" cy="98" rx="6" ry="8" fill="#C59B73" />
          </svg>
        </div>

        <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold border border-pink-200">
          <Heart className="w-4 h-4 text-pink-500 fill-pink-400" />
          <span>Section 10 • Ek Aakhri Baat</span>
        </div>

        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-pink-800">
          Nidhi, ek last baat sunogi? 🥺💗
        </h2>
      </div>

      {/* Main Apology Message Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-pink-200/80 bg-white/90 shadow-2xl space-y-6">
        {/* Exact message requested */}
        <div className="space-y-4 text-base sm:text-lg font-body leading-relaxed text-[#4A3B47] text-left">
          <p>
            Main perfect nahi hoon, aur kabhi-kabhi galtiyan kar deta hoon.
          </p>
          <p>
            Lekin main tumhari feelings ko samajhne, apni galtiyon se seekhne, aur tumhare saath aur achha behave karne ki genuinely koshish karna chahta hoon.
          </p>
          <p className="font-bold text-rose-600 bg-pink-50/80 p-4 rounded-2xl border-l-4 border-rose-400 text-lg sm:text-xl">
            Tumhe abhi maaf karna zaroori nahi hai. Main bas chahta hoon ki tumhe pata ho ki I am sorry, and you matter to me. ❤️
          </p>
        </div>

        {/* Dynamic Response Box */}
        {selectedResponse && (
          <div className="p-5 rounded-2xl transition-all duration-300 animate-float">
            {selectedResponse === 'smile' && (
              <div className="bg-gradient-to-r from-pink-500 to-rose-500 text-white p-5 rounded-2xl shadow-lg shadow-pink-300/50 space-y-1">
                <span className="text-2xl">🥰✨</span>
                <h4 className="font-heading text-2xl font-bold">Awww! Meri Pyaari Nidhi!</h4>
                <p className="text-sm font-semibold leading-relaxed">
                  Teri yeh chhotisi smile dekh kar mera poora din ban gaya! Thank you meri jaan, I promise to protect this smile always! 🌸❤️
                </p>
              </div>
            )}

            {selectedResponse === 'hug' && (
              <div className="bg-gradient-to-r from-rose-500 to-purple-600 text-white p-5 rounded-2xl shadow-lg shadow-rose-300/50 space-y-1">
                <span className="text-2xl">🫂💖</span>
                <h4 className="font-heading text-2xl font-bold">Virtual Hug Received & Returned!</h4>
                <p className="text-sm font-semibold leading-relaxed">
                  Hug delivered straight to your heart! I'm holding you close in thoughts right now. You are safe, cherished, and loved. 🧸💗
                </p>
              </div>
            )}

            {selectedResponse === 'talk' && (
              <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white p-5 rounded-2xl shadow-lg shadow-purple-300/50 space-y-1">
                <span className="text-2xl">🕊️💌</span>
                <h4 className="font-heading text-2xl font-bold">Take All The Time In The World</h4>
                <p className="text-sm font-semibold leading-relaxed">
                  I respect your feelings and your space completely, Nidhi. I'll be right here whenever you want to talk. No rush, no pressure, only love. 🤍
                </p>
              </div>
            )}
          </div>
        )}

        {/* Three Interactive Buttons */}
        <div className="pt-4 border-t border-pink-100 flex flex-col sm:flex-row items-center justify-center gap-3">
          {/* Button 1 */}
          <button
            onClick={handleSmileClick}
            className={`w-full sm:w-auto px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
              selectedResponse === 'smile'
                ? 'bg-pink-600 text-white scale-105'
                : 'bg-pink-100 hover:bg-pink-200 text-pink-800'
            }`}
          >
            <Smile className="w-4 h-4 text-pink-600" />
            <span>Thoda Sa Smile Kar Do? 🥹</span>
          </button>

          {/* Button 2 */}
          <button
            onClick={handleHugAccepted}
            className={`w-full sm:w-auto px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
              selectedResponse === 'hug'
                ? 'bg-rose-600 text-white scale-105'
                : 'bg-rose-100 hover:bg-rose-200 text-rose-800'
            }`}
          >
            <span className="text-base">🫂</span>
            <span>Virtual Hug Accepted 🫂</span>
          </button>

          {/* Button 3 */}
          <button
            onClick={handleTalkLater}
            className={`w-full sm:w-auto px-5 py-3.5 rounded-full text-xs sm:text-sm font-bold transition-all shadow-md flex items-center justify-center gap-2 ${
              selectedResponse === 'talk'
                ? 'bg-purple-600 text-white scale-105'
                : 'bg-purple-100 hover:bg-purple-200 text-purple-800'
            }`}
          >
            <Clock className="w-4 h-4 text-purple-600" />
            <span>Let's Talk When I'm Ready 💌</span>
          </button>
        </div>
      </div>
    </section>
  );
}
