import './style.css';
import './alpha-polish.css';
import './layout-repair.css';
import './reviews.css';
import { renderPage } from './site.js';
import { renderPublishedReviews } from './reviews.js';

renderPage('home');
renderPublishedReviews();