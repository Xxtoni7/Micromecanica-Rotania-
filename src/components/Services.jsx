import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Wrench, Sparkles, Package, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { useToast } from './ui/use-toast';

const Services = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });
  const { toast } = useToast();

  const handleServiceClick = (serviceName) => {
    toast({
      title: "¡Consulta tu servicio!",
      description: `Desplázate a la sección de Contacto para consultar sobre ${serviceName}`,
      duration: 4000,
    });
  };

  const services = [
    {
      icon: Wrench,
      title: 'Servicio de Taller',
      description: 'Diagnóstico y reparación de instrumental, aire acondicionado, alternadores, y más.',
    },
    {
      icon: Sparkles,
      title: 'Estética Automotriz',
      description: 'Pulido, corrección de pintura, tratamiento de ópticas y protección cerámica.',
    },
    {
      icon: Package,
      title: 'Venta de Repuestos',
      description: 'Sensores, bombas de combustible y sistemas de iluminación LED/Xenón originales.',
    }
  ];
  
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="servicios" className="py-32 bg-gradient-to-b from-[#0A100D] to-[#0F172A] relative overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(37,99,71,0.2),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Servicios Integrales
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Tecnología y experiencia para cuidar cada detalle de tu vehículo.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group"
            >
              <div 
                className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 h-full flex flex-col transition-all duration-300 hover:bg-white/10 hover:border-green-400/50 hover:-translate-y-2"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#0B4F3A] to-green-600 flex items-center justify-center mb-6 shadow-lg shadow-green-500/20">
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 flex-grow">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                <Button
                  onClick={() => handleServiceClick(service.title)}
                  className="w-full bg-transparent border border-white/20 hover:bg-[#0B4F3A] hover:border-[#0B4F3A] text-white font-semibold py-6 rounded-xl transition-all duration-300"
                >
                  <span className="mr-2">Consultar</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;