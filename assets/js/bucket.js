/* ------------------ Search Modal ------------------ */
const searchBtn = document.getElementById('search');
const searchModal = document.getElementById('search-modal');

searchBtn.addEventListener('click', () => {
  searchModal.classList.remove('hidden');
  searchModal.classList.add('flex');
});

searchModal.addEventListener('click', (e) => {
  if (e.target === searchModal) {
    searchModal.classList.add('hidden');
    searchModal.classList.remove('flex');
  }
}); 