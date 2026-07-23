import { useState, useEffect } from 'react';

/**
 * Custom hook that uses IntersectionObserver to determine
 * which section is currently active/visible on the screen.
 * @param {Array<string>} sectionIds - List of HTML IDs to monitor.
 * @param {Object} options - IntersectionObserver options.
 */
export function useActiveSection(sectionIds, options = { rootMargin: '-20% 0px -60% 0px', threshold: 0 }) {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observers = [];

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        observers.push(el);
      }
    });

    return () => {
      observers.forEach((el) => observer.unobserve(el));
    };
  }, [sectionIds, options]);

  return activeSection;
}
