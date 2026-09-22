import { ArrowRight, Mail, FileCode2 } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="hero-section" id="home">
      {/* Ambient background decoration */}
      <div className="hero-bg-glow" aria-hidden="true" />
      <div className="hero-grid-pattern" aria-hidden="true" />

      <div className="container">
        <div className="hero-layout">
          {/* Left Column: Headline & Action CTAs */}
          <div className="hero-content">
            <div className="hero-badge">
              <span className="status-dot" aria-hidden="true"></span>
              <span>Available for Junior Roles & Internships</span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-accent">Moise Benineza</span>
            </h1>

            <p className="hero-role">
              Creative Developer & Software Engineering Student
            </p>

            <p className="hero-description">
              Software Engineering student with skills in web development, IT support, HTML, CSS, JavaScript, and React. Passionate about building efficient, user-friendly digital solutions and expanding technical expertise through hands-on projects.
            </p>

            <div className="hero-actions">
              <button 
                onClick={() => scrollToSection('projects')} 
                className="btn btn-primary"
                type="button"
              >
                <span>View My Work</span>
                <ArrowRight size={18} aria-hidden="true" />
              </button>

              <button 
                onClick={() => scrollToSection('contact')} 
                className="btn btn-secondary"
                type="button"
              >
                <Mail size={18} aria-hidden="true" />
                <span>Get In Touch</span>
              </button>
            </div>

            <div className="hero-socials">
              <span className="hero-social-label">Connect:</span>
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

          {/* Right Column: Interactive Developer Code Panel */}
          <div className="hero-code-panel" aria-hidden="true">
            <div className="code-panel-header">
              <div className="code-window-controls">
                <span className="code-dot red"></span>
                <span className="code-dot yellow"></span>
                <span className="code-dot green"></span>
              </div>
              <div className="code-panel-tab">
                <FileCode2 size={13} />
                <span>developer.ts</span>
              </div>
            </div>
            <div className="code-panel-body font-mono">
              <pre>
                <code>
                  <span className="syn-keyword">const</span> <span className="syn-def">engineer</span> = &#123;{'\n'}
                  {'  '}<span className="syn-prop">name</span>: <span className="syn-string">"Moise Benineza"</span>,{'\n'}
                  {'  '}<span className="syn-prop">location</span>: <span className="syn-string">"Kigali, Rwanda"</span>,{'\n'}
                  {'  '}<span className="syn-prop">education</span>: <span className="syn-string">"Software Engineering"</span>,{'\n'}
                  {'  '}<span className="syn-prop">focus</span>: [<span className="syn-string">"Full-Stack Web"</span>, <span className="syn-string">"IT Systems"</span>],{'\n'}
                  {'  '}<span className="syn-prop">coreStack</span>: [{'\n'}
                  {'    '}<span className="syn-string">"React"</span>, <span className="syn-string">"JavaScript"</span>, <span className="syn-string">"Java"</span>, <span className="syn-string">"PostgreSQL"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="syn-prop">credentials</span>: [{'\n'}
                  {'    '}<span className="syn-string">"Cisco CCNA"</span>,{'\n'}
                  {'    '}<span className="syn-string">"Cisco Enterprise Core"</span>{'\n'}
                  {'  '}],{'\n'}
                  {'  '}<span className="syn-prop">status</span>: <span className="syn-string">"Open to opportunities"</span>{'\n'}
                  &#125;;
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;