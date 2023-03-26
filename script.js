// Search bar functionality
const searchBar = document.getElementById('search-bar');
const searchButton = document.getElementById('search-button');

searchButton.addEventListener('click', () => {
  const searchQuery = searchBar.value;
  // code to perform search based on query
});

// Dropdown menu functionality
const dropdownMenu = document.getElementById('dropdown-menu');
const dropdownButton = document.getElementById('dropdown-button');

dropdownButton.addEventListener('click', () => {
  dropdownMenu.classList.toggle('show');
});

// Carousel functionality
const carouselImages = document.querySelectorAll('.carousel-image');
let currentImageIndex = 0;

function showImage(index) {
  carouselImages[currentImageIndex].classList.remove('active');
  carouselImages[index].classList.add('active');
  currentImageIndex = index;
}

const carouselButtons = document.querySelectorAll('.carousel-button');
carouselButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    showImage(index);
  });
});

// Modal functionality
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

openModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', () => {
    const modal = button.closest('.modal');
    closeModal(modal);
  });
});

overlay.addEventListener('click', () => {
  const modals = document.querySelectorAll('.modal.active');
  modals.forEach(modal => {
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}
