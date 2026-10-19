import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import Reservation from '../components/Reservation';
import SectionHeading from '../components/ui/SectionHeading';
import { reservationFaqs } from '../data/faq';

export default function ReservationPage() {
  usePageTitle(
    'Reserve a Table',
    'Book a table at Naba Kitchen & Café, Gulshan, Dhaka — request a date, time and party size, or book instantly over WhatsApp.'
  );

  return (
    <>
      <PageHeader
        title="Reserve a table"
        subtitle="Pick a date, a time slot and your party size — we confirm every request within the hour. Tables are held for 15 minutes past the booking time."
      />
      <section className="section-pad" aria-label="Reservation form">
        <div className="container-x">
          <Reservation />
        </div>
      </section>

      <section
        className="section-pad border-t border-white/5 bg-charcoal/40"
        aria-labelledby="res-info-heading"
      >
        <div className="container-x">
          <SectionHeading
            eyebrow="Good to know"
            id="res-info-heading"
            title="Before you book"
            subtitle="A few notes that keep the evening running smoothly for everyone at the table."
          />

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {/* Reservation policy */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <h3 className="text-base font-bold leading-snug text-mist">Reservation policy</h3>
              <ul className="mt-4 space-y-4 text-sm leading-relaxed text-haze">
                <li>
                  <span className="font-semibold text-mist">Tables are held for 15 minutes.</span>{' '}
                  If you are running late, a quick call keeps the table ready for you — after 15
                  minutes we may release it to waiting guests.
                </li>
                <li>
                  <span className="font-semibold text-mist">Parties larger than 12.</span> Online
                  requests cover up to 12 guests. Bigger celebrations, corporate tables and full
                  dining-room bookings are arranged by phone or WhatsApp so we can plan seating,
                  set menus and the cake.
                </li>
                <li>
                  <span className="font-semibold text-mist">Changes and cancellations.</span> Both
                  are welcome at any time — please give us as much notice as possible (ideally at
                  least three hours before) so the table can go to another guest. No deposit is
                  taken for standard tables.
                </li>
              </ul>
            </div>

            {/* Reservation FAQs */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-7">
              <h3 className="text-base font-bold leading-snug text-mist">Common questions</h3>
              <dl className="mt-4 divide-y divide-white/10">
                {reservationFaqs.map((item) => (
                  <div key={item.id} className="py-4 first:pt-0 last:pb-0">
                    <dt className="text-sm font-bold leading-snug text-mist">{item.question}</dt>
                    <dd className="mt-1.5 text-sm leading-relaxed text-haze">{item.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
