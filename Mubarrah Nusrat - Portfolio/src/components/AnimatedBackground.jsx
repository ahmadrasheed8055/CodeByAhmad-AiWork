import React from 'react';
import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none bg-[#FDFCFB]">
      {/* Primary Blob */}
      <motion.div
        animate={{
          x: [0, 100, -50, 0],
          y: [0, -150, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#F5EBE0] rounded-full blur-[120px] opacity-60"
      />

      {/* Secondary Blob */}
      <motion.div
        animate={{
          x: [0, -120, 80, 0],
          y: [0, 100, -100, 0],
          scale: [1, 0.8, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#E3D5CA] rounded-full blur-[100px] opacity-50"
      />

      {/* Accent Blob (Rose Gold/Tan) */}
      <motion.div
        animate={{
          x: [0, 50, -80, 0],
          y: [0, 80, 120, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute top-[30%] left-[40%] w-[500px] h-[500px] bg-[#D4A373]/10 rounded-full blur-[150px] opacity-30"
      />
    </div>
  );
};

export default AnimatedBackground;
