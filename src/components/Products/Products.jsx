import React, { useState } from 'react';
import { ArrowUpRight, Eye, X } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { productsData } from '../../data/websiteData';

export default function Products() {
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const productList = Array.isArray(productsData?.products) ? productsData.products : [];
  const activeProduct = productList[activeProductIndex] || productList[0];

  return (
    <section
      id="products"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#14281D] text-white canopy-grid-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-[#3E6B48]/30">
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                {productsData?.label || "ENGINEERED PRODUCTS"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-white leading-[1.08]">
                {productsData?.heading || "ENGINEERED SYSTEMS. EXTRAORDINARY EXPERIENCES."}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#F7F5F0]/80 max-w-md font-normal leading-relaxed">
              {productsData?.supportingText || "Commercial-grade adventure systems, specialized rigging hardware, and high-tensile attraction equipment built for continuous destination operation."}
            </p>
          </ScrollReveal>
        </div>

        {/* 50/50 Equal-Column Layout: Left (50%) List, Right (50%) Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: 50% Width — Spacious & Readable Product Selection List */}
          <div className="w-full rounded-2xl bg-[#193325]/40 border border-[#3E6B48]/30 p-5 sm:p-7 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between pb-4 mb-3 border-b border-[#3E6B48]/20">
                <span className="text-xs font-mono uppercase tracking-widest text-[#E06D22] font-bold">
                  AVAILABLE HARDWARE & SYSTEMS
                </span>
                <span className="text-xs font-mono text-[#F7F5F0]/60">
                  0{activeProductIndex + 1} / 0{productList.length}
                </span>
              </div>

              {/* Vertical Spacious Product Items */}
              <div className="space-y-3">
                {productList.map((product, idx) => {
                  const isActive = activeProductIndex === idx;

                  return (
                    <button
                      key={product?.id || idx}
                      type="button"
                      onClick={() => setActiveProductIndex(idx)}
                      className={`w-full text-left transition-all duration-300 cursor-pointer select-none rounded-xl py-3.5 sm:py-4.5 px-3.5 sm:px-5 flex items-center justify-between group border-b border-[#3E6B48]/20 last:border-b-0 active:scale-[0.98] ${
                        isActive
                          ? 'bg-[#193325] text-white border-l-4 border-[#E06D22] shadow-card-pine'
                          : 'bg-transparent text-[#F7F5F0]/70 hover:text-white hover:bg-white/[0.03] border-l-4 border-transparent hover:translate-x-1'
                      }`}
                    >
                      <div className="flex items-center gap-4 min-w-0">
                        <span className={`text-xs sm:text-sm font-mono font-bold tracking-wider shrink-0 transition-colors ${isActive ? 'text-[#E06D22]' : 'text-[#3E6B48] group-hover:text-[#E06D22]'}`}>
                          0{idx + 1}
                        </span>
                        <div className="space-y-1 min-w-0">
                          <h4 className={`text-base sm:text-lg lg:text-[19px] font-display uppercase tracking-tight truncate transition-colors ${isActive ? 'font-semibold text-white' : 'font-medium text-[#F7F5F0]/80 group-hover:text-white'}`}>
                            {product?.name}
                          </h4>
                          <span className={`text-[11px] font-mono uppercase block truncate transition-colors ${isActive ? 'text-[#E06D22]/90 font-medium' : 'text-[#A9B8C5]/70 group-hover:text-[#A9B8C5]'}`}>
                            {product?.category} // {product?.model}
                          </span>
                        </div>
                      </div>

                      <ArrowUpRight className={`w-4 h-4 shrink-0 ml-3 transition-all duration-300 ${
                        isActive
                          ? 'text-[#E06D22] translate-x-0.5 -translate-y-0.5 opacity-100'
                          : 'text-[#3E6B48] opacity-0 group-hover:opacity-100 group-hover:text-[#E06D22]'
                      }`} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-[#3E6B48]/20 flex items-center justify-between text-[11px] font-mono text-[#F7F5F0]/60">
              <span>SELECT AN ITEM TO VIEW SPECIFICATIONS</span>
              <span className="text-[#3E6B48] font-bold">CLICK TO INSPECT</span>
            </div>
          </div>

          {/* Right Column: 50% Width — Selected Product Showcase */}
          {activeProduct && (
            <div
              key={activeProduct.id}
              className="w-full rounded-2xl bg-[#193325]/90 border border-[#3E6B48]/40 p-5 sm:p-7 space-y-5 shadow-2xl flex flex-col justify-between animate-product-swap"
            >
              <div>
                {/* Large, Visually Prominent Product Image */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#14281D] border border-[#3E6B48]/30 shadow-inner mb-5 group">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/80 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#14281D]/90 backdrop-blur-md text-[#E06D22] border border-[#E06D22]/30 shadow-sm">
                      {activeProduct.category}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#F7F5F0]/80 px-2.5 py-1 rounded bg-black/50 backdrop-blur-sm">
                      {activeProduct.model}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E06D22]">
                      ENGINEERING SPECIFICATION // {activeProduct.model}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white uppercase tracking-tight">
                    {activeProduct.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#F7F5F0]/85 leading-relaxed font-normal">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Technical Metric Cards */}
                {Array.isArray(activeProduct.specs) && activeProduct.specs.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-4">
                    {activeProduct.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-3 rounded-xl bg-[#14281D] border border-[#3E6B48]/30 space-y-0.5"
                      >
                        <span className="text-[10px] font-mono text-[#A9B8C5] uppercase block font-semibold truncate">
                          {s.label}
                        </span>
                        <span className="text-xs font-mono font-bold text-white block truncate">
                          {s.value}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-4 border-t border-[#3E6B48]/30">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(activeProduct)}
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-mono font-bold uppercase text-[#E06D22] hover:text-white transition-colors cursor-pointer py-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW DATA SHEET</span>
                </button>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md text-center"
                >
                  <span>INQUIRE SPECS & PRICING</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Technical Spec Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-up">
          <div className="bg-[#14281D] text-white rounded-2xl max-w-xl w-full border border-[#3E6B48]/50 p-5 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto my-auto">
            <button
              type="button"
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close specification modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E06D22] font-bold block">
                ENGINEERING SPEC SHEET // {activeModalProduct.model}
              </span>
              <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                {activeModalProduct.name}
              </h3>
              <p className="text-sm text-[#F7F5F0]/80 leading-relaxed">
                {activeModalProduct.description}
              </p>

              <div className="p-4 rounded-xl bg-[#193325] border border-[#3E6B48]/30 space-y-3">
                <span className="text-xs font-mono uppercase text-[#E06D22] font-bold block">
                  TECHNICAL METRICS
                </span>
                {activeModalProduct.specs?.map((s, idx) => (
                  <div key={idx} className="flex items-center justify-between text-xs sm:text-sm py-1 border-b border-white/5 last:border-b-0">
                    <span className="font-mono text-[#A9B8C5]">{s.label}</span>
                    <span className="font-bold text-white">{s.value}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-5 py-2.5 rounded border border-white/20 text-xs font-mono font-bold uppercase text-white hover:bg-white/10 cursor-pointer"
                >
                  CLOSE
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-6 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold uppercase hover:bg-[#C85B17] transition-colors"
                >
                  DISCUSS DEPLOYMENT
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
