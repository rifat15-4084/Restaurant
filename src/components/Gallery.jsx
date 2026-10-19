import { useMemo, useState } from 'react';
import { Expand } from 'lucide-react';
import { galleryFilters, galleryImages } from '../data/gallery';
import Lightbox from './Lightbox';
import SmartImage from './ui/SmartImage';
import cn from '../utils/cn';

/**
 * Gallery grid with category filters and a lightbox.
 * Uniform grid (no masonry animation) — filter changes swap items instantly.
 */
export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const visible = useMemo(
    () => (filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter]
  );

  return (
    <section className="section-pad" aria-label="Gallery">
      <div className="container-x">
        <div className="flex flex-wrap gap-2" role="group" aria-label="Filter gallery by type">
          {galleryFilters.map((item) => {
            const active = item.id === filter;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setFilter(item.id)}
                aria-pressed={active}
                className={cn(
                  'min-h-[44px] rounded-full border px-5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200',
                  active
                    ? 'border-gold/50 bg-gold/15 text-gold'
                    : 'border-white/10 bg-white/[0.04] text-haze hover:border-white/25 hover:text-mist'
                )}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Uniform responsive grid */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((image, index) => (
            <button
              key={image.id}
              type="button"
              onClick={() => setLightboxIndex(index)}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-charcoal text-left"
              aria-label={`Open image: ${image.caption}`}
            >
              <SmartImage
                src={image.src}
                alt={image.alt}
                width={800}
                height={600}
                className="aspect-[4/3] w-full object-cover"
              />

              {/* Overlay */}
              <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-200 group-hover:opacity-95" />

              <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                <span className="min-w-0">
                  <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                    {image.category}
                  </span>
                  <span className="mt-1 block break-words text-base font-bold text-mist">
                    {image.caption}
                  </span>
                </span>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-mist opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <Expand className="h-4 w-4" aria-hidden="true" />
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        images={visible}
        index={lightboxIndex}
        onIndexChange={setLightboxIndex}
        onClose={() => setLightboxIndex(-1)}
      />
    </section>
  );
}
