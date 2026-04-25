import './Projects.css';

const projects = [
  {
    title: 'Powai Live – CMS',
    period: 'Dec 2025 – Present',
    tags: ['Angular 20', 'Signals', 'RxJS', 'Standalone Components'],
    description: 'Architected and developed a scalable CMS from scratch using Angular 20, driving end-to-end frontend design, development, and delivery.',
    highlights: [
      'Improved UI performance and scalability by implementing Angular Signals, standalone components, and RxJS-driven reactive architecture.',
      'Designed reusable components and dynamic form architecture to improve development efficiency and scalability.',
    ],
    color: '#7c3aed',
  },
  {
    title: 'NESE – Enterprise System',
    period: 'Apr 2025 – Dec 2025',
    tags: ['Angular', 'Lazy Loading', 'Security', 'HTTP-only Cookies'],
    description: 'Enterprise system for NESR with optimized performance and enhanced security architecture.',
    highlights: [
      'Achieved 25–30% faster load time by redesigning routing, implementing standalone components, and adopting modular lazy-loaded architecture.',
      'Enhanced security by implementing HTTP-only, SameSite cookie-based token storage, mitigating XSS vulnerabilities.',
    ],
    color: '#3b82f6',
  },
  {
    title: 'ESG Reporting Framework',
    period: 'Oct 2023 – Oct 2024',
    tags: ['Angular', 'REST APIs', 'MySQL', 'GRI/SASB/BRSR'],
    description: 'End-to-end ESG reporting platform built from scratch, including frontend architecture, API design, and database schema.',
    highlights: [
      'Automated form generation reduced manual UI effort by 90% and improved reporting efficiency by 50%.',
      'Developed interactive dashboards, scheduled reporting, and role-based compliance tracking.',
    ],
    color: '#06b6d4',
  },
  {
    title: 'Internal Libraries',
    period: 'Mar 2024 – Mar 2025',
    tags: ['Angular Libraries', 'Shared Components', 'Directives'],
    description: 'Reusable front-end libraries containing shared components, directives, and services across multiple applications.',
    highlights: [
      'Improved maintainability and scalability by standardizing UI elements.',
      'Reduced redundant code across various projects with shared component architecture.',
    ],
    color: '#ec4899',
  },
  {
    title: 'TSC NetZero – Climate Software',
    period: 'Jan 2023 – Mar 2025',
    tags: ['Angular', 'Data Visualization', 'Complex Forms'],
    description: 'Climate action software for emissions calculation, tracking, and data visualization.',
    highlights: [
      'Developed complex forms and data visualization modules for emissions calculation and tracking.',
      'Improved system performance, data integrity, and user experience through workflow optimizations.',
    ],
    color: '#22c55e',
  },
];

export default function Projects() {
  return (
    <section className="projects section" id="projects">
      <div className="projects__bg-glow" />
      <div className="container">
        <div className="projects__header animate-in">
          <span className="section-label">Projects</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Work</span>
          </h2>
          <p className="section-subtitle">
            Enterprise applications and systems I've built and contributed to
          </p>
        </div>

        <div className="projects__grid">
          {projects.map((project, idx) => (
            <div
              className="projects__card glass-card animate-in"
              key={idx}
              style={{ '--project-color': project.color }}
            >
              <div className="projects__card-accent" />
              <div className="projects__card-content">
                <div className="projects__card-top">
                  <div className="projects__card-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <span className="projects__card-period">{project.period}</span>
                </div>

                <h3 className="projects__card-title">{project.title}</h3>
                <p className="projects__card-desc">{project.description}</p>

                <ul className="projects__card-highlights">
                  {project.highlights.map((h, i) => (
                    <li key={i}>
                      <span className="projects__highlight-marker" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="projects__card-tags">
                  {project.tags.map((tag) => (
                    <span className="projects__tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
