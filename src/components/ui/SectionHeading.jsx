import Reveal from './Reveal';
import cn from '../../utils/cn';

/** Eyebrow + title + optional subtitle, reusable by every section. */
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  className,
  id,
}) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <Reveal>
          <p className="mb-4 inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-gold shadow-[0_0_12px_2px_rgba(245,181,68,0.7)]" />
            {eyebrow}
          </p>
        </Reveal>
      ) : null}

      <Reveal delay={0.06}>
        <h2
          id={id}
          className="font-display text-4xl font-bold leading-[1.05] text-mist sm:text-5xl lg:text-6xl"
        >
          {title}
        </h2>
      </Reveal>

      {subtitle ? (
        <Reveal delay={0.12}>
          <p className="mt-5 text-base leading-relaxed text-haze sm:text-lg">{subtitle}</p>
        </Reveal>
      ) : null}
    </div>
  );
}
