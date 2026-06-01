import React, { useState, useEffect, useRef } from 'react';

export default function Rd() {
  const [activeTab, setActiveTab] = useState('tab-darag');
  const rdRef = useRef(null);

  // Set tab from URL hash if available on load
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      // support #rd#tab-name or just #tab-name
      const cleanHash = hash.replace('#rd', '');
      const match = ['tab-darag', 'tab-mango', 'tab-coconut', 'tab-muscovado', 'tab-sugarcane'].find(
        (t) => '#' + t === cleanHash || t === cleanHash.replace('#', '')
      );
      if (match) {
        setActiveTab(match);
      }
    }
  }, []);

  useEffect(() => {
    const animatedElements = rdRef.current?.querySelectorAll('.slide-up');
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

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Update hash to support sharing/retaining tab state
    window.location.hash = `#rd#${tab}`;
  };

  return (
    <div ref={rdRef}>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container subpage-hero-content">
          <h1>R&D & Technologies</h1>
          <div className="breadcrumbs">
            <a href="#home">Home</a> &gt; <span>R&D & Technologies</span>
          </div>
        </div>
      </section>

      {/* Commodity Priorities Section */}
      <section className="section-padding">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Regional Commodity Priorities</h2>
            <p>WESVAARRDEC focuses research and funding on priority commodities of high economic and agricultural value in Western Visayas.</p>
          </div>

          {/* Tab Buttons */}
          <div className="commodity-tabs slide-up">
            <button 
              className={`commodity-tab-btn ${activeTab === 'tab-darag' ? 'active' : ''}`} 
              onClick={() => handleTabClick('tab-darag')}
            >
              Darag Chicken
            </button>
            <button 
              className={`commodity-tab-btn ${activeTab === 'tab-mango' ? 'active' : ''}`} 
              onClick={() => handleTabClick('tab-mango')}
            >
              Guimaras Mango
            </button>
            <button 
              className={`commodity-tab-btn ${activeTab === 'tab-coconut' ? 'active' : ''}`} 
              onClick={() => handleTabClick('tab-coconut')}
            >
              Coconut
            </button>
            <button 
              className={`commodity-tab-btn ${activeTab === 'tab-muscovado' ? 'active' : ''}`} 
              onClick={() => handleTabClick('tab-muscovado')}
            >
              Muscovado
            </button>
            <button 
              className={`commodity-tab-btn ${activeTab === 'tab-sugarcane' ? 'active' : ''}`} 
              onClick={() => handleTabClick('tab-sugarcane')}
            >
              Sugarcane
            </button>
          </div>

          {/* Tab Panes */}
          {/* Pane 1: Darag */}
          {activeTab === 'tab-darag' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_agriculture.png" alt="Darag Chicken Farming" />
                </div>
                <div className="commodity-details">
                  <h3>Darag Native Chicken</h3>
                  <p><strong>Lead Agency:</strong> West Visayas State University (WVSU)</p>
                  <p>Darag is the premier native chicken breed indigenous to Western Visayas, highly valued for its unique taste, leaner meat, and premium market pricing. R&D initiatives focus on standardizing breeding and rearing protocols, developing low-cost organic feed formulations from local materials, and improving survival rates in backyard farms.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}

          {/* Pane 2: Mango */}
          {activeTab === 'tab-mango' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_agriculture.png" alt="Sweet Mango Orchard" />
                </div>
                <div className="commodity-details">
                  <h3>Guimaras Sweet Mango</h3>
                  <p><strong>Lead Agency:</strong> Guimaras State University / DA Region 6</p>
                  <p>Famous worldwide for its sweetness and texture, the Guimaras Mango is a key export commodity. WESVAARRDEC coordinates research on integrated pest management (IPM), tree rehabilitation protocols, hot water post-harvest treatments, and digital blockchain-based tagging to ensure quality and origin control.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}

          {/* Pane 3: Coconut */}
          {activeTab === 'tab-coconut' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_natural.png" alt="Coconut Plantations" />
                </div>
                <div className="commodity-details">
                  <h3>Coconut R&D</h3>
                  <p><strong>Lead Agency:</strong> Aklan State University / Philippine Coconut Authority (PCA)</p>
                  <p>Coconut is a major source of livelihood across Aklan and Capiz. Consortium R&D projects focus on developing high-yielding hybrid varieties, soil management for multi-crop coco-farms, processing technologies for high-value Virgin Coconut Oil (VCO), and deploying sustainable pest control against the coconut scale insect.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}

          {/* Pane 4: Muscovado */}
          {activeTab === 'tab-muscovado' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_agriculture.png" alt="Muscovado Sugar Mill" />
                </div>
                <div className="commodity-details">
                  <h3>Organic Muscovado Sugar</h3>
                  <p><strong>Lead Agency:</strong> University of Antique / Sugar Regulatory Administration</p>
                  <p>Muscovado is an unrefined brown sugar produced using traditional evaporation processes, serving as a primary high-value agricultural product of Antique and Negros. Research focuses on optimizing processing sanitation, design of biomass-fired furnaces for processing mills, and organic certifications for smallholder cooperatives.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}

          {/* Pane 5: Sugarcane */}
          {activeTab === 'tab-sugarcane' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_natural.png" alt="Sugarcane Fields" />
                </div>
                <div className="commodity-details">
                  <h3>Sugarcane Production</h3>
                  <p><strong>Lead Agency:</strong> Sugar Regulatory Administration / Carlos Hilado Memorial State U</p>
                  <p>As the sugar bowl of the Philippines, Negros Occidental relies heavily on sugarcane farming. WESVAARRDEC drives sugarcane R&D toward developing climate-resilient cane varieties, mechanized harvest efficiency systems, automated soil health analyzers, and biological pest control controls.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Technology Catalog Section */}
      <section className="section-padding tech-catalog" id="catalog">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Commercialization-Ready Technologies</h2>
            <p>WESVAARRDEC supports the translation of laboratory discoveries into field-applied, profitable systems for farmers, fisherfolk, and cooperatives.</p>
          </div>

          <div className="grid-3">
            {/* Tech 1 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Agriculture</span>
                <h3>Darag Feeding and Rearing Protocol</h3>
                <p>A standardized management system utilizing locally sourced botanical feed and vaccination schedules. Reduces native chick mortality from 60% down to under 15%.</p>
                <div className="tech-institution">Developed by: West Visayas State University</div>
              </div>
            </div>

            {/* Tech 2 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Agriculture</span>
                <h3>Sweet Mango Quality Classifier</h3>
                <p>A portable near-infrared spectrometer application that assesses mango ripeness and sugar levels non-destructively, optimizing classification for premium export markets.</p>
                <div className="tech-institution">Developed by: Guimaras State University</div>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Agriculture</span>
                <h3>Clean-Fuel Muscovado Furnace</h3>
                <p>An engineered biomass furnace design for muscovado processing mills. Increases heating efficiency by 40% while eliminating toxic smoke particles, improving product sanitation.</p>
                <div className="tech-institution">Developed by: University of Antique</div>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Agriculture</span>
                <h3>Sugarcane Precision Fertilizer Map</h3>
                <p>A soil-mapping GIS application that analyzes field NPK levels and prescribes precise fertilizer volumes, reducing chemical input costs for sugar farmers by 30%.</p>
                <div className="tech-institution">Developed by: CHMSU & SRA</div>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Agriculture</span>
                <h3>Microbial Organic Soil Stimulant</h3>
                <p>An organic inoculant that speeds up organic matter decomposition and releases essential nitrogen/phosphorus. Restores degraded soil quality and increases rice and sugarcane harvests.</p>
                <div className="tech-institution">Developed by: Central Philippine State U</div>
              </div>
            </div>

            {/* Tech 6 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Agriculture</span>
                <h3>Coconut Hybrid Nursery Propagation</h3>
                <p>A high-speed plant propagation protocol for high-yielding dwarf hybrid coconuts, speeding up seedling maturation by 2 months for faster farm deployment.</p>
                <div className="tech-institution">Developed by: Aklan State University</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
