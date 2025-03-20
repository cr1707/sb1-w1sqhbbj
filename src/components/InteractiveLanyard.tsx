import React, { useRef, useEffect, useState } from 'react';
import { useSpring, animated, to } from '@react-spring/web';
import { useDrag } from 'react-use-gesture';

const InteractiveLanyard = () => {
  const [windowHeight, setWindowHeight] = useState(0);
  const [anchorPoint, setAnchorPoint] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Update window height on mount and resize
  useEffect(() => {
    const updateDimensions = () => {
      setWindowHeight(window.innerHeight);
    };
    
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    
    return () => {
      window.removeEventListener('resize', updateDimensions);
    };
  }, []);

  // Calculate card position for lace physics
  useEffect(() => {
    if (!cardRef.current || !containerRef.current) return;
    
    const updateCardPosition = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      const cardRect = cardRef.current?.getBoundingClientRect();
      
      if (containerRect && cardRect) {
        setAnchorPoint({
          x: cardRect.left + cardRect.width / 2 - containerRect.left,
          y: cardRect.top - containerRect.top + 20 // Account for attachment point at top of card
        });
      }
    };
    
    updateCardPosition();
    // Setup a RequestAnimationFrame loop to continuously update position
    let rafId: number;
    const animatePosition = () => {
      updateCardPosition();
      rafId = requestAnimationFrame(animatePosition);
    };
    
    rafId = requestAnimationFrame(animatePosition);
    return () => cancelAnimationFrame(rafId);
  }, []);

  const bindDrag = useDrag(({ down, movement: [mx, my], velocity }) => {
    const isMovingFast = velocity > 1;
    
    cardApi.start({
      x: down ? mx : 0,
      y: down ? my : 0,
      rotateX: down ? -my / 10 : 0,
      rotateY: down ? mx / 10 : 0,
      scale: down ? 1.1 : 1,
      immediate: down,
      config: {
        tension: isMovingFast ? 400 : 200,
        friction: isMovingFast ? 10 : 20,
      },
    });
  });

  const [cardStyle, cardApi] = useSpring(() => ({
    x: 0,
    y: 0,
    rotateX: 0,
    rotateY: 10,
    scale: 1,
    config: {
      tension: 200,
      friction: 20,
    },
  }));

  // Spring for the lace physics
  const [laceStyle, laceApi] = useSpring(() => ({
    topWidth: 2,
    bottomWidth: 2,
    height: 200,
    rotation: 0,
    tension: 0,
    config: {
      tension: 120,
      friction: 14,
      mass: 1,
    },
  }));

  // Update lace physics based on card movement
  useEffect(() => {
    cardApi.subscribe({
      onChange: ({ value }) => {
        const { x, y } = value;
        
        // Calculate lace properties based on card position
        const xOffset = x || 0;
        const yOffset = y || 0;
        const stretch = Math.sqrt(xOffset * xOffset + yOffset * yOffset);
        const angle = Math.atan2(xOffset, yOffset) * (180 / Math.PI);
        
        // Apply spring physics to lace
        laceApi.start({
          topWidth: 2,
          bottomWidth: 2 + stretch * 0.01, // Slightly widen at bottom when stretched
          height: 200 + stretch * 0.5,
          rotation: angle,
          tension: stretch * 0.5,
          config: {
            tension: 120 + stretch,
            friction: 14,
          },
        });
      }
    });
  }, [cardApi, laceApi]);

  return (
    <div 
      ref={containerRef}
      className="relative w-[400px] h-[600px] perspective-1000"
    >
      {/* Lace Start Point (Top of Viewport) */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-20">
        <div className="w-8 h-4 bg-gradient-to-b from-gray-300 to-gray-400 rounded-t-lg"></div>
        <div className="w-6 h-6 mx-auto bg-gradient-to-r from-gray-400 to-gray-500 rounded-full -mt-1"></div>
      </div>

      {/* Elastic Lace */}
      <animated.div 
        className="fixed top-8 left-1/2 -translate-x-1/2 origin-top z-10"
        style={{
          width: to(laceStyle.bottomWidth, w => `${w}px`),
          height: to([laceStyle.height, cardStyle.y], (h, y) => `${h + Math.abs(y) * 0.5}px`),
          transform: to(
            [laceStyle.rotation, cardStyle.x, cardStyle.y, laceStyle.tension],
            (rot, x, y, tension) => {
              const xOffset = x / 10;
              const dynamicRot = (x / 30) + rot;
              // Apply subtle wave effect based on tension
              const wave = tension > 10 ? `scaleX(${1 + Math.sin(tension/10) * 0.05})` : '';
              return `perspective(1000px) 
                      translateX(${xOffset}px) 
                      rotateZ(${dynamicRot}deg)
                      ${wave}`;
            }
          ),
          background: 'linear-gradient(to bottom, #333, #444)',
          boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          borderRadius: '1px',
        }}
      >
        {/* Lace texture */}
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: `repeating-linear-gradient(
            to bottom,
            transparent,
            transparent 4px,
            #222 4px,
            #222 8px
          )`
        }}></div>
      </animated.div>

      {/* Card Attachment Point (Small Ring) */}
      <animated.div
        style={{
          ...cardStyle,
          x: to([cardStyle.x], x => `${x}px`),
          y: to([cardStyle.y], y => `${y}px`),
          rotateX: to([cardStyle.rotateX], rx => `${rx}deg`),
          rotateY: to([cardStyle.rotateY], ry => `${ry}deg`),
          scale: to([cardStyle.scale], s => s),
          touchAction: 'none',
          cursor: 'grab',
        }}
        className="absolute top-40 left-1/2 -translate-x-1/2 z-20"
      >
        <div className="w-5 h-5 mx-auto rounded-full border-2 border-gray-400 bg-gray-300 shadow-md"></div>
      </animated.div>

      <animated.div
        {...bindDrag()}
        ref={cardRef}
        style={{
          ...cardStyle,
          x: to([cardStyle.x], x => `${x}px`),
          y: to([cardStyle.y], y => `${y}px`),
          rotateX: to([cardStyle.rotateX], rx => `${rx}deg`),
          rotateY: to([cardStyle.rotateY], ry => `${ry}deg`),
          scale: to([cardStyle.scale], s => s),
          touchAction: 'none',
          cursor: 'grab',
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[300px] h-[450px]"
      >
        <div 
          className="relative w-full h-full rounded-xl shadow-2xl overflow-hidden"
          style={{ 
            transformStyle: 'preserve-3d',
            background: 'linear-gradient(45deg, #1a1a1a, #000000)',
          }}
        >
          {/* Card Content */}
          <div className="absolute inset-0 p-6 flex flex-col justify-between">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-white">Epic Hackathon</h2>
              <p className="text-white/60 text-sm uppercase tracking-wider">Virtual Attendee Pass</p>
            </div>

            <div className="space-y-2">
              <p className="text-white/40 text-sm">AUGUST 16-18, 2025</p>
              <p className="text-white/40 text-sm">GLOBAL VIRTUAL EVENT</p>
            </div>
          </div>

          {/* Pattern Overlay */}
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #ffffff 0px,
              #ffffff 1px,
              transparent 1px,
              transparent 30px
            )`
          }}></div>
        </div>
      </animated.div>
    </div>
  );
};

export default InteractiveLanyard;