import { lazy, Suspense } from 'react';
import { MotionConfig } from 'framer-motion';
import { CartProvider } from './hooks/useCart';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import CartDrawer from './components/CartDrawer';
import BackgroundOrbs from './components/ui/BackgroundOrbs';
import CursorGlow from './components/ui/CursorGlow';

// Heavy below-the-fold sections load lazily to keep the first paint fast.
const Menu = lazy(() => import('./components/Menu'));
const About = lazy(() => import('./components/About'));
const Gallery = lazy(() => import('./components/Gallery'));
const Reservation = lazy(() => import('./components/Reservation'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const Location = lazy(() => import('./components/Location'));
const Footer = lazy(() => import('./components/Footer'));

function SectionFallback() {
  return (
    <div className="flex min-h-[45vh] items-center justify-center" aria-hidden="true">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-gold" />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <CartProvider>
        <a
          href="#menu"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[200] focus:rounded-full focus:bg-gold focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink"
        >
          Skip to menu
        </a>

        <BackgroundOrbs />
        <CursorGlow />

        <Navbar />

        <main>
          <Hero />
          <Stats />

          <Suspense fallback={<SectionFallback />}>
            <Menu />
            <About />
            <Gallery />
            <Reservation />
            <Testimonials />
            <Location />
          </Suspense>
        </main>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>

        <CartDrawer />
      </CartProvider>
    </MotionConfig>
  );
}
