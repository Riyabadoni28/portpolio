import './Contact.css';

const contactItems = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
        <polyline points="22,6 12,13 2,6"/>
      </svg>
    ),
    label: 'Email',
    value: 'riyabadoni55@gmail.com',
    href: 'mailto:riyabadoni55@gmail.com',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
    label: 'Phone',
    value: '7300916722',
    href: 'tel:+917300916722',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    label: 'LinkedIn',
    value: 'linkedin.com/in/riya-badoni',
    href: 'https://linkedin.com/in/riya-badoni',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
    label: 'Location',
    value: 'Gurugram, India',
    href: null,
  },
];

export default function Contact() {
  return (
    <section className="contact section" id="contact">
      <div className="contact__bg-glow" />
      <div className="container">
        <div className="contact__header animate-in">
          <span className="section-label">Contact</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or want to collaborate? Feel free to reach out!
          </p>
        </div>

        <div className="contact__grid">
          <div className="contact__info animate-in">
            <div className="contact__items">
              {contactItems.map((item, idx) => (
                <div className="contact__item glass-card" key={idx}>
                  {item.href ? (
                    <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="contact__item-link">
                      <div className="contact__item-icon">{item.icon}</div>
                      <div>
                        <span className="contact__item-label">{item.label}</span>
                        <span className="contact__item-value">{item.value}</span>
                      </div>
                    </a>
                  ) : (
                    <div className="contact__item-link">
                      <div className="contact__item-icon">{item.icon}</div>
                      <div>
                        <span className="contact__item-label">{item.label}</span>
                        <span className="contact__item-value">{item.value}</span>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="contact__cta-card glass-card animate-in">
            <div className="contact__cta-content">
              <h3 className="contact__cta-title">Ready to work together?</h3>
              <p className="contact__cta-text">
                I'm currently open to new opportunities and interesting projects. 
                Whether you have a question or just want to say hello, I'll get back to you!
              </p>
              <a href="mailto:riyabadoni55@gmail.com" className="contact__cta-btn">
                <span>Say Hello</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
