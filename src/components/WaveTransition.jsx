import React from 'react';
import { motion } from 'framer-motion';

// Simple wavy section divider that animates on mount
const WaveTransition = ({ flip = false }) => {
  return (
    <div aria-hidden className="relative w-full overflow-hidden">
      <motion.svg
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className={`block w-full h-24 ${flip ? 'rotate-180' : ''}`}
        viewBox="0 0 1440 150"
        preserveAspectRatio="none"
      >
        <path
          d="M0,80 C240,140 480,20 720,80 C960,140 1200,20 1440,80 L1440,150 L0,150 Z"
          fill="currentColor"
          className="text-white dark:text-slate-950"
        />
      </motion.svg>
    </div>
  );
};

export default WaveTransition;
