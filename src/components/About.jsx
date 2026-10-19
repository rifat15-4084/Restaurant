import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Award, Leaf, Sparkles } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import SmartImage from './ui/SmartImage';

const iconMap = { leaf: Leaf, award: Award, sparkles: Sparkles };

const MAIN_IMAGE =
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80';
const DETAIL_IMAGE =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80';

export default function About() {
  const sectionRef = useRef(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });
  const mainY = useTransform(scrollYProgress, [0, 1], [40, reduce ? 40 : -40]);
  const detailY = useTransform(scrollYProgress, [0, 1], [-30, reduce ? -30 : 30]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-pad relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      <div className="container-x grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Imagery with parallax */}
        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <motion.div
            style={{ y: mainY }}
            className="relative overflow-hidden rounded-[28px] border border-white/10 shadow-card"
          >
            <SmartImage
              src={MAIN_IMAGE}
              alt="Warm, plant-filled dining corner at Naba Kitchen with soft evening light"
              className="aspect-[4/5] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
          </motion.div>

          <motion.div
            style={{ y: detailY }}
            className="glass glow-border absolute -bottom-8 -right-2 w-40 overflow-hidden rounded-3xl sm:w-52 lg:-right-10 lg:w-60"
          >
            <SmartImage
              src={DETAIL_IMAGE}
              alt="Barista pulling a fresh espresso shot at the Naba slow bar"
              className="aspect-square w-full object-cover"
            />
          </motion.div>

          {/* Accent frame */}
          <div
            aria-hidden="true"
            className="absolute -left-4 -top-4 -z-10 h-28 w-28 rounded-3xl border border-gold/30"
          />
        </div>

        {/* Story */}
        <div>
          <SectionHeading
            eyebrow="Our Story"
            id="about-heading"
            title={
              <>
                Born from an obsession with <span className="text-gradient">fire</span> and time.
              </>
            }
          />

          <Reveal delay={0.12}>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-haze sm:text-base">
              <p>
                Naba began in 2014 as a six-seat coffee counter on this very avenue. The rule was
                simple then, and it hasn’t changed: nothing leaves the pass unless we would serve it
                to our own family.
              </p>
              <p>
                Today the room holds ninety guests, a wood-fired oven and a slow bar pouring
                single-origin espresso — but the kitchen still ferments its own dough, cures its own
                pickles and grinds its spice blends at 5 AM. That is the whole trick: futuristic
                room, timeless discipline.
              </p>
            </div>
          </Reveal>

          {/* Feature points */}
          <ul className="mt-10 space-y-4">
            {siteConfig.features.map((feature, index) => {
              const Icon = iconMap[feature.icon] || Sparkles;
              return (
                <li key={feature.id}>
                  <Reveal delay={0.16 + index * 0.08}>
                    <div className="glass-soft group flex items-start gap-4 rounded-2xl p-5 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_0_30px_rgba(245,181,68,0.12)]">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold transition-transform duration-500 group-hover:scale-110">
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </span>
                      <span>
                        <span className="block font-display text-base font-bold text-mist">
                          {feature.title}
                        </span>
                        <span className="mt-1 block text-sm leading-relaxed text-haze">
                          {feature.text}
                        </span>
                      </span>
                    </div>
                  </Reveal>
                </li>
              );
            })}
          </ul>

          {/* Chef signature */}
          <Reveal delay={0.4}>
            <div className="mt-10 inline-flex flex-col">
              <span className="font-display text-2xl font-bold italic text-mist">
                Arif&nbsp;Mahmood
              </span>
              <span className="mt-2 w-fit border-t border-gold/40 pt-2 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
                Executive Chef &amp; Founder
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
