import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import EducationContactLanguages from './components/EducationContactLanguages';

function App() {
  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Hero />
      <About />
      <Skills />
      <EducationContactLanguages />

      {/* Footer with rotating belt */}
      <footer className="relative overflow-hidden py-10 mt-10">
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Taha BENISSAOUIA • Built with React</p>
          <a href="#home" className="text-sm text-[#0077FF] hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
