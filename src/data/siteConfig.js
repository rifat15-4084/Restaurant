/**
 * Naba Kitchen & Café — site-wide information.
 * Edit everything here (name, contact, hours, socials) — no code changes needed.
 */

export const siteConfig = {
  name: 'Naba Kitchen & Café',
  shortName: 'Naba',
  tagline: 'Taste the Future of Dining',
  cuisine: 'Modern Fusion · Specialty Coffee · Brunch',
  description:
    'A cinematic dining room in the heart of Gulshan where modern fusion plates, slow-bar specialty coffee and weekend brunch meet a futuristic interior.',
  address: '123 Gulshan Avenue, Gulshan, Dhaka, Bangladesh',
  addressLines: ['123 Gulshan Avenue', 'Gulshan, Dhaka 1212', 'Bangladesh'],
  phone: '+880 1XXX-XXXXXX',
  phoneHref: '+8801XXXXXXXXX',
  whatsapp: '8801XXXXXXXXX',
  email: 'hello@naba.com',
  rating: 4.9,
  reviewCount: '1,240+',
  wifi: 'Free high-speed Wi-Fi',
  currency: '৳',
  domain: 'https://naba-kitchen-cafe.vercel.app',
  mapQuery: '123 Gulshan Avenue, Gulshan, Dhaka, Bangladesh',
  directionsUrl: 'https://www.google.com/maps/search/?api=1&query=123%20Gulshan%20Avenue%2C%20Gulshan%2C%20Dhaka%2C%20Bangladesh',

  socials: [
    { id: 'instagram', label: 'Instagram', url: 'https://instagram.com/nabakitchendhaka' },
    { id: 'facebook', label: 'Facebook', url: 'https://facebook.com/nabakitchendhaka' },
    { id: 'tiktok', label: 'TikTok', url: 'https://tiktok.com/@nabakitchendhaka' },
  ],

  navLinks: [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'about', label: 'About' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'contact', label: 'Contact' },
  ],

  /**
   * Opening hours indexed by Date.getDay() (0 = Sunday … 6 = Saturday).
   * Times use 24-hour "HH:MM" strings.
   */
  hours: [
    { day: 'Sunday', index: 0, open: '09:00', close: '23:00' },
    { day: 'Monday', index: 1, open: '09:00', close: '23:00' },
    { day: 'Tuesday', index: 2, open: '09:00', close: '23:00' },
    { day: 'Wednesday', index: 3, open: '09:00', close: '23:00' },
    { day: 'Thursday', index: 4, open: '09:00', close: '23:00' },
    { day: 'Friday', index: 5, open: '14:00', close: '23:30' },
    { day: 'Saturday', index: 6, open: '09:00', close: '23:00' },
  ],

  /** Display order for the weekly hours table (week starts on Saturday). */
  hoursDisplayOrder: [6, 0, 1, 2, 3, 4, 5],

  /** Stats strip values. */
  stats: [
    { id: 'years', value: 12, label: 'Years of Experience', suffix: '+' },
    { id: 'dishes', value: 185000, label: 'Dishes Served', suffix: '+' },
    { id: 'guests', value: 42000, label: 'Happy Guests', suffix: '+' },
    { id: 'recipes', value: 64, label: 'Signature Recipes', suffix: '' },
  ],

  /** About section feature points. */
  features: [
    {
      id: 'fresh',
      icon: 'leaf',
      title: 'Fresh Ingredients',
      text: 'Produce hand-picked each morning from Gazipur farms and the port market — never stored, always seasonal.',
    },
    {
      id: 'chefs',
      icon: 'award',
      title: 'Master Chefs',
      text: 'A kitchen brigade trained in Tokyo, Paris and Istanbul, translating technique into Dhaka’s palate.',
    },
    {
      id: 'ambience',
      icon: 'sparkles',
      title: 'Cozy Ambience',
      text: 'Warm brass, smoked oak and slow ambient light — designed for long dinners and longer conversations.',
    },
  ],

  /** Time slot generator settings (minutes before closing, slot step). */
  reservation: {
    slotStepMinutes: 30,
    lastSlotOffsetMinutes: 60,
    maxGuests: 12,
  },
};

/** Human readable summary, e.g. "Sat–Thu 9:00 AM – 11:00 PM · Fri 2:00 PM – 11:30 PM" */
export const hoursSummary = 'Sat–Thu 9:00 AM – 11:00 PM · Fri 2:00 PM – 11:30 PM';

export default siteConfig;
