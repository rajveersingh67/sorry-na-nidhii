import React, { useState } from 'react';
import FloatingParticles from './components/FloatingParticles';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ApologyLetter from './components/ApologyLetter';
import HugExperience from './components/HugExperience';
import SitupsChallenge from './components/SitupsChallenge';
import StickerGallery from './components/StickerGallery';
import ReasonsSpecial from './components/ReasonsSpecial';
import SurpriseGift from './components/SurpriseGift';
import LoveMeter from './components/LoveMeter';
import FinalApology from './components/FinalApology';
import Footer from './components/Footer';

export default function App() {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const [sfxEnabled, setSfxEnabled] = useState(true);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#FFF0F5] via-[#FFF5F8] to-[#FFE8EE] text-[#5A4A58] overflow-x-hidden selection:bg-pink-300 selection:text-pink-900">
      {/* Ambient background hearts & glow particles */}
      <FloatingParticles />

      {/* Sticky Glassmorphic Navigation with Audio Controls */}
      <Navbar
        isMusicPlaying={isMusicPlaying}
        setIsMusicPlaying={setIsMusicPlaying}
        sfxEnabled={sfxEnabled}
        setSfxEnabled={setSfxEnabled}
      />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col items-center w-full">
        {/* Section 2: Opening Screen Hero */}
        <Hero onOpenHeart={() => scrollToSection('apology')} />

        {/* Section 3: My Heartfelt Apology */}
        <ApologyLetter onGoToHug={() => scrollToSection('hug')} />

        {/* Section 4: Cutest Virtual Hug Experience */}
        <HugExperience />

        {/* Section 5: Sorry Sit-Ups Challenge */}
        <SitupsChallenge />

        {/* Section 6: Cute Sticker Gallery */}
        <StickerGallery />

        {/* Section 7: Reasons Why Nidhi Is Special */}
        <ReasonsSpecial />

        {/* Section 8: A Little Surprise for Nidhi */}
        <SurpriseGift />

        {/* Section 9: Interactive Love Meter */}
        <LoveMeter />

        {/* Section 10: Final Apology Section */}
        <FinalApology />
      </main>

      {/* Romantic Footer */}
      <Footer />
    </div>
  );
}
