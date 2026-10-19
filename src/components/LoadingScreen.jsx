import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Sparkles } from 'lucide-react';

export default function LoadingScreen({ onFinish }) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-[#FFF0F5] via-[#FFF8FA] to-[#FDF4F8] text-rose-900"
    >
      <div className="relative flex flex-col items-center">
        {/* Beating Heart Icon */}
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.25, 1, 1.2, 1],
            }}
            transition={{
              duration: 1.4,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="w-20 h-20 rounded-full bg-gradient-to-tr from-rose-500 to-pink-400 flex items-center justify-center shadow-romantic-glow text-white"
          >
            <Heart className="w-10 h-10 fill-white text-white" />
          </motion.div>

          <Sparkles className="w-5 h-5 text-amber-400 absolute -top-1 -right-1 animate-spin-slow" />
        </div>

        {/* Loading text */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 font-serif italic text-lg sm:text-xl text-rose-900 font-medium tracking-wide"
        >
          Opening My Heart For Nidhi... 💌
        </motion.p>

        <p className="text-xs text-rose-500/75 mt-1 font-light">
          Preparing a sincere message, just for Nidhi meri jaan
        </p>

        {/* Subtle progress indicator */}
        <div className="w-36 h-1.5 bg-rose-200/60 rounded-full mt-6 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.6, ease: 'easeInOut' }}
            onAnimationComplete={onFinish}
            className="h-full bg-gradient-to-r from-rose-400 to-pink-500"
          />
        </div>
      </div>
    </motion.div>
  );
}
