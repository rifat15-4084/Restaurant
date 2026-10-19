import { useMemo, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Expand } from 'lucide-react';
import { galleryFilters, galleryImages } from '../data/gallery';
import Lightbox from './Lightbox';
import SectionHeading from './ui/SectionHeading';
import Reveal from './ui/Reveal';
import SmartImage from './ui/SmartImage';
import cn from '../utils/cn';

export default function Gallery() {
  const [filter, setFilter] = useState('all');
  const [lightboxIndex, setLightboxIndex] = useState(-1);

  const visible = useMemo(
    () => (filter === 'all' ? galleryImages : galleryImages.filter((img) => img.category === filter)),
    [filter]
  );

  const lightboxOpen = lightboxIndex >= 0 && lightboxIndex < visible.length;

  return (
    <section id="gallery" className="section-pad relative" aria-labelledby="gallery-heading">
      <div className="container-x">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Gallery"
            id="gallery-heading"
            title={
              <>
                Moments from <span className="text-gradient">the room</span>.
              </>
            }
            subtitle="Food, light and people — shot inside Naba with no filters beyond the room’s own glow."
          />

          <Reveal delay={0.12}>
            <div
              className="flex flex-wrap gap-2"
              role="group"
              aria-label="Filter gallery by type"
            >
              {galleryFilters.map((item) => {
                const active = item.id === filter;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setFilter(item.id)}
                    aria-pressed={active}
                    className={cn(
                      'min-h-[42px] rounded-full border px-5 text-xs font-semibold uppercase tracking-wider transition-all duration-300',
                      active
                        ? 'border-gold/50 bg-gold/15 text-gold shadow-[0_0_22px_rgba(245,181,68,0.22)]'
                        : 'border-white/10 bg-white/[0.04] text-haze hover:border-white/25 hover:text-mist'
                    )}
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>
          </Reveal>
        </div>

        {/* Masonry (CSS columns) */}
        <div className="mt-12 columns-1 gap-4 sm:columns-2 lg:columns-3">
          <AnimatePresence mode="popLayout">
            {visible.map((image, index) => (
              <motion.button
                key={image.id}
                type="button"
                layout
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                onClick={() => setLightboxIndex(index)}
                className="group relative mb-4 block w-full break-inside-avoid overflow-hidden rounded-2xl border border-white/10 bg-charcoal text-left"
                aria-label={`Open image: ${image.caption}`}
              >
                <SmartImage
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    'w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.07]',
                    image.tall ? 'h-[420px]' : 'h-[280px]'
                  )}
                />

                {/* Overlay */}
                <span className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />

                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <span className="translate-y-1.5 transition-transform duration-500 group-hover:translate-y-0">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.24em] text-gold">
                      {image.category}
                    </span>
                    <span className="mt-1 block font-display text-base font-bold text-mist">
                      {image.caption}
                    </span>
                  </span>
                  <span className="flex h-10 w-10 shrink-0 translate-y-2 items-center justify-center rounded-full border border-white/20 bg-ink/60 text-mist opacity-0 backdrop-blur transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                    <Expand className="h-4 w-4" aria-hidden="true" />
                  </span>
                </span>
              </motion.button>
            ))}
          </AnimatePresence>
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
