document.addEventListener("DOMContentLoaded", () => {

    // Desplazamiento suave
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener("click", event => {

            const id = link.getAttribute("href");
            const target = document.querySelector(id);

            if (!target) return;

            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Efecto de aparición de secciones
    const sections = document.querySelectorAll(
        ".hero, .section, .features, .footer"
    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });

});
