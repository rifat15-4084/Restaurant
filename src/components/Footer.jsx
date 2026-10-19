import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import siteConfig, { hoursSummary } from '../data/siteConfig';
import { scrollToId } from '../utils/scroll';
import GlowButton from './ui/GlowButton';
import { TikTokIcon } from './ui/Icons';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTokIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  const handleNav = (id) => {
    scrollToId(id);
  };

  return (
    <footer className="relative border-t border-white/10 bg-charcoal/50">
      <div className="container-x px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <button
              type="button"
              onClick={() => handleNav('home')}
              className="flex items-center gap-3"
              aria-label={`${siteConfig.name} — back to top`}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-pulse-glow rounded-full bg-neon" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-neon" />
              </span>
              <span className="font-display text-2xl font-extrabold tracking-[0.22em] text-mist">
                NABA
              </span>
            </button>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-haze">{siteConfig.description}</p>

            <div className="mt-6 flex items-center gap-3">
              {siteConfig.socials.map((social) => {
                const Icon = socialIcons[social.id] || Instagram;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Follow ${siteConfig.shortName} on ${social.label}`}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-haze transition-all duration-300 hover:border-gold/40 hover:text-gold hover:shadow-glow"
                  >
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <nav aria-label="Footer navigation">
            <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Explore
            </h2>
            <ul className="space-y-3">
              {siteConfig.navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    onClick={() => handleNav(link.id)}
                    className="text-sm text-haze transition-colors hover:text-mist"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  type="button"
                  onClick={() => handleNav('reservation')}
                  className="text-sm font-semibold text-gold transition-colors hover:text-gold-soft"
                >
                  Reserve a Table
                </button>
              </li>
            </ul>
          </nav>

          {/* Contact */}
          <div>
            <h2 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
              Visit
            </h2>
            <ul className="space-y-4 text-sm text-haze">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`tel:${siteConfig.phoneHref}`} className="transition-colors hover:text-mist">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors hover:text-mist">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-haze">
              {hoursSummary}
            </p>

            <GlowButton to="reservation" className="mt-6">
              Reserve a Table
            </GlowButton>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 text-xs text-haze sm:flex-row">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="flex items-center gap-2">
            Crafted with
            <span className="text-gold" aria-hidden="true">
              ✦
            </span>
            in Gulshan, Dhaka
          </p>
        </div>
      </div>
    </footer>
  );
}
