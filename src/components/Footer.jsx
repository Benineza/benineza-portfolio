const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer>
      <div className="container">
        <div className="footer-top">
          {/* Brand & Summary */}
          <div className="footer-brand">
            <div 
              className="logo" 
              onClick={() => scrollToSection('home')}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => { if (e.key === 'Enter') scrollToSection('home'); }}
            >
              <div className="logo-badge">MB</div>
              <div className="logo-info">
                <span className="logo-name">Moise Benineza</span>
              </div>
            </div>
            <p className="footer-desc">
              Software Engineering & Creative Developer dedicated to crafting modern, efficient, and user-centric digital experiences.
            </p>
          </div>

          {/* Quick Navigation */}
          <nav className="footer-nav" aria-label="Footer Navigation">
            <span 
              onClick={() => scrollToSection('home')} 
              className="footer-link"
              role="button"
              tabIndex={0}
            >
              Home
            </span>
            <span 
              onClick={() => scrollToSection('about')} 
              className="footer-link"
              role="button"
              tabIndex={0}
            >
              About
            </span>
            <span 
              onClick={() => scrollToSection('skills')} 
              className="footer-link"
              role="button"
              tabIndex={0}
            >
              Skills
            </span>
            <span 
              onClick={() => scrollToSection('projects')} 
              className="footer-link"
              role="button"
              tabIndex={0}
            >
              Projects
            </span>
            <span 
              onClick={() => scrollToSection('certifications')} 
              className="footer-link"
              role="button"
              tabIndex={0}
            >
              Certifications
            </span>
            <span 
              onClick={() => scrollToSection('contact')} 
              className="footer-link"
              role="button"
              tabIndex={0}
            >
              Contact
            </span>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Moise Benineza. All rights reserved.</p>

          <div className="footer-socials">
            <a 
              href="https://github.com/Benineza" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="GitHub Profile"
              title="GitHub"
            >
              <i className="fab fa-github" aria-hidden="true"></i>
            </a>
            <a 
              href="https://www.linkedin.com/in/benineza/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="LinkedIn Profile"
              title="LinkedIn"
            >
              <i className="fab fa-linkedin-in" aria-hidden="true"></i>
            </a>
            <a 
              href="https://twitter.com/1Benineza" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="Twitter / X Profile"
              title="Twitter / X"
            >
              <i className="fab fa-x-twitter" aria-hidden="true"></i>
            </a>
            <a 
              href="https://wa.me/250780539886" 
              target="_blank" 
              rel="noopener noreferrer"
              className="social-icon-btn"
              aria-label="WhatsApp Contact"
              title="WhatsApp"
            >
              <i className="fab fa-whatsapp" aria-hidden="true"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
