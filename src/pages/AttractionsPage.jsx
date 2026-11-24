import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Eye, 
  ArrowUpRight, 
  X, 
  CheckCircle2, 
  Layers, 
  ShieldCheck, 
  Compass, 
  Sparkles 
} from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { productsData } from '../data/websiteData';

export default function AttractionsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const productList = Array.isArray(productsData?.products) ? productsData.products : [];
  const categories = Array.isArray(productsData?.categories) ? productsData.categories : ["All"];

  const filteredProducts = selectedCategory === "All"
    ? productList
    : productList.filter((p) => p.category === selectedCategory);

  return (
    <div className="w-full bg-[#F7F5F0] text-[#1C2420]">
      {/* 01 — Full-Screen Page Hero (100svh, Dark & Cinematic) */}
      <PageHero
        eyebrow="ADVENTURE ATTRACTIONS PORTFOLIO"
        title="COMMERCIAL ADVENTURE"
        highlightText="ATTRACTIONS."
        subtitle="Explore our comprehensive engineering portfolio across aerial flight corridors, high-altitude drop towers, tactical obstacle courses, indoor entertainment hubs, and bespoke structural thrill installations."
        bgImage="/images/zipline-infrastructure.jpg"
        breadcrumbs={[{ label: 'Adventure Attractions' }]}
        primaryCTA={{ label: "INQUIRE EQUIPMENT & SPECS", href: "/contact" }}
        secondaryCTA={{ label: "OUR TURNKEY SERVICES", href: "/solutions" }}
        metrics={[
          { value: "5 Categories", label: "Core Portfolio" },
          { value: "25+ Attractions", label: "Commercial Attractions" },
          { value: "100%", label: "Site-Specific Design" }
        ]}
        scrollTargetId="attractions-content"
      />

      {/* 02 — Sticky Category Navigation Tabs (LIGHT Surface) */}
      <div className="sticky top-[56px] sm:top-[68px] z-30 w-full bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#3E6B48]/20 py-3.5 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-[#E06D22] text-white shadow-glow-terracotta'
                  : 'bg-white text-[#1C2420] hover:text-[#E06D22] hover:border-[#E06D22] border border-[#3E6B48]/20 shadow-xs'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 03 — Main Attractions Showcase Grid (LIGHT: Warm Sand Surface #F7F5F0) */}
      <section id="attractions-content" className="relative w-full py-16 sm:py-24 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-6 mb-10 border-b border-[#1C2420]/15">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                {selectedCategory.toUpperCase()} ATTRACTIONS
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#14281D] tracking-tight mt-1">
                Showing {filteredProducts.length} Engineered Attractions
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#525E57] max-w-md font-normal leading-relaxed">
              Click "View Data Sheet" on any attraction to review technical specifications, mounting configurations, and safety mechanisms.
            </p>
          </div>

          {/* Cards Grid (Clean White Cards on Warm Sand) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal
                key={product.id || idx}
                animation="fade-up"
                delay={0.04 * (idx % 3)}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#3E6B48]/15 hover:border-[#3E6B48] hover:shadow-card-sand hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
              >
                <div>
                  {/* Image Container with Badges */}
                  <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#14281D]">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/80 via-transparent to-transparent pointer-events-none" />

                    {/* Category Pill Tag */}
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded bg-[#14281D]/90 backdrop-blur-md border border-[#3E6B48]/50 text-[10px] font-mono uppercase tracking-wider text-[#E06D22] font-bold">
                      {product.category}
                    </span>

                    {/* Model Code */}
                    {product.model && (
                      <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono text-white/90">
                        {product.model}
                      </span>
                    )}

                    {/* Attraction Title Overlay */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <h3 className="text-xl font-display font-bold uppercase tracking-tight text-white drop-shadow-md group-hover:text-[#F7F5F0] transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 space-y-4">
                    <p className="text-xs sm:text-sm text-[#525E57] leading-relaxed line-clamp-3 font-normal">
                      {product.description}
                    </p>

                    {/* Features Strip */}
                    {product.features && product.features.length > 0 && (
                      <div className="space-y-1.5 pt-3 border-t border-[#1C2420]/10">
                        <span className="text-[10px] font-mono uppercase text-[#14281D] font-bold tracking-wider block mb-1">
                          Key Engineering Highlights:
                        </span>
                        {product.features.slice(0, 3).map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-[#525E57]">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#3E6B48] shrink-0" />
                            <span className="truncate">{feat}</span>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* Quick Specs Strip */}
                    {product.specs && (
                      <div className="grid grid-cols-2 gap-2 pt-2 text-[11px] font-mono bg-[#F7F5F0] p-3 rounded-lg border border-[#3E6B48]/15">
                        {product.specs.slice(0, 2).map((sp, sIdx) => (
                          <div key={sIdx} className="space-y-0.5">
                            <span className="text-[#525E57] block truncate">{sp.label}:</span>
                            <span className="text-[#14281D] font-bold block truncate">{sp.value}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-[#1C2420]/10 mt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#14281D] hover:text-[#E06D22] transition-colors cursor-pointer"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#E06D22]" />
                    <span>View Data Sheet</span>
                  </button>

                  <Link
                    to={`/contact?attraction=${encodeURIComponent(product.name)}`}
                    className="inline-flex items-center gap-1 px-3 py-1.5 rounded bg-[#E06D22] text-white text-[11px] font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] transition-all"
                  >
                    <span>Inquire</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 04 — Custom Architecture & Bespoke Thrill Structures (DARK High-Impact Accent) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#14281D] text-white canopy-grid-dark overflow-hidden border-y border-[#3E6B48]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <ScrollReveal animation="fade-up">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                  BESPOKE ADVENTURE ARCHITECTURE
                </span>
                <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight leading-tight">
                  Custom Engineering for Iconic Natural Topography
                </h2>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.1}>
                <p className="text-sm sm:text-base text-[#F7F5F0]/85 font-light leading-relaxed">
                  Have a cliff-edge viewpoint, high-altitude alpine ridge, river ravine, or iconic urban rooftop? We design bespoke thrill structures that harmonize with challenging topography.
                </p>
                <p className="text-sm sm:text-base text-[#F7F5F0]/85 font-light leading-relaxed mt-3">
                  From multi-attraction monolith towers and canyon glass viewing bridges to long-span mega valley ziplines, our engineering team performs finite element stress modeling, catenary curve physics, and turnkey execution.
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="flex flex-wrap items-center gap-3 pt-3">
                  <div className="px-3 py-1.5 rounded-lg bg-[#193325] border border-[#3E6B48]/40 text-xs font-mono text-[#F7F5F0]/90">
                    ✓ High-Altitude Rigging
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#193325] border border-[#3E6B48]/40 text-xs font-mono text-[#F7F5F0]/90">
                    ✓ Micro-Climate Wind Load FEA
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-[#193325] border border-[#3E6B48]/40 text-xs font-mono text-[#F7F5F0]/90">
                    ✓ Laminated Structural Glass Footbridges
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.2}>
                <div className="pt-2">
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-md"
                  >
                    <span>SUBMIT BESPOKE SITE SPECS</span>
                    <ArrowUpRight className="w-4 h-4 text-white" />
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="lg:col-span-5">
              <ScrollReveal animation="zoom-in" delay={0.15}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#3E6B48]/30 bg-[#0E1C14]">
                  <img
                    src="/images/bungee-tower.jpg"
                    alt="ZIPLINE ASIA Cantilever Bungee Thrill Structure"
                    className="w-full h-[380px] sm:h-[440px] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14281D] via-transparent to-transparent pointer-events-none" />
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#14281D]/90 backdrop-blur-md border border-[#3E6B48]/40">
                    <span className="text-[10px] font-mono uppercase text-[#E06D22] font-bold block mb-1">
                      CANTILEVER RIGGING
                    </span>
                    <p className="text-xs text-[#F7F5F0]/90">
                      Engineered cantilever steel bungee jumping structures with motorized recovery winches and redundant proof-tested anchors.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 05 — Bottom CTA (LIGHT Surface: Warm Sand) */}
      <section className="relative w-full py-16 sm:py-20 bg-[#FAF9F5] text-[#1C2420] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22]">
            ATTRACTION INTEGRATION & PLANNING
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#14281D] tracking-tight">
            Selecting the Optimal Attraction Mix for Your Site?
          </h2>
          <p className="text-sm sm:text-base text-[#525E57] max-w-xl mx-auto font-normal leading-relaxed">
            Our multidisciplinary engineers evaluate site topography, guest demographics, and throughput objectives to formulate the ideal attraction configuration.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md bg-[#E06D22] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-md"
            >
              REQUEST ATTRACTION PROPOSAL
            </Link>
            <Link
              to="/projects"
              className="px-8 py-4 rounded-md bg-white border border-[#3E6B48]/30 text-[#14281D] text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:border-[#E06D22] hover:bg-[#F7F5F0] transition-all"
            >
              VIEW COMPLETED PROJECTS
            </Link>
          </div>
        </div>
      </section>

      {/* Technical Data Sheet Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-[#3E6B48]/20 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              type="button"
              onClick={() => setActiveModalProduct(null)}
              className="absolute top-4 right-4 p-2 rounded-full text-[#525E57] hover:text-[#14281D] hover:bg-[#F7F5F0] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="px-2.5 py-1 rounded bg-[#E06D22]/10 border border-[#E06D22]/30 text-xs font-mono font-bold text-[#E06D22] uppercase">
                  {activeModalProduct.category}
                </span>
                {activeModalProduct.model && (
                  <span className="text-xs font-mono text-[#525E57]">
                    MODEL: {activeModalProduct.model}
                  </span>
                )}
              </div>

              <h3 className="text-2xl font-display font-extrabold uppercase text-[#14281D]">
                {activeModalProduct.name}
              </h3>

              <div className="relative w-full aspect-[16/9] rounded-xl overflow-hidden bg-[#14281D]">
                <img
                  src={activeModalProduct.image}
                  alt={activeModalProduct.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-sm text-[#525E57] leading-relaxed">
                {activeModalProduct.description}
              </p>

              {/* Technical Specifications Matrix */}
              {activeModalProduct.specs && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase text-[#14281D] font-bold tracking-wider block">
                    Engineering Specifications:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-mono">
                    {activeModalProduct.specs.map((sp, idx) => (
                      <div key={idx} className="p-2.5 rounded bg-[#F7F5F0] border border-[#3E6B48]/15 flex justify-between">
                        <span className="text-[#525E57]">{sp.label}:</span>
                        <span className="text-[#14281D] font-bold">{sp.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications & Configurations */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {activeModalProduct.applications && (
                  <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#3E6B48]/15 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#3E6B48] font-bold block">
                      Target Applications:
                    </span>
                    <p className="text-xs text-[#525E57]">
                      {activeModalProduct.applications}
                    </p>
                  </div>
                )}
                {activeModalProduct.configurations && (
                  <div className="p-3 rounded-xl bg-[#F7F5F0] border border-[#3E6B48]/15 space-y-1">
                    <span className="text-[10px] font-mono uppercase text-[#E06D22] font-bold block">
                      Available Configurations:
                    </span>
                    <p className="text-xs text-[#525E57]">
                      {activeModalProduct.configurations}
                    </p>
                  </div>
                )}
              </div>

              {/* Modal Action CTA */}
              <div className="pt-4 border-t border-[#1C2420]/10 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-4 py-2.5 text-xs font-mono uppercase text-[#525E57] hover:text-[#14281D]"
                >
                  Close
                </button>
                <Link
                  to={`/contact?attraction=${encodeURIComponent(activeModalProduct.name)}`}
                  className="inline-flex items-center gap-1.5 px-6 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] transition-all"
                >
                  <span>Request Full Dossier</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
