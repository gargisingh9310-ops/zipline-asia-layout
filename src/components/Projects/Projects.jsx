import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ArrowUpRight, Play, Pause } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { projectsData } from '../../data/websiteData';

export default function Projects() {
  const originalProjects = Array.isArray(projectsData?.projects) && projectsData.projects.length > 0
    ? projectsData.projects
    : (projectsData?.environments || []);
  
  const totalOriginal = originalProjects.length;

  // Tripled array for seamless infinite looping
  const infiniteProjects = [...originalProjects, ...originalProjects, ...originalProjects];
  const startIndex = totalOriginal; // Start centered on the middle set

  const [currentIndex, setCurrentIndex] = useState(startIndex);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Layout metrics
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const [cardWidth, setCardWidth] = useState(300);
  const [gapWidth, setGapWidth] = useState(20);

  // Drag / Swipe pointer interaction state
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const hasMovedRef = useRef(false);
  const [dragOffset, setDragOffset] = useState(0);

  // Calculate card and step dimensions based on viewport size
  const updateDimensions = useCallback(() => {
    if (!viewportRef.current) return;
    const clientWidth = viewportRef.current.clientWidth;
    if (clientWidth <= 0) return;

    let visibleCards = 4;
    let gap = 20;

    if (window.innerWidth < 640) {
      // Mobile: show exactly one card at a time
      visibleCards = 1;
      gap = 16;
    } else if (window.innerWidth < 1024) {
      // Tablet: Exactly 2 cards visible
      visibleCards = 2;
      gap = 20;
    } else {
      // Desktop: Exactly 4 cards visible
      visibleCards = 4;
      gap = 20;
    }

    setGapWidth(gap);
    const calculatedWidth = (clientWidth - (Math.floor(visibleCards) - 1) * gap) / visibleCards;
    setCardWidth(calculatedWidth);
  }, []);

  useEffect(() => {
    updateDimensions();

    const ro = new ResizeObserver(() => {
      updateDimensions();
    });

    if (viewportRef.current) {
      ro.observe(viewportRef.current);
    }

    window.addEventListener('resize', updateDimensions);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', updateDimensions);
    };
  }, [updateDimensions]);

  const stepSize = cardWidth + gapWidth;

  // Navigation handlers
  const handleNext = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  }, []);

  const handlePrev = useCallback(() => {
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  }, []);

  // Jump to specific dot index
  const handleDotClick = (dotIdx) => {
    setIsTransitioning(true);
    setCurrentIndex(startIndex + dotIdx);
  };

  // Seamless Infinite Loop Wrapping
  const handleTransitionEnd = (e) => {
    // Crucial: Only react to transitions on the track element itself, not bubbling child transitions
    if (e.target !== trackRef.current) return;

    if (currentIndex >= totalOriginal * 2) {
      // Reached the end clone: snap back to middle set seamlessly
      setIsTransitioning(false);
      const targetIndex = currentIndex - totalOriginal;
      setCurrentIndex(targetIndex);

      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translate3d(-${targetIndex * stepSize}px, 0, 0)`;
        void trackRef.current.offsetHeight; // Force DOM reflow
      }
    } else if (currentIndex < totalOriginal) {
      // Reached the start clone: snap forward to middle set seamlessly
      setIsTransitioning(false);
      const targetIndex = currentIndex + totalOriginal;
      setCurrentIndex(targetIndex);

      if (trackRef.current) {
        trackRef.current.style.transition = 'none';
        trackRef.current.style.transform = `translate3d(-${targetIndex * stepSize}px, 0, 0)`;
        void trackRef.current.offsetHeight; // Force DOM reflow
      }
    }
  };

  // Restore transition capability after silent snap
  useEffect(() => {
    if (!isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(true);
      }, 40);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Autoplay timer: pauses strictly when hovering over carousel cards or dragging
  useEffect(() => {
    if (!isAutoPlaying || isHovered || isDraggingRef.current) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, handleNext]);

  // Pointer Drag & Touch Swipe Handlers (Works smoothly on both Mobile and Desktop)
  const handlePointerDown = (e) => {
    // Only accept left mouse button (0) or touch/pen
    if (e.button && e.button !== 0) return;
    isDraggingRef.current = true;
    hasMovedRef.current = false;
    dragStartXRef.current = e.clientX;
    setDragOffset(0);

    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch (_) {}
  };

  const handlePointerMove = (e) => {
    if (!isDraggingRef.current) return;
    const diff = e.clientX - dragStartXRef.current;
    if (Math.abs(diff) > 5) {
      hasMovedRef.current = true;
    }
    setDragOffset(diff);
  };

  const handlePointerUp = (e) => {
    if (!isDraggingRef.current) return;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch (_) {}

    isDraggingRef.current = false;
    const finalOffset = dragOffset;
    setDragOffset(0);

    const swipeThreshold = 45;
    if (finalOffset < -swipeThreshold) {
      handleNext();
    } else if (finalOffset > swipeThreshold) {
      handlePrev();
    }
  };

  const handlePointerCancel = () => {
    isDraggingRef.current = false;
    setDragOffset(0);
  };

  // Prevent accidental link clicking during a drag gesture
  const handleLinkClick = (e) => {
    if (hasMovedRef.current) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  // Active original project index for pagination indicators (0 to 7)
  const activeDotIndex = ((currentIndex % totalOriginal) + totalOriginal) % totalOriginal;
  const currentTranslateX = -(currentIndex * stepSize) + dragOffset;

  return (
    <section
      id="projects"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#14281D] text-white canopy-grid-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header with Carousel Navigation & Pagination Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 mb-10 border-b border-[#3E6B48]/30">
          
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                {projectsData?.label || "PROJECTS & CAPABILITIES"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-white leading-[1.08]">
                {projectsData?.heading || "Adventure Infrastructure Designed for Remarkable Destinations"}
              </h2>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.1}>
              <p className="text-sm sm:text-base text-[#F7F5F0]/80 font-normal leading-relaxed">
                {projectsData?.supportingText || "Explore adventure installations, engineered structures and destination-focused infrastructure."}
              </p>
            </ScrollReveal>
          </div>

          {/* Navigation Controls: Autoplay Toggle + Counter + Previous / Next */}
          <div className="flex items-center gap-3 sm:gap-4 shrink-0 justify-between md:justify-end w-full md:w-auto">
            
            {/* Project Index Counter */}
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#F7F5F0]/80 tracking-widest">
              <span className="text-[#E06D22]">0{activeDotIndex + 1}</span>
              <span className="text-[#3E6B48]">/</span>
              <span>0{totalOriginal}</span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-2">
              {/* Auto-Play Toggle Button */}
              <button
                type="button"
                onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#193325] border border-[#3E6B48]/40 hover:border-[#E06D22] text-[#F7F5F0]/80 hover:text-white flex items-center justify-center transition-all cursor-pointer hover:-translate-y-0.5 active:translate-y-0"
                aria-label={isAutoPlaying ? "Pause automatic slide rotation" : "Resume automatic slide rotation"}
                title={isAutoPlaying ? "Pause carousel" : "Resume carousel"}
              >
                {isAutoPlaying ? <Pause className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Play className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-0.5" />}
              </button>

              {/* Previous & Next Buttons */}
              <button
                type="button"
                onClick={handlePrev}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#193325] border border-[#3E6B48]/40 hover:border-[#E06D22] text-white flex items-center justify-center transition-all cursor-pointer hover:bg-[#1D382A] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Previous project slide"
              >
                <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              <button
                type="button"
                onClick={handleNext}
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#193325] border border-[#3E6B48]/40 hover:border-[#E06D22] text-white flex items-center justify-center transition-all cursor-pointer hover:bg-[#1D382A] hover:-translate-y-0.5 active:translate-y-0"
                aria-label="Next project slide"
              >
                <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Infinite Carousel Viewport with Hover Pause and Touch Pan */}
      <div 
        className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 lg:px-12"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div
          ref={viewportRef}
          className="w-full overflow-hidden touch-pan-y select-none cursor-grab active:cursor-grabbing"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
        >
          <div
            ref={trackRef}
            className="flex items-stretch will-change-transform"
            style={{
              transform: `translate3d(${currentTranslateX}px, 0, 0)`,
              transition: isTransitioning && !isDraggingRef.current
                ? 'transform 0.55s cubic-bezier(0.25, 1, 0.5, 1)'
                : 'none',
              gap: `${gapWidth}px`
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {infiniteProjects.map((project, idx) => (
              <div
                key={`${project.id || idx}-${idx}`}
                style={{
                  width: `${cardWidth}px`,
                  minWidth: `${cardWidth}px`
                }}
                className="shrink-0 group"
              >
                {/* Curved Card Container */}
                <div className="relative h-full rounded-[1.75rem] overflow-hidden bg-[#193325] border border-[#3E6B48]/40 hover:border-[#E06D22] transition-all duration-300 shadow-card-pine flex flex-col justify-between hover:-translate-y-1.5">
                  
                  {/* Landscape Project Image Area with Zoom Hover */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#14281D]">
                    <img
                      src={project.image}
                      alt={project.title}
                      draggable={false}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none"
                      loading="lazy"
                    />

                    {/* Gradient Protection */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14281D] via-[#14281D]/30 to-transparent pointer-events-none" />

                    {/* Top Pill / Badge Tag */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded-md bg-[#14281D]/85 backdrop-blur-md text-[#E06D22] border border-[#E06D22]/30 shadow-sm">
                        {project.category}
                      </span>
                      <span className="text-[9px] font-mono uppercase tracking-widest text-[#F7F5F0]/70 px-2 py-0.5 rounded bg-black/40 backdrop-blur-sm">
                        TYPOLOGY
                      </span>
                    </div>

                    {/* Technical Spec Tag Over Image */}
                    {project.specs && (
                      <div className="absolute bottom-3 left-3.5 right-3.5 pointer-events-none">
                        <span className="text-[10px] font-mono text-[#F7F5F0]/85 tracking-wider block drop-shadow-sm font-semibold truncate">
                          {project.specs}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Compact Caption & Title Area */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3 bg-[#193325]/90">
                    <div className="space-y-1.5">
                      <h3 className="text-sm sm:text-base font-display font-bold uppercase tracking-tight text-white leading-snug group-hover:text-[#E06D22] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      <p className="text-xs text-[#F7F5F0]/75 line-clamp-2 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Card Footer: Transparent Capability Badge & Inquire Link */}
                    <div className="pt-3 border-t border-[#3E6B48]/30 flex items-center justify-between">
                      <span className="text-[10px] font-mono uppercase text-[#3E6B48] font-bold tracking-wide">
                        {project.badge || "CAPABILITY CONCEPT"}
                      </span>
                      <a
                        href="#contact"
                        onClick={handleLinkClick}
                        className="inline-flex items-center gap-1 text-[11px] font-mono font-bold uppercase text-[#E06D22] hover:text-[#C85B17] tracking-wider transition-colors group/link"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                      </a>
                    </div>

                  </div>

                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Pagination Dot Indicators & Category Quick Filter */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 mt-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-[#3E6B48]/20">
          
          {/* Transparent Disclaimer */}
          <p className="text-[11px] font-mono text-[#F7F5F0]/60 text-center sm:text-left">
            {projectsData?.disclaimer || "Representative adventure infrastructure concepts illustrating engineered typologies for commercial destinations."}
          </p>

          {/* Pagination Dots (Clickable) */}
          <div className="flex items-center gap-1.5">
            {originalProjects.map((_, dotIdx) => (
              <button
                key={dotIdx}
                type="button"
                onClick={() => handleDotClick(dotIdx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeDotIndex === dotIdx
                    ? 'w-7 bg-[#E06D22]'
                    : 'w-2 bg-[#3E6B48]/50 hover:bg-[#3E6B48]'
                }`}
                aria-label={`Jump to project ${dotIdx + 1}`}
              />
            ))}
          </div>

        </div>
      </div>

    </section>
  );
}
