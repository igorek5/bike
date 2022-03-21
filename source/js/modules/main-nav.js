import {scrollMenu} from './scroll';

const mainNav = document.querySelector('.main-nav');
const mainNavButton = document.querySelector('.main-nav__toggle');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closeMenu = () => {
  mainNav.classList.remove('open');
  document.body.classList.remove('no-scroll');
};

const setInitialStateMenu = () => {
  mainNav.classList.remove('open');
  mainNavButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    mainNav.classList.toggle('open');
    document.body.classList.toggle('no-scroll');
  });
};

const setClickLink = () => {
  mainNav.addEventListener('click', (evt) => {
    if (evt.target.classList.contains('main-nav__link')) {
      evt.preventDefault();
      closeMenu();
      scrollMenu(evt.target.getAttribute('href'));
    }
  });
};

const setCloseMenuEsc = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMenu();
    }
  });
};

export const setMenuControl = () => {
  if (mainNav) {
    setClickLink();
    setInitialStateMenu();
    setCloseMenuEsc();
  }
};
