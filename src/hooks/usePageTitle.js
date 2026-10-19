import { useEffect } from 'react';
import siteConfig from '../data/siteConfig';

/**
 * Sets the document title and meta description for the current page.
 * Keeps index.html defaults as the fallback for the home route.
 */
export default function usePageTitle(title, description) {
  useEffect(() => {
    document.title = title
      ? `${title} | ${siteConfig.name}`
      : `${siteConfig.name} — ${siteConfig.tagline}`;

    if (description) {
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.setAttribute('content', description);
    }
  }, [title, description]);
}
