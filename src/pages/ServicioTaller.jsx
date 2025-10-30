import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Wrench, Gauge, Fan, Zap, MessageCircle, ArrowLeft } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const ServicioTaller = () => {
    const { toast } = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBackToServices = () => {
        navigate("/#servicios");
        setTimeout(() => {
        const section = document.getElementById("servicios");
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
        }, 150);
    };

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "5493425178440";
        const text = `Consulta Servicio Taller \n\nNombre: ${formData.name}\nTeléfono: ${formData.phone}\nMensaje: ${formData.message}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");

        toast({
        title: "✅ ¡Consulta enviada!",
        description: "Te contactaremos a la brevedad.",
        });

        setFormData({ name: "", phone: "", message: "" });
    };

    const features = [
        { icon: Gauge, title: "Tableros digitales" },
        { icon: Fan, title: "Aire acondicionado" },
        { icon: Zap, title: "Sistema eléctrico" },
        { icon: Wrench, title: "Instrumental y sensores" },
    ];

    return (
        <section className="bg-[#0E1612] text-white min-h-screen pt-8 sm:pt-8 md:pt-8 lg:pt-8 pb-28 px-6">

        {/* Botón Volver alineado correctamente */}
        <div className="mb-10">
            <Button
            onClick={handleBackToServices}
            className="bg-white/10 border border-white/20 text-white hover:bg-white hover:text-[#0B4F3A] px-4 py-2 rounded-xl"
            >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Volver
            </Button>
        </div>

        {/* Hero */}
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
        >
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Servicio de Taller
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
            Especialistas en diagnóstico y reparación electrónica automotriz.
            </p>
        </motion.div>

        {/* Features */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-20">
            {features.map((item, i) => (
            <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 p-6 rounded-2xl text-center border border-white/10 hover:border-green-500/40 transition"
            >
                <item.icon className="w-10 h-10 text-green-400 mx-auto mb-3" />
                <p className="font-semibold">{item.title}</p>
            </motion.div>
            ))}
        </div>

        {/* Form */}
        <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-8 text-center">
            Consultá tu reparación
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <Label className="text-sm text-white/70">Nombre</Label>
                <Input name="name" value={formData.name} onChange={handleChange} required
                className="bg-white/10 border-white/20 text-white" placeholder="Tu nombre" />
            </div>

            <div>
                <Label className="text-sm text-white/70">Teléfono</Label>
                <Input name="phone" value={formData.phone} onChange={handleChange} required
                className="bg-white/10 border-white/20 text-white" placeholder="Ej: 342-5178440" />
            </div>

            <div>
                <Label className="text-sm text-white/70">Mensaje</Label>
                <Textarea name="message" value={formData.message} onChange={handleChange} rows={4} required
                className="bg-white/10 border-white/20 text-white"
                placeholder="¿Qué problema presenta tu vehículo?" />
            </div>

            <Button type="submit"
                className="w-full bg-green-600 hover:bg-green-700 font-bold text-lg py-6 rounded-xl flex items-center justify-center">
                Enviar
            </Button>
            </form>
        </div>

        {/* Floating WhatsApp mobile */}
        <a
            href="https://wa.me/5493425178440"
            className="fixed bottom-6 right-6 bg-green-600 rounded-full p-4 shadow-xl hover:scale-110 transition sm:hidden"
            target="_blank"
        >
            <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7 text-white" />
        </a>

        </section>
    );
};

export default ServicioTaller;
