/**
 * Naba Kitchen & Café — team members shown on the About page.
 */

const unsplash = (photoId, w = 800) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=80`;

export const team = [
  {
    id: 'tm-1',
    name: 'Arif Mahmood',
    role: 'Executive Chef & Founder',
    bio: 'Trained in Istanbul and Bangkok, Arif opened Naba as a six-seat coffee counter in 2014 and still writes the menu himself every Monday morning.',
    photo: unsplash('photo-1531724068258-b26e63873a33'),
    alt: 'Portrait of Executive Chef Arif Mahmood',
  },
  {
    id: 'tm-2',
    name: 'Farhana Rahman',
    role: 'Head Pastry Chef',
    bio: 'Farhana leads the pastry section — the matcha Basque cheesecake, the molten chocolate sphere and every weekend brunch sweet come from her bench.',
    photo: unsplash('photo-1546812678-241536590883'),
    alt: 'Portrait of Head Pastry Chef Farhana Rahman',
  },
  {
    id: 'tm-3',
    name: 'Rezaul Karim',
    role: 'Head Barista',
    bio: 'Rezaul curates the single-origin rotation upstairs, roasts the weekly batches and has represented Bangladesh at regional barista competitions.',
    photo: unsplash('photo-1532713107108-dfb5d8d2fc42'),
    alt: 'Head Barista Rezaul Karim pouring latte art at the slow bar',
  },
  {
    id: 'tm-4',
    name: 'Nusrat Jahan',
    role: 'Restaurant Manager',
    bio: 'Nusrat runs the floor — reservations, private mezzanine events and the quiet art of remembering which table takes their coffee without sugar.',
    photo: unsplash('photo-1597571557303-a7a16dfeb22d'),
    alt: 'Portrait of Restaurant Manager Nusrat Jahan',
  },
];

export default team;
