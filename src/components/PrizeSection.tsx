import React from 'react';
import { GlowingEffect } from './ui/glowing-effect';
import { Trophy, Gift, Award, ArrowRight } from 'lucide-react';

const PrizeSection = () => {
  const prizes = [
    {
      name: 'Grand Prize',
      description: 'The overall winner of the hackathon will receive the grand prize package.',
      amount: '$10,000',
      benefits: ['Cash Prize', 'Industry Recognition', 'Mentorship Package', 'Development Resources'],
      icon: <Trophy className="w-7 h-7 text-yellow-300" />,
      color: 'yellow'
    },
    {
      name: 'Innovation Award',
      description: 'For the most innovative and forward-thinking project with potential for impact.',
      amount: '$5,000',
      benefits: ['Cash Prize', 'Innovation Certificate', 'Investor Connections', 'PR Package'],
      icon: <Award className="w-7 h-7 text-blue-300" />,
      color: 'blue'
    },
    {
      name: 'Rising Star',
      description: 'Recognizing exceptional talent from first-time hackathon participants.',
      amount: '$3,000',
      benefits: ['Cash Prize', 'Learning Resources', 'Conference Passes', 'Industry Exposure'],
      icon: <Gift className="w-7 h-7 text-white" />,
      color: 'white'
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background - transparent */}
      <div className="absolute inset-0 opacity-0">
        <div className="absolute top-1/4 left-1/3 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full mb-3">
            <Trophy className="text-white/80 w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block">Prizes & Awards</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-white/30 to-white/10 rounded-full mt-6"></div>
          <p className="text-white/70 text-center mt-8 max-w-2xl text-lg">
            Compete for incredible prizes and recognition. Our prize pool rewards
            innovation, technical excellence, and creative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize, index) => (
            <PrizeCard key={index} prize={prize} />
          ))}
        </div>

        {/* Additional prizes */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-white mb-6">Additional Category Prizes</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <CategoryPrize name="Best AI Implementation" amount="$1,500" />
            <CategoryPrize name="Best UI/UX Design" amount="$1,500" />
            <CategoryPrize name="Best Social Impact" amount="$1,500" />
            <CategoryPrize name="Best Use of APIs" amount="$1,500" />
            <CategoryPrize name="Community Choice" amount="$1,500" />
            <CategoryPrize name="Best Solo Project" amount="$1,500" />
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <button className="relative rounded-xl px-8 py-4 text-lg font-semibold overflow-hidden group">
            <div className="absolute inset-0 rounded-xl border-[0.75px] border-white/20 bg-white/5 backdrop-blur-md"></div>
            <div className="relative z-10 text-white flex items-center gap-2">
              View Full Prize Details
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};

interface PrizeCardProps {
  prize: {
    name: string;
    description: string;
    amount: string;
    benefits: string[];
    icon: React.ReactNode;
    color: string;
  };
}

const PrizeCard = ({ prize }: PrizeCardProps) => {
  return (
    <div className="min-h-[26rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 transition-transform duration-300 hover:scale-[1.05]">
        <GlowingEffect
          spread={50}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          variant={prize.color as "white" | "blue" | "yellow"}
        />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/10 backdrop-blur-sm shadow-lg p-6">
          {/* Prize header */}
          <div className="flex items-center justify-between mb-6">
            <div className="bg-white/10 backdrop-blur-lg p-3 rounded-full border border-white/20">
              {prize.icon}
            </div>
            <span className="text-3xl font-bold text-white">{prize.amount}</span>
          </div>
          
          {/* Prize content */}
          <h3 className="text-2xl font-bold text-white mb-2">{prize.name}</h3>
          <p className="text-white/70 text-sm leading-relaxed mb-6 flex-grow">{prize.description}</p>
          
          {/* Prize benefits */}
          <div className="mt-auto">
            <h4 className="text-white/90 text-sm font-semibold mb-3">Prize Package Includes:</h4>
            <ul className="space-y-2">
              {prize.benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                  <span className="text-white/80 text-sm">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CategoryPrizeProps {
  name: string;
  amount: string;
}

const CategoryPrize = ({ name, amount }: CategoryPrizeProps) => {
  return (
    <div className="relative p-1 rounded-xl">
      <GlowingEffect
        spread={20}
        glow={true}
        disabled={false}
        proximity={40}
        inactiveZone={0.01}
        borderWidth={1}
        variant="white"
      />
      <div className="flex items-center justify-between p-4 rounded-lg border border-white/10 backdrop-blur-sm bg-white/5">
        <span className="text-white font-medium">{name}</span>
        <span className="text-white font-bold">{amount}</span>
      </div>
    </div>
  );
};

export default PrizeSection;