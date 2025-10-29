import React from 'react';
import { Helmet } from 'react-helmet';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Works from './components/Works';
import Reviews from './components/Reviews';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import { Toaster } from './components/ui/toaster';
import { Routes, Route, useLocation } from "react-router-dom";
import ServicioTaller from "./pages/ServicioTaller";
//import LowCars from "./pages/LowCars"; // si ya lo creaste
//import Repuestos from "./pages/Repuestos"; // si ya lo creaste

function App() {
  const location = useLocation();


  const hideNavbarRoutes = ["/servicio-taller" /*"/lowcars", "/repuestos"*/];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      <Helmet>
        <title>Micromecánica Rotania SRL - Pioneros en Instrumental Automotor</title>
        <meta name="description" content="Especialistas en reparación de instrumental automotor, aire acondicionado, alternadores, arranque y más. +30 años de experiencia con tecnología de diagnóstico avanzada." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" />
      </Helmet>
      
      {!hideNavbar && <Navbar />}

      <main
  className={`text-white font-poppins ${
    hideNavbar
      ? "min-h-[100vh]" // ✅ ocupa solo la pantalla sin reservar hueco
      : "min-h-screen"  // ✅ home mantiene su diseño con navbar
  }`}
>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Services />
                <Works />
                <Reviews />
                <Contact />
              </>
            }
          />
          
          {/* Páginas internas */}
          <Route path="/servicio-taller" element={<ServicioTaller />} />
          
          {/*<Route path="/repuestos" element={<Repuestos />} /> */}
          {/* Páginas internas <Route path="/lowcars" element={<LowCars />} /> */}
        </Routes>
      </main>

      <Toaster />
    </>
  );
}

export default App;
