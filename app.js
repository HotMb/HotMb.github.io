const projectsData = [
    {
        "id": "centre-saoufi-rdv",
        "title": "Gestion interne des rendez-vous — Centre Saoufi",
        "type": "Projet réalisé en stage",
        "shortDescription": "Contribution à une application interne de gestion des rendez-vous pour un centre de rééducation.",
        "fullDescription": "Pendant mon stage au Centre Saoufi, j’ai contribué à une application interne destinée à organiser les rendez-vous et les tâches du personnel. Le projet s’appuie sur une interface React et une API Express avec Prisma et PostgreSQL. L’application reste privée et n’utilise aucune démonstration de données patients.",
        "technologies": [
            "React",
            "TypeScript",
            "Express",
            "Prisma",
            "PostgreSQL"
        ],
        "features": [
            "Contribution à une application métier utilisée en interne",
            "Organisation de la gestion des rendez-vous",
            "Interface web et API connectée à une base relationnelle",
            "Code et données de démonstration non publics"
        ],
        "demoUrl": "",
        "demoStatus": "Application interne · code non public"
    },
    {
        "id": "guardian-autopilot",
        "title": "Guardian Autopilot",
        "type": "Outil développeur",
        "shortDescription": "Un outil local qui inspecte un dépôt et prépare un plan de nettoyage contrôlé.",
        "fullDescription": "Prototype local-first pour comprendre les fichiers d’un dépôt avant de les toucher : inventaire et empreintes SHA-256, détection de doublons, résolution des références entre fichiers, puis plan de nettoyage en lecture seule. Les essais d’automatisation se font dans un worktree Git isolé, avec vérifications requises.",
        "technologies": [
            "Node.js",
            "TypeScript",
            "Git",
            "MCP"
        ],
        "features": [
            "Analyse des fichiers et de leurs références",
            "Plan de nettoyage consultable avant action",
            "Expérimentation dans un worktree isolé",
            "Outil en bêta, sans démo web publique"
        ],
        "githubLink": "https://github.com/HotMb/guardian-autopilot",
        "demoUrl": "",
        "demoStatus": "Outil local en bêta · pas de démo web publique"
    },
    {
        "id": "magensy",
        "title": "Magensy",
        "type": "Site vitrine",
        "shortDescription": "Un site de présentation d’entreprise construit avec Next.js, TypeScript et Tailwind CSS.",
        "fullDescription": "Site de présentation des services de l’entreprise, construit avec Next.js, TypeScript et Tailwind CSS. Le build de production passe dans la branche de revue. Le déploiement public et le raccordement du formulaire restent à faire.",
        "technologies": [
            "Next.js",
            "TypeScript",
            "Tailwind CSS",
            "GitHub Actions"
        ],
        "features": [
            "Pages de présentation des services",
            "Export statique préparé pour GitHub Pages",
            "Build de production validé dans la branche de revue",
            "Formulaire à connecter avant publication"
        ],
        "githubLink": "https://github.com/HotMb/Magensy",
        "demoUrl": "",
        "demoStatus": "Build validé · publication en attente"
    },
    {
        "id": "nimbus",
        "title": "Nimbus — tableau de bord",
        "type": "Prototype d’interface · apprentissage Tailwind",
        "shortDescription": "Un prototype responsive pour pratiquer Tailwind CSS et les filtres d’interface.",
        "fullDescription": "Prototype statique créé pour commencer à pratiquer Tailwind CSS : mise en page responsive, menu mobile, recherche et filtres côté navigateur. Les projets, chiffres et pourcentages affichés sont fictifs. Aucun backend ni service externe n’est connecté.",
        "technologies": [
            "HTML",
            "Tailwind CSS v4",
            "JavaScript"
        ],
        "features": [
            "Mise en page responsive avec les utilitaires Tailwind",
            "Navigation mobile et filtres interactifs",
            "Données fictives clairement identifiées",
            "Prototype d’apprentissage, sans backend"
        ],
        "githubLink": "https://github.com/HotMb/HotMb.github.io/tree/codex/recruiter-portfolio-20261016/site/projects/nimbus",
        "demoUrl": "",
        "demoStatus": "Prototype statique · code dans la branche de revue"
    },
    {
        "id": "meteo-app",
        "title": "Application météo",
        "type": "Application mobile",
        "shortDescription": "Une application Expo pour chercher une ville, consulter la météo et enregistrer des favoris.",
        "fullDescription": "Application React Native avec Expo et TypeScript. Elle utilise la géolocalisation, propose une recherche de villes avec suggestions et conserve les favoris sur l’appareil. L’export web a été validé dans une branche de revue, sans déploiement public actif.",
        "technologies": [
            "React Native",
            "Expo",
            "TypeScript",
            "Open-Meteo"
        ],
        "features": [
            "Météo selon la géolocalisation",
            "Recherche de villes et suggestions",
            "Favoris stockés sur l’appareil",
            "Export web vérifié, publication à activer"
        ],
        "githubLink": "https://github.com/HotMb/meteo-app",
        "demoUrl": "",
        "demoStatus": "Export web validé · publication en attente de revue"
    },
    {
        "id": "webhook-payment",
        "title": "Webhook Payment",
        "type": "Prototype backend",
        "shortDescription": "Un prototype Express qui vérifie une signature HMAC et simule les tentatives de rejeu.",
        "fullDescription": "Prototype TypeScript/Express qui vérifie la signature HMAC-SHA256 sur le corps brut d’une requête, compare les signatures de façon résistante aux attaques temporelles et simule les nouvelles tentatives. Les événements restent en mémoire : aucun prestataire de paiement ni stockage durable n’est connecté.",
        "technologies": [
            "TypeScript",
            "Node.js",
            "Express",
            "HMAC-SHA256"
        ],
        "features": [
            "Validation de signature sur le corps brut",
            "Comparaison résistante aux attaques temporelles",
            "Simulation de tentatives et endpoint de comptage",
            "Aucun prestataire ni stockage durable connecté"
        ],
        "githubLink": "https://github.com/HotMb/webhook-payment",
        "demoUrl": "",
        "demoStatus": "Prototype backend · démo locale uniquement"
    }
];

// Global variables
let navbar, hamburger, navMenu, typingText, cursor, heroCta, scrollIndicator;
let projectCards, modal, modalOverlay, modalClose, modalBody;
let lastFocusedElement = null;
let previousBodyOverflow = '';

document.documentElement.classList.add('has-js');

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {

    const year = document.getElementById('current-year');
    if (year) year.textContent = String(new Date().getFullYear());
    
    // Get DOM elements
    getDOMElements();
    
    // Initialize all functionality
    initializeAnimations();
    initializeNavigation();
    initializeTypingEffect();
    initializeScrollEffects();
    initializeSkillsBars();
    initializeProjects();
    initializeScrollIndicator();

});

// Get all DOM elements
function getDOMElements() {
    navbar = document.getElementById('navbar');
    hamburger = document.getElementById('hamburger');
    navMenu = document.getElementById('nav-menu');
    typingText = document.getElementById('typing-text');
    cursor = document.getElementById('cursor');
    heroCta = document.getElementById('hero-cta');
    scrollIndicator = document.querySelector('.scroll-indicator');
    projectCards = document.querySelectorAll('.project-card');
    modal = document.getElementById('project-modal');
    modalOverlay = document.getElementById('modal-overlay');
    modalClose = document.getElementById('modal-close');
    modalBody = document.getElementById('modal-body');

}

// Keep the original scroll reveal while limiting fallback work to browsers without IntersectionObserver.
let observer = null;
let animationFrame = 0;
function initializeAnimations() {
    const elements = [...document.querySelectorAll('.animate-on-scroll')];
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        elements.forEach(element => element.classList.add('animate'));
        return;
    }
    const pending = new Set(elements);
    const reveal = element => {
        if (!pending.delete(element)) return;
        window.setTimeout(() => element.classList.add('animate'), Number(element.dataset.delay || 0));
        observer?.unobserve(element);
    };
    if ('IntersectionObserver' in window) {
        observer = new IntersectionObserver(entries => entries.forEach(entry => {
            if (entry.isIntersecting) reveal(entry.target);
        }), { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
        elements.forEach(element => observer.observe(element));
        return;
    }
    const revealVisible = () => {
        animationFrame = 0;
        const height = window.innerHeight || document.documentElement.clientHeight;
        [...pending].forEach(element => {
            const bounds = element.getBoundingClientRect();
            if (bounds.top < height * 0.92 && bounds.bottom > 24) reveal(element);
        });
    };
    const schedule = () => { if (!animationFrame) animationFrame = window.requestAnimationFrame(revealVisible); };
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule, { passive: true });
    window.addEventListener('load', schedule, { once: true });
    schedule();
}

function setMenuOpen(isOpen) {
    if (!hamburger || !navMenu) return;
    hamburger.classList.toggle('active', isOpen);
    navMenu.classList.toggle('active', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    hamburger.setAttribute('aria-label', isOpen ? 'Fermer le menu' : 'Ouvrir le menu');
    document.body.style.overflow = isOpen ? 'hidden' : '';
}

function scrollToSection(section) {
    if (!section) return;
    const navbarHeight = navbar ? navbar.offsetHeight : 70;
    window.scrollTo({
        top: section.getBoundingClientRect().top + window.scrollY - navbarHeight,
        behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'
    });
}

// Navigation functionality
function initializeNavigation() {
    if (!hamburger || !navMenu) return;

    const navLinks = document.querySelectorAll('.nav-link');
    hamburger.addEventListener('click', () => {
        setMenuOpen(hamburger.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            const href = link.getAttribute('href') || '';
            if (!href.startsWith('#')) return;
            const section = document.querySelector(href);
            if (!section) return;
            event.preventDefault();
            scrollToSection(section);
            setMenuOpen(false);
        });
    });

    document.addEventListener('keydown', event => {
        if (event.key === 'Escape' && hamburger.getAttribute('aria-expanded') === 'true') {
            setMenuOpen(false);
            hamburger.focus();
        }
    });

    const updateNavigation = () => {
        const scrollPos = window.scrollY + (navbar ? navbar.offsetHeight : 70) + 30;
        document.querySelectorAll('section[id]').forEach(section => {
            if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
                navLinks.forEach(link => {
                    const active = link.getAttribute('href') === '#' + section.id;
                    link.classList.toggle('active', active);
                    if (active) link.setAttribute('aria-current', 'location');
                    else link.removeAttribute('aria-current');
                });
            }
        });
        navbar?.classList.toggle('scrolled', window.scrollY > 50);
    };
    window.addEventListener('scroll', updateNavigation, { passive: true });
    updateNavigation();
}

// Original typing animation, with a static fallback for reduced-motion preferences.
function initializeTypingEffect() {
    if (!typingText || !cursor) return;
    const name = 'Otmane Mabrouk';
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        typingText.textContent = name;
        cursor.hidden = true;
        return;
    }
    let index = 0;
    typingText.textContent = '';
    const typeNext = () => {
        if (index < name.length) {
            typingText.textContent += name.charAt(index++);
            window.setTimeout(typeNext, 115);
        } else window.setTimeout(() => { cursor.hidden = true; }, 700);
    };
    window.setTimeout(typeNext, 350);
}

// Keep the original hero parallax, throttled to one animation frame.
function initializeScrollEffects() {
    const background = document.querySelector('.hero-background');
    if (!background || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const update = () => {
        if (window.scrollY < window.innerHeight) background.style.transform = 'translate3d(0,' + (window.scrollY * 0.22) + 'px,0)';
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) { window.requestAnimationFrame(update); ticking = true; }
    }, { passive: true });
}

// Hero CTA and scroll indicator functionality.
function initializeScrollIndicator() {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const goTo = id => {
        const section = document.getElementById(id);
        if (!section) return;
        const top = section.getBoundingClientRect().top + window.scrollY - (navbar?.offsetHeight || 70);
        window.scrollTo({ top, behavior: reducedMotion ? 'auto' : 'smooth' });
    };
    heroCta?.addEventListener('click', () => goTo('projects'));
    scrollIndicator?.addEventListener('click', () => goTo('about'));
}

// Animate optional skill bars when present.
function initializeSkillsBars() {
    const section = document.getElementById('skills');
    const bars = section?.querySelectorAll('.skill-progress');
    if (!bars?.length) return;
    const fill = () => bars.forEach(bar => { bar.style.width = (bar.dataset.progress || '0') + '%'; });
    if (!('IntersectionObserver' in window)) {
        fill();
        return;
    }
    const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                window.setTimeout(fill, 250);
                skillsObserver.disconnect();
            }
        });
    }, { threshold: 0.35 });
    skillsObserver.observe(section);
}

// Project details dialog
function initializeProjects() {
    projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        const button = card.querySelector('.project-open');
        const index = Number(button?.dataset.projectIndex ?? card.dataset.projectIndex);
        button?.addEventListener('click', () => openProjectModal(index, button));
    });

    modalClose?.addEventListener('click', closeProjectModal);
    modalOverlay?.addEventListener('click', closeProjectModal);
    document.addEventListener('keydown', event => {
        if (!modal?.classList.contains('show')) return;
        if (event.key === 'Escape') {
            event.preventDefault();
            closeProjectModal();
            return;
        }
        if (event.key !== 'Tab') return;
        const focusable = [...modal.querySelectorAll('button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])')]
            .filter(element => !element.hidden);
        if (!focusable.length) {
            event.preventDefault();
            modalClose?.focus();
            return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    });
}

function openProjectModal(projectIndex, trigger) {
    if (!modal || !modalBody) return;
    const project = projectsData[projectIndex];
    if (!project) return;
    lastFocusedElement = trigger || document.activeElement;
    previousBodyOverflow = document.body.style.overflow;
    const escapeHtml = value => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const demoLink = project.demoUrl
        ? '<a href="' + escapeHtml(project.demoUrl) + '" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Voir la démo <span aria-hidden="true">↗</span></a>'
        : '<p class="project-demo-note">' + escapeHtml(project.demoStatus) + '</p>';
    const sourceLink = project.githubLink
        ? '<a href="' + escapeHtml(project.githubLink) + '" class="btn btn--outline" target="_blank" rel="noopener noreferrer">Voir le code <span aria-hidden="true">↗</span></a>'
        : '';
    modalBody.innerHTML = [
        '<div class="modal-project"><div class="modal-project-image" aria-hidden="true">',
        '<div class="modal-project-art"><span>' + escapeHtml(project.type) + '</span><strong>' + escapeHtml(project.title) + '</strong><small>' + escapeHtml(project.technologies.slice(0, 3).join(' · ')) + '</small></div></div>',
        '<div class="modal-project-content"><p class="modal-project-kicker">' + escapeHtml(project.type) + '</p>',
        '<h2 id="modal-project-title">' + escapeHtml(project.title) + '</h2><p class="project-full-description">' + escapeHtml(project.fullDescription) + '</p>',
        '<div class="project-technologies"><h4>Technologies</h4><div class="tech-tags">' + project.technologies.map(t => '<span class="tech-tag">' + escapeHtml(t) + '</span>').join('') + '</div></div>',
        '<div class="project-features"><h4>Ce que le projet met en pratique</h4><ul>' + project.features.map(f => '<li>' + escapeHtml(f) + '</li>').join('') + '</ul></div>',
        '<div class="project-links">' + demoLink + sourceLink + '</div></div></div>'
    ].join('');
    addModalStyles();
    modal.classList.remove('hidden');
    modal.classList.add('show');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    modalClose?.focus();
}

function closeProjectModal() {
    if (!modal) return;
    modal.classList.remove('show');
    modal.classList.add('hidden');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = previousBodyOverflow;
    lastFocusedElement?.focus?.();
    lastFocusedElement = null;
}

function addModalStyles() {
    if (document.getElementById('modal-styles')) return;

    const modalStyles = `
        .modal-project {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 2rem;
            align-items: start;
        }
        
        .modal-project-image {
            position: sticky;
            top: 0;
            position: relative;
            border-radius: var(--radius-lg);
            overflow: hidden;
        }
        
        .modal-project-img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: var(--radius-lg);
        }
        
        .project-overlay-large {
            position: absolute;
            top: var(--space-12);
            right: var(--space-12);
            background: rgba(var(--color-slate-900-rgb), 0.9);
            color: var(--color-primary);
            padding: var(--space-8) var(--space-12);
            border-radius: var(--radius-sm);
            font-size: var(--font-size-sm);
            font-weight: var(--font-weight-medium);
            backdrop-filter: blur(10px);
        }
        
        .modal-project-content h2 {
            margin-bottom: 1rem;
            color: var(--color-text);
        }
        
        .project-full-description {
            font-size: var(--font-size-lg);
            line-height: 1.7;
            color: var(--color-text-secondary);
            margin-bottom: 2rem;
        }
        
        .project-technologies,
        .project-features {
            margin-bottom: 2rem;
        }
        
        .project-technologies h4,
        .project-features h4 {
            margin-bottom: 1rem;
            color: var(--color-text);
            font-size: var(--font-size-lg);
        }
        
        .tech-tags {
            display: flex;
            flex-wrap: wrap;
            gap: 0.5rem;
        }
        
        .project-features ul {
            list-style: none;
            padding: 0;
        }
        
        .project-features li {
            padding: 0.5rem 0;
            padding-left: 1.5rem;
            position: relative;
            color: var(--color-text-secondary);
        }
        
        .project-features li::before {
            content: '✓';
            position: absolute;
            left: 0;
            color: var(--color-primary);
            font-weight: bold;
        }
        
        .project-links {
            display: flex;
            gap: 1rem;
            flex-wrap: wrap;
        }
        
        .project-links .btn {
            display: inline-flex;
            align-items: center;
            gap: 0.5rem;
        }
        
        @media (max-width: 768px) {
            .modal-project {
                grid-template-columns: 1fr;
                gap: 1.5rem;
            }
            
            .modal-project-image {
                position: static;
            }
            
            .modal-project-img {
                height: 200px;
            }
        }
    `;

    const styleSheet = document.createElement('style');
    styleSheet.id = 'modal-styles';
    styleSheet.textContent = modalStyles;
    document.head.appendChild(styleSheet);
}

// Contact form functionality
function initializeContactForm() {
    if (!contactForm || !submitBtn) {
        console.error('Contact form elements not found');
        return;
    }

    // Ensure form inputs are functional
    const formInputs = contactForm.querySelectorAll('input, textarea');
    formInputs.forEach(function(input) {
        input.removeAttribute('readonly');
        input.removeAttribute('disabled');
        
        // Add focus effects
        input.addEventListener('focus', function() {
            this.parentElement.classList.add('focused');
        });
        
        input.addEventListener('blur', function() {
            if (!this.value) {
                this.parentElement.classList.remove('focused');
            }
        });
    });

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);

        // Validate form
        if (!validateForm(data)) {
            return;
        }
        
        // Show loading state
        showLoadingState();
        
        // Simulate form submission with delay
        setTimeout(function() {
            hideLoadingState();
            showSuccessMessage();
            contactForm.reset();
            
            // Remove focused class from all form groups
            const formGroups = contactForm.querySelectorAll('.form-group');
            formGroups.forEach(group => group.classList.remove('focused'));
        }, 2000);
    });

}

function validateForm(data) {
    const { name, email, subject, message } = data;
    
    if (!name || !name.trim()) {
        showErrorMessage('Le nom est requis');
        return false;
    }
    
    if (!email || !email.trim() || !isValidEmail(email)) {
        showErrorMessage('Un email valide est requis');
        return false;
    }
    
    if (!subject || !subject.trim()) {
        showErrorMessage('Le sujet est requis');
        return false;
    }
    
    if (!message || !message.trim()) {
        showErrorMessage('Le message est requis');
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function showLoadingState() {
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    if (btnText) btnText.style.display = 'none';
    if (btnLoading) btnLoading.classList.remove('hidden');
    submitBtn.disabled = true;
}

function hideLoadingState() {
    const btnText = submitBtn.querySelector('.btn-text');
    const btnLoading = submitBtn.querySelector('.btn-loading');
    
    if (btnText) btnText.style.display = 'inline';
    if (btnLoading) btnLoading.classList.add('hidden');
    submitBtn.disabled = false;
}

function showSuccessMessage() {
    showNotification('Message envoyé avec succès ! (Simulation locale - voir la note de configuration)', 'success');
}

function showErrorMessage(message) {
    showNotification(message, 'error');
}

function showNotification(message, type) {
    // Add notification styles if not present
    addNotificationStyles();
    
    // Remove any existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notif => {
        if (document.body.contains(notif)) {
            document.body.removeChild(notif);
        }
    });
    
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-icon">${type === 'success' ? '✓' : '✗'}</span>
            <span>${message}</span>
        </div>
    `;
    
    document.body.appendChild(notification);
    
    // Show notification after a brief delay
    setTimeout(function() {
        notification.classList.add('show');
    }, 100);
    
    // Hide notification after 5 seconds for success messages, 3 seconds for errors
    const timeout = type === 'success' ? 5000 : 3000;
    setTimeout(function() {
        notification.classList.remove('show');
        setTimeout(function() {
            if (document.body.contains(notification)) {
                document.body.removeChild(notification);
            }
        }, 300);
    }, timeout);
}

function addNotificationStyles() {
    if (document.getElementById('notification-styles')) return;

    const notificationStyles = `
        .notification {
            position: fixed;
            top: 100px;
            right: 2rem;
            background: var(--color-surface);
            border: 1px solid var(--color-success);
            border-radius: var(--radius-lg);
            padding: 1rem 1.5rem;
            box-shadow: var(--shadow-lg);
            z-index: 3000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 350px;
        }
        
        .notification.show {
            transform: translateX(0);
        }
        
        .notification.success {
            border-left: 4px solid var(--color-success);
        }
        
        .notification.error {
            border-left: 4px solid var(--color-error);
        }
        
        .notification-content {
            display: flex;
            align-items: flex-start;
            gap: 0.5rem;
        }
        
        .notification-icon {
            color: var(--color-success);
            font-weight: bold;
            flex-shrink: 0;
        }
        
        .notification.error .notification-icon {
            color: var(--color-error);
        }
        
        .form-group.focused .form-label {
            color: var(--color-primary);
        }
        
        .form-group.focused .form-control {
            border-color: var(--color-primary);
            box-shadow: 0 0 0 3px rgba(var(--color-teal-500-rgb), 0.1);
        }
        
        @media (max-width: 480px) {
            .notification {
                right: 1rem;
                left: 1rem;
                max-width: none;
                transform: translateY(-100%);
                top: 80px;
            }
            
            .notification.show {
                transform: translateY(0);
            }
        }
    `;
    
    const styleSheet = document.createElement('style');
    styleSheet.id = 'notification-styles';
    styleSheet.textContent = notificationStyles;
    document.head.appendChild(styleSheet);
}

// Add smooth hover effects for interactive elements
function addHoverEffects() {
    const buttons = document.querySelectorAll('.btn:not(.project-card)');
    const cards = document.querySelectorAll('.info-card, .contact-item, .skill-category');
    
    buttons.forEach(function(btn) {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px)';
            this.style.transition = 'all 0.3s ease';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    cards.forEach(function(card) {
        card.addEventListener('mouseenter', function() {
            if (!this.classList.contains('project-card')) {
                this.style.transform = 'translateY(-5px)';
                this.style.transition = 'all 0.3s ease';
            }
        });
        
        card.addEventListener('mouseleave', function() {
            if (!this.classList.contains('project-card')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });

}


