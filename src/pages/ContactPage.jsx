import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2, ChevronRight, Phone, Mail, MapPin, Sparkles } from 'lucide-react';
import PageHero from '../components/common/PageHero';
import ScrollReveal from '../components/reactbits/ScrollReveal';
import { contactData } from '../data/websiteData';

export default function ContactPage() {
  const location = useLocation();

  const [formData, setFormData] = useState({
    fullName: '',
    company: '',
    email: '',
    phone: '',
    location: '',
    projectType: contactData.projectTypes[0],
    landArea: '',
    attractions: '',
    budget: contactData.budgetRanges[2],
    description: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Auto-populate from query params if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const sector = params.get('sector');
    const project = params.get('project');
    const topic = params.get('topic');
    const attraction = params.get('attraction');
    const service = params.get('service');

    if (sector) {
      setFormData(prev => ({
        ...prev,
        description: `Inquiry regarding adventure infrastructure for sector: ${sector}. \n\n`,
        projectType: 'Turnkey Adventure Park Development'
      }));
    } else if (project) {
      setFormData(prev => ({
        ...prev,
        description: `Inquiry regarding project similar to: ${project}. \n\n`,
        projectType: 'Turnkey Adventure Park Development'
      }));
    } else if (topic) {
      setFormData(prev => ({
        ...prev,
        description: `Advisory inquiry regarding Knowledge Hub topic: ${topic}. \n\n`
      }));
    } else if (attraction) {
      setFormData(prev => ({
        ...prev,
        attractions: attraction,
        description: `Technical inquiry regarding attraction: ${attraction}. \n\n`
      }));
    } else if (service) {
      setFormData(prev => ({
        ...prev,
        description: `Inquiry regarding engineering service: ${service}. \n\n`
      }));
    }
  }, [location.search]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Simulate submission
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 1200);
  };

  const contactMetrics = [
    { label: "Turnaround Time", value: "48-Hour Response" },
    { label: "Engineering Scope", value: "Turnkey End-to-End" },
    { label: "Geographic Delivery", value: "Pan-Asia & Global" }
  ];

  const faqs = [
    {
      q: "What initial information is needed to begin a site appraisal?",
      a: "Ideally, site boundary dimensions, Google Earth KMZ or topographical contours, high-level photos of the terrain, target demographics, and your anticipated timeline."
    },
    {
      q: "Do you design for natural forest trees or dedicated steel towers?",
      a: "Both. We design environmentally sensitive tree-mounted installations using protective cambium wraps as well as free-standing hot-dip galvanized steel towers engineered to site wind loads."
    },
    {
      q: "What international safety standards govern your installations?",
      a: "Our engineering and rigging practices adhere to EN 15567 (European Standards for Ropes Courses & Ziplines) and ACCT (Association for Challenge Course Technology) safety guidelines."
    },
    {
      q: "Do you provide on-site operator and staff training?",
      a: "Yes. Every turnkey installation includes comprehensive on-site operator training, daily inspection checklists, emergency rescue drills, and operational manuals."
    }
  ];

  return (
    <div className="w-full bg-[#F7F5F0] text-[#1C2420]">
      {/* 01 — Full-Screen Page Hero (100svh, Dark & Cinematic) */}
      <PageHero
        eyebrow="START A DISCUSSION // B2B CONSULTATION"
        title="REQUEST A PROJECT"
        highlightText="PROPOSAL."
        subtitle="Share your site parameters, attraction vision, and commercial timeline. Receive a tailored engineering feasibility and budget estimate within 48 hours."
        bgImage="/images/giant-swing.jpg"
        breadcrumbs={[{ label: "Contact Us" }]}
        primaryCTA={{ label: "FILL PROPOSAL FORM", href: "#contact-content" }}
        secondaryCTA={{ label: "EXPLORE SOLUTIONS", href: "/solutions" }}
        metrics={contactMetrics}
        scrollTargetId="contact-content"
      />

      {/* 02 — Main Consultation Section (LIGHT: Warm Sand Surface #F7F5F0) */}
      <section id="contact-content" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Coordinates & Parameters */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="p-8 rounded-2xl bg-white border border-[#3E6B48]/15 shadow-sm space-y-4">
                <div className="text-xs font-mono text-[#E06D22] tracking-widest uppercase font-bold">
                  DIRECT B2B COORDINATION
                </div>
                <h3 className="text-2xl font-display font-extrabold uppercase text-[#14281D]">
                  Engineering Partnership
                </h3>
                <p className="text-xs sm:text-sm text-[#525E57] font-normal leading-relaxed">
                  ZIPLINE ASIA works directly with resort owners, developers, tourism authorities, and adventure operators across India, Asia, and international markets.
                </p>

                <div className="space-y-3 pt-3 border-t border-[#1C2420]/10 text-xs font-mono">
                  {contactData.contactPoints.map((cp, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#F7F5F0] border border-[#3E6B48]/15">
                      <div className="text-[#E06D22] font-bold uppercase tracking-wider mb-1">
                        {cp.label}
                      </div>
                      <div className="text-[#14281D] font-normal leading-relaxed">
                        {cp.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Turnaround Protocol Box */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-2xl bg-white border border-[#3E6B48]/15 shadow-sm space-y-2">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-[#14281D] font-bold uppercase tracking-wider">
                    PROPOSAL TURNAROUND PROTOCOL
                  </span>
                </div>
                <p className="text-xs text-[#525E57] font-normal leading-relaxed">
                  Following submission of your project parameters, our engineering desk reviews site topography and produces an initial attraction configuration outline within 48 to 72 business hours.
                </p>
              </div>
            </ScrollReveal>

            {/* FAQ Accordion / Box */}
            <ScrollReveal delay={0.15}>
              <div className="p-6 sm:p-8 rounded-2xl bg-white border border-[#3E6B48]/15 shadow-sm space-y-4">
                <div className="text-xs font-mono text-[#E06D22] tracking-widest uppercase font-bold">
                  FREQUENTLY ASKED QUESTIONS
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#1C2420]/10 pb-3 last:border-0 last:pb-0">
                      <div className="text-xs sm:text-sm font-display font-bold uppercase text-[#14281D] mb-1">
                        {faq.q}
                      </div>
                      <p className="text-xs text-[#525E57] font-normal leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 10-Field Form (LIGHT: Spacious White Card) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#3E6B48]/20 shadow-xl relative">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-3">
                    STEP 01 // SPECIFY PARAMETERS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-display font-extrabold uppercase text-[#14281D]">
                    Project Consultation Form
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#525E57] font-normal">
                    Complete the details below to receive a customized feasibility proposal from our engineering team.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-[#F7F5F0] border border-emerald-500/50 text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mx-auto mb-4 text-emerald-600">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-display font-extrabold uppercase text-[#14281D] mb-2">
                      Proposal Request Received
                    </h4>
                    <p className="text-xs sm:text-sm text-[#525E57] font-normal max-w-md mx-auto mb-6 leading-relaxed">
                      Thank you for sharing your project parameters. A technical director from ZIPLINE ASIA will review your site details and contact you within 48 business hours.
                    </p>
                    <div className="inline-block p-3 rounded-lg bg-white border border-[#3E6B48]/20 text-xs font-mono text-[#E06D22] font-bold mb-6 shadow-2xs">
                      REFERENCE TICKET: ZA-PROPOSAL-{Math.floor(100000 + Math.random() * 900000)}
                    </div>
                    <div>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            company: '',
                            email: '',
                            phone: '',
                            location: '',
                            projectType: contactData.projectTypes[0],
                            landArea: '',
                            attractions: '',
                            budget: contactData.budgetRanges[2],
                            description: ''
                          });
                        }}
                        className="px-6 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] transition-colors cursor-pointer"
                      >
                        Submit Another Request
                      </button>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Row 1: Name & Company */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Organization / Company *
                        </label>
                        <input
                          type="text"
                          required
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Highland Valley Resorts"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rahul@highlandresorts.com"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 3: Location & Project Typology */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Project Location (City / State / Country) *
                        </label>
                        <input
                          type="text"
                          required
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Manali, Himachal Pradesh, India"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Project Typology *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        >
                          {contactData.projectTypes.map((pt, idx) => (
                            <option key={idx} value={pt} className="bg-white text-[#14281D]">
                              {pt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Land Area & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Land / Footprint Area
                        </label>
                        <input
                          type="text"
                          name="landArea"
                          value={formData.landArea}
                          onChange={handleChange}
                          placeholder="e.g. 5 Acres / 15,000 sq ft"
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                          Estimated Budget Framework *
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                        >
                          {contactData.budgetRanges.map((br, idx) => (
                            <option key={idx} value={br} className="bg-white text-[#14281D]">
                              {br}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Desired Attractions */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                        Desired Attraction Mix (Optional)
                      </label>
                      <input
                        type="text"
                        name="attractions"
                        value={formData.attractions}
                        onChange={handleChange}
                        placeholder="e.g. Zipline, Sky Cycle, Bungee, 2-Tier Rope Course"
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm"
                      />
                    </div>

                    {/* Project Overview */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#14281D] font-bold mb-2">
                        Project Overview & Site Context *
                      </label>
                      <textarea
                        required
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide details about terrain topography, natural features, target audience, planned timeline, or specific engineering requirements..."
                        className="w-full px-4 py-3 rounded-lg bg-[#FAF9F5] border border-[#3E6B48]/25 text-[#14281D] placeholder-[#525E57]/40 focus:outline-none focus:bg-white focus:border-[#E06D22] transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl bg-[#E06D22] text-white text-xs sm:text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#C85B17] transition-all duration-300 shadow-xl shadow-[#E06D22]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                      >
                        {submitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                            </svg>
                            <span>PROCESSING PROPOSAL REQUEST...</span>
                          </>
                        ) : (
                          <>
                            <span>SUBMIT PROPOSAL REQUEST</span>
                            <ArrowUpRight className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[11px] font-mono text-[#525E57] text-center">
                      * All submitted project specifications are treated under strict commercial non-disclosure.
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 03 — Technical Support Coordinates & Geographic Coverage (DARK High-Impact Accent) */}
      <section className="py-16 sm:py-24 bg-[#14281D] text-white canopy-grid-dark overflow-hidden border-t border-[#3E6B48]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-[#193325] border border-[#3E6B48]/40 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                GEOGRAPHIC REACH
              </span>
              <h3 className="text-xl font-display font-bold uppercase text-white">
                Pan-Asia & International
              </h3>
              <p className="text-xs text-[#F7F5F0]/75 leading-relaxed font-light">
                Turnkey installations and technical rigging oversight executed across mountainous and coastal terrains throughout India, South Asia, and international destinations.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#193325] border border-[#3E6B48]/40 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#3E6B48] block">
                RESPONSE GUARANTEE
              </span>
              <h3 className="text-xl font-display font-bold uppercase text-white">
                48-Hour Turnaround
              </h3>
              <p className="text-xs text-[#F7F5F0]/75 leading-relaxed font-light">
                Every commercial inquiry receives a dedicated project appraisal and preliminary attraction configuration matrix from our senior rigging engineering desk.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#193325] border border-[#3E6B48]/40 space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block">
                TECHNICAL INTEGRITY
              </span>
              <h3 className="text-xl font-display font-bold uppercase text-white">
                EN 15567 / ACCT
              </h3>
              <p className="text-xs text-[#F7F5F0]/75 leading-relaxed font-light">
                All structural calculations, catenary load curves, and proof-load testing protocols strictly align with international adventure industry standards.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
