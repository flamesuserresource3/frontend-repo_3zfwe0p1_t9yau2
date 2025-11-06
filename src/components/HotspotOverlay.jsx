import React from 'react';
import { motion } from 'framer-motion';

// Overlay of hover hotspots that can link to sections
// Pass hotspots=[{ id, label, x, y, href }], coordinates in percentage (0-100)
const HotspotOverlay = ({ hotspots = [] }) => {
  return (
    <div className="pointer-events-none absolute inset-0 z-30">
      {hotspots.map((h) => (
        <motion.a
          key={h.id}
          href={h.href}
          className="pointer-events-auto absolute -translate-x-1/2 -translate-y-1/2"
          style={{ left: `${h.x}%`, top: `${h.y}%` }}
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 260, damping: 18 }}
          title={h.label}
        >
          <span className="relative block">
            <span className="absolute inset-0 rounded-full bg-[#FF6B00]/20 blur-md" />
            <span className="relative grid place-items-center h-6 w-6 rounded-full bg-gradient-to-br from-[#0077FF] to-[#FF6B00] text-white text-[10px] font-bold shadow-lg ring-1 ring-white/30">
              {h.label?.[0] || '•'}
            </span>
          </span>
        </motion.a>
      ))}
    </div>
  );
};

export default HotspotOverlay;
