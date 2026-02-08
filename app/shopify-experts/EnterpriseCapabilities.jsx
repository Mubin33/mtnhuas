import React from "react";
import Image from "next/image";

export default function EnterpriseCapabilities() {
  const capabilities = [
    {
      title: "Web App Development",
      image: "/capabilities/1.png", // Replace with your image paths
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="31"
          viewBox="0 0 28 31"
          fill="none"
        >
          <path
            d="M23.333 5.16626H4.66634C3.37768 5.16626 2.33301 6.32286 2.33301 7.74959V23.2496C2.33301 24.6763 3.37768 25.8329 4.66634 25.8329H23.333C24.6217 25.8329 25.6663 24.6763 25.6663 23.2496V7.74959C25.6663 6.32286 24.6217 5.16626 23.333 5.16626Z"
            stroke="#51A2FF"
            stroke-width="3.23497"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.667 5.16626V10.3329"
            stroke="#51A2FF"
            stroke-width="3.23497"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2.33301 10.3333H25.6663"
            stroke="#51A2FF"
            stroke-width="3.23497"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7 5.16626V10.3329"
            stroke="#51A2FF"
            stroke-width="3.23497"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "UI/UX Design & Brand Experience",
      image: "/capabilities/2.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="26"
          viewBox="0 0 24 26"
          fill="none"
        >
          <path
            d="M12 23.8334C9.34784 23.8334 6.8043 22.6921 4.92893 20.6604C3.05357 18.6288 2 15.8733 2 13.0001C2 10.1269 3.05357 7.3714 4.92893 5.33976C6.8043 3.30811 9.34784 2.16675 12 2.16675C14.6522 2.16675 17.1957 3.19398 19.0711 5.02246C20.9464 6.85094 22 9.33089 22 11.9167C22 13.3533 21.4732 14.7311 20.5355 15.7469C19.5979 16.7627 18.3261 17.3334 17 17.3334H14.75C14.425 17.3334 14.1064 17.4315 13.83 17.6166C13.5535 17.8017 13.3301 18.0665 13.1848 18.3814C13.0394 18.6963 12.9779 19.0489 13.0071 19.3995C13.0363 19.7502 13.155 20.0851 13.35 20.3667L13.65 20.8001C13.845 21.0817 13.9637 21.4167 13.9929 21.7673C14.0221 22.118 13.9606 22.4705 13.8152 22.7854C13.6699 23.1003 13.4465 23.3652 13.17 23.5503C12.8936 23.7354 12.575 23.8334 12.25 23.8334H12Z"
            stroke="#C27AFF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M13.5 7.58309C13.7761 7.58309 14 7.34058 14 7.04142C14 6.74227 13.7761 6.49976 13.5 6.49976C13.2239 6.49976 13 6.74227 13 7.04142C13 7.34058 13.2239 7.58309 13.5 7.58309Z"
            fill="#C27AFF"
            stroke="#C27AFF"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M17.5 11.9163C17.7761 11.9163 18 11.6738 18 11.3747C18 11.0755 17.7761 10.833 17.5 10.833C17.2239 10.833 17 11.0755 17 11.3747C17 11.6738 17.2239 11.9163 17.5 11.9163Z"
            fill="#C27AFF"
            stroke="#C27AFF"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M6.5 14.0831C6.77614 14.0831 7 13.8406 7 13.5414C7 13.2423 6.77614 12.9998 6.5 12.9998C6.22386 12.9998 6 13.2423 6 13.5414C6 13.8406 6.22386 14.0831 6.5 14.0831Z"
            fill="#C27AFF"
            stroke="#C27AFF"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8.5 8.66634C8.77614 8.66634 9 8.42383 9 8.12467C9 7.82552 8.77614 7.58301 8.5 7.58301C8.22386 7.58301 8 7.82552 8 8.12467C8 8.42383 8.22386 8.66634 8.5 8.66634Z"
            fill="#C27AFF"
            stroke="#C27AFF"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "AI Automation & Chatbots",
      image: "/capabilities/3.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 7.99976V3.99976H8"
            stroke="#05DF72"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 8H6C4.89543 8 4 8.89543 4 10V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V10C20 8.89543 19.1046 8 18 8Z"
            stroke="#05DF72"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M2 14H4.00039"
            stroke="#05DF72"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20 14H22.0004"
            stroke="#05DF72"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 12.9998V15.0001"
            stroke="#05DF72"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9 12.9998V15.0001"
            stroke="#05DF72"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Digital Transformation Solutions",
      image: "/capabilities/4.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <g clip-path="url(#clip0_14_187)">
            <path
              d="M15 14C15.2 13 15.7 12.3 16.5 11.5C17.5 10.6 18 9.3 18 8C18 6.4087 17.3679 4.88258 16.2426 3.75736C15.1174 2.63214 13.5913 2 12 2C10.4087 2 8.88258 2.63214 7.75736 3.75736C6.63214 4.88258 6 6.4087 6 8C6 9 6.2 10.2 7.5 11.5C8.2 12.2 8.8 13 9 14"
              stroke="#FDC700"
              stroke-width="3.59441"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9 17.9998H15"
              stroke="#FDC700"
              stroke-width="3.59441"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10 21.9998H14"
              stroke="#FDC700"
              stroke-width="3.59441"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_14_187">
              <rect width="24" height="24" fill="white" />
            </clipPath>
          </defs>
        </svg>
      ),
    },
    {
      title: "Cloud Strategy & Readiness Services",
      image: "/capabilities/5.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M17.55 18.9089H9.04996C7.75183 18.9086 6.47936 18.5473 5.37474 17.8654C4.27013 17.1835 3.37689 16.2079 2.79484 15.0476C2.21279 13.8872 1.96486 12.5879 2.07876 11.2948C2.19266 10.0016 2.66389 8.76564 3.43981 7.72492C4.21573 6.68419 5.26576 5.87973 6.47257 5.40142C7.67937 4.92312 8.99541 4.78981 10.2736 5.0164C11.5518 5.24299 12.7418 5.82055 13.7107 6.68454C14.6795 7.54853 15.3891 8.66492 15.76 9.90894H17.55C18.7434 9.90894 19.888 10.383 20.7319 11.227C21.5759 12.0709 22.05 13.2155 22.05 14.4089C22.05 15.6024 21.5759 16.747 20.7319 17.5909C19.888 18.4348 18.7434 18.9089 17.55 18.9089Z"
            stroke="#00D3F2"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Enterprise Software & ERP Solutions",
      image: "/capabilities/6.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12.1016 7.90869C17.0721 7.90869 21.1016 6.56555 21.1016 4.90869C21.1016 3.25184 17.0721 1.90869 12.1016 1.90869C7.131 1.90869 3.10156 3.25184 3.10156 4.90869C3.10156 6.56555 7.131 7.90869 12.1016 7.90869Z"
            stroke="#7C86FF"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.10156 4.90894V18.9089C3.10156 19.7046 4.04977 20.4676 5.7376 21.0303C7.42543 21.5929 9.71461 21.9089 12.1016 21.9089C14.4885 21.9089 16.7777 21.5929 18.4655 21.0303C20.1534 20.4676 21.1016 19.7046 21.1016 18.9089V4.90894"
            stroke="#7C86FF"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.10156 11.9089C3.10156 12.7046 4.04977 13.4676 5.7376 14.0303C7.42543 14.5929 9.71461 14.9089 12.1016 14.9089C14.4885 14.9089 16.7777 14.5929 18.4655 14.0303C20.1534 13.4676 21.1016 12.7046 21.1016 11.9089"
            stroke="#7C86FF"
            stroke-width="3.59441"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "Cloud Modernization & Migration",
      image: "/capabilities/7.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.516 3.00947 16.931 3.99122 18.74 5.74L21 8"
            stroke="#00D5BE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 3V8H16"
            stroke="#00D5BE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M21 12C21 14.3869 20.0518 16.6761 18.364 18.364C16.6761 20.0518 14.3869 21 12 21C9.48395 20.9905 7.06897 20.0088 5.26 18.26L3 16"
            stroke="#00D5BE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M8 16H3V21"
            stroke="#00D5BE"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      title: "24/7 Support",
      image: "/capabilities/8.png",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M3 14H6C6.53043 14 7.03914 14.2107 7.41421 14.5858C7.78929 14.9609 8 15.4696 8 16V19C8 19.5304 7.78929 20.0391 7.41421 20.4142C7.03914 20.7893 6.53043 21 6 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V12C3 9.61305 3.94821 7.32387 5.63604 5.63604C7.32387 3.94821 9.61305 3 12 3C14.3869 3 16.6761 3.94821 18.364 5.63604C20.0518 7.32387 21 9.61305 21 12V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H18C17.4696 21 16.9609 20.7893 16.5858 20.4142C16.2107 20.0391 16 19.5304 16 19V16C16 15.4696 16.2107 14.9609 16.5858 14.5858C16.9609 14.2107 17.4696 14 18 14H21"
            stroke="#FF6467"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative bg-white py-16 lg:py-20">
      <div className="max-w-[1660px] w-[95%] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-[38px] lg:text-[42px] leading-[1.2] font-bold text-gray-900 mb-3">
            Enterprise Capabilities
          </h2>
          <p className="text-[14px] lg:text-lg leading-relaxed text-gray-600 max-w-2xl">
            We go beyond standard ecommerce. Our team is equipped to handle
            complex engineering challenges across the entire stack.
          </p>
        </div>

        {/* Grid of Capability Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {capabilities.map((capability, index) => (
            <div
              key={index}
              className="group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl"
              style={{
                aspectRatio: index === 0 || index === 4 ? "1.15" : "1.15",
              }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <Image
                  src={capability.image}
                  alt={capability.title}
                  fill
                  className="object-cover"
                />
                {/* Alternative: Use regular img tag */}
                {/* <img 
                  src={capability.image} 
                  alt={capability.title}
                  className="w-full h-full object-cover"
                /> */}

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/50 group-hover:from-black/60 group-hover:to-black/80 transition-all duration-300"></div>
              </div>

              {/* Content */}
              <div className="relative h-full p-6 flex flex-col justify-end gap-4">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20 group-hover:bg-white/20 transition-all duration-300">
                  {capability.icon}
                </div>

                {/* Title */}
                <div>
                  <h3 className="text-[16px] lg:text-xl leading-[1.3] font-bold text-white">
                    {capability.title}
                  </h3>
                </div>
              </div>

              {/* Hover Effect - Shine */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-linear-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-purple-100/30 rounded-full blur-3xl -z-10"></div>
    </section>
  );
}
