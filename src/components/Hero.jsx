import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, PlayCircle, Award, Wrench, ShieldCheck } from 'lucide-react';
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
      title: '¡Próximamente!',
      description: "Esta función de video aún no está implementada. ¡Puedes solicitarla en tu próximo mensaje!",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]" />,
      title: '+60 años de experiencia',
    },
    {
      icon: <Wrench className="w-6 h-6 sm:w-8 sm:h-8 text-green-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]" />,
      title: 'Tecnología de diagnóstico',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-green-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]" />,
      title: 'Garantía y repuestos',
    },
  ];

  return (
    <section id="inicio" className="relative min-h-[100vh] w-full overflow-hidden">
      {/* Fondo */}
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

      {/* Contenido */}
      <div className="relative z-20 min-h-[100dvh] flex flex-col justify-center items-center text-center px-4 sm:px-4 pt-[8vh] pb-[8vh] sm:pt-[4vh] sm:pb-[4vh] md:pt-[18vh] lg:pt-[16vh]">

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="flex justify-center my-6">
            <img
              src="/Logo/logo.jpg"
              alt="Logo Micromecánica Rotania"
              className="w-44 h-44 object-cover rounded-full border-2 border-[#0B4F3A] shadow-[0_0_25px_4px_rgba(11,79,58,0.6)] 
              hover:scale-105 transition-transform duration-300"
              style={{ filter: "drop-shadow(0 0 35px rgba(34,197,94,0.6))" }}

            />
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-7xl lg:text-4xl font-bold mb-16 tracking-tighter max-w-[100%] mx-auto"
            style={{ textShadow: '0px 4px 15px rgba(0, 255, 135, 0.2)' }}
          >
            Micromecánica Rotania SRL
          </h1>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 justify-items-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex sm:flex-col items-center justify-center gap-2 sm:gap-3 bg-white/5 
                          backdrop-blur-sm rounded-xl px-5 py-4 sm:px-6 sm:py-5 border border-white/10 
                          hover:border-green-400/30 transition duration-300 w-[85%] sm:w-[280px] mx-auto text-center"
              >
                {feature.icon}
                <p className="text-sm sm:text-base text-white font-medium leading-tight">
                  {feature.title}
                </p>
              </div>
            ))}
          </motion.div>

          {/* Botones */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mt-4 mb-15 sm:mb-20 w-full items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection('servicios')}
              size="lg"
              className="bg-gradient-to-r from-[#0B4F3A] to-green-600 text-white font-bold text-lg 
                        px-6 py-5 rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 
                        hover:scale-105 w-[85%] max-w-[320px] sm:w-auto sm:max-w-none"
            >
              Ver Servicios
            </Button>

            <Button
              onClick={showNotImplementedToast}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white font-bold text-lg 
                        px-6 py-5 rounded-full shadow-lg transition-all duration-300 hover:scale-105 
                        w-[85%] max-w-[320px] sm:w-auto sm:max-w-none"
            >
              <PlayCircle className="w-6 h-6 mr-2" />
              Ver Taller
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-b from-transparent to-[#111C17] z-40"></div>

      {/* Flecha */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 1 }}
        className="absolute bottom-4 sm:bottom-10 lg:bottom-19 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-8 h-8 sm:w-10 sm:h-10 text-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
