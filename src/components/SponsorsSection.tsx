import React from 'react';

export default function SponsorsSection() {
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
          {/* Gradient Masks for blur effect - now transparent */}
          <div className="absolute left-0 top-0 h-full w-[120px] bg-gradient-to-r from-transparent to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-[120px] bg-gradient-to-l from-transparent to-transparent z-10"></div>
          
          {/* Scrolling Sponsors */}
          <div className="sponsors-scroll w-max flex items-center gap-20 py-10">
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://raw.githubusercontent.com/github/explore/f4ec5347a36e06540a69376753a7c37a8cb5a136/topics/supabase/supabase.png" 
                   alt="Supabase" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">Supabase</span>
            </div>
            
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://www.netlify.com/v3/img/components/logomark.svg" 
                   alt="Netlify" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">Netlify</span>
            </div>
            
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.png/1200px-Cloudflare_Logo.png" 
                   alt="CloudflareDev" 
                   className="h-11 object-contain" />
              <span className="text-sm font-medium text-gray-300">CloudflareDev</span>
            </div>
            
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://sentry-brand.storage.googleapis.com/sentry-logo-white.png" 
                   alt="GetSentry" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">GetSentry</span>
            </div>
  
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://pbs.twimg.com/profile_images/1729539310058147840/iE5EGXW3_400x400.jpg" 
                   alt="Loops" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">Loops</span>
            </div>
            
            {/* Duplicate for infinite scrolling */}
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://raw.githubusercontent.com/github/explore/f4ec5347a36e06540a69376753a7c37a8cb5a136/topics/supabase/supabase.png" 
                   alt="Supabase" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">Supabase</span>
            </div>
            
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://www.netlify.com/v3/img/components/logomark.svg" 
                   alt="Netlify" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">Netlify</span>
            </div>
            
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Cloudflare_Logo.png/1200px-Cloudflare_Logo.png" 
                   alt="CloudflareDev" 
                   className="h-11 object-contain" />
              <span className="text-sm font-medium text-gray-300">CloudflareDev</span>
            </div>
            
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://sentry-brand.storage.googleapis.com/sentry-logo-white.png" 
                   alt="GetSentry" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">GetSentry</span>
            </div>
  
            <div className="sponsor-logo flex flex-col items-center gap-3">
              <img src="https://pbs.twimg.com/profile_images/1729539310058147840/iE5EGXW3_400x400.jpg" 
                   alt="Loops" 
                   className="h-12 object-contain" />
              <span className="text-sm font-medium text-gray-300">Loops</span>
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