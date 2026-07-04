(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function a(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=a(i);fetch(i.href,o)}})();const I=""+new URL("hldiLogo-BtyvKZxo.png",import.meta.url).href,h={name:"HLDesignedIt",email:"info@hldesignedit.com"},s={home:"./index.html",services:"./services.html",analyzer:"./analyzer.html",portfolio:"./portfolio.html",about:"./about.html",contact:"./contact.html"},T={hero:"./hero image.png",breakdown:"./web brkdwn.png"},_=[{key:"home",label:"Home",href:s.home},{key:"services",label:"Services",href:s.services},{key:"analyzer",label:"Analyzer",href:s.analyzer},{key:"portfolio",label:"Work",href:s.portfolio},{key:"about",label:"About",href:s.about},{key:"contact",label:"Start a Project",href:s.contact}],u={website:`${s.contact}?path=website`,automation:`${s.contact}?path=automation`,app:`${s.contact}?path=app`,strategy:`${s.contact}?path=strategy`},j=[{type:"website",label:"Service business website",title:"Black Bridge Mindset",image:"./projects/bbm.png",alt:"Black Bridge Mindset website screenshot",problem:"The business needed a site that looked established fast and made the offer easier to understand.",changed:"Clearer offer framing, stronger trust cues, and a booking path that felt more direct.",impact:"Stronger first impression, cleaner inquiry flow, and better support for qualified conversations.",href:"https://blackbridgemindset.com/"},{type:"website",label:"Restaurant website",title:"Cedar & Gold Lebanese Restaurant",image:"./projects/cedar&gold_lebanese.png",alt:"Cedar and Gold Lebanese restaurant website screenshot",webp:"./projects/cedar&gold_lebanese.webp",problem:"Visitors needed fast access to the menu, location details, and the basics that drive restaurant decisions.",changed:"Mobile-first layout, clearer page order, and business info placed where customers actually look first.",impact:"Better mobile usability, easier customer action, and a stronger first impression for new visitors.",href:"https://hligon35.github.io/cedarngoldlebanese/"},{type:"website",label:"Small business website",title:"Luxurious Cakes Indy",image:"./projects/luxurious_cakes.png",alt:"Luxurious Cakes Indy website screenshot",webp:"./projects/luxurious_cakes.webp",problem:"The business needed a site that made the product line easier to browse and the brand easier to trust.",changed:"Sharper product presentation, clearer browsing flow, and stronger local business positioning.",impact:"Better first impression, easier inquiry flow, and stronger support for quote-driven sales.",href:"https://www.luxuriouscakesindy.com/"},{type:"systems",label:"Organization website and system foundation",title:"Life Prep Academy Foundation",image:"./projects/life_prep_academy_foundation.png",alt:"Life Prep Academy Foundation website screenshot",webp:"./projects/life_prep_academy_foundation.webp",problem:"The organization needed a clearer way to explain its mission and make involvement feel easier.",changed:"Cleaner content hierarchy, stronger trust signals, and simpler access to program information.",impact:"More clarity for visitors, stronger trust, and easier support for community engagement.",href:"https://www.lifeprepacademyfoundation.com/"}],D=[{number:"01",title:"Websites & Online Presence",copy:"New websites, redesigns, landing pages, local SEO, AI-ready content structure, and stronger conversion paths for businesses that need to look credible and get contacted.",features:["New business websites","Website redesigns and fixes","Landing pages and lead capture","Local SEO and AI-ready structure"],href:u.website,cta:"Start a Website Project"},{number:"02",title:"Business Automation",copy:"Automated workflows that reduce repetitive work, connect forms, spreadsheets, reminders, lead follow-up, and back-office processes.",features:["Make and Zapier workflows","Registration and reminder systems","Form-to-spreadsheet automations","Email and SMS follow-up flows"],href:u.automation,cta:"Automate a Workflow"},{number:"03",title:"Custom Apps & Digital Tools",copy:"Simple apps, portals, dashboards, admin tools, and data collection systems built around the way the business actually operates.",features:["Internal dashboards","Client or participant portals","Registration tools","Admin panels and lightweight web apps"],href:u.app,cta:"Build a Tool"},{number:"04",title:"Digital Strategy & Systems",copy:"Planning and cleanup for businesses that need the right tools, cleaner workflows, and a practical digital roadmap before they build.",features:["Workflow mapping","Tech stack cleanup","Launch planning","Digital process consulting"],href:u.strategy,cta:"Plan My System"}],F={home:{bodyClass:"page-home",main:`
      <section class="hero-section hero-section--home">
        <div class="hero-shell">
          <div class="hero-copy">
            <p class="eyebrow">Digital systems for businesses ready to work smarter</p>
            <h1>Websites, automation, apps, and digital tools built around how your business works.</h1>
            <p class="hero-lead">HLDesignedIt creates clear, credible websites and practical digital systems for small businesses that need more inquiries.</p>
            <div class="hero-actions">
              <a href="${s.contact}" class="cta-btn primary">Start a Project</a>
              <a href="${s.analyzer}" class="cta-btn secondary">Analyze My Website</a>
            </div>
            <div class="hero-proof">
              <span>Websites & landing pages</span>
              <span>Automation systems</span>
              <span>Custom apps & tools</span>
            </div>
          </div>
          <aside class="hero-panel" aria-label="Digital solution preview">
            <div class="hero-panel__card hero-panel__card--image">
              <img class="section-visual__image" src="${T.hero}" alt="Digital solution preview shown across desktop and mobile screens" loading="eager" decoding="async" />
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

      ${G()}
      ${C()}

      <section class="services-section">
        <div class="section-header">
          <p class="eyebrow">What we build</p>
          <h2>Digital solutions that connect your online presence, operations, and customer flow.</h2>
          <p class="section-subtitle">Alpha Zone Labs keeps the current website service alive and expands it into a broader system-building offer for businesses.</p>
        </div>
        <div class="services-grid">${Y()}</div>
      </section>

      <section class="process-section">
        <div class="section-header">
          <p class="eyebrow">Process</p>
          <h2>Simple process. Practical build. Clear launch path.</h2>
          <p class="section-subtitle">Whether the project is a website, automation, app, or workflow cleanup, the goal is to build something useful and easy to operate.</p>
        </div>
        <div class="process-grid">${U()}</div>
      </section>

      <section class="portfolio-section">
        <div class="section-header">
          <p class="eyebrow">Selected work</p>
          <h2>Existing website work remains part of the Alpha Zone Labs foundation.</h2>
          <p class="section-subtitle">These projects show the current website and digital presence work that continues under the new Alpha Zone Labs brand.</p>
        </div>
        <div class="portfolio-grid">${B(j.slice(0,3))}</div>
      </section>

      ${v("Ready to build a better digital system?","Start with the problem: a weak website, a manual process, an app idea, or a workflow that needs to be cleaned up.",s.contact,"Start a Project",s.analyzer,"Analyze My Website")}
    `},services:{bodyClass:"page-interior",main:`
      ${g("services","Services","Websites, automations, apps, and digital systems for businesses.","Alpha Zone Labs keeps the full website service in place while expanding the offer into automation, custom tools, and workflow systems.")}
      <section class="content-section">
        <div class="section-header section-header--left">
          <p class="eyebrow">Core offers</p>
          <h2>Choose the solution that matches the business problem.</h2>
          <p class="section-subtitle">Some businesses need a professional website. Some need automation. Some need a custom tool. Many need all three connected into one smoother system.</p>
        </div>
        <div class="detail-grid detail-grid--services">
          ${D.map(e=>`
            <article class="detail-card">
              <p class="service-kicker">${e.number}</p>
              <h2>${e.title}</h2>
              <p>${e.copy}</p>
              <ul class="service-features">${e.features.map(t=>`<li>${t}</li>`).join("")}</ul>
              <a class="inline-link" href="${e.href}">${e.cta}</a>
            </article>
          `).join("")}
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

      ${C()}
      ${v("Need a website, automation, app, or a better business workflow?","Tell us what feels messy, manual, outdated, or disconnected. We will help shape the right digital solution.",s.contact,"Start a Project",s.analyzer,"Run the Analyzer")}
    `},analyzer:{bodyClass:"page-interior page-contact",main:`
      ${g("analyzer","Digital Presence Analyzer","Keep the website analyzer live under the Alpha Zone Labs name.","Use the analyzer to review where your current website may be losing trust, clarity, visibility, or leads.")}
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
              <img class="section-visual__image" src="${T.breakdown}" alt="Website analyzer graphic showing clarity and conversion issues" loading="lazy" />
              <p class="section-visual__caption">The analyzer supports the same mission: make the website clearer, more credible, and easier to act on.</p>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Digital Presence Analyzer form">
            <div class="section-header section-header--left">
              <h2>Analyze Your Website</h2>
              <p class="section-subtitle">Enter the basics and the analyzer request will stay connected to the existing backend path.</p>
            </div>
            ${Q()}
          </div>
        </div>
      </section>
    `},portfolio:{bodyClass:"page-interior",main:`
      ${g("portfolio","Work","Website and digital presence work that supports clearer business action.","The current work examples stay live as proof of the website side of Alpha Zone Labs while the brand expands into automation and apps.")}
      <section class="portfolio-section portfolio-section--interior">
        <div class="portfolio-filters">
          <button class="filter-btn active" data-filter="all">All</button>
          <button class="filter-btn" data-filter="website">Websites</button>
          <button class="filter-btn" data-filter="systems">Systems</button>
        </div>
        <div class="portfolio-grid">${B(j,!0)}</div>
      </section>
      ${v("Want your business to show up with this level of clarity?","Start with a website, automation, app, or a full digital system plan.",s.contact,"Start a Project",s.analyzer,"Analyze My Site")}
    `},about:{bodyClass:"page-interior",main:`
      ${g("about","About Alpha Zone Labs","A digital solutions lab built to help businesses work smarter online and behind the scenes.","Formerly HL Design Edit, Alpha Zone Labs expands the mission from website design into complete digital solutions for businesses.")}
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
      ${v("Have a digital problem that needs a clear solution?","Tell us what you are trying to build, fix, automate, or connect.",s.contact,"Start a Project",s.services,"Explore Services")}
    `},contact:{bodyClass:"page-interior page-contact",main:`
      ${g("contact","Start a Project","Tell Alpha Zone Labs what you need to build, fix, automate, or connect.","Choose the project type that fits your business right now. Website work is still active, and automation, apps, and digital workflow projects are now part of the offer.")}
      <section class="contact-section contact-section--page">
        <div class="contact-layout">
          <div class="contact-copy">
            <p class="eyebrow">Project fit</p>
            <h2>Start with the business problem. We will help shape the digital solution.</h2>
            <p>Maybe you need a new website. Maybe your current site needs to convert better. Maybe your registration process, follow-up, forms, or internal workflow needs automation. Send the basics and we will review the best path.</p>
            <div class="contact-benefits">
              <div class="contact-benefit"><strong>Website projects:</strong><span>New sites, redesigns, landing pages, local SEO, AI-ready structure, and conversion fixes.</span></div>
              <div class="contact-benefit"><strong>System projects:</strong><span>Automation, custom tools, dashboards, portals, and workflow cleanup.</span></div>
              <div class="contact-benefit"><strong>Email:</strong><span><a href="mailto:${h.email}">${h.email}</a></span></div>
            </div>
          </div>
          <div class="basic-contact-card" aria-label="Project request form">
            <div class="section-header section-header--left">
              <h2>Project Request</h2>
              <p class="section-subtitle">Choose the closest fit. You do not need to have every detail figured out.</p>
            </div>
            ${K()}
          </div>
        </div>
      </section>
    `}};function oe(e){const t=document.querySelector("#app");if(!t){document.body.innerHTML="<h1>App failed to load.</h1>";return}const a=F[e];if(!a){document.body.innerHTML="<h1>Page not found.</h1>";return}document.body.className=a.bodyClass||"",t.innerHTML=`${N()}${Z(e)}<main>${a.main}</main>${R()}`,V()}function N(){return`
    <div class="partner-banner" role="note" aria-label="Marketing partner link">
      <div class="partner-banner__content">Need marketing after your digital system is built? <a class="partner-banner__link" href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital can help with campaign support.</a></div>
    </div>
  `}function Z(e){return`
    <div class="header-logo" aria-label="Site logo">
      <div class="header-logo__inner">
        <a class="header-logo__link" href="${s.home}" aria-label="Go home">
          <img class="header-logo__img" src="${I}" alt="${h.name} logo" loading="eager" decoding="async" />
        </a>
      </div>
    </div>
    <header class="site-header">
      <nav class="nav-container" aria-label="Main navigation">
        <div id="mobile-nav" class="nav-links">
          ${_.map(t=>`<a href="${t.href}" class="nav-link${t.key===e?" is-active":""}"${t.key===e?' aria-current="page"':""}>${t.label}</a>`).join("")}
          <a href="${s.contact}" class="cta-btn nav-cta">Start a Project</a>
          <a href="${s.analyzer}" class="cta-btn secondary nav-cta nav-cta--secondary">Analyze Site</a>
        </div>
      </nav>
      <button class="nav-hamburger" type="button" aria-label="Open menu" aria-controls="mobile-nav" aria-expanded="false"><span class="nav-hamburger__lines" aria-hidden="true"><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span><span class="nav-hamburger__line"></span></span></button>
    </header>
  `}function R(){return`
    <footer class="footer">
      <div class="footer-inner">
        <div class="footer-cta">
          <div class="footer-cta__text"><h3>Build the website, workflow, app, or digital system your business needs next.</h3><p>Alpha Zone Labs helps businesses turn scattered digital pieces into systems that are clearer, smarter, and easier to use.</p></div>
          <div class="footer-cta__actions"><a href="${s.contact}" class="cta-btn primary">Start a Project</a><a href="${s.analyzer}" class="cta-btn secondary">Analyze My Site</a></div>
        </div>
        <div class="footer-grid" aria-label="Footer navigation">
          <div class="footer-col"><h4>Navigation</h4>${_.map(e=>`<a href="${e.href}">${e.label}</a>`).join("")}</div>
          <div class="footer-col"><h4>Services</h4><a href="${s.services}">Websites & Online Presence</a><a href="${s.services}">Business Automation</a><a href="${s.services}">Custom Apps & Tools</a><a href="${s.services}">Digital Strategy</a></div>
          <div class="footer-col"><h4>Tools</h4><a href="${s.analyzer}">Digital Presence Analyzer</a><a href="${s.portfolio}">Selected Work</a><a href="${s.about}">About Alpha Zone Labs</a></div>
          <div class="footer-col"><h4>Contact</h4><a href="mailto:${h.email}">${h.email}</a><a href="https://github.com/hligon35" target="_blank" rel="noopener">GitHub</a><a href="https://www.getsparqd.com" target="_blank" rel="noopener">SparQ Digital</a></div>
        </div>
        <div class="footer-bottom"><a class="footer-backtotop" href="#top">Back to top</a><div class="footer-partner">Formerly HL Design Edit. Website services remain active under Alpha Zone Labs.</div><div class="footer-legal">© <span id="footer-year">2026</span> ${h.name}</div></div>
      </div>
    </footer>
  `}function g(e,t,a,r){return`
    <section class="page-hero">
      <div class="page-hero__inner">
        ${H(e)}
        <p class="eyebrow">${t}</p>
        <h1>${a}</h1>
        <p class="hero-lead">${r}</p>
      </div>
    </section>
  `}function H(e){const t=_.find(a=>a.key===e);return t?`<nav class="breadcrumbs" aria-label="Breadcrumb"><ol class="breadcrumbs__list"><li class="breadcrumbs__item"><a href="${s.home}">Home</a></li><li class="breadcrumbs__item" aria-current="page">${t.label}</li></ol></nav>`:""}function Y(){return D.map(e=>`
    <article class="service-card">
      <p class="service-kicker">${e.number}</p>
      <h3>${e.title}</h3>
      <p>${e.copy}</p>
      <ul class="service-features">${e.features.slice(0,3).map(t=>`<li>${t}</li>`).join("")}</ul>
      <a class="inline-link" href="${e.href}">${e.cta}</a>
    </article>
  `).join("")}function U(){return`
    <article class="process-card"><span class="process-number">01</span><h3>Discover</h3><p>We learn how the business works, what is slowing it down, and what the digital solution needs to accomplish.</p></article>
    <article class="process-card"><span class="process-number">02</span><h3>Design the system</h3><p>We map the website, automation, app, or workflow so the build has a clear purpose.</p></article>
    <article class="process-card"><span class="process-number">03</span><h3>Build and connect</h3><p>We create the digital solution and connect the pieces that need to work together.</p></article>
    <article class="process-card"><span class="process-number">04</span><h3>Launch and improve</h3><p>We test the system, launch it, and refine the experience based on real business use.</p></article>
  `}function G(){return`
    <section class="user-path-section">
      <div class="section-header"><p class="eyebrow">Choose your path</p><h2>Start with the digital problem you need solved.</h2><p class="section-subtitle">The site now supports the current website service and the broader Alpha Zone Labs offers.</p></div>
      <div class="user-path-grid">
        <article class="user-path-card"><p class="user-path-card__label">Website</p><h3>I need a website or redesign</h3><p>Build, fix, or improve a website so the business looks credible and captures better leads.</p><a href="${u.website}" class="cta-btn primary">Start Website Project</a></article>
        <article class="user-path-card"><p class="user-path-card__label">Automation</p><h3>I need to save time</h3><p>Connect forms, sheets, reminders, emails, and follow-up so repetitive work happens automatically.</p><a href="${u.automation}" class="cta-btn primary">Automate My Workflow</a></article>
        <article class="user-path-card"><p class="user-path-card__label">Analyzer</p><h3>I need to check my current site</h3><p>Use the Digital Presence Analyzer to identify clarity, trust, SEO, and conversion opportunities.</p><a href="${s.analyzer}" class="cta-btn primary">Analyze My Website</a></article>
      </div>
    </section>
  `}function C(){return`
    <section class="best-fit-section">
      <div class="section-header">
        <p class="eyebrow">Digital Presence Analyzer</p>
        <h2>The site analyzer stays live under the Alpha Zone Labs brand.</h2>
        <p class="section-subtitle">Use it to review a current website for clarity, trust signals, search readiness, mobile usability, and conversion opportunities before deciding what to fix.</p>
      </div>
      <div class="section-cta section-cta--dual"><a href="${s.analyzer}" class="cta-btn primary">Analyze My Website</a><a href="${u.website}" class="cta-btn secondary">Fix or Rebuild My Site</a></div>
    </section>
  `}function B(e,t=!1){return e.map((a,r)=>`
    <article class="portfolio-card${r===0&&t?" featured":""}" data-type="${a.type}">
      <div class="portfolio-image">${a.webp?`<picture><source srcset="${a.webp}" type="image/webp"><img src="${a.image}" alt="${a.alt}" loading="lazy" /></picture>`:`<img src="${a.image}" alt="${a.alt}" loading="lazy" />`}</div>
      <div class="portfolio-content">
        <p class="portfolio-label">${a.label}</p><h3>${a.title}</h3>
        <p class="portfolio-desc"><strong>Business need:</strong> ${a.problem}</p>
        <p class="portfolio-desc"><strong>What improved:</strong> ${a.changed}</p>
        <p class="portfolio-desc"><strong>What this supported:</strong> ${a.impact}</p>
        <div class="portfolio-actions"><a href="${a.href}" class="btn btn-primary" target="_blank" rel="noopener">View Live Site</a></div>
      </div>
    </article>
  `).join("")}function v(e,t,a,r,i,o){return`
    <section class="cta-section"><div class="cta-panel"><div><p class="eyebrow">Next step</p><h2>${e}</h2><p>${t}</p></div><div class="cta-panel__actions"><a href="${a}" class="cta-btn primary">${r}</a><a href="${i}" class="cta-btn secondary">${o}</a></div></div></section>
  `}function K(){return`
    <form id="basic-contact-form" class="basic-contact-form" novalidate>
      <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" />
      <div class="form-group">
        <label class="form-label required">What do you need?</label>
        <div class="request-path-grid" role="radiogroup" aria-label="Project type">
          ${w("website","Website","Website, redesign, landing page, SEO, or conversion fix")}
          ${w("automation","Automation","Forms, reminders, follow-up, sheets, or workflow automation")}
          ${w("app","App or tool","Dashboard, portal, registration system, or custom business tool")}
          ${w("strategy","Strategy","Workflow cleanup, tech stack planning, or digital roadmap")}
        </div>
      </div>
      <div class="form-row"><div class="form-group"><label class="form-label required" for="contact-name">Name</label><input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required /></div><div class="form-group"><label class="form-label required" for="contact-email">Email</label><input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required /></div></div>
      <div class="form-row"><div class="form-group"><label class="form-label required" for="contact-business">Business Name</label><input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required /></div><div class="form-group"><label class="form-label" for="contact-website">Website</label><input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" /></div></div>
      <div class="form-group"><label id="contact-message-label" class="form-label required" for="contact-message">What do you need help with?</label><p id="contact-form-note" class="form-note">Tell us what feels outdated, manual, disconnected, or ready to build.</p><textarea id="contact-message" name="message" class="form-textarea" placeholder="Share the goal, current problem, and what you want the digital solution to make easier." required></textarea></div>
      <div class="basic-contact-actions"><button type="submit" class="cta-btn primary">Send Project Request</button><p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p></div>
    </form>
  `}function Q(){return`
    <form id="basic-contact-form" class="basic-contact-form" data-form-kind="analyzer" novalidate>
      <input type="text" name="company" tabindex="-1" autocomplete="off" aria-hidden="true" class="honeypot" />
      <input type="hidden" name="requestType" value="analyzer" />
      <div class="form-row"><div class="form-group"><label class="form-label required" for="contact-name">Name</label><input id="contact-name" name="name" type="text" class="form-input" autocomplete="name" placeholder="Your name" required /></div><div class="form-group"><label class="form-label required" for="contact-email">Email</label><input id="contact-email" name="email" type="email" class="form-input" autocomplete="email" placeholder="you@example.com" required /></div></div>
      <div class="form-group"><label class="form-label required" for="contact-business">Business Name</label><input id="contact-business" name="businessName" type="text" class="form-input" autocomplete="organization" placeholder="Your business" required /></div>
      <div class="form-group"><label class="form-label required" for="contact-website">Website to Analyze</label><input id="contact-website" name="website" type="url" class="form-input" autocomplete="url" placeholder="https://yourwebsite.com" required /></div>
      <div class="form-group"><label id="contact-message-label" class="form-label" for="contact-message">What are you worried about?</label><p id="contact-form-note" class="form-note">Examples: weak leads, outdated design, poor mobile experience, unclear services, SEO, or AI search visibility.</p><textarea id="contact-message" name="message" class="form-textarea" placeholder="Tell us what you want the analyzer to pay attention to."></textarea></div>
      <div class="basic-contact-actions"><button type="submit" class="cta-btn primary">Run Website Analyzer</button><p id="basic-contact-status" class="basic-contact-status" aria-live="polite"></p></div>
    </form>
  `}function w(e,t,a){return`<label class="request-path-card" for="request-type-${e}"><input id="request-type-${e}" name="requestType" type="radio" value="${e}" /><span class="request-path-card__eyebrow">${t}</span><strong>${t}</strong><span>${a}</span></label>`}function V(){requestAnimationFrame(()=>{ee(),te(),se()}),setTimeout(()=>{X(),ae(),J()},100)}function J(){const e=document.getElementById("basic-contact-form");if(!e)return;const t=document.getElementById("basic-contact-status"),a=e.querySelector('button[type="submit"]'),r=document.getElementById("contact-name"),i=document.getElementById("contact-email"),o=document.getElementById("contact-business"),l=document.getElementById("contact-website"),b=document.getElementById("contact-message"),k=Array.from(e.querySelectorAll('input[name="requestType"]')),M=Array.from(e.querySelectorAll(".request-path-card")),q=new URLSearchParams(window.location.search).get("path"),L=["website","automation","app","strategy","analyzer"],z=L.includes(q)?q:"",O=()=>window.location.hostname==="localhost"||window.location.hostname==="127.0.0.1"?"http://127.0.0.1:8787/api/forms":"https://hldesignedit.hligon.workers.dev/api/forms",d=c=>{t&&(t.textContent=c)},$=()=>{M.forEach(c=>{const n=c.querySelector('input[name="requestType"]');c.classList.toggle("is-selected",!!(n!=null&&n.checked))})};if(z){const c=k.find(n=>n.value===z);c&&(c.checked=!0)}$(),k.forEach(c=>c.addEventListener("change",()=>{$(),d("")})),e.addEventListener("submit",c=>{var E;c.preventDefault();const n=new FormData(e),W=e.dataset.formKind||"project",p=String(n.get("requestType")||"").trim(),x=String(n.get("name")||"").trim(),S=String(n.get("email")||"").trim(),A=String(n.get("businessName")||"").trim(),f=String(n.get("website")||"").trim(),y=String(n.get("message")||"").trim();if(!L.includes(p)){d("Choose what you need help with."),(E=k[0])==null||E.focus();return}if(!x){d("Enter your name."),r==null||r.focus();return}if(!S||!/^\S+@\S+\.\S+$/.test(S)){d("Enter a valid email address."),i==null||i.focus();return}if(!A){d("Enter your business name."),o==null||o.focus();return}if(p==="analyzer"&&!f){d("Enter the website you want analyzed."),l==null||l.focus();return}if(W!=="analyzer"&&!y){d("Tell us what you need help with."),b==null||b.focus();return}a instanceof HTMLButtonElement&&(a.disabled=!0,d(p==="analyzer"?"Sending analyzer request...":"Sending project request..."),fetch(O(),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({formType:W,honeypot:String(n.get("company")||""),pageUrl:window.location.href,data:{requestType:p,fullName:x,email:S,businessName:A,website:f,projectTitle:p==="analyzer"?"Digital Presence Analyzer Request":`Alpha Zone Labs ${p} Request`,projectSummary:y||`Analyze ${f}`,message:y,details:`Request Type: ${p}
Business: ${A}${f?`
Website: ${f}`:""}

Message: ${y||"Analyzer request submitted."}`}})}).then(async P=>{const m=await P.json().catch(()=>null);if(!P.ok||!(m!=null&&m.ok))throw new Error((m==null?void 0:m.error)||"Unable to send request.");d(p==="analyzer"?"Analyzer request sent. We will review the site and reply by email.":"Project request sent. We will review it and reply by email."),e.reset(),$()}).catch(()=>{d(`Could not send right now. Email ${h.email}.`)}).finally(()=>{a.disabled=!1}))})}function X(){const e=document.getElementById("footer-year");e&&(e.textContent=new Date().getFullYear().toString())}function ee(){const e=document.querySelector(".portfolio-filters"),t=document.querySelectorAll(".filter-btn"),a=document.querySelectorAll(".portfolio-card");!e||!t.length||!a.length||e.addEventListener("click",r=>{const i=r.target.closest(".filter-btn");if(!i)return;t.forEach(l=>l.classList.remove("active")),i.classList.add("active");const o=(i.dataset.filter||"all").trim().toLowerCase();requestAnimationFrame(()=>{a.forEach(l=>{const b=(l.dataset.type||"").trim().toLowerCase();l.style.display=o==="all"||b===o?"":"none"})})})}function te(){document.addEventListener("click",e=>{e.target.closest('a[href="#top"]')&&(e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"}))})}function ae(){const e=document.querySelector(".site-header");if(!e)return;let t=!1;const a=()=>{e.classList.toggle("is-scrolled",window.scrollY>30),t=!1};window.addEventListener("scroll",()=>{t||(requestAnimationFrame(a),t=!0)},{passive:!0})}function se(){const e=document.querySelector(".site-header"),t=e==null?void 0:e.querySelector(".nav-hamburger"),a=document.getElementById("mobile-nav");if(!e||!t||!a)return;const r=()=>e.classList.contains("is-menu-open"),i=o=>{e.classList.toggle("is-menu-open",o),t.setAttribute("aria-expanded",String(o)),t.setAttribute("aria-label",o?"Close menu":"Open menu")};t.addEventListener("click",o=>{o.preventDefault(),i(!r())}),a.addEventListener("click",o=>{o.target.closest("a")&&i(!1)}),document.addEventListener("click",o=>{r()&&!o.target.closest(".site-header")&&i(!1)}),document.addEventListener("keydown",o=>{o.key==="Escape"&&r()&&i(!1)})}export{oe as r};
