import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, ShoppingBag, X } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { useCart } from '../hooks/useCart';
import Button from './ui/Button';
import cn from '../utils/cn';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { count, openCart } = useCart();
  const { pathname } = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, []);

  const linkClass = ({ isActive }) => cn('nav-link', isActive && 'text-mist');

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-ink/90 backdrop-blur-md">
      <nav aria-label="Main navigation" className="px-5 sm:px-8">
        <div className="container-x flex h-[72px] items-center justify-between gap-4">
        {/* Wordmark */}
        <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — home`}>
          <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
          <span className="flex flex-col leading-none">
            <span className="font-display text-xl font-bold tracking-[0.22em] text-mist">
              NABA
            </span>
            <span className="mt-1 text-[9px] font-medium uppercase tracking-[0.28em] text-haze">
              Kitchen &amp; Café
            </span>
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {siteConfig.navLinks.map((link) => (
            <li key={link.path}>
              <NavLink to={link.path} end={link.path === '/'} className={linkClass}>
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          {/* Cart */}
          <button
            type="button"
            onClick={openCart}
            aria-label={`Open order tray, ${count} item${count === 1 ? '' : 's'}`}
            className="relative flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition-colors duration-200 hover:border-gold/40 hover:text-gold"
          >
            <ShoppingBag className="h-[18px] w-[18px]" aria-hidden="true" />
            {count > 0 ? (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-gold px-1 text-[11px] font-bold text-ink">
                {count > 99 ? '99+' : count}
              </span>
            ) : null}
          </button>

          <Button to="/reservation" className="hidden md:inline-flex">
            Reserve a Table
          </Button>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist lg:hidden"
          >
            {menuOpen ? (
              <X className="h-5 w-5" aria-hidden="true" />
            ) : (
              <MenuIcon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>
        </div>
        </div>
      </nav>

      {/* Mobile menu panel */}
      {menuOpen ? (
        <div id="mobile-menu" className="border-t border-white/10 bg-ink lg:hidden">
          <div className="px-5 py-6 sm:px-8">
            <div className="container-x">
              <ul className="flex flex-col">
                {siteConfig.navLinks.map((link) => (
                  <li key={link.path} className="border-b border-white/5">
                    <NavLink
                      to={link.path}
                      end={link.path === '/'}
                      className={({ isActive }) =>
                        cn(
                          'flex min-h-[48px] items-center py-3 text-base font-medium transition-colors duration-200',
                          isActive ? 'text-gold' : 'text-mist hover:text-gold'
                        )
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex flex-col gap-3">
                <Button to="/reservation" className="w-full">
                  Reserve a Table
                </Button>
                <a
                  href={`tel:${siteConfig.phoneHref}`}
                  className="flex min-h-[48px] items-center justify-center rounded-full border border-white/10 bg-white/5 text-sm font-medium text-haze transition-colors duration-200 hover:text-mist"
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}
