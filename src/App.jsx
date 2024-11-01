import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import TestimonialsCarousel from './components/TestimonialsCarousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Services />
      <TestimonialsCarousel />
      <Footer />
    </div>
  );
}

export default App;