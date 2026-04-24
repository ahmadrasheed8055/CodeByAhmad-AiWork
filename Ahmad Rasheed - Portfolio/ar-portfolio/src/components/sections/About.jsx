import { Layout, Smartphone, Code2, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const services = [
    {
      title: "Web Design",
      desc: "The most modern and high-quality design made at a professional level.",
      icon: <Layout className="text-accent" size={40} />
    },
    {
      title: "Web Development",
      desc: "High-quality development of sites at the professional level.",
      icon: <Code2 className="text-accent" size={40} />
    },
    {
      title: "Mobile Apps",
      desc: "Professional development of applications for iOS and Android.",
      icon: <Smartphone className="text-accent" size={40} />
    },
    {
      title: "Photography",
      desc: "I make high-quality photos of any category at a professional level.",
      icon: <Globe className="text-accent" size={40} />
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
          I'm Creative Director and UI/UX Designer from Sydney, Australia, working in web development and print media. 
          I enjoy turning complex problems into simple, beautiful and intuitive designs.
        </p>
        <p>
          My job is to build your website so that it is functional and user-friendly but at the same time attractive. 
          Moreover, I add personal touch to your product and make sure that is eye-catching and easy to use. 
          My aim is to bring across your message and identity in the most creative way. 
          I created web design for many famous brand companies.
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
