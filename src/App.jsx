import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, MapPin, Menu, MessageCircle, Moon, Sparkles, Sun, X, Globe } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { profile, socialLinks, aboutSections, skillGroups, projects, services, education, navigation } from './data/portfolioData';
import ThemeToggle from './components/ThemeToggle';
import SectionTitle from './components/SectionTitle';
import SkillCard from './components/SkillCard';
import ProjectCard from './components/ProjectCard';
import ContactForm from './components/ContactForm';
import avatar from './assets/profile-avatar.svg';

const socialIconMap = { GitHub: Github, LinkedIn: Linkedin, WhatsApp: MessageCircle, Facebook: Globe };
const filterOptions = ['All', ...new Set(projects.map((project) => project.category))];

function NotFoundPage() {
  return (
    <main className="flex min-h-screen items-center justify-center px-6 text-center">
      <div className="max-w-lg">
        <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-cyan-300">404 · Page not found</p>
        <h1 className="text-4xl font-black text-slate-50">That page is off the map.</h1>
        <p className="mt-4 text-slate-300">The page may have moved or the address may be incorrect.</p>
        <a href="/" className="mt-7 inline-flex rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 font-semibold text-white">Back to home</a>
      </div>
    </main>
  );
}

function SocialLinks({ compact = false }) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {socialLinks.map(({ label, href }) => {
        const Icon = socialIconMap[label] || Globe;
        return (
          <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label}
            className={compact ? 'inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300' : 'inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300'}>
            <Icon size={16} />{!compact && label}
          </a>
        );
      })}
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'dark');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects = useMemo(() => activeFilter === 'All' ? projects : projects.filter((item) => item.category === activeFilter), [activeFilter]);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  if (window.location.pathname !== '/' && window.location.pathname !== '/index.html') return <NotFoundPage />;

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3" aria-label="Damien Tuyizere home">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-black text-white">DT</span>
            <span><span className="block text-sm font-bold tracking-wide text-slate-100">DAMIEN TUYIZERE</span><span className="block text-[10px] uppercase tracking-[0.2em] text-slate-400">Full-Stack Developer</span></span>
          </a>
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {navigation.map((item) => <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">{item.label}</a>)}
          </nav>
          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle theme={theme} onToggle={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
            <a href="#contact" className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white">Let’s talk</a>
          </div>
          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle theme={theme} onToggle={() => setTheme((value) => value === 'dark' ? 'light' : 'dark')} />
            <button type="button" onClick={() => setMobileOpen((value) => !value)} aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={mobileOpen} className="rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-100">{mobileOpen ? <X size={18} /> : <Menu size={18} />}</button>
          </div>
        </div>
        {mobileOpen && <nav className="border-t border-white/10 px-4 py-4 lg:hidden" aria-label="Mobile navigation"><div className="mx-auto flex max-w-7xl flex-col gap-2">{navigation.map((item) => <a key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="rounded-xl bg-white/5 px-3 py-2.5 text-sm text-slate-200">{item.label}</a>)}</div></nav>}
      </header>

      <main>
        <section id="home" className="relative scroll-mt-24 overflow-hidden px-4 pb-24 pt-16 sm:px-6 sm:pt-24 lg:px-8">
          <div className="pointer-events-none absolute inset-0 bg-hero-glow" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300"><Sparkles size={14} />Developer based in {profile.location}</div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-slate-400">Hello, I’m</p>
              <h1 className="max-w-3xl text-4xl font-black tracking-tight text-slate-50 sm:text-6xl lg:text-7xl">{profile.name.split(' ').map((word, index) => <span key={word} className={index === 0 ? 'block' : 'block bg-gradient-to-r from-cyan-300 via-indigo-400 to-violet-400 bg-clip-text text-transparent'}>{word}</span>)}</h1>
              <p className="mt-5 text-xl font-semibold text-indigo-300 sm:text-2xl">{profile.title}</p>
              <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a href="/cv.pdf" download className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:brightness-110"><ArrowDown size={16} />Download CV</a>
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300">View projects<ArrowRight size={16} /></a>
              </div>
              <div className="mt-8"><SocialLinks compact /></div>
            </div>
            <div className="reveal flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md"><div className="absolute inset-8 rounded-full bg-indigo-500/20 blur-3xl" /><div className="relative rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-soft backdrop-blur-sm"><img src={avatar} alt="Stylized DT profile artwork; replace with a personal photo" className="w-full rounded-[1.4rem]" /></div><div className="absolute -bottom-5 -left-3 rounded-2xl border border-white/10 bg-slate-900/90 px-4 py-3 shadow-soft"><p className="text-xs uppercase tracking-widest text-slate-400">Based in</p><p className="mt-1 flex items-center gap-2 font-semibold text-slate-100"><MapPin size={15} className="text-cyan-300" />{profile.location}</p></div></div>
            </div>
          </div>
        </section>

        <section id="about" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="About me" title="Building useful experiences with thoughtful code" description="A little about my interests, approach, and direction as a developer." /><div className="grid items-center gap-10 lg:grid-cols-[0.75fr_1.25fr]"><div className="reveal rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-soft"><img src={avatar} alt="Damien Tuyizere profile artwork" className="w-full rounded-[1.5rem]" /></div><div className="reveal space-y-5">{aboutSections.map((paragraph) => <p key={paragraph} className="text-base leading-8 text-slate-300 sm:text-lg">{paragraph}</p>)}<div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 p-4 text-slate-200"><MapPin size={18} className="text-cyan-300" /><span>Based in {profile.location}</span></div></div></div></div></section>

        <section id="skills" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="My skills" title="Tools for turning ideas into web applications" description="Technologies and tools I work with across the frontend, backend, data, and development workflow." /><div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">{Object.entries(skillGroups).map(([category, skills]) => <div key={category} className="reveal"><SkillCard title={category} skills={skills} /></div>)}</div></div></section>

        <section id="projects" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Selected work" title="Projects built around practical needs" description="Explore a selection of web projects. Repository links are included when the matching public repository is known." /><div className="mb-8 flex flex-wrap justify-center gap-3" role="group" aria-label="Filter projects">{filterOptions.map((option) => <button key={option} type="button" aria-pressed={activeFilter === option} onClick={() => setActiveFilter(option)} className={`rounded-full px-4 py-2 text-sm font-medium transition ${activeFilter === option ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white' : 'border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300'}`}>{option}</button>)}</div><div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">{filteredProjects.map((project) => <div key={project.title} className="reveal"><ProjectCard project={project} /></div>)}</div></div></section>

        <section id="services" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Services" title="Thoughtful web development, end to end" description="From polished interfaces to reliable application foundations, focused on what your users need." /><div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">{services.map((service) => <article key={service} className="reveal rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft"><span className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-cyan-300"><Sparkles size={19} /></span><h3 className="text-lg font-semibold text-slate-50">{service}</h3><p className="mt-3 text-sm leading-7 text-slate-300">Let’s discuss your requirements and shape a practical solution around them.</p></article>)}</div></div></section>

        <section id="education" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Education" title="Learning and development" description="Education details will be added here when they are provided." />{education.length > 0 ? <div className="space-y-5">{education.map((item) => <article key={`${item.school}-${item.degree}`} className="reveal rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft"><h3 className="text-xl font-semibold text-slate-50">{item.degree}</h3><p className="mt-1 text-cyan-300">{item.school}</p><p className="mt-4 text-slate-300">{item.description}</p></article>)}</div> : <p className="mx-auto max-w-xl rounded-2xl border border-dashed border-white/15 bg-white/[0.03] p-6 text-center text-sm text-slate-400">Education history has not been published yet.</p>}</div></section>

        <section id="contact" className="scroll-mt-24 px-4 py-20 sm:px-6 lg:px-8"><div className="mx-auto max-w-7xl"><SectionTitle eyebrow="Contact" title="Have a project or opportunity in mind?" description="Send a message using the form. Email delivery becomes active after EmailJS is configured." /><div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]"><aside className="reveal space-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft"><div><p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">Get in touch</p><h3 className="mt-3 text-2xl font-bold text-slate-50">Let’s connect</h3><p className="mt-3 leading-7 text-slate-300">Use the contact form and I’ll get back to you.</p></div><div className="flex items-center gap-3 text-slate-300"><MapPin size={18} className="text-cyan-300" />{profile.location}</div><SocialLinks /></aside><div className="reveal"><ContactForm /></div></div></div></section>
      </main>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8"><div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between"><div><p className="font-bold text-slate-50">{profile.name}</p><p className="mt-1 text-sm text-slate-400">{profile.title}</p></div><nav className="flex flex-wrap gap-x-5 gap-y-3 text-sm text-slate-300" aria-label="Footer navigation">{navigation.map((item) => <a key={item.href} href={item.href} className="hover:text-cyan-300">{item.label}</a>)}</nav><SocialLinks compact /></div><div className="mx-auto mt-7 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row"><p>© {new Date().getFullYear()} {profile.name}. All rights reserved.</p><a href="#home" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-200 hover:text-cyan-300"><ArrowUpRight size={15} />Back to top</a></div></footer>
    </div>
  );
}
