import React from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center"
    >
      <div className="glass-card px-8 py-4 rounded-full flex justify-between items-center w-full max-w-[1400px] mx-auto shadow-sm">
        <div className="text-xl font-display font-black uppercase tracking-widest text-primary">
          MN<span className="text-black">.</span>
        </div>
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#expertise" className="hover:text-primary transition-colors">Expertise</a>
          <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <div className="text-[10px] uppercase tracking-[0.3em] font-black bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:bg-black transition-colors">
          Let's Talk
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
