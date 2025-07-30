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