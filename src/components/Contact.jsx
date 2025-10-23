import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { MapPin, Clock, Instagram, MessageCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { useToast } from './ui/use-toast';

const Contact = () => {
  const [ref, isInView] = useInView({ threshold: 0.2, once: true });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: "✅ ¡Mensaje enviado!",
      description: "Nos pondremos en contacto contigo pronto.",
      duration: 5000,
    });
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };
  
  return (
    <section id="contacto" className="py-32 bg-[#0A100D] relative">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ponte en Contacto</h2>
          <p className="text-lg text-gray-400">Estamos listos para ayudarte.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
          >
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos tu consulta</h3>
              <div>
                <Label htmlFor="name" className="text-white/80 mb-2 block font-semibold">Nombre</Label>
                <Input id="name" name="name" value={formData.name} onChange={handleChange} required className="bg-white/5 border-white/20 text-white focus:border-green-400 h-12" placeholder="Tu nombre completo" />
              </div>
              <div>
                <Label htmlFor="email" className="text-white/80 mb-2 block font-semibold">Email</Label>
                <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="bg-white/5 border-white/20 text-white focus:border-green-400 h-12" placeholder="tu@email.com" />
              </div>
              <div>
                <Label htmlFor="message" className="text-white/80 mb-2 block font-semibold">Mensaje</Label>
                <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="bg-white/5 border-white/20 text-white focus:border-green-400" placeholder="Cuéntanos cómo podemos ayudarte..." />
              </div>
              <Button type="submit" className="w-full bg-gradient-to-r from-[#0B4F3A] to-green-600 text-white font-bold text-lg py-7 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/30 transform hover:scale-105">
                Enviar Consulta
              </Button>
            </form>
          </motion.div>
          
          <motion.div 
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={itemVariants}
            transition={{ delay: 0.2 }}
            className="space-y-8 mt-8 lg:mt-0"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Información y Redes</h3>
              <div className="space-y-6">
                <InfoItem icon={<MapPin />} title="Dirección" text="Buenos Aires, Argentina" />
                <InfoItem icon={<Clock />} title="Horarios" text="L-V: 9-18hs, S: 9-13hs" />
                <InfoItem icon={<MessageCircle />} title="WhatsApp" text="+54 9 11 1234-5678" link="https://wa.me/5491112345678" />
                <InfoItem icon={<Instagram />} title="Instagram" text="@micromecanica.rotania" link="https://instagram.com/micromecanica.rotania" />
              </div>
            </div>
            <div className="rounded-3xl overflow-hidden border border-white/10 h-64">
              <iframe src="https://www.openstreetmap.org/export/embed.html?bbox=-58.4173%2C-34.6037%2C-58.3673%2C-34.5837&layer=mapnik&marker=-34.5937,-58.3923" width="100%" height="100%" className="grayscale invert" style={{ border: 0 }} loading="lazy" title="Ubicación Micromecánica Rotania SRL"></iframe>
            </div>
          </motion.div>
        </div>
      </div>

      <footer className="mt-32 border-t border-white/10 pt-8">
        <div className="container mx-auto px-4 text-center text-gray-500">
          <p className="mb-2">© 2025 Micromecánica Rotania SRL. Todos los derechos reservados.</p>
        </div>
      </footer>
    </section>
  );
};

const InfoItem = ({ icon, title, text, link }) => {
  const content = (
    <div className="flex items-center gap-5 group py-2">
      <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center flex-shrink-0 border border-white/10 group-hover:bg-green-500/20 group-hover:border-green-500/50 transition-all">
        {React.cloneElement(icon, { className: "w-6 h-6 text-green-300" })}
      </div>
      <div className="flex flex-col justify-center leading-tight">
        <p className="text-white font-semibold">{title}</p>
        <p className="text-gray-400 group-hover:text-white transition-colors">
          {text}
        </p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }
  return content;
};

export default Contact;