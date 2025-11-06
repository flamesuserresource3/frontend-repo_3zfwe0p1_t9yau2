import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative py-24 bg-transparent">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
        >
          About Me
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-8 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 p-6 md:p-8 shadow-xl"
        >
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-slate-700 dark:text-slate-300 text-lg leading-relaxed"
          >
            I am a dynamic and passionate person with a strong desire to develop my professional skills. Although still early in my career, I am self-taught and have built a solid foundation through personal and academic projects. My adaptability and motivation allow me to learn quickly and integrate easily into new environments. Enthusiastic about contributing to a team, I am determined to use my curiosity and eagerness to learn to actively participate in projects and grow alongside experienced professionals.
          </motion.p>
          <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-[#0077FF]/40 to-transparent" />
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-sm text-slate-500 dark:text-slate-400"
          >
            Based in Salé, Morocco
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
