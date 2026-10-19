/** Respect the user's motion preference everywhere. */
export function prefersReducedMotion() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/** Smooth-scroll to a section id and keep the URL hash in sync. */
export function scrollToId(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' });
  try {
    window.history.replaceState(null, '', `#${id}`);
  } catch {
    /* ignore */
  }
}
