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
import Repuestos from "./pages/Repuestos";
import LowCars from "./pages/LowsCars"; 

function App() {
  const location = useLocation();
  const hideNavbarRoutes = ["/servicio-taller", "/repuestos", "/lowcars" ];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <Navbar />}

      <main
        className={`text-white font-poppins ${
          hideNavbar
          ? "min-h-[100vh]" 
          : "min-h-screen"  
          }`
        }
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
          <Route path="/servicio-taller" element={<ServicioTaller/>} />         
          <Route path="/repuestos" element={<Repuestos/>} />
          <Route path="/lowcars" element={<LowCars />} />
        </Routes>
      </main>

      <Toaster />
    </>
  );
}

export default App;
