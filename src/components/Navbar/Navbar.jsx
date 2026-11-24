import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { brandData } from '../../data/websiteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { label: 'Home', fullLabel: 'Home', href: '#hero' },
    { label: 'About', fullLabel: 'About Us', href: '#about' },
    { label: 'Solutions', fullLabel: 'Our Solutions', href: '#solutions' },
    { label: 'Attractions', fullLabel: 'Adventure Attractions', href: '#products' },
    { label: 'Industries', fullLabel: 'Industries We Serve', href: '#industries' },
    { label: 'Projects', fullLabel: 'Projects & Portfolio', href: '#projects' },
    { label: 'Safety', fullLabel: 'Safety & Engineering', href: '#safety' },
    { label: 'Knowledge', fullLabel: 'Knowledge Hub', href: '#knowledge' },
    { label: 'Contact', fullLabel: 'Contact Us', href: '#contact' },
  ];

  const handleLinkClick = (e, href) => {
    setIsMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      if (window.lenis) {
        window.lenis.scrollTo(target);
      } else {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#14281D]/95 backdrop-blur-md border-b border-[#3E6B48]/30 py-3.5 shadow-card-pine'
          : 'bg-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Forest Canopy Typographic Wordmark with Terracotta Accent */}
        <a
          href="#hero"
          onClick={(e) => handleLinkClick(e, '#hero')}
          className="flex items-center gap-2 group select-none shrink-0"
        >
          <span className="font-display font-extrabold text-base sm:text-xl tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase group-hover:text-[#F7F5F0] transition-colors">
            {brandData.name}
          </span>
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#E06D22] shadow-[0_0_8px_#E06D22]" />
        </a>

        {/* Center: Desktop Navigation Links in Warm Sand with Terracotta Hover */}
        <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#F7F5F0]/90 hover:text-[#E06D22] transition-colors relative py-1 terracotta-hover-line whitespace-nowrap"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA Button in Terracotta with White Text */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <a
            href="#contact"
            onClick={(e) => handleLinkClick(e, '#contact')}
            className="group hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-2.5 rounded-md bg-[#E06D22] text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md whitespace-nowrap"
          >
            <span>REQUEST A PROPOSAL</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-white/90 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-[#F7F5F0] hover:text-[#E06D22] hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] sm:top-[68px] z-50 flex flex-col">
          {/* Dark Blurred Backdrop */}
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-Down Menu Sheet */}
          <div className="relative bg-[#14281D] border-b border-[#3E6B48]/30 px-6 py-6 shadow-2xl animate-fade-up max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className="text-sm font-semibold uppercase tracking-wider text-[#F7F5F0] hover:text-[#E06D22] active:text-[#E06D22] py-3 px-2 border-b border-white/5 active:bg-white/5 rounded-md transition-colors block"
                >
                  {link.fullLabel}
                </a>
              ))}
              <div className="pt-4">
                <a
                  href="#contact"
                  onClick={(e) => handleLinkClick(e, '#contact')}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-md bg-[#E06D22] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#C85B17] active:bg-[#C85B17] shadow-md"
                >
                  <span>REQUEST A PROJECT PROPOSAL</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
