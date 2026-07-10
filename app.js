const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

let currentSlide = 0
const slideWidth = document.querySelector(".slider").clientWidth;
function nextSlide() {
    currentSlide ++
    if (currentSlide >= images.length) {
        currentSlide= 0;
    }

    slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
}

setInterval(nextSlide, 4000)