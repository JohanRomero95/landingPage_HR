import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
          alt="Office"
          className="w-full h-full object-cover brightness-50"
        />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">Transform Your Workforce with Strategic HR Solutions</h1>
          <p className="text-xl mb-8">Empowering organizations to build exceptional teams and foster growth through innovative human resource management.</p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
}