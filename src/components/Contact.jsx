import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoUrl = `mailto:benineza.moise@gmail.com?subject=${encodeURIComponent(
      formData.subject || `Message from ${formData.name}`
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText('benineza.moise@gmail.com');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section id="contact">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Mail size={14} aria-hidden="true" />
            <span>Contact</span>
          </span>
          <h2 className="section-title">Get In Touch</h2>
          <p className="section-subtitle">
            Have a project in mind, an internship opportunity, or want to discuss software engineering? I'd love to connect.
          </p>
        </div>

        <div className="contact-layout">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-panel">
            <h3 style={{ fontSize: '1.4rem', fontWeight: 700, marginBottom: '4px' }}>
              Let's work together
            </h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '12px', fontSize: '0.95rem' }}>
              I'm always interested in new opportunities and collaborations. Feel free to reach out directly through any of these channels.
            </p>

            {/* Email Card */}
            <a 
              href="mailto:benineza.moise@gmail.com" 
              className="contact-card-link"
              aria-label="Send email to benineza.moise@gmail.com"
            >
              <div className="contact-card-icon">
                <Mail size={20} aria-hidden="true" />
              </div>
              <div className="contact-card-details">
                <div className="contact-card-label">Email</div>
                <div className="contact-card-value">benineza.moise@gmail.com</div>
              </div>
              <button 
                type="button" 
                onClick={(e) => { e.preventDefault(); copyEmail(); }} 
                className="btn-ghost btn-sm"
                title="Copy email address"
                aria-label="Copy email address"
                style={{ borderRadius: 'var(--radius-sm)', padding: '6px 10px' }}
              >
                {copiedEmail ? <Check size={14} color="var(--status-available)" /> : <Copy size={14} />}
              </button>
            </a>

            {/* Phone Card */}
            <a 
              href="tel:+250780539886" 
              className="contact-card-link"
              aria-label="Call +250 780 539 886"
            >
              <div className="contact-card-icon">
                <Phone size={20} aria-hidden="true" />
              </div>
              <div className="contact-card-details">
                <div className="contact-card-label">Phone</div>
                <div className="contact-card-value">+250 780 539 886</div>
              </div>
            </a>

            {/* Location Card */}
            <div className="contact-card-link">
              <div className="contact-card-icon">
                <MapPin size={20} aria-hidden="true" />
              </div>
              <div className="contact-card-details">
                <div className="contact-card-label">Location</div>
                <div className="contact-card-value">Kigali, Rwanda</div>
              </div>
            </div>

            {/* WhatsApp Direct Chat */}
            <a 
              href="https://wa.me/250780539886" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="contact-card-link"
              aria-label="Chat directly on WhatsApp"
            >
              <div className="contact-card-icon" style={{ color: '#25D366', background: 'rgba(37, 211, 102, 0.12)' }}>
                <i className="fab fa-whatsapp" aria-hidden="true"></i>
              </div>
              <div className="contact-card-details">
                <div className="contact-card-label">WhatsApp</div>
                <div className="contact-card-value">Direct Chat Available</div>
              </div>
            </a>
          </div>

          {/* Right Column: Quick Message Form */}
          <div className="contact-form-panel">
            <h3 className="contact-form-title">Send a Quick Message</h3>
            <p className="contact-form-desc">
              Fill out this form to start a conversation directly via email.
            </p>

            <form onSubmit={handleSubmit} className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jane Doe"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Your Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jane@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  required
                  placeholder="Opportunity / Collaboration"
                  value={formData.subject}
                  onChange={handleChange}
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  placeholder="Hello Moise, I'd like to discuss..."
                  value={formData.message}
                  onChange={handleChange}
                  className="form-textarea"
                />
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                <Send size={16} aria-hidden="true" />
                <span>{submitted ? "Opening Mail Client..." : "Send Message"}</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;