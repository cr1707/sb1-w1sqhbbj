import React from 'react';

export default function SponsorsSection() {
  // Create arrays of sponsors for better management
  const sponsors = [
    {
      name: "Supabase",
      logo: "https://raw.githubusercontent.com/github/explore/f4ec5347a36e06540a69376753a7c37a8cb5a136/topics/supabase/supabase.png",
      height: "h-12"
    },
    {
      name: "Netlify",
      logo: "https://www.netlify.com/v3/img/components/logomark.svg",
      height: "h-12"
    },
    {
      name: "CloudflareDev",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.png/1200px-Cloudflare_Logo.png",
      height: "h-11"
    },
    {
      name: "GetSentry",
      logo: "https://sentry-brand.storage.googleapis.com/sentry-logo-white.png",
      height: "h-12"
    },
    {
      name: "Loops",
      logo: "https://pbs.twimg.com/profile_images/1729539310058147840/iE5EGXW3_400x400.jpg",
      height: "h-12"
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Solid background with minimal gradient effect - now fully transparent */}
      <div className="absolute inset-0"></div>
      <div className="absolute inset-0 opacity-0">
        <div className="absolute top-0 -left-10 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-10 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-0 left-20 w-72 h-72 bg-transparent rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 inline-block">Our Sponsors</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Thanks to our amazing sponsors who make this hackathon possible. Their support helps us
            create an unforgettable experience for all participants.
          </p>
        </div>

        <div className="relative w-full overflow-hidden my-16">
          {/* Gradient masks for fading effect on the edges */}
          <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-black to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-black to-transparent z-10"></div>
          
          {/* Scrolling Sponsors - using multiple duplications to ensure continuous scrolling */}
          <div className="sponsors-scroll-wrapper w-full overflow-hidden">
            <div className="sponsors-scroll w-max flex items-center gap-20 py-10">
              {/* First set of sponsors */}
              {sponsors.map((sponsor, index) => (
                <div key={`sponsor-1-${index}`} className="sponsor-logo flex flex-col items-center gap-3">
                  <img src={sponsor.logo} 
                       alt={sponsor.name} 
                       className={`${sponsor.height} object-contain`} />
                  <span className="text-sm font-medium text-gray-300">{sponsor.name}</span>
                </div>
              ))}
              
              {/* Second set of sponsors */}
              {sponsors.map((sponsor, index) => (
                <div key={`sponsor-2-${index}`} className="sponsor-logo flex flex-col items-center gap-3">
                  <img src={sponsor.logo} 
                       alt={sponsor.name} 
                       className={`${sponsor.height} object-contain`} />
                  <span className="text-sm font-medium text-gray-300">{sponsor.name}</span>
                </div>
              ))}
              
              {/* Third set of sponsors for seamless looping */}
              {sponsors.map((sponsor, index) => (
                <div key={`sponsor-3-${index}`} className="sponsor-logo flex flex-col items-center gap-3">
                  <img src={sponsor.logo} 
                       alt={sponsor.name} 
                       className={`${sponsor.height} object-contain`} />
                  <span className="text-sm font-medium text-gray-300">{sponsor.name}</span>
                </div>
              ))}
              
              {/* Fourth set of sponsors for extra safety */}
              {sponsors.map((sponsor, index) => (
                <div key={`sponsor-4-${index}`} className="sponsor-logo flex flex-col items-center gap-3">
                  <img src={sponsor.logo} 
                       alt={sponsor.name} 
                       className={`${sponsor.height} object-contain`} />
                  <span className="text-sm font-medium text-gray-300">{sponsor.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a 
            href="#" 
            className="bg-white text-black px-8 py-4 rounded-lg text-lg font-semibold transform transition-all hover:scale-105 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </section>
  );
}