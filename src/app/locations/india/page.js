'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';
import Navbar from '../../../components/navbar/Navbar';
import Footer from '../../../components/footer/Footer';
import CTA from '../../../components/cta/CTA';

export default function IndiaLocationPage() {
  // Schema.org JSON-LD for local business
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sereno India",
    "url": "https://www.serenovolante.com/locations/india",
    "logo": "https://www.serenovolante.com/logo.png",
    "description": "Enterprise AI solutions provider in India, specializing in custom LLM and vision AI applications for businesses across Mumbai, Delhi, Bangalore, and all major cities.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Tech Park, Bandra Kurla Complex",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400051",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "19.0700",
      "longitude": "72.8700"
    },
    "telephone": "+91-22-XXXXXXXX",
    "sameAs": [
      "https://www.linkedin.com/company/sereno-india/",
      "https://twitter.com/sereno_india"
    ],
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      }
    ]
  };

  return (
    <>
      <Head>
        <title>Sereno India | Enterprise AI Solutions in Mumbai, Delhi, Bangalore</title>
        <meta name="description" content="Sereno delivers custom enterprise AI solutions across India. Contact our offices in Mumbai, Delhi, and Bangalore for AI consulting and implementation services." />
        <meta name="keywords" content="AI in India, enterprise AI Mumbai, LLM solutions Delhi, computer vision Bangalore, India AI consulting, AI for manufacturing India, AI for financial services India" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema)
          }}
        />
      </Head>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        
        <main className="flex-grow">
          {/* Hero Section */}
          <section className="py-16 md:py-24 bg-gradient-to-r from-gray-50 to-gray-100">
            <div className="container mx-auto px-6 md:px-12">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h1 className="text-3xl md:text-5xl font-bold text-[#0f253c] mb-6">
                    Enterprise AI Solutions Across India
                  </h1>
                  <p className="text-lg text-gray-600 mb-8">
                    Sereno is helping India's largest enterprises leverage the power of artificial intelligence. With offices in Mumbai, Delhi, and Bangalore, we deliver AI solutions that transform businesses across the country.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link 
                      href="/contact" 
                      className="px-6 py-3 bg-[#0f253c] text-white rounded-md transition-colors"
                    >
                      Contact Our India Team
                    </Link>
                    <Link 
                      href="/use-cases" 
                      className="px-6 py-3 border border-[#0f253c] text-[#0f253c] rounded-md transition-colors hover:bg-gray-50"
                    >
                      View India Case Studies
                    </Link>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="relative h-96 w-full">
                    <Image
                      src="/india-map.jpg"
                      alt="Map of India showing Sereno office locations in Mumbai, Delhi, and Bangalore"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* Locations Section */}
          <section className="py-16 bg-white" id="locations">
            <div className="container mx-auto px-6 md:px-12">
              <h2 className="text-3xl font-bold text-[#0f253c] mb-12 text-center">
                Our India Locations
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Mumbai */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-[#0f253c] mb-3">Mumbai Headquarters</h3>
                  <p className="text-gray-600 mb-4">
                    123 Tech Park, Bandra Kurla Complex<br />
                    Mumbai, Maharashtra 400051
                  </p>
                  <p className="text-gray-600 mb-6">
                    <strong>Phone:</strong> +91-22-XXXXXXXX<br />
                    <strong>Email:</strong> mumbai@serenovolante.com
                  </p>
                  <div className="font-medium text-[#0f253c]">
                    Serving: Mumbai, Pune, Ahmedabad, and Western India
                  </div>
                </div>
                
                {/* Delhi */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-[#0f253c] mb-3">Delhi NCR Office</h3>
                  <p className="text-gray-600 mb-4">
                    456 Cyber City, DLF Phase 2<br />
                    Gurugram, Haryana 122002
                  </p>
                  <p className="text-gray-600 mb-6">
                    <strong>Phone:</strong> +91-11-XXXXXXXX<br />
                    <strong>Email:</strong> delhi@serenovolante.com
                  </p>
                  <div className="font-medium text-[#0f253c]">
                    Serving: Delhi NCR, Jaipur, Chandigarh, and North India
                  </div>
                </div>
                
                {/* Bangalore */}
                <div className="bg-gray-50 rounded-xl p-8 shadow-md">
                  <h3 className="text-xl font-bold text-[#0f253c] mb-3">Bangalore Tech Center</h3>
                  <p className="text-gray-600 mb-4">
                    789 Whitefield Tech Park<br />
                    Bangalore, Karnataka 560066
                  </p>
                  <p className="text-gray-600 mb-6">
                    <strong>Phone:</strong> +91-80-XXXXXXXX<br />
                    <strong>Email:</strong> bangalore@serenovolante.com
                  </p>
                  <div className="font-medium text-[#0f253c]">
                    Serving: Bangalore, Hyderabad, Chennai, and South India
                  </div>
                </div>
              </div>
            </div>
          </section>
          
          {/* India Industries Section */}
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-6 md:px-12">
              <h2 className="text-3xl font-bold text-[#0f253c] mb-6 text-center">
                Industries We Serve in India
              </h2>
              <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Our AI solutions are tailored to the unique challenges and opportunities of India's rapidly growing sectors. We work with leading companies across these industries:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">Manufacturing</h3>
                  <p className="text-sm text-gray-600">Optimizing production and maintenance for India's manufacturing leaders</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">Financial Services</h3>
                  <p className="text-sm text-gray-600">Empowering banks and fintech companies with AI-driven insights</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">Pharmaceuticals</h3>
                  <p className="text-sm text-gray-600">Accelerating research and optimizing supply chains for healthcare</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">IT & Technology</h3>
                  <p className="text-sm text-gray-600">Enhancing products with AI capabilities for tech companies</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">Retail</h3>
                  <p className="text-sm text-gray-600">Transforming customer experiences for India's retail brands</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">Energy</h3>
                  <p className="text-sm text-gray-600">Optimizing operations for traditional and renewable energy providers</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">Agriculture</h3>
                  <p className="text-sm text-gray-600">Using AI to improve productivity and sustainability in farming</p>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm text-center">
                  <h3 className="font-bold text-[#0f253c] mb-2">Transportation</h3>
                  <p className="text-sm text-gray-600">Enhancing logistics and fleet management with AI solutions</p>
                </div>
              </div>
            </div>
          </section>
          
          {/* Indian Client Testimonials */}
          <section className="py-16 bg-white">
            <div className="container mx-auto px-6 md:px-12">
              <h2 className="text-3xl font-bold text-[#0f253c] mb-12 text-center">
                What Our Indian Clients Say
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-[#0f253c]">T</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f253c]">Rajiv Sharma</h3>
                      <p className="text-gray-600">CTO, Top Indian Manufacturing Company</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "Sereno has helped us transform our production facilities across India with their computer vision solutions. We've seen a 35% reduction in quality issues and significantly improved operational efficiency."
                  </p>
                </div>
                
                <div className="bg-gray-50 p-8 rounded-xl shadow-sm">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 rounded-full bg-gray-200 flex items-center justify-center mr-4">
                      <span className="text-2xl font-bold text-[#0f253c]">S</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0f253c]">Priya Mehta</h3>
                      <p className="text-gray-600">Head of Digital, Leading Indian Bank</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">
                    "The custom LLM solution from Sereno has revolutionized our customer service operations. Our agents now handle 3x more inquiries with higher customer satisfaction scores."
                  </p>
                </div>
              </div>
            </div>
          </section>
          
          <CTA />
        </main>
        
        <Footer />
      </div>
    </>
  );
} 