import { ArrowUpRight, ExternalLink, Github } from 'lucide-react';

export default function ProjectCard({ project }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-white/10 bg-slate-900/70 shadow-soft backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-400/50 hover:bg-slate-900">
      <div className="relative h-52 overflow-hidden bg-gradient-to-br from-indigo-500/25 via-purple-500/15 to-sky-500/20 p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,255,255,0.22),_transparent_35%)]" />
        <div className="relative flex h-full items-end justify-between">
          <span className="rounded-full border border-white/15 bg-slate-950/40 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-cyan-300">
            {project.category}
          </span>
          <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-2 py-1 text-[10px] font-medium text-cyan-200">
            Featured
          </span>
        </div>
      </div>

      <div className="space-y-5 p-6">
        <div>
          <h3 className="text-xl font-semibold text-slate-50">{project.title}</h3>
          <p className="mt-3 text-sm leading-6 text-slate-300">{project.description}</p>
        </div>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[11px] font-medium text-slate-200">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-3 pt-2">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm font-medium text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
          >
            <Github size={15} />
            Code
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-3 py-2 text-sm font-semibold text-white transition hover:brightness-110"
          >
            Live Demo
            <ArrowUpRight size={15} />
          </a>
        </div>
      </div>
    </article>
  );
}
