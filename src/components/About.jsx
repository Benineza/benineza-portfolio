import { MapPin, GraduationCap, ShieldCheck, Layers, Code2, Compass } from 'lucide-react';

const About = () => {
  const coreCompetencies = [
    'Frontend Development',
    'Backend Development',
    'Responsive Design',
    'IT Support',
    'HTML/CSS',
    'JavaScript',
    'React',
    'Tailwind CSS'
  ];

  const highlights = [
    {
      icon: MapPin,
      title: 'Location',
      value: 'Kigali, Rwanda',
      desc: 'Available for local and remote opportunities'
    },
    {
      icon: GraduationCap,
      title: 'Academic Path',
      value: 'Software Engineering',
      desc: 'Focused on algorithms, systems & software craft'
    },
    {
      icon: ShieldCheck,
      title: 'Certification',
      value: 'Cisco CCNA & ISOC',
      desc: 'Enterprise networking & systems certified'
    },
    {
      icon: Layers,
      title: 'Specialization',
      value: 'Web & Systems',
      desc: 'Building responsive, scalable web applications'
    }
  ];

  return (
    <section id="about">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Compass size={14} aria-hidden="true" />
            <span>About Me</span>
          </span>
          <h2 className="section-title">Discover My Journey</h2>
          <p className="section-subtitle">
            A software engineering student dedicated to crafting responsive digital solutions and expanding technical capabilities through hands-on development.
          </p>
        </div>

        <div className="about-grid">
          {/* Left Column: Personal Narrative */}
          <div className="about-story">
            <h3 className="about-story-title">
              <Code2 size={22} className="text-accent" aria-hidden="true" />
              <span>Passionate Developer & Problem Solver</span>
            </h3>

            <p className="about-paragraph">
              I'm a passionate developer with over 5 years of experience creating digital solutions. My expertise spans front-end and back-end development, with a focus on creating seamless user experiences.
            </p>

            <p className="about-paragraph">
              I believe in the power of technology to transform ideas into reality and am constantly learning new technologies to stay at the forefront of the industry.
            </p>

            <div className="about-quote-box">
              <p>
                "Passionate about building efficient, user-friendly digital solutions and expanding technical expertise through hands-on projects."
              </p>
            </div>

            <div style={{ marginTop: '12px' }}>
              <span style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-secondary)', display: 'block', marginBottom: '10px' }}>
                Core Focus Areas:
              </span>
              <div className="project-tags">
                {coreCompetencies.map((comp, index) => (
                  <span key={index} className="project-tag">{comp}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Highlights Grid */}
          <div className="about-highlights-grid">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="highlight-card">
                  <div className="highlight-icon-box">
                    <Icon size={20} aria-hidden="true" />
                  </div>
                  <div>
                    <span className="highlight-title">{item.title}</span>
                    <h4 className="highlight-value">{item.value}</h4>
                    <p className="highlight-desc">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;