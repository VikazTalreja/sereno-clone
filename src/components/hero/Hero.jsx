import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Hero = () => {
  return (
    <section className="bg-white py-12 md:py-20 px-6 md:px-12">
      <div className="">
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-[#0f253c] mb-6">
              Enterprise AI, from problem to solution
            </h1>
            <p className="text-lg text-gray-500 mb-8">
              We partner with India's largest organizations to design and deploy custom AI solutions that deliver results—fast.
            </p>
            <div>
              <Link 
                href="/use-cases" 
                className="px-6 py-3 bg-[#0f253c] text-white rounded-md transition-colors text-center inline-block"
              >
                Explore Use Cases
              </Link>
            </div>
          </div>
          
          <div className="flex flex-col justify-center items-center">
            <div className="grid md:grid-cols-4 grid-cols-2  opacity-50 gap-8 items-center">
              <div className="text-center">
                <div className="h-24 w-24 cursor-pointer hover:grayscale-0 grayscale hover:opacity-100 transition-all duration-300 flex items-center justify-center mx-auto">
                  <Image src="/starbucks.png" alt="Starbucks" width={100} height={100} />
                </div>
              </div>
              <div className="text-center">
                <div className="h-16 w-16 cursor-pointer hover:grayscale-0 grayscale hover:opacity-100 transition-all duration-300 flex items-center justify-center mx-auto">
                  <Image src="/l&T.png" alt="L&T" width={100} height={100} />
                </div>
              </div>
              <div className="text-center">
                <div className="h-32 w-32 cursor-pointer hover:grayscale-0 grayscale hover:opacity-100 transition-all duration-300 flex items-center justify-center mx-auto">
                  <Image src="/Jsw.png" alt="Jsw" width={150} height={150} />
                </div>
              </div>
              <div className="text-center">
                <div className="md:h-44 md:w-44 cursor-pointer hover:grayscale-0 grayscale hover:opacity-100 transition-all duration-300 flex items-center justify-center mx-auto">
                  <Image src="/Schindler.png" alt="Schindler" width={200} height={200} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 