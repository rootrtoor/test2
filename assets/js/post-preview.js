// post-preview.js - JS for post-preview.html 

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

/* ------------------ Comments Modal ------------------ */
const commentsBtn = document.getElementById('comments');
const commentsModal = document.getElementById('comments-modal');

commentsBtn.addEventListener('click', () => {
  commentsModal.classList.remove('hidden');
  commentsModal.classList.add('flex');
});

commentsModal.addEventListener('click', (e) => {
  if (e.target === commentsModal) {
    commentsModal.classList.add('hidden');
    commentsModal.classList.remove('flex');
  }
}); 