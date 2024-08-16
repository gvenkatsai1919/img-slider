let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active', 'prevSlide', 'nextSlide');
        if (i === index) {
            slide.classList.add('active');
        } else if (i === (index - 1 + totalSlides) % totalSlides) {
            slide.classList.add('prevSlide');
        } else if (i === (index + 1) % totalSlides) {
            slide.classList.add('nextSlide');
        }
    });

    const offset = -index * 100;
    document.querySelector('.slides').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    showSlide(currentSlide);
}

function autoSlide() {
    nextSlide();
    setTimeout(autoSlide, 4000); // Change slide every 4 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    autoSlide();
});
