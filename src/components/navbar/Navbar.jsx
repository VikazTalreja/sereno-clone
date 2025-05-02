'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white w-full py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
      {/* Logo */}
      <div className="flex items-center space-x-2">
        <Link href="/" className="flex items-center">
          <span className="text-2xl font-bold text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>sereno</span>
          <div className="h-1 w-16 bg-[#0f253c] mt-1 ml-1"></div>
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center space-x-8">
        <Link 
          href="/solutions" 
          className="text-gray-700 hover:text-black transition-colors" 
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
        >
          Solutions
        </Link>
        <Link 
          href="/use-cases" 
          className="px-4 py-2 border border-[#0f253c] text-[#0f253c] rounded-md hover:bg-[#0f253c]/5 transition-colors"
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
        >
          Explore Use Cases
        </Link>
        <Link 
          href="/about" 
          className="text-gray-700 hover:text-black transition-colors" 
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
        >
          About Us
        </Link>
        <Link 
          href="/blog" 
          className="text-gray-700 hover:text-black transition-colors" 
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
        >
          Blog
        </Link>
        <Link 
          href="/contact" 
          className="px-4 py-2 bg-[#0f253c] text-sm text-white rounded-md transition-colors"
          style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 400 }}
        >
          Let's Talk
        </Link>
      </div>

      {/* Mobile menu button */}
      <div className="md:hidden">
        <button 
          className="text-gray-700 hover:text-black focus:outline-none"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white shadow-md md:hidden z-50 py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/solutions" 
              className="text-gray-700 hover:text-black transition-colors"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
            >
              Solutions
            </Link>
            <Link 
              href="/use-cases" 
              className="text-gray-700 hover:text-black transition-colors"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
            >
              Explore Use Cases
            </Link>
            <Link 
              href="/about" 
              className="text-gray-700 hover:text-black transition-colors"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
            >
              About Us
            </Link>
            <Link 
              href="/blog" 
              className="text-gray-700 hover:text-black transition-colors"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 500 }}
            >
              Blog
            </Link>
            <Link 
              href="/contact" 
              className="px-4 py-2 bg-[#0f253c] text-white rounded hover:bg-opacity-90 transition-colors w-full text-center"
              style={{ fontFamily: 'Satoshi, sans-serif', fontWeight: 600 }}
            >
              Let's Talk
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar; 