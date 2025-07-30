// withdraw.js - JS for withdraw.html 
const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
}))

// Radio button toggle functionality
const paymentItems = document.querySelectorAll('.payment-item');

paymentItems.forEach(item => {
  item.addEventListener('click', (e) => {
    // Don't trigger if clicking on delete button
    if (e.target.closest('.clickable')) {
      return;
    }

    const paymentId = item.getAttribute('data-payment-id');
    const radioButton = item.querySelector('.radio-button');
    const radioIcon = item.querySelector('.radio-icon');

    // Deselect all other payment methods
    paymentItems.forEach(otherItem => {
      if (otherItem !== item) {
        const otherRadioButton = otherItem.querySelector('.radio-button');
        const otherRadioIcon = otherItem.querySelector('.radio-icon');

        otherRadioButton.classList.remove('bg-black');
        otherRadioButton.classList.add('border');
        otherRadioIcon.style.display = 'none';
      }
    });

    // Select this payment method
    radioButton.classList.remove('border');
    radioButton.classList.add('bg-black');
    radioIcon.style.display = 'block';

    console.log('Selected payment method:', paymentId);
  });
}); 