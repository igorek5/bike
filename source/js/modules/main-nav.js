const mainNav = document.querySelector('.main-nav');
const mainNavButton = document.querySelector('.main-nav__toggle');
const navLinks = document.querySelectorAll('.main-nav__link');

const isEscEvent = (evt) => evt.key === 'Escape' || evt.key === 'Esc';

const closeMenu = () => {
  mainNav.classList.remove('open');
  document.body.classList.remove('no-scroll');
};

const setInitialStateMenu = () => {
  if (mainNav) {
    mainNav.classList.remove('open');
    mainNav.classList.remove('no-js');
    mainNavButton.addEventListener('click', function (evt) {
      evt.preventDefault();
      mainNav.classList.toggle('open');
      document.body.classList.toggle('no-scroll');
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
    el.addEventListener('click', (evt) => {
      evt.preventDefault();
      closeMenu();
      setAnchorScroll(elementHref);
    });
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
