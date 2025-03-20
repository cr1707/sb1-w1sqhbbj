import React from 'react';
import { Trophy, Award, Star, Heart } from 'lucide-react';

const PrizeSection = () => {
  const prizes = [
    {
      title: 'Grand Prize',
      amount: '$500,000',
      icon: Trophy,
      description: 'For the most innovative and impactful project',
    },
    {
      title: 'Category Winners',
      amount: '$100,000',
      icon: Award,
      description: 'Best projects in AI, Web3, Healthcare, and Sustainability',
    },
    {
      title: 'Special Awards',
      amount: '$50,000',
      icon: Star,
      description: 'Recognition for technical excellence and creativity',
    },
    {
      title: 'Community Choice',
      amount: '$25,000',
      icon: Heart,
      description: 'Voted by the global developer community',
    }
  ];

  return (
    <section className="relative py-32 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(50,50,50,0.2),transparent_50%)]"></div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          $1M+ Prize Pool
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {prizes.map((prize, index) => (
            <div
              key={index}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <prize.icon className="w-12 h-12 text-white mb-6" />
              <h3 className="text-2xl font-bold text-white mb-2">{prize.title}</h3>
              <p className="text-3xl font-bold text-white/90 mb-4">{prize.amount}</p>
              <p className="text-gray-400">{prize.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PrizeSection