import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPage() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        

        
        <section className="bg-[#f8f9fa] relative py-16 md:py-12">
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
               About Us
              </h1>
          
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] relative py-16 md:py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                <div className="text-gray-600 text-lg text-left">
                  <span className="text-2xl font-bold text-[#0f253c] block mb-6">About Us</span>

                  <p className="mb-4">
                    Sereno Volante is an AI solutions company focused on helping large enterprises unlock the full potential of generative AI. Our team brings over 70 years of combined experience in artificial intelligence, spanning research, engineering, infrastructure, and enterprise deployment.
                  </p>

                  <p className="mb-4">
                    We specialize in tackling complex business problems that require more than off-the-shelf solutions. Every project starts with a deep understanding of the problem before we work backward to design the right solution. From internal copilots and knowledge systems to customer-facing tools and multimodal automation, we build AI that fits your workflows, scales with your operations, and works within your existing technology stack.
                  </p>

                  <p className="mb-4">
                    Our strength lies in execution. We are not here to do proofs of concept. We deploy full-scale, production-ready AI systems that integrate with your infrastructure, whether it's Azure, AWS, private cloud, or on-prem GPU environments. Security, compliance, and performance are built in from the start.
                  </p>

                  <p className="mb-4">
                    We work closely with internal teams to bring AI into real business operations, automating what's manual, structuring what's messy, and accelerating what matters. Whether it's document intelligence, search and summarization, or large-scale data extraction, we are always pushing the boundaries of what's possible.
                  </p>

                  <p>
                    At Sereno Volante, we take on challenges that others hesitate to touch. We do not just keep up with the pace of AI we help set it.
                  </p>
                </div>
                </div>
            </div>
        </section>
        
   
      </main>
      
      <Footer />
    </div>
  );
} 