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

  // Initialize foliage widgets
  initFoliageWidget();
});

// Foliage widget initialization function
function initFoliageWidget() {
  // Placeholder data - will be replaced with real API data when available
  const placeholderData = {
    peakDates: "October 15-25, 2024",
    currentStage: "Early Color",
    progressPercentage: 25,
    description: "Trees are beginning to show fall colors. Check back regularly for updates as conditions develop."
  };

  // Update home page widget if it exists
  const homeProgressFill = document.getElementById('home-foliage-progress-fill');
  if (homeProgressFill) {
    homeProgressFill.style.width = placeholderData.progressPercentage + '%';
  }
  const homePeakDates = document.getElementById('home-peak-dates');
  if (homePeakDates) {
    homePeakDates.textContent = placeholderData.peakDates;
  }
  const homeCurrentStage = document.getElementById('home-current-stage');
  if (homeCurrentStage) {
    homeCurrentStage.textContent = placeholderData.currentStage;
  }
  const homeDescription = document.getElementById('home-foliage-description');
  if (homeDescription) {
    homeDescription.textContent = placeholderData.description;
  }
  const homeForecastDate = document.getElementById('home-forecast-date');
  if (homeForecastDate) {
    const now = new Date();
    homeForecastDate.textContent = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }

  // Update foliage page widget if it exists
  const progressFill = document.getElementById('foliage-progress-fill');
  if (progressFill) {
    progressFill.style.width = placeholderData.progressPercentage + '%';
  }
  const peakDates = document.getElementById('peak-dates');
  if (peakDates) {
    peakDates.textContent = placeholderData.peakDates;
  }
  const currentStage = document.getElementById('current-stage');
  if (currentStage) {
    currentStage.textContent = placeholderData.currentStage;
  }
  const description = document.getElementById('foliage-description');
  if (description) {
    description.textContent = placeholderData.description;
  }
  const forecastDate = document.getElementById('forecast-date');
  if (forecastDate) {
    const now = new Date();
    forecastDate.textContent = now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
  }
}
