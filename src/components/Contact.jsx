import { useState } from 'react';
import { Mail, Send, CircleCheck } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal } from '../data';
import { useTheme } from '../context/ThemeContext';

export default function Contact() {
  const { dark } = useTheme();
  const [form, setForm]       = useState({ name: '', email: '', message: '' });
  const [sent, setSent]       = useState(false);
  const [loading, setLoading] = useState(false);

  const surface = dark ? 'bg-[#111827] border-[#1e2d40]' : 'bg-white border-slate-200';
  const input   = dark ? 'bg-[#1a2234] border-[#232e42] text-slate-200 placeholder:text-slate-600 focus:border-accent' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder:text-slate-400 focus:border-accent';
  const muted   = dark ? 'text-slate-400' : 'text-slate-500';
  const head    = dark ? 'text-white' : 'text-slate-900';
  const label   = dark ? 'text-slate-400' : 'text-slate-600';

  // TODO: wire up real form submission (e.g. Formspree, Netlify Forms, EmailJS)
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 1200); // fake submit
  };

  const LINKS = [
    { icon: Mail,         href: `mailto:${personal.email}`, label: personal.email, display: personal.email },
    { icon: LinkedinIcon, href: personal.linkedin,           label: 'LinkedIn',    display: 'linkedin.com/in/yourusername' },
    { icon: GithubIcon,   href: personal.github,             label: 'GitHub',      display: 'github.com/yourusername' },
  ];

  return (
    <section
      id="contact"
      className={`py-24 px-6 ${dark ? 'bg-[#111827]' : 'bg-white'}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <div className="reveal mb-14 text-center">
          <span className={`text-xs font-semibold tracking-widest uppercase ${muted} mb-2 block`}>Let's connect</span>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${head}`}>Get In Touch</h2>
          <div className="mx-auto mt-3 w-12 h-0.5 bg-accent rounded-full" />
          <p className={`mt-4 text-[0.9375rem] max-w-md mx-auto ${muted}`}>
            Whether you have a project idea, collaboration proposal, or just want to say hi — my inbox is open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact links */}
          <div className="reveal space-y-4">
            <h3 className={`font-display font-semibold text-base mb-5 ${head}`}>Reach me directly</h3>
            {LINKS.map(({ icon: Icon, href, label: lbl, display }) => (
              <a
                key={lbl}
                href={href}
                target={href.startsWith('mailto') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className={`
                  flex items-center gap-4 p-4 border rounded-xl group
                  hover:border-accent/40 transition-all duration-200 hover:-translate-y-0.5
                  ${surface}
                `}
              >
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0">
                  <Icon size={18} />
                </div>
                <div>
                  <p className={`text-xs ${muted} mb-0.5`}>{lbl}</p>
                  <p className={`text-sm font-medium group-hover:text-accent transition-colors ${head}`}>{display}</p>
                  {/* TODO: replace placeholder — update display text to match your real handles */}
                </div>
              </a>
            ))}
          </div>

          {/* Contact form */}
          {/* TODO: wire up form backend (Formspree / Netlify Forms / EmailJS) */}
          <div className={`reveal border rounded-2xl p-6 ${surface}`}>
            {sent ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-8 gap-4">
                <CircleCheck size={40} className="text-accent" />
                <p className={`font-semibold ${head}`}>Message sent!</p>
                <p className={`text-sm ${muted}`}>Thanks for reaching out — I'll get back to you soon.</p>
                <button onClick={() => { setSent(false); setForm({ name: '', email: '', message: '' }); }} className={`text-sm ${muted} hover:text-accent underline transition-colors`}>
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${label}`}>Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className={`w-full px-4 py-2.5 border rounded-xl text-sm outline-none transition-colors ${input}`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${label}`}>Email</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className={`w-full px-4 py-2.5 border rounded-xl text-sm outline-none transition-colors ${input}`}
                  />
                </div>
                <div>
                  <label className={`block text-xs font-medium mb-1.5 ${label}`}>Message</label>
                  <textarea
                    required
                    rows={5}
                    placeholder="What's on your mind?"
                    value={form.message}
                    onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                    className={`w-full px-4 py-2.5 border rounded-xl text-sm outline-none transition-colors resize-none ${input}`}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent hover:bg-emerald-400 disabled:opacity-60 text-white font-semibold rounded-xl transition-all text-sm shadow-lg shadow-emerald-500/25"
                >
                  {loading ? (
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  ) : (
                    <><Send size={15} /> Send Message</>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
