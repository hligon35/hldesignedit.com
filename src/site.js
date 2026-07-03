import hldiLogoUrl from '../hldiLogo.png?url';

const brand = {
  name: 'HLDesignedIt',
  domain: 'https://hldesignedit.com',
  email: 'info@hldesignedit.com',
};

const pagePaths = {
  home: './index.html',
  services: './services.html',
  analyzer: './analyzer.html',
  portfolio: './portfolio.html',
  about: './about.html',
  contact: './contact.html',
};

const mediaPaths = {
  hero: './hero image.png',
  conversion: './web conv.png',
  beforeAfter: './beforevsafteer.png',
  breakdown: './web brkdwn.png',
};

const navigation = [
  { key: 'home', label: 'Home', href: pagePaths.home },
  { key: 'services', label: 'Services', href: pagePaths.services },
  { key: 'analyzer', label: 'Analyzer', href: pagePaths.analyzer },
  { key: 'portfolio', label: 'Work', href: pagePaths.portfolio },
  { key: 'about', label: 'About', href: pagePaths.about },
  { key: 'contact', label: 'Start a Project', href: pagePaths.contact },
];

const contactRoutes = {
  website: `${pagePaths.contact}?path=website`,
  automation: `${pagePaths.contact}?path=automation`,
  app: `${pagePaths.contact}?path=app`,
  analyzer: pagePaths.analyzer,
  strategy: `${pagePaths.contact}?path=strategy`,
};

const portfolioItems = [
  {
    type: 'website',
    label: 'Service business website',
    title: 'Black Bridge Mindset',
    image: './projects/bbm.png',
    alt: 'Black Bridge Mindset website screenshot',
    problem: 'The business needed a site that looked established fast and made the offer easier to understand.',
    changed: 'Clearer offer framing, stronger trust cues, and a booking path that felt more direct.',
    impact: 'Stronger first impression, cleaner inquiry flow, and better support for qualified conversations.',
    href: 'https://blackbridgemindset.com/',
  },
  {
    type: 'website',
    label: 'Restaurant website',
    title: 'Cedar & Gold Lebanese Restaurant',
    image: './projects/cedar&gold_lebanese.png',
    alt: 'Cedar and Gold Lebanese restaurant website screenshot',
    webp: './projects/cedar&gold_lebanese.webp',
    problem: 'Visitors needed fast access to the menu, location details, and the basics that drive restaurant decisions.',
    changed: 'Mobile-first layout, clearer page order, and business info placed where customers actually look first.',
    impact: 'Better mobile usability, easier customer action, and a stronger first impression for new visitors.',
    href: 'https://hligon35.github.io/cedarngoldlebanese/',
  },
  {
    type: 'website',
    label: 'Small business website',
    title: 'Luxurious Cakes Indy',
    image: './projects/luxurious_cakes.png',
    alt: 'Luxurious Cakes Indy website screenshot',
    webp: './projects/luxurious_cakes.webp',
    problem: 'The business needed a site that made the product line easier to browse and the brand easier to trust.',
    changed: 'Sharper product presentation, clearer browsing flow, and stronger local business positioning.',
    impact: 'Better first impression, easier inquiry flow, and stronger support for quote-driven sales.',
    href: 'https://www.luxuriouscakesindy.com/',
  },
  {
    type: 'systems',
    label: 'Organization website and system foundation',
    title: 'Life Prep Academy Foundation',
    image: './projects/life_prep_academy_foundation.png',
    alt: 'Life Prep Academy Foundation website screenshot',
    webp: './projects/life_prep_academy_foundation.webp',
    problem: 'The organization needed a clearer way to explain its mission and make involvement feel easier.',
    changed: 'Cleaner content hierarchy, stronger trust signals, and simpler access to program information.',
    impact: 'More clarity for visitors, stronger trust, and easier support for community engagement.',
    href: 'https://www.lifeprepacademyfoundation.com/',
  },
];

const servicePillars = [
  {
    number: '01',
    title: 'Websites & Online Presence',
    copy: 'New websites, redesigns, landing pages, local SEO, AI-ready content structure, and stronger conversion paths for businesses that need to look credible and get contacted.',
    features: ['New business websites', 'Website redesigns and fixes', 'Landing pages and lead capture', 'Local SEO and AI-ready structure'],
    href: contactRoutes.website,
    cta: 'Start a Website Project',
  },
  {
    number: '02',
    title: 'Business Automation',
    copy: 'Automated workflows that reduce repetitive work, connect forms, spreadsheets, reminders, lead follow-up, and back-office processes.',
    features: ['Make and Zapier workflows', 'Registration and reminder systems', 'Form-to-spreadsheet automations', 'Email and SMS follow-up flows'],
    href: contactRoutes.automation,
    cta: 'Automate a Workflow',
  },
  {
    number: '03',
    title: 'Custom Apps & Digital Tools',
    copy: 'Simple apps, portals, dashboards, admin tools, and data collection systems built around the way the business actually operates.',
    features: ['Internal dashboards', 'Client or participant portals', 'Registration tools', 'Admin panels and lightweight web apps'],
    href: contactRoutes.app,
    cta: 'Build a Tool',
  },
  {
    number: '04',
    title: 'Digital Strategy & Systems',
    copy: 'Planning and cleanup for businesses that need the right tools, cleaner workflows, and a practical digital roadmap before they build.',
    features: ['Workflow mapping', 'Tech stack cleanup', 'Launch planning', 'Digital process consulting'],
    href: contactRoutes.strategy,
    cta: 'Plan My System',
  },
];

const pages = {
  home: {
    bodyClass: 'page-home',
    main: `
      <section class="hero-section hero-section--home">
        <div class="hero-shell">
          <div class="hero-copy">
            <p class="eyebrow">Digital systems for businesses ready to work smarter</p>
            <h1>Websites, automation, apps, and digital tools built around how your business works.</h1>
            <p class="hero-lead">HLDesignedIt creates clear, credible websites and practical digital systems for small businesses that need more inquiries.</p>
            <div class="hero-actions">
              <a href="${pagePaths.contact}" class="cta-btn primary">Start a Project</a>
              <a href="${pagePaths.analyzer}" class="cta-btn secondary">Analyze My Website</a>
            </div>
            <div class="hero-proof">
              <span>Websites & landing pages</span>
              <span>Automation systems</span>
              <span>Custom apps & tools</span>
            </div>
          </div>
          <aside class="hero-panel" aria-label="Digital solution preview">
            <div class="hero-panel__card hero-panel__card--image">
              <img class="section-visual__image" src="${mediaPaths.hero}" alt="Digital solution preview shown across desktop and mobile screens" loading="eager" decoding="async" />
              <p class="section-visual__caption">Your website is often the first business system customers experience. We build from that foundation outward.</p>
            </div>
            <div class="hero-panel__card hero-panel__card--primary">
              <p class="hero-panel__label">What we help fix</p>
              <ul class="hero-panel__list">
                <li>Outdated websites and weak inquiry flow</li>
                <li>Manual work that should be automated</li>
                <li>Disconnected forms, spreadsheets, emails, and tools</li>
              </ul>
            </div>
            <div class="hero-panel__card">
              <p class="hero-panel__label">What we build toward</p>
              <div class="hero-panel__stats">
                <div><strong>Clarity</strong><span>People understand what you do and what to do next.</span></div>
                <div><strong>Efficiency</strong><span>Systems reduce repetitive work and missed follow-up.</span></div>
                <div><strong>Growth support</strong><span>Your digital setup can support more leads, registrations, and operations.</span></div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      ${solutionPathSection()}
      ${analyzerPromoSection()}

      <section class="services-section">
        <div class="section-header">
          <p class="eyebrow">What we build</p>
          <h2>Digital solutions that connect your online presence, operations, and customer flow.</h2>
          <p class="section-subtitle">Alpha Zone Labs keeps the current website service alive and expands it into a broader system-building offer for businesses.</p>
        </div>
        <div class="services-grid">${serviceCards()}</div>
      </section>

      <section class="process-section">
        <div class="section-header">
          <p class="eyebrow">Process</p>
          <h2>Simple process. Practical build. Clear launch path.</h2>
          <p class="section-subtitle">Whether the project is a website, automation, app, or workflow cleanup, the goal is to build something useful and easy to operate.</p>
        </div>
        <div class="process-grid">${processCards()}</div>
      </section>

      <section class="portfolio-section">
        <div class="section-header">
          <p class="eyebrow">Selected work</p>
          <h2>Existing website work remains part of the Alpha Zone Labs foundation.</h2>
          <p class="section-subtitle">These projects show the current website and digital presence work that continues under the new Alpha Zone Labs brand.</p>
        </div>
        <div class="portfolio-grid">${portfolioCards(portfolioItems.slice(0, 3))}</div>
      </section>

      ${ctaPanel('Ready to build a better digital system?', 'Start with the problem: a weak website, a manual process, an app idea, or a workflow that needs to be cleaned up.', pagePaths.contact, 'Start a Project', pagePaths.analyzer, 'Analyze My Website')}
    `,
  },
  services: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('services', 'Services', 'Websites, automations, apps, and digital systems for businesses.', 'Alpha Zone Labs keeps the full website service in place while expanding the offer into automation, custom tools, and workflow systems.')}
      <section class="content-section">
        <div class="section-header section-header--left">
          <p class="eyebrow">Core offers</p>
          <h2>Choose the solution that matches the business problem.</h2>
          <p class="section-subtitle">Some businesses need a professional website. Some need automation. Some need a custom tool. Many need all three connected into one smoother system.</p>
        </div>
        <div class="detail-grid detail-grid--services">
          ${servicePillars.map((service) => `
            <article class="detail-card">
              <p class="service-kicker">${service.number}</p>
              <h2>${service.title}</h2>
              <p>${service.copy}</p>
              <ul class="service-features">${service.features.map((feature) => `<li>${feature}</li>`).join('')}</ul>
              <a class="inline-link" href="${service.href}">${service.cta}</a>
            </article>
          `).join('')}
        </div>
      </section>

      <section class="insight-section">
        <div class="section-header">
          <p class="eyebrow">Website services stay active</p>
          <h2>The original website build, redesign, local SEO, AI SEO, landing page, and conversion services are still offered.</h2>
          <p class="section-subtitle">They now sit under the Alpha Zone Labs digital presence pillar, which makes the service stronger without making the whole company sound limited to websites.</p>
        </div>
        <div class="problem-grid">
          <article class="problem-card"><h3>New websites</h3><p>For businesses that need a credible online home, clean messaging, mobile-ready structure, and a clear contact path.</p></article>
          <article class="problem-card"><h3>Website redesigns</h3><p>For businesses with outdated or unclear sites that are not building enough trust or generating enough action.</p></article>
          <article class="problem-card"><h3>Local and AI-ready SEO</h3><p>Plain-language service pages, structured data, metadata, and content signals that help search and AI systems understand the business.</p></article>
          <article class="problem-card"><h3>Landing pages and funnels</h3><p>Focused pages for campaigns, events, services, registrations, quote requests, and lead capture.</p></article>
        </div>
      </section>

      ${analyzerPromoSection()}
      ${ctaPanel('Need a website, automation, app, or a better business workflow?', 'Tell us what feels messy, manual, outdated, or disconnected. We will help shape the right digital solution.', pagePaths.contact, 'Start a Project', pagePaths.analyzer, 'Run the Analyzer')}
    `,
  },
  analyzer: {
    bodyClass: 'page-interior page-contact',
    main: `
      ${pageHero('analyzer', 'Digital Presence Analyzer', 'Keep the website analyzer live under the Alpha Zone Labs name.', 'Use the analyzer to review where your current website may be losing trust, clarity, visibility, or leads.')}
      <section class="contact-section contact-section--page">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="eyebrow">Alpha Zone Labs tool</p>
            <h2>Find out what your current website needs before you rebuild it.</h2>
            <p>The Digital Presence Analyzer keeps the original site-audit idea alive under the new brand. It is built for business owners who already have a website and want to understand what is unclear, outdated, hard to find, or weak in the conversion path.</p>
            <div class="contact-benefits">
              <div class="contact-benefit"><strong>Checks:</strong><span>Clarity, trust signals, mobile usability, SEO basics, AI-readiness, and lead flow.</span></div>
              <div class="contact-benefit"><strong>Best for:</strong><span>Business owners who are not sure whether they need a full redesign, smaller fixes, or a stronger lead path.</span></div>
              <div class="contact-benefit"><strong>Next step:</strong><span>Submit your website and we will review where the digital presence can improve.</span></div>
            </div>
            <div class="contact-visual">
              <img class="section-visual__image" src="${mediaPaths.breakdown}" alt="Website analyzer graphic showing clarity and conversion issues" loading="lazy" />
              <p class="section-visual__caption">The analyzer supports the same mission: make the website clearer, more credible, and easier to act on.</p>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Digital Presence Analyzer form">
            <div class="section-header section-header--left">
              <h2>Analyze Your Website</h2>
              <p class="section-subtitle">Enter the basics and the analyzer request will stay connected to the existing backend path.</p>
            </div>
            ${analyzerForm()}
          </div>
        </div>
      </section>
    `,
  },
  portfolio: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('portfolio', 'Work', 'Website and digital presence work that supports clearer business action.', 'The current work examples stay live as proof of the website side of Alpha Zone Labs while the brand expands into automation and apps.')}
      <section class="portfolio-section portfolio-section--interior">
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="website">Websites</button>
          <button class="filter-btn" data-filter="systems">Systems</button>
        </div>
        <div class="portfolio-grid">${portfolioCards(portfolioItems, true)}</div>
      </section>
      ${ctaPanel('Want your business to show up with this level of clarity?', 'Start with a website, automation, app, or a full digital system plan.', pagePaths.contact, 'Start a Project', pagePaths.analyzer, 'Analyze My Site')}
    `,
  },
  about: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('about', 'About Alpha Zone Labs', 'A digital solutions lab built to help businesses work smarter online and behind the scenes.', 'Formerly HL Design Edit, Alpha Zone Labs expands the mission from website design into complete digital solutions for businesses.')}
      <section class="content-section">
        <div class="about-layout about-layout--interior">
          <div class="about-copy">
            <p class="eyebrow">Positioning</p>
            <h2>We build digital systems, not just digital decoration.</h2>
            <p>Alpha Zone Labs helps businesses create modern websites, automate repetitive tasks, build custom tools, and clean up digital workflows. The work starts with the business problem, then we choose the right system to solve it.</p>
            <p>The website services from HL Design Edit remain part of the offer. The difference is that Alpha Zone Labs gives the brand room to support bigger operational needs: apps, automations, registration systems, dashboards, and connected workflows.</p>
          </div>
          <div class="about-points">
            <article class="about-point"><h3>Business-first</h3><p>Every build starts with what the business needs customers, staff, or systems to do.</p></article>
            <article class="about-point"><h3>Practical execution</h3><p>We build useful websites, workflows, and tools without hiding behind vague tech language.</p></article>
            <article class="about-point"><h3>Room to grow</h3><p>A business can start with a website, then add automation, apps, and smarter workflows as the need becomes clear.</p></article>
          </div>
        </div>
      </section>
      <section class="insight-section">
        <div class="section-header">
          <p class="eyebrow">How we think</p>
          <h2>A good digital solution should answer three questions.</h2>
        </div>
        <div class="process-grid process-grid--wide">
          <article class="process-card"><span class="process-number">01</span><h3>What is slowing the business down?</h3><p>Manual work, unclear customer paths, weak websites, and disconnected tools create drag.</p></article>
          <article class="process-card"><span class="process-number">02</span><h3>What should the system make easier?</h3><p>The goal may be more inquiries, faster registration, cleaner follow-up, better data, or simpler operations.</p></article>
          <article class="process-card"><span class="process-number">03</span><h3>What is the simplest useful build?</h3><p>We focus on a practical first version that can launch, work, and improve over time.</p></article>
        </div>
      </section>
      ${ctaPanel('Have a digital problem that needs a clear solution?', 'Tell us what you are trying to build, fix, automate, or connect.', pagePaths.contact, 'Start a Project', pagePaths.services, 'Explore Services')}
    `,
  },
  contact: {
    bodyClass: 'page-interior page-contact',
    main: `
      ${pageHero('contact', 'Start a Project', 'Tell Alpha Zone Labs what you need to build, fix, automate, or connect.', 'Choose the project type that fits your business right now. Website work is still active, and automation, apps, and digital workflow projects are now part of the offer.')}
      <section class="contact-section contact-section--page">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="eyebrow">Project fit</p>
            <h2>Start with the business problem. We will help shape the digital solution.</h2>
            <p>Maybe you need a new website. Maybe your current site needs to convert better. Maybe your registration process, follow-up, forms, or internal workflow needs automation. Send the basics and we will review the best path.</p>
            <div class="contact-benefits">
              <div class="contact-benefit"><strong>Website projects:</strong><span>New sites, redesigns, landing pages, local SEO, AI-ready structure, and conversion fixes.</span></div>
              <div class="contact-benefit"><strong>System projects:</strong><span>Automation, custom tools, dashboards, portals, and workflow cleanup.</span></div>
              <div class="contact-benefit"><strong>Email:</strong><span><a href="mailto:${brand.email}">${brand.email}</a></span></div>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Project request form">
            <div class="section-header section-header--left">
              <h2>Project Request</h2>
              <p class="section-subtitle">Choose the closest fit. You do not need to have every detail figured out.</p>
            </div>
            ${contactForm()}
          </div>
        </div>
      </section>
    `,
  },
};

export function renderPage(pageKey) {
  const app = document.querySelector('#app');
  if (!app) {
    document.body.innerHTML = '<h1>App failed to load.</h1>';
    return;
  }

  const page = pages[pageKey];
  if (!page) {
    document.body.innerHTML = '<h1>Page not found.</h1>';
    return;
  }

  document.body.className = page.bodyClass || '';
  app.innerHTML = `${partnerBanner()}${header(pageKey)}<main>${page.main}</main>${footer()}`;
  initializeFeatures();
}

function partnerBanner() {
  return `
    <div class="partner-banner" role="note" aria-label="Marketing partner link">
      <div class="partner-banner__content">Need marketing after your digital system is built? <a class="partner-banner__link" href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital can help with campaign support.</a></div>
    </div>
  `;
}

function header(activeKey) {
  return `
    <div class="header-logo" aria-label="Site logo">
      <div class="header-logo__inner">
        <a class="header-logo__link" href="${pagePaths.home}" aria-label="Go home">
          <img class="header-logo__img" src="${hldiLogoUrl}" alt="${brand.name} logo" loading="eager" decoding="async" />
        </a>
      </div>
    </div>
    <header class="site-header">
      <nav class="nav-container" aria-label="Main navigation">
        <div id="mobile-nav" class="nav-links">
          ${navigation.map((item) => `<a href="${item.href}" class="nav-link${item.key === activeKey ? ' is-active' : ''}"${item.key === activeKey ? ' aria-current="page"' : ''}>${item.label}</a>`).join('')}
          <a href="${pagePaths.contact}" class="cta-btn nav-cta">Start a Project</a>
          <a href="${pagePaths.analyzer}" class="cta-btn secondary nav-cta nav-cta--secondary">Analyze Site</a>
        </div>
      </nav>
      <button class="nav-hamburger" type="button" aria-label="Open menu" aria-controls="mobile-nav" aria-expanded="false"><span class="nav-hamburger__lines" aria-hidden="true"><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span></span></button>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-cta">
          <div class="footer-cta__text"><h3>Build the website, workflow, app, or digital system your business needs next.</h3><p>Alpha Zone Labs helps businesses turn scattered digital pieces into systems that are clearer, smarter, and easier to use.</p></div>
          <div class="footer-cta__actions"><a href="${pagePaths.contact}" class="cta-btn primary">Start a Project</a><a href="${pagePaths.analyzer}" class="cta-btn secondary">Analyze My Site</a></div>
        </div>
        <div class="footer-grid" aria-label="Footer navigation">
          <div class="footer-col"><h4>Navigation</h4>${navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}</div>
          <div class="footer-col"><h4>Services</h4><a href="${pagePaths.services}">Websites & Online Presence</a><a href="${pagePaths.services}">Business Automation</a><a href="${pagePaths.services}">Custom Apps & Tools</a><a href="${pagePaths.services}">Digital Strategy</a></div>
          <div class="footer-col"><h4>Tools</h4><a href="${pagePaths.analyzer}">Digital Presence Analyzer</a><a href="${pagePaths.portfolio}">Selected Work</a><a href="${pagePaths.about}">About Alpha Zone Labs</a></div>
          <div class="footer-col"><h4>Contact</h4><a href="mailto:${brand.email}">${brand.email}</a><a href="https://github.com/hligon35" target="_blank" rel="noopener">GitHub</a><a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital</a></div>
        </div>
        <div class="footer-bottom"><a class="footer-backtotop" href="#top">Back to top</a><div class="footer-partner">Formerly HL Design Edit. Website services remain active under Alpha Zone Labs.</div><div class="footer-legal">© <span id="footer-year">2026</span> ${brand.name}</div></div>
      </div>
    </footer>
  `;
}

function pageHero(pageKey, eyebrow, title, copy) {
  return `
    <section class="page-hero">
      <div class="page-hero__inner">
        ${breadcrumbNav(pageKey)}
        <p class="eyebrow">${eyebrow}</p>
        <h1>${title}</h1>
        <p class="hero-lead">${copy}</p>
      </div>
    </section>
  `;
}

function breadcrumbNav(activeKey) {
  const activeItem = navigation.find((item) => item.key === activeKey);
  if (!activeItem) return '';
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol class="breadcrumbs__list"><li class="breadcrumbs__item"><a href="${pagePaths.home}">Home</a></li><li class="breadcrumbs__item" aria-current="page">${activeItem.label}</li></ol></nav>`;
}

function serviceCards() {
  return servicePillars.map((service) => `
    <article class="service-card">
      <p class="service-kicker">${service.number}</p>
      <h3>${service.title}</h3>
      <p>${service.copy}</p>
      <ul class="service-features">${service.features.slice(0, 3).map((feature) => `<li>${feature}</li>`).join('')}</ul>
      <a class="inline-link" href="${service.href}">${service.cta}</a>
    </article>
  `).join('');
}

function processCards() {
  return `
    <article class="process-card"><span class="process-number">01</span><h3>Discover</h3><p>We learn how the business works, what is slowing it down, and what the digital solution needs to accomplish.</p></article>
    <article class="process-card"><span class="process-number">02</span><h3>Design the system</h3><p>We map the website, automation, app, or workflow so the build has a clear purpose.</p></article>
    <article class="process-card"><span class="process-number">03</span><h3>Build and connect</h3><p>We create the digital solution and connect the pieces that need to work together.</p></article>
    <article class="process-card"><span class="process-number">04</span><h3>Launch and improve</h3><p>We test the system, launch it, and refine the experience based on real business use.</p></article>
  `;
}

function solutionPathSection() {
  return `
    <section class="user-path-section">
      <div class="section-header"><p class="eyebrow">Choose your path</p><h2>Start with the digital problem you need solved.</h2><p class="section-subtitle">The site now supports the current website service and the broader Alpha Zone Labs offers.</p></div>
      <div class="user-path-grid">
        <article class="user-path-card"><p class="user-path-card__label">Website</p><h3>I need a website or redesign</h3><p>Build, fix, or improve a website so the business looks credible and captures better leads.</p><a href="${contactRoutes.website}" class="cta-btn primary">Start Website Project</a></article>
        <article class="user-path-card"><p class="user-path-card__label">Automation</p><h3>I need to save time</h3><p>Connect forms, sheets, reminders, emails, and follow-up so repetitive work happens automatically.</p><a href="${contactRoutes.automation}" class="cta-btn primary">Automate My Workflow</a></article>
        <article class="user-path-card"><p class="user-path-card__label">Analyzer</p><h3>I need to check my current site</h3><p>Use the Digital Presence Analyzer to identify clarity, trust, SEO, and conversion opportunities.</p><a href="${pagePaths.analyzer}" class="cta-btn primary">Analyze My Website</a></article>
      </div>
    </section>
  `;
}

function analyzerPromoSection() {
  return `
    <section class="best-fit-section">
      <div class="section-header">
        <p class="eyebrow">Digital Presence Analyzer</p>
        <h2>The site analyzer stays live under the Alpha Zone Labs brand.</h2>
        <p class="section-subtitle">Use it to review a current website for clarity, trust signals, search readiness, mobile usability, and conversion opportunities before deciding what to fix.</p>
      </div>
      <div class="section-cta section-cta--dual"><a href="${pagePaths.analyzer}" class="cta-btn primary">Analyze My Website</a><a href="${contactRoutes.website}" class="cta-btn secondary">Fix or Rebuild My Site</a></div>
    </section>
  `;
}

function portfolioCards(items, includeFilters = false) {
  return items.map((item, index) => `
    <article class="portfolio-card${index === 0 && includeFilters ? ' featured' : ''}" data-type="${item.type}">
      <div class="portfolio-image">${item.webp ? `<picture><source srcset="${item.webp}" type="image/webp"><img src="${item.image}" alt="${item.alt}" loading="lazy" /></picture>` : `<img src="${item.image}" alt="${item.alt}" loading="lazy" />`}</div>
      <div class="portfolio-content">
        <p class="portfolio-label">${item.label}</p><h3>${item.title}</h3>
        <p class="portfolio-desc"><strong>Business need:</strong> ${item.problem}</p>
        <p class="portfolio-desc"><strong>What improved:</strong> ${item.changed}</p>
        <p class="portfolio-desc"><strong>What this supported:</strong> ${item.impact}</p>
        <div class="portfolio-actions"><a href="${item.href}" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a></div>
      </div>
    </article>
  `).join('');
}

function ctaPanel(title, copy, primaryHref, primaryLabel, secondaryHref, secondaryLabel) {
  return `
    <section class="cta-section"><div class="cta-panel"><div><p class="eyebrow">Next step</p><h2>${title}</h2><p>${copy}</p></div><div class="cta-panel__actions"><a href="${primaryHref}" class="cta-btn primary">${primaryLabel}</a><a href="${secondaryHref}" class="cta-btn secondary">${secondaryLabel}</a></div></div></section>
  `;
}

function contactForm() {
  return `
    <form id="basic-contact-form" class="basic-contact-form" novalidate>
      <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" />
      <div class="form-group">
        <label class="form-label required">What do you need?</label>
        <div class="request-path-grid" role="radiogroup" aria-label="Project type">
          ${requestOption('website', 'Website', 'Website, redesign, landing page, SEO, or conversion fix')}
          ${requestOption('automation', 'Automation', 'Forms, reminders, follow-up, sheets, or workflow automation')}
          ${requestOption('app', 'App or tool', 'Dashboard, portal, registration system, or custom business tool')}
          ${requestOption('strategy', 'Strategy', 'Workflow cleanup, tech stack planning, or digital roadmap')}
        </div>
      </div>
      <div class="form-row"><div class="form-group"><label class="form-label required" for="contact-name">Name</label><input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required /></div><div class="form-group"><label class="form-label required" for="contact-email">Email</label><input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required /></div></div>
      <div class="form-row"><div class="form-group"><label class="form-label required" for="contact-business">Business Name</label><input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required /></div><div class="form-group"><label class="form-label" for="contact-website">Website</label><input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" /></div></div>
      <div class="form-group"><label id="contact-message-label" class="form-label required" for="contact-message">What do you need help with?</label><p id="contact-form-note" class="form-note">Tell us what feels outdated, manual, disconnected, or ready to build.</p><textarea id="contact-message" name="message" class="form-textarea" placeholder="Share the goal, current problem, and what you want the digital solution to make easier." required></textarea></div>
      <div class="basic-contact-actions"><button type="submit" class="cta-btn primary">Send Project Request</button><p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p></div>
    </form>
  `;
}

function analyzerForm() {
  return `
    <form id="basic-contact-form" class="basic-contact-form" data-form-kind="analyzer" novalidate>
      <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" />
      <input type="hidden" name="requestType" value="analyzer" />
      <div class="form-row"><div class="form-group"><label class="form-label required" for="contact-name">Name</label><input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required /></div><div class="form-group"><label class="form-label required" for="contact-email">Email</label><input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required /></div></div>
      <div class="form-group"><label class="form-label required" for="contact-business">Business Name</label><input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required /></div>
      <div class="form-group"><label class="form-label required" for="contact-website">Website to Analyze</label><input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" required /></div>
      <div class="form-group"><label id="contact-message-label" class="form-label" for="contact-message">What are you worried about?</label><p id="contact-form-note" class="form-note">Examples: weak leads, outdated design, poor mobile experience, unclear services, SEO, or AI search visibility.</p><textarea id="contact-message" name="message" class="form-textarea" placeholder="Tell us what you want the analyzer to pay attention to."></textarea></div>
      <div class="basic-contact-actions"><button type="submit" class="cta-btn primary">Run Website Analyzer</button><p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p></div>
    </form>
  `;
}

function requestOption(value, title, copy) {
  return `<label class="request-path-card" for="request-type-${value}"><input id="request-type-${value}" name="requestType" type="radio" value="${value}" /><span class="request-path-card__eyebrow">${title}</span><strong>${title}</strong><span>${copy}</span></label>`;
}

function initializeFeatures() {
  requestAnimationFrame(() => { initPortfolioFilters(); initBackToTop(); initMobileNav(); });
  setTimeout(() => { initFooterYear(); initScrollOptimizations(); initBasicContactForm(); }, 100);
}

function initBasicContactForm() {
  const form = document.getElementById('basic-contact-form');
  if (!form) return;

  const status = document.getElementById('basic-contact-status');
  const submitBtn = form.querySelector('button[type="submit"]');
  const nameInput = document.getElementById('contact-name');
  const emailInput = document.getElementById('contact-email');
  const businessInput = document.getElementById('contact-business');
  const websiteInput = document.getElementById('contact-website');
  const messageInput = document.getElementById('contact-message');
  const requestInputs = Array.from(form.querySelectorAll('input[name="requestType"]'));
  const requestCards = Array.from(form.querySelectorAll('.request-path-card'));
  const requestedPath = new URLSearchParams(window.location.search).get('path');
  const validTypes = ['website', 'automation', 'app', 'strategy', 'analyzer'];
  const defaultRequestType = validTypes.includes(requestedPath) ? requestedPath : '';

  const getFormsEndpoint = () => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return isLocal ? 'http://127.0.0.1:8787/api/forms' : 'https://hldesignedit.hligon.workers.dev/api/forms';
  };

  const setStatus = (text) => { if (status) status.textContent = text; };
  const applyRequestType = () => {
    requestCards.forEach((card) => {
      const input = card.querySelector('input[name="requestType"]');
      card.classList.toggle('is-selected', Boolean(input?.checked));
    });
  };

  if (defaultRequestType) {
    const defaultInput = requestInputs.find((input) => input.value === defaultRequestType);
    if (defaultInput) defaultInput.checked = true;
  }

  applyRequestType();
  requestInputs.forEach((input) => input.addEventListener('change', () => { applyRequestType(); setStatus(''); }));

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(form);
    const formKind = form.dataset.formKind || 'project';
    const requestType = String(data.get('requestType') || '').trim();
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const businessName = String(data.get('businessName') || '').trim();
    const website = String(data.get('website') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (!validTypes.includes(requestType)) { setStatus('Choose what you need help with.'); requestInputs[0]?.focus(); return; }
    if (!name) { setStatus('Enter your name.'); nameInput?.focus(); return; }
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) { setStatus('Enter a valid email address.'); emailInput?.focus(); return; }
    if (!businessName) { setStatus('Enter your business name.'); businessInput?.focus(); return; }
    if ((requestType === 'analyzer') && !website) { setStatus('Enter the website you want analyzed.'); websiteInput?.focus(); return; }
    if (formKind !== 'analyzer' && !message) { setStatus('Tell us what you need help with.'); messageInput?.focus(); return; }
    if (!(submitBtn instanceof HTMLButtonElement)) return;

    submitBtn.disabled = true;
    setStatus(requestType === 'analyzer' ? 'Sending analyzer request...' : 'Sending project request...');

    fetch(getFormsEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: formKind,
        honeypot: String(data.get('company') || ''),
        pageUrl: window.location.href,
        data: {
          requestType,
          fullName: name,
          email,
          businessName,
          website,
          projectTitle: requestType === 'analyzer' ? 'Digital Presence Analyzer Request' : `Alpha Zone Labs ${requestType} Request`,
          projectSummary: message || `Analyze ${website}`,
          message,
          details: `Request Type: ${requestType}\nBusiness: ${businessName}${website ? `\nWebsite: ${website}` : ''}\n\nMessage: ${message || 'Analyzer request submitted.'}`,
        },
      }),
    })
      .then(async (response) => {
        const payload = await response.json().catch(() => null);
        if (!response.ok || !payload?.ok) throw new Error(payload?.error || 'Unable to send request.');
        setStatus(requestType === 'analyzer' ? 'Analyzer request sent. We will review the site and reply by email.' : 'Project request sent. We will review it and reply by email.');
        form.reset();
        applyRequestType();
      })
      .catch(() => { setStatus(`Could not send right now. Email ${brand.email}.`); })
      .finally(() => { submitBtn.disabled = false; });
  });
}

function initFooterYear() {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) yearElement.textContent = new Date().getFullYear().toString();
}

function initPortfolioFilters() {
  const filterWrap = document.querySelector('.portfolio-filters');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCardsElements = document.querySelectorAll('.portfolio-card');
  if (!filterWrap || !filterButtons.length || !portfolioCardsElements.length) return;
  filterWrap.addEventListener('click', (event) => {
    const button = event.target.closest('.filter-btn');
    if (!button) return;
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = (button.dataset.filter || 'all').trim().toLowerCase();
    requestAnimationFrame(() => {
      portfolioCardsElements.forEach((card) => {
        const type = (card.dataset.type || '').trim().toLowerCase();
        card.style.display = filter === 'all' || type === filter ? '' : 'none';
      });
    });
  });
}

function initBackToTop() {
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href="#top"]');
    if (!link) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initScrollOptimizations() {
  const headerElement = document.querySelector('.site-header');
  if (!headerElement) return;
  let ticking = false;
  const updateHeader = () => { headerElement.classList.toggle('is-scrolled', window.scrollY > 30); ticking = false; };
  window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; } }, { passive: true });
}

function initMobileNav() {
  const headerElement = document.querySelector('.site-header');
  const toggleButton = headerElement?.querySelector('.nav-hamburger');
  const navLinks = document.getElementById('mobile-nav');
  if (!headerElement || !toggleButton || !navLinks) return;
  const isOpen = () => headerElement.classList.contains('is-menu-open');
  const setExpanded = (open) => { headerElement.classList.toggle('is-menu-open', open); toggleButton.setAttribute('aria-expanded', String(open)); toggleButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
  toggleButton.addEventListener('click', (event) => { event.preventDefault(); setExpanded(!isOpen()); });
  navLinks.addEventListener('click', (event) => { if (event.target.closest('a')) setExpanded(false); });
  document.addEventListener('click', (event) => { if (isOpen() && !event.target.closest('.site-header')) setExpanded(false); });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && isOpen()) setExpanded(false); });
}
