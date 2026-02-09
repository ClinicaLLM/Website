document.addEventListener("DOMContentLoaded", () => {
    // Check if GSAP is loaded
    if (typeof gsap === 'undefined') {
        console.warn('GSAP not loaded, skipping animations');
        return;
    }

    // Register ScrollTrigger if available
    if (typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // ===========================================
    // HERO ANIMATIONS
    // ===========================================

    const heroTitle = document.querySelector('.hero-title');
    const heroSubtitle = document.querySelector('.hero-subtitle');
    const heroCta = document.querySelector('.hero-cta');

    if (heroTitle) {
        gsap.from(heroTitle, {
            duration: 1.2,
            opacity: 0,
            y: 60,
            ease: "power3.out",
            delay: 0.2
        });
    }

    if (heroSubtitle) {
        gsap.from(heroSubtitle, {
            duration: 1,
            opacity: 0,
            y: 30,
            ease: "power3.out",
            delay: 0.6
        });
    }

    if (heroCta) {
        gsap.from(heroCta, {
            duration: 1,
            opacity: 0,
            y: 20,
            ease: "power3.out",
            delay: 0.9
        });
    }

    // Page banner animations
    const pageBannerContent = document.querySelector('.page-banner-content');
    if (pageBannerContent) {
        gsap.from(pageBannerContent.children, {
            duration: 0.8,
            opacity: 0,
            y: 40,
            stagger: 0.15,
            ease: "power3.out",
            delay: 0.3
        });
    }

    // ===========================================
    // PARTICLE SYSTEM (CSS-based, lightweight)
    // ===========================================

    function initParticles(container, count = 20, color = null) {
        if (!container) return;

        const particleBg = document.createElement('div');
        particleBg.className = 'particle-bg';

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = `${Math.random() * 100}%`;
            particle.style.top = `${Math.random() * 100}%`;
            particle.style.animationDelay = `${Math.random() * 20}s`;
            particle.style.animationDuration = `${15 + Math.random() * 15}s`;
            if (color) particle.style.background = color;
            particleBg.appendChild(particle);
        }

        // Add some connecting lines
        for (let i = 0; i < 5; i++) {
            const line = document.createElement('div');
            line.className = 'particle-line';
            line.style.top = `${20 + Math.random() * 60}%`;
            line.style.width = `${100 + Math.random() * 200}px`;
            line.style.animationDelay = `${Math.random() * 10}s`;
            if (color) line.style.background = `linear-gradient(90deg, transparent, ${color}, transparent)`;
            particleBg.appendChild(line);
        }

        container.style.position = 'relative';
        container.insertBefore(particleBg, container.firstChild);
    }

    // Initialize particles on specific sections
    const weaveHero = document.querySelector('#weave-page .page-banner');


    if (weaveHero) initParticles(weaveHero, 25, '#10B981');


    // ===========================================
    // BENTO CARD ANIMATIONS
    // ===========================================

    const bentoCards = gsap.utils.toArray('.bento-card');
    if (bentoCards.length > 0) {
        gsap.set(bentoCards, { opacity: 1, y: 0 });

        bentoCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 50,
                scale: 0.95,
                duration: 0.7,
                delay: index * 0.08,
                ease: "power3.out"
            });
        });
    }

    // ===========================================
    // GENERAL FADE IN ANIMATIONS
    // ===========================================

    const fadeElements = gsap.utils.toArray('.commitment-text, .commitment-quote, .section-header');
    fadeElements.forEach(el => {
        gsap.from(el, {
            scrollTrigger: {
                trigger: el,
                start: "top 85%",
                toggleActions: "play none none none"
            },
            opacity: 0,
            y: 30,
            duration: 0.7,
            ease: "power3.out"
        });
    });

    // ===========================================
    // STAGGERED CARD ANIMATIONS
    // ===========================================

    const cardSelectors = [
        '.pillars-grid .pillar-card',
        '.steps-container .step-item',
        '.platform-grid .platform-card',
        '.solutions-grid .solution-card',
        '.solutions-cards .solution-item',
        '.team-grid .team-card',
        '.process-grid .step-item'
    ];

    cardSelectors.forEach(selector => {
        const elements = gsap.utils.toArray(selector);
        if (elements.length > 0) {
            gsap.set(elements, { opacity: 1, y: 0 });

            elements.forEach((el, index) => {
                gsap.from(el, {
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.6,
                    delay: index * 0.1,
                    ease: "power2.out"
                });
            });
        }
    });

    // ===========================================
    // TYPING ANIMATION FOR CODE BLOCKS
    // ===========================================

    function initTypingAnimation(codeBlock) {
        if (!codeBlock) return;

        const lines = codeBlock.querySelectorAll('.typing-line');
        if (lines.length === 0) return;

        ScrollTrigger.create({
            trigger: codeBlock,
            start: "top 80%",
            onEnter: () => {
                lines.forEach((line, index) => {
                    gsap.to(line, {
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        delay: index * 0.3,
                        ease: "power2.out"
                    });
                });
            },
            once: true
        });
    }

    // Initialize typing animation on code blocks
    document.querySelectorAll('.typing-container').forEach(initTypingAnimation);

    // ===========================================
    // PIPELINE ANIMATION
    // ===========================================

    const pipelineContainer = document.querySelector('.pipeline-container');
    if (pipelineContainer) {
        const stages = pipelineContainer.querySelectorAll('.pipeline-stage');
        const connectors = pipelineContainer.querySelectorAll('.pipeline-connector');

        ScrollTrigger.create({
            trigger: pipelineContainer,
            start: "top 70%",
            onEnter: () => {
                // Animate stages sequentially
                stages.forEach((stage, index) => {
                    const node = stage.querySelector('.pipeline-node');
                    const label = stage.querySelector('.pipeline-label');

                    gsap.from(node, {
                        scale: 0,
                        opacity: 0,
                        duration: 0.6,
                        delay: index * 0.4,
                        ease: "back.out(1.7)"
                    });

                    gsap.from(label, {
                        opacity: 0,
                        y: 20,
                        duration: 0.4,
                        delay: index * 0.4 + 0.2,
                        ease: "power2.out"
                    });
                });

                // Animate connectors
                connectors.forEach((connector, index) => {
                    gsap.from(connector, {
                        scaleX: 0,
                        duration: 0.5,
                        delay: index * 0.4 + 0.3,
                        ease: "power2.inOut"
                    });
                });
            },
            once: true
        });
    }

    // ===========================================
    // ORBIT ANIMATION (Weave/Heroes)
    // ===========================================

    const orbitContainers = document.querySelectorAll('.orbit-container');
    orbitContainers.forEach(container => {
        const dots = container.querySelectorAll('.orbit-dot');
        dots.forEach((dot, index) => {
            gsap.to(dot, {
                rotation: 360,
                duration: 20 + index * 5,
                repeat: -1,
                ease: "none",
                transformOrigin: "center center"
            });
        });
    });

    // ===========================================
    // FLOATING ELEMENTS ANIMATION
    // ===========================================

    const floatingElements = document.querySelectorAll('.hero-floating-element');
    floatingElements.forEach((el, index) => {
        gsap.to(el, {
            y: "random(-30, 30)",
            x: "random(-20, 20)",
            rotation: "random(-5, 5)",
            duration: "random(4, 6)",
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut",
            delay: index * 0.5
        });
    });

    // ===========================================
    // SCROLL-TRIGGERED PROGRESS BARS
    // ===========================================

    const progressBars = document.querySelectorAll('.progress-animate');
    progressBars.forEach(bar => {
        const targetWidth = bar.dataset.progress || '100%';

        ScrollTrigger.create({
            trigger: bar,
            start: "top 85%",
            onEnter: () => {
                gsap.to(bar, {
                    width: targetWidth,
                    duration: 1.5,
                    ease: "power2.out"
                });
            },
            once: true
        });
    });

    // ===========================================
    // COUNTER ANIMATION
    // ===========================================

    const counters = document.querySelectorAll('.counter-animate');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.target) || 100;
        const suffix = counter.dataset.suffix || '';

        ScrollTrigger.create({
            trigger: counter,
            start: "top 85%",
            onEnter: () => {
                gsap.to(counter, {
                    innerHTML: target,
                    duration: 2,
                    snap: { innerHTML: 1 },
                    ease: "power2.out",
                    onUpdate: function () {
                        counter.innerHTML = Math.round(this.targets()[0].innerHTML) + suffix;
                    }
                });
            },
            once: true
        });
    });

    // ===========================================
    // DEPTH CARD 3D HOVER EFFECT
    // ===========================================

    const depthCards = document.querySelectorAll('.depth-card');
    depthCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = (y - centerY) / 20;
            const rotateY = (centerX - x) / 20;

            gsap.to(card, {
                rotateX: rotateX,
                rotateY: rotateY,
                duration: 0.3,
                ease: "power2.out"
            });
        });

        card.addEventListener('mouseleave', () => {
            gsap.to(card, {
                rotateX: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        });
    });

    // ===========================================
    // GLOW PULSE ANIMATION
    // ===========================================

    const glowElements = document.querySelectorAll('.glow-pulse');
    glowElements.forEach(el => {
        gsap.to(el, {
            boxShadow: "0 0 40px rgba(59, 130, 246, 0.6)",
            duration: 1.5,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });
    });

    // ===========================================
    // STAGGER REVEAL ON SCROLL
    // ===========================================

    const staggerGroups = document.querySelectorAll('.stagger-reveal');
    staggerGroups.forEach(group => {
        const children = group.children;

        ScrollTrigger.create({
            trigger: group,
            start: "top 85%",
            onEnter: () => {
                gsap.from(children, {
                    opacity: 0,
                    y: 30,
                    duration: 0.6,
                    stagger: 0.1,
                    ease: "power2.out"
                });
            },
            once: true
        });
    });

    // ===========================================
    // PARTNER CARDS
    // ===========================================

    const partnerCards = gsap.utils.toArray('.partner-card');
    if (partnerCards.length > 0) {
        gsap.set(partnerCards, { opacity: 1, y: 0 });

        partnerCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none none"
                },
                opacity: 0,
                y: 20,
                duration: 0.6,
                delay: index * 0.1,
                ease: "power2.out"
            });
        });
    }

    // ===========================================
    // WEAVE PATTERN SVG ANIMATION
    // ===========================================

    const weavePatterns = document.querySelectorAll('.weave-pattern path');
    weavePatterns.forEach((path, index) => {
        const length = path.getTotalLength ? path.getTotalLength() : 1000;

        gsap.set(path, {
            strokeDasharray: length,
            strokeDashoffset: length
        });

        ScrollTrigger.create({
            trigger: path.closest('svg'),
            start: "top 80%",
            onEnter: () => {
                gsap.to(path, {
                    strokeDashoffset: 0,
                    duration: 2,
                    delay: index * 0.2,
                    ease: "power2.inOut"
                });
            },
            once: true
        });
    });

    // ===========================================
    // FEATURE SECTION ALTERNATING ANIMATIONS
    // ===========================================

    const featureSections = document.querySelectorAll('[style*="grid-template-columns: 1fr 1fr"]');
    featureSections.forEach((section, index) => {
        const leftContent = section.querySelector(':scope > div:first-child');
        const rightContent = section.querySelector(':scope > div:last-child');

        if (leftContent && rightContent) {
            const isReversed = leftContent.style.order === '2';

            ScrollTrigger.create({
                trigger: section,
                start: "top 75%",
                onEnter: () => {
                    gsap.from(leftContent, {
                        x: isReversed ? 50 : -50,
                        opacity: 0,
                        duration: 0.8,
                        ease: "power3.out"
                    });

                    gsap.from(rightContent, {
                        x: isReversed ? -50 : 50,
                        opacity: 0,
                        duration: 0.8,
                        delay: 0.2,
                        ease: "power3.out"
                    });
                },
                once: true
            });
        }
    });
});
