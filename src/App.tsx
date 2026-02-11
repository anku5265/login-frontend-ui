import React, { useState } from 'react';

const App: React.FC = () => {
  const [institutionCode, setInstitutionCode] = useState('');

  const handleFindInstitution = () => {
    console.log('Finding institution:', institutionCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-black to-[#1a1a0a] flex items-center justify-center relative overflow-hidden">
      {/* Decorative circles */}
      <div className="absolute w-[300px] h-[300px] bg-[#2d5a3d] rounded-full blur-[80px] opacity-30 -top-[100px] -left-[100px]"></div>
      <div className="absolute w-[250px] h-[250px] bg-[#4a5a2d] rounded-full blur-[80px] opacity-30 top-[100px] -right-[50px]"></div>
      <div className="absolute w-[200px] h-[200px] bg-[#2d4a3d] rounded-full blur-[80px] opacity-30 -bottom-[50px] left-1/2 -translate-x-1/2"></div>

      {/* Main content */}
      <div className="bg-[#141e19]/60 backdrop-blur-md border border-[#8BC34A]/20 rounded-2xl p-12 w-[400px] text-center z-10">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#8BC34A] to-[#9CCC65] rounded-xl flex items-center justify-center shadow-[0_8px_24px_rgba(139,195,74,0.3)]">
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M20 10L12 16V26L20 32L28 26V16L20 10Z" fill="white"/>
              <rect x="16" y="20" width="8" height="8" fill="#8BC34A"/>
            </svg>
          </div>
        </div>

        {/* Welcome text */}
        <h1 className="text-[28px] font-semibold text-[#8BC34A] mb-2">
          Welcome to Colugee
        </h1>
        <p className="text-sm text-[#9e9e9e] mb-8">
          Your all-in-one educational platform
        </p>

        {/* Input section */}
        <div className="mb-6">
          <label className="block text-left text-sm text-[#b0b0b0] mb-2 font-medium">
            Enter Institution Code
          </label>
          <input
            type="text"
            className="w-full px-4 py-3.5 bg-[#1e2823]/80 border border-[#8BC34A]/30 rounded-lg text-white text-sm mb-4 focus:outline-none focus:border-[#8BC34A] focus:ring-4 focus:ring-[#8BC34A]/10 transition-all placeholder:text-[#666]"
            placeholder="e.g., IITD, MIT, NITK"
            value={institutionCode}
            onChange={(e) => setInstitutionCode(e.target.value)}
          />
          <button 
            className="w-full px-6 py-3.5 bg-gradient-to-r from-[#689F38] via-[#8BC34A] to-[#AFB42B] rounded-lg text-[#1a1a1a] text-[15px] font-semibold flex items-center justify-center gap-2 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(139,195,74,0.4)] transition-all"
            onClick={handleFindInstitution}
          >
            <svg width="18" height="18" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 2L3 7V17L10 22L17 17V7L10 2Z"/>
            </svg>
            Find Institution
          </button>
        </div>

        {/* Footer text */}
        <p className="text-[13px] text-[#808080] leading-relaxed">
          Don't see your institution? Contact your admin to get it added.
        </p>
      </div>


    </div>
  );
};

export default App;
