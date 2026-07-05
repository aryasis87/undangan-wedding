'use client';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Box({ value, label }) {
  return (
    <div className="flex h-20 w-20 flex-col items-center justify-center rounded-xl bg-cream shadow-md md:h-24 md:w-24">
      <span className="font-display text-3xl font-semibold text-rose-deep md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-muted md:text-xs">{label}</span>
    </div>
  );
}

// Hitung mundur menuju hari H.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds } = useCountdown(config.mainDate);

  return (
    <section className="bg-rose/15 px-6 py-20">
      <Reveal className="text-center">
        <p className="font-script text-3xl text-rose-deep">Menuju Hari Bahagia</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 md:gap-5">
          <Box value={days} label="Hari" />
          <Box value={hours} label="Jam" />
          <Box value={minutes} label="Menit" />
          <Box value={seconds} label="Detik" />
        </div>
      </Reveal>
    </section>
  );
}
