import { Sparkles } from 'lucide-react';

export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="mx-auto mb-12 max-w-2xl text-center">
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300"><Sparkles size={12} />{eyebrow}</div>
      <h2 className="text-3xl font-bold tracking-tight text-slate-50 sm:text-4xl">{title}</h2>
      {description && <p className="mt-4 text-base text-slate-300 sm:text-lg">{description}</p>}
    </div>
  );
}
