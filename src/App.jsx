import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SmoothScroll from './components/SmoothScroll';
import ScrollToTop from './components/common/ScrollToTop';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import SolutionsPage from './pages/SolutionsPage';
import AttractionsPage from './pages/AttractionsPage';
import IndustriesPage from './pages/IndustriesPage';
import ProjectsPage from './pages/ProjectsPage';
import SafetyPage from './pages/SafetyPage';
import KnowledgePage from './pages/KnowledgePage';
import ContactPage from './pages/ContactPage';

export default function App() {
  return (
    <Router>
      <SmoothScroll>
        <ScrollToTop />
        <div className="relative min-h-screen bg-[#183B2B] text-white font-sans selection:bg-[#C6A15B] selection:text-[#292D2B] flex flex-col justify-between">
          {/* Universal Sticky Navigation */}
          <Navbar />

          {/* Dynamic Page Routing */}
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/solutions" element={<SolutionsPage />} />
              <Route path="/attractions" element={<AttractionsPage />} />
              <Route path="/industries" element={<IndustriesPage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/safety" element={<SafetyPage />} />
              <Route path="/knowledge-hub" element={<KnowledgePage />} />
              <Route path="/contact" element={<ContactPage />} />
              
              {/* Fallback to Home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>

          {/* Universal Footer */}
          <Footer />
        </div>
      </SmoothScroll>
    </Router>
  );
}
