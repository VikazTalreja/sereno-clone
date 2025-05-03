"use client"
import React from 'react';
import ContactButton from './ContactButton';

const CTA = () => {
  return (
    <section className="bg-[#0f253c] rounded-t-xl text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
        <p className="text-lg mb-8">We'd love to hear from you.</p>
        <div>
          <ContactButton 
            buttonText="Let's Talk" 
            buttonClassName="px-8 py-3 bg-white text-[#0f253c] rounded-md font-medium transition-colors hover:bg-gray-100"
            formTitle="Get in Touch"
          />
        </div>
      </div>
    </section>
  );
};

export default CTA; 