import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ theme, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-label="Toggle dark mode"
      className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
    >
      {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}
