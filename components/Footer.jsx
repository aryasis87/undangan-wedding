'use client';
import { Heart, Share2 } from 'lucide-react';
import Reveal from './ui/Reveal';
import config from '@/lib/data';
import { whatsappShareUrl } from '@/lib/utils';

// Penutup undangan.
export default function Footer() {
  const { footer, couple } = config;

  const share = () => {
    const text = `Undangan Pernikahan ${couple.groom.name} & ${couple.bride.name}`;
    if (typeof navigator !== 'undefined' && navigator.share) {
      navigator.share({ title: text, url: window.location.href }).catch(() => {});
    } else {
      window.open(whatsappShareUrl(text), '_blank', 'noopener');
    }
  };

  return (
    <footer className="relative overflow-hidden bg-ink px-6 py-20 text-center text-cream">
      <Reveal className="mx-auto max-w-xl">
        <p className="text-sm leading-relaxed text-cream/80">{footer.closing}</p>
        <h2 className="mt-8 font-script text-5xl text-cream">
          {couple.groom.name} &amp; {couple.bride.name}
        </h2>
        <p className="mt-3 text-sm tracking-widest text-gold">{footer.hashtag}</p>

        <button
          onClick={share}
          className="mt-8 inline-flex items-center gap-2 rounded-full border border-cream/40 px-6 py-3 text-sm font-medium text-cream transition hover:bg-cream hover:text-ink"
        >
          <Share2 size={15} /> Bagikan Undangan
        </button>

        <p className="mt-10 flex items-center justify-center gap-1.5 text-xs text-cream/60">
          Dibuat dengan <Heart size={12} className="fill-rose text-rose" /> untuk hari bahagia
        </p>
      </Reveal>
    </footer>
  );
}
