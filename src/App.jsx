import React, { useRef } from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import TransferForm from './components/TransferForm';
import Footer from './components/Footer';

function App() {
  const formRef = useRef(null);
  const handleGetStarted = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-slate-950 font-inter text-white">
      <Hero onGetStarted={handleGetStarted} />
      <Features />
      <div ref={formRef}>
        <TransferForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
