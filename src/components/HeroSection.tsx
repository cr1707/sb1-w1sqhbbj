import React from 'react';
import InteractiveLanyard from './InteractiveLanyard';
import { Globe2, Users, Trophy } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_50%)] animate-pulse"></div>

      <div className="container mx-auto px-4 pt-32 pb-20 flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="lg:w-1/2 space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            The World's Largest
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/60 block">
              Hackathon
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Join innovators worldwide to build the future of technology
          </p>

          <div className="flex flex-wrap gap-8 text-gray-300">
            <div className="flex items-center gap-2">
              <Globe2 className="w-6 h-6 text-white/80" />
              <span>Virtual Global Event</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-white/80" />
              <span>10,000+ Participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-white/80" />
              <span>$1M+ in Prizes</span>
            </div>
          </div>

          <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold transform transition-all hover:scale-105 hover:bg-white/90 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black">
            Register Now
          </button>
        </div>

        <div className="lg:w-1/2 mt-12 lg:mt-0 flex justify-end">
          <InteractiveLanyard />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white rounded-full animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection