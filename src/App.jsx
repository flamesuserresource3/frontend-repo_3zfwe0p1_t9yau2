import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import WaveTransition from './components/WaveTransition';

function App() {
  return (
    <div className="min-h-screen font-inter bg-gradient-to-b from-white to-slate-50 dark:from-slate-950 dark:to-slate-900 text-slate-900 dark:text-white">
      <Hero />
      <WaveTransition />
      <About />
      <Skills />
      <WaveTransition flip />
      <Projects />

      {/* Footer */}
      <footer className="relative overflow-hidden py-20 mt-20">
        <div className="mx-auto max-w-6xl px-6 grid gap-6 sm:grid-cols-2 items-center">
          <div>
            <h3 className="text-2xl font-bold">Let’s build something great</h3>
            <p className="mt-2 text-slate-600 dark:text-slate-300">Ready to start a project or just want to say hi? I’m one message away.</p>
          </div>
          <div className="sm:justify-self-end">
            <a href="mailto:hello@example.com" className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0077FF] to-[#0059c9] px-6 py-3 text-white shadow-lg shadow-blue-500/25">
              Email Me
            </a>
          </div>
        </div>
        <div className="mx-auto max-w-6xl px-6 flex items-center justify-between mt-10">
          <p className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Taha BENISSAOUIA • Built with React</p>
          <a href="#home" className="text-sm text-[#0077FF] hover:underline">Back to top</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
