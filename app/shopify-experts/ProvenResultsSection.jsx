import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function ProvenResultsSection() {
  const projects = [
    {
      url: "old-money.com",
      category: "HARDWARE",
    },
    {
      url: "bakdketo.com",
      category: "FOOD & BEV",
    },
    {
      url: "elouofficial.com",
      category: "MEDICAL",
    },
    {
      url: "ozblasters.com.au",
      category: "INDUSTRIAL",
    },
    {
      url: "luvinlife.com.au",
      category: "WELLNESS",
    },
  ];

  const industries = [
    {
      name: "Jewelry",
      domain: "anaejewelry.com",
      color: "text-[#51A2FF]",
    },
    {
      name: "Perfume",
      domain: "mist.paris",
      color: "text-[#51A2FF]",
    },
    {
      name: "Fashion",
      domain: "gritandgrasssupply.com",
      color: "text-[#51A2FF]",
    },
    {
      name: "Skincare",
      domain: "gfusionusa.com",
      color: "text-[#51A2FF]",
    },
    {
      name: "Sports Apparel",
      domain: "vegascustomshop.com",
      color: "text-[#51A2FF]",
    },
  ];

  return (
    <section id="result" className="relative bg-linear-to-br from-[#f8f9fb] to-[#f1f3f7] py-16 lg:py-20">
      <div className="max-w-[1660px] w-[95%] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="flex items-start justify-between mb-12">
          <div className="max-w-xl">
            <h2 className="text-[48px] lg:text-[52px] leading-[1.1] font-bold text-gray-900 mb-3">
              Proven Results.
            </h2>
            <p className="text-[15px] lg:text-lg leading-relaxed text-gray-600">
              Explore our portfolio of high-performing stores across diverse
              industries, from medical tech to luxury fashion.
            </p>
          </div>
          {/* <button className="hidden lg:flex border-[1px] border-gray-300 rounded-full px-4 py-2 items-center gap-2 text-[15px] font-semibold text-gray-900 hover:text-gray-700 transition-colors group">
            View All Projects
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              className="group-hover:translate-x-1 transition-transform"
            >
              <path
                d="M6.75 13.5L11.25 9L6.75 4.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button> */}
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Left Column - Project List */}
          <div className="space-y-7 lg:col-span-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl px-6 py-5 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <Link
                  href={`https://${project.url}`}
                  target="_blank"
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    {/* Globe Icon */}
                    <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                          stroke="#0F172B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12 2C9.43223 4.69615 8 8.27674 8 12C8 15.7233 9.43223 19.3038 12 22C14.5678 19.3038 16 15.7233 16 12C16 8.27674 14.5678 4.69615 12 2Z"
                          stroke="#0F172B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M2 12H22"
                          stroke="#0F172B"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </div>

                    {/* Project Info */}
                    <div>
                      <div className="text-[16px] font-semibold text-gray-900 mb-0.5">
                        {project.url}
                      </div>
                      <div className="text-[12px] font-medium text-gray-600 uppercase tracking-wide">
                        {project.category}
                      </div>
                    </div>
                  </div>

                  {/* External Link Icon */}
                  <div className="text-gray-400 group-hover:text-gray-600 transition-colors">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M12.5 2.5H17.5V7.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M8.33333 11.6667L17.5 2.5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              </div>
            ))}
          </div>

          {/* Right Column - Global Industry Reach Card */}
          <div className="relative lg:col-span-2">
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-gray-900 to-gray-800 shadow-2xl">
              {/* Background Image */}
              <div className="relative h-[550px]">
                {/* Replace with your actual image */}
                <Image
                  src="/result.png" // Replace with your image path
                  alt="Global Industry Reach"
                  fill
                  className="object-cover opacity-60"
                  priority
                />
                {/* Alternative: Use regular img tag */}
                {/* <img 
                  src="/global-reach.jpg" 
                  alt="Global Industry Reach"
                  className="w-full h-full object-cover opacity-60"
                /> */}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute inset-0 p-8 flex flex-col justify-between">
                {/* Top - Title */}
                <div>
                  <h3 className="text-[28px] font-bold text-white">
                    Global Industry Reach
                  </h3>
                </div>

                {/* Middle - Industry List */}
                <div className="space-y-6">
                  {industries.map((industry, index) => (
                    <div key={index} className="group cursor-pointer">
                      <div
                        className={`text-[20px] font-bold ${industry.color} mb-1 group-hover:opacity-80 transition-opacity`}
                      >
                        {industry.name}
                      </div>
                      <div className="text-[13px] text-gray-400 font-mono">
                        {industry.domain}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom - Total Value */}
                <div className="border-t border-white/10 pt-6">
                  <div className="text-[12px] text-gray-400 uppercase tracking-wide mb-2">
                    Total Project Value
                  </div>
                  <div className="text-[36px] font-bold text-white">
                    $12M+ Delivered
                  </div>
                </div>
              </div>

              {/* Decorative Glow Effect */}
              <div className="absolute -inset-1 bg-linear-to-br from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl -z-10 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Mobile View All Button */}
        <button className="lg:hidden flex items-center gap-2 text-[15px] font-semibold text-gray-900 hover:text-gray-700 transition-colors group mt-8 mx-auto">
          View All Projects
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="group-hover:translate-x-1 transition-transform"
          >
            <path
              d="M6.75 13.5L11.25 9L6.75 4.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-0 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
