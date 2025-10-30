import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ShieldCheck, Timer, Instagram } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

/**
 * LOWCARS — Mini sitio visual (negro + amarillo fosforescente)
 * - Hero con video a pantalla completa
 * - Cintillo divisor animado
 * - Mini-services con cápsulas
 * - Before/After slider sin librerías
 * - CTA + Formulario con glow amarillo
 * - Botones flotantes Instagram / WhatsApp
 */

const neon = {
    glow: "drop-shadow-[0_0_18px_rgba(253,224,71,0.65)]", // glow amarillo
    border: "border-[#FDE047]/60",
    text: "text-[#FDE047]",
    bg: "bg-[#FDE047] text-black",
    };

    const LowCars = () => {
    const { toast } = useToast();
    const [beforeAfter, setBeforeAfter] = useState(50);
    const whatsappNumber = "5493425035369";
    const instagramUrl = "https://instagram.com/lowss.car"; 

    // Asegura que arranque arriba
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // ---- FORM ----
    const [formData, setFormData] = useState({
    name: "",
    phone: "",
    car: "",
    service: "",
    message: "",
    });
    const handleChange = (e) => setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));
    const handleSubmit = (e) => {
        e.preventDefault();
        const text =
        `LowCars — Turno\n\n` +
        `Nombre: ${formData.name}\n` +
        `Teléfono: ${formData.phone}\n` +
        `Vehículo: ${formData.car}\n` +
        `Servicio: ${formData.service}\n` +
        `Mensaje: ${formData.message}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");

        toast({
        title: "¡Mensaje listo en WhatsApp!",
        description: "Se abrirá WhatsApp para que confirmes el envío.",
        });

        setFormData({ name: "", phone: "", message: "" });
    };

    const heroVideo = "/videos/lowcarFondo.mp4"; 
    const beforeImg = "/imagenes/autoAntes.jpg";
    const afterImg = "/imagenes/autoDespues.jpg";

    const features = [
        { icon: Sparkles, title: "Corrección de pintura" },
        { icon: ShieldCheck, title: "Cerámicos premium" },
        { icon: Timer, title: "Entrega en 24/48 hs" },
    ];

    return (
        <section className="bg-[#161616] text-white min-h-screen overflow-hidden">
        {/* HERO */}
        <div className="relative w-full h-[90vh] md:h-[92vh]">
            <video
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            src={heroVideo}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black"></div>

            <div className="relative z-10 h-full flex flex-col justify-between">

            <div className="flex items-center justify-between px-6 pt-6">
                <Button
                onClick={() => {
                    window.location.href = "/#servicios";
                    setTimeout(() => {
                    const t = document.getElementById("servicios");
                    if (t) t.scrollIntoView({ behavior: "smooth" });
                    }, 80);
                }}
                className="bg-white/5 border border-white/20 hover:bg-white hover:text-black rounded-xl"
                >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Volver
                </Button>

                <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl border ${neon.border} bg-black/40 hover:bg-black/60 transition ${neon.glow}`}
                >
                <Instagram className={`${neon.text} w-5 h-5`} />
                <span className="text-white/90">Instagram</span>
                </a>
            </div>

            {/* Título central */}
            <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="text-center px-6"
            >
                <h1
                className={`text-[12vw] sm:text-6xl md:text-7xl font-black uppercase tracking-tighter ${neon.text} ${neon.glow}`}
                style={{ textShadow: "0 0 24px rgba(253,224,71,0.45)" }}
                >
                LowCar
                </h1>
                <p className="text-gray-200/90 max-w-2xl mx-auto mt-3">
                Detailing real. Resultados violentos que brillan. Pulido, corrección y protección de cerámica.
                </p>
            </motion.div>

            {/* CTA primaria */}
            <div className="flex justify-center pb-8">
                <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                className={`inline-flex items-center gap-3 px-6 py-3 rounded-full ${neon.bg} font-bold ${neon.glow}`}
                >
                <FontAwesomeIcon icon={faWhatsapp} className="w-5 h-5" />
                Pedir turno
                </motion.a>
            </div>
            </div>
        </div>

        {/* CINTILLO divisor animado */}
        <div className="relative h-[3px]">
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#FDE047] to-transparent animate-pulse"></div>
        </div>

        {/* MINI SERVICES */}
        <div className="container mx-auto px-6 py-14">
            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="grid sm:grid-cols-3 gap-6"
            >
            {features.map((f, i) => (
                <div
                key={i}
                className={`group bg-white/5 border ${neon.border} rounded-2xl p-6 text-center hover:bg-white/[0.07] transition`}
                >
                <div
                    className={`mx-auto w-14 h-14 rounded-xl bg-black/60 flex items-center justify-center mb-4 ${neon.glow}`}
                >
                    <f.icon className={`${neon.text} w-7 h-7`} />
                </div>
                <p className="font-semibold">{f.title}</p>
                </div>
            ))}
            </motion.div>
        </div>

        {/* BEFORE / AFTER — slider */}
        <div className="container mx-auto px-6 pb-20">
            <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-extrabold mb-6 ${neon.text} ${neon.glow}`}
            >
            Antes / Después
            </motion.h2>

            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
            {/* After */}
            <img src={afterImg} alt="after" className="absolute inset-0 w-full h-full object-cover" />
            {/* Before con clip dinámica */}
            <div
                className="absolute inset-0 overflow-hidden"
                style={{
                clipPath: `inset(0 ${100 - beforeAfter}% 0 0)`,
                transition: "clip-path 120ms linear",
                }}
            >
                <img src={beforeImg} alt="before" className="w-full h-full object-cover" />
            </div>

            {/* Divider handle */}
            <div
                className="absolute inset-y-0"
                style={{ left: `${beforeAfter}%`, transform: "translateX(-50%)" }}
            >
                <div className={`w-[3px] h-full ${neon.bg}`}></div>
                <div className={`w-6 h-6 rounded-full ${neon.bg} mx-auto mt-[-14px] border border-black`}></div>
            </div>

            {/* Slider */}
            <input
                type="range"
                min="0"
                max="100"
                value={beforeAfter}
                onChange={(e) => setBeforeAfter(Number(e.target.value))}
                className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[60%] accent-[#FDE047]"
            />
            </div>
        </div>

        {/* CTA + FORM */}
        <div className="container mx-auto px-6 pb-28">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* CTA Box */}
            <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`rounded-3xl p-8 bg-white/[0.04] border ${neon.border}`}
            >
            <h3 className={`text-2xl font-bold mb-3 ${neon.text} ${neon.glow}`}>¿Por qué LowCars?</h3>
            <ul className="text-gray-300 space-y-2">
                <li>• Equipos y polímeros de nivel profesional</li>
                <li>• Proceso 100% documentado</li>
                <li>• Cuidado extremo de interiores y exteriores</li>
                <li>• Entregas a tiempo y garantía real</li>
            </ul>

            <div className="flex justify-center my-10">
                <img
                src="/Logo/LowCar.jpg"
                alt="Logo LowCars"
                className="w-40 h-40 object-cover rounded-full border-2 border-[#FDE047] shadow-lg 
                            shadow-[#FDE047]/40 hover:scale-105 transition-transform duration-300"
                style={{ filter: "drop-shadow(0 0 25px rgba(253,224,71,0.45))" }}
                />
            </div>

            <div className="mt-6 flex flex-wrap gap-3 justify-center">
                <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border ${neon.border} bg-black/40 hover:bg-black/60 transition ${neon.glow}`}
                >
                <Instagram className={`${neon.text} w-5 h-5`} />
                Ver Instagram
                </a>
            </div>
            </motion.div>


            {/* Form */}
            <motion.form
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={handleSubmit}
            className={`rounded-3xl p-8 bg-white/[0.04] border ${neon.border}`}
            >
            <h3 className={`text-2xl font-bold mb-6 ${neon.text} ${neon.glow}`}>
                Reserva tu turno
            </h3>

            <div className="space-y-5">
                {/* Nombre */}
                <div>
                <Label className="text-white/80">Nombre</Label>
                <Input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white h-12"
                    placeholder="Tu nombre completo"
                />
                </div>

                {/* Teléfono */}
                <div>
                <Label className="text-white/80">Teléfono</Label>
                <Input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white h-12"
                    placeholder="11 2345-6789"
                />
                </div>

                {/* Auto */}
                <div>
                <Label className="text-white/80">Vehículo</Label>
                <Input
                    name="car"
                    value={formData.car}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/20 text-white h-12"
                    placeholder="Ej: Toyota Corolla 2019"
                />
                </div>

                {/* Select Motivo */}
                <div>
                <Label className="text-white/80">Servicio</Label>
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-white/5 border border-white/20 text-white rounded-lg px-3 
                            focus:border-[#FDE047]
                            [&>option]:bg-black [&>option]:text-white"
                >
                    <option value="" disabled>Selecciona un servicio</option>
                    <option value="Pulido y corrección de pintura">Pulido y corrección de pintura</option>
                    <option value="Cerámico y protección">Cerámico y protección</option>
                    <option value="Restauración de ópticas">Restauración de ópticas</option>
                    <option value="Detailing">Detailing</option>
                    <option value="Consulta general">Consulta general</option>
                </select>
                </div>

                {/* Mensaje */}
                <div>
                <Label className="text-white/80">Mensaje</Label>
                <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="bg-white/5 border-white/20 text-white"
                    placeholder="Contanos más sobre lo que querés hacerle a tu auto..."
                />
                </div>

                <Button
                type="submit"
                className={`w-full ${neon.bg} font-bold text-lg py-6 rounded-xl ${neon.glow}`}
                >
                Enviar
                </Button>
            </div>
            </motion.form>
            </div>
        </div>

        {/* BOTONES FLOTANTES */}
        <a
            href={`https://wa.me/${whatsappNumber}`}
            className="fixed bottom-6 right-6 bg-black border border-[#FDE047]/60 rounded-full p-4 shadow-xl hover:scale-110 transition sm:hidden"
            target="_blank"
        >
            <FontAwesomeIcon icon={faWhatsapp} className={`${neon.text} w-6 h-6`} />
        </a>
        </section>
    );
};

export default LowCars;
