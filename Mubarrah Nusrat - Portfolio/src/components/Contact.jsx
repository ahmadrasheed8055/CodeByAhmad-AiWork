import React from 'react';
import { Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-40 px-6 md:px-12 bg-white text-black overflow-hidden relative">
      <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-[#F5EBE0] rounded-full blur-[150px] -z-10 opacity-50"></div>
      
      <div className="max-w-[1400px] mx-auto relative">
        <span className="text-[10px] uppercase tracking-[0.5em] font-black text-primary mb-12 block">04 / CONNECT</span>
        <h2 className="text-[12vw] leading-[0.75] mb-24 tracking-tighter">
          LETS <br /> <span className="serif-italic lowercase text-primary">collaborate.</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <a href="mailto:mubrrahch@gmail.com" className="glass-card p-10 rounded-3xl group hover:bg-black hover:text-white transition-all duration-500">
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-6 font-bold group-hover:text-zinc-500">Email Inquiry</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium tracking-tight">mubrrahch@gmail.com</span>
              <Mail size={20} className="text-primary group-hover:text-white transition-colors" />
            </div>
          </a>
          
          <a href="https://wa.me/923121613548" className="glass-card p-10 rounded-3xl group hover:bg-black hover:text-white transition-all duration-500">
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-6 font-bold group-hover:text-zinc-500">Direct Message</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium tracking-tight">+92 312 1613548</span>
              <MessageCircle size={20} className="text-primary group-hover:text-white transition-colors" />
            </div>
          </a>

          <a href="https://www.linkedin.com/in/mubrrah-ch" target="_blank" rel="noopener noreferrer" className="glass-card p-10 rounded-3xl group hover:bg-black hover:text-white transition-all duration-500">
            <span className="text-[10px] uppercase tracking-widest text-zinc-400 block mb-6 font-bold group-hover:text-zinc-500">Professional Profile</span>
            <div className="flex items-center justify-between">
              <span className="text-lg font-medium tracking-tight">LinkedIn/Mubrrah</span>
            </div>
          </a>
        </div>

        <footer className="mt-40 pt-16 border-t border-accent/20 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[0.4em] font-black text-zinc-400">
          <div className="flex items-center gap-4">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
            Available for new projects
          </div>
          <div className="text-black">© 2026 Mubarrah Nusrat</div>
          <a href="#" className="hover:text-primary transition-colors">Back to top ↑</a>
        </footer>
      </div>
    </section>
  );
};

export default Contact;
