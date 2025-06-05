import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Technologies from './component/Technologies';
import Projects from './component/Projects';
import Contact from './component/Contact';

const GA_TRACKING_ID = 'G-458DFP7KKQ';

function loadGA() {
  if (!window.gtag) {
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`;
    document.head.appendChild(script1);

    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;

    gtag('js', new Date());
    gtag('config', GA_TRACKING_ID);
  }
}

function AnalyticsTracker() {
  const location = useLocation();

  useEffect(() => {
    loadGA();
  }, []);

  useEffect(() => {
    if (window.gtag) {
      window.gtag('config', GA_TRACKING_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
}

const AppContent = () => {
  return (
    <div className="relative min-h-screen overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      {/* Fondo con gradiente radial */}
      <div className="fixed top-0 left-0 z-[-1] w-full min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

      {/* Contenido principal */}
      <div className="relative z-10">
        <div className="container mx-auto px-8">
          <Navbar />
          <Hero />
          <About />
          <Technologies />
          <Projects />
          <Contact />
        </div>
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AnalyticsTracker />
    <AppContent />
  </Router>
);

export default App;
