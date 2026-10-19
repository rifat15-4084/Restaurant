import { useRef } from 'react';
import Modal from './ui/Modal';
import SmartImage from './ui/SmartImage';
import GlowButton from './ui/GlowButton';
import { badgeMeta } from '../data/menu';
import { formatPrice } from '../utils/format';
import { useCart } from '../hooks/useCart';

/** Accessible detail dialog for a single menu item. */
export default function MenuModal({ item, onClose }) {
  const { add, openCart } = useCart();
  const open = Boolean(item);
  const lastItemRef = useRef(null);
  if (item) lastItemRef.current = item;
  const displayItem = item || lastItemRef.current;

  const handleAdd = () => {
    if (!displayItem) return;
    add(displayItem);
    onClose();
    openCart();
  };

  return (
    <Modal open={open} onClose={onClose} labelledBy="menu-modal-title" closeLabel="Close item details">
      {displayItem ? (
        <div className="flex min-h-0 flex-1 flex-col overflow-y-auto">
          <div className="relative h-56 shrink-0 sm:h-72">
            <SmartImage
              src={displayItem.image}
              alt={displayItem.alt}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
              <h3
                id="menu-modal-title"
                className="font-display text-2xl font-extrabold text-mist sm:text-3xl"
              >
                {displayItem.name}
              </h3>
              <span className="font-display text-2xl font-extrabold text-gold">
                {formatPrice(displayItem.price)}
              </span>
            </div>
          </div>

          <div className="flex flex-col gap-5 p-5 sm:p-7">
            {displayItem.tags.length ? (
              <div className="flex flex-wrap gap-2">
                {displayItem.tags.map((tag) =>
                  badgeMeta[tag] ? (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-wider ${badgeMeta[tag].className}`}
                    >
                      {badgeMeta[tag].label}
                    </span>
                  ) : null
                )}
              </div>
            ) : null}

            <p className="text-sm leading-relaxed text-haze sm:text-base">
              {displayItem.longDescription}
            </p>

            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-gold">
                What’s inside
              </h4>
              <ul className="flex flex-wrap gap-2">
                {displayItem.ingredients.map((ingredient) => (
                  <li
                    key={ingredient}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-mist"
                  >
                    {ingredient}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex items-center justify-between text-xs uppercase tracking-[0.18em] text-haze">
              <span>Calories · {displayItem.calories} kcal</span>
              <span>Serves 1</span>
            </div>

            <GlowButton onClick={handleAdd} className="w-full">
              Add to Order — {formatPrice(displayItem.price)}
            </GlowButton>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
