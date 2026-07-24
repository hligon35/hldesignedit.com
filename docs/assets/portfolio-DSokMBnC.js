import{r as n}from"./site-DGaqb7ik.js";const s=[{type:"website",label:"Interactive web experience",title:"The Bear Voice",image:"./projects/bearVoice.png",alt:"The Bear Voice interactive website screenshot",problem:"The concept needed a memorable interactive experience that could demonstrate voice-driven engagement in a simple browser-based format.",changed:"A focused web experience was created around voice interaction, themed audio, and a distinctive bear-centered presentation.",impact:"A more engaging demonstration of interactive media capabilities with a clear, playful identity.",href:"https://hligon35.github.io/thebearvoice/"},{type:"systems",label:"Digital business tool",title:"MMBC",image:"./projects/non-profit.png",alt:"MMBC digital business card tool screenshot",problem:"Users needed a faster way to create and share a professional digital business card without relying on scattered files or manual formatting.",changed:"A customizable business card experience was organized around editable details, reusable layouts, and straightforward sharing.",impact:"A more efficient way to present professional information and distribute it digitally.",href:"https://hligon35.github.io/mmmbc/"}];function l(e){return`
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
  `}function c(){const e=document.querySelector(".page-work .portfolio-grid");e&&s.forEach(o=>{if(e.querySelector(`[data-product-title="${o.title}"]`))return;const t=document.createElement("template");t.innerHTML=l(o).trim();const r=t.content.firstElementChild;r.dataset.productTitle=o.title,e.appendChild(r)})}n("portfolio");c();d();function d(){document.querySelectorAll(".page-work .portfolio-card").forEach((e,o)=>{const t=e.querySelector(".portfolio-card__details");if(!t||e.querySelector(".portfolio-card__toggle"))return;const r=`portfolio-details-${o+1}`;t.id=r,t.setAttribute("aria-hidden","true");const a=document.createElement("button");a.type="button",a.className="portfolio-card__toggle",a.setAttribute("aria-expanded","false"),a.setAttribute("aria-controls",r),a.textContent="Show Details",t.before(a),a.addEventListener("click",()=>{const i=t.classList.toggle("is-open");a.setAttribute("aria-expanded",String(i)),t.setAttribute("aria-hidden",String(!i)),a.textContent=i?"Hide Details":"Show Details"})})}
