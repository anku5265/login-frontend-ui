import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { PageContainer } from '../components/layout/PageContainer';
import { Input } from '../components/ui/Input';
import { Button } from '../components/ui/Button';

function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const institution = location.state?.institution;

  function handleSubmit() {
    console.log('Sign in:', { email, password, institution });
  }

  function handleBack() {
    navigate('/institution-found', { state: { code: institution?.code } });
  }

  return (
    <PageContainer>
      <button 
        onClick={handleBack}
        className="absolute top-6 left-6 text-white flex items-center gap-2 hover:text-[#8BC34A] transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M19 12H5M12 19l-7-7 7-7"/>
        </svg>
        Back
      </button>

      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-gradient-to-br from-[#9CCC65] to-[#CDDC39] rounded-2xl flex items-center justify-center shadow-xl">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#1a1a1a" strokeWidth="2">
            <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
            <path d="M6 12v5c3 3 9 3 12 0v-5"/>
          </svg>
        </div>
      </div>

      <h1 className="text-[28px] font-bold text-[#CDDC39] mb-2">
        {institution?.code || 'ALLEN505'}
      </h1>
      <p className="text-[13px] text-[#9e9e9e] mb-8">
        {institution?.name || 'ALLENHOUSE INSTITUTE OF TECHNOLOGY , KANPUR'}
      </p>

      <h2 className="text-[22px] font-semibold text-[#8BC34A] mb-6 text-left">
        Sign In
      </h2>

      <div className="mb-6">
        <Input
          label="Email / Roll Number"
          type="text"
          placeholder="your.email@domain.com or roll number"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <Input
          label="Password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button 
          onClick={handleSubmit}
          disabled={!email.trim() || !password.trim()}
          className="w-full"
        >
          Sign In
        </Button>
      </div>

      <p className="text-[13px] text-[#9e9e9e]">
        By signing, you agree to connect with your institutional community ✨
      </p>
    </PageContainer>
  );
}

export default SignIn;
