import { useState } from 'react';
import { Mail, Smartphone, MapPin, Globe, ChevronDown } from 'lucide-react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`w-full lg:w-[280px] glass-card p-8 flex flex-col items-center lg:sticky lg:top-8 h-fit lg:max-h-[calc(100vh-64px)] overflow-hidden transition-all duration-500 ${isOpen ? 'max-h-[1000px]' : 'max-h-[160px] lg:max-h-none'}`}>
      {/* Profile Info */}
      <div className="flex flex-row lg:flex-col items-center lg:text-center w-full relative">
        <div className="w-20 h-20 lg:w-32 lg:h-32 bg-border-primary rounded-2xl lg:rounded-3xl overflow-hidden mb-0 lg:mb-5 shrink-0">
            <img src="/src/assets/hero.png" alt="Ahmad Rasheed" className="w-full h-full object-cover" />
        </div>
        <div className="ml-5 lg:ml-0 flex-1">
          <h1 className="text-xl lg:text-2xl font-semibold mb-2 tracking-tight">Ahmad Rasheed</h1>
          <div className="bg-border-primary/50 px-3 lg:px-4 py-1 rounded-lg text-[10px] lg:text-xs font-medium text-text-secondary w-fit lg:mx-auto">
            Full-Stack Developer
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="absolute -top-4 -right-4 lg:hidden glass-card p-2 text-accent rounded-bl-xl rounded-tr-xl border-l border-b border-border-primary shadow-sm"
        >
          <span className="text-[10px] mr-1 inline-block align-middle font-medium">Show Contacts</span>
          <ChevronDown size={14} className={`inline-block transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <div className={`w-full transition-all duration-500 ${isOpen ? 'opacity-100 visible mt-8' : 'opacity-0 invisible lg:opacity-100 lg:visible lg:mt-8'}`}>
        <hr className="w-full border-border-primary mb-8" />

        {/* Contact List */}
        <div className="w-full space-y-6">
          <ContactItem 
            icon={<Mail size={18} className="text-accent" />} 
            label="EMAIL" 
            value="ahmad.r.tec@gmail.com" 
          />
          <ContactItem 
            icon={<Smartphone size={18} className="text-accent" />} 
            label="PHONE" 
            value="+92 337 6018055" 
          />
          <ContactItem 
            icon={<MapPin size={18} className="text-accent" />} 
            label="LOCATION" 
            value="Lahore, Pakistan" 
          />
        </div>

        <hr className="w-full border-border-primary my-8 lg:hidden" />

        {/* Social Links */}
        <div className="flex justify-center gap-4 lg:mt-8">
          <SocialLink href="https://github.com/ahmadrasheed8055" icon={<Globe size={18} />} />
        </div>
      </div>
    </aside>
  );
};

const ContactItem = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-10 h-10 glass-card flex items-center justify-center shrink-0 shadow-lg">
      {icon}
    </div>
    <div className="overflow-hidden">
      <p className="text-[10px] text-text-secondary/60 uppercase tracking-wider">{label}</p>
      <p className="text-sm text-text-secondary truncate">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    className="text-text-secondary/70 hover:text-accent transition-colors duration-300"
  >
    {icon}
  </a>
);

export default Sidebar;
