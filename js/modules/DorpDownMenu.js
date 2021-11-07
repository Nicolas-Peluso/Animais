import outside from './OutsideClick.js';

export default function DropDownMenu() {
  const ElementMenu = document.querySelectorAll('[data-dropDown]');
  const UserEvents = ['click', 'touchstart'];

  function MenuHandleClick(e) {
    e.preventDefault();
    this.classList.add('ativoSubMenu');

    outside(() => this.classList.remove('ativoSubMenu'), this);
  }
  ElementMenu.forEach((menu) => {
    UserEvents.forEach((UserEvent) => menu.addEventListener(UserEvent, MenuHandleClick));
  });
}
