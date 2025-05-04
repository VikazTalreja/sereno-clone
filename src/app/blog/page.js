import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        

        
        <section className="bg-[#f8f9fa] w-full relative py-16 md:py-12">
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
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-[#0f253c] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                Sereno Blog
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Insights, strategies, and case studies on enterprise AI implementation
              </p>
            </div>
          </div>
        </section>
        
        {/* Blog Posts Section */}
        <section className="py-16 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <article key={index} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-transform duration-300 hover:-translate-y-1 hover:shadow-md">
                  <div className="h-48 bg-gradient-to-r from-[#0f253c] to-[#2d4b77] flex items-center justify-center">
                    <span className="text-white text-sm font-medium py-1 px-3 rounded-full bg-[#111827]/40">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6">
                   
                    <h3 className="text-xl font-bold mb-3 text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                      {post.title}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex justify-between items-center">
                     
                      <Link href={`/blog/${post.slug}`} className="text-[#0f253c] hover:text-[#0f253c] font-medium text-sm" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                        Read more →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
        
        {/* Pagination Section */}
        <section className="py-10 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <div className="flex justify-center items-center space-x-4">
              <button 
                className="p-2 rounded-md bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-50"
                disabled
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <span className="px-4 py-2 bg-[#0f253c] text-white rounded-md">1</span>
              
              <button className="p-2 rounded-md bg-white border border-gray-200 text-gray-500 hover:bg-gray-50">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </section>
        
        {/* Subscribe Section */}
        {/* <section className="bg-[#f8f9fa] py-16 px-6 md:px-12">
          <div className="container mx-auto max-w-4xl">
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm border border-gray-100">
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold text-[#0f253c] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  Stay updated with the latest in AI
                </h2>
                <p className="text-gray-600">
                  Get insights and best practices delivered straight to your inbox
                </p>
              </div>
              <div className="flex flex-col md:flex-row gap-3 max-w-xl mx-auto">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="flex-grow px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00E676]"
                />
                <button 
                  className="px-6 py-3 bg-[#0f253c] text-white rounded-md hover:bg-opacity-90 transition-colors"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section> */}
      </main>
      
      <Footer />
    </div>
  );
} 