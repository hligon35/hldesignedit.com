import alphaLogoUrl from '../alpha-zone-labs-logo.png?url';

const brand = {
  name: 'Alpha Zone Labs',
  domain: 'https://alphazonelabs.com',
  email: 'info@alphazonelabs.com',
};

const pagePaths = {
  home: './index.html',
  services: './services.html',
  portfolio: './portfolio.html',
  about: './about.html',
  contact: './contact.html',
};

const mediaPaths = {
  hero: './hero image.png',
};

const navigation = [
  { key: 'home', label: 'Home', href: pagePaths.home },
  { key: 'services', label: 'Services', href: pagePaths.services },
  { key: 'portfolio', label: 'Work', href: pagePaths.portfolio },
  { key: 'about', label: 'About', href: pagePaths.about },
];

const contactRoutes = {
  website: `${pagePaths.contact}?path=website`,
  automation: `${pagePaths.contact}?path=automation`,
  app: `${pagePaths.contact}?path=app`,
  strategy: `${pagePaths.contact}?path=strategy`,
};

const servicePillars = [
  {
    number: '01',
    title: 'Websites',
    copy: 'We review your current site or idea, identify what is unclear, then build pages that explain your offer, earn trust, and guide visitors toward calls, quotes, bookings, or signups.',
    features: ['New websites', 'Redesigns', 'Landing pages', 'Local and AI-ready SEO'],
    href: contactRoutes.website,
    cta: 'Start Website Project',
  },
  {
    number: '02',
    title: 'Automation',
    copy: 'We map the repetitive work behind your business, then connect forms, spreadsheets, emails, reminders, and follow-up so important steps happen without constant manual chasing.',
    features: ['Lead follow-up', 'Registration flows', 'Email reminders', 'Make and Zapier workflows'],
    href: contactRoutes.automation,
    cta: 'Automate a Workflow',
  },
  {
    number: '03',
    title: 'Apps & Tools',
    copy: 'We build practical dashboards, portals, registration systems, and admin tools that organize information around the way your team already works.',
    features: ['Dashboards', 'Client portals', 'Admin tools', 'Registration systems'],
    href: contactRoutes.app,
    cta: 'Build a Tool',
  },
  {
    number: '04',
    title: 'Strategy',
    copy: 'We help you decide what should be fixed first, what should be automated, and what digital pieces need to work together before you invest in a bigger build.',
    features: ['Site review', 'Workflow mapping', 'Tech cleanup', 'Launch planning'],
    href: contactRoutes.strategy,
    cta: 'Plan the System',
  },
];

const portfolioItems = [
  { type: 'website', label: 'Service website', title: 'Black Bridge Mindset', image: './projects/bbm.png', alt: 'Black Bridge Mindset website screenshot', problem: 'The offer needed to feel clear, credible, and easy to act on.', changed: 'Sharper messaging, stronger trust cues, and a more direct booking path.', impact: 'A stronger first impression and a cleaner path to qualified inquiries.', href: 'https://blackbridgemindset.com/' },
  { type: 'website', label: 'Restaurant website', title: 'Cedar & Gold Lebanese Restaurant', image: './projects/cedar&gold_lebanese.png', alt: 'Cedar and Gold Lebanese restaurant website screenshot', webp: './projects/cedar&gold_lebanese.webp', problem: 'Customers needed menu, location, and business details quickly.', changed: 'A mobile-first layout with key information easier to find.', impact: 'A smoother browsing experience for customers deciding where to eat.', href: 'https://hligon35.github.io/cedarngoldlebanese/' },
  { type: 'website', label: 'Small business website', title: 'Luxurious Cakes Indy', image: './projects/luxurious_cakes.png', alt: 'Luxurious Cakes Indy website screenshot', webp: './projects/luxurious_cakes.webp', problem: 'The business needed stronger product presentation and a clearer inquiry flow.', changed: 'Cleaner browsing, stronger brand trust, and more direct quote support.', impact: 'A more polished online presence for custom-order customers.', href: 'https://www.luxuriouscakesindy.com/' },
  { type: 'systems', label: 'Organization website', title: 'Life Prep Academy Foundation', image: './projects/life_prep_academy_foundation.png', alt: 'Life Prep Academy Foundation website screenshot', webp: './projects/life_prepacademyfoundation.webp', problem: 'The organization needed its mission, programs, and next steps to be easier to understand.', changed: 'Improved page hierarchy, trust signals, and program access.', impact: 'A clearer digital home for families, supporters, and partners.', href: 'https://www.lifeprepacademyfoundation.com/' },
];

const pages = {
  home: {
    bodyClass: 'page-home',
    main: `
      <section class="hero-section hero-section--home">
        <div class="hero-shell">
          <div class="hero-copy">
            <p class="eyebrow">Digital solutions for growing businesses</p>
            <h1>Build the system behind your business.</h1>
            <p class="hero-lead">Alpha Zone Labs helps businesses improve their websites, automate daily work, and build practical tools. We start by looking at what you already have, discuss what should improve, then move forward with the cleanest solution.</p>
            <div class="hero-actions"><a href="${pagePaths.contact}" class="cta-btn primary">Start a Project</a><a href="${pagePaths.services}" class="cta-btn secondary">View Services</a></div>
            <div class="hero-proof"><span>Websites</span><span>Automation</span><span>Apps & tools</span></div>
          </div>
          <aside class="hero-panel" aria-label="What Alpha Zone Labs builds">
            <div class="hero-panel__card hero-panel__card--image"><img class="section-visual__image" src="${mediaPaths.hero}" alt="Website and digital system preview on desktop and mobile screens" loading="eager" decoding="async" /><p class="section-visual__caption">A better digital setup should look professional, explain the next step, and support the work that happens after someone reaches out.</p></div>
            <div class="hero-panel__card hero-panel__card--primary"><p class="hero-panel__label">A clean process:</p><ul class="hero-panel__list"><li>Review what exists or what needs to be built</li><li>Discuss the highest-value improvements</li><li>Build, connect, test, and launch</li></ul></div>
          </aside>
        </div>
      </section>
      ${solutionPathSection()}
      ${servicesPreviewSection()}
      ${processSection()}
      ${workPreviewSection()}
      ${ctaPanel('Ready to clean it up?', 'Share what is not working, what you want people to do, and what would make your business easier to run.', pagePaths.contact, 'Start a Project', pagePaths.services, 'Explore Services')}
    `,
  },
  services: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('services', 'Services', 'What we build.', 'Every service starts with a review of the goal, the current setup, and the gap between where the business is now and what needs to work better.')}
      <section class="content-section"><div class="detail-grid detail-grid--services">${servicePillars.map(detailServiceCard).join('')}</div></section>
      <section class="insight-section">
        <div class="section-header"><p class="eyebrow">Our process</p><h2>Review. Discuss. Build.</h2><p class="section-subtitle">We do not jump straight into design or tools. First, we look at the website, workflow, customer path, or internal process. Then we talk through the improvements that matter most and build the solution that fits.</p></div>
        <div class="problem-grid"><article class="problem-card"><h3>Review</h3><p>We look at your site, forms, tools, customer journey, and manual steps to find where people get stuck or where your team loses time.</p></article><article class="problem-card"><h3>Discuss</h3><p>We walk through what should change, what can wait, and which fixes will create the clearest improvement for your business.</p></article><article class="problem-card"><h3>Build</h3><p>We create the website, automation, app, or connected workflow with a focus on usability, clarity, and long-term usefulness.</p></article><article class="problem-card"><h3>Launch</h3><p>We test the experience, tighten the details, and make sure the final system is ready for real customers and real work.</p></article></div>
      </section>
      ${ctaPanel('Not sure where to start?', 'Tell us what feels broken or outdated. We will help you figure out whether the next move is a site fix, automation, custom tool, or strategy session.', pagePaths.contact, 'Start a Project', pagePaths.portfolio, 'View Work')}
    `,
  },
  portfolio: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('portfolio', 'Work', 'Built for clarity.', 'These projects focus on helping people understand the business, trust the offer, and take the next step with less friction.')}
      <section class="portfolio-section portfolio-section--interior"><div class="portfolio-filters"><button class="filter-btn active" data-filter="all">All</button><button class="filter-btn" data-filter="website">Websites</button><button class="filter-btn" data-filter="systems">Systems</button></div><div class="portfolio-grid">${portfolioCards(portfolioItems, true)}</div></section>
      ${ctaPanel('Want a stronger customer path?', 'We can review what you have now, discuss the weak points, and build the pages or systems that move people forward.', pagePaths.contact, 'Start a Project', pagePaths.services, 'View Services')}
    `,
  },
  about: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('about', 'About', 'Practical digital help.', 'Alpha Zone Labs builds websites, automations, and tools for businesses that need clearer customer paths and smoother internal systems.')}
      <section class="content-section"><div class="about-layout about-layout--interior"><div class="about-copy"><p class="eyebrow">How we think</p><h2>Make it easier.</h2><p>A good digital system should make something easier for the customer, the team, or both. That might mean a clearer homepage, a better quote form, faster follow-up, a registration flow, or a tool that keeps information organized.</p><p>We keep projects focused. We review what is happening now, discuss improvements in plain language, then build the pieces that solve the real problem.</p></div><div class="about-points"><article class="about-point"><h3>Clear direction</h3><p>We help decide what matters first so the project does not become bigger than it needs to be.</p></article><article class="about-point"><h3>Useful builds</h3><p>We build pages, workflows, and tools that support real business activity, not just ideas on a screen.</p></article><article class="about-point"><h3>Connected thinking</h3><p>We look at what happens before and after a customer submits a form, books, registers, or asks for help.</p></article></div></div></section>
      ${ctaPanel('Have something that needs to work better?', 'Send the goal, the current issue, and what you want to make easier.', pagePaths.contact, 'Start a Project', pagePaths.services, 'Explore Services')}
    `,
  },
  contact: {
    bodyClass: 'page-interior page-contact',
    main: `
      ${pageHero('contact', 'Start', 'Tell us the goal.', 'You do not need a perfect brief. Share what you have, what feels unclear or manual, and what you want customers or your team to do more easily.')}
      <section class="contact-section contact-section--page"><div class="contact-layout"><div class="contact-copy"><p class="eyebrow">Project request</p><h2>Start with the problem.</h2><p>Maybe your site is not explaining the business well. Maybe leads are not being followed up. Maybe registration, communication, or internal tracking is too manual. We will review the situation, discuss the best improvements, and help you move forward.</p><div class="contact-benefits"><div class="contact-benefit"><strong>Website help</strong><span>We review the current site or idea, identify what is weak, then improve the message, structure, calls to action, and customer flow.</span></div><div class="contact-benefit"><strong>System help</strong><span>We look at the steps behind the scenes and build automations, dashboards, portals, or tools to reduce manual work.</span></div><div class="contact-benefit"><strong>Email</strong><span><a href="mailto:${brand.email}">${brand.email}</a></span></div></div></div><div class="basic-contact-card" aria-label="Project request form"><div class="section-header section-header--left"><h2>Project Request</h2><p class="section-subtitle">Pick the closest fit and tell us what needs to work better.</p></div>${contactForm()}</div></div></section>
    `,
  },
};

export function renderPage(pageKey) {
  const app = document.querySelector('#app');
  if (!app) return;
  const page = pages[pageKey];
  if (!page) { document.body.innerHTML = '<h1>Page not found.</h1>'; return; }
  document.body.className = page.bodyClass || '';
  app.innerHTML = `${header(pageKey)}<main>${page.main}</main>${footer()}`;
  initializeFeatures();
}

function header(activeKey) {
  return `<header class="site-header"><nav class="nav-container" aria-label="Main navigation"><a class="header-logo__link" href="${pagePaths.home}" aria-label="Alpha Zone Labs home"><img class="header-logo__img" src="${alphaLogoUrl}" alt="${brand.name}" loading="eager" decoding="async" /></a><div id="mobile-nav" class="nav-links">${navigation.map((item) => `<a href="${item.href}" class="nav-link${item.key === activeKey ? ' is-active' : ''}"${item.key === activeKey ? ' aria-current="page"' : ''}>${item.label}</a>`).join('')}<a href="${pagePaths.contact}" class="cta-btn nav-cta">Start a Project</a></div><button class="nav-hamburger" type="button" aria-label="Open menu" aria-controls="mobile-nav" aria-expanded="false"><span class="nav-hamburger__lines" aria-hidden="true"><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span></span></button></nav></header>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-inner"><div class="footer-cta"><div class="footer-cta__text"><h3>Build a cleaner digital system.</h3><p>Websites, automation, and tools that help people take action and help your team keep up after they do.</p></div><div class="footer-cta__actions"><a href="${pagePaths.contact}" class="cta-btn primary">Start a Project</a><a href="${pagePaths.services}" class="cta-btn secondary">View Services</a></div></div><div class="footer-grid" aria-label="Footer navigation"><div class="footer-col"><h4>Company</h4><a href="${pagePaths.home}">Home</a><a href="${pagePaths.about}">About</a><a href="${pagePaths.contact}">Start a Project</a></div><div class="footer-col"><h4>Services</h4><a href="${contactRoutes.website}">Websites</a><a href="${contactRoutes.automation}">Automation</a><a href="${contactRoutes.app}">Apps & Tools</a><a href="${contactRoutes.strategy}">Strategy</a></div><div class="footer-col"><h4>Work</h4><a href="${pagePaths.portfolio}">Portfolio</a><a href="${pagePaths.services}">Services</a></div><div class="footer-col"><h4>Contact</h4><a href="mailto:${brand.email}">${brand.email}</a><a href="${brand.domain}">${brand.domain.replace('https://','')}</a></div></div><div class="footer-bottom"><span>© ${new Date().getFullYear()} ${brand.name}. All rights reserved.</span><span>Websites, automation, apps, and digital systems.</span></div></div></footer>`;
}

function pageHero(page, eyebrow, title, text) {
  return `<section class="page-hero"><div class="section-header"><p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="hero-lead">${text}</p></div></section>`;
}

function solutionPathSection() {
  return `<section class="solution-path-section"><div class="section-header"><p class="eyebrow">Choose the starting point</p><h2>What needs to work better?</h2><p class="section-subtitle">Start with the outcome, not the technology. We can help you decide whether the best next step is a stronger website, an automation, a custom tool, or a cleaner overall system.</p></div><div class="alpha-path-grid">${servicePillars.map(solutionPathCard).join('')}</div></section>`;
}

function servicesPreviewSection() {
  return `<section class="services-section"><div class="section-header"><p class="eyebrow">Core services</p><h2>Focused builds. Practical outcomes.</h2><p class="section-subtitle">We improve the customer-facing pages people see and the behind-the-scenes workflows your business depends on.</p></div><div class="services-grid">${servicePillars.slice(0,3).map(serviceCard).join('')}</div><div class="section-actions"><a href="${pagePaths.services}" class="cta-btn secondary">View All Services</a></div></section>`;
}

function processSection() {
  const steps = [
    ['01', 'Review', 'We look at the current site, tools, forms, and workflow to understand what is happening now.'],
    ['02', 'Discuss', 'We talk through what is not working, what should improve first, and what can wait.'],
    ['03', 'Build', 'We design and connect the website, automation, or tool around the agreed priorities.'],
    ['04', 'Launch', 'We test the complete path, make final adjustments, and prepare the system for real use.'],
  ];
  return `<section class="process-section"><div class="section-header"><p class="eyebrow">How projects move</p><h2>Review. Discuss. Build. Launch.</h2></div><div class="process-grid">${steps.map(([number,title,copy]) => `<article class="process-card"><span class="process-number">${number}</span><h3>${title}</h3><p>${copy}</p></article>`).join('')}</div></section>`;
}

function workPreviewSection() {
  return `<section class="portfolio-section"><div class="section-header"><p class="eyebrow">Selected work</p><h2>Clearer experiences for real businesses.</h2><p class="section-subtitle">A few examples of websites and digital systems built to improve clarity, trust, and action.</p></div><div class="portfolio-grid">${portfolioCards(portfolioItems.slice(0,3), false)}</div><div class="section-actions"><a href="${pagePaths.portfolio}" class="cta-btn secondary">View More Work</a></div></section>`;
}

function solutionPathCard(item) {
  return `<article class="user-path-card"><span class="user-path-number">${item.number}</span><h3>${item.title}</h3><p>${item.copy}</p><a href="${item.href}">${item.cta}</a></article>`;
}

function serviceCard(item) {
  return `<article class="service-card"><span class="service-number">${item.number}</span><h3>${item.title}</h3><p>${item.copy}</p><ul>${item.features.map((feature) => `<li>${feature}</li>`).join('')}</ul><a href="${item.href}" class="text-link">${item.cta}</a></article>`;
}

function detailServiceCard(item) {
  return `<article class="detail-card"><span class="service-number">${item.number}</span><h2>${item.title}</h2><p>${item.copy}</p><ul>${item.features.map((feature) => `<li>${feature}</li>`).join('')}</ul><a href="${item.href}" class="cta-btn secondary">${item.cta}</a></article>`;
}

function portfolioCards(items, detailed) {
  return items.map((item) => `<article class="portfolio-card" data-category="${item.type}"><a class="portfolio-link" href="${item.href}" target="_blank" rel="noreferrer"><picture>${item.webp ? `<source srcset="${item.webp}" type="image/webp">` : ''}<img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async"></picture><div class="portfolio-card__body"><span class="portfolio-label">${item.label}</span><h3>${item.title}</h3>${detailed ? `<p><strong>Problem:</strong> ${item.problem}</p><p><strong>What changed:</strong> ${item.changed}</p><p><strong>Impact:</strong> ${item.impact}</p>` : `<p>${item.changed}</p>`}<span class="text-link">View live project</span></div></a></article>`).join('');
}

function ctaPanel(title, copy, primaryHref, primaryLabel, secondaryHref, secondaryLabel) {
  return `<section class="cta-panel"><div><p class="eyebrow">Next step</p><h2>${title}</h2><p>${copy}</p></div><div class="hero-actions"><a href="${primaryHref}" class="cta-btn primary">${primaryLabel}</a><a href="${secondaryHref}" class="cta-btn secondary">${secondaryLabel}</a></div></section>`;
}

function contactForm() {
  return `<form class="basic-contact-form"><label>Business or project name<input type="text" name="businessName" required></label><label>Your name<input type="text" name="name" required></label><label>Email<input type="email" name="email" required></label><label>What do you need help with?<select name="projectType" required><option value="">Choose one</option><option value="website">Website</option><option value="automation">Automation</option><option value="app">App or internal tool</option><option value="strategy">Strategy or system planning</option></select></label><label>What should work better?<textarea name="message" rows="6" required></textarea></label><button type="submit" class="cta-btn primary">Send Project Request</button><p class="form-status" aria-live="polite"></p></form>`;
}

function initializeFeatures() {
  const menuButton = document.querySelector('.nav-hamburger');
  const nav = document.querySelector('.nav-links');
  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
    });
  }

  document.querySelectorAll('.portfolio-filter').forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      document.querySelectorAll('.portfolio-filter').forEach((item) => item.classList.remove('is-active'));
      button.classList.add('is-active');
      document.querySelectorAll('.portfolio-card').forEach((card) => {
        card.hidden = filter !== 'all' && card.dataset.category !== filter;
      });
    });
  });

  const contactFormElement = document.querySelector('.basic-contact-form');
  if (contactFormElement) {
    const params = new URLSearchParams(window.location.search);
    const projectType = params.get('path');
    const typeField = contactFormElement.querySelector('[name="projectType"]');
    if (projectType && typeField) typeField.value = projectType;
    contactFormElement.addEventListener('submit', (event) => {
      event.preventDefault();
      const status = contactFormElement.querySelector('.form-status');
      status.textContent = 'Thanks. Your request has been received.';
      contactFormElement.reset();
    });
  }
}