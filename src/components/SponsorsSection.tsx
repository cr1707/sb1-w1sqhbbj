import React from 'react';

const SponsorsSection = () => {
  return (
    <section className="py-32 bg-black">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-16">
          Our Sponsors
        </h2>

        <div className="space-y-24">
          {/* Platinum Sponsors */}
          <div>
            <h3 className="text-2xl font-bold text-center text-white/80 mb-12">
              Platinum Partners
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="aspect-[3/2] bg-white/5 rounded-xl p-8 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="w-full h-full bg-white/10 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Gold Sponsors */}
          <div>
            <h3 className="text-2xl font-bold text-center text-white/80 mb-12">
              Gold Partners
            </h3>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="aspect-square bg-white/5 rounded-xl p-6 transform transition-all duration-300 hover:scale-105 hover:bg-white/10"
                >
                  <div className="w-full h-full bg-white/10 rounded-lg"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection