import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

/**
 * Soft gold/cyan glow that follows the cursor — desktop + fine pointer only,
 * and disabled entirely for prefers-reduced-motion.
 */
export default function CursorGlow() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const springX = useSpring(x, { stiffness: 120, damping: 20, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 120, damping: 20, mass: 0.6 });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!fine || reduce) return undefined;

    setEnabled(true);
    const onMove = (event) => {
      x.set(event.clientX - 240);
      y.set(event.clientY - 240);
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => window.removeEventListener('pointermove', onMove);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[55] h-[480px] w-[480px] rounded-full"
      style={{
        x: springX,
        y: springY,
        background:
          'radial-gradient(circle at center, rgba(245,181,68,0.10) 0%, rgba(61,240,224,0.05) 40%, transparent 70%)',
      }}
    />
  );
}
