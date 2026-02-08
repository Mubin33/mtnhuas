import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroShopify() {
  return (
    <section className="relative min-h-screen bg-linear-to-br from-[#F3E8FF99] via-[#f0f5f9] to-[#e5eff5] overflow-hidden">
      <div className="max-w-[1660px] w-[95%] mx-auto px-3 lg:px-12 py-28 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="hidden lg:inline-flex items-center gap-2 px-4 py-2 bg-[#D0FAE5] backdrop-blur-sm rounded-full ">
              <div className="w-4 h-4 flex items-center justify-center">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7 1L8.545 5.13L13 5.635L9.635 8.455L10.545 13L7 10.635L3.455 13L4.365 8.455L1 5.635L5.455 5.13L7 1Z"
                    fill="#00c9a7"
                    stroke="#00c9a7"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[13px] font-medium text-[#2d3748]">
                Top Rated Shopify Experts
              </span>
            </div>

            {/* Heading */}
            <div className="space-y-2">
              <h1 className="text-[56px] lg:text-[68px] leading-[1.1] font-bold tracking-[0.03em] ">
                <span className="text-[#1a202c]">Create Stunning</span>
                <br />
                <span className="bg-linear-to-r from-[#00BC7D] via-[#00B8DB] to-[#155DFC] bg-clip-text text-transparent font-bold">
                  Commerce
                </span>
                <br />
                <span className="bg-linear-to-r from-[#00BC7D] via-[#00B8DB] to-[#155DFC] bg-clip-text text-transparent font-bold">
                  Experiences
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-[16px] lg:text-lg leading-[1.6] text-[#4a5568] max-w-xl">
              We blend engineering precision with world-class design to build
              Shopify stores that convert, scale, and outperform the
              competition.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              {/* <Link href="/contact">
              <button className="group inline-flex items-center gap-2 px-7 py-4 bg-[#1a202c] text-white text-[15px] font-semibold rounded-full hover:bg-[#2d3748] transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02]">
                Start Your Project
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="group-hover:translate-x-1 transition-transform duration-300"
                >
                  <path
                    d="M6 12L10 8L6 4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              </Link> */}
              <Link href="#result">
              <button className="inline-flex items-center gap-2 px-6 py-4 text-[#2d3748] bg-white rounded-full text-[15px] font-semibold hover:text-[#00c9a7] transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clip-path="url(#clip0_13_139)">
                    <path
                      d="M10.0003 18.3334C14.6027 18.3334 18.3337 14.6024 18.3337 10C18.3337 5.39765 14.6027 1.66669 10.0003 1.66669C5.39795 1.66669 1.66699 5.39765 1.66699 10C1.66699 14.6024 5.39795 18.3334 10.0003 18.3334Z"
                      stroke="#2B7FFF"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.0003 1.66669C7.86052 3.91348 6.66699 6.8973 6.66699 10C6.66699 13.1027 7.86052 16.0866 10.0003 18.3334C12.1401 16.0866 13.3337 13.1027 13.3337 10C13.3337 6.8973 12.1401 3.91348 10.0003 1.66669Z"
                      stroke="#2B7FFF"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.66699 10H18.3337"
                      stroke="#2B7FFF"
                      stroke-width="1.66667"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_13_139">
                      <rect width="20" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                Explore Portfolio
              </button>
              </Link>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-12 pt-6">
              <div>
                <div className="text-[36px] font-bold text-[#1a202c] leading-none">
                  85k+
                </div>
                <div className="text-[13px] text-[#718096] mt-1">
                  Project Delivery
                </div>
              </div>
              <div>
                <div className="text-[36px] font-bold text-[#1a202c] leading-none">
                  5000+
                </div>
                <div className="text-[13px] text-[#718096] mt-1">
                  Developers
                </div>
              </div>
            </div>
          </div>

          {/* Right Content - Laptop Mockup */}
          <div className="relative lg:ml-auto">
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-white rounded-[32px] p-2 lg:p-3 transform rotate-[1deg] hover:rotate-0 transition-transform duration-500">
                {/* HIPAA Badge */}
                {/* <div className="absolute top-8 -right-6 lg:-right-14 bg-white rounded-2xl shadow-lg px-6 py-5 border border-gray-100 z-20">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-[#e8f9f5] rounded-full flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="26"
                        height="26"
                        viewBox="0 0 26 26"
                        fill="none"
                      >
                        <path
                          d="M21.4062 13.7141C21.4062 18.9887 17.714 21.6261 13.3255 23.1557C13.0957 23.2336 12.846 23.2299 12.6187 23.1452C8.2196 21.6261 4.52734 18.9887 4.52734 13.7141V6.32957C4.52734 6.04979 4.63849 5.78146 4.83633 5.58362C5.03416 5.38578 5.30249 5.27464 5.58227 5.27464C7.69213 5.27464 10.3295 4.00872 12.165 2.40523C12.3885 2.21429 12.6728 2.10938 12.9668 2.10938C13.2607 2.10938 13.545 2.21429 13.7685 2.40523C15.6147 4.01927 18.2414 5.27464 20.3513 5.27464C20.6311 5.27464 20.8994 5.38578 21.0972 5.58362C21.2951 5.78146 21.4062 6.04979 21.4062 6.32957V13.7141Z"
                          stroke="#009966"
                          stroke-width="2.10986"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.80176 12.6592L11.9116 14.769L16.1313 10.5493"
                          stroke="#009966"
                          stroke-width="2.10986"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>
                    <div className="text-left">
                      <div className="text-[11px] font-bold text-[#1a202c] leading-none">
                        HIPAA
                      </div>
                      <div className="text-[11px] font-bold text-[#1a202c] leading-none">
                        Compliant
                      </div>
                      <div className="text-[9px] text-[#718096] mt-0.5">
                        Secure Platform
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* Laptop Mockup */}
                <div className="relative">
                  {/* Screen */}
                  <div className="relative bg-linear-to-br from-gray-100 to-gray-200 rounded-t-xl overflow-hidden ">
                    {/* Main Content with Image - Replace with your actual image */}
                    <div className="relative bg-white">
                      {/* Use Next.js Image component for optimized loading */}
                      <Image
                        src="/hero_img.png" // Replace with your image path
                        alt="Shopify Dashboard"
                        width={800}
                        height={500}
                        className="w-full h-auto object-cover"
                        priority
                      />

                      {/* Alternative: Use regular img tag if not using Next.js Image optimization */}
                      {/* <img 
                        src="/your-laptop-screen-image.jpg" 
                        alt="Shopify Dashboard"
                        className="w-full h-auto object-cover"
                      /> */}
                    </div>
                  </div>
                  {/* Conversion Rate Badge */}
                  <div className="absolute bottom-6 -left-8 lg:-left-16 bg-white rounded-xl shadow-lg px-4 py-3 border border-gray-100">
                    <div className="text-[10px] text-[#718096] font-medium uppercase tracking-wide mb-1">
                      Conversion Rate
                    </div>
                    <div className="flex items-baseline gap-2">
                      <span className="text-[24px] font-bold text-[#1a202c]">
                        4.8%
                      </span>
                      <span className="text-[12px] font-semibold text-[#00c9a7]">
                        ↑ 12%
                      </span>
                    </div>
                  </div>

                  {/* Keyboard Base */}
                </div>

                {/* Blurred Background Effect */}
                <div className="absolute inset-0 -z-10 bg-linear-to-br from-white/40 to-gray-100/40 rounded-[32px] blur-2xl transform scale-105"></div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-linear-to-br from-[#00c9a7]/10 to-blue-400/10 rounded-full blur-3xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-64 h-64 bg-[#00c9a7]/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"></div>
    </section>
  );
}
