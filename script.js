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
});
