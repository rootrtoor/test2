// login.js - JS for login.html 
const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
}))

// Password toggle functionality
const passwordToggle = document.querySelector('.password-toggle');
const passwordInput = document.getElementById('password');

passwordToggle.addEventListener('click', () => {
  const currentType = passwordInput.type;
  
  if (currentType === 'password') {
    // Show password
    passwordInput.type = 'text';
    passwordToggle.src = './../assets/icons/eye.svg';
    passwordToggle.alt = 'eye';
    passwordToggle.classList.remove('top-2.5');
    passwordToggle.classList.add('top-3');
  } else {
    // Hide password
    passwordInput.type = 'password';
    passwordToggle.src = './../assets/icons/eye-cross-black.svg';
    passwordToggle.alt = 'eye-cross-black';
    passwordToggle.classList.add('top-2.5');
    passwordToggle.classList.remove('top-3');
  }
}); 