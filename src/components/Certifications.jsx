import { Award, CheckCircle, ExternalLink } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      name: 'Cisco Certified Network Associate (CCNA)',
      issuer: 'Cisco',
      category: 'Enterprise Networking & Routing',
      credentialUrl: 'https://cp.certmetrics.com/cisco/en/public/verify/credential/MSB2DMFGQDF4QCGW',
      credentialId: 'MSB2DMFGQDF4QCGW'
    },
    {
      id: 2,
      name: 'Cisco Certified Specialist - Enterprise Core',
      issuer: 'Cisco',
      category: 'Enterprise Architecture & Infrastructure',
      credentialUrl: 'https://cp.certmetrics.com/cisco/en/public/verify/credential/027a87c2ea134317a12a08ba97633d88',
      credentialId: '027a87c2ea13'
    },
    {
      id: 3,
      name: 'Introduction To Network Operations',
      issuer: 'Internet Society',
      category: 'Internet Infrastructure & Protocols',
      credentialUrl: 'https://certificates.isoc.org/f908ff78-1b6a-41bd-8b59-1c47a498a68b#acc.yJSnaFuk',
      credentialId: 'f908ff78-1b6a'
    },
    {
      id: 4,
      name: 'International Computer Driving Licence (ICDL)',
      issuer: 'ICDL',
      category: 'Digital Literacy & Applied Computing',
      credentialUrl: 'https://icdl.org/',
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
                  <span className="cert-issuer-chip">{cert.issuer}</span>
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