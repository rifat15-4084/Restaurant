import siteConfig from '../data/siteConfig';

/** 450 → "৳ 450" */
export function formatPrice(amount) {
  return `${siteConfig.currency} ${Number(amount).toLocaleString('en-US')}`;
}

/** '23:30' → '11:30 PM' */
export function formatTime12(hhmm) {
  const [hRaw, m] = hhmm.split(':');
  const h = Number(hRaw);
  const suffix = h >= 12 ? 'PM' : 'AM';
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${m} ${suffix}`;
}

/** 60 * 8 + 30 → '8:30 AM' */
export function formatMinutes12(totalMinutes) {
  const h = Math.floor(totalMinutes / 60) % 24;
  const m = totalMinutes % 60;
  return formatTime12(`${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}`);
}

/** Today as yyyy-mm-dd for <input type="date"> min values. */
export function toISODate(date) {
  const d = date || new Date();
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Reservation time slots generated from siteConfig.hours,
 * e.g. '14:30', '15:00' … ending one hour before close.
 */
export function buildTimeSlots(dateString, config = siteConfig.reservation) {
  if (!dateString) return [];
  const date = new Date(`${dateString}T00:00:00`);
  if (Number.isNaN(date.getTime())) return [];
  const dayHours = siteConfig.hours[date.getDay()];
  if (!dayHours) return [];

  const start = Number(dayHours.open.split(':')[0]) * 60 + Number(dayHours.open.split(':')[1]);
  const close = Number(dayHours.close.split(':')[0]) * 60 + Number(dayHours.close.split(':')[1]);
  const last = close - config.lastSlotOffsetMinutes;

  const slots = [];
  for (let t = start; t <= last; t += config.slotStepMinutes) {
    slots.push(formatMinutes12(t));
  }
  return slots;
}
