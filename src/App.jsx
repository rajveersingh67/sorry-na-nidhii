import React, { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

import BackgroundEffects from './components/BackgroundEffects';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import PhotoApologySection from './components/PhotoApologySection';
import LetterSection from './components/LetterSection';
import VideoMemorySection from './components/VideoMemorySection';
import ReasonsSection from './components/ReasonsSection';
import PromiseWallSection from './components/PromiseWallSection';
import ApologyGameSection from './components/ApologyGameSection';
import FinalSurpriseSection from './components/FinalSurpriseSection';
import AudioPlayer from './components/AudioPlayer';
import BackToTop from './components/BackToTop';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#FFF8FA] text-gray-800 overflow-x-hidden">
      {/* Initial Loading Screen */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onFinish={() => setIsLoading(false)} />}
      </AnimatePresence>

      {/* Desktop Animated Glow Cursor */}
      <CustomCursor />

      {/* Ambient Sparkles, Petals, and Glows */}
      <BackgroundEffects />

      {/* Navigation Bar with Scroll Progress Indicator */}
      <Navbar onOpenHeart={() => {}} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        {/* 1. Full-screen Hero Apology Opening */}
        <HeroSection
          onOpenHeart={() => {}}
          isMusicPlaying={isMusicPlaying}
          setIsMusicPlaying={setIsMusicPlaying}
        />

        {/* 2. Three Apology Photos & Cards */}
        <PhotoApologySection />

        {/* 3. Long Heartfelt Apology Letter with Typewriter Replay */}
        <LetterSection />

        {/* 4. Cinematic Video & Memory Flip Cards */}
        <VideoMemorySection />

        {/* 5. 5 Little Reasons You Mean So Much To Me */}
        <ReasonsSection />

        {/* 6. Scrapbook Promise Wall */}
        <PromiseWallSection />

        {/* 7. Interactive Respectful Apology Game */}
        <ApologyGameSection />

        {/* 8. Final Cinematic Surprise & Virtual Hug */}
        <FinalSurpriseSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Audio Controller */}
      <AudioPlayer
        isPlaying={isMusicPlaying}
        setIsPlaying={setIsMusicPlaying}
      />

      {/* Back to Top Floating Button */}
      <BackToTop />
    </div>
  );
}
