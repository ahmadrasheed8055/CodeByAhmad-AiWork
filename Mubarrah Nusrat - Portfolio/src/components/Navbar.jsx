import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { portfolioData } from '../data/portfolio';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Expertise', href: '#expertise' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center pointer-events-none"
    >
      <div className="glass-card px-8 py-4 rounded-full flex justify-between items-center w-full max-w-[1400px] mx-auto shadow-sm pointer-events-auto">
        <div className="text-xl font-display font-black uppercase tracking-[0.2em] text-primary flex items-center gap-1">
          {portfolioData.name.split(' ')[0]} <span className="text-black font-light tracking-normal">{portfolioData.name.split(' ')[1]}</span>
        </div>
        
        <div className="hidden md:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-500">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-primary transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a 
            href="#contact"
            className="hidden md:block text-[10px] uppercase tracking-[0.3em] font-black bg-primary text-white px-4 py-2 rounded-full cursor-pointer hover:bg-black transition-colors"
          >
            Let's Talk
          </a>
          
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black p-1"
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-24 left-6 right-6 glass-card p-8 rounded-3xl flex flex-col gap-6 md:hidden pointer-events-auto"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsOpen(false)}
                className="text-lg font-display font-bold uppercase tracking-widest text-zinc-800 hover:text-primary"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-center text-[10px] uppercase tracking-[0.3em] font-black bg-primary text-white px-4 py-4 rounded-full"
            >
              Let's Talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
