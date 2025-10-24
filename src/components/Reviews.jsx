import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Star, Quote } from 'lucide-react';

const Reviews = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });

  const reviews = [
    { name: 'Carlos Mendez', rating: 5, text: 'Excelente atención, resolvieron mi problema enseguida. El diagnóstico fue preciso y el trabajo impecable.' },
    { name: 'María González', rating: 5, text: 'Profesionales, con equipos modernos y garantía real. Mi auto quedó como nuevo después del servicio de aire acondicionado.' },
    { name: 'Roberto Silva', rating: 5, text: 'Mi auto quedó impecable, totalmente recomendable. La atención personalizada y el seguimiento post-servicio son excepcionales.' },
  ];
  
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, x: -40 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="calificaciones" className="py-32 bg-gradient-to-b from-[#101418] to-[#0E1612] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clientes que confían en nosotros
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">La satisfacción de nuestros clientes es nuestra mejor garantía.</p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 flex flex-col"
            >
              <Quote className="w-8 h-8 text-green-400/50 mb-4" />
              
              <p className="text-gray-300 mb-6 leading-relaxed flex-grow italic">
                "{review.text}"
              </p>

              <div className="border-t border-white/10 pt-6">
                <div className="flex justify-between items-center">
                    <p className="text-white font-semibold">{review.name}</p>
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                      ))}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Reviews;