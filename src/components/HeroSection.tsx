import React from 'react';
import { Globe2, Users, Trophy } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative h-screen w-screen overflow-hidden flex items-center justify-center">
      {/* Fullscreen Spline 3D animation as background - scaled up much larger */}
      <div className="absolute inset-0 w-[150%] h-[150%] left-[-25%] top-[-25%] z-0">
        <iframe src='https://my.spline.design/retrofuturisticcircuitloop-d1286d8046ab70f6c34b65c4dc9e3786/' frameBorder='0' width='100%' height='100%'></iframe>
      </div>

      {/* Animated background gradient - now fully transparent */}
      <div className="absolute inset-0 z-5"></div>
      <div className="absolute inset-0 opacity-0 z-5">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* Semi-transparent overlay with pointer-events-none - now fully transparent */}
      <div className="absolute inset-0 bg-transparent z-10 pointer-events-none"></div>
      
      {/* Centered content container with pointer-events-none */}
      <div className="container mx-auto px-4 flex items-center justify-center h-full z-20 pointer-events-none">
        {/* Centered text content */}
        <div className="max-w-2xl text-center space-y-8">
          <h1 className="text-6xl md:text-7xl font-bold text-white leading-tight animate-fade-in">
            The World's Largest
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 block">
              Hackathon
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 leading-relaxed">
            Join innovators worldwide to build the future of technology
          </p>

          <div className="flex flex-wrap gap-8 text-gray-200 justify-center">
            <div className="flex items-center gap-2">
              <Globe2 className="w-6 h-6 text-white" />
              <span>Virtual Global Event</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-6 h-6 text-white" />
              <span>10,000+ Participants</span>
            </div>
            <div className="flex items-center gap-2">
              <Trophy className="w-6 h-6 text-white" />
              <span>$1M+ in Prizes</span>
            </div>
          </div>

          {/* Button with pointer-events-auto to make it interactive */}
          <button className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold transform transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black z-30 relative pointer-events-auto">
            Register Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;