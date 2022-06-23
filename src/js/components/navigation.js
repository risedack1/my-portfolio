const nav = document.querySelector('.nav');
const menuButton = document.querySelector('.header__menu-button');
const header = document.querySelector('.header');
const page = document.querySelector('.page__body');

header.addEventListener('click', (e) => {
  if (e.target.classList.contains('header__menu-button')) {
    nav.classList.remove('nav--hidden');
    nav.classList.add('nav--active');
    menuButton.classList.add('header__menu-button--hidden');
    page.classList.add('disable-scroll');
  } else if (e.target.classList.contains('nav') || e.target.classList.contains('nav__close') || e.target.classList.contains('nav__link')) {
    nav.classList.remove('nav--active');
    nav.classList.add('nav--hidden');
    menuButton.classList.remove('header__menu-button--hidden');
    page.classList.remove('disable-scroll');
  }
});
