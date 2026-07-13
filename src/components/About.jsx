import { GraduationCap, Compass } from 'lucide-react';
import { about } from '../data';
import { useTheme } from '../context/ThemeContext';

export default function About() {
  const { dark } = useTheme();

  const surface = dark ? 'bg-[#111827] border-[#1e2d40]' : 'bg-white border-slate-200';
  const muted   = dark ? 'text-slate-400' : 'text-slate-500';
  const text    = dark ? 'text-slate-300' : 'text-slate-700';
  const head    = dark ? 'text-white' : 'text-slate-900';

  return (
    <section
      id="about"
      className={`py-24 px-6 ${dark ? 'bg-[#0a0f1a]' : 'bg-slate-50'}`}
    >
      <div className="max-w-4xl mx-auto">
        {/* Section heading */}
        <div className="reveal mb-14 text-center">
          <span className={`text-xs font-semibold tracking-widest uppercase ${muted} mb-2 block`}>Get to know me</span>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${head}`}>About Me</h2>
          <div className="mx-auto mt-3 w-12 h-0.5 bg-accent rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Bio */}
          <div className="reveal">
            <h3 className={`font-display font-semibold text-lg mb-4 ${head}`}>Background</h3>
            <p className={`${text} leading-relaxed text-[0.9375rem]`}>
              {/* TODO: replace placeholder — your actual bio */}
              {about.bio}
            </p>
          </div>

          {/* Education + Currently Exploring */}
          <div className="space-y-6">
            {/* Education card */}
            <div className={`reveal border rounded-2xl p-6 ${surface}`}>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-accent/10 text-accent shrink-0 mt-0.5">
                  <GraduationCap size={20} />
                </div>
                <div>
                  <p className={`font-semibold text-sm ${head}`}>{about.education.degree}</p>
                  {/* TODO: replace placeholder — your degree */}
                  <p className={`${muted} text-sm mt-0.5`}>{about.education.university}</p>
                  {/* TODO: replace placeholder — your university */}
                  <div className="flex items-center gap-3 mt-2">
                    <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${dark ? 'bg-white/8 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                      {about.education.year}
                    </span>
                    {about.education.cgpa && (
                      <span className="text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent font-medium">
                        CGPA {about.education.cgpa}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Currently Exploring card */}
            <div className={`reveal border rounded-2xl p-6 ${surface}`}>
              <div className="flex items-start gap-4">
                <div className="p-2.5 rounded-xl bg-violet-500/10 text-violet-400 shrink-0 mt-0.5">
                  <Compass size={20} />
                </div>
                <div>
                  <p className={`font-semibold text-sm mb-3 ${head}`}>Currently Exploring</p>
                  {/* TODO: keep this updated — great recruiter conversation starter */}
                  <ul className="space-y-2">
                    {about.currentlyExploring.map((item, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                        <span className={`text-sm ${text}`}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
