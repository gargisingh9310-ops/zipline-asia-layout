import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { safetyData } from '../data/websiteData';

export default function SafetyPage() {
  const [selectedProtocol, setSelectedProtocol] = useState(null);

  const safetyMetrics = [
    { label: "Design Safety Factor", value: "12 : 1" },
    { label: "Redundancy Design", value: "100% Dual" },
    { label: "Proof-Load Validation", value: "Multi-Tier" },
    { label: "Standard Alignment", value: "EN / ACCT" }
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
    <div className="bg-[#14281D] text-[#F7F5F0] min-h-screen pt-20">
      {/* Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Safety & Engineering" }]}
        eyebrow="ENGINEERING RIGOR & QUALITY ASSURANCE"
        title="SAFETY & QUALITY STANDARDS."
        subtitle="WHERE HUMAN THRILL MEETS UNCOMPROMISING STRUCTURAL RIGOR."
        description="At ZIPLINE ASIA, human safety is an engineering principle, not a compliance footnote. Every adventure attraction is designed with high commercial safety factors, fabricated with certified metallurgy, and validated through calibrated proof-load testing."
        metrics={safetyMetrics}
        ctaLabel="REQUEST ENGINEERING DOSSIER"
        ctaHref="/contact"
      />

      {/* 3 Core Principles Section */}
      <section className="py-16 border-b border-[#3E6B48]/30 bg-[#0E1C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-3">
              FOUNDATIONAL PILLARS
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-[#F7F5F0] tracking-tight">
              OUR THREE CARDINAL SAFETY PRINCIPLES
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {safetyData.principles.map((p, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div className="p-8 rounded-xl bg-[#14281D] border border-[#3E6B48]/40 hover:border-[#E06D22]/50 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#E06D22]/10 border border-[#E06D22]/30 flex items-center justify-center text-[#E06D22] font-mono font-bold text-lg mb-6">
                      0{idx + 1}
                    </div>
                    <h3 className="text-xl font-bold text-[#F7F5F0] mb-3">
                      {p.title}
                    </h3>
                    <p className="text-sm text-[#F7F5F0]/70 font-light leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#3E6B48]/20 text-[11px] font-mono text-[#E06D22] tracking-wider uppercase font-semibold">
                    NON-NEGOTIABLE BENCHMARK
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 9 Quality & Safety Protocols */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-4">
              COMPREHENSIVE PROTOCOLS
            </div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#F7F5F0]">
              9-STAGE SAFETY & LIFECYCLE MANAGEMENT
            </h2>
            <p className="mt-4 text-[#F7F5F0]/70 text-base md:text-lg font-light">
              From site geological appraisal to annual structural non-destructive testing, our 9-stage engineering framework guarantees operational peace of mind.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {safetyData.protocols.map((proto, idx) => (
            <ScrollReveal key={proto.id} delay={idx * 0.04}>
              <div
                onClick={() => setSelectedProtocol(proto)}
                className="group p-6 rounded-xl bg-[#1C2420] border border-[#3E6B48]/30 hover:border-[#E06D22]/60 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full hover:shadow-xl hover:shadow-[#E06D22]/5"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-2.5 py-1 rounded bg-[#14281D] border border-[#3E6B48]/40 text-[#E06D22] text-xs font-mono font-bold">
                      {proto.code}
                    </span>
                    <span className="text-[11px] font-mono text-[#F7F5F0]/50 uppercase tracking-wider">
                      {proto.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-[#F7F5F0] mb-3 group-hover:text-[#E06D22] transition-colors">
                    {proto.title}
                  </h3>

                  <p className="text-sm text-[#F7F5F0]/70 font-light leading-relaxed mb-6">
                    {proto.scope}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#3E6B48]/20 flex items-center justify-between text-xs font-mono text-[#E06D22] font-semibold">
                  <span>EXAMINE PROTOCOL</span>
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Protocol Modal */}
      {selectedProtocol && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#1C2420] border border-[#3E6B48] rounded-xl p-6 sm:p-8 shadow-2xl">
            <button
              onClick={() => setSelectedProtocol(null)}
              className="absolute top-4 right-4 text-[#F7F5F0]/60 hover:text-[#E06D22] p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 text-xs font-mono text-[#E06D22] uppercase tracking-wider mb-2">
              <span className="px-2 py-0.5 rounded bg-[#14281D] border border-[#3E6B48]">{selectedProtocol.code}</span>
              <span>{selectedProtocol.category}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#F7F5F0] mb-4">
              {selectedProtocol.title}
            </h3>

            <div className="p-4 rounded-lg bg-[#14281D] border border-[#3E6B48]/40 mb-6">
              <div className="text-xs font-mono text-[#E06D22] uppercase tracking-wider mb-2 font-bold">
                ENGINEERING SPECIFICATION & EXECUTION SCOPE:
              </div>
              <p className="text-sm text-[#F7F5F0]/90 leading-relaxed font-light">
                {selectedProtocol.scope}
              </p>
            </div>

            <div className="space-y-3 mb-6 text-xs text-[#F7F5F0]/70 font-mono">
              <div className="flex justify-between border-b border-[#3E6B48]/20 pb-2">
                <span>DOCUMENTATION DELIVERABLE:</span>
                <span className="text-white font-medium">Standard Operating Procedure & Engineering Sign-Off</span>
              </div>
              <div className="flex justify-between border-b border-[#3E6B48]/20 pb-2">
                <span>INSPECTION CYCLE:</span>
                <span className="text-white font-medium">Milestone + Annual Calibration</span>
              </div>
              <div className="flex justify-between border-b border-[#3E6B48]/20 pb-2">
                <span>STANDARDS APPLIED:</span>
                <span className="text-[#E06D22] font-semibold">EN 15567 / ACCT Standards Alignment</span>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#3E6B48]/30">
              <button
                onClick={() => setSelectedProtocol(null)}
                className="px-4 py-2 text-xs font-mono text-[#F7F5F0]/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Close
              </button>
              <Link
                to="/contact"
                onClick={() => setSelectedProtocol(null)}
                className="px-5 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#c85b18] transition-colors"
              >
                Request Safety Dossier
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Engineering Certificates & Verification Logs */}
      <section className="py-20 border-t border-[#3E6B48]/30 bg-[#0E1C14]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-4">
              VERIFIED AUDIT RECORDS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#F7F5F0]">
              DOCUMENT-STYLE ENGINEERING RECORDS
            </h2>
            <p className="mt-3 text-[#F7F5F0]/70 text-sm md:text-base font-light">
              Every ZIPLINE ASIA installation is supported by formal engineering dossiers, material mill test certifications, and signed commissioning logs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certificatesList.map((cert) => (
              <div
                key={cert.id}
                className="relative rounded-lg p-6 bg-[#14281D] border-2 border-[#3E6B48]/50 shadow-xl flex flex-col justify-between"
                style={{
                  backgroundImage: "radial-gradient(circle at 50% 0%, rgba(62,107,72,0.15) 0%, transparent 70%)"
                }}
              >
                {/* Certificate Border Details */}
                <div className="border border-[#3E6B48]/40 p-5 rounded h-full flex flex-col justify-between relative">
                  {/* Top Seal */}
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#3E6B48]/30 mb-4">
                      <div className="text-[10px] font-mono text-[#E06D22] uppercase tracking-widest font-bold">
                        ZIPLINE ASIA // DOSSIER
                      </div>
                      <div className="px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-[10px] font-mono text-emerald-400 font-bold">
                        {cert.status}
                      </div>
                    </div>

                    <div className="text-xs font-mono text-[#F7F5F0]/50 tracking-wider uppercase mb-1">
                      {cert.type}
                    </div>
                    <h3 className="text-lg font-bold text-[#F7F5F0] mb-2 leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-xs text-[#F7F5F0]/70 font-light mb-4">
                      {cert.issuedFor}
                    </p>
                  </div>

                  {/* Stamp / Code */}
                  <div className="pt-4 border-t border-[#3E6B48]/30 text-[11px] font-mono space-y-1.5">
                    <div className="flex justify-between text-[#F7F5F0]/60">
                      <span>REF CODE:</span>
                      <span className="text-[#E06D22] font-bold">{cert.code}</span>
                    </div>
                    <div className="flex justify-between text-[#F7F5F0]/60">
                      <span>ALIGNMENT:</span>
                      <span className="text-[#F7F5F0] font-medium">{cert.standards}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Safety Consultation Banner */}
      <section className="py-20 border-t border-[#3E6B48]/30 bg-gradient-to-b from-[#14281D] to-[#0A160F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-4">
            COMPLIANCE ADVISORY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F5F0] tracking-tight mb-4">
            REQUIRE A SITE SAFETY AUDIT OR SPECIFICATION DOSSIER?
          </h2>
          <p className="text-base text-[#F7F5F0]/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Our engineering team conducts third-party site audits, non-destructive testing (NDT), structural re-certifications, and annual wire rope inspections for existing adventure installations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#E06D22] text-white text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#c85b18] transition-all duration-300 shadow-lg shadow-[#E06D22]/20"
            >
              REQUEST TECHNICAL CONSULTATION
            </Link>
            <Link
              to="/solutions"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#1C2420] border border-[#3E6B48] text-[#F7F5F0] text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#14281D] hover:border-[#E06D22]/50 transition-all duration-300"
            >
              INSPECT ENGINEERING SERVICES
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
