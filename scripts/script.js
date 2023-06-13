const pinkLink = document.querySelector('.pink-link');
const modal = document.querySelector('.modal-container');
const closeButton = document.querySelector('.modal-close-button');
const next = document.querySelector('.slider-next');
const prev = document.querySelector('.slider-prev');
const sliderItemsTags = document.querySelectorAll('.frame-item');
const bullets = document.querySelectorAll('.bullet-button');

pinkLink.addEventListener('click', (evt) => {
    evt.preventDefault();
    modal.classList.remove('modal-container-close');
});

closeButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  modal.classList.add('modal-container-close');
});

const model = [true, false, false];

document.body.classList.add('theme-1');

const renderActiveScreen = (index) => {
  document.querySelector('.frame-item-active').classList.remove('frame-item-active');
  const sliderItems = Array.from(sliderItemsTags);
  sliderItems[index].classList.add('frame-item-active');
  sliderItems.slice(index).forEach((item, i) => {
  item.style.order = i;
  });

  sliderItems.slice(0, index).forEach((item, i) => {
    item.style.order = sliderItems.length - index + i;
  });

  document.body.classList.remove(...document.body.classList);
  document.body.classList.add(`theme-${index + 1}`);

  document.querySelector('.bullet-active').classList.remove('bullet-active');
  Array.from(bullets)[index].classList.add('bullet-active');
}

const getNextScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current < model.length - 1 ? current + 1 : 0;
  model[current] = true;
  return current;
};


const getPrevScreen = () => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = current > 0 ? current - 1 : model.length - 1;
  model[current] = true;
  return current;
};

const getActiveScreen = (index) => {
  let current = model.findIndex((item) => item === true);
  model[current] = false;
  current = index;
  model[current] = true;
  return current;
};

next.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getNextScreen());
});

prev.addEventListener('click', (evt) => {
  evt.preventDefault();
  renderActiveScreen(getPrevScreen());
});

bullets.forEach((bullet, index) => {
bullet.addEventListener('click', (evt) =>{
  evt.preventDefault();
  renderActiveScreen(getActiveScreen(index));
})
});
