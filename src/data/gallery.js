/**
 * Naba Kitchen & Café — gallery photos.
 * Categories: 'food' | 'interior' | 'events'
 */

const unsplash = (photoId, w = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=80`;

export const galleryFilters = [
  { id: 'all', label: 'All' },
  { id: 'food', label: 'Food' },
  { id: 'interior', label: 'Interior' },
  { id: 'events', label: 'Events' },
];

export const galleryImages = [
  {
    id: 'g-1',
    src: unsplash('photo-1517248135467-4c7edcad34c4', 1400),
    alt: 'Warm candle-lit dining room with wooden tables at Naba Kitchen',
    caption: 'The main dining room after sunset',
    category: 'interior',
    tall: true,
  },
  {
    id: 'g-2',
    src: unsplash('photo-1473093295043-cdd812d0e601', 1200),
    alt: 'Fresh pasta being finished with herbs and parmesan',
    caption: 'Rigatoni, finished to order',
    category: 'food',
  },
  {
    id: 'g-3',
    src: unsplash('photo-1530103862676-de8c9debad1d', 1200),
    alt: 'Guests celebrating with sparklers and drinks at a dinner party',
    caption: 'Saturday night celebrations',
    category: 'events',
  },
  {
    id: 'g-4',
    src: unsplash('photo-1495474472287-4d71bcdd2085', 1200),
    alt: 'Specialty coffee poured into a cup beside roasted beans',
    caption: 'Slow-bar specialty coffee',
    category: 'food',
    tall: true,
  },
  {
    id: 'g-5',
    src: unsplash('photo-1414235077428-338989a2e8c0', 1400),
    alt: 'Moody restaurant interior with pendant lights and open kitchen',
    caption: 'The open kitchen counter',
    category: 'interior',
  },
  {
    id: 'g-6',
    src: unsplash('photo-1519671482749-fd09be7ccebf', 1200),
    alt: 'Friends clinking glasses across a candle-lit table',
    caption: 'Toasting the weekend',
    category: 'events',
  },
  {
    id: 'g-7',
    src: unsplash('photo-1565299624946-b28f40a0ae38', 1200),
    alt: 'Freshly baked pizza with blistered crust and melted cheese',
    caption: 'From our stone oven',
    category: 'food',
  },
  {
    id: 'g-8',
    src: unsplash('photo-1552566626-52f8b828add9', 1400),
    alt: 'Elegant restaurant seating with soft golden lighting and plants',
    caption: 'Corner booth, table for four',
    category: 'interior',
    tall: true,
  },
  {
    id: 'g-9',
    src: unsplash('photo-1511795409834-ef04bbd61622', 1200),
    alt: 'Group of friends laughing together at a lively dinner',
    caption: 'Private celebration setup',
    category: 'events',
  },
  {
    id: 'g-10',
    src: unsplash('photo-1528207776546-365bb710ee93', 1200),
    alt: 'Stacked brunch pancakes with berries and maple syrup',
    caption: 'Weekend brunch stack',
    category: 'food',
  },
  {
    id: 'g-11',
    src: unsplash('photo-1554118811-1e0d58224f24', 1400),
    alt: 'Sunlit café interior with warm wood, marble and hanging lamps',
    caption: 'Morning light in the café',
    category: 'interior',
  },
  {
    id: 'g-12',
    src: unsplash('photo-1521017432531-fbd92d768814', 1200),
    alt: 'Pastry counter with fresh bakes and coffee service',
    caption: 'The pastry counter',
    category: 'interior',
  },
];

export default galleryImages;
