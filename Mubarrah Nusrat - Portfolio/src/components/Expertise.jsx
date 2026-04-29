import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  { title: "Email Marketing", desc: "Crafting optimized campaigns that drive higher open rates and customer retention." },
  { title: "Digital Strategy", desc: "Building comprehensive marketing roadmaps tailored for business growth." },
  { title: "Social Presence", desc: "Enhancing brand visibility through strategic social media management." },
  { title: "Paid Acquisition", desc: "Data-driven Google and Facebook Ads optimization for measurable ROI." },
  { title: "Data Precision", desc: "Ensuring accuracy and efficiency in data management and task execution." },
  { title: "Security Aware", desc: "Applying cybersecurity best practices to protect digital assets." },
];

const Expertise = () => {
  return (
    <section id="expertise" className="py-32 px-6 md:px-12 relative z-10">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-5xl md:text-7xl">
            Core <br /> <span className="serif-italic text-primary lowercase">Expertise.</span>
          </h2>
          <p className="max-w-xs text-zinc-500 text-sm uppercase tracking-widest leading-loose font-medium">
            Bridging the gap between <span className="text-black">Creative Marketing</span> and <span className="text-black">Technical Excellence</span>.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -10 }}
              className="glass-card p-10 rounded-2xl flex flex-col justify-between aspect-[4/3] group transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-xs font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div>
                <h3 className="text-2xl mb-4 lowercase serif-italic font-bold">{skill.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-zinc-700 transition-colors">{skill.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;
