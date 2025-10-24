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

function App() {
  return (
    <>
      <Helmet>
        <title>Micromecánica Rotania SRL - Pioneros en Instrumental Automotor</title>
        <meta name="description" content="Especialistas en reparación de instrumental automotor, aire acondicionado, alternadores, arranque y más. +30 años de experiencia con tecnología de diagnóstico avanzada." />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap" />
      </Helmet>
      <div className="min-h-screen bg-background text-white font-poppins">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <Works />
          <Reviews />
          <Contact />
        </main>
        <Toaster />
      </div>
    </>
  );
}

export default App;