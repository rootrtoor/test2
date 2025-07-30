// post-detail.js - JS for post-detail.html 

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