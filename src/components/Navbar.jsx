import { useEffect, useState } from 'react';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const NAV_LINKS = [
  { label: 'About',        href: '#about' },
  { label: 'Skills',       href: '#skills' },
  { label: 'Projects',     href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Blog',         href: '#blog' },
  { label: 'Contact',      href: '#contact' },
];

export default function Navbar() {
  const { dark, toggle } = useTheme();
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [activeId, setActiveId]   = useState('');

  // shrink/shadow on scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // track active section
  useEffect(() => {
    const ids = ['hero', 'about', 'skills', 'projects', 'achievements', 'blog', 'contact'];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) setActiveId(e.target.id); }),
      { rootMargin: '-40% 0px -55% 0px' }
    );
    ids.forEach(id => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`
        fixed top-0 inset-x-0 z-50 transition-all duration-300
        ${scrolled
          ? dark
            ? 'bg-[#0a0f1a]/90 backdrop-blur-md border-b border-[#1e2d40] shadow-lg shadow-black/20'
            : 'bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-lg shadow-black/5'
          : 'bg-transparent'
        }
      `}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          className="font-display font-bold text-xl tracking-tight text-accent"
          onClick={() => setMenuOpen(false)}
        >
          RS<span className={dark ? 'text-white' : 'text-slate-900'}>.dev</span>
          {/* TODO: replace placeholder — swap "RS" with your initials */}
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ label, href }) => {
            const id = href.replace('#', '');
            return (
              <li key={href}>
                <a
                  href={href}
                  className={`
                    nav-link text-sm font-medium transition-colors duration-200
                    ${activeId === id
                      ? 'text-accent'
                      : dark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'
                    }
                  `}
                >
                  {label}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right controls */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            aria-label="Toggle theme"
            className={`
              p-2 rounded-lg transition-all duration-200
              ${dark
                ? 'text-slate-400 hover:text-white hover:bg-white/10'
                : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
              }
            `}
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Hamburger */}
          <button
            className={`
              md:hidden p-2 rounded-lg transition-all duration-200
              ${dark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:bg-slate-100'}
            `}
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300
          ${menuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}
          ${dark ? 'bg-[#111827] border-t border-[#1e2d40]' : 'bg-white border-t border-slate-200'}
        `}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className={`
                  block py-2.5 text-sm font-medium transition-colors
                  ${dark ? 'text-slate-300 hover:text-accent' : 'text-slate-600 hover:text-accent'}
                `}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}
