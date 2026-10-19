import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import Location from '../components/Location';

export default function ContactPage() {
  usePageTitle(
    'Contact & Location',
    'Find Naba Kitchen & Café at 123 Gulshan Avenue, Dhaka — phone, email, opening hours and a map of the location.'
  );

  return (
    <>
      <PageHeader
        title="Find us"
        subtitle="Two minutes from Gulshan Circle, valet parking after 6 PM. Walk-ins welcome — reservations recommended on weekends."
      />
      <section className="section-pad" aria-label="Contact details and map">
        <div className="container-x">
          <Location />
        </div>
      </section>
    </>
  );
}
