document.addEventListener('DOMContentLoaded', function () {
    const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.slider-dot');
    let currentIndex = 0;
    const slideCount = slides.length;
    let interval;

    function updateSlider() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;

        // Update dots
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    function goToSlide(index) {
        currentIndex = index;
        updateSlider();
    }

    // Auto-slide
    function startAutoSlide() {
        interval = setInterval(() => {
            currentIndex = (currentIndex + 1) % slideCount;
            updateSlider();
        }, 8000);
    }

    // Initialize
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            clearInterval(interval);
            goToSlide(index);
            startAutoSlide();
        });
    });

    // Pause on hover
    const slider = document.querySelector('.slider-container');
    slider.addEventListener('mouseenter', () => clearInterval(interval));
    slider.addEventListener('mouseleave', startAutoSlide);

    startAutoSlide();
});

// Menu burger
const burgerBtn = document.querySelector('.burger-bar');
const closeBtn = document.querySelector('.close');
const menuBurger = document.querySelector('.menu-burger');

if (burgerBtn && closeBtn && menuBurger) {
    burgerBtn.addEventListener('click', () => {
        menuBurger.style.transform = 'translateX(0)';
    });

    closeBtn.addEventListener('click', () => {
        menuBurger.style.transform = 'translateX(-200%)';
    });
}
