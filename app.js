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
    if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); }
  });
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
