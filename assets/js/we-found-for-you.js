// we-found-for-you.js - JS for we-found-for-you.html 
const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
}))

// Eye toggle functionality
const eyeToggles = document.querySelectorAll('.eye-toggle');

eyeToggles.forEach(toggle => {
  toggle.addEventListener('click', (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    const eyeIcon = toggle.querySelector('.eye-icon');
    const itemId = toggle.getAttribute('data-item-id');
    const addedToCloset = toggle.parentElement.querySelector('.added-to-closet');
    
    // Toggle between eye and eye-cross-red
    if (eyeIcon.src.includes('eye.svg')) {
      // Change to eye-cross-red (hidden state)
      eyeIcon.src = './../assets/icons/eye-cross-red.svg';
      eyeIcon.alt = 'eye-cross-red';
      
      // Show "Added to Closet" message
      if (addedToCloset) {
        addedToCloset.style.display = 'flex';
      }
    } else {
      // Change back to eye (visible state)
      eyeIcon.src = './../assets/icons/eye.svg';
      eyeIcon.alt = 'eye';
      
      // Hide "Added to Closet" message
      if (addedToCloset) {
        addedToCloset.style.display = 'none';
      }
    }
  });
}); 