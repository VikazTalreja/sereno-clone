'use client';
import React from 'react';

const industries = [
  { id: 'all', name: 'All Industries', color: 'bg-[#0f253c]' },
  { id: 'manufacturing', name: 'Manufacturing', color: 'bg-blue-600' },
  { id: 'financial-services', name: 'Financial Services', color: 'bg-green-600' },
  { id: 'logistics', name: 'Logistics', color: 'bg-purple-600' },
  { id: 'telecommunications', name: 'Telecommunications', color: 'bg-orange-500' },
  { id: 'healthcare', name: 'Healthcare', color: 'bg-red-600' },
  { id: 'energy', name: 'Energy', color: 'bg-teal-600' },
];

const IndustryFilter = ({ selectedIndustry, setSelectedIndustry }) => {
  return (
    <div className="relative">
      <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 py-6">
        {industries.map((industry) => (
          <button
            key={industry.id}
            onClick={() => setSelectedIndustry(industry.id)}
            className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedIndustry === industry.id
                ? `${industry.color} text-white shadow-lg transform -translate-y-1`
                : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow'
            }`}
          >
            <span className="relative z-10">{industry.name}</span>
            {selectedIndustry === industry.id && (
              <span className="absolute inset-0 rounded-full bg-opacity-90 blur-sm"></span>
            )}
          </button>
        ))}
      </div>
      <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>
    </div>
  );
};

export default IndustryFilter; 