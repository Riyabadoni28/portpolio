import './Experience.css';

const experiences = [
  {
    period: 'Apr 2025 – Present',
    role: 'Software Engineer',
    company: 'Dew Solutions Pvt Ltd',
    location: 'Gurugram',
    points: [
      'Owned frontend architecture decisions for an enterprise CMS, defining component structure, state management strategy, and API integration patterns.',
      'Leveraged AI-assisted development and prompt engineering to accelerate feature delivery and reduce development effort for repetitive tasks.',
      'Implemented refresh token mechanism at interceptor level, enabling automatic token renewal, secure API communication, and uninterrupted user sessions.',
      'Optimized application performance and responsiveness by implementing lazy loading, efficient data handling, and modular routing, resulting in faster dashboard rendering.',
    ],
  },
  {
    period: 'Nov 2021 – Mar 2025',
    role: 'Software Engineer L1',
    company: 'Logicladder Technologies',
    location: 'Gurugram',
    points: [
      'Designed a metadata-driven framework enabling dynamic UI generation and flexible workflows, reducing manual UI development effort by 70%.',
      'Developed custom Angular libraries to share components across applications, enhancing scalability and ensuring design consistency.',
      'Implemented real-time updates with RxJS and Observables for seamless user change synchronization.',
      'Optimized MySQL queries, reducing server load by 25% and enhancing data retrieval efficiency.',
    ],
  },
];

export default function Experience() {
  return (
    <section className="experience section" id="experience">
      <div className="container">
        <div className="experience__header animate-in">
          <span className="section-label">Experience</span>
          <h2 className="section-title">
            Where I've <span className="gradient-text">Worked</span>
          </h2>
          <p className="section-subtitle">
            My professional journey building enterprise-grade applications
          </p>
        </div>

        <div className="experience__timeline">
          {experiences.map((exp, idx) => (
            <div className="experience__item animate-in" key={idx}>
              <div className="experience__timeline-dot">
                <div className="experience__timeline-dot-inner" />
              </div>
              <div className="experience__card glass-card">
                <div className="experience__card-top">
                  <div>
                    <h3 className="experience__role">{exp.role}</h3>
                    <p className="experience__company">
                      {exp.company}
                      <span className="experience__location"> · {exp.location}</span>
                    </p>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <ul className="experience__points">
                  {exp.points.map((point, i) => (
                    <li key={i} className="experience__point">
                      <span className="experience__point-marker" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
