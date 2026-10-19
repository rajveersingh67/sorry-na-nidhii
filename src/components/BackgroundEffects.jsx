import React, { useEffect, useRef } from 'react';

export default function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    // Particle types: stars, petals, sparkles
    const particleCount = Math.min(50, Math.floor(window.innerWidth / 25));
    const particles = [];

    const colors = [
      'rgba(251, 111, 146, 0.45)', // rose
      'rgba(255, 179, 198, 0.4)',  // soft blush
      'rgba(232, 223, 245, 0.45)', // lavender
      'rgba(244, 208, 111, 0.35)', // soft gold
      'rgba(255, 255, 255, 0.6)',  // white sparkle
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 3.5 + 1.2,
        speedX: (Math.random() - 0.5) * 0.4,
        speedY: Math.random() * 0.6 + 0.2, // gentle downward or upward float
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
        isPetal: Math.random() > 0.6,
        opacity: Math.random() * 0.6 + 0.2,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(p.angle) * 0.5 + p.speedX;
        p.angle += p.angularSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x < -20) p.x = width + 20;
        if (p.x > width + 20) p.x = -20;

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.angle);

        if (p.isPetal) {
          // Draw subtle rose petal shape
          ctx.beginPath();
          ctx.fillStyle = p.color;
          ctx.ellipse(0, 0, p.size * 2, p.size * 1.2, Math.PI / 4, 0, Math.PI * 2);
          ctx.fill();
        } else {
          // Draw glowing star/sparkle
          ctx.beginPath();
          ctx.arc(0, 0, p.size, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.shadowBlur = 8;
          ctx.shadowColor = p.color;
          ctx.fill();
        }

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Background canvas for gentle sparkles & petals */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-0"
        style={{ opacity: 0.85 }}
      />

      {/* Ambient background soft light glows */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-rose-200/40 blur-3xl animate-pulse-glow" />
        <div className="absolute top-1/3 -right-40 w-[30rem] h-[30rem] rounded-full bg-purple-200/35 blur-3xl animate-float-slow" />
        <div className="absolute bottom-10 left-1/4 w-96 h-96 rounded-full bg-pink-200/35 blur-3xl animate-float-reverse" />
        <div className="absolute -bottom-20 right-10 w-80 h-80 rounded-full bg-amber-100/40 blur-3xl" />
      </div>
    </>
  );
}
