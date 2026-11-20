import React from 'react';
import SmoothScroll from './components/SmoothScroll';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Solutions from './components/Solutions/Solutions';
import Products from './components/Products/Products';
import Process from './components/Process/Process';
import Founder from './components/Founder/Founder';
import Projects from './components/Projects/Projects';
import Certifications from './components/Certifications/Certifications';
import WhyChoose from './components/WhyChoose/WhyChoose';
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

        {/* 02 — About ZIPLINE ASIA (Warm Sand Surface) */}
        <About />

        {/* 03 — Solutions Section (Warm Sand Surface with Sand Cards & Moss Accents) */}
        <Solutions />

        {/* 04 — Products Section (Deep Pine Green Surface with Dark Cards) */}
        <Products />

        {/* 05 — Engineering Approach / Methodology (Warm Sand Surface) */}
        <Process />

        {/* 06 — Founder Section: Meet the Vision Behind ZIPLINE ASIA (Warm Sand Surface) */}
        <Founder />

        {/* 07 — Projects Section: Curved Card Infinite Carousel (Deep Pine Green Surface) */}
        <Projects />

        {/* 08 — Certifications & Professional Standards Section (Warm Sand Surface) */}
        <Certifications />

        {/* 09 — Why Choose ZIPLINE ASIA (Warm Sand Surface) */}
        <WhyChoose />

        {/* 10 — Contact & Inquiry CTA Section (Deep Pine Green with Video Background) */}
        <Contact />

        {/* 11 — Premium Eco-Resort Footer (Deep Pine Green) */}
        <Footer />
      </div>
    </SmoothScroll>
  );
}
