import React from 'react';

export const GoldenEggLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg 
      viewBox="0 0 100 130" 
      className={className} 
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      role="img"
      aria-label="Golden Egg Logo"
    >
      <defs>
        <radialGradient id="goldGradient" cx="35%" cy="30%" r="80%" fx="30%" fy="30%">
          <stop offset="0%" stopColor="#FFFBEB" /> {/* Highlight - almost white */}
          <stop offset="15%" stopColor="#FCD34D" /> {/* Bright Gold */}
          <stop offset="45%" stopColor="#C5A059" /> {/* Rolex Gold (Base) */}
          <stop offset="85%" stopColor="#78350F" /> {/* Shadow Dark Brown */}
          <stop offset="100%" stopColor="#291503" /> {/* Deepest Shadow */}
        </radialGradient>
        
        <filter id="goldGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceAlpha" stdDeviation="2" result="blur" />
          <feOffset in="blur" dx="0" dy="2" result="offsetBlur" />
          <feFlood floodColor="#C5A059" floodOpacity="0.3" result="glowColor" />
          <feComposite in="glowColor" in2="offsetBlur" operator="in" result="glow" />
          <feMerge>
            <feMergeNode in="glow" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <linearGradient id="reflection" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="white" stopOpacity="0.4" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Shadow under the egg */}
      <ellipse cx="50" cy="120" rx="35" ry="5" fill="black" fillOpacity="0.4" filter="blur(4px)" />

      {/* Main Egg Body */}
      <path 
        d="M50 5 C 25 5, 5 45, 5 80 C 5 110, 25 125, 50 125 C 75 125, 95 110, 95 80 C 95 45, 75 5, 50 5 Z" 
        fill="url(#goldGradient)"
        filter="url(#goldGlow)"
        stroke="rgba(255, 255, 255, 0.1)"
        strokeWidth="0.5"
      />

      {/* Specular Highlight (The shine) */}
      <path 
        d="M30 25 Q 45 15 60 25 T 70 45" 
        stroke="url(#reflection)" 
        strokeWidth="3" 
        strokeLinecap="round"
        fill="none"
        opacity="0.9"
      />
      
      {/* Secondary Reflection */}
      <ellipse cx="35" cy="40" rx="5" ry="8" fill="white" fillOpacity="0.15" transform="rotate(-20 35 40)" />
    </svg>
  );
};