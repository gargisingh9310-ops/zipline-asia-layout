import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, 
  ArrowUpRight, 
  Compass, 
  Layers, 
  Wrench, 
  Workflow, 
  ShieldCheck, 
  FileCheck2,
  Sparkles
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { solutionsData } from '../data/websiteData';

export default function SolutionsPage() {
  const [selectedPhase, setSelectedPhase] = useState("All");

  const services = Array.isArray(solutionsData?.services) ? solutionsData.services : [];
  const phases = solutionsData?.phases || [];

  return (
    <div className="w-full bg-[#F7F5F0] text-[#1C2420]">
      {/* 01 — Full-Screen Page Hero (100svh, Dark & Cinematic) */}
      <PageHero
        eyebrow="OUR SERVICES // CONCEPT TO COMMISSIONING"
        title="COMPLETE SOLUTIONS."
        highlightText="LIMITLESS POSSIBILITIES."
        subtitle="One single-source partner for the entire adventure infrastructure lifecycle — from topographical feasibility and catenary calculations to precision fabrication, certified rigging, and lifetime maintenance."
        bgImage="/images/engineering-details.jpg"
        breadcrumbs={[{ label: 'Our Solutions' }]}
        primaryCTA={{ label: "REQUEST FEASIBILITY STUDY", href: "/contact" }}
        secondaryCTA={{ label: "EXPLORE ATTRACTIONS", href: "/attractions" }}
        metrics={[
          { value: "11 Services", label: "Turnkey Scope" },
          { value: "100%", label: "Single-Source Accountability" },
          { value: "Full", label: "Lifecycle Support" }
        ]}
        scrollTargetId="solutions-content"
      />

      {/* 02 — Phased Development Pipeline (LIGHT: Warm Sand Surface #F7F5F0) */}
      <section id="solutions-content" className="relative w-full py-16 sm:py-20 bg-[#F7F5F0] border-b border-[#3E6B48]/20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10 pb-6 border-b border-[#1C2420]/15">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                STRUCTURED PROJECT PIPELINE
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#14281D] tracking-tight mt-1">
                4 Phased Project Stages
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525E57] max-w-md font-normal leading-relaxed">
              Every adventure destination follows a rigorous four-phase milestone methodology ensuring transparent execution and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {phases.map((ph, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={0.06 * idx}
                className="p-6 rounded-2xl bg-white border border-[#3E6B48]/15 space-y-4 shadow-sm hover:shadow-md hover:border-[#E06D22] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-mono font-bold text-[#E06D22] uppercase tracking-wider">
                      {ph.phase.toUpperCase()}
                    </span>
                    <span className="text-[10px] font-mono text-[#525E57] bg-[#F7F5F0] px-2 py-0.5 rounded">
                      STAGE // 0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-display font-bold uppercase text-[#14281D]">
                    {ph.title}
                  </h3>
                  <div className="space-y-2 pt-3 border-t border-[#1C2420]/10 mt-3">
                    {ph.services.map((svc, sIdx) => (
                      <div key={sIdx} className="flex items-center gap-2 text-xs text-[#525E57]">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3E6B48] shrink-0" />
                        <span className="truncate">{svc}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 03 — Detailed Showcase of All 11 Services (LIGHT: Crisp White Surface) */}
      <section className="relative w-full py-16 sm:py-24 bg-white text-[#1C2420] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                COMPREHENSIVE TURNKEY SCOPE
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#14281D] leading-tight">
                Our 11 Engineering Services
              </h2>
              <p className="text-sm sm:text-base text-[#525E57] font-normal leading-relaxed mt-2">
                From pre-construction geotechnical studies to daily operational checklists, explore the complete scope of our adventure infrastructure delivery.
              </p>
            </ScrollReveal>
          </div>

          {/* Services Grid (Clean Light Cards with Visual Depth) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <ScrollReveal
                key={service.id || idx}
                animation="fade-up"
                delay={0.05 * (idx % 3)}
                className="group flex flex-col justify-between rounded-2xl bg-[#F7F5F0] border border-[#3E6B48]/15 hover:border-[#E06D22] hover:bg-white hover:shadow-card-sand hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Service Image */}
                  <div className="relative w-full aspect-[16/9] overflow-hidden bg-[#14281D]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/70 via-transparent to-transparent pointer-events-none" />
                    
                    {/* Number Badge */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#14281D]/90 backdrop-blur-md border border-[#3E6B48]/50 text-xs font-mono font-bold text-[#E06D22]">
                      SERVICE // {service.number}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-[#3E6B48] font-bold block">
                      {service.subtitle}
                    </span>
                    <h3 className="text-xl font-display font-bold uppercase text-[#14281D] leading-snug group-hover:text-[#E06D22] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#525E57] leading-relaxed font-normal">
                      {service.description}
                    </p>

                    {/* Deliverables Checklist */}
                    {service.deliverables && service.deliverables.length > 0 && (
                      <div className="pt-3 border-t border-[#1C2420]/10 space-y-1.5">
                        <span className="text-[10px] font-mono uppercase text-[#14281D] font-bold tracking-wider block mb-1">
                          Key Deliverables:
                        </span>
                        {service.deliverables.map((deliv, dIdx) => (
                          <div key={dIdx} className="flex items-center gap-2 text-xs text-[#525E57]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3E6B48] shrink-0" />
                            <span className="truncate">{deliv}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Footer Link */}
                <div className="p-6 pt-0">
                  <Link
                    to={`/contact?service=${encodeURIComponent(service.title)}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#E06D22] group-hover:translate-x-1 transition-all"
                  >
                    <span>INQUIRE THIS SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 04 — Single-Source Advantage (DARK High-Impact Accent #14281D) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#14281D] text-white canopy-grid-dark overflow-hidden border-y border-[#3E6B48]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal animation="fade-up">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                  THE TURNKEY ADVANTAGE
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
                  Single-Source Accountability vs. Fragmented Subcontracting
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.1}>
                <p className="text-sm sm:text-base text-[#F7F5F0]/85 font-light leading-relaxed">
                  Most adventure project delays and safety failures stem from divided responsibility between concept planners, civil contractors, third-party fabricators, and local operators.
                </p>
                <p className="text-sm sm:text-base text-[#F7F5F0]/85 font-light leading-relaxed mt-3">
                  ZIPLINE ASIA eliminates this risk through complete single-source delivery. From first contour survey to final staff handover sign-off, one accountable engineering team owns every calculation, cable tension, and proof test.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-[#3E6B48]/30">
                  <div className="p-4 rounded-xl bg-[#193325] border border-[#3E6B48]/40 space-y-1">
                    <span className="text-base font-mono font-bold text-[#E06D22]">01 // Zero Friction</span>
                    <p className="text-xs text-[#F7F5F0]/70">No handoff gaps between structural design and field erection.</p>
                  </div>
                  <div className="p-4 rounded-xl bg-[#193325] border border-[#3E6B48]/40 space-y-1">
                    <span className="text-base font-mono font-bold text-[#3E6B48]">02 // Fixed Timeline</span>
                    <p className="text-xs text-[#F7F5F0]/70">Milestone-driven project tracking with dedicated technical directors.</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal animation="zoom-in" delay={0.15}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3E6B48]/30 bg-[#0E1C14]">
                  <img
                    src="/images/glass-bridge.jpg"
                    alt="ZIPLINE ASIA Turnkey Engineering Precision"
                    className="w-full h-[360px] sm:h-[420px] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14281D] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#14281D]/90 backdrop-blur-md border border-[#3E6B48]/40">
                    <span className="text-[10px] font-mono uppercase text-[#E06D22] font-bold block mb-1">
                      TURNKEY RIGOR
                    </span>
                    <p className="text-xs text-[#F7F5F0]/90">
                      Bespoke cantilever viewing decks, high-capacity zip lines, and multi-tier challenge courses executed under one unified engineering standard.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 05 — Bottom CTA (LIGHT Surface: Warm Sand) */}
      <section className="relative w-full py-16 sm:py-20 bg-[#F7F5F0] text-[#1C2420] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22]">
            PROJECT INITIATION & FEASIBILITY
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#14281D] tracking-tight">
            Ready to Begin Site Feasibility?
          </h2>
          <p className="text-sm sm:text-base text-[#525E57] max-w-xl mx-auto font-normal leading-relaxed">
            Provide your land parameters, site contour data, or Google Earth KMZ files. Our engineering desk will deliver an initial attraction matrix and technical appraisal.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md bg-[#E06D22] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-md"
            >
              REQUEST FEASIBILITY STUDY
            </Link>
            <Link
              to="/attractions"
              className="px-8 py-4 rounded-md bg-white border border-[#3E6B48]/30 text-[#14281D] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:border-[#E06D22] hover:bg-[#F7F5F0] transition-all"
            >
              BROWSE ATTRACTIONS PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
