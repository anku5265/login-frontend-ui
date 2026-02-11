import React, { useState } from 'react';

const App: React.FC = () => {
  const [institutionCode, setInstitutionCode] = useState('');

  const handleFindInstitution = () => {
    console.log('Finding institution:', institutionCode);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a1f1a] via-[#000000] to-[#1a1a0a] flex items-center justify-center relative overflow-hidden">
      {/* Decorative blur circles - matching original */}
      <div className="absolute w-[300px] h-[300px] bg-[#1a4d2e]/40 rounded-full blur-[100px] opacity-50 top-[50px] left-[50px]"></div>
      <div className="absolute w-[250px] h-[250px] bg-[#4a5a2d]/30 rounded-full blur-[100px] opacity-40 top-[100px] right-[100px]"></div>

      {/* Main content card */}
      <div className="bg-[#0f1a15]/60 backdrop-blur-md border border-[#2d4a2d]/30 rounded-2xl p-12 w-[420px] text-center z-10 shadow-2xl">
        
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-[#9CCC65] to-[#7CB342] rounded-full flex items-center justify-center shadow-lg">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
              {/* Building with columns */}
              <rect x="7" y="12" width="16" height="13" fill="white"/>
              {/* Triangular pediment/roof */}
              <path d="M5 12 L15 5 L25 12 Z" fill="white"/>
              {/* Three columns */}
              <rect x="9" y="14" width="2.5" height="11" fill="#689F38"/>
              <rect x="13.75" y="14" width="2.5" height="11" fill="#689F38"/>
              <rect x="18.5" y="14" width="2.5" height="11" fill="#689F38"/>
              {/* Circle/clock on pediment */}
              <circle cx="15" cy="9" r="2.5" fill="white"/>
              <circle cx="15" cy="9" r="1" fill="#689F38"/>
            </svg>
          </div>
        </div>

        {/* Welcome text */}
        <h1 className="text-[28px] font-semibold text-[#8BC34A] mb-2">
          Welcome to Colugee
        </h1>
        <p className="text-[14px] text-[#9e9e9e] mb-8">
          Your all-in-one educational platform
        </p>

        {/* Input section */}
        <div className="mb-6">
          <label className="block text-left text-[14px] text-[#b0b0b0] mb-2 font-medium">
            Enter Institution Code
          </label>
          <input
            type="text"
            className="w-full px-4 py-3.5 bg-[#0a1410]/80 border border-[#2d4a2d]/40 rounded-lg text-white text-[14px] mb-4 focus:outline-none focus:border-[#8BC34A]/50 focus:ring-2 focus:ring-[#8BC34A]/20 transition-all placeholder:text-[#4a5a4a]"
            placeholder="e.g., IITD, MIT, NITK"
            value={institutionCode}
            onChange={(e) => setInstitutionCode(e.target.value)}
          />
          
          {/* Button */}
          <button 
            className="w-full px-6 py-3.5 bg-gradient-to-r from-[#689F38] via-[#8BC34A] to-[#AFB42B] rounded-lg text-[#1a1a1a] text-[15px] font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all cursor-pointer"
            onClick={handleFindInstitution}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
              <path d="M12 3L4 9V21H20V9L12 3Z"/>
              <rect x="10" y="14" width="4" height="7"/>
            </svg>
            Find Institution
          </button>
        </div>

        {/* Footer text */}
        <p className="text-[13px] text-[#808080]">
          Don't see your institution? Contact your admin to get it added.
        </p>
      </div>
    </div>
  );
};

export default App;
