import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import Reservation from '../components/Reservation';

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
    </>
  );
}
