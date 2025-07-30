/* ------------------ Edit Post Modal ------------------ */
const editPostBtn = document.getElementById('edit-post');
const editPostModal = document.getElementById('edit-post-modal');

editPostBtn.addEventListener('click', () => {
  editPostModal.classList.remove('hidden');
  editPostModal.classList.add('flex');
});

editPostModal.addEventListener('click', (e) => {
  if (e.target === editPostModal) {
    editPostModal.classList.add('hidden');
    editPostModal.classList.remove('flex');
  }
});

const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
})) 