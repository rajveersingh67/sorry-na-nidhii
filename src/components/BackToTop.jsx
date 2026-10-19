import React, { useState, useEffect } from 'react';
import { ArrowUp, Heart } from 'lucide-react';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3.5 rounded-full bg-white/90 backdrop-blur-md text-rose-600 border border-rose-200/90 shadow-romantic hover:bg-rose-50 hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group"
      title="Back to Top"
      aria-label="Back to Top"
    >
      <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
    </button>
  );
}
