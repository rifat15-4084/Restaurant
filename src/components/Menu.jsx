import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Search, ShoppingBag, UtensilsCrossed, X } from 'lucide-react';
import { menuCategories, menuFilters, menuItems } from '../data/menu';
import MenuCard from './MenuCard';
import MenuModal from './MenuModal';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/format';
import cn from '../utils/cn';

const matchesFilter = (item, filterId) => {
  if (filterId === 'veg') {
    return item.tags.includes('veg') || item.tags.includes('vegan');
  }
  return item.tags.includes(filterId);
};

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);
  const [query, setQuery] = useState('');
  const [activeFilters, setActiveFilters] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const { count, total, openCart } = useCart();

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return menuItems.filter((item) => {
      const inCategory = item.category === activeCategory;
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q) ||
        item.ingredients.some((ingredient) => ingredient.toLowerCase().includes(q));
      const matchesFilters = activeFilters.every((filter) => matchesFilter(item, filter));
      return inCategory && matchesSearch && matchesFilters;
    });
  }, [activeCategory, query, activeFilters]);

  const toggleFilter = (filterId) => {
    setActiveFilters((prev) =>
      prev.includes(filterId) ? prev.filter((id) => id !== filterId) : [...prev, filterId]
    );
  };

  const resetAll = () => {
    setQuery('');
    setActiveFilters([]);
  };

  const hasActiveSearch = query.trim().length > 0 || activeFilters.length > 0;

  return (
    <section id="menu" className="section-pad relative" aria-labelledby="menu-heading">
      <div className="container-x">
        <SectionHeading
          eyebrow="The Menu"
          id="menu-heading"
          title={
            <>
              Six chapters,
              <br />
              one <span className="text-gradient">obsession</span>.
            </>
          }
          subtitle="Built around seasonal produce and a wood-fired heart. Tap any dish for the full story — or add it straight to your order tray."
        />

        {/* Controls ------------------------------------------------------ */}
        <Reveal delay={0.1} className="mt-12">
          <div className="flex flex-col gap-5">
            {/* Category tabs */}
            <div
              className="no-scrollbar -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:px-0"
              role="group"
              aria-label="Menu categories"
            >
              {menuCategories.map((category) => {
                const active = category.id === activeCategory;
                return (
                  <button
                    key={category.id}
                    type="button"
                    aria-pressed={active}
                    onClick={() => setActiveCategory(category.id)}
                    className={cn(
                      'relative shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-300',
                      active ? 'text-ink' : 'text-haze hover:text-mist'
                    )}
                  >
                    {active ? (
                      <motion.span
                        layoutId="menu-tab-indicator"
                        className="absolute inset-0 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-deep shadow-[0_6px_24px_rgba(245,181,68,0.35)]"
                        transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                      />
                    ) : (
                      <span className="absolute inset-0 rounded-full border border-white/10 bg-white/[0.04] transition-colors duration-300 hover:border-white/20" />
                    )}
                    <span className="relative z-10 whitespace-nowrap">{category.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Search + filters */}
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="relative w-full lg:max-w-sm">
                <Search
                  className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-haze"
                  aria-hidden="true"
                />
                <label htmlFor="menu-search" className="sr-only">
                  Search the menu
                </label>
                <input
                  id="menu-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search dishes, ingredients…"
                  className="field pl-11"
                />
                {query ? (
                  <button
                    type="button"
                    onClick={() => setQuery('')}
                    aria-label="Clear search"
                    className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-haze transition-colors hover:bg-white/10 hover:text-mist"
                  >
                    <X className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Dietary filters">
                {menuFilters.map((filter) => {
                  const active = activeFilters.includes(filter.id);
                  return (
                    <button
                      key={filter.id}
                      type="button"
                      onClick={() => toggleFilter(filter.id)}
                      aria-pressed={active}
                      className={cn(
                        'min-h-[40px] rounded-full border px-4 text-xs font-semibold uppercase tracking-wider transition-all duration-300',
                        active
                          ? 'border-gold/50 bg-gold/15 text-gold shadow-[0_0_20px_rgba(245,181,68,0.2)]'
                          : 'border-white/10 bg-white/[0.04] text-haze hover:border-white/25 hover:text-mist'
                      )}
                    >
                      {filter.label}
                    </button>
                  );
                })}

                {hasActiveSearch ? (
                  <button
                    type="button"
                    onClick={resetAll}
                    className="min-h-[40px] rounded-full px-3 text-xs font-medium text-haze underline underline-offset-4 transition-colors hover:text-mist"
                  >
                    Reset
                  </button>
                ) : null}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Grid ---------------------------------------------------------- */}
        <div className="mt-10 min-h-[420px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
            >
              {filteredItems.map((item, index) => (
                <MenuCard key={item.id} item={item} index={index} onOpen={setSelectedItem} />
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty state */}
          {filteredItems.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass mx-auto mt-6 flex max-w-md flex-col items-center gap-4 rounded-3xl px-8 py-14 text-center"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <UtensilsCrossed className="h-6 w-6 text-gold" aria-hidden="true" />
              </span>
              <h3 className="font-display text-xl font-bold text-mist">No items found</h3>
              <p className="text-sm leading-relaxed text-haze">
                We couldn’t find a dish matching “{query || activeFilters.join(', ')}” in this
                chapter. Try another keyword, or reset the filters.
              </p>
              <button
                type="button"
                onClick={resetAll}
                className="min-h-[44px] rounded-full border border-gold/40 bg-gold/10 px-6 text-sm font-semibold text-gold transition-all hover:bg-gold hover:text-ink"
              >
                Clear filters
              </button>
            </motion.div>
          ) : null}
        </div>
      </div>

      {/* Floating order bar */}
      <AnimatePresence>
        {count > 0 ? (
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            onClick={openCart}
            className="glass glow-border fixed bottom-5 right-5 z-40 inline-flex min-h-[52px] items-center gap-3 rounded-full px-5 text-sm font-semibold text-mist transition-transform duration-300 hover:scale-[1.03]"
            aria-label={`View your order, ${count} items, total ${formatPrice(total)}`}
          >
            <span className="relative">
              <ShoppingBag className="h-[18px] w-[18px] text-gold" aria-hidden="true" />
              <span className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-ink">
                {count}
              </span>
            </span>
            View order · {formatPrice(total)}
          </motion.button>
        ) : null}
      </AnimatePresence>

      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
