import React from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';
import { Download, Mail, Rocket, Sun, Moon } from 'lucide-react';

const Hero = () => {
  const [dark, setDark] = React.useState(false);

  React.useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-blue-50 via-white to-orange-50 dark:from-slate-900 dark:via-slate-950 dark:to-slate-900">
      {/* Animated gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_20%_-20%,rgba(0,119,255,0.15),transparent),radial-gradient(800px_400px_at_80%_120%,rgba(255,107,0,0.12),transparent)]" />

      {/* Top controls */}
      <div className="absolute z-20 w-full px-6 pt-6 flex items-center justify-between">
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="backdrop-blur-md bg-white/50 dark:bg-white/5 border border-white/30 dark:border-white/10 rounded-full px-4 py-2 shadow-lg">
          <span className="text-sm font-medium text-slate-700 dark:text-slate-200">Taha BENISSAOUIA</span>
        </motion.div>
        <button aria-label="Toggle theme" onClick={() => setDark((d) => !d)} className="inline-flex items-center gap-2 rounded-full border border-white/30 dark:border-white/10 bg-white/60 dark:bg-white/5 backdrop-blur px-4 py-2 text-slate-700 dark:text-slate-200 shadow-lg">
          {dark ? <Sun size={18} /> : <Moon size={18} />}
          <span className="text-sm">{dark ? 'Light' : 'Dark'}</span>
        </button>
      </div>

      {/* 3D Spline scene */}
      <div className="absolute right-0 top-0 h-full w-full sm:w-1/2 md:w-2/3 lg:w-1/2 opacity-90">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white"
          >
            <span className="block">Taha BENISSAOUIA</span>
            <motion.span
              className="mt-3 block bg-gradient-to-r from-[#0077FF] to-[#FF6B00] bg-clip-text text-transparent"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Full Stack Developer
            </motion.span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
            className="mt-6 text-lg text-slate-600 dark:text-slate-300"
          >
            Building dynamic and scalable web solutions.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <motion.a
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#0077FF] to-[#0059c9] px-6 py-3 text-white shadow-lg shadow-blue-500/25 transition-transform hover:scale-[1.02] focus:outline-none"
            >
              <Rocket size={18} className="transition-transform group-hover:-translate-y-0.5" />
              View Projects
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 backdrop-blur px-6 py-3 text-slate-800 dark:text-slate-200 shadow-lg transition-all hover:shadow-xl hover:shadow-orange-500/10"
            >
              <Mail size={18} className="text-[#FF6B00]" />
              Contact Me
            </motion.a>
            <motion.a
              variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
              href="#" onClick={(e) => e.preventDefault()} className="group inline-flex items-center gap-2 rounded-xl border border-transparent bg-white/50 dark:bg-white/10 backdrop-blur px-6 py-3 text-slate-800 dark:text-slate-200 shadow-lg ring-1 ring-slate-200/60 dark:ring-white/10 hover:ring-[#FF6B00]/40"
            >
              <Download size={18} className="text-[#FF6B00] group-hover:animate-pulse" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
