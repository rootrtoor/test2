// addresses.js - JS for addresses.html 
const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
}))

// Radio button toggle functionality
const addressItems = document.querySelectorAll('.address-item');

addressItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Don't trigger if clicking on delete button
    if (e.target.closest('.clickable')) {
      return;
    }
    
    const addressId = item.getAttribute('data-address-id');
    const radioButton = item.querySelector('.radio-button');
    const radioIcon = item.querySelector('.radio-icon');
    
    // Deselect all other addresses
    addressItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherRadioButton = otherItem.querySelector('.radio-button');
        const otherRadioIcon = otherItem.querySelector('.radio-icon');
        
        otherRadioButton.classList.remove('bg-black');
        otherRadioButton.classList.add('border');
        otherRadioIcon.style.display = 'none';
      }
    });
    
    // Select this address
    radioButton.classList.remove('border');
    radioButton.classList.add('bg-black');
    radioIcon.style.display = 'block';
    
    console.log('Selected address:', addressId);
  });
}); 