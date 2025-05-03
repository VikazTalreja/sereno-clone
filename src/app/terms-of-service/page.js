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
               Terms of Service
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
                  Effective as of May 3, 2025

These Terms of Service (“Terms”) govern your access to and use of Sereno Volante Pvt. Ltd.’s (“Sereno”, “we”, “us”) website, services, and any content provided through them. By using our site or engaging our services, you agree to these Terms in full.
    </p>

                  <p className="mb-4">
                  <span className="font-bold text-lg text-[#0f253c]">1. Use of Services</span>
                  <br/>

Sereno provides advanced AI consulting, solution design, and deployment services tailored for large enterprises. All engagements are governed by service-specific contracts, including scope, deliverables, and pricing.
 </p>

                  <p className="mb-4">
                  <span className="font-bold text-lg text-[#0f253c]">2. Intellectual Property</span>
                  <br/>

All website content, designs, documentation, and technology—unless explicitly owned by clients—is the intellectual property of Sereno Volante Pvt. Ltd. Any unauthorized use, reproduction, or distribution is strictly prohibited.
  </p>

                  <p className="mb-4">
                  <span className="font-bold text-lg text-[#0f253c]">3. Client Responsibilities</span>
                  <br/>

When engaging with our services, you agree to:
	•	Provide accurate and complete information to enable effective delivery.
	•	Maintain the confidentiality of project documentation and deliverables.
	•	Use our services in compliance with applicable laws and without violating third-party rights. </p>

                  <p>
                 <span className="font-bold text-lg text-[#0f253c]">4. Confidentiality</span>
                 <br/>
All non-public information exchanged during business discussions or project execution shall remain confidential. Confidentiality terms will also be governed by NDAs or contracts signed between parties.
   </p>
   <p className="mb-4">
  
<span className="font-bold text-lg text-[#0f253c]">5. Disclaimer of Warranties</span>
<br/>
All services are provided on an “as-is” and “as-available” basis. While we strive for technical excellence, we do not guarantee uninterrupted access or absolute defect-free delivery unless contractually stated.
 </p>
 <p className="mb-4">

<span className="font-bold text-lg text-[#0f253c]">6. Limitation of Liability</span>
<br/>
Sereno shall not be held liable for any indirect, incidental, special, or consequential damages arising from your use of the website or services, including data loss or business disruption, even if advised of such possibilities.

 </p>
 <p className="mb-4">
 <span className="font-bold text-lg text-[#0f253c]">7. Governing Law and Jurisdiction</span>
<br/>
These Terms are governed by the laws of the Republic of India. Any disputes shall be exclusively resolved in the courts of Mumbai, Maharashtra, India.
</p>
<p className="mb-4">
<span className="font-bold text-lg text-[#0f253c]">8. Modifications</span>
<br/>

We may update these Terms periodically. Changes will be posted on this page with the updated effective date. Continued use of our services constitutes your acceptance of the new Terms.

</p>
<p className="mb-4">
<span className="font-bold text-lg text-[#0f253c]">9.Contact</span>
<br/>
For any legal or compliance-related questions, reach us at:
legal@serenovolante.com 

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