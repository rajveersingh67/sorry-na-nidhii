import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, Heart, Sparkles, Film, Image as ImageIcon, Plus, Flame } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/soundEffects';
import { SitupsWorkoutSticker, SweatDropSticker, WashiTapeSticker } from './RomanticStickers';

export default function VideoMemorySection() {
  const [isPlayingVideo, setIsPlayingVideo] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [flippedCard, setFlippedCard] = useState(null);
  const [situpCount, setSitupCount] = useState(12);
  const videoRef = useRef(null);

  // Checks for local situps.mp4 first, falls back gracefully to ambient romantic video or animated workout visualizer
  const videoSrc = "/assets/situps.mp4";

  const workoutReactions = [
    { at: 0, text: "Ready for my punishment! Click to make me do sit-ups for Nidhi! 🥺" },
    { at: 5, text: "Huff... puff... starting to sweat, but anything for Nidhi! 💦" },
    { at: 15, text: "Uff meri kamar... but Nidhi's smile is worth 1000 sit-ups! 😭" },
    { at: 25, text: "Ear holding + sit-ups in full effect: कान पकड़ के सॉरी Nidhi! 🙇‍♂️" },
    { at: 40, text: "Sweat drops everywhere! Still not giving up on making Nidhi smile! 🥵" },
    { at: 60, text: "Exhausted but 1000% loyal to Nidhi, meri pyaari jaan! 🏳️❤️" },
  ];

  const currentReaction =
    [...workoutReactions].reverse().find((r) => situpCount >= r.at)?.text || workoutReactions[0].text;

  const handleDoSitup = (e) => {
    romanticAudio.playChime();
    setSitupCount((prev) => prev + 1);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: 18,
      spread: 50,
      origin: { x, y },
      colors: ['#74B9FF', '#0984E3', '#FB6F92', '#FFB3C6'],
      shapes: ['circle'],
      scalar: 1,
    });
  };

  const toggleVideo = () => {
    romanticAudio.playChime();
    if (videoRef.current) {
      if (isPlayingVideo) {
        videoRef.current.pause();
        setIsPlayingVideo(false);
      } else {
        videoRef.current
          .play()
          .then(() => {
            setIsPlayingVideo(true);
          })
          .catch(() => {
            setVideoError(true);
          });
      }
    } else {
      setIsPlayingVideo(!isPlayingVideo);
    }
  };

  const handleCardClick = (cardId) => {
    romanticAudio.playPaperSound();
    setFlippedCard(flippedCard === cardId ? null : cardId);
  };

  return (
    <section id="memories" className="py-24 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Title */}
      <div className="text-center max-w-2xl mx-auto mb-16 relative">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-100/80 text-rose-800 text-xs sm:text-sm font-medium mb-3 border border-rose-200">
          <Film className="w-3.5 h-3.5 text-rose-500" />
          <span>Cinematic Apology & Punishments</span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-gray-900 tracking-tight">
          A Little Something Just For Nidhi 🎬
        </h2>
        <p className="mt-3 text-base text-gray-600 font-light">
          Punishment accepted: Ear-holding sit-ups and memories close to my heart.
        </p>

        {/* Floating sweat drops in header */}
        <div className="hidden sm:block absolute right-4 top-2 pointer-events-none">
          <SweatDropSticker size={36} />
        </div>
      </div>

      {/* Cinematic Video / Sit-ups Punishment Card */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="glass-card rounded-3xl p-4 sm:p-7 mb-16 shadow-romantic-lg border border-rose-200/80 overflow-hidden relative"
      >
        {/* Decorative corner washi tape */}
        <div className="absolute top-2 left-8 z-30">
          <WashiTapeSticker color="purple" rotate="-3deg" />
        </div>

        {/* Video Screen Container */}
        <div className="relative w-full aspect-video sm:h-[440px] rounded-2xl overflow-hidden bg-slate-950 flex items-center justify-center shadow-inner">
          {/* Falling Rose Petals & Sweat Drops Layer on Video */}
          <div className="absolute inset-0 pointer-events-none z-10 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="absolute text-rose-400/60 text-lg select-none animate-float-slow"
                style={{
                  left: `${15 + i * 14}%`,
                  top: `${12 + (i % 4) * 20}%`,
                  animationDelay: `${i * 0.7}s`,
                  animationDuration: `${5 + (i % 3) * 2}s`,
                }}
              >
                🌸
              </div>
            ))}
            {/* Ambient sweat drops */}
            <div className="absolute top-6 right-8 opacity-80 animate-bounce">
              <SweatDropSticker size={28} />
            </div>
            <div className="absolute bottom-16 left-8 opacity-75 animate-pulse">
              <SweatDropSticker size={24} />
            </div>
          </div>

          {!videoError ? (
            <video
              ref={videoRef}
              src={videoSrc}
              loop
              muted
              playsInline
              onError={() => setVideoError(true)}
              className="w-full h-full object-cover"
            />
          ) : (
            /* Animated Sit-ups Apology Character Fallback */
            <div className="w-full h-full bg-gradient-to-tr from-[#1f0b1f] via-[#2f112d] to-[#45103a] flex flex-col items-center justify-center text-center p-6 text-white relative">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,transparent_70%)]" />

              <div className="relative z-10 flex flex-col items-center">
                <SitupsWorkoutSticker size={120} />

                <div className="mt-4 px-4 py-1.5 rounded-full bg-rose-500/30 border border-rose-300/40 text-rose-200 text-xs font-semibold flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
                  <span>Apology Workout: Silly Boy's Uthak-Baithak Mode</span>
                  <SweatDropSticker size={20} />
                </div>

                <p className="font-serif italic text-lg sm:text-xl text-rose-100 max-w-md mt-3">
                  "Holding my ears and doing sit-ups until Nidhi gives me that pretty smile again! 🥺💦"
                </p>
              </div>
            </div>
          )}

          {/* Video Overlay Play/Pause Button */}
          {!videoError && (
            <div className="absolute inset-0 bg-black/25 flex items-center justify-center opacity-90 transition-opacity hover:opacity-100 z-20">
              <button
                onClick={toggleVideo}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-white/90 backdrop-blur-md text-rose-600 flex items-center justify-center shadow-romantic-lg hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-rose-200 cursor-pointer"
                aria-label={isPlayingVideo ? 'Pause Video' : 'Play Video'}
              >
                {isPlayingVideo ? (
                  <Pause className="w-8 h-8 fill-rose-600" />
                ) : (
                  <Play className="w-8 h-8 ml-1 fill-rose-600" />
                )}
              </button>
            </div>
          )}

          {/* Bottom Title Bar on Video */}
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/85 via-black/40 to-transparent flex items-center justify-between text-white text-xs sm:text-sm z-20">
            <span className="flex items-center gap-2 font-medium">
              <Sparkles className="w-4 h-4 text-amber-300" />
              Silly Boy's Apology & Punishment Corner for Nidhi
            </span>
            <span className="text-rose-200/90 font-serif italic flex items-center gap-1">
              <span>Sweat level: Maximum</span>
              <SweatDropSticker size={16} />
            </span>
          </div>
        </div>

        {/* Interactive Sit-up Punishment Counter Panel */}
        <div className="mt-6 p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-rose-50 via-pink-50 to-purple-50 border border-rose-200/80 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-rose-500/10 border border-rose-300 flex items-center justify-center text-rose-600 shrink-0">
              <SitupsWorkoutSticker size={42} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-900">
                  Sit-ups Done For Nidhi:
                </span>
                <span className="text-base font-extrabold text-rose-600 bg-white px-2 py-0.5 rounded-lg border border-rose-200 shadow-xs">
                  {situpCount} Reps 🏋️‍♂️
                </span>
              </div>
              <p className="text-xs text-rose-700 font-serif italic mt-0.5">
                "{currentReaction}"
              </p>
            </div>
          </div>

          <button
            onClick={handleDoSitup}
            className="w-full md:w-auto px-6 py-2.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-sm transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Punish Me: 1 More Sit-up For Nidhi! 💦</span>
            <SweatDropSticker size={18} />
          </button>
        </div>
      </motion.div>

      {/* 3 Animated Reveal Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1: Things I Love About You */}
        <motion.div
          whileHover={{ y: -6 }}
          className="glass-card rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-romantic cursor-pointer transition-all duration-300 relative flex flex-col justify-between"
          onClick={() => handleCardClick('love')}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                Card 01
              </span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500 animate-pulse" />
            </div>

            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
              Things I Love About You ❤️
            </h3>
            <p className="text-xs text-rose-700/80 mb-4">
              {flippedCard === 'love' ? 'Tap to fold back' : 'Tap to reveal what I cherish'}
            </p>

            <AnimatePresence>
              {flippedCard === 'love' ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-2.5 text-sm text-gray-700 font-light border-t border-rose-100 pt-4"
                >
                  <p className="flex items-start gap-2">
                    <span className="text-rose-500">✨</span>
                    <span>The unconditional warmth and kindness you bring into every room.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-rose-500">✨</span>
                    <span>How your laughter can instantly wash away all my worries.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-rose-500">✨</span>
                    <span>Your cute silly habits that only I get to witness and adore.</span>
                  </p>
                  <p className="flex items-start gap-2">
                    <span className="text-rose-500">✨</span>
                    <span>The depth and sincerity of that precious heart of yours.</span>
                  </p>
                </motion.div>
              ) : (
                <div className="py-6 flex flex-col items-center justify-center text-rose-400 bg-rose-50/50 rounded-2xl border border-dashed border-rose-200">
                  <Heart className="w-8 h-8 mb-2 fill-rose-200/50" />
                  <span className="text-xs font-medium">Click to unlock reasons</span>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-3 border-t border-rose-100 text-[11px] text-rose-500 font-serif italic text-right">
            Always in awe of you
          </div>
        </motion.div>

        {/* Card 2: Memories I Treasure (With Editable Placeholders) */}
        <motion.div
          whileHover={{ y: -6 }}
          className="glass-card rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-romantic cursor-pointer transition-all duration-300 relative flex flex-col justify-between"
          onClick={() => handleCardClick('memories')}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-purple-100 text-purple-800 border border-purple-200">
                Card 02
              </span>
              <Sparkles className="w-5 h-5 text-purple-500" />
            </div>

            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
              Memories I Treasure 🥹
            </h3>
            <p className="text-xs text-purple-700/80 mb-4">
              {flippedCard === 'memories' ? 'Tap to fold back' : 'Tap to view memory albums'}
            </p>

            <AnimatePresence>
              {flippedCard === 'memories' ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 text-sm text-gray-700 font-light border-t border-rose-100 pt-4"
                >
                  <div className="p-3 rounded-xl bg-purple-50/70 border border-dashed border-purple-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-200/60 flex items-center justify-center text-purple-700 shrink-0">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-purple-900">
                        Memory 1: Our Special Firsts
                      </p>
                      <p className="text-[11px] text-purple-700/80">
                        Editable spot for our favorite first date photo & smiles 📸
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-rose-50/70 border border-dashed border-rose-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-rose-200/60 flex items-center justify-center text-rose-700 shrink-0">
                      <ImageIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-rose-900">
                        Memory 2: Late Night Talks
                      </p>
                      <p className="text-[11px] text-rose-700/80">
                        Editable spot for our silly screenshot & sweet memories 🌙
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-pink-50/70 border border-dashed border-pink-200 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-pink-200/60 flex items-center justify-center text-pink-700 shrink-0">
                      <Plus className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-pink-900">
                        Future Memory: Making Up Soon
                      </p>
                      <p className="text-[11px] text-pink-700/80">
                        Reserved for the smile when we hug and talk again 🌸
                      </p>
                    </div>
                  </div>
                </motion.div>
              ) : (
                <div className="py-6 flex flex-col items-center justify-center text-purple-400 bg-purple-50/50 rounded-2xl border border-dashed border-purple-200">
                  <ImageIcon className="w-8 h-8 mb-2 opacity-60" />
                  <span className="text-xs font-medium">Click to view photo placeholders</span>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-3 border-t border-purple-100 text-[11px] text-purple-600 font-serif italic text-right">
            Customizable for our real photos
          </div>
        </motion.div>

        {/* Card 3: A Promise From My Heart */}
        <motion.div
          whileHover={{ y: -6 }}
          className="glass-card rounded-3xl p-6 sm:p-7 border border-rose-200/80 shadow-romantic cursor-pointer transition-all duration-300 relative flex flex-col justify-between"
          onClick={() => handleCardClick('promise')}
        >
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-rose-100 text-rose-800 border border-rose-200">
                Card 03
              </span>
              <Heart className="w-5 h-5 text-rose-500 fill-rose-500" />
            </div>

            <h3 className="text-xl font-serif font-bold text-gray-900 mb-2">
              A Promise From My Heart 💗
            </h3>
            <p className="text-xs text-rose-700/80 mb-4">
              {flippedCard === 'promise' ? 'Tap to fold back' : 'Tap to reveal my promise'}
            </p>

            <AnimatePresence>
              {flippedCard === 'promise' ? (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="space-y-3 text-sm text-gray-700 font-light border-t border-rose-100 pt-4"
                >
                  <p className="italic font-serif text-rose-950 leading-relaxed bg-rose-50/80 p-3.5 rounded-2xl border border-rose-200/70">
                    "I promise to never take your presence for granted. To listen when you speak, to comfort you when you are hurt, and to cherish you today, tomorrow, and every day that follows."
                  </p>
                  <p className="text-xs text-gray-600">
                    Not an empty promise, but a lifelong commitment to growing together with you.
                  </p>
                </motion.div>
              ) : (
                <div className="py-6 flex flex-col items-center justify-center text-rose-400 bg-rose-50/50 rounded-2xl border border-dashed border-rose-200">
                  <Heart className="w-8 h-8 mb-2 fill-rose-200/50" />
                  <span className="text-xs font-medium">Click to unlock heart promise</span>
                </div>
              )}
            </AnimatePresence>
          </div>

          <div className="mt-4 pt-3 border-t border-rose-100 text-[11px] text-rose-500 font-serif italic text-right">
            Written with sincere intention
          </div>
        </motion.div>
      </div>
    </section>
  );
}
