import { Layout, Smartphone, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const services = [
    {
      title: "Full-Stack Development",
      desc: "Building scalable web applications using Angular and ASP.NET Core MVC/Web API.",
      icon: <Layout className="text-accent" size={40} />
    },
    {
      title: "Backend Engineering",
      desc: "Designing and implementing secure RESTful APIs and complex business logic.",
      icon: <Code2 className="text-accent" size={40} />
    },
    {
      title: "Database Management",
      desc: "Efficient database design and optimization using SQL Server and MySQL.",
      icon: <Globe className="text-accent" size={40} />
    },
    {
      title: "Modern Technologies",
      desc: "Utilizing modern tools like TypeScript, C#, and Java to build high-performance SPAs.",
      icon: <Smartphone className="text-accent" size={40} />
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <header className="relative pb-5">
        <h2 className="text-3xl font-semibold">About Me</h2>
        <div className="absolute bottom-0 left-0 w-10 h-1 bg-accent rounded-full"></div>
      </header>

      <div className="text-text-secondary leading-relaxed space-y-4">
        <p>
          I'm a motivated Computer Science Final-Year Student and Full-Stack Developer with hands-on experience 
          in building scalable web applications. My expertise lies in Angular and ASP.NET Core MVC/Web API, 
          with a strong foundation in RESTful APIs and modern web technologies.
        </p>
        <p>
          I'm skilled in developing responsive Single Page Applications (SPAs), implementing secure authentication, 
          and writing clean, maintainable code. I enjoy turning complex problems into simple, beautiful, 
          and intuitive digital solutions. My goal is to contribute to real-world projects while 
          continuously learning from experienced teams.
        </p>
      </div>

      <section className="space-y-6">
        <h3 className="text-2xl font-semibold">What I'm Doing</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <div key={index} className="glass-card p-6 flex gap-5 shadow-sm">
              <div className="shrink-0">{service.icon}</div>
              <div>
                <h4 className="text-lg font-semibold mb-2">{service.title}</h4>
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
