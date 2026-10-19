import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    // Only enable on devices with fine pointer (mouse / trackpad), disable on touchscreens
    const hasFinePointer = window.matchMedia('(pointer: fine)').matches;
    if (!hasFinePointer) return;

    setEnabled(true);

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Target hover check
      const target = e.target;
      const isClickable =
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.getAttribute('role') === 'button';
      setIsPointer(Boolean(isClickable));

      // Occasional sparkle
      if (Math.random() > 0.85) {
        const id = Date.now() + Math.random();
        setSparks((prev) => [
          ...prev.slice(-8),
          { id, x: e.clientX, y: e.clientY, size: Math.random() * 8 + 4 }
        ]);
        setTimeout(() => {
          setSparks((prev) => prev.filter((s) => s.id !== id));
        }, 700);
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
    };
  }, []);

  // Smooth trail animation
  useEffect(() => {
    if (!enabled) return;
    let frame;
    const follow = () => {
      setTrailingPos((prev) => ({
        x: prev.x + (position.x - prev.x) * 0.18,
        y: prev.y + (position.y - prev.y) * 0.18,
      }));
      frame = requestAnimationFrame(follow);
    };
    frame = requestAnimationFrame(follow);
    return () => cancelAnimationFrame(frame);
  }, [position, enabled]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Trailing Soft Halo */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 rounded-full transition-transform duration-75"
        style={{
          left: `${trailingPos.x}px`,
          top: `${trailingPos.y}px`,
          width: isPointer ? '42px' : '32px',
          height: isPointer ? '42px' : '32px',
          background: isPointer
            ? 'radial-gradient(circle, rgba(251,111,146,0.3) 0%, rgba(255,179,198,0) 70%)'
            : 'radial-gradient(circle, rgba(244,114,154,0.2) 0%, rgba(255,200,220,0) 70%)',
          border: isPointer ? '1.5px solid rgba(251,111,146,0.5)' : '1px solid rgba(251,111,146,0.25)',
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.8 : 1})`,
        }}
      />

      {/* Main Cursor Core (Mini glowing heart / dot) */}
      <div
        className="fixed -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 text-[11px]"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isClicking ? 0.75 : isPointer ? 1.3 : 1})`,
        }}
      >
        <span className="drop-shadow-[0_0_6px_rgba(224,30,90,0.8)] select-none">
          {isPointer ? '💖' : '🌸'}
        </span>
      </div>

      {/* Trailing tiny sparkles */}
      {sparks.map((spark) => (
        <span
          key={spark.id}
          className="fixed -translate-x-1/2 -translate-y-1/2 pointer-events-none text-rose-400 opacity-70 animate-ping text-[10px]"
          style={{
            left: `${spark.x}px`,
            top: `${spark.y}px`,
          }}
        >
          ✨
        </span>
      ))}
    </div>
  );
}
