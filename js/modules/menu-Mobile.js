import outside from './OutsideClick.js';

export default function menuMobile() {
  const menu = document.querySelector('[data-menu="lista"]');
  const button = document.querySelector('[data-menu="button"]');

  function handleClick() {
    menu.classList.toggle('active');
    button.classList.toggle('active');
  }
  outside(() => {
    menu.classList.remove('active');
    button.classList.remove('active');
  }, menu);

  button.addEventListener('click', handleClick);
}
