import { useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Modal from './ui/Modal';
import SmartImage from './ui/SmartImage';

/**
 * Fullscreen lightbox: Esc / ← → keyboard control and focus management
 * (via Modal's focus trap). No drag/swipe animation.
 */
export default function Lightbox({ images, index, onIndexChange, onClose }) {
  const open = images.length > 0 && index >= 0 && index < images.length;
  const safeIndex = Math.min(Math.max(index, 0), Math.max(images.length - 1, 0));
  const image = images[safeIndex];

  const go = (direction) => {
    if (!images.length) return;
    onIndexChange((safeIndex + direction + images.length) % images.length);
  };

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'ArrowRight') {
        event.preventDefault();
        go(1);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        go(-1);
      }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, safeIndex, images.length]);

  return (
    <Modal
      open={open}
      onClose={onClose}
      closeLabel="Close gallery"
      panelClassName="!max-w-6xl !rounded-2xl !border-transparent !bg-transparent !shadow-none"
    >
      {image ? (
        <div className="flex flex-col gap-3">
          <div key={image.id} className="overflow-hidden rounded-2xl">
            <SmartImage
              src={image.src}
              alt={image.alt}
              eager
              className="max-h-[70vh] w-full object-contain"
            />
          </div>

          <div className="flex items-center justify-between gap-4 px-1">
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-mist">{image.caption}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-haze">{image.category}</p>
            </div>

            <div className="flex shrink-0 items-center gap-2">
              <button
                type="button"
                onClick={() => go(-1)}
                aria-label="Previous image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-mist transition-colors duration-200 hover:border-gold/50 hover:text-gold"
              >
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <span className="min-w-[64px] text-center text-xs tabular-nums text-haze" aria-live="polite">
                {safeIndex + 1} / {images.length}
              </span>
              <button
                type="button"
                onClick={() => go(1)}
                aria-label="Next image"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/5 text-mist transition-colors duration-200 hover:border-gold/50 hover:text-gold"
              >
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      ) : null}
    </Modal>
  );
}
