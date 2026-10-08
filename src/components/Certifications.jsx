import { Award, CheckCircle, ExternalLink } from 'lucide-react';
import ciscoLogo from '../assets/images/cisco_logo.jpg';
import isocLogo from '../assets/images/internetsociety_logo.jpg';
import icdlLogo from '../assets/images/icdl-logo.png';
import anthropicLogo from '../assets/images/anthropic_logo.jpg';
import udemyLogo from '../assets/images/udemy_logo.jpg';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      logo: ciscoLogo,
      category: 'Enterprise Networking & Routing',
      credentialUrl: 'https://cp.certmetrics.com/cisco/en/public/verify/credential/MSB2DMFGQDF4QCGW',
      credentialId: 'MSB2DMFGQDF4QCGW'
    },
    {
      id: 2,
      name: 'Cisco Certified Specialist - Enterprise Core',
      issuer: 'Cisco',
      logo: ciscoLogo,
      category: 'Enterprise Architecture & Infrastructure',
      credentialUrl: 'https://cp.certmetrics.com/cisco/en/public/verify/credential/027a87c2ea134317a12a08ba97633d88',
      credentialId: '027a87c2ea13'
    },
    {
      id: 3,
      name: 'Introduction To Network Operations',
      issuer: 'Internet Society',
      logo: isocLogo,
      category: 'Internet Infrastructure & Protocols',
      credentialUrl: 'https://certificates.isoc.org/f908ff78-1b6a-41bd-8b59-1c47a498a68b#acc.yJSnaFuk',
      credentialId: 'f908ff78-1b6a'
    },
    {
      id: 4,
      name: 'International Certification of Digital Literacy (ICDL)',
      issuer: 'ICDL',
      logo: icdlLogo,
      category: 'Digital Literacy & Applied Computing',
      credentialUrl: 'https://icdl.org/',
      credentialId: 'Verified'
    },
    {
      id: 5,
      name: 'AI Fluency: Framework and Foundations',
      issuer: 'Anthropic',
      logo: anthropicLogo,
      category: 'AI Literacy & Responsible AI',
      credentialUrl: 'https://academy.claude.com/verify/db0f94ae43729d7a06c281ecb0674802',
      credentialId: 'Verified'
    },
    {
      id: 6,
      name: 'Java Programming: From Fundamentals to Advanced',
      issuer: 'Udemy',
      logo: udemyLogo,
      category: 'Programming & Software Development',
      credentialUrl: 'https://www.udemy.com/certificate/UC-8429b2b7-e0fe-4b04-a668-e3b936c5327b/',
      credentialId: 'Verified'
    }
  ];

  return (
    <section id="certifications">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Award size={14} aria-hidden="true" />
            <span>Credentials</span>
          </span>
          <h2 className="section-title">Certifications & Accreditations</h2>
          <p className="section-subtitle">
            Industry-recognized credentials validating practical competencies in enterprise networking, IT infrastructure, and systems administration.
          </p>
        </div>

        <div className="certifications-grid">
          {certifications.map((cert) => (
            <div key={cert.id} className="cert-card">
              <div className="cert-top">
                <div className="cert-badge-row">
                  <div className="cert-issuer-group">
                    <div className="cert-logo-box">
                      <img 
                        src={cert.logo} 
                        alt={`${cert.issuer} logo`} 
                        className="cert-logo-img" 
                        loading="lazy"
                      />
                    </div>
                    <span className="cert-issuer-chip">{cert.issuer}</span>
                  </div>
                  <span className="cert-status-chip">
                    <CheckCircle size={14} aria-hidden="true" />
                    <span>Verified</span>
                  </span>
                </div>

                <h3 className="cert-title">{cert.name}</h3>
                <p className="cert-level">{cert.category}</p>
              </div>

              <div className="cert-footer">
                <a 
                  href={cert.credentialUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%' }}
                  aria-label={`Verify credential for ${cert.name}`}
                >
                  <span>Verify Credential</span>
                  <ExternalLink size={14} aria-hidden="true" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
