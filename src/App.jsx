import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#0b1020] font-inter">
      <Hero />
      <Features />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
