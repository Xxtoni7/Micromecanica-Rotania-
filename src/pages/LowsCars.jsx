import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, ShieldCheck, Instagram, Lightbulb, PaintBucket, Clock} from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const neon = {
    glow: "drop-shadow-[0_0_18px_rgba(253,224,71,0.65)]",
    border: "border-[#FDE047]/60",
    text: "text-[#FDE047]",
    bg: "bg-[#FDE047] text-black",
    };

    const LowCars = () => {
    const { toast } = useToast();
    const whatsappNumber = "5493425035369";
    const instagramUrl = "https://instagram.com/lowss.car";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        car: "",
        service: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData((s) => ({ ...s, [e.target.name]: e.target.value }));

    const handleSubmit = (e) => {
        e.preventDefault();
        const text =
        `LowCars — Turno\n\n` +
        `Nombre: ${formData.name}\n` +
        `Teléfono: ${formData.phone}\n` +
        `Vehículo: ${formData.car}\n` +
        `Servicio: ${formData.service}\n` +
        `Mensaje: ${formData.message}`;

        const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        text
        )}`;
        window.open(url, "_blank");

        toast({
        title: "¡Mensaje listo en WhatsApp!",
        description: "Se abrirá WhatsApp para que confirmes el envío.",
        });

        setFormData({ name: "", phone: "", car: "", service: "", message: "" });
    };

    const heroVideo = "/videos/lowcarFondo.mp4";
    const jobVideo = "/videos/trabajos/videoLowcarTrabajo.mp4"; 

    const features = [
        { icon: Sparkles, title: "Corrección de pintura" },
        { icon: Lightbulb, title: "Restauración de ópticas" },
        { icon: ShieldCheck, title: "Cerámicos premium" },
        { icon: ShieldCheck, title: "PPF Paint Protection Film" },
        { icon: PaintBucket, title: "Pintura de llantas" },
        { icon: Clock, title: "Entrega en 24/48 hs" },
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
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/55 to-black" />

            <div className="relative z-10 h-full flex flex-col justify-between">
            {/* Top bar */}
            <div className="flex items-center justify-between px-6 pt-6">
                <Button
                onClick={() => {
                    window.location.href = "/#servicios";
                    setTimeout(() => {
                    const t = document.getElementById("servicios");
                    if (t) t.scrollIntoView({ behavior: "smooth" });
                    }, 80);
                }}
                className="bg-white/5 border border-white/20 hover:bg.white hover:bg-white hover:text-black rounded-xl"
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
                LowCars
                </h1>
                <p className="text-gray-200/90 max-w-2xl mx-auto mt-3">
                Sector especializado en restauración, detallado y protección
                integral de vehículos.
                </p>

                {/* Por qué elegirnos - versión corta */}
                <p className="text-gray-200/80 mt-12 font-semibold">
                ¿Por qué elegirnos?
                </p>
                <div className="mt-2 flex flex-wrap gap-2 justify-center text-xs sm:text-sm">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15">
                    Equipos y productos profesionales
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border.white/15">
                    Procesos documentados
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/15">
                    Entregas a tiempo y garantía real
                </span>
                </div>
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

        {/* CINTILLO divisor */}
        <div className="relative h-[3px]">
            <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-transparent via-[#FDE047] to-transparent animate-pulse" />
        </div>

        {/* FEATURES - carrusel en móvil, grid en desktop */}
        <div className="container mx-auto px-6 py-14">
            <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex overflow-x-auto gap-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:gap-6 sm:overflow-visible"
            >
            {features.map((f, i) => (
                <div
                key={i}
                className={`
                    flex-shrink-0 w-60 snap-center
                    sm:w-auto
                    group bg-white/5 border ${neon.border} rounded-2xl p-6 text-center
                    hover:bg-white/[0.07] transition
                `}
                >
                <div
                    className={`
                    mx-auto w-14 h-14 rounded-xl bg-black/60 flex items-center justify-center mb-4
                    ${neon.glow}
                    `}
                >
                    <f.icon className={`${neon.text} w-7 h-7`} />
                </div>
                <p className="font-semibold leading-tight">{f.title}</p>
                </div>
            ))}
            </motion.div>
        </div>

        {/* RESULTADOS REALES - VIDEO */}
        <div className="container mx-auto px-6 pb-20">
            <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={`text-3xl md:text-4xl font-extrabold mb-6 ${neon.text} ${neon.glow}`}
            >
            Resultados reales
            </motion.h2>

            <div className="relative w-full max-w-5xl mx-auto aspect-[16/9] rounded-2xl overflow-hidden border border-white/10">
            <video
                className="w-full h-full object-cover"
                src={jobVideo}
                controls
                playsInline
            />
            </div>
        </div>

        {/* CTA + FORM */}
        <div className="container mx-auto px-6 pb-28">
            <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {/* Brand / Instagram */}
            <motion.div
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`rounded-3xl p-8 bg-white/[0.04] border ${neon.border} flex flex-col items-center justify-center gap-6`}
            >
                <img
                src="/Logo/LowCar.jpg"
                alt="Logo LowCars"
                className="w-40 h-40 object-cover rounded-full border-2 border-[#FDE047] shadow-lg shadow-[#FDE047]/40"
                style={{
                    filter: "drop-shadow(0 0 25px rgba(253,224,71,0.45))",
                }}
                />

                <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-2 px-5 py-3 rounded-xl border ${neon.border} bg-black/40 hover:bg-black/60 transition ${neon.glow}`}
                >
                <Instagram className={`${neon.text} w-5 h-5`} />
                <span className="text-white/90">Ver Instagram</span>
                </a>
            </motion.div>

            {/* Formulario */}
            <motion.form
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                onSubmit={handleSubmit}
                className={`rounded-3xl p-8 bg-white/[0.04] border ${neon.border}`}
            >
                <h3
                className={`text-2xl font-bold mb-6 ${neon.text} ${neon.glow}`}
                >
                Reserva tu turno
                </h3>

                <div className="space-y-5">
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

                <div>
                    <Label className="text-white/80">Servicio</Label>
                    <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full h-12 bg-white/5 border border-white/20 text-white rounded-lg px-3 focus:border-[#FDE047] [&>option]:bg-black [&>option]:text-white"
                    >
                    <option value="" disabled>
                        Seleccioná un servicio
                    </option>
                    <option value="Pulido y corrección de pintura">
                        Pulido y corrección de pintura
                    </option>
                    <option value="PPF">PPF</option>
                    <option value="Restauración de ópticas">
                        Restauración de ópticas
                    </option>
                    <option value="Limpieza de interiores">
                        Limpieza de interiores
                    </option>
                    <option value="Restauración de llantas">
                        Restauración de llantas
                    </option>
                    <option value="Consultas generales">
                        Consultas generales
                    </option>
                    </select>
                </div>

                <div>
                    <Label className="text-white/80">Mensaje</Label>
                    <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="bg-white/5 border-white/20 text.white"
                    placeholder="Contanos qué querés hacerle a tu auto..."
                    required
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

        {/* WHATSAPP FLOAT */}
        <a
            href={`https://wa.me/${whatsappNumber}`}
            className="fixed bottom-6 right-6 bg.black bg-black border border-[#FDE047]/60 rounded-full p-4 shadow-xl hover:scale-110 transition sm:hidden"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon
            icon={faWhatsapp}
            className={`${neon.text} w-6 h-6`}
            />
        </a>
        </section>
    );
};

export default LowCars;
