import siteConfig from '../data/siteConfig';

function formatStat(value) {
  return Number(value).toLocaleString('en-US');
}

/** Static stats strip — no animated counters. */
export default function Stats() {
  return (
    <section aria-label="Naba by the numbers" className="border-y border-white/5 bg-charcoal/40">
      <div className="container-x px-5 sm:px-8">
        <ul className="grid grid-cols-2 lg:grid-cols-4 lg:divide-x lg:divide-white/5">
          {siteConfig.stats.map((stat) => (
            <li
              key={stat.id}
              className="flex flex-col items-center justify-center gap-2 border-b border-white/5 px-4 py-10 text-center last:border-b-0 lg:border-b-0 lg:py-14"
            >
              <span className="font-display text-4xl font-bold text-gold tabular-nums sm:text-5xl">
                {formatStat(stat.value)}
                {stat.suffix}
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-haze">
                {stat.label}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
