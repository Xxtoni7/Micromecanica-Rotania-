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

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    motive: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, motive, message } = formData;
    const whatsappNumber = "5493425178440";

    const text = `Nuevo mensaje desde el formulario del sitio web ` +
      `Nombre: ${name} ` +
      `Teléfono: ${phone} ` +
      `Motivo: ${motive} ` +
      `Mensaje: ${message}`;

    const url = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodeURIComponent(text)}`;

    window.open(url, "_blank");

    toast({
      title: "✅ ¡Mensaje listo para enviar por WhatsApp!",
      description: "Se abrirá WhatsApp para que confirmes el envío.",
      duration: 5000,
    });

    setFormData({ name: '', email: '', phone: '', motive: '', message: '' });
  };

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <section id="contacto" className="py-32 bg-[#0E1612] relative">
      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ponte en Contacto</h2>
          <p className="text-lg text-gray-400">Consulta general, estamos listos para ayudarte.</p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 items-start">

          {/* FORM */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemVariants}>
            <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Envíanos tu consulta</h3>

              <div>
                <Label className="text-white/80 mb-2 block font-semibold">Nombre</Label>
                <Input name="name" value={formData.name} onChange={handleChange} required
                  className="bg-white/5 border-white/20 text-white h-12" placeholder="Tu nombre completo" />
              </div>

              <div>
                <Label className="text-white/80 mb-2 block font-semibold">Teléfono</Label>
                <Input name="phone" value={formData.phone} onChange={handleChange} required
                  className="bg-white/5 border-white/20 text-white h-12" placeholder="11 2345-6789" />
              </div>

              <div>
                <Label className="text-white/80 mb-2 block font-semibold">Motivo</Label>
                <select
                  name="motive"
                  value={formData.motive}
                  onChange={handleChange}
                  required
                  className="w-full h-12 bg-white/5 border border-white/20 text-white rounded-lg px-3 focus:border-green-400
                  [&>option]:bg-[#0E1612] [&>option]:text-white"
                >
                  <option value="" disabled>Selecciona una opción</option>
                  <option value="Consulta general">Consulta general</option>
                  <option value="Proveedores">Proveedores</option>
                  <option value="Post-venta">Post-venta</option>
                </select>
              </div>

              <div>
                <Label className="text-white/80 mb-2 block font-semibold">Mensaje</Label>
                <Textarea name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className="bg-white/5 border-white/20 text-white focus:border-green-400"
                  placeholder="Cuéntanos cómo podemos ayudarte..." />
              </div>

              <Button type="submit" className="w-full bg-gradient-to-r from-[#0B4F3A] to-green-600 text-white font-bold text-lg py-7 rounded-xl hover:scale-105">
                Enviar por WhatsApp
              </Button>
            </form>
          </motion.div>

          {/* INFO CARD + MAP */}
          <motion.div initial="hidden" animate={isInView ? "visible" : "hidden"} variants={itemVariants} transition={{ delay: 0.2 }} className="space-y-8 mt-8 lg:mt-0">
            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10">
              <h3 className="text-xl font-bold text-white mb-6">Información y Redes</h3>
              <div className="space-y-4">

                <InfoItem icon={<MapPin />} title="Dirección" text="1º de Mayo 4638, Santa Fe"
                  link="https://www.google.com/maps/place/Micromec%C3%A1nica+Rotania/@-31.6243083,-60.7039832,17z/data=!4m6!3m5!1s0x95b5a9dcb36d05b1:0x2feb64ad65cd89f9!8m2!3d-31.624358!4d-60.7037496!16s%2Fg%2F1tdzs9s6?entry=ttu&g_ep=EgoyMDI1MTAyNi4wIKXMDSoASAFQAw%3D%3D" />

                <InfoItem icon={<Clock />} title="Horarios" text="Lunes-Viernes: 9-12hs / 13:30-17hs" />

                <InfoItem icon={<MessageCircle />} title="WhatsApp" text="+54 9 342 517-8440"
                  link="https://wa.me/5493425178440" />

                <InfoItem icon={<Instagram />} title="Instagram" text="Rotania Micromecanica SRL"
                  link="https://instagram.com/micromecanicarotaniasrl" />

              </div>
            </div>

            <div className="rounded-3xl overflow-hidden border border-white/10 h-64">
              <iframe
                src="https://www.openstreetmap.org/export/embed.html?bbox=-60.7063%2C-31.6243%2C-60.7037%2C-31.6237&layer=mapnik&marker=-31.6243,-60.7053"
                width="100%" height="100%" className="grayscale invert" style={{ border: 0 }} loading="lazy"
                title="Ubicación Micromecánica Rotania SRL"
              ></iframe>
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
        <p className="text-gray-400 group-hover:text-white transition-colors">{text}</p>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer" className="block">
        {content}
      </a>
    );
  }

  return content;
};

export default Contact;
