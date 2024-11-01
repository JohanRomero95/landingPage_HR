import React from 'react';

export default function FooterColumn({ title, links }) {
  return (
    <div className="col-span-6 sm:col-span-3 md:col-span-1">
      <h3 className="text-white font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a href="#" className="hover:text-white transition-colors">{link}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}