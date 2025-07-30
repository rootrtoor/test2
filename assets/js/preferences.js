// preferences.js - JS for preferences.html 

/* ------------------ Connected Modal ------------------ */
const socialBtn = document.getElementById('social');
const modal = document.getElementById('social-modal');

socialBtn.addEventListener('click', () => {
  modal.classList.remove('hidden');
  modal.classList.add('flex');
});

modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
    modal.classList.remove('flex');
  }
});

const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
})) 