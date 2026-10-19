import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import cn from '../../utils/cn';

const FOCUSABLE =
  'a[href], button:not([disabled]), textarea:not([disabled]), input:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * Accessible dialog: focus trap, Esc to close, click-outside to close,
 * body scroll lock and focus restoration. The only animation in the app:
 * a short opacity/transform transition (0.25s) on open and close.
 */
export default function Modal({
  open,
  onClose,
  children,
  labelledBy,
  position = 'center',
  panelClassName,
  closeLabel = 'Close dialog',
}) {
  const panelRef = useRef(null);
  const restoreFocusRef = useRef(null);
  const onCloseRef = useRef(onClose);

  useEffect(() => {
    onCloseRef.current = onClose;
  });

  useEffect(() => {
    if (!open) return undefined;

    restoreFocusRef.current =
      document.activeElement && document.activeElement !== document.body
        ? document.activeElement
        : null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const focusTimer = window.setTimeout(() => {
      const panel = panelRef.current;
      if (!panel) return;
      const first = panel.querySelector(FOCUSABLE);
      if (first) first.focus();
      else panel.focus();
    }, 40);

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onCloseRef.current?.();
        return;
      }
      if (event.key !== 'Tab') return;

      const panel = panelRef.current;
      if (!panel) return;
      const items = Array.from(panel.querySelectorAll(FOCUSABLE)).filter(
        (el) => el.offsetParent !== null || el === document.activeElement
      );
      if (!items.length) {
        event.preventDefault();
        panel.focus();
        return;
      }
      const first = items[0];
      const last = items[items.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown, true);
      document.body.style.overflow = previousOverflow;
      window.clearTimeout(focusTimer);
      const restore = restoreFocusRef.current;
      if (restore && typeof restore.focus === 'function') {
        window.setTimeout(() => restore.focus(), 0);
      }
    };
  }, [open]);

  const isDrawer = position === 'right';

  return createPortal(
    <AnimatePresence>
      {open ? (
        <div
          className={cn(
            'fixed inset-0 z-[100] flex p-0 sm:p-6',
            isDrawer ? 'justify-end' : 'items-center justify-center p-4'
          )}
        >
          <motion.div
            className="absolute inset-0 bg-ink/85 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => onCloseRef.current?.()}
            aria-hidden="true"
          />

          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby={labelledBy}
            tabIndex={-1}
            className={cn(
              'relative flex flex-col outline-none',
              isDrawer
                ? 'h-full w-full max-w-md border-l border-white/10 bg-charcoal'
                : 'max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-2xl border border-white/10 bg-charcoal',
              panelClassName
            )}
            initial={isDrawer ? { x: '100%' } : { opacity: 0, y: 12 }}
            animate={isDrawer ? { x: 0 } : { opacity: 1, y: 0 }}
            exit={isDrawer ? { x: '100%' } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <button
              type="button"
              onClick={() => onCloseRef.current?.()}
              aria-label={closeLabel}
              className="absolute right-4 top-4 z-20 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-ink/70 text-haze transition-colors duration-200 hover:border-gold/40 hover:text-mist"
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>,
    document.body
  );
}
