/* ------------------ Edit Link Modal ------------------ */
const editLinkBtns = document.querySelectorAll('.edit-link-btn');
const editLinkModal = document.getElementById('edit-link-modal');
const closeEditLinkModalBtn = document.getElementById('close-edit-link-modal-btn');

editLinkBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    editLinkModal.classList.remove('hidden');
    editLinkModal.classList.add('flex');
  });
});

closeEditLinkModalBtn.addEventListener('click', () => {
  editLinkModal.classList.add('hidden');
  editLinkModal.classList.remove('flex');
});

editLinkModal.addEventListener('click', (e) => {
  if (e.target === editLinkModal) {
    editLinkModal.classList.add('hidden');
    editLinkModal.classList.remove('flex');
  }
});

/* ------------------ Add Link Modal ------------------ */
const addLinkBtn = document.getElementById('add-link');
const addLinkModal = document.getElementById('add-link-modal');
const closeAddLinkModalBtn = document.getElementById('close-add-link-modal-btn');

addLinkBtn.addEventListener('click', () => {
  addLinkModal.classList.remove('hidden');
  addLinkModal.classList.add('flex');
});

closeAddLinkModalBtn.addEventListener('click', () => {
  addLinkModal.classList.add('hidden');
  addLinkModal.classList.remove('flex');
});

addLinkModal.addEventListener('click', (e) => {
  if (e.target === addLinkModal) {
    addLinkModal.classList.add('hidden');
    addLinkModal.classList.remove('flex');
  }
});

/* ------------------ Edit instagram icon Modal ------------------ */
const editInstagramBtn = document.getElementById('edit-instagram');
const editInstagramModal = document.getElementById('edit-instagram-modal');
const closeEditInstagramModalBtn = document.getElementById('edit-instagram-modal-btn');

editInstagramBtn.addEventListener('click', () => {
  editInstagramModal.classList.remove('hidden');
  editInstagramModal.classList.add('flex');
});

closeEditInstagramModalBtn.addEventListener('click', () => {
  editInstagramModal.classList.add('hidden');
  editInstagramModal.classList.remove('flex');
});

editInstagramModal.addEventListener('click', (e) => {
  if (e.target === editInstagramModal) {
    editInstagramModal.classList.add('hidden');
    editInstagramModal.classList.remove('flex');
  }
});

/* ------------------ Edit instagram icon Modal ------------------ */
const editUsernameBtn = document.getElementById('edit-username');
const editUsernameModal = document.getElementById('edit-username-modal');
const closeEditUsernameModalBtn = document.getElementById('edit-username-modal-btn');

editUsernameBtn.addEventListener('click', () => {
  editUsernameModal.classList.remove('hidden');
  editUsernameModal.classList.add('flex');
});

closeEditUsernameModalBtn.addEventListener('click', () => {
  editUsernameModal.classList.add('hidden');
  editUsernameModal.classList.remove('flex');
});

editUsernameModal.addEventListener('click', (e) => {
  if (e.target === editUsernameModal) {
    editUsernameModal.classList.add('hidden');
    editUsernameModal.classList.remove('flex');
  }
});

/* ------------------ Edit Bio Modal ------------------ */
const editBioBtn = document.getElementById('edit-bio');
const editBioModal = document.getElementById('edit-bio-modal');
const closeEditBioModalBtn = document.getElementById('edit-bio-modal-btn');

editBioBtn.addEventListener('click', () => {
  editBioModal.classList.remove('hidden');
  editBioModal.classList.add('flex');
});

closeEditBioModalBtn.addEventListener('click', () => {
  editBioModal.classList.add('hidden');
  editBioModal.classList.remove('flex');
});

editBioModal.addEventListener('click', (e) => {
  if (e.target === editBioModal) {
    editBioModal.classList.add('hidden');
    editBioModal.classList.remove('flex');
  }
});

/* ------------------ Edit Avatar Modal ------------------ */
const editAvatarBtn = document.getElementById('edit-avatar');
const editAvatarModal = document.getElementById('edit-avatar-modal');

editAvatarBtn.addEventListener('click', () => {
  editAvatarModal.classList.remove('hidden');
  editAvatarModal.classList.add('flex');
});

editAvatarModal.addEventListener('click', (e) => {
  if (e.target === editAvatarModal) {
    editAvatarModal.classList.add('hidden');
    editAvatarModal.classList.remove('flex');
  }
});

/* ------------------ Toggle switch in Add Link modal ------------------ */
function setupToggle(toggleId, knobId) {
  const toggleSwitch = document.getElementById(toggleId);
  const switchKnob = document.getElementById(knobId);
  if (!toggleSwitch || !switchKnob) return;

  let isOn = false;

  toggleSwitch.addEventListener('click', () => {
    isOn = !isOn;
    if (isOn) {
      toggleSwitch.classList.remove('bg-gray-300');
      toggleSwitch.classList.add('bg-brand-red');
      switchKnob.style.transform = 'translateX(1.25rem)';
    } else {
      toggleSwitch.classList.add('bg-gray-300');
      toggleSwitch.classList.remove('bg-brand-red');
      switchKnob.style.transform = 'translateX(0)';
    }
  });
}

setupToggle('toggle-switch-edit', 'switch-knob-edit');
setupToggle('toggle-switch-add', 'switch-knob-add');

const container = document.getElementById('draggable-container');
let draggingElement = null;

container.addEventListener('dragstart', (e) => {
  if (e.target.closest('.draggable-item')) {
    draggingElement = e.target.closest('.draggable-item');
    e.dataTransfer.effectAllowed = 'move';
    // Add a class to indicate dragging, with a slight delay
    setTimeout(() => {
      draggingElement.classList.add('dragging');
    }, 0);
  }
});

container.addEventListener('dragover', (e) => {
  e.preventDefault();
  const targetItem = e.target.closest('.draggable-item');
  if (targetItem && draggingElement && targetItem !== draggingElement) {
    const rect = targetItem.getBoundingClientRect();
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
    draggingElement.classList.remove('dragging');
    draggingElement = null;
  }
});

container.addEventListener('drop', (e) => {
  e.preventDefault();
}); 