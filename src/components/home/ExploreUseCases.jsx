import React from 'react';
import Link from 'next/link';
import { useCases } from '../../data/useCases';

const ExploreUseCases = () => {
  // Get only the first 3 use cases for the preview
  const previewCases = useCases.slice(0, 3);
  
  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 rounded-full bg-[#0f253c]/10 text-[#0f253c] text-sm font-medium mb-4">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f253c] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Real-World AI Impact
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover how leading enterprises are transforming their operations with our intelligent solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {previewCases.map((useCase) => {
            const colorClass = getColorClass(useCase.color);
            
            return (
              <div 
                key={useCase.id} 
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                {/* Color bar */}
                <div className={`h-2 w-full bg-gradient-to-r ${colorClass}`}></div>
                
                <div className="p-6">
                  {/* Industry badge */}
                  <span className="inline-block px-3 py-1 text-sm font-medium bg-gray-100 rounded-full text-gray-700 mb-4">
                    {useCase.industry}
                  </span>
                  
                  <h3 className="text-xl font-bold text-[#0f253c] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {useCase.title}
                  </h3>
                  
                  {/* Results highlights */}
                  <div className="mt-4 space-y-2">
                    {useCase.results.slice(0, 2).map((result, index) => (
                      <div key={index} className="flex items-start">
                        <span className={`inline-flex items-center justify-center h-5 w-5 rounded-full text-white bg-gradient-to-r ${colorClass} mr-2 flex-shrink-0 mt-0.5`}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </span>
                        <span className="text-gray-600 text-sm">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link 
            href="/use-cases"
            className="inline-flex items-center justify-center px-6 py-3 bg-[#0f253c] text-white rounded-md hover:bg-opacity-90 transition-colors"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            Explore All Use Cases
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

// Helper function to get gradient color classes
const getColorClass = (color) => {
  switch (color) {
    case 'blue': return 'from-blue-500 to-blue-700';
    case 'green': return 'from-green-500 to-green-700';
    case 'purple': return 'from-purple-500 to-purple-700';
    case 'orange': return 'from-orange-400 to-orange-600';
    case 'red': return 'from-red-500 to-red-700';
    case 'teal': return 'from-teal-500 to-teal-700';
    default: return 'from-[#0f253c] to-[#1a3a5a]';
  }
};

export default ExploreUseCases; 