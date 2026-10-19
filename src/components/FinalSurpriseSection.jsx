import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, Sparkles, Copy, Check, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { romanticAudio } from '../utils/soundEffects';
import { BigWarmHugSticker, VelvetRoseSticker } from './RomanticStickers';

export default function FinalSurpriseSection() {
  const [hugSent, setHugSent] = useState(false);
  const [userNote, setUserNote] = useState('');
  const [copied, setCopied] = useState(false);

  const handleSendHug = (e) => {
    romanticAudio.playChime();
    setHugSent(true);

    const rect = e.currentTarget.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    const end = Date.now() + 1800;
    const colors = ['#FB6F92', '#FFB3C6', '#E01E5A', '#FFD166', '#E8DFF5'];

    (function frame() {
      confetti({
        particleCount: 6,
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.7 },
        colors,
        shapes: ['heart', 'circle'],
      });
      confetti({
        particleCount: 6,
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.7 },
        colors,
        shapes: ['heart', 'circle'],
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  };

  const handleCopyNote = () => {
    if (!userNote.trim()) return;
    navigator.clipboard.writeText(userNote);
    setCopied(true);
    romanticAudio.playChime();
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section
      id="surprise"
      className="py-28 px-4 sm:px-6 relative overflow-hidden bg-gradient-to-b from-[#250d22] via-[#3a1332] to-[#1a0718] text-white"
    >
      {/* Background glowing stars and ambient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-rose-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-[32rem] h-[32rem] rounded-full bg-purple-600/20 blur-3xl" />

        {/* Twinkling stars */}
        {[...Array(24)].map((_, i) => (
          <div
            key={i}
            className="absolute text-rose-300/40 text-xs animate-pulse select-none"
            style={{
              top: `${(i * 19) % 95}%`,
              left: `${(i * 27) % 95}%`,
              animationDelay: `${(i % 5) * 0.4}s`,
              animationDuration: `${2.5 + (i % 3)}s`,
            }}
          >
            ✦
          </div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-rose-500/20 text-rose-200 text-xs sm:text-sm font-medium mb-4 border border-rose-400/30 backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>Before You Leave This Page</span>
            <span className="text-rose-300">🌸</span>
          </div>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif font-bold text-white tracking-tight leading-tight">
            One Last Thing, My Dearest Nidhi... 💌
          </h2>
        </motion.div>

        {/* Central Heartfelt Apology Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass-card-dark rounded-3xl p-8 sm:p-14 mb-12 max-w-3xl mx-auto border border-rose-300/30 relative"
        >
          {/* Animated Hug Sticker or Glowing Heart */}
          <div className="mb-6 flex justify-center">
            {hugSent ? (
              <div className="animate-bounce">
                <BigWarmHugSticker size={105} />
              </div>
            ) : (
              <div className="w-18 h-18 rounded-full bg-rose-500/30 border border-rose-400/40 flex items-center justify-center shadow-romantic-glow">
                <Heart className="w-9 h-9 text-rose-400 fill-rose-400 animate-pulse" />
              </div>
            )}
          </div>

          <p className="font-serif text-lg sm:text-2xl text-rose-100 font-normal leading-relaxed mb-6">
            "I'm not asking you to forget what happened. I'm asking for the opportunity to understand how you feel, learn from my mistake, and show you that your feelings truly matter to me."
          </p>

          <p className="font-serif italic text-xl sm:text-3xl text-rose-300 font-semibold mb-8">
            You are important to me, Nidhi. And I'm sorry for hurting you. ❤️
          </p>

          {/* Virtual Hug Button */}
          <div className="flex flex-col items-center justify-center gap-4">
            <button
              onClick={handleSendHug}
              className="px-8 sm:px-12 py-4 rounded-full text-lg font-bold text-white bg-gradient-to-r from-rose-500 via-pink-500 to-rose-600 shadow-romantic-glow hover:scale-105 active:scale-95 transition-all duration-300 flex items-center gap-3 border border-rose-300/40 cursor-pointer"
            >
              <span>Send You A Big Hug</span>
              <span className="text-2xl">🫂</span>
            </button>

            {/* Hug Delivery Notification */}
            <AnimatePresence>
              {hugSent && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-5 rounded-2xl bg-rose-950/80 border border-rose-400/50 backdrop-blur-md max-w-md mx-auto text-rose-200 text-sm sm:text-base font-serif italic shadow-xl flex flex-col items-center gap-2"
                >
                  <div className="flex items-center gap-1.5 text-xs text-amber-300 font-sans uppercase font-bold tracking-widest">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Special Warmth Delivered</span>
                    <Sparkles className="w-3.5 h-3.5" />
                  </div>
                  <p className="text-center">
                    "Virtual hug delivered to Nidhi! 🫂💗 Sending you all the warmth, soft forehead kisses 💋, and love in my heart."
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Optional Message Box for her */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="glass-card-dark rounded-3xl p-6 sm:p-8 max-w-2xl mx-auto border border-rose-400/20 text-left relative"
        >
          <div className="flex items-center gap-2 mb-3">
            <MessageCircle className="w-5 h-5 text-rose-400" />
            <h3 className="text-base sm:text-lg font-serif font-semibold text-rose-200">
              Want to tell me something, Nidhi? (Optional)
            </h3>
          </div>
          <p className="text-xs text-rose-200/70 mb-4 font-light">
            Write down what is on your mind. You can copy it to send to me on WhatsApp or chat whenever you are ready:
          </p>

          <textarea
            value={userNote}
            onChange={(e) => setUserNote(e.target.value)}
            rows={4}
            placeholder="Type anything here... what hurt you, what you need from me, or how you're feeling right now..."
            className="w-full bg-black/40 border border-rose-400/30 rounded-2xl p-4 text-sm text-rose-100 placeholder-rose-300/40 focus:outline-none focus:ring-2 focus:ring-rose-400/60 resize-none transition-all"
          />

          <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyNote}
                disabled={!userNote.trim()}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  userNote.trim()
                    ? 'bg-rose-500 hover:bg-rose-600 text-white shadow-md'
                    : 'bg-white/10 text-rose-300/40 cursor-not-allowed'
                }`}
              >
                {copied ? <Check className="w-4 h-4 text-green-300" /> : <Copy className="w-4 h-4" />}
                <span>{copied ? 'Copied to Clipboard! 💌' : 'Copy My Message 📋'}</span>
              </button>

              {userNote.trim() && (
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(userNote)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold bg-emerald-600 hover:bg-emerald-700 text-white flex items-center gap-1.5 transition-colors shadow-sm"
                  title="Open directly in WhatsApp"
                >
                  <span>WhatsApp 💬</span>
                </a>
              )}
            </div>

            <p className="text-[11px] text-rose-300/60 italic text-center sm:text-right">
              {copied ? 'Ready to paste into our chat! ❤️' : 'Private to your browser only'}
            </p>
          </div>

          <p className="text-[11px] text-rose-300/50 mt-3 pt-3 border-t border-rose-500/20 italic">
            * Note: Since no external database or server is required, your words stay 100% private in your browser. Clicking "Copy My Message" copies it directly to your clipboard.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
