import React, { useState, useEffect } from 'react';

export default function Header({ currentHash }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileActive, setMobileActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', hash: '#home' },
    { label: 'About Us', hash: '#about' },
    { label: 'R&D & Tech', hash: '#rd' },
    { label: 'Services', hash: '#services' },
    { label: 'Contact', hash: '#contact' }
  ];

  const handleLinkClick = () => {
    setMobileActive(false);
  };

  return (
    <header className={`main-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a href="#home" className="logo-link">
          <img src="img/logo.png" alt="WESVAARRDEC Logo" />
          <div class="brand-text">
            <span className="brand-title">WESVAARRDEC</span>
            <span className="brand-subtitle">Western Visayas AANR Consortium</span>
          </div>
        </a>

        <button 
          className={`nav-toggle ${mobileActive ? 'active' : ''}`} 
          onClick={() => setMobileActive(!mobileActive)}
          aria-label="Toggle navigation"
        >
          <span className="hamburger-line"></span>
          <span class="hamburger-line"></span>
          <span class="hamburger-line"></span>
        </button>

        <nav className={`main-nav ${mobileActive ? 'active' : ''}`}>
          {navItems.map((item) => {
            const isActive = currentHash === item.hash || (currentHash === '' && item.hash === '#home');
            return (
              <a
                key={item.hash}
                href={item.hash}
                className={`nav-link ${isActive ? 'active' : ''}`}
                onClick={handleLinkClick}
              >
                {item.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
