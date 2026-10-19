import usePageTitle from '../hooks/usePageTitle';
import Button from '../components/ui/Button';

export default function NotFound() {
  usePageTitle('Page Not Found', 'The page you were looking for does not exist.');

  return (
    <section className="section-pad flex min-h-[60vh] items-center">
      <div className="container-x max-w-xl text-center">
        <p className="font-display text-7xl font-bold text-gold sm:text-8xl">404</p>
        <h1 className="mt-6 text-3xl font-bold leading-tight text-mist sm:text-4xl">
          This table isn’t set
        </h1>
        <p className="mt-4 text-base leading-relaxed text-haze">
          The page you were looking for has moved or never existed. Head back home, or browse
          the menu instead.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button to="/">Back to home</Button>
          <Button to="/menu" variant="ghost">
            Explore the menu
          </Button>
        </div>
      </div>
    </section>
  );
}
