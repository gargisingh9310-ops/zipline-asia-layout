import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import PageHeader from '../components/common/PageHeader';
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
    { label: "Turnaround Time", value: "48 Hours" },
    { label: "Global Reach", value: "Pan-Asia" },
    { label: "Project Delivery", value: "Turnkey" },
    { label: "Engineering Scope", value: "End-to-End" }
  ];

  const faqs = [
    {
      q: "What information is needed to begin a feasibility study?",
      a: "Ideally, site boundary dimensions (or Google Earth KMZ / topographical survey), photos of terrain, target guest demographics, and anticipated timeline."
    },
    {
      q: "Do you design for natural trees or dedicated steel towers?",
      a: "Both. We design environmentally sensitive tree-mounted installations using protective cambium wraps as well as free-standing hot-dip galvanized steel towers engineered to site wind loads."
    },
    {
      q: "What safety standards govern your installations?",
      a: "Our engineering and rigging practices adhere to EN 15567 (European Standards for Ropes Courses & Ziplines) and ACCT (Association for Challenge Course Technology) safety guidelines."
    },
    {
      q: "Do you provide operator and staff training?",
      a: "Yes. Every turnkey installation includes comprehensive on-site operator training, daily inspection checklists, emergency rescue drills, and operational manuals."
    }
  ];

  return (
    <div className="bg-[#14281D] text-[#F7F5F0] min-h-screen pt-20">
      {/* Page Header */}
      <PageHeader
        breadcrumbs={[{ label: "Contact Us" }]}
        eyebrow="COMMERCIAL PROPOSAL & SITE ADVISORY"
        title="REQUEST A PROJECT PROPOSAL."
        subtitle="SHARE YOUR PROJECT PARAMETERS. RECEIVE A TAILORED ENGINEERING FEASIBILITY & ESTIMATE."
        description="Whether you are planning a multi-acre outdoor adventure park, a scenic resort zipline, an indoor entertainment hub, or specialized institutional obstacle training courses, our senior engineering team is ready to assist."
        metrics={contactMetrics}
      />

      {/* Main Content: Split Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column: Coordinates & Parameters */}
          <div className="lg:col-span-5 space-y-8">
            <ScrollReveal>
              <div className="p-8 rounded-xl bg-[#1C2420] border border-[#3E6B48]/40 shadow-xl">
                <div className="text-xs font-mono text-[#E06D22] tracking-widest uppercase font-bold mb-3">
                  DIRECT B2B COORDINATION
                </div>
                <h3 className="text-2xl font-bold text-[#F7F5F0] mb-4">
                  Engineering Partnership
                </h3>
                <p className="text-sm text-[#F7F5F0]/75 font-light leading-relaxed mb-6">
                  ZIPLINE ASIA works directly with resort owners, developers, tourism authorities, and adventure operators across India, Asia, and international markets.
                </p>

                <div className="space-y-4 pt-4 border-t border-[#3E6B48]/30 text-xs font-mono">
                  {contactData.contactPoints.map((cp, idx) => (
                    <div key={idx} className="p-3.5 rounded bg-[#14281D] border border-[#3E6B48]/20">
                      <div className="text-[#E06D22] font-bold uppercase tracking-wider mb-1">
                        {cp.label}
                      </div>
                      <div className="text-[#F7F5F0]/80 font-normal leading-relaxed">
                        {cp.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Turnaround Protocol Box */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-xl bg-[#0E1C14] border border-[#3E6B48]/30">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-xs font-mono text-[#F7F5F0] font-bold uppercase tracking-wider">
                    PROPOSAL TURNAROUND PROTOCOL
                  </span>
                </div>
                <p className="text-xs text-[#F7F5F0]/70 font-light leading-relaxed">
                  Following submission of your project parameters, our engineering desk reviews site topography and produces an initial attraction configuration outline within 48 to 72 business hours.
                </p>
              </div>
            </ScrollReveal>

            {/* FAQ Accordion / Box */}
            <ScrollReveal delay={0.15}>
              <div className="p-6 rounded-xl bg-[#1C2420] border border-[#3E6B48]/30">
                <div className="text-xs font-mono text-[#E06D22] tracking-widest uppercase font-bold mb-4">
                  FREQUENTLY ASKED QUESTIONS
                </div>
                <div className="space-y-4">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border-b border-[#3E6B48]/20 pb-3 last:border-0 last:pb-0">
                      <div className="text-sm font-semibold text-[#F7F5F0] mb-1">
                        {faq.q}
                      </div>
                      <p className="text-xs text-[#F7F5F0]/70 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: 10-Field Form */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="p-8 sm:p-10 rounded-2xl bg-[#1C2420] border border-[#3E6B48]/50 shadow-2xl relative">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E06D22]/10 border border-[#E06D22]/30 text-[#E06D22] text-xs font-mono tracking-widest uppercase mb-3">
                    STEP 01 // SPECIFY PARAMETERS
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#F7F5F0]">
                    Project Consultation Form
                  </h3>
                  <p className="mt-2 text-sm text-[#F7F5F0]/70 font-light">
                    Complete the details below to receive a customized feasibility proposal from our engineering team.
                  </p>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-xl bg-[#14281D] border border-emerald-500/50 text-center animate-fade-in">
                    <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500 flex items-center justify-center mx-auto mb-4 text-emerald-400">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h4 className="text-2xl font-bold text-[#F7F5F0] mb-2">
                      Proposal Request Received
                    </h4>
                    <p className="text-sm text-[#F7F5F0]/80 font-light max-w-md mx-auto mb-6">
                      Thank you for sharing your project parameters. A technical director from ZIPLINE ASIA will review your site details and contact you within 48 hours.
                    </p>
                    <div className="inline-block p-3 rounded bg-[#0E1C14] border border-[#3E6B48]/40 text-xs font-mono text-[#E06D22] mb-6">
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
                        className="px-6 py-2.5 rounded bg-[#E06D22] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#c85b18] transition-colors"
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
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Organization / Company *
                        </label>
                        <input
                          type="text"
                          required
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="e.g. Highland Valley Resorts"
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 2: Email & Phone */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Official Email *
                        </label>
                        <input
                          type="email"
                          required
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="e.g. rahul@highlandresorts.com"
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          required
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="e.g. +91 98765 43210"
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                    </div>

                    {/* Row 3: Location & Project Typology */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Project Location (City / State / Country) *
                        </label>
                        <input
                          type="text"
                          required
                          name="location"
                          value={formData.location}
                          onChange={handleChange}
                          placeholder="e.g. Manali, Himachal Pradesh, India"
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Project Typology *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        >
                          {contactData.projectTypes.map((pt, idx) => (
                            <option key={idx} value={pt} className="bg-[#14281D] text-white">
                              {pt}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Row 4: Land Area & Budget */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Land / Footprint Area
                        </label>
                        <input
                          type="text"
                          name="landArea"
                          value={formData.landArea}
                          onChange={handleChange}
                          placeholder="e.g. 5 Acres / 15,000 sq ft"
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                          Estimated Budget Framework *
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                        >
                          {contactData.budgetRanges.map((br, idx) => (
                            <option key={idx} value={br} className="bg-[#14281D] text-white">
                              {br}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Desired Attractions */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                        Desired Attraction Mix (Optional)
                      </label>
                      <input
                        type="text"
                        name="attractions"
                        value={formData.attractions}
                        onChange={handleChange}
                        placeholder="e.g. Zipline, Sky Cycle, Bungee, 2-Tier Rope Course"
                        className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm"
                      />
                    </div>

                    {/* Project Overview */}
                    <div>
                      <label className="block text-xs font-mono uppercase tracking-wider text-[#F7F5F0]/70 mb-2">
                        Project Overview & Site Context *
                      </label>
                      <textarea
                        required
                        rows={4}
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Provide details about terrain topography, natural features, target audience, planned timeline, or specific engineering requirements..."
                        className="w-full px-4 py-3 rounded-lg bg-[#14281D] border border-[#3E6B48]/50 text-white placeholder-[#F7F5F0]/30 focus:outline-none focus:border-[#E06D22] transition-colors text-sm resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-4 rounded-xl bg-[#E06D22] text-white text-sm font-mono font-bold tracking-widest uppercase hover:bg-[#c85b18] transition-all duration-300 shadow-xl shadow-[#E06D22]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
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
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>

                    <div className="text-[11px] font-mono text-[#F7F5F0]/50 text-center">
                      * All submitted project specifications are treated under strict commercial non-disclosure.
                    </div>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
