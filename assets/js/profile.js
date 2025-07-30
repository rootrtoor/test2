document.addEventListener('DOMContentLoaded', function () {
  /* ------------------ Tabs toggle ------------------ */
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

  const postContainer = document.querySelector('div.flex.gap-1.overflow-x-auto.px-5');
  postContainer.style.maxWidth = '72vw';
  postContainer.style.marginLeft = 'auto';
  postContainer.style.marginRight = 'auto';

  // Create left arrow button
  const leftArrow = document.createElement('button');
  leftArrow.id = 'post-left-arrow';
  leftArrow.innerHTML = '<img src="./../assets/icons/arrow-left.svg" alt="Left" style="width:24px;height:24px;">';
  Object.assign(leftArrow.style, {
    position: 'absolute',
    left: '40px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '10',
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '9999px',
    padding: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: 'none',
    display: 'none',
    cursor: 'pointer'
  });

  // Create right arrow button
  const rightArrow = document.createElement('button');
  rightArrow.id = 'post-right-arrow';
  rightArrow.innerHTML = '<img src="./../assets/icons/arrow-right.svg" alt="Right" style="width:24px;height:24px;">';
  Object.assign(rightArrow.style, {
    position: 'absolute',
    right: '40px',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: '10',
    background: 'rgba(255,255,255,0.8)',
    borderRadius: '9999px',
    padding: '8px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    border: 'none',
    display: 'none',
    cursor: 'pointer'
  });

  // Create a relative wrapper for positioning
  const wrapper = document.createElement('div');
  wrapper.style.position = 'relative';
  wrapper.style.width = '100%';

  // Insert wrapper before postContainer and move postContainer inside
  postContainer.parentNode.insertBefore(wrapper, postContainer);
  wrapper.appendChild(postContainer);

  // Add arrows to wrapper
  wrapper.appendChild(leftArrow);
  wrapper.appendChild(rightArrow);

  let isHovered = false;

  // Update arrow visibility
  function updateArrows() {
    if (!isHovered) {
      leftArrow.style.display = 'none';
      rightArrow.style.display = 'none';
      return;
    }
    if (postContainer.scrollLeft > 0) {
      leftArrow.style.display = '';
    } else {
      leftArrow.style.display = 'none';
    }
    if (postContainer.scrollLeft + postContainer.clientWidth < postContainer.scrollWidth - 1) {
      rightArrow.style.display = '';
    } else {
      rightArrow.style.display = 'none';
    }
  }

  // Show arrows on hover
  wrapper.addEventListener('mouseenter', function () {
    isHovered = true;
    updateArrows();
  });
  wrapper.addEventListener('mouseleave', function () {
    isHovered = false;
    updateArrows();
  });

  // Scroll logic
  leftArrow.addEventListener('click', () => {
    postContainer.scrollBy({ left: -postContainer.clientWidth * 0.8, behavior: 'smooth' });
  });
  rightArrow.addEventListener('click', () => {
    postContainer.scrollBy({ left: postContainer.clientWidth * 0.8, behavior: 'smooth' });
  });

  postContainer.addEventListener('scroll', updateArrows);
  window.addEventListener('resize', updateArrows);

  // Initial update
  updateArrows();

  const postImages = document.querySelectorAll('div.flex.gap-1.overflow-x-auto.px-5 a.flex.min-w-36.min-h-48.relative');
  postImages.forEach(imageContainer => {
    const img = imageContainer.children[0];
    if (img.complete) {
      adjustImage(imageContainer, img);
    } else {
      img.addEventListener('load', () => adjustImage(imageContainer, img));
    }
  });

  function adjustImage(imageContainer, img) {
    if (img.naturalWidth - img.naturalHeight > 30) {
      imageContainer.style.width = '320px';
      imageContainer.style.height = '180px';
      imageContainer.style.marginRight = '12px';
      imageContainer.style.backgroundColor = '#0E0D0D20';
      imageContainer.style.minWidth = '320px';
      imageContainer.style.minHeight = '180px';
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.children[0].style.width = '320px';
      imageContainer.children[0].style.height = '180px';
    } else if (img.naturalWidth - img.naturalHeight < -30) {
      imageContainer.style.width = '100px';
      imageContainer.style.height = '180px';
      imageContainer.style.marginRight = '12px';
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.style.justifyContent = 'center';
      imageContainer.style.minWidth = '100px';
      imageContainer.style.minHeight = '180px';
      imageContainer.children[0].style.width = '100px';
      imageContainer.children[0].style.height = '180px';
    } if (img.naturalWidth - img.naturalHeight > -30 && img.naturalWidth - img.naturalHeight < 30) {
      imageContainer.style.width = '180px';
      imageContainer.style.height = '180px';
      imageContainer.style.marginRight = '12px';
      imageContainer.style.backgroundColor = '#0E0D0D20';
      imageContainer.style.minWidth = '180px';
      imageContainer.style.minHeight = '180px';
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.children[0].style.width = '180px';
      imageContainer.children[0].style.height = '180px';
    }
  }

  const closetImages = document.querySelectorAll('div.grid.grid-cols-2.md\\:grid-cols-4.gap-2.px-5 div.flex.flex-col.justify-between a.flex.justify-center img');
  closetImages.forEach(image => {
    image.style.objectFit = 'contain';
  });

  const postsContainer = document.querySelector('div#Posts > div');
  postsContainer.style.display = 'flex';
  postsContainer.style.justifyContent = 'center';
  postsContainer.style.flexWrap = 'wrap';
  postsContainer.style.gap = '4px';

  const posts = document.querySelectorAll('div#Posts a');
  posts.forEach(post => {
    const img = post.children[0];
    if (img.complete) {
      adjustPost(post, img);
    } else {
      img.addEventListener('load', () => adjustPost(post, img));
    }
  })

  function adjustPost(imageContainer, img) {
    if (img.naturalWidth - img.naturalHeight > 30) {
      imageContainer.style.width = '320px';
      imageContainer.style.height = '180px';
      imageContainer.style.backgroundColor = 'black';
      imageContainer.style.minWidth = '320px';
      imageContainer.style.minHeight = '180px';
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.children[0].style.width = '320px';
      imageContainer.children[0].style.height = '180px';
    } else if (img.naturalWidth - img.naturalHeight < -30) {
      imageContainer.style.width = '100px';
      imageContainer.style.height = '180px';
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.style.justifyContent = 'center';
      imageContainer.style.minWidth = '100px';
      imageContainer.style.minHeight = '180px';
      imageContainer.children[0].style.width = '100px';
      imageContainer.children[0].style.height = '180px';
    } if (img.naturalWidth - img.naturalHeight > -30 && img.naturalWidth - img.naturalHeight < 30) {
      imageContainer.style.width = '180px';
      imageContainer.style.height = '180px';
      imageContainer.style.backgroundColor = 'black';
      imageContainer.style.minWidth = '180px';
      imageContainer.style.minHeight = '180px';
      imageContainer.style.display = 'flex';
      imageContainer.style.alignItems = 'center';
      imageContainer.children[0].style.width = '180px';
      imageContainer.children[0].style.height = '180px';
    }
  }
})
