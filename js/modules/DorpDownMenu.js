import outside from './OutsideClick.js';

export default class DropDownMenu {
  constructor(target) {
    this.ElementMenu = document.querySelectorAll(target);
    this.UserEvents = ['click', 'touchstart'];
  }

  MenuHandleClick(e) {
    e.preventDefault();
    this.classList.add('ativoSubMenu');

    outside(() => this.classList.remove('ativoSubMenu'), this);
  }

  events() {
    this.ElementMenu.forEach((menu) => {
      this.UserEvents.forEach((UserEvent) => {
        menu.addEventListener(UserEvent, this.MenuHandleClick);
      });
    });
  }

  init() {
    if (this.ElementMenu.length) this.events();
  }
}
