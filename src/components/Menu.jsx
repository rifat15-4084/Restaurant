import { useMemo, useState } from 'react';
import { Search, ShoppingBag, UtensilsCrossed, X } from 'lucide-react';
import { menuCategories, menuFilters, menuItems } from '../data/menu';
import MenuCard from './MenuCard';
import MenuModal from './MenuModal';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/format';
import cn from '../utils/cn';

const matchesFilter = (item, filterId) => {
  if (filterId === 'veg') {
    return item.tags.includes('veg') || item.tags.includes('vegan');
  }
  return item.tags.includes(filterId);
};

/**
 * Full menu explorer: category tabs, search, filter chips, item modal
 * and the floating order bar. Pure CSS state changes — no motion library.
 */
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
    <section className="section-pad" aria-label="Menu">
      <div className="container-x">
        {/* Chapter intro --------------------------------------------- */}
        <p className="mb-8 max-w-3xl text-sm leading-relaxed text-haze sm:text-base">
          Six chapters, revised with the seasons: produce arrives from Gazipur farms and the port
          market every morning, our dough ferments for 48 hours, and the spice blends are ground at
          5 AM. Vegetarian and vegan dishes are marked in every chapter, so you can browse with
          confidence before the waiter arrives.
        </p>

        {/* Category tabs --------------------------------------------- */}
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
                  'min-h-[44px] shrink-0 rounded-full px-5 text-sm font-semibold transition-colors duration-200',
                  active
                    ? 'bg-gold text-ink'
                    : 'border border-white/10 bg-white/[0.04] text-haze hover:border-white/25 hover:text-mist'
                )}
              >
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Search + filters ------------------------------------------ */}
        <div className="mt-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
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
                className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full text-haze transition-colors duration-200 hover:bg-white/10 hover:text-mist"
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
                    'min-h-[44px] rounded-full border px-4 text-xs font-semibold uppercase tracking-wider transition-colors duration-200',
                    active
                      ? 'border-gold/50 bg-gold/15 text-gold'
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
                className="min-h-[44px] rounded-full px-3 text-xs font-medium text-haze underline underline-offset-4 transition-colors duration-200 hover:text-mist"
              >
                Reset
              </button>
            ) : null}
          </div>
        </div>

        {/* Grid ------------------------------------------------------ */}
        <div className="mt-10 min-h-[420px]">
          {filteredItems.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <MenuCard key={item.id} item={item} onOpen={setSelectedItem} />
              ))}
            </div>
          ) : (
            <div className="glass mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl px-8 py-14 text-center">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <UtensilsCrossed className="h-6 w-6 text-gold" aria-hidden="true" />
              </span>
              <h3 className="text-xl font-bold text-mist">No items found</h3>
              <p className="text-sm leading-relaxed text-haze">
                We couldn’t find a dish matching “{query || activeFilters.join(', ')}” in this
                chapter. Try another keyword, or reset the filters.
              </p>
              <button
                type="button"
                onClick={resetAll}
                className="min-h-[44px] rounded-full border border-gold/40 bg-gold/10 px-6 text-sm font-semibold text-gold transition-colors duration-200 hover:bg-gold hover:text-ink"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>

        {/* Allergen & pricing note */}
        <div className="mt-10 border-t border-white/5 pt-6 text-sm leading-relaxed text-haze">
          <p>
            Please tell your server about any allergies before ordering — the kitchen works with
            nuts, dairy, gluten, sesame and shellfish daily, and although we take every care, we
            cannot offer a fully allergen-free environment. All prices are in Bangladeshi Taka (৳)
            and include applicable taxes; a service charge is added for tables of six or more.
            Dishes and prices may shift a little with the seasons.
          </p>
        </div>
      </div>

      {/* Floating order bar */}
      {count > 0 ? (
        <button
          type="button"
          onClick={openCart}
          className="fixed bottom-5 right-5 z-40 inline-flex min-h-[52px] items-center gap-3 rounded-full border border-white/10 bg-charcoal px-5 text-sm font-semibold text-mist shadow-card transition-colors duration-200 hover:border-gold/40 hover:text-gold"
          aria-label={`View your order, ${count} items, total ${formatPrice(total)}`}
        >
          <span className="relative">
            <ShoppingBag className="h-[18px] w-[18px] text-gold" aria-hidden="true" />
            <span className="absolute -right-2 -top-2 flex h-4 min-w-[16px] items-center justify-center rounded-full bg-gold px-1 text-[10px] font-bold text-ink">
              {count}
            </span>
          </span>
          View order · {formatPrice(total)}
        </button>
      ) : null}

      <MenuModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </section>
  );
}
