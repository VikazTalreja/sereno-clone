import React from 'react';
import Link from 'next/link';

const UseCaseCTA = () => {
  return (
    <section className="py-16 md:py-24 px-6 lg:px-12 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#0f253c]/5 to-transparent"></div>
        <div className="absolute -top-10 -right-10 w-80 h-80 rounded-full bg-[#0f253c]/5 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-20 w-96 h-96 rounded-full bg-[#0f253c]/5 blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
          <div className="flex flex-col md:flex-row">
            {/* Left Column - Content */}
            <div className="p-8 md:p-12 lg:p-16 md:w-3/5">
              <span className="inline-block px-3 py-1 rounded-full bg-[#0f253c]/10 text-[#0f253c] text-sm font-medium mb-6">
                Ready to Transform Your Business?
              </span>
              
              <h2 className="text-3xl md:text-4xl font-bold text-[#0f253c] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Let's Build Your Custom AI Solution
              </h2>
              
              <p className="text-lg text-gray-600 mb-8">
                Our team of AI experts will work with you to understand your unique challenges and build a tailored solution that delivers measurable results.
              </p>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0f253c]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0f253c]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Free initial consultation</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0f253c]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0f253c]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Customized solution design</p>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-[#0f253c]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[#0f253c]" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <p className="text-gray-700">Rapid proof-of-concept development</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-[#0f253c] text-white rounded-md hover:bg-opacity-90 transition-colors text-center"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  Schedule Consultation
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
                
                <Link
                  href="/case-studies"
                  className="inline-flex items-center justify-center px-6 py-3 border border-[#0f253c] text-[#0f253c] rounded-md hover:bg-[#0f253c]/5 transition-colors text-center"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  View Case Studies
                </Link>
              </div>
            </div>
            
            {/* Right Column - Visual Element */}
            <div className="md:w-2/5 bg-gradient-to-br from-[#0f253c] to-[#1a3a5a] p-8 md:p-12 flex items-center justify-center relative overflow-hidden">
              {/* Abstract Shape Elements */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
              
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 mx-auto bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Quick Implementation
                </h3>
                
                <p className="text-white/80 mb-6">
                  Get from concept to production in weeks, not months, with our agile implementation methodology
                </p>
                
                <div className="inline-block px-4 py-2 rounded-lg bg-white/20 text-white">
                  <div className="flex items-center">
                    <span className="text-3xl font-bold mr-1">4-8</span>
                    <span className="text-lg">weeks<br/>average</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCaseCTA; 