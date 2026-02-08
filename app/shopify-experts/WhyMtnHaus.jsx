import Image from "next/image";

export default function WhyMtnHaus() {
  return (
    <section className="relative bg-linear-to-br from-[#f5f7fb] via-[#fafafc] to-[#f0f3f9] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-[1660px] w-[95%] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Image Card */}
          <div className="relative">
            {/* Main Image Card */}
            <div className="relative rounded-[32px] overflow-hidden ">
              {/* Replace with your actual image */}
              <div className="relative aspect-[4/3] ">
                <Image
                  src="/why_section.png" // Replace with your image path
                  alt="MTN HAUS Technology"
                  fill
                  className="object-cover"
                  priority
                />
                {/* Alternative: Use regular img tag */}
                {/* <img 
                  src="/mtn-haus-tech.jpg" 
                  alt="MTN HAUS Technology"
                  className="w-full h-full object-cover"
                /> */}
              </div>
            </div>

            {/* Testimonial Card Overlay */}
            <div className="absolute -bottom-6 -right-6 lg:bottom-4 lg:-right-8 bg-white rounded-2xl shadow-2xl p-6 max-w-[280px] border border-gray-100">
              <p className="text-[13px] leading-relaxed text-gray-700 italic mb-4">
                "MTN HAUS transformed our infrastructure, reducing costs by
                40%."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-linear-to-br from-gray-200 to-gray-300 flex items-center justify-center overflow-hidden">
                  {/* Profile image placeholder */}
                  <div className="w-full h-full bg-linear-to-br from-blue-400 to-purple-500"></div>
                </div>
                <div>
                  <div className="text-[13px] font-bold text-gray-900">CTO</div>
                  <div className="text-[11px] text-gray-500">
                    FinTech Global
                  </div>
                </div>
              </div>
            </div>

            {/* Background Glow Effect */}
            <div className="absolute -inset-4 bg-linear-to-br from-purple-200/30 via-blue-200/20 to-cyan-200/30 rounded-[40px] blur-3xl -z-10"></div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            {/* Heading */}
            <div>
              <h2 className="text-[48px] lg:text-[56px] leading-[1.1] font-semibold tracking-tight bg-linear-to-r from-[#00BC7D] via-[#00B8DB] to-[#155DFC] bg-clip-text text-transparent ">
                <span className=" text-black">Why </span>
                <span className=" ">MTN HAUS</span>
              </h2>
              <p className="text-[15px] lg:text-lg leading-[1.7] text-gray-600 mt-4 ">
                We are more than just developers. We are a dedicated engineering
                partner committed to your long-term success. Our team integrates
                directly with yours to solve complex math problems, not just
                ship features.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Experience */}
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M13.3337 16.6667V3.33333C13.3337 2.8913 13.1581 2.46738 12.8455 2.15482C12.5329 1.84226 12.109 1.66666 11.667 1.66666H8.33366C7.89163 1.66666 7.46771 1.84226 7.15515 2.15482C6.84259 2.46738 6.66699 2.8913 6.66699 3.33333V16.6667"
                        stroke="#90A1B9"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.667 5H3.33366C2.41318 5 1.66699 5.74619 1.66699 6.66667V15C1.66699 15.9205 2.41318 16.6667 3.33366 16.6667H16.667C17.5875 16.6667 18.3337 15.9205 18.3337 15V6.66667C18.3337 5.74619 17.5875 5 16.667 5Z"
                        stroke="#90A1B9"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                    Experience
                  </span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">6Yr+</div>
              </div>

              {/* Shopify Projects */}
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13_207)">
                        <path
                          d="M12.8973 10.7417L14.1598 17.8467C14.1739 17.9303 14.1622 18.0163 14.1261 18.0931C14.0901 18.1699 14.0315 18.2339 13.9581 18.2765C13.8847 18.3191 13.8 18.3382 13.7155 18.3314C13.6309 18.3246 13.5504 18.2921 13.4848 18.2383L10.5015 15.9992C10.3574 15.8916 10.1825 15.8334 10.0027 15.8334C9.82294 15.8334 9.64798 15.8916 9.50396 15.9992L6.51563 18.2375C6.45006 18.2912 6.36968 18.3236 6.28521 18.3305C6.20073 18.3373 6.11619 18.3182 6.04285 18.2757C5.9695 18.2333 5.91086 18.1694 5.87473 18.0928C5.83859 18.0161 5.8267 17.9303 5.84063 17.8467L7.10229 10.7417"
                          stroke="#90A1B9"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10 11.6667C12.7614 11.6667 15 9.42809 15 6.66666C15 3.90524 12.7614 1.66666 10 1.66666C7.23858 1.66666 5 3.90524 5 6.66666C5 9.42809 7.23858 11.6667 10 11.6667Z"
                          stroke="#90A1B9"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_207">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                    Shopify Project Delivered
                  </span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">4000+</div>
              </div>

              {/* Country Network */}
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M13.3337 17.5V15.8333C13.3337 14.9493 12.9825 14.1014 12.3573 13.4763C11.7322 12.8512 10.8844 12.5 10.0003 12.5H5.00033C4.11627 12.5 3.26842 12.8512 2.6433 13.4763C2.01818 14.1014 1.66699 14.9493 1.66699 15.8333V17.5"
                        stroke="#90A1B9"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13.333 2.60667C14.0478 2.79197 14.6808 3.20939 15.1327 3.79339C15.5846 4.37738 15.8298 5.09491 15.8298 5.83333C15.8298 6.57176 15.5846 7.28928 15.1327 7.87328C14.6808 8.45728 14.0478 8.87469 13.333 9.06"
                        stroke="#90A1B9"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.333 17.5V15.8333C18.3325 15.0948 18.0866 14.3773 17.6341 13.7936C17.1817 13.2099 16.5481 12.793 15.833 12.6083"
                        stroke="#90A1B9"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.50033 9.16667C9.34127 9.16667 10.8337 7.67428 10.8337 5.83333C10.8337 3.99238 9.34127 2.5 7.50033 2.5C5.65938 2.5 4.16699 3.99238 4.16699 5.83333C4.16699 7.67428 5.65938 9.16667 7.50033 9.16667Z"
                        stroke="#90A1B9"
                        stroke-width="1.66667"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                    Country Network
                  </span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">80+</div>
              </div>

              {/* Developers */}
              <div className="bg-white rounded-2xl p-3 border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-2 mb-0">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g clip-path="url(#clip0_13_227)">
                        <path
                          d="M10 5V10L13.3333 11.6667"
                          stroke="#90A1B9"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.0003 18.3333C14.6027 18.3333 18.3337 14.6024 18.3337 10C18.3337 5.39763 14.6027 1.66667 10.0003 1.66667C5.39795 1.66667 1.66699 5.39763 1.66699 10C1.66699 14.6024 5.39795 18.3333 10.0003 18.3333Z"
                          stroke="#90A1B9"
                          stroke-width="1.66667"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_13_227">
                          <rect width="20" height="20" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <span className="text-[11px] font-semibold text-gray-400 uppercase tracking-wide">
                    Shopify expert
                  </span>
                </div>
                <div className="text-xl lg:text-2xl font-bold text-gray-900">300+</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 lg:mt-24">
          {/* B2B Friendly */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center mb-5">
             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M29.3337 22.6667C29.3337 23.3739 29.0527 24.0522 28.5526 24.5523C28.0525 25.0524 27.3742 25.3333 26.667 25.3333H9.10433C8.39714 25.3335 7.71897 25.6145 7.21899 26.1147L4.28299 29.0507C4.1506 29.183 3.98193 29.2732 3.79831 29.3097C3.61469 29.3462 3.42437 29.3275 3.2514 29.2558C3.07844 29.1842 2.9306 29.0629 2.82657 28.9072C2.72255 28.7516 2.66702 28.5685 2.66699 28.3813V6.66667C2.66699 5.95942 2.94794 5.28115 3.44804 4.78105C3.94814 4.28095 4.62641 4 5.33366 4H26.667C27.3742 4 28.0525 4.28095 28.5526 4.78105C29.0527 5.28115 29.3337 5.95942 29.3337 6.66667V22.6667Z" stroke="#2B7FFF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <h3 className="text-[16px] lg:text-xl font-bold text-gray-900 mb-2">
              B2B Friendly
            </h3>
            <p className="text-[14px] lg:text-base leading-relaxed text-gray-600">
              Seamless communication protocols designed for enterprise teams.
            </p>
          </div>

          {/* Design & QA */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-purple-50 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M17.1063 2.90668C16.7589 2.74821 16.3815 2.6662 15.9996 2.6662C15.6178 2.6662 15.2404 2.74821 14.893 2.90668L3.46629 8.10667C3.22969 8.211 3.02853 8.38187 2.88731 8.59848C2.74609 8.81509 2.6709 9.06809 2.6709 9.32667C2.6709 9.58526 2.74609 9.83826 2.88731 10.0549C3.02853 10.2715 3.22969 10.4423 3.46629 10.5467L14.9063 15.76C15.2537 15.9185 15.6311 16.0005 16.013 16.0005C16.3948 16.0005 16.7722 15.9185 17.1196 15.76L28.5596 10.56C28.7962 10.4557 28.9974 10.2848 29.1386 10.0682C29.2798 9.85159 29.355 9.59859 29.355 9.34001C29.355 9.08143 29.2798 8.82843 29.1386 8.61182C28.9974 8.39521 28.7962 8.22433 28.5596 8.12001L17.1063 2.90668Z" stroke="#AD46FF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.667 16C2.66637 16.255 2.73888 16.5049 2.87595 16.7199C3.01302 16.935 3.20889 17.1062 3.44033 17.2133L14.907 22.4267C15.2526 22.5832 15.6276 22.6641 16.007 22.6641C16.3864 22.6641 16.7614 22.5832 17.107 22.4267L28.547 17.2267C28.783 17.1206 28.9831 16.9481 29.1227 16.7303C29.2624 16.5125 29.3357 16.2587 29.3337 16" stroke="#AD46FF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M2.667 22.6667C2.66637 22.9217 2.73888 23.1715 2.87595 23.3866C3.01302 23.6016 3.20889 23.7729 3.44033 23.88L14.907 29.0933C15.2526 29.2498 15.6276 29.3308 16.007 29.3308C16.3864 29.3308 16.7614 29.2498 17.107 29.0933L28.547 23.8933C28.783 23.7872 28.9831 23.6148 29.1227 23.397C29.2624 23.1792 29.3357 22.9254 29.3337 22.6667" stroke="#AD46FF" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <h3 className="text-[16px] lg:text-xl font-bold text-gray-900 mb-2">
              Design & QA
            </h3>
            <p className="text-[14px] lg:text-base leading-relaxed text-gray-600">
              Dedicated specialists ensuring pixel-perfect execution.
            </p>
          </div>

          {/* Long Term Support */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="w-14 h-14 rounded-xl bg-yellow-50 flex items-center justify-center mb-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
  <path d="M5.333 18.6667C5.08068 18.6675 4.83331 18.5968 4.6196 18.4627C4.4059 18.3285 4.23464 18.1365 4.12573 17.9089C4.01682 17.6813 3.97472 17.4275 4.00433 17.1769C4.03394 16.9263 4.13404 16.6893 4.293 16.4933L17.493 2.89335C17.592 2.77906 17.7269 2.70182 17.8756 2.67432C18.0243 2.64683 18.178 2.6707 18.3113 2.74202C18.4446 2.81334 18.5498 2.92788 18.6094 3.06682C18.6691 3.20577 18.6798 3.36088 18.6397 3.50668L16.0797 11.5333C16.0042 11.7354 15.9788 11.9527 16.0058 12.1667C16.0327 12.3807 16.1112 12.5849 16.2345 12.7619C16.3577 12.9389 16.522 13.0834 16.7134 13.1829C16.9047 13.2824 17.1173 13.334 17.333 13.3333H26.6663C26.9186 13.3325 27.166 13.4032 27.3797 13.5374C27.5934 13.6715 27.7647 13.8635 27.8736 14.0911C27.9825 14.3187 28.0246 14.5726 27.995 14.8231C27.9654 15.0737 27.8653 15.3107 27.7063 15.5067L14.5063 29.1067C14.4073 29.221 14.2724 29.2982 14.1237 29.3257C13.975 29.3532 13.8214 29.3293 13.688 29.258C13.5547 29.1867 13.4496 29.0722 13.3899 28.9332C13.3302 28.7943 13.3196 28.6392 13.3597 28.4933L15.9197 20.4667C15.9952 20.2646 16.0205 20.0473 15.9935 19.8333C15.9666 19.6194 15.8881 19.4151 15.7649 19.2381C15.6416 19.0611 15.4773 18.9167 15.286 18.8171C15.0946 18.7176 14.882 18.666 14.6663 18.6667H5.333Z" stroke="#FE9A00" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
            </div>
            <h3 className="text-[16px] lg:text-xl font-bold text-gray-900 mb-2">
              Long Term Support
            </h3>
            <p className="text-[14px] lg:text-base leading-relaxed text-gray-600">
              We don't disappear. Ongoing maintenance and growth partnership.
            </p>
          </div>
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-purple-200/20 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
