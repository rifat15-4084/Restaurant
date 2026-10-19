import usePageTitle from '../hooks/usePageTitle';
import PageHeader from '../components/PageHeader';
import Gallery from '../components/Gallery';

export default function GalleryPage() {
  usePageTitle(
    'Gallery',
    'Photographs of the dining room, wood-fired plates and private events at Naba Kitchen & Café, Gulshan, Dhaka.'
  );

  return (
    <>
      <PageHeader
        title="Gallery"
        subtitle="The room after sunset, plates leaving the pass and evenings worth remembering — filter by food, interior or events."
      />
      <Gallery />
    </>
  );
}
