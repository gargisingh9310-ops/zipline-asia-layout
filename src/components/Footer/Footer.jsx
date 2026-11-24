import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUp, ArrowUpRight } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { brandData, footerData } from '../../data/websiteData';

export default function Footer() {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative w-full bg-[#14281D] text-white pt-16 sm:pt-20 pb-10 sm:pb-12 border-t border-[#3E6B48]/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 sm:pb-16 border-b border-[#3E6B48]/30">
          
          {/* Brand Col (Cols 1-4) */}
          <ScrollReveal animation="fade-up" className="lg:col-span-4 space-y-5 sm:space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="font-display font-extrabold text-xl sm:text-2xl tracking-[0.16em] sm:tracking-[0.2em] text-white uppercase">
                  {brandData.name}
                </span>
                <span className="w-2.5 h-2.5 rounded-full bg-[#E06D22] shadow-[0_0_10px_#E06D22]" />
              </div>
              <span className="text-xs font-mono tracking-widest text-[#E06D22] uppercase block font-semibold">
                {footerData.tagline}
              </span>
            </div>

            <p className="text-sm text-[#F7F5F0]/80 leading-relaxed font-normal max-w-sm">
              {footerData.intro}
            </p>

            <div className="pt-2 space-y-1">
              <span className="text-xs font-mono text-[#F7F5F0]/90 uppercase tracking-wider font-semibold block">
                {footerData.positioning}
              </span>
              <p className="text-[11px] font-mono text-[#E06D22] tracking-wide">
                {footerData.closingMessage}
              </p>
            </div>
          </ScrollReveal>

          {/* Quick Links (Cols 5-6) */}
          <ScrollReveal animation="fade-up" delay={0.06} className="lg:col-span-2 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E06D22] font-bold block">
              Navigation
            </span>
            <ul className="space-y-2.5">
              {footerData.navLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-sm text-[#F7F5F0]/80 hover:text-white transition-colors font-medium hover:translate-x-0.5 inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Solutions Links (Cols 7-9) */}
          <ScrollReveal animation="fade-up" delay={0.12} className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E06D22] font-bold block">
              Verified Solutions
            </span>
            <ul className="space-y-2.5">
              {footerData.solutionsLinks.map((item, idx) => (
                <li key={idx}>
                  <Link
                    to={item.href}
                    className="text-xs sm:text-sm text-[#F7F5F0]/80 hover:text-[#E06D22] transition-colors flex items-center gap-1 group font-medium"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#E06D22]" />
                  </Link>
                </li>
              ))}
            </ul>
          </ScrollReveal>

          {/* Commercial Inquiries Box (Cols 10-12) */}
          <ScrollReveal animation="fade-up" delay={0.18} className="lg:col-span-3 space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E06D22] font-bold block">
              Project Consultation
            </span>
            <div className="p-5 rounded-xl bg-[#193325] border border-[#3E6B48]/40 space-y-3 shadow-lg">
              <span className="text-white font-display font-bold block text-sm uppercase">
                B2B Developer Inquiries
              </span>
              <p className="text-xs text-[#F7F5F0]/80 leading-relaxed font-normal">
                Direct turnkey coordination for hotel management groups, luxury resorts, theme parks, and commercial operators.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#E06D22] hover:text-white transition-colors pt-1 cursor-pointer"
              >
                <span>INITIATE PROPOSAL</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#E06D22]" />
              </Link>
            </div>
          </ScrollReveal>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-[#F7F5F0]/60 gap-4">
          <p className="text-center sm:text-left">
            {footerData.copyright}
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-2 text-[#F7F5F0]/80 hover:text-[#E06D22] transition-colors select-none group cursor-pointer"
          >
            <span className="font-bold">BACK TO TOP</span>
            <div className="w-8 h-8 rounded-full bg-[#193325] border border-[#3E6B48]/40 flex items-center justify-center group-hover:bg-[#E06D22] group-hover:text-white group-hover:border-[#E06D22] transition-all shadow-sm">
              <ArrowUp className="w-4 h-4 text-[#F7F5F0] group-hover:text-white" />
            </div>
          </button>
        </div>

      </div>
    </footer>
  );
}
