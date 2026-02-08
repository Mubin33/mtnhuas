import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function EngineerCTASection() {
  return (
    <section className="relative py-12 lg:py-16 px-6 lg:px-12 bg-[#F8FAFC]">
      <div className="max-w-[1550px] w-[95%] mx-auto">
        {/* CTA Card */}
        <div className="relative rounded-[32px] overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0">
            <Image
              src="/cta_bg.png" // Replace with your image path
              alt="Digital Engineering Background"
              fill
              className="object-cover"
              priority
            />
            {/* Alternative: Use regular img tag */}
            {/* <img 
              src="/cta-background.jpg" 
              alt="Digital Engineering Background"
              className="w-full h-full object-cover"
            /> */}
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/10"></div>
            
            {/* Additional Gradient for Depth */}
            {/* <div className="absolute inset-0 bg-linear-to-r from-[#0a2540]/80 via-transparent to-[#0a2540]/80"></div> */}
          </div>

          {/* Content */}
          <div className="relative py-16 lg:py-20 px-8 lg:px-16 text-center">
            {/* Heading */}
            <h2 className="text-[40px] lg:text-[48px] leading-[1.2] font-bold mb-4 max-w-4xl mx-auto">
              <span className="text-white">Ready to Engineer Your</span>
              <br />
              <span className="text-[#00d4aa]">Digital Future?</span>
            </h2>

            {/* Description */}
            <p className="text-[15px] lg:text-xl leading-relaxed text-gray-300 max-w-2xl mx-auto mb-10">
              Join the forward-thinking companies that have partnered with us to build scalable, high-performance software.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* <button className="group px-8 py-4 bg-white text-[#0a2540] text-[15px] font-semibold rounded-full hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] min-w-[180px]">
                Start Your Project
              </button> */}
                <Link href="/contact">
              <button className="group px-8 py-4 bg-[#00d4aa] text-white text-[15px] font-semibold rounded-full hover:bg-[#00c49a] transition-all duration-300 shadow-lg shadow-[#00d4aa]/25 hover:shadow-xl hover:shadow-[#00d4aa]/40 hover:scale-[1.02] min-w-[180px]">
                Schedule Consultation
              </button>
                </Link>
            </div>
          </div>

          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-[#00d4aa]/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
      </div>
    </section>
  );
}