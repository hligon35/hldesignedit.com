import alphaLogoUrl from '../hldiLogo.png?url';

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
  { key: 'contact', label: 'Start a Project', href: pagePaths.contact },
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
  { type: 'systems', label: 'Organization website', title: 'Life Prep Academy Foundation', image: './projects/life_prep_academy_foundation.png', alt: 'Life Prep Academy Foundation website screenshot', webp: './projects/life_prep_academy_foundation.webp', problem: 'The organization needed its mission, programs, and next steps to be easier to understand.', changed: 'Improved page hierarchy, trust signals, and program access.', impact: 'A clearer digital home for families, supporters, and partners.', href: 'https://www.lifeprepacademyfoundation.com/' },
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
            <div class="hero-panel__card hero-panel__card--primary"><p class="hero-panel__label">A clean process:</p><ul class="hero-panel__list"><li>Analyze what exists or what needs to be built</li><li>Discuss the highest-value improvements</li><li>Build, connect, test, and launch</li></ul></div>
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
      <section class="content-section"><div class="about-layout about-layout--interior"><div class="about-copy"><p class="eyebrow">How we think</p><h2>Make it easier.</h2><p>A good digital system should make something easier for the customer, the team, or both. That might mean a clearer homepage, a better quote form, faster follow-up, a registration flow, or a tool that keeps information organized.</p><p>We keep projects focused. We analyze what is happening now, discuss improvements in plain language, then build the pieces that solve the real problem.</p></div><div class="about-points"><article class="about-point"><h3>Clear direction</h3><p>We help decide what matters first so the project does not become bigger than it needs to be.</p></article><article class="about-point"><h3>Useful builds</h3><p>We build pages, workflows, and tools that support real business activity, not just ideas on a screen.</p></article><article class="about-point"><h3>Connected thinking</h3><p>We look at what happens before and after a customer submits a form, books, registers, or asks for help.</p></article></div></div></section>
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
  return `<div class="header-logo" aria-label="Site logo"><div class="header-logo__inner"><a class="header-logo__link" href="${pagePaths.home}" aria-label="Go home"><img class="header-logo__img" src="${alphaLogoUrl}" alt="${brand.name} logo" loading="eager" decoding="async" /></a></div></div><header class="site-header"><nav class="nav-container" aria-label="Main navigation"><div id="mobile-nav" class="nav-links">${navigation.map((item) => `<a href="${item.href}" class="nav-link${item.key === activeKey ? ' is-active' : ''}"${item.key === activeKey ? ' aria-current="page"' : ''}>${item.label}</a>`).join('')}<a href="${pagePaths.contact}" class="cta-btn nav-cta">Start a Project</a></div></nav><button class="nav-hamburger" type="button" aria-label="Open menu" aria-controls="mobile-nav" aria-expanded="false"><span class="nav-hamburger__lines" aria-hidden="true"><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span></span></button></header>`;
}

function footer() {
  return `<footer class="footer"><div class="footer-inner"><div class="footer-cta"><div class="footer-cta__text"><h3>Build a cleaner digital system.</h3><p>Websites, automation, and tools that help people take action and help your team keep up after they do.</p></div><div class="footer-cta__actions"><a href="${pagePaths.contact}" class="cta-btn primary">Start a Project</a><a href="${pagePaths.services}" class="cta-btn secondary">View Services</a></div></div><div class="footer-grid" aria-label="Footer navigation"><div class="footer-col"><h4>Company</h4><a href="${pagePaths.about}">About</a><a href="${pagePaths.portfolio}">Work</a><a href="${pagePaths.contact}">Contact</a></div><div class="footer-col"><h4>Services</h4><a href="${pagePaths.services}">Websites</a><a href="${pagePaths.services}">Automation</a><a href="${pagePaths.services}">Apps & Tools</a><a href="${pagePaths.services}">Strategy</a></div><div class="footer-col"><h4>Start</h4><a href="${contactRoutes.website}">Website Project</a><a href="${contactRoutes.automation}">Automation Project</a><a href="${contactRoutes.app}">App or Tool Project</a></div><div class="footer-col"><h4>Contact</h4><a href="mailto:${brand.email}">${brand.email}</a><a href="${brand.domain}">${brand.domain.replace('https://', '')}</a></div></div><div class="footer-bottom"><a class="footer-backtotop" href="#top">Back to top</a><div class="footer-legal">© <span id="footer-year">2026</span> ${brand.name}</div></div></div></footer>`;
}

function pageHero(pageKey, eyebrow, title, copy) { return `<section class="page-hero"><div class="page-hero__inner">${breadcrumbNav(pageKey)}<p class="eyebrow">${eyebrow}</p><h1>${title}</h1><p class="hero-lead">${copy}</p></div></section>`; }
function breadcrumbNav(activeKey) { const activeItem = navigation.find((item) => item.key === activeKey); if (!activeItem) return ''; return `<nav class="breadcrumbs" aria-label="Breadcrumb"><ol class="breadcrumbs__list"><li class="breadcrumbs__item"><a href="${pagePaths.home}">Home</a></li><li class="breadcrumbs__item" aria-current="page">${activeItem.label}</li></ol></nav>`; }
function solutionPathSection() { return `<section class="user-path-section"><div class="section-header"><p class="eyebrow">Start here</p><h2>Pick the problem.</h2><p class="section-subtitle">Choose the area that feels closest. We will review what you have, talk through the improvements, and recommend the next practical step.</p></div><div class="user-path-grid alpha-path-grid"><article class="user-path-card"><p class="user-path-card__label">Website</p><h3>Fix the first impression</h3><p>Improve the message, structure, mobile experience, trust signals, and calls to action so visitors understand what to do next.</p><a href="${contactRoutes.website}" class="cta-btn primary">Website Help</a></article><article class="user-path-card"><p class="user-path-card__label">Automation</p><h3>Reduce manual work</h3><p>Connect the follow-up, reminders, form responses, and back-office steps that currently take too much time.</p><a href="${contactRoutes.automation}" class="cta-btn primary">Automation Help</a></article><article class="user-path-card"><p class="user-path-card__label">Tool</p><h3>Organize the process</h3><p>Create a dashboard, portal, registration system, or admin tool that keeps the right information in one place.</p><a href="${contactRoutes.app}" class="cta-btn primary">Tool Help</a></article></div></section>`; }
function servicesPreviewSection() { return `<section class="services-section"><div class="section-header"><p class="eyebrow">Services</p><h2>What we do.</h2><p class="section-subtitle">We build customer-facing websites and behind-the-scenes systems that make the business easier to understand, contact, manage, and grow.</p></div><div class="services-grid">${servicePillars.map(serviceCard).join('')}</div></section>`; }
function processSection() { return `<section class="process-section"><div class="section-header"><p class="eyebrow">Process</p><h2>How we move.</h2><p class="section-subtitle">The work starts with analysis, not assumptions. We look at the site, workflow, or customer path, discuss the improvements, then build the solution that best supports the business.</p></div><div class="process-grid">${processCards()}</div></section>`; }
function workPreviewSection() { return `<section class="portfolio-section"><div class="section-header"><p class="eyebrow">Work</p><h2>Clearer paths.</h2><p class="section-subtitle">Examples of websites and digital presence work built to improve clarity, trust, and customer action.</p></div><div class="portfolio-grid">${portfolioCards(portfolioItems.slice(0, 3))}</div></section>`; }
function serviceCard(service) { return `<article class="service-card"><p class="service-kicker">${service.number}</p><h3>${service.title}</h3><p>${service.copy}</p><ul class="service-features">${service.features.slice(0, 3).map((feature) => `<li>${feature}</li>`).join('')}</ul><a class="inline-link" href="${service.href}">${service.cta}</a></article>`; }
function detailServiceCard(service) { return `<article class="detail-card"><p class="service-kicker">${service.number}</p><h2>${service.title}</h2><p>${service.copy}</p><ul class="service-features">${service.features.map((feature) => `<li>${feature}</li>`).join('')}</ul><a class="inline-link" href="${service.href}">${service.cta}</a></article>`; }
function processCards() { return `<article class="process-card"><span class="process-number">01</span><h3>Analyze</h3><p>We review the site, workflow, or customer path to understand what is unclear, slow, manual, or disconnected.</p></article><article class="process-card"><span class="process-number">02</span><h3>Discuss</h3><p>We explain what should improve first and why, then decide what kind of solution makes sense.</p></article><article class="process-card"><span class="process-number">03</span><h3>Build</h3><p>We create the website, automation, app, or tool with clear priorities and real use in mind.</p></article><article class="process-card"><span class="process-number">04</span><h3>Launch</h3><p>We test the experience, clean up the details, and get it ready for customers or your team.</p></article>`; }
function portfolioCards(items, includeFilters = false) { return items.map((item, index) => `<article class="portfolio-card${index === 0 && includeFilters ? ' featured' : ''}" data-type="${item.type}"><div class="portfolio-image">${item.webp ? `<picture><source srcset="${item.webp}" type="image/webp"><img src="${item.image}" alt="${item.alt}" loading="lazy" /></picture>` : `<img src="${item.image}" alt="${item.alt}" loading="lazy" />`}</div><div class="portfolio-content"><p class="portfolio-label">${item.label}</p><h3>${item.title}</h3><p class="portfolio-desc"><strong>Need:</strong> ${item.problem}</p><p class="portfolio-desc"><strong>Change:</strong> ${item.changed}</p><p class="portfolio-desc"><strong>Result:</strong> ${item.impact}</p><div class="portfolio-actions"><a href="${item.href}" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a></div></div></article>`).join(''); }
function ctaPanel(title, copy, primaryHref, primaryLabel, secondaryHref, secondaryLabel) { return `<section class="cta-section"><div class="cta-panel"><div><p class="eyebrow">Next step</p><h2>${title}</h2><p>${copy}</p></div><div class="cta-panel__actions"><a href="${primaryHref}" class="cta-btn primary">${primaryLabel}</a><a href="${secondaryHref}" class="cta-btn secondary">${secondaryLabel}</a></div></div></section>`; }
function contactForm() { return `<form id="basic-contact-form" class="basic-contact-form" novalidate><input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" /><div class="form-group"><label class="form-label required">What do you need?</label><div class="request-path-grid" role="radiogroup" aria-label="Project type">${requestOption('website', 'Website', 'Analyze and improve my website')}${requestOption('automation', 'Automation', 'Connect forms, reminders, follow-up, or workflows')}${requestOption('app', 'App or tool', 'Build a dashboard, portal, registration system, or admin tool')}${requestOption('strategy', 'Strategy', 'Review my setup and plan the next move')}</div></div><div class="form-row"><div class="form-group"><label class="form-label required" for="contact-name">Name</label><input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required /></div><div class="form-group"><label class="form-label required" for="contact-email">Email</label><input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required /></div></div><div class="form-row"><div class="form-group"><label class="form-label required" for="contact-business">Business Name</label><input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required /></div><div class="form-group"><label class="form-label" for="contact-website">Website</label><input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" /></div></div><div class="form-group"><label id="contact-message-label" class="form-label required" for="contact-message">What should improve?</label><p id="contact-form-note" class="form-note">Share what is not working, what you want customers or your team to do, and any links or tools we should review.</p><textarea id="contact-message" name="message" class="form-textarea" placeholder="Example: Our site feels outdated and people are not submitting the quote form. We want you to review it, discuss improvements, and help us move forward." required></textarea></div><div class="basic-contact-actions"><button type="submit" class="cta-btn primary">Send Project Request</button><p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p></div></form>`; }
function requestOption(value, title, copy) { return `<label class="request-path-card" for="request-type-${value}"><input id="request-type-${value}" name="requestType" type="radio" value="${value}" /><span class="request-path-card__eyebrow">${title}</span><strong>${title}</strong><span>${copy}</span></label>`; }
function initializeFeatures() { requestAnimationFrame(() => { initPortfolioFilters(); initBackToTop(); initMobileNav(); }); setTimeout(() => { initFooterYear(); initScrollOptimizations(); initBasicContactForm(); }, 100); }
function initBasicContactForm() { const form = document.getElementById('basic-contact-form'); if (!form) return; const status = document.getElementById('basic-contact-status'); const submitBtn = form.querySelector('button[type="submit"]'); const requestInputs = Array.from(form.querySelectorAll('input[name="requestType"]')); const requestCards = Array.from(form.querySelectorAll('.request-path-card')); const validTypes = ['website', 'automation', 'app', 'strategy']; const requestedPath = new URLSearchParams(window.location.search).get('path'); const defaultRequestType = validTypes.includes(requestedPath) ? requestedPath : ''; const setStatus = (text) => { if (status) status.textContent = text; }; const endpoint = () => (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') ? 'http://127.0.0.1:8787/api/forms' : 'https://alphazonelabs.hligon.workers.dev/api/forms'; const applyRequestType = () => requestCards.forEach((card) => { const input = card.querySelector('input[name="requestType"]'); card.classList.toggle('is-selected', Boolean(input?.checked)); }); if (defaultRequestType) { const selected = requestInputs.find((input) => input.value === defaultRequestType); if (selected) selected.checked = true; } applyRequestType(); requestInputs.forEach((input) => input.addEventListener('change', () => { applyRequestType(); setStatus(''); })); form.addEventListener('submit', (event) => { event.preventDefault(); const data = new FormData(form); const requestType = String(data.get('requestType') || '').trim(); const name = String(data.get('name') || '').trim(); const email = String(data.get('email') || '').trim(); const businessName = String(data.get('businessName') || '').trim(); const website = String(data.get('website') || '').trim(); const message = String(data.get('message') || '').trim(); if (!validTypes.includes(requestType)) { setStatus('Choose what you need help with.'); requestInputs[0]?.focus(); return; } if (!name) { setStatus('Enter your name.'); return; } if (!email || !/^\S+@\S+\.\S+$/.test(email)) { setStatus('Enter a valid email address.'); return; } if (!businessName) { setStatus('Enter your business name.'); return; } if (!message) { setStatus('Tell us what should improve.'); return; } if (!(submitBtn instanceof HTMLButtonElement)) return; submitBtn.disabled = true; setStatus('Sending project request...'); fetch(endpoint(), { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ formType: 'project', honeypot: String(data.get('company') || ''), pageUrl: window.location.href, data: { requestType, fullName: name, email, businessName, website, projectTitle: `Alpha Zone Labs ${requestType} Request`, projectSummary: message, message, details: `Request Type: ${requestType}\nBusiness: ${businessName}${website ? `\nWebsite: ${website}` : ''}\n\nMessage: ${message}` } }) }).then(async (response) => { const payload = await response.json().catch(() => null); if (!response.ok || !payload?.ok) throw new Error(payload?.error || 'Unable to send request.'); setStatus('Project request sent. We will review it and reply by email.'); form.reset(); applyRequestType(); }).catch(() => { setStatus(`Could not send right now. Email ${brand.email}.`); }).finally(() => { submitBtn.disabled = false; }); }); }
function initFooterYear() { const yearElement = document.getElementById('footer-year'); if (yearElement) yearElement.textContent = new Date().getFullYear().toString(); }
function initPortfolioFilters() { const wrap = document.querySelector('.portfolio-filters'); const buttons = document.querySelectorAll('.filter-btn'); const cards = document.querySelectorAll('.portfolio-card'); if (!wrap || !buttons.length || !cards.length) return; wrap.addEventListener('click', (event) => { const button = event.target.closest('.filter-btn'); if (!button) return; buttons.forEach((item) => item.classList.remove('active')); button.classList.add('active'); const filter = (button.dataset.filter || 'all').trim().toLowerCase(); cards.forEach((card) => { const type = (card.dataset.type || '').trim().toLowerCase(); card.style.display = filter === 'all' || type === filter ? '' : 'none'; }); }); }
function initBackToTop() { document.addEventListener('click', (event) => { const link = event.target.closest('a[href="#top"]'); if (!link) return; event.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }); }
function initScrollOptimizations() { const headerElement = document.querySelector('.site-header'); if (!headerElement) return; let ticking = false; const updateHeader = () => { headerElement.classList.toggle('is-scrolled', window.scrollY > 30); ticking = false; }; window.addEventListener('scroll', () => { if (!ticking) { requestAnimationFrame(updateHeader); ticking = true; } }, { passive: true }); }
function initMobileNav() { const headerElement = document.querySelector('.site-header'); const toggleButton = headerElement?.querySelector('.nav-hamburger'); const navLinks = document.getElementById('mobile-nav'); if (!headerElement || !toggleButton || !navLinks) return; const isOpen = () => headerElement.classList.contains('is-menu-open'); const setExpanded = (open) => { headerElement.classList.toggle('is-menu-open', open); toggleButton.setAttribute('aria-expanded', String(open)); toggleButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); }; toggleButton.addEventListener('click', (event) => { event.preventDefault(); setExpanded(!isOpen()); }); navLinks.addEventListener('click', (event) => { if (event.target.closest('a')) setExpanded(false); }); document.addEventListener('click', (event) => { if (isOpen() && !event.target.closest('.site-header')) setExpanded(false); }); document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && isOpen()) setExpanded(false); }); }
