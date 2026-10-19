import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import About from '../components/About';

export default function AboutPage() {
  usePageTitle(
    'About Us',
    'The story of Naba Kitchen & Café — from a six-seat coffee counter in 2014 to a ninety-seat dining room in Gulshan, Dhaka.'
  );

  return (
    <>
      <PageHeader
        title="About Naba"
        subtitle="Twelve years, one rule: nothing leaves the pass unless we would serve it to our own family."
      />
      <section className="section-pad">
        <div className="container-x">
          <About />
        </div>
      </section>
    </>
  );
}
