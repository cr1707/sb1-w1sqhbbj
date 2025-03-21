import React from 'react';
import { Linkedin, Twitter, Globe, Award, Star, MapPin, Building } from 'lucide-react';
import { GlowingEffect } from './ui/glowing-effect';
import { cn } from '../lib/utils';

const JudgesSection = () => {
  const judges = [
    {
      name: 'Theo - t3.gg',
      title: 'Web Developer & Educator',
      organization: 'T3 Stack Creator',
      location: 'Remote',
      image: 'https://yt3.googleusercontent.com/Y6jut5A-dhWRlv7W81kGxVFPtZGjZN97IhBP75uLnx2AVV7ZEJUUUxBKHlFw9GcwILxkz1E_cLc=s900-c-k-c0x00ffffff-no-rj',
      bio: 'Creator of the T3 Stack and advocate for TypeScript. Known for educational content on modern web development.',
      expertise: ['TypeScript', 'React', 'Next.js']
    },
    {
      name: 'Saranormous',
      title: 'Tech Entrepreneur',
      organization: 'Software Engineer',
      location: 'Bay Area, CA',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0O9XFnw51qv0B28o7cUiz7kU4u_96gIwtaQ&s',
      bio: 'Tech entrepreneur and software engineer with expertise in building scalable products and startups.',
      expertise: ['Entrepreneurship', 'Software Engineering', 'Product Design']
    },
    {
      name: 'Levelsio',
      title: 'Indie Hacker',
      organization: 'Nomad List',
      location: 'Worldwide',
      image: 'https://i.imgur.com/h37yVxd.png',
      bio: 'Founder of Nomad List and prolific indie maker. Built multiple profitable bootstrapped businesses.',
      expertise: ['Bootstrapping', 'Remote Work', 'SaaS']
    },
    {
      name: 'Evan You',
      title: 'Creator of Vue.js',
      organization: 'Vue.js',
      location: 'Singapore',
      image: 'https://cdn.cloudinary.com/stichting-frontend-amsterdam/image/upload/v1623140860/z6dcikzvjsjkeanzoyzn.jpg',
      bio: 'Creator of Vue.js and Vite. Previously worked at Google. Open source advocate and framework designer.',
      expertise: ['JavaScript', 'Vue.js', 'Front-end Architecture']
    }
  ];

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Animated background gradient - keeping fully transparent */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 opacity-0">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center mb-16">
          <div className="bg-white/5 backdrop-blur-sm p-4 rounded-full mb-3">
            <Award className="text-white/80 w-10 h-10" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block">Meet Our Judges</span>
          </h2>
          <div className="w-28 h-1 bg-gradient-to-r from-white/30 to-white/10 rounded-full mt-6"></div>
          <p className="text-white/70 text-center mt-8 max-w-2xl text-lg">
            Our panel of industry experts will evaluate projects based on innovation, 
            technical implementation, design, and real-world impact.
          </p>
        </div>

        {/* Auto-scrolling judges carousel */}
        <div className="relative w-full overflow-hidden py-8">
          {/* Gradient overlays to indicate scrolling direction */}
          <div className="absolute left-0 top-0 bottom-0 w-28 bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-28 bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* First row of judges - scrolling left to right */}
          <div className="w-max flex items-center gap-8 mb-8 sponsors-scroll" style={{"--duration": "60s"} as React.CSSProperties}>
            {judges.map((judge, index) => (
              <div key={`row1-${index}`} className="w-[350px] flex-shrink-0">
                <JudgeCard judge={judge} />
              </div>
            ))}
            {/* Duplicate for infinite scrolling */}
            {judges.map((judge, index) => (
              <div key={`row1-dup-${index}`} className="w-[350px] flex-shrink-0">
                <JudgeCard judge={judge} />
              </div>
            ))}
          </div>
        </div>

        {/* Apply to be a judge CTA */}
        <div className="text-center mt-20">
          <button className="relative rounded-xl px-8 py-4 text-lg font-semibold overflow-hidden group">
            {/* Glowing effect for button */}
            <div className="absolute inset-0 rounded-xl border-[0.75px] border-white/20 bg-white/5 backdrop-blur-md"></div>
            <div className="relative z-10 text-white">Apply to be a Judge</div>
          </button>
        </div>
      </div>
    </section>
  );
};

interface JudgeCardProps {
  judge: {
    name: string;
    title: string;
    organization: string;
    location: string;
    image: string;
    bio: string;
    expertise: string[];
  };
}

const JudgeCard = ({ judge }: JudgeCardProps) => {
  return (
    <div className="min-h-[26rem] list-none">
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-white/10 p-2 md:rounded-[1.5rem] md:p-3 transition-transform duration-300 hover:scale-[1.02]">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={2}
          variant="white"
        />
        <div className="relative flex h-full flex-col overflow-hidden rounded-xl border-[0.75px] border-white/10 bg-black/10 backdrop-blur-sm shadow-lg p-0">
          {/* Image section */}
          <div className="relative aspect-[4/3] overflow-hidden">
            <img
              src={judge.image}
              alt={judge.name}
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
            
            {/* Info overlay on image */}
            <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
              <h3 className="text-2xl font-bold text-white mb-1">{judge.name}</h3>
              <p className="text-white/80 text-sm font-medium">{judge.title}</p>
            </div>
            
            {/* Star icon */}
            <div className="absolute top-4 right-4 z-10">
              <div className="bg-white/10 backdrop-blur-lg p-2 rounded-full border border-white/20">
                <Star className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>
          
          {/* Content section */}
          <div className="flex-1 p-5">
            {/* Organization and location */}
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center gap-1.5">
                <Building className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">{judge.organization}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-white/60" />
                <span className="text-white/80 text-sm">{judge.location}</span>
              </div>
            </div>
            
            {/* Bio */}
            <p className="text-white/80 text-sm leading-relaxed mb-4">{judge.bio}</p>
            
            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {judge.expertise.map((skill, i) => (
                <span key={i} className="text-xs px-3 py-1 rounded-full border border-white/20 text-white/70 backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </div>
            
            {/* Social links */}
            <div className="flex gap-3 pt-2 border-t border-white/10">
              <button className="p-1.5 text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full">
                <Linkedin className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full">
                <Twitter className="w-4 h-4" />
              </button>
              <button className="p-1.5 text-white/60 hover:text-white transition-colors bg-white/5 hover:bg-white/10 rounded-full">
                <Globe className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JudgesSection;