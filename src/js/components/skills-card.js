const cardsWrapper = document.querySelector('.skills__list');

cardsWrapper.addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('skill-card__title')) {
    const activeCard = cardsWrapper.querySelector('.skill-card__title--active');


    activeCard.classList.remove('skill-card__title--active');
    e.target.classList.add('skill-card__title--active');

  }
});
