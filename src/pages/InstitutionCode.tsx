import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Logo } from '../components/common/Logo';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

function InstitutionCode() {
  const [code, setCode] = useState('');
  const navigate = useNavigate();

  function handleSubmit() {
    if (code.trim()) {
      navigate('/institution-found', { state: { code } });
    }
  }

  return (
    <PageContainer>
      <div className="flex justify-center mb-6">
        <Logo size="md" />
      </div>

      <h1 className="text-[28px] font-semibold text-[#8BC34A] mb-2">
        Welcome to Colugee
      </h1>
      <p className="text-[14px] text-[#9e9e9e] mb-8">
        Your all-in-one educational platform
      </p>

      <div className="mb-6">
        <Input
          label="Enter Institution Code"
          placeholder="e.g., IITD, MIT, NITK"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
        />
        
        <Button 
          onClick={handleSubmit}
          disabled={!code.trim()}
          className="w-full"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="opacity-80">
            <path d="M12 3L4 9V21H20V9L12 3Z"/>
            <rect x="10" y="14" width="4" height="7"/>
          </svg>
          Find Institution
        </Button>
      </div>

      <p className="text-[13px] text-[#808080]">
        Don't see your institution? Contact your admin to get it added.
      </p>
    </PageContainer>
  );
}

export default InstitutionCode;
