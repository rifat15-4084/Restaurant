import siteConfig from '../data/siteConfig';

/**
 * Consistent page header shown at the top of every inner page.
 * Sits below the fixed navbar (the Layout adds top padding for it).
 */
export default function PageHeader({ title, subtitle }) {
  return (
    <header className="border-b border-white/5 bg-charcoal/40">
      <div className="container-x px-5 py-14 sm:px-8 md:py-16">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
          {siteConfig.shortName} Kitchen &amp; Café
        </p>
        <h1 className="max-w-3xl text-3xl font-bold leading-tight text-mist break-words sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-haze">{subtitle}</p>
        ) : null}
      </div>
    </header>
  );
}
