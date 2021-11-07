function scrollSuave() {
  const navItems = document.querySelectorAll('a[href^="#"]');

  navItems.forEach((itemNav) => {
    const id = itemNav.getAttribute('href');

    itemNav.addEventListener('click', (e) => {
      e.preventDefault();
      const section = document.querySelector(`${id}`);

      window.scrollTo({
        top: section.offsetTop,
        left: 0,
        behavior: 'smooth',
      });
    });
  });
}

export default scrollSuave;
