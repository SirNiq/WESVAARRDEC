import React, { useState, useEffect, useRef } from 'react';

export default function Contact({ onNotify }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const animatedElements = contactRef.current?.querySelectorAll('.slide-up');
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

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    if (!name || !email || !subject || !message) {
      onNotify('Please fill out all fields.');
      return;
    }

    setLoading(true);
    setTimeout(() => {
      onNotify('Thank you! Your message has been sent successfully.');
      setFormData({ name: '', email: '', subject: '', message: '' });
      setLoading(false);
    }, 1500);
  };

  return (
    <div ref={contactRef}>
      {/* Subpage Hero */}
      <section className="subpage-hero">
        <div className="container subpage-hero-content">
          <h1>Contact Us</h1>
          <div className="breadcrumbs">
            <a href="#home">Home</a> &gt; <span>Contact Us</span>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="section-padding">
        <div className="container">
          <div className="contact-grid">
            {/* Info Column */}
            <div className="contact-info-panel slide-up">
              <div>
                <h2>Get in Touch</h2>
                <p>Have inquiries regarding technology adoptions, active research projects, or consortium memberships? Contact our secretariat today.</p>
                
                <div className="contact-details-list">
                  {/* Item 1: Location */}
                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <svg viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/></svg>
                    </div>
                    <div className="contact-detail-text">
                      <h4>Secretariat Location</h4>
                      <p>West Visayas State University Campus, Luna St., La Paz, Iloilo City, 5000 Philippines</p>
                    </div>
                  </div>

                  {/* Item 2: Telephone */}
                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <svg viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>
                    </div>
                    <div className="contact-detail-text">
                      <h4>Phone & Fax</h4>
                      <p>(033) 320-0870 to 78 local 1502</p>
                    </div>
                  </div>

                  {/* Item 3: Email */}
                  <div className="contact-detail-item">
                    <div className="contact-detail-icon">
                      <svg viewBox="0 0 24 24"><path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/></svg>
                    </div>
                    <div className="contact-detail-text">
                      <h4>Email Address</h4>
                      <p>wesvaarrdec@wvsu.edu.ph</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{ color: 'var(--text-light)', marginBottom: '15px', fontSize: '1.1rem' }}>Follow Us</h4>
                <div className="social-links">
                  <a href="#facebook" className="social-btn" aria-label="Facebook">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7C18.34 21.19 22 17.04 22 12.06c0-5.53-4.5-10.02-10-10.02z"/></svg>
                  </a>
                  <a href="#twitter" className="social-btn" aria-label="Twitter">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.48 2.96,10.28 2.38,9.96C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z"/></svg>
                  </a>
                  <a href="#youtube" className="social-btn" aria-label="YouTube">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M10,15L15.19,11.8L10,8.6V15M21.56,7.11C21.72,7.72 21.84,8.68 21.91,10C21.97,11.31 22,12.21 22,12.72V13.28C22,13.79 21.97,14.69 21.91,16C21.84,17.32 21.72,18.28 21.56,18.89C21.37,19.6 20.82,20.15 20.11,20.34C19.5,20.5 18.23,20.61 16.29,20.68C14.36,20.75 12.93,20.78 12,20.78C11.07,20.78 9.64,20.75 7.71,20.68C5.77,20.61 4.5,20.5 3.89,20.34C3.18,20.15 2.63,19.6 2.44,18.89C2.28,18.28 2.16,17.32 2.09,16C2.03,14.69 2,13.79 2,13.28V12.72C2,12.21 2.03,11.31 2.09,10C2.16,8.68 2.28,7.72 2.44,7.11C2.63,6.4 3.18,5.85 3.89,5.66C4.5,5.5 5.77,5.39 7.71,5.32C9.64,5.25 11.07,5.22 12,5.22C12.93,5.22 14.36,5.25 16.29,5.32C18.23,5.39 19.5,5.5 20.11,5.66C20.82,5.85 21.37,6.4 21.56,7.11Z"/></svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Form Column */}
            <div className="contact-form-panel slide-up">
              <h3>Send Us a Message</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="form-control" 
                    placeholder="Enter your full name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                    disabled={loading}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="form-control" 
                    placeholder="Enter your email address" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    disabled={loading}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="form-control" 
                    placeholder="What is this regarding?" 
                    value={formData.subject}
                    onChange={handleChange}
                    required 
                    disabled={loading}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    className="form-control" 
                    placeholder="Write your message details here..." 
                    value={formData.message}
                    onChange={handleChange}
                    required 
                    disabled={loading}
                  ></textarea>
                </div>
                
                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '10px' }} disabled={loading}>
                  {loading ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Location Map */}
      <section className="map-section">
        <div className="container">
          <div className="section-header slide-up">
            <h2>Our Secretariat Map</h2>
            <p>Find us inside the West Visayas State University (WVSU) main campus in La Paz, Iloilo City.</p>
          </div>

          <div className="map-container slide-up">
            <div className="map-placeholder">
              <svg viewBox="0 0 24 24">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M12,6A6,6 0 0,0 6,12A6,6 0 0,0 12,18A6,6 0 0,0 18,12A6,6 0 0,0 12,6M12,8A4,4 0 0,1 16,12A4,4 0 0,1 12,16A4,4 0 0,1 8,12A4,4 0 0,1 12,8Z"/>
              </svg>
              <h3>WESVAARRDEC Secretariat Office</h3>
              <p style={{ maxWidth: '500px', margin: '0 auto 20px auto', color: 'var(--text-muted)' }}>
                West Visayas State University Main Campus, Luna St., La Paz, Iloilo City
                <br />
                Coordinates: 10.7224° N, 122.5644° E
              </p>
              <a href="https://maps.google.com/?q=West+Visayas+State+University" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Open in Google Maps &rarr;</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
