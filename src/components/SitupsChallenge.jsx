import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { Dumbbell, RotateCcw, Undo2, Award, Heart, Sparkles, Flame, CheckCircle, Info } from 'lucide-react';
import { soundManager } from '../utils/sound';

export default function SitupsChallenge() {
  const TARGET = 100;

  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem('nidhi_situps_count');
    return saved ? parseInt(saved, 10) : 0;
  });

  const [isBending, setIsBending] = useState(false);
  const [showDedicationModal, setShowDedicationModal] = useState(false);
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  useEffect(() => {
    localStorage.setItem('nidhi_situps_count', count.toString());
  }, [count]);

  const progressPercent = Math.min(100, Math.round((count / TARGET) * 100));
  const remaining = Math.max(0, TARGET - count);

  // Milestone messaging & character condition
  const getMilestoneInfo = () => {
    if (count >= 100) {
      return {
        message: '100 SIT-UPS COMPLETE! 😭💪❤️\nAb toh meri Nidhi ki ek chhoti si smile banti hai naaa? 🥹💗',
        status: 'Glorious Champion of Love 🏆',
        mood: 'celebration',
      };
    }
    if (count >= 75) {
      return {
        message: '75 DONE! Almost there! Full determination mode with glowing hearts! 🔥💖',
        status: 'Fiercely Determined with Glowing Hearts 🔥',
        mood: 'determined',
      };
    }
    if (count >= 50) {
      return {
        message: '50 HALFWAY! DIL AUR JAAN NIDHI KE NAAM! Dramatically exhausted 😭🛌',
        status: 'Dramatically Exhausted but Never Giving Up 🛌💦',
        mood: 'exhausted',
      };
    }
    if (count >= 25) {
      return {
        message: '25 done! Haaph raha hoon... (Tired character 🥵) Par haar nahi manunga!',
        status: 'Panting & Sweating Heavy 🥵',
        mood: 'tired',
      };
    }
    if (count >= 10) {
      return {
        message: 'Ghutne dard ho rahe hain, par Nidhi ki smile ke liye kuch bhi! 🦵💦',
        status: 'Knees Aching for Nidhi 🦵',
        mood: 'aching',
      };
    }
    if (count >= 5) {
      return {
        message: 'Phew, warm up ho gaya! Nidhi please thoda sa gussa kam karo na? 🥺',
        status: 'Warmed Up & Pleading 🥺',
        mood: 'warmup',
      };
    }
    return {
      message: 'Janab is ready to do 100 sit-ups to apologize to Madam ji! 💪🥺',
      status: 'Ready on the Gym Mat 🧘‍♂️',
      mood: 'ready',
    };
  };

  const milestone = getMilestoneInfo();

  const handleAddSitup = (increment = 1) => {
    soundManager.playSitupSound();
    setIsBending(true);
    setTimeout(() => setIsBending(false), 400);

    const newCount = Math.min(TARGET, count + increment);
    setCount(newCount);

    // Milestone celebrations
    if (newCount === 100) {
      soundManager.playFanfare();
      // Continuous celebratory confetti
      const end = Date.now() + 2500;
      const interval = setInterval(() => {
        if (Date.now() > end) {
          clearInterval(interval);
          return;
        }
        confetti({
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          origin: { x: Math.random(), y: Math.random() - 0.2 },
          colors: ['#ff4d6d', '#ffd166', '#06d6a0', '#118ab2', '#ff758f'],
        });
      }, 200);
    } else if ([5, 10, 25, 50, 75].includes(newCount)) {
      soundManager.playChime();
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.6 },
      });
    }
  };

  const handleUndo = () => {
    if (count > 0) {
      soundManager.playPop();
      setCount((prev) => prev - 1);
    }
  };

  const handleResetConfirm = () => {
    soundManager.playPop();
    setCount(0);
    setShowResetConfirm(false);
  };

  return (
    <section id="situps" className="py-20 px-4 relative z-10 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-8 space-y-2">
        <div className="inline-flex items-center gap-2 bg-purple-100/90 text-purple-700 px-4 py-1.5 rounded-full text-xs font-bold border border-purple-200">
          <Dumbbell className="w-4 h-4 text-purple-600" />
          <span>Section 5 • Playful Apology Punishment</span>
        </div>
        <h2 className="font-heading text-4xl sm:text-6xl font-bold text-purple-900">
          Nidhi Ko Manane Ki Saza 😭🏋️‍♂️
        </h2>
        <p className="font-body text-base sm:text-lg text-purple-700 font-bold max-w-lg mx-auto">
          "Madam ji, aapke gusse ko kam karne ke liye janab sit-ups karenge! 🥹"
        </p>
      </div>

      {/* Main Challenge Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-10 border-2 border-purple-200/80 bg-white/90 shadow-2xl overflow-hidden relative">
        {/* Floating Meme Badges (Prostrating dogeza + kneeling) */}
        <div className="flex items-center justify-between gap-2 mb-6 pb-4 border-b border-purple-100">
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-purple-300 shadow-sm">
              <img
                src="/images/dogeza_apology_prostrating.jpg"
                alt="Janab Doing Dogeza Apology"
                className="w-full h-full object-cover"
                title="Janab on the floor begging for forgiveness"
              />
            </div>
            <div className="text-left">
              <span className="text-xs font-bold text-purple-800 block">Saza Tracker</span>
              <span className="text-[11px] text-purple-500 font-medium">100% Reps Dedicated to Nidhi</span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-pink-300 shadow-sm">
              <img
                src="/images/kneeling_praying_3d.jpg"
                alt="Janab Kneeling and Praying"
                className="w-full h-full object-cover"
                title="Janab kneeling and praying"
              />
            </div>
            <div className="text-right hidden sm:block">
              <span className="text-xs font-bold text-pink-700 block">Punishment Status</span>
              <span className="text-[11px] text-pink-500 font-medium">{milestone.status}</span>
            </div>
          </div>
        </div>

        {/* Counter Displays */}
        <div className="grid grid-cols-3 gap-3 sm:gap-6 text-center mb-8">
          <div className="bg-gradient-to-br from-pink-50 to-purple-50 p-4 rounded-2xl border border-purple-100 shadow-sm">
            <span className="text-xs font-bold text-purple-600 uppercase tracking-wider block">Completed</span>
            <span className="text-3xl sm:text-5xl font-extrabold text-purple-900 font-mono">{count}</span>
            <span className="text-[11px] text-purple-500 font-bold block mt-1">Sit-ups Done 💪</span>
          </div>

          <div className="bg-gradient-to-br from-purple-100/70 to-pink-100/70 p-4 rounded-2xl border border-pink-200 shadow-sm relative overflow-hidden">
            <span className="text-xs font-bold text-pink-700 uppercase tracking-wider block">Target</span>
            <span className="text-3xl sm:text-5xl font-extrabold text-pink-800 font-mono">{TARGET}</span>
            <span className="text-[11px] text-pink-600 font-bold block mt-1">Goal for Nidhi 🎯</span>
          </div>

          <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-4 rounded-2xl border border-rose-100 shadow-sm">
            <span className="text-xs font-bold text-rose-600 uppercase tracking-wider block">Remaining</span>
            <span className="text-3xl sm:text-5xl font-extrabold text-rose-800 font-mono">{remaining}</span>
            <span className="text-[11px] text-rose-500 font-bold block mt-1">Left to Suffer 😭</span>
          </div>
        </div>

        {/* Large Animated Progress Bar */}
        <div className="mb-8 space-y-2">
          <div className="flex justify-between text-xs sm:text-sm font-bold text-purple-800">
            <span>Forgiveness Effort Progress</span>
            <span className="font-mono text-purple-600">{progressPercent}%</span>
          </div>

          <div className="w-full h-6 sm:h-7 bg-purple-100 rounded-full p-1 border border-purple-200 relative overflow-hidden shadow-inner">
            <div
              className="h-full rounded-full bg-gradient-to-r from-pink-500 via-rose-500 to-purple-600 transition-all duration-300 relative flex items-center justify-end pr-2"
              style={{ width: `${progressPercent}%` }}
            >
              {progressPercent > 8 && (
                <span className="text-[10px] text-white font-extrabold font-mono">
                  {progressPercent}%
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Animated Character Stage (Sit-Up Illustration) */}
        <div className="bg-gradient-to-b from-purple-50/60 to-pink-50/60 rounded-2xl p-6 mb-6 flex flex-col items-center justify-center relative min-h-[180px] border border-purple-100">
          {/* Gym Mat */}
          <div className="w-64 sm:w-80 h-3 bg-purple-300 rounded-full shadow-sm mb-4" />

          {/* SVG Character bending */}
          <div className="relative flex items-center justify-center">
            <svg viewBox="0 0 200 120" className="w-48 h-28 sm:w-64 sm:h-36">
              {/* Floor line */}
              <line x1="20" y1="100" x2="180" y2="100" stroke="#C4B5FD" strokeWidth="4" strokeLinecap="round" />

              {/* Legs / Bent Knees */}
              <path d="M 140 100 L 160 70 L 175 100" stroke="#7C3AED" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              {/* Feet shoes */}
              <ellipse cx="178" cy="100" rx="8" ry="4" fill="#EC4899" />

              {/* Torso & Head - Pivots based on isBending */}
              <g
                className="transition-transform duration-200 origin-[140px_100px]"
                style={{
                  transform: isBending
                    ? 'rotate(-45deg)'
                    : count >= 50
                    ? 'rotate(0deg)'
                    : 'rotate(-25deg)',
                }}
              >
                {/* Torso */}
                <line x1="140" y1="100" x2="90" y2="70" stroke="#6D28D9" strokeWidth="14" strokeLinecap="round" />
                {/* Arms behind head */}
                <path d="M 105 80 L 80 65 L 75 75" stroke="#EC4899" strokeWidth="8" strokeLinecap="round" fill="none" />
                {/* Head */}
                <circle cx="75" cy="60" r="16" fill="#FDE047" stroke="#CA8A04" strokeWidth="2" />

                {/* Face expressions based on count */}
                {count >= 100 ? (
                  // Super happy smiling
                  <>
                    <path d="M 68 56 Q 71 52 74 56" stroke="#4A3E3D" strokeWidth="2" fill="none" />
                    <path d="M 78 56 Q 81 52 84 56" stroke="#4A3E3D" strokeWidth="2" fill="none" />
                    <path d="M 70 65 Q 76 72 82 65" stroke="#4A3E3D" strokeWidth="2" fill="none" />
                  </>
                ) : count >= 50 ? (
                  // Dramatically exhausted / dead face
                  <>
                    <text x="66" y="59" fontSize="11" fill="#4A3E3D">x</text>
                    <text x="76" y="59" fontSize="11" fill="#4A3E3D">x</text>
                    <ellipse cx="76" cy="68" rx="4" ry="2" fill="#4A3E3D" />
                  </>
                ) : count >= 25 ? (
                  // Tired panting face
                  <>
                    <circle cx="71" cy="58" r="2" fill="#4A3E3D" />
                    <circle cx="81" cy="58" r="2" fill="#4A3E3D" />
                    <ellipse cx="76" cy="66" rx="4" ry="3" fill="#EF4444" />
                  </>
                ) : (
                  // Determined puppy eyes
                  <>
                    <circle cx="71" cy="57" r="2.5" fill="#4A3E3D" />
                    <circle cx="81" cy="57" r="2.5" fill="#4A3E3D" />
                    <path d="M 72 65 Q 76 68 80 65" stroke="#4A3E3D" strokeWidth="1.5" fill="none" />
                  </>
                )}

                {/* Sweat drops if tired */}
                {count >= 10 && (
                  <path d="M 60 50 Q 58 45 61 43 Q 64 45 62 50 Z" fill="#38BDF8" className="animate-bounce" />
                )}
              </g>
            </svg>
          </div>

          {/* Dynamic Milestone Message Banner */}
          <div className="mt-3 text-center px-4 max-w-lg">
            <div className="bg-white/95 border-2 border-purple-200 rounded-2xl py-2.5 px-4 shadow-sm inline-block">
              <p className="text-xs sm:text-sm font-bold text-purple-900 whitespace-pre-line leading-relaxed">
                {milestone.message}
              </p>
            </div>
          </div>
        </div>

        {/* Buttons / Controls */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* Main +1 Situp Button */}
          <button
            onClick={() => handleAddSitup(1)}
            disabled={count >= TARGET}
            className={`px-8 py-3.5 rounded-full text-white font-extrabold text-base sm:text-lg shadow-lg flex items-center gap-2 transform active:scale-95 transition-all ${
              count >= TARGET
                ? 'bg-emerald-500 cursor-not-allowed opacity-90'
                : 'bg-gradient-to-r from-purple-600 via-pink-600 to-rose-500 hover:shadow-purple-300 hover:scale-105'
            }`}
          >
            <Dumbbell className="w-5 h-5" />
            <span>{count >= TARGET ? 'Target Achieved! 🏆' : '+1 Sit-Up Done! 💪🥺'}</span>
          </button>

          {/* +5 Quick Sit-ups Button */}
          {count < TARGET && (
            <button
              onClick={() => handleAddSitup(5)}
              className="px-5 py-3 rounded-full bg-purple-100 hover:bg-purple-200 text-purple-800 font-bold text-sm border border-purple-300 shadow-sm transition-all flex items-center gap-1.5"
            >
              <Flame className="w-4 h-4 text-orange-500" />
              <span>+5 Quick Reps! 🏃‍♂️</span>
            </button>
          )}

          {/* Undo Button */}
          {count > 0 && (
            <button
              onClick={handleUndo}
              className="px-4 py-3 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs sm:text-sm transition-colors flex items-center gap-1"
              title="Undo accidental click"
            >
              <Undo2 className="w-4 h-4" />
              <span>-1 Undo</span>
            </button>
          )}

          {/* Reset Button */}
          {count > 0 && (
            <button
              onClick={() => setShowResetConfirm(true)}
              className="px-4 py-3 rounded-full bg-rose-50 hover:bg-rose-100 text-rose-700 font-bold text-xs sm:text-sm border border-rose-200 transition-colors flex items-center gap-1"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset</span>
            </button>
          )}
        </div>

        {/* Dedicate Effort Button */}
        <div className="mt-8 text-center pt-4 border-t border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-1.5 text-xs text-purple-600/80 font-medium">
            <Info className="w-4 h-4 text-purple-400" />
            <span>Playful manual repetition counter — 100% pure dedication from the heart!</span>
          </div>

          <button
            onClick={() => {
              soundManager.playChime();
              setShowDedicationModal(true);
            }}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-xs sm:text-sm shadow-md hover:shadow-pink-300 hover:scale-105 transition-all flex items-center gap-2"
          >
            <Heart className="w-4 h-4 fill-white" />
            <span>Dedicate All My Efforts to Nidhi 💌</span>
          </button>
        </div>
      </div>

      {/* Reset Confirmation Modal */}
      {showResetConfirm && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-sm w-full text-center shadow-2xl border border-pink-200 space-y-4">
            <span className="text-4xl">🥺</span>
            <h3 className="font-heading text-2xl font-bold text-pink-700">
              Reset Saza Counter?
            </h3>
            <p className="text-xs sm:text-sm text-pink-600 font-semibold leading-relaxed">
              "Aap chahti ho main shuru se fir se karun? Bilkul karunga Madam ji, aapki ek smile ke liye 100 kya, 1000 sit-ups bhi karunga!"
            </p>
            <div className="flex gap-2 justify-center pt-2">
              <button
                onClick={handleResetConfirm}
                className="px-5 py-2 rounded-full bg-rose-500 text-white font-bold text-xs shadow-md hover:bg-rose-600"
              >
                Yes, Start Again 😭
              </button>
              <button
                onClick={() => setShowResetConfirm(false)}
                className="px-5 py-2 rounded-full bg-gray-100 text-gray-700 font-bold text-xs hover:bg-gray-200"
              >
                Keep Progress
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Dedication Modal */}
      {showDedicationModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-[#FFFDF9] rounded-3xl p-6 sm:p-8 max-w-md w-full text-left shadow-2xl border-2 border-pink-300 relative space-y-4">
            <div className="flex items-center justify-between border-b border-pink-100 pb-3">
              <div className="flex items-center gap-2">
                <span className="text-2xl">🏆</span>
                <h3 className="font-heading text-2xl font-bold text-rose-700">
                  Certificate of Apology & Dedication
                </h3>
              </div>
              <button
                onClick={() => setShowDedicationModal(false)}
                className="text-gray-400 hover:text-gray-600 font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <p className="font-body text-sm sm:text-base text-[#4A3B47] leading-relaxed">
              "This certifies that every single sit-up, every drop of sweat, and every single second of effort was performed solely to earn a smile on Nidhi's face.
            </p>

            <p className="font-body text-sm sm:text-base text-rose-600 font-bold">
              Kasam se, Nidhi... You mean the world to me. Chahe mujhe kitni bhi saza mile, main tumhe manane ke liye hamesha tayyar hoon. ❤️"
            </p>

            <div className="pt-2 text-right font-romantic text-pink-600 text-lg">
              — Tumhara apna pagal gym boy 🏋️‍♂️🥺
            </div>

            <button
              onClick={() => setShowDedicationModal(false)}
              className="w-full py-2.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold text-sm shadow-md"
            >
              Dedication Accepted with Love 💖
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
