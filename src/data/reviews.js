/**
 * Naba Kitchen & Café — guest reviews for the testimonial carousel.
 */

const avatar = (photoId) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=200&h=200&q=80`;

export const reviews = [
  {
    id: 'r-1',
    name: 'Nusrat Jahan',
    role: 'Food blogger, Dhaka',
    rating: 5,
    quote:
      'The coffee-crusted short rib is genuinely one of the best dishes I have eaten in Dhaka — 48 hours of braising tastes like a week of patience. The room glows gold at night.',
    avatar: avatar('photo-1494790108377-be9c29b29330'),
  },
  {
    id: 'r-2',
    name: 'Tanvir Ahmed',
    role: 'Regular since opening week',
    rating: 5,
    quote:
      'I have booked Naba for every birthday in my family for four years running. Staff remember names, the sourdough pizza never misses, and the neon-blue tonic is theatre in a glass.',
    avatar: avatar('photo-1507003211169-0a1dd7228f2d'),
  },
  {
    id: 'r-3',
    name: 'Sadia Rahman',
    role: 'Interior designer',
    rating: 5,
    quote:
      'Smoked oak, brass and that grain-fine light — Naba is the most thought-through dining room in Gulshan. I come for the Basque cheesecake and stay for the acoustics.',
    avatar: avatar('photo-1438761681033-6461ffad8d80'),
  },
  {
    id: 'r-4',
    name: 'Fahim Chowdhury',
    role: 'Visiting from Singapore',
    rating: 5,
    quote:
      'Booked a table for two on a Friday, got a window seat and a menu briefing from the chef. The miso salmon arrived glazed like lacquer. Flawless service from entry to espresso.',
    avatar: avatar('photo-1500648767791-00dcc994a43e'),
  },
  {
    id: 'r-5',
    name: 'Rumana Kabir',
    role: 'Weekend brunch devotee',
    rating: 4,
    quote:
      'Our Saturday ritual now. The pistachio rose cappuccino is worth the drive across the city, and the pancakes arrive still steaming. Only complaint: I always order too much.',
    avatar: avatar('photo-1544005313-94ddf0286df2'),
  },
  {
    id: 'r-6',
    name: 'Imran Hossain',
    role: 'Hosting client dinners',
    rating: 5,
    quote:
      'I run my most important client dinners here. The lighting keeps people talking, the service stays invisible until you need it, and the Kunafa gets a reaction every single time.',
    avatar: avatar('photo-1506794778202-cad84cf45f1d'),
  },
];

export default reviews;
