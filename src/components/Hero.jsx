import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, PlayCircle } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Hero = () => {
  const { toast } = useToast();
  
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showNotImplementedToast = () => {
    toast({
      title: '🚧 ¡Próximamente!',
      description: "Esta función de video aún no está implementada. ¡Puedes solicitarla en tu próximo mensaje! 🚀",
      duration: 3000,
    });
  }

  return (
    <section id="inicio" className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/60 z-10"></div>
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/videos/videofondo.mp4"
        ></video>
      </div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white mb-6 tracking-tighter uppercase" style={{ textShadow: '0px 4px 15px rgba(0, 255, 135, 0.2)' }}>
            Micromecánica Rotania
          </h1>
          
          <p className="text-lg md:text-xl text-green-100/90 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            Pioneros en instrumental automotor. <span className="font-semibold text-white">Reparación, diagnóstico y repuestos</span> con garantía.
          </p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button 
              onClick={() => scrollToSection('servicios')}
              size="lg"
              className="bg-gradient-to-r from-[#0B4F3A] to-green-600 text-white hover:from-green-600 hover:to-green-700 font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 transform hover:scale-105"
            >
              Ver Servicios
            </Button>
            <Button 
              onClick={showNotImplementedToast}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-[#0B4F3A] font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <PlayCircle className="w-6 h-6 mr-2" />
              Ver Taller
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0A100D] to-transparent z-30"></div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-10 h-10 text-white/50" />
        </motion.div>
      </motion.div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#111C17]/95 via-[#0E1612]/80 to-transparent z-30"></div>
    </section>
  );
};

export default Hero;