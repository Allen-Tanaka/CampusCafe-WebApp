document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    const sidebarLinks = document.querySelectorAll('.sidebar a');
    let currentSlide = 0;

    const showSlide = (index) => {
        slides.forEach((slide, i) => {
            slide.style.display = (i === index) ? 'block' : 'none';
        });
    };

    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };

    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % card.length;
        showSlide(currentCard);
    };

    document.querySelector('.next').addEventListener('click', nextCard);
    document.querySelector('.prev').addEventListener('click', prevCard);

    sidebarLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const slideIndex = parseInt(link.getAttribute('data-slide')) - 1;
            currentCard = slideIndex;
            showSlide(currentSlide);
        });
    });

    // Show the first slide by default
    showSlide(currentCard);
});
