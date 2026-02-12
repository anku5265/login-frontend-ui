import React from 'react';

export const Logo = ({ size = 'md' }) => {
  let containerSize = 'w-16 h-16';
  let svgSize = 30;

  if (size === 'sm') {
    containerSize = 'w-12 h-12';
    svgSize = 24;
  } else if (size === 'lg') {
    containerSize = 'w-20 h-20';
    svgSize = 36;
  }

  return (
    <div className={`${containerSize} bg-gradient-to-br from-[#9CCC65] to-[#7CB342] rounded-full flex items-center justify-center shadow-lg`}>
      <svg width={svgSize} height={svgSize} viewBox="0 0 30 30" fill="none">
        <rect x="7" y="12" width="16" height="13" fill="white"/>
        <path d="M5 12 L15 5 L25 12 Z" fill="white"/>
        <rect x="9" y="14" width="2.5" height="11" fill="#689F38"/>
        <rect x="13.75" y="14" width="2.5" height="11" fill="#689F38"/>
        <rect x="18.5" y="14" width="2.5" height="11" fill="#689F38"/>
        <circle cx="15" cy="9" r="2.5" fill="white"/>
        <circle cx="15" cy="9" r="1" fill="#689F38"/>
      </svg>
    </div>
  );
};
