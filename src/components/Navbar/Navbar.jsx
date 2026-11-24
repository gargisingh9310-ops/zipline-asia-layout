import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { brandData } from '../../data/websiteData';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Home', fullLabel: 'Home', href: '/' },
    { label: 'About', fullLabel: 'About Us', href: '/about' },
    { label: 'Solutions', fullLabel: 'Our Solutions', href: '/solutions' },
    { label: 'Attractions', fullLabel: 'Adventure Attractions', href: '/attractions' },
    { label: 'Industries', fullLabel: 'Industries We Serve', href: '/industries' },
    { label: 'Projects', fullLabel: 'Projects & Portfolio', href: '/projects' },
    { label: 'Safety', fullLabel: 'Safety & Engineering', href: '/safety' },
    { label: 'Knowledge', fullLabel: 'Knowledge Hub', href: '/knowledge-hub' },
    { label: 'Contact', fullLabel: 'Contact Us', href: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#183B2B]/95 backdrop-blur-md border-b border-[#C6A15B]/20 py-3 sm:py-3.5 shadow-card-pine'
          : 'bg-[#183B2B]/75 sm:bg-transparent backdrop-blur-sm sm:backdrop-blur-none py-4 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 flex items-center justify-between">
        
        {/* Left: Typographic Wordmark with Gold Accent */}
        <Link
          to="/"
          className="flex items-center gap-2 group select-none shrink-0"
        >
          <span className="font-display font-extrabold text-base sm:text-lg tracking-[0.15em] sm:tracking-[0.2em] text-white uppercase group-hover:text-[#FFFFFF] transition-colors">
            {brandData.name}
          </span>
          <span className="w-2 sm:w-2.5 h-2 sm:h-2.5 rounded-full bg-[#C6A15B] shadow-[0_0_8px_#C6A15B]" />
        </Link>

        {/* Center: Desktop Navigation Links with Gold Active Indicator */}
        <nav className="hidden lg:flex items-center gap-3 xl:gap-5">
          {navLinks.map((link) => (
            <NavLink
              key={link.href}
              to={link.href}
              end={link.href === '/'}
              className={({ isActive }) =>
                `text-[11px] xl:text-xs uppercase tracking-wider transition-colors relative py-1.5 whitespace-nowrap group ${
                  isActive
                    ? 'text-[#C6A15B] font-bold'
                    : 'text-[#FFFFFF]/85 hover:text-[#C6A15B] font-semibold'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span>{link.label}</span>
                  {isActive ? (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#C6A15B] rounded-full" />
                  ) : (
                    <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C6A15B] group-hover:w-full transition-all duration-200" />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Right CTA Button in Gold */}
        <div className="flex items-center gap-3 sm:gap-4 shrink-0">
          <Link
            to="/contact"
            className="group hidden sm:inline-flex items-center gap-2 px-3.5 sm:px-4.5 py-2.5 rounded-md bg-[#C6A15B] text-[#292D2B] text-[11px] sm:text-xs font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:text-white hover:shadow-glow-gold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md whitespace-nowrap"
          >
            <span>REQUEST A PROPOSAL</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#292D2B] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle navigation menu"
            className="lg:hidden p-2 rounded-lg text-white hover:text-[#C6A15B] hover:bg-white/10 transition-colors cursor-pointer"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6 text-white" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Backdrop & Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] sm:top-[68px] z-50 flex flex-col">
          {/* Charcoal Blurred Backdrop */}
          <div
            className="absolute inset-0 bg-[#292D2B]/80 backdrop-blur-sm animate-fade-in"
            onClick={() => setIsMobileMenuOpen(false)}
          />

          {/* Slide-Down Menu Sheet */}
          <div className="relative bg-[#183B2B] border-b border-[#C6A15B]/30 px-6 py-6 shadow-2xl animate-fade-up max-h-[calc(100vh-70px)] overflow-y-auto">
            <div className="flex flex-col space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.href}
                  to={link.href}
                  end={link.href === '/'}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-wider py-3 px-3 border-b border-white/10 rounded-md transition-colors block ${
                      isActive
                        ? 'text-[#C6A15B] font-bold bg-[#1F4735] border-l-4 border-l-[#C6A15B]'
                        : 'text-white hover:text-[#C6A15B] font-semibold active:bg-white/5'
                    }`
                  }
                >
                  {link.fullLabel}
                </NavLink>
              ))}
              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-md bg-[#C6A15B] text-[#292D2B] text-xs font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:text-white shadow-md"
                >
                  <span>REQUEST A PROJECT PROPOSAL</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
