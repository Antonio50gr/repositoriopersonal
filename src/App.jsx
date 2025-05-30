import React from 'react';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Technologies from './component/Technologies';
import Projects from './component/Projects';
import Contact from './component/Contact';

const App = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Fondo con gradiente radial */}
      <div className="fixed top-0 left-0 z-[-1] w-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <div className='container mx-auto px-8'>
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact/>
        </div>
      </div>
    </div>
  );
};

export default App;
