import hldiLogoUrl from '../hldiLogo.png?url';

const pagePaths = {
  home: './index.html',
  services: './services.html',
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
  { key: 'portfolio', label: 'Portfolio', href: pagePaths.portfolio },
  { key: 'about', label: 'About', href: pagePaths.about },
  { key: 'contact', label: 'Contact', href: pagePaths.contact },
];

const contactRoutes = {
  start: `${pagePaths.contact}?path=new`,
  fix: `${pagePaths.contact}?path=fix`,
  quote: `${pagePaths.contact}?path=new`,
  audit: `${pagePaths.contact}?path=fix`,
};

const portfolioItems = [
  {
    type: 'service',
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
    type: 'food',
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
    type: 'food',
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
    type: 'organization',
    label: 'Organization website',
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

const pages = {
  home: {
    bodyClass: 'page-home',
    main: `
      <section class="hero-section hero-section--home">
        <div class="hero-shell">
          <div class="hero-copy">
            <p class="eyebrow">For local service businesses, coaches, restaurants, nonprofits, and small brands</p>
            <h1>No website? I'll build it. Have one already? I'll fix it.</h1>
            <p class="hero-lead">
              Whether you need a website built from scratch or your current one fixed, I help business owners create a site that looks credible and supports more calls, quote requests, bookings, and inquiries.
            </p>
            <div class="hero-actions">
              <a href="${contactRoutes.start}" class="cta-btn primary">Start Your Website</a>
              <a href="${contactRoutes.fix}" class="cta-btn secondary">Fix My Website</a>
            </div>
            <div class="hero-proof">
              <span>Built from scratch</span>
              <span>Fixes weak inquiry flow</span>
              <span>Supports calls, quotes, and bookings</span>
            </div>
          </div>

          <aside class="hero-panel" aria-label="Online presence outcomes preview">
            <div class="hero-panel__card hero-panel__card--image">
              <img class="section-visual__image" src="${mediaPaths.hero}" alt="Website mockup shown on desktop and mobile screens" loading="eager" decoding="async" />
              <p class="section-visual__caption">A stronger first impression on desktop and mobile helps the business look more established from the first visit.</p>
            </div>
            <div class="hero-panel__card hero-panel__card--primary">
              <p class="hero-panel__label">Two ways businesses usually show up here</p>
              <ul class="hero-panel__list">
                <li>No website yet and no real online home</li>
                <li>A website exists, but it is not bringing in leads</li>
                <li>People are finding the business but not taking action</li>
              </ul>
            </div>
            <div class="hero-panel__card">
              <p class="hero-panel__label">What the site should help support</p>
              <div class="hero-panel__stats">
                <div>
                  <strong>Stronger credibility</strong>
                  <span>The business should look real, current, and worth contacting.</span>
                </div>
                <div>
                  <strong>Clearer offer</strong>
                  <span>Visitors should know what you do and what to do next without hunting.</span>
                </div>
                <div>
                  <strong>More lead capture</strong>
                  <span>The site should make it easier to inquire, call, book, or request a quote.</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </section>

      ${userPathSection()}

      ${bestFitSection()}

      <section class="problem-section">
        <div class="section-header">
          <p class="eyebrow">Where businesses usually get stuck</p>
          <h2>The problem is usually simple: no website, or the wrong website.</h2>
          <p class="section-subtitle">
            Some businesses are invisible because they do not have a real website yet. Others are online already, but the current site is too weak to build trust or produce leads.
          </p>
        </div>
        <div class="problem-grid">
          <article class="problem-card">
            <h3>No website means no real online home</h3>
            <p>If people can only find a social profile or a placeholder page, the business looks smaller and harder to trust.</p>
          </article>
          <article class="problem-card">
            <h3>Your current website is not earning inquiries</h3>
            <p>You are online, but the site is not doing its job. It looks fine, yet leads stay flat.</p>
          </article>
          <article class="problem-card">
            <h3>The message is too unclear</h3>
            <p>If visitors cannot tell what you do fast, they leave before the page has a chance to help.</p>
          </article>
          <article class="problem-card">
            <h3>The next step is buried or weak</h3>
            <p>No clear call to action means no clear path to contact, quote requests, or booked calls.</p>
          </article>
        </div>
      </section>

      <section class="services-section">
        <div class="section-header">
          <p class="eyebrow">Services</p>
          <h2>Services for businesses that need a stronger online home or a stronger website.</h2>
          <p class="section-subtitle">
            Clear offers for business owners who either need a website from scratch or need their current one to stop wasting attention, trust, and inquiries.
          </p>
        </div>
        <div class="services-grid">
          ${serviceCards()}
        </div>
        <div class="section-cta section-cta--dual">
          <a href="${contactRoutes.start}" class="cta-btn primary">Start Your Website</a>
          <a href="${contactRoutes.fix}" class="cta-btn secondary">Fix My Website</a>
        </div>
      </section>

      <section class="about-section">
        <div class="about-layout">
          <div class="about-copy">
            <p class="eyebrow">Why business owners hire me</p>
            <h2>I build websites that help the business look more credible and make customer action easier.</h2>
            <p>
              I am not here to sell you a trendy layout and hope for the best. I look at your website like a business tool.
              If you do not have one yet, the job is to get you online fast with something credible and usable. If you already have one, the job is to fix what is blocking trust and leads.
            </p>
            <p>
              My approach is blunt on purpose: clarify the offer, tighten the structure, improve the user path, and make it easier for the right people to call, book, request a quote, or send an inquiry.
            </p>
          </div>
          <div class="about-points">
            <article class="about-point">
              <h3>Business-first thinking</h3>
              <p>I care about what the site is supposed to support: stronger credibility, easier inquiry flow, and better-quality leads.</p>
            </article>
            <article class="about-point">
              <h3>Clear strategy</h3>
              <p>I understand what needs to be on the page, what can wait, and how to match the website to the stage the business is actually in.</p>
            </article>
            <article class="about-point">
              <h3>Specific decisions</h3>
              <p>No fluff, no generic digital-solution language, no endless jargon. You get direct recommendations and clean execution.</p>
            </article>
          </div>
        </div>
        <div class="trust-strip trust-strip--home">
          <div class="trust-item"><strong>Best fit</strong><span>Local service businesses, coaches, consultants, restaurants, nonprofits, and small brands that need a stronger first impression.</span></div>
          <div class="trust-item"><strong>What clients usually come for</strong><span>No website yet, weak redesigns, confusing messaging, poor mobile usability, and inquiry flow that is too weak.</span></div>
          <div class="trust-item"><strong>What the work focuses on</strong><span>Clearer offers, stronger trust signals, easier customer action, and a cleaner path to calls, bookings, and quote requests.</span></div>
          <div class="trust-item"><strong>What makes the approach different</strong><span>The work starts with the business need, not with design trends or generic filler copy.</span></div>
        </div>
        <div class="section-cta section-cta--dual">
          <a href="${contactRoutes.start}" class="cta-btn primary">Start Your Website</a>
          <a href="${contactRoutes.fix}" class="cta-btn secondary">Fix My Website</a>
        </div>
      </section>

      <section class="portfolio-section">
        <div class="section-header">
          <p class="eyebrow">Selected work</p>
          <h2>Website work that improved clarity, trust, and customer action.</h2>
          <p class="section-subtitle">
            These examples are here to show the kind of businesses I work with and the kind of improvements the website was built to support.
          </p>
        </div>
        <div class="portfolio-grid">
          ${portfolioCards(portfolioItems.slice(0, 3))}
        </div>
        <div class="section-cta section-cta--dual">
          <a href="${contactRoutes.fix}" class="cta-btn primary">Fix My Website</a>
          <a href="${contactRoutes.start}" class="cta-btn secondary">Start Your Website</a>
        </div>
      </section>

      <section class="process-section">
        <div class="section-header">
          <p class="eyebrow">Process</p>
          <h2>A simple process that works for both paths.</h2>
          <p class="section-subtitle">Whether the business needs a brand-new site or a stronger version of the one it already has, the workflow stays direct.</p>
        </div>
        <div class="process-grid">
          ${processCards()}
        </div>
      </section>

      ${ctaPanel(
        'No website? I will build it. Have one already? I will fix it.',
        'The goal is the same either way: an online presence that makes the business look credible and makes it easier to bring in leads.',
        contactRoutes.start,
        'Start Your Website',
        contactRoutes.fix,
        'Fix My Website'
      )}
    `,
  },
  services: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('services', 'Services', 'Website services for business owners who either need to get online or need their current site fixed.', 'If you do not have a website yet, I build the full online presence. If you already have one, I fix the parts that are costing you trust and leads.')}
      <section class="content-section">
        <div class="service-group">
          <div class="section-header section-header--left">
            <p class="eyebrow">For businesses without a website</p>
            <h2>Get online with something that looks credible and helps people contact you.</h2>
            <p class="section-subtitle">If you are starting from scratch, the point is not to just “have a website.” The point is to give the business a real online presence that makes trust and lead capture easier.</p>
          </div>
          <div class="detail-grid detail-grid--services">
            <article class="detail-card">
              <p class="service-kicker">01</p>
              <h2>Website Builds</h2>
              <p>A full website for businesses that need a clear, credible place online where people can understand the offer and reach out.</p>
              <ul class="service-features">
                <li>Clear offer and message from the first screen</li>
                <li>Mobile-ready layout that looks established</li>
                <li>Contact flow built to turn attention into inquiries</li>
              </ul>
            </article>
            <article class="detail-card">
              <p class="service-kicker">02</p>
              <h2>Online Presence Setup</h2>
              <p>A complete setup to get your business online and visible, not just another half-finished page with no plan behind it.</p>
              <ul class="service-features">
                <li>Website build that gives the business a real online home</li>
                <li>Mobile optimization so the site works where most people actually browse</li>
                <li>Basic SEO setup so the business is easier to find</li>
                <li>Contact and lead capture system so visitors can take the next step</li>
                <li>Optional Google Business Profile setup for local visibility</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="service-group">
          <div class="section-header section-header--left">
            <p class="eyebrow">For businesses with a website</p>
            <h2>Fix the site you already have so it stops leaking trust and leads.</h2>
            <p class="section-subtitle">If the current website feels outdated, vague, or dead, the fix is usually better structure, stronger messaging, and a clearer path to action.</p>
          </div>
          <div class="detail-grid detail-grid--three">
            <article class="detail-card">
              <p class="service-kicker">03</p>
              <h2>Website Redesigns</h2>
              <p>For businesses with a site that exists but looks dated, feels unclear, or undersells the business the moment someone lands on it.</p>
              <ul class="service-features">
                <li>Stronger first impression and cleaner trust signals</li>
                <li>Clearer page flow so people stop guessing</li>
                <li>Better path to quote requests, calls, or form submissions</li>
              </ul>
            </article>
            <article class="detail-card">
              <p class="service-kicker">04</p>
              <h2>Conversion Optimization</h2>
              <p>Fix the parts of your current site that are wasting attention and making visitors leave without taking action.</p>
              <ul class="service-features">
                <li>Sharper calls to action and page hierarchy</li>
                <li>Less confusion between message and next step</li>
                <li>More qualified inquiries from the traffic you already have</li>
              </ul>
            </article>
            <article class="detail-card">
              <p class="service-kicker">05</p>
              <h2>Landing Pages</h2>
              <p>Focused pages for one offer, one service, or one campaign where the goal is simple: get the right person to act.</p>
              <ul class="service-features">
                <li>One message and one next step instead of scattered options</li>
                <li>Better support for promotions, ads, or service-specific offers</li>
                <li>Cleaner lead capture without extra friction</li>
              </ul>
            </article>
          </div>
        </div>

        <div class="section-visual section-visual--split">
          <div class="section-visual__copy">
            <p class="eyebrow">Conversion path</p>
            <h2>Good website work should make the path from visitor to lead easier to follow.</h2>
            <p>The site does not need more clutter. It needs a clearer message, a clearer next step, and fewer places for attention to die before someone contacts the business.</p>
          </div>
          <div class="section-visual__frame">
            <img class="section-visual__image" src="${mediaPaths.conversion}" alt="Diagram showing a website conversion flow from visitor to website to lead form" loading="lazy" />
          </div>
        </div>
      </section>

      <section class="insight-section">
        <div class="section-header">
          <p class="eyebrow">What these services fix</p>
          <h2>Most businesses do not need more features. They need the right website for where they are right now.</h2>
          <p class="section-subtitle">If you want proof first, review the <a class="inline-link" href="${pagePaths.portfolio}">portfolio examples</a>. If you are ready to move, choose the path that fits: <a class="inline-link" href="${contactRoutes.start}">start your website</a> or <a class="inline-link" href="${contactRoutes.fix}">fix the current one</a>.</p>
        </div>
        <div class="problem-grid">
          <article class="problem-card"><h3>No online home</h3><p>Without a real website, the business is harder to find, harder to trust, and easier to skip.</p></article>
          <article class="problem-card"><h3>Weak first impression</h3><p>If the site looks outdated or unclear, the business feels smaller than it is.</p></article>
          <article class="problem-card"><h3>Confusing page flow</h3><p>Good websites guide attention. Weak ones make people work too hard to understand the offer.</p></article>
          <article class="problem-card"><h3>Lead loss</h3><p>If the next step is vague, hidden, or weak, the traffic you already have turns into nothing.</p></article>
        </div>
      </section>

      ${ctaPanel(
        'Choose the path that matches the business.',
        'If you need a full build, start there. If the current website is the problem, fix that instead.',
        contactRoutes.start,
        'Start Your Website',
        contactRoutes.fix,
        'Fix My Website'
      )}
    `,
  },
  portfolio: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('portfolio', 'Portfolio', 'Website work framed around business impact, not random screenshots.', 'These projects show the kind of website work that helps service businesses, restaurants, and organizations look more established and make customer action easier.')}
      <section class="portfolio-section portfolio-section--interior">
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="service">Service Businesses</button>
          <button class="filter-btn" data-filter="food">Food & Hospitality</button>
          <button class="filter-btn" data-filter="organization">Organizations</button>
        </div>
        <div class="portfolio-grid">
          ${portfolioCards(portfolioItems, true)}
        </div>
        <div class="section-visual section-visual--split section-visual--proof">
          <div class="section-visual__copy">
            <p class="eyebrow">Before and after</p>
            <h2>Fixing a weak site usually means making the offer, layout, and CTA easier to understand fast.</h2>
            <p>The improvement is not just visual. It is about moving from vague messaging and cluttered pages to a site that looks more credible and guides people toward action.</p>
          </div>
          <div class="section-visual__frame">
            <img class="section-visual__image" src="${mediaPaths.beforeAfter}" alt="Before and after website comparison showing a weak layout transformed into a clearer business website" loading="lazy" />
          </div>
        </div>
      </section>
      <section class="trust-section">
        <div class="trust-strip">
          <div class="trust-item"><strong>Industries served</strong><span>Service businesses, restaurants, small brands, nonprofits, and organizations that need a clearer online presence.</span></div>
          <div class="trust-item"><strong>What the work improved</strong><span>Stronger first impression, clearer offer presentation, easier customer action, and better mobile usability.</span></div>
          <div class="trust-item"><strong>Proof style</strong><span>No fake metrics, no inflated claims. The language stays honest about what the work improved and what it helped support.</span></div>
          <div class="trust-item"><strong>Next step</strong><span>If your current website feels weak or unclear, <a class="inline-link" href="${contactRoutes.fix}">fix my website</a>. If you need a full build, <a class="inline-link" href="${contactRoutes.start}">start your website</a>.</span></div>
        </div>
      </section>
      ${ctaPanel(
        'If your business needs this kind of website work, the next step is simple.',
        'If you are starting from scratch, I can build the online presence. If you already have a site, I can fix the part that is killing results.',
        contactRoutes.start,
        'Start Your Website',
        contactRoutes.fix,
        'Fix My Website'
      )}
    `,
  },
  about: {
    bodyClass: 'page-interior',
    main: `
      ${pageHero('about', 'About', 'I help businesses get online from scratch or turn weak websites into lead-generating tools.', 'Some clients show up with no website at all. Others show up with a website that looks busy and produces nothing. The job is to fix the business problem, not decorate it.')}
      <section class="content-section">
        <div class="about-layout about-layout--interior">
          <div class="about-copy">
            <p class="eyebrow">Positioning</p>
            <h2>I do not treat websites like decoration.</h2>
            <p>I look at your website like a business tool. If the business is not online yet, the site needs to establish credibility fast. If the site already exists but does not convert, the structure, message, and CTA need work.</p>
            <p>That is the difference between a portfolio mindset and a business mindset. I build for clarity, credibility, and conversion. If you want the short version, review the <a class="inline-link" href="${pagePaths.services}">service breakdown</a> or see the <a class="inline-link" href="${pagePaths.portfolio}">website examples</a>.</p>
          </div>
          <div class="about-points">
            <article class="about-point"><h3>Blunt on purpose</h3><p>You get straight answers about what is wrong, what matters, and what can wait.</p></article>
            <article class="about-point"><h3>Analytical approach</h3><p>I care about messaging order, layout hierarchy, lead flow, and whether the site matches the stage the business is actually in.</p></article>
            <article class="about-point"><h3>Built for business owners</h3><p>This is not “hire me for dev work” positioning. It is website strategy and execution for businesses that either need to get online or need better outcomes from what they already have.</p></article>
          </div>
        </div>
      </section>
      <section class="insight-section">
        <div class="section-header">
          <p class="eyebrow">How I think</p>
          <h2>A website should answer three questions fast.</h2>
        </div>
        <div class="section-visual section-visual--split section-visual--compact">
          <div class="section-visual__copy">
            <p>The first part of strategy is usually diagnosis. Weak headlines, unclear calls to action, and confusing layouts are common because the page was never built around what the business actually needs the visitor to do.</p>
          </div>
          <div class="section-visual__frame">
            <img class="section-visual__image" src="${mediaPaths.breakdown}" alt="Website critique graphic highlighting weak headline, unclear CTA, and confusing layout" loading="lazy" />
          </div>
        </div>
        <div class="process-grid process-grid--wide">
          <article class="process-card"><span class="process-number">01</span><h3>What does this business do?</h3><p>If that is not obvious immediately, the site is losing attention.</p></article>
          <article class="process-card"><span class="process-number">02</span><h3>Why should someone trust it?</h3><p>Layout, tone, proof, and structure all shape trust before a word is spoken.</p></article>
          <article class="process-card"><span class="process-number">03</span><h3>What should the visitor do next?</h3><p>Every page needs a clear next step. If there is no direction, there is no conversion path.</p></article>
        </div>
      </section>
      ${ctaPanel(
        'If that approach sounds like what your business needs, choose the right path and move.',
        'Start with a new build if you have no website. Start with a fix if the current one is underperforming.',
        contactRoutes.start,
        'Start Your Website',
        contactRoutes.fix,
        'Fix My Website'
      )}
    `,
  },
  contact: {
    bodyClass: 'page-interior page-contact',
    main: `
      ${pageHero('contact', 'Contact', 'Start your website or fix the one you already have.', 'Choose the path that matches your business right now. If you need a new online presence, I will build it. If your current site is not getting leads, I will fix what is broken.')}
      <section class="contact-section contact-section--page">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="eyebrow">Best fit</p>
            <h2>This is for businesses that either need to get online or need their current site fixed.</h2>
            <p>If you have no website, I can build the full online presence. If you already have one and it is not producing inquiries, I can fix the message, structure, and lead path. If you need more context first, look at the <a class="inline-link" href="${pagePaths.services}">services</a> or the <a class="inline-link" href="${pagePaths.portfolio}">recent website work</a>.</p>
            <div class="contact-benefits">
              <div class="contact-benefit"><strong>Best for:</strong><span>New website builds, online presence setup, redesigns, landing pages, and conversion cleanup.</span></div>
              <div class="contact-benefit"><strong>What to send:</strong><span>Business name, whether you need a new website or a fix, and what outcome you want from the site.</span></div>
              <div class="contact-benefit"><strong>Reply:</strong><span>I will review the request and respond by email.</span></div>
            </div>
            <div class="contact-visual">
              <img class="section-visual__image" src="${mediaPaths.hero}" alt="Mockup of a business website displayed on desktop and mobile" loading="lazy" />
              <p class="section-visual__caption">The goal is simple: a website that looks established, works on every screen, and gives people a clear way to contact you.</p>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Website project form">
            <div class="section-header section-header--left">
              <h2>Start Your Website or Fix It</h2>
              <p class="section-subtitle">Prefer email? Reach me at <a href="mailto:info@hldesignedit.com">info@hldesignedit.com</a>.</p>
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
  app.innerHTML = `
    ${partnerBanner()}
    ${header(pageKey)}
    <main>${page.main}</main>
    ${footer()}
  `;

  initializeFeatures();
}

function partnerBanner() {
  return `
    <div class="partner-banner" role="note" aria-label="Marketing partner link">
      <div class="partner-banner__content">
        Need marketing after the site is built or fixed?
        <a class="partner-banner__link" href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital can handle that.</a>
      </div>
    </div>
  `;
}

function header(activeKey) {
  return `
    <div class="header-logo" aria-label="Site logo">
      <div class="header-logo__inner">
        <a class="header-logo__link" href="${pagePaths.home}" aria-label="Go to top">
          <img class="header-logo__img" src="${hldiLogoUrl}" alt="HLDI logo" loading="eager" decoding="async" />
        </a>
      </div>
    </div>
    <header class="site-header">
      <nav class="nav-container" aria-label="Main navigation">
        <div id="mobile-nav" class="nav-links">
          ${navigation.map((item) => `
            <a href="${item.href}" class="nav-link${item.key === activeKey ? ' is-active' : ''}"${item.key === activeKey ? ' aria-current="page"' : ''}>${item.label}</a>
          `).join('')}
          <a href="${contactRoutes.start}" class="cta-btn nav-cta">Start Your Website</a>
          <a href="${contactRoutes.fix}" class="cta-btn secondary nav-cta nav-cta--secondary">Fix My Website</a>
        </div>
      </nav>
      <button class="nav-hamburger" type="button" aria-label="Open menu" aria-controls="mobile-nav" aria-expanded="false">
        <span class="nav-hamburger__lines" aria-hidden="true">
          <span class="nav-hamburger__line"></span>
          <span class="nav-hamburger__line"></span>
          <span class="nav-hamburger__line"></span>
        </span>
      </button>
    </header>
  `;
}

function footer() {
  return `
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-cta">
          <div class="footer-cta__text">
            <h3>Your business either needs a website or needs a better one.</h3>
            <p>Start from scratch if you need to get online. Fix the current site if it is weak, unclear, or not bringing in leads.</p>
          </div>
          <div class="footer-cta__actions">
            <a href="${contactRoutes.start}" class="cta-btn primary">Start Your Website</a>
            <a href="${contactRoutes.fix}" class="cta-btn secondary">Fix My Website</a>
          </div>
        </div>
        <div class="footer-grid" aria-label="Footer navigation">
          <div class="footer-col">
            <h4>Navigation</h4>
            ${navigation.map((item) => `<a href="${item.href}">${item.label}</a>`).join('')}
          </div>
          <div class="footer-col">
            <h4>Services</h4>
            <a href="${pagePaths.services}">Website Builds</a>
            <a href="${pagePaths.services}">Online Presence Setup</a>
            <a href="${pagePaths.services}">Website Redesigns</a>
            <a href="${pagePaths.services}">Conversion Optimization</a>
            <a href="${pagePaths.services}">Landing Pages</a>
          </div>
          <div class="footer-col">
            <h4>Proof</h4>
            <a href="${pagePaths.portfolio}">Selected Work</a>
            <a href="${pagePaths.about}">Why Work With Me</a>
            <a href="${contactRoutes.quote}">Get a Quote</a>
          </div>
          <div class="footer-col">
            <h4>Elsewhere</h4>
            <a href="mailto:info@hldesignedit.com">info@hldesignedit.com</a>
            <a href="https://github.com/hligon35" target="_blank" rel="noopener">GitHub</a>
            <a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital</a>
          </div>
        </div>
        <div class="footer-bottom">
          <a class="footer-backtotop" href="#top">Back to top</a>
          <div class="footer-partner">Need traffic support too? <a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital</a></div>
          <div class="footer-legal">© <span id="footer-year">2026</span> Harold Ligon</div>
        </div>
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

  return `
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol class="breadcrumbs__list">
        <li class="breadcrumbs__item"><a href="${pagePaths.home}">Home</a></li>
        <li class="breadcrumbs__item" aria-current="page">${activeItem.label}</li>
      </ol>
    </nav>
  `;
}

function serviceCards() {
  return `
    <article class="service-card">
      <p class="service-kicker">01</p>
      <h3>Website Builds</h3>
      <p>For businesses that need a full website from scratch so people can find the business, trust it, and reach out.</p>
      <ul class="service-features"><li>Clear offer and page structure</li><li>Lead capture built into the flow</li><li>Mobile-ready from day one</li></ul>
    </article>
    <article class="service-card">
      <p class="service-kicker">02</p>
      <h3>Online Presence Setup</h3>
      <p>A complete setup to get your business online and visible with a proper website, lead capture, and search-ready basics.</p>
      <ul class="service-features"><li>Website build and mobile optimization</li><li>Basic SEO setup</li><li>Optional Google Business Profile support</li></ul>
    </article>
    <article class="service-card">
      <p class="service-kicker">03</p>
      <h3>Website Redesigns</h3>
      <p>For businesses with a website that looks dated, feels unclear, or makes the business look weaker than it is.</p>
      <ul class="service-features"><li>Stronger trust on first visit</li><li>Clearer message and layout</li><li>Better path to inquiries</li></ul>
    </article>
    <article class="service-card">
      <p class="service-kicker">04</p>
      <h3>Conversion Optimization</h3>
      <p>For businesses that already have traffic but need the website to do a better job turning that attention into leads.</p>
      <ul class="service-features"><li>Stronger calls to action</li><li>Cleaner lead flow</li><li>Less drop-off before contact</li></ul>
    </article>
  `;
}

function processCards() {
  return `
    <article class="process-card"><span class="process-number">01</span><h3>Pick the right path</h3><p>We start by deciding whether the business needs a full website build or a fix for what already exists.</p></article>
    <article class="process-card"><span class="process-number">02</span><h3>Clarify the offer</h3><p>We tighten the message, what matters most on the page, and the action visitors should take.</p></article>
    <article class="process-card"><span class="process-number">03</span><h3>Build or rebuild</h3><p>I create the site around credibility, mobile usability, lead capture, and clear structure.</p></article>
    <article class="process-card"><span class="process-number">04</span><h3>Launch with a lead path</h3><p>The finished site goes live with a cleaner way for people to inquire, book, or request a quote.</p></article>
  `;
}

function userPathSection() {
  return `
    <section class="user-path-section">
      <div class="section-header">
        <p class="eyebrow">Choose your path</p>
        <h2>Two different situations. Two clear starting points.</h2>
        <p class="section-subtitle">Do not lump both problems together. If you already have a website, the work is about fixing performance. If you do not have one, the work is about building the full online presence.</p>
      </div>
      <div class="user-path-grid">
        <article class="user-path-card">
          <p class="user-path-card__label">Path A</p>
          <h3>I already have a website</h3>
          <p>Your business is online, but the site is not doing enough. It is not getting leads, not building trust fast enough, or not making the next step obvious.</p>
          <a href="${contactRoutes.fix}" class="cta-btn primary">Fix My Website</a>
        </article>
        <article class="user-path-card">
          <p class="user-path-card__label">Path B</p>
          <h3>I don't have a website yet</h3>
          <p>You need a real online presence so people can find the business, understand the offer, and contact you without bouncing off a weak first impression.</p>
          <a href="${contactRoutes.start}" class="cta-btn primary">Start Your Website</a>
        </article>
      </div>
    </section>
  `;
}

function bestFitSection() {
  return `
    <section class="best-fit-section">
      <div class="section-header">
        <p class="eyebrow">Best fit</p>
        <h2>This site is built for business owners who need a clearer, more credible online presence.</h2>
        <p class="section-subtitle">If you are trying to look more established, make your offer easier to understand, and make customer action simpler, you are in the right place.</p>
      </div>
      <div class="best-fit-grid">
        <article class="best-fit-card"><h3>Local service businesses</h3><p>For businesses that need more calls, quote requests, and inquiry form submissions from the website.</p></article>
        <article class="best-fit-card"><h3>Coaches and consultants</h3><p>For offers that need clearer positioning, better trust, and a more direct path to booked conversations.</p></article>
        <article class="best-fit-card"><h3>Restaurants and food brands</h3><p>For brands that need stronger mobile usability, clearer browsing, and easier customer action.</p></article>
        <article class="best-fit-card"><h3>Nonprofits and community organizations</h3><p>For organizations that need to explain the mission clearly and make support or engagement easier.</p></article>
        <article class="best-fit-card"><h3>Small businesses building credibility</h3><p>For owners who need a stronger first impression than a social page, weak template, or outdated site can give them.</p></article>
      </div>
    </section>
  `;
}

function portfolioCards(items, includeFilters = false) {
  return items.map((item, index) => `
    <article class="portfolio-card${index === 0 && includeFilters ? ' featured' : ''}" data-type="${item.type}">
      <div class="portfolio-image">
        ${item.webp ? `
          <picture>
            <source srcset="${item.webp}" type="image/webp">
            <img src="${item.image}" alt="${item.alt}" loading="lazy" />
          </picture>
        ` : `<img src="${item.image}" alt="${item.alt}" loading="lazy" />`}
      </div>
      <div class="portfolio-content">
        <p class="portfolio-label">${item.label}</p>
        <h3>${item.title}</h3>
        <p class="portfolio-desc"><strong>Business need:</strong> ${item.problem}</p>
        <p class="portfolio-desc"><strong>What this improved:</strong> ${item.changed}</p>
        <p class="portfolio-desc"><strong>What this helped support:</strong> ${item.impact}</p>
        <div class="portfolio-actions">
          <a href="${item.href}" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a>
        </div>
      </div>
    </article>
  `).join('');
}

function ctaPanel(title, copy, primaryHref, primaryLabel, secondaryHref, secondaryLabel) {
  return `
    <section class="cta-section">
      <div class="cta-panel">
        <div>
          <p class="eyebrow">Call to action</p>
          <h2>${title}</h2>
          <p>${copy}</p>
        </div>
        <div class="cta-panel__actions">
          <a href="${primaryHref}" class="cta-btn primary">${primaryLabel}</a>
          <a href="${secondaryHref}" class="cta-btn secondary">${secondaryLabel}</a>
        </div>
      </div>
    </section>
  `;
}

function contactForm() {
  return `
    <form id="basic-contact-form" class="basic-contact-form" novalidate>
      <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" />
      <div class="form-group">
        <label class="form-label required">What do you need?</label>
        <div class="request-path-grid" role="radiogroup" aria-label="What do you need help with?">
          <label class="request-path-card" for="request-type-new">
            <input id="request-type-new" name="requestType" type="radio" value="new" />
            <span class="request-path-card__eyebrow">New website</span>
            <strong>I need a new website</strong>
            <span>Build the online presence from scratch and make it easy for people to contact the business.</span>
          </label>
          <label class="request-path-card" for="request-type-fix">
            <input id="request-type-fix" name="requestType" type="radio" value="fix" />
            <span class="request-path-card__eyebrow">Current website</span>
            <strong>I need help with my current website</strong>
            <span>Fix the weak message, weak structure, or weak conversion path that is costing you leads.</span>
          </label>
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label required" for="contact-name">Name</label>
          <input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required />
        </div>
        <div class="form-group">
          <label class="form-label required" for="contact-email">Email</label>
          <input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required />
        </div>
      </div>
      <div class="form-row">
        <div class="form-group">
          <label class="form-label required" for="contact-business">Business Name</label>
          <input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required />
        </div>
        <div class="form-group" data-request-visible="new" hidden>
          <label class="form-label" for="contact-google-profile">Need Google Business Profile setup too?</label>
          <select id="contact-google-profile" name="googleBusinessProfile" class="form-input">
            <option value="">Not sure yet</option>
            <option value="yes">Yes, include it</option>
            <option value="no">No, website only</option>
          </select>
        </div>
      </div>
      <div class="form-group" data-request-visible="fix" hidden>
        <label class="form-label required" for="contact-website">Current Website</label>
        <input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" />
      </div>
      <div class="form-group">
        <label id="contact-message-label" class="form-label required" for="contact-message">What do you need help with?</label>
        <p id="contact-form-note" class="form-note">Pick the path above and keep it simple. Tell me the business goal and what the website needs to do.</p>
        <textarea id="contact-message" name="message" class="form-textarea" placeholder="Tell me what your business does, what you need online, and what should happen when someone lands on the site." required></textarea>
      </div>
      <div class="basic-contact-actions">
        <button type="submit" class="cta-btn primary">Get a Quote</button>
        <p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p>
      </div>
    </form>
  `;
}

function initializeFeatures() {
  requestAnimationFrame(() => {
    initPortfolioFilters();
    initBackToTop();
    initMobileNav();
  });

  setTimeout(() => {
    initFooterYear();
    initScrollOptimizations();
    initBasicContactForm();
  }, 100);
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
  const messageLabel = document.getElementById('contact-message-label');
  const formNote = document.getElementById('contact-form-note');
  const requestInputs = Array.from(form.querySelectorAll('input[name="requestType"]'));
  const requestCards = Array.from(form.querySelectorAll('.request-path-card'));
  const conditionalGroups = Array.from(form.querySelectorAll('[data-request-visible]'));
  const requestedPath = new URLSearchParams(window.location.search).get('path');
  const defaultRequestType = requestedPath === 'new' || requestedPath === 'fix' ? requestedPath : '';

  const getFormsEndpoint = () => {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    return isLocal ? 'http://127.0.0.1:8787/api/forms' : 'https://hldesignedit.hligon.workers.dev/api/forms';
  };

  const setStatus = (text) => {
    if (status) status.textContent = text;
  };

  const applyRequestType = (type) => {
    requestCards.forEach((card) => {
      const input = card.querySelector('input[name="requestType"]');
      card.classList.toggle('is-selected', Boolean(input?.checked));
    });

    conditionalGroups.forEach((group) => {
      const isVisible = group.dataset.requestVisible === type;
      group.hidden = !isVisible;
    });

    if (websiteInput instanceof HTMLInputElement) {
      websiteInput.required = type === 'fix';
    }

    if (messageLabel && messageInput instanceof HTMLTextAreaElement && submitBtn instanceof HTMLButtonElement) {
      if (type === 'fix') {
        messageLabel.textContent = 'What is your current website not doing?';
        messageInput.placeholder = 'Tell me what is broken: weak leads, outdated design, confusing layout, poor conversion, buried CTA, or anything else that feels off.';
        submitBtn.textContent = 'Fix My Website';
        if (formNote) formNote.textContent = 'Include your current website and what feels weak or unclear.';
      } else if (type === 'new') {
        messageLabel.textContent = 'What does your business need online?';
        messageInput.placeholder = 'Tell me what your business does, what pages you need, and what should happen when someone lands on the site.';
        submitBtn.textContent = 'Start Your Website';
        if (formNote) formNote.textContent = 'Keep it simple. Tell me what the business does and what the website needs to help you accomplish.';
      } else {
        messageLabel.textContent = 'What do you need help with?';
        messageInput.placeholder = 'Tell me what your business needs online or what your current website is failing to do.';
        submitBtn.textContent = 'Get a Quote';
        if (formNote) formNote.textContent = 'Pick the path above and keep it simple. Tell me the business goal and what the website needs to do.';
      }
    }
  };

  if (defaultRequestType) {
    const defaultInput = requestInputs.find((input) => input.value === defaultRequestType);
    if (defaultInput) defaultInput.checked = true;
  }

  applyRequestType(defaultRequestType);

  requestInputs.forEach((input) => {
    input.addEventListener('change', () => {
      applyRequestType(input.value);
      setStatus('');
    });
  });

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const data = new FormData(form);
    const requestType = String(data.get('requestType') || '').trim();
    const name = String(data.get('name') || '').trim();
    const email = String(data.get('email') || '').trim();
    const businessName = String(data.get('businessName') || '').trim();
    const website = String(data.get('website') || '').trim();
    const googleBusinessProfile = String(data.get('googleBusinessProfile') || '').trim();
    const message = String(data.get('message') || '').trim();

    if (requestType !== 'new' && requestType !== 'fix') {
      setStatus('Choose whether you need a new website or help with your current one.');
      requestInputs[0]?.focus();
      return;
    }

    if (!name) {
      setStatus('Enter your name.');
      nameInput?.focus();
      return;
    }

    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      setStatus('Enter a valid email address.');
      emailInput?.focus();
      return;
    }

    if (!businessName) {
      setStatus('Enter your business name.');
      businessInput?.focus();
      return;
    }

    if (requestType === 'fix' && !website) {
      setStatus('Enter your current website.');
      websiteInput?.focus();
      return;
    }

    if (!message) {
      setStatus('Tell me what you need help with.');
      messageInput?.focus();
      return;
    }

    if (!(submitBtn instanceof HTMLButtonElement)) return;

    submitBtn.disabled = true;
    setStatus(requestType === 'fix' ? 'Sending website fix request...' : 'Sending new website request...');

    fetch(getFormsEndpoint(), {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        formType: 'project',
        honeypot: String(data.get('company') || ''),
        pageUrl: window.location.href,
        data: {
          requestType,
          fullName: name,
          email,
          businessName,
          website,
          googleBusinessProfile,
          projectTitle: requestType === 'fix' ? 'Fix My Website Request' : 'Start Your Website Request',
          projectSummary: message,
          message,
          details: `Request Type: ${requestType === 'fix' ? 'Fix my current website' : 'Start a new website'}\nBusiness: ${businessName}${website ? `\nCurrent Website: ${website}` : ''}${googleBusinessProfile ? `\nGoogle Business Profile Setup: ${googleBusinessProfile}` : ''}\n\nNeeds: ${message}`,
        },
      }),
    })
      .then(async (response) => {
        const payload = await response.json().catch(() => null);
        if (!response.ok || !payload?.ok) {
          throw new Error(payload?.error || 'Unable to send request.');
        }

        setStatus('Request sent. I will review it and reply by email.');
        form.reset();
        if (defaultRequestType) {
          const defaultInput = requestInputs.find((input) => input.value === defaultRequestType);
          if (defaultInput) defaultInput.checked = true;
        }
        applyRequestType(defaultRequestType);
      })
      .catch(() => {
        setStatus('Could not send right now. Email info@hldesignedit.com.');
      })
      .finally(() => {
        submitBtn.disabled = false;
      });
  });
}

function initFooterYear() {
  const yearElement = document.getElementById('footer-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear().toString();
  }
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
  const updateHeader = () => {
    headerElement.classList.toggle('is-scrolled', window.scrollY > 30);
    ticking = false;
  };

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(updateHeader);
      ticking = true;
    }
  }, { passive: true });
}

function initMobileNav() {
  const headerElement = document.querySelector('.site-header');
  const toggleButton = headerElement?.querySelector('.nav-hamburger');
  const navLinks = document.getElementById('mobile-nav');

  if (!headerElement || !toggleButton || !navLinks) return;

  const isOpen = () => headerElement.classList.contains('is-menu-open');
  const setExpanded = (open) => {
    headerElement.classList.toggle('is-menu-open', open);
    toggleButton.setAttribute('aria-expanded', String(open));
    toggleButton.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  };

  toggleButton.addEventListener('click', (event) => {
    event.preventDefault();
    setExpanded(!isOpen());
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target.closest('a')) {
      setExpanded(false);
    }
  });

  document.addEventListener('click', (event) => {
    if (!isOpen()) return;
    if (!event.target.closest('.site-header')) {
      setExpanded(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && isOpen()) {
      setExpanded(false);
    }
  });
}