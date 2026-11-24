import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Products from './components/Products/Products';
import Industries from './components/Industries/Industries';
import Process from './components/Process/Process';
import Founder from './components/Founder/Founder';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import WhyChoose from './components/WhyChoose/WhyChoose';
import KnowledgeHub from './components/Knowledge/KnowledgeHub';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <SmoothScroll>
      <div className="relative min-h-screen bg-[#14281D] text-white font-sans selection:bg-[#E06D22] selection:text-white">
        {/* Navigation with Transparent to Solid Scroll Transition */}
        <Navbar />

        {/* 01 — Fullscreen Cinematic Hero Section (Deep Pine Green) */}
        <Hero />

        {/* 02 — About Us: Adventure Park Solutions (Warm Sand Surface) */}
        <About />

        {/* 03 — Our Solutions: 11 Turnkey Services (Warm Sand Surface with Sand Cards) */}
        <Solutions />

        {/* 04 — Adventure Attractions: 5 Categories Showcase (Deep Pine Green Surface) */}
        <Products />

        {/* 05 — Industries We Serve (Warm Sand Surface) */}
        <Industries />

        {/* 06 — Our Approach / Engineering Methodology (Warm Sand Surface) */}
        <Process />

        {/* 07 — Founder Section: Leadership & Engineering Philosophy (Warm Sand Surface) */}
        <Founder />

        {/* 08 — Projects & Portfolio Carousel (Deep Pine Green Surface) */}
        <Projects />

        {/* 09 — Safety, Engineering & Quality Protocols (Warm Sand Surface) */}
        <Certifications />

        {/* 10 — Why Choose APS (Warm Sand Surface) */}
        <WhyChoose />

        {/* 11 — Knowledge Hub: Planning & Investment Guides (Deep Pine Green Surface) */}
        <KnowledgeHub />

        {/* 12 — Contact & Project Proposal Section (Deep Pine Green with Video Background) */}
        <Contact />

        {/* 13 — Footer (Deep Pine Green) */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
