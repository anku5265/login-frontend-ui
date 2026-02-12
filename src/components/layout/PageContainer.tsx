import React from 'react';

export const PageContainer = ({ children }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#000000] to-[#1a1a0a] flex items-center justify-center relative overflow-hidden p-4">
      <div className="absolute w-[300px] h-[300px] bg-[#1a4d2e]/40 rounded-full blur-[100px] opacity-50 top-[50px] left-[50px]"></div>
      <div className="absolute w-[250px] h-[250px] bg-[#4a5a2d]/30 rounded-full blur-[100px] opacity-40 top-[100px] right-[100px]"></div>
      
      <div className="bg-[#0f1a15]/60 backdrop-blur-md border border-[#2d4a2d]/30 rounded-2xl p-10 w-full max-w-[480px] text-center z-10 shadow-2xl">
        {children}
      </div>
    </div>
  );
};
