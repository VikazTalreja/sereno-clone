'use client';
import React, { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import IndustryFilter from '../../components/use-cases/IndustryFilter';
import UseCaseCard from '../../components/use-cases/UseCaseCard';
import UseCaseHeader from '../../components/use-cases/UseCaseHeader';
import UseCaseStats from '../../components/use-cases/UseCaseStats';
import UseCaseCTA from '../../components/use-cases/UseCaseCTA';
import ContactButton from '../../components/cta/ContactButton';
import { useCases } from '../../data/useCases';
import CTA from '@/components/cta/CTA';

// Component that uses useSearchParams
function UseCaseContent() {
  const searchParams = useSearchParams();
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [useCaseIdToOpen, setUseCaseIdToOpen] = useState(null);

  // Check URL parameters on component mount
  useEffect(() => {
    const showModal = searchParams.get('showModal');
    const useCaseId = searchParams.get('id');
    
    if (showModal === 'true' && useCaseId) {
      setUseCaseIdToOpen(parseInt(useCaseId, 10));
    }
  }, [searchParams]);

  // Filter use cases based on selected industry and search query
  const filteredUseCases = useCases.filter(useCase => {
    const matchesIndustry = selectedIndustry === 'all' || 
      useCase.industry.toLowerCase() === selectedIndustry.replace('-', ' ');
    
    const matchesSearch = !searchQuery || 
      useCase.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      useCase.industry.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesIndustry && matchesSearch;
  });

  return (
    <>
      {/* Hero / Header Section */}
      <UseCaseHeader />
      
      {/* Filters and Search */}
      {/* <section className="py-10 px-6 md:px-12 bg-gray-50">
        <div className="container mx-auto">
       
          <IndustryFilter 
            selectedIndustry={selectedIndustry} 
            setSelectedIndustry={setSelectedIndustry} 
          />
          
          <div className="mt-8 max-w-lg mx-auto">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by industry or solution"
                className="w-full px-5 py-3 pr-12 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#0f253c]/50 focus:border-transparent"
              />
              <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section> */}
      
      {/* Use Cases Cards Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="container mx-auto">
          {filteredUseCases.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredUseCases.map(useCase => (
                <UseCaseCard 
                  key={useCase.id} 
                  useCase={useCase} 
                  autoOpenModal={useCaseIdToOpen === useCase.id}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#0f253c]/10 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0f253c]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#0f253c] mb-2" style={{ fontFamily: 'Satoshi, sans-serif' }}>No matching use cases found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSelectedIndustry('all');
                  setSearchQuery('');
                }}
                className="inline-flex items-center justify-center px-4 py-2 border border-[#0f253c] text-[#0f253c] rounded-md hover:bg-[#0f253c]/5 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
          
       

        <CTA/>
      </section>
      
      {/* Stats Section */}
      {/* <UseCaseStats /> */}
      
      {/* CTA Section */}
      {/* <UseCaseCTA /> */}
    </>
  );
}

// Loading fallback for Suspense
function UseCasesLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-[#0f253c]"></div>
        <p className="mt-4 text-gray-600">Loading content...</p>
      </div>
    </div>
  );
}

export default function UseCasesPage() {
  return (
    <div className="min-h-screen max-w-7xl w-full mx-auto flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Suspense fallback={<UseCasesLoading />}>
          <UseCaseContent />
        </Suspense>
      </main>
      
      <Footer />
    </div>
  );
} 