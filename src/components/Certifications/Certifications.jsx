import React from 'react';
import { ArrowUpRight, FileCheck, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { certificationsData } from '../../data/websiteData';

export default function Certifications() {
  const { credentials, heading, supportingLine, dossierNote } = certificationsData;

  return (
    <section
      id="certifications"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden border-t border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-14 space-y-2.5">
          <ScrollReveal animation="fade-up">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
              {certificationsData.label}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.05}>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#14281D] leading-[1.1]">
              {heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-sm sm:text-base text-[#525E57] font-normal leading-relaxed max-w-2xl">
              {supportingLine}
            </p>
          </ScrollReveal>
        </div>

        {/* Certificate Documents Gallery: 4 Clean Framed Documents */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {credentials.map((cert, idx) => (
            <ScrollReveal key={cert.id} animation="zoom-in" delay={0.08 * idx}>
              <div className="group flex flex-col h-full max-w-xs sm:max-w-none mx-auto w-full">
                
                {/* Certificate Document Frame */}
                <div className="relative w-full aspect-[3/4] bg-white rounded-lg p-3 sm:p-3.5 border border-[#1C2420]/15 shadow-sm group-hover:shadow-md transition-shadow duration-300 flex flex-col justify-between overflow-hidden">
                  
                  {cert.image ? (
                    /* Actual Certificate Document Image (if provided) */
                    <div className="w-full h-full flex items-center justify-center overflow-hidden bg-[#FAF9F5]">
                      <img
                        src={cert.image}
                        alt={`${cert.code} - ${cert.title}`}
                        className="w-full h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ) : (
                    /* Clean Authentic Architectural Document-Style Specification */
                    <div className="relative w-full h-full bg-[#FAF9F6] border border-[#1C2420]/15 rounded p-3.5 sm:p-4 flex flex-col justify-between select-none">
                      
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
                            STANDARD NORM
                          </span>
                          <span className="text-[9px] font-mono text-[#525E57]">
                            {cert.id.toUpperCase()}
                          </span>
                        </div>
                        <div className="h-px w-full bg-[#1C2420]/10" />
                      </div>

                      {/* Document Center: Clean Typographic Standard Title */}
                      <div className="space-y-2 text-center my-auto py-2 relative z-10">
                        <div className="w-9 h-9 mx-auto rounded-full border border-[#1C2420]/15 flex items-center justify-center bg-white shadow-2xs">
                          <FileCheck className="w-4 h-4 text-[#3E6B48]" strokeWidth={1.75} />
                        </div>
                        <div className="space-y-0.5">
                          <span className="text-xs sm:text-sm font-mono font-bold text-[#14281D] block tracking-tight">
                            {cert.code}
                          </span>
                          <p className="text-[10.5px] font-display uppercase tracking-wide text-[#1C2420] font-bold max-w-[190px] mx-auto leading-tight">
                            {cert.title}
                          </p>
                        </div>
                        <p className="text-[9.5px] font-mono text-[#525E57] max-w-[180px] mx-auto leading-snug">
                          {cert.authority}
                        </p>
                      </div>

                      {/* Document Footer: Verifiable Standard Reference */}
                      <div className="pt-2 border-t border-[#1C2420]/10 relative z-10 space-y-0.5 text-center">
                        <span className="text-[9px] font-mono uppercase tracking-wider text-[#3E6B48] font-bold block truncate">
                          {cert.standard}
                        </span>
                        <span className="text-[8.5px] font-mono text-[#1C2420]/50 block">
                          TECHNICAL DOSSIER SPECIFICATION
                        </span>
                      </div>

                    </div>
                  )}

                </div>

                {/* Small Certificate Title & Description Below Document */}
                <div className="mt-3.5 space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#E06D22]">
                      {cert.code}
                    </span>
                    <span className="text-[9px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#1C2420]/5 text-[#3E6B48] font-bold">
                      VERIFIED
                    </span>
                  </div>
                  <h3 className="text-sm font-display font-bold text-[#14281D] leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-[#525E57] leading-relaxed line-clamp-2">
                    {cert.scope}
                  </p>
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Subtle Engineering Dossier Compliance Note */}
        <ScrollReveal animation="fade-up" delay={0.35}>
          <div className="mt-12 pt-6 border-t border-[#1C2420]/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-xs font-mono text-[#525E57] leading-relaxed max-w-3xl">
              {dossierNote}
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#14281D] hover:text-[#E06D22] transition-colors uppercase tracking-wider shrink-0"
            >
              <span>REQUEST TECHNICAL DOSSIER</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#E06D22]" />
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
