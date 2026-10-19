import { motion } from 'framer-motion';
import siteConfig from '../data/siteConfig';
import Counter from './ui/Counter';

export default function Stats() {
  return (
    <section aria-label="Naba by the numbers" className="relative border-y border-white/5 bg-charcoal/40">
      <div className="container-x px-5 sm:px-8">
        <ul className="grid grid-cols-2 divide-white/5 lg:grid-cols-4 lg:divide-x">
          {siteConfig.stats.map((stat, index) => (
            <motion.li
              key={stat.id}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.6, delay: index * 0.09, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-center justify-center gap-2 border-b border-white/5 px-4 py-10 text-center last:border-b-0 lg:border-b-0 lg:py-14"
            >
              <span className="font-display text-4xl font-extrabold text-transparent sm:text-5xl">
                <span className="bg-gradient-to-r from-gold-soft to-gold bg-clip-text">
                  <Counter value={stat.value} suffix={stat.suffix} />
                </span>
              </span>
              <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-haze">
                {stat.label}
              </span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
