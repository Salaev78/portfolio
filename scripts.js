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

document.addEventListener('DOMContentLoaded', function() {
  const track = document.querySelector('.carousel-slide');
  const slides = Array.from(track.children);
  const nextButton = document.querySelector('.next');
  const prevButton = document.querySelector('.prev');

  let currentIndex = 0;

  function updateCarousel() {
    const slideWidth = slides[0].getBoundingClientRect().width; // Corrected width calculation
    const offset = -currentIndex * slideWidth; // No need to include margins
    track.style.transform = `translateX(${offset}px)`;

    // Disable/enable buttons based on the current index
    prevButton.style.display = currentIndex === 0 ? 'none' : 'block';
    nextButton.style.display = currentIndex === slides.length - 1 ? 'none' : 'block';
  }

  // Next and Prev button functionality
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

  // Initially update the carousel and hide Prev button if at start
  updateCarousel();
});


