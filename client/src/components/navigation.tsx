import { useState } from "react";
import { motion } from "framer-motion";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-royal-blue-800/30">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            <div className="text-2xl font-orbitron font-bold text-gradient">STONEHILL CITY</div>
          </div>
          
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            <button onClick={() => scrollToSection('home')} className="hover:text-blue-400 transition-colors">
              الرئيسية
            </button>
            <button onClick={() => scrollToSection('about')} className="hover:text-blue-400 transition-colors">
              حول السيرفر
            </button>
            <button onClick={() => scrollToSection('rules')} className="hover:text-blue-400 transition-colors">
              القوانين
            </button>
            <button onClick={() => scrollToSection('gallery')} className="hover:text-blue-400 transition-colors">
              المعرض
            </button>
            <button onClick={() => scrollToSection('community')} className="hover:text-blue-400 transition-colors">
              المجتمع
            </button>
          </div>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 py-4 border-t border-royal-blue-800/30"
          >
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('home')} className="text-right hover:text-blue-400 transition-colors">
                الرئيسية
              </button>
              <button onClick={() => scrollToSection('about')} className="text-right hover:text-blue-400 transition-colors">
                حول السيرفر
              </button>
              <button onClick={() => scrollToSection('rules')} className="text-right hover:text-blue-400 transition-colors">
                القوانين
              </button>
              <button onClick={() => scrollToSection('gallery')} className="text-right hover:text-blue-400 transition-colors">
                المعرض
              </button>
              <button onClick={() => scrollToSection('community')} className="text-right hover:text-blue-400 transition-colors">
                المجتمع
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}
