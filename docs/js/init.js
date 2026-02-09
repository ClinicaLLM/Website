document.addEventListener("DOMContentLoaded", () => {
    // --- Register GSAP Plugins ---
    try {
        gsap.registerPlugin(ScrollTrigger);
    } catch (e) {
        console.error("Error registering GSAP plugins:", e);
    }

    // Hero animations are handled by animations.js — no duplicates here.

    // Scroll Triggers for sections (refined timing)
    const sections = document.querySelectorAll("section");
    sections.forEach(section => {
        gsap.from(section.children, {
            scrollTrigger: {
                trigger: section,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
        });
    });
});
