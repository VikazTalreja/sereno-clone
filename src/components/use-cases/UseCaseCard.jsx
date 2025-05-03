'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const UseCaseCard = ({ useCase, autoOpenModal = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Effect to open modal automatically if autoOpenModal is true
  useEffect(() => {
    if (autoOpenModal) {
      openModal();
    }
  }, [autoOpenModal]);

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto'; // Re-enable scrolling
  };

  // Close modal when clicking outside of it
  const handleOutsideClick = (e) => {
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  return (
    <>
      <div className="relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-[24rem]">
        {/* Top color bar */}
        <div className="h-3 w-full bg-gradient-to-r bg-[#0f253c]"></div>
        
        <div className="p-6">
          {/* Industry badge */}
          <div className="flex justify-between items-start">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full text-gray-700">
              {useCase.industry}
            </span>
          </div>
          
          {/* Title */}
          <h3 className="mt-4 text-xl font-bold text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            {useCase.title}
          </h3>
          
          {/* Challenge */}
          <div className="mt-4">
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Challenge</p>
            <p className="mt-1 text-gray-600 line-clamp-4">{useCase.challenge}</p>
          </div>
          
          {/* View Details button */}
          <button
            onClick={openModal}
            className="mt-8 inline-flex items-center text-sm font-medium text-[#0f253c] hover:text-[#0f253c]/80 transition-colors"
          >
            View Details
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 modal-overlay bg-black/20 backdrop-blur-xs"
          onClick={handleOutsideClick}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto scrollbar-hide"
            style={{ animation: 'modalFadeIn 0.3s ease-out' }}
          >
            {/* Modal header with color bar */}
            <div className="sticky top-0 bg-white z-10">
              <div className="h-3 w-full bg-gradient-to-r bg-[#0f253c] rounded-t-xl"></div>
              <div className="flex justify-between items-center p-6 border-b">
                <div>
                  <div className="flex flex-wrap gap-2 mb-2">
                    <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full text-gray-700">
                      {useCase.industry}
                    </span>
                    {useCase.department && (
                      <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full text-gray-700">
                        {useCase.department}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl font-bold text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {useCase.title}
                  </h3>
                </div>
                <button 
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700 p-2 rounded-full hover:bg-gray-100"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal body content */}
            <div className="p-6">
              {/* Challenge */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#0f253c] mb-2">Challenge</h4>
                <p className="text-gray-600">{useCase.challenge}</p>
              </div>
              
              {/* Solution */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-[#0f253c] mb-2">Solution</h4>
                <p className="text-gray-600">{useCase.solution}</p>
              </div>
              
              {/* Technologies Used */}
              {useCase.technologiesUsed && useCase.technologiesUsed.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#0f253c] mb-2">Technologies Used</h4>
                  <ul className="mt-2 space-y-2">
                    {useCase.technologiesUsed.map((tech, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full text-white bg-[#0f253c] mr-3 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600">{tech}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Results */}
              {useCase.results && useCase.results.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#0f253c] mb-2">Results</h4>
                  <ul className="mt-2 space-y-2">
                    {useCase.results.map((result, index) => (
                      <li key={index} className="flex items-start">
                        <span className="inline-flex items-center justify-center h-5 w-5 rounded-full text-white bg-[#0f253c] mr-3 flex-shrink-0 mt-0.5">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {/* Deployment */}
              {useCase.deployment && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-[#0f253c] mb-2">Deployment</h4>
                  <p className="text-gray-600">{useCase.deployment}</p>
                </div>
              )}
              
              {/* Quote */}
              {useCase.quote && (
                <div className="p-5 bg-gray-50 border-l-4 border-[#0f253c] rounded-r-md">
                  <p className="text-gray-600 italic mb-3">{useCase.quote.text}</p>
                  <div className="flex items-center">
                    <span className="font-semibold text-[#0f253c]">{useCase.quote.author}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-sm text-gray-500">{useCase.quote.position}</span>
                  </div>
                </div>
              )}
            </div>

          </div>
        </div>
      )}

      {/* Add modal animation and scrollbar hiding styles */}
      <style jsx global>{`
        @keyframes modalFadeIn {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        /* Hide scrollbar for Chrome, Safari and Opera */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Hide scrollbar for IE, Edge and Firefox */
        .scrollbar-hide {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
      `}</style>
    </>
  );
};

export default UseCaseCard; 