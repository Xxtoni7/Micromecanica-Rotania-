import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, Wrench, ShieldCheck } from 'lucide-react';

const About = () => {
  const [ref, isInView] = useInView({ threshold: 0.3, once: true });

  const features = [
    {
      icon: <Award className="w-8 h-8 text-green-300" />,
      title: '+30 años de experiencia',
    },
    {
      icon: <Wrench className="w-8 h-8 text-green-300" />,
      title: 'Tecnología de diagnóstico',
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-green-300" />,
      title: 'Garantía y Repuestos',
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.3 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.2 } }
  };

  return (
    <section id="nosotros" className="relative py-32 bg-[#0A100D] overflow-hidden">
      <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-gradient-to-r from-green-900/10 via-green-900/5 to-transparent rounded-full blur-3xl -rotate-45"></div>
      
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Evolucionamos para ofrecerte <span className="text-green-400">el mejor servicio.</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-lg text-gray-300 mb-8 leading-relaxed">
              Desde hace décadas, en Micromecánica Rotania SRL nos especializamos en la reparación de instrumental automotor y en una cobertura integral de sistemas. Incorporamos tecnología de diagnóstico avanzada para garantizar la máxima precisión en cada trabajo.
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

          <motion.div
            variants={imageVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="relative h-[500px] w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#0B4F3A] to-green-800" style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}></div>
            <img
              className="absolute inset-0 w-full h-full object-cover"
              style={{ clipPath: 'polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%)' }}
              alt="Mecánico trabajando en un motor con herramientas avanzadas"
              src="https://images.unsplash.com/photo-1621999330922-263a6a12a58b" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;