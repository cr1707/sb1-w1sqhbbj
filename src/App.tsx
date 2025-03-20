import React from 'react';
import HeroSection from './components/HeroSection';
import RecordSection from './components/RecordSection';
import PrizeSection from './components/PrizeSection';
import SponsorsSection from './components/SponsorsSection';
import JudgesSection from './components/JudgesSection';
import { Footer } from './components/ui/footer';
import { ThemeProvider } from './components/ui/theme-provider';

function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <div className="min-h-screen bg-black text-white">
        <HeroSection />
        <RecordSection />
        <PrizeSection />
        <SponsorsSection />
        <JudgesSection />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;