import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Music, Play, Pause, Heart } from 'lucide-react';
import { romanticAudio } from '../utils/soundEffects';

export default function AudioPlayer({ isPlaying, setIsPlaying }) {
  const [isMuted, setIsMuted] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMusic = () => {
    if (isPlaying) {
      romanticAudio.pause();
      setIsPlaying(false);
    } else {
      romanticAudio.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      romanticAudio.setVolume(0.35);
      setIsMuted(false);
    } else {
      romanticAudio.setVolume(0);
      setIsMuted(true);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3">
      {/* Floating expanded control panel */}
      {isExpanded && (
        <div className="glass-card px-4 py-2.5 rounded-2xl flex items-center gap-3 shadow-romantic border border-rose-200/60 animate-in fade-in slide-in-from-right-4 duration-300">
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-rose-800 flex items-center gap-1">
              <Heart className="w-3 h-3 text-rose-500 fill-rose-500 animate-pulse" />
              Our Melody
            </span>
            <span className="text-[11px] text-rose-600/80">
              {isPlaying ? 'Tender Piano & Strings 🎼' : 'Music Paused'}
            </span>
          </div>

          <button
            onClick={toggleMute}
            title={isMuted ? 'Unmute' : 'Mute'}
            className="p-2 rounded-full hover:bg-rose-100/70 text-rose-700 transition-colors"
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>
        </div>
      )}

      {/* Main floating action button */}
      <div className="relative group">
        <button
          onClick={toggleMusic}
          onMouseEnter={() => setIsExpanded(true)}
          className={`relative flex items-center justify-center w-14 h-14 rounded-full shadow-romantic-lg transition-all duration-300 ${
            isPlaying
              ? 'bg-gradient-to-tr from-rose-500 via-pink-500 to-rose-400 text-white scale-105 shadow-rose-300/60 ring-4 ring-rose-200/50'
              : 'bg-white/90 backdrop-blur-md text-rose-600 border border-rose-200 hover:bg-rose-50'
          }`}
          title={isPlaying ? 'Pause Background Music' : 'Play Romantic Music'}
          aria-label={isPlaying ? 'Pause Music' : 'Play Music'}
        >
          {isPlaying ? (
            <div className="relative flex items-center justify-center">
              {/* Spinning animated note/vinyl */}
              <div className="animate-spin-slow">
                <Music className="w-6 h-6 fill-white/20" />
              </div>
              {/* Equalizer mini wave bars */}
              <div className="absolute -bottom-1 flex items-end gap-[2px] h-3">
                <span className="w-[2px] bg-white rounded-full animate-[pulse_0.8s_ease-in-out_infinite] h-2"></span>
                <span className="w-[2px] bg-white rounded-full animate-[pulse_1.2s_ease-in-out_infinite] h-3"></span>
                <span className="w-[2px] bg-white rounded-full animate-[pulse_0.6s_ease-in-out_infinite] h-1.5"></span>
              </div>
            </div>
          ) : (
            <Play className="w-6 h-6 ml-0.5 fill-rose-500/20" />
          )}

          {/* Gentle ping ring when playing */}
          {isPlaying && (
            <span className="absolute -top-1 -right-1 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-rose-500"></span>
            </span>
          )}
        </button>

        {/* Small badge tooltip */}
        <div className="absolute right-0 bottom-full mb-2 hidden group-hover:block whitespace-nowrap text-[11px] bg-gray-900/80 text-white px-2.5 py-1 rounded-lg backdrop-blur-sm pointer-events-none">
          {isPlaying ? 'Click to pause music 🎶' : 'Click to play music 🎶'}
        </div>
      </div>
    </div>
  );
}
