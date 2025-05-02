import React from 'react';

const UseCaseHeader = () => {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute -left-40 -top-20 w-96 h-96 rounded-full bg-[#0f253c]/5"></div>
        <div className="absolute right-0 top-1/2 w-64 h-64 rounded-full bg-[#0f253c]/5"></div>
        <div className="absolute left-1/3 bottom-0 w-80 h-80 rounded-full bg-[#0f253c]/5"></div>
        
        {/* Animated dots grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="h-full w-full" style={{ 
            backgroundImage: 'radial-gradient(#0f253c 1px, transparent 1px)',
            backgroundSize: '30px 30px' 
          }}></div>
        </div>
      </div>
      
      <div className="container mx-auto relative z-10 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-[#0f253c]/10 text-[#0f253c] text-sm font-medium mb-4">
              Enterprise AI in Action
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f253c] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
              Real-World Use Cases
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Discover how leading enterprises across industries are transforming their operations with Sereno's AI solutions
            </p>
          </div>
          
          {/* <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl border border-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0f253c]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0f253c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f253c] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Measurable Results
                </h3>
                <p className="text-gray-600">
                  Impact-driven solutions with tangible business outcomes and clear ROI metrics
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0f253c]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0f253c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f253c] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Domain-Specific
                </h3>
                <p className="text-gray-600">
                  Tailored to industry challenges with specialized knowledge and proven methodologies
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-2xl bg-[#0f253c]/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0f253c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#0f253c] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Production-Ready
                </h3>
                <p className="text-gray-600">
                  Enterprise-grade solutions designed for scalability, security, and reliability
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default UseCaseHeader; 