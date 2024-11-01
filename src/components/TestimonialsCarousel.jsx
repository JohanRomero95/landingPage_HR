import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "HR Director, Tech Corp",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Working with HR Solutions transformed our recruitment process. We've seen a 40% improvement in employee retention since implementing their strategies."
  },
  {
    name: "Michael Chen",
    role: "CEO, Innovation Labs",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "Their expertise in HR management has been invaluable. They helped us build a culture that attracts top talent and keeps them engaged."
  },
  {
    name: "Emily Rodriguez",
    role: "Operations Manager, Global Retail",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=150&h=150",
    quote: "The employee experience programs they implemented have significantly improved our team's satisfaction and productivity."
  }
];

export default function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">What Our Clients Say</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Carousel Controls */}
          <button 
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          
          <button 
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 p-2 text-gray-600 hover:text-blue-600 transition-colors"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          {/* Testimonial Card */}
          <div className="bg-gray-50 rounded-2xl p-8 md:p-12 shadow-lg">
            <div className="flex flex-col items-center text-center">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover mb-6 ring-4 ring-blue-100"
              />
              <blockquote className="text-xl text-gray-700 italic mb-6">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              <div>
                <cite className="text-lg font-semibold text-gray-900 not-italic">
                  {testimonials[currentIndex].name}
                </cite>
                <p className="text-blue-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}