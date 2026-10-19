import { Clock, Mail, MapPin, Navigation, Phone } from 'lucide-react';
import siteConfig, { hoursSummary } from '../data/siteConfig';
import useOpenStatus from '../hooks/useOpenStatus';
import { formatTime12 } from '../utils/format';
import Button from './ui/Button';
import cn from '../utils/cn';

const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(
  siteConfig.mapQuery
)}&output=embed`;

/** Contact details, opening hours and an embedded map. */
export default function Location() {
  const { isOpen, nextChange, todayIndex } = useOpenStatus();

  return (
    <div className="grid gap-6 lg:grid-cols-2">
      {/* Map */}
      <div className="glass overflow-hidden rounded-2xl p-3">
        <div className="relative h-full min-h-[340px] overflow-hidden rounded-xl bg-charcoal">
          <iframe
            title="Map showing the location of Naba Kitchen & Café at 123 Gulshan Avenue, Dhaka"
            src={mapEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
            className="h-full min-h-[340px] w-full grayscale-[35%] contrast-[1.05]"
            style={{ border: 0 }}
          />
        </div>
      </div>

      {/* Info card */}
      <div className="glass flex h-full flex-col gap-6 rounded-2xl p-6 sm:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={cn(
              'inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider',
              isOpen
                ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-300'
                : 'border-white/15 bg-white/5 text-haze'
            )}
          >
            <span
              className={cn('h-2 w-2 rounded-full', isOpen ? 'bg-emerald-400' : 'bg-haze')}
              aria-hidden="true"
            />
            {isOpen ? 'Open now' : 'Closed now'}
          </span>
          <span className="text-xs text-haze">{nextChange}</span>
        </div>

        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
              <MapPin className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-haze">
                Address
              </span>
              <span className="mt-1 block text-sm leading-relaxed text-mist">
                {siteConfig.addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </span>
            </span>
          </li>

          <li className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
              <Phone className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-haze">
                Phone
              </span>
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="mt-1 block text-sm text-mist transition-colors duration-200 hover:text-gold"
              >
                {siteConfig.phone}
              </a>
            </span>
          </li>

          <li className="flex items-start gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gold/25 bg-gold/10 text-gold">
              <Mail className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="min-w-0">
              <span className="block text-[11px] font-semibold uppercase tracking-[0.22em] text-haze">
                Email
              </span>
              <a
                href={`mailto:${siteConfig.email}`}
                className="mt-1 block break-all text-sm text-mist transition-colors duration-200 hover:text-gold"
              >
                {siteConfig.email}
              </a>
            </span>
          </li>
        </ul>

        {/* Opening hours */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
          <p className="mb-3 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
            <Clock className="h-3.5 w-3.5" aria-hidden="true" />
            Opening hours
          </p>
          <table className="w-full text-sm">
            <caption className="sr-only">Weekly opening hours for Naba Kitchen and Café</caption>
            <tbody>
              {siteConfig.hoursDisplayOrder.map((dayIndex) => {
                const day = siteConfig.hours[dayIndex];
                const isToday = dayIndex === todayIndex;
                return (
                  <tr key={day.day} className={cn(isToday && 'rounded-lg bg-gold/10')}>
                    <th
                      scope="row"
                      className={cn(
                        'py-1.5 pl-2 text-left font-medium',
                        isToday ? 'text-gold' : 'font-normal text-haze'
                      )}
                    >
                      {day.day}
                      {isToday ? (
                        <span className="ml-2 text-[10px] font-bold uppercase tracking-wider">
                          Today
                        </span>
                      ) : null}
                    </th>
                    <td className={cn('py-1.5 pr-2 text-right', isToday ? 'text-mist' : 'text-haze')}>
                      {formatTime12(day.open)} – {formatTime12(day.close)}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <p className="mt-3 border-t border-white/5 pt-3 text-[11px] leading-relaxed text-haze/80">
            {hoursSummary}
          </p>
        </div>

        <Button
          href={siteConfig.directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto w-full"
        >
          <Navigation className="h-4 w-4" aria-hidden="true" />
          Get Directions
        </Button>
      </div>
    </div>
  );
}
