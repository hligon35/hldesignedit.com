const slideshowProjects = [
  {
    title: 'Black Bridge Mindset',
    image: './projects/bbm.png',
    alt: 'Black Bridge Mindset website screenshot',
    href: 'https://blackbridgemindset.com/',
  },
  {
    title: 'Cedar & Gold Lebanese Restaurant',
    image: './projects/cedar&gold_lebanese.png',
    alt: 'Cedar and Gold Lebanese restaurant website screenshot',
    href: 'https://hligon35.github.io/cedarngoldlebanese/',
  },
  {
    title: 'Luxurious Cakes Indy',
    image: './projects/luxurious_cakes.png',
    alt: 'Luxurious Cakes Indy website screenshot',
    href: 'https://www.luxuriouscakesindy.com/',
  },
  {
    title: 'Life Prep Academy Foundation',
    image: './projects/life_prep_academy_foundation.png',
    alt: 'Life Prep Academy Foundation website screenshot',
    href: 'https://www.lifeprepacademyfoundation.com/',
  },
  {
    title: 'The Bear Voice',
    image: './projects/bearVoice.png',
    alt: 'The Bear Voice interactive website screenshot',
    href: 'https://hligon35.github.io/thebearvoice/',
  },
  {
    title: 'MMBC',
    image: './projects/non-profit.png',
    alt: 'MMBC digital business card tool screenshot',
    href: 'https://hligon35.github.io/mmmbc/',
  },
];

export function initializeCompleteWorkSlideshow() {
  const slider = document.querySelector('.work-showcase-slider');
  if (!slider) return;

  slider.innerHTML = slideshowProjects.map((project, index) => `
    <a
      class="work-showcase-slide${index === 0 ? ' is-active' : ''}"
      href="${project.href}"
      target="_blank"
      rel="noreferrer"
      aria-hidden="${index === 0 ? 'false' : 'true'}"
    >
      <picture>
        <img
          src="${project.image}"
          alt="${project.alt}"
          loading="${index === 0 ? 'eager' : 'lazy'}"
          decoding="async"
        >
      </picture>
      <span>${project.title}</span>
    </a>
  `).join('');

  const slides = [...slider.querySelectorAll('.work-showcase-slide')];
  if (slides.length < 2) return;

  let activeIndex = 0;
  window.setInterval(() => {
    slides[activeIndex].classList.remove('is-active');
    slides[activeIndex].setAttribute('aria-hidden', 'true');
    activeIndex = (activeIndex + 1) % slides.length;
    slides[activeIndex].classList.add('is-active');
    slides[activeIndex].setAttribute('aria-hidden', 'false');
  }, 3000);
}
