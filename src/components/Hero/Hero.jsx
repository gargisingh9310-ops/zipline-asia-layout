import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { heroData } from '../../data/websiteData';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const metricsRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return;

      // 1. Initial entrance timeline on page load with responsive smooth staggered reveals
      const isMobile = window.innerWidth < 768;
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        headlineRef.current,
        { opacity: 0, y: isMobile ? 14 : 20 },
        { opacity: 1, y: 0, duration: isMobile ? 0.65 : 0.8 },
        0.08
      );
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: isMobile ? 12 : 16 },
        { opacity: 1, y: 0, duration: isMobile ? 0.55 : 0.7 },
        isMobile ? 0.2 : 0.25
      );
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: isMobile ? 10 : 14 },
        { opacity: 1, y: 0, duration: isMobile ? 0.5 : 0.6 },
        isMobile ? 0.32 : 0.4
      );
      tl.fromTo(
        metricsRef.current,
        { opacity: 0, y: isMobile ? 12 : 16 },
        { opacity: 1, y: 0, duration: isMobile ? 0.55 : 0.7 },
        isMobile ? 0.44 : 0.55
      );

      // 2. Full-screen scroll pinning with responsive duration
      const mm = gsap.matchMedia();

      // Desktop: preserve exact 75% scroll duration
      mm.add("(min-width: 768px)", () => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          end: '+=75%',
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });

      // Mobile: comfortable 40% duration so mobile touch swipe remains effortless
      mm.add("(max-width: 767px)", () => {
        ScrollTrigger.create({
          trigger: el,
          start: 'top top',
          end: '+=40%',
          pin: true,
          pinSpacing: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        });
      });
    }, el);

    return () => ctx.revert();
  }, []);

  const handleScrollClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative h-[100svh] min-h-[100vh] w-full flex flex-col justify-between pt-16 sm:pt-24 lg:pt-28 pb-3 sm:pb-6 bg-[#183B2B] text-white overflow-hidden"
    >
      {/* Full-Width Background Cinematic Forest Canopy & Mountain Zipline Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-[center_35%] sm:object-center"
        >
          <source src="/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Subtle, Natural Forest Green & Charcoal Overlay */}
        <div className="absolute inset-0 bg-[#183B2B]/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#183B2B]/85 via-[#183B2B]/45 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183B2B]/80 via-transparent to-[#292D2B]/35" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto">
        <div className="max-w-3xl space-y-3.5 sm:space-y-5">
          
          {/* Main Heading: Controlled Max-Width, Perfectly Balanced Responsive Size */}
          <h1
            ref={headlineRef}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold tracking-tight text-white leading-[1.14] drop-shadow-[0_2px_12px_rgba(41,45,43,0.7)]"
          >
            Engineering Experiences.{' '}
            <span className="text-[#C6A15B]">
              Building Adventures.
            </span>
          </h1>

          {/* Supporting Text */}
          <p
            ref={descRef}
            className="text-xs sm:text-sm md:text-base text-[#FFFFFF]/95 font-normal leading-relaxed max-w-2xl drop-shadow-[0_1px_8px_rgba(41,45,43,0.6)]"
          >
            {heroData.supportingText}
          </p>

          {/* Action Buttons: Gold CTA + Clean White Border Secondary */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            <a
              href={heroData.primaryCTA.href}
              onClick={(e) => handleScrollClick(e, heroData.primaryCTA.href)}
              className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[#C6A15B] text-[#292D2B] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:text-white hover:shadow-glow-gold hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 shadow-md text-center cursor-pointer"
            >
              <span>{heroData.primaryCTA.label}</span>
              <ArrowUpRight className="w-4 h-4 text-[#292D2B] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            <a
              href={heroData.secondaryCTA.href}
              onClick={(e) => handleScrollClick(e, heroData.secondaryCTA.href)}
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-white/5 backdrop-blur-sm text-white border border-[#FFFFFF]/40 text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-[#C6A15B] hover:text-[#C6A15B] hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 text-center cursor-pointer"
            >
              <span>{heroData.secondaryCTA.label}</span>
            </a>
          </div>

        </div>
      </div>

      {/* Bottom Telemetry Metrics Strip & Scroll Indicator */}
      <div ref={metricsRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-2 sm:pt-6">
        <div className="pt-3 sm:pt-5 border-t border-[#C6A15B]/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          
          {/* Engineering Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 w-full md:w-auto">
            {heroData.metrics.map((item, idx) => (
              <div key={idx} className="flex sm:flex-col items-baseline sm:items-start justify-between sm:justify-start gap-2 sm:gap-0.5 border-b sm:border-b-0 border-[#C6A15B]/20 pb-1 sm:pb-0 last:border-b-0">
                <div className="text-[10px] font-mono uppercase tracking-wider block font-bold shrink-0">
                  <span className="text-[#C6A15B]">// 0{idx + 1}</span>{' '}
                  <span className="text-[#FFFFFF]/85">{item.label}</span>
                </div>
                <span className="text-xs sm:text-sm font-semibold text-white block drop-shadow-[0_1px_4px_rgba(41,45,43,0.6)]">
                  {item.value}
                </span>
              </div>
            ))}
          </div>

          {/* Minimal Scroll Down Cue */}
          <a
            href="#about"
            onClick={(e) => handleScrollClick(e, '#about')}
            className="hidden md:flex items-center gap-2 text-xs font-mono text-[#FFFFFF]/80 hover:text-[#C6A15B] uppercase tracking-widest transition-colors select-none"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C6A15B] animate-bounce" />
          </a>

        </div>
      </div>

    </section>
  );
}
