import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Button } from './ui/button';
import { Plus, Maximize2, Minus } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription,} from "./ui/dialog";
import { ChevronLeft, ChevronRight } from 'lucide-react';


const allWorks = [
  {
    id: 1, title: 'Chequeo de presión y reinstalación eléctrica', category: 'Sistema Eléctrico y Presión', 
    mediaUrl: '/imagenes/trabajos/audiTrabajo1.jpg', mediaType: 'image',
    media: [
      { url: '/imagenes/trabajos/audiTrabajo1.jpg', type: 'image' },
      { url: '/imagenes/trabajos/audiTrabajo2.jpg', type: 'image' },
      { url: '/videos/audiTrabajoVideo.mp4', type: 'video' },
    ],
    description: 'Se realizó un control del reloj de presión de turbo y aceite, junto con la reinstalación completa del cableado original, producto de un corte previo. El trabajo garantizó lecturas precisas y funcionamiento eléctrico seguro.',
    layout: "lg:col-span-2 lg:row-span-2"
  },
  {
    id: 2, title: 'Reparación y calibración', category: 'Instrumental y Electrónica', 
    mediaUrl: '/imagenes/trabajos/TableroDigital1.jpg', mediaType: 'image',
    media: [
      { url: '/imagenes/trabajos/TableroDigital1.jpg', type: 'image' },
      { url: '/imagenes/trabajos/TableroDigital2.jpg', type: 'image' },
    ],
    description: 'Se realizó la reparación completa del tablero digital, con reemplazo de plaquetas dañadas, revisión de componentes electrónicos y calibración final para garantizar el funcionamiento correcto de todas las lecturas e indicadores.',
    layout: ""
  },
  {
    id: 3, title: 'Diagnóstico y calibración electrónica', category: 'Electromecánica', 
    mediaUrl: '/imagenes/trabajos/trabajo1.jpg', mediaType: 'image',
    media: [
      { url: '/imagenes/trabajos/trabajo1.jpg', type: 'image' },
      { url: '/imagenes/trabajos/trabajo1a.jpg', type: 'image' },
      { url: '/imagenes/trabajos/trabajo1b.jpg', type: 'image' },
    ],
    description: 'Chequeo y calibración de sistemas electrónicos con diagnóstico integral de instrumentos, reinstalación de cableado y verificación de funcionamiento.',
    layout: ""
  },
  {
    id: 4, title: 'Servicio de aire acondicionado', category: 'Climatización', 
    mediaUrl: '/imagenes/trabajos/TrabajoAire.jpg', mediaType: 'image',
    media: [
      { url: '/imagenes/trabajos/TrabajoAire.jpg', type: 'image' },
    ],
    description: 'Control de presión, detección de fugas y recarga completa del sistema de aire acondicionado. Reparación de componentes y revisión del sistema de calefacción para garantizar un funcionamiento óptimo en todo clima.',
    layout: ""
  },
  {
    id: 5, title: 'Luces bajas Led', category: 'Iluminación', 
    mediaUrl: '/imagenes/trabajos/TrabajoLed.jpg', mediaType: 'image',
    media: [
      { url: '/imagenes/trabajos/TrabajoLed.jpg', type: 'image' },
      { url: '/videos/trabajos/VideoTrabajoLed.mp4', type: 'video' }, 
    ],
    description: 'Ingreso de Vento GLI para reemplazo de luces bajas. Se instalaron unidades originales con un tono más blanco a pedido del cliente, logrando una mejora estética y mayor claridad sin alterar el sistema original.',
    layout: "lg:col-span-2"
  },
  {
    id: 6, title: 'Instalación eléctrica náutica', category: 'Sistemas Eléctricos', 
    mediaUrl: '/imagenes/trabajos/TrabajoLancha1.jpg', mediaType: 'image',
    media: [
      { url: '/videos/trabajos/videoTrabajoLancha.mp4', type: 'video' },
      { url: '/imagenes/trabajos/TrabajoLancha1.jpg', type: 'image' },
      { url: '/imagenes/trabajos/TrabajoLancha2.jpg', type: 'image' },
      { url: '/imagenes/trabajos/TrabajoLancha3.jpg', type: 'image' },
      { url: '/imagenes/trabajos/TrabajoLancha4.jpg', type: 'image' },
    ],
    description: 'Instalación completa de sistema de audio, parlantes, ecosonda e iluminación LED. Integración de todos los componentes con calibración del volante y pruebas de funcionamiento para un control total a bordo.',
    layout: "lg:col-span-2"
  },
  {
    id: 7, title: 'Reparación Alternador', category: 'Sistema Eléctrico', 
    mediaUrl: '/imagenes/trabajos/TrabajoPorsche1.jpg', mediaType: 'image',
    media: [
      { url: '/videos/trabajos/videoTrabajoPorsche.mp4', type: 'video' },
      { url: '/imagenes/trabajos/TrabajoPorsche1.jpg', type: 'image' },
      { url: '/imagenes/trabajos/TrabajoPorsche2.jpg', type: 'image' },
      { url: '/imagenes/trabajos/TrabajoPorsche3.jpg', type: 'image' },
    ],
    description: 'Diagnóstico y reparación de alternador con reemplazo de rodamientos y regulador.',
    layout: "lg:col-span-2"
  },
];

const Works = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, once: true });
  const [visibleCount, setVisibleCount] = useState(5);
  const [selectedWork, setSelectedWork] = useState(null);
  const [mediaIndex, setMediaIndex] = useState(0);


  const loadMore = () => setVisibleCount(prev => Math.min(prev + 3, allWorks.length));

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  const nextMedia = () => {
  if (!selectedWork || !selectedWork.media) return;
  setMediaIndex((prev) => (prev + 1) % selectedWork.media.length);
  };

  const prevMedia = () => {
    if (!selectedWork || !selectedWork.media) return;
    setMediaIndex((prev) => (prev - 1 + selectedWork.media.length) % selectedWork.media.length);
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
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">Calidad y precisión en cada trabajo que realizamos.</p>
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
                onClick={() => {
                  setSelectedWork(work);
                  setMediaIndex(0);
                }}
              >
                {work.mediaType === 'video' ? (
                  <video
                    className={`absolute inset-0 w-full h-full ${
                      [4, 6, 7].includes(work.id)
                        ? 'object-contain bg-black'
                        : 'object-cover'
                    } group-hover:scale-110 transition-transform duration-500 ease-in-out`}
                    autoPlay
                    loop
                    muted
                    playsInline
                    src={work.mediaUrl}
                  ></video>
                ) : (
                  <img
                    className={`absolute inset-0 w-full h-full ${
                      [4, 6, 7].includes(work.id)
                        ? 'object-contain bg-black'
                        : 'object-cover'
                    } group-hover:scale-110 transition-transform duration-500 ease-in-out`}
                    alt={work.title}
                    src={work.mediaUrl}
                  />
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
              <div className="relative h-96 flex items-center justify-center bg-black">
                {selectedWork.media && selectedWork.media.length > 0 ? (
                  <>
                    {selectedWork.media[mediaIndex].type === 'video' ? (
                      <video
                        className="w-full h-full object-contain rounded-t-lg bg-black"
                        controls
                        playsInline
                        muted
                        preload="metadata"
                      >
                        <source src={selectedWork.media[mediaIndex].url} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        className="w-full h-full object-contain rounded-t-lg bg-black"
                        alt={selectedWork.title}
                        src={selectedWork.media[mediaIndex].url}
                      />
                    )}

                    {selectedWork.media.length > 1 && (
                      <>
                        <button
                          onClick={prevMedia}
                          className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 transition"
                        >
                          <ChevronLeft className="w-6 h-6 text-white" />
                        </button>
                        <button
                          onClick={nextMedia}
                          className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 rounded-full p-2 transition"
                        >
                          <ChevronRight className="w-6 h-6 text-white" />
                        </button>
                      </>
                    )}
                  </>
                ) : (
                  <>
                    {selectedWork.mediaType === 'video' ? (
                      <video
                        className="w-full h-full object-contain rounded-t-lg bg-black"
                        controls
                        playsInline
                        muted
                        preload="metadata"
                      >
                        <source src={selectedWork.mediaUrl} type="video/mp4" />
                      </video>
                    ) : (
                      <img
                        className="w-full h-full object-contain rounded-t-lg bg-black"
                        alt={selectedWork.title}
                        src={selectedWork.mediaUrl}
                      />
                    )}
                  </>
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
