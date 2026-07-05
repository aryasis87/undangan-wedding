'use client';
import { useState } from 'react';
import { Send } from 'lucide-react';
import Reveal from './ui/Reveal';
import SectionTitle from './ui/SectionTitle';

const initialWishes = [
  { id: 1, name: 'Budi Santoso', message: 'Selamat menempuh hidup baru! Semoga sakinah, mawaddah, warahmah.' },
  { id: 2, name: 'Maya Putri', message: 'Bahagia selalu untuk kalian berdua. Barakallah!' },
];

// Buku tamu / ucapan & doa (data dummy / state lokal).
export default function WishesForm() {
  const [wishes, setWishes] = useState(initialWishes);
  const [form, setForm] = useState({ name: '', message: '' });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.message.trim()) return;
    setWishes((prev) => [{ id: Date.now(), ...form }, ...prev]);
    setForm({ name: '', message: '' });
  };

  return (
    <section className="bg-blush/40 px-6 py-20">
      <div className="mx-auto max-w-lg">
        <SectionTitle kicker="Doa & Restu" title="Ucapan" />

        <Reveal className="mt-10">
          <form onSubmit={submit} className="space-y-4 rounded-2xl bg-cream p-6 shadow-sm">
            <input
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Nama Anda"
              className="w-full rounded-lg border border-rose/40 bg-cream px-4 py-3 text-sm outline-none focus:border-rose-deep"
              required
            />
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Tulis ucapan & doa..."
              rows={3}
              className="w-full resize-none rounded-lg border border-rose/40 bg-cream px-4 py-3 text-sm outline-none focus:border-rose-deep"
              required
            />
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-rose-deep px-6 py-3 text-sm font-medium text-cream transition hover:bg-ink"
            >
              <Send size={15} /> Kirim Ucapan
            </button>
          </form>
        </Reveal>

        <div className="mt-8 max-h-80 space-y-3 overflow-y-auto pr-1">
          {wishes.map((w) => (
            <div key={w.id} className="rounded-xl bg-cream p-4 shadow-sm">
              <p className="font-medium text-ink">{w.name}</p>
              <p className="mt-1 text-sm leading-relaxed text-muted">{w.message}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
