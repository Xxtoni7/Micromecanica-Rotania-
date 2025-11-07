import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Zap, Lightbulb, ArrowLeft, Cog, Cable, Fan, Boxes } from "lucide-react";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { useToast } from "../components/ui/use-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

const Repuestos = () => {
    const { toast } = useToast();
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        navigate("/");
        setTimeout(() => {
        const el = document.getElementById("servicios");
        if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 60);
    };

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        vehicle: "",
        part: "",
        year: "",
        message: "",
    });

    const handleChange = (e) =>
        setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();

        const phoneNumber = "5493425415159";
        const text =
        `Consulta Repuestos \n\n` +
        `Nombre: ${formData.name}\n` +
        `Teléfono: ${formData.phone}\n` +
        `Vehículo: ${formData.vehicle}\n` +
        `Año: ${formData.year || "-"}\n` +
        `Repuesto buscado: ${formData.part}\n` +
        `Mensaje: ${formData.message || "-"}`;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
        window.open(url, "_blank");

        toast({
        title: " ¡Consulta enviada a Repuestos!",
        description: "Te responderemos a la brevedad.",
        duration: 4000,
        });

        setFormData({
        name: "",
        phone: "",
        vehicle: "",
        part: "",
        year: "",
        message: "",
        });
    };

    const categories = [
    { icon: Cog, label: "Alternadores" }, 
    { icon: Zap, label: "Motor de Arranque" }, 
    { icon: Cable, label: "Fichas y Sensores" }, 
    { icon: Lightbulb, label: "Faros e Iluminación" }, 
    { icon: Fan, label: "Electroventiladores" }, 
    { icon: Boxes, label: "Repuestos originales y alternativos" }, 
    ];
    

    return (
        <section className="bg-[#0E1612] text-white min-h-screen pt-8 sm:pt-8 md:pt-8 lg:pt-8 pb-28 px-6">
        <div className="mb-6 md:mb-8 lg:mb-10">
            <Button
            onClick={handleBack}
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
                Venta de Repuestos
            </h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
                Amplia variedad de repuestos relacionados con la electromecánica automotriz.
            </p>
        </motion.div>

        {/* Categorías */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
            {categories.map((c, i) => (
                <motion.div
                    key={c.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-white/5 p-6 rounded-2xl text-center border border-white/10 hover:border-green-500/40 transition"
                >
                    <c.icon className="w-10 h-10 text-green-400 mx-auto mb-3" />
                    <p className="font-semibold">{c.label}</p>
                </motion.div>
            ))}
        </div>

        {/* Formulario */}
        <div className="max-w-xl mx-auto bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-8 text-center">
            Realizá tu Consulta
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
            <div>
                <Label className="text-sm text-white/70">Nombre</Label>
                <Input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white"
                placeholder="Tu nombre"
                />
            </div>

            <div>
                <Label className="text-sm text-white/70">Teléfono</Label>
                <Input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white"
                placeholder="Ej: 342-5415159"
                />
            </div>

            <div>
                <Label className="text-sm text-white/70">Vehículo</Label>
                <Input
                name="vehicle"
                value={formData.vehicle}
                onChange={handleChange}
                required
                className="bg-white/10 border-white/20 text-white"
                placeholder="Marca y modelo (ej: Fiat Cronos)"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                <Label className="text-sm text-white/70">Repuesto buscado</Label>
                <Input
                    name="part"
                    value={formData.part}
                    onChange={handleChange}
                    required
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Ej: Alternador / Sensor / Bomba..."
                />
                </div>
                <div>
                <Label className="text-sm text-white/70">Año (opcional)</Label>
                <Input
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="bg-white/10 border-white/20 text-white"
                    placeholder="Ej: 2018"
                />
                </div>
            </div>

            <div>
                <Label className="text-sm text-white/70">Mensaje (opcional)</Label>
                <Textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="bg-white/10 border-white/20 text-white"
                placeholder="Detalle extra (si lo tenés: código de pieza, foto, etc.)"
                />
            </div>

            <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 font-bold text-lg py-6 rounded-xl flex items-center justify-center"
            >
                Enviar
            </Button>
            </form>
        </div>

        <a
            href="https://wa.me/5493425415159"
            className="fixed bottom-6 right-6 bg-green-600 rounded-full p-4 shadow-xl hover:scale-110 transition sm:hidden"
            target="_blank"
            rel="noreferrer"
        >
            <FontAwesomeIcon icon={faWhatsapp} className="w-7 h-7 text-white" />
        </a>
        </section>
    );
};

export default Repuestos;
