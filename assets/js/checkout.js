// checkout.js - JS for checkout.html 
function setupToggle(toggleId, knobId) {
  const toggleSwitch = document.getElementById(toggleId);
  const switchKnob = document.getElementById(knobId);
  if (!toggleSwitch || !switchKnob) return;

  let isOn = false;

  toggleSwitch.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
      toggleSwitch.classList.remove('bg-gray-300');
      toggleSwitch.classList.add('bg-brand-red');
      switchKnob.style.transform = 'translateX(1.25rem)';
    } else {
      toggleSwitch.classList.add('bg-gray-300');
      toggleSwitch.classList.remove('bg-brand-red');
      switchKnob.style.transform = 'translateX(0)';
    }
  });
}

setupToggle('toggle-switch-wallet', 'switch-knob-wallet');

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
        content.style.display = 'block';
        arrowIcon.src = './../assets/icons/arrow-up.svg';
        arrowIcon.alt = 'arrow-up';
      }
    }
  });
});

// Shipping options radio functionality
const shippingOptions = document.querySelectorAll('.shipping-option');

shippingOptions.forEach(option => {
  option.addEventListener('click', () => {
    // Remove selection from all options
    shippingOptions.forEach(opt => {
      const radio = opt.querySelector('.shipping-radio');
      radio.classList.remove('bg-black');
      radio.classList.add('border');
      radio.innerHTML = '';
    });
    
    // Select the clicked option
    const selectedRadio = option.querySelector('.shipping-radio');
    selectedRadio.classList.remove('border');
    selectedRadio.classList.add('bg-black');
    selectedRadio.innerHTML = '<img src="./../assets/icons/check-white.svg" alt="check-white" />';
  });
}); 