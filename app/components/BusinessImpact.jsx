'use client';

import Link from "next/link";

export default function BusinessImpact() {
  const impacts = [
    {
      label: 'Revenue Growth',
      value: '+212%',
      desc: 'Average growth across retained clients',
    },
    {
      label: 'Conversion Lift',
      value: '3.4x',
      desc: 'Post-launch performance improvement',
    },
    {
      label: 'Time to Market',
      value: '-48%',
      desc: 'Faster delivery than industry average',
    },
  ];

  return (
    <section className="relative py-12 bg-neutral-950 text-white overflow-hidden">
      {/* Ambient gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-white via-white to-white pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
        
        {/* LEFT — Narrative */}
        <div>
          <span className="inline-block mb-6 text-sm font-semibold tracking-widest text-[#83a1cb] uppercase">
            Business Impact
          </span>

          <h2 className="text-5xl md:text-6xl text-black font-black leading-tight mb-8">
            We don’t ship features.
            <br />
            <span className="text-[#83a1cb]">
              We move metrics.
            </span>
          </h2>

          <p className="text-lg text-neutral-600 max-w-xl mb-10">
            Every decision we make is tied to a business outcome — revenue,
            retention, or efficiency. Design and engineering are just tools.
            Results are the goal.
          </p>

          {/* Principles */}
          <ul className="space-y-5 text-neutral-400">
            {[
              'Strategy before execution',
              'Design backed by data', 
              'Long-term partnerships, not handoffs',
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="mt-1 w-2 h-2 rounded-full bg-[#83a1cb]" />
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT — Metrics Card */}
        <div className="relative bg-white/5 backdrop-blur border border-white/10 rounded-3xl p-10">
          <h4 className="text-sm font-semibold tracking-widest text-neutral-400 uppercase mb-8">
            Proven Outcomes
          </h4>

          <div className="space-y-8">
            {impacts.map((item, i) => (
              <div key={i} className="group">
                <div className="flex items-end justify-between">
                  <p className="text-neutral-600 font-medium">
                    {item.label}
                  </p>
                  <p className="text-4xl font-black text-[#83a1cb] group-hover:scale-105 transition">
                    {item.value}
                  </p>
                </div>

                <p className="mt-2 text-sm text-neutral-400 max-w-sm">
                  {item.desc}
                </p>

                <div className="mt-4 h-px w-full bg-linear-to-r from-[#83a1cb]/40 to-transparent" />
              </div>
            ))}
          </div>

          {/* CTA */}
          <Link href="/contact">
          <button className="mt-20 w-full py-4 rounded-xl bg-[#83a1cb] hover:bg-indigo-600 transition font-bold text-lg">
            Talk About Your Goals →
          </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
