'use client';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { useCountdown } from '@/lib/hooks';

function Box({ value, label }) {
  return (
    <div className="flex aspect-square flex-col items-center justify-center rounded-xl bg-cream shadow-md">
      <span className="font-display text-3xl font-semibold tabular-nums text-rose-deep md:text-4xl">
        {String(value).padStart(2, '0')}
      </span>
      <span className="text-[10px] uppercase tracking-widest text-muted md:text-xs">{label}</span>
    </div>
  );
}

// Hitung mundur menuju hari H; setelah lewat, berganti menjadi ucapan terima kasih.
export default function CountdownTimer() {
  const { days, hours, minutes, seconds, passed } = useCountdown(config.mainDate);

  return (
    <section className="bg-rose/15 px-6 py-20">
      <Reveal className="text-center">
        <p className="font-script text-3xl text-rose-deep">{passed ? 'Hari Bahagia Telah Tiba' : 'Menuju Hari Bahagia'}</p>
        {passed ? (
          <p className="mx-auto mt-6 max-w-sm text-sm leading-relaxed text-muted">
            Terima kasih atas doa dan kehadiran Anda. Semoga kami dapat terus menjaga amanah ini.
          </p>
        ) : (
          <div className="mx-auto mt-8 grid max-w-xs grid-cols-4 gap-2 sm:max-w-md sm:gap-4" role="timer" aria-label={`${days} hari ${hours} jam ${minutes} menit lagi`}>
            <Box value={days} label="Hari" />
            <Box value={hours} label="Jam" />
            <Box value={minutes} label="Menit" />
            <Box value={seconds} label="Detik" />
          </div>
        )}
      </Reveal>
    </section>
  );
}
