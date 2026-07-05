import Reveal from './Reveal';
import Divider from './Divider';

// Judul section yang konsisten di semua bagian.
export default function SectionTitle({ kicker, title, className = '' }) {
  return (
    <Reveal className={`text-center ${className}`}>
      {kicker && (
        <p className="font-script text-3xl text-rose-deep mb-1">{kicker}</p>
      )}
      <h2 className="font-display text-4xl md:text-5xl font-medium text-ink">{title}</h2>
      <Divider className="mt-3" />
    </Reveal>
  );
}
