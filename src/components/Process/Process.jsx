import React from 'react';
import { Compass, Layers, Wrench, CheckCircle2, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { processData } from '../../data/websiteData';

export default function Process() {
  const stepIcons = [Compass, Layers, Wrench, CheckCircle2];
  const steps = Array.isArray(processData?.steps) ? processData.steps : [];

  return (
    <section
      id="process"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">

        {/* Section Header: Compact & Purposeful */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-[#1C2420]/15">
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                {processData?.label || "OUR APPROACH"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#1C2420] leading-[1.08]">
                {processData?.heading || "FROM FIRST IDEA TO REAL-WORLD EXPERIENCE."}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#525E57] max-w-md font-normal leading-relaxed">
              {processData?.supportingText || "Our structured project methodology ensures structural precision, commercial safety, and transparent execution."}
            </p>
          </ScrollReveal>
        </div>

        {/* Continuous Streamlined Timeline Pipeline (No Bulky Cards) */}
        <div className="relative">

          {/* Continuous Connecting Track Rail (Desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[50px] right-[50px] h-[2px] bg-gradient-to-r from-[#3E6B48] via-[#E06D22] to-[#3E6B48] z-0 opacity-40" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {steps.map((item, idx) => {
              const Icon = stepIcons[idx] || Compass;

              return (
                <ScrollReveal
                  key={item?.step || idx}
                  animation="fade-up"
                  delay={0.07 * idx}
                  className="space-y-3 group"
                >
                  {/* Milestone Node Header */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#3E6B48] text-[#3E6B48] flex items-center justify-center font-bold text-sm shadow-md group-hover:border-[#E06D22] group-hover:text-[#E06D22] transition-colors relative z-10">
                      <Icon className="w-6 h-6 stroke-[2]" />
                    </div>

                    <span className="font-mono text-2xl font-extrabold text-[#1C2420]/30 group-hover:text-[#E06D22] transition-colors">
                      {item?.step}
                    </span>
                  </div>

                  {/* Phase Details */}
                  <div className="space-y-1 pt-1">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#3E6B48] block">
                      PHASE // {item?.phase}
                    </span>

                    <h3 className="text-base font-display font-extrabold text-[#1C2420] uppercase tracking-tight group-hover:text-[#E06D22] transition-colors">
                      {item?.title}
                    </h3>

                    <p className="text-xs text-[#525E57] font-normal leading-relaxed">
                      {item?.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
