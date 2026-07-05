import Reveal from './ui/Reveal';
import config from '@/lib/data';

// Quote / ayat pembuka.
export default function Opening() {
  const { opening } = config;
  return (
    <section className="bg-cream px-6 py-20">
      <Reveal className="mx-auto max-w-2xl text-center">
        <p className="font-display text-xl italic leading-relaxed text-ink md:text-2xl">
          &ldquo;{opening.quote}&rdquo;
        </p>
        <p className="mt-4 text-sm font-medium tracking-widest text-rose-deep">
          ({opening.quoteSource})
        </p>
      </Reveal>
    </section>
  );
}
