import { Plus, Flame } from 'lucide-react';
import SmartImage from './ui/SmartImage';
import { badgeMeta } from '../data/menu';
import { formatPrice } from '../utils/format';
import { useCart } from '../hooks/useCart';

/**
 * Single menu item card: image, badges, name, price, short description
 * and an "Add" button. Hover is a colour/shadow change only (0.2s).
 */
export default function MenuCard({ item, onOpen }) {
  const { add } = useCart();
  const badges = item.tags.filter((tag) => badgeMeta[tag]).slice(0, 2);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors duration-200 hover:border-gold/30 hover:shadow-card">
      {/* Stretched click target — opens the accessible detail modal */}
      <button
        type="button"
        onClick={() => onOpen(item)}
        aria-label={`View details for ${item.name}`}
        className="absolute inset-0 z-[1] rounded-2xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-gold"
      />

      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <SmartImage
          src={item.image}
          alt={item.alt}
          width={640}
          height={400}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/10 to-transparent" />

        <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
          {badges.map((tag) => (
            <span
              key={tag}
              className={`rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${badgeMeta[tag].className}`}
            >
              {badgeMeta[tag].label}
            </span>
          ))}
        </div>

        {item.tags.includes('spicy') ? (
          <Flame className="absolute right-3 top-3 h-4 w-4 text-red-400" aria-hidden="true" />
        ) : null}
      </div>

      {/* Body */}
      <div className="pointer-events-none relative z-[2] flex flex-col gap-2 p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="min-w-0 flex-1 break-words text-lg font-bold leading-snug text-mist">
            {item.name}
          </h3>
          <span className="shrink-0 text-lg font-bold text-gold tabular-nums">
            {formatPrice(item.price)}
          </span>
        </div>

        <p className="line-clamp-2 text-sm leading-relaxed text-haze">{item.description}</p>

        <div className="mt-3 flex items-center justify-between gap-3">
          <span className="text-[11px] uppercase tracking-[0.18em] text-haze/70">
            {item.calories} kcal
          </span>
          <button
            type="button"
            onClick={() => add(item)}
            aria-label={`Add ${item.name} to your order`}
            className="pointer-events-auto relative z-[3] inline-flex min-h-[44px] items-center gap-1.5 rounded-full border border-gold/40 bg-gold/10 px-4 text-xs font-bold uppercase tracking-wider text-gold transition-colors duration-200 hover:bg-gold hover:text-ink"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden="true" />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
