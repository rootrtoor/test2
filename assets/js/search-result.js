// search-result.js - JS for search-result.html 
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Deactivate all buttons and hide all panels
    tabButtons.forEach(btn => {
      btn.classList.remove('bg-brand-red', 'text-white');
      btn.classList.add('bg-gray-100');
    });
    tabPanels.forEach(panel => {
      panel.classList.remove('grid');
      panel.classList.add('hidden');
    });

    // Activate the clicked button and show the corresponding panel
    button.classList.add('bg-brand-red', 'text-white');
    button.classList.remove('bg-gray-100');

    const targetPanelId = button.dataset.tabTarget;
    const targetPanel = document.querySelector(targetPanelId);
    if (targetPanel) {
      targetPanel.classList.add('grid');
      targetPanel.classList.remove('hidden');
    }
  });
});

const clickables = document.querySelectorAll('.clickable');
clickables.forEach(clickable => clickable.addEventListener('click', () => {
  window.open('#', '_blank');
})) 