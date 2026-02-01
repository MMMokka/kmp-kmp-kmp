document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('open');
    });
  }

  // Back to top
  const backToTop = document.querySelector('.back-to-top');

  const toggleBackToTop = () => {
    if (!backToTop) return;
    if (window.scrollY > 400) {
      backToTop.classList.add('is-visible');
    } else {
      backToTop.classList.remove('is-visible');
    }
  };

  window.addEventListener('scroll', toggleBackToTop);
  toggleBackToTop();

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Like modal
  const likeItems = document.querySelectorAll('.like-item');
  const likeModal = document.getElementById('likeModal');
  const modalTitle = document.getElementById('modalTitle');
  const modalText = document.getElementById('modalText');
  const modalImg = document.getElementById('modalImg');
  const closeBtn = document.querySelector('.close-btn');

  if (likeItems.length && likeModal && modalTitle && modalText && modalImg) {
    likeItems.forEach((item) => {
      item.addEventListener('click', () => {
        modalTitle.textContent = item.getAttribute('data-title') || '';
        modalText.textContent = item.getAttribute('data-description') || '';
        modalImg.src = item.getAttribute('data-image') || '';
        likeModal.style.display = 'flex';
      });
    });
  }

  if (closeBtn && likeModal) {
    closeBtn.addEventListener('click', () => {
      likeModal.style.display = 'none';
    });
  }

  window.addEventListener('click', (e) => {
    if (likeModal && e.target === likeModal) {
      likeModal.style.display = 'none';
    }
  });
});
