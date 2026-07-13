import { useState } from 'react';
import { X, ExternalLink, ChevronRight, Star } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data';
import { useTheme } from '../context/ThemeContext';

/* ── Project Modal ──────────────────────────────────────────── */
function ProjectModal({ project, onClose }) {
  const { dark } = useTheme();
  const surface = dark ? 'bg-[#111827]' : 'bg-white';
  const overlay = 'fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8';
  const muted   = dark ? 'text-slate-400' : 'text-slate-500';
  const text    = dark ? 'text-slate-300' : 'text-slate-700';
  const head    = dark ? 'text-white' : 'text-slate-900';

  return (
    <div className={overlay} onClick={onClose} role="dialog" aria-modal="true" aria-label={project.title}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <div
        className={`relative z-10 w-full max-w-2xl rounded-2xl border shadow-2xl overflow-y-auto max-h-[90vh]
          ${surface} ${dark ? 'border-[#1e2d40]' : 'border-slate-200'}`}
        onClick={e => e.stopPropagation()}
      >
        {/* Cover image */}
        {project.image && (
          <div className="w-full h-48 overflow-hidden rounded-t-2xl">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>
        )}
        {!project.image && (
          <div className="w-full h-32 rounded-t-2xl bg-gradient-to-br from-accent/20 to-violet-500/20 flex items-center justify-center">
            <span className="text-4xl">🔬</span>
          </div>
        )}

        <div className="p-7">
          {/* Close */}
          <button
            onClick={onClose}
            className={`absolute top-4 right-4 p-1.5 rounded-lg ${dark ? 'text-slate-500 hover:text-white hover:bg-white/10' : 'text-slate-400 hover:text-slate-900 hover:bg-slate-100'} transition-all`}
          >
            <X size={18} />
          </button>

          <h3 className={`font-display font-bold text-2xl mb-1 ${head}`}>{project.title}</h3>
          <p className={`text-sm mb-4 ${muted}`}>{project.tagline}</p>

          {/* Tech tags */}
          <div className="flex flex-wrap gap-1.5 mb-6">
            {project.techStack.map(t => (
              <span key={t} className="text-xs px-2.5 py-1 rounded-full bg-accent/10 text-accent border border-accent/20 font-medium">
                {t}
              </span>
            ))}
          </div>

          {/* Sections */}
          {[
            { label: 'Problem & Approach', content: project.description },
            { label: 'Result / Impact',    content: project.result },
            { label: 'Key Learnings',      content: project.learnings },
          ].map(({ label, content }) => content && (
            <div key={label} className="mb-5">
              <h4 className={`text-xs font-bold tracking-widest uppercase mb-2 ${muted}`}>{label}</h4>
              <p className={`${text} text-[0.9375rem] leading-relaxed`}>{content}</p>
            </div>
          ))}

          {/* Action buttons */}
          <div className="flex gap-3 pt-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold
                  border transition-all hover:-translate-y-0.5
                  ${dark ? 'border-slate-600 text-slate-300 hover:border-accent hover:text-accent bg-white/5' : 'border-slate-200 text-slate-700 hover:border-accent hover:text-accent'}
                `}
              >
                <GithubIcon size={15} /> GitHub
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-accent hover:bg-emerald-400 text-white transition-all hover:-translate-y-0.5 shadow-lg shadow-emerald-500/20"
              >
                <ExternalLink size={15} /> Live Demo
                {/* TODO: replace placeholder — Streamlit / Gradio / HF Spaces URL */}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── Project Card ───────────────────────────────────────────── */
function ProjectCard({ project, onClick }) {
  const { dark } = useTheme();
  const surface = dark ? 'bg-[#111827] border-[#1e2d40]' : 'bg-white border-slate-200';
  const muted   = dark ? 'text-slate-400' : 'text-slate-500';
  const text    = dark ? 'text-slate-300' : 'text-slate-600';
  const head    = dark ? 'text-white' : 'text-slate-900';

  return (
    <article
      className={`
        group relative flex flex-col border rounded-2xl overflow-hidden cursor-pointer
        transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-accent/40
        ${surface}
        ${dark ? 'hover:shadow-accent/5' : 'hover:shadow-slate-200'}
      `}
      onClick={onClick}
    >
      {/* Cover */}
      {project.image ? (
        <div className="h-44 overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      ) : (
        <div className="h-36 bg-gradient-to-br from-accent/15 via-emerald-500/5 to-violet-500/10 flex items-center justify-center border-b border-inherit">
          <span className="text-5xl opacity-70">
            {/* Icon emoji per project (cycle) */}
            {['🧮','🤖','📈','💬','🫀'][projects.indexOf(project) % 5]}
          </span>
        </div>
      )}

      <div className="flex flex-col flex-1 p-5">
        {/* Featured badge */}
        {project.featured && (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-amber-400 mb-2">
            <Star size={10} fill="currentColor" /> Featured
          </span>
        )}

        <h3 className={`font-display font-semibold text-base mb-1 group-hover:text-accent transition-colors ${head}`}>
          {project.title}
        </h3>
        <p className={`text-xs mb-3 ${muted}`}>{project.tagline}</p>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.techStack.slice(0, 4).map(t => (
            <span key={t} className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${dark ? 'bg-white/5 text-slate-400 border border-white/10' : 'bg-slate-100 text-slate-500 border border-slate-200'}`}>
              {t}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className={`text-[11px] px-2 py-0.5 rounded-full font-medium ${dark ? 'bg-white/5 text-slate-500' : 'bg-slate-100 text-slate-400'}`}>
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Result line */}
        <p className={`text-xs leading-relaxed flex-1 ${text}`}>{project.description.slice(0, 120)}…</p>

        {/* Footer links */}
        <div className="flex items-center justify-between mt-5 pt-4 border-t border-inherit">
          <div className="flex gap-3">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                aria-label="GitHub repo"
                className={`${muted} hover:text-accent transition-colors`}
              >
                <GithubIcon size={16} />
              </a>
            )}
            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                onClick={e => e.stopPropagation()}
                aria-label="Live demo"
                className={`${muted} hover:text-accent transition-colors`}
              >
                <ExternalLink size={16} />
              </a>
            )}
          </div>
          <span className={`inline-flex items-center gap-1 text-xs font-medium ${muted} group-hover:text-accent transition-colors`}>
            Details <ChevronRight size={13} />
          </span>
        </div>
      </div>
    </article>
  );
}

/* ── Projects Section ───────────────────────────────────────── */
export default function Projects() {
  const { dark } = useTheme();
  const [selected, setSelected] = useState(null);

  const muted = dark ? 'text-slate-400' : 'text-slate-500';
  const head  = dark ? 'text-white' : 'text-slate-900';

  return (
    <section
      id="projects"
      className={`py-24 px-6 ${dark ? 'bg-[#0a0f1a]' : 'bg-slate-50'}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="reveal mb-14 text-center">
          <span className={`text-xs font-semibold tracking-widest uppercase ${muted} mb-2 block`}>Things I've built</span>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${head}`}>Projects</h2>
          <div className="mx-auto mt-3 w-12 h-0.5 bg-accent rounded-full" />
        </div>

        {/* Card grid — data-driven from projects array in data.js */}
        {/* TODO: add new project objects to the `projects` array in data.js to add cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <div key={project.id} className="reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <ProjectCard project={project} onClick={() => setSelected(project)} />
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && <ProjectModal project={selected} onClose={() => setSelected(null)} />}
    </section>
  );
}
