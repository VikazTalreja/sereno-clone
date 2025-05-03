'use client';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const CapabilitiesStack = () => {
  const [activeCapability, setActiveCapability] = useState(0);
  const sectionRefs = useRef([]);
  const stickyNavRef = useRef(null);
  const navWrapperRef = useRef(null);
  const containerRef = useRef(null);
  const [navHeight, setNavHeight] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

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

  // Check if viewport is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  // Initialize intersection observer to detect which section is in view
  useEffect(() => {
    if (isMobile) return; // Don't use intersection observer on mobile
    
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
    };

    const handleIntersect = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          if (index !== -1) {
            setActiveCapability(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    
    // Observe each section
    sectionRefs.current.forEach(section => {
      if (section) observer.observe(section);
    });

    return () => {
      if (observer) {
        observer.disconnect();
      }
    };
  }, [isMobile]);

  // Calculate and store nav height on mount and window resize
  useEffect(() => {
    if (!stickyNavRef.current || isMobile) return;
    
    const updateNavHeight = () => {
      if (stickyNavRef.current) {
        setNavHeight(stickyNavRef.current.offsetHeight);
      }
    };
    
    // Initial calculation
    updateNavHeight();
    
    // Update on resize
    window.addEventListener('resize', updateNavHeight);
    
    return () => {
      window.removeEventListener('resize', updateNavHeight);
    };
  }, [isMobile]);

  // Simple and reliable sticky implementation - only for desktop
  useEffect(() => {
    if (!navWrapperRef.current || !containerRef.current || !stickyNavRef.current || isMobile) return;

    const navWrapper = navWrapperRef.current;
    const container = containerRef.current;
    const nav = stickyNavRef.current;
    
    // Get the last section for end-of-sticky detection
    const lastSection = sectionRefs.current[sectionRefs.current.length - 1];
    if (!lastSection) return;
    
    const handleScroll = () => {
      // Check if we're on mobile - if so, don't do sticky
      if (window.innerWidth < 768) {
        nav.style.position = 'static';
        nav.style.width = '100%';
        navWrapper.style.height = 'auto';
        return;
      }
      
      // Get container position
      const containerRect = container.getBoundingClientRect();
      // Get last section position to determine when to stop being sticky
      const lastSectionRect = lastSection.getBoundingClientRect();
      
      // Calculate space for nav wrapper to preserve layout
      navWrapper.style.height = `${navHeight}px`;
      
      // Start being sticky when container top reaches viewport top
      if (containerRect.top <= 0) {
        // Stop being sticky when we've scrolled past the last section
        if (lastSectionRect.bottom <= navHeight) {
          nav.style.position = 'absolute';
          nav.style.top = `${lastSectionRect.bottom - containerRect.top - navHeight}px`;
          nav.style.width = '100%';
          nav.style.zIndex = '10';
        } else {
          // Stay sticky while scrolling through sections
          nav.style.position = 'fixed';
          nav.style.top = '80px';
          nav.style.width = `${navWrapper.offsetWidth}px`;
          nav.style.zIndex = '20';
        }
      } else {
        // Reset when we're above the container
        nav.style.position = 'static';
        nav.style.width = '100%';
        nav.style.zIndex = '10';
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    
    // Run once on mount
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [navHeight, isMobile]);

  // Scroll to section when clicking on a navigation item
  const scrollToSection = (index) => {
    setActiveCapability(index);
    if (sectionRefs.current[index]) {
      const yOffset = -10; // Small offset to account for sticky nav
      const element = sectionRefs.current[index];
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      
      window.scrollTo({
        top: y,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f253c] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Capabilities Stack
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our end-to-end enterprise AI capabilities deliver results from initial concept to full-scale deployment
          </p>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 lg:grid-cols-5 gap-6 max-w-6xl mx-auto relative">
          {/* Left side: Capability Selector - sticky on desktop only */}
          <div className="lg:col-span-2 lg:pr-8" ref={navWrapperRef}>
            <div ref={stickyNavRef} className={`w-full ${isMobile ? '' : 'sticky-nav'}`}>
              <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="divide-y divide-gray-100">
                  {capabilities.map((capability, index) => (
                    <div 
                      key={capability.id}
                      className={`p-4 cursor-pointer transition-all duration-300 ${activeCapability === index ? 'bg-[#0f253c] text-white' : 'hover:bg-gray-50'}`}
                      onClick={() => scrollToSection(index)}
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
          </div>

          {/* Right side: Scrollable Sections */}
          <div className="lg:col-span-3">
            {capabilities.map((capability, index) => (
              <div 
                key={capability.id}
                ref={el => sectionRefs.current[index] = el}
                className="mb-16 bg-white rounded-2xl shadow-lg p-8 relative overflow-hidden"
              >
                {/* Background decoration */}
                <div className="absolute -bottom-10 -right-10 w-64 h-64 rounded-full bg-[#0f253c]/5 z-0"></div>
                <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-[#0f253c]/5 z-0"></div>
                
                <div className="relative z-1">
                  <h3 className="text-2xl font-bold text-[#0f253c] mb-4">
                    {capability.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {capability.description}
                  </p>
                  
                  {/* Additional content for each capability section */}
                  <div className="mt-6">
                    {index === 0 && (
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-2 text-[#0f253c]">Discovery Process</h4>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Identify business challenges and opportunities</li>
                          <li>Assess feasibility and potential ROI</li>
                          <li>Design solution architecture</li>
                        </ul>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-2 text-[#0f253c]">AI Technologies</h4>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Custom LLM fine-tuning</li>
                          <li>Computer vision and multimodal models</li>
                          <li>RAG and knowledge graphs</li>
                        </ul>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-2 text-[#0f253c]">Infrastructure Options</h4>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Public cloud (AWS, Azure, GCP)</li>
                          <li>On-premise GPU deployments</li>
                          <li>Hybrid and multi-cloud setups</li>
                        </ul>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="bg-gray-50 p-6 rounded-lg">
                        <h4 className="font-bold mb-2 text-[#0f253c]">Ongoing Support</h4>
                        <ul className="list-disc pl-6 text-gray-600 space-y-2">
                          <li>Monitoring and performance tuning</li>
                          <li>Model retraining and updates</li>
                          <li>Technical support and knowledge transfer</li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesStack;