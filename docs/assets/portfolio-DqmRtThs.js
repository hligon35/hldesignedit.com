import{r as o}from"./site-DGaqb7ik.js";const i=[{type:"website",label:"Interactive web experience",title:"The Bear Voice",image:"./projects/bearVoice.png",alt:"The Bear Voice interactive website screenshot",problem:"The concept needed a memorable interactive experience that could demonstrate voice-driven engagement in a simple browser-based format.",changed:"A focused web experience was created around voice interaction, themed audio, and a distinctive bear-centered presentation.",impact:"A more engaging demonstration of interactive media capabilities with a clear, playful identity.",href:"https://hligon35.github.io/thebearvoice/"},{type:"systems",label:"Digital business tool",title:"MMBC",image:"./projects/non-profit.png",alt:"MMBC digital business card tool screenshot",problem:"Users needed a faster way to create and share a professional digital business card without relying on scattered files or manual formatting.",changed:"A customizable business card experience was organized around editable details, reusable layouts, and straightforward sharing.",impact:"A more efficient way to present professional information and distribute it digitally.",href:"https://hligon35.github.io/mmmbc/"}];function n(e){return`
    <article class="portfolio-card" data-category="${e.type}">
      <picture>
        <img src="${e.image}" alt="${e.alt}" loading="lazy" decoding="async">
      </picture>
      <div class="portfolio-card__body">
        <span class="portfolio-label">${e.label}</span>
        <h3>${e.title}</h3>
        <div class="portfolio-card__details">
          <p><strong>Problem</strong><span>${e.problem}</span></p>
          <p><strong>What changed</strong><span>${e.changed}</span></p>
          <p><strong>Impact</strong><span>${e.impact}</span></p>
        </div>
        <a class="cta-btn secondary portfolio-card__button" href="${e.href}" target="_blank" rel="noreferrer">View Live Project</a>
      </div>
    </article>
  `}function s(){const e=document.querySelector(".page-work .portfolio-grid");e&&i.forEach(t=>{if(e.querySelector(`[data-product-title="${t.title}"]`))return;const a=document.createElement("template");a.innerHTML=n(t).trim();const r=a.content.firstElementChild;r.dataset.productTitle=t.title,e.appendChild(r)})}o("portfolio");s();l();function l(){document.querySelectorAll(".page-work .portfolio-card").forEach(e=>{var a;(a=e.querySelector(".portfolio-card__toggle"))==null||a.remove(),e.setAttribute("tabindex","0");const t=e.querySelector(".portfolio-card__details");t&&t.removeAttribute("aria-hidden")})}
