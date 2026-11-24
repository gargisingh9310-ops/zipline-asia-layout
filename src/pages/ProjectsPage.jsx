import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { projectsData } from '../data/websiteData';

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === "All"
    ? projectsData.projects
    : projectsData.projects.filter(p => p.category === activeCategory);

  const projectMetrics = [
    { label: "Engineering Scope", value: "Turnkey" },
    { label: "Operational Safety", value: "100%" },
    { label: "Project Types", value: "6 Categories" },
    { label: "Technical Heritage", value: "Est. 1995" }
  ];

  const getStatusBadgeStyle = (status) => {
    switch (status) {
      case "Completed":
        return "bg-emerald-950/80 border-emerald-500/50 text-emerald-400";
      case "Under Execution":
        return "bg-amber-950/80 border-amber-500/50 text-amber-400";
      case "Conceptual Design":
        return "bg-sky-950/80 border-sky-500/50 text-sky-400";
      case "Custom Fabrication":
        return "bg-purple-950/80 border-purple-500/50 text-purple-400";
      default:
        return "bg-[#E06D22]/20 border-[#E06D22]/50 text-[#E06D22]";
    }
  };

  return (
    <div className="bg-[#14281D] text-[#F7F5F0] min-h-screen pt-20">
      {/* Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Projects & Portfolio" }]}
        eyebrow="COMMERCIAL PORTFOLIO & CASE STUDIES"
        title="PROJECTS & PORTFOLIO."
        subtitle="ENGINEERED ADVENTURE INFRASTRUCTURE FOR REMARKABLE COMMERCIAL DESTINATIONS."
        description="Explore our portfolio of completed adventure installations, active developments under execution, and conceptual 3D engineering renders for resorts, tourism boards, and amusement complexes."
        metrics={projectMetrics}
        ctaLabel="DISCUSS YOUR PROJECT"
        ctaHref="/contact"
      />

      {/* Professional Disclosure / Integrity Banner */}
      <section className="bg-[#0E1C14] border-b border-[#3E6B48]/30 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-[#F7F5F0]/70">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-white font-semibold">PORTFOLIO CLARITY & ENGINEERING INTEGRITY:</span>
            <span>All projects clearly indicate execution status (Completed, Under Execution, or Conceptual 3D Renders).</span>
          </div>
          <div className="text-[#E06D22] font-semibold">
            SINGLE-SOURCE TURNKEY ACCOUNTABILITY
          </div>
        </div>
      </section>

      {/* Filter Tabs Section */}
      <section className="sticky top-20 z-30 bg-[#14281D]/95 backdrop-blur-md border-b border-[#3E6B48]/30 py-4 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#3E6B48] scrollbar-track-transparent">
            {projectsData.categories.map((cat) => (
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

      {/* Projects Grid */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <p className="text-xs font-mono text-[#F7F5F0]/60 uppercase tracking-widest">
            SHOWING <span className="text-[#E06D22] font-bold">{filteredProjects.length}</span> PROJECTS IN "{activeCategory.toUpperCase()}"
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, idx) => (
            <ScrollReveal key={proj.id} delay={idx * 0.05}>
              <div className="group rounded-xl overflow-hidden bg-[#1C2420] border border-[#3E6B48]/30 hover:border-[#E06D22]/50 transition-all duration-300 flex flex-col h-full shadow-lg">
                {/* Project Image */}
                <div className="relative h-60 w-full overflow-hidden bg-black/40">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1C2420] via-transparent to-black/30" />

                  {/* Status Badge */}
                  <div className="absolute top-4 left-4">
                    <span className={`px-2.5 py-1 rounded text-[11px] font-mono font-bold uppercase tracking-wider border backdrop-blur-md ${getStatusBadgeStyle(proj.status)}`}>
                      {proj.badge || proj.status}
                    </span>
                  </div>

                  {/* Typology */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-mono text-[#E06D22] uppercase tracking-wider font-semibold">
                      {proj.typology}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-[#F7F5F0] mb-3 group-hover:text-[#E06D22] transition-colors leading-snug">
                      {proj.title}
                    </h3>
                    <p className="text-sm text-[#F7F5F0]/70 font-light leading-relaxed mb-6">
                      {proj.description}
                    </p>

                    {/* Technical Parameters */}
                    <div className="space-y-2 mb-6 p-3.5 rounded bg-[#14281D]/80 border border-[#3E6B48]/20 text-xs font-mono">
                      <div className="flex justify-between items-center text-[#F7F5F0]/60">
                        <span>SCOPE:</span>
                        <span className="text-[#F7F5F0] font-medium text-right truncate max-w-[65%]">{proj.scope}</span>
                      </div>
                      <div className="flex justify-between items-center text-[#F7F5F0]/60">
                        <span>ATALYSIS:</span>
                        <span className="text-[#E06D22] font-semibold text-right truncate max-w-[65%]">{proj.attractions}</span>
                      </div>
                      {proj.specs && (
                        <div className="flex justify-between items-center text-[#F7F5F0]/60">
                          <span>SPECS:</span>
                          <span className="text-[#F7F5F0] font-light text-right">{proj.specs}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 border-t border-[#3E6B48]/20 flex items-center justify-between gap-3">
                    <button
                      onClick={() => setSelectedProject(proj)}
                      className="text-xs font-mono font-bold uppercase tracking-wider text-[#F7F5F0]/70 hover:text-[#E06D22] transition-colors flex items-center gap-1.5"
                    >
                      <span>View Dossier</span>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </button>

                    <Link
                      to={`/contact?project=${encodeURIComponent(proj.title)}`}
                      className="px-3.5 py-1.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#c85b18] transition-colors flex items-center gap-1"
                    >
                      <span>Inquire</span>
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Project Details Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl bg-[#1C2420] border border-[#3E6B48] rounded-xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-[#F7F5F0]/60 hover:text-[#E06D22] p-2 transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex items-center gap-3 mb-2">
              <span className={`px-2.5 py-0.5 rounded text-[10px] font-mono font-bold uppercase tracking-wider border ${getStatusBadgeStyle(selectedProject.status)}`}>
                {selectedProject.badge || selectedProject.status}
              </span>
              <span className="text-xs font-mono text-[#E06D22] uppercase tracking-wider">
                {selectedProject.category}
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F5F0] mb-4 leading-tight">
              {selectedProject.title}
            </h3>

            <div className="relative h-64 sm:h-80 w-full rounded-lg overflow-hidden mb-6 border border-[#3E6B48]/30">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-3.5 rounded bg-[#14281D] border border-[#3E6B48]/30">
                <div className="text-[10px] font-mono text-[#E06D22] uppercase tracking-wider mb-1">PROJECT SCOPE</div>
                <div className="text-sm font-medium text-[#F7F5F0]">{selectedProject.scope}</div>
              </div>
              <div className="p-3.5 rounded bg-[#14281D] border border-[#3E6B48]/30">
                <div className="text-[10px] font-mono text-[#E06D22] uppercase tracking-wider mb-1">INSTALLED ATTRACTIONS</div>
                <div className="text-sm font-medium text-[#F7F5F0]">{selectedProject.attractions}</div>
              </div>
              <div className="p-3.5 rounded bg-[#14281D] border border-[#3E6B48]/30">
                <div className="text-[10px] font-mono text-[#E06D22] uppercase tracking-wider mb-1">ENGINEERING TYPOLOGY</div>
                <div className="text-sm font-medium text-[#F7F5F0]">{selectedProject.typology}</div>
              </div>
              <div className="p-3.5 rounded bg-[#14281D] border border-[#3E6B48]/30">
                <div className="text-[10px] font-mono text-[#E06D22] uppercase tracking-wider mb-1">SPECIFICATIONS</div>
                <div className="text-sm font-medium text-[#F7F5F0]">{selectedProject.specs || "Commercial Standard"}</div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-mono font-bold text-[#E06D22] tracking-wider uppercase mb-2">
                PROJECT OVERVIEW & ENGINEERING EXECUTION:
              </h4>
              <p className="text-sm text-[#F7F5F0]/80 leading-relaxed font-light">
                {selectedProject.description}
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 pt-4 border-t border-[#3E6B48]/30">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 text-xs font-mono text-[#F7F5F0]/70 hover:text-white transition-colors uppercase tracking-wider"
              >
                Close
              </button>
              <Link
                to={`/contact?project=${encodeURIComponent(selectedProject.title)}`}
                onClick={() => setSelectedProject(null)}
                className="px-5 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold tracking-wider uppercase hover:bg-[#c85b18] transition-colors"
              >
                Inquire Similar Project
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Turnkey Assurance Banner */}
      <section className="py-20 border-t border-[#3E6B48]/30 bg-gradient-to-b from-[#14281D] to-[#0A160F]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-4">
            TURNKEY ENGINEERING RIGOR
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F7F5F0] tracking-tight mb-4">
            READY TO DEVELOP A LANDMARK ADVENTURE DESTINATION?
          </h2>
          <p className="text-base text-[#F7F5F0]/70 max-w-2xl mx-auto font-light leading-relaxed mb-8">
            Whether developing a multi-acre outdoor park or integrating a scenic long-span zipline into a resort, our engineering team manages every phase from feasibility to commissioning.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#E06D22] text-white text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#c85b18] transition-all duration-300 shadow-lg shadow-[#E06D22]/20"
            >
              REQUEST A PROJECT PROPOSAL
            </Link>
            <Link
              to="/safety"
              className="w-full sm:w-auto px-8 py-4 rounded bg-[#1C2420] border border-[#3E6B48] text-[#F7F5F0] text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#14281D] hover:border-[#E06D22]/50 transition-all duration-300"
            >
              REVIEW SAFETY & QUALITY STANDARDS
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
