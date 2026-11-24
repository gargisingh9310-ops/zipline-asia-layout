import React from 'react';
import { ArrowUpRight, ShieldCheck, FileCheck, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { safetyData } from '../../data/websiteData';

export default function Certifications() {
  const { protocols, heading, supportingLine, label } = safetyData;

  return (
    <section
      id="safety"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden border-t border-[#1C2420]/10"
    >
      {/* Anchor compatibility for old #certifications link */}
      <span id="certifications" className="absolute -top-20" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 space-y-2.5">
          <ScrollReveal animation="fade-up">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
              {label || "SAFETY, ENGINEERING & QUALITY"}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.05}>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#14281D] leading-[1.1]">
              {heading || "ENGINEERING RIGOR. UNCOMPROMISING SAFETY."}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-sm sm:text-base text-[#525E57] font-normal leading-relaxed max-w-2xl">
              {supportingLine || "Every adventure attraction is developed with uncompromising attention to structural integrity, material quality control, verified proof-load testing, and operational discipline."}
            </p>
          </ScrollReveal>
        </div>

        {/* Safety & Quality Protocols Gallery: Clean Framed Engineering Specification Documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {protocols.map((proto, idx) => (
            <ScrollReveal key={proto.id || idx} animation="zoom-in" delay={0.05 * idx}>
              <div className="group flex flex-col h-full mx-auto w-full">
                
                {/* Engineering Protocol Document Frame */}
                <div className="relative w-full min-h-[290px] bg-white rounded-lg p-3 sm:p-3.5 border border-[#1C2420]/15 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden">
                  
                  {/* Clean Authentic Architectural Document-Style Specification */}
                  <div className="relative w-full h-full bg-[#FAF9F6] border border-[#1C2420]/15 rounded p-4 sm:p-5 flex flex-col justify-between select-none">
                    
                    {/* Inner Inset Border */}
                    <div className="absolute inset-1.5 border border-[#1C2420]/10 pointer-events-none rounded-sm" />

                    {/* Engineering Corner Registration Marks */}
                    <span className="absolute top-2 left-2 text-[#1C2420]/30 font-mono text-[9px] leading-none select-none">+</span>
                    <span className="absolute top-2 right-2 text-[#1C2420]/30 font-mono text-[9px] leading-none select-none">+</span>
                    <span className="absolute bottom-2 left-2 text-[#1C2420]/30 font-mono text-[9px] leading-none select-none">+</span>
                    <span className="absolute bottom-2 right-2 text-[#1C2420]/30 font-mono text-[9px] leading-none select-none">+</span>

                    {/* Document Header */}
                    <div className="relative z-10 pt-0.5 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-[#E06D22] font-bold">
                          QUALITY PROTOCOL // 0{idx + 1}
                        </span>
                        <span className="text-[9px] font-mono text-[#525E57] font-semibold">
                          {proto.code}
                        </span>
                      </div>
                      <div className="h-px w-full bg-[#1C2420]/10" />
                    </div>

                    {/* Document Center: Clean Typographic Standard Title & Scope */}
                    <div className="space-y-2.5 my-auto py-3 relative z-10">
                      <div className="w-9 h-9 rounded-full border border-[#1C2420]/15 flex items-center justify-center bg-white shadow-2xs">
                        <FileCheck className="w-4 h-4 text-[#3E6B48]" strokeWidth={1.75} />
                      </div>
                      <div className="space-y-1">
                        <span className="text-xs font-mono font-bold text-[#E06D22] block tracking-wider">
                          {proto.code}
                        </span>
                        <h3 className="text-base font-display uppercase tracking-wide text-[#1C2420] font-bold leading-tight">
                          {proto.title}
                        </h3>
                      </div>
                      <p className="text-xs text-[#525E57] leading-relaxed">
                        {proto.scope}
                      </p>
                    </div>

                    {/* Document Footer: Verifiable Standard Reference */}
                    <div className="pt-2 border-t border-[#1C2420]/10 relative z-10 space-y-0.5">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#3E6B48] font-bold block truncate">
                        {proto.category}
                      </span>
                      <span className="text-[8.5px] font-mono text-[#1C2420]/50 block">
                        APS TECHNICAL SPECIFICATION
                      </span>
                    </div>

                  </div>

                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Direct Action Link */}
        <div className="mt-10 sm:mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#E06D22] hover:text-[#C85B17] transition-colors py-2"
          >
            <span>REQUEST SAFETY & ENGINEERING COMPLIANCE DOSSIER</span>
            <ArrowUpRight className="w-4 h-4 text-[#E06D22]" />
          </a>
        </div>

      </div>
    </section>
  );
}
