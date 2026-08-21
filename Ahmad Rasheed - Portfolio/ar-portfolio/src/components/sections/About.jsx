import { Layout, Smartphone, Code2, Globe, Terminal, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const services = [
    {
      title: "Full-Stack Development",
      desc: "Building scalable web applications using Angular, React, and ASP.NET Core Web API.",
      icon: <Layout className="text-accent" size={36} />
    },
    {
      title: "Backend Engineering",
      desc: "Designing and implementing secure RESTful APIs and complex business logic.",
      icon: <Code2 className="text-accent" size={36} />
    },
    {
      title: "AI Automation & CLI",
      desc: "Building smart CLI tools and integrating LLMs using modern AI-driven development.",
      icon: <Terminal className="text-accent" size={36} />
    },
    {
      title: "Database Management",
      desc: "Efficient database design and optimization using SQL Server and MySQL.",
      icon: <Globe className="text-accent" size={36} />
    },
    {
      title: "Modern SPA Frameworks",
      desc: "Utilizing modern tools like TypeScript, React, Vite, and Angular for high-speed SPAs.",
      icon: <Smartphone className="text-accent" size={36} />
    },
    {
      title: "Cloud & Deployment",
      desc: "Deploying web applications, database hosting, and CI/CD pipelines on modern cloud hosts.",
      icon: <Cloud className="text-accent" size={36} />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-10"
    >
      <header className="relative pb-5">
        <h2 className="text-3xl lg:text-4xl font-bold tracking-tight">About Me</h2>
        <div className="absolute bottom-0 left-0 w-12 h-1 bg-accent rounded-full"></div>
      </header>

      <div className="text-text-secondary leading-relaxed space-y-4 text-base lg:text-lg">
        <p>
          I'm a motivated Computer Science Final-Year Student and Full-Stack Developer with hands-on experience 
          in building scalable web applications. My expertise lies in Angular, React, and ASP.NET Core MVC/Web API, 
          with a strong foundation in RESTful APIs and modern web technologies.
        </p>
        <p>
          I'm skilled in developing responsive Single Page Applications (SPAs), implementing secure authentication, 
          and writing clean, maintainable code. I enjoy turning complex problems into simple, beautiful, 
          and intuitive digital solutions. My goal is to contribute to real-world projects while 
          continuously learning from experienced teams.
        </p>
      </div>

      <section className="space-y-6 pt-4">
        <h3 className="text-2xl font-bold">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="glass-card p-6 flex flex-col justify-between items-start gap-4 shadow-sm hover:border-accent/40 hover:-translate-y-1 transition-all duration-300 group h-full"
            >
              <div className="p-3 bg-bg-body rounded-2xl border border-border-primary group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                {service.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-lg font-semibold leading-tight text-white">{service.title}</h4>
                <p className="text-sm text-text-secondary leading-relaxed">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </motion.div>
  );
};

export default About;
