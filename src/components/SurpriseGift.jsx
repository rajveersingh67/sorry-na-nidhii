import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Gift, Sparkles, Heart, Ticket, CheckCircle2, RotateCcw } from 'lucide-react';
import { soundManager } from '../utils/sound';

const COUPONS = [
  {
    id: 1,
    title: 'Lifetime Free Hugs Pass 🧸',
    desc: 'Valid anytime, anywhere. Immediate fulfillment guaranteed.',
    badge: 'Never Expiring',
  },
  {
    id: 2,
    title: '100% Right in Any Argument 👑',
    desc: 'Use this card anytime and Janab immediately surrenders and agrees with Nidhi.',
    badge: 'Ultimate Power',
  },
  {
    id: 3,
    title: 'Midnight Ice Cream / Food Voucher 🍨',
    desc: 'Janab will arrange whatever sweet treat Madam ji craves.',
    badge: 'Sweetest Cravings',
  },
  {
    id: 4,
    title: 'Infinite Listening & Patience Guarantee 🎧',
    desc: 'Zero interruptions, zero excuses, 100% loving attention.',
    badge: 'Pure Care',
  },
];

export default function SurpriseGift() {
  const [isOpen, setIsOpen] = useState(false);
  const [redeemedCoupons, setRedeemedCoupons] = useState({});

  const handleOpenBox = () => {
    soundManager.playChime();
    setIsOpen(true);

    // Continuous firework shower of hearts & sparkles
    confetti({
      particleCount: 100,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ffd166', '#ff758f', '#f72585', '#ffffff'],
    });

    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
      });
    }, 300);
  };

  const handleRedeem = (id) => {
    soundManager.playPop();
    setRedeemedCoupons((prev) => ({
      ...prev,
      [id]: true,
    }));

    confetti({
      particleCount: 30,
      spread: 40,
      origin: { y: 0.7 },
      colors: ['#ff4d6d', '#ff8fa3', '#ffd166'],
    });
  };

  return (
    <section id="surprise" className="py-20 px-4 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold border border-pink-200">
          <Gift className="w-4 h-4 text-pink-500" />
          <span>Section 8 • Special Delivery</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-pink-800">
          A Little Surprise for Nidhi 🎁
        </h2>
        <p className="text-sm sm:text-base text-pink-600 font-semibold max-w-md mx-auto">
          I wrapped this with lots of ribbons, apologies, and love. Go ahead and open it!
        </p>
      </div>

      {/* Main Gift Container */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-pink-200/80 bg-white/90 shadow-2xl text-center relative overflow-hidden">
        {!isOpen ? (
          /* Closed Mystery Box Stage */
          <div className="py-10 flex flex-col items-center">
            {/* 3D Animated Gift Box */}
            <div
              onClick={handleOpenBox}
              className="relative cursor-pointer group transform hover:scale-105 transition-all duration-300"
            >
              {/* Floating Sparkles around box */}
              <div className="absolute -top-4 -left-4 text-2xl animate-float">✨</div>
              <div className="absolute -bottom-2 -right-4 text-2xl animate-float-slow">💖</div>

              {/* Gift Box SVG Graphic */}
              <div className="w-44 h-44 sm:w-52 sm:h-52 relative flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-full h-full filter drop-shadow-xl">
                  {/* Box Base */}
                  <rect x="40" y="80" width="120" height="100" rx="14" fill="#FF8FA3" />
                  {/* Box Shadow overlay */}
                  <rect x="40" y="80" width="120" height="100" rx="14" fill="url(#boxGrad)" />

                  {/* Vertical Ribbon */}
                  <rect x="88" y="80" width="24" height="100" fill="#FF4D6D" />

                  {/* Box Lid */}
                  <rect
                    x="30"
                    y="60"
                    width="140"
                    height="28"
                    rx="8"
                    fill="#FF758F"
                    stroke="#FF4D6D"
                    strokeWidth="2"
                    className="group-hover:-translate-y-2 transition-transform duration-300"
                  />
                  {/* Horizontal Ribbon on Lid */}
                  <rect x="88" y="60" width="24" height="28" fill="#FF4D6D" />

                  {/* Ribbon Bow */}
                  <path
                    d="M 100 60 C 80 30, 45 45, 95 58 C 75 35, 125 35, 105 58"
                    fill="#FF4D6D"
                    stroke="#E63946"
                    strokeWidth="2"
                  />
                  <path
                    d="M 100 60 C 120 30, 155 45, 105 58 C 125 35, 75 35, 95 58"
                    fill="#FF4D6D"
                    stroke="#E63946"
                    strokeWidth="2"
                  />
                  <circle cx="100" cy="58" r="8" fill="#E63946" />

                  <defs>
                    <linearGradient id="boxGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FFFFFF" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="#C9184A" stopOpacity="0.3" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Tap to open label */}
              <div className="mt-2 text-xs font-bold text-pink-500 uppercase tracking-widest animate-pulse">
                Click box or button to open 🎀
              </div>
            </div>

            {/* Button */}
            <button
              onClick={handleOpenBox}
              className="mt-6 px-8 py-3.5 rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-pink-300 hover:scale-105 active:scale-95 transition-all flex items-center gap-2"
            >
              <Gift className="w-5 h-5" />
              <span>Open Your Surprise! 🎁</span>
              <Sparkles className="w-5 h-5 text-yellow-200" />
            </button>
          </div>
        ) : (
          /* Opened Surprise Content */
          <div className="py-4 space-y-8 animate-float-slow text-left">
            {/* Top Celebration Banner */}
            <div className="flex items-center justify-between pb-4 border-b border-pink-100">
              <div className="flex items-center gap-2">
                <span className="text-3xl animate-bounce">🎉</span>
                <span className="font-heading text-2xl sm:text-3xl font-bold text-rose-700">
                  Surpriseee, meri Nidhiii! 🥹💖
                </span>
              </div>
              <button
                onClick={() => {
                  soundManager.playPop();
                  setIsOpen(false);
                }}
                className="text-xs bg-pink-100 hover:bg-pink-200 text-pink-700 px-3 py-1.5 rounded-full font-bold flex items-center gap-1 transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Pack Again</span>
              </button>
            </div>

            {/* Exact Required Message Box */}
            <div className="bg-gradient-to-br from-pink-50/90 via-rose-50/80 to-purple-50/90 p-6 sm:p-8 rounded-3xl border-2 border-pink-300 shadow-md space-y-4">
              <p className="font-body text-base sm:text-lg text-[#4A3B47] leading-relaxed">
                Aaj ka mission hai tumhe force karke manana nahi, balki tumhare chehre par ek genuine si smile laana.
              </p>
              <p className="font-body text-base sm:text-lg text-[#4A3B47] leading-relaxed">
                Tum jab ready ho, tab hum baat karenge.
              </p>
              <p className="font-heading text-2xl sm:text-3xl font-bold text-rose-600 pt-2">
                Sending endless love, warmth, and the softest hugs to you. 🧸🫂💗
              </p>
            </div>

            {/* Apology Love Coupons */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-pink-700 font-bold text-sm">
                <Ticket className="w-4 h-4 text-rose-500" />
                <span>4 Redeemable Apology Love Coupons (Just for Nidhi):</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COUPONS.map((coupon) => {
                  const isRedeemed = redeemedCoupons[coupon.id];

                  return (
                    <div
                      key={coupon.id}
                      className={`p-4 rounded-2xl border-2 transition-all flex flex-col justify-between ${
                        isRedeemed
                          ? 'bg-emerald-50/80 border-emerald-300'
                          : 'bg-white border-pink-200 hover:border-pink-300 shadow-sm'
                      }`}
                    >
                      <div>
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-sm text-pink-900">{coupon.title}</h4>
                          <span
                            className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              isRedeemed
                                ? 'bg-emerald-200 text-emerald-800'
                                : 'bg-pink-100 text-pink-600'
                            }`}
                          >
                            {isRedeemed ? 'Redeemed! 💖' : coupon.badge}
                          </span>
                        </div>
                        <p className="text-xs text-[#5A4A58] leading-relaxed">{coupon.desc}</p>
                      </div>

                      <div className="mt-3 pt-2 border-t border-dashed border-pink-100 flex items-center justify-end">
                        {isRedeemed ? (
                          <div className="flex items-center gap-1 text-xs font-bold text-emerald-600">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Claimed with Love</span>
                          </div>
                        ) : (
                          <button
                            onClick={() => handleRedeem(coupon.id)}
                            className="text-xs bg-pink-500 hover:bg-pink-600 text-white font-bold px-3 py-1.5 rounded-full shadow-sm hover:scale-105 active:scale-95 transition-all"
                          >
                            Redeem Coupon 🎟️
                          </button>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
