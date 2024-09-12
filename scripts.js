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
         button.style.display = 'block';
     } else {
         button.style.display = 'none';
     }
 });
 
 document.getElementById('backToTop').addEventListener('click', function() {
     window.scrollTo({
         top: 0,
         behavior: 'smooth'
     });
 });
