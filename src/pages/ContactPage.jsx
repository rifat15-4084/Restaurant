import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import Location from '../components/Location';
import SectionHeading from '../components/ui/SectionHeading';
import { contactFaqs } from '../data/faq';

export default function ContactPage() {
  usePageTitle(
    'Contact & Location',
    'Find Naba Kitchen & Café at 123 Gulshan Avenue, Dhaka — phone, email, opening hours, a map of the location and answers to common questions.'
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

      <section
        className="section-pad border-t border-white/5 bg-charcoal/40"
        aria-labelledby="contact-faq-heading"
      >
        <div className="container-x">
          <SectionHeading
            eyebrow="Good to know"
            id="contact-faq-heading"
            title="Frequently asked questions"
            subtitle="Parking, reservations, delivery and everything guests ask us before they arrive."
          />

          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {contactFaqs.map((item) => (
              <div key={item.id} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
                <h3 className="text-base font-bold leading-snug text-mist">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-haze">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
