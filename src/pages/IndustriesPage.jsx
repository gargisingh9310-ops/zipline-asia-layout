import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { industriesData } from '../data/websiteData';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const sectorMetrics = [
    { label: "Target Sectors", value: "10" },
    { label: "Turnkey Scope", value: "100%" },
    { label: "Engineering Heritage", value: "30 Yrs" },
    { label: "Regulatory Compliance", value: "EN / ACCT" }
  ];

  return (
    <div className="bg-[#14281D] text-[#F7F5F0] min-h-screen pt-20">
      {/* Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Industries We Serve" }]}
        eyebrow="SECTOR-SPECIFIC ENGINEERING"
        title="INDUSTRIES WE SERVE."
        subtitle="ENGINEERED ADVENTURE ATTRACTIONS TAILORED FOR EVERY COMMERCIAL ECOSYSTEM."
        description="From luxury eco-resorts and mountain tourism destinations to educational campuses, shopping malls, and institutional training facilities, ZIPLINE ASIA designs and executes custom adventure infrastructure optimized for footfall, safety, and commercial returns."
        metrics={sectorMetrics}
        ctaLabel="CONSULT FOR YOUR SECTOR"
        ctaHref="/contact"
      />

      {/* Strategic Sector Overview Banner */}
      <section className="py-12 border-b border-[#3E6B48]/30 bg-[#0E1C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-[#14281D] border border-[#3E6B48]/30">
              <div className="text-[#E06D22] text-xs font-mono font-bold tracking-widest uppercase mb-2">01 // TOPOGRAPHY HARMONIZATION</div>
              <h3 className="text-lg font-bold text-[#F7F5F0] mb-2">Low-Impact Terrain Integration</h3>
              <p className="text-sm text-[#F7F5F0]/70 font-light leading-relaxed">
                We design with the natural landscape rather than fighting it, eliminating costly earthwork and preserving canopy aesthetics for hospitality and eco-tourism sites.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#14281D] border border-[#3E6B48]/30">
              <div className="text-[#E06D22] text-xs font-mono font-bold tracking-widest uppercase mb-2">02 // THROUGHPUT & ROI</div>
              <h3 className="text-lg font-bold text-[#F7F5F0] mb-2">High-Capacity Guest Flow</h3>
              <p className="text-sm text-[#F7F5F0]/70 font-light leading-relaxed">
                For commercial amusement parks and malls, we calculate cycle times, dual-line dispatching, and automated brakes to maximize peak-hour hourly guest volume.
              </p>
            </div>

            <div className="p-6 rounded-lg bg-[#14281D] border border-[#3E6B48]/30">
              <div className="text-[#E06D22] text-xs font-mono font-bold tracking-widest uppercase mb-2">03 // CERTIFIED RIGOR</div>
              <h3 className="text-lg font-bold text-[#F7F5F0] mb-2">Institutional-Grade Durability</h3>
              <p className="text-sm text-[#F7F5F0]/70 font-light leading-relaxed">
                Defence, cadet academies, and educational challenge courses receive hot-dip galvanized steel, certified rigging hardware, and multi-tier proof-load testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-4">
              TAILORED INFRASTRUCTURE
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F5F0]">
              EXPLORE OUR SECTOR SPECIALISATIONS
            </h2>
            <p className="mt-4 text-[#F7F5F0]/70 text-base md:text-lg font-light">
              Select an industry sector below to review recommended attraction configurations, site considerations, and commercial advantages.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {industriesData.industries.map((ind, idx) => (
            <ScrollReveal key={ind.id} delay={idx * 0.05}>
              <div className="group relative rounded-xl overflow-hidden bg-[#1C2420] border border-[#3E6B48]/30 hover:border-[#E06D22]/50 transition-all duration-300 flex flex-col h-full">
                {/* Sector Image */}
                <div className="relative h-64 sm:h-72 w-full overflow-hidden">
                  <img
                    src={ind.image}
                    alt={ind.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2420] via-[#1C2420]/40 to-transparent" />

                  {/* Sector Number */}
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#14281D]/90 backdrop-blur-md rounded border border-[#3E6B48]/40 text-[#E06D22] text-xs font-mono font-bold">
                    SECTOR {ind.number}
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#E06D22]/80 backdrop-blur-md rounded text-white text-[11px] font-mono tracking-wider uppercase font-semibold">
                    COMMERCIAL ADVENTURE
                  </div>

                  {/* Title overlay */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-bold text-[#F7F5F0] drop-shadow-sm group-hover:text-[#E06D22] transition-colors">
                      {ind.title}
                    </h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <p className="text-[#F7F5F0]/80 text-sm leading-relaxed mb-6 font-light">
                      {ind.description}
                    </p>

                    {/* Key Recommended Attractions */}
                    <div className="p-4 rounded-lg bg-[#14281D]/80 border border-[#3E6B48]/30 mb-6">
                      <div className="text-[11px] font-mono text-[#E06D22] tracking-wider uppercase font-bold mb-2">
                        RECOMMENDED ATTRACTION MIX
                      </div>
                      <div className="text-sm text-[#F7F5F0] font-medium leading-relaxed">
                        {ind.keyAttractions}
                      </div>
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4 border-t border-[#3E6B48]/20 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedIndustry(ind)}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#F7F5F0]/70 hover:text-[#E06D22] transition-colors flex items-center gap-1.5"
                    >
                      <span>Review Sector Brief</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>

                    <Link
                      to={`/contact?sector=${encodeURIComponent(ind.title)}`}
                      className="inline-flex items-center gap-2 px-4 py-2 rounded bg-[#E06D22] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#c85b18] transition-colors"
                    >
                      <span>Inquire Now</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Sector Details Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#1C2420] border border-[#3E6B48] rounded-xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-4 right-4 text-[#F7F5F0]/60 hover:text-[#E06D22] p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#E06D22] uppercase tracking-wider mb-2">
              <span>SECTOR BRIEF // {selectedIndustry.number}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#F7F5F0] mb-4">
              {selectedIndustry.title}
            </h3>

            <div className="relative h-48 w-full rounded-lg overflow-hidden mb-6 border border-[#3E6B48]/30">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#F7F5F0]/80 leading-relaxed mb-6 font-light">
              {selectedIndustry.description}
            </p>

            <div className="p-4 rounded-lg bg-[#14281D] border border-[#3E6B48]/40 mb-6">
              <h4 className="text-xs font-mono font-bold text-[#E06D22] tracking-wider uppercase mb-2">
                Recommended Attractions & Infrastructure:
              </h4>
              <p className="text-sm font-medium text-[#F7F5F0]">
                {selectedIndustry.keyAttractions}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#3E6B48]/30">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="px-4 py-2 text-xs font-mono text-[#F7F5F0]/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Close
              </button>
              <Link
                to={`/contact?sector=${encodeURIComponent(selectedIndustry.title)}`}
                onClick={() => setSelectedIndustry(null)}
                className="px-5 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#c85b18] transition-colors"
              >
                Discuss Sector Proposal
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Consultation Banner */}
      <section className="py-20 border-t border-[#3E6B48]/30 bg-gradient-to-b from-[#14281D] to-[#0A160F]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-4">
            SECTOR ADVISORY & FEASIBILITY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F5F0] tracking-tight mb-6">
            PLANNING AN ADVENTURE ATTRACTION FOR YOUR SECTOR?
          </h2>
          <p className="text-base md:text-lg text-[#F7F5F0]/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Speak directly with our senior engineering team to evaluate site topography, visitor throughput, attraction mix, and commercial return models.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#E06D22] text-white text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#c85b18] transition-all duration-300 shadow-lg shadow-[#E06D22]/20"
            >
              SCHEDULE A B2B CONSULTATION
            </Link>
            <Link
              to="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#1C2420] border border-[#3E6B48] text-[#F7F5F0] text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#14281D] hover:border-[#E06D22]/50 transition-all duration-300"
            >
              EXPLORE OUR TURNKEY SOLUTIONS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
