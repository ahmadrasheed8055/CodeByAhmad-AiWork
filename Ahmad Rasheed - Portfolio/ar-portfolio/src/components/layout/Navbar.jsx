const Navbar = ({ activeSection, setActiveSection }) => {
  const navItems = ['About', 'Projects', 'Education', 'Contact'];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-[#2b2b2c]/80 backdrop-blur-md border-t border-border-primary px-4 py-3 z-50 lg:absolute lg:top-0 lg:right-0 lg:bottom-auto lg:left-auto lg:w-fit lg:rounded-bl-3xl lg:rounded-tr-3xl lg:border-t-0 lg:border-l lg:border-b lg:px-10 lg:py-6">
      <ul className="flex items-center justify-between gap-4 lg:gap-8">
        {navItems.map((item) => (
          <li key={item}>
            <button
              onClick={() => setActiveSection(item.toLowerCase())}
              className={`text-sm font-medium transition-colors duration-300 ${
                activeSection === item.toLowerCase() 
                  ? 'text-accent' 
                  : 'text-text-secondary hover:text-text-secondary/70'
              }`}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
