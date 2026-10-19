import cn from '../../utils/cn';

/** Eyebrow + title + optional subtitle, used at the top of page sections. */
export default function SectionHeading({ eyebrow, title, subtitle, align = 'left', className, id }) {
  const centered = align === 'center';

  return (
    <div className={cn('max-w-2xl', centered && 'mx-auto text-center', className)}>
      {eyebrow ? (
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">{eyebrow}</p>
      ) : null}

      <h2 id={id} className="text-3xl font-bold leading-tight text-mist sm:text-4xl">
        {title}
      </h2>

      {subtitle ? (
        <p className="mt-4 text-base leading-relaxed text-haze">{subtitle}</p>
      ) : null}
    </div>
  );
}
