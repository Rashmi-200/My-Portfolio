import { useEffect } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar       from './components/Navbar';
import Hero         from './components/Hero';
import About        from './components/About';
import Skills       from './components/Skills';
import Projects     from './components/Projects';
import Achievements from './components/Achievements';
import Blog         from './components/Blog';
import Contact      from './components/Contact';
import Footer       from './components/Footer';
import './index.css';

function PortfolioApp() {
  // Scroll-reveal: add .visible when elements enter viewport
  useEffect(() => {
    const targets = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    targets.forEach(t => observer.observe(t));
    return () => observer.disconnect();
  });

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
