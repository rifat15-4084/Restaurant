import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import useScrollSpy from '../hooks/useScrollSpy';
import { useCart } from '../hooks/useCart';
import { scrollToId } from '../utils/scroll';
import GlowButton from './ui/GlowButton';
import cn from '../utils/cn';

const sectionIds = siteConfig.navLinks.map((link) => link.id);

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(sectionIds);
  const { count, openCart } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (!menuOpen) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [menuOpen]);

  const goTo = (id) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollToId(id), 120);
  };

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled || menuOpen
          ? 'border-b border-white/10 bg-ink/70 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      )}
    >
      <nav
        aria-label="Main navigation"
        className="container-x flex h-[72px] items-center justify-between gap-4 px-5 sm:px-8"
      >
        {/* Wordmark */}
        <button
          type="button"
          onClick={() => goTo('home')}
          className="group flex items-center gap-3"
          aria-label={`${siteConfig.name} — back to top`}
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-neon shadow-[0_0_14px_3px_rgba(61,240,224,0.6)]" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-extrabold tracking-[0.22em] text-mist">
              NABA
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.32em] text-haze">
              Kitchen &amp; Café
            </span>
          </span>
        </button>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.id}>
              <button
                type="button"
                onClick={() => goTo(link.id)}
                className="nav-link"
                data-active={activeId === link.id}
                aria-current={activeId === link.id ? 'true' : undefined}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open order tray, ${count} item${count === 1 ? '' : 's'}`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist backdrop-blur transition-colors hover:border-gold/40 hover:text-gold"
          >
            <ShoppingBag className="h-[18px] w-[18px]" aria-hidden="true" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-ink">
                {count > 99 ? '99+' : count}
              </span>
            ) : null}
          </button>

          <GlowButton to="reservation" className="hidden md:inline-flex">
            Reserve a Table
          </GlowButton>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist backdrop-blur lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            className="fixed inset-0 top-[72px] z-40 flex flex-col justify-between overflow-y-auto bg-ink/95 px-6 pb-10 pt-8 backdrop-blur-2xl lg:hidden"
            initial={{ opacity: 0, y: -18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
          >
            <ul className="flex flex-col gap-1">
              {siteConfig.navLinks.map((link, index) => (
                <motion.li
                  key={link.id}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 * index + 0.08, duration: 0.4 }}
                  className="border-b border-white/5"
                >
                  <button
                    type="button"
                    onClick={() => goTo(link.id)}
                    className="flex w-full items-center justify-between py-4 text-left font-display text-3xl font-bold text-mist transition-colors hover:text-gold"
                    aria-current={activeId === link.id ? 'true' : undefined}
                  >
                    {link.label}
                    <span className="text-xs font-sans font-medium tracking-[0.25em] text-haze">
                      0{index + 1}
                    </span>
                  </button>
                </motion.li>
              ))}
            </ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
              className="mt-10 flex flex-col gap-4"
            >
              <GlowButton to="reservation" className="w-full">
                Reserve a Table
              </GlowButton>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="glass-soft flex min-h-[48px] items-center justify-center rounded-full text-sm font-medium text-haze transition-colors hover:text-mist"
              >
                {siteConfig.phone}
              </a>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
