import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-black">sereno</span>
              <div className="h-1 w-10 bg-sereno-green mt-1"></div>
            </div>
            <p className="mt-4 text-gray-600">Enterprise AI solutions that deliver results fast.</p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><Link href="/solutions/market-intelligence" className="text-gray-600 hover:text-black transition">Market Intelligence</Link></li>
              <li><Link href="/solutions/salesforce" className="text-gray-600 hover:text-black transition">Salesforce AI</Link></li>
              <li><Link href="/solutions/hr-recruitment" className="text-gray-600 hover:text-black transition">HR & Recruitment</Link></li>
              <li><Link href="/solutions/engineering" className="text-gray-600 hover:text-black transition">Engineering</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-gray-600 hover:text-black transition">About Us</Link></li>
              <li><Link href="/team" className="text-gray-600 hover:text-black transition">Team</Link></li>
              <li><Link href="/careers" className="text-gray-600 hover:text-black transition">Careers</Link></li>
              <li><Link href="/contact" className="text-gray-600 hover:text-black transition">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-600 hover:text-black transition">Blog</Link></li>
              <li><Link href="/case-studies" className="text-gray-600 hover:text-black transition">Case Studies</Link></li>
              <li><Link href="/whitepapers" className="text-gray-600 hover:text-black transition">Whitepapers</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row md:justify-between">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Sereno AI. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-black transition">Privacy Policy</Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-black transition">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 