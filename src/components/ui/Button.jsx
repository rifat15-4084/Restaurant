import { Link } from 'react-router-dom';
import cn from '../../utils/cn';

const baseClasses =
  'inline-flex min-h-[48px] items-center justify-center gap-2 rounded-full px-7 py-3 text-sm font-semibold transition-colors duration-200';

const variants = {
  primary: 'bg-gold text-ink hover:bg-gold-soft',
  ghost: 'border border-white/15 bg-white/5 text-mist hover:border-gold/50 hover:text-gold',
  outline: 'border border-gold/40 text-gold hover:bg-gold hover:text-ink',
};

/**
 * Shared button. Renders a react-router <Link> when `to` is given,
 * an <a> when `href` is given, otherwise a native <button>.
 */
export default function Button({
  children,
  variant = 'primary',
  className,
  to,
  href,
  type = 'button',
  ...rest
}) {
  const classes = cn(baseClasses, variants[variant] || variants.primary, className);

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} className={classes} {...rest}>
      {children}
    </button>
  );
}
