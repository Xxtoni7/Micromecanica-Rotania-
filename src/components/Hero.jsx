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
      title: '🚧 ¡Próximamente!',
      description: "Esta función de video aún no está implementada. ¡Puedes solicitarla en tu próximo mensaje! 🚀",
      duration: 3000,
    });
  };

  const features = [
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8 text-green-300 drop-shadow-[0_0_8px_rgba(34,197,94,0.3)]" />,
      title: '+30 años de experiencia',
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
      <div className="relative z-20 h-full flex flex-col justify-center items-center text-center px-6 sm:px-4 pt-[20vh] md:pt-[22vh] lg:pt-[20vh] pb-[12vh]">


        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Título principal */}
          <h1
            className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tighter uppercase"
            style={{ textShadow: '0px 4px 15px rgba(0, 255, 135, 0.2)' }}
          >
            Micromecánica Rotania
          </h1>

          {/* Subtítulo */}
          <p className="text-base sm:text-lg md:text-xl text-green-100/90 max-w-3xl mx-auto leading-relaxed font-light mb-12">
            Pioneros en instrumental automotor.{' '}
            <span className="font-semibold text-white">
              Reparación, diagnóstico y repuestos
            </span>{' '}
            con garantía.
          </p>

          {/* Features */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 justify-items-center mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            {features.map((feature, i) => (
              <div
                key={i}
                className="flex sm:flex-col items-center justify-center gap-2 sm:gap-3 bg-white/5 backdrop-blur-sm 
                           rounded-xl px-5 py-4 sm:px-6 sm:py-5 border border-white/10 hover:border-green-400/30 
                           transition duration-300 w-full sm:w-auto text-center max-w-[85%] sm:max-w-none"
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
            className="flex flex-col sm:flex-row gap-5 justify-center mt-6 mb-24 sm:mb-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              onClick={() => scrollToSection('servicios')}
              size="lg"
              className="bg-gradient-to-r from-[#0B4F3A] to-green-600 text-white hover:from-green-600 hover:to-green-700 
                         font-bold text-lg px-8 py-6 rounded-full shadow-lg shadow-green-500/20 transition-all duration-300 
                         transform hover:scale-105"
            >
              Ver Servicios
            </Button>
            <Button
              onClick={showNotImplementedToast}
              size="lg"
              variant="outline"
              className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-[#0B4F3A] 
                         font-bold text-lg px-8 py-6 rounded-full shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              <PlayCircle className="w-6 h-6 mr-2" />
              Ver Taller
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Degradado inferior */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-b from-transparent to-[#111C17] z-40"></div>

      {/* Flecha animada */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-40"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-10 h-10 text-white/50" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
