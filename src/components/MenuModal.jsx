import { useRef } from 'react';
import { Link } from 'react-router-dom';
import Modal from './ui/Modal';
import SmartImage from './ui/SmartImage';
import Button from './ui/Button';
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
          <div className="relative aspect-[16/9] shrink-0">
            <SmartImage
              src={displayItem.image}
              alt={displayItem.alt}
              width={960}
              height={540}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-transparent" />
            <div className="absolute bottom-4 left-5 right-5 flex flex-wrap items-end justify-between gap-3">
              <h3
                id="menu-modal-title"
                className="min-w-0 break-words text-2xl font-bold text-mist sm:text-3xl"
              >
                {displayItem.name}
              </h3>
              <span className="shrink-0 text-2xl font-bold text-gold tabular-nums">
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

            <div className="flex items-center justify-between gap-4 text-xs uppercase tracking-[0.18em] text-haze">
              <span>Calories · {displayItem.calories} kcal</span>
              <span>Serves 1</span>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button onClick={handleAdd} className="flex-1">
                Add to Order — {formatPrice(displayItem.price)}
              </Button>
              <Link
                to="/reservation"
                onClick={onClose}
                className="inline-flex min-h-[48px] flex-1 items-center justify-center rounded-full border border-white/15 bg-white/5 px-7 text-sm font-semibold text-mist transition-colors duration-200 hover:border-gold/50 hover:text-gold"
              >
                Reserve a Table
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
