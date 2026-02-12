import React from 'react';

export const Input = ({ label, className = '', ...props }) => {
  return (
    <div className="mb-4">
      {label && (
        <label className="block text-left text-[14px] text-[#b0b0b0] mb-2 font-medium">
          {label}
        </label>
      )}
      <input
        className={`w-full px-4 py-3.5 bg-[#0a1410]/80 border border-[#2d4a2d]/40 rounded-lg text-white text-[14px] focus:outline-none focus:border-[#8BC34A]/50 focus:ring-2 focus:ring-[#8BC34A]/20 transition-all placeholder:text-[#4a5a4a] ${className}`}
        {...props}
      />
    </div>
  );
};
