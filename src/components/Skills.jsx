import { Layout, Server, Wrench, Cpu } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      badge: 'Client-Side & UI',
      icon: Layout,
      skills: [
        { name: 'React', icon: 'fab fa-react', color: '#61DAFB' },
        { name: 'JavaScript', icon: 'fab fa-js', color: '#F7DF1E' },
        { name: 'HTML5', icon: 'fab fa-html5', color: '#E34F26' },
        { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572B6' },
        { name: 'Tailwind CSS', icon: 'fas fa-wind', color: '#38BDF8' },
        { name: 'Responsive Design', icon: 'fas fa-mobile-alt', color: '#10B981' }
      ]
    },
    {
      title: 'Backend & Database',
      badge: 'Server-Side & Data',
      icon: Server,
      skills: [
        { name: 'Java', icon: 'fab fa-java', color: '#EA2D2E' },
        { name: 'Spring Boot', icon: 'fas fa-leaf', color: '#6DB33F' },
        { name: 'PostgreSQL', icon: 'fas fa-database', color: '#336791' },
        { name: 'REST APIs', icon: 'fas fa-network-wired', color: '#6366F1' }
      ]
    },
    {
      title: 'Tools & Systems',
      badge: 'Workflow & IT',
      icon: Wrench,
      skills: [
        { name: 'Git', icon: 'fab fa-git-alt', color: '#F05032' },
        { name: 'GitHub', icon: 'fab fa-github', color: '#94A3B8' },
        { name: 'VS Code', icon: 'fas fa-code', color: '#007ACC' },
        { name: 'Vite', icon: 'fas fa-bolt', color: '#646CFF' },
        { name: 'Postman', icon: 'fas fa-paper-plane', color: '#FF6C37' },
        { name: 'IT Support', icon: 'fas fa-headset', color: '#10B981' }
      ]
    }
  ];

  return (
    <section id="skills">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <Cpu size={14} aria-hidden="true" />
            <span>Tech Stack</span>
          </span>
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A comprehensive overview of the programming languages, frameworks, databases, and engineering tools I utilize in daily development.
          </p>
        </div>

        <div className="skills-container">
          {skillCategories.map((category, catIndex) => {
            const CatIcon = category.icon;
            return (
              <div key={catIndex} className="skills-category">
                <div className="category-header">
                  <h3 className="category-title">
                    <CatIcon size={20} className="text-accent" aria-hidden="true" />
                    <span>{category.title}</span>
                  </h3>
                  <span className="category-badge">{category.badge}</span>
                </div>

                <div className="tech-grid">
                  {category.skills.map((tech, techIndex) => (
                    <div key={techIndex} className="tech-card">
                      <div className="tech-card-icon">
                        <i className={tech.icon} style={{ color: tech.color }} aria-hidden="true"></i>
                      </div>
                      <span className="tech-card-name">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
