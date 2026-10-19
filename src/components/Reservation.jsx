import { useMemo, useState } from 'react';
import { AlertTriangle, CalendarDays, CheckCircle2, MessageCircle, Users } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import { buildTimeSlots, toISODate } from '../utils/format';
import { validateReservation } from '../utils/validation';
import Button from './ui/Button';
import { Spinner } from './ui/Icons';

const initialValues = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  guests: '2',
  request: '',
};

/**
 * Reservation form (Web3Forms) with WhatsApp fallback.
 * Success and form states swap with no transition beyond the page fade.
 */
export default function Reservation() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | success | error
  const [errorMessage, setErrorMessage] = useState('');

  const todayISO = useMemo(() => toISODate(new Date()), []);
  const timeSlots = useMemo(() => buildTimeSlots(values.date), [values.date]);

  const setValue = (field, value) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validateReservation(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length) {
      const firstField = Object.keys(nextErrors)[0];
      document.getElementById(`reservation-${firstField}`)?.focus();
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    const accessKey = import.meta.env.VITE_WEB3FORMS_KEY;
    if (!accessKey || accessKey === 'your_access_key_here') {
      setStatus('error');
      setErrorMessage(
        'The reservation API key is missing. Please copy .env.example to .env and add your Web3Forms access key, then try again.'
      );
      return;
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `New reservation — ${siteConfig.name}`,
          from_name: siteConfig.name,
          name: values.name,
          phone: values.phone,
          email: values.email,
          date: values.date,
          time: values.time,
          guests: values.guests,
          special_request: values.request || 'None',
        }),
      });

      const data = await response.json().catch(() => ({ success: false }));

      if (!response.ok || !data.success) {
        throw new Error(data.message || 'The booking service rejected the request.');
      }

      setStatus('success');
    } catch (error) {
      setStatus('error');
      setErrorMessage(
        error?.message
          ? `We could not send your request: ${error.message}`
          : 'We could not send your request. Please check your connection, or book via WhatsApp instead.'
      );
    }
  };

  const handleWhatsApp = () => {
    const text = `Hello ${siteConfig.shortName}! I would like to reserve a table.\n\nName: ${
      values.name || '—'
    }\nPhone: ${values.phone || '—'}\nEmail: ${values.email || '—'}\nDate: ${
      values.date || '—'
    }\nTime: ${values.time || '—'}\nGuests: ${values.guests}\nSpecial request: ${
      values.request || 'None'
    }`;
    window.open(
      `https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent(text)}`,
      '_blank',
      'noopener,noreferrer'
    );
  };

  return (
    <div className="glass relative mx-auto max-w-4xl rounded-2xl p-6 sm:p-10">
      {status === 'success' ? (
        /* --------------------------- Success --------------------------- */
        <div className="flex flex-col items-center gap-5 py-8 text-center" role="status">
          <span className="flex h-20 w-20 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
            <CheckCircle2 className="h-9 w-9 text-emerald-400" aria-hidden="true" />
          </span>

          <h2 className="text-3xl font-bold text-mist">Table requested!</h2>
          <p className="max-w-md text-sm leading-relaxed text-haze">
            Thank you, {values.name.split(' ')[0]}. We’ve received your request and will
            confirm by email or phone within an hour.
          </p>

          <div className="w-full max-w-md rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-left">
            <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-gold">
              Booking summary
            </p>
            <dl className="space-y-2 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-haze">Name</dt>
                <dd className="min-w-0 break-words text-right font-medium text-mist">{values.name}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-haze">Date &amp; time</dt>
                <dd className="min-w-0 break-words text-right font-medium text-mist">
                  {values.date} · {values.time}
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-haze">Guests</dt>
                <dd className="font-medium text-mist">{values.guests}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-haze">Phone</dt>
                <dd className="min-w-0 break-words text-right font-medium text-mist">{values.phone}</dd>
              </div>
              {values.request ? (
                <div className="flex justify-between gap-4">
                  <dt className="shrink-0 text-haze">Request</dt>
                  <dd className="min-w-0 break-words text-right font-medium text-mist">
                    {values.request}
                  </dd>
                </div>
              ) : null}
            </dl>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            <Button variant="ghost" onClick={() => { setValues(initialValues); setStatus('idle'); }}>
              Book another table
            </Button>
            <Button to="/menu">Explore the menu</Button>
          </div>
        </div>
      ) : (
        /* ----------------------------- Form ---------------------------- */
        <form onSubmit={handleSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label htmlFor="reservation-name" className="text-xs font-semibold uppercase tracking-[0.18em] text-haze">
              Full name *
            </label>
            <input
              id="reservation-name"
              type="text"
              autoComplete="name"
              placeholder="e.g. Nusrat Jahan"
              value={values.name}
              onChange={(e) => setValue('name', e.target.value)}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'reservation-name-error' : undefined}
              className={fieldClass(errors.name)}
            />
            {errors.name ? (
              <p id="reservation-name-error" className="text-xs text-red-300">
                {errors.name}
              </p>
            ) : null}
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label htmlFor="reservation-phone" className="text-xs font-semibold uppercase tracking-[0.18em] text-haze">
              Phone *
            </label>
            <input
              id="reservation-phone"
              type="tel"
              autoComplete="tel"
              placeholder="01712-345678"
              value={values.phone}
              onChange={(e) => setValue('phone', e.target.value)}
              aria-invalid={Boolean(errors.phone)}
              aria-describedby={errors.phone ? 'reservation-phone-error' : undefined}
              className={fieldClass(errors.phone)}
            />
            {errors.phone ? (
              <p id="reservation-phone-error" className="text-xs text-red-300">
                {errors.phone}
              </p>
            ) : null}
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="reservation-email" className="text-xs font-semibold uppercase tracking-[0.18em] text-haze">
              Email *
            </label>
            <input
              id="reservation-email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={values.email}
              onChange={(e) => setValue('email', e.target.value)}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'reservation-email-error' : undefined}
              className={fieldClass(errors.email)}
            />
            {errors.email ? (
              <p id="reservation-email-error" className="text-xs text-red-300">
                {errors.email}
              </p>
            ) : null}
          </div>

          {/* Date */}
          <div className="flex flex-col gap-2">
            <label htmlFor="reservation-date" className="text-xs font-semibold uppercase tracking-[0.18em] text-haze">
              Date *
            </label>
            <div className="relative">
              <CalendarDays
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-haze"
                aria-hidden="true"
              />
              <input
                id="reservation-date"
                type="date"
                min={todayISO}
                value={values.date}
                onChange={(e) => {
                  setValue('date', e.target.value);
                  setValue('time', '');
                }}
                aria-invalid={Boolean(errors.date)}
                aria-describedby={errors.date ? 'reservation-date-error' : undefined}
                className={`${fieldClass(errors.date)} pr-11`}
              />
            </div>
            {errors.date ? (
              <p id="reservation-date-error" className="text-xs text-red-300">
                {errors.date}
              </p>
            ) : null}
          </div>

          {/* Time */}
          <div className="flex flex-col gap-2">
            <label htmlFor="reservation-time" className="text-xs font-semibold uppercase tracking-[0.18em] text-haze">
              Time *
            </label>
            <select
              id="reservation-time"
              value={values.time}
              onChange={(e) => setValue('time', e.target.value)}
              disabled={!values.date || timeSlots.length === 0}
              aria-invalid={Boolean(errors.time)}
              aria-describedby={errors.time ? 'reservation-time-error' : undefined}
              className={`${fieldClass(errors.time)} disabled:cursor-not-allowed disabled:opacity-50`}
            >
              <option value="">
                {values.date
                  ? timeSlots.length
                    ? 'Select a time slot'
                    : 'We are closed on this day'
                  : 'Pick a date first'}
              </option>
              {timeSlots.map((slot) => (
                <option key={slot} value={slot} className="bg-charcoal text-mist">
                  {slot}
                </option>
              ))}
            </select>
            {errors.time ? (
              <p id="reservation-time-error" className="text-xs text-red-300">
                {errors.time}
              </p>
            ) : null}
          </div>

          {/* Guests */}
          <div className="flex flex-col gap-2">
            <label htmlFor="reservation-guests" className="text-xs font-semibold uppercase tracking-[0.18em] text-haze">
              Guests *
            </label>
            <div className="relative">
              <Users
                className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-haze"
                aria-hidden="true"
              />
              <input
                id="reservation-guests"
                type="number"
                min="1"
                max={siteConfig.reservation.maxGuests}
                value={values.guests}
                onChange={(e) => setValue('guests', e.target.value)}
                aria-invalid={Boolean(errors.guests)}
                aria-describedby={errors.guests ? 'reservation-guests-error' : undefined}
                className={`${fieldClass(errors.guests)} pr-11`}
              />
            </div>
            {errors.guests ? (
              <p id="reservation-guests-error" className="text-xs text-red-300">
                {errors.guests}
              </p>
            ) : null}
          </div>

          {/* Special request */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <label htmlFor="reservation-request" className="text-xs font-semibold uppercase tracking-[0.18em] text-haze">
              Special request <span className="normal-case text-haze/60">(optional)</span>
            </label>
            <textarea
              id="reservation-request"
              rows="3"
              placeholder="Window seat, birthday cake, allergies…"
              value={values.request}
              onChange={(e) => setValue('request', e.target.value)}
              className={`${fieldClass()} resize-none`}
            />
          </div>

          {/* Server error */}
          {status === 'error' ? (
            <div
              role="alert"
              className="flex items-start gap-3 rounded-2xl border border-red-400/30 bg-red-500/10 p-4 text-sm text-red-200 sm:col-span-2"
            >
              <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <p>{errorMessage}</p>
            </div>
          ) : null}

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2 sm:col-span-2 sm:flex-row">
            <Button type="submit" className="flex-1" disabled={status === 'submitting'}>
              {status === 'submitting' ? (
                <>
                  <Spinner /> Sending…
                </>
              ) : (
                'Confirm Reservation'
              )}
            </Button>

            <Button type="button" variant="ghost" onClick={handleWhatsApp} className="flex-1">
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              Book via WhatsApp
            </Button>
          </div>

          <p className="text-center text-[11px] leading-relaxed text-haze/70 sm:col-span-2">
            This form is powered by Web3Forms — no payment is taken online. A reservation is
            confirmed only after our team replies.
          </p>
        </form>
      )}
    </div>
  );
}

function fieldClass(error) {
  return error
    ? 'field border-red-400/50 focus:border-red-400/70 focus:ring-red-400/20'
    : 'field';
}
