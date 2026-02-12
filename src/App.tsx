import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import InstitutionCode from './pages/InstitutionCode';
import InstitutionFound from './pages/InstitutionFound';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<InstitutionCode />} />
        <Route path="/institution-found" element={<InstitutionFound />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
