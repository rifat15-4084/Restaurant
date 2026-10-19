/**
 * Naba Kitchen & Café — guest reviews for the testimonial carousel
 * and the Reviews page summary. Home shows the first three only.
 */

const avatar = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=200&h=200&q=80`;

export const reviews = [
  {
    id: 'r-1',
    name: 'Nusrat Jahan',
    role: 'Food blogger, Dhaka',
    rating: 5,
    date: 'September 2026',
    quote:
      'The coffee-crusted short rib is genuinely one of the best dishes I have eaten in Dhaka — 48 hours of braising tastes like a week of patience. The room glows gold at night.',
    avatar: avatar('photo-1494790108377-be9c29b29330'),
  },
  {
    id: 'r-2',
    name: 'Tanvir Ahmed',
    role: 'Regular since opening week',
    rating: 5,
    date: 'August 2026',
    quote:
      'I have booked Naba for every birthday in my family for four years running. Staff remember names, the sourdough pizza never misses, and the neon-blue tonic is theatre in a glass.',
    avatar: avatar('photo-1507003211169-0a1dd7228f2d'),
  },
  {
    id: 'r-3',
    name: 'Sadia Rahman',
    role: 'Interior designer',
    rating: 5,
    date: 'July 2026',
    quote:
      'Smoked oak, brass and that grain-fine light — Naba is the most thought-through dining room in Gulshan. I come for the Basque cheesecake and stay for the acoustics.',
    avatar: avatar('photo-1438761681033-6461ffad8d80'),
  },
  {
    id: 'r-4',
    name: 'Fahim Chowdhury',
    role: 'Visiting from Singapore',
    rating: 5,
    date: 'June 2026',
    quote:
      'Booked a table for two on a Friday, got a window seat and a menu briefing from the chef. The miso salmon arrived glazed like lacquer. Flawless service from entry to espresso.',
    avatar: avatar('photo-1500648767791-00dcc994a43e'),
  },
  {
    id: 'r-5',
    name: 'Rumana Kabir',
    role: 'Weekend brunch devotee',
    rating: 4,
    date: 'May 2026',
    quote:
      'Our Saturday ritual now. The pistachio rose cappuccino is worth the drive across the city, and the pancakes arrive still steaming. Only complaint: I always order too much.',
    avatar: avatar('photo-1544005313-94ddf0286df2'),
  },
  {
    id: 'r-6',
    name: 'Imran Hossain',
    role: 'Hosting client dinners',
    rating: 5,
    date: 'April 2026',
    quote:
      'I run my most important client dinners here. The lighting keeps people talking, the service stays invisible until you need it, and the Kunafa gets a reaction every single time.',
    avatar: avatar('photo-1506794778202-cad84cf45f1d'),
  },
  {
    id: 'r-7',
    name: 'Sharmin Islam',
    role: 'Graphic designer, Banani',
    rating: 5,
    date: 'September 2026',
    quote:
      'As a vegetarian I usually settle for a side dish anywhere else — here I ordered twice. The truffle arancini and the mushroom risotto were seasoned like the kitchen actually cared.',
    avatar: avatar('photo-1584694758976-94b0bbc1cf43'),
  },
  {
    id: 'r-8',
    name: 'Mahmud Hasan',
    role: 'Corporate lawyer, Dhaka',
    rating: 5,
    date: 'October 2026',
    quote:
      'Three clients, one table, zero interruptions — the service reads the room perfectly. The ribeye arrived exactly as ordered and the sommelier-grade coffee closed the evening well.',
    avatar: avatar('photo-1531724068258-b26e63873a33'),
  },
  {
    id: 'r-9',
    name: 'Tasnim Rahman',
    role: 'University lecturer',
    rating: 4,
    date: 'August 2026',
    quote:
      'Brunch here is unhurried in the best way: strong cortados, generous plates and staff who never rush the table. Parking gets tight on weekends, so arrive a little early.',
    avatar: avatar('photo-1465391422195-6be887eb93a9'),
  },
  {
    id: 'r-10',
    name: 'Ahsan Habib',
    role: 'Photographer',
    rating: 5,
    date: 'July 2026',
    quote:
      'I photograph interiors for a living, and the light at Naba does half my job for me. The wood-fired margherita is blistered perfectly — I have stopped ordering anything else.',
    avatar: avatar('photo-1546409825-ccb9cf43cac5'),
  },
  {
    id: 'r-11',
    name: 'Maliha Chowdhury',
    role: 'Anniversary dinner, Gulshan',
    rating: 5,
    date: 'June 2026',
    quote:
      'They remembered our anniversary from the booking note and had a window table waiting. The molten chocolate sphere poured at the table made the night feel scripted.',
    avatar: avatar('photo-1547312361-559a9b41ca86'),
  },
  {
    id: 'r-12',
    name: 'Siddhartha Roy',
    role: 'Visiting from Kolkata',
    rating: 5,
    date: 'May 2026',
    quote:
      'I came expecting good coffee and left talking about the kacchi — the saffron and ghee are balanced with real restraint. Warm hospitality without a trace of fuss.',
    avatar: avatar('photo-1579963322891-04324ec8945e'),
  },
  {
    id: 'r-13',
    name: 'Nafisa Karim',
    role: 'Nutritionist',
    rating: 4,
    date: 'April 2026',
    quote:
      'Allergen information was printed and current, and the kitchen adapted two dishes for me without hesitation. The vegan section is genuinely inventive, not an afterthought.',
    avatar: avatar('photo-1531095521189-e3b0fc888826'),
  },
  {
    id: 'r-14',
    name: 'Zahir Uddin',
    role: 'Banker, Motijheel',
    rating: 5,
    date: 'March 2026',
    quote:
      'After late meetings I want one place that is still serving properly at half past ten — Naba is that place. The arrabbiata and a flat white fix everything.',
    avatar: avatar('photo-1548882465-dddb66315648'),
  },
  {
    id: 'r-15',
    name: 'Shafayet Ahmed',
    role: 'Software engineer, Dhaka',
    rating: 5,
    date: 'February 2026',
    quote:
      'I work from the café side twice a week: reliable Wi-Fi, no one hurrying me, and the single-origin flat white is the best in Gulshan. The brownie sundae is a dangerous reward.',
    avatar: avatar('photo-1544572632-029c30a0bb6b'),
  },
  {
    id: 'r-16',
    name: 'Lamia Rahman',
    role: 'Event organiser',
    rating: 5,
    date: 'January 2026',
    quote:
      'They set up the long table for my mother’s birthday exactly as agreed, sparklers and all. Forty guests, one kitchen, and not a single plate arrived late.',
    avatar: avatar('photo-1578359215345-71511cf94799'),
  },
  {
    id: 'r-17',
    name: 'Hasan Mubarak',
    role: 'Blogger, Chattogram',
    rating: 4,
    date: 'October 2025',
    quote:
      'The smoked beef carbonara is worth crossing the city for, and the room only gets better after nine. Friday waits can run long, so book ahead or come early.',
    avatar: avatar('photo-1566676748387-ef433b662a35'),
  },
  {
    id: 'r-18',
    name: 'Anika Sultana',
    role: 'Family of six, Dhaka',
    rating: 5,
    date: 'September 2025',
    quote:
      'Our family dinners always end up here — three generations, every dietary preference covered, and staff who handle the whole party calmly. The waffle stack disappears in minutes.',
    avatar: avatar('photo-1520512202623-51c5c53957df'),
  },
];

/**
 * Overall rating shown above the review grid.
 * `average` is derived from the breakdown below (4.86 → 4.9 shown).
 */
export const ratingSummary = {
  total: 1240,
  breakdown: [
    { stars: 5, count: 1130 },
    { stars: 4, count: 70 },
    { stars: 3, count: 24 },
    { stars: 2, count: 9 },
    { stars: 1, count: 7 },
  ],
};

ratingSummary.average =
  Math.round(
    (ratingSummary.breakdown.reduce((sum, row) => sum + row.stars * row.count, 0) /
      ratingSummary.breakdown.reduce((sum, row) => sum + row.count, 0)) * 10
  ) / 10;

export default reviews;
