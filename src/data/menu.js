/**
 * Naba Kitchen & Café — full menu.
 * 6 categories × 5 items. Prices are in BDT (৳).
 * To swap a photo, replace the Unsplash photo id inside `unsplash('photo-…')`.
 */

const unsplash = (photoId, w = 1200) =>
  `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${w}&q=80`;

export const menuCategories = [
  { id: 'starters', label: 'Starters' },
  { id: 'mains', label: 'Mains' },
  { id: 'pizza', label: 'Pizza & Pasta' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'drinks', label: 'Drinks' },
];

export const menuFilters = [
  { id: 'veg', label: 'Vegetarian' },
  { id: 'vegan', label: 'Vegan' },
  { id: 'spicy', label: 'Spicy' },
  { id: 'chef', label: "Chef's Pick" },
];

/** Visual metadata for the little badges on cards. */
export const badgeMeta = {
  spicy: { label: 'Spicy', className: 'bg-red-500/15 text-red-300 border-red-400/30' },
  veg: { label: 'Veg', className: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30' },
  vegan: { label: 'Vegan', className: 'bg-emerald-400/10 text-emerald-300 border-emerald-400/30' },
  chef: { label: "Chef's Pick", className: 'bg-gold/15 text-gold border-gold/40' },
  new: { label: 'New', className: 'bg-neon/10 text-neon border-neon/30' },
};

export const menuItems = [
  /* ------------------------------- STARTERS ------------------------------- */
  {
    id: 'st-1',
    name: 'Chilli Garlic Edamame',
    category: 'starters',
    price: 450,
    description: 'Steamed edamame tossed in house chilli oil, roasted garlic and pink salt.',
    longDescription:
      'A study in restraint: young edamame steamed for exactly 90 seconds, then tossed in our house-infused Kashmiri chilli oil with slow-roasted garlic and Himalayan pink salt. Bright, addictive, and gone in minutes.',
    ingredients: ['Edamame', 'Kashmiri chilli oil', 'Roasted garlic', 'Himalayan pink salt', 'Lime zest'],
    calories: 210,
    tags: ['veg', 'vegan', 'spicy'],
    image: unsplash('photo-1540189549336-e6e99c3679fe'),
    alt: 'Green edamame and fresh herbs served in a dark ceramic bowl',
  },
  {
    id: 'st-2',
    name: 'Tempura Prawn Popcorn',
    category: 'starters',
    price: 750,
    description: 'Crisp-battered tiger prawns with yuzu aioli and smoked paprika dust.',
    longDescription:
      'Tiger prawns in a shatteringly light rice-flour tempura batter, fried to order and dusted with smoked paprika. Served with a sharp yuzu aioli and pickled daikon to cut through the richness.',
    ingredients: ['Tiger prawns', 'Rice flour tempura', 'Yuzu aioli', 'Smoked paprika', 'Pickled daikon'],
    calories: 380,
    tags: ['chef'],
    image: unsplash('photo-1504674900247-0877df9cc836'),
    alt: 'Golden crisp tempura prawns plated with dipping sauce',
  },
  {
    id: 'st-3',
    name: 'Truffle Parmesan Arancini',
    category: 'starters',
    price: 620,
    description: 'Saffron risotto spheres, black truffle centre, aged parmesan fonduta.',
    longDescription:
      'Leftover-from-perfection saffron risotto, rolled into spheres around a molten black truffle centre, crumbed and fried. Finished tableside with a pour of aged parmesan fonduta.',
    ingredients: ['Carnaroli rice', 'Saffron', 'Black truffle', 'Parmigiano 24-month', 'Panko crumb'],
    calories: 440,
    tags: ['veg', 'chef'],
    image: unsplash('photo-1476224203421-9ac39bcb3327'),
    alt: 'Crispy golden risotto bites with parmesan and herbs on a slate plate',
  },
  {
    id: 'st-4',
    name: 'Wild Mushroom Cappuccino',
    category: 'starters',
    price: 520,
    description: 'Silky porcini velouté poured like espresso, thyme foam on top.',
    longDescription:
      'Wild porcini and button mushrooms roasted hard, blended into a silken velouté and served in a warmed cup with a crown of thyme-infused foam. A starter that drinks like a coffee.',
    ingredients: ['Wild porcini', 'Button mushroom', 'Cream', 'Thyme', 'Truffle oil'],
    calories: 260,
    tags: ['veg'],
    image: unsplash('photo-1547592166-23ac45744acd'),
    alt: 'Creamy mushroom soup in a cup with foam and fresh thyme',
  },
  {
    id: 'st-5',
    name: 'Beef Carpaccio Bao',
    category: 'starters',
    price: 780,
    description: 'A5-style ribeye slices in steamed bao with ponzu and crispy shallot.',
    longDescription:
      'Hand-sliced ribeye draped over pillowy steamed bao, dressed with citrus ponzu, toasted sesame, crispy shallot and a whisper of green chilli. One bite, three continents.',
    ingredients: ['Ribeye beef', 'Steamed bao', 'Ponzu', 'Crispy shallot', 'Sesame', 'Green chilli'],
    calories: 395,
    tags: ['new', 'spicy'],
    image: unsplash('photo-1484723091739-30a097e8f929'),
    alt: 'Sliced beef served on soft steamed buns with garnish',
  },

  /* -------------------------------- MAINS -------------------------------- */
  {
    id: 'mn-1',
    name: 'Coffee-Crusted Short Rib',
    category: 'mains',
    price: 1450,
    description: '48-hour braised beef, espresso rub, bone-marrow jus and smoked mash.',
    longDescription:
      'Our signature. Beef short rib rubbed with house espresso and cocoa, braised for 48 hours until it yields to a spoon, then glazed and torched. Served on smoked potato mash with a glossy bone-marrow jus.',
    ingredients: ['Beef short rib', 'House espresso rub', 'Bone-marrow jus', 'Smoked mash', 'Charred shallot'],
    calories: 890,
    tags: ['chef'],
    image: unsplash('photo-1600891964092-4316c288032e'),
    alt: 'Slow-braised beef short rib sliced on a dark plate with jus',
  },
  {
    id: 'mn-2',
    name: 'Miso-Glazed Salmon',
    category: 'mains',
    price: 1250,
    description: '72-hour white miso salmon, burnt lemon, dashi butter and greens.',
    longDescription:
      'Norwegian salmon cured for 72 hours in white miso and mirin, roasted until the glaze caramelises, finished with dashi butter, burnt lemon and seasonal market greens.',
    ingredients: ['Norwegian salmon', 'White miso', 'Mirin', 'Dashi butter', 'Market greens', 'Burnt lemon'],
    calories: 640,
    tags: [],
    image: unsplash('photo-1467003909585-2f8a72700288'),
    alt: 'Glazed salmon fillet with greens on a ceramic plate',
  },
  {
    id: 'mn-3',
    name: 'Harissa Roast Chicken',
    category: 'mains',
    price: 980,
    description: 'Half free-range chicken, rose harissa, preserved lemon and couscous.',
    longDescription:
      'Free-range chicken brined in rose harissa, garlic and preserved lemon, roasted over charcoal until the skin crackles. Served with herbed couscous and a cooling labneh drizzle.',
    ingredients: ['Free-range chicken', 'Rose harissa', 'Preserved lemon', 'Herbed couscous', 'Labneh'],
    calories: 720,
    tags: ['spicy'],
    image: unsplash('photo-1544025162-d76694265947'),
    alt: 'Charred roast chicken with spices on a rustic plate',
  },
  {
    id: 'mn-4',
    name: 'Truffle Smash Burger',
    category: 'mains',
    price: 890,
    description: 'Double dry-aged patty, truffle aioli, aged cheddar in a brioche bun.',
    longDescription:
      'Two smashed dry-aged beef patties with crisp lacy edges, truffle aioli, molten aged cheddar and house pickles in a butter-toasted brioche bun. Served with skin-on fries.',
    ingredients: ['Dry-aged beef', 'Truffle aioli', 'Aged cheddar', 'Brioche bun', 'House pickles', 'Fries'],
    calories: 980,
    tags: ['chef'],
    image: unsplash('photo-1568901346375-23c9450c58cd'),
    alt: 'Double cheeseburger with melted cheddar in a toasted brioche bun',
  },
  {
    id: 'mn-5',
    name: 'Thai Basil Duck Breast',
    category: 'mains',
    price: 1350,
    description: 'Crisp-skinned duck, holy basil, chilli jam and jasmine rice.',
    longDescription:
      'Marseilles duck breast scored and rendered until the skin shatters, sliced over jasmine rice with a fiery holy basil stir-fry and a spoon of house jeerep chilli jam.',
    ingredients: ['Duck breast', 'Holy basil', 'Bird chilli', 'House chilli jam', 'Jasmine rice', 'Fried egg'],
    calories: 760,
    tags: ['spicy', 'new'],
    image: unsplash('photo-1555939594-58d7cb561ad1'),
    alt: 'Crisp roasted duck breast sliced with herbs and chilli',
  },

  /* ---------------------------- PIZZA & PASTA ---------------------------- */
  {
    id: 'pz-1',
    name: 'Neon Margherita',
    category: 'pizza',
    price: 690,
    description: 'San Marzano, fior di latte, basil oil — finished with white truffle oil.',
    longDescription:
      'Our glowing tribute to the classic: 48-hour cold-fermented dough, San Marzano tomato, fior di latte and basil oil, finished after the oven with a thread of white truffle oil.',
    ingredients: ['48h fermented dough', 'San Marzano tomato', 'Fior di latte', 'Basil oil', 'White truffle oil'],
    calories: 720,
    tags: ['veg', 'chef'],
    image: unsplash('photo-1565958011703-44f9829ba187'),
    alt: 'Wood-fired margherita pizza with fresh basil leaves',
  },
  {
    id: 'pz-2',
    name: 'Bangla Fire Pizza',
    category: 'pizza',
    price: 850,
    description: 'Beef keema, green chilli, red onion and a drizzle of mustard kasundi.',
    longDescription:
      'Bangladesh on a crust: spiced beef keema, roasted green chilli, red onion, mozzarella and a sharp mustard kasundi drizzle straight from the oven. Order a cold drink with it.',
    ingredients: ['Spiced beef keema', 'Green chilli', 'Red onion', 'Mozzarella', 'Mustard kasundi'],
    calories: 810,
    tags: ['spicy'],
    image: unsplash('photo-1513104890138-7c749659a591'),
    alt: 'Spicy pizza with chilli and red onion fresh from the oven',
  },
  {
    id: 'pz-3',
    name: 'Four-Cheese & Honeycomb',
    category: 'pizza',
    price: 920,
    description: 'Mozzarella, gorgonzola, smoked scamorza and parmesan with honeycomb.',
    longDescription:
      'A molten quartet of mozzarella, gorgonzola, smoked scamorza and parmesan over a garlic-cream base, pulled from the oven and finished with torn honeycomb and cracked black pepper.',
    ingredients: ['Mozzarella', 'Gorgonzola', 'Smoked scamorza', 'Parmigiano', 'Honeycomb', 'Garlic cream'],
    calories: 850,
    tags: ['veg', 'new'],
    image: unsplash('photo-1565299624946-b28f40a0ae38'),
    alt: 'Four cheese pizza with honey drizzle and blistered crust',
  },
  {
    id: 'pz-4',
    name: 'Smoked Beef Carbonara',
    category: 'pizza',
    price: 980,
    description: 'Fresh rigatoni, cured egg yolk, smoked beef brisket and pecorino.',
    longDescription:
      'No cream, ever. Fresh rigatoni emulsified with cured egg yolk and pecorino into a glossy sauce, folded through peppery smoked beef brisket torn from our own smoker.',
    ingredients: ['Fresh rigatoni', 'Cured egg yolk', 'Smoked beef brisket', 'Pecorino', 'Black pepper'],
    calories: 780,
    tags: ['chef'],
    image: unsplash('photo-1621996346565-e3dbc646d9a9'),
    alt: 'Creamy carbonara pasta with pepper and pecorino in a bowl',
  },
  {
    id: 'pz-5',
    name: 'Truffle Alfredo Rigatoni',
    category: 'pizza',
    price: 890,
    description: 'Rigatoni in truffle-cream alfredo with parmesan and herb crumb.',
    longDescription:
      'Al dente rigatoni tossed in a parmesan alfredo loosened with pasta water, perfumed with black truffle and topped with a crunchy garlic-herb crumb for contrast.',
    ingredients: ['Rigatoni', 'Parmigiano', 'Cream', 'Black truffle', 'Garlic-herb crumb'],
    calories: 740,
    tags: ['veg'],
    image: unsplash('photo-1563379926898-05f4575a45d8'),
    alt: 'Creamy rigatoni pasta with parmesan and herbs',
  },

  /* ------------------------------ DESSERTS ------------------------------ */
  {
    id: 'ds-1',
    name: 'Molten Dark Chocolate Sphere',
    category: 'desserts',
    price: 620,
    description: '70% Valrhona dome, salted caramel core, poured warm ganache.',
    longDescription:
      'A tempered 70% Valrhona sphere holding a salted caramel core. Tableside, we pour warm ganache over the top and watch it melt into a lava centre with tonka bean ice cream.',
    ingredients: ['Valrhona 70%', 'Salted caramel', 'Warm ganache', 'Tonka bean ice cream', 'Cocoa nib'],
    calories: 560,
    tags: ['chef', 'veg'],
    image: unsplash('photo-1578985545062-69928b1d9587'),
    alt: 'Dark chocolate lava cake with a molten centre',
  },
  {
    id: 'ds-2',
    name: 'Matcha Basque Cheesecake',
    category: 'desserts',
    price: 580,
    description: 'Ceremonial Uji matcha, burnt Basque style, white chocolate soil.',
    longDescription:
      'Ceremonial-grade Uji matcha folded through cream cheese and baked hot until the top burns black and the centre stays molten. Served with white chocolate soil and yuzu cream.',
    ingredients: ['Uji matcha', 'Cream cheese', 'Basque burn', 'White chocolate soil', 'Yuzu cream'],
    calories: 480,
    tags: ['veg', 'new'],
    image: unsplash('photo-1488477181946-6428a0291777'),
    alt: 'Slice of burnt Basque cheesecake on a plate',
  },
  {
    id: 'ds-3',
    name: 'Dubai Kunafa Pistachio',
    category: 'desserts',
    price: 650,
    description: 'Crisp kataifi, molten cheese, pistachio cream and kadayif threads.',
    longDescription:
      'The internet-famous classic, done properly: golden kataifi pastry wrapped around molten sweet cheese, drenched in orange-blossom syrup and crowned with a thick pistachio cream.',
    ingredients: ['Kataifi pastry', 'Sweet cheese', 'Pistachio cream', 'Orange-blossom syrup', 'Gold leaf'],
    calories: 520,
    tags: ['veg', 'chef'],
    image: unsplash('photo-1464349095431-e9a21285b5f3'),
    alt: 'Golden Middle Eastern pastry dessert topped with pistachios',
  },
  {
    id: 'ds-4',
    name: 'Baked Yogurt & Berry Cloud',
    category: 'desserts',
    price: 480,
    description: 'Oven-baked labneh cream, seasonal berries, wild honeycomb.',
    longDescription:
      'Slow-baked labneh and vanilla until barely set, served warm with seasonal berries macerated in wild honey and a shard of honeycomb from the Sylhet hills.',
    ingredients: ['Labneh', 'Vanilla bean', 'Seasonal berries', 'Wild honey', 'Honeycomb'],
    calories: 340,
    tags: ['veg'],
    image: unsplash('photo-1551024506-0bccd828d307'),
    alt: 'Creamy baked yogurt dessert topped with fresh berries',
  },
  {
    id: 'ds-5',
    name: 'Thai Tea Crème Brûlée',
    category: 'desserts',
    price: 520,
    description: 'Spiced Thai tea custard, torched sugar lid, palm-sugar caramel.',
    longDescription:
      'Silky custard steeped with spiced Thai tea leaves, chilled overnight and finished with a torched sugar lid cracked tableside. Served with a shot of palm-sugar caramel.',
    ingredients: ['Thai tea leaves', 'Egg yolk', 'Cream', 'Caramelised sugar', 'Palm-sugar caramel'],
    calories: 420,
    tags: ['veg'],
    image: unsplash('photo-1563805042-7684c019e1cb'),
    alt: 'Caramelised custard dessert with a crackled sugar top',
  },

  /* ------------------------------- COFFEE ------------------------------- */
  {
    id: 'cf-1',
    name: 'Naba Signature Latte',
    category: 'coffee',
    price: 450,
    description: 'Single-shot flat white, salted caramel, smoked vanilla cold foam.',
    longDescription:
      'Our house pour: a ristretto shot of our Gourmet blend, whole milk steamed to silk, layered with salted caramel and capped with smoked vanilla cold foam. The taste of the brand.',
    ingredients: ['Gourmet espresso', 'Whole milk', 'Salted caramel', 'Smoked vanilla cold foam'],
    calories: 290,
    tags: ['chef', 'veg'],
    image: unsplash('photo-1572442388796-11668a67e53d'),
    alt: 'Latte with delicate latte art in a ceramic cup',
  },
  {
    id: 'cf-2',
    name: 'Single-Origin Flat White',
    category: 'coffee',
    price: 420,
    description: 'Ethiopia Yirgacheffe shot, micro-foam, notes of peach and jasmine.',
    longDescription:
      'Rotating single origin — currently Ethiopia Yirgacheffe — pulled as a syrupy double ristretto and married with micro-foam poured to a tattoo-fine rosetta. Peach, jasmine, cocoa.',
    ingredients: ['Ethiopia Yirgacheffe beans', 'Double ristretto', 'Micro-foam milk'],
    calories: 190,
    tags: ['veg'],
    image: unsplash('photo-1461023058943-07fcbe16d735'),
    alt: 'Flat white coffee with rosetta latte art on a wooden table',
  },
  {
    id: 'cf-3',
    name: 'Violet Bloom Tonic',
    category: 'coffee',
    price: 520,
    description: 'Butterfly-pea espresso tonic that shifts colour as you pour.',
    longDescription:
      'Espresso poured over butterfly-pea-infused tonic with a wheel of lime. Watch the deep indigo bloom into violet as the citrus hits — science you can drink, over ice.',
    ingredients: ['Espresso', 'Butterfly-pea tonic', 'Lime', 'Agave', 'Ice'],
    calories: 120,
    tags: ['veg', 'new'],
    image: unsplash('photo-1470337458703-46ad1756a187'),
    alt: 'Iced coffee drink in a glass with citrus garnish',
  },
  {
    id: 'cf-4',
    name: 'Midnight Cold Brew',
    category: 'coffee',
    price: 480,
    description: '24-hour steeped cold brew, cascara syrup, orange peel.',
    longDescription:
      'Coarse-ground Brazilian beans steeped for a full 24 hours, strained slow and served black over ice with cascara syrup and a torch-charred orange peel. Low acid, deep sweetness.',
    ingredients: ['Brazilian beans', '24h cold steep', 'Cascara syrup', 'Orange peel'],
    calories: 90,
    tags: ['veg', 'vegan'],
    image: unsplash('photo-1509042239860-f550ce710b93'),
    alt: 'Dark cold brew coffee served over ice in a tall glass',
  },
  {
    id: 'cf-5',
    name: 'Pistachio Rose Cappuccino',
    category: 'coffee',
    price: 470,
    description: 'House pistachio syrup, rose dust, double shot and steamed milk.',
    longDescription:
      'A Middle-Eastern twist on the cappuccino: house-made pistachio syrup, a double espresso, steamed milk and a dust of dried Rose-of-Damascus petals over the foam.',
    ingredients: ['Double espresso', 'House pistachio syrup', 'Steamed milk', 'Dried rose petals'],
    calories: 260,
    tags: ['veg'],
    image: unsplash('photo-1447933601403-0c6688de566e'),
    alt: 'Cappuccino dusted with rose petals in a white cup',
  },

  /* -------------------------------- DRINKS -------------------------------- */
  {
    id: 'dk-1',
    name: 'Yuzu Mint Cooler',
    category: 'drinks',
    price: 380,
    description: 'Japanese yuzu, muddled mint, soda and a salted rim.',
    longDescription:
      'Sharp Japanese yuzu juice muddled with hand-torn mint, topped with soda and finished with a half-salt rim. The cleanest reset on the menu.',
    ingredients: ['Yuzu juice', 'Fresh mint', 'Soda', 'Sea salt', 'Ice'],
    calories: 110,
    tags: ['veg', 'vegan'],
    image: unsplash('photo-1513558161293-cdaf765ed2fd'),
    alt: 'Sparkling citrus mint drink with ice and fresh mint sprigs',
  },
  {
    id: 'dk-2',
    name: 'Smoked Mango Iced Tea',
    category: 'drinks',
    price: 350,
    description: 'Charred Rajshahi mango, Assam tea, lime and smoked sea salt.',
    longDescription:
      'Rajshahi mango charred on the grill to concentrate its sweetness, blended with cold-brewed Assam tea, lime and a pinch of smoked sea salt. Summer in a tall glass.',
    ingredients: ['Rajshahi mango', 'Assam tea', 'Lime', 'Smoked sea salt', 'Ice'],
    calories: 150,
    tags: ['veg', 'vegan'],
    image: unsplash('photo-1497534446932-c925b458314e'),
    alt: 'Golden iced mango tea in a tall glass with ice cubes',
  },
  {
    id: 'dk-3',
    name: 'Blue Curaçao Sparkler',
    category: 'drinks',
    price: 420,
    description: 'Butterfly pea, citrus, sparkling water — colour-changing on arrival.',
    longDescription:
      'A luminous blue pour of butterfly-pea syrup, fresh citrus and sparkling water served with a side shot of lime juice — pour it in and watch the drink turn from ocean to orchid.',
    ingredients: ['Butterfly-pea syrup', 'Citrus', 'Sparkling water', 'Lime shot'],
    calories: 100,
    tags: ['veg', 'vegan', 'new'],
    image: unsplash('photo-1514432324607-a09d9b4aefdd'),
    alt: 'Bright blue sparkling mocktail with citrus slices',
  },
  {
    id: 'dk-4',
    name: 'Pink Guava Lemonade',
    category: 'drinks',
    price: 340,
    description: 'Fresh pink guava, lemon, basil seeds and a chili-salt rim.',
    longDescription:
      'Hand-pressed pink guava shaken with lemon, basil seeds and a touch of cane sugar, served over crushed ice with a chilli-salt rim for that sweet-sour-spicy hit.',
    ingredients: ['Pink guava', 'Lemon', 'Basil seeds', 'Cane sugar', 'Chilli-salt rim'],
    calories: 160,
    tags: ['veg', 'vegan'],
    image: unsplash('photo-1600271886742-f049cd451bba'),
    alt: 'Pink guava lemonade with basil seeds in a glass',
  },
  {
    id: 'dk-5',
    name: 'Salted Caramel Freakshake',
    category: 'drinks',
    price: 560,
    description: 'Thick vanilla shake, salted caramel, brownie crown and pretzel straw.',
    longDescription:
      'A towering vanilla shake with salted caramel running down the glass, crowned with a brownie square, whipped cream, pretzel straw and torched marshmallow. Built to be photographed.',
    ingredients: ['Vanilla ice cream', 'Salted caramel', 'Brownie', 'Pretzel straw', 'Marshmallow'],
    calories: 680,
    tags: ['chef', 'new'],
    image: unsplash('photo-1544145945-f90425340c7e'),
    alt: 'Tall caramel milkshake topped with cream and dessert garnish',
  },
];

/** Convenience helper: items for one category. */
export const getItemsByCategory = (categoryId) =>
  menuItems.filter((item) => item.category === categoryId);

export default menuItems;
