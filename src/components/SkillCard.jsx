export default function SkillCard({ title, skills }) {
  return (
    <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-5 shadow-soft backdrop-blur-sm">
      <h3 className="mb-5 text-xl font-semibold text-slate-50">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={skill}
            className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-1.5 text-sm font-medium text-cyan-100"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}
