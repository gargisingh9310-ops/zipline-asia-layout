import React, { useState } from 'react';
import { ShieldCheck, Award, Compass, ArrowUpRight, UserCheck } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { founderData } from '../../data/websiteData';

export default function Founder() {
  const { founder, heading, supportingLine } = founderData;
  const [imageError, setImageError] = useState(false);

  return (
    <section
      id="founder"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#292D2B] canopy-grid-light overflow-hidden border-t border-[#292D2B]/10"
    >
      {/* Subtle Architectural Topography Watermark / Contour Accent */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 pointer-events-none opacity-[0.04]"
        aria-hidden="true"
      >
        <svg viewBox="0 0 400 400" className="w-full h-full text-[#183B2B]" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="200" cy="200" r="180" strokeDasharray="6 6" />
          <circle cx="200" cy="200" r="140" />
          <circle cx="200" cy="200" r="100" strokeDasharray="4 4" />
          <circle cx="200" cy="200" r="60" />
          <line x1="20" y1="200" x2="380" y2="200" strokeDasharray="4 4" />
          <line x1="200" y1="20" x2="200" y2="380" strokeDasharray="4 4" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Section Heading & Eyebrow */}
        <div className="max-w-3xl mb-10 sm:mb-12 space-y-2.5">
          <ScrollReveal animation="fade-up">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B] block">
              {founderData.label}
            </span>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.05}>
            <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#292D2B] leading-[1.1]">
              {heading}
            </h2>
          </ScrollReveal>
          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-base sm:text-lg text-[#183B2B] font-medium leading-relaxed">
              {supportingLine}
            </p>
          </ScrollReveal>
        </div>

        {/* Editorial Split-Screen Design */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          
          {/* Left Column: Large Professional Portrait / Dignified Architectural Placeholder */}
          <div className="lg:col-span-5 relative max-w-xs sm:max-w-sm lg:max-w-none mx-auto lg:mx-0 w-full">
            <ScrollReveal animation="fade-up" delay={0.15}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#292D2B]/15 bg-[#183B2B] group">
                
                {!imageError && founder.portrait ? (
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#183B2B]">
                    <img
                      src={founder.portrait}
                      alt={`${founder.name} - ${founder.designation}`}
                      onError={() => setImageError(true)}
                      className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#183B2B]/90 via-[#183B2B]/25 to-transparent pointer-events-none" />
                  </div>
                ) : (
                  /* Refined Executive Architectural Portrait Placeholder */
                  <div className="relative w-full aspect-[4/5] p-8 flex flex-col justify-between bg-gradient-to-b from-[#1F4735] via-[#183B2B] to-[#122D21] text-white">
                    <div className="flex justify-between items-start">
                      <div className="w-12 h-12 rounded-xl bg-[#183B2B] border border-[#C6A15B]/40 flex items-center justify-center text-[#C6A15B]">
                        <Compass className="w-6 h-6 stroke-[2]" />
                      </div>
                      <span className="text-[10px] font-mono tracking-widest text-[#C6A15B] uppercase font-bold px-2.5 py-1 rounded bg-[#C6A15B]/15 border border-[#C6A15B]/30">
                        LEADERSHIP
                      </span>
                    </div>

                    <div className="space-y-4 my-auto py-6 text-center">
                      <div className="w-24 h-24 mx-auto rounded-full bg-[#292D2B]/80 border-2 border-[#C6A15B]/50 flex items-center justify-center shadow-inner">
                        <UserCheck className="w-10 h-10 text-white/90" />
                      </div>
                      <div className="space-y-1">
                        <h4 className="text-xl font-display font-bold uppercase tracking-tight text-white">
                          {founder.name}
                        </h4>
                        <p className="text-xs font-mono text-[#C6A15B] font-semibold tracking-wider">
                          {founder.designation}
                        </p>
                        <p className="text-[11px] text-white/70 font-mono">
                          {founder.heritage}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-[#C6A15B]/20 flex items-center justify-between text-[11px] font-mono text-white/70">
                      <span>ZIPLINE ASIA TECHNICAL DIRECTION</span>
                      <span className="text-[#C6A15B] font-bold">EST. 1995</span>
                    </div>
                  </div>
                )}

                {/* Overlapping Floating Milestone Badge */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#183B2B]/95 backdrop-blur-md border border-[#C6A15B]/35 text-white shadow-xl flex items-center justify-between">
                  <div className="space-y-0.5">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6A15B] font-bold block">
                      HERITAGE & CREDIBILITY
                    </span>
                    <p className="text-xs font-semibold text-white">
                      30+ Years Commercial Rigging & Systems
                    </p>
                  </div>
                  <div className="text-right font-mono text-xs font-bold text-[#C6A15B] pl-3 border-l border-[#C6A15B]/40">
                    EST. 1995
                  </div>
                </div>

              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Founder Details, Compact Bio, Unified 4-Col Row */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Header / Identity */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="space-y-1.5 pb-4 border-b border-[#292D2B]/10">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#183B2B]">
                  {founder.heritage}
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display font-extrabold text-[#292D2B] tracking-tight uppercase">
                  {founder.name}
                </h3>
                <p className="text-sm sm:text-base font-semibold text-[#C6A15B] font-mono">
                  {founder.designation} • {founder.organization}
                </p>
              </div>
            </ScrollReveal>

            {/* Biography: 2 Compact Paragraphs */}
            <ScrollReveal animation="fade-up" delay={0.25}>
              <div className="space-y-3 text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed max-w-2xl">
                {founder.biography.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* Highlights & Signature Row */}
            <ScrollReveal animation="fade-up" delay={0.3}>
              <div className="pt-4 border-t border-[#292D2B]/10">
                {/* Desktop (lg+): 4 Equal Columns along common baseline */}
                <div className="hidden lg:grid lg:grid-cols-4 gap-5 items-end">
                  {founder.stats.map((stat, idx) => (
                    <div key={idx} className="space-y-1">
                      <span className="text-sm sm:text-base font-mono font-extrabold text-[#292D2B] block tracking-tight">
                        {stat.value}
                      </span>
                      <span className="text-[11px] sm:text-xs text-[#6E7571] leading-tight block">
                        {stat.label}
                      </span>
                    </div>
                  ))}

                  {/* 4th Column: Founder Signature */}
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6A15B] font-semibold block">
                      FOUNDER SIGN-OFF
                    </span>
                    <div className="py-0.5">
                      <svg
                        viewBox="0 0 200 48"
                        className="h-8 w-auto text-[#292D2B] animate-signature"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-label="Satnam Singh Signature"
                      >
                        <path d="M 12 36 C 18 10, 24 8, 30 22 C 34 32, 38 34, 44 20 C 50 12, 54 28, 62 26 C 70 24, 76 20, 84 28 C 90 32, 94 22, 102 24 C 110 26, 120 16, 130 30 C 136 36, 142 20, 150 24 C 158 28, 168 18, 178 22" />
                        <path d="M 38 12 L 48 38" />
                        <path d="M 82 14 L 88 34" strokeWidth="1.5" />
                        <path d="M 8 42 Q 95 38 188 40" stroke="#C6A15B" strokeWidth="1.6" />
                      </svg>
                    </div>
                    <span className="text-[11px] sm:text-xs font-mono font-bold text-[#292D2B] block">
                      {founder.name}
                    </span>
                  </div>
                </div>

                {/* Mobile / Tablet (< lg): 3 Highlights neatly in one row + Signature below */}
                <div className="lg:hidden space-y-4">
                  <div className="grid grid-cols-3 gap-2 sm:gap-4">
                    {founder.stats.map((stat, idx) => (
                      <div key={idx} className="space-y-0.5">
                        <span className="text-xs sm:text-base font-mono font-extrabold text-[#292D2B] block tracking-tight">
                          {stat.value}
                        </span>
                        <span className="text-[10px] sm:text-xs text-[#6E7571] leading-tight block">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Founder Signature cleanly aligned below highlights */}
                  <div className="pt-3 border-t border-[#292D2B]/10 flex items-center justify-between">
                    <div className="space-y-0.5">
                      <span className="text-[10px] font-mono uppercase tracking-widest text-[#C6A15B] font-semibold block">
                        FOUNDER SIGN-OFF
                      </span>
                      <span className="text-xs font-mono font-bold text-[#292D2B] block">
                        {founder.name}
                      </span>
                    </div>
                    <div className="py-0.5">
                      <svg
                        viewBox="0 0 200 48"
                        className="h-7 sm:h-8 w-auto text-[#292D2B] animate-signature"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-label="Satnam Singh Signature"
                      >
                        <path d="M 12 36 C 18 10, 24 8, 30 22 C 34 32, 38 34, 44 20 C 50 12, 54 28, 62 26 C 70 24, 76 20, 84 28 C 90 32, 94 22, 102 24 C 110 26, 120 16, 130 30 C 136 36, 142 20, 150 24 C 158 28, 168 18, 178 22" />
                        <path d="M 38 12 L 48 38" />
                        <path d="M 82 14 L 88 34" strokeWidth="1.5" />
                        <path d="M 8 42 Q 95 38 188 40" stroke="#C6A15B" strokeWidth="1.6" />
                      </svg>
                    </div>
                  </div>
                </div>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
}
