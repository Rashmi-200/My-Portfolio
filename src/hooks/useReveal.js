import { useEffect, useRef } from 'react';

/**
 * useReveal — triggers `.visible` class on elements that scroll into view.
 * All elements with class `reveal` in the given container will animate in.
 */
export function useReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  });
}

/**
 * useActiveSection — returns the id of the currently visible section.
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState('hero');
  const { useState } = require('react'); // eslint-disable-line

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);

  return active;
}
