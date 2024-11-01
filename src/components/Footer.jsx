import React from 'react';
import { Users, Facebook, Twitter, Linkedin, Instagram, Youtube } from 'lucide-react';
import FooterColumn from './FooterColumn';

export default function Footer() {
  const columns = [
    {
      title: 'Company',
      links: ['About', 'Careers', 'Partners']
    },
    {
      title: 'Services',
      links: ['Recruitment', 'Consulting', 'Training']
    },
    {
      title: 'Resources',
      links: ['Blog', 'Guides', 'Research']
    },
    {
      title: 'Contact',
      links: ['Support', 'Sales', 'Office']
    }
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-6 gap-8">
          <div className="col-span-6 md:col-span-2 mb-8">
            <div className="flex items-center gap-2 text-white mb-4">
              <Users className="w-8 h-8" />
              <span className="text-xl font-bold">HR Solutions</span>
            </div>
            <p className="text-gray-400">Transforming workplaces through innovative human resource solutions.</p>
          </div>

          {columns.map((column, index) => (
            <FooterColumn key={index} {...column} />
          ))}
        </div>

        <hr className="border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <ul className="flex space-x-4">
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div className="flex space-x-4">
            {[Facebook, Twitter, Linkedin, Instagram, Youtube].map((Icon, index) => (
              <a key={index} href="#" className="hover:text-white transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}