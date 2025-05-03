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
               Our Team
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
                  At Sereno Volante, our strength lies in the rare combination of deep technical insight and sharp business understanding. We are a lean, high-performing team that has been intentionally built to solve some of the most difficult AI problems in enterprise environments.
                  </p>

                  <p className="mb-4">
                  Our team brings over 80 years of combined experience in AI   from cutting-edge research and model optimization to real-world enterprise deployment and operations. We’ve carefully assembled experts across critical domains: prompt engineers, cloud infrastructure architects, AI product designers, enterprise integrators, and dedicated AI progress trackers who monitor the daily trajectory of the field so we’re always ahead of the curve.
                  </p>

                  <p className="mb-4">
                  We believe great AI doesn’t start with a tool   it starts with a conversation. Every engagement begins with a deep problem discovery process, where we challenge assumptions, audit inefficiencies, and align on outcomes. From there, our team works backward to engineer scalable, secure, and high-impact AI systems tailored to your business reality.
                  </p>

                  <p className="mb-4">
                  Our people have deployed large-scale GenAI systems across cloud and on-prem setups, seamlessly working with Azure, AWS, and hybrid infrastructures. We don’t just experiment   we deliver production-grade systems that integrate with your workflows and deliver real outcomes.

  </p>

                  <p>
                  Sereno Volante isn’t a services assembly line. It’s a collection of handpicked builders, thinkers, and operators who’ve proven themselves in the most demanding AI environments   and are now focused on solving your hardest problems. We move fast, we think deeply, and we don’t stop until the system is working at scale. </p>
                </div>
                </div>
            </div>
        </section>
        
   
      </main>
      
      <Footer />
    </div>
  );
} 