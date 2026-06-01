import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Rd from './pages/Rd';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');
  const [toast, setToast] = useState({ message: '', visible: false });

  // Monitor URL hash change to update view routing
  useEffect(() => {
    const handleHashChange = () => {
      // support hashes like #rd#tab-crab, extract main page part
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);
      
      // Auto scroll to top of page on change
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    // Trigger once on mount
    handleHashChange();
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const showToast = (message) => {
    setToast({ message, visible: true });
    // Auto hide after 4 seconds
    setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4000);
  };

  // Extract base hash route, e.g. #rd#tab-crab -> #rd
  const baseRoute = currentHash.split('#')[1] ? '#' + currentHash.split('#')[1] : '#home';

  const renderActivePage = () => {
    switch (baseRoute) {
      case '#home':
        return <Home />;
      case '#about':
        return <About />;
      case '#rd':
        return <Rd />;
      case '#services':
        return <Services />;
      case '#contact':
        return <Contact onNotify={showToast} />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <Header currentHash={baseRoute} />
      
      <main style={{ minHeight: 'calc(100vh - var(--header-height) - 400px)', paddingBottom: '0px' }}>
        {renderActivePage()}
      </main>

      <Footer onNotify={showToast} />

      {/* Global Toast Notification */}
      <div className={`notification-toast ${toast.visible ? 'show' : ''}`}>
        <svg viewBox="0 0 24 24">
          <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
        </svg>
        <span className="toast-text">{toast.message}</span>
      </div>
    </>
  );
}
