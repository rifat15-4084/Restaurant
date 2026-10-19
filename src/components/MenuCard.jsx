import { motion } from 'framer-motion';
import { Plus, Flame } from 'lucide-react';
import SmartImage from './ui/SmartImage';
import { badgeMeta } from '../data/menu';
import { formatPrice } from '../utils/format';
import { useCart } from '../hooks/useCart';

/**
 * Single menu item card: image, badges, name, price, short description
 * and an "Add" button. Clicking anywhere else opens the detail modal.
 */
export default function MenuCard({ item, onOpen, index = 0 }) {
  const { add } = useCart();
  const badges = item.tags.filter((tag) => badgeMeta[tag]).slice(0, 2);

  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 22 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.3), ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md transition-colors duration-500 hover:border-gold/30 hover:shadow-[0_18px_50px_rgba(0,0,0,0.45),0_0_40px_rgba(245,181,68,0.12)]"
    >
      {/* Stretched click target — opens the accessible detail modal */}
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`View details for ${item.name}`}
        className="absolute inset-0 z-[1] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      />

      {/* Image */}
      <div className="relative h-44 overflow-hidden sm:h-48">
        <SmartImage
          src={item.image}
          alt={item.alt}
          className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {badges.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider backdrop-blur ${badgeMeta[tag].className}`}
            >
              {badgeMeta[tag].label}
            </span>
          ))}
        </div>

        {item.tags.includes('spicy') ? (
          <Flame
            className="absolute right-3 top-3 h-4 w-4 text-red-400 drop-shadow-[0_0_8px_rgba(248,113,113,0.8)]"
            aria-hidden="true"
          />
        ) : null}
      </div>

      {/* Body */}
      <div className="pointer-events-none relative z-[2] flex flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-bold leading-snug text-mist">{item.name}</h3>
          <span className="shrink-0 font-display text-lg font-extrabold text-gold">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-haze">{item.description}</p>

        <div className="mt-3 flex items-center justify-between">
          <span className="text-[11px] uppercase tracking-[0.18em] text-haze/70">
            {item.calories} kcal
          </span>
          <button
            type="button"
            onClick={() => add(item)}
            aria-label={`Add ${item.name} to your order`}
            className="pointer-events-auto relative z-[3] inline-flex min-h-[40px] items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 text-xs font-bold uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold hover:text-ink hover:shadow-glow"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
    </motion.article>
  );
}
