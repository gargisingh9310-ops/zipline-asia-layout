import { useLayoutEffect, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollToTop() {
  const { pathname, search, hash } = useLocation();

  // 1. Immediately and synchronously reset scroll to top BEFORE browser paint and child effects
  useLayoutEffect(() => {
    // Disable browser default scroll restoration so it does not conflict with client routing
    if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Anchor hash navigation support
    if (hash) {
      const targetId = hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (target) {
        if (window.lenis) {
          window.lenis.scrollTo(target, { immediate: true });
        } else {
          target.scrollIntoView();
        }
        ScrollTrigger.update();
        return;
      }
    }

    // Immediately stop Lenis momentum, snap to 0, and resume
    if (window.lenis) {
      window.lenis.stop();
      window.lenis.scrollTo(0, { immediate: true });
      window.lenis.scroll = 0;
      window.lenis.start();
    }

    // Reset native window and document scroll immediately
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Clear ScrollTrigger cached scroll state and update coordinates
    if (ScrollTrigger.clearScrollMemory) {
      ScrollTrigger.clearScrollMemory();
    }
    ScrollTrigger.update();
  }, [pathname, search, hash]);

  // 2. Refresh ScrollTrigger after DOM has settled to recalculate all trigger coordinates
  useEffect(() => {
    const rafId = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 150);

    return () => {
      cancelAnimationFrame(rafId);
      clearTimeout(timer);
    };
  }, [pathname, search, hash]);

  return null;
}
