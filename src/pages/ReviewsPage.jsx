import { Star } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { reviews } from '../data/reviews';
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
          {/* Rating summary */}
          <div className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-white/10 bg-white/[0.03] p-5">
            <span className="font-display text-4xl font-bold text-gold tabular-nums">
              {siteConfig.rating}
            </span>
            <div>
              <div className="flex gap-1" aria-hidden="true">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-gold text-gold" />
                ))}
              </div>
              <p className="mt-1 text-sm text-haze">
                Based on {siteConfig.reviewCount} verified guest reviews
              </p>
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
