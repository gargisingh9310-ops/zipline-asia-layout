import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, ChevronRight, CheckCircle2, ShieldCheck, FileCheck2 } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { safetyData } from '../data/websiteData';

export default function SafetyPage() {
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  const safetyMetrics = [
    { label: "Design Safety Factor", value: "12 : 1 Commercial" },
    { label: "Redundancy Design", value: "100% Dual Anchors" },
    { label: "Standard Alignment", value: "EN 15567 / ACCT" }
  ];

  const certificatesList = [
    {
      id: "cert-structural",
      title: "Structural Rigging Engineering Dossier",
      type: "ENGINEERING COMPLIANCE",
      issuedFor: "Load & Catenary Safety Calculations",
      code: "ZA-ENG-CERT-01",
      standards: "EN 15567 / ACCT Standards Alignment",
      status: "Verified Protocol"
    },
    {
      id: "cert-metallurgy",
      title: "Mill Test & Tensile Wire Rope QC",
      type: "METALLURGICAL RECORD",
      issuedFor: "High-Tensile Wire Ropes & Shackle Batches",
      code: "ZA-MAT-CERT-02",
      standards: "ISO 9001 / ASTM A1023 Standards Alignment",
      status: "Verified Protocol"
    },
    {
      id: "cert-proofload",
      title: "Calibrated Proof-Load & Deceleration Log",
      type: "COMMISSIONING AUDIT",
      issuedFor: "Multi-Cycle Static & Dynamic Testing",
      code: "ZA-TST-CERT-03",
      standards: "Pre-Opening Operational Sign-Off Protocol",
      status: "Verified Protocol"
    }
  ];

  return (
    <div className="w-full bg-[#F7F5F0] text-[#292D2B]">
      {/* 01 — Full-Screen Page Hero (100svh, Dark & Cinematic) */}
      <PageHero
        eyebrow="ENGINEERING RIGOR & QUALITY ASSURANCE"
        title="SAFETY, ENGINEERING &"
        highlightText="QUALITY STANDARDS."
        subtitle="At ZIPLINE ASIA, human safety is an engineering principle, not a compliance footnote. Every adventure attraction is designed with high commercial safety factors, fabricated with certified metallurgy, and validated through calibrated proof-load testing."
        bgImage="/images/engineering-inspection.jpg"
        breadcrumbs={[{ label: "Safety & Engineering" }]}
        primaryCTA={{ label: "REQUEST SAFETY DOSSIER", href: "/contact" }}
        secondaryCTA={{ label: "OUR TURNKEY SERVICES", href: "/solutions" }}
        metrics={safetyMetrics}
        scrollTargetId="safety-content"
      />

      {/* 02 — 3 Foundational Pillars (LIGHT: Warm Sand Surface #F7F5F0) */}
      <section id="safety-content" className="py-16 sm:py-20 border-b border-[#292D2B]/15 bg-[#F7F5F0] text-[#292D2B]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-mono tracking-widest uppercase">
              FOUNDATIONAL PILLARS
            </div>
            <h2 className="text-2xl md:text-4xl font-display font-extrabold uppercase text-[#183B2B] tracking-tight">
              Our Three Cardinal Safety Principles
            </h2>
            <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed max-w-2xl mx-auto">
              These three engineering benchmarks are non-negotiable across every project — whether an alpine resort zipline or an institutional training obstacle course.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {safetyData.principles.map((p, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-2xl bg-white border border-[#292D2B]/10 shadow-sm hover:shadow-card-sand hover:border-[#C6A15B] transition-all h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/15 flex items-center justify-center text-[#C6A15B] font-mono font-bold text-lg mb-6 shadow-2xs">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-display font-bold uppercase text-[#183B2B] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#292D2B]/10 text-[11px] font-mono text-[#C6A15B] tracking-wider uppercase font-bold">
                    NON-NEGOTIABLE BENCHMARK
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 03 — 9 Comprehensive Safety Protocols (LIGHT: Crisp White Surface) */}
      <section className="py-16 sm:py-24 bg-white text-[#292D2B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <ScrollReveal>
            <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-mono tracking-widest uppercase">
                COMPREHENSIVE PROTOCOLS
              </div>
              <h2 className="text-3xl md:text-5xl font-display font-extrabold uppercase tracking-tight text-[#183B2B]">
                9-Stage Safety & Lifecycle Management
              </h2>
              <p className="text-sm md:text-base text-[#6E7571] font-normal leading-relaxed max-w-2xl mx-auto">
                From pre-construction geological appraisal to annual structural non-destructive testing, our 9-stage engineering framework guarantees operational peace of mind.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {safetyData.protocols.map((proto, idx) => (
              <ScrollReveal key={proto.id} delay={idx * 0.04}>
                <div
                  onClick={() => setSelectedProtocol(proto)}
                  className="group p-6 sm:p-8 rounded-2xl bg-[#F7F5F0] border border-[#292D2B]/10 hover:border-[#C6A15B] hover:bg-white hover:shadow-card-sand transition-all duration-300 cursor-pointer flex flex-col justify-between h-full"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="px-2.5 py-1 rounded bg-white border border-[#292D2B]/15 text-[#C6A15B] text-xs font-mono font-bold shadow-2xs">
                        {proto.code}
                      </span>
                      <span className="text-[11px] font-mono text-[#6E7571] uppercase tracking-wider font-semibold">
                        {proto.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-display font-bold uppercase text-[#183B2B] mb-3 group-hover:text-[#C6A15B] transition-colors leading-snug">
                      {proto.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed mb-6">
                      {proto.scope}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#292D2B]/10 flex items-center justify-between text-xs font-mono text-[#C6A15B] font-bold">
                    <span>EXAMINE PROTOCOL</span>
                    <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Verified Audit Records (DARK High-Impact Accent #183B2B) */}
      <section className="py-16 sm:py-24 border-y border-white/10 bg-[#183B2B] text-white canopy-grid-dark overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="mb-14 text-center max-w-3xl mx-auto space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A15B]/10 border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-mono tracking-widest uppercase">
              VERIFIED AUDIT RECORDS
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold uppercase tracking-tight text-white">
              Document-Style Engineering Records
            </h2>
            <p className="text-sm md:text-base text-[#F7F5F0]/80 font-light max-w-2xl mx-auto leading-relaxed">
              Every ZIPLINE ASIA installation is supported by formal engineering dossiers, material mill test certifications, and signed commissioning logs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificatesList.map((cert) => (
              <div
                key={cert.id}
                className="relative rounded-2xl p-6 bg-[#1F4735] border-2 border-[#C6A15B]/30 shadow-xl flex flex-col justify-between"
              >
                <div className="border border-white/10 p-5 rounded-xl h-full flex flex-col justify-between relative bg-[#183B2B]/60 backdrop-blur-xs">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                      <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-widest font-bold">
                        ZIPLINE ASIA // DOSSIER
                      </div>
                      <div className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-[10px] font-mono text-emerald-400 font-bold">
                        {cert.status}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#F7F5F0]/50 tracking-wider uppercase mb-1">
                      {cert.type}
                    </div>
                    <h3 className="text-lg font-display font-bold uppercase text-white mb-2 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[#F7F5F0]/75 font-light mb-4">
                      {cert.issuedFor}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/10 text-[11px] font-mono space-y-1.5">
                    <div className="flex justify-between text-[#F7F5F0]/70">
                      <span>REF CODE:</span>
                      <span className="text-[#C6A15B] font-bold">{cert.code}</span>
                    </div>
                    <div className="flex justify-between text-[#F7F5F0]/70">
                      <span>ALIGNMENT:</span>
                      <span className="text-white font-medium">{cert.standards}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05 — Bottom CTA (LIGHT Surface: Warm Sand) */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] text-[#292D2B] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B]">
            COMPLIANCE ADVISORY & RE-CERTIFICATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#183B2B] tracking-tight">
            Require a Site Safety Audit or Specification Dossier?
          </h2>
          <p className="text-sm sm:text-base text-[#6E7571] max-w-2xl mx-auto font-normal leading-relaxed">
            Our engineering team conducts third-party site audits, non-destructive testing (NDT), structural re-certifications, and annual wire rope inspections for existing adventure installations.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md bg-[#C6A15B] text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#B08B46] transition-all shadow-md"
            >
              REQUEST TECHNICAL CONSULTATION
            </Link>
            <Link
              to="/solutions"
              className="px-8 py-4 rounded-md bg-white border border-white/10 text-[#183B2B] text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#FAF9F5] transition-all"
            >
              INSPECT ENGINEERING SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* Protocol Details Modal */}
      {selectedProtocol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-[#292D2B]/15 rounded-2xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProtocol(null)}
              className="absolute top-4 right-4 text-[#6E7571] hover:text-[#183B2B] p-2 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-2 font-bold">
              <span className="px-2 py-0.5 rounded bg-[#F7F5F0] border border-[#292D2B]/15">{selectedProtocol.code}</span>
              <span>{selectedProtocol.category}</span>
            </div>

            <h3 className="text-2xl font-display font-extrabold uppercase text-[#183B2B] mb-4">
              {selectedProtocol.title}
            </h3>

            <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/15 mb-6">
              <div className="text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-2 font-bold">
                ENGINEERING SPECIFICATION & EXECUTION SCOPE:
              </div>
              <p className="text-sm text-[#183B2B] leading-relaxed font-normal">
                {selectedProtocol.scope}
              </p>
            </div>

            <div className="space-y-3 mb-6 text-xs text-[#6E7571] font-mono">
              <div className="flex justify-between border-b border-[#292D2B]/10 pb-2">
                <span>DOCUMENTATION DELIVERABLE:</span>
                <span className="text-[#183B2B] font-bold">Standard Operating Procedure & Engineering Sign-Off</span>
              </div>
              <div className="flex justify-between border-b border-[#292D2B]/10 pb-2">
                <span>INSPECTION CYCLE:</span>
                <span className="text-[#183B2B] font-bold">Milestone + Annual Calibration</span>
              </div>
              <div className="flex justify-between border-b border-[#292D2B]/10 pb-2">
                <span>STANDARDS APPLIED:</span>
                <span className="text-[#C6A15B] font-bold">EN 15567 / ACCT Standards Alignment</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#292D2B]/10">
              <button
                onClick={() => setSelectedProtocol(null)}
                className="px-4 py-2 text-xs font-mono text-[#6E7571] hover:text-[#183B2B] transition-colors uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setSelectedProtocol(null)}
                className="px-5 py-2.5 rounded bg-[#C6A15B] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#B08B46] transition-colors"
              >
                Request Safety Dossier
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
