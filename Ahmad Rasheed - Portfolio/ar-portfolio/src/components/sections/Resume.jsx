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
        <h2 className="text-3xl font-semibold">Resume</h2>
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></div>
      </header>

      {/* Education */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 glass-card flex items-center justify-center shadow-md">
            <BookOpen className="text-accent" size={20} />
          </div>
          <h3 className="text-2xl font-semibold">Education</h3>
        </div>

        <div className="ml-5 border-l border-border-primary space-y-10">
          <TimelineItem 
            title="University School of the Arts"
            period="2007 — 2008"
            desc="Nemo enims ipsam voluptatem, ydfgtis lueros sitser."
          />
          <TimelineItem 
            title="Design Academy"
            period="2006 — 2007"
            desc="Ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TimelineItem 
            title="High School of Art and Design"
            period="2002 — 2004"
            desc="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          />
        </div>
      </section>

      {/* Experience */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 glass-card flex items-center justify-center shadow-md">
            <Briefcase className="text-accent" size={20} />
          </div>
          <h3 className="text-2xl font-semibold">Experience</h3>
        </div>

        <div className="ml-5 border-l border-border-primary space-y-10">
          <TimelineItem 
            title="Creative Director"
            period="2015 — Present"
            desc="Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem."
          />
          <TimelineItem 
            title="Art Director"
            period="2013 — 2015"
            desc="Nemo enims ipsam voluptatem, ydfgtis lueros sitser."
          />
          <TimelineItem 
            title="Web Designer"
            period="2010 — 2013"
            desc="Nemo enims ipsam voluptatem, ydfgtis lueros sitser."
          />
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">My Skills</h3>
        <div className="glass-card p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
           <SkillProgress name="Web Design" value={80} />
           <SkillProgress name="Graphic Design" value={70} />
           <SkillProgress name="Branding" value={90} />
           <SkillProgress name="WordPress" value={50} />
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
