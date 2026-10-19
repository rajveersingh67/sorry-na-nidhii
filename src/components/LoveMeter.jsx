import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, Sparkles, Activity, AlertCircle, RefreshCw } from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function LoveMeter() {
  const [percent, setPercent] = useState(0);
  const [isMeasuring, setIsMeasuring] = useState(false);
  const [isMaxed, setIsMaxed] = useState(false);

  const handleMeasure = () => {
    soundManager.playChime();
    setIsMeasuring(true);
    setIsMaxed(false);
    setPercent(0);

    let current = 0;
    const interval = setInterval(() => {
      current += Math.floor(Math.random() * 8) + 4;

      if (current >= 100) {
        clearInterval(interval);
        setPercent(100);
        setIsMeasuring(false);
        setIsMaxed(true);

        soundManager.playFanfare();
        confetti({
          particleCount: 80,
          spread: 80,
          origin: { y: 0.65 },
          colors: ['#ff4d6d', '#ff758f', '#ff8fa3', '#f72585', '#ffd166'],
        });
      } else {
        setPercent(current);
      }
    }, 80);
  };

  return (
    <section id="love-meter" className="py-20 px-4 relative z-10 max-w-4xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-pink-100/90 text-pink-700 px-4 py-1.5 rounded-full text-xs font-bold border border-pink-200">
          <Activity className="w-4 h-4 text-pink-500" />
          <span>Section 9 • Pyaar Ka Sensor</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-pink-800">
          How Much Love Am I Sending You? 💗
        </h2>
        <p className="text-sm sm:text-base text-pink-600 font-semibold max-w-md mx-auto">
          Click below to calibrate the romantic sensor sent exclusively to Nidhi.
        </p>
      </div>

      {/* Main Love Meter Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-pink-200/80 bg-white/90 shadow-2xl text-center relative overflow-hidden">
        {/* Heart shaped gauge graphic */}
        <div className="my-6 relative flex flex-col items-center justify-center">
          <div className="relative w-40 h-40 sm:w-48 sm:h-48 flex items-center justify-center">
            {/* Pulsing Aura if Maxed */}
            {isMaxed && (
              <div className="absolute inset-0 bg-rose-400/30 rounded-full blur-2xl animate-pulse" />
            )}

            {/* SVG Heart Container */}
            <svg viewBox="0 0 100 100" className="w-full h-full filter drop-shadow-lg">
              {/* Heart Outline Background */}
              <path
                d="M 50 85 C 20 60, 5 35, 25 18 C 40 5, 50 25, 50 25 C 50 25, 60 5, 75 18 C 95 35, 80 60, 50 85 Z"
                fill="#FFE4EC"
                stroke="#FFB6C1"
                strokeWidth="2"
              />

              {/* Heart Fill with Clip Path based on percentage */}
              <defs>
                <clipPath id="heartFillClip">
                  <rect x="0" y={100 - percent} width="100" height={percent} />
                </clipPath>
              </defs>

              <path
                d="M 50 85 C 20 60, 5 35, 25 18 C 40 5, 50 25, 50 25 C 50 25, 60 5, 75 18 C 95 35, 80 60, 50 85 Z"
                fill="url(#heartGrad)"
                clipPath="url(#heartFillClip)"
                className="transition-all duration-150"
              />

              <defs>
                <linearGradient id="heartGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                  <stop offset="0%" stopColor="#FF4D6D" />
                  <stop offset="100%" stopColor="#FF758F" />
                </linearGradient>
              </defs>
            </svg>

            {/* Percentage Text in Center */}
            <div className="absolute flex flex-col items-center justify-center z-10 select-none">
              <span className="font-extrabold font-mono text-3xl sm:text-4xl text-rose-700 drop-shadow-sm">
                {isMaxed ? '100%+' : `${percent}%`}
              </span>
              <span className="text-[10px] sm:text-xs font-bold text-pink-600 uppercase tracking-wider">
                {isMaxed ? 'Infinity Love' : isMeasuring ? 'Measuring...' : 'Standby'}
              </span>
            </div>
          </div>
        </div>

        {/* Playful Warning Message when Maxed */}
        <div className="min-h-[50px] flex items-center justify-center mb-6">
          {isMaxed ? (
            <div className="animate-wiggle bg-gradient-to-r from-rose-500 to-pink-600 text-white font-bold text-base sm:text-lg px-6 py-2.5 rounded-full shadow-lg shadow-rose-300 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-yellow-200" />
              <span>Warning: Unlimited pyaar detected! 💖😭</span>
              <Sparkles className="w-5 h-5 text-yellow-200" />
            </div>
          ) : (
            <p className="text-xs sm:text-sm text-pink-600 font-semibold italic">
              "Ready to scan the unconditional love I hold for you..."
            </p>
          )}
        </div>

        {/* Measure Button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={handleMeasure}
            disabled={isMeasuring}
            className={`px-8 py-3.5 rounded-full text-white font-bold text-base sm:text-lg shadow-lg flex items-center gap-2 transform active:scale-95 transition-all ${
              isMeasuring
                ? 'bg-pink-400 cursor-wait'
                : 'bg-gradient-to-r from-pink-500 via-rose-500 to-pink-600 hover:shadow-pink-300 hover:scale-105'
            }`}
          >
            <Heart className="w-5 h-5 fill-white animate-pulse" />
            <span>{isMaxed ? 'Measure Again 🥺' : 'Measure My Love 🥺'}</span>
          </button>
        </div>

        {/* Mandatory Playful Note */}
        <div className="mt-8 pt-4 border-t border-pink-100 flex items-center justify-center gap-1.5 text-xs text-pink-400 font-medium">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>Note: Playful animation rather than a real measurement — because my love for Nidhi is immeasurable!</span>
        </div>
      </div>
    </section>
  );
}
