import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative min-h-screen pt-40 pb-20 px-6 md:px-12 flex flex-col justify-center">
      <div className="max-w-[1400px] mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-xs uppercase tracking-[0.4em] mb-6 block text-primary font-bold">
            Digital Strategy & Marketing
          </span>
          
          <h1 className="text-[10vw] md:text-[8vw] leading-[0.9] mb-8 tracking-tight">
            MUBARRAH <br />
            <span className="serif-italic text-primary lowercase">Nusrat.</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end mt-12">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="md:col-span-6"
          >
            <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed font-light max-w-lg">
              Crafting <span className="serif-italic text-black">high-conversion</span> email campaigns and digital experiences with a focus on audience growth and <span className="serif-italic text-black">retention</span>.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
            className="md:col-span-6 flex justify-end"
          >
            <div className="flex gap-4">
              <div className="w-px h-24 bg-accent hidden md:block"></div>
              <div className="flex flex-col gap-3 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400">
                <span className="text-black">01 / Email Specialist</span>
                <span>02 / Content Strategy</span>
                <span>03 / Ads Optimizer</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-zinc-400"
      >
        Scroll to Explore
      </motion.div>
    </section>
  );
};

export default Hero;
