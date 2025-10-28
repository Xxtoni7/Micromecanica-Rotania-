import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useInView } from "../hooks/useInView";

const Reviews = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const reviews = [
    { name: 'Richy Canello', rating: 5, text: 'El mejor lugar de Santa Fe, para el asesoramiento y la atención de cualquier problema eléctrico, electrónico y de refrigeración. A demas porque son muy piolas los chicos, y muy buena gente!' },
    { name: 'Sirio Abraham', rating: 5, text: 'Todo en su lugar, local, artículos, precios, tiempos, asesoramiento y lo más importante.  La calidez humana!!!! 👏👏👏👏👏 Todo dicho…' },
    { name: 'Diego Alonso', rating: 5, text: 'Muy buena atención! Conseguí el repuesto que necesitaba! La gente que me atendió, lo buscó hasta que apareció! Muchas gracias!' },
    { name: 'Hada M. Bonguan', rating: 5, text: 'Excelente atención y disposición para orientar al cliente. Gran surtido de repuestos en general. Precios accesibles' },
    { name: 'Carlos Mendez', rating: 5, text: 'Excelente atención, resolvieron mi problema enseguida. El diagnóstico fue preciso y el trabajo impecable.' },
    { name: 'Omar Cabrera', rating: 5, text: 'Excelente atención y me solucionaron el problema que era lo que necesitaba altamente recomendable.' },
    { name: 'Jose A. Moreno', rating: 5, text: 'soy cliente de hace varios años y compro lo que necesito, tienen gran variedad de productos' },
    { name: 'Valeria andisco', rating: 5, text: 'Excelente atención. La mejor relación calidad-precio' },
    { name: 'Javier Gutierrez', rating: 5, text: 'Gente que sabe y en la que se puede confiar plenamente. Recomendable 100%' },
  ];

  const nextSlide = () => setIndex((prev) => (prev + 1) % reviews.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + reviews.length) % reviews.length);

  // Auto-slide cada 6 segundos
  useEffect(() => {
    startAutoSlide();
    return stopAutoSlide;
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    intervalRef.current = setInterval(nextSlide, 6000);
  };

  const stopAutoSlide = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  return (
    <section
      id="calificaciones"
      className="py-32 bg-gradient-to-b from-[#101418] to-[#0E1612] relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        
        {/* Título */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Clientes que confían en nosotros
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            La satisfacción de nuestros clientes es nuestra mejor garantía.
          </p>
        </motion.div>

        {/* Carrusel */}
        <div
          className="relative flex items-center justify-center overflow-hidden"
          onMouseEnter={stopAutoSlide}
          onMouseLeave={startAutoSlide}
        >
          {/* Flechas */}
          <button
            onClick={prevSlide}
            className="absolute left-2 md:left-10 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 md:right-10 z-20 bg-white/10 hover:bg-white/20 backdrop-blur-sm p-2 rounded-full transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Slides */}
          <div className="flex items-center justify-center w-full relative h-[430px] sm:h-[450px] md:h-[500px]">

            <AnimatePresence initial={false}>
              {reviews.map((review, i) => {
                const offset = (i - index + reviews.length) % reviews.length;
                let scale = 0.7;
                let opacity = 0;
                let zIndex = 0;
                let x = 0;
                let blur = "blur-sm";

                if (offset === 0) {
                  scale = 1;
                  opacity = 1;
                  zIndex = 10;
                  blur = "blur-0";
                } else if (offset === 1 || offset === reviews.length - 1) {
                  scale = 0.85;
                  opacity = 0.6;
                  x = offset === 1 ? 220 : -220;
                } else {
                  x = offset > 1 ? 400 : -400;
                }

                return (
                  <motion.div
                    key={i}
                    className={`absolute w-[85%] md:w-[45%] bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 shadow-lg ${blur}`}
                    initial={{ opacity: 0, scale: 0.7 }}
                    animate={{ opacity, scale, x, zIndex }}
                    exit={{ opacity: 0, scale: 0.7 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Quote className="w-8 h-8 text-green-400/50 mb-4" />
                    <p className="text-gray-300 mb-6 leading-relaxed italic">
                      "{review.text}"
                    </p>
                    <div className="border-t border-white/10 pt-6">
                      <div className="flex justify-between items-center">
                        <p className="text-white font-semibold">{review.name}</p>
                        <div className="flex">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-5 h-5 text-yellow-400 fill-yellow-400"
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>

        {/* Indicadores */}
        <div className="flex justify-center mt-10 gap-2">
          {reviews.map((_, i) => (
            <div
              key={i}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === index ? "bg-green-400 scale-110" : "bg-white/20"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
