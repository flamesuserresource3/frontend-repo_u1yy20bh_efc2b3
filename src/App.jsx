import React from 'react';
import Hero from './components/Hero';
import TechStack from './components/TechStack';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-[#0b0b0f] dark:text-white">
      {/* Simple sticky header */}
      <header className="sticky top-0 z-50 w-full border-b border-black/5 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-[#0b0b0f]/60">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-semibold tracking-tight">FS Dev Portfolio</a>
          <nav className="hidden gap-6 text-sm sm:flex">
            <a href="#stack" className="hover:text-blue-600">Stack</a>
            <a href="#projects" className="hover:text-blue-600">Projects</a>
            <a href="#contact" className="hover:text-blue-600">Contact</a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <TechStack />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="border-t border-black/5 py-8 text-center text-sm text-gray-500 dark:border-white/10">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
