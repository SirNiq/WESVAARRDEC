import React, { useState } from 'react';

export default function Footer({ onNotify }) {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      onNotify('Subscribed! You will now receive our updates.');
      setEmail('');
      setLoading(false);
    }, 1000);
  };

  return (
    <footer className="main-footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-widget">
            <div className="footer-logo">
              <img src="img/logo.png" alt="WESVAARRDEC Logo" />
              <div className="footer-logo-text">
                WESVAARRDEC
                <span>Est. 1988</span>
              </div>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.95rem', marginBottom: '20px' }}>
              A regional consortium pooling expertise and resources to drive research, development, and tech transfer in agriculture, aquatic, and natural resources.
            </p>
          </div>

          <div className="footer-widget">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#rd">R&D & Technologies</a></li>
              <li><a href="#services">Services & KMC</a></li>
              <li><a href="#contact">Contact Us</a></li>
            </ul>
          </div>

          <div className="footer-widget">
            <h3>Contact Info</h3>
            <ul className="footer-contact">
              <li>
                <svg viewBox="0 0 24 24"><path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"/></svg>
                <span>WESVAARRDEC Secretariat, West Visayas State University Campus, Luna St., La Paz, Iloilo City, Philippines</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M6.62,10.79C8.06,13.62 10.38,15.94 13.21,17.38L15.41,15.18C15.69,14.9 16.08,14.82 16.43,14.93C17.55,15.3 18.75,15.5 20,15.5A1,1 0 0,1 21,16.5V20A1,1 0 0,1 20,21A17,17 0 0,1 3,4A1,1 0 0,1 4,3H7.5A1,1 0 0,1 8.5,4C8.5,5.25 8.7,6.45 9.07,7.57C9.18,7.92 9.1,8.31 8.82,8.59L6.62,10.79Z"/></svg>
                <span>(033) 320-0870 to 78 local 1502</span>
              </li>
              <li>
                <svg viewBox="0 0 24 24"><path d="M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6A2,2 0 0,0 20,4M20,8L12,13L4,8V6L12,11L20,6V8Z"/></svg>
                <span>wesvaarrdec@wvsu.edu.ph</span>
              </li>
            </ul>
          </div>

          <div className="footer-widget">
            <h3>Newsletter</h3>
            <div className="footer-newsletter">
              <p>Subscribe to our newsletter to receive the latest updates, event details, and publication releases.</p>
              <form onSubmit={handleSubscribe} className="newsletter-form">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="newsletter-input" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required 
                  disabled={loading}
                />
                <button type="submit" className="btn btn-accent" style={{ padding: '10px 15px' }} disabled={loading}>
                  {loading ? 'Subscribing...' : 'Send'}
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 WESVAARRDEC Consortium. All Rights Reserved. Hosted at West Visayas State University.</p>
          <div className="footer-bottom-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
