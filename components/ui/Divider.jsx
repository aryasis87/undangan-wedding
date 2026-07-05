// Ornamen pemisah antar-section bergaya floral/daun (SVG, tanpa gambar).
export default function Divider({ className = '' }) {
  return (
    <div className={`flex items-center justify-center gap-3 py-2 text-gold ${className}`} aria-hidden="true">
      <span className="h-px w-12 bg-current opacity-40" />
      <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="opacity-80">
        <path d="M20 2c-3 5-8 6-12 6 4 2 9 3 12 8 3-5 8-6 12-8-4 0-9-1-12-6z" fill="currentColor" />
        <circle cx="20" cy="10" r="1.6" fill="var(--color-cream)" />
      </svg>
      <span className="h-px w-12 bg-current opacity-40" />
    </div>
  );
}
