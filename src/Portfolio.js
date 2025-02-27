document.addEventListener('DOMContentLoaded', function () {

  
  });
  
  export function initProject(){
    initTabs();
    initCarousel();
  }
  
  function initTabs() {
    const tabs = document.querySelectorAll('.tabs ul li');
    tabs.forEach(tab => {
      tab.addEventListener('click', function () {
        tabs.forEach(t => t.classList.remove('active'));
        this.classList.add('active');
      });
    });
  }
  
  // Keep track of the scroll event listener
  let currentScrollListener = null;

  function initCarousel(){
    const skillArea = document.getElementById('skill_area');
    const scrollIndicator = document.querySelector('.scroll-indicator-progress');
    
    if (skillArea && scrollIndicator) {
      // First, clean up any existing event listener
      if (currentScrollListener) {
        skillArea.removeEventListener('scroll', currentScrollListener);
        currentScrollListener = null;
      }
      
      // Create a new update function
      const updateScrollIndicator = () => {
        const scrollLeft = skillArea.scrollLeft;
        const maxScrollLeft = skillArea.scrollWidth - skillArea.clientWidth;
        // Prevent division by zero or negative values
        const scrollPercentage = maxScrollLeft <= 0 ? 0 : (scrollLeft / maxScrollLeft) * 100;
        scrollIndicator.style.width = `${scrollPercentage}%`;
      };
      
      // Store the reference to the listener
      currentScrollListener = updateScrollIndicator;
      
      // Initial update
      updateScrollIndicator();
      
      // Add scroll event listener
      skillArea.addEventListener('scroll', currentScrollListener);
    }
  }
  export function updateCarousel() {
    // Small timeout to ensure DOM is updated
    setTimeout(initCarousel, 50);
  }

