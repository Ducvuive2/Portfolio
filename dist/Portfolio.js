document.addEventListener('DOMContentLoaded', function () {
  // Add shadow to header on scroll
  window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }

    // Show/hide back to top button
    const backToTopButton = document.getElementById('back-to-top');
    if (backToTopButton) {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
      } else {
        backToTopButton.classList.remove('show');
      }
    }
  });

  // Back to top button click event
  // when dom ready
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    console.log('Back to top button found');
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  } else {
    console.log('Back to top button not found');
  }
});
export function initBackToTop() {
  const backToTopButton = document.getElementById('back-to-top');
  if (backToTopButton) {
    console.log('Back to top button found');
    backToTopButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  } else {
    console.log('Back to top button not found');
  }
}