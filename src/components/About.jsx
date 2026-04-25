import './About.css';

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="container">
        <div className="about__content animate-in">
          <span className="section-label">About Me</span>
          <h2 className="section-title">
            Crafting Digital <span className="gradient-text">Experiences</span> That Matter
          </h2>
          <p className="about__text">
            I'm a passionate Software Engineer based in Gurugram, India, with 4+ years of
            experience building enterprise web applications. My expertise lies in Angular,
            TypeScript, and RxJS, where I specialize in creating scalable UI architectures,
            CMS platforms, and metadata-driven systems.
          </p>
          <p className="about__text">
            I thrive on turning complex problems into elegant, performant solutions. From
            designing frameworks that reduce manual UI development by 70% to implementing
            real-time reactive architectures. I bring both technical depth and creative thinking
            to every project.
          </p>

          <div className="about__highlights">
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </div>
              <div>
                <strong>Enterprise Scale</strong>
                <span>Built systems serving large organizations</span>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                </svg>
              </div>
              <div>
                <strong>Performance First</strong>
                <span>25-30% faster load times achieved</span>
              </div>
            </div>
            <div className="about__highlight">
              <div className="about__highlight-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div>
                <strong>AI-Assisted Dev</strong>
                <span>Leveraging AI for accelerated delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
