import './style.css';
import './alpha-polish.css';
import './layout-repair.css';
import './service-layout-tweaks.css';
import './photo-gallery-grid.css';
import { renderPage } from './site.js';
import { addPortfolioProducts } from './portfolio-products.js';

renderPage('portfolio');
addPortfolioProducts();
