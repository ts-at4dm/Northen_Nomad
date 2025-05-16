const track = document.querySelector('.slides-track');
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;
let currentIndex = 0;
const interval = 8000;

function nextSlide() {
  currentIndex++;
  track.style.transition = 'transform 1s ease-in-out'; 
  track.style.transform = `translateX(-${currentIndex * 100}%)`;

 
  if (currentIndex === totalSlides - 1) {
    
    setTimeout(() => {
      track.style.transition = 'none';
      track.style.transform = `translateX(0)`;
      currentIndex = 0;
    }, 1000); 
  }
}

setInterval(nextSlide, interval);
