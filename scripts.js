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
  const slideWidth = slides[0].getBoundingClientRect().width + 50; // Adjust for the margin-right of 50px
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
});
