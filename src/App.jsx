import { ArrowUp, Download, Github, Linkedin, Mail, MapPin, Menu, MessageCircle, Moon, Phone, Sparkles, Sun, X, Globe } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { profile, socialLinks, stats, aboutSections, skillGroups, projects, services, education, navigation, highlightSkills } from '../data/portfolioData';
import ThemeToggle from './ThemeToggle';
import SectionTitle from './SectionTitle';
import SkillCard from './SkillCard';
import ProjectCard from './ProjectCard';
import ContactForm from './ContactForm';
import avatar from '../assets/profile-avatar.svg';

const socialIconMap = {
  GitHub: Github,
  LinkedIn: Linkedin,
  WhatsApp: MessageCircle,
  Facebook: Globe,
};

const filterOptions = ['All', 'Web App', 'Platform', 'Management', 'E-commerce'];

function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[var(--bg)] px-6 text-center text-slate-100">
      <div className="max-w-lg">
        <div className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
          404
        </div>
        <h1 className="text-4xl font-bold">Page not found</h1>
        <p className="mt-4 text-lg text-slate-300">The page you are looking for does not exist or has moved.</p>
        <a href="/" className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3 font-semibold text-white">
          Back Home
        </a>
      </div>
    </div>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    return savedTheme || 'dark';
  });
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return projects;
    return projects.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';
  if (currentPath !== '/' && currentPath !== '/index.html') {
    return <NotFoundPage />;
  }

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <header className="sticky top-0 z-50 border-b border-white/10 bg-[var(--bg)]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a href="#home" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-500 text-lg font-black text-white shadow-soft">
              DT
            </div>
            <div>
              <div className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-200">Damien</div>
              <div className="text-[10px] uppercase tracking-[0.25em] text-slate-400">Developer</div>
            </div>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="text-sm font-medium text-slate-300 transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <ThemeToggle theme={theme} onToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
            <a href="#contact" className="rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-110">
              Let’s Talk
            </a>
          </div>

          <div className="flex items-center gap-3 lg:hidden">
            <ThemeToggle theme={theme} onToggle={() => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))} />
            <button
              type="button"
              onClick={() => setMobileOpen((prev) => !prev)}
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2.5 text-slate-100"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="border-t border-white/10 bg-[var(--bg)] px-4 py-4 lg:hidden">
            <div className="flex flex-col gap-3">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200"
                >
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={() => setMobileOpen(false)} className="mt-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-4 py-2 text-center text-sm font-semibold text-white">
                Let’s Talk
              </a>
            </div>
          </div>
        )}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden px-4 pb-20 pt-14 sm:px-6 lg:px-8">
          <div className="absolute inset-0 bg-hero-glow" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="reveal">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-cyan-300">
                <Sparkles size={12} />
                Available for work
              </div>

              <h1 className="max-w-2xl text-4xl font-black tracking-tight text-slate-50 sm:text-5xl lg:text-7xl">
                Hello, I’m <span className="bg-gradient-to-r from-cyan-300 via-indigo-400 to-violet-500 bg-clip-text text-transparent">{profile.name.split(' ').slice(-1)[0]}</span>
              </h1>

              <p className="mt-5 text-xl font-medium text-indigo-300">{profile.title}</p>
              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">{profile.intro}</p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href="/cv.pdf" download className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 px-5 py-3.5 text-sm font-semibold text-white shadow-soft transition hover:brightness-110">
                  <Download size={16} />
                  Download CV
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-3.5 text-sm font-semibold text-slate-100 transition hover:border-cyan-400/60 hover:text-cyan-300">
                  View Projects
                </a>
              </div>

              <div className="mt-8 flex items-center gap-5">
                {socialLinks.slice(0, 4).map(({ label, href, icon }) => {
                  const Icon = icon === 'WhatsApp' ? MessageCircle : icon === 'Facebook' ? Globe : icon;
                  return (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={label}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                    >
                      <Icon size={18} />
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="reveal flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md">
                <div className="absolute inset-8 rounded-full bg-indigo-500/20 blur-3xl" />
                <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-4 shadow-soft backdrop-blur-sm">
                  <img src={avatar} alt="Damien Tuyizere profile illustration" className="w-full rounded-[1.4rem] object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((item, index) => (
              <div key={item.label} className="reveal rounded-3xl border border-white/10 bg-slate-900/70 p-6 text-center shadow-soft backdrop-blur-sm">
                <div className="text-3xl font-black text-white">{item.value}</div>
                <div className="mt-2 text-sm text-slate-300">{item.label}</div>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="About Me"
              title="A developer who builds with purpose and precision"
              description="I turn ideas into polished digital experiences that feel modern, useful, and memorable."
            />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
              <div className="reveal overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/70 p-3 shadow-soft">
                <img src={avatar} alt="About Damien Tuyizere" className="w-full rounded-[1.5rem] object-cover" />
              </div>

              <div className="reveal space-y-6">
                {aboutSections.map((paragraph) => (
                  <p key={paragraph} className="text-base leading-8 text-slate-300 sm:text-lg">
                    {paragraph}
                  </p>
                ))}

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center gap-3 text-cyan-300">
                      <MapPin size={18} />
                      <span className="font-medium text-slate-100">Location</span>
                    </div>
                    <p className="text-slate-300">{profile.location}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="mb-3 flex items-center gap-3 text-cyan-300">
                      <Mail size={18} />
                      <span className="font-medium text-slate-100">Email</span>
                    </div>
                    <p className="text-slate-300">{profile.email}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="My Skills"
              title="Modern tools, clean code, and practical problem-solving"
              description="I build interfaces and systems with a strong emphasis on performance, maintainability, and user experience."
            />

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {Object.entries(skillGroups).map(([category, skills]) => (
                <div key={category} className="reveal">
                  <SkillCard title={category} skills={skills} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="My Projects"
              title="Selected work that reflects my problem-solving mindset"
              description="These projects demonstrate my ability to build practical, modern web experiences from idea to deployment."
            />

            <div className="mb-8 flex flex-wrap justify-center gap-3">
              {filterOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => setActiveFilter(option)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                    activeFilter === option
                      ? 'bg-gradient-to-r from-indigo-500 to-violet-500 text-white'
                      : 'border border-white/10 bg-white/5 text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>

            <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {filteredProjects.map((project) => (
                <div key={project.title} className="reveal">
                  <ProjectCard project={project} />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="My Services"
              title="Web solutions designed for businesses and modern teams"
              description="I help create digital products that are functional, scalable, and built around real user needs."
            />

            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service} className="reveal rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-500/20 to-violet-500/20 text-cyan-300">
                    <Sparkles size={18} />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-50">{service}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">Creating reliable digital experiences that support growth, clarity, and product quality.</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="education" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Education"
              title="Academic foundation and continuous growth"
              description="My learning journey is shaped by curiosity, technical discipline, and practical problem solving."
            />

            <div className="space-y-6">
              {education.map((item) => (
                <div key={item.degree} className="reveal rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50">{item.degree}</h3>
                      <p className="mt-1 text-cyan-300">{item.school}</p>
                    </div>
                    <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium uppercase tracking-[0.2em] text-slate-200">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-4 text-base leading-7 text-slate-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="px-4 pb-20 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionTitle
              eyebrow="Contact Me"
              title="Let’s build something meaningful together"
              description="I’m open to project opportunities, collaborations, and conversations about digital experiences."
            />

            <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="reveal space-y-6 rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-soft">
                <div>
                  <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-300">Contact Info</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-50">Damien Tuyizere</h3>
                </div>

                <div className="space-y-4 text-slate-300">
                  <div className="flex items-center gap-3">
                    <Mail size={18} className="text-cyan-300" />
                    <span>{profile.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-cyan-300" />
                    <span>{profile.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-cyan-300" />
                    <span>{profile.location}</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {socialLinks.map(({ label, href, icon }) => {
                    const Icon = socialIconMap[label] || Globe;
                    return (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-sm text-slate-200 hover:border-cyan-400/60 hover:text-cyan-300"
                      >
                        <Icon size={16} />
                        {label}
                      </a>
                    );
                  })}
                </div>
              </div>

              <div className="reveal">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 px-4 py-10 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="text-lg font-bold text-slate-50">TUYIZERE DAMIEN</div>
            <div className="mt-1 text-sm text-slate-400">Full-Stack Web Developer</div>
          </div>

          <nav className="flex flex-wrap items-center gap-5 text-sm text-slate-300">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-cyan-300">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            {socialLinks.slice(0, 4).map(({ label, href, icon }) => {
              const Icon = socialIconMap[label] || Globe;
              return (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-400/60 hover:text-cyan-300"
                >
                  <Icon size={16} />
                </a>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-6 flex max-w-7xl flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-sm text-slate-400 sm:flex-row">
          <p>© 2025 Damien Tuyizere. All rights reserved.</p>
          <a href="#home" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-slate-200 transition hover:text-cyan-300">
            <ArrowUp size={16} />
            Back to top
          </a>
        </div>
      </footer>
    </div>
  );
}
