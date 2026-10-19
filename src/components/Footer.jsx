import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import siteConfig, { hoursSummary } from '../data/siteConfig';
import Button from './ui/Button';
import { TikTokIcon } from './ui/Icons';

const socialIcons = {
  instagram: Instagram,
  facebook: Facebook,
  tiktok: TikTokIcon,
};

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-charcoal/50">
      <div className="container-x px-5 py-16 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3" aria-label={`${siteConfig.name} — home`}>
              <span className="h-2.5 w-2.5 rounded-full bg-gold" aria-hidden="true" />
              <span className="font-display text-2xl font-bold tracking-[0.22em] text-mist">
                NABA
              </span>
            </Link>
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
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-haze transition-colors duration-200 hover:border-gold/40 hover:text-gold"
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
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-sm text-haze transition-colors duration-200 hover:text-mist"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/reservation"
                  className="text-sm font-semibold text-gold transition-colors duration-200 hover:text-gold-soft"
                >
                  Reserve a Table
                </Link>
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
                <a href={`tel:${siteConfig.phoneHref}`} className="transition-colors duration-200 hover:text-mist">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-gold" aria-hidden="true" />
                <a href={`mailto:${siteConfig.email}`} className="transition-colors duration-200 hover:text-mist">
                  {siteConfig.email}
                </a>
              </li>
            </ul>

            <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs leading-relaxed text-haze">
              {hoursSummary}
            </p>

            <Button to="/reservation" className="mt-6">
              Reserve a Table
            </Button>
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
