import{r as l}from"./site-C73MOgaS.js";const o="https://review.alphazonelabs.com/api/reviews/published";function i(e=""){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#039;")}function c(e){const s=Math.max(1,Math.min(5,Number(e.rating||5)));return`
    <article class="published-review-card">
      <p class="published-review-stars" aria-label="${s} out of 5 stars">${"★".repeat(s)}${"☆".repeat(5-s)}</p>
      <blockquote>“${i(e.review_text)}”</blockquote>
      <p class="published-review-name">${i(e.customer_name||"Alpha Zone Labs customer")}</p>
    </article>
  `}async function n(){if(!document.body.classList.contains("page-home"))return;const e=document.querySelector(".footer");if(e)try{const s=await fetch(o,{headers:{Accept:"application/json"}});if(!s.ok)return;const r=await s.json(),a=Array.isArray(r.reviews)?r.reviews:[];if(!a.length)return;const t=document.createElement("section");t.className="published-reviews-section",t.setAttribute("aria-labelledby","customer-reviews-title"),t.innerHTML=`
      <div class="published-reviews-shell">
        <div class="published-reviews-heading">
          <p class="eyebrow">Customer feedback</p>
          <h2 id="customer-reviews-title">What clients say.</h2>
          <p>Approved feedback from businesses and organizations that have worked with Alpha Zone Labs.</p>
        </div>
        <div class="published-reviews-grid">${a.slice(0,6).map(c).join("")}</div>
      </div>
    `,e.before(t)}catch{}}l("home");n();
