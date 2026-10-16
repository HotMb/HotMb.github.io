document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("has-js");

const menuButton = document.querySelector(".menu-toggle");
const menu = document.querySelector("#nav-links");
const menuLinks = menu?.querySelectorAll("a") ?? [];
const siteNav = document.querySelector(".site-nav");
const observedSections = [...document.querySelectorAll("main section[id]")];

function setMenuOpen(isOpen) {
  if (!menuButton || !menu) return;
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  menu.classList.toggle("is-open", isOpen);
  document.body.classList.toggle("menu-open", isOpen);
}

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

menuLinks.forEach((link) => {
  link.addEventListener("click", () => setMenuOpen(false));
});

// Preserve the original portfolio's scroll-aware navigation and navbar treatment.
function updateScrollNavigation() {
  siteNav?.classList.toggle("is-scrolled", window.scrollY > 50);
  const currentSection = observedSections.reduce((current, section) => {
    return window.scrollY + 120 >= section.offsetTop ? section : current;
  }, null);

  menuLinks.forEach((link) => {
    const isCurrent = link.getAttribute("href") === (currentSection ? `#${currentSection.id}` : "");
    link.classList.toggle("is-active", isCurrent);
  });
}

let navFramePending = false;
window.addEventListener("scroll", () => {
  if (navFramePending) return;
  navFramePending = true;
  window.requestAnimationFrame(() => {
    updateScrollNavigation();
    navFramePending = false;
  });
}, { passive: true });
updateScrollNavigation();

window.addEventListener("resize", () => {
  if (window.innerWidth > 760) setMenuOpen(false);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") setMenuOpen(false);
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Original portfolio motion: reveal sections as they enter the viewport.
const revealItems = document.querySelectorAll("[data-reveal]");
if (reducedMotion || !("IntersectionObserver" in window)) {
  revealItems.forEach((item) => item.classList.add("animate"));
} else {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const delay = Number(entry.target.dataset.delay) || 0;
      window.setTimeout(() => entry.target.classList.add("animate"), delay);
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

  revealItems.forEach((item) => revealObserver.observe(item));
}

// Keep the original typewriter treatment for Otmane's name.
const typingText = document.querySelector("#typing-text");
const cursor = document.querySelector("#cursor");
if (typingText && cursor) {
  if (reducedMotion) {
    cursor.hidden = true;
  } else {
    const name = "Otmane Mabrouk";
    const characters = Array.from(name);
    let position = 0;
    typingText.textContent = "";

    function typeNextCharacter() {
      if (position < characters.length) {
        typingText.textContent += characters[position];
        position += 1;
        window.setTimeout(typeNextCharacter, 150);
      } else {
        window.setTimeout(() => { cursor.hidden = true; }, 1000);
      }
    }

    window.setTimeout(typeNextCharacter, 1000);
  }
}

// Keep the original parallax movement on the hero background.
const heroBackground = document.querySelector(".hero-background");
if (heroBackground && !reducedMotion) {
  let framePending = false;
  window.addEventListener("scroll", () => {
    if (framePending) return;
    framePending = true;
    window.requestAnimationFrame(() => {
      heroBackground.style.transform = `translateY(${window.pageYOffset * 0.3}px)`;
      framePending = false;
    });
  }, { passive: true });
}

const year = document.querySelector("#current-year");
if (year) year.textContent = String(new Date().getFullYear());

