import React from 'react';
import { Linkedin, Twitter, Globe } from 'lucide-react';

const JudgesSection = () => {
  const judges = [
    {
      name: 'Dr. Sarah Chen',
      title: 'AI Research Director',
      organization: 'Tech Innovation Labs',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Leading AI researcher with over 15 years of experience in machine learning and neural networks.',
    },
    {
      name: 'James Wilson',
      title: 'CTO',
      organization: 'Future Ventures',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Serial entrepreneur and tech investor. Founded three successful startups.',
    },
    {
      name: 'Dr. Maria Rodriguez',
      title: 'Professor',
      organization: 'MIT',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80',
      bio: 'Distinguished professor of Computer Science specializing in distributed systems.',
    }
  ];

  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Meet Our Judges
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {judges.map((judge, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
            >
              <div className="relative aspect-square">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-1">{judge.name}</h3>
                <p className="text-white/60 font-semibold mb-2">{judge.title}</p>
                <p className="text-white/40 text-sm mb-4">{judge.organization}</p>
                <p className="text-white/80 text-sm leading-relaxed mb-6">{judge.bio}</p>
                
                <div className="flex gap-4">
                  <button className="p-2 text-white/60 hover:text-white transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-white/60 hover:text-white transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-white/60 hover:text-white transition-colors">
                    <Globe className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JudgesSection