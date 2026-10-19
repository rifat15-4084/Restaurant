# Naba Kitchen & Café — Website

A complete, production-ready **multi-page** website for **Naba Kitchen & Café** (Gulshan, Dhaka):
modern fusion food, specialty coffee and brunch, presented in a dark, formal and premium
interface.

**Stack:** Vite · React 18 (JavaScript, functional components + hooks) · React Router v6
(`BrowserRouter`) · Tailwind CSS 3.4 · Framer Motion (modal/drawer transitions only) ·
lucide-react. No backend, no database, no paid APIs — everything runs fully on the frontend. The
only network calls are the free **Web3Forms** reservation form and Google Maps (key-less embed).

### Pages

| Route | Page | Contents |
| --- | --- | --- |
| `/` | Home | Short hero, stats, 3 featured dishes, story teaser, 3 reviews, reservation CTA |
| `/menu` | Menu | Category tabs, search, filter chips, item modal, cart drawer |
| `/gallery` | Gallery | Filterable image grid + keyboard lightbox |
| `/about` | About | Full story, feature points, chef signature |
| `/reviews` | Reviews | All guest reviews in a simple grid (no carousel) |
| `/contact` | Contact | Address, phone, email, opening hours, embedded map |
| `/reservation` | Reservation | Web3Forms reservation form + WhatsApp booking |
| any unknown URL | 404 | Friendly "page not found" |

---

## 1. Quick start

```bash
npm install
npm run dev          # local preview at http://localhost:5173
```

## 2. Enable the reservation form (free, 1 minute)

1. Create a free access key at **[web3forms.com](https://web3forms.com)** (just enter your email —
   the key is instant and free).
2. Copy `.env.example` to `.env` in the project root.
3. Paste your key:

```env
VITE_WEB3FORMS_KEY=your_access_key_here
```

Without the key the site still works perfectly — the reservation form simply shows a clear error
and the **Book via WhatsApp** button remains available.

## 3. Test a production build

```bash
npm run build        # outputs a static site to /dist
npm run preview      # serve the production build locally
```

## 4. Deploy manually with the Vercel CLI

```bash
npm i -g vercel
vercel login
vercel               # from the project root
```

When asked: **Framework: Vite**, **Build Command: `npm run build`**, **Output Directory: `dist`**.

Then add the environment variable — **the `.env` file is NOT uploaded automatically**, so this
step is required for the reservation form to work:

```bash
vercel env add VITE_WEB3FORMS_KEY
# select: Production, Preview, Development
```

Finally publish:

```bash
vercel --prod
```

(Redeploy after adding the env variable so the key is baked into the build.)

---

## 5. Editing content — everything lives in `/src/data`

| What | File | Notes |
| --- | --- | --- |
| Menu items | `src/data/menu.js` | 6 categories × 5 items: name, description, long description, ingredients, calories, price (BDT ৳), tags (`veg`, `vegan`, `spicy`, `chef`, `new`) and image URL. |
| Menu categories & filters | `src/data/menu.js` | `menuCategories` and `menuFilters` arrays. |
| Gallery photos | `src/data/gallery.js` | 12 images with `category` (`food` / `interior` / `events`), caption, alt text, optional `tall: true` for portrait crops. |
| Guest reviews | `src/data/reviews.js` | 6 reviews: name, role, 1–5 rating, quote, avatar URL. |
| Site info | `src/data/siteConfig.js` | Name, tagline, address, phone, WhatsApp number, email, **opening hours** (`hours`, indexed by `Date.getDay()`), social links, stats, feature points, reservation limits. |

**Images:** every image is a normal URL (Unsplash by default). Replace any URL with your own
photo (`/images/your-photo.jpg` placed in `public/`, or a remote URL). If an image ever fails to
load, a branded gradient placeholder appears automatically — the layout never breaks.

**Prices:** stored as plain numbers in `menu.js` (e.g. `price: 690`) and rendered as `৳ 690`.

**Opening hours & time slots:** the reservation time slots and the live "Open Now" badge are
generated automatically from `siteConfig.hours`, so updating that array updates the whole site.

**WhatsApp:** put your digits-only number (with country code) in `siteConfig.whatsapp`, e.g.
`8801712345678` — used by the cart drawer and the reservation form.

---

## 6. Project structure

```
src/
  pages/             Home, MenuPage, GalleryPage, AboutPage, ReviewsPage,
                     ContactPage, ReservationPage, NotFound
  components/        Layout (Navbar + Footer + CartDrawer shell), Navbar, Footer,
                     PageHeader, ScrollToTop, Hero, Stats, Menu, MenuCard, MenuModal,
                     CartDrawer, About, Gallery, Lightbox, ReviewCard, Reservation,
                     Location and ui/* (Button, Modal, SectionHeading, SmartImage)
  data/              menu.js, gallery.js, reviews.js, siteConfig.js
  hooks/             useCart, useOpenStatus, useLocalStorage, usePageTitle
  utils/             formatting, validation, cn
  App.jsx            BrowserRouter + routes (pages lazy-loaded via React.lazy)
  main.jsx           entry point
  index.css          design tokens, formal dark theme, spacing system
public/              favicon.svg, og-image.jpg
vercel.json          SPA rewrite — refreshing /menu etc. never returns 404
```

## 7. Notes

- Routes are lazy-loaded (`React.lazy` + `Suspense`) and every navigation scrolls to the top
  (`ScrollToTop`) with a simple 0.3s opacity fade.
- The navbar uses `<NavLink>` active states; every "Reserve a Table" button links to
  `/reservation`.
- `vercel.json` contains the SPA rewrite, so deep links refresh correctly in production.

- The order tray (cart) persists in the visitor's `localStorage` — no account or backend needed.
- All animations respect `prefers-reduced-motion`.
- Semantic HTML, keyboard-navigable modals/drawers, visible focus states and lazy-loaded images
  are built in.
- SEO: meta tags, Open Graph/Twitter cards and `Restaurant` JSON-LD structured data live in
  `index.html` (update the placeholder domain `https://naba-kitchen-cafe.vercel.app` after deploying).
