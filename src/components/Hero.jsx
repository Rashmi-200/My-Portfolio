import { Mail, ArrowDown, Download, ExternalLink } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon, KaggleIcon } from './SocialIcons';
import { personal } from '../data';
import { useTheme } from '../context/ThemeContext';

const SOCIAL = [
  { icon: GithubIcon,   href: personal.github,                 label: 'GitHub' },
  { icon: LinkedinIcon, href: personal.linkedin,                label: 'LinkedIn' },
  { icon: Mail,         href: `mailto:${personal.email}`,       label: 'Email' },
  { icon: KaggleIcon,   href: personal.kaggle,                  label: 'Kaggle' },
  { icon: TwitterIcon,  href: personal.twitter,                 label: 'Twitter' },
];

export default function Hero() {
  const { dark } = useTheme();

  return (
    <section
      id="hero"
      className={`
        relative min-h-screen flex flex-col items-center justify-center
        px-6 pt-20 pb-12 overflow-hidden
        ${dark ? 'bg-[#0a0f1a]' : 'bg-slate-50'}
      `}
    >
      {/* Background grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: dark
            ? 'radial-gradient(circle at 60% 40%, rgba(16,185,129,0.07) 0%, transparent 60%), radial-gradient(circle at 20% 80%, rgba(99,102,241,0.05) 0%, transparent 50%)'
            : 'radial-gradient(circle at 60% 40%, rgba(16,185,129,0.05) 0%, transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(${dark ? '#10b981' : '#10b981'} 1px, transparent 1px), linear-gradient(90deg, ${dark ? '#10b981' : '#10b981'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Avatar */}
      {/* TODO: replace placeholder — add /public/profile.jpg and set personal.avatarUrl */}
      <div className="relative mb-8 animate-fade-up" style={{ animationDelay: '0.1s' }}>
        {personal.avatarUrl ? (
          <img
            src={personal.avatarUrl}
            alt={personal.name}
            className="w-28 h-28 rounded-full object-cover border-2 border-accent glow-accent animate-float"
          />
        ) : (
          <div
            className={`
              w-28 h-28 rounded-full border-2 border-accent glow-accent animate-float
              flex items-center justify-center font-display font-bold text-3xl
              ${dark ? 'bg-[#1a2234] text-accent' : 'bg-emerald-50 text-accent'}
            `}
          >
            {/* Shows initials until you add a photo */}
            {personal.name.split(' ').map(n => n[0]).join('')}
          </div>
        )}
        {/* Online indicator */}
        <span className="absolute bottom-1 right-1 w-4 h-4 bg-accent rounded-full border-2 border-[#0a0f1a]" style={{ animation: 'pulse-ring 2s infinite' }} />
      </div>

      {/* Name + tagline */}
      <div className="text-center max-w-2xl animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <h1 className={`font-display font-bold text-4xl sm:text-5xl lg:text-6xl mb-3 ${dark ? 'text-white' : 'text-slate-900'}`}>
          {personal.name}
        </h1>
        <p className="gradient-text font-display font-semibold text-lg sm:text-xl mb-6 tracking-wide">
          {personal.tagline}
        </p>

        {/* Intro lines */}
        <div className={`space-y-1.5 text-base sm:text-lg leading-relaxed mb-10 ${dark ? 'text-slate-400' : 'text-slate-600'}`}>
          {personal.intro.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>

        {/* CTA buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 px-7 py-3 bg-accent hover:bg-emerald-400 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 hover:-translate-y-0.5 active:translate-y-0 text-sm"
          >
            View Projects
            <ExternalLink size={15} />
          </a>
          <a
            href={personal.resumeUrl}
            download
            className={`
              inline-flex items-center gap-2 px-7 py-3 font-semibold rounded-xl text-sm
              border transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0
              ${dark
                ? 'border-slate-600 text-slate-300 hover:border-accent hover:text-accent bg-white/5'
                : 'border-slate-300 text-slate-700 hover:border-accent hover:text-accent bg-white'
              }
            `}
          >
            <Download size={15} />
            Download Resume
            {/* TODO: replace placeholder — add /public/resume.pdf */}
          </a>
        </div>

        {/* Social icons */}
        <div className="flex justify-center gap-4">
          {SOCIAL.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className={`
                p-2.5 rounded-lg border transition-all duration-200 hover:-translate-y-0.5
                ${dark
                  ? 'border-slate-700 text-slate-400 hover:border-accent hover:text-accent bg-white/5'
                  : 'border-slate-200 text-slate-500 hover:border-accent hover:text-accent bg-white'
                }
              `}
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll nudge */}
      <a
        href="#about"
        aria-label="Scroll to About"
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 transition-opacity duration-300 hover:opacity-100 opacity-50 ${dark ? 'text-slate-500' : 'text-slate-400'}`}
      >
        <span className="text-xs tracking-widest uppercase font-medium">scroll</span>
        <ArrowDown size={16} className="animate-bounce" />
      </a>
    </section>
  );
}
