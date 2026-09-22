import { ExternalLink, FolderGit2 } from 'lucide-react';
import project1Image from '../assets/images/project-1.png';
import project2Image from '../assets/images/project-2.png';
import project3Image from '../assets/images/project-3.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Digital Solutions Agency',
      description: 'A professional website for a digital solutions company offering web development, social media branding, and management services. Features service showcases, client portfolio, and contact integration.',
      technologies: ['React', 'JavaScript', 'CSS3', 'Responsive UI'],
      liveDemo: 'https://nezaweb.vercel.app/', 
      sourceCode: 'https://github.com/Benineza/nezaweb',
      image: project1Image
    },
    {
      id: 2,
      title: 'Software Developer Portfolio',
      description: 'A modern, responsive portfolio website built with React and Vite, featuring dark/light mode, certifications showcase, tech stack display, and seamless navigation. Demonstrates component-based architecture and responsive design principles.',
      technologies: ['React 19', 'Vite', 'Modern CSS', 'Accessibility'],
      liveDemo: 'https://benineza.vercel.app/',
      sourceCode: 'https://github.com/Benineza/benineza-portfolio',
      image: project2Image
    },
    {
      id: 3,
      title: 'CMFI Rwanda - Church Website',
      description: 'A modern full-stack church website with React frontend, Spring Boot backend, PostgreSQL database, email integration, and dark mode. Features live social media feeds from Twitter/X and Instagram.',
      technologies: ['React', 'Spring Boot', 'PostgreSQL', 'REST API'],
      liveDemo: 'https://cmfirwanda.vercel.app/',
      sourceCode: 'https://github.com/Benineza/cmfi-website',
      image: project3Image
    }
  ];

  return (
    <section id="projects">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">
            <FolderGit2 size={14} aria-hidden="true" />
            <span>Featured Work</span>
          </span>
          <h2 className="section-title">Production Projects</h2>
          <p className="section-subtitle">
            A selection of full-stack and front-end digital solutions built with modern web technologies, scalable architectures, and responsive interfaces.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="project-card">
              {/* Project Screenshot Frame */}
              <div className="project-media-frame">
                <img 
                  src={project.image} 
                  alt={`Screenshot of ${project.title}`}
                  className="project-img"
                  loading="lazy"
                />
              </div>

              {/* Project Details */}
              <div className="project-body">
                {/* Tech Stack Chips */}
                <div className="project-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="project-tag">{tech}</span>
                  ))}
                </div>

                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                {/* Project Actions */}
                <div className="project-footer">
                  <a 
                    href={project.liveDemo} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                    aria-label={`View live demo for ${project.title}`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink size={15} aria-hidden="true" />
                  </a>

                  <a 
                    href={project.sourceCode} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                    aria-label={`View source code for ${project.title} on GitHub`}
                  >
                    <i className="fab fa-github" aria-hidden="true"></i>
                    <span>Code</span>
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;