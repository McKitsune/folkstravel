export function setupScrollAnimations() {
    const sections = document.querySelectorAll(".section");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                const el = entry.target;
                if (entry.isIntersecting) {
                    el.classList.add("section-visible");
                } else {
                    el.classList.remove("section-visible");
                }
            });
        },
        {
            threshold: 0.4,
        }
    );

    sections.forEach((section) => {
        observer.observe(section);
    });
}
