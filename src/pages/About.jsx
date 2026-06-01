import React, { useEffect, useRef } from 'react';

export default function About() {
  const aboutRef = useRef(null);

  useEffect(() => {
    const animatedElements = aboutRef.current?.querySelectorAll('.slide-up');
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
    <div ref={aboutRef}>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container subpage-hero-content">
          <h1>About WESVAARRDEC</h1>
          <div className="breadcrumbs">
            <a href="#home">Home</a> &gt; <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Vision, Mission & Goals */}
      <section className="section-padding">
        <div className="container">
          <div className="about-vm-grid">
            {/* Vision */}
            <div className="vm-card slide-up">
              <div className="vm-icon">
                <svg viewBox="0 0 24 24"><path d="M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C17,19.5 21.27,16.39 23,12C21.27,7.61 17,4.5 12,4.5Z"/></svg>
              </div>
              <h3>Our Vision</h3>
              <p>A dynamic force for sustainable agriculture, aquatic, and natural resources (AANR) sectors in Western Visayas.</p>
            </div>

            {/* Mission */}
            <div className="vm-card slide-up">
              <div className="vm-icon">
                <svg viewBox="0 0 24 24"><path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/></svg>
              </div>
              <h3>Our Mission</h3>
              <p>To synergize and harness resources to generate and commercialize technologies to propel the development of agriculture, fishery, and natural resources sectors in Western Visayas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section className="section-padding history-section" id="history">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Our Journey & Milestones</h2>
            <p>Over three decades of coordinating scientific research and empowering farmers and fishers in Region VI.</p>
          </div>

          <div className="timeline">
            {/* Milestone 1 */}
            <div className="timeline-container left slide-up">
              <div className="timeline-content">
                <div className="timeline-year">1988</div>
                <h4>Founding and Establishment</h4>
                <p>WESVAARRDEC was formally organized on June 22, 1988, under the umbrella of PCARRD (now DOST-PCAARRD) to build a unified regional R&D structure.</p>
              </div>
            </div>

            {/* Milestone 2 */}
            <div className="timeline-container right slide-up">
              <div className="timeline-content">
                <div className="timeline-year">1999</div>
                <h4>FITS Network Rollout</h4>
                <p>The Farming Information and Technology Services (FITS) Centers were introduced in municipal LGUs, bringing scientific farming guides straight to local farmers.</p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="timeline-container left slide-up">
              <div className="timeline-content">
                <div className="timeline-year">2012</div>
                <h4>Commodity Focus Realignment</h4>
                <p>The consortium realigned research to match priority commodities in Region VI, specializing in Darag chicken, mango, mud crab, and organic vegetables.</p>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="timeline-container right slide-up">
              <div className="timeline-content">
                <div className="timeline-year">2020+</div>
                <h4>Digital Transition & Modernization</h4>
                <p>Integrating geographic mapping (GIS), drone-assisted agriculture, and online training platforms to adapt to modern climate and market challenges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Structure */}
      <section className="section-padding" id="structure">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Organizational Structure</h2>
            <p>WESVAARRDEC is governed by collaborative committees representing member agencies, supported by a central secretariat at West Visayas State University.</p>
          </div>

          <div className="org-chart-tree slide-up">
            
            {/* Top Row: Chairperson & Vice Chairperson (Grid Layout) */}
            <div className="org-grid-container top-row-grid">
              <div className="grid-cell-center">
                <div className="member-profile-card border-primary-left">
                  <div className="profile-avatar bg-gradient-primary">BG</div>
                  <div className="profile-info">
                    <span className="profile-name">DR. BOBBY D. GERARDO</span>
                    <span className="profile-role">RRDCC Chairperson</span>
                  </div>
                </div>
              </div>
              
              <div className="grid-cell-right">
                <div className="member-profile-card border-primary-left">
                  <div className="profile-avatar bg-gradient-primary">AM</div>
                  <div className="profile-info">
                    <span className="profile-name">DR. ALADINO C. MORACA</span>
                    <span className="profile-role">RRDCC Vice Chairperson</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Middle Row: Consortium Director */}
            <div className="org-grid-container middle-row-grid">
              <div className="grid-cell-center">
                <div className="member-profile-card border-primary-left">
                  <div className="profile-avatar bg-gradient-primary">PD</div>
                  <div className="profile-info">
                    <span className="profile-name">DR. PASTOR JONES T. DENUSTA</span>
                    <span className="profile-role">Consortium Director</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Row: Coordinating Clusters & Secretariat Staff side-by-side */}
            <div className="bottom-row">
              
              {/* Coordinators Box */}
              <div className="org-cluster-box coordinators-box">
                <h3 className="cluster-box-title">Coordinating Clusters</h3>
                <div className="coordinators-grid">
                  
                  <div className="member-profile-card border-secondary-left">
                    <div className="profile-avatar bg-gradient-secondary">MI</div>
                    <div className="profile-info">
                      <span className="profile-name">DR. MICHAEL T. IBISATE</span>
                      <span className="profile-role">Research & Development Coordinator</span>
                    </div>
                  </div>

                  <div className="member-profile-card border-secondary-left">
                    <div className="profile-avatar bg-gradient-secondary">HG</div>
                    <div className="profile-info">
                      <span className="profile-name">DR. HELEN G. GENANDOY</span>
                      <span className="profile-role">Technology Transfer Coordinator</span>
                    </div>
                  </div>

                  <div className="member-profile-card border-accent-left">
                    <div className="profile-avatar bg-gradient-accent">IE</div>
                    <div className="profile-info">
                      <span className="profile-name">DR. IAN C. ESPADA</span>
                      <span className="profile-role">Science Communication Coordinator</span>
                    </div>
                  </div>

                  <div className="member-profile-card border-accent-left">
                    <div className="profile-avatar bg-gradient-accent">ND</div>
                    <div className="profile-info">
                      <span className="profile-name">DR. NIKIE JO E. DEOCAMPO</span>
                      <span className="profile-role">ICT Cluster Coordinator</span>
                    </div>
                  </div>
                  
                </div>
              </div>

              {/* Secretariat Box */}
              <div className="org-cluster-box staff-box">
                <h3 className="cluster-box-title">Secretariat Support Staff</h3>
                <div className="staff-grid">
                  
                  <div className="member-profile-card staff border-gray-left">
                    <div className="profile-avatar bg-gradient-gray">JC</div>
                    <div className="profile-info">
                      <span className="profile-name">MS. JYLYN V. CORNELIO</span>
                      <span className="profile-role">Project Technical Aide VI</span>
                    </div>
                  </div>

                  <div className="member-profile-card staff border-gray-left">
                    <div className="profile-avatar bg-gradient-gray">NM</div>
                    <div className="profile-info">
                      <span className="profile-name">MS. NICOLE FRANZEEN F. MALLARE</span>
                      <span className="profile-role">Administrative Staff</span>
                    </div>
                  </div>

                  <div className="member-profile-card staff border-gray-left">
                    <div className="profile-avatar bg-gradient-gray">CT</div>
                    <div className="profile-info">
                      <span className="profile-name">MS. CYNTHIA A. TORLAO</span>
                      <span className="profile-role">Project Administrative Aide III</span>
                    </div>
                  </div>
                  
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Directory Section */}
      <section className="section-padding history-section" id="directory">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Member Institutions Directory</h2>
            <p>Our strength lies in collaboration. WESVAARRDEC brings together 28 regional pillars of research and service.</p>
          </div>

          {/* SUCs */}
          <div className="directory-category slide-up">
            <h3>State Universities and Colleges (SUCs)</h3>
            <div className="directory-grid">
              <div className="directory-card">
                <span className="acronym">WVSU</span>
                <h4>West Visayas State University</h4>
                <p>Base agency & host of the WESVAARRDEC secretariat. Located in Iloilo City.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">ASU</span>
                <h4>Aklan State University</h4>
                <p>Specializes in forestry, agriculture, and animal science research in Aklan.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">CAPSU</span>
                <h4>Capiz State University</h4>
                <p>Leads research in inland fisheries, aquaculture, and agriculture in Capiz.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">CHMSU</span>
                <h4>Carlos Hilado Memorial State University</h4>
                <p>Provides R&D expertise in organic agriculture and fishery systems in Negros Occidental.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">CPSU</span>
                <h4>Central Philippines State University</h4>
                <p>Focuses on food security, agricultural engineering, and organic farming research.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">GSU</span>
                <h4>Guimaras State University</h4>
                <p>Specializes in mango technology and agricultural tourism research on Guimaras Island.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">ISUST</span>
                <h4>Iloilo State University of Fisheries and Science and Technology</h4>
                <p>Highly recognized for its research in capture fisheries and brackishwater aquaculture.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">NISU</span>
                <h4>Northern Iloilo State University</h4>
                <p>Contributes R&D support in fisheries, crop production, and marine sciences.</p>
              </div>
              <div className="directory-card">
                <span className="acronym">UA</span>
                <h4>University of Antique</h4>
                <p>Drives natural resources management and coastal resource development studies in Antique.</p>
              </div>
            </div>
          </div>

          {/* Government Agencies */}
          <div className="directory-category slide-up">
            <h3>Government Departments and Research Agencies</h3>
            <div className="directory-grid">
              <div className="directory-card gov">
                <span class="acronym">DA R6</span>
                <h4>Department of Agriculture - Region VI</h4>
                <p>Provides regulatory support, funding, and agricultural extensions for farmers in Region VI.</p>
              </div>
              <div className="directory-card gov">
                <span class="acronym">DOST R6</span>
                <h4>Department of Science and Technology - Region VI</h4>
                <p>Provides key funding, scientific oversight, and sets the regional S&T priorities.</p>
              </div>
              <div className="directory-card gov">
                <span class="acronym">BFAR R6</span>
                <h4>Bureau of Fisheries and Aquatic Resources - Region VI</h4>
                <p>Drives aquatic resource conservation, licensing, and fish farming training support.</p>
              </div>
              <div className="directory-card gov">
                <span class="acronym">DENR R6</span>
                <h4>Dept. of Environment & Natural Resources - Region VI</h4>
                <p>Manages forestry, protected areas, and watershed conservation research.</p>
              </div>
              <div className="directory-card gov">
                <span class="acronym">NEDA R6</span>
                <h4>National Economic and Development Authority - Region VI</h4>
                <p>Ensures that R&D targets align with Western Visayas' long-term socioeconomic plans.</p>
              </div>
              <div className="directory-card gov">
                <span class="acronym">DA-ATI R6</span>
                <h4>DA - Agricultural Training Institute - Region VI</h4>
                <p>Conducts capability training programs, manages FITS centers, and helps farmers adapt tech.</p>
              </div>
            </div>
          </div>

          {/* Private Institutions */}
          <div className="directory-category slide-up">
            <h3>Private HEIs and Intergovernmental Organizations</h3>
            <div className="directory-grid">
              <div className="directory-card hei">
                <span class="acronym">CPU</span>
                <h4>Central Philippine University</h4>
                <p>Private university driving research in agricultural engineering and biotechnology.</p>
              </div>
              <div className="directory-card hei">
                <span class="acronym">USA</span>
                <h4>University of San Agustin</h4>
                <p>Highly regarded for natural products research and pharmacology drug-discovery programs.</p>
              </div>
              <div className="directory-card hei">
                <span class="acronym">SEAFDEC/AQD</span>
                <h4>Southeast Asian Fisheries Development Center</h4>
                <p>International institution based in Tigbauan, Iloilo. World leader in aquaculture R&D.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
