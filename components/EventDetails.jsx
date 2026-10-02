import { CalendarDays, Clock, MapPin, CalendarPlus } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';
import { googleCalendarUrl } from '@/lib/utils';

function EventCard({ event, delay }) {
  const calUrl = googleCalendarUrl(event, { title: config.meta.title, location: config.location.label });
  return (
    <Reveal delay={delay}>
      <div className="rounded-2xl bg-cream p-8 text-center shadow-md">
        <h3 className="font-display text-3xl font-medium text-rose-deep">{event.name}</h3>
        <div className="mx-auto mt-4 h-px w-12 bg-gold/50" />
        <ul className="mt-6 space-y-3 text-sm text-ink">
          <li className="flex items-center justify-center gap-2">
            <CalendarDays size={16} className="text-gold" aria-hidden="true" /> {event.date}
          </li>
          <li className="flex items-center justify-center gap-2">
            <Clock size={16} className="text-gold" aria-hidden="true" /> {event.time}
          </li>
          <li className="flex flex-col items-center gap-1">
            <span className="flex items-center gap-2 font-medium">
              <MapPin size={16} className="text-gold" aria-hidden="true" /> {event.venue}
            </span>
            <span className="text-muted">{event.address}</span>
          </li>
        </ul>
        {event.start && event.end && (
          <a
            href={calUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-rose-deep px-5 py-2.5 text-xs font-medium text-rose-deep transition hover:bg-rose-deep hover:text-cream"
          >
            <CalendarPlus size={14} /> Tambah ke Kalender
          </a>
        )}
      </div>
    </Reveal>
  );
}

// Detail rangkaian acara.
export default function EventDetails() {
  const { events } = config;
  return (
    <section className="bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle kicker="Save the Date" title="Rangkaian Acara" />
        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2">
          {events.map((event, i) => (
            <EventCard key={event.name} event={event} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
}
