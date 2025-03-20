import React from 'react';
import HeroSection from './components/HeroSection';
import PrizeSection from './components/PrizeSection';
import SponsorsSection from './components/SponsorsSection';
import JudgesSection from './components/JudgesSection';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <HeroSection />
      <PrizeSection />
      <SponsorsSection />
      <JudgesSection />
    </div>
  );
}

export default App;