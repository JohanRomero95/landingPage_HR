import React from 'react';

export default function ServiceCard({ icon: Icon, title, description, color }) {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
      <div className={`w-16 h-16 bg-${color}-100 rounded-full flex items-center justify-center mb-6`}>
        <Icon className={`w-8 h-8 text-${color}-600`} />
      </div>
      <h3 className="text-2xl font-bold mb-4 text-gray-800">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      <a href="#" className="text-blue-600 font-semibold hover:text-blue-700">Learn More →</a>
    </div>
  );
}