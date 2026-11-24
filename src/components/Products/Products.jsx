import React, { useState } from 'react';
import { ArrowUpRight, Eye, X, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { productsData } from '../../data/websiteData';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const productList = Array.isArray(productsData?.products) ? productsData.products : [];
  const categories = Array.isArray(productsData?.categories) ? productsData.categories : ["All"];

  const filteredProducts = selectedCategory === "All"
    ? productList
    : productList.filter((p) => p.category === selectedCategory);

  const activeProduct = filteredProducts[activeProductIndex] || filteredProducts[0] || productList[0];

  return (
    <section
      id="products"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#183B2B] text-white canopy-grid-dark overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-6 border-b border-[#C6A15B]/20">
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B] block">
                {productsData?.label || "ADVENTURE ATTRACTIONS"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-white leading-[1.08]">
                {productsData?.heading || "COMPREHENSIVE ATTRACTION PORTFOLIO."}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xs sm:text-sm text-white/80 max-w-md font-normal leading-relaxed">
              {productsData?.supportingText || "Commercial-grade adventure attractions designed, engineered, and fabricated for high visitor engagement and maximum operating safety."}
            </p>
          </ScrollReveal>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => {
                setSelectedCategory(cat);
                setActiveProductIndex(0);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all cursor-pointer whitespace-nowrap active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-[#C6A15B] text-[#292D2B] shadow-glow-gold'
                  : 'bg-[#292D2B] text-white/80 hover:text-white hover:bg-[#1F4735] border border-[#C6A15B]/20'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 50/50 Equal-Column Layout: Left (50%) List, Right (50%) Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 items-stretch">
          
          {/* Left Column: 50% Width — Compact, Spacious & Independently Scrollable Product Selection List */}
          <div className="w-full rounded-2xl bg-[#1F4735]/60 border border-[#C6A15B]/20 p-5 sm:p-7 flex flex-col justify-between h-full min-h-0">
            {/* List Header */}
            <div className="flex items-center justify-between pb-4 mb-3 border-b border-white/10 shrink-0">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C6A15B] font-bold">
                {selectedCategory.toUpperCase()} ({filteredProducts.length})
              </span>
              <span className="text-xs font-mono text-white/60">
                0{activeProductIndex + 1} / 0{filteredProducts.length}
              </span>
            </div>

            {/* Vertical Scrollable Product Items with Lenis Interception Prevention */}
            <div
              data-lenis-prevent="true"
              data-lenis-prevent-wheel="true"
              data-lenis-prevent-touch="true"
              onWheel={(e) => e.stopPropagation()}
              onTouchMove={(e) => e.stopPropagation()}
              className="flex-1 min-h-0 max-h-[480px] lg:max-h-[540px] overflow-y-auto overscroll-contain pr-2 space-y-2.5 custom-scrollbar-gold touch-pan-y pb-2"
            >
              {filteredProducts.map((product, idx) => {
                const isActive = activeProductIndex === idx;

                return (
                  <button
                    key={product?.id || idx}
                    type="button"
                    onClick={() => setActiveProductIndex(idx)}
                    className={`w-full text-left transition-all duration-300 cursor-pointer select-none rounded-xl py-3 sm:py-3.5 px-3.5 sm:px-4 flex items-center justify-between group border-b border-white/5 last:border-b-0 active:scale-[0.98] ${
                      isActive
                        ? 'bg-[#292D2B] text-white border-l-4 border-[#C6A15B] shadow-card-pine'
                        : 'bg-transparent text-white/70 hover:text-white hover:bg-white/[0.04] border-l-4 border-transparent hover:translate-x-1'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className={`text-xs font-mono font-bold tracking-wider shrink-0 transition-colors ${isActive ? 'text-[#C6A15B]' : 'text-white/50 group-hover:text-[#C6A15B]'}`}>
                        0{idx + 1}
                      </span>
                      <div className="space-y-0.5 min-w-0">
                        <h4 className={`text-sm sm:text-base lg:text-[17px] font-display uppercase tracking-tight truncate transition-colors ${isActive ? 'font-semibold text-white' : 'font-medium text-white/80 group-hover:text-white'}`}>
                          {product?.name}
                        </h4>
                        <span className={`text-[10px] font-mono uppercase block truncate transition-colors ${isActive ? 'text-[#C6A15B]/90 font-medium' : 'text-white/50 group-hover:text-white/80'}`}>
                          {product?.category} // {product?.model}
                        </span>
                      </div>
                    </div>

                    <ArrowUpRight className={`w-4 h-4 shrink-0 ml-3 transition-all duration-300 ${
                      isActive
                        ? 'text-[#C6A15B] translate-x-0.5 -translate-y-0.5 opacity-100'
                        : 'text-white/30 opacity-0 group-hover:opacity-100 group-hover:text-[#C6A15B]'
                    }`} />
                  </button>
                );
              })}
            </div>

            {/* List Footer */}
            <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/60 shrink-0">
              <span>SELECT AN ATTRACTION TO VIEW SPECS</span>
              <span className="text-[#C6A15B] font-bold">CLICK TO INSPECT</span>
            </div>
          </div>

          {/* Right Column: 50% Width — Selected Attraction Showcase */}
          {activeProduct && (
            <div
              key={activeProduct.id}
              className="w-full rounded-2xl bg-[#1F4735]/90 border border-[#C6A15B]/30 p-5 sm:p-7 space-y-4 shadow-2xl flex flex-col justify-between animate-product-swap"
            >
              <div>
                {/* Large Product Image */}
                <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-[#183B2B] border border-white/10 shadow-inner mb-4 group">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    loading="lazy"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#183B2B]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Overlaid Badges */}
                  <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                    <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#183B2B]/90 backdrop-blur-md text-[#C6A15B] border border-[#C6A15B]/40 shadow-sm">
                      {activeProduct.category}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/80 px-2.5 py-1 rounded bg-[#292D2B]/80 backdrop-blur-sm">
                      {activeProduct.model}
                    </span>
                  </div>
                </div>

                {/* Title & Description */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#C6A15B]">
                      SPECIFICATION OVERVIEW // {activeProduct.model}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-display font-extrabold text-white uppercase tracking-tight">
                    {activeProduct.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-white/85 leading-relaxed font-normal">
                    {activeProduct.description}
                  </p>
                </div>

                {/* Applications & Configurations */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                  {activeProduct.applications && (
                    <div className="p-2.5 rounded-lg bg-[#183B2B]/80 border border-white/10 space-y-0.5">
                      <span className="text-[10px] font-mono font-bold uppercase text-[#C6A15B] block">
                        Applications
                      </span>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {activeProduct.applications}
                      </p>
                    </div>
                  )}

                  {activeProduct.configurations && (
                    <div className="p-2.5 rounded-lg bg-[#183B2B]/80 border border-white/10 space-y-0.5">
                      <span className="text-[10px] font-mono font-bold uppercase text-white/90 block">
                        Configurations
                      </span>
                      <p className="text-xs text-white/80 line-clamp-2">
                        {activeProduct.configurations}
                      </p>
                    </div>
                  )}
                </div>

                {/* Technical Metric Cards */}
                {Array.isArray(activeProduct.specs) && activeProduct.specs.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-3">
                    {activeProduct.specs.map((s, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-[#183B2B] border border-white/10 space-y-0.5"
                      >
                        <span className="text-[10px] font-mono text-white/70 uppercase block font-semibold truncate">
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
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 pt-3 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(activeProduct)}
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs font-mono font-bold uppercase text-[#C6A15B] hover:text-white transition-colors cursor-pointer py-2"
                >
                  <Eye className="w-4 h-4" />
                  <span>VIEW FULL SPEC SHEET</span>
                </button>

                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#C6A15B] text-[#292D2B] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:text-white hover:shadow-glow-gold hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 shadow-md text-center"
                >
                  <span>INQUIRE ABOUT THIS ATTRACTION</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#292D2B] group-hover:text-white transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>

            </div>
          )}

        </div>

      </div>

      {/* Technical Spec Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#292D2B]/85 backdrop-blur-sm animate-fade-up">
          <div className="bg-[#183B2B] text-white rounded-2xl max-w-xl w-full border border-[#C6A15B]/30 p-5 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto my-auto">
            <button
              type="button"
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close specification modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C6A15B] font-bold block">
                ATTRACTION SPECIFICATION // {activeModalProduct.model}
              </span>
              <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                {activeModalProduct.name}
              </h3>
              <p className="text-sm text-white/80 leading-relaxed font-light">
                {activeModalProduct.description}
              </p>

              {/* Key Features List */}
              {Array.isArray(activeModalProduct.features) && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase text-[#C6A15B] font-bold block">
                    KEY ENGINEERING FEATURES
                  </span>
                  <div className="space-y-1.5">
                    {activeModalProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-white/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C6A15B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications & Configurations in Modal */}
              <div className="p-4 rounded-xl bg-[#1F4735] border border-white/10 space-y-3">
                {activeModalProduct.applications && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#C6A15B] font-bold block">
                      RECOMMENDED APPLICATIONS
                    </span>
                    <p className="text-xs text-white/85 mt-0.5">
                      {activeModalProduct.applications}
                    </p>
                  </div>
                )}

                {activeModalProduct.configurations && (
                  <div className="pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase text-white/80 font-bold block">
                      AVAILABLE CONFIGURATIONS
                    </span>
                    <p className="text-xs text-white/85 mt-0.5">
                      {activeModalProduct.configurations}
                    </p>
                  </div>
                )}
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
                  className="px-6 py-2.5 rounded bg-[#C6A15B] text-[#292D2B] text-xs font-mono font-bold uppercase hover:bg-[#B08B46] hover:text-white transition-colors"
                >
                  REQUEST PROPOSAL FOR THIS ITEM
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
