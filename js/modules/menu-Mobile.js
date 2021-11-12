import outside from './OutsideClick.js';

export default class menuMobile {
  constructor(lista, button) {
    this.menu = document.querySelector(lista);
    this.button = document.querySelector(button);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.menu.classList.toggle('active');
    this.button.classList.toggle('active');
    outside(() => {
      this.menu.classList.remove('active');
      this.button.classList.remove('active');
    }, this.menu);
  }

  init() {
    if (this.menu && this.button) this.button.addEventListener('click', this.handleClick);
    return this;
  }
}
