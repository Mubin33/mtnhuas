'use client';


import { FaPenNib } from "react-icons/fa";
import { IoCodeSlashOutline } from "react-icons/io5";
import { GiFlatPlatform } from "react-icons/gi";




export default function ShortAbout() {
  const services = [
    {
      id: 1,
      icon: '🚀',
      title: 'Platform Migration',
      subtitle: 'Seamless Transitions',
      description: 'Move to Shopify Plus without downtime. We handle data, design, and deployment.',
      features: ['Zero downtime', 'Data integrity', 'SEO preservation'],
      color: 'from-blue-500 to-cyan-500',
      accent: <span className={`w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs`}>
                          <GiFlatPlatform    color="white"  size={12}/>
                        </span>,
      stats: '50+ migrations',
    },
    {
      id: 2,
      icon: '⚡',
      title: 'Custom Development',
      subtitle: 'Built for Scale',
      description: 'Tailored solutions that grow with your business. From apps to integrations.',
      features: ['Custom apps', 'API integrations', 'Performance optimization'],
      color: 'from-purple-500 to-pink-500',
      accent:<span className={`w-5 h-5 rounded-full bg-[#83a1cb] flex items-center justify-center text-white text-xs`}>
                        <IoCodeSlashOutline   color="white"  size={12}/>
                        </span>,
      stats: '100+ builds',
    },
    {
      id: 3,
      icon: '🎨',
      title: 'UX Design',
      subtitle: 'Conversion Focused',
      description: 'Beautiful interfaces that drive results. User research to final pixel.',
      features: ['User research', 'A/B testing', 'Brand systems'],
      color: 'from-amber-500 to-orange-500',
      accent: <span className={`w-5 h-5 rounded-full bg-[#83a1cb] flex items-center justify-center text-white text-xs`}>
                        <FaPenNib  color="white"  size={12}/>
                        </span> ,
      stats: '98% satisfaction',
    },
    {
      id: 4,
      icon: '📈',
      title: 'Growth Strategy',
      subtitle: 'Data Driven',
      description: 'Scale with confidence. Strategy, analytics, and optimization.',
      features: ['CRO audits', 'Analytics setup', 'Growth roadmaps'],
      color: 'from-emerald-500 to-teal-500',
      accent: <span className={`w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs`}>
                          ✓
                        </span>,
      stats: '3x avg growth',
    },
  ];

  return (
    <section className="relative py-14 bg-white overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 left-10 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-blob" />
      <div className="absolute top-40 right-10 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-blob delay-2000" />

      <div className="relative max-w-[1660px] w-[95%] mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-sm font-bold text-slate-700 mb-6">
            What We Do Best
          </span>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight mb-6">
            <span className="bg-gradient-to-r from-slate-900 to-[#83a1cb] bg-clip-text text-transparent">
              Services That
            </span> 
            <span className="bg-gradient-to-r from-[#83a1cb] to-black bg-clip-text text-transparent">
              Scale With You
            </span>
          </h2>

          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            End-to-end solutions designed for growing brands.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group relative animate-slideUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-full bg-white border-2 border-slate-200 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:border-slate-300">

                {/* Soft hover gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}
                />

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between mb-6">
                    <div className="text-6xl group-hover:scale-110 transition">
                      {service.icon}
                    </div>
                    <span className={`text-xs font-black px-3 py-1 rounded-lg bg-${service.accent}-100 text-${service.accent}-600`}>
                      {service.stats}
                    </span>
                  </div>

                  <h3
                    className={`text-3xl md:text-4xl font-black mb-2 transition-all duration-300
                    group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${service.color}`}
                  >
                    {service.title}
                  </h3>

                  <p className="text-sm font-bold uppercase tracking-wider text-slate-500 mb-4">
                    {service.subtitle}
                  </p>

                  <p className="text-slate-600 text-lg mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mb-0">
                    {service.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-slate-700 opacity-0 group-hover:opacity-100 transition"
                        style={{ transitionDelay: `${i * 80}ms` }}
                      >
                       {service.accent}
                        {feature}
                      </li>
                    ))}
                  </ul> 
                </div>

                {/* Safe gradient ring */}
                <div className={`pointer-events-none absolute inset-0 rounded-3xl ring-2 ring-transparent group-hover:ring-${service.accent}-400/40 transition`} />
              </div>

              {/* Floating index */}
               
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
