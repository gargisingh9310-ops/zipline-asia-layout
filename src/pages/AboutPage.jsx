import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, 
  Compass, 
  Award, 
  CheckCircle2, 
  ArrowUpRight, 
  Wrench, 
  Layers, 
  Workflow, 
  Target,
  Sparkles
} from 'lucide-react';
import PageHeader from '../components/common/PageHeader';
import Founder from '../components/Founder/Founder';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import Process from '../components/Process/Process';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { aboutData, brandData } from '../data/websiteData';

export default function AboutPage() {
  return (
    <div className="w-full bg-[#14281D] text-white">
      {/* 01 — Page Header */}
      <PageHeader
        badge="ABOUT ZIPLINE ASIA"
        title="BUILT FOR ADVENTURE. ENGINEERED FOR LONGEVITY."
        subtitle="At ZIPLINE ASIA, we believe that adventure is more than an activity; it is an engineered experience that brings people together, encourages exploration, and creates lasting commercial destination value."
        breadcrumbs={[{ label: 'About Us' }]}
        ctaText="REQUEST A PROPOSAL"
        ctaHref="/contact"
        stats={[
          { value: "30+ Years", label: "Heritage (Est. 1995)" },
          { value: "12 : 1", label: "Commercial Safety Factor" },
          { value: "100%", label: "Turnkey Single Source" }
        ]}
      />

      {/* 02 — Company Story & Heritage (Warm Sand Surface) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#F7F5F0] text-[#1C2420] canopy-grid-light overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            
            {/* Left Column: Narrative Story */}
            <div className="lg:col-span-7 space-y-6">
              <ScrollReveal animation="fade-up">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                  OUR ORIGIN & HERITAGE
                </span>
                <h2 className="text-2xl sm:text-4xl lg:text-[2.5rem] font-display font-extrabold uppercase tracking-tight text-[#14281D] leading-[1.12] mt-2">
                  {aboutData.story?.title || "Three Decades of Technical Excellence"}
                </h2>
                <p className="text-sm sm:text-base text-[#3E6B48] font-semibold mt-1">
                  {aboutData.story?.subtitle || "Pioneering Commercial Adventure Infrastructure Since 1995"}
                </p>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.1}>
                <div className="space-y-4 text-sm sm:text-base text-[#525E57] leading-relaxed">
                  {aboutData.story?.content?.map((para, idx) => (
                    <p key={idx}>{para}</p>
                  ))}
                </div>
              </ScrollReveal>

              {/* Heritage Milestones */}
              <ScrollReveal animation="fade-up" delay={0.15}>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-[#1C2420]/15">
                  <div className="p-3.5 rounded-xl bg-white border border-[#1C2420]/10 shadow-2xs space-y-1">
                    <span className="text-2xl font-mono font-extrabold text-[#E06D22] block">1995</span>
                    <span className="text-xs font-bold text-[#14281D] uppercase block">Technical Inception</span>
                    <p className="text-[11px] text-[#525E57]">Pioneered commercial wire rope catenary systems in high-altitude terrain.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#1C2420]/10 shadow-2xs space-y-1">
                    <span className="text-2xl font-mono font-extrabold text-[#3E6B48] block">100+</span>
                    <span className="text-xs font-bold text-[#14281D] uppercase block">Engineered Systems</span>
                    <p className="text-[11px] text-[#525E57]">Commercial ziplines, cantilever bungee towers, giant swings, and rope courses.</p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-white border border-[#1C2420]/10 shadow-2xs space-y-1">
                    <span className="text-2xl font-mono font-extrabold text-[#14281D] block">Turnkey</span>
                    <span className="text-xs font-bold text-[#14281D] uppercase block">Single-Source</span>
                    <p className="text-[11px] text-[#525E57]">Single commercial accountability from topography mapping to client handover.</p>
                  </div>
                </div>
              </ScrollReveal>

              <ScrollReveal animation="fade-up" delay={0.2}>
                <Link
                  to="/solutions"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-md mt-2"
                >
                  <span>EXPLORE OUR TURNKEY SOLUTIONS</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </Link>
              </ScrollReveal>
            </div>

            {/* Right Column: Architectural Photography */}
            <div className="lg:col-span-5 relative">
              <ScrollReveal animation="zoom-in" delay={0.15}>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#1C2420]/15 bg-[#14281D]">
                  <img
                    src="/images/zipline-tower-launch.jpg"
                    alt="ZIPLINE ASIA Commercial Zipline Launch Tower Installation"
                    className="w-full h-[400px] sm:h-[500px] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/80 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Floating Caption Tag */}
                  <div className="absolute bottom-5 left-5 right-5 p-4 rounded-xl bg-[#14281D]/90 backdrop-blur-md border border-[#3E6B48]/40 text-white">
                    <span className="text-[10px] font-mono uppercase text-[#E06D22] font-bold block mb-1">
                      COMMERCIAL ADVENTURE INFRASTRUCTURE
                    </span>
                    <p className="text-xs text-[#F7F5F0]/90">
                      Engineered launch tower and valley catenary wire rope systems designed for continuous commercial operation.
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

          </div>

        </div>
      </section>

      {/* 03 — Vision & Mission (Deep Pine Green Surface) */}
      <section className="relative w-full py-16 sm:py-24 bg-[#14281D] text-white canopy-grid-dark overflow-hidden border-t border-[#3E6B48]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          
          <div className="max-w-3xl mb-12 space-y-2">
            <ScrollReveal animation="fade-up">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                PURPOSE & GUIDING PRINCIPLES
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white leading-tight">
                Our Vision & Mission
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision Card */}
            <ScrollReveal animation="fade-up" delay={0.05} className="h-full">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#193325] border border-[#3E6B48]/40 hover:border-[#E06D22] transition-colors shadow-card-pine h-full flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#14281D] border border-[#3E6B48]/50 flex items-center justify-center text-[#E06D22]">
                    <Compass className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E06D22] font-bold block">
                    OUR VISION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white">
                    Destination Transformation
                  </h3>
                  <p className="text-sm sm:text-base text-[#F7F5F0]/80 leading-relaxed font-normal">
                    {aboutData.visionMission?.vision}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#3E6B48]/30 flex items-center justify-between text-xs font-mono text-[#F7F5F0]/60">
                  <span>EXPANDING DESTINATION CAPABILITIES</span>
                  <Sparkles className="w-4 h-4 text-[#E06D22]" />
                </div>
              </div>
            </ScrollReveal>

            {/* Mission Card */}
            <ScrollReveal animation="fade-up" delay={0.1} className="h-full">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#193325] border border-[#3E6B48]/40 hover:border-[#3E6B48] transition-colors shadow-card-pine h-full flex flex-col justify-between space-y-5">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-[#14281D] border border-[#3E6B48]/50 flex items-center justify-center text-[#3E6B48]">
                    <ShieldCheck className="w-6 h-6 stroke-[2]" />
                  </div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#3E6B48] font-bold block">
                    OUR MISSION
                  </span>
                  <h3 className="text-xl sm:text-2xl font-display font-bold uppercase tracking-tight text-white">
                    Engineering Precision & Safety
                  </h3>
                  <p className="text-sm sm:text-base text-[#F7F5F0]/80 leading-relaxed font-normal">
                    {aboutData.visionMission?.mission}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#3E6B48]/30 flex items-center justify-between text-xs font-mono text-[#F7F5F0]/60">
                  <span>12:1 COMMERCIAL RIGGING FACTOR</span>
                  <Award className="w-4 h-4 text-[#3E6B48]" />
                </div>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* 04 — Founder & Leadership Section */}
      <Founder />

      {/* 05 — Our Approach / Phased Methodology */}
      <Process />

      {/* 06 — Why Choose ZIPLINE ASIA (Matrix) */}
      <WhyChoose />

      {/* 07 — Bottom Destination Proposal CTA Banner */}
      <section className="relative w-full py-16 bg-[#14281D] text-white border-t border-[#3E6B48]/30 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 text-center flex flex-col items-center space-y-4">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22]">
            TURNKEY ENGINEERING COLLABORATION
          </span>
          <h2 className="text-2xl sm:text-4xl font-display font-extrabold uppercase tracking-tight text-white max-w-2xl">
            Have an Adventure Infrastructure Project in Mind?
          </h2>
          <p className="text-sm sm:text-base text-[#F7F5F0]/80 max-w-xl mx-auto">
            Connect directly with our engineering team to evaluate site feasibility, catenary cable design, and project planning parameters.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-md bg-[#E06D22] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta transition-all shadow-xl"
            >
              <span>REQUEST PROJECT PROPOSAL</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
