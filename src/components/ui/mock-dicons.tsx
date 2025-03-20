import { 
  Sun, 
  Moon, 
  ArrowUp, 
  Mail, 
  Twitter as X,
  Instagram, 
  AtSign as Threads,
  MessageCircle as WhatsApp,
  Palette as Behance,
  Facebook,
  Linkedin as LinkedIn,
  Youtube as YouTube,
  Heart
} from 'lucide-react';
import React from 'react';

// Custom component for Designali that matches the Lucide icon interface
const Designali = React.forwardRef<SVGSVGElement, React.ComponentProps<typeof Heart>>(
  ({ size = 24, color = 'currentColor', ...props }, ref) => {
    return (
      <div className="flex items-center justify-center" style={{ width: size, height: size }}>
        <img 
          src="https://pbs.twimg.com/profile_images/1880702021122342912/fe9TlQqJ_400x400.jpg" 
          alt="Designali Logo" 
          className="w-full h-full rounded-full"
          width={size}
          height={size}
        />
      </div>
    );
  }
);

Designali.displayName = 'Designali';

export const DIcons = {
  Sun,
  Moon,
  ArrowUp,
  Mail,
  X,
  Instagram,
  Threads,
  WhatsApp,
  Behance,
  Facebook,
  LinkedIn,
  YouTube,
  Designali,
  Heart
}; 