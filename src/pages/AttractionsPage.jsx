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
  Activity, 
  Target,
  Sparkles 
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
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
    <div className="w-full bg-[#14281D] text-white">
      {/* 01 — Page Header */}
      <PageHeader
        badge="ADVENTURE ATTRACTIONS PORTFOLIO"
        title="COMMERCIAL ADVENTURE ATTRACTIONS."
        subtitle="Explore our comprehensive engineering portfolio across aerial flight corridors, high-altitude drop towers, tactical obstacle courses, indoor entertainment hubs, and bespoke structural thrill installations."
        breadcrumbs={[{ label: 'Adventure Attractions' }]}
        ctaText="INQUIRE EQUIPMENT & SPECS"
        ctaHref="/contact"
        stats={[
          { value: "5", label: "Core Categories" },
          { value: "25+", label: "Commercial Attractions" },
          { value: "100%", label: "Site-Specific Design" }
        ]}
      />

      {/* 02 — Sticky Category Navigation Tabs */}
      <div className="sticky top-[56px] sm:top-[68px] z-30 w-full bg-[#14281D]/95 backdrop-blur-md border-b border-[#3E6B48]/30 py-3.5 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer active:scale-95 ${
                selectedCategory === cat
                  ? 'bg-[#E06D22] text-white shadow-glow-terracotta'
                  : 'bg-[#193325] text-[#F7F5F0]/75 hover:text-white hover:bg-[#193325]/80 border border-[#3E6B48]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 03 — Main Attractions Showcase Grid (Warm Sand Surface) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden">
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
            <p className="text-xs sm:text-sm text-[#525E57] max-w-md font-normal">
              Click "View Data Sheet" on any attraction to review technical specifications, mounting configurations, and safety mechanisms.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, idx) => (
              <ScrollReveal
                key={product.id || idx}
                animation="fade-up"
                delay={0.04 * (idx % 3)}
                className="group flex flex-col justify-between rounded-2xl bg-white border border-[#1C2420]/15 hover:border-[#3E6B48] hover:shadow-card-sand hover:-translate-y-1.5 transition-all duration-300 overflow-hidden"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />
                    
                    {/* Floating Badges */}
                    <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between pointer-events-none">
                      <span className="text-[10px] font-mono uppercase font-bold tracking-wider px-2.5 py-1 rounded bg-[#14281D]/90 backdrop-blur-md text-[#E06D22] border border-[#E06D22]/30 shadow-sm">
                        {product.category}
                      </span>
                      <span className="text-[10px] font-mono uppercase tracking-widest text-white/90 px-2.5 py-1 rounded bg-black/60 backdrop-blur-sm font-semibold">
                        {product.model}
                      </span>
                    </div>

                    <span className="absolute bottom-2.5 left-3.5 right-3.5 text-xs font-mono font-bold text-white tracking-wider truncate">
                      {product.specs?.[0]?.label}: {product.specs?.[0]?.value}
                    </span>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3.5">
                    <div className="space-y-1">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-[#E06D22] font-bold block">
                        MODEL: {product.model}
                      </span>
                      <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-[#14281D] group-hover:text-[#3E6B48] transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-[13px] text-[#525E57] leading-relaxed">
                      {product.description}
                    </p>

                    {/* Applications & Configurations Pill Box */}
                    <div className="space-y-2 pt-2 border-t border-[#1C2420]/10 text-xs">
                      {product.applications && (
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase text-[#3E6B48] block">
                            Ideal Applications:
                          </span>
                          <span className="text-[#525E57] leading-tight block">
                            {product.applications}
                          </span>
                        </div>
                      )}
                      {product.configurations && (
                        <div>
                          <span className="text-[10px] font-mono font-bold uppercase text-[#E06D22] block">
                            Available Layouts:
                          </span>
                          <span className="text-[#525E57] leading-tight block">
                            {product.configurations}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action Buttons */}
                <div className="p-5 sm:p-6 pt-0 mt-auto flex items-center justify-between gap-3 border-t border-[#1C2420]/10">
                  <button
                    type="button"
                    onClick={() => setActiveModalProduct(product)}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#E06D22] hover:text-[#14281D] transition-colors cursor-pointer py-2"
                  >
                    <Eye className="w-4 h-4" />
                    <span>VIEW SPEC SHEET</span>
                  </button>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-[#14281D] hover:text-[#E06D22] transition-colors py-2"
                  >
                    <span>INQUIRE</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#E06D22]" />
                  </Link>
                </div>

              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>

      {/* 04 — Custom Attraction Structure Advisory (Deep Pine Green) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#14281D] text-white border-t border-[#3E6B48]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22]">
                BESPOKE EXPERIENTIAL ENGINEERING
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white">
                Require a Custom-Engineered Adventure Attraction?
              </h2>
              <p className="text-sm sm:text-base text-[#F7F5F0]/85 leading-relaxed max-w-2xl">
                Have a unique topographical cliff edge, natural mountain ravine, or signature architectural vision? ZIPLINE ASIA designs bespoke cantilever platforms, suspended glass bridges, zip coasters, and iconic adventure towers tailored specifically to your site.
              </p>
              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-md bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-md"
                >
                  <span>DISCUSS CUSTOM ATTRACTION DESIGN</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-2xl bg-[#193325] border border-[#3E6B48]/40 space-y-3">
                <span className="text-xs font-mono uppercase text-[#3E6B48] font-bold block">
                  TECHNICAL CAPABILITIES
                </span>
                <div className="space-y-2 text-xs text-[#F7F5F0]/85">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E06D22] shrink-0" />
                    <span>3D Topographical Laser Catenary Modeling</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E06D22] shrink-0" />
                    <span>Structural Finite Element Stress Analysis</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E06D22] shrink-0" />
                    <span>Tuned Mass Wind Dampener Calculations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[#E06D22] shrink-0" />
                    <span>Hot-Dip Galvanized Marine-Grade Steelwork</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 05 — Technical Spec Modal */}
      {activeModalProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-up">
          <div className="bg-[#14281D] text-white rounded-2xl max-w-xl w-full border border-[#3E6B48]/50 p-6 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto my-auto">
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
                ATTRACTION SPECIFICATION // {activeModalProduct.model}
              </span>
              <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                {activeModalProduct.name}
              </h3>
              <p className="text-sm text-[#F7F5F0]/80 leading-relaxed">
                {activeModalProduct.description}
              </p>

              {/* Key Features List */}
              {Array.isArray(activeModalProduct.features) && (
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-mono uppercase text-[#3E6B48] font-bold block">
                    KEY ENGINEERING FEATURES
                  </span>
                  <div className="space-y-1.5">
                    {activeModalProduct.features.map((feat, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-[#F7F5F0]/85">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E06D22] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Applications & Configurations in Modal */}
              <div className="p-4 rounded-xl bg-[#193325] border border-[#3E6B48]/30 space-y-3">
                {activeModalProduct.applications && (
                  <div>
                    <span className="text-[10px] font-mono uppercase text-[#E06D22] font-bold block">
                      RECOMMENDED APPLICATIONS
                    </span>
                    <p className="text-xs text-[#F7F5F0]/85 mt-0.5">
                      {activeModalProduct.applications}
                    </p>
                  </div>
                )}

                {activeModalProduct.configurations && (
                  <div className="pt-2 border-t border-white/5">
                    <span className="text-[10px] font-mono uppercase text-[#3E6B48] font-bold block">
                      AVAILABLE CONFIGURATIONS
                    </span>
                    <p className="text-xs text-[#F7F5F0]/85 mt-0.5">
                      {activeModalProduct.configurations}
                    </p>
                  </div>
                )}
              </div>

              {/* Technical Metrics */}
              {Array.isArray(activeModalProduct.specs) && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                  {activeModalProduct.specs.map((s, idx) => (
                    <div key={idx} className="p-2.5 rounded-lg bg-[#14281D] border border-[#3E6B48]/30">
                      <span className="text-[9px] font-mono text-[#A9B8C5] uppercase block truncate">{s.label}</span>
                      <span className="text-xs font-mono font-bold text-white block truncate">{s.value}</span>
                    </div>
                  ))}
                </div>
              )}

              <div className="pt-3 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-5 py-2.5 rounded border border-white/20 text-xs font-mono font-bold uppercase text-white hover:bg-white/10 cursor-pointer"
                >
                  CLOSE
                </button>
                <Link
                  to="/contact"
                  onClick={() => setActiveModalProduct(null)}
                  className="px-6 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold uppercase hover:bg-[#C85B17] transition-colors"
                >
                  REQUEST PROPOSAL FOR THIS ITEM
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
