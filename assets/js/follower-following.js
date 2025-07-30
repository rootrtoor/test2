// follower-following.js - JS for follower-following.html 
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Deactivate all buttons and hide all panels
    tabButtons.forEach(btn => {
      btn.classList.remove('border-b-2', 'border-brand-red', 'text-brand-red');
    });
    tabPanels.forEach(panel => {
      panel.classList.add('hidden');
    });

    // Activate the clicked button and show the corresponding panel
    button.classList.add('border-b-2', 'border-brand-red', 'text-brand-red');

    const targetPanelId = button.dataset.tabTarget;
    const targetPanel = document.querySelector(targetPanelId);
    if (targetPanel) {
      targetPanel.classList.remove('hidden');
    }
  });
});

/* ------------------ Delete follower Modal ------------------ */
const deleteFollowerBtns = document.querySelectorAll('.delete-follower');
const deleteFollowerModal = document.getElementById('delete-follower-modal');

deleteFollowerBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    deleteFollowerModal.classList.remove('hidden');
    deleteFollowerModal.classList.add('flex');
  });
})

deleteFollowerModal.addEventListener('click', (e) => {
  if (e.target === deleteFollowerModal) {
    deleteFollowerModal.classList.add('hidden');
    deleteFollowerModal.classList.remove('flex');
  }
}); 