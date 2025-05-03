'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CapabilitiesStack = () => {
  const [activeCapability, setActiveCapability] = useState(0);

  const capabilities = [
    {
      id: 0,
      title: "Problem Discovery & Use Case Design",
      description: "We collaborate with your team to identify high-impact AI use cases and design solutions that address your specific business challenges.",
   
    },
    {
      id: 1,
      title: "LLM & Vision AI Engineering",
      description: "Our team develops custom AI models using the latest large language models and computer vision technologies tailored to your industry-specific needs.",
    
    },
    {
      id: 2,
      title: "Cloud + On-Prem GPU Infrastructure Integration",
      description: "We seamlessly integrate AI solutions with your existing infrastructure, whether cloud-based or on-premises, optimizing for performance and cost.",
     
    },
    {
      id: 3,
      title: "Enterprise-Grade Deployment & Support",
      description: "We provide comprehensive deployment services including security reviews, performance tuning, and ongoing support to ensure your AI solutions deliver continuous value.",
     
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f253c] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Capabilities Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our end-to-end enterprise AI capabilities deliver results from initial concept to full-scale deployment
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {/* Left side: Capability Selector */}
          <div className="lg:col-span-2 lg:pr-8">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <div className="divide-y divide-gray-100">
                {capabilities.map((capability, index) => (
                  <div 
                    key={capability.id}
                    className={`p-4 cursor-pointer transition-all duration-300 ${activeCapability === index ? 'bg-[#0f253c] text-white' : 'hover:bg-gray-50'}`}
                    onClick={() => setActiveCapability(index)}
                  >
                    <div className="flex items-center">
                    
                      <div>
                        <h3 className={`font-bold ${activeCapability === index ? 'text-white' : 'text-[#0f253c]'}`}>
                          {capability.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right side: Details */}
          <div className="lg:col-span-3 bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#0f253c]/5 z-0"></div>
            <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#0f253c]/5 z-0"></div>

            {capabilities.map((capability, index) => (
              <motion.div
                key={capability.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ 
                  opacity: activeCapability === index ? 1 : 0,
                  y: activeCapability === index ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
                className={`relative z-10 ${activeCapability === index ? 'block' : 'hidden'}`}
              >
                <div className="">
                 
                  <h3 className="text-2xl font-bold text-[#0f253c] mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600">
                    {capability.description}
                  </p>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {capabilities.map((capability) => (
            <div 
              key={capability.id}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4 text-[#0f253c]">
                {capability.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0f253c] mb-2">{capability.title}</h3>
              <div className="w-12 h-1 bg-[#0f253c] mb-3"></div>
              <p className="text-sm text-gray-600 line-clamp-3">{capability.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesStack; 