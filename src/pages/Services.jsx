import React, { useEffect, useRef } from 'react';

export default function Services() {
  const servicesRef = useRef(null);

  useEffect(() => {
    const animatedElements = servicesRef.current?.querySelectorAll('.slide-up');
    if (!animatedElements) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={servicesRef}>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container subpage-hero-content">
          <h1>Services & KMC</h1>
          <div className="breadcrumbs">
            <a href="#home">Home</a> &gt; <span>Services & KMC</span>
          </div>
        </div>
      </section>

      {/* Core Services Detail */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Knowledge Management & Technology Transfer</h2>
            <p>Connecting science with society. We provide farmers, researchers, and government units with the training and data needed to excel.</p>
          </div>

          {/* Service 1: KMC */}
          <div className="service-details-card slide-up">
            <div className="service-details-icon">
              <svg viewBox="0 0 24 24">
                <path d="M19,2L14,6.5V18.5L19,14V2M23,3.5C22.24,3.22 21.36,3 20.5,3C19,3 17.1,3.7 16,4.5C14.9,3.7 13,3 11.5,3C10,3 8.1,3.7 7,4.5C5.9,3.7 4,3 2.5,3C1.64,3 0.76,3.22 0,3.5V19C0.76,18.78 1.64,18.5 2.5,18.5C4,18.5 5.9,19.2 7,20C8.1,19.2 10,18.5 11.5,18.5C13,18.5 14.9,19.2 16,20C17.1,19.2 19,18.5 20.5,18.5C21.36,18.5 22.24,18.78 23,19V3.5M21,16.5C20.18,16.27 19.34,16.15 18.5,16.15C17,16.15 15.1,16.85 14,17.65V7.5C15.1,6.7 17,6 18.5,6C19.34,6 20.18,6.12 21,6.35V16.5Z"/>
              </svg>
            </div>
            <div className="service-details-text">
              <h3>Knowledge Management Center (KMC)</h3>
              <p>The KMC serves as the regional repository of scientific information for the agriculture, aquatic, and natural resources sectors. We collect, synthesize, and disseminate research publications, policy briefs, technology flyers, and statistical reports to facilitate data-driven decision-making.</p>
              <ul className="bullet-list">
                <li>Scientific Publications Database</li>
                <li>Policy Briefs & Syntheses</li>
                <li>Regional R&D Directories</li>
                <li>Tech Promotion Brochures</li>
              </ul>
            </div>
          </div>

          {/* Service 2: FITS Center Network */}
          <div className="service-details-card slide-up">
            <div className="service-details-icon">
              <svg viewBox="0 0 24 24">
                <path d="M12,3L2,12H5V20H19V12H22L12,3M12,7.7C14.1,7.7 15.8,9.4 15.8,11.5C15.8,13.6 14.1,15.3 12,15.3C9.9,15.3 8.2,13.6 8.2,11.5C8.2,9.4 9.9,7.7 12,7.7M12,9.5C10.9,9.5 10,10.4 10,11.5C10,12.6 10.9,13.5 12,13.5C13.1,13.5 14,12.6 14,11.5C14,10.4 13.1,9.5 12,9.5Z"/>
              </svg>
            </div>
            <div className="service-details-text">
              <h3>FITS (Farming Information & Technology Services)</h3>
              <p>FITS is a one-stop-shop information center located in Municipal Agriculture Offices and State Universities across Western Visayas. FITS centers deliver technology services directly to rural communities, giving them immediate access to farming guides, seed varieties, and expert advice.</p>
              <ul className="bullet-list">
                <li>Local Government Integration</li>
                <li>Farming Guides & Factsheets</li>
                <li>Magsasaka Siyentista (MS) Program</li>
                <li>Direct Agri-Extension Support</li>
              </ul>
            </div>
          </div>

          {/* Service 3: Capacity Building */}
          <div className="service-details-card slide-up">
            <div className="service-details-icon" style={{ background: 'radial-gradient(circle, rgba(240, 184, 15, 0.1) 0%, rgba(240, 184, 15, 0.02) 100%)', color: 'var(--accent-dark)' }}>
              <svg viewBox="0 0 24 24">
                <path d="M16,13C15.71,13 15.42,13 15.13,13.08C16.27,14 17,15.4 17,17V20H22V17C22,14.78 18.44,13.5 16,13M8,13C5.56,13 2,14.28 2,16.5V20H14V16.5C14,14.28 10.44,13 8,13M8,11A3,3 0 0,0 11,8A3,3 0 0,0 8,5A3,3 0 0,0 5,8A3,3 0 0,0 8,11M16,11A3,3 0 0,0 19,8A3,3 0 0,0 16,5A3,3 0 0,0 13,8A3,3 0 0,0 16,11Z"/>
              </svg>
            </div>
            <div className="service-details-text">
              <h3>Capacity Building & Research Mentoring</h3>
              <p>We believe in elevating the skills of the regional scientific community. WESVAARRDEC organizes structured training sessions in research proposal writing, technical publication, experimental designs, and statistical tools to empower junior researchers and university faculty.</p>
              <ul className="bullet-list">
                <li>Proposal Writing Seminars</li>
                <li>Science Communication Workshops</li>
                <li>Experimental Data Mentorship</li>
                <li>Intellectual Property Guidance</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
