import { Clock, Star, Wifi } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import useOpenStatus from '../hooks/useOpenStatus';
import Button from './ui/Button';
import SmartImage from './ui/SmartImage';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80';

function InfoCard({ icon, label, value, open }) {
  return (
    <div className="flex-1 rounded-2xl border border-white/10 bg-white/5 p-5 sm:flex-none sm:min-w-[180px]">
      <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-haze">
        {open !== undefined ? (
          <span
            className={`h-1.5 w-1.5 rounded-full ${open ? 'bg-emerald-400' : 'bg-haze'}`}
            aria-hidden="true"
          />
        ) : (
          <span className="text-gold" aria-hidden="true">
            {icon}
          </span>
        )}
        {label}
      </span>
      <span className="mt-1 block text-sm font-semibold text-mist">{value}</span>
    </div>
  );
}

/**
 * Home hero — compact and static. No parallax, no word-by-word reveal;
 * the whole page fades in once via the Layout's page transition.
 */
export default function Hero() {
  const { isOpen, nextChange } = useOpenStatus();

  return (
    <section
      className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden"
      aria-label="Welcome to Naba Kitchen and Café"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <SmartImage
          eager
          src={HERO_IMAGE}
          alt="Candle-lit dining room at Naba Kitchen with warm golden light and set tables"
          width={1920}
          height={1280}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-ink/75" />
      </div>

      <div className="relative z-10 w-full px-5 py-20 sm:px-8">
        <div className="container-x">
          <div className="max-w-3xl">
            <p className="mb-6 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] font-medium uppercase tracking-[0.24em] text-haze">
              Gulshan · Dhaka — {siteConfig.cuisine}
            </p>

            <h1 className="text-4xl font-bold leading-[1.15] text-mist sm:text-5xl md:text-6xl">
              Taste the <span className="text-gold">Future</span> of Dining
            </h1>

            <p className="mt-6 max-w-xl text-base leading-relaxed text-haze sm:text-lg">
              Modern fusion plates, specialty coffee and slow mornings — served in a refined
              dining room where warm brass meets soft light. Book a table, or build your order
              and show it to your waiter.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button to="/reservation">Reserve a Table</Button>
              <Button to="/menu" variant="ghost">
                Explore Menu
              </Button>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:gap-4">
              <InfoCard
                open={isOpen}
                label={isOpen ? 'Open Now' : 'Currently Closed'}
                value={nextChange}
              />
              <InfoCard
                icon={<Star className="h-3.5 w-3.5 fill-current" />}
                label="Guest Rating"
                value={`${siteConfig.rating} ★ · ${siteConfig.reviewCount} reviews`}
              />
              <InfoCard
                icon={<Wifi className="h-3.5 w-3.5" />}
                label="For Guests"
                value={siteConfig.wifi}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
