import { BookOpen, Briefcase } from 'lucide-react';
import { motion } from 'framer-motion';

const Resume = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      <header className="relative pb-5">
        <h2 className="text-3xl font-semibold">Projects</h2>
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></div>
      </header>

      {/* Experience */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 glass-card flex items-center justify-center shadow-md">
            <Briefcase className="text-accent" size={20} />
          </div>
          <h3 className="text-2xl font-semibold">Project Experience</h3>
        </div>

        <div className="ml-5 border-l border-border-primary space-y-10">
          <TimelineItem 
            title="FitMind - Full-Stack Fitness Forum"
            period="Feb 2025 — Present"
            desc="Developed a full-stack fitness forum using Angular and ASP.NET Core Web API. Engineered secure Two-Step Email Authentication and integrated AI-based content moderation."
          />
          <TimelineItem 
            title="Fancy Tailor - Management System"
            period="Feb 2024 — March 2024"
            desc="Digitized traditional tailoring records into a full-stack PHP-based management system. Developed a Dynamic Form Engine for custom measurement fields."
          />
          <TimelineItem 
            title="VotVision - Online Voting Platform"
            period="Oct 2023 — Jan 2024"
            desc="Implemented a secure full-stack online voting platform with Authorization based panels. Features real-time result tracking using PHP and MySQL."
          />
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">Technical Skills</h3>
        <div className="glass-card p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
           <SkillProgress name="Angular & TypeScript" value={85} />
           <SkillProgress name="ASP.NET Core & C#" value={80} />
           <SkillProgress name="SQL Server & MySQL" value={75} />
           <SkillProgress name="PHP & Bootstrap" value={70} />
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

const SkillProgress = ({ name, value }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm font-medium">
      <span>{name}</span>
      <span className="text-text-secondary">{value}%</span>
    </div>
    <div className="h-2 bg-border-primary rounded-full overflow-hidden">
      <div 
        className="h-full bg-accent rounded-full" 
        style={{ width: `${value}%` }}
      ></div>
    </div>
  </div>
);

export default Resume;
