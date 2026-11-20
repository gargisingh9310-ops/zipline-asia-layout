import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollReveal({
  children,
  animation = 'fade-up', // 'fade-up', 'fade-in', 'slide-right', 'zoom-in'
  duration = 0.9,
  delay = 0,
  stagger = 0.12,
  distance = 35,
  triggerPoint = 'top 85%',
  className = '',
  as: Component = 'div'
}) {
  const elementRef = useRef(null);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) {
        gsap.set(el, { opacity: 1, y: 0, x: 0 });
        return;
      }

      const isMobile = window.innerWidth < 640;
      const effectiveDistance = isMobile ? Math.min(distance, 16) : distance;
      const effectiveDuration = isMobile ? Math.min(duration, 0.65) : duration;
      const effectiveStagger = isMobile ? Math.min(stagger, 0.08) : stagger;
      const effectiveDelay = isMobile ? Math.min(delay, 0.2) : delay;
      const effectiveTriggerPoint = isMobile ? 'top 90%' : triggerPoint;

      let fromVars = { opacity: 0 };
      if (animation === 'fade-up') {
        fromVars.y = effectiveDistance;
      } else if (animation === 'slide-right') {
        fromVars.x = -effectiveDistance;
      } else if (animation === 'zoom-in') {
        fromVars.scale = 0.96;
      }

      // Check if element has direct children to stagger
      const targets = el.children.length > 1 && !el.classList.contains('no-stagger')
        ? el.children
        : el;

      gsap.fromTo(
        targets,
        fromVars,
        {
          opacity: 1,
          y: 0,
          x: 0,
          scale: 1,
          duration: effectiveDuration,
          delay: effectiveDelay,
          stagger: targets === el ? 0 : effectiveStagger,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: effectiveTriggerPoint,
            toggleActions: 'play none none none',
            once: true
          }
        }
      );
    }, el);

    return () => ctx.revert();
  }, [animation, distance, duration, delay, stagger, triggerPoint]);

  return (
    <Component ref={elementRef} className={className}>
      {children}
    </Component>
  );
}

