import { useEffect, useMemo, useState } from 'react';
import siteConfig from '../data/siteConfig';
import { formatTime12 } from '../utils/format';

const toMinutes = (hhmm) => {
  const [h, m] = hhmm.split(':').map(Number);
  return h * 60 + m;
};

/**
 * Live "Open Now / Closed" status computed from siteConfig.hours.
 * Recomputes every minute so the badge stays accurate.
 */
export default function useOpenStatus() {
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  return useMemo(() => {
    const todayIndex = now.getDay();
    const todayHours = siteConfig.hours[todayIndex];
    const nowMinutes = now.getHours() * 60 + now.getMinutes();
    const opensAt = toMinutes(todayHours.open);
    const closesAt = toMinutes(todayHours.close);

    const isOpen = nowMinutes >= opensAt && nowMinutes < closesAt;

    let nextChange = '';
    if (isOpen) {
      nextChange = `Open until ${formatTime12(todayHours.close)}`;
    } else if (nowMinutes < opensAt) {
      nextChange = `Opens at ${formatTime12(todayHours.open)} today`;
    } else {
      const next = siteConfig.hours[(todayIndex + 1) % 7];
      nextChange = `Opens tomorrow at ${formatTime12(next.open)}`;
    }

    return { isOpen, nextChange, todayHours, todayIndex };
  }, [now]);
}
