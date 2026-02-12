import React from 'react';

export const Button = ({ variant = 'primary', children, className = '', ...props }) => {
  const primaryStyle = "bg-gradient-to-r from-[#689F38] via-[#8BC34A] to-[#CDDC39] text-[#1a1a1a] hover:shadow-lg";
  const secondaryStyle = "bg-[#1a2820] border border-[#2d4a2d] text-white hover:bg-[#1f3028]";
  
  const style = variant === 'primary' ? primaryStyle : secondaryStyle;

  return (
    <button 
      className={`px-6 py-3.5 rounded-xl text-[15px] font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-50 ${style} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
