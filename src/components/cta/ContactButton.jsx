"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ContactButton = ({ buttonText = "Let's Talk", buttonClassName = "", formTitle = "Get in Touch" }) => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Here you would typically use a backend service to handle email sending
      // This is a simplified frontend-only example using mailto
      const mailtoLink = `mailto:vikazztalreja@gmail.com?subject=New Contact from Website&body=Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
      window.open(mailtoLink);
      
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setShowForm(false);
        setSubmitStatus(null);
      }, 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Default button style that can be overridden with buttonClassName
  const defaultButtonClass = "px-8 py-3 bg-[#0f253c] text-white rounded-md font-medium transition-colors hover:opacity-90";
  const buttonClasses = buttonClassName || defaultButtonClass;

  return (
    <>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setShowForm(true)}
        className={buttonClasses}
      >
        {buttonText}
      </motion.button>

      <AnimatePresence>
        {showForm && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black"
              onClick={() => setShowForm(false)}
              style={{ zIndex: 40 }}
            />
            
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.95 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-md p-8 rounded-xl shadow-2xl"
              style={{ 
                backgroundColor: "white",
                zIndex: 50,
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
              }}
            >
              <div className="absolute top-3 right-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setShowForm(false)}
                  className="p-1 rounded-full text-gray-400 hover:text-gray-600 focus:outline-none"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.button>
              </div>
              
              <h3 className="text-[#0f253c] text-2xl font-bold mb-6 text-center">{formTitle}</h3>
              
              <form onSubmit={handleSubmit}>
                <div className="mb-4 text-left">
                  <label htmlFor="name" className="block text-sm font-medium mb-1 text-[#0f253c]">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f253c]"
                    required
                  />
                </div>
                <div className="mb-4 text-left">
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-[#0f253c]">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f253c]"
                    required
                  />
                </div>
                <div className="mb-4 text-left">
                  <label htmlFor="message" className="block text-sm font-medium mb-1 text-[#0f253c]">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0f253c]"
                    required
                  ></textarea>
                </div>
                
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 bg-[#0f253c] text-white rounded-md hover:bg-[#1a3c5c] disabled:opacity-50 font-medium transition-colors"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </motion.button>
                
                {submitStatus === 'success' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-green-600 text-center"
                  >
                    Message sent successfully!
                  </motion.p>
                )}
                {submitStatus === 'error' && (
                  <motion.p 
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mt-4 text-red-600 text-center"
                  >
                    There was an error sending your message. Please try again.
                  </motion.p>
                )}
              </form>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default ContactButton; 