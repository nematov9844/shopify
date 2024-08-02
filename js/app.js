

const menuToggle = document.getElementById('menuToggle');
const slideMenu = document.getElementById('slideMenu');
const deletebtn = document.getElementById('delete');
const modal = document.getElementById('modal');
menuToggle.addEventListener('click', () => {
  slideMenu.classList.toggle('left-0');
  slideMenu.classList.toggle('left-[-100%]');
});
deletebtn.addEventListener('click', () => {
  modal.classList.toggle('hidden');
});

