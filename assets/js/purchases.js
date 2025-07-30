// purchases.js - JS for purchases.html 
const ruleSetupBtn = document.getElementById('rule-setup');
const modal = document.getElementById('rule-setup-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalContent = document.getElementById('modal-content');

ruleSetupBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
});

closeModalBtn.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Optional: Close modal on overlay click
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});

const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
}))

// Section toggle functionality
const sectionToggles = document.querySelectorAll('.section-toggle');

sectionToggles.forEach(toggle => {
  toggle.addEventListener('click', () => {
    const sectionId = toggle.getAttribute('data-section');
    const arrowIcon = toggle.querySelector('.arrow-icon');
    const content = document.getElementById(sectionId + '-content');

    if (content) {
      const isVisible = content.style.display !== 'none';

      if (isVisible) {
        // Hide content
        content.style.display = 'none';
        arrowIcon.src = './../assets/icons/arrow-bottom.svg';
        arrowIcon.alt = 'arrow-bottom';
      } else {
        // Show content
        content.style.display = 'grid';
        arrowIcon.src = './../assets/icons/arrow-up.svg';
        arrowIcon.alt = 'arrow-up';
      }
    }
  });
}); 