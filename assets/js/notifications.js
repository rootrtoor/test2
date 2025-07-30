// Select all notification rows
const notificationRows = document.querySelectorAll('.notification-row');
const modal = document.getElementById('notification-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalContent = document.getElementById('modal-content');

notificationRows.forEach(row => {
  row.addEventListener('click', () => {
    // Optionally, you can set modalContent.innerHTML to show details from the clicked notification
    modal.classList.remove('hidden');
    modal.classList.add('flex');
  });
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