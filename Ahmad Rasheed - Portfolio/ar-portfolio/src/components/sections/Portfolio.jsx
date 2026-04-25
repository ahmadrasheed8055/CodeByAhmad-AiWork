import { BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const Portfolio = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <header className="relative pb-5">
        <h2 className="text-3xl font-semibold">Education</h2>
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></div>
      </header>

      {/* Education */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 glass-card flex items-center justify-center shadow-md">
            <BookOpen className="text-accent" size={20} />
          </div>
          <h3 className="text-2xl font-semibold">Educational Journey</h3>
        </div>

        <div className="ml-5 border-l border-border-primary space-y-10">
          <TimelineItem 
            title="University of Science and Technology"
            period="2024 — 2026"
            desc="Bachelor of Science in Computer Science (BSCS). Focus on advanced software engineering, data structures, and algorithms."
          />
          <TimelineItem 
            title="University of Central Punjab"
            period="2022 — 2024"
            desc="Associate Degree Program (ADP) in Computer Science. Gained strong foundation in programming and core CS concepts."
          />
          <TimelineItem 
            title="Punjab Group of College"
            period="2020 — 2022"
            desc="Intermediate in Computer Science (ICS). Initial exposure to computer science and mathematical foundations."
          />
        </div>
      </section>
    </motion.div>
  );
};

const TimelineItem = ({ title, period, desc }) => (
  <div className="relative pl-10 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:shadow-[0_0_0_4px_rgba(255,219,112,0.15)]">
    <h4 className="text-lg font-semibold mb-1">{title}</h4>
    <p className="text-accent text-sm font-medium mb-3">{period}</p>
    <p className="text-text-secondary text-sm leading-relaxed">{desc}</p>
  </div>
);

export default Portfolio;
