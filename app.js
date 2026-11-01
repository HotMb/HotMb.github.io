const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('#nav-links');
if (toggle && menu) {
  const setOpen = open => {
    toggle.setAttribute('aria-expanded', String(open));
    menu.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.addEventListener('click', event => { if (event.target.closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
      setOpen(false);
      toggle.focus();
    }
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 700) setOpen(false); }, { passive: true });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
if ('IntersectionObserver' in window && !reduceMotion.matches) {
  const sections = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  }), { threshold: 0.05, rootMargin: '0px 0px -16px 0px' });
  document.documentElement.classList.add('motion-ready');
  sections.forEach(section => observer.observe(section));
  document.addEventListener('focusin', event => {
    const section = event.target.closest('.reveal');
    if (section) { section.classList.add('is-visible'); observer.unobserve(section); }
  });
  reduceMotion.addEventListener('change', event => {
    if (event.matches) { observer.disconnect(); document.documentElement.classList.remove('motion-ready'); }
  });
}
