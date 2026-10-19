import { useState } from 'react';
import { ImageOff } from 'lucide-react';
import cn from '../../utils/cn';

/**
 * <img> with lazy loading and a gradient placeholder fallback,
 * so a dead URL can never break the layout.
 */
export default function SmartImage({
  src,
  alt,
  className,
  eager = false,
  imgClassName,
  width,
  height,
}) {
  const [failed, setFailed] = useState(false);

  if (failed || !src) {
    return (
      <div
        role="img"
        aria-label={alt || 'Image unavailable'}
        className={cn(
          'flex items-center justify-center bg-[radial-gradient(120%_120%_at_20%_0%,#1c1c20_0%,#0a0a0b_70%)]',
          className
        )}
      >
        <span className="flex flex-col items-center gap-2 text-haze/60">
          <ImageOff className="h-6 w-6 text-gold/50" aria-hidden="true" />
          <span className="text-[11px] uppercase tracking-[0.2em]">NABA</span>
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      onError={() => setFailed(true)}
      className={cn(className, imgClassName)}
    />
  );
}
