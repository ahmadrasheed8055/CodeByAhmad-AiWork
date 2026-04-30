import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-32 px-6 md:px-12 bg-[#F5EBE0]/20">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-baseline mb-24">
          <h2 className="text-5xl md:text-7xl">
            Academic <br /> <span className="serif-italic text-primary lowercase">Foundation.</span>
          </h2>
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">03 / ACADEMIC</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {portfolioData.education.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="glass-card p-12 rounded-[2rem] border-none shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="text-primary text-[10px] font-black uppercase tracking-[0.3em] block mb-6">{edu.period}</span>
              <h3 className="text-4xl mb-4 lowercase serif-italic">{edu.degree}</h3>
              <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-black mb-8">{edu.school}</p>
              <div className="h-1 w-20 bg-accent rounded-full"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
