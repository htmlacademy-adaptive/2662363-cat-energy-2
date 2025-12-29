const nav = document.querySelector('.main-nav');
const menuButton = document.querySelector('.main-nav__toggle');
const sliderControl = document.querySelector('.slider__control');
const slider = document.querySelector('.slider');

let flag = false;

nav.classList.add('main-nav--closed');

menuButton.addEventListener('click', () => {
  nav.classList.toggle('main-nav--closed');
  nav.classList.toggle('main-nav--opened');
});

if (slider) {
  sliderControl.addEventListener('click', () => {
    if (!flag) {
      slider.classList.add('slider--after');
      flag = true;
    } else {
      slider.classList.toggle('slider--before');
      slider.classList.toggle('slider--after');
    }
  });
}
