const additionalPortfolioProducts = [
  {
    type: 'website',
    label: 'Interactive web experience',
    title: 'The Bear Voice',
    image: './projects/bearVoice.png',
    alt: 'The Bear Voice interactive website screenshot',
    problem: 'The concept needed a memorable interactive experience that could demonstrate voice-driven engagement in a simple browser-based format.',
    changed: 'A focused web experience was created around voice interaction, themed audio, and a distinctive bear-centered presentation.',
    impact: 'A more engaging demonstration of interactive media capabilities with a clear, playful identity.',
    href: 'https://hligon35.github.io/thebearvoice/',
  },
  {
    type: 'systems',
    label: 'Digital business tool',
    title: 'MMBC',
    image: './projects/non-profit.png',
    alt: 'MMBC digital business card tool screenshot',
    problem: 'Users needed a faster way to create and share a professional digital business card without relying on scattered files or manual formatting.',
    changed: 'A customizable business card experience was organized around editable details, reusable layouts, and straightforward sharing.',
    impact: 'A more efficient way to present professional information and distribute it digitally.',
    href: 'https://hligon35.github.io/mmmbc/',
  },
];

function productCard(item) {
  return `
    <article class="portfolio-card" data-category="${item.type}">
      <picture>
        <img src="${item.image}" alt="${item.alt}" loading="lazy" decoding="async">
      </picture>
      <div class="portfolio-card__body">
        <span class="portfolio-label">${item.label}</span>
        <h3>${item.title}</h3>
        <div class="portfolio-card__details">
          <p><strong>Problem</strong><span>${item.problem}</span></p>
          <p><strong>What changed</strong><span>${item.changed}</span></p>
          <p><strong>Impact</strong><span>${item.impact}</span></p>
        </div>
        <a class="cta-btn secondary portfolio-card__button" href="${item.href}" target="_blank" rel="noreferrer">View Live Project</a>
      </div>
    </article>
  `;
}

export function addPortfolioProducts() {
  const grid = document.querySelector('.page-work .portfolio-grid');
  if (!grid) return;

  additionalPortfolioProducts.forEach((item) => {
    if (grid.querySelector(`[data-product-title="${item.title}"]`)) return;
    const template = document.createElement('template');
    template.innerHTML = productCard(item).trim();
    const card = template.content.firstElementChild;
    card.dataset.productTitle = item.title;
    grid.appendChild(card);
  });
}
