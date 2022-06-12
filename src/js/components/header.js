const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    header.classList.add('header--active');
  } else {
    header.classList.remove('header--active');
  }
});
