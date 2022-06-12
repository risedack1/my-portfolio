const socialButton = document.querySelector('.social-button');
const socialWrapper = document.querySelector('.social');

window.addEventListener('click', (e) => {
  if (e.target.classList.contains('social-button')) {
    socialWrapper.classList.add('social--active');
  } else {
    socialWrapper.classList.remove('social--active');
  }
});
