import './style.css';
import './alpha-polish.css';
import './contact-path.css';
import { renderPage } from './site.js';

renderPage('contact');

const contactSection = document.querySelector('.contact-section--page');

if (contactSection) {
  contactSection.innerHTML = `
    <div class="project-path-shell">
      <div class="project-path-intro">
        <p class="eyebrow">Choose your starting point</p>
        <h2>Are we creating something new or improving what already exists?</h2>
        <p>Select the path that best matches your business. Each option opens a short, guided form designed to collect only the information needed for that type of project.</p>
      </div>

      <div class="project-path-grid" aria-label="Project starting options">
        <article class="project-path-card project-path-card--new">
          <div class="project-path-number">01</div>
          <p class="project-path-kicker">New business or new idea</p>
          <h3>Start From Scratch</h3>
          <p>Choose this when you do not have an existing website or system, or when the business needs a completely new digital foundation.</p>
          <ul>
            <li>Tell us what the business does</li>
            <li>Define the audience and primary goals</li>
            <li>Select the website, booking, store, or system features needed</li>
            <li>Share budget and launch expectations</li>
          </ul>
          <a class="cta-btn primary project-path-button" href="https://quote.alphazonelabs.com/start.html">Start From Scratch</a>
        </article>

        <article class="project-path-card project-path-card--better">
          <div class="project-path-number">02</div>
          <p class="project-path-kicker">Existing website, app, or workflow</p>
          <h3>Build It Better</h3>
          <p>Choose this when you already use a website, booking platform, storefront, software, or manual process that needs to work better.</p>
          <ul>
            <li>Identify the platforms currently in use</li>
            <li>Select the features you rely on</li>
            <li>Show what is costing too much or causing friction</li>
            <li>Define what the improved system should accomplish</li>
          </ul>
          <a class="cta-btn primary project-path-button" href="https://quote.alphazonelabs.com/">Build It Better</a>
        </article>
      </div>

      <div class="project-path-help">
        <strong>Not sure which path fits?</strong>
        <span>Choose <em>Build It Better</em> when you already have tools or a website. Choose <em>Start From Scratch</em> when the digital experience has not been created yet.</span>
        <a href="mailto:info@alphazonelabs.com">info@alphazonelabs.com</a>
      </div>
    </div>
  `;
}