import { Suspense } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import CartDrawer from './CartDrawer';
import ScrollToTop from './ScrollToTop';

function PageFallback() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" aria-hidden="true">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-gold" />
    </div>
  );
}

/**
 * Shared shell for every page: fixed Navbar, page content (lazy-loaded
 * routes fade in over 0.3s), Footer and the persistent CartDrawer.
 */
export default function Layout() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToTop />
      <Navbar />

      {/* pt matches the fixed navbar height so no content is ever covered */}
      <main className="flex-1 pt-[72px]">
        <Suspense fallback={<PageFallback />}>
          <div key={pathname} className="animate-page-fade">
            <Outlet />
          </div>
        </Suspense>
      </main>

      <Footer />
      <CartDrawer />
    </div>
  );
}
