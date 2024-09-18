document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

window.addEventListener('scroll', function() {
    const button = document.getElementById('backToTop');
    if (window.scrollY > 300) {
        button.style.display = 'block'; // Show the button when scrolled down
    } else {
        button.style.display = 'none'; // Hide the button when scrolled up
    }
});

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-slide');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');
  
  // Calculate the width of one slide including the margin
  const slideWidth = slides[0].getBoundingClientRect().width + 30; // Adjust based on the margin-right in CSS
  let currentIndex = 0;

  function updateCarousel() {
    const offset = -currentIndex * slideWidth;
    track.style.transform = `translateX(${offset}px)`;
  }

  nextButton.addEventListener('click', function() {
    if (currentIndex < slides.length - 1) {
      currentIndex += 1;
      updateCarousel();
    }
  });

  prevButton.addEventListener('click', function() {
    if (currentIndex > 0) {
      currentIndex -= 1;
      updateCarousel();
    }
  });

  // Optional: Add swipe support for mobile devices
  let touchStartX = 0;
  
  track.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
  });

  track.addEventListener('touchend', (e) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX - touchEndX > 50) {
      // Swipe left
      if (currentIndex < slides.length - 1) {
        currentIndex += 1;
        updateCarousel();
      }
    } else if (touchStartX - touchEndX < -50) {
      // Swipe right
      if (currentIndex > 0) {
        currentIndex -= 1;
        updateCarousel();
      }
    }
  });
});
