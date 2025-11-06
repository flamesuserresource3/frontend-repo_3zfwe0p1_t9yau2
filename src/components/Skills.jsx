import React from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const skills = [
  'HTML','CSS','JavaScript','PHP','Python','MySQL','NoSQL','Laravel','React','Git','GitHub','GitLab','Jira','SonarQube'
];

const Skills = () => {
  // subtle reactive tilt for the whole section background glow
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotate = useSpring(useTransform(mx, [-60, 60], [-1.5, 1.5]), { stiffness: 120, damping: 20 });
  const translateY = useSpring(useTransform(my, [-60, 60], [-4, 4]), { stiffness: 120, damping: 20 });

  const handleMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mx.set(((e.clientX - rect.left) / rect.width) * 120 - 60);
    my.set(((e.clientY - rect.top) / rect.height) * 120 - 60);
  };

  return (
    <section id="skills" className="relative py-24" onMouseMove={handleMove}>
      {/* soft animated glow */}
      <motion.div
        aria-hidden
        style={{ rotate, y: translateY }}
        className="pointer-events-none absolute inset-0 -z-0"
      >
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(0,119,255,0.12),transparent_60%)] blur-2xl" />
      </motion.div>

      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
        >
          Skills
        </motion.h2>

        {/* Rotating belt / infinite slider */}
        <div className="relative mt-8 overflow-hidden rounded-2xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl shadow-xl">
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/80 via-transparent to-white/80 dark:from-slate-950/80 dark:to-slate-950/80" />
          <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <ul className="flex animate-[scroll_16s_linear_infinite] gap-8 whitespace-nowrap px-8 py-6 text-slate-700 dark:text-slate-200">
              {skills.concat(skills).map((s, i) => (
                <li key={i} className="relative group">
                  <div className="inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-[#0077FF]/10 to-[#FF6B00]/10 px-5 py-3 ring-1 ring-white/40 dark:ring-white/10 transition-transform duration-300 group-hover:scale-105">
                    <span className="font-medium">{s}</span>
                  </div>
                  <span className="pointer-events-none absolute left-1/2 top-full mt-2 -translate-x-1/2 rounded-md bg-slate-900 text-white text-xs px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    {s}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Animated bars with interactive tilt */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.slice(0,9).map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -4, rotateX: 1.5, rotateY: -1.5 }}
              className="relative rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 p-5 shadow-lg"
            >
              <div className="absolute inset-0 pointer-events-none rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity [mask-image:radial-gradient(200px_200px_at_var(--mx,50%)_var(--my,50%),white,transparent)] bg-gradient-to-br from-[#0077FF]/10 to-[#FF6B00]/10" />
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold text-slate-800 dark:text-slate-200">{s}</span>
                <span className="text-xs text-slate-500">proficiency</span>
              </div>
              <div className="h-2 w-full rounded-full bg-slate-200/60 dark:bg-white/10 overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${70 + (i%4)*6}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="h-full rounded-full bg-gradient-to-r from-[#0077FF] via-[#4e9cff] to-[#FF6B00]"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default Skills;
