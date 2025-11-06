import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, ExternalLink } from 'lucide-react';

const PROJECTS = [
  { id: 1, title: 'Realtime Chat App', cat: 'Web', desc: 'Socket.io powered chat with rooms, typing status and file sharing.', url: '#', color: 'from-[#0077FF] to-[#4e9cff]' },
  { id: 2, title: 'Portfolio 3D', cat: 'Web', desc: 'Interactive 3D hero with Spline + advanced motion values.', url: '#', color: 'from-[#FF6B00] to-[#ff9148]' },
  { id: 3, title: 'Vision Classifier', cat: 'ML', desc: 'Image classification pipeline with augmentation and metrics.', url: '#', color: 'from-fuchsia-500 to-pink-500' },
  { id: 4, title: 'CLI Productivity', cat: 'Tools', desc: 'Terminal toolkit for project scaffolding and release notes.', url: '#', color: 'from-emerald-500 to-teal-500' },
  { id: 5, title: 'Analytics Dashboard', cat: 'Web', desc: 'Responsive charts and KPIs with role-based access control.', url: '#', color: 'from-cyan-500 to-blue-500' },
  { id: 6, title: 'Tiny Vector DB', cat: 'Tools', desc: 'Embedding store with cosine similarity and caching.', url: '#', color: 'from-violet-500 to-indigo-500' },
];

const TABS = ['All', 'Web', 'ML', 'Tools'];

const Projects = () => {
  const [tab, setTab] = React.useState('All');

  const items = React.useMemo(() => {
    if (tab === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.cat === tab);
  }, [tab]);

  return (
    <section id="projects" className="relative py-24">
      {/* subtle backdrop glow */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_80%_10%,rgba(0,119,255,0.10),transparent),radial-gradient(600px_300px_at_10%_90%,rgba(255,107,0,0.10),transparent)]" />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white">Projects</h2>
            <p className="mt-2 text-slate-600 dark:text-slate-300">A selection of recent work. Filter by category to explore.</p>
          </div>
          <div className="hidden sm:flex items-center gap-2 rounded-full border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur px-3 py-2">
            <Filter size={16} className="text-[#0077FF]" />
            <span className="text-sm text-slate-600 dark:text-slate-300">Filters</span>
          </div>
        </div>

        {/* animated tabs */}
        <div className="mt-6 inline-flex rounded-full bg-white/70 dark:bg-white/5 backdrop-blur border border-white/30 dark:border-white/10 p-1">
          {TABS.map(t => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`relative z-10 px-4 py-2 text-sm font-medium rounded-full transition-colors ${tab === t ? 'text-white' : 'text-slate-700 dark:text-slate-300'}`}
            >
              {tab === t && (
                <motion.span
                  layoutId="pill"
                  className="absolute inset-0 -z-10 rounded-full bg-gradient-to-r from-[#0077FF] to-[#FF6B00] shadow-[0_8px_30px_rgb(0,119,255,0.20)]"
                  transition={{ type: 'spring', stiffness: 350, damping: 30 }}
                />
              )}
              {t}
            </button>
          ))}
        </div>

        {/* grid */}
        <motion.div layout className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {items.map((p) => (
              <motion.a
                key={p.id}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.35 }}
                className="group relative overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl"
              >
                <div className={`absolute inset-0 opacity-80 bg-gradient-to-br ${p.color}`} />
                <div className="relative p-5 flex min-h-[160px] flex-col justify-between">
                  <div>
                    <span className="inline-block text-[10px] uppercase tracking-widest rounded-full bg-white/70 dark:bg-white/10 backdrop-blur px-2 py-1 text-slate-700 dark:text-slate-200">{p.cat}</span>
                    <h3 className="mt-3 text-xl font-semibold text-white drop-shadow-md">{p.title}</h3>
                    <p className="mt-2 text-white/90 text-sm leading-relaxed max-w-prose">{p.desc}</p>
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-white/90">
                    <span className="text-sm">Open</span>
                    <ExternalLink size={16} className="transition-transform group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* hover shine */}
                <div aria-hidden className="pointer-events-none absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="absolute inset-0 bg-[radial-gradient(500px_200px_at_var(--mx,50%)_-10%,rgba(255,255,255,0.35),transparent_60%)]" />
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
