import './style.css';
import './alpha-polish.css';
import './layout-repair.css';
import './service-layout-tweaks.css';
import './photo-gallery-grid.css';
import { renderPage } from './site.js';
import { addPortfolioProducts } from './portfolio-products.js';

renderPage('portfolio');
addPortfolioProducts();
initializePortfolioDetails();

function initializePortfolioDetails() {
  document.querySelectorAll('.page-work .portfolio-card').forEach((card, index) => {
    const details = card.querySelector('.portfolio-card__details');
    if (!details || card.querySelector('.portfolio-card__toggle')) return;

    const detailsId = `portfolio-details-${index + 1}`;
    details.id = detailsId;
    details.setAttribute('aria-hidden', 'true');

    const toggle = document.createElement('button');
    toggle.type = 'button';
    toggle.className = 'portfolio-card__toggle';
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-controls', detailsId);
    toggle.textContent = 'Show Details';

    details.before(toggle);

    toggle.addEventListener('click', () => {
      const isOpen = details.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      details.setAttribute('aria-hidden', String(!isOpen));
      toggle.textContent = isOpen ? 'Hide Details' : 'Show Details';
    });
  });
}
