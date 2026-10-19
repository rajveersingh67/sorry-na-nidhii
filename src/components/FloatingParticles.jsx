import React, { useEffect, useState } from 'react';

export default function FloatingParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate static initial particles to float around
    const symbols = ['💖', '✨', '🌸', '🧸', '💕', '🌷', '🤍', '🎀', '⭐'];
    const items = Array.from({ length: 24 }).map((_, i) => ({
      id: i,
      symbol: symbols[i % symbols.length],
      left: Math.random() * 95,
      top: Math.random() * 100,
      size: 14 + Math.random() * 18,
      duration: 10 + Math.random() * 15,
      delay: Math.random() * 8,
      opacity: 0.25 + Math.random() * 0.45,
    }));
    setParticles(items);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Ambient glowing radial spots */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-pink-300/25 rounded-full blur-3xl animate-float-slow" />
      <div className="absolute top-1/2 right-5 w-80 h-80 bg-purple-300/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-1/3 w-96 h-96 bg-rose-200/25 rounded-full blur-3xl animate-float-slow" />

      {/* Floating cute symbols */}
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute select-none transition-transform will-change-transform"
          style={{
            left: `${p.left}%`,
            top: `${p.top}%`,
            fontSize: `${p.size}px`,
            opacity: p.opacity,
            animation: `float-slow ${p.duration}s ease-in-out infinite`,
            animationDelay: `${p.delay}s`,
          }}
        >
          {p.symbol}
        </div>
      ))}
    </div>
  );
}
