import { BookOpen, Briefcase, ExternalLink, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Resume = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'React', 'Angular', 'ASP.NET Core', 'PHP', 'AI & CLI Tools'];

  const projectsData = [
    {
      title: "Fancy Tailor — Tailoring & Order Management System",
      period: "Jan 2025 — Present",
      desc: "A full-stack custom tailoring management platform digitizing measurement tracking, customer order workflows, dynamic measurement forms, and automated billing management.",
      tags: ["React", "PHP", "Full-Stack"],
      link: "https://fancyts.online",
      githubLink: "https://github.com/ahmadrasheed8055/Fancy-Tailor"
    },
    {
      title: "FitJoin — Full-Stack Fitness Forum",
      period: "Feb 2025 — Present",
      desc: "Developed a full-stack fitness forum using Angular and ASP.NET Core Web API. Engineered secure Two-Step Email Authentication and integrated AI-based content moderation.",
      tags: ["Angular", "ASP.NET Core"],
      githubLink: "https://github.com/ahmadrasheed8055/FitJoin"
    },
    {
      title: "MSK Mobile Store — AI Based Store",
      period: "July 2024",
      desc: "An AI-powered mobile store built with React Vite and Supabase. Features intelligent product search and real-time inventory. Developed completely using Gemini CLI.",
      tags: ["React", "AI & CLI Tools"],
      link: "https://msk-store.vercel.app/",
      githubLink: "https://github.com/ahmadrasheed8055/MSK"
    },
    {
      title: "VotVision — Online Voting Platform",
      period: "Oct 2023 — Jan 2024",
      desc: "Implemented a secure full-stack online voting platform with Authorization based panels. Features real-time result tracking using PHP and MySQL.",
      tags: ["PHP"],
      githubLink: "https://github.com/ahmadrasheed8055/VotVision"
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.tags.includes(activeFilter));

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

      {/* Filter Bar */}
      <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`cursor-pointer transition-colors duration-300 relative py-1 ${
              activeFilter === cat ? 'text-accent' : 'text-text-secondary hover:text-white'
            }`}
          >
            {cat}
            {activeFilter === cat && (
              <motion.div 
                layoutId="activeTab"
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent"
              />
            )}
          </button>
        ))}
      </div>

      {/* Experience */}
      <section className="space-y-8">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 glass-card flex items-center justify-center shadow-md">
            <Briefcase className="text-accent" size={20} />
          </div>
          <h3 className="text-2xl font-semibold">Project Experience</h3>
        </div>

        <div className="ml-5 border-l border-border-primary space-y-10 min-h-[300px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <TimelineItem 
                  title={project.title}
                  period={project.period}
                  desc={project.desc}
                  link={project.link}
                  githubLink={project.githubLink}
                />
              </motion.div>
            ))}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <p className="pl-10 text-text-secondary italic">No projects found in this category.</p>
          )}
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

const TimelineItem = ({ title, period, desc, link, githubLink }) => (
  <div className="relative pl-10 before:content-[''] before:absolute before:left-[-5px] before:top-2 before:w-2.5 before:h-2.5 before:bg-accent before:rounded-full before:shadow-[0_0_0_4px_rgba(255,219,112,0.15)]">
    <div className="flex flex-wrap items-center gap-3 mb-1">
      <h4 className="text-lg font-semibold">{title}</h4>
      <div className="flex items-center gap-2">
        {githubLink && (
          <a 
            href={githubLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover:text-accent transition-colors"
            title="View Code Repository"
          >
            <Github size={16} />
          </a>
        )}
        {link && (
          <a 
            href={link} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-text-secondary hover:text-accent transition-colors"
            title="View Live Demo"
          >
            <ExternalLink size={16} />
          </a>
        )}
      </div>
    </div>
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
