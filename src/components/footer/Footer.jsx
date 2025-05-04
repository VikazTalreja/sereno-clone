import React from 'react';
import Link from 'next/link';
import { useCases } from '@/data/useCases';

const Footer = () => {
  const uniqueuseCases = [...new Set(useCases.map(useCase => useCase.industry))];

  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-[#0f253c] ">sereno</span>
              <div className="h-1 w-10 bg-sereno-green mt-1"></div>
            </div>
            <p className="mt-4 text-gray-600">Enterprise AI solutions that deliver results fast.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-[#0f253c] mb-4">Use cases</h3>
            {uniqueuseCases.map((useCase , index) => (
              <ul className="space-y-2" key={index}>
                <li><Link href={`/use-cases`} className="text-gray-600 hover:text-black transition">{useCase}</Link></li>
              </ul>
            ))}
            
          </div>
          
          <div>
            <h3 className="font-bold text-lg text-[#0f253c] mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-black transition">About Us</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-black transition">Team</Link></li>
              {/* <li><Link href="/careers" className="text-gray-600 hover:text-black transition">Careers</Link></li> */}
              <li><Link href="/contact" className="text-gray-600 hover:text-black transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-[#0f253c] text-lg mb-4">Policies</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy-policy" className="text-gray-600 hover:text-black transition">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="text-gray-600 hover:text-black transition">Terms of Service</Link></li>
            </ul>
          </div>  
        </div>
        
      </div>
    </footer>
  );
};

export default Footer; 