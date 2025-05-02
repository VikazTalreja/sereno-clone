'use client';
import React, { useState, useEffect } from 'react';

const stats = [
  { id: 1, metric: "ROI", value: 380, unit: "%", description: "Average return on investment" },
  { id: 2, metric: "Efficiency", value: 68, unit: "%", description: "Average operational efficiency increase" },
  { id: 3, metric: "Time Saved", value: 12500, unit: "hrs", description: "Monthly hours saved for clients" },
  { id: 4, metric: "Cost Reduction", value: 42, unit: "%", description: "Average process cost reduction" }
];

const UseCaseStats = () => {
  const [animated, setAnimated] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('stats-section');
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (!animated) return;

    const intervals = stats.map((stat, index) => {
      const duration = 2000; // Animation duration in ms
      const steps = 30; // Number of steps to take
      const increment = Math.ceil(stat.value / steps);
      let count = 0;

      return setInterval(() => {
        count += increment;
        if (count >= stat.value) {
          count = stat.value;
          clearInterval(intervals[index]);
        }

        setCounts(prev => {
          const newCounts = [...prev];
          newCounts[index] = count;
          return newCounts;
        });
      }, duration / steps);
    });

    return () => {
      intervals.forEach(interval => clearInterval(interval));
    };
  }, [animated]);

  return (
    <section id="stats-section" className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0f253c] mb-4" style={{ fontFamily: 'Satoshi, sans-serif' }}>
            Transformative Impact Across Industries
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our enterprise AI solutions deliver measurable results that drive business growth and operational excellence
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div key={stat.id} className="relative overflow-hidden bg-white rounded-xl shadow-lg border border-gray-100 p-6 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
              {/* Decorative element */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#0f253c]/5 z-0"></div>
              
              <div className="relative z-10">
                <div className="flex items-baseline mb-2">
                  <span className="text-4xl md:text-5xl font-bold text-[#0f253c]" style={{ fontFamily: 'Satoshi, sans-serif' }}>
                    {counts[index].toLocaleString()}
                  </span>
                  <span className="ml-1 text-2xl text-[#0f253c] font-medium">{stat.unit}</span>
                </div>
                <p className="text-lg font-semibold text-gray-700 mb-2">{stat.metric}</p>
                <p className="text-gray-600">{stat.description}</p>
                
                {/* Progress bar */}
                <div className="w-full h-1 bg-gray-200 rounded-full mt-4 overflow-hidden">
                  <div 
                    className={`h-full bg-[#0f253c] transition-all duration-2000 ease-out ${
                      animated ? 'w-full' : 'w-0'
                    }`}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCaseStats; 