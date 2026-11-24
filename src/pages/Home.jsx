import React from 'react';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Solutions from '../components/Solutions/Solutions';
import Products from '../components/Products/Products';
import Industries from '../components/Industries/Industries';
import Process from '../components/Process/Process';
import Founder from '../components/Founder/Founder';
import Projects from '../components/Projects/Projects';
import Certifications from '../components/Certifications/Certifications';
import WhyChoose from '../components/WhyChoose/WhyChoose';
import KnowledgeHub from '../components/Knowledge/KnowledgeHub';
import Contact from '../components/Contact/Contact';

export default function Home() {
  return (
    <>
      {/* 01 — Fullscreen Cinematic Hero Section (Deep Pine Green) */}
      <Hero />

      {/* 02 — About Us: ZIPLINE ASIA (Warm Sand Surface) */}
      <About />

      {/* 03 — Our Solutions: 11 Turnkey Services (Warm Sand Surface with Sand Cards) */}
      <Solutions />

      {/* 04 — Adventure Attractions Showcase (Deep Pine Green Surface) */}
      <Products />

      {/* 05 — Industries We Serve (Warm Sand Surface) */}
      <Industries />

      {/* 06 — Engineering Approach / Methodology (Warm Sand Surface) */}
      <Process />

      {/* 07 — Founder Section: Technical Leadership & Heritage (Warm Sand Surface) */}
      <Founder />

      {/* 08 — Projects & Portfolio Carousel (Deep Pine Green Surface) */}
      <Projects />

      {/* 09 — Safety, Engineering & Quality Protocols (Warm Sand Surface) */}
      <Certifications />

      {/* 10 — Why Choose ZIPLINE ASIA (Warm Sand Surface) */}
      <WhyChoose />

      {/* 11 — Knowledge Hub: Planning & Investment Guides (Deep Pine Green Surface) */}
      <KnowledgeHub />

      {/* 12 — Contact & Project Proposal Section (Deep Pine Green with Video Background) */}
      <Contact />
    </>
  );
}
