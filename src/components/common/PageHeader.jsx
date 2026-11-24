import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';

export default function PageHeader({
  badge = "ZIPLINE ASIA",
  title,
  subtitle,
  breadcrumbs = [],
  ctaText,
  ctaHref = "/contact",
  stats = []
}) {
  return (
    <section className="relative w-full pt-28 sm:pt-36 pb-12 sm:pb-20 bg-[#14281D] text-white canopy-grid-dark overflow-hidden border-b border-[#3E6B48]/30">
      {/* Subtle Natural Contour / Radial Atmosphere */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#14281D]/80 via-transparent to-[#14281D] pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#3E6B48]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-[#E06D22]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#F7F5F0]/60 mb-6">
          <Link to="/" className="hover:text-[#E06D22] transition-colors">
            HOME
          </Link>
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              <ChevronRight className="w-3 h-3 text-[#3E6B48]" />
              {crumb.href ? (
                <Link to={crumb.href} className="hover:text-[#E06D22] transition-colors">
                  {crumb.label.toUpperCase()}
                </Link>
              ) : (
                <span className="text-[#E06D22] font-semibold">{crumb.label.toUpperCase()}</span>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Header Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          
          <div className="lg:col-span-8 space-y-3.5">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                {badge}
              </span>
            </ScrollReveal>

            <ScrollReveal animation="fade-up" delay={0.05}>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-display font-extrabold tracking-tight text-white leading-[1.12]">
                {title}
              </h1>
            </ScrollReveal>

            {subtitle && (
              <ScrollReveal animation="fade-up" delay={0.1}>
                <p className="text-sm sm:text-base md:text-lg text-[#F7F5F0]/85 font-normal leading-relaxed max-w-2xl">
                  {subtitle}
                </p>
              </ScrollReveal>
            )}
          </div>

          {/* Right Action / CTA Area */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-between gap-4">
            {ctaText && (
              <ScrollReveal animation="fade-up" delay={0.15}>
                <Link
                  to={ctaHref}
                  className="group inline-flex items-center gap-2.5 px-6 py-3.5 rounded-md bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta hover:-translate-y-0.5 active:translate-y-0 transition-all shadow-md"
                >
                  <span>{ctaText}</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </ScrollReveal>
            )}

            {stats.length > 0 && (
              <ScrollReveal animation="fade-up" delay={0.2} className="w-full lg:w-auto">
                <div className="flex items-center gap-6 pt-3 border-t lg:border-t-0 border-[#3E6B48]/30">
                  {stats.map((s, idx) => (
                    <div key={idx} className="space-y-0.5">
                      <span className="text-lg sm:text-xl font-mono font-bold text-[#E06D22] block">
                        {s.value}
                      </span>
                      <span className="text-[10px] font-mono uppercase text-[#F7F5F0]/70 block tracking-wider">
                        {s.label}
                      </span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
