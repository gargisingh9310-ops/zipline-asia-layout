import React, { useState } from 'react';
import { BookOpen, ArrowUpRight, X, CheckCircle2, FileText } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { knowledgeData } from '../../data/websiteData';

export default function KnowledgeHub() {
  const [activeArticle, setActiveArticle] = useState(null);
  const articles = Array.isArray(knowledgeData?.articles) ? knowledgeData.articles : [];

  return (
    <section
      id="knowledge"
      className="relative w-full py-12 sm:py-20 scroll-mt-16 sm:scroll-mt-20 bg-[#183B2B] text-white canopy-grid-dark overflow-hidden border-t border-[#C6A15B]/25"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-8 mb-10 border-b border-[#C6A15B]/25">
          <div className="max-w-2xl space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B] block">
                {knowledgeData?.label || "KNOWLEDGE HUB // ADVENTURE PARK INSIGHTS"}
              </span>
            </ScrollReveal>
            <ScrollReveal animation="fade-up" delay={0.05}>
              <h2 className="text-2xl sm:text-4xl lg:text-[2.6rem] font-display font-extrabold uppercase tracking-tight text-white leading-[1.08]">
                {knowledgeData?.heading || "PLANNING, ENGINEERING & INVESTMENT GUIDES."}
              </h2>
            </ScrollReveal>
          </div>

          <ScrollReveal animation="fade-up" delay={0.1}>
            <p className="text-xs sm:text-sm text-[#F7F5F0]/80 max-w-md font-normal leading-relaxed">
              {knowledgeData?.supportingText || "Practical guides, technical perspectives, and planning frameworks for developers and operators looking to develop world-class adventure destinations."}
            </p>
          </ScrollReveal>
        </div>

        {/* 7 Knowledge Hub Article Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((item, idx) => (
            <ScrollReveal
              key={item.id || idx}
              animation="fade-up"
              delay={0.05 * idx}
              className="group flex flex-col justify-between rounded-2xl bg-[#1F4735]/80 border border-white/10 hover:border-[#C6A15B] p-5 sm:p-6 transition-all duration-300 hover:-translate-y-1 shadow-md"
            >
              <div className="space-y-3.5">
                {/* Header Tag */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-[#183B2B] text-[#C6A15B] border border-[#C6A15B]/30 font-bold">
                    {item.category}
                  </span>
                  <span className="text-[10px] font-mono text-[#F7F5F0]/60">
                    GUIDE // 0{idx + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-display font-bold uppercase tracking-tight text-white group-hover:text-[#C6A15B] transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-[13px] text-[#F7F5F0]/75 leading-relaxed font-normal">
                  {item.summary}
                </p>

                {/* Key Planning Aspects */}
                {Array.isArray(item.keyPoints) && (
                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    <span className="text-[10px] font-mono uppercase text-[#C6A15B] font-bold block">
                      KEY PLANNING ASPECTS
                    </span>
                    {item.keyPoints.map((pt, pIdx) => (
                      <div key={pIdx} className="flex items-center gap-2 text-xs text-[#F7F5F0]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C6A15B] shrink-0" />
                        <span className="truncate">{pt}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Card Footer: Outline View CTA */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#A9B8C5]/70">
                  TECHNICAL OUTLINE
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(item)}
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-[#C6A15B] group-hover:text-white transition-colors cursor-pointer"
                >
                  <span>READ OVERVIEW</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#C6A15B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Planning Advisory Banner */}
        <div className="mt-12 p-6 rounded-2xl bg-[#1F4735]/50 border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <span className="text-xs font-mono uppercase tracking-wider text-[#C6A15B] font-bold block">
              ADVISORY & FEASIBILITY CONSULTATION
            </span>
            <p className="text-sm text-[#F7F5F0]">
              Planning a new adventure park or integrating attractions into an existing property?
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#C6A15B] text-[#292D2B] text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#B08B46] hover:text-white hover:shadow-glow-gold transition-all shadow-md shrink-0"
          >
            <span>REQUEST PLANNING CONSULTATION</span>
            <ArrowUpRight className="w-4 h-4 text-current" />
          </a>
        </div>

      </div>

      {/* Guide Overview Modal */}
      {activeArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-up">
          <div className="bg-[#183B2B] text-white rounded-2xl max-w-xl w-full border border-white/15 p-5 sm:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto my-auto">
            <button
              type="button"
              onClick={() => setActiveArticle(null)}
              className="absolute top-4 right-4 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors cursor-pointer"
              aria-label="Close guide modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-4">
              <span className="text-xs font-mono uppercase tracking-widest text-[#C6A15B] font-bold block">
                PLANNING FRAMEWORK // {activeArticle.category}
              </span>
              <h3 className="text-2xl font-display font-extrabold uppercase text-white">
                {activeArticle.title}
              </h3>
              <p className="text-sm text-[#F7F5F0]/80 leading-relaxed">
                {activeArticle.summary}
              </p>

              <div className="p-4 rounded-xl bg-[#1F4735] border border-white/10 space-y-3">
                <span className="text-xs font-mono uppercase text-[#C6A15B] font-bold block">
                  CORE EVALUATION CRITERIA
                </span>
                <div className="space-y-2">
                  {activeArticle.keyPoints?.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-[#F7F5F0]/85">
                      <CheckCircle2 className="w-4 h-4 text-[#C6A15B] shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-xs text-[#A9B8C5] italic">
                Note: This guide overview outlines core engineering and feasibility considerations. For a tailored project proposal and site-specific feasibility assessment, please contact our engineering team.
              </p>

              <div className="pt-2 flex items-center justify-end gap-3">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 rounded border border-white/20 text-xs font-mono font-bold uppercase text-white hover:bg-white/10 cursor-pointer"
                >
                  CLOSE
                </button>
                <a
                  href="#contact"
                  onClick={() => setActiveArticle(null)}
                  className="px-6 py-2.5 rounded bg-[#C6A15B] text-[#292D2B] text-xs font-mono font-bold uppercase hover:bg-[#B08B46] hover:text-white transition-colors"
                >
                  REQUEST PROJECT PROPOSAL
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}
