import { ArrowRight, Clock, PenLine } from 'lucide-react';
import { blogPosts } from '../data';
import { useTheme } from '../context/ThemeContext';

function EmptyState({ dark }) {
  const muted = dark ? 'text-slate-500' : 'text-slate-400';
  const surface = dark ? 'bg-[#1a2234] border-[#232e42]' : 'bg-slate-50 border-slate-200';
  return (
    <div className={`border rounded-2xl p-12 text-center ${surface}`}>
      <div className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center ${dark ? 'bg-white/5' : 'bg-slate-100'}`}>
        <PenLine size={24} className={muted} />
      </div>
      <p className={`font-semibold text-sm ${dark ? 'text-slate-300' : 'text-slate-600'}`}>Coming soon</p>
      <p className={`text-xs mt-1 ${muted}`}>Writing in progress — check back soon.</p>
      {/* TODO: replace placeholder — add blog post objects to `blogPosts` array in data.js */}
    </div>
  );
}

export default function Blog() {
  const { dark } = useTheme();

  const surface = dark ? 'bg-[#111827] border-[#1e2d40]' : 'bg-white border-slate-200';
  const muted   = dark ? 'text-slate-400' : 'text-slate-500';
  const text    = dark ? 'text-slate-300' : 'text-slate-600';
  const head    = dark ? 'text-white' : 'text-slate-900';

  return (
    <section
      id="blog"
      className={`py-24 px-6 ${dark ? 'bg-[#0a0f1a]' : 'bg-slate-50'}`}
    >
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <div className="reveal mb-14 text-center">
          <span className={`text-xs font-semibold tracking-widest uppercase ${muted} mb-2 block`}>Words I write</span>
          <h2 className={`font-display font-bold text-3xl sm:text-4xl ${head}`}>Blog &amp; Writing</h2>
          <div className="mx-auto mt-3 w-12 h-0.5 bg-accent rounded-full" />
        </div>

        {blogPosts.length === 0 ? (
          <div className="reveal">
            <EmptyState dark={dark} />
          </div>
        ) : (
          // TODO: add blog post objects to `blogPosts` array in data.js to populate cards
          <div className="space-y-4">
            {blogPosts.map((post, i) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  reveal group flex items-start gap-5 border rounded-2xl p-5
                  hover:border-accent/40 transition-all duration-300 hover:-translate-y-0.5
                  ${surface}
                `}
                style={{ transitionDelay: `${i * 0.07}s` }}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${dark ? 'bg-white/5' : 'bg-slate-100'}`}>
                  <PenLine size={18} className="text-accent" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className={`font-semibold text-sm leading-snug group-hover:text-accent transition-colors mb-1.5 ${head}`}>
                    {post.title}
                  </h3>
                  <p className={`text-xs leading-relaxed mb-2 ${text} line-clamp-2`}>{post.excerpt}</p>
                  <div className={`flex items-center gap-3 text-xs ${muted}`}>
                    <span>{post.date}</span>
                    <span>·</span>
                    <span className="inline-flex items-center gap-1">
                      <Clock size={11} /> {post.readTime}
                    </span>
                  </div>
                </div>
                <ArrowRight size={16} className={`${muted} group-hover:text-accent group-hover:translate-x-0.5 transition-all mt-0.5 shrink-0`} />
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
