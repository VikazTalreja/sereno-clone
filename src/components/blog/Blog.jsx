'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { blogPosts } from '../../data/blogPosts';

const Blog = () => {
  const [activePost, setActivePost] = useState(null);
  
  // Get only the first 3 posts for the homepage component
  const featuredPosts = blogPosts.slice(0, 3);

  // Function to handle touch interactions
  const handleTouch = (index) => {
    setActivePost(activePost === index ? null : index);
  };

  return (
    <section className="bg-white py-16 px-6 md:px-12">
      <div className="mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Blog Insights</h2>
        
        <div className="space-y-6">
          {featuredPosts.map((post, index) => (
            <article 
              key={index} 
              className="border-l-4 border-[#0f253c] pl-4 py-4 relative overflow-hidden transition-all duration-300 ease-in-out bg-white rounded-lg shadow-sm hover:shadow-md"
              onMouseEnter={() => setActivePost(index)}
              onMouseLeave={() => setActivePost(null)}
              onTouchStart={() => handleTouch(index)}
            >
              <div className="flex justify-between items-center">
                <div>
                  {/* <div className="inline-block bg-[#0f253c]/10 text-[#0f253c] px-2 py-1 rounded-full text-xs font-medium mb-2">
                    {post.category}
                  </div> */}
                  
                  <h3 className="text-lg font-semibold mb-1 text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {post.title}
                  </h3>
                </div>
                {/* <div className="text-sm md:flex hidden text-gray-500  items-center">
                  <span>{post.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime || '3 min read'}</span>
                </div> */}
              </div>
              
              <div 
                className={`transition-all duration-500 ease-in-out overflow-hidden ${
                  activePost === index ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gray-50 p-4 rounded-md shadow-sm">
                  <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
                    {post.excerpt || post.content.substring(0, 240) + '...'}
                  </p>
                  <Link 
                    href={`/blog/${post.slug}`} 
                    className="mt-4 inline-block text-sm font-medium text-[#0f253c] hover:underline"
                    style={{ fontFamily: 'Satoshi, sans-serif' }}
                  >
                    Continue reading →
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        <div className="mt-10 flex justify-start">
          <Link 
            href="/blog" 
            className="inline-flex items-center px-6 py-3 bg-[#0f253c] text-white rounded-md hover:bg-opacity-90 transition-colors"
            style={{ fontFamily: 'Satoshi, sans-serif' }}
          >
            View All Articles
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Blog; 