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
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#292D2B] canopy-grid-light overflow-hidden border-t border-[#292D2B]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-[#292D2B]/15">
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B] block">
                {industriesData?.label || "SECTOR EXPERTISE"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#292D2B] leading-[1.08]">
                {industriesData?.heading || "INDUSTRIES WE SERVE."}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#6E7571] max-w-md font-normal leading-relaxed">
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
                className="group flex items-start gap-4 p-4 rounded-xl hover:bg-white/80 border border-transparent hover:border-[#292D2B]/10 transition-all duration-300 pb-5 border-b border-[#292D2B]/10"
              >
                {/* Icon Badge */}
                <div className="w-11 h-11 rounded-lg bg-white border border-[#292D2B]/15 flex items-center justify-center text-[#183B2B] group-hover:text-[#C6A15B] group-hover:border-[#C6A15B]/40 transition-colors shrink-0 shadow-2xs mt-0.5">
                  <Icon className="w-5 h-5 stroke-[2]" />
                </div>

                <div className="space-y-1 flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#C6A15B]">
                      SECTOR // 0{idx + 1}
                    </span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B] opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-base sm:text-lg font-display font-bold uppercase tracking-tight text-[#292D2B] group-hover:text-[#C6A15B] transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-[13px] text-[#6E7571] font-normal leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Bottom Consultation CTA */}
        <div className="mt-10 sm:mt-12 pt-6 border-t border-[#292D2B]/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-mono text-[#6E7571] text-center sm:text-left">
            Need customized adventure infrastructure tailored to your sector?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#C6A15B] text-[#292D2B] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:text-white hover:shadow-glow-gold transition-all shadow-md"
          >
            <span>DISCUSS YOUR SECTOR REQUIREMENTS</span>
            <ArrowUpRight className="w-4 h-4 text-current" />
          </a>
        </div>

      </div>
    </section>
  );
}
