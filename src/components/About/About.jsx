import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ShieldCheck, MapPin, Wrench } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { aboutData } from '../../data/websiteData';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const iconList = [ShieldCheck, Wrench, MapPin];
  const imageContainerRef = useRef(null);

  // Top-to-bottom scroll-triggered image reveal animation (image stays stationary)
  useEffect(() => {
    const el = imageContainerRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        gsap.set(el, { clipPath: 'inset(0% 0% 0% 0%)' });
        return;
      }

      const isMobile = window.innerWidth < 768;

      gsap.fromTo(
        el,
        { clipPath: 'inset(0% 0% 100% 0%)' },
        {
          clipPath: 'inset(0% 0% 0% 0%)',
          duration: isMobile ? 1.05 : 1.35,
          ease: 'power3.inOut',
          scrollTrigger: {
            trigger: el,
            start: isMobile ? 'top 88%' : 'top 82%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Editorial Split Composition (No Boxy Cards) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Refined Typography & Horizontal Pillar Strip */}
          <div className="lg:col-span-6 space-y-5">
            <ScrollReveal animation="fade-up">
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#1C2420] leading-[1.1]">
                {aboutData.heading}
              </h2>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-base sm:text-lg text-[#3E6B48] font-semibold leading-relaxed">
                {aboutData.supportingText}
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.15}>
              <div className="space-y-3 text-xs sm:text-sm text-[#525E57] font-normal leading-relaxed">
                {aboutData.description.slice(0, 2).map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </ScrollReveal>

            {/* Clean Typographic Pillar Row (No Cards!) */}
            <ScrollReveal animation="fade-up" delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 pb-2 border-y border-[#1C2420]/10">
                {aboutData.pillars.map((item, idx) => {
                  const Icon = iconList[idx] || ShieldCheck;
                  return (
                    <div key={idx} className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[#3E6B48]">
                        <Icon className="w-4 h-4 stroke-[2]" />
                        <span className="text-[11px] font-mono font-bold uppercase tracking-wider">
                          0{idx + 1}
                        </span>
                      </div>
                      <h3 className="text-xs font-bold text-[#1C2420] uppercase tracking-tight leading-tight">
                        {item.title}
                      </h3>
                      <p className="text-[11px] text-[#525E57] leading-relaxed line-clamp-3">
                        {item.detail}
                      </p>
                    </div>
                  );
                })}
              </div>
            </ScrollReveal>

            {/* Small Elegant Text-based CTA in Terracotta Orange */}
            <ScrollReveal animation="fade-up" delay={0.25}>
              <div className="pt-2">
                <a
                  href={aboutData.ctaHref}
                  className="group inline-flex items-center gap-2 text-xs sm:text-sm font-mono font-bold uppercase tracking-wider text-[#E06D22] hover:text-[#C85B17] active:scale-95 transition-all py-1 select-none cursor-pointer"
                >
                  <span className="relative">
                    {aboutData.ctaText}
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#E06D22] group-hover:w-full transition-all duration-300 ease-out" />
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#E06D22] transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-active:translate-x-1.5 group-active:-translate-y-1.5" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Architectural Visual with Top-to-Bottom Scroll Reveal */}
          <div className="lg:col-span-6 relative">
            <div
              ref={imageContainerRef}
              className="relative w-full rounded-2xl overflow-hidden shadow-2xl border border-[#1C2420]/10 bg-[#14281D]"
              style={{ clipPath: 'inset(0% 0% 0% 0%)' }}
            >
              <img
                src={aboutData.image}
                alt="ZIPLINE ASIA Engineered Commercial Zipline Launch Tower & Mountain Cable System"
                className="w-full h-[280px] sm:h-[400px] lg:h-[500px] object-cover object-center"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
