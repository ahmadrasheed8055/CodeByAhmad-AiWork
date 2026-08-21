import { useState } from 'react';
import { Mail, Smartphone, MapPin, Globe, ChevronDown, Linkedin, Github, FileText } from 'lucide-react';
import profileImg from '../../assets/Ahmad-Profile.jpg';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`w-full lg:w-[320px] xl:w-[340px] glass-card p-6 lg:p-8 flex flex-col justify-between items-center transition-all duration-500 shrink-0 ${isOpen ? 'max-h-[1000px]' : 'max-h-[160px] lg:max-h-none'}`}>
      {/* Profile Info */}
      <div className="flex flex-row lg:flex-col items-center lg:text-center w-full relative">
        <div className="w-20 h-20 lg:w-36 lg:h-36 bg-border-primary rounded-2xl lg:rounded-3xl overflow-hidden mb-0 lg:mb-6 shrink-0 border-2 border-border-primary/50 shadow-md">
            <img src={profileImg} alt="Ahmad Rasheed" className="w-full h-full object-cover" />
        </div>
        <div className="ml-5 lg:ml-0 flex-1">
          <h1 className="text-xl lg:text-2xl font-bold mb-2 tracking-tight text-white">Ahmad Rasheed</h1>
          <div className="bg-border-primary/60 px-3 lg:px-4 py-1.5 rounded-xl text-[11px] lg:text-xs font-medium text-accent w-fit lg:mx-auto border border-accent/20">
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

      <div className={`w-full flex-1 flex flex-col justify-between transition-all duration-500 ${isOpen ? 'opacity-100 visible mt-6' : 'opacity-0 invisible lg:opacity-100 lg:visible lg:mt-6'}`}>
        <div>
          <hr className="w-full border-border-primary mb-6" />

          {/* Contact List */}
          <div className="w-full space-y-5">
            <ContactItem 
              icon={<Mail size={18} className="text-accent" />} 
              label="EMAIL" 
              value="ahmad.r.tec@gmail.com" 
            />
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 glass-card flex items-center justify-center shrink-0 shadow-lg">
                <FileText size={18} className="text-accent" />
              </div>
              <div className="overflow-hidden">
                <p className="text-[10px] text-text-secondary/60 uppercase tracking-wider font-semibold">RESUME</p>
                <a 
                  href="/AhmadRasheed_Intern_Resume.pdf" 
                  download="AhmadRasheed_Resume.pdf"
                  className="text-sm font-medium text-accent hover:underline decoration-accent/30"
                >
                  Download PDF
                </a>
              </div>
            </div>
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
        </div>

        <div>
          <hr className="w-full border-border-primary my-6" />

          {/* Social Links */}
          <div className="flex justify-center gap-5">
            <SocialLink href="https://github.com/ahmadrasheed8055" icon={<Github size={20} />} />
            <SocialLink href="https://www.linkedin.com/in/ahmad-rasheed-a51740274/" icon={<Linkedin size={20} />} />
          </div>
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
    <div className="min-w-0 flex-1">
      <p className="text-[10px] text-text-secondary/60 uppercase tracking-wider font-semibold">{label}</p>
      <p className="text-xs lg:text-sm text-text-secondary whitespace-nowrap overflow-hidden text-ellipsis">{value}</p>
    </div>
  </div>
);

const SocialLink = ({ href, icon }) => (
  <a 
    href={href} 
    target="_blank"
    rel="noopener noreferrer"
    className="w-9 h-9 glass-card flex items-center justify-center text-text-secondary/70 hover:text-accent hover:border-accent/40 transition-all duration-300 shadow-md"
  >
    {icon}
  </a>
);

export default Sidebar;
