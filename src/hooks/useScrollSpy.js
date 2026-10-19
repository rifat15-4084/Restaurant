import { useEffect, useState } from 'react';

/**
 * Which section is currently in view — used for the navbar highlight.
 * Uses IntersectionObserver and re-attaches when lazy-loaded sections
 * appear in the DOM (MutationObserver).
 */
export default function useScrollSpy(sectionIds) {
  const [activeId, setActiveId] = useState(sectionIds[0] || 'home');
  const idsKey = sectionIds.join('|');

  useEffect(() => {
    const ids = idsKey.split('|');
    const visibility = new Map();
    let observer = null;
    let timeoutId = null;

    const compute = () => {
      for (const id of ids) {
        if (visibility.get(id)) {
          setActiveId(id);
          return;
        }
      }
      // Nothing intersecting: if we're at the very bottom, activate the last id.
      if (
        typeof window !== 'undefined' &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 120
      ) {
        setActiveId(ids[ids.length - 1]);
      }
    };

    const attach = () => {
      if (observer) observer.disconnect();
      visibility.clear();

      const targets = ids.map((id) => document.getElementById(id)).filter(Boolean);
      if (!targets.length) return;

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => visibility.set(entry.target.id, entry.isIntersecting));
          compute();
        },
        { rootMargin: '-35% 0px -55% 0px', threshold: 0 }
      );
      targets.forEach((target) => observer.observe(target));
    };

    attach();

    // Sections rendered via React.lazy arrive after mount — re-attach observers.
    let mutationObserver;
    try {
      mutationObserver = new MutationObserver(() => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(attach, 120);
      });
      mutationObserver.observe(document.body, { childList: true, subtree: true });
    } catch {
      /* MutationObserver unavailable — static sections still work */
    }

    return () => {
      if (observer) observer.disconnect();
      if (mutationObserver) mutationObserver.disconnect();
      clearTimeout(timeoutId);
    };
  }, [idsKey]);

  return activeId;
}
