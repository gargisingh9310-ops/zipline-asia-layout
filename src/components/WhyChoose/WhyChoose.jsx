import React from 'react';
import { ArrowUpRight, ShieldCheck, Compass, Layers, Wrench, Workflow, Building2 } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { whyChooseData } from '../../data/websiteData';

export default function WhyChoose() {
  const icons = [Compass, Layers, ShieldCheck, Wrench, Workflow, Building2];
  const capabilities = Array.isArray(whyChooseData?.capabilities) ? whyChooseData.capabilities : [];

  return (
    <section
      id="why-choose"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Asymmetric Editorial Composition (No Bulky Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* Left Column (col-span-5): Bold Editorial Heading & Value Proposition */}
          <div className="lg:col-span-5 space-y-6">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block mb-2">
                {whyChooseData?.label || "WHY CHOOSE APS"}
              </span>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#1C2420] leading-[1.08]">
                {whyChooseData?.heading || "ONE PARTNER. COMPLETE ADVENTURE INFRASTRUCTURE."}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-sm sm:text-base text-[#525E57] font-normal leading-relaxed">
                {whyChooseData?.supportingText || "Developing an adventure destination requires multidisciplinary coordination. Adventure Park Solutions brings together engineering precision, equipment manufacturing, and turnkey project delivery."}
              </p>
            </ScrollReveal>

            {/* B2B Engineering Benchmarks */}
            <ScrollReveal animation="fade-up" delay={0.15}>
              <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#1C2420]/10">
                <div className="space-y-1">
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#E06D22] block">
                    12 : 1
                  </span>
                  <span className="text-xs text-[#525E57] font-medium leading-tight block">
                    Commercial Rigging Safety Factor
                  </span>
                </div>

                <div className="space-y-1">
                  <span className="text-xl sm:text-2xl font-mono font-extrabold text-[#3E6B48] block">
                    100%
                  </span>
                  <span className="text-xs text-[#525E57] font-medium leading-tight block">
                    Turnkey Single-Source Delivery
                  </span>
                </div>
              </div>
            </ScrollReveal>

            {/* Direct Consultation Link */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-[#E06D22] text-white text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all duration-200 shadow-md w-full sm:w-auto text-center"
              >
                <span>INITIATE PROJECT DISCUSSION</span>
                <ArrowUpRight className="w-4 h-4 text-white" />
              </a>
            </ScrollReveal>
          </div>

          {/* Right Column (col-span-7): Clean 2-Column Numbered Capability Matrix with Hairline Dividers */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6">
            {capabilities.map((cap, idx) => {
              const Icon = icons[idx] || ShieldCheck;
              return (
                <ScrollReveal
                  key={cap?.title || idx}
                  animation="fade-up"
                  delay={0.05 * idx}
                  className="space-y-2 pb-5 border-b border-[#1C2420]/15 group"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono font-bold text-[#3E6B48]">
                      CAPABILITY // 0{idx + 1}
                    </span>
                    <Icon className="w-4 h-4 text-[#3E6B48] group-hover:text-[#E06D22] transition-colors" />
                  </div>

                  <h3 className="text-base font-display font-bold text-[#1C2420] uppercase tracking-tight group-hover:text-[#3E6B48] transition-colors">
                    {cap?.title}
                  </h3>

                  <p className="text-xs text-[#525E57] font-normal leading-relaxed">
                    {cap?.description}
                  </p>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
