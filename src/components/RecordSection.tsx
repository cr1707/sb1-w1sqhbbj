import React from 'react';

export default function RecordSection() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Content only - no background or 3D embed */}
      <div className="container mx-auto px-4 text-center max-w-4xl relative z-10">
        <div className="flex flex-col items-center space-y-8">
          {/* Record-breaking headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
            Join Us As We Break The World Record
          </h1>
          
          {/* Description text */}
          <p className="text-2xl md:text-3xl font-semibold text-gray-200">
            The Largest Hackathon with $1M+ Prize Pool
          </p>
          
          <p className="text-gray-200 text-lg md:text-xl max-w-3xl">
            This unprecedented event brings together the brightest minds and most innovative creators from around the world.
            With over $1 million in prizes, we're setting a new standard for what's possible in the world of hackathons.
          </p>
        </div>
      </div>
    </section>
  );
} 