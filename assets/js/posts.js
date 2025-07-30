// posts.js - JS for posts.html 

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

/* ------------------ Replies Modal ------------------ */
const repliesBtn = document.getElementById('replies');
const repliesModal = document.getElementById('replies-modal');
const backRepliesBtn = document.getElementById('back-replies');

repliesBtn.addEventListener('click', () => {
  repliesModal.classList.remove('hidden');
  repliesModal.classList.add('flex');
  commentsModal.classList.add('hidden');
  commentsModal.classList.remove('flex');
});

backRepliesBtn.addEventListener('click', () => {
  repliesModal.classList.add('hidden');
  repliesModal.classList.remove('flex');
  commentsModal.classList.remove('hidden');
  commentsModal.classList.add('flex');
});

repliesModal.addEventListener('click', (e) => {
  if (e.target === repliesModal) {
    repliesModal.classList.add('hidden');
    repliesModal.classList.remove('flex');
    commentsModal.classList.remove('hidden');
    commentsModal.classList.add('flex');
  }
}); 