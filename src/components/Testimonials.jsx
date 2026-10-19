import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { reviews } from '../data/reviews';
import SmartImage from './ui/SmartImage';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';

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

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const sectionRef = useRef(null);

  const go = useCallback(
    (direction) => setIndex((prev) => (prev + direction + reviews.length) % reviews.length),
    []
  );

  // Auto-play — pauses on hover, focus, and for reduced-motion users.
  useEffect(() => {
    if (paused || reduce) return undefined;
    const timer = setInterval(() => go(1), 5200);
    return () => clearInterval(timer);
  }, [paused, reduce, go]);

  return (
    <section
      id="reviews"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      aria-labelledby="reviews-heading"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Guest Reviews"
            id="reviews-heading"
            title={
              <>
                Word from <span className="text-gradient">our tables</span>.
              </>
            }
            subtitle="4.9 out of 5 across 1,240+ reviews — here is what guests say after the last plate leaves."
          />

          <Reveal delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous review"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition-all hover:border-gold/50 hover:text-gold"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next review"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-white/5 text-mist transition-all hover:border-gold/50 hover:text-gold"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </Reveal>
        </div>

        {/* Carousel */}
        <div className="relative mt-12 overflow-hidden">
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              drag={reduce ? false : 'x'}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.16}
              onDragEnd={(_, info) => {
                if (info.offset.x < -60 || info.velocity.x < -450) go(1);
                else if (info.offset.x > 60 || info.velocity.x > 450) go(-1);
              }}
              initial={{ opacity: 0, x: 60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -60 }}
              transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="cursor-grab active:cursor-grabbing"
            >
              <figure className="glass glow-border relative mx-auto flex max-w-3xl flex-col gap-6 rounded-[28px] p-8 sm:p-12">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -top-6 right-8 font-display text-[7rem] leading-none text-gold/15 select-none"
                >
                  “
                </span>

                <Stars rating={reviews[index].rating} />

                <blockquote className="font-display text-xl font-semibold leading-relaxed text-mist sm:text-2xl">
                  {reviews[index].quote}
                </blockquote>

                <figcaption className="mt-auto flex items-center gap-4 border-t border-white/10 pt-6">
                  <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-gold/30">
                    <SmartImage
                      src={reviews[index].avatar}
                      alt={`Portrait of ${reviews[index].name}`}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-display text-base font-bold text-mist">{reviews[index].name}</p>
                    <p className="text-sm text-haze">{reviews[index].role}</p>
                  </div>
                  <span className="ml-auto hidden text-[11px] font-semibold uppercase tracking-[0.22em] text-gold sm:block">
                    Verified guest
                  </span>
                </figcaption>
              </figure>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="mt-8 flex items-center justify-center gap-2" role="group" aria-label="Choose review">
          {reviews.map((review, dotIndex) => (
            <button
              key={review.id}
              type="button"
              aria-pressed={dotIndex === index}
              aria-label={`Review ${dotIndex + 1} of ${reviews.length} by ${review.name}`}
              onClick={() => setIndex(dotIndex)}
              className="flex h-11 w-11 items-center justify-center"
            >
              <span
                className={`h-2 rounded-full transition-all duration-500 ${
                  dotIndex === index ? 'w-8 bg-gold shadow-[0_0_12px_rgba(245,181,68,0.7)]' : 'w-2 bg-white/20'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
