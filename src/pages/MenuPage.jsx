import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import Menu from '../components/Menu';

export default function MenuPage() {
  usePageTitle(
    'Menu',
    'Explore the full Naba Kitchen & Café menu — six chapters of wood-fired mains, slow-bar coffee and weekend brunch in Gulshan, Dhaka.'
  );

  return (
    <>
      <PageHeader
        title="The menu, in six chapters"
        subtitle="Search by dish or ingredient, filter for vegetarian or chef’s picks, and tap any item for the full story. Build an order and simply show it to your waiter."
      />
      <Menu />
    </>
  );
}
