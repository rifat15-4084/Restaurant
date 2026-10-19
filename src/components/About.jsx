import { Award, Leaf, Sparkles } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import SectionHeading from './ui/SectionHeading';
import SmartImage from './ui/SmartImage';

const iconMap = { leaf: Leaf, award: Award, sparkles: Sparkles };

const MAIN_IMAGE =
  'https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1200&q=80';
const DETAIL_IMAGE =
  'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80';

/**
 * Full About content: story, feature points and the chef signature.
 * Static layout — no parallax, no scroll reveals.
 */
export default function About() {
  return (
    <div className="grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
      {/* Imagery */}
      <div className="relative mx-auto w-full max-w-lg pb-16 lg:pb-0 lg:max-w-none">
        <div className="overflow-hidden rounded-2xl border border-white/10 shadow-card">
          <SmartImage
            src={MAIN_IMAGE}
            alt="Warm, plant-filled dining corner at Naba Kitchen with soft evening light"
            width={1200}
            height={1500}
            className="aspect-[4/5] w-full object-cover"
          />
        </div>

        <div className="absolute bottom-0 right-0 w-40 overflow-hidden rounded-2xl border border-white/10 shadow-card sm:w-52 lg:-right-10 lg:w-60">
          <SmartImage
            src={DETAIL_IMAGE}
            alt="Barista pulling a fresh espresso shot at the Naba slow bar"
            width={480}
            height={480}
            className="aspect-square w-full object-cover"
          />
        </div>
      </div>

      {/* Story */}
      <div>
        <SectionHeading
          eyebrow="Our Story"
          title={
            <>
              Born from an obsession with <span className="text-gold">fire</span> and time.
            </>
          }
        />

        <div className="mt-6 space-y-4 text-sm leading-relaxed text-haze sm:text-base">
          <p>
            Naba began in 2014 as a six-seat coffee counter on this very avenue. The rule was
            simple then, and it hasn’t changed: nothing leaves the pass unless we would serve it
            to our own family.
          </p>
          <p>
            Today the room holds ninety guests, a wood-fired oven and a slow bar pouring
            single-origin espresso — but the kitchen still ferments its own dough, cures its own
            pickles and grinds its spice blends at 5 AM. That is the whole trick: a refined
            room, timeless discipline.
          </p>
        </div>

        {/* Feature points */}
        <ul className="mt-10 space-y-4">
          {siteConfig.features.map((feature) => {
            const Icon = iconMap[feature.icon] || Sparkles;
            return (
              <li key={feature.id}>
                <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors duration-200 hover:border-gold/30">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/30 bg-gold/10 text-gold">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-base font-bold text-mist">{feature.title}</span>
                    <span className="mt-1 block text-sm leading-relaxed text-haze">
                      {feature.text}
                    </span>
                  </span>
                </div>
              </li>
            );
          })}
        </ul>

        {/* Chef signature */}
        <div className="mt-10 inline-flex flex-col">
          <span className="font-display text-2xl font-bold italic text-mist">Arif&nbsp;Mahmood</span>
          <span className="mt-2 w-fit border-t border-gold/40 pt-2 text-[11px] font-medium uppercase tracking-[0.28em] text-gold">
            Executive Chef &amp; Founder
          </span>
        </div>
      </div>
    </div>
  );
}
