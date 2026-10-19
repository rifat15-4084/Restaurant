import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { scrollToId } from '../../utils/scroll';
import cn from '../../utils/cn';

const baseClasses =
  'relative inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-shadow duration-300 select-none';

const variants = {
  primary:
    'bg-gradient-to-r from-gold-soft via-gold to-gold-deep text-ink shadow-[0_8px_30px_rgba(245,181,68,0.35)] hover:shadow-[0_10px_45px_rgba(245,181,68,0.55)]',
  ghost:
    'glass text-mist hover:border-gold/40 hover:shadow-[0_0_30px_rgba(245,181,68,0.18)]',
  neon: 'bg-neon/10 text-neon border border-neon/40 hover:bg-neon/20 hover:shadow-glow-cyan',
};

/**
 * Magnetic, glowing button. Renders a <button> or an <a>.
 * `to="section-id"` smooth-scrolls to a section instead of navigating.
 * Magnetic pull is disabled on touch devices and for reduced-motion users.
 */
export default function GlowButton({
  children,
  variant = 'primary',
  className,
  to,
  href,
  onClick,
  type = 'button',
  ...rest
}) {
  const ref = useRef(null);
  const [magnetic, setMagnetic] = useState(false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 180, damping: 14, mass: 0.35 });
  const springY = useSpring(y, { stiffness: 180, damping: 14, mass: 0.35 });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return undefined;
    const fine = window.matchMedia('(pointer: fine)').matches;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    setMagnetic(fine && !reduce);
    return undefined;
  }, []);

  const handleMove = (event) => {
    if (!magnetic || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * 0.28);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.38);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const handleClick = (event) => {
    if (to) {
      event.preventDefault();
      scrollToId(to);
    }
    if (onClick) onClick(event);
  };

  const Tag = href ? motion.a : motion.button;

  return (
    <Tag
      ref={ref}
      href={href}
      type={href ? undefined : type}
      onClick={handleClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={magnetic ? { x: springX, y: springY } : undefined}
      className={cn(baseClasses, variants[variant] || variants.primary, className)}
      {...rest}
    >
      {children}
    </Tag>
  );
}
