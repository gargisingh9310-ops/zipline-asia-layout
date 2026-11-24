import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, X, ChevronRight, BookOpen, Clock, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { knowledgeData } from '../data/websiteData';

export default function KnowledgePage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedArticle, setSelectedArticle] = useState(null);

  const categories = ["All", ...new Set(knowledgeData.articles.map(a => a.category))];

  const filteredArticles = activeCategory === "All"
    ? knowledgeData.articles
    : knowledgeData.articles.filter(a => a.category === activeCategory);

  const knowledgeMetrics = [
    { label: "Engineering Insights", value: "7 Practical Guides" },
    { label: "Industry Practicality", value: "30 Yrs Heritage" },
    { label: "Investor Focus", value: "ROI & Feasibility" }
  ];

  return (
    <div className="w-full bg-[#F7F5F0] text-[#292D2B]">
      {/* 01 — Full-Screen Page Hero (100svh, Dark & Cinematic) */}
      <PageHero
        eyebrow="ADVENTURE DESTINATION ADVISORY"
        title="KNOWLEDGE HUB &"
        highlightText="PLANNING GUIDES."
        subtitle="Practical frameworks, technical perspectives, and investment guidelines for resort owners, developers, and operators looking to understand capital expenditure, attraction selection, and lifecycle maintenance."
        bgImage="/images/rope-course.jpg"
        breadcrumbs={[{ label: "Knowledge Hub" }]}
        primaryCTA={{ label: "EXPLORE ADVISORY GUIDES", href: "#knowledge-content" }}
        secondaryCTA={{ label: "REQUEST CONSULTATION", href: "/contact" }}
        metrics={knowledgeMetrics}
        scrollTargetId="knowledge-content"
      />

      {/* 02 — Category Tabs (LIGHT Surface) */}
      <div id="knowledge-content" className="sticky top-[56px] sm:top-[68px] z-30 w-full bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#292D2B]/15 py-3.5 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? "bg-[#C6A15B] text-white shadow-glow-gold"
                  : "bg-white text-[#292D2B] border border-[#292D2B]/15 hover:text-[#C6A15B] hover:border-[#C6A15B] shadow-xs"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 03 — Articles Grid (LIGHT: Crisp White Surface) */}
      <section className="py-16 sm:py-24 bg-white text-[#292D2B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#292D2B]/10">
            <p className="text-xs font-mono text-[#6E7571] uppercase tracking-widest">
              SHOWING <span className="text-[#C6A15B] font-bold">{filteredArticles.length}</span> ADVISORY GUIDES
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((art, idx) => (
              <ScrollReveal key={art.id} delay={idx * 0.05}>
                <div className="group rounded-2xl p-6 sm:p-8 bg-[#F7F5F0] border border-[#292D2B]/10 hover:border-[#C6A15B] hover:bg-white hover:shadow-card-sand transition-all duration-300 flex flex-col justify-between h-full shadow-sm">
                  <div>
                    {/* Metadata Header */}
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs font-mono text-[#C6A15B] font-bold">
                        ARTICLE // {art.number}
                      </span>
                      <span className="px-2.5 py-0.5 rounded bg-white border border-[#292D2B]/15 text-[10px] font-mono text-[#6E7571] uppercase tracking-wider shadow-2xs flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#183B2B]" />
                        <span>{art.readTime}</span>
                      </span>
                    </div>

                    {/* Category */}
                    <div className="text-[11px] font-mono text-[#183B2B] font-bold tracking-wider uppercase mb-2">
                      {art.category}
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display font-bold uppercase text-[#183B2B] mb-3 group-hover:text-[#C6A15B] transition-colors leading-snug">
                      {art.title}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed mb-6">
                      {art.summary}
                    </p>

                    {/* Key Highlights */}
                    <div className="p-4 rounded-xl bg-white border border-[#292D2B]/10 mb-6 shadow-2xs">
                      <div className="text-[10px] font-mono text-[#183B2B] uppercase tracking-wider font-bold mb-2">
                        CORE STRATEGIC FOCUS:
                      </div>
                      <ul className="space-y-1.5 text-xs text-[#6E7571]">
                        {art.keyPoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Action */}
                  <div className="pt-4 border-t border-[#292D2B]/10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedArticle(art)}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#183B2B] hover:text-[#C6A15B] transition-colors flex items-center gap-1.5 cursor-pointer"
                    >
                      <span>Read Advisory Summary</span>
                      <ChevronRight className="w-3.5 h-3.5 text-[#C6A15B]" />
                    </button>

                    <Link
                      to={`/contact?topic=${encodeURIComponent(art.title)}`}
                      className="text-xs font-mono text-[#6E7571] hover:text-[#C6A15B] transition-colors font-medium"
                    >
                      Inquire Topic
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Masterplanning Spotlight (DARK High-Impact Accent #183B2B) */}
      <section className="py-16 sm:py-24 bg-[#183B2B] text-white canopy-grid-dark overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B]">
                MASTERPLANNING FEASIBILITY SPOTLIGHT
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
                Topographical Modeling & CapEx Phasing
              </h2>
              <p className="text-sm sm:text-base text-[#F7F5F0]/85 font-light leading-relaxed max-w-2xl">
                Developing an adventure park requires balancing thrill velocity with human safety, footfall dwell time, and capital investment payback. Our advisory team synthesizes 30 years of practical rigging field experience to help developers de-risk high-stakes adventure investments.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Link
                to="/contact"
                className="px-8 py-4 rounded-md bg-[#C6A15B] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:shadow-glow-gold transition-all shadow-xl"
              >
                REQUEST SITE APPRAISAL
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Bottom CTA (LIGHT Surface: Warm Sand) */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] text-[#292D2B] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B]">
            MASTERPLANNING FEASIBILITY
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#183B2B] tracking-tight">
            Need a Site Appraisal or Attraction Mix Strategy?
          </h2>
          <p className="text-sm sm:text-base text-[#6E7571] max-w-2xl mx-auto font-normal leading-relaxed">
            Our multidisciplinary team reviews site topo maps, satellite imagery, and commercial goals to craft high-return masterplans for adventure destinations.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md bg-[#C6A15B] text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#B08B46] transition-all shadow-md"
            >
              REQUEST A SITE APPRAISAL
            </Link>
            <Link
              to="/attractions"
              className="px-8 py-4 rounded-md bg-white border border-white/10 text-[#183B2B] text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#FAF9F5] transition-all"
            >
              EXPLORE ATTRACTIONS PORTFOLIO
            </Link>
          </div>
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-2xl bg-white border border-[#292D2B]/15 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-[#6E7571] hover:text-[#183B2B] p-2 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#C6A15B] uppercase tracking-wider mb-2 font-bold">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="text-2xl font-display font-extrabold uppercase text-[#183B2B] mb-4">
              {selectedArticle.title}
            </h3>

            <p className="text-sm text-[#6E7571] leading-relaxed mb-6 font-normal">
              {selectedArticle.summary}
            </p>

            <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/15 mb-6">
              <h4 className="text-xs font-mono font-bold text-[#C6A15B] tracking-wider uppercase mb-3">
                Key Strategic Takeaways for Developers:
              </h4>
              <div className="space-y-3">
                {selectedArticle.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#183B2B]">
                    <span className="w-5 h-5 rounded bg-white border border-[#C6A15B]/40 text-[#C6A15B] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5 shadow-2xs">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/15 mb-6 text-xs text-[#6E7571] font-mono leading-relaxed">
              <span className="text-[#C6A15B] font-bold">ENGINEERING ADVISORY NOTE:</span> Every site possesses unique contour dynamics and rock strata. Feasibility assessments must always factor in local wind micro-climates, soil bearing tests, and continuous belay safety transitions.
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#292D2B]/10">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-mono text-[#6E7571] hover:text-[#183B2B] transition-colors uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              <Link
                to={`/contact?topic=${encodeURIComponent(selectedArticle.title)}`}
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded bg-[#C6A15B] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#B08B46] transition-colors"
              >
                Discuss This Topic With Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
