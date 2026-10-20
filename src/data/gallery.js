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
  {
    id: 'g-13',
    src: unsplash('photo-1774806288349-3d910c6a9334'),
    alt: 'Grilled steak with waffle fries and cherry tomatoes on a dark plate',
    caption: 'Char-grilled rib of beef',
    category: 'food',
  },
  {
    id: 'g-14',
    src: unsplash('photo-1667388969250-1c7220bf3f37'),
    alt: 'Spacious dining room with wooden tables and chairs',
    caption: 'The dining hall, mid-afternoon',
    category: 'interior',
  },
  {
    id: 'g-15',
    src: unsplash('photo-1509710398975-6454dcdf049f'),
    alt: 'Stemmed wine glasses poured for a private dinner service',
    caption: 'Wine service, private dinner',
    category: 'events',
  },
  {
    id: 'g-16',
    src: unsplash('photo-1589302168068-964664d93dc0'),
    alt: 'Fragrant biryani served in a copper handi with raita alongside',
    caption: 'Biryani, Friday lunch service',
    category: 'food',
    tall: true,
  },
  {
    id: 'g-17',
    src: unsplash('photo-1729394405518-eaf2a0203aa7'),
    alt: 'Restaurant floor with rows of set tables before opening',
    caption: 'Between services',
    category: 'interior',
  },
  {
    id: 'g-18',
    src: unsplash('photo-1578474846511-04ba529f0b88'),
    alt: 'A group of guests sharing wine around a long dinner table',
    caption: 'Group dinner on the mezzanine',
    category: 'events',
  },
  {
    id: 'g-19',
    src: unsplash('photo-1606890737304-57a1ca8a5b62'),
    alt: 'Chocolate cake topped with fresh strawberry on a white plate',
    caption: 'Pastry section, plating dessert',
    category: 'food',
  },
  {
    id: 'g-20',
    src: unsplash('photo-1538333581680-29dd4752ddf2'),
    alt: 'Empty chairs and tables under warm lights before the evening sitting',
    caption: 'Set for the evening sitting',
    category: 'interior',
  },
  {
    id: 'g-21',
    src: unsplash('photo-1611520175743-30ff00129621'),
    alt: 'Carving meat at the table during a Sunday brunch service',
    caption: 'Sunday brunch carving station',
    category: 'events',
  },
  {
    id: 'g-22',
    src: unsplash('photo-1753532623922-64c278a95a5f'),
    alt: 'Bruschetta appetiser slices arranged on a rustic wooden board',
    caption: 'Aperitivo board, early evening',
    category: 'food',
  },
  {
    id: 'g-23',
    src: unsplash('photo-1583354608715-177553a4035e'),
    alt: 'White round table with chairs beside a bright window',
    caption: 'Window table for two',
    category: 'interior',
  },
  {
    id: 'g-24',
    src: unsplash('photo-1519225421980-715cb0215aed'),
    alt: 'Wedding reception table with flowers and candlelight in a private hall',
    caption: 'A wedding reception, private hall',
    category: 'events',
    tall: true,
  },
  {
    id: 'g-25',
    src: unsplash('photo-1635844035031-72e3a3ff1e42'),
    alt: 'Hand-folded dumplings on a plate beside a bowl of dipping sauce',
    caption: 'Hand-folded dim sum',
    category: 'food',
  },
  {
    id: 'g-26',
    src: unsplash('photo-1560130934-590b85fc08e7'),
    alt: 'Guest reading alone at a corner table in a softly lit room',
    caption: 'Quiet corner, weekday morning',
    category: 'interior',
  },
  {
    id: 'g-27',
    src: unsplash('photo-1587899897387-091ebd01a6b2'),
    alt: 'Glass pitcher and drinking glasses set on a long wooden celebration table',
    caption: 'Long table, set for a celebration',
    category: 'events',
  },
];

export default galleryImages;
