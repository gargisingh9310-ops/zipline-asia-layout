import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { solutionsData } from '../../data/websiteData';

export default function Solutions() {
  const servicesList = Array.isArray(solutionsData?.services)
    ? solutionsData.services
    : Array.isArray(solutionsData?.items)
    ? solutionsData.items
    : [];

  // Mobile Slider State & Touch/Pointer Drag Handling
  const [activeSlide, setActiveSlide] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const startXRef = useRef(0);
  const currentXRef = useRef(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const media = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(media.matches);

      const handleChange = (e) => setPrefersReducedMotion(e.matches);
      media.addEventListener('change', handleChange);
      return () => media.removeEventListener('change', handleChange);
    }
  }, []);

  const handlePointerDown = (e) => {
    if (window.innerWidth >= 640) return;
    startXRef.current = e.clientX;
    currentXRef.current = e.clientX;
    setIsDragging(true);
    setDragOffset(0);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const handlePointerMove = (e) => {
    if (!isDragging) return;
    currentXRef.current = e.clientX;
    const diff = currentXRef.current - startXRef.current;

    // Resistance when dragging beyond boundaries
    if ((activeSlide === 0 && diff > 0) || (activeSlide === servicesList.length - 1 && diff < 0)) {
      setDragOffset(diff * 0.3);
    } else {
      setDragOffset(diff);
    }
  };

  const handlePointerUp = (e) => {
    if (!isDragging) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    setIsDragging(false);
    const diff = currentXRef.current - startXRef.current;
    const threshold = 40;

    if (diff < -threshold && activeSlide < servicesList.length - 1) {
      setActiveSlide((prev) => prev + 1);
    } else if (diff > threshold && activeSlide > 0) {
      setActiveSlide((prev) => prev - 1);
    }
    setDragOffset(0);
  };

  const handlePointerCancel = () => {
    setIsDragging(false);
    setDragOffset(0);
  };

  const handlePrev = () => {
    setActiveSlide((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => Math.min(servicesList.length - 1, prev + 1));
  };

  return (
    <section
      id="solutions"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header: Compact & Purposeful */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-8 border-b border-[#1C2420]/10">
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                {solutionsData?.label || "OUR SOLUTIONS & SERVICES"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-[#1C2420] leading-[1.08]">
                {solutionsData?.heading || "COMPLETE SOLUTIONS. LIMITLESS POSSIBILITIES."}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#525E57] max-w-md font-normal leading-relaxed">
              <strong className="text-[#14281D] block mb-1 font-semibold">{solutionsData?.mainMessage}</strong>
              {solutionsData?.supportingText}
            </p>
          </ScrollReveal>
        </div>

        {/* Mobile View (< 640px): 1 Card at a Time Horizontal Swipeable Slider */}
        <ScrollReveal animation="fade-up" delay={0.15} className="block sm:hidden">
          <div
            className="w-full overflow-hidden touch-pan-y select-none"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
          >
            <div
              className="flex will-change-transform"
              style={{
                transform: `translateX(calc(-${activeSlide * 100}% + ${dragOffset}px))`,
                transition: isDragging || prefersReducedMotion
                  ? 'none'
                  : 'transform 0.35s cubic-bezier(0.25, 1, 0.5, 1)',
              }}
            >
              {servicesList.map((service, idx) => (
                <div
                  key={service?.id || idx}
                  className="w-full shrink-0"
                >
                  <div className="flex flex-col justify-between rounded-xl overflow-hidden bg-white border border-[#1C2420]/10 shadow-sm h-full group touch-card">
                    <div>
                      {/* Image Area */}
                      <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#14281D]">
                        <img
                          src={service?.image || '/images/hero-zipline.jpg'}
                          alt={service?.title || 'Adventure Park Solutions Service'}
                          className="w-full h-full object-cover pointer-events-none transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                        <span className="absolute bottom-2.5 left-3 text-[11px] font-mono font-bold text-white tracking-wider">
                          {service?.number} // {service?.subtitle?.split('&')[0]?.trim()}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="p-4 sm:p-5">
                        <h3 className="text-base font-display font-bold text-[#1C2420] uppercase tracking-tight mb-2 leading-snug group-hover:text-[#3E6B48] transition-colors">
                          {service?.title}
                        </h3>

                        <p className="text-xs text-[#525E57] font-normal leading-relaxed line-clamp-2 mb-3">
                          {service?.description}
                        </p>

                        {/* 2 Key Feature Tags */}
                        {Array.isArray(service?.features) && service.features.length > 0 && (
                          <div className="space-y-1 pt-2 border-t border-[#1C2420]/5 text-[11px] text-[#525E57]">
                            {service.features.slice(0, 2).map((f, i) => (
                              <div key={i} className="flex items-center gap-1.5 truncate">
                                <span className="text-[#3E6B48] font-bold">—</span>
                                <span className="truncate">{f}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom Action Link */}
                    <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-[#1C2420]/5 mt-auto">
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#1C2420] hover:text-[#E06D22] active:text-[#E06D22] transition-colors"
                      >
                        <span>INQUIRE SPECS</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#E06D22]" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Slider Controls: Counter + Dots + Arrows */}
          <div className="flex items-center justify-between pt-4 mt-3 border-t border-[#1C2420]/10">
            {/* Slide Counter */}
            <span className="text-xs font-mono font-bold text-[#525E57] tracking-wider">
              <span className="text-[#E06D22]">0{activeSlide + 1}</span> / 0{servicesList.length}
            </span>

            {/* Pagination Dots */}
            <div className="flex items-center gap-1.5">
              {servicesList.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to solution slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer active:scale-75 ${
                    activeSlide === idx
                      ? 'w-5 bg-[#E06D22]'
                      : 'w-1.5 bg-[#1C2420]/20 hover:bg-[#1C2420]/40'
                  }`}
                />
              ))}
            </div>

            {/* Previous & Next Controls */}
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={handlePrev}
                disabled={activeSlide === 0}
                aria-label="Previous solution card"
                className={`w-8 h-8 rounded-lg border border-[#1C2420]/15 flex items-center justify-center transition-all ${
                  activeSlide === 0
                    ? 'opacity-30 cursor-not-allowed text-[#1C2420]'
                    : 'text-[#1C2420] hover:text-[#E06D22] hover:border-[#E06D22] active:scale-90 bg-white cursor-pointer active:bg-[#F7F5F0]'
                }`}
              >
                <ChevronLeft className="w-4 h-4" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                disabled={activeSlide === servicesList.length - 1}
                aria-label="Next solution card"
                className={`w-8 h-8 rounded-lg border border-[#1C2420]/15 flex items-center justify-center transition-all ${
                  activeSlide === servicesList.length - 1
                    ? 'opacity-30 cursor-not-allowed text-[#1C2420]'
                    : 'text-[#1C2420] hover:text-[#E06D22] hover:border-[#E06D22] active:scale-90 bg-white cursor-pointer active:bg-[#F7F5F0]'
                }`}
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Desktop & Tablet: Exactly Preserved 4-Column Grid Layout (sm:grid) */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {servicesList.map((service, idx) => (
            <ScrollReveal
              key={service?.id || idx}
              animation="fade-up"
              delay={0.04 * idx}
              className="group flex flex-col justify-between rounded-xl overflow-hidden bg-white border border-[#1C2420]/10 hover:border-[#3E6B48] hover:shadow-card-sand hover:-translate-y-1.5 transition-all duration-300"
            >
              <div>
                {/* Balanced Image Size */}
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#14281D]">
                  <img
                    src={service?.image || '/images/hero-zipline.jpg'}
                    alt={service?.title || 'Adventure Park Solutions Service'}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                  <span className="absolute bottom-2 left-3 text-[11px] font-mono font-bold text-white tracking-wider">
                    {service?.number} // {service?.subtitle?.split('&')[0]?.trim()}
                  </span>
                </div>

                {/* Compact Content */}
                <div className="p-4 sm:p-5">
                  <h3 className="text-base font-display font-bold text-[#1C2420] uppercase tracking-tight mb-2 group-hover:text-[#3E6B48] transition-colors leading-snug">
                    {service?.title}
                  </h3>

                  <p className="text-xs text-[#525E57] font-normal leading-relaxed line-clamp-2 mb-3">
                    {service?.description}
                  </p>

                  {/* 2 Key Feature Tags */}
                  {Array.isArray(service?.features) && service.features.length > 0 && (
                    <div className="space-y-1 pt-2 border-t border-[#1C2420]/5 text-[11px] text-[#525E57]">
                      {service.features.slice(0, 2).map((f, i) => (
                        <div key={i} className="flex items-center gap-1.5 truncate">
                          <span className="text-[#3E6B48] font-bold">—</span>
                          <span className="truncate">{f}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Minimal Bottom Action Link */}
              <div className="px-4 sm:px-5 pb-4 pt-2 border-t border-[#1C2420]/5 mt-auto">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase tracking-wider text-[#1C2420] group-hover:text-[#E06D22] transition-colors"
                >
                  <span>INQUIRE SPECS</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#E06D22] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
