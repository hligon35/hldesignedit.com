import './style.css';
import './alpha-polish.css';
import './layout-repair.css';
import './service-layout-tweaks.css';
import './photo-gallery-grid.css';
import { renderPage } from './site.js';
import { addPortfolioProducts } from './portfolio-products.js';

renderPage('portfolio');
addPortfolioProducts();
useCurrentCedarImage();
initializePortfolioHoverDetails();

function useCurrentCedarImage() {
  document.querySelectorAll('.page-work .portfolio-card picture').forEach((picture) => {
    const image = picture.querySelector('img[src*="cedar&gold_lebanese.png"]');
    if (!image) return;
    picture.querySelectorAll('source').forEach((source) => source.remove());
  });
}

function initializePortfolioHoverDetails() {
  document.querySelectorAll('.page-work .portfolio-card').forEach((card) => {
    card.querySelector('.portfolio-card__toggle')?.remove();
    card.setAttribute('tabindex', '0');

    const details = card.querySelector('.portfolio-card__details');
    if (details) details.removeAttribute('aria-hidden');
  });
}
