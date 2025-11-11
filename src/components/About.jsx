import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Compass, Users, Settings, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';


const About = () => {


  const [ref, isInView] = useInView({
    threshold: 0.15, 
    rootMargin: "0px 0px -10% 0px", 
    once: true,
  });

  const features = [
    {
      icon: <Compass className="w-8 h-8 text-green-300" />,
      title: 'Innovación constante',
    },
    {
      icon: <Users className="w-8 h-8 text-green-300" />,
      title: 'Equipo comprometido',
    },
    {
      icon: <Settings className="w-8 h-8 text-green-300" />,
      title: 'Precisión en cada trabajo',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.15 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.25 },
    },
  };

  const images = [
  '/imagenes/taller/TallerImg1.jpg',
  '/imagenes/taller/TallerImg2.jpg',
  '/imagenes/taller/TallerImg3.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="nosotros" className="relative py-32 bg-[#111C17] overflow-hidden">
      <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-green-900/10 via-green-900/5 to-transparent rounded-full blur-3xl -rotate-45"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Texto y contenido */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight"
            >
              Evolucionamos para ofrecerte{' '}
              <span className="text-green-400">el mejor servicio.</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 mb-8 leading-relaxed"
            >
              Somos una empresa líder en electromecánica del automotor, especializada en el diagnóstico,
              mantenimiento y reparación de vehículos. Ofrecemos un servicio integral con tecnología avanzada
              y un equipo de profesionales comprometidos con la calidad, la eficiencia y la satisfacción de
              nuestros clientes. Además, contamos con un sector exclusivo de venta de repuestos, garantizando
              soluciones completas y confiables para cada necesidad automotriz.
            </motion.p>

            <motion.div variants={itemVariants} className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex-shrink-0 w-16 h-16 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Imagen */}
          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-[500px] w-full overflow-hidden rounded-2xl"
          >
            <motion.div
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              className="absolute inset-0 flex"
              animate={{ x: `-${currentIndex * 100}%` }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {images.map((src, i) => (
                <motion.img
                  key={i}
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  className="w-full flex-shrink-0 object-cover"
                  style={{
                    clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)',
                  }}
                />
              ))}
            </motion.div>

            {/* Botones laterales solo en desktop */}
            <div className="hidden sm:flex absolute inset-0 justify-between items-center px-3 z-20">
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
                }
                className="bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
              >
                <ChevronLeft className="text-white w-6 h-6" />
              </button>
              <button
                onClick={() =>
                  setCurrentIndex((prev) => (prev + 1) % images.length)
                }
                className="bg-black/40 hover:bg-black/70 p-2 rounded-full transition"
              >
                <ChevronRight className="text-white w-6 h-6" />
              </button>
            </div>

            {/* Indicadores inferiores */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, i) => (
                <div
                  key={i}
                  className={`w-3 h-3 rounded-full transition-all ${
                    i === currentIndex ? 'bg-green-400 scale-110' : 'bg-white/40'
                  }`}
                ></div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
