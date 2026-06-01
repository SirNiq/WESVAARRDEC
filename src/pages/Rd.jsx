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
      const match = ['tab-darag', 'tab-mango', 'tab-crab', 'tab-bamboo'].find(
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
            <p>WESVAARRDEC focuses research and funding on commodities of high economic and ecological value in Western Visayas.</p>
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
              className={`commodity-tab-btn ${activeTab === 'tab-crab' ? 'active' : ''}`} 
              onClick={() => handleTabClick('tab-crab')}
            >
              Mud Crab
            </button>
            <button 
              className={`commodity-tab-btn ${activeTab === 'tab-bamboo' ? 'active' : ''}`} 
              onClick={() => handleTabClick('tab-bamboo')}
            >
              Bamboo & Forestry
            </button>
          </div>

          {/* Tab Panes */}
          {activeTab === 'tab-darag' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_agriculture.png" alt="Darag Chicken Farming" />
                </div>
                <div className="commodity-details">
                  <h3>Darag Native Chicken</h3>
                  <p><strong>Lead Agency:</strong> West Visayas State University (WVSU)</p>
                  <p>Darag (Gallus gallus domesticus) is the indigenous native chicken of Western Visayas, praised for its unique flavor, texture, and high market value. WESVAARRDEC drives research on standardizing breeding protocols, reducing chick mortality, establishing organic feeding guidelines, and assisting farmers in scaling production.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tab-mango' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_agriculture.png" alt="Sweet Mango Orchard" />
                </div>
                <div className="commodity-details">
                  <h3>Guimaras Sweet Mango</h3>
                  <p><strong>Lead Agency:</strong> Guimaras State University / DA Region 6</p>
                  <p>Guimaras mangoes are famous worldwide for their intense sweetness and fiber-free flesh. Our consortium coordinates scientific efforts on integrated pest management (IPM), flower induction regulation, post-harvest hot water treatment, and digital trace-back codes to guarantee product authenticity in export markets.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tab-crab' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_aquatic.png" alt="Mud Crab Aquaculture" />
                </div>
                <div className="commodity-details">
                  <h3>Scylla serrata (Mud Crab)</h3>
                  <p><strong>Lead Agency:</strong> SEAFDEC/AQD & Capiz State University</p>
                  <p>Mud crab production is a primary income source for coastal communities in Capiz and Iloilo. WESVAARRDEC supports research in hatchery diets, disease prevention (preventing white spot syndrome), mangrove-friendly aquasilviculture methods, and soft-shell crab production protocols for local adoption.</p>
                  <a href="#contact" className="btn btn-primary">Inquire About This Research</a>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'tab-bamboo' && (
            <div className="commodity-pane fade-in">
              <div className="commodity-content">
                <div className="commodity-img">
                  <img src="img/pillar_natural.png" alt="Bamboo Reforestation" />
                </div>
                <div className="commodity-details">
                  <h3>Bamboo and Watershed Protection</h3>
                  <p><strong>Lead Agency:</strong> Aklan State University / DENR Region 6</p>
                  <p>Bamboo plays a dual role in Western Visayas: as a carbon-sequestering reforestation plant for critical watersheds and as a raw material for furniture and textiles. Our studies cover tissue culture micropropagation, preservative treatments, engineered bamboo design, and flood hazard mitigation mapping.</p>
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
                <span className="tech-tag">Aquatic</span>
                <h3>Aquasilviculture Mud Crab Nursery</h3>
                <p>A mangrove-friendly enclosure rearing protocol that allows crab culture inside active wetlands without harming coastal forests. Promotes ecological harmony and high crab survival.</p>
                <div className="tech-institution">Developed by: SEAFDEC/AQD & Capiz State U</div>
              </div>
            </div>

            {/* Tech 3 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Natural Resources</span>
                <h3>Bamboo Preservation and Seasoning</h3>
                <p>An eco-friendly chemical curing and treatment technique that increases bamboo cane durability against wood borers (bukbok) by up to 300%, enabling high-grade furniture use.</p>
                <div className="tech-institution">Developed by: Aklan State University</div>
              </div>
            </div>

            {/* Tech 4 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span className="tech-tag">Agriculture</span>
                <h3>Sweet Mango Quality Classifier</h3>
                <p>A portable near-infrared spectrometer application that assesses mango ripeness and sugar levels non-destructively, optimizing classification for premium export markets.</p>
                <div className="tech-institution">Developed by: Guimaras State University</div>
              </div>
            </div>

            {/* Tech 5 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span class="tech-tag">Agriculture</span>
                <h3>Microbial Organic Soil Stimulant</h3>
                <p>An organic inoculant that speeds up organic matter decomposition and releases essential nitrogen/phosphorus. Restores degraded soil quality and increases rice harvests.</p>
                <div className="tech-institution">Developed by: Central Philippine State U</div>
              </div>
            </div>

            {/* Tech 6 */}
            <div className="tech-card slide-up">
              <div className="tech-banner"></div>
              <div className="tech-info">
                <span class="tech-tag">Aquatic</span>
                <h3>Green Shellfish Purification System</h3>
                <p>A recirculating water system utilizing UV sterilization to cleanse harvested mussels and oysters from impurities. Assures food safety standards for commercial restaurants.</p>
                <div className="tech-institution">Developed by: ISUST (Iloilo State U)</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
