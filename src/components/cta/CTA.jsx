import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
    <section className="bg-[#0f253c] rounded-t-xl text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in working together?</h2>
        <p className="text-lg mb-8">We'd love to hear from you.</p>
        <div>
          <Link
            href="/contact"
            className="px-8 py-3 bg-white text-[#0f253c] rounded-md font-medium hover:bg-gray-100 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTA; 