const nav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.main-nav__toggle');

nav.classList.add('main-nav--closed');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--opened');
});
