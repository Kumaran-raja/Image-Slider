let slideIndex = 0;
const slides = document.querySelectorAll('.slide');
const slideContainer = document.querySelector('.slide-container');

function showSlide(index) {
  const offset = -index * 100; 
  slideContainer.style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideIndex = (slideIndex + 1) % slides.length; 
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex = (slideIndex - 1 + slides.length) % slides.length; 
  showSlide(slideIndex);
}

showSlide(slideIndex);

setInterval(nextSlide, 5000);
