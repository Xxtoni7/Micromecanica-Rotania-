import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Button } from './ui/button';
import { Plus, Maximize2, Minus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "./ui/dialog";

const allWorks = [
  {
    id: 1, title: 'Reparación de A/C', category: 'Aire Acondicionado', 
    mediaUrl: 'https://videos.pexels.com/video-files/8094132/8094132-hd_1920_1080_25fps.mp4', mediaType: 'video',
    description: 'Diagnóstico completo y reparación de sistema de climatización con recarga de gas.',
    layout: "lg:col-span-2 lg:row-span-2"
  },
  {
    id: 2, title: 'Conversión LED', category: 'Iluminación', 
    mediaUrl: 'https://images.unsplash.com/photo-1634839526458-8ae8e2cc6b44', mediaType: 'image',
    description: 'Instalación de sistema de iluminación LED de alta eficiencia para mejor visibilidad.',
    layout: ""
  },
  {
    id: 3, title: 'Restauración Instrumental', category: 'Instrumental', 
    mediaUrl: 'https://images.unsplash.com/photo-1595872018818-97555653a011', mediaType: 'image',
    description: 'Reparación y calibración de tablero de instrumentos digitales con componentes nuevos.',
    layout: ""
  },
  {
    id: 4, title: 'Pulido y Corrección', category: 'Estética', 
    mediaUrl: 'https://videos.pexels.com/video-files/4491538/4491538-hd_1920_1080_25fps.mp4', mediaType: 'video',
    description: 'Tratamiento profesional de carrocería con pulido y protección cerámica.',
    layout: ""
  },
  {
    id: 5, title: 'Reparación Alternador', category: 'Sistema Eléctrico', 
    mediaUrl: 'https://images.unsplash.com/photo-1660985338689-fe31c0cda422', mediaType: 'image',
    description: 'Diagnóstico y reparación de alternador con reemplazo de rodamientos y regulador.',
    layout: "lg:col-span-2"
  },
  // Hidden items
  { id: 6, title: 'Tratamiento de Ópticas', category: 'Estética', mediaUrl: 'https://images.unsplash.com/photo-1644497922836-4f31ef1f9575', mediaType: 'image', description: 'Restauración de faros opacos con pulido profesional y sellado protector UV.', layout: "" },
  { id: 7, title: 'Servicio de Frenos', category: 'Seguridad', mediaUrl: 'https://images.unsplash.com/photo-1617153629088-b21a37c03c53', mediaType: 'image', description: 'Reemplazo de pastillas y discos de freno con componentes de alta calidad.', layout: "" },
  { id: 8, title: 'Diagnóstico por Computadora', category: 'Diagnóstico', mediaUrl: 'https://videos.pexels.com/video-files/7573033/7573033-hd_1920_1080_30fps.mp4', mediaType: 'video', description: 'Análisis completo del vehículo con scanners de última generación para detectar fallas.', layout: "lg:col-span-2" },
];

const Works = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedWork, setSelectedWork] = useState(null);

  const loadMore = () => setVisibleCount(prev => Math.min(prev + 3, allWorks.length));

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="trabajos" className="py-32 bg-gradient-to-b from-[#111C17] to-[#151E18] relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 " ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trabajos Destacados
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Calidad y precisión en cada proyecto que realizamos.</p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 auto-rows-[20rem] gap-4"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <AnimatePresence>
            {allWorks.slice(0, visibleCount).map((work) => (
              <motion.div
                key={work.id}
                variants={itemVariants}
                layout
                className={`group relative rounded-3xl overflow-hidden shadow-lg ${work.layout}`}
                onClick={() => setSelectedWork(work)}
              >
                {work.mediaType === 'video' ? (
                  <video className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" autoPlay loop muted playsInline src={work.mediaUrl}></video>
                ) : (
                  <img className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out" alt={work.title} src={work.mediaUrl} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <span className="inline-block bg-[#0B4F3A]/80 text-white text-xs font-semibold px-3 py-1 rounded-full mb-2 w-fit">
                    {work.category}
                  </span>
                  <h3 className="text-xl font-bold text-white">
                    {work.title}
                  </h3>
                </div>
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer">
                  <Maximize2 className="w-12 h-12 text-white" />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          {visibleCount < allWorks.length ? (
            <Button
              onClick={loadMore}
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Plus className="w-5 h-5 mr-2" />
              Mostrar más
            </Button>
          ) : (
            <Button
              onClick={() => {
                setVisibleCount(5);
                const section = document.getElementById('trabajos');
                if (section) {
                  section.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
              }}
              size="lg"
              className="bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 text-white font-semibold px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <Minus className="w-5 h-5 mr-2" />
              Mostrar menos
            </Button>
          )}
        </motion.div>
      </div>

      <Dialog open={!!selectedWork} onOpenChange={() => setSelectedWork(null)}>
        <DialogContent className="bg-[#0F172A] border-green-700/50 text-white max-w-2xl p-0">
          {selectedWork && (
            <>
              <div className="relative h-96">
                {selectedWork.mediaType === 'video' ? (
                  <video className="w-full h-full object-cover rounded-t-lg" autoPlay loop muted playsInline src={selectedWork.mediaUrl}></video>
                ) : (
                  <img className="w-full h-full object-cover rounded-t-lg" alt={selectedWork.title} src={selectedWork.mediaUrl} />
                )}
              </div>
              <DialogHeader className="p-6">
                <DialogTitle className="text-2xl font-bold text-green-400">{selectedWork.title}</DialogTitle>
                <DialogDescription className="text-gray-300 pt-2">
                  <span className="font-semibold text-white">Categoría:</span> {selectedWork.category}
                </DialogDescription>
                <DialogDescription className="text-gray-300">
                  <span className="font-semibold text-white">Descripción:</span> {selectedWork.description}
                </DialogDescription>
              </DialogHeader>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Works;