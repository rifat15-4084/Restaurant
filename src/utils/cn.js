/** Tiny class-name joiner (clsx-style, no dependency). */
export default function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}
