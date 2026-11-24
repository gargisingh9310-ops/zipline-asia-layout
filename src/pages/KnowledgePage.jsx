import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
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
    { label: "Engineering Insights", value: "7 Guides" },
    { label: "Industry Practicality", value: "30 Yrs" },
    { label: "Investor Focus", value: "ROI Driven" },
    { label: "Access", value: "Complimentary" }
  ];

  return (
    <div className="bg-[#14281D] text-[#F7F5F0] min-h-screen pt-20">
      {/* Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Knowledge Hub" }]}
        eyebrow="ADVENTURE INFRASTRUCTURE ADVISORY"
        title="KNOWLEDGE HUB."
        subtitle="ENGINEERING, INVESTMENT, AND MASTERPLANNING INSIGHTS FOR ADVENTURE DESTINATIONS."
        description="Practical frameworks and technical perspectives written for resort owners, developers, and operators looking to understand capital expenditure, attraction selection, safety compliance, and commercial ROI."
        metrics={knowledgeMetrics}
        ctaLabel="CONSULT AN ENGINEER"
        ctaHref="/contact"
      />

      {/* Category Tabs */}
      <section className="sticky top-20 z-30 bg-[#14281D]/95 backdrop-blur-md border-b border-[#3E6B48]/30 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#3E6B48] scrollbar-track-transparent">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-wider uppercase whitespace-nowrap transition-all duration-300 ${
                  activeCategory === cat
                    ? "bg-[#E06D22] text-white shadow-md shadow-[#E06D22]/20"
                    : "bg-[#1C2420] text-[#F7F5F0]/70 border border-[#3E6B48]/40 hover:text-white hover:border-[#E06D22]/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono text-[#F7F5F0]/60 uppercase tracking-widest">
            SHOWING <span className="text-[#E06D22] font-bold">{filteredArticles.length}</span> ADVISORY GUIDES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art, idx) => (
            <ScrollReveal key={art.id} delay={idx * 0.05}>
              <div className="group rounded-xl p-6 sm:p-8 bg-[#1C2420] border border-[#3E6B48]/30 hover:border-[#E06D22]/60 transition-all duration-300 flex flex-col justify-between h-full shadow-lg">
                <div>
                  {/* Metadata Header */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-[#E06D22] font-bold">
                      ARTICLE // {art.number}
                    </span>
                    <span className="px-2.5 py-0.5 rounded bg-[#14281D] border border-[#3E6B48]/40 text-[10px] font-mono text-[#F7F5F0]/70 uppercase tracking-wider">
                      {art.readTime}
                    </span>
                  </div>

                  {/* Category */}
                  <div className="text-[11px] font-mono text-[#F7F5F0]/50 tracking-wider uppercase mb-2">
                    {art.category}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-[#F7F5F0] mb-3 group-hover:text-[#E06D22] transition-colors leading-snug">
                    {art.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-sm text-[#F7F5F0]/70 font-light leading-relaxed mb-6">
                    {art.summary}
                  </p>

                  {/* Key Highlights */}
                  <div className="p-3.5 rounded bg-[#14281D]/80 border border-[#3E6B48]/20 mb-6">
                    <div className="text-[10px] font-mono text-[#E06D22] uppercase tracking-wider font-bold mb-2">
                      CORE STRATEGIC FOCUS:
                    </div>
                    <ul className="space-y-1.5 text-xs text-[#F7F5F0]/80">
                      {art.keyPoints.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#E06D22]" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Card Action */}
                <div className="pt-4 border-t border-[#3E6B48]/20 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedArticle(art)}
                    className="text-xs font-mono font-bold uppercase tracking-wider text-[#E06D22] hover:text-white transition-colors flex items-center gap-1.5"
                  >
                    <span>Read Advisory Summary</span>
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>

                  <Link
                    to={`/contact?topic=${encodeURIComponent(art.title)}`}
                    className="text-xs font-mono text-[#F7F5F0]/60 hover:text-white transition-colors"
                  >
                    Inquire
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Article Modal */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-2xl bg-[#1C2420] border border-[#3E6B48] rounded-xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedArticle(null)}
              className="absolute top-4 right-4 text-[#F7F5F0]/60 hover:text-[#E06D22] p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-2 text-xs font-mono text-[#E06D22] uppercase tracking-wider mb-2">
              <span>{selectedArticle.category}</span>
              <span>•</span>
              <span>{selectedArticle.readTime}</span>
            </div>

            <h3 className="text-2xl font-bold text-[#F7F5F0] mb-4">
              {selectedArticle.title}
            </h3>

            <p className="text-sm text-[#F7F5F0]/80 leading-relaxed mb-6 font-light">
              {selectedArticle.summary}
            </p>

            <div className="p-4 rounded-lg bg-[#14281D] border border-[#3E6B48]/40 mb-6">
              <h4 className="text-xs font-mono font-bold text-[#E06D22] tracking-wider uppercase mb-3">
                Key Strategic Takeaways for Developers:
              </h4>
              <div className="space-y-3">
                {selectedArticle.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#F7F5F0]/90">
                    <span className="w-5 h-5 rounded bg-[#E06D22]/20 border border-[#E06D22]/40 text-[#E06D22] text-xs font-mono font-bold flex items-center justify-center shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-4 rounded bg-[#0E1C14] border border-[#3E6B48]/30 mb-6 text-xs text-[#F7F5F0]/70 font-mono leading-relaxed">
              <span className="text-[#E06D22] font-bold">ENGINEERING ADVISORY NOTE:</span> Every site possesses unique contour dynamics and rock strata. Feasibility assessments must always factor in local wind micro-climates, soil bearing tests, and continuous belay safety transitions.
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#3E6B48]/30">
              <button
                onClick={() => setSelectedArticle(null)}
                className="px-4 py-2 text-xs font-mono text-[#F7F5F0]/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Close
              </button>
              <Link
                to={`/contact?topic=${encodeURIComponent(selectedArticle.title)}`}
                onClick={() => setSelectedArticle(null)}
                className="px-5 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#c85b18] transition-colors"
              >
                Discuss This Topic With Us
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Consultation & Masterplanning CTA */}
      <section className="py-20 border-t border-[#3E6B48]/30 bg-gradient-to-b from-[#14281D] to-[#0A160F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-4">
            MASTERPLANNING FEASIBILITY
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F5F0] tracking-tight mb-4">
            NEED A SITE APPRAISAL OR ATTRACTION MIX STRATEGY?
          </h2>
          <p className="text-base text-[#F7F5F0]/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Our multidisciplinary team reviews site topo maps, satellite imagery, and commercial goals to craft high-return masterplans for adventure destinations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#E06D22] text-white text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#c85b18] transition-all duration-300 shadow-lg shadow-[#E06D22]/20"
            >
              REQUEST A SITE APPRAISAL
            </Link>
            <Link
              to="/attractions"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#1C2420] border border-[#3E6B48] text-[#F7F5F0] text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#14281D] hover:border-[#E06D22]/50 transition-all duration-300"
            >
              EXPLORE ATTRACTIONS PORTFOLIO
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
