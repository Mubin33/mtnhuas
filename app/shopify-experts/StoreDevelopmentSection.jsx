import React from 'react';
import Image from 'next/image';

export default function StoreDevelopmentSection() {
  return (
    <section className="relative bg-white py-16 lg:py-24">
      <div className="max-w-[1660px] w-[95%] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          {/* Shopify Experts Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-full mb-8 shadow-sm">
            <img src="/shopify_logo.png" alt="shopify_logo"  />
            <span className="text-[13px] font-semibold text-gray-700 uppercase tracking-wide">Shopify Experts</span>
          </div>

          {/* Main Heading */}
          <h2 className="text-[48px] lg:text-[56px] leading-[1.1] font-bold text-gray-900 mb-4">
            Complete Store Development
          </h2>
          <p className="text-[15px] leading-relaxed text-gray-600 max-w-2xl mx-auto">
            From initial setup to high-growth optimization, we handle every aspect of your ecommerce journey.
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid xl:grid-cols-2  ">
          {/* Left Column - Core Foundation */}
          <div className='xl:border-r border-gray-200 xl:pr-40'>
            {/* Section Title */}
            <div className="flex items-center gap-5 mb-6">
              <div className="w-1 h-6 bg-blue-600 rounded-full  rotate-90"></div>
              <h3 className="text-[20px] font-bold text-gray-900">Core Foundation</h3>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Store Setup */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-gray-700">
                    <rect x="3" y="3" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                    <path d="M3 8h14M8 3v14" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">Store Setup</h4>
                <p className="text-[13px] text-gray-600">Full configuration</p>
              </div>

              {/* Custom Theme */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M10.0003 18.3333C7.79019 18.3333 5.67057 17.4553 4.10777 15.8925C2.54497 14.3297 1.66699 12.2101 1.66699 9.99996C1.66699 7.78982 2.54497 5.67021 4.10777 4.1074C5.67057 2.5446 7.79019 1.66663 10.0003 1.66663C12.2105 1.66663 14.3301 2.4568 15.8929 3.86332C17.4557 5.26985 18.3337 7.1775 18.3337 9.16663C18.3337 10.2717 17.8947 11.3315 17.1133 12.1129C16.3319 12.8943 15.2721 13.3333 14.167 13.3333H12.292C12.0212 13.3333 11.7557 13.4087 11.5253 13.5511C11.2949 13.6935 11.1087 13.8972 10.9876 14.1394C10.8665 14.3817 10.8152 14.6529 10.8396 14.9226C10.8639 15.1923 10.9628 15.45 11.1253 15.6666L11.3753 16C11.5378 16.2166 11.6368 16.4743 11.6611 16.744C11.6854 17.0137 11.6342 17.2849 11.513 17.5271C11.3919 17.7694 11.2057 17.9731 10.9753 18.1155C10.745 18.2579 10.4795 18.3333 10.2087 18.3333H10.0003Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M11.2497 5.83333C11.4798 5.83333 11.6663 5.64679 11.6663 5.41667C11.6663 5.18655 11.4798 5 11.2497 5C11.0196 5 10.833 5.18655 10.833 5.41667C10.833 5.64679 11.0196 5.83333 11.2497 5.83333Z" fill="#314158" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.5837 9.16671C14.8138 9.16671 15.0003 8.98016 15.0003 8.75004C15.0003 8.51992 14.8138 8.33337 14.5837 8.33337C14.3535 8.33337 14.167 8.51992 14.167 8.75004C14.167 8.98016 14.3535 9.16671 14.5837 9.16671Z" fill="#314158" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.41667 10.8333C5.64679 10.8333 5.83333 10.6468 5.83333 10.4167C5.83333 10.1865 5.64679 10 5.41667 10C5.18655 10 5 10.1865 5 10.4167C5 10.6468 5.18655 10.8333 5.41667 10.8333Z" fill="#314158" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M7.08366 6.66671C7.31378 6.66671 7.50033 6.48016 7.50033 6.25004C7.50033 6.01992 7.31378 5.83337 7.08366 5.83337C6.85354 5.83337 6.66699 6.01992 6.66699 6.25004C6.66699 6.48016 6.85354 6.66671 7.08366 6.66671Z" fill="#314158" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">Custom Theme</h4>
                <p className="text-[13px] text-gray-600">Unique brand identity</p>
              </div>

              {/* Product Org */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2.47533 10.7667C2.22929 10.9145 2.0256 11.1233 1.88398 11.373C1.74236 11.6226 1.66762 11.9046 1.66699 12.1917V14.8917C1.66762 15.1787 1.74236 15.4607 1.88398 15.7103C2.0256 15.96 2.22929 16.1688 2.47533 16.3167L4.97533 17.8167C5.23454 17.9724 5.53125 18.0547 5.83366 18.0547C6.13606 18.0547 6.43277 17.9724 6.69199 17.8167L10.0003 15.8333V11.25L5.83366 8.75L2.47533 10.7667Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83379 13.75L1.88379 11.375" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 13.75L9.99967 11.25" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 13.75V18.0583" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 11.25V15.8333L13.3083 17.8167C13.5676 17.9724 13.8643 18.0547 14.1667 18.0547C14.4691 18.0547 14.7658 17.9724 15.025 17.8167L17.525 16.3167C17.771 16.1688 17.9747 15.96 18.1163 15.7103C18.258 15.4607 18.3327 15.1787 18.3333 14.8917V12.1917C18.3327 11.9046 18.258 11.6226 18.1163 11.373C17.9747 11.1233 17.771 10.9145 17.525 10.7667L14.1667 8.75L10 11.25Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.1667 13.75L10 11.25" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.167 13.75L18.117 11.375" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M14.167 13.75V18.0583" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M6.64134 3.68333C6.39531 3.83115 6.19161 4.04 6.05 4.28965C5.90838 4.53931 5.83364 4.8213 5.83301 5.10833V8.75L9.99967 11.25L14.1663 8.75V5.10833C14.1657 4.8213 14.091 4.53931 13.9494 4.28965C13.8077 4.04 13.604 3.83115 13.358 3.68333L10.858 2.18333C10.5988 2.02759 10.3021 1.94531 9.99967 1.94531C9.69727 1.94531 9.40056 2.02759 9.14134 2.18333L6.64134 3.68333Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.9998 6.66663L6.0498 4.29163" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 6.66663L13.95 4.29163" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 11.25V6.66663" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">Product Org</h4>
                <p className="text-[13px] text-gray-600">Inventory strategy</p>
              </div>

              {/* Mobile First */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M14.167 1.66663H5.83366C4.91318 1.66663 4.16699 2.41282 4.16699 3.33329V16.6666C4.16699 17.5871 4.91318 18.3333 5.83366 18.3333H14.167C15.0875 18.3333 15.8337 17.5871 15.8337 16.6666V3.33329C15.8337 2.41282 15.0875 1.66663 14.167 1.66663Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 15H10.0083" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">Mobile First</h4>
                <p className="text-[13px] text-gray-600">Responsive design</p>
              </div>
            </div>
          </div>

          {/* Right Column - Growth Engines */}
          <div className='xl:pl-40 mt-8 xl:mt-0'>
            {/* Large Feature Card */}
            <div className="relative rounded-2xl overflow-hidden mb-6 group cursor-pointer">
              {/* Background Image */}
              <div className="relative h-[150px] bg-linear-to-r from-gray-900 to-gray-700">
                {/* Replace with your actual image */}
                <Image
                  src="/development.png" // Replace with your image path
                  alt="Growth Engines"
                  fill
                  className="object-cover opacity-70"
                />
                {/* Alternative: Use regular img tag */}
                {/* <img 
                  src="/growth-engines.jpg" 
                  alt="Growth Engines"
                  className="w-full h-full object-cover opacity-70"
                /> */}
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30"></div>
              </div>

              {/* Content Overlay */}
              <div className="absolute bottom-6 left-6 flex items-center gap-8">
                <div className="w-1 h-8 bg-[#00d45f] rounded-full rotate-90"></div>
                <h3 className="text-[24px] font-bold text-white">Growth Engines</h3>
              </div>
 
            </div>

            {/* Bottom Cards Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Engagement */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M2.4934 13.6183C2.61593 13.9274 2.64321 14.2661 2.57173 14.5908L1.68423 17.3324C1.65564 17.4715 1.66303 17.6155 1.70571 17.7509C1.7484 17.8863 1.82495 18.0085 1.92812 18.106C2.03129 18.2035 2.15766 18.273 2.29523 18.308C2.43281 18.343 2.57704 18.3422 2.71423 18.3058L5.5584 17.4741C5.86483 17.4133 6.18218 17.4399 6.47423 17.5508C8.25372 18.3818 10.2695 18.5576 12.166 18.0472C14.0625 17.5368 15.7178 16.373 16.8398 14.7611C17.9618 13.1492 18.4785 11.1928 18.2986 9.23707C18.1188 7.28136 17.254 5.45201 15.8568 4.07178C14.4596 2.69155 12.6198 1.84915 10.6621 1.6932C8.70429 1.53724 6.75435 2.07777 5.15627 3.2194C3.55819 4.36103 2.41468 6.0304 1.92748 7.93298C1.44028 9.83556 1.64071 11.8491 2.4934 13.6183Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">Engagement</h4>
                <p className="text-[13px] text-gray-600">Chat & Popups</p>
              </div>

              {/* Automation */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M18.3337 5.83337L10.8412 10.6059C10.5869 10.7536 10.2981 10.8313 10.0041 10.8313C9.71004 10.8313 9.42125 10.7536 9.16699 10.6059L1.66699 5.83337" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M16.667 3.33337H3.33366C2.41318 3.33337 1.66699 4.07957 1.66699 5.00004V15C1.66699 15.9205 2.41318 16.6667 3.33366 16.6667H16.667C17.5875 16.6667 18.3337 15.9205 18.3337 15V5.00004C18.3337 4.07957 17.5875 3.33337 16.667 3.33337Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">Automation</h4>
                <p className="text-[13px] text-gray-600">Email flows</p>
              </div>

              {/* Payments */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M16.667 4.16663H3.33366C2.41318 4.16663 1.66699 4.91282 1.66699 5.83329V14.1666C1.66699 15.0871 2.41318 15.8333 3.33366 15.8333H16.667C17.5875 15.8333 18.3337 15.0871 18.3337 14.1666V5.83329C18.3337 4.91282 17.5875 4.16663 16.667 4.16663Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M1.66699 8.33337H18.3337" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">Payments</h4>
                <p className="text-[13px] text-gray-600">Secure gateways</p>
              </div>

              {/* SEO Ready */}
              <div className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-gray-300 hover:shadow-lg transition-all duration-300 relative">
                <div className="absolute top-6 right-6 text-gray-300 group-hover:text-gray-400 transition-colors">
                  {/* <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M5.83301 5.83337H14.1663V14.1667" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M5.83301 14.1667L14.1663 5.83337" stroke="#CAD5E2" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg> */}
                </div>
                <div className="w-10 h-10 rounded-lg bg-gray-50 flex items-center justify-center mb-4">
                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
  <path d="M17.5005 17.5L13.8838 13.8833" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z" stroke="#314158" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                </div>
                <h4 className="text-[16px] font-bold text-gray-900 mb-1">SEO Ready</h4>
                <p className="text-[13px] text-gray-600">Organic traffic</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}