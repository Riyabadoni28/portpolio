import './Education.css';

const education = [
  {
    degree: 'Master of Computer Applications',
    institution: 'Swami Rama Himalayan University',
    location: 'Dehradun',
    period: 'Jul 2020 – Jun 2022',
    grade: 'CGPA: 9.04',
    icon: '🎓',
  },
  {
    degree: 'Bachelor of Computer Applications',
    institution: 'Modern Institute of Technology',
    location: 'Rishikesh',
    period: 'Jul 2017 – Jun 2020',
    grade: 'CGPA: 7.87',
    icon: '📚',
  },
];

export default function Education() {
  return (
    <section className="education section" id="education">
      <div className="container">
        <div className="education__header animate-in">
          <span className="section-label">Education</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Background</span>
          </h2>
        </div>

        <div className="education__grid">
          {education.map((edu, idx) => (
            <div className="education__card glass-card animate-in" key={idx}>
              <div className="education__icon">{edu.icon}</div>
              <div className="education__info">
                <h3 className="education__degree">{edu.degree}</h3>
                <p className="education__institution">
                  {edu.institution}
                  <span className="education__location"> · {edu.location}</span>
                </p>
                <div className="education__meta">
                  <span className="education__period">{edu.period}</span>
                  <span className="education__grade">{edu.grade}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
