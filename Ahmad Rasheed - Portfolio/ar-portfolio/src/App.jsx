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
    <main className="min-h-screen bg-bg-body py-6 sm:py-10 lg:py-14 px-4 sm:px-8 xl:px-12 flex flex-col justify-center items-center">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-6 lg:gap-8 relative items-stretch">
        {/* Left Sidebar */}
        <Sidebar />

        {/* Right Content Area */}
        <div className="flex-1 w-full glass-card min-h-[550px] lg:min-h-[700px] relative p-6 sm:p-10 lg:p-12 flex flex-col justify-between mb-20 lg:mb-0">
          {/* Navigation */}
          <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

          {/* Dynamic Content */}
          <div className="mt-8 lg:mt-4 flex-1">
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
