import { Link } from 'react-router-dom';
import { Minus, Plus, ShoppingBag, Trash2 } from 'lucide-react';
import Modal from './ui/Modal';
import SmartImage from './ui/SmartImage';
import Button from './ui/Button';
import { useCart } from '../hooks/useCart';
import { formatPrice } from '../utils/format';
import siteConfig from '../data/siteConfig';

/** Mini cart drawer — persisted in localStorage through useCart. */
export default function CartDrawer() {
  const { items, total, count, isOpen, closeCart, increment, decrement, remove, clear } = useCart();

  const orderText = items.map((item) => `${item.qty}× ${item.name}`).join(', ');
  const whatsappUrl = `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(
    `Hi ${siteConfig.shortName}! I would like to place this order: ${orderText}. Total: ${formatPrice(
      total
    )}.`
  )}`;

  return (
    <Modal
      open={isOpen}
      onClose={closeCart}
      position="right"
      panelClassName="max-w-md"
      closeLabel="Close order tray"
      labelledBy="cart-drawer-title"
    >
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-5">
          <div>
            <h2 id="cart-drawer-title" className="text-xl font-bold text-mist">
              Your Order
            </h2>
            <p className="mt-1 text-xs text-haze">
              {count} item{count === 1 ? '' : 's'} · ready to send to the kitchen
            </p>
          </div>
          {items.length ? (
            <button
              type="button"
              onClick={clear}
              className="text-xs font-medium uppercase tracking-wider text-haze underline-offset-4 transition-colors duration-200 hover:text-red-300 hover:underline"
            >
              Clear
            </button>
          ) : null}
        </div>

        {/* Items */}
        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-8 text-center">
            <span className="flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <ShoppingBag className="h-6 w-6 text-gold" aria-hidden="true" />
            </span>
            <p className="text-sm leading-relaxed text-haze">
              Your tray is empty. Browse the menu and tap <strong className="text-mist">Add</strong>{' '}
              to build an order — then simply show it to your waiter.
            </p>
            <Button to="/menu" variant="ghost" onClick={closeCart}>
              Explore the Menu
            </Button>
          </div>
        ) : (
          <>
            <ul className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-3"
                >
                  <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                    <SmartImage
                      src={item.image}
                      alt={item.alt}
                      width={64}
                      height={64}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 flex-col justify-between">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="min-w-0 truncate text-sm font-semibold text-mist">{item.name}</h3>
                      <button
                        type="button"
                        onClick={() => remove(item.id)}
                        aria-label={`Remove ${item.name} from order`}
                        className="shrink-0 rounded-full p-1.5 text-haze transition-colors duration-200 hover:bg-red-500/10 hover:text-red-300"
                      >
                        <Trash2 className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>

                    <div className="mt-2 flex items-center justify-between gap-2">
                      <div className="inline-flex items-center rounded-full border border-white/10 bg-ink/60">
                        <button
                          type="button"
                          onClick={() => decrement(item.id)}
                          aria-label={`Decrease quantity of ${item.name}`}
                          className="flex h-9 w-9 items-center justify-center text-haze transition-colors duration-200 hover:text-gold"
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span className="min-w-[28px] text-center text-sm font-bold text-mist">
                          {item.qty}
                        </span>
                        <button
                          type="button"
                          onClick={() => increment(item.id)}
                          aria-label={`Increase quantity of ${item.name}`}
                          className="flex h-9 w-9 items-center justify-center text-haze transition-colors duration-200 hover:text-gold"
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                      <span className="shrink-0 text-sm font-bold text-gold tabular-nums">
                        {formatPrice(item.price * item.qty)}
                      </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            {/* Footer */}
            <div className="space-y-4 border-t border-white/10 px-5 pb-[calc(1.25rem+var(--safe-bottom))] pt-5">
              <div className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-haze">Total</span>
                <span className="text-2xl font-bold text-mist tabular-nums">
                  {formatPrice(total)}
                </span>
              </div>

              <p className="rounded-xl border border-gold/25 bg-gold/[0.07] px-4 py-3 text-xs leading-relaxed text-gold">
                Show this to the waiter to place your order.
              </p>

              <div className="flex flex-col gap-2.5">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[48px] items-center justify-center rounded-full border border-[#25D366]/40 bg-[#25D366]/15 text-sm font-semibold text-[#7BE8A3] transition-colors duration-200 hover:bg-[#25D366]/25"
                >
                  Send Order via WhatsApp
                </a>
                <Button to="/reservation" onClick={closeCart} className="w-full">
                  Reserve a Table
                </Button>
              </div>
            </div>
          </>
        )}
      </div>
    </Modal>
  );
}
