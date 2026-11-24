import React from 'react';
import { 
  Building2, 
  Compass, 
  FerrisWheel, 
  Home, 
  GraduationCap, 
  Shield, 
  ShoppingBag, 
  TreePine, 
  Landmark, 
  Users, 
  ArrowUpRight 
} from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { industriesData } from '../../data/websiteData';

export default function Industries() {
  const iconMap = [
    Building2,
    Compass,
    FerrisWheel,
    Home,
    GraduationCap,
    Shield,
    ShoppingBag,
    TreePine,
    Landmark,
    Users
  ];

  const industriesList = Array.isArray(industriesData?.industries) ? industriesData.industries : [];

  return (
    <section
      id="industries"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden border-t border-[#1C2420]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-[#1C2420]/15">
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                {industriesData?.label || "SECTOR EXPERTISE"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#1C2420] leading-[1.08]">
                {industriesData?.heading || "INDUSTRIES WE SERVE."}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#525E57] max-w-md font-normal leading-relaxed">
              {industriesData?.supportingText || "We engineer customized adventure and recreational infrastructure for diverse client sectors — delivering destinations that drive footfall, engagement, and sustainable returns."}
            </p>
          </ScrollReveal>
        </div>

        {/* 10 Industry Sectors: 2-Column Responsive Grid with Hairline Dividers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {industriesList.map((item, idx) => {
            const Icon = iconMap[idx] || Building2;

            return (
              <ScrollReveal
                key={item?.id || idx}
                animation="fade-up"
                delay={0.04 * idx}
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 border border-transparent hover:border-[#1C2420]/10 transition-all duration-300 pb-5 border-b border-[#1C2420]/10"
              >
                {/* Icon Badge */}
                <div className="w-11 h-11 rounded-lg bg-white border border-[#1C2420]/15 flex items-center justify-center text-[#3E6B48] group-hover:text-[#E06D22] group-hover:border-[#E06D22]/40 transition-colors shrink-0 shadow-2xs mt-0.5">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#3E6B48]">
                      SECTOR // 0{idx + 1}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E06D22] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight text-[#1C2420] group-hover:text-[#3E6B48] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#525E57] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#1C2420]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#525E57] text-center sm:text-left">
            Need customized adventure infrastructure tailored to your sector?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-md"
          >
            <span>DISCUSS YOUR SECTOR REQUIREMENTS</span>
            <ArrowUpRight className="w-4 h-4 text-white" />
          </a>
        </div>

      </div>
    </section>
  );
}
