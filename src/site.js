import alphaLogoUrl from '../hldiLogo.png?url';

const brand = {
  name: 'Alpha Zone Labs',
  domain: 'https://alphazonelabs.com',
  email: 'info@alphazonelabs.com',
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

const servicePillars = [
  {
    number: '01',
    title: 'Websites that turn visitors into leads',
    shortTitle: 'Websites',
    copy: 'Clean, credible websites and landing pages that explain your offer, build trust fast, and make it easy for people to contact you.',
    features: ['Business websites', 'Landing pages', 'Website redesigns', 'Local and AI-ready SEO'],
    href: contactRoutes.website,
    cta: 'Build My Website',
  },
  {
    number: '02',
    title: 'Automation that saves time',
    shortTitle: 'Automation',
    copy: 'Workflows that connect forms, spreadsheets, emails, reminders, and follow-up so important tasks stop falling through the cracks.',
    features: ['Registration flows', 'Lead follow-up', 'Email reminders', 'Make and Zapier systems'],
    href: contactRoutes.automation,
    cta: 'Automate My Workflow',
  },
  {
    number: '03',
    title: 'Apps and tools built around your process',
    shortTitle: 'Apps & Tools',
    copy: 'Simple dashboards, portals, admin tools, and digital systems designed for the way your team actually works.',
    features: ['Dashboards', 'Client portals', 'Admin tools', 'Registration systems'],
    href: contactRoutes.app,
    cta: 'Build a Tool',
  },
  {
    number: '04',
    title: 'Digital strategy for messy systems',
    shortTitle: 'Strategy',
    copy: 'A practical plan for cleaning up disconnected tools, confusing customer journeys, and manual business processes.',
    features: ['Workflow mapping', 'Tech stack cleanup', 'Launch planning', 'Digital roadmap'],
    href: contactRoutes.strategy,
    cta: 'Plan My System',
  },
];

const portfolioItems = [
  {
    type: 'website',
    label: 'Service website',
    title: 'Black Bridge Mindset',
    image: './projects/bbm.png',
    alt: 'Black Bridge Mindset website screenshot',
    problem: 'The offer needed to feel clear, credible, and easy to act on.',
    changed: 'Sharper messaging, stronger trust cues, and a more direct booking path.',
    impact: 'A stronger first impression and a cleaner path to qualified inquiries.',
    href: 'https://blackbridgemindset.com/',
  },
  {
    type: 'website',
    label: 'Restaurant website',
    title: 'Cedar & Gold Lebanese Restaurant',
    image: './projects/cedar&gold_lebanese.png',
    alt: 'Cedar and Gold Lebanese restaurant website screenshot',
    webp: './projects/cedar&gold_lebanese.webp',
    problem: 'Customers needed menu, location, and basic business details quickly.',
    changed: 'Mobile-first layout with key customer information easier to find.',
    impact: 'A smoother browsing experience for people deciding where to eat.',
    href: 'https://hligon35.github.io/cedarngoldlebanese/',
  },
  {
    type: 'website',
    label: 'Small business website',
    title: 'Luxurious Cakes Indy',
    image: './projects/luxurious_cakes.png',
    alt: 'Luxurious Cakes Indy website screenshot',
    webp: './projects/luxurious_cakes.webp',
    problem: 'The business needed better product presentation and clearer inquiry flow.',
    changed: 'Cleaner browsing, stronger brand trust, and more direct quote support.',
    impact: 'A more polished online presence for custom-order customers.',
    href: 'https://www.luxuriouscakesindy.com/',
  },
  {
    type: 'systems',
    label: 'Organization website',
    title: 'Life Prep Academy Foundation',
    image: './projects/life_prep_academy_foundation.png',
    alt: 'Life Prep Academy Foundation website screenshot',
    webp: './projects/life_prep_academy_foundation.webp',
    problem: 'The organization needed its mission, programs, and next steps to be easier to understand.',
    changed: 'Improved page hierarchy, trust signals, and program access.',
    impact: 'A clearer digital home for families, supporters, and community partners.',
    href: 'https://www.lifeprepacademyfoundation.com/',
  },
];

const pages = {
  home: {
    bodyClass: 'page-home',
    main: `
      <section class="hero-section hero-section--home">
        <div class="hero-shell">
          <div class="hero-copy">
            <p class="eyebrow">Digital solutions for growing businesses</p>
            <h1>Websites, automation, and apps that help your business run smoother.</h1>
            <p class="hero-lead">Alpha Zone Labs builds practical digital systems that help customers find you, contact you, register, pay attention, and move through your process without confusion.</p>
            <div class="hero-actions">
              <a href="${pagePaths.contact}" class="cta-btn primary">Start a Project</a>
              <a href="${pagePaths.analyzer}" class="cta-btn secondary">Analyze My Website</a>
            </div>
            <div class="hero-proof">
              <span>Websites</span>
              <span>Automation</span>
              <span>Custom tools</span>
            </div>
          </div>
          <aside class="hero-panel" aria-label="What Alpha Zone Labs builds">
            <div class="hero-panel__card hero-panel__card--image">
              <img class="section-visual__image" src="${mediaPaths.hero}" alt="Website and digital system preview on desktop and mobile screens" loading="eager" decoding="async" />
              <p class="section-visual__caption">Your digital presence should look professional, work on every screen, and guide people to the next step.</p>
            </div>
            <div class="hero-panel__card hero-panel__card--primary">
              <p class="hero-panel__label">We help when you need:</p>
              <ul class="hero-panel__list">
                <li>A better website or landing page</li>
                <li>A smoother customer or registration flow</li>
                <li>Less manual work behind the scenes</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      ${solutionPathSection()}
      ${servicesPreviewSection()}
      ${analyzerPromoSection()}
      ${processSection()}
      ${workPreviewSection()}
      ${ctaPanel('Ready to make your digital setup easier to use?', 'Tell us what you need to build, fix, automate, or connect.', pagePaths.contact, 'Start a Project', pagePaths.services, 'Explore Services')}
    `,
  },
  services: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('services', 'Services', 'Digital services built for real business needs.', 'Choose the area that fits what you need now. We can start small, clean up what exists, or build a connected system from scratch.')}
      <section class="content-section">
        <div class="detail-grid detail-grid--services">
          ${servicePillars.map((service) => detailServiceCard(service)).join('')}
        </div>
      </section>
      <section class="insight-section">
        <div class="section-header">
          <p class="eyebrow">How it fits together</p>
          <h2>Your website, forms, follow-up, and tools should work as one system.</h2>
          <p class="section-subtitle">A strong digital setup does more than look good. It helps people take action and helps your team keep up after they do.</p>
        </div>
        <div class="problem-grid">
          <article class="problem-card"><h3>Get found</h3><p>Clear pages, better structure, and search-ready content help people understand what you offer.</p></article>
          <article class="problem-card"><h3>Capture interest</h3><p>Strong calls to action, forms, and landing pages make the next step obvious.</p></article>
          <article class="problem-card"><h3>Follow up faster</h3><p>Automations can move leads, registrations, and reminders without manual chasing.</p></article>
          <article class="problem-card"><h3>Stay organized</h3><p>Dashboards and tools help you see what is happening and what needs attention.</p></article>
        </div>
      </section>
      ${ctaPanel('Need help choosing the right solution?', 'Send a quick project request and we will point you toward the cleanest next step.', pagePaths.contact, 'Start a Project', pagePaths.analyzer, 'Analyze My Website')}
    `,
  },
  analyzer: {
    bodyClass: 'page-interior page-contact',
    main: `
      ${pageHero('analyzer', 'Digital Presence Analyzer', 'Find out where your website is losing trust, clarity, or leads.', 'Submit your site for a practical review of your message, mobile experience, search readiness, and conversion path.')}
      <section class="contact-section contact-section--page">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="eyebrow">Website audit</p>
            <h2>Know what to fix before you rebuild.</h2>
            <p>The analyzer is for business owners who already have a website and want a clearer view of what is working, what is weak, and what should improve first.</p>
            <div class="contact-benefits">
              <div class="contact-benefit"><strong>Checks</strong><span>Clarity, trust, mobile usability, search signals, AI-readiness, and lead flow.</span></div>
              <div class="contact-benefit"><strong>Best for</strong><span>Outdated sites, low inquiries, unclear offers, or websites that feel hard to use.</span></div>
              <div class="contact-benefit"><strong>Next step</strong><span>Send your URL and we will review the highest-impact opportunities.</span></div>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Digital Presence Analyzer form">
            <div class="section-header section-header--left">
              <h2>Analyze Your Website</h2>
              <p class="section-subtitle">Share your website and what you want to improve.</p>
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
      ${pageHero('portfolio', 'Work', 'Digital work built around clarity and action.', 'A few examples of websites and digital presence projects designed to help businesses explain what they do and make the next step easier.')}
      <section class="portfolio-section portfolio-section--interior">
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="website">Websites</button>
          <button class="filter-btn" data-filter="systems">Systems</button>
        </div>
        <div class="portfolio-grid">${portfolioCards(portfolioItems, true)}</div>
      </section>
      ${ctaPanel('Want a cleaner digital experience for your business?', 'We can help you build the website, tool, or workflow your customers and team need.', pagePaths.contact, 'Start a Project', pagePaths.services, 'View Services')}
    `,
  },
  about: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('about', 'About Alpha Zone Labs', 'A digital solutions studio for businesses that need cleaner systems.', 'We help businesses build the digital pieces that support visibility, customer action, and day-to-day operations.')}
      <section class="content-section">
        <div class="about-layout about-layout--interior">
          <div class="about-copy">
            <p class="eyebrow">Our approach</p>
            <h2>We build what makes the business easier to understand, contact, and operate.</h2>
            <p>Every project starts with the same question: what should this digital system make easier? The answer may be a website, an automation, a custom tool, or a cleaner process connecting several pieces.</p>
            <p>We keep the work practical. Clear pages. Useful workflows. Simple tools. Better customer paths. Less digital clutter.</p>
          </div>
          <div class="about-points">
            <article class="about-point"><h3>Clear strategy</h3><p>We help you decide what matters now and what can wait.</p></article>
            <article class="about-point"><h3>Practical builds</h3><p>We focus on tools and pages your business can actually use.</p></article>
            <article class="about-point"><h3>Connected systems</h3><p>We look at the full path from customer interest to follow-up.</p></article>
          </div>
        </div>
      </section>
      ${ctaPanel('Have a digital problem that needs a clean solution?', 'Send the goal, the problem, and what you want to make easier.', pagePaths.contact, 'Start a Project', pagePaths.services, 'Explore Services')}
    `,
  },
  contact: {
    bodyClass: 'page-interior page-contact',
    main: `
      ${pageHero('contact', 'Start a Project', 'Tell us what you need to build, fix, automate, or connect.', 'You do not need every detail figured out. Choose the closest project type and share the business goal.')}
      <section class="contact-section contact-section--page">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="eyebrow">Project request</p>
            <h2>Start with the outcome you want.</h2>
            <p>Maybe you need a stronger website, a smoother registration flow, automated reminders, a dashboard, or a custom tool. Share what is happening now and what you want to improve.</p>
            <div class="contact-benefits">
              <div class="contact-benefit"><strong>Website projects</strong><span>New sites, redesigns, landing pages, SEO structure, and conversion fixes.</span></div>
              <div class="contact-benefit"><strong>System projects</strong><span>Automation, dashboards, portals, admin tools, and workflow cleanup.</span></div>
              <div class="contact-benefit"><strong>Email</strong><span><a href="mailto:${brand.email}">${brand.email}</a></span></div>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Project request form">
            <div class="section-header section-header--left">
              <h2>Project Request</h2>
              <p class="section-subtitle">Pick the closest fit and keep it simple.</p>
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
  app.innerHTML = `${header(pageKey)}<main>${page.main}</main>${footer()}`;
  initializeFeatures();
}

function header(activeKey) {
  return `
    <div class="header-logo" aria-label="Site logo">
      <div class="header-logo__inner">
        <a class="header-logo__link" href="${pagePaths.home}" aria-label="Go home">
          <img class="header-logo__img" src="${alphaLogoUrl}" alt="${brand.name} logo" loading="eager" decoding="async" />
        </a>
      </div>
    </div>
    <header class="site-header">
      <nav class="nav-container" aria-label="Main navigation">
        <div id="mobile-nav" class="nav-links">
          ${navigation.map((item) => `<a href="${item.href}" class="nav-link${item.key === activeKey ? ' is-active' : ''}"${item.key === activeKey ? ' aria-current="page"' : ''}>${item.label}</a>`).join('')}
          <a href="${pagePaths.contact}" class="cta-btn nav-cta">Start a Project</a>
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
          <div class="footer-cta__text"><h3>Build a cleaner digital system for your business.</h3><p>Websites, automation, and custom tools that help people take action and help your team keep up.</p></div>
          <div class="footer-cta__actions"><a href="${pagePaths.contact}" class="cta-btn primary">Start a Project</a><a href="${pagePaths.analyzer}" class="cta-btn secondary">Analyze My Site</a></div>
        </div>
        <div class="footer-grid" aria-label="Footer navigation">
          <div class="footer-col"><h4>Company</h4><a href="${pagePaths.about}">About</a><a href="${pagePaths.portfolio}">Work</a><a href="${pagePaths.contact}">Contact</a></div>
          <div class="footer-col"><h4>Services</h4><a href="${pagePaths.services}">Websites</a><a href="${pagePaths.services}">Automation</a><a href="${pagePaths.services}">Apps & Tools</a><a href="${pagePaths.services}">Strategy</a></div>
          <div class="footer-col"><h4>Tools</h4><a href="${pagePaths.analyzer}">Website Analyzer</a><a href="${contactRoutes.website}">Website Project</a><a href="${contactRoutes.automation}">Automation Project</a></div>
          <div class="footer-col"><h4>Contact</h4><a href="mailto:${brand.email}">${brand.email}</a><a href="${brand.domain}">${brand.domain.replace('https://', '')}</a></div>
        </div>
        <div class="footer-bottom"><a class="footer-backtotop" href="#top">Back to top</a><div class="footer-legal">© <span id="footer-year">2026</span> ${brand.name}</div></div>
      </div>
    </footer>
  `;
}

function pageHero(pageKey, eyebrow, title, copy) {
  return `<section class="page-hero"><div class="page-hero__inner">${breadcrumbNav(pageKey)}<p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="hero-lead">${copy}</p></div></section>`;
}

function breadcrumbNav(activeKey) {
  const activeItem = navigation.find((item) => item.key === activeKey);
  if (!activeItem) return '';
  return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol class="breadcrumbs__list"><li class="breadcrumbs__item"><a href="${pagePaths.home}">Home</a></li><li class="breadcrumbs__item" aria-current="page">${activeItem.label}</li></ol></nav>`;
}

function solutionPathSection() {
  return `
    <section class="user-path-section">
      <div class="section-header"><p class="eyebrow">What do you need?</p><h2>Start with the problem you want solved.</h2><p class="section-subtitle">Choose the path that matches your next move.</p></div>
      <div class="user-path-grid alpha-path-grid">
        <article class="user-path-card"><p class="user-path-card__label">Website</p><h3>Look credible online</h3><p>Get a website or landing page that makes your offer clear and gives people a reason to reach out.</p><a href="${contactRoutes.website}" class="cta-btn primary">Start Website Project</a></article>
        <article class="user-path-card"><p class="user-path-card__label">Automation</p><h3>Save time and follow up faster</h3><p>Connect forms, spreadsheets, emails, and reminders so your process runs with less manual work.</p><a href="${contactRoutes.automation}" class="cta-btn primary">Automate My Workflow</a></article>
        <article class="user-path-card"><p class="user-path-card__label">Tool</p><h3>Organize work in one place</h3><p>Build a dashboard, portal, registration system, or internal tool around your real workflow.</p><a href="${contactRoutes.app}" class="cta-btn primary">Build a Tool</a></article>
      </div>
    </section>
  `;
}

function servicesPreviewSection() {
  return `<section class="services-section"><div class="section-header"><p class="eyebrow">Services</p><h2>Simple digital solutions with a clear business purpose.</h2><p class="section-subtitle">We build the pieces your customers see and the systems your team depends on.</p></div><div class="services-grid">${servicePillars.map((service) => serviceCard(service)).join('')}</div></section>`;
}

function analyzerPromoSection() {
  return `<section class="best-fit-section alpha-analyzer-strip"><div class="section-header"><p class="eyebrow">Free starting point</p><h2>Not sure what your website needs?</h2><p class="section-subtitle">Run the Digital Presence Analyzer to spot clarity, trust, mobile, search, and conversion opportunities.</p></div><div class="section-cta section-cta--dual"><a href="${pagePaths.analyzer}" class="cta-btn primary">Analyze My Website</a><a href="${contactRoutes.website}" class="cta-btn secondary">Fix or Rebuild My Site</a></div></section>`;
}

function processSection() {
  return `<section class="process-section"><div class="section-header"><p class="eyebrow">Process</p><h2>A clean path from idea to launch.</h2><p class="section-subtitle">We keep the process focused so you know what is being built and why it matters.</p></div><div class="process-grid">${processCards()}</div></section>`;
}

function workPreviewSection() {
  return `<section class="portfolio-section"><div class="section-header"><p class="eyebrow">Selected work</p><h2>Built to improve clarity, trust, and action.</h2><p class="section-subtitle">A few examples of digital presence work for small businesses and organizations.</p></div><div class="portfolio-grid">${portfolioCards(portfolioItems.slice(0, 3))}</div></section>`;
}

function serviceCard(service) {
  return `<article class="service-card"><p class="service-kicker">${service.number}</p><h3>${service.shortTitle}</h3><p>${service.copy}</p><ul class="service-features">${service.features.slice(0, 3).map((feature) => `<li>${feature}</li>`).join('')}</ul><a class="inline-link" href="${service.href}">${service.cta}</a></article>`;
}

function detailServiceCard(service) {
  return `<article class="detail-card"><p class="service-kicker">${service.number}</p><h2>${service.title}</h2><p>${service.copy}</p><ul class="service-features">${service.features.map((feature) => `<li>${feature}</li>`).join('')}</ul><a class="inline-link" href="${service.href}">${service.cta}</a></article>`;
}

function processCards() {
  return `
    <article class="process-card"><span class="process-number">01</span><h3>Map the goal</h3><p>We define what the digital solution needs to make easier.</p></article>
    <article class="process-card"><span class="process-number">02</span><h3>Plan the flow</h3><p>We outline the pages, automations, tools, or data paths.</p></article>
    <article class="process-card"><span class="process-number">03</span><h3>Build the system</h3><p>We create the solution and connect the pieces that need to work together.</p></article>
    <article class="process-card"><span class="process-number">04</span><h3>Launch cleanly</h3><p>We test the experience and prepare it for real business use.</p></article>
  `;
}

function portfolioCards(items, includeFilters = false) {
  return items.map((item, index) => `<article class="portfolio-card${index === 0 && includeFilters ? ' featured' : ''}" data-type="${item.type}"><div class="portfolio-image">${item.webp ? `<picture><source srcset="${item.webp}" type="image/webp"><img src="${item.image}" alt="${item.alt}" loading="lazy" /></picture>` : `<img src="${item.image}" alt="${item.alt}" loading="lazy" />`}</div><div class="portfolio-content"><p class="portfolio-label">${item.label}</p><h3>${item.title}</h3><p class="portfolio-desc"><strong>Need:</strong> ${item.problem}</p><p class="portfolio-desc"><strong>Change:</strong> ${item.changed}</p><p class="portfolio-desc"><strong>Result:</strong> ${item.impact}</p><div class="portfolio-actions"><a href="${item.href}" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a></div></div></article>`).join('');
}

function ctaPanel(title, copy, primaryHref, primaryLabel, secondaryHref, secondaryLabel) {
  return `<section class="cta-section"><div class="cta-panel"><div><p class="eyebrow">Next step</p><h2>${title}</h2><p>${copy}</p></div><div class="cta-panel__actions"><a href="${primaryHref}" class="cta-btn primary">${primaryLabel}</a><a href="${secondaryHref}" class="cta-btn secondary">${secondaryLabel}</a></div></div></section>`;
}

function contactForm() {
  return `<form id="basic-contact-form" class="basic-contact-form" novalidate><input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" /><div class="form-group"><label class="form-label required">What do you need?</label><div class="request-path-grid" role="radiogroup" aria-label="Project type">${requestOption('website', 'Website', 'Website, landing page, redesign, or SEO structure')}${requestOption('automation', 'Automation', 'Forms, reminders, follow-up, or workflow automation')}${requestOption('app', 'App or tool', 'Dashboard, portal, registration system, or admin tool')}${requestOption('strategy', 'Strategy', 'Workflow cleanup, planning, or digital roadmap')}</div></div><div class="form-row"><div class="form-group"><label class="form-label required" for="contact-name">Name</label><input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required /></div><div class="form-group"><label class="form-label required" for="contact-email">Email</label><input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required /></div></div><div class="form-row"><div class="form-group"><label class="form-label required" for="contact-business">Business Name</label><input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required /></div><div class="form-group"><label class="form-label" for="contact-website">Website</label><input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" /></div></div><div class="form-group"><label id="contact-message-label" class="form-label required" for="contact-message">What should this help you do?</label><p id="contact-form-note" class="form-note">Share the goal, current problem, and what you want to make easier.</p><textarea id="contact-message" name="message" class="form-textarea" placeholder="Example: We need a landing page for a campaign and automated follow-up when someone submits the form." required></textarea></div><div class="basic-contact-actions"><button type="submit" class="cta-btn primary">Send Project Request</button><p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p></div></form>`;
}

function analyzerForm() {
  return `<form id="basic-contact-form" class="basic-contact-form" data-form-kind="analyzer" novalidate><input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" /><input type="hidden" name="requestType" value="analyzer" /><div class="form-row"><div class="form-group"><label class="form-label required" for="contact-name">Name</label><input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required /></div><div class="form-group"><label class="form-label required" for="contact-email">Email</label><input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required /></div></div><div class="form-group"><label class="form-label required" for="contact-business">Business Name</label><input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required /></div><div class="form-group"><label class="form-label required" for="contact-website">Website to Analyze</label><input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" required /></div><div class="form-group"><label id="contact-message-label" class="form-label" for="contact-message">What do you want improved?</label><p id="contact-form-note" class="form-note">Examples: more leads, clearer services, better mobile experience, stronger trust, or better search visibility.</p><textarea id="contact-message" name="message" class="form-textarea" placeholder="Optional notes"></textarea></div><div class="basic-contact-actions"><button type="submit" class="cta-btn primary">Run Website Analyzer</button><p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p></div></form>`;
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
  const setStatus = (text) => { if (status) status.textContent = text; };
  const getFormsEndpoint = () => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return isLocal ? 'http://127.0.0.1:8787/api/forms' : 'https://alphazonelabs.hligon.workers.dev/api/forms';
  };
  const applyRequestType = () => { requestCards.forEach((card) => { const input = card.querySelector('input[name="requestType"]'); card.classList.toggle('is-selected', Boolean(input?.checked)); }); };
  if (defaultRequestType) { const defaultInput = requestInputs.find((input) => input.value === defaultRequestType); if (defaultInput) defaultInput.checked = true; }
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
    if (requestType === 'analyzer' && !website) { setStatus('Enter the website you want analyzed.'); websiteInput?.focus(); return; }
    if (formKind !== 'analyzer' && !message) { setStatus('Tell us what you need help with.'); messageInput?.focus(); return; }
    if (!(submitBtn instanceof HTMLButtonElement)) return;
    submitBtn.disabled = true;
    setStatus(requestType === 'analyzer' ? 'Sending analyzer request...' : 'Sending project request...');
    fetch(getFormsEndpoint(), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ formType: requestType === 'analyzer' ? 'analyzer' : 'project', honeypot: String(data.get('company') || ''), pageUrl: window.location.href, data: { requestType, fullName: name, email, businessName, website, projectTitle: requestType === 'analyzer' ? 'Digital Presence Analyzer Request' : `Alpha Zone Labs ${requestType} Request`, projectSummary: message || `Analyze ${website}`, message, details: `Request Type: ${requestType}\nBusiness: ${businessName}${website ? `\nWebsite: ${website}` : ''}\n\nMessage: ${message || 'Analyzer request submitted.'}` } }) })
      .then(async (response) => { const payload = await response.json().catch(() => null); if (!response.ok || !payload?.ok) throw new Error(payload?.error || 'Unable to send request.'); setStatus(requestType === 'analyzer' ? 'Analyzer request sent. We will review the site and reply by email.' : 'Project request sent. We will review it and reply by email.'); form.reset(); applyRequestType(); })
      .catch(() => { setStatus(`Could not send right now. Email ${brand.email}.`); })
      .finally(() => { submitBtn.disabled = false; });
  });
}

function initFooterYear() { const yearElement = document.getElementById('footer-year'); if (yearElement) yearElement.textContent = new Date().getFullYear().toString(); }
function initPortfolioFilters() { const wrap = document.querySelector('.portfolio-filters'); const buttons = document.querySelectorAll('.filter-btn'); const cards = document.querySelectorAll('.portfolio-card'); if (!wrap || !buttons.length || !cards.length) return; wrap.addEventListener('click', (event) => { const button = event.target.closest('.filter-btn'); if (!button) return; buttons.forEach((item) => item.classList.remove('active')); button.classList.add('active'); const filter = (button.dataset.filter || 'all').trim().toLowerCase(); cards.forEach((card) => { const type = (card.dataset.type || '').trim().toLowerCase(); card.style.display = filter === 'all' || type === filter ? '' : 'none'; }); }); }
function initBackToTop() { document.addEventListener('click', (event) => { const link = event.target.closest('a[href="#top"]'); if (!link) return; event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }); }
function initScrollOptimizations() { const headerElement = document.querySelector('.site-header'); if (!headerElement) return; let ticking = false; const updateHeader = () => { headerElement.classList.toggle('is-scrolled', window.scrollY > 30); ticking = false; }; window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; } }, { passive: true }); }
function initMobileNav() { const headerElement = document.querySelector('.site-header'); const toggleButton = headerElement?.querySelector('.nav-hamburger'); const navLinks = document.getElementById('mobile-nav'); if (!headerElement || !toggleButton || !navLinks) return; const isOpen = () => headerElement.classList.contains('is-menu-open'); const setExpanded = (open) => { headerElement.classList.toggle('is-menu-open', open); toggleButton.setAttribute('aria-expanded', String(open)); toggleButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }; toggleButton.addEventListener('click', (event) => { event.preventDefault(); setExpanded(!isOpen()); }); navLinks.addEventListener('click', (event) => { if (event.target.closest('a')) setExpanded(false); }); document.addEventListener('click', (event) => { if (isOpen() && !event.target.closest('.site-header')) setExpanded(false); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && isOpen()) setExpanded(false); }); }
