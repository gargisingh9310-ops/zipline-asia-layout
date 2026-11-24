import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, ChevronRight, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { industriesData } from '../data/websiteData';

export default function IndustriesPage() {
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  const sectorMetrics = [
    { label: "Target Sectors", value: "10 Distinct Sectors" },
    { label: "Turnkey Scope", value: "100% Integrated" },
    { label: "Engineering Heritage", value: "30 Yrs (Est. 1995)" }
  ];

  return (
    <div className="w-full bg-[#F7F5F0] text-[#292D2B]">
      {/* 01 — Full-Screen Page Hero (100svh, Dark & Cinematic) */}
      <PageHero
        eyebrow="SECTOR-SPECIFIC ADVENTURE INFRASTRUCTURE"
        title="INDUSTRIES & COMMERCIAL"
        highlightText="SECTORS."
        subtitle="Customized adventure and recreational attractions designed for hotels, eco-resorts, theme parks, master-planned townships, educational campuses, and shopping malls."
        bgImage="/images/resort-park.jpg"
        breadcrumbs={[{ label: "Industries We Serve" }]}
        primaryCTA={{ label: "CONSULT FOR YOUR SECTOR", href: "/contact" }}
        secondaryCTA={{ label: "EXPLORE ATTRACTIONS", href: "/attractions" }}
        metrics={sectorMetrics}
        scrollTargetId="industries-content"
      />

      {/* 02 — Strategic Sector Overview (LIGHT: Warm Sand Surface #F7F5F0) */}
      <section id="industries-content" className="py-16 sm:py-20 border-b border-[#292D2B]/15 bg-[#F7F5F0] text-[#292D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-10 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B] block">
              ENGINEERING FIT FOR DIVERSE SECTORS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#183B2B] tracking-tight">
              Strategic Commercial Integration
            </h2>
            <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed">
              Every sector demands distinct structural considerations — from low-impact landscape harmonization in luxury eco-resorts to high-throughput cycle times in urban shopping malls.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white border border-[#292D2B]/10 shadow-sm space-y-3">
              <div className="text-[#C6A15B] text-xs font-mono font-bold tracking-widest uppercase">
                01 // LANDSCAPE HARMONY
              </div>
              <h3 className="text-lg font-display font-bold uppercase text-[#183B2B]">
                Low-Impact Terrain Integration
              </h3>
              <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed">
                We design with the natural landscape rather than fighting it, eliminating costly earthwork and preserving canopy aesthetics for hospitality and eco-tourism sites.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#292D2B]/10 shadow-sm space-y-3">
              <div className="text-[#C6A15B] text-xs font-mono font-bold tracking-widest uppercase">
                02 // THROUGHPUT & ROI
              </div>
              <h3 className="text-lg font-display font-bold uppercase text-[#183B2B]">
                High-Capacity Guest Flow
              </h3>
              <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed">
                For commercial amusement parks and malls, we calculate cycle times, dual-line dispatching, and automated brakes to maximize peak-hour hourly guest volume.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-[#292D2B]/10 shadow-sm space-y-3">
              <div className="text-[#C6A15B] text-xs font-mono font-bold tracking-widest uppercase">
                03 // CERTIFIED RIGOR
              </div>
              <h3 className="text-lg font-display font-bold uppercase text-[#183B2B]">
                Institutional-Grade Durability
              </h3>
              <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed">
                Defence, cadet academies, and educational challenge courses receive hot-dip galvanized steel, certified rigging hardware, and multi-tier proof-load testing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 03 — Industries Grid (LIGHT: Crisp White Surface) */}
      <section className="py-16 sm:py-24 bg-white text-[#292D2B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <ScrollReveal>
            <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-mono tracking-widest uppercase">
                TAILORED INFRASTRUCTURE
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-[#183B2B]">
                Explore Our 10 Sector Specialisations
              </h2>
              <p className="text-sm md:text-base text-[#6E7571] font-normal max-w-2xl mx-auto leading-relaxed">
                Select an industry sector below to review recommended attraction configurations, site considerations, and commercial advantages.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {industriesData.industries.map((ind, idx) => (
              <ScrollReveal key={ind.id} delay={idx * 0.05}>
                <div className="group relative rounded-2xl overflow-hidden bg-[#F7F5F0] border border-[#292D2B]/10 hover:border-[#C6A15B] hover:bg-white hover:shadow-card-sand transition-all duration-300 flex flex-col h-full">
                  {/* Sector Image */}
                  <div className="relative h-64 sm:h-72 w-full overflow-hidden bg-[#183B2B]">
                    <img
                      src={ind.image}
                      alt={ind.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#183B2B]/80 via-transparent to-transparent" />

                    {/* Sector Number */}
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#183B2B]/90 backdrop-blur-md rounded border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-mono font-bold">
                      SECTOR // {ind.number}
                    </div>

                    {/* Title overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-display font-bold uppercase text-white drop-shadow-sm group-hover:text-[#F7F5F0] transition-colors">
                        {ind.title}
                      </h3>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-[#6E7571] text-sm leading-relaxed mb-6 font-normal">
                        {ind.description}
                      </p>

                      {/* Key Recommended Attractions */}
                      <div className="p-4 rounded-xl bg-white border border-[#292D2B]/10 mb-6 shadow-xs">
                        <div className="text-[11px] font-mono text-[#C6A15B] tracking-wider uppercase font-bold mb-1">
                          RECOMMENDED ATTRACTION MIX
                        </div>
                        <div className="text-xs sm:text-sm text-[#183B2B] font-medium leading-relaxed">
                          {ind.keyAttractions}
                        </div>
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-[#292D2B]/10 flex items-center justify-between">
                      <button
                        onClick={() => setSelectedIndustry(ind)}
                        className="text-xs font-mono font-bold uppercase tracking-wider text-[#183B2B] hover:text-[#C6A15B] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Review Sector Brief</span>
                        <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                      </button>

                      <Link
                        to={`/contact?sector=${encodeURIComponent(ind.title)}`}
                        className="inline-flex items-center gap-1.5 px-4 py-2 rounded bg-[#C6A15B] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#B08B46] transition-colors shadow-sm"
                      >
                        <span>Inquire Now</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Sector Fit Assessment & Masterplanning (DARK High-Impact Accent #183B2B) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#183B2B] text-white canopy-grid-dark overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B]">
                SECTOR FIT & FEASIBILITY APPRAISAL
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
                Evaluating Land Topography & Commercial Target Audience
              </h2>
              <p className="text-sm sm:text-base text-[#F7F5F0]/85 font-light leading-relaxed max-w-2xl">
                Every commercial ecosystem has different operational constraints. Our multidisciplinary engineering desk analyzes satellite topography, soil conditions, guest demographics, and capital expenditure budgets before proposing attraction blueprints.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-md bg-[#C6A15B] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:shadow-glow-gold transition-all shadow-xl"
              >
                REQUEST SECTOR APPRAISAL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Bottom CTA (LIGHT Surface: Warm Sand) */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] text-[#292D2B] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B]">
            SECTOR ADVISORY & FEASIBILITY
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#183B2B] tracking-tight">
            Planning an Adventure Attraction for Your Sector?
          </h2>
          <p className="text-sm sm:text-base text-[#6E7571] max-w-2xl mx-auto font-normal leading-relaxed">
            Speak directly with our senior engineering team to evaluate site topography, visitor throughput, attraction mix, and commercial return models.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md bg-[#C6A15B] text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#B08B46] transition-all shadow-md"
            >
              SCHEDULE A B2B CONSULTATION
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 rounded-md bg-white border border-white/10 text-[#183B2B] text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#FAF9F5] transition-all"
            >
              EXPLORE OUR TURNKEY SOLUTIONS
            </Link>
          </div>
        </div>
      </section>

      {/* Sector Details Modal */}
      {selectedIndustry && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-[#292D2B]/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedIndustry(null)}
              className="absolute top-4 right-4 text-[#6E7571] hover:text-[#183B2B] p-2 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-2 font-bold">
              <span>SECTOR BRIEF // {selectedIndustry.number}</span>
            </div>

            <h3 className="text-2xl font-display font-extrabold uppercase text-[#183B2B] mb-4">
              {selectedIndustry.title}
            </h3>

            <div className="relative h-48 w-full rounded-xl overflow-hidden mb-6 border border-[#292D2B]/15 bg-[#183B2B]">
              <img
                src={selectedIndustry.image}
                alt={selectedIndustry.title}
                className="w-full h-full object-cover"
              />
            </div>

            <p className="text-sm text-[#6E7571] leading-relaxed mb-6 font-normal">
              {selectedIndustry.description}
            </p>

            <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/15 mb-6">
              <h4 className="text-xs font-mono font-bold text-[#C6A15B] tracking-wider uppercase mb-2">
                Recommended Attractions & Infrastructure:
              </h4>
              <p className="text-sm font-semibold text-[#183B2B]">
                {selectedIndustry.keyAttractions}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#292D2B]/10">
              <button
                onClick={() => setSelectedIndustry(null)}
                className="px-4 py-2 text-xs font-mono text-[#6E7571] hover:text-[#183B2B] transition-colors uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              <Link
                to={`/contact?sector=${encodeURIComponent(selectedIndustry.title)}`}
                onClick={() => setSelectedIndustry(null)}
                className="px-5 py-2.5 rounded bg-[#C6A15B] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#B08B46] transition-colors"
              >
                Discuss Sector Proposal
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
