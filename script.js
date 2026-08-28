// Update footer year
document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // Highlight active nav link
  const currentPath = window.location.pathname;
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (currentPath === '/' && href === '/') {
      link.style.color = '#4a7c7e';
    } else if (currentPath !== '/' && currentPath.includes(href.replace('.html', ''))) {
      link.style.color = '#4a7c7e';
    }
  });

  // Hero image carousel
  const heroImages = document.querySelectorAll('.hero-image');
  if (heroImages.length > 0) {
    let currentIndex = 0;

    setInterval(() => {
      // Remove active class from current image
      heroImages[currentIndex].classList.remove('active');

      // Move to next image
      currentIndex = (currentIndex + 1) % heroImages.length;

      // Add active class to new image
      heroImages[currentIndex].classList.add('active');
    }, 8000); // 8 second cycle (matches animation duration)
  }
});
