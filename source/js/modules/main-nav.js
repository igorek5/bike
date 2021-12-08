const mainNav = document.querySelector('.main-nav');
const mainNavButton = document.querySelector('.main-nav__toggle');
const body = document.querySelector('body');
const navLinks = document.querySelectorAll('.main-nav__link');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closeMenu = () => {
  mainNav.classList.remove('open');
  body.classList.remove('no-scroll');
};

const setInitialStateMenu = () => {
  if (mainNav) {
    mainNav.classList.remove('open');
    mainNav.classList.remove('no-js');
    mainNavButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      mainNav.classList.toggle('open');
      body.classList.toggle('no-scroll');
    });
  }
};

const setAnchorScroll = (elementHref) => {
  const elementId = document.querySelector(elementHref);
  if (elementId) {
    elementId.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

const setClickLink = () => {
  navLinks.forEach((el) => {
    const elementHref = el.getAttribute('href');
    if (elementHref[0] !== '#') {
      return;
    }
    el.addEventListener('click', function (evt) {
      evt.preventDefault();
      closeMenu();
      setAnchorScroll(elementHref);
    });
  });
};

const setСloseMenuEsc = () => {
  document.addEventListener('keydown', function (evt) {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeMenu();
    }
  });
};

const setMenuControl = () => {
  setClickLink();
  setInitialStateMenu();
  setСloseMenuEsc();
};

export {setMenuControl};
