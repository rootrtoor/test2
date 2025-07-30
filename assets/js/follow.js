// follow.js - JS for follow.html 
const container = document.getElementById('draggable-container');
let draggingElement = null;

container.addEventListener('dragstart', (e) => {
  const draggable = e.target.closest('.draggable-item');
  if (draggable) {
    draggingElement = draggable;
    e.dataTransfer.effectAllowed = 'move';
    // Add a class to indicate dragging
    setTimeout(() => {
      draggingElement.classList.add('dragging');
    }, 0)
  }
});

container.addEventListener('dragover', (e) => {
  e.preventDefault(); // This is necessary to allow dropping
  const targetItem = e.target.closest('.draggable-item');
  if (targetItem && targetItem !== draggingElement) {
    // getBoundingClientRect is relative to the viewport
    const rect = targetItem.getBoundingClientRect();
    // Check mouse position to decide where to insert
    const isAfter = e.clientY > rect.top + rect.height / 2;

    if (isAfter) {
      container.insertBefore(draggingElement, targetItem.nextSibling);
    } else {
      container.insertBefore(draggingElement, targetItem);
    }
  }
});

container.addEventListener('dragend', () => {
  if (draggingElement) {
    // Clean up: remove the dragging class
    draggingElement.classList.remove('dragging');
    draggingElement = null;
  }
});

// We still need to prevent default on drop for some browsers.
container.addEventListener('drop', (e) => {
  e.preventDefault();
}); 