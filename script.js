document.addEventListener('DOMContentLoaded', () => {
  // Navigation Scrollspy: highlight active menu link
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (window.scrollY >= (sectionTop - 120)) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // Review Slider Carousel
  const reviews = document.querySelectorAll('.review-card');
  const prevBtn = document.getElementById('prevReview');
  const nextBtn = document.getElementById('nextReview');
  let currentReview = 0;
  let autoplayTimer = null;

  function showReview(index) {
    reviews.forEach((r, i) => {
      r.classList.remove('active');
      if (i === index) {
        r.classList.add('active');
      }
    });
  }

  function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  }

  function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
  }

  // Event Listeners for Manual Control
  if (nextBtn && prevBtn) {
    nextBtn.addEventListener('click', () => {
      nextReview();
      resetAutoplay();
    });

    prevBtn.addEventListener('click', () => {
      prevReview();
      resetAutoplay();
    });
  }

  // Autoplay functionality (every 8 seconds)
  function startAutoplay() {
    autoplayTimer = setInterval(nextReview, 8000);
  }

  function resetAutoplay() {
    if (autoplayTimer) {
      clearInterval(autoplayTimer);
    }
    startAutoplay();
  }

  // Start Autoplay on load
  startAutoplay();
});
