const newContactBtn = document.getElementById('new-contact');
const modal = document.getElementById('new-contact-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalContent = document.getElementById('modal-content');

newContactBtn.addEventListener('click', () => {
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