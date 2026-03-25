import React from 'react';
import { motion } from 'framer-motion';

const GlobalLightLeaks = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden mix-blend-screen">
      {/* Leak 1: Top Right */}
      <motion.div
        className="absolute top-[5%] -right-[10%] w-[600px] h-[100px] bg-white/5 blur-[120px] rounded-full"
        animate={{ x: [0, -50, 0] }}
        style={{ translateZ: 0, willChange: "transform" }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Leak 2: Center Left */}
      <motion.div
        className="absolute top-[40%] -left-[10%] w-[500px] h-[120px] bg-white/5 blur-[120px] rounded-full"
        animate={{ x: [0, 50, 0] }}
        style={{ translateZ: 0, willChange: "transform" }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Leak 3: Bottom Right */}
      <motion.div
        className="absolute top-[75%] right-[5%] w-[700px] h-[90px] bg-white/5 blur-[120px] rounded-full"
        animate={{ x: [0, -40, 0] }}
        style={{ translateZ: 0, willChange: "transform" }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
};

export default GlobalLightLeaks;
