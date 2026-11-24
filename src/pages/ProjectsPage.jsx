import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Eye, X, CheckCircle2 } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { projectsData } from '../data/websiteData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeCategory);

  const projectMetrics = [
    { label: "Engineering Scope", value: "Turnkey 100%" },
    { label: "Operational Safety", value: "100% Verified" },
    { label: "Technical Heritage", value: "30 Yrs (Est. 1995)" }
  ];

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-50 border-emerald-500/40 text-emerald-800";
      case "Under Execution":
        return "bg-amber-50 border-amber-500/40 text-amber-800";
      case "Conceptual Design":
        return "bg-sky-50 border-sky-500/40 text-sky-800";
      case "Custom Fabrication":
        return "bg-purple-50 border-purple-500/40 text-purple-800";
      default:
        return "bg-[#C6A15B]/10 border-[#C6A15B]/30 text-[#C6A15B]";
    }
  };

  return (
    <div className="w-full bg-[#F7F5F0] text-[#292D2B]">
      {/* 01 — Full-Screen Page Hero (100svh, Dark & Cinematic) */}
      <PageHero
        eyebrow="COMMERCIAL PORTFOLIO & CASE STUDIES"
        title="PROJECTS & PORTFOLIO."
        highlightText="ENGINEERED ADVENTURE."
        subtitle="Explore our portfolio of completed adventure installations, active developments under execution, and conceptual 3D engineering renders for resorts, tourism boards, and amusement complexes."
        bgImage="/images/glass-bridge.jpg"
        breadcrumbs={[{ label: "Projects & Portfolio" }]}
        primaryCTA={{ label: "DISCUSS YOUR PROJECT", href: "/contact" }}
        secondaryCTA={{ label: "SAFETY & QUALITY STANDARDS", href: "/safety" }}
        metrics={projectMetrics}
        scrollTargetId="projects-content"
      />

      {/* 02 — Portfolio Integrity Banner & Category Filter Tabs (LIGHT Surface) */}
      <div id="projects-content" className="bg-[#FAF9F5] border-b border-[#292D2B]/15 py-4 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#6E7571]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="text-[#183B2B] font-bold">PORTFOLIO CLARITY:</span>
            <span>All projects clearly indicate execution status (Completed, Under Execution, or Conceptual 3D Renders).</span>
          </div>
          <div className="text-[#C6A15B] font-semibold">
            SINGLE-SOURCE TURNKEY ACCOUNTABILITY
          </div>
        </div>
      </div>

      {/* Sticky Filter Tabs */}
      <div className="sticky top-[56px] sm:top-[68px] z-30 w-full bg-[#F7F5F0]/95 backdrop-blur-md border-b border-[#292D2B]/15 py-3.5 px-4 sm:px-8 shadow-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 overflow-x-auto scrollbar-none">
          {projectsData.categories.map((cat) => (
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

      {/* 03 — Projects Grid (LIGHT: Crisp White Surface) */}
      <section className="py-16 sm:py-24 bg-white text-[#292D2B] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#292D2B]/10">
            <p className="text-xs font-mono text-[#6E7571] uppercase tracking-widest">
              SHOWING <span className="text-[#C6A15B] font-bold">{filteredProjects.length}</span> PROJECTS IN "{activeCategory.toUpperCase()}"
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((proj, idx) => (
              <ScrollReveal key={proj.id} delay={idx * 0.05}>
                <div className="group rounded-2xl overflow-hidden bg-[#F7F5F0] border border-[#292D2B]/10 hover:border-[#C6A15B] hover:bg-white hover:shadow-card-sand transition-all duration-300 flex flex-col h-full shadow-sm">
                  {/* Project Image */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#183B2B]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#183B2B]/80 via-transparent to-transparent" />

                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md shadow-xs ${getStatusBadgeStyle(proj.status)}`}>
                        {proj.badge || proj.status}
                      </span>
                    </div>

                    {/* Typology */}
                    <div className="absolute bottom-3 left-4 right-4">
                      <span className="text-xs font-mono text-white/90 drop-shadow-md uppercase tracking-wider font-semibold">
                        {proj.typology}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-display font-bold uppercase text-[#183B2B] mb-3 group-hover:text-[#C6A15B] transition-colors leading-snug">
                        {proj.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#6E7571] font-normal leading-relaxed mb-6">
                        {proj.description}
                      </p>

                      {/* Technical Parameters Box */}
                      <div className="space-y-2 mb-6 p-3.5 rounded-xl bg-white border border-[#292D2B]/10 text-xs font-mono shadow-2xs">
                        <div className="flex justify-between items-center text-[#6E7571]">
                          <span>SCOPE:</span>
                          <span className="text-[#183B2B] font-bold text-right truncate max-w-[65%]">{proj.scope}</span>
                        </div>
                        <div className="flex justify-between items-center text-[#6E7571]">
                          <span>ATTRACTIONS:</span>
                          <span className="text-[#C6A15B] font-semibold text-right truncate max-w-[65%]">{proj.attractions}</span>
                        </div>
                        {proj.specs && (
                          <div className="flex justify-between items-center text-[#6E7571]">
                            <span>SPECS:</span>
                            <span className="text-[#183B2B] font-normal text-right">{proj.specs}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Action Links */}
                    <div className="pt-4 border-t border-[#292D2B]/10 flex items-center justify-between gap-3">
                      <button
                        onClick={() => setSelectedProject(proj)}
                        className="text-xs font-mono font-bold uppercase tracking-wider text-[#183B2B] hover:text-[#C6A15B] transition-colors flex items-center gap-1.5 cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-[#C6A15B]" />
                        <span>View Dossier</span>
                      </button>

                      <Link
                        to={`/contact?project=${encodeURIComponent(proj.title)}`}
                        className="px-3.5 py-1.5 rounded bg-[#C6A15B] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#B08B46] transition-colors flex items-center gap-1 shadow-xs"
                      >
                        <span>Inquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 04 — Technical Milestones (DARK High-Impact Accent #183B2B) */}
      <section className="py-16 sm:py-24 bg-[#183B2B] text-white canopy-grid-dark overflow-hidden border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="max-w-3xl mb-12 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B] block">
              ENGINEERING BENCHMARKS
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-white tracking-tight">
              Signature Rigging & Structural Feats
            </h2>
            <p className="text-sm sm:text-base text-[#F7F5F0]/80 font-light leading-relaxed">
              Our engineering portfolio is defined by solving complex terrain challenges through rigorous wire rope catenary calculations, cantilever steel structures, and tuned harmonic damping.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-[#1F4735] border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-bold text-[#C6A15B] block">Mega-Span</span>
              <h3 className="text-lg font-display font-bold uppercase text-white">Valley Zipline Corridors</h3>
              <p className="text-xs text-[#F7F5F0]/70 leading-relaxed font-light">
                High-tension wire rope catenary curves spanning mountainous ravines with passive magnetic terminal deceleration.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1F4735] border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-bold text-[#183B2B] block">Cantilever</span>
              <h3 className="text-lg font-display font-bold uppercase text-white">Steel Bungee Platforms</h3>
              <p className="text-xs text-[#F7F5F0]/70 leading-relaxed font-light">
                Structural truss platforms anchored to sheer rock faces with certified 12:1 load safety factor anchorages.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#1F4735] border border-white/10 space-y-3">
              <span className="text-2xl font-mono font-bold text-[#C6A15B] block">Continuous</span>
              <h3 className="text-lg font-display font-bold uppercase text-white">Belay Aerial Circuits</h3>
              <p className="text-xs text-[#F7F5F0]/70 leading-relaxed font-light">
                Uninterrupted continuous track aerial obstacle circuits ensuring zero unclipped participant transitions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05 — Bottom CTA (LIGHT Surface: Warm Sand) */}
      <section className="py-16 sm:py-20 bg-[#F7F5F0] text-[#292D2B] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#C6A15B]">
            TURNKEY ENGINEERING RIGOR
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase text-[#183B2B] tracking-tight">
            Ready to Develop a Landmark Adventure Destination?
          </h2>
          <p className="text-sm sm:text-base text-[#6E7571] max-w-2xl mx-auto font-normal leading-relaxed">
            Whether developing a multi-acre outdoor park or integrating a scenic long-span zipline into a resort, our engineering team manages every phase from feasibility to commissioning.
          </p>
          <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-md bg-[#C6A15B] text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#B08B46] transition-all shadow-md"
            >
              REQUEST A PROJECT PROPOSAL
            </Link>
            <Link
              to="/safety"
              className="px-8 py-4 rounded-md bg-white border border-white/10 text-[#183B2B] text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#FAF9F5] transition-all"
            >
              REVIEW SAFETY & QUALITY STANDARDS
            </Link>
          </div>
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-3xl bg-white border border-[#292D2B]/15 rounded-2xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#6E7571] hover:text-[#183B2B] p-2 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${getStatusBadgeStyle(selectedProject.status)}`}>
                {selectedProject.badge || selectedProject.status}
              </span>
              <span className="text-xs font-mono text-[#C6A15B] uppercase tracking-wider font-bold">
                {selectedProject.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-[#183B2B] mb-4 leading-tight">
              {selectedProject.title}
            </h3>

            <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden mb-6 border border-[#292D2B]/15 bg-[#183B2B]">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/10">
                <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider mb-1 font-bold">PROJECT SCOPE</div>
                <div className="text-sm font-semibold text-[#183B2B]">{selectedProject.scope}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/10">
                <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider mb-1 font-bold">INSTALLED ATTRACTIONS</div>
                <div className="text-sm font-semibold text-[#183B2B]">{selectedProject.attractions}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/10">
                <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider mb-1 font-bold">ENGINEERING TYPOLOGY</div>
                <div className="text-sm font-semibold text-[#183B2B]">{selectedProject.typology}</div>
              </div>
              <div className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#292D2B]/10">
                <div className="text-[10px] font-mono text-[#C6A15B] uppercase tracking-wider mb-1 font-bold">SPECIFICATIONS</div>
                <div className="text-sm font-semibold text-[#183B2B]">{selectedProject.specs || "Commercial Standard"}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-[#C6A15B] tracking-wider uppercase mb-2">
                PROJECT OVERVIEW & ENGINEERING EXECUTION:
              </h4>
              <p className="text-sm text-[#6E7571] leading-relaxed font-normal">
                {selectedProject.description}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#292D2B]/10">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-mono text-[#6E7571] hover:text-[#183B2B] transition-colors uppercase tracking-wider cursor-pointer"
              >
                Close
              </button>
              <Link
                to={`/contact?project=${encodeURIComponent(selectedProject.title)}`}
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded bg-[#C6A15B] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#B08B46] transition-colors"
              >
                Inquire Similar Project
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
