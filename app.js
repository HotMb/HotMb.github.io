// Project data with all 6 projects
const projectsData = [
    {
        id: 1,
        title: "Jeu Mario - Java",
        shortDescription: "Jeu de plateforme classique développé en Java",
        fullDescription: "Reproduction fidèle du jeu Mario Bros développée en Java avec Eclipse IDE. Le jeu comprend des niveaux multiples, un système de collision avancé, des animations fluides et une bande sonore nostalgique. Utilisation des concepts de programmation orientée objet pour la gestion des personnages, ennemis et éléments du jeu.",
        technologies: ["Java", "Eclipse IDE", "Java Swing", "OOP"],
        features: [
            "Système de collision précis",
            "Multiple niveaux jouables", 
            "Animations de sprites fluides",
            "Gestion des scores et vies",
            "Effets sonores intégrés"
        ],
        image: "./public/img/Mario Java.png",
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 2,
        title: "Chicken Crousty - Site Restaurant",
        shortDescription: "Site web avec réservations et commandes en ligne",
        fullDescription: "Site web complet pour le restaurant Chicken Crousty incluant un système de réservation de tables en ligne, commandes à emporter avec paiement intégré, présentation du menu interactif et gestion des disponibilités en temps réel. Interface moderne et responsive optimisée pour mobile.",
        technologies: ["React", "Node.js", "Stripe", "MongoDB", "Express"],
        features: [
            "Système de réservation en ligne",
            "Commandes et paiements intégrés",
            "Menu interactif avec images",
            "Gestion des disponibilités",
            "Interface responsive mobile-first"
        ],
        image: "https://pplx-res.cloudinary.com/image/upload/v1757887377/pplx_project_search_images/0794d804a26d0dd61b7b1d689d50c8c3fd93df92.png",
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 3,
        title: "Centre Kinésithérapie - Réservations",
        shortDescription: "Plateforme de réservation de créneaux médicaux",
        fullDescription: "Application web pour centre de kinésithérapie permettant aux patients de réserver leurs séances en ligne. Système de gestion des plannings praticiens, notifications automatiques par email, historique des consultations et interface d'administration complète pour le personnel médical.",
        technologies: ["PHP", "MySQL", "JavaScript", "Bootstrap"],
        features: [
            "Réservation de créneaux en temps réel",
            "Gestion multi-praticiens",
            "Notifications automatiques",
            "Historique patient complet",
            "Interface d'administration"
        ],
        image: "./public/img/kinesaoufi.png",
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 4,
        title: "Calculateur de Période + Chatbot",
        shortDescription: "App santé féminine avec IA conversationnelle",
        fullDescription: "Application de suivi menstruel avec calculateur de cycle intelligent et chatbot intégré pour conseils personnalisés. Algorithmes de prédiction basés sur l'historique, rappels personnalisés, conseils santé adaptatifs et interface conversationnelle naturelle pour répondre aux questions sur la santé féminine.",
        technologies: ["React Native", "Python", "TensorFlow", "Dialogflow", "Firebase"],
        features: [
            "Prédiction intelligente des cycles",
            "Chatbot IA pour conseils santé",
            "Notifications personnalisées",
            "Suivi des symptômes",
            "Algorithmes d'apprentissage automatique"
        ],
        image: "https://pplx-res.cloudinary.com/image/upload/v1755074889/pplx_project_search_images/cf820f1701a0fed7c22471dad90e4979cdb056dd.png",
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 5,
        title: "Portfolio React Moderne",
        shortDescription: "Site personnel avec animations avancées",
        fullDescription: "Portfolio personnel développé avec React et Framer Motion, présentant mes compétences et projets avec des animations fluides et un design moderne. Le site est entièrement responsive et optimisé pour les performances avec des micro-interactions sophistiquées.",
        technologies: ["React", "Framer Motion", "CSS3", "Vite"],
        features: [
            "Animations Framer Motion fluides",
            "Design responsive moderne",
            "Performance optimisée",
            "Micro-interactions avancées",
            "Navigation smooth scroll"
        ],
        image: "./public/img/portfolio.png",
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 6,
        title: "API REST Sécurisée",
        shortDescription: "Backend robuste avec authentification JWT",
        fullDescription: "API REST complète construite avec Node.js et Express, incluant un système d'authentification sécurisé avec JWT, une base de données MongoDB et une documentation Swagger complète. Architecture scalable avec gestion d'erreurs robuste et tests automatisés.",
        technologies: ["Node.js", "Express", "JWT", "MongoDB", "Swagger"],
        features: [
            "Authentification JWT sécurisée",
            "API RESTful complète",
            "Documentation Swagger automatisée",
            "Tests unitaires intégrés",
            "Architecture scalable"
        ],
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400",
        demoLink: "#",
        githubLink: "#"
    },
    {
        id: 7,
        title: "Tattoo Djo - E-commerce",
        shortDescription: "Boutique en ligne moderne de tatouages éphémères",
        fullDescription: "Site e-commerce spécialisé dans la vente de tatouages éphémères artistiques. La plateforme offre une expérience d'achat intuitive avec un catalogue de produits dynamique et un système de panier d'achat. Le frontend est construit avec React et Vite, enrichi d'animations fluides via Framer Motion. Le backend utilise Strapi CMS pour une gestion efficace du contenu et des produits en temps réel.",
        technologies: [
            "React",
            "Vite",
            "Strapi",
            "Framer Motion",
            "Node.js",
            "PostgreSQL",
            "Styled Components",
            "Redux Toolkit"
        ],
        features: [
            "Interface utilisateur moderne et animée",
            "Système de gestion de contenu avec Strapi",
            "Catalogue de produits dynamique",
            "Animations sophistiquées avec Framer Motion",
            "Panier d'achat en temps réel",
            "Interface administrateur personnalisée",
            "Gestion des stocks et inventaire",
            "Système de recherche et filtrage avancé"
        ],
        image: "./public/img/tattoodjoecom.png",
        demoLink: "#",
        githubLink: "#"
    }
];

// Global variables
let navbar, hamburger, navMenu, typingText, cursor, heroCta, scrollIndicator;
let projectCards, modal, modalOverlay, modalClose, modalBody;

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM loaded, initializing...');
    
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

// Animation observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.classList.add('animate');
            }, delay);
        }
    });
}, observerOptions);

// Initialize all animations
function initializeAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    animatedElements.forEach(el => observer.observe(el));
    console.log('Animations initialized');
}

// Navigation functionality
function initializeNavigation() {
    if (!hamburger || !navMenu) {
        console.error('Navigation elements not found');
        return;
    }

    // Hamburger toggle
    hamburger.addEventListener('click', function() {
        console.log('Hamburger clicked');
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Navigation links functionality
    const navLinks = document.querySelectorAll('.nav-link');
    console.log('Found nav links:', navLinks.length);
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Nav link clicked:', link.getAttribute('href'));
            
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                const navbarHeight = navbar ? navbar.offsetHeight : 70;
                const offsetTop = targetSection.offsetTop - navbarHeight;
                console.log('Scrolling to:', offsetTop);
                
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });

                // Close mobile menu
                if (hamburger) hamburger.classList.remove('active');
                if (navMenu) navMenu.classList.remove('active');
                document.body.style.overflow = '';

                // Update active link
                navLinks.forEach(function(l) {
                    l.classList.remove('active');
                });
                link.classList.add('active');
            } else {
                console.error('Target section not found:', targetId);
            }
        });
    });

    // Scroll spy for navigation
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(function(link) {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });

        // Navbar background on scroll
        if (navbar) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    });

    console.log('Navigation initialized');
}

// Typing effect for hero section
function initializeTypingEffect() {
    if (!typingText || !cursor) {
        console.error('Typing elements not found');
        return;
    }

    const text = 'Otmane Mabrouk';
    let i = 0;
    
    function typeWriter() {
        if (i < text.length) {
            typingText.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 150);
        } else {
            // Hide cursor after typing is complete
            setTimeout(function() {
                cursor.style.display = 'none';
            }, 1000);
        }
    }

    // Start typing effect after page load
    setTimeout(typeWriter, 1000);
    console.log('Typing effect initialized');
}

// Scroll effects
function initializeScrollEffects() {
    // Parallax effect for hero background
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.3}px)`;
        }
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });

    console.log('Scroll effects initialized');
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

// Skills bars animation
function initializeSkillsBars() {
    const skillsObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const skillBars = entry.target.querySelectorAll('.skill-progress');
                skillBars.forEach(function(bar) {
                    const progress = bar.dataset.progress;
                    setTimeout(function() {
                        bar.style.width = progress + '%';
                    }, 500);
                });
            }
        });
    }, { threshold: 0.5 });

    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
        skillsObserver.observe(skillsSection);
        console.log('Skills bars initialized');
    }
}

// Projects functionality
function initializeProjects() {
    console.log('Initializing projects, found cards:', projectCards.length);
    
    projectCards.forEach(function(card, index) {
        // Set the correct project index as data attribute
        card.setAttribute('data-project-index', index);
        
        card.addEventListener('click', function() {
            const projectIndex = parseInt(this.getAttribute('data-project-index'));
            console.log('Project card clicked, index:', projectIndex);
            openProjectModal(projectIndex);
        });

        // Add hover animations
        card.addEventListener('mouseenter', function() {
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.transition = 'all 0.3s ease';
        });

        card.addEventListener('mouseleave', function() {
            card.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Modal close events
    if (modalClose) {
        modalClose.addEventListener('click', closeProjectModal);
    }
    
    if (modalOverlay) {
        modalOverlay.addEventListener('click', closeProjectModal);
    }
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('show')) {
            closeProjectModal();
        }
    });

    console.log('Projects initialized');
}

function openProjectModal(projectIndex) {
    if (!modal || !modalBody) {
        console.error('Modal elements not found');
        return;
    }

    // Ensure projectIndex is valid
    if (projectIndex < 0 || projectIndex >= projectsData.length) {
        console.error('Invalid project index:', projectIndex);
        return;
    }

    const project = projectsData[projectIndex];
    console.log('Opening modal for project:', project.title);
    
    modalBody.innerHTML = `
        <div class="modal-project">
            <div class="modal-project-image">
                <img src="${project.image}" alt="${project.title}" class="modal-project-img">
                <div class="project-overlay-large">
                    <span class="project-type-large">${getProjectTypeIcon(projectIndex)}</span>
                </div>
            </div>
            <div class="modal-project-content">
                <h2>${project.title}</h2>
                <p class="project-full-description">${project.fullDescription}</p>
                
                <div class="project-technologies">
                    <h4>Technologies utilisées :</h4>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag ${getTechClass(tech)}">${tech}</span>`).join('')}
                    </div>
                </div>
                
                <div class="project-features">
                    <h4>Fonctionnalités principales :</h4>
                    <ul>
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </div>
                
                <div class="project-links">
                    <a href="${project.demoLink}" target="_blank" class="btn btn--primary">
                        <span>Voir la démo</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                            <polyline points="15,3 21,3 21,9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                    <a href="${project.githubLink}" target="_blank" class="btn btn--outline">
                        <span>Code source</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    `;

    // Add modal-specific styles
    addModalStyles();

    modal.classList.remove('hidden');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function getProjectTypeIcon(index) {
    const icons = [
        '🎮 Jeu', '🍗 Restaurant', '🏥 Médical', 
        '💬 IA Santé', '🌐 Portfolio', '⚙️ Backend'
    ];
    return icons[index] || '🔧 Projet';
}

function getTechClass(tech) {
    const techClasses = {
        'Java': 'tech-java',
        'React': 'tech-react',
        'Node.js': 'tech-node',
        'PHP': 'tech-php',
        'Python': 'tech-python',
        'MySQL': 'tech-mysql',
        'MongoDB': 'tech-mongodb',
        'JWT': 'tech-jwt',
        'Stripe': 'tech-stripe',
        'TensorFlow': 'tech-ai',
        'Eclipse IDE': 'tech-ide',
        'JavaScript': 'tech-js',
        'CSS3': 'tech-css',
        'Framer Motion': 'tech-animation',
        'Java Swing': 'tech-ui',
        'Bootstrap': 'tech-css',
        'Express': 'tech-node',
        'React Native': 'tech-react',
        'Dialogflow': 'tech-ai',
        'Firebase': 'tech-ai',
        'API SMS': 'tech-js',
        'Swagger': 'tech-node',
        'Vite': 'tech-js',
        'OOP': 'tech-java'
    };
    return techClasses[tech] || 'tech-tag';
}

function closeProjectModal() {
    if (modal) {
        modal.classList.remove('show');
        modal.classList.add('hidden');
        document.body.style.overflow = '';
        console.log('Modal closed');
    }
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

// Page load animation
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    console.log('Page fully loaded');
});

// Add initial page styles
document.addEventListener('DOMContentLoaded', function() {
    const pageStyles = `
        body {
            opacity: 0;
            transition: opacity 0.5s ease;
        }
    `;
    
    if (!document.getElementById('page-styles')) {
        const styleSheet = document.createElement('style');
        styleSheet.id = 'page-styles';
        styleSheet.textContent = pageStyles;
        document.head.appendChild(styleSheet);
    }
});