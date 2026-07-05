import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';
import config from '@/lib/data';

// Timeline perjalanan cinta.
export default function LoveStory() {
  const { story } = config;
  return (
    <section className="bg-cream px-6 py-20">
      <div className="mx-auto max-w-2xl">
        <SectionTitle kicker="Our Journey" title="Cerita Kami" />
        <div className="relative mt-14 border-l-2 border-gold/30 pl-8">
          {story.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.1} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.6rem] flex h-6 w-6 items-center justify-center rounded-full bg-rose-deep text-[10px] font-bold text-cream">
                {i + 1}
              </span>
              <p className="font-script text-2xl text-rose-deep">{item.year}</p>
              <h3 className="font-display text-2xl font-medium text-ink">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted">{item.desc}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
