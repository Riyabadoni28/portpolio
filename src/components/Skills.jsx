import './Skills.css';

const skillCategories = [
  {
    title: 'Frontend',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    skills: ['Angular (12–20)', 'TypeScript', 'JavaScript (ES6+)', 'Angular Signals', 'RxJS', 'NgRx', 'HTML5', 'CSS3', 'SCSS'],
  },
  {
    title: 'Backend & Database',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      </svg>
    ),
    skills: ['Node.js', 'Java', 'REST APIs', 'MySQL'],
  },
  {
    title: 'Tools & Platforms',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
    skills: ['Git', 'Bitbucket', 'Postman', 'Jira'],
  },
  {
    title: 'AI & Innovation',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2a4 4 0 0 0-4 4v2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2h-2V6a4 4 0 0 0-4-4z"/>
        <circle cx="12" cy="14" r="2"/>
      </svg>
    ),
    skills: ['AI-Assisted Development', 'Prompt Engineering', 'Cursor', 'Claude', 'ChatGPT'],
  },
];

export default function Skills() {
  return (
    <section className="skills section" id="skills">
      <div className="skills__bg-glow" />
      <div className="container">
        <div className="skills__header animate-in">
          <span className="section-label">Skills</span>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </div>

        <div className="skills__grid">
          {skillCategories.map((cat, idx) => (
            <div className="skills__category glass-card animate-in" key={cat.title} style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="skills__category-header">
                <div className="skills__category-icon">{cat.icon}</div>
                <h3 className="skills__category-title">{cat.title}</h3>
              </div>
              <div className="skills__tags">
                {cat.skills.map((skill) => (
                  <span className="skills__tag" key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
