import React, { useState, useEffect } from 'react';
import { ArrowUpRight, CheckCircle2, X } from 'lucide-react';
import ScrollReveal from '../reactbits/ScrollReveal';
import { contactData } from '../../data/websiteData';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    countryLocation: '',
    projectType: contactData.projectTypes[0] || 'Turnkey Adventure Park Development',
    landArea: '',
    attractionsRequired: '',
    budget: contactData.budgetRanges?.[2] || '₹50 Lakhs – ₹1 Crore',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  // Close modal on Escape key and prevent background scroll when open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isModalOpen) {
        setIsModalOpen(false);
      }
    };

    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isModalOpen]);

  // Support external triggers for opening the modal (e.g. from nav or other sections)
  useEffect(() => {
    const handleCustomOpen = () => setIsModalOpen(true);
    window.addEventListener('open-enquiry-modal', handleCustomOpen);
    return () => window.removeEventListener('open-enquiry-modal', handleCustomOpen);
  }, []);

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full Name is required';
    if (!formData.companyName.trim()) errs.companyName = 'Company / Organisation is required';
    if (!formData.email.trim()) {
      errs.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formData.countryLocation.trim()) errs.countryLocation = 'Country & Project Location is required';
    if (!formData.message.trim()) errs.message = 'Brief Project Description is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsModalOpen(false);
      setFormData({
        fullName: '',
        companyName: '',
        email: '',
        phone: '',
        countryLocation: '',
        projectType: contactData.projectTypes[0] || 'Turnkey Adventure Park Development',
        landArea: '',
        attractionsRequired: '',
        budget: contactData.budgetRanges?.[2] || '₹50 Lakhs – ₹1 Crore',
        message: ''
      });
    }, 4500);
  };

  return (
    <section
      id="contact"
      className="relative w-full py-14 sm:py-24 scroll-mt-16 sm:scroll-mt-20 bg-[#14281D] text-white overflow-hidden flex items-center justify-center"
    >
      {/* Full-Width Background Video for CTA Section */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover object-center"
        >
          <source src="/CTA-background.mp4" type="video/mp4" />
        </video>

        {/* Light Natural Overlay: Keeps CTA Video Vibrant & Clearly Visible */}
        <div className="absolute inset-0 bg-[#14281D]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#14281D]/50 via-transparent to-[#14281D]/35" />
      </div>

      {/* Centered Premium CTA Banner Content: Compact & Punchy */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        
        {/* Main Heading */}
        <ScrollReveal animation="fade-up">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#E06D22] block mb-2">
            START YOUR PROJECT JOURNEY
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-display font-extrabold uppercase tracking-tight text-white leading-[1.1] mb-4 drop-shadow-md">
            Ready to Create an <br className="hidden sm:inline" />
            <span className="text-white">Adventure Destination?</span>
          </h2>
        </ScrollReveal>

        {/* Supporting Description */}
        <ScrollReveal animation="fade-up" delay={0.1}>
          <p className="text-sm sm:text-base text-[#F7F5F0] font-normal leading-relaxed max-w-xl mx-auto mb-6 drop-shadow">
            From an Idea to an Attraction. From an Attraction to an Adventure Destination. Bring your vision to life with complete turnkey infrastructure solutions.
          </p>
        </ScrollReveal>

        {/* Prominent CTA Button & Supporting Line */}
        <ScrollReveal animation="fade-up" delay={0.15}>
          <div className="flex flex-col items-center gap-2.5">
            <button
              type="button"
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-lg bg-[#E06D22] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:scale-105 hover:shadow-glow-terracotta transition-all duration-300 group select-none shadow-2xl cursor-pointer"
            >
              <span>REQUEST A PROJECT PROPOSAL</span>
              <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>

            <p className="text-xs font-mono text-[#F7F5F0]/80 tracking-wide">
              Single-source coordination from initial concept to certified installation.
            </p>
          </div>
        </ScrollReveal>

      </div>

      {/* Interactive Project Enquiry Form Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-up"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsModalOpen(false);
            }
          }}
        >
          <div
            className="relative w-full max-w-2xl bg-white text-[#1C2420] rounded-2xl shadow-2xl border border-[#1C2420]/10 max-h-[90vh] overflow-y-auto p-5 sm:p-8 my-auto"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-enquiry-title"
          >
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 p-2 rounded-full bg-[#F7F5F0] text-[#1C2420] hover:bg-[#E06D22] hover:text-white transition-colors cursor-pointer"
              aria-label="Close enquiry modal"
            >
              <X className="w-5 h-5" />
            </button>

            {isSubmitted ? (
              <div className="text-center py-10 space-y-4 animate-fade-up">
                <div className="w-16 h-16 rounded-full bg-[#3E6B48]/10 text-[#3E6B48] mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-display font-extrabold uppercase text-[#1C2420]">
                  PROJECT PROPOSAL REQUEST RECEIVED
                </h3>
                <p className="text-sm text-[#525E57] max-w-md mx-auto leading-relaxed">
                  Thank you for contacting Adventure Park Solutions (APS). Our adventure infrastructure engineering specialists will review your project parameters and reach out promptly.
                </p>
                <div className="pt-4">
                  <button
                    type="button"
                    onClick={() => {
                      setIsSubmitted(false);
                      setIsModalOpen(false);
                    }}
                    className="px-6 py-2.5 rounded bg-[#14281D] text-white text-xs font-mono font-bold uppercase tracking-wider hover:bg-[#3E6B48] transition-colors cursor-pointer"
                  >
                    CLOSE WINDOW
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="space-y-4">
                <div>
                  <span className="text-xs font-mono uppercase tracking-widest text-[#E06D22] font-bold block mb-1">
                    PROJECT PARAMETERS & PROPOSAL
                  </span>
                  <h3 id="modal-enquiry-title" className="text-2xl font-display font-extrabold text-[#1C2420] uppercase">
                    Request a Project Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-[#525E57] mt-1">
                    Please provide your project parameters below. Our engineering and master planning team will evaluate your requirements and contact you.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border ${errors.fullName ? 'border-red-500' : 'border-[#1C2420]/15'} text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors`}
                    />
                    {errors.fullName && <span className="text-[11px] text-[#E06D22] font-mono mt-0.5 block">{errors.fullName}</span>}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Company / Organisation *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Company, Resort or Organisation"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border ${errors.companyName ? 'border-red-500' : 'border-[#1C2420]/15'} text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors`}
                    />
                    {errors.companyName && <span className="text-[11px] text-[#E06D22] font-mono mt-0.5 block">{errors.companyName}</span>}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Email Address */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="corporate@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border ${errors.email ? 'border-red-500' : 'border-[#1C2420]/15'} text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors`}
                    />
                    {errors.email && <span className="text-[11px] text-[#E06D22] font-mono mt-0.5 block">{errors.email}</span>}
                  </div>

                  {/* Contact Number */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Contact Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 / International"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border border-[#1C2420]/15 text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Country & Project Location */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Country & Project Location *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="City, State, Country"
                      value={formData.countryLocation}
                      onChange={(e) => setFormData({ ...formData, countryLocation: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border ${errors.countryLocation ? 'border-red-500' : 'border-[#1C2420]/15'} text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors`}
                    />
                    {errors.countryLocation && <span className="text-[11px] text-[#E06D22] font-mono mt-0.5 block">{errors.countryLocation}</span>}
                  </div>

                  {/* Type of Project */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Type of Project
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border border-[#1C2420]/15 text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors cursor-pointer"
                    >
                      {contactData.projectTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {/* Approximate Land Area */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Approximate Land Area
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. 2 Acres, 15,000 sq ft, Mountain Valley"
                      value={formData.landArea}
                      onChange={(e) => setFormData({ ...formData, landArea: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border border-[#1C2420]/15 text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Project Budget */}
                  <div>
                    <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                      Project Budget
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border border-[#1C2420]/15 text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors cursor-pointer"
                    >
                      {contactData.budgetRanges?.map((rng) => (
                        <option key={rng} value={rng}>
                          {rng}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Attractions Required */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                    Attractions Required
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Ziplines, Sky Cycle, Obstacle Course, Soft Play, Trampolines..."
                    value={formData.attractionsRequired}
                    onChange={(e) => setFormData({ ...formData, attractionsRequired: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border border-[#1C2420]/15 text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors"
                  />
                </div>

                {/* Brief Project Description */}
                <div>
                  <label className="block text-xs font-mono font-bold uppercase tracking-wider text-[#1C2420] mb-1">
                    Brief Project Description *
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Briefly describe your site, target audience, preferred timeline, or specific infrastructure objectives..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3.5 py-2.5 rounded-lg bg-[#F7F5F0] border ${errors.message ? 'border-red-500' : 'border-[#1C2420]/15'} text-[#1C2420] text-sm focus:outline-none focus:border-[#E06D22] focus:bg-white transition-colors resize-none`}
                  />
                  {errors.message && <span className="text-[11px] text-[#E06D22] font-mono mt-0.5 block">{errors.message}</span>}
                </div>

                {/* Submit Button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-lg bg-[#E06D22] text-white text-xs sm:text-sm font-mono font-bold uppercase tracking-wider hover:bg-[#C85B17] hover:shadow-glow-terracotta active:scale-[0.98] transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>{contactData.ctaButton || "SUBMIT PROPOSAL REQUEST"}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                  <p className="text-[11px] font-mono text-[#525E57] text-center mt-2">
                    Confidential project consultation. We never share your project parameters with third parties.
                  </p>
                </div>
              </form>
            )}

          </div>
        </div>
      )}

    </section>
  );
}
