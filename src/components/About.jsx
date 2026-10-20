import { Award, Leaf, Sparkles, Heart } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { ourValues } from '../data/values';
import { timeline } from '../data/timeline';
import { team } from '../data/team';
import SectionHeading from './ui/SectionHeading';
import SmartImage from './ui/SmartImage';

const iconMap = { leaf: Leaf, award: Award, sparkles: Sparkles, heart: Heart };

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
    <>
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
          <p>
            The regulars know the rhythm by heart: the oven lit at noon, the sourdough folded at
            dusk, the last cortado pulled long after the avenue has gone quiet. Guests are not
            served a performance here — they are handed a chair at a table that has been kept
            for twelve years, and invited to stay.
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

      {/* Our Values */}
      <div className="mt-16 border-t border-white/5 pt-16 md:mt-24 md:pt-24">
        <SectionHeading
          eyebrow="Our Values"
          title={
            <>
              Four promises we keep <span className="text-gold">every single service</span>.
            </>
          }
        />
        <ul className="mt-8 grid gap-4 sm:grid-cols-2">
          {ourValues.map((value) => {
            const Icon = iconMap[value.icon] || Sparkles;
            return (
              <li
                key={value.id}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors duration-200 hover:border-gold/30"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <h3 className="mt-4 text-base font-bold text-mist">{value.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-haze">{value.description}</p>
              </li>
            );
          })}
        </ul>
      </div>

      {/* Timeline */}
      <div className="mt-16 border-t border-white/5 pt-16 md:mt-24 md:pt-24">
        <SectionHeading
          eyebrow="Milestones"
          title={
            <>
              Twelve years, <span className="text-gold">one rule</span>.
            </>
          }
        />
        <ol className="mt-10 space-y-10 border-l border-white/10 pl-8">
          {timeline.map((entry) => (
            <li key={entry.id} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[37px] top-1.5 h-2.5 w-2.5 rounded-full bg-gold"
              />
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-gold">
                {entry.year}
              </p>
              <h3 className="mt-2 text-base font-bold text-mist">{entry.title}</h3>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-haze">
                {entry.description}
              </p>
            </li>
          ))}
        </ol>
      </div>

      {/* Meet the Team */}
      <div className="mt-16 border-t border-white/5 pt-16 md:mt-24 md:pt-24">
        <SectionHeading
          eyebrow="Meet the Team"
          title={
            <>
              The people <span className="text-gold">behind the pass</span>.
            </>
          }
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <figure
              key={member.id}
              className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-200 hover:border-gold/30"
            >
              <SmartImage
                src={member.photo}
                alt={member.alt}
                width={600}
                height={600}
                className="aspect-square w-full object-cover"
              />
              <figcaption className="p-5">
                <span className="block text-base font-bold text-mist">{member.name}</span>
                <span className="mt-1 block text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
                  {member.role}
                </span>
                <span className="mt-3 block text-sm leading-relaxed text-haze">{member.bio}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </>
  );
}
