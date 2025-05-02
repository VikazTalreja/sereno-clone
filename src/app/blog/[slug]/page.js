import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import { blogPosts } from '../../../data/blogPosts';

export default function BlogPostPage({ params }) {
  const { slug } = params;
  
  // Find the blog post with the matching slug
  const post = blogPosts.find(post => post.slug === slug);
  
  // If no matching post is found, show 404
  if (!post) {
    notFound();
  }
  
  // Function to format content with bullet points
  const formatContent = (content) => {
    return content.split('\n').map((paragraph, index) => {
      if (paragraph.trim().startsWith('•')) {
        return (
          <li key={index} className="mb-2">
            {paragraph.trim().substring(1).trim()}
          </li>
        );
      } else if (paragraph.trim()) {
        return (
          <p key={index} className="mb-4">
            {paragraph}
          </p>
        );
      }
      return null;
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-[#f8f9fa] py-16">
          <div className="container mx-auto px-6 md:px-12">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6">
                <Link 
                  href="/blog" 
                  className="text-[#0f253c] hover:text-[#0f253c] flex items-center"
                  style={{ fontFamily: 'Satoshi, sans-serif' }}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                  </svg>
                  Back to all posts
                </Link>
              </div>
              
              <div className="inline-block bg-[#0f253c]/10 text-[#0f253c] px-3 py-1 rounded-full text-sm font-medium mb-4">
                {post.category}
              </div>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0f253c] mb-6" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                {post.title}
              </h1>
              
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-[#0f253c] text-white flex items-center justify-center mr-3">
                  {post.author.charAt(0)}
                </div>
                <div className="mr-4">
                  <p className="font-medium" style={{ fontFamily: 'Satoshi, sans-serif' }}>{post.author}</p>
                  <p className="text-sm text-gray-500">{post.authorRole}</p>
                </div>
                <div className="text-gray-500 text-sm flex items-center">
                  <span>{post.publishDate}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Content Section */}
        <section className="py-12 px-6 md:px-12">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <div className="prose prose-lg">
                <div className="text-gray-700 leading-relaxed">
                  {formatContent(post.content)}
                </div>
              </div>
              
              {/* Share Section */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <p className="font-medium text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>Share this article</p>
                  <div className="flex space-x-4">
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                      </svg>
                    </button>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors">
                      <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              
              {/* Related Posts Section */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold mb-6 text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                  More from Sereno
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {blogPosts
                    .filter(relatedPost => relatedPost.slug !== post.slug)
                    .slice(0, 2)
                    .map((relatedPost, index) => (
                      <Link href={`/blog/${relatedPost.slug}`} key={index}>
                        <div className="border border-gray-100 rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
                          <div className="inline-block bg-[#0f253c]/10 text-[#0f253c] px-2 py-1 rounded-full text-xs font-medium mb-3">
                            {relatedPost.category}
                          </div>
                          <h3 className="text-lg font-bold mb-2 text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                            {relatedPost.title}
                          </h3>
                          <div className="text-sm text-gray-500 flex items-center">
                            <span>{relatedPost.publishDate}</span>
                            <span className="mx-2">•</span>
                            <span>{relatedPost.readTime}</span>
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
                <div className="mt-8 text-center">
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
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
} 