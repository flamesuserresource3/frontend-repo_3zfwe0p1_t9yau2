import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Phone, Github } from 'lucide-react';

const EducationItem = ({ period, title }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.5 }}
    className="rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 p-6 shadow"
  >
    <div className="text-sm text-slate-500">{period}</div>
    <div className="mt-1 font-semibold text-slate-900 dark:text-white">{title}</div>
  </motion.div>
);

const EducationContactLanguages = () => {
  return (
    <section id="more" className="relative py-24">
      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-2 gap-10">
        {/* Education */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Education
          </motion.h2>
          <div className="mt-6 space-y-4">
            <EducationItem period="2023–2025" title="Diploma in Digital Development — ISTA Sala El-Jadida" />
            <EducationItem period="2025–Present" title="First Year of Engineering in Computer and Network Engineering" />
          </div>
        </div>

        {/* Contact + Languages */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white"
          >
            Contact
          </motion.h2>

          <div id="contact" className="mt-6 grid gap-4">
            <div className="grid grid-cols-[24px,1fr] gap-3 items-center text-slate-700 dark:text-slate-300">
              <MapPin size={20} className="text-[#0077FF]" />
              <p>Salé, Sala Al Jadida, Av. Atlas</p>
            </div>
            <div className="grid grid-cols-[24px,1fr] gap-3 items-center text-slate-700 dark:text-slate-300">
              <Mail size={20} className="text-[#FF6B00]" />
              <a href="mailto:tahabenissaouia@gmail.com" className="hover:underline">tahabenissaouia@gmail.com</a>
            </div>
            <div className="grid grid-cols-[24px,1fr] gap-3 items-center text-slate-700 dark:text-slate-300">
              <Phone size={20} className="text-[#0077FF]" />
              <a href="tel:0614059776" className="hover:underline">06 14 05 9776</a>
            </div>
            <div className="grid grid-cols-[24px,1fr] gap-3 items-center text-slate-700 dark:text-slate-300">
              <Github size={20} className="text-[#FF6B00]" />
              <a href="https://github.com/tahaben606" target="_blank" rel="noreferrer" className="hover:underline">github.com/tahaben606</a>
            </div>
          </div>

          {/* Contact form */}
          <motion.form
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 rounded-2xl bg-white/70 dark:bg-white/5 backdrop-blur-xl border border-white/30 dark:border-white/10 p-6 shadow"
          >
            <div className="grid gap-4">
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
                type="text"
                placeholder="Your name"
                className="w-full rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-[#0077FF]/40"
              />
              <motion.input
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
                type="email"
                placeholder="Email address"
                className="w-full rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-[#0077FF]/40"
              />
              <motion.textarea
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                placeholder="Message"
                rows={4}
                className="w-full rounded-xl border border-slate-200/60 dark:border-white/10 bg-white/80 dark:bg-white/5 px-4 py-3 outline-none focus:ring-2 ring-[#FF6B00]/40"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex justify-center rounded-xl bg-gradient-to-r from-[#0077FF] to-[#FF6B00] px-6 py-3 font-medium text-white shadow-lg"
              >
                Send Message
              </motion.button>
            </div>
          </motion.form>

          {/* Languages */}
          <div className="mt-10">
            <motion.h3
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-2xl font-semibold text-slate-900 dark:text-white"
            >
              Languages
            </motion.h3>
            <div className="mt-4 overflow-hidden rounded-xl border border-white/30 dark:border-white/10 bg-white/70 dark:bg-white/5 backdrop-blur-xl">
              <ul className="flex animate-[scroll_18s_linear_infinite] gap-6 whitespace-nowrap px-6 py-4">
                {[
                  { label: 'Arabic — Native', flag: '🇲🇦' },
                  { label: 'French — C1', flag: '🇫🇷' },
                  { label: 'English — B1', flag: '🇬🇧' },
                ].concat([
                  { label: 'Arabic — Native', flag: '🇲🇦' },
                  { label: 'French — C1', flag: '🇫🇷' },
                  { label: 'English — B1', flag: '🇬🇧' },
                ]).map((l, i) => (
                  <li key={i} className="flex items-center gap-3 rounded-lg bg-gradient-to-br from-white/60 to-transparent dark:from-white/10 px-4 py-2 ring-1 ring-white/40 dark:ring-white/10">
                    <span className="text-xl">{l.flag}</span>
                    <span className="text-sm text-slate-700 dark:text-slate-300">{l.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationContactLanguages;
