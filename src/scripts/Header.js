export default class Header {
  constructor(elem) {
    this.elem = elem;
    this.buttonNavigation = this.elem.querySelector(
      '.header__button-navigation'
    );
    this.navLinks = this.elem.querySelectorAll('.navigation__link');
  }

  init() {
    this.addListeners();
  }

  addListeners() {
    this.buttonNavigation.addEventListener('click', () => {
      this.elem.classList.toggle('header--show-navigation');
    });
    this.navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        this.elem.classList.remove('header--show-navigation');
      });
    });
  }
}
