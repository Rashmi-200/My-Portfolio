import { ExternalLink, Award, Trophy } from 'lucide-react';
import { achievements } from '../data';
import { useTheme } from '../context/ThemeContext';

const TYPE_STYLES = {
  certification: {
    icon: Award,
    bg:   'bg-accent/10',
    text: 'text-accent',
    dot:  'bg-accent',
  },
  achievement: {
    icon: Trophy,
    bg:   'bg-amber-500/10',
    text: 'text-amber-400',
    dot:  'bg-amber-400',
  },
};

export default function Achievements() {
  const { dark } = useTheme();

  const surface  = dark ? 'bg-[#111827] border-[#1e2d40]' : 'bg-white border-slate-200';
  const muted    = dark ? 'text-slate-500' : 'text-slate-400';
  const text     = dark ? 'text-slate-300' : 'text-slate-600';
  const head     = dark ? 'text-white' : 'text-slate-900';
  const timeHead = dark ? 'text-slate-400' : 'text-slate-500';
  const line     = dark ? 'bg-[#1e2d40]' : 'bg-slate-200';

  return (
    <section
      id="achievements"
      className={`py-24 px-6 ${dark ? 'bg-[#111827]' : 'bg-white'}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="reveal mb-14 text-center">
          <span className={`text-xs font-semibold tracking-widest uppercase ${muted} mb-2 block`}>Track record</span>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${head}`}>Achievements &amp; Certifications</h2>
          <div className="mx-auto mt-3 w-12 h-0.5 bg-accent rounded-full" />
        </div>

        {/* Timeline */}
        {/* TODO: add new objects to `achievements` array in data.js to add entries */}
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-[27px] top-2 bottom-2 w-px ${line}`} aria-hidden />

          <div className="space-y-6">
            {achievements.map((item, i) => {
              const styles = TYPE_STYLES[item.type] || TYPE_STYLES.certification;
              const Icon = styles.icon;
              return (
                <div
                  key={item.id}
                  className="reveal flex gap-5 items-start"
                  style={{ transitionDelay: `${i * 0.08}s` }}
                >
                  {/* Timeline dot */}
                  <div className={`relative z-10 flex items-center justify-center w-14 h-14 rounded-2xl shrink-0 border ${styles.bg} ${dark ? 'border-[#1e2d40]' : 'border-slate-200'}`}>
                    <Icon size={20} className={styles.text} />
                  </div>

                  {/* Card */}
                  <div className={`flex-1 border rounded-2xl p-5 ${surface} hover:border-accent/30 transition-colors duration-300`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <p className={`font-semibold text-sm leading-snug mb-1 ${head}`}>{item.title}</p>
                        <p className={`text-xs ${timeHead}`}>{item.issuer}</p>
                      </div>
                      <div className="flex items-center gap-2.5 shrink-0">
                        <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${dark ? 'bg-white/5 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                          {item.date}
                        </span>
                        {item.credentialUrl && (
                          <a
                            href={item.credentialUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Verify ${item.title}`}
                            className={`${muted} hover:text-accent transition-colors`}
                          >
                            {/* TODO: replace placeholder — credential URL */}
                            <ExternalLink size={14} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
