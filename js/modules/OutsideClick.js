export default function outside(callBack, DefautElement) {
  const data = 'data-outside';
  const html = document.documentElement;

  function handleOutsideClick(e) {
    if (!DefautElement.contains(e.target)) {
      callBack();
      html.removeEventListener('click', handleOutsideClick);
      DefautElement.removeAttribute(data);
    }
  }

  if (DefautElement.getAttribute(data) === null) {
    setTimeout(() => { html.addEventListener('click', handleOutsideClick); });
    DefautElement.setAttribute(data, '');
  }
}
