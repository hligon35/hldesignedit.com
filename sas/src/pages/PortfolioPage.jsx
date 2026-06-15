import { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';

const serviceCards = [
  {
    title: 'Full-Stack Development',
    description: 'Custom web applications built with modern technologies, scalable architecture, and business-focused implementation.',
    features: ['Responsive Web Applications', 'API Development & Integration', 'Database Design & Optimization', 'Performance & Security']
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered experiences that improve clarity, usability, and conversion performance across devices.',
    features: ['User Research & Analysis', 'Wireframing & Prototyping', 'Brand Identity Design', 'Conversion Optimization']
  },
  {
    title: 'Mobile Solutions',
    description: 'Cross-platform mobile experiences and responsive web products tuned for real-world business use.',
    features: ['Progressive Web Apps', 'Mobile-First Design', 'Cross-Platform Development', 'App Store Optimization']
  },
  {
    title: 'Digital Strategy',
    description: 'Technical consulting and site audits focused on visibility, performance, and measurable business results.',
    features: ['SEO & Performance Audits', 'Technology Consulting', 'Digital Transformation', 'Ongoing Maintenance']
  }
];

const expertiseItems = [
  ['Development Excellence', 'Modern frameworks, clean code, scalable architecture'],
  ['Design Leadership', 'User-centered design, conversion optimization, brand consistency'],
  ['Business Impact', 'ROI-focused solutions, performance optimization, growth strategies'],
  ['Client Partnership', 'Collaborative approach, transparent communication, ongoing support']
];

const techGroups = [
  {
    title: 'Frontend Development',
    items: [
      ['React', 'Expert'],
      ['TypeScript', 'Advanced'],
      ['JavaScript', 'Expert'],
      ['CSS3', 'Expert'],
      ['HTML5', 'Expert']
    ]
  },
  {
    title: 'Backend & Database',
    items: [
      ['Node.js', 'Advanced'],
      ['Python', 'Intermediate'],
      ['REST APIs', 'Advanced'],
      ['Data Modeling', 'Advanced']
    ]
  },
  {
    title: 'Design & Delivery Tools',
    items: [
      ['Figma', 'Expert'],
      ['Photoshop', 'Advanced'],
      ['VS Code', 'Expert'],
      ['Git/GitHub', 'Advanced']
    ]
  }
];

const portfolioCards = [
  {
    title: 'Business Intelligence Dashboard',
    description: 'Real-time analytics platform with interactive charts, data filtering, and performance metrics.',
    results: ['40% Faster Decisions', '$50K+ Cost Savings'],
    tags: ['React', 'Node.js', 'Charts'],
    type: 'web',
    href: 'https://hligon35.github.io/pizzabyu/',
    action: 'View Live Site'
  },
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack commerce architecture focused on payment flow, catalog control, and customer conversion.',
    results: ['300% Conversion Increase', '2x Faster Loading'],
    tags: ['React', 'Node.js', 'Stripe'],
    type: 'web',
    href: '#contact',
    action: 'Discuss Project'
  },
  {
    title: 'Professional Portfolio Site',
    description: 'Creative portfolio presence designed to improve inquiries, credibility, and lead quality.',
    results: ['200% More Inquiries', '5-Star Client Rating'],
    tags: ['HTML5', 'CSS3', 'JavaScript'],
    type: 'webpages',
    href: 'https://hligon35.github.io/thebearvoice/',
    action: 'View Project'
  },
  {
    title: 'Non-Profit Organization Site',
    description: 'Donor-focused website with clear outreach messaging, donation pathways, and community positioning.',
    results: ['150% Donation Increase', '500+ New Members'],
    tags: ['WordPress', 'SEO', 'Donations'],
    type: 'webpages',
    href: 'https://hligon35.github.io/mmmbc/',
    action: 'View Project'
  },
  {
    title: 'Brand Identity & Logo Design',
    description: 'Brand systems built to create consistency across presentation, promotion, and audience recognition.',
    results: ['5 Brand Identities', 'Recognition +80%'],
    tags: ['Adobe Suite', 'Figma', 'Guidelines'],
    type: 'design',
    href: '#contact',
    action: 'Brand Consultation'
  },
  {
    title: 'Interactive Gaming Portfolio',
    description: 'Interactive media work that showcases advanced logic, user feedback loops, and polished engagement.',
    results: ['3 Published Games', '1000+ Active Users'],
    tags: ['Godot', 'Game Logic', 'UI/UX'],
    type: 'games',
    href: 'https://hligon35.github.io/coinDash/',
    action: 'Play Demo'
  }
];

const valueItems = [
  ['Fast Delivery', 'Most projects completed within 2-4 weeks'],
  ['Competitive Pricing', 'High-quality solutions at fair market rates'],
  ['Ongoing Support', 'Post-launch guidance and maintenance available'],
  ['Business Results', 'Solutions designed to improve ROI and conversion outcomes']
];

const greetings = ['Hello', 'Hola', 'Bonjour', 'Ciao', 'こんにちは', '你好'];

function PortfolioPage() {
  const [theme, setTheme] = useState('dark');
  const [greetingIndex, setGreetingIndex] = useState(0);
  const [filter, setFilter] = useState('all');
  const [visitorCount, setVisitorCount] = useState('1,337');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formStatus, setFormStatus] = useState('idle');

  useEffect(() => {
    document.body.classList.toggle('light-theme', theme === 'light');
    return () => document.body.classList.remove('light-theme');
  }, [theme]);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setGreetingIndex((current) => (current + 1) % greetings.length);
    }, 3000);

    return () => window.clearInterval(intervalId);
  }, []);

  useEffect(() => {
    try {
      const storedValue = Number(window.localStorage.getItem('visitorCount') || 1337);
      const nextValue = storedValue + 1;
      window.localStorage.setItem('visitorCount', String(nextValue));
      setVisitorCount(nextValue.toLocaleString());
    } catch {
      setVisitorCount('1,337');
    }
  }, []);

  const filteredCards = useMemo(() => {
    if (filter === 'all') {
      return portfolioCards;
    }

    return portfolioCards.filter((card) => card.type === filter);
  }, [filter]);

  function toggleTheme() {
    setTheme((current) => (current === 'light' ? 'dark' : 'light'));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFormStatus('submitting');
    await new Promise((resolve) => window.setTimeout(resolve, 1200));
    setFormStatus('submitted');
  }

  return (
    <>
      <header className="portfolio-header">
        <nav id="main-nav" className="nav-container">
          <a href="#hero" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#experience" className="nav-link">Skills</a>
          <a href="#portfolio" className="nav-link">Portfolio</a>
          <a href="#contact" className="nav-link">Contact</a>
          <Link to="/sas" className="nav-link">SAS</Link>
        </nav>
        <button id="theme-toggle" className="theme-toggle" aria-label="Toggle theme" onClick={toggleTheme}>
          {theme === 'light' ? '☀️' : '🌙'}
        </button>
      </header>

      <section id="hero" className="hero-section">
        <div className="hero-content">
          <h1><span className="highlight"><span id="greeting-text">{greetings[greetingIndex]}</span>, I&apos;m Harold Ligon</span></h1>
          <h2 className="professional-title">Full-Stack Developer & UI/UX Designer</h2>
          <p className="value-proposition">Transforming business ideas into powerful digital solutions with high-performance web applications, intuitive user experiences, and conversion-focused design.</p>
          <div className="hero-stats">
            <div className="stat-container"><div className="stat-item"><span className="stat-number">50+</span><span className="stat-label">Projects Completed</span></div></div>
            <div className="stat-container"><div className="stat-item"><span className="stat-number">100%</span><span className="stat-label">Client Satisfaction</span></div></div>
            <div className="stat-container"><div className="stat-item"><span className="stat-number">24/7</span><span className="stat-label">Support Available</span></div></div>
          </div>
          <div className="hero-actions">
            <a href="#portfolio" className="cta-btn primary">View My Work</a>
            <a href="#contact" className="cta-btn secondary">Get Free Quote</a>
            <Link to="/sas" className="cta-btn secondary">Open SAS</Link>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-header">
          <h2>Professional Profile</h2>
          <p className="section-subtitle">Delivering excellence through innovation and expertise</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="lead">As a dedicated Full-Stack Developer and UI/UX Designer, I specialize in scalable web solutions that drive business growth through clean implementation and conversion-aware design.</p>
            <div className="expertise-grid">
              {expertiseItems.map(([title, copy]) => (
                <div className="expertise-item" key={title}>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services-section">
        <div className="section-header">
          <h2>Services & Solutions</h2>
          <p className="section-subtitle">Comprehensive digital solutions for modern businesses</p>
        </div>
        <div className="services-grid">
          {serviceCards.map((service) => (
            <div className="service-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-header">
          <h2>Technical Expertise</h2>
          <p className="section-subtitle">Cutting-edge technologies delivering measurable results</p>
        </div>
        <div className="tech-categories">
          {techGroups.map((group) => (
            <div className="tech-category" key={group.title}>
              <h3>{group.title}</h3>
              <div className="tech-grid">
                {group.items.map(([name, level]) => (
                  <div className="tech-item" key={name}>
                    <span>{name}</span>
                    <div className="proficiency">{level}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="portfolio-section">
        <div className="section-header">
          <h2>Featured Projects</h2>
          <p className="section-subtitle">Real solutions driving real business results</p>
        </div>
        <div className="portfolio-filters">
          {['all', 'web', 'webpages', 'design', 'games'].map((type) => (
            <button key={type} className={`filter-btn${filter === type ? ' active' : ''}`} onClick={() => setFilter(type)} type="button">
              {type === 'all' ? 'All Projects' : type === 'webpages' ? 'Business Websites' : type === 'web' ? 'Web Applications' : type === 'design' ? 'Design & Branding' : 'Interactive Media'}
            </button>
          ))}
        </div>
        <div className="portfolio-grid container">
          {filteredCards.map((card) => (
            <div className={`portfolio-card${card.type === 'web' && card.title === 'Business Intelligence Dashboard' ? ' featured' : ''}`} key={card.title}>
              <div className="portfolio-image">
                <div className="portfolio-overlay">
                  <div className="portfolio-tech">{card.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                </div>
              </div>
              <div className="portfolio-content">
                <h3>{card.title}</h3>
                <p className="portfolio-desc">{card.description}</p>
                <div className="portfolio-results">{card.results.map((result) => <span key={result} className="result-item">{result}</span>)}</div>
                <div className="portfolio-actions">
                  <a href={card.href} className="btn btn-primary" target={card.href.startsWith('http') ? '_blank' : undefined} rel={card.href.startsWith('http') ? 'noopener' : undefined}>{card.action}</a>
                  <a href="#contact" className="btn btn-secondary">Get Quote</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="container">
          <div className="contact-value-prop">
            <h2>Why Choose Our Services?</h2>
            <div className="value-grid">
              {valueItems.map(([title, copy]) => (
                <div className="value-item" key={title}>
                  <h4>{title}</h4>
                  <p>{copy}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="section-header" style={{ marginTop: '4rem' }}>
            <h2>Let&apos;s Build Something Great Together</h2>
            <p className="section-subtitle">Ready to transform your vision into reality? Let&apos;s discuss your project.</p>
            <div className="hero-actions" style={{ marginTop: '3rem' }}>
              <button id="project-request-btn" className="cta-btn primary" type="button" onClick={() => setIsModalOpen(true)}>Let&apos;s Make It Happen!</button>
            </div>
          </div>
        </div>
      </section>

      <div className="visitor-counter">
        <div className="counter-container">
          <span className="counter-text">Visitors:</span>
          <span id="visitor-count" className="counter-number">{visitorCount}</span>
        </div>
      </div>

      <footer className="footer">
        <p>Thank you for visiting my portfolio! Feel free to connect with me or send me a message.</p>
        <p>Crafted with creativity.</p>
        <p>&copy; 2025 Harold Ligon.</p>
      </footer>

      {isModalOpen ? (
        <div id="project-modal" className="modal-overlay" onClick={(event) => event.target === event.currentTarget && setIsModalOpen(false)}>
          <div className="modal-content">
            <div className="modal-header">
              <button id="modal-close" className="modal-close" type="button" onClick={() => setIsModalOpen(false)}>&times;</button>
              <h2>Project Request Form</h2>
              <p>Let&apos;s bring your vision to life with professional development.</p>
            </div>
            <div className="modal-body">
              {formStatus === 'submitted' ? (
                <div className="form-section">
                  <h3>Request Submitted</h3>
                  <p>Thank you. Your request has been captured locally for now. For live intake routing, the SAS backend will be used during the separate deployment.</p>
                </div>
              ) : (
                <form id="project-form" className="project-form" onSubmit={handleSubmit}>
                  <div className="form-section">
                    <h3>Section 1: Basic Information</h3>
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label required">Full Name</label>
                        <input className="form-input" type="text" required />
                      </div>
                      <div className="form-group">
                        <label className="form-label required">Email Address</label>
                        <input className="form-input" type="email" required />
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label required">Project Summary</label>
                      <textarea className="form-textarea large" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Budget Range</label>
                      <input className="form-input" type="text" placeholder="$1,000-$5,000+" />
                    </div>
                  </div>
                  <div className="modal-actions">
                    <div className="form-progress">Quick intake form</div>
                    <div className="action-buttons">
                      <button id="modal-cancel" type="button" className="modal-btn modal-btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                      <button type="submit" className="modal-btn modal-btn-primary" disabled={formStatus === 'submitting'}>
                        {formStatus === 'submitting' ? 'Submitting...' : 'Submit Request'}
                      </button>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default PortfolioPage;