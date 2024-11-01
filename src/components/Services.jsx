import React from 'react';
import { Users, Building2, HeartHandshake } from 'lucide-react';
import ServiceCard from './ServiceCard';

export default function Services() {
  const services = [
    {
      icon: Users,
      title: 'Talent Acquisition',
      description: 'Strategic recruitment solutions to attract and retain top talent for your organization\'s success.',
      color: 'blue'
    },
    {
      icon: Building2,
      title: 'HR Management',
      description: 'Comprehensive HR solutions including payroll, benefits, and compliance management.',
      color: 'green'
    },
    {
      icon: HeartHandshake,
      title: 'Employee Experience',
      description: 'Create an engaging workplace culture that drives performance and satisfaction.',
      color: 'purple'
    }
  ];

  return (
    <section className="py-24 bg-gray-50" id="services">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-16 text-gray-800">How We Can Help You</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}