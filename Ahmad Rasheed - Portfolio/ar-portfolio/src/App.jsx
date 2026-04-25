import { useState } from 'react';
import Sidebar from './components/layout/Sidebar';
import Navbar from './components/layout/Navbar';
import About from './components/sections/About';
import Resume from './components/sections/Resume';
import Portfolio from './components/sections/Portfolio';
import Blog from './components/sections/Blog';
import Contact from './components/sections/Contact';
import { AnimatePresence } from 'framer-motion';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About key="about" />;
      case 'projects':
        return <Resume key="resume" />;
      case 'education':
        return <Portfolio key="portfolio" />;
      case 'contact':
        return <Contact key="contact" />;
      default:
        return <About />;
    }
  };

  return (
    <main className="min-h-screen bg-bg-body py-8 px-4 sm:px-8 lg:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-8 relative items-start">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content Area */}
        <div className="flex-1 w-full glass-card min-h-[500px] lg:min-h-[700px] relative p-8 lg:p-12 mb-20 lg:mb-0">
          {/* Navigation */}
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Dynamic Content */}
          <div className="mt-8 lg:mt-0">
            <AnimatePresence mode="wait">
              {renderSection()}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
