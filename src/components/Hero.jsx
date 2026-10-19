import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Star, Wifi, Clock } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import useOpenStatus from '../hooks/useOpenStatus';
import GlowButton from './ui/GlowButton';
import SmartImage from './ui/SmartImage';

const HERO_IMAGE =
  'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1920&q=80';

const words = siteConfig.tagline.split(' ');

const wordContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.085, delayChildren: 0.25 } },
};

const wordVariant = {
  hidden: { opacity: 0, y: 46, filter: 'blur(8px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

function GlassCard({ icon, label, value, accent = 'gold', delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="glass glow-border flex min-w-[150px] flex-col gap-1 rounded-2xl px-5 py-4"
    >
      <span className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-haze">
        <span className={accent === 'cyan' ? 'text-neon' : 'text-gold'}>{icon}</span>
        {label}
      </span>
      <span className="font-display text-base font-bold text-mist">{value}</span>
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { isOpen, nextChange } = useOpenStatus();
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '18%']);
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', reduce ? '0%' : '10%']);
  const fadeOut = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-[100svh] items-center overflow-hidden pt-24"
      aria-label="Welcome to Naba Kitchen and Café"
    >
      {/* Cinematic background */}
      <motion.div style={{ y: backgroundY }} className="absolute inset-0 -z-10">
        <SmartImage
          eager
          src={HERO_IMAGE}
          alt="Candle-lit dining room at Naba Kitchen with warm golden light and set tables"
          className="h-full w-full scale-110 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/65 to-ink" />
        <div className="absolute inset-0 bg-[radial-gradient(75%_55%_at_50%_10%,transparent_0%,rgba(10,10,11,0.85)_100%)]" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: fadeOut }}
        className="container-x relative px-5 pb-28 pt-10 sm:px-8"
      >
        <div className="max-w-4xl">
          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="glass-soft mb-7 inline-flex items-center gap-2.5 rounded-full px-4 py-2"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-neon shadow-[0_0_10px_2px_rgba(61,240,224,0.7)]" />
            <span className="text-[11px] font-medium uppercase tracking-[0.24em] text-haze">
              Gulshan · Dhaka — {siteConfig.cuisine}
            </span>
          </motion.div>

          {/* Headline, word by word */}
          <motion.h1
            variants={wordContainer}
            initial="hidden"
            animate="show"
            className="text-shadow-hero font-display text-[13vw] font-extrabold leading-[0.95] tracking-tight text-mist sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem]"
          >
            {words.map((word, index) => (
              <motion.span
                key={`${word}-${index}`}
                variants={wordVariant}
                className={
                  word.toLowerCase() === 'future'
                    ? 'text-gradient mr-3 inline-block'
                    : 'mr-3 inline-block'
                }
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-7 max-w-xl text-base leading-relaxed text-haze sm:text-lg"
          >
            Modern fusion plates, specialty coffee and slow mornings — served in a cinematic
            dining room where warm brass meets soft neon. Book a table, or build your order and
            show it to your waiter.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <GlowButton to="reservation">
              Reserve a Table
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </GlowButton>
            <GlowButton to="menu" variant="ghost">
              Explore Menu
            </GlowButton>
          </motion.div>

          {/* Floating glass info cards */}
          <div className="mt-14 flex flex-wrap gap-4">
            <GlassCard
              icon={<Clock className="h-3.5 w-3.5" aria-hidden="true" />}
              label={isOpen ? 'Open Now' : 'Currently Closed'}
              value={nextChange}
              accent={isOpen ? 'cyan' : 'gold'}
              delay={1.15}
            />
            <GlassCard
              icon={<Star className="h-3.5 w-3.5 fill-current" aria-hidden="true" />}
              label="Guest Rating"
              value={`${siteConfig.rating} ★ · ${siteConfig.reviewCount} reviews`}
              delay={1.28}
            />
            <GlassCard
              icon={<Wifi className="h-3.5 w-3.5" aria-hidden="true" />}
              label="For Guests"
              value={siteConfig.wifi}
              delay={1.41}
            />
          </div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7, duration: 1 }}
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
        aria-hidden="true"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.32em] text-haze">
          Scroll
        </span>
        <span className="flex h-12 w-7 items-start justify-center rounded-full border border-white/20 p-1.5">
          <span className="h-2.5 w-1 rounded-full bg-gold animate-scroll-dot" />
        </span>
      </motion.div>
    </section>
  );
}
