import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  const navItems = [
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'trabajos', label: 'Trabajos' },
    { id: 'calificaciones', label: 'Clientes' },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-[#0A100D]/80 backdrop-blur-lg shadow-lg shadow-black/20 border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <div 
              className="text-2xl font-bold text-white cursor-pointer"
              onClick={() => scrollToSection('inicio')}
            >
              <span className="text-green-400">MR</span> SRL
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className="text-gray-300 hover:text-white transition-colors font-medium relative group"
                >
                  <span>{item.label}</span>
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-green-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                </a>
              ))}
            </div>

            <div className="hidden md:block">
              <Button onClick={() => scrollToSection('contacto')} className="bg-[#0B4F3A] hover:bg-green-700 text-white font-semibold rounded-full px-6 transition-all duration-300 transform hover:scale-105">
                Contacto
              </Button>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsOpen(!isOpen)} className="text-white z-50 relative">
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#0A100D]/95 backdrop-blur-lg md:hidden"
          >
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center justify-center h-full space-y-8"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => { e.preventDefault(); scrollToSection(item.id); }}
                  className="text-3xl font-semibold text-gray-200 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <Button onClick={() => scrollToSection('contacto')} size="lg" className="bg-[#0B4F3A] hover:bg-green-700 text-lg font-semibold px-8 py-4 mt-8 rounded-full">
                Contacto
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;