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
  Activity,
  FileCheck2,
  ChevronRight
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { solutionsData } from '../data/websiteData';

export default function SolutionsPage() {
  const [selectedPhase, setSelectedPhase] = useState("All");

  const services = Array.isArray(solutionsData?.services) ? solutionsData.services : [];
  const phases = solutionsData?.phases || [];

  return (
    <div className="w-full bg-[#14281D] text-white">
      {/* 01 — Page Header */}
      <PageHeader
        badge="OUR SOLUTIONS & SERVICES"
        title="COMPLETE SOLUTIONS. LIMITLESS POSSIBILITIES."
        subtitle="One partner for the entire adventure infrastructure development process — from initial feasibility and master planning through precision engineering to final commissioning and ongoing support."
        breadcrumbs={[{ label: 'Our Solutions' }]}
        ctaText="REQUEST FEASIBILITY STUDY"
        ctaHref="/contact"
        stats={[
          { value: "11", label: "Turnkey Services" },
          { value: "100%", label: "Single-Source Accountability" },
          { value: "Full", label: "Lifecycle Support" }
        ]}
      />

      {/* 02 — Phased Development Pipeline (Deep Pine Green) */}
      <section className="relative w-full py-12 sm:py-16 bg-[#193325] border-b border-[#3E6B48]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                STRUCTURED PROJECT PIPELINE
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-white mt-1">
                4 Phased Project Stages
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#F7F5F0]/80 max-w-md font-normal">
              Every adventure destination follows a rigorous four-phase milestone methodology ensuring transparent execution and structural integrity.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {phases.map((ph, idx) => (
              <ScrollReveal
                key={idx}
                animation="fade-up"
                delay={0.06 * idx}
                className="p-5 rounded-xl bg-[#14281D] border border-[#3E6B48]/40 space-y-3 shadow-sm hover:border-[#E06D22] transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#E06D22]">
                    {ph.phase.toUpperCase()}
                  </span>
                  <span className="text-[10px] font-mono text-[#F7F5F0]/60">
                    STAGE // 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-display font-bold uppercase text-white">
                  {ph.title}
                </h3>
                <div className="space-y-1.5 pt-2 border-t border-white/5">
                  {ph.services.map((svc, sIdx) => (
                    <div key={sIdx} className="flex items-center gap-2 text-xs text-[#F7F5F0]/80">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#3E6B48] shrink-0" />
                      <span className="truncate">{svc}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 03 — Detailed Showcase of All 11 Services (Warm Sand Surface) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                COMPREHENSIVE SERVICE CATALOGUE
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#14281D] leading-tight">
                11 Turnkey Solutions & Capabilities
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <p className="text-sm sm:text-base text-[#525E57] font-normal leading-relaxed">
                Explore our full suite of technical, architectural, and operational adventure engineering solutions.
              </p>
            </ScrollReveal>
          </div>

          {/* Cards Grid: 11 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {services.map((service, idx) => (
              <ScrollReveal
                key={service.id || idx}
                animation="fade-up"
                delay={0.05 * (idx % 3)}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#1C2420]/15 hover:border-[#3E6B48] hover:shadow-card-sand hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Service Visual */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#14281D]">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Number & Tag */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#14281D]/90 backdrop-blur-md text-[#E06D22] border border-[#E06D22]/30 shadow-sm">
                        SERVICE // {service.number}
                      </span>
                    </div>

                    <span className="absolute bottom-2.5 left-3.5 text-xs font-mono font-bold text-white tracking-wider">
                      {service.subtitle}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-[#14281D] group-hover:text-[#3E6B48] transition-colors leading-snug">
                      {service.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-[#525E57] leading-relaxed">
                      {service.description}
                    </p>

                    {/* Key Deliverables */}
                    {Array.isArray(service.deliverables || service.features) && (
                      <div className="space-y-1.5 pt-3 border-t border-[#1C2420]/10">
                        <span className="text-[10px] font-mono uppercase text-[#3E6B48] font-bold block">
                          KEY DELIVERABLES
                        </span>
                        {(service.deliverables || service.features).map((item, dIdx) => (
                          <div key={dIdx} className="flex items-start gap-2 text-xs text-[#1C2420]/80">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#E06D22] shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Link */}
                <div className="p-5 sm:p-6 pt-0 mt-auto">
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-between w-full py-2.5 px-3.5 rounded-lg bg-[#FAF9F6] border border-[#1C2420]/10 group-hover:bg-[#14281D] group-hover:text-white transition-all text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420]"
                  >
                    <span>INQUIRE THIS SERVICE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E06D22] group-hover:text-white transition-colors" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 04 — Single-Source Turnkey Advantage (Deep Pine Green) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#14281D] text-white canopy-grid-dark overflow-hidden border-t border-[#3E6B48]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-6 space-y-5">
              <ScrollReveal animation="fade-up">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                  THE ZIPLINE ASIA DIFFERENCE
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                  Why Single-Source Turnkey Accountability Matters
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.1}>
                <p className="text-sm sm:text-base text-[#F7F5F0]/85 leading-relaxed">
                  Fragmented project coordination between civil contractors, cable suppliers, and ride installers introduces dangerous engineering variances, timeline delays, and regulatory friction.
                </p>
                <p className="text-sm sm:text-base text-[#F7F5F0]/85 leading-relaxed mt-3">
                  ZIPLINE ASIA eliminates contractor friction by taking full single-source commercial ownership from initial topography mapping and structural stress modeling to final proof-load drop tests and staff operational certification.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E06D22] shrink-0" />
                    <span className="text-sm font-semibold text-white">Zero engineering discrepancy between foundations and rigging</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E06D22] shrink-0" />
                    <span className="text-sm font-semibold text-white">Full 12:1 commercial safety factor adherence across all anchorages</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-[#E06D22] shrink-0" />
                    <span className="text-sm font-semibold text-white">Structured handover documentation and staff evacuation training</span>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.2}>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-md mt-3"
                >
                  <span>REQUEST PROJECT FEASIBILITY CONSULTATION</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-6 relative">
              <ScrollReveal animation="zoom-in" delay={0.15}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3E6B48]/50 bg-[#193325]">
                  <img
                    src="/images/engineering-inspection.jpg"
                    alt="ZIPLINE ASIA Rigging Inspection & Engineering"
                    className="w-full h-[380px] sm:h-[460px] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/90 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#14281D]/95 backdrop-blur-md border border-[#3E6B48]/40 text-white">
                    <span className="text-[10px] font-mono uppercase text-[#E06D22] font-bold block mb-1">
                      VERIFIABLE QUALITY CONTROL
                    </span>
                    <p className="text-xs text-[#F7F5F0]/90">
                      On-site ultrasonic weld verification, proof-load cable testing, and foundation core inspections conducted by veteran engineers.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 05 — Bottom CTA Banner */}
      <section className="relative w-full py-16 bg-[#193325] text-white border-t border-[#3E6B48]/30 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22]">
            START YOUR INFRASTRUCTURE JOURNEY
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white">
            Ready to Evaluate Your Destination's Adventure Potential?
          </h2>
          <p className="text-sm text-[#F7F5F0]/80 max-w-xl mx-auto">
            Our engineering team conducts topographical site assessments, catenary calculations, and master planning for destinations worldwide.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E06D22] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-xl"
            >
              <span>DISCUSS YOUR PROJECT FEASIBILITY</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
