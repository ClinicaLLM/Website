document.addEventListener("DOMContentLoaded", () => {
    // --- Register GSAP Plugins ---
    try {
        gsap.registerPlugin(ScrollTrigger);
        console.log("GSAP Plugins Registered");
    } catch (e) {
        console.error("Error registering GSAP plugins:", e);
    }

    // --- Animations ---
    // Simple fade-in for hero elements
    gsap.from(".hero-title", {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.from(".hero-subtitle", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.4
    });

    gsap.from(".hero-cta", {
        y: 20,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.6
    });

    gsap.from(".hero-visual", {
        scale: 0.9,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        delay: 0.2
    });

    // Scroll Triggers for sections
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out"
        });
    });
});
