import { motion, useReducedMotion } from 'framer-motion';
import cn from '../../utils/cn';

/**
 * Scroll-reveal wrapper: fade-up with optional stagger delay.
 * Respects prefers-reduced-motion (renders instantly).
 */
export default function Reveal({ children, className, delay = 0, y = 28, amount = 0.15 }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={cn(className)}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
