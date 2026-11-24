import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight, ArrowDown, ChevronRight } from 'lucide-react';

export default function PageHero({
  eyebrow = "ZIPLINE ASIA",
  title = "Commercial Adventure Infrastructure",
  highlightText,
  subtitle = "Specialised adventure engineering, rigging calculations, and turnkey destination development.",
  bgImage = "/images/hero-zipline.jpg",
  breadcrumbs = [],
  primaryCTA = { label: "REQUEST A PROPOSAL", href: "/contact" },
  secondaryCTA = { label: "EXPLORE SOLUTIONS", href: "/solutions" },
  metrics = [
    { label: "Engineering Scope", value: "Turnkey 100%" },
    { label: "Safety Standard", value: "EN / ACCT Aligned" },
    { label: "Technical Legacy", value: "30+ Years" }
  ],
  scrollTargetId = "page-content"
}) {
  const heroRef = useRef(null);
  const headlineRef = useRef(null);
  const descRef = useRef(null);
  const ctaRef = useRef(null);
  const metricsRef = useRef(null);
  const bgImgRef = useRef(null);

  useEffect(() => {
    const el = heroRef.current;
    if (!el) return;

    let ctx;
    const rafId = requestAnimationFrame(() => {
      ctx = gsap.context(() => {
        const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        if (prefersReduced) return;

        const isMobile = window.innerWidth < 768;
        const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

        // Subtle background image slow zoom
        if (bgImgRef.current) {
          gsap.fromTo(
            bgImgRef.current,
            { scale: 1.08 },
            { scale: 1, duration: 2.2, ease: 'power2.out' }
          );
        }

        // Staggered text reveals matching homepage Hero
        tl.fromTo(
          headlineRef.current,
          { opacity: 0, y: isMobile ? 16 : 24 },
          { opacity: 1, y: 0, duration: isMobile ? 0.7 : 0.85 },
          0.05
        );
        tl.fromTo(
          descRef.current,
          { opacity: 0, y: isMobile ? 12 : 18 },
          { opacity: 1, y: 0, duration: isMobile ? 0.6 : 0.75 },
          isMobile ? 0.2 : 0.25
        );
        tl.fromTo(
          ctaRef.current,
          { opacity: 0, y: isMobile ? 10 : 16 },
          { opacity: 1, y: 0, duration: isMobile ? 0.5 : 0.65 },
          isMobile ? 0.35 : 0.4
        );
        tl.fromTo(
          metricsRef.current,
          { opacity: 0, y: isMobile ? 12 : 16 },
          { opacity: 1, y: 0, duration: isMobile ? 0.55 : 0.7 },
          isMobile ? 0.45 : 0.55
        );
      }, el);
    });

    return () => {
      cancelAnimationFrame(rafId);
      if (ctx) ctx.revert();
    };
  }, [title, highlightText]);

  const handleScrollDown = (e) => {
    e.preventDefault();
    const target = document.getElementById(scrollTargetId);
    if (target) {
      if (window.lenis) {
        window.lenis.scrollTo(target, { offset: -60, duration: 1.2 });
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative h-[100svh] min-h-[100vh] w-full flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-4 sm:pb-8 bg-[#183B2B] text-white overflow-hidden select-none"
    >
      {/* Background Cinematic Visual with Subtle Natural Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <img
          ref={bgImgRef}
          src={bgImage}
          alt={title}
          className="w-full h-full object-cover object-center will-change-transform"
        />

        {/* Natural balanced overlays in Forest Green and Charcoal */}
        <div className="absolute inset-0 bg-[#183B2B]/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#183B2B]/90 via-[#183B2B]/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#183B2B]/85 via-transparent to-[#292D2B]/35" />
      </div>

      {/* Main Hero Content Area */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full my-auto">
        <div className="max-w-3xl space-y-4 sm:space-y-5">
          
          {/* Breadcrumb Navigation */}
          {breadcrumbs.length > 0 && (
            <div className="flex items-center gap-2 text-xs font-mono text-[#FFFFFF]/80">
              <Link to="/" className="hover:text-[#C6A15B] transition-colors">
                HOME
              </Link>
              {breadcrumbs.map((crumb, idx) => (
                <React.Fragment key={idx}>
                  <ChevronRight className="w-3 h-3 text-[#C6A15B]/70" />
                  {crumb.href ? (
                    <Link to={crumb.href} className="hover:text-[#C6A15B] transition-colors">
                      {crumb.label.toUpperCase()}
                    </Link>
                  ) : (
                    <span className="text-[#C6A15B] font-semibold">{crumb.label.toUpperCase()}</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          )}

          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#183B2B]/85 backdrop-blur-md border border-[#C6A15B]/30 text-[#C6A15B] text-xs font-mono font-bold tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] animate-pulse" />
            <span>{eyebrow}</span>
          </div>

          {/* Main Headline */}
          <h1
            ref={headlineRef}
            className="text-2xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold tracking-tight text-white leading-[1.12] drop-shadow-[0_2px_12px_rgba(41,45,43,0.7)]"
          >
            {title}{' '}
            {highlightText && (
              <span className="text-[#C6A15B] block sm:inline">
                {highlightText}
              </span>
            )}
          </h1>

          {/* Subtitle / Supporting Text */}
          <p
            ref={descRef}
            className="text-xs sm:text-sm md:text-base text-[#FFFFFF]/90 font-normal leading-relaxed max-w-2xl drop-shadow-[0_1px_6px_rgba(41,45,43,0.6)]"
          >
            {subtitle}
          </p>

          {/* Action CTAs: Gold Primary + White/Translucent Secondary */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 pt-1 sm:pt-2 w-full sm:w-auto"
          >
            {primaryCTA && (
              <Link
                to={primaryCTA.href}
                className="group inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-[#C6A15B] text-[#292D2B] text-xs sm:text-sm font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:text-white hover:shadow-glow-gold hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 shadow-md text-center"
              >
                <span>{primaryCTA.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#292D2B] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            )}

            {secondaryCTA && (
              <Link
                to={secondaryCTA.href}
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3 sm:py-3.5 rounded-md bg-white/5 backdrop-blur-sm text-white border border-[#FFFFFF]/40 text-xs sm:text-sm font-bold uppercase tracking-wider hover:border-[#C6A15B] hover:text-[#C6A15B] hover:bg-white/10 hover:-translate-y-0.5 active:scale-[0.97] transition-all duration-200 text-center"
              >
                <span>{secondaryCTA.label}</span>
              </Link>
            )}
          </div>

        </div>
      </div>

      {/* Bottom Telemetry Metrics Strip & Scroll Down Cue */}
      <div ref={metricsRef} className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 w-full pt-2 sm:pt-4">
        <div className="pt-3 sm:pt-5 border-t border-[#C6A15B]/25 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
          
          {/* Engineering Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-8 w-full md:w-auto">
              {metrics.map((item, idx) => (
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
          )}

          {/* Minimal Scroll Down Cue */}
          <button
            onClick={handleScrollDown}
            className="hidden md:flex items-center gap-2 text-xs font-mono text-[#FFFFFF]/80 hover:text-[#C6A15B] uppercase tracking-widest transition-colors select-none cursor-pointer"
          >
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 text-[#C6A15B] animate-bounce" />
          </button>

        </div>
      </div>
    </section>
  );
}
