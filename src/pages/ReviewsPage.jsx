import { Star } from 'lucide-react';
import { reviews, ratingSummary } from '../data/reviews';
import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import ReviewCard from '../components/ReviewCard';
import Button from '../components/ui/Button';

export default function ReviewsPage() {
  usePageTitle(
    'Guest Reviews',
    'What guests say about Naba Kitchen & Café — food bloggers, families and regulars on the food, coffee and the room.'
  );

  return (
    <>
      <PageHeader
        title="Guest reviews"
        subtitle="Straight from the people who book us for birthdays, first dates and slow Sunday mornings."
      />

      <section className="section-pad" aria-label="All guest reviews">
        <div className="container-x">
          {/* Intro */}
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-haze sm:text-base">
            Every note below follows a real visit. Guests are invited to review us after the meal,
            and we publish each one as it was written — whether the evening was perfect or simply
            very good. The summary beside the grid covers every verified review since our first
            service, from food bloggers and out-of-town visitors to the regulars who book the same
            table each week.
          </p>

          {/* Rating summary */}
          <div className="mb-10 flex flex-wrap items-start gap-x-10 gap-y-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="min-w-[130px]">
              <p className="font-display text-5xl font-bold leading-none text-gold tabular-nums">
                {ratingSummary.average}
              </p>
              <div className="mt-3 flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-2 text-sm text-haze">
                Based on {ratingSummary.total.toLocaleString('en-US')} verified guest reviews
              </p>
            </div>

            <div
              className="grid min-w-[240px] flex-1 gap-2"
              aria-label="Rating breakdown from five stars to one star"
            >
              {ratingSummary.breakdown.map((row) => {
                const pct = Math.round((row.count / ratingSummary.total) * 1000) / 10;
                return (
                  <div key={row.stars} className="flex items-center gap-3 text-xs text-haze">
                    <span className="w-9 shrink-0 text-right tabular-nums">{row.stars} ★</span>
                    <span
                      className="h-1.5 flex-1 overflow-hidden rounded-full bg-white/10"
                      aria-hidden="true"
                    >
                      <span
                        className="block h-full rounded-full bg-gold"
                        style={{ width: `${pct}%` }}
                      />
                    </span>
                    <span className="w-14 shrink-0 tabular-nums">
                      {row.count.toLocaleString('en-US')}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center gap-4 text-center">
            <p className="max-w-md text-sm leading-relaxed text-haze">
              Dined with us recently? We read every note — tell us how we did.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button to="/reservation">Reserve a Table</Button>
              <Button to="/menu" variant="ghost">
                Explore the menu
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
