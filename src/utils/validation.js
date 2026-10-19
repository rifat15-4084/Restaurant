import siteConfig from '../data/siteConfig';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;

/** Bangladesh-friendly phone check: 01XXXXXXXXX or +8801XXXXXXXXX */
export function isValidPhone(value) {
  const cleaned = String(value).replace(/[\s()-]/g, '');
  return /^(\+?880|0)?1[3-9]\d{8}$/.test(cleaned);
}

export function isValidEmail(value) {
  return EMAIL_RE.test(String(value).trim());
}

/**
 * Reservation form validation.
 * Returns an object of { field: message } — empty object means valid.
 */
export function validateReservation(values) {
  const errors = {};
  const todayISO = new Date().toISOString().slice(0, 10);

  if (!values.name || values.name.trim().length < 2) {
    errors.name = 'Please enter your full name (at least 2 characters).';
  }

  if (!values.phone || !values.phone.trim()) {
    errors.phone = 'Please enter your phone number.';
  } else if (!isValidPhone(values.phone)) {
    errors.phone = 'Enter a valid BD number, e.g. 01712-345678 or +8801712345678.';
  }

  if (!values.email || !values.email.trim()) {
    errors.email = 'Please enter your email so we can send confirmation.';
  } else if (!isValidEmail(values.email)) {
    errors.email = 'That email address doesn’t look right.';
  }

  if (!values.date) {
    errors.date = 'Please choose a date for your visit.';
  } else if (values.date < todayISO) {
    errors.date = 'That date has already passed — please pick today or later.';
  }

  if (!values.time) {
    errors.time = 'Please pick a time slot.';
  }

  const guests = Number(values.guests);
  if (!guests || Number.isNaN(guests)) {
    errors.guests = 'Please tell us how many guests are coming.';
  } else if (guests < 1 || guests > siteConfig.reservation.maxGuests) {
    errors.guests = `Please choose between 1 and ${siteConfig.reservation.maxGuests} guests. For larger groups, call us directly.`;
  }

  return errors;
}

export default validateReservation;
