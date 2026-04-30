import { motion } from 'framer-motion';
import { portfolioData } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="py-32 px-6 md:px-12 bg-background">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex justify-between items-baseline mb-24">
          <h2 className="text-5xl md:text-7xl">
            Selected <br /> <span className="serif-italic text-primary lowercase">Experience.</span>
          </h2>
          <span className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold">02 / HISTORY</span>
        </div>

        <div className="space-y-0">
          {portfolioData.experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group py-16 border-b border-accent/30 grid grid-cols-1 md:grid-cols-12 gap-8 items-center hover:bg-[#F5EBE0]/20 transition-all duration-500 px-8 -mx-8 rounded-2xl"
            >
              <div className="md:col-span-2 text-primary font-bold tracking-[0.2em] text-[10px] uppercase">
                {exp.period}
              </div>
              <div className="md:col-span-6">
                <h3 className="text-3xl mb-2 lowercase serif-italic font-bold group-hover:translate-x-4 transition-transform duration-500">{exp.role}</h3>
                <p className="text-zinc-400 uppercase tracking-widest text-[10px] font-black">{exp.company}</p>
              </div>
              <div className="md:col-span-4 text-zinc-500 text-sm leading-relaxed font-light">
                {exp.desc}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
