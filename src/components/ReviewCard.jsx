import { Star } from 'lucide-react';
import SmartImage from './ui/SmartImage';

function Stars({ rating }) {
  return (
    <div className="flex gap-1" aria-label={`${rating} out of 5 stars`} role="img">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star
          key={index}
          className={`h-4 w-4 ${index < rating ? 'fill-gold text-gold' : 'text-white/15'}`}
          aria-hidden="true"
        />
      ))}
    </div>
  );
}

/** Single guest review card, used on the Home and Reviews pages. */
export default function ReviewCard({ review }) {
  return (
    <figure className="flex h-full flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
      <Stars rating={review.rating} />

      <blockquote className="text-sm leading-relaxed text-mist">“{review.quote}”</blockquote>

      <figcaption className="mt-auto flex items-center gap-3 border-t border-white/10 pt-4">
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-full border border-gold/30">
          <SmartImage
            src={review.avatar}
            alt={`Portrait of ${review.name}`}
            width={48}
            height={48}
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-bold text-mist">{review.name}</p>
          <p className="truncate text-xs text-haze">{review.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}
