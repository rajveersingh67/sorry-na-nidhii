import React, { useState, useEffect } from 'react';
import { Heart, Menu, X, Sparkles } from 'lucide-react';

export default function Navbar({ onOpenHeart }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / (totalScroll || 1)) * 100;
      setScrollProgress(currentProgress);
      setIsScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'My Heart', href: '#hero' },
    { label: 'Forgive Me', href: '#photos' },
    { label: 'The Letter', href: '#letter' },
    { label: 'Treasured Moments', href: '#memories' },
    { label: '5 Reasons', href: '#reasons' },
    { label: 'My Promises', href: '#promises' },
    { label: 'Can We Talk?', href: '#game' },
    { label: 'A Special Hug', href: '#surprise' },
  ];

  return (
    <>
      {/* Scroll Progress Bar at Top */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-rose-100 z-50">
        <div
          className="h-full bg-gradient-to-r from-rose-400 via-pink-500 to-rose-600 transition-all duration-150"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'glass-card py-3.5 shadow-sm border-b border-rose-200/40'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
          {/* Logo / Sweet Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2 group text-rose-800 hover:text-rose-600 transition-colors"
          >
            <div className="relative">
              <Heart className="w-6 h-6 text-rose-500 fill-rose-500 transition-transform group-hover:scale-110 duration-200" />
              <Sparkles className="w-3.5 h-3.5 text-amber-400 absolute -top-1 -right-1 animate-spin-slow" />
            </div>
            <span className="font-serif italic text-lg sm:text-xl font-bold tracking-wide text-rose-950">
              For Nidhi, Meri Jaan ❤️
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-3 text-sm font-medium">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-rose-900/80 hover:text-rose-600 hover:bg-rose-100/50 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#letter"
              className="ml-2 px-4 py-1.5 rounded-full text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 shadow-sm transition-all transform hover:scale-105"
            >
              Read Letter 💌
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl text-rose-800 hover:bg-rose-100/60 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden glass-card mx-4 mt-2 p-4 rounded-2xl border border-rose-200/80 shadow-romantic animate-in fade-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-2.5 rounded-xl text-rose-900/90 font-medium hover:bg-rose-100/70 hover:text-rose-600 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <Heart className="w-3.5 h-3.5 text-rose-300" />
                </a>
              ))}
              <div className="pt-2 border-t border-rose-100">
                <a
                  href="#letter"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full block text-center py-2.5 rounded-xl bg-gradient-to-r from-rose-500 to-pink-500 text-white font-medium text-sm shadow-sm"
                >
                  Open Handwritten Letter 💌
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
