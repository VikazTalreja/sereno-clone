import React from 'react';
import Link from 'next/link';
import Navbar from '../../components/navbar/Navbar';
import Footer from '../../components/footer/Footer';
import { blogPosts } from '../../data/blogPosts';

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col">
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
               Privacy Policy
              </h1>
          
            </div>
          </div>
        </section>

        <section className="bg-[#f8f9fa] relative py-16 md:py-12">
            <div className="container mx-auto px-6 md:px-12">
                <div className="max-w-4xl mx-auto">
                <div className="text-gray-600 text-lg text-left">
                  <p>Effective as of May 3, 2025</p>

                  <p>
                    Sereno Volante Pvt. Ltd. (“Sereno”, “we”, “us”, or “our”) is committed to protecting the privacy of our clients, partners, and website visitors. This Privacy Policy outlines how we collect, use, store, and protect your information when you engage with us through our website or services.
                  </p>

                  <h3 className="font-bold text-xl mt-6">Information We Collect</h3>
                  <ul className="list-disc list-inside">
                    <li>
                      <span className="font-semibold">Personal Information:</span> Name, email address, phone number, job title, company name, and other contact details provided through our contact forms, meetings, or direct communication.
                    </li>
                    <li>
                      <span className="font-semibold">Usage Data:</span> IP address, browser type, device information, pages visited, time spent on the site, and technical diagnostics to improve our site.
                    </li>
                    <li>
                      <span className="font-semibold">Project-related Information:</span> Any business-related data you share during discovery calls, proposals, or service engagements, including documents and specifications.
                    </li>
                  </ul>

                  <h3 className="font-bold text-xl mt-6">How We Use Your Information</h3>
                  <ul className="list-disc list-inside">
                    <li>To communicate with you regarding inquiries, collaborations, or project discussions.</li>
                    <li>To provide, improve, and optimize our AI services and client experience.</li>
                    <li>To manage internal operations such as project execution, quality assurance, and infrastructure provisioning.</li>
                    <li>To meet legal, regulatory, or compliance requirements.</li>
                  </ul>

                  <h3 className="font-bold text-xl mt-6">Data Sharing and Storage</h3>
                  <p>We do not sell your data. Information is shared only with trusted service providers (such as hosting, analytics, and cloud infrastructure platforms like AWS or Microsoft Azure) strictly for operational needs. All data is stored on secure, access-controlled servers located in compliance-ready environments.</p>

                  <h3 className="font-bold text-xl mt-6">Your Rights</h3>
                  <ul className="list-disc list-inside">
                    <li>You have the right to access your personal data and request a copy.</li>
                    <li>Correct or delete your data.</li>
                    <li>Withdraw consent for communications or data usage.</li>
                    <li>Request restrictions or object to certain uses of your information.</li>
                  </ul>
                  <p>To exercise these rights, email us at <a href="mailto:privacy@serenovolante.com" className="text-blue-600">privacy@serenovolante.com</a>.</p>

                  <h3 className="font-bold text-xl mt-6">Security Measures</h3>
                  <p>We implement strong security practices, including HTTPS encryption, firewalled access, multi-layered cloud security, and limited data retention policies, to protect all user data.</p>

                  <h3 className="font-bold text-xl mt-6">Contact Us</h3>
                  <p>If you have questions or concerns about your privacy or data usage, please contact: <a href="mailto:privacy@serenovolante.com" className="text-blue-600">privacy@serenovolante.com</a></p>
                </div>
                </div>
            </div>
        </section>
        
   
      </main>
      
      <Footer />
    </div>
  );
} 