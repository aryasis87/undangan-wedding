import Image from 'next/image';
import { Instagram } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

function Profile({ person, delay }) {
  return (
    <Reveal delay={delay} className="text-center">
      <div className="relative mx-auto h-56 w-44 overflow-hidden rounded-t-full border-4 border-blush shadow-lg">
        <Image src={person.photo} alt={person.fullName} fill sizes="176px" className="object-cover" />
      </div>
      <h3 className="mt-5 font-display text-3xl font-medium text-ink">{person.fullName}</h3>
      <p className="mt-2 text-sm text-muted">{person.as}</p>
      <p className="text-sm font-medium text-ink">{person.parents}</p>
      {person.instagram && (
        <a
          href={`https://instagram.com/${person.instagram}`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-1.5 text-sm text-rose-deep transition hover:text-ink"
        >
          <Instagram size={15} /> @{person.instagram}
        </a>
      )}
    </Reveal>
  );
}

// Profil kedua mempelai.
export default function CoupleSection() {
  const { couple } = config;
  return (
    <section className="bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle kicker="Bismillah" title="Mempelai" />
        <div className="mt-14 grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto_1fr]">
          <Profile person={couple.groom} delay={0} />
          <div className="hidden items-center justify-center md:flex">
            <span className="font-script text-6xl text-gold">&amp;</span>
          </div>
          <Profile person={couple.bride} delay={0.15} />
        </div>
      </div>
    </section>
  );
}
