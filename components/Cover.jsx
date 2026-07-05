'use client';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import config from '@/lib/data';
import { useGuestName } from '@/lib/hooks';

// Ornamen botani sudut (line-art sederhana).
function Sprig({ className }) {
  return (
    <svg className={className} width="150" height="150" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" aria-hidden="true">
      <path d="M10 90 C 35 70, 45 45, 50 12" strokeLinecap="round" />
      {[22, 34, 46, 58, 70].map((y, i) => (
        <g key={i}>
          <path d={`M${48 - i * 1.5} ${y} C ${30 - i * 2} ${y - 6}, ${24 - i * 2} ${y + 2}, ${20 - i * 2} ${y + 8}`} strokeLinecap="round" />
          <path d={`M${50 + i * 1.5} ${y + 4} C ${68 + i * 2} ${y - 2}, ${74 + i * 2} ${y + 6}, ${78 + i * 2} ${y + 12}`} strokeLinecap="round" />
        </g>
      ))}
    </svg>
  );
}

// Cover heirloom-amplop (porting Stitch "Timeless Elegance") + wax seal emas.
export default function Cover({ onOpen }) {
  const guest = useGuestName();
  const { couple, opening } = config;

  return (
    <motion.section
      className="fixed inset-0 z-50 overflow-y-auto bg-cream text-ink"
      exit={{ opacity: 0, y: '-100%' }}
      transition={{ duration: 0.9, ease: 'easeInOut' }}
    >
      {/* Ornamen botani */}
      <Sprig className="pointer-events-none absolute left-2 top-2 text-rose-deep/30" />
      <Sprig className="pointer-events-none absolute bottom-2 right-2 rotate-180 text-rose-deep/30" />

      {/* Bingkai amplop ganda */}
      <div className="pointer-events-none fixed inset-4 border border-gold/30" aria-hidden="true" />
      <div className="pointer-events-none fixed inset-[22px] border border-gold/20" aria-hidden="true" />

      {/* Flap amplop */}
      <svg className="pointer-events-none absolute left-0 top-0 h-1/3 w-full text-blush" preserveAspectRatio="none" viewBox="0 0 100 100" aria-hidden="true">
        <path d="M0,0 L100,0 L50,100 Z" fill="currentColor" opacity="0.7" />
      </svg>

      <div className="relative z-10 flex min-h-full flex-col items-center justify-between px-8 py-16 text-center">
        {/* Atas: identitas */}
        <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} className="mt-6 w-full max-w-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-deep">{opening.greeting}</p>
          <h1 className="mt-4 break-words font-display text-5xl font-medium leading-tight text-rose-deep sm:text-6xl">
            {couple.groom.name} &amp; {couple.bride.name}
          </h1>
          <div className="mx-auto my-5 h-px w-12 bg-gold/50" />
          <p className="text-sm italic text-muted">Kami mengundang Anda untuk berbagi kebahagiaan</p>
        </motion.div>

        {/* Bawah: tamu */}
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.7, duration: 0.8 }} className="mb-8 w-full max-w-sm">
          <p className="text-sm text-muted">Kepada Yth. Bapak/Ibu/Saudara/i</p>
          <h2 className="mt-2 inline-block border-b border-gold/40 px-4 pb-1 font-display text-2xl text-ink">{guest}</h2>
        </motion.div>
      </div>

      {/* Wax seal emas (di tengah) */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.5, duration: 0.6 }}
        onClick={onOpen}
        aria-label="Buka Undangan"
        className="animate-wax-pulse absolute left-1/2 top-1/2 z-50 flex h-28 w-28 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-full bg-gold text-cream shadow-lg transition active:scale-95"
      >
        <span className="absolute inset-1.5 rounded-full border border-cream/30" aria-hidden="true" />
        <Mail size={22} strokeWidth={1.5} />
        <span className="mt-1 text-[10px] font-bold uppercase leading-tight tracking-wider">Buka<br />Undangan</span>
      </motion.button>
    </motion.section>
  );
}
