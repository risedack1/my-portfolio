const body = document.querySelector('.page__body');
const preloader = document.querySelector('.preloader');

window.onload = () => {

  setTimeout(() => {
    preloader.classList.remove('preloader--active');
    body.classList.remove('disable-scroll');
  }, 3000);
};
