import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Logo } from '../components/common/Logo';
import { Button } from '../components/ui/Button';

function InstitutionFound() {
  const navigate = useNavigate();
  const location = useLocation();
  const code = location.state?.code || 'ALLEN505';

  const institution = {
    code: code.toUpperCase(),
    name: 'ALLENHOUSE INSTITUTE OF TECHNOLOGY',
    location: 'Rooma, Kanpur',
    fullName: 'ALLENHOUSE INSTITUTE OF TECHNOLOGY , KANPUR'
  };

  return (
    <PageContainer>
      <div className="mb-8">
        <h2 className="text-[18px] font-semibold text-white mb-2">
          Institution found!
        </h2>
        <p className="text-[13px] text-[#9e9e9e]">
          Welcome to {institution.name}
        </p>
      </div>

      <div className="flex justify-center mb-6">
        <Logo size="lg" />
      </div>

      <h1 className="text-[32px] font-bold text-[#8BC34A] mb-3">
        Welcome to Colugee
      </h1>
      <p className="text-[15px] text-[#9e9e9e] mb-8">
        Your all-in-one educational platform
      </p>

      <div className="inline-block bg-[#1a2820] border border-[#2d4a2d] rounded-full px-8 py-3 mb-6">
        <p className="text-[20px] font-bold text-white tracking-wide">
          {institution.code}
        </p>
      </div>

      <div className="mb-8">
        <h2 className="text-[18px] font-bold text-white mb-2">
          {institution.fullName}
        </h2>
        <p className="text-[14px] text-[#9e9e9e]">
          {institution.location}
        </p>
      </div>

      <div className="flex gap-4 mb-6">
        <Button 
          variant="secondary"
          onClick={() => navigate('/')}
          className="flex-1"
        >
          Change
        </Button>
        <Button 
          onClick={() => navigate('/signin', { state: { institution } })}
          className="flex-1"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Continue
        </Button>
      </div>

      <p className="text-[13px] text-[#808080]">
        Don't see your institution? Contact your admin to get it added.
      </p>
    </PageContainer>
  );
}

export default InstitutionFound;
