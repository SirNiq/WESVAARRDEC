import React, { useState, useEffect, useRef } from 'react';

// Sub-component for individual animated stat counters
function StatCounter({ target, suffix = '', label }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const countUp = () => {
      let current = 0;
      const duration = 1500; // 1.5s
      const steps = duration / 16; // ~60fps
      const increment = target / steps;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          setCount(Math.floor(current));
          requestAnimationFrame(updateCount);
        } else {
          setCount(target);
        }
      };

      updateCount();
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animatedRef.current) {
          countUp();
          animatedRef.current = true;
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, [target]);

  return (
    <div className="stat-item" ref={elementRef}>
      <div className="stat-number">
        {count}{suffix}
      </div>
      <div className="stat-label">{label}</div>
    </div>
  );
}

export default function Home() {
  // Intersection Observer for scroll animations (.slide-up.appear)
  const homeRef = useRef(null);

  useEffect(() => {
    const animatedElements = homeRef.current?.querySelectorAll('.slide-up');
    if (!animatedElements) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          observer.unobserve(entry.target); // Trigger once
        }
      });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
    return () => {
      animatedElements.forEach(el => observer.unobserve(el));
    };
  }, []);

  return (
    <div ref={homeRef}>
      {/* Hero Section */}
      <section className="hero" id="hero">
        <div className="container">
          <div className="hero-content">
            <span className="hero-tagline">Welcome to WESVAARRDEC</span>
            <h1>Empowering AANR sectors in Western Visayas</h1>
            <p>A dynamic force for sustainable agriculture, aquatic, and natural resources research, development, and technology transfer in Region VI.</p>
            <div className="hero-buttons">
              <a href="#about" className="btn btn-accent">Discover Our Story</a>
              <a href="#rd" className="btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>Explore Research</a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="container" style={{ position: 'relative', zIndex: 100 }}>
        <div className="stats-bar" id="statsBar">
          <div className="stats-grid">
            <StatCounter target={28} label="Member Institutions" />
            <StatCounter target={38} suffix="+" label="Years of R&D" />
            <StatCounter target={500} suffix="+" label="Researchers" />
            <StatCounter target={100} suffix="+" label="Technologies" />
          </div>
        </div>
      </section>

      {/* Priority Commodities Bar */}
      <section className="container" style={{ marginTop: '20px', position: 'relative', zIndex: 90 }}>
        <div style={{
          backgroundColor: '#ffffff',
          borderRadius: 'var(--border-radius-sm)',
          padding: '15px 30px',
          boxShadow: 'var(--shadow-sm)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '20px',
          borderLeft: '5px solid var(--accent)',
          flexWrap: 'wrap'
        }} className="slide-up">
          <span style={{ fontFamily: 'Outfit', fontWeight: 700, textTransform: 'uppercase', fontSize: '0.9rem', color: 'var(--primary)' }}>
            Priority Commodities:
          </span>
          <div style={{ display: 'flex', gap: '10px 15px', flexWrap: 'wrap', fontSize: '0.95rem', fontWeight: 600 }}>
            <a href="#rd#tab-darag" style={{ color: 'var(--text-muted)' }}>Darag Chicken</a>
            <span style={{ color: 'rgba(21, 94, 55, 0.2)' }}>|</span>
            <a href="#rd#tab-mango" style={{ color: 'var(--text-muted)' }}>Guimaras Mango</a>
            <span style={{ color: 'rgba(21, 94, 55, 0.2)' }}>|</span>
            <a href="#rd#tab-coconut" style={{ color: 'var(--text-muted)' }}>Coconut</a>
            <span style={{ color: 'rgba(21, 94, 55, 0.2)' }}>|</span>
            <a href="#rd#tab-muscovado" style={{ color: 'var(--text-muted)' }}>Muscovado</a>
            <span style={{ color: 'rgba(21, 94, 55, 0.2)' }}>|</span>
            <a href="#rd#tab-sugarcane" style={{ color: 'var(--text-muted)' }}>Sugarcane</a>
          </div>
        </div>
      </section>

      {/* Core Sectors */}
      <section className="section-padding pillars-section" id="pillars">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Our Three Core Sectors</h2>
            <p>We channel resources and coordinate research efforts in three critical dimensions of sustainable development in Western Visayas.</p>
          </div>

          <div className="grid-3">
            {/* Pillar 1: Agriculture */}
            <div className="pillar-card slide-up">
              <div className="pillar-image-container">
                <img src="img/pillar_agriculture.png" alt="Agriculture Research" />
                <div className="pillar-icon-overlay">
                  <svg viewBox="0 0 24 24">
                    <path d="M17,8C8,10 5.9,16.17 3.82,21.34L5.71,22L6.66,19.7C7.14,19.87 7.64,20 8,20C19,20 22,3 22,3C22,3 21,8 17,8M6,16C6,16 8,12.7 10,12.5C12,12.3 13,11.5 13,11.5C13,11.5 10.5,14 8,14.5C5.5,15 6,16 6,16M11,9.5C11,9.5 9,11.5 7.5,12C6,12.5 5,13.5 5,13.5C5,13.5 7.5,12 9,11C10.5,10 11,9.5 11,9.5Z"/>
                  </svg>
                </div>
              </div>
              <div className="pillar-info">
                <h3>Agriculture</h3>
                <p>Advancing farm productivity and climate resilience through scientific breeding, soil nutrition, and smart farming technologies for regional staples like rice, mango, and livestock.</p>
                <a href="#rd#tab-darag" className="read-more">Learn More &rarr;</a>
              </div>
            </div>

            {/* Pillar 2: Aquatic Resources */}
            <div className="pillar-card slide-up">
              <div className="pillar-image-container">
                <img src="img/pillar_aquatic.png" alt="Aquatic Research" />
                <div className="pillar-icon-overlay">
                  <svg viewBox="0 0 24 24">
                    <path d="M2,12C2,12 5,6 12,6C15.4,6 18.5,8 22,12C18.5,16 15.4,18 12,18C5,18 2,12 2,12M12,16.5C14.5,16.5 16.5,14.5 16.5,12C16.5,9.5 14.5,7.5 12,7.5C9.5,7.5 7.5,9.5 7.5,12C7.5,14.5 9.5,16.5 12,16.5M12,9C13.7,9 15,10.3 15,12C15,13.7 13.7,15 12,15C10.3,15 9,13.7 9,12C9,10.3 10.3,9 12,9Z"/>
                  </svg>
                </div>
              </div>
              <div className="pillar-info">
                <h3>Aquatic Resources</h3>
                <p>Sustaining marine, brackish, and inland fisheries. We support mud crab aquaculture, shellfish cultivation, and biodiversity mapping in Western Visayas' rich marine habitats.</p>
                <a href="#rd#tab-mango" className="read-more">Learn More &rarr;</a>
              </div>
            </div>

            {/* Pillar 3: Natural Resources */}
            <div className="pillar-card slide-up">
              <div className="pillar-image-container">
                <img src="img/pillar_natural.png" alt="Natural Resources Research" />
                <div className="pillar-icon-overlay">
                  <svg viewBox="0 0 24 24">
                    <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M11,6V9.26C9.28,9.75 8,11.23 8,13A4,4 0 0,0 12,17A4,4 0 0,0 16,13C16,11.23 14.72,9.75 13,9.26V6H11M12,11A2,2 0 0,1 14,13A2,2 0 0,1 12,15A2,2 0 0,1 10,13A2,2 0 0,1 12,11Z"/>
                  </svg>
                </div>
              </div>
              <div className="pillar-info">
                <h3>Natural Resources</h3>
                <p>Preserving regional ecosystems through watershed management, bamboo reforestation programs, climate vulnerability assessments, and biodiversity conservation policies.</p>
                <a href="#rd#tab-coconut" className="read-more">Learn More &rarr;</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission / Vision split */}
      <section className="section-padding home-about-section">
        <div className="container grid-2">
          <div className="home-about-text slide-up">
            <h3>Innovating for the Future</h3>
            <p>Since its inception in 1988, WESVAARRDEC has acted as the central link connecting Western Visayas' research community with policy makers, farm organizations, and environmental groups. Guided by the base agency, West Visayas State University, we synergize skills and resources to create sustainable opportunities.</p>
            
            <div className="core-statements">
              <div className="statement-card">
                <h4>
                  <svg viewBox="0 0 24 24" fill="var(--primary)" width="20" height="20"><path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/></svg>
                  Our Vision
                </h4>
                <p>A dynamic force for sustainable agriculture, aquatic, and natural resources (AANR) sectors in Western Visayas.</p>
              </div>
              
              <div className="statement-card">
                <h4>
                  <svg viewBox="0 0 24 24" fill="var(--secondary)" width="20" height="20"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>
                  Our Mission
                </h4>
                <p>To synergize and harness resources to generate and commercialize technologies to propel regional AANR development.</p>
              </div>
            </div>
          </div>

          <div className="logo-frame slide-up" style={{ display: 'flex' }}>
            <img src="img/logo.png" alt="WESVAARRDEC Logo Graphic" />
          </div>
        </div>
      </section>

      {/* Latest Updates Grid */}
      <section className="section-padding updates-section" id="news">
        <div className="container">
          <div class="section-header slide-up">
            <h2>Latest News & Announcements</h2>
            <p>Stay informed with the latest scientific discoveries, R&D symposia, and technological breakthroughs across Region VI.</p>
          </div>

          <div className="grid-3">
            {/* News 1 */}
            <div className="news-card slide-up">
              <div className="news-image">
                <img src="img/pillar_agriculture.png" alt="Consortium Meeting" />
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-tag">Event</span>
                  <span>June 1, 2026</span>
                </div>
                <h3><a href="#news">WESVAARRDEC Hosts 2026 Regional R&D Symposium</a></h3>
                <p>Academic institutions and government researchers from across Western Visayas gathered at WVSU to present outstanding studies in climate-smart agriculture and sustainable fisheries.</p>
              </div>
            </div>

            {/* News 2 */}
            <div className="news-card slide-up">
              <div className="news-image">
                <img src="img/pillar_aquatic.png" alt="Tilapia Culture" />
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-tag">Research</span>
                  <span>May 18, 2026</span>
                </div>
                <h3><a href="#news">New Mud Crab Hatchery Protocols Deployed in Capiz</a></h3>
                <p>In partnership with SEAFDEC/AQD, the consortium has successfully rolled out localized hatchery technology to boost crab farmer yields and survival rates in coastal Capiz.</p>
              </div>
            </div>

            {/* News 3 */}
            <div className="news-card slide-up">
              <div className="news-image">
                <img src="img/pillar_natural.png" alt="Bamboo Forest" />
              </div>
              <div className="news-content">
                <div className="news-meta">
                  <span className="news-tag">Technology</span>
                  <span>April 29, 2026</span>
                </div>
                <h3><a href="#news">Digitized Bamboo Resource Mapping Launched</a></h3>
                <p>WESVAARRDEC launches a satellite-based geographical Information System (GIS) mapping application to monitor and manage bamboo resources in the province of Iloilo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Member institutions grid */}
      <section className="section-padding members-section" id="members">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Our Member Institutions</h2>
            <p>A collaborative network of 28 universities, colleges, government offices, and research institutions working toward a common goal.</p>
          </div>

          <div className="members-grid">
            <div className="member-item slide-up">
              <div className="member-logo-placeholder">WVSU</div>
              <div className="member-name">West Visayas State U</div>
            </div>
            <div className="member-item slide-up">
              <div className="member-logo-placeholder">ASU</div>
              <div className="member-name">Aklan State U</div>
            </div>
            <div className="member-item slide-up">
              <div className="member-logo-placeholder">CAPSU</div>
              <div className="member-name">Capiz State U</div>
            </div>
            <div className="member-item slide-up">
              <div className="member-logo-placeholder">CHMSU</div>
              <div className="member-name">Carlos Hilado State U</div>
            </div>
            <div className="member-item slide-up">
              <div className="member-logo-placeholder">CPSU</div>
              <div className="member-name">Central Phil. State U</div>
            </div>
            <div className="member-item slide-up">
              <div className="member-logo-placeholder">GSU</div>
              <div className="member-name">Guimaras State U</div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '40px' }} className="slide-up">
            <a href="#about" className="btn btn-primary">View All 28 Members</a>
          </div>
        </div>
      </section>
    </div>
  );
}
