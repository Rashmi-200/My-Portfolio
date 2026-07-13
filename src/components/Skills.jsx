import { skills } from '../data';
import { useTheme } from '../context/ThemeContext';

// Category accent colours (cycles through these per category)
const CATEGORY_COLORS = [
  { bg: 'bg-accent/10',      text: 'text-accent',      border: 'border-accent/20',      dot: 'bg-accent'       },
  { bg: 'bg-violet-500/10',  text: 'text-violet-400',  border: 'border-violet-500/20',  dot: 'bg-violet-400'   },
  { bg: 'bg-amber-500/10',   text: 'text-amber-400',   border: 'border-amber-500/20',   dot: 'bg-amber-400'    },
  { bg: 'bg-sky-500/10',     text: 'text-sky-400',     border: 'border-sky-500/20',     dot: 'bg-sky-400'      },
];

export default function Skills() {
  const { dark } = useTheme();

  const surface = dark ? 'bg-[#111827] border-[#1e2d40]' : 'bg-white border-slate-200';
  const muted   = dark ? 'text-slate-400' : 'text-slate-500';
  const head    = dark ? 'text-white' : 'text-slate-900';
  const badge   = dark ? 'bg-[#1a2234] border-[#232e42]' : 'bg-slate-50 border-slate-200';

  return (
    <section
      id="skills"
      className={`py-24 px-6 ${dark ? 'bg-[#111827]' : 'bg-white'}`}
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading */}
        <div className="reveal mb-14 text-center">
          <span className={`text-xs font-semibold tracking-widest uppercase ${muted} mb-2 block`}>What I work with</span>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${head}`}>Skills</h2>
          <div className="mx-auto mt-3 w-12 h-0.5 bg-accent rounded-full" />
        </div>

        {/* Skill groups grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, gi) => {
            const colors = CATEGORY_COLORS[gi % CATEGORY_COLORS.length];
            return (
              <div
                key={group.category}
                className={`reveal border rounded-2xl p-6 ${surface} hover:border-accent/30 transition-colors duration-300`}
                style={{ animationDelay: `${gi * 0.08}s` }}
              >
                {/* Category label */}
                <div className="flex items-center gap-2.5 mb-5">
                  <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                  <h3 className={`font-display font-semibold text-sm tracking-wide ${head}`}>
                    {group.category}
                  </h3>
                </div>

                {/* Badge cloud */}
                <div className="flex flex-wrap gap-2">
                  {group.items.map(skill => (
                    <span
                      key={skill}
                      className={`
                        skill-badge border
                        ${dark
                          ? `${colors.bg} ${colors.text} ${colors.border} hover:brightness-110`
                          : `${badge} text-slate-600 border-slate-200 hover:border-accent/40 hover:text-accent`
                        }
                      `}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
