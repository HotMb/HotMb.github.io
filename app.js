const projectsData = [
    {
        "id": "guardian-autopilot",
        "title": "Guardian Autopilot",
        "type": "Outil développeur",
        "shortDescription": "Un outil local qui inspecte un dépôt, repère les doublons et prépare un plan de nettoyage contrôlé.",
        "fullDescription": "Prototype local-first pour comprendre les fichiers d’un dépôt avant de les toucher : inventaire et empreintes SHA-256, détection de doublons, résolution des références entre fichiers, puis plan de nettoyage en lecture seule. Les essais d’automatisation se font dans un worktree Git isolé, avec vérifications requises.",
        "technologies": [
            "Node.js",
            "TypeScript",
            "Git",
            "MCP"
        ],
        "features": [
            "Analyse des fichiers et des références",
            "Plan de nettoyage consultable avant action",
            "Expérimentation dans un worktree isolé",
            "Prototype en bêta, sans démo web publique"
        ],
        "githubLink": "https://github.com/HotMb/guardian-autopilot",
        "demoUrl": "",
        "demoStatus": "Outil local en bêta · pas de démo web publique"
    },
    {
        "id": "magensy",
        "title": "Magensy",
        "type": "Site vitrine",
        "shortDescription": "Un site de présentation d’entreprise réalisé avec Next.js, TypeScript et Tailwind, préparé pour un hébergement statique.",
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
        "id": "planning-efficom",
        "title": "Planning Efficom",
        "type": "Application académique",
        "shortDescription": "Une application de planning de cours avec accès par rôle et détection des conflits de salle, de classe et d’intervenant.",
        "fullDescription": "Application web académique développée avec React et Django REST. Les administrateurs gèrent les cours, tandis que les étudiants et intervenants consultent leur planning. L’API refuse un créneau qui chevauche une salle, une classe ou un intervenant déjà occupé, avec une réponse HTTP 409. Le lancement local nécessite MySQL.",
        "technologies": [
            "React",
            "Django REST",
            "Python",
            "MySQL",
            "JWT"
        ],
        "features": [
            "Planning adapté au profil connecté",
            "Gestion par l’administrateur et consultation par rôle",
            "Détection des conflits côté API et réponse 409",
            "Tests backend et frontend documentés dans le dépôt"
        ],
        "githubLink": "https://github.com/HotMb/RATTRAPAGE_BLOC2_MABROUK_OTMANE",
        "demoUrl": "",
        "demoStatus": "Projet académique · démo non hébergée"
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
    },
    {
        "id": "tasks-api",
        "title": "API de gestion de tâches",
        "type": "API pédagogique",
        "shortDescription": "Une API Flask avec routes de santé, de consultation, de création et de suppression de tâches.",
        "fullDescription": "API REST pédagogique construite avec Flask. Elle expose un contrôle de santé, la lecture et la création de tâches, ainsi que leur suppression. Le stockage est en mémoire : les tâches disparaissent à l’arrêt du serveur, et le projet n’inclut ni authentification ni base de données.",
        "technologies": [
            "Python",
            "Flask",
            "API REST",
            "pytest"
        ],
        "features": [
            "Routes de santé et de gestion des tâches",
            "Création et suppression par requête HTTP",
            "État en mémoire, sans persistance",
            "Tests et contrat HTTP alignés dans la branche de revue"
        ],
        "githubLink": "https://github.com/HotMb/devops-tasks-api",
        "demoUrl": "",
        "demoStatus": "API locale · stockage en mémoire"
    },
    {
        "id": "api-rest-demo",
        "title": "Simulateur d’API REST",
        "type": "Prototype frontend",
        "shortDescription": "Une interface pédagogique qui met en scène des requêtes, des réponses JSON et une connexion simulée dans le navigateur.",
        "fullDescription": "Prototype statique en HTML, CSS et JavaScript pour visualiser un parcours d’API REST. La connexion, les réponses et le jeton sont simulés côté navigateur : le projet ne fournit ni serveur, ni base de données, ni authentification réelle.",
        "technologies": ["HTML", "CSS", "JavaScript"],
        "features": [
            "Parcours de requêtes et réponses JSON",
            "Simulation locale d’une connexion et d’un jeton",
            "Aucun backend ou stockage de données",
            "Publication statique possible après activation de Pages"
        ],
        "githubLink": "https://github.com/HotMb/API-REST---DEMO",
        "demoUrl": "",
        "demoStatus": "Prototype statique · API non réelle"
    },
    {
        "id": "uno-card-game",
        "title": "Jeu de cartes Python",
        "type": "Projet académique · Python",
        "shortDescription": "Un mini-projet structuré autour des objets Carte et Paquet, avec un programme de démonstration et des tests.",
        "fullDescription": "Projet Python organisé autour des classes Carte et Paquet, avec un point d’entrée de démonstration et une suite de tests unitaires, d’intégration et de bout en bout.",
        "technologies": ["Python", "Programmation orientée objet", "pytest"],
        "features": [
            "Classes séparées pour les cartes et le paquet",
            "Programme de démonstration",
            "Tests unitaires, intégration et bout en bout",
            "Tests corrigés dans la branche de revue"
        ],
        "githubLink": "https://github.com/HotMb/UNO-otmane",
        "demoUrl": "",
        "demoStatus": "Projet Python · code source public"
    },
    {
        "id": "binary-structure",
        "title": "Structure CodeBinaire",
        "type": "Projet académique · Python",
        "shortDescription": "Une structure de données pour manipuler une séquence de bits et empêcher qu’elle devienne vide.",
        "fullDescription": "Exercice Python qui modélise des bits avec une énumération et fournit une classe CodeBinaire avec ajout, concaténation, accès, découpe, modification et suppression. Une exception empêche de vider entièrement la séquence.",
        "technologies": ["Python", "Enum", "pytest"],
        "features": [
            "Manipulation de séquences de bits",
            "Indexation, découpe et concaténation",
            "Exception dédiée pour préserver au moins un bit",
            "Imports et tests corrigés dans la branche de revue"
        ],
        "githubLink": "https://github.com/HotMb/TP-CodeBinaire",
        "demoUrl": "",
        "demoStatus": "Exercice Python · code source public"
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
    console.log('DOM loaded, initializing...');
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
    addHoverEffects();
    
    console.log('All initialization complete');
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
    
    console.log('DOM elements retrieved');
}

// Scroll-reveal observer. The page stays readable when this API is unavailable.
let observer = null;
if ('IntersectionObserver' in window) {
    observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = Number(entry.target.dataset.delay || 0);
                window.setTimeout(() => entry.target.classList.add('animate'), delay);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
}

function initializeAnimations() {
    document.querySelectorAll('.animate-on-scroll').forEach(element => {
        if (observer) observer.observe(element);
        else element.classList.add('animate');
    });
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

// Typing effect for hero section
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
        } else {
            window.setTimeout(() => { cursor.hidden = true; }, 700);
        }
    };
    window.setTimeout(typeNext, 350);
}

// Scroll effects
function initializeScrollEffects() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let ticking = false;
    const updateParallax = () => {
        const background = document.querySelector('.hero-background');
        if (background) background.style.transform = `translateY(${window.scrollY * 0.3}px)`;
        ticking = false;
    };
    window.addEventListener('scroll', () => {
        if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
        }
    }, { passive: true });
}

// Hero CTA and scroll indicator functionality
function initializeScrollIndicator() {
    if (heroCta) {
        heroCta.addEventListener('click', function() {
            console.log('Hero CTA clicked');
            const projectsSection = document.getElementById('projects');
            if (projectsSection) {
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const offsetTop = projectsSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            console.log('Scroll indicator clicked');
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const offsetTop = aboutSection.offsetTop - navbarHeight;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    }

    console.log('Scroll indicators initialized');
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
    const demoLink = project.demoUrl
        ? `<a href="${project.demoUrl}" class="btn btn--primary" target="_blank" rel="noopener noreferrer">Voir la démo <span aria-hidden="true">↗</span></a>`
        : `<p class="project-demo-note">${project.demoStatus}</p>`;

    modalBody.innerHTML = `
        <div class="modal-project">
            <div class="modal-project-image" aria-hidden="true">
                <div class="modal-project-art"><span>${project.type}</span><strong>${project.title}</strong><small>${project.technologies.slice(0, 3).join(' · ')}</small></div>
            </div>
            <div class="modal-project-content">
                <p class="modal-project-kicker">${project.type}</p>
                <h2 id="modal-project-title">${project.title}</h2>
                <p class="project-full-description">${project.fullDescription}</p>
                <div class="project-technologies">
                    <h4>Technologies</h4>
                    <div class="tech-tags">${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}</div>
                </div>
                <div class="project-features">
                    <h4>Ce que le projet met en pratique</h4>
                    <ul>${project.features.map(feature => `<li>${feature}</li>`).join('')}</ul>
                </div>
                <div class="project-links">
                    ${demoLink}
                    <a href="${project.githubLink}" class="btn btn--outline" target="_blank" rel="noopener noreferrer">Voir le code <span aria-hidden="true">↗</span></a>
                </div>
            </div>
        </div>`;

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
        console.log('Contact form submitted');
        
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
        console.log('Form data:', data);
        
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

    console.log('Contact form initialized');
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

    console.log('Hover effects initialized');
}


