import { useMemo } from 'react';
import { ArrowRight, MessageCircle, Star } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { menuItems } from '../data/menu';
import { reviews } from '../data/reviews';
import usePageTitle from '../hooks/usePageTitle';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import ReviewCard from '../components/ReviewCard';
import SectionHeading from '../components/ui/SectionHeading';
import Button from '../components/ui/Button';
import SmartImage from '../components/ui/SmartImage';
import { formatPrice } from '../utils/format';

const ABOUT_IMAGE =
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80';

export default function Home() {
  usePageTitle('', siteConfig.description);

  // Three highlights from the menu (chef's picks, with a graceful fallback).
  const featured = useMemo(() => {
    const picks = menuItems.filter((item) => item.tags.includes('chef'));
    return (picks.length >= 3 ? picks : menuItems).slice(0, 3);
  }, []);

  const previewReviews = reviews.slice(0, 3);

  return (
    <>
      <Hero />
      <Stats />

      {/* Featured dishes ------------------------------------------------ */}
      <section className="section-pad" aria-labelledby="featured-heading">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Chef’s Picks"
              id="featured-heading"
              title="Three plates worth the trip"
              subtitle="A short taste of the full menu — wood-fired, slow-braised and poured to order."
            />
            <Button to="/menu" variant="ghost" className="shrink-0 self-start lg:self-auto">
              View full menu
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((item) => (
              <article
                key={item.id}
                className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] transition-colors duration-200 hover:border-gold/30 hover:shadow-card"
              >
                <SmartImage
                  src={item.image}
                  alt={item.alt}
                  width={640}
                  height={400}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-col gap-2 p-5">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="min-w-0 flex-1 break-words text-lg font-bold leading-snug text-mist">
                      {item.name}
                    </h3>
                    <span className="shrink-0 text-lg font-bold text-gold tabular-nums">
                      {formatPrice(item.price)}
                    </span>
                  </div>
                  <p className="line-clamp-2 text-sm leading-relaxed text-haze">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* About teaser --------------------------------------------------- */}
      <section
        className="section-pad border-y border-white/5 bg-charcoal/40"
        aria-labelledby="about-teaser-heading"
      >
        <div className="container-x grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="overflow-hidden rounded-2xl border border-white/10 shadow-card">
            <SmartImage
              src={ABOUT_IMAGE}
              alt="Guests dining in the warm, plant-filled room at Naba Kitchen"
              width={1200}
              height={800}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>

          <div>
            <SectionHeading
              eyebrow="Our Story"
              id="about-teaser-heading"
              title={
                <>
                  A six-seat counter, grown into a <span className="text-gold">Gulshan</span>{' '}
                  dining room.
                </>
              }
            />
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-haze sm:text-base">
              <p>
                Naba began in 2014 with one rule that still stands: nothing leaves the pass
                unless we would serve it to our own family. Twelve years later the kitchen still
                ferments its own dough and grinds its spice blends at 5 AM.
              </p>
              <p>
                Today the room holds ninety guests, a wood-fired oven and a slow bar pouring
                single-origin espresso.
              </p>
            </div>
            <Button to="/about" className="mt-8">
              Read our story
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </section>

      {/* Reviews preview ------------------------------------------------ */}
      <section className="section-pad" aria-labelledby="reviews-preview-heading">
        <div className="container-x">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <SectionHeading
              eyebrow="Guest Reviews"
              id="reviews-preview-heading"
              title="What our guests say"
              subtitle={`${siteConfig.rating} out of 5 from ${siteConfig.reviewCount} reviews.`}
            />
            <Button to="/reviews" variant="ghost" className="shrink-0 self-start lg:self-auto">
              All reviews
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {previewReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Reservation CTA ------------------------------------------------ */}
      <section
        className="section-pad border-t border-white/5 bg-charcoal/40"
        aria-labelledby="home-cta-heading"
      >
        <div className="container-x max-w-3xl text-center">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-gold">
            Reservations
          </p>
          <h2 id="home-cta-heading" className="text-3xl font-bold leading-tight text-mist sm:text-4xl">
            Save your seat at the table
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-haze">
            Book in under a minute — we confirm every request by email or phone within the hour.
            Prefer chatting? Message us on WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button to="/reservation">Reserve a Table</Button>
            <Button
              href={`https://wa.me/${siteConfig.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              variant="ghost"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              WhatsApp us
            </Button>
          </div>

          <p className="mt-6 flex items-center justify-center gap-2 text-sm text-haze">
            <Star className="h-4 w-4 fill-gold text-gold" aria-hidden="true" />
            {siteConfig.rating} guest rating · {siteConfig.reviewCount} reviews
          </p>
        </div>
      </section>
    </>
  );
}
