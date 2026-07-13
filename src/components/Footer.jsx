import { Mail } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personal } from '../data';
import { useTheme } from '../context/ThemeContext';

export default function Footer() {
  const { dark } = useTheme();
  const year = new Date().getFullYear();

  const muted  = dark ? 'text-slate-500' : 'text-slate-400';
  const border = dark ? 'border-[#1e2d40]' : 'border-slate-200';
  const bg     = dark ? 'bg-[#0a0f1a]' : 'bg-slate-50';

  return (
    <footer className={`border-t py-10 px-6 ${bg} ${border}`}>
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Credit */}
        <p className={`text-sm ${muted}`}>
          © {year} <span className="text-accent font-medium">{personal.name}</span>.
          {' '}Built with React &amp; Tailwind CSS.
        </p>

        {/* Social icons */}
        <div className="flex items-center gap-4">
          <a href={personal.github}    target="_blank" rel="noopener noreferrer" aria-label="GitHub"   className={`${muted} hover:text-accent transition-colors`}><GithubIcon   size={17} /></a>
          <a href={personal.linkedin}  target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={`${muted} hover:text-accent transition-colors`}><LinkedinIcon  size={17} /></a>
          <a href={`mailto:${personal.email}`}                                    aria-label="Email"    className={`${muted} hover:text-accent transition-colors`}><Mail          size={17} /></a>
        </div>
      </div>
    </footer>
  );
}
