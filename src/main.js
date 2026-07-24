import './style.css';
import './alpha-polish.css';
import './layout-repair.css';
import './service-layout-tweaks.css';
import './reviews.css';
import { renderPage } from './site.js';
import { renderPublishedReviews } from './reviews.js';
import { initializeCompleteWorkSlideshow } from './home-work-slideshow.js';

renderPage('home');
initializeCompleteWorkSlideshow();
renderPublishedReviews();
