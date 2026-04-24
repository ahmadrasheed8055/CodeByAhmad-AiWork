import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Eye } from 'lucide-react';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const categories = ['All', 'Full-Stack', 'Angular', 'PHP'];
  
  const projects = [
    { 
      title: "FitMind", 
      category: "Angular", 
      image: "https://picsum.photos/400/300?random=1",
      desc: "Full-stack fitness forum with 2FA and AI moderation."
    },
    { 
      title: "Fancy Tailor", 
      category: "PHP", 
      image: "https://picsum.photos/400/300?random=2",
      desc: "Tailor management system with dynamic form engine."
    },
    { 
      title: "VotVision", 
      category: "PHP", 
      image: "https://picsum.photos/400/300?random=3",
      desc: "Secure online voting platform with real-time tracking."
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category.toLowerCase() === filter.toLowerCase() || (filter === 'full-stack'));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="relative pb-5">
        <h2 className="text-3xl font-semibold">Portfolio</h2>
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></div>
      </header>

      {/* Filter Tabs */}
      <ul className="flex flex-wrap gap-6 text-sm font-medium">
        {categories.map((cat) => (
          <li key={cat}>
            <button
              onClick={() => setFilter(cat.toLowerCase())}
              className={`transition-colors duration-300 ${
                filter === cat.toLowerCase() ? 'text-accent' : 'text-text-secondary hover:text-text-secondary/70'
              }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={project.title}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl mb-4 bg-border-primary aspect-[4/3]">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-12 h-12 bg-accent/20 backdrop-blur-md rounded-xl flex items-center justify-center text-accent">
                    <Eye size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-text-secondary/60 text-sm">{project.category}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Portfolio;
