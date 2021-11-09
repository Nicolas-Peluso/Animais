class ScrollSuave {
  constructor(links, options) {
    if (options === undefined) {
      this.options = {
        block: 'start',
        behavior: 'smooth',
      };
    } else this.options = options;
    this.navItems = document.querySelectorAll(links);
    this.scrollToSection = this.scrollToSection.bind(this);
  }

  scrollToSection() {
    this.navItems.forEach((itemNav) => {
      const id = itemNav.getAttribute('href');

      itemNav.addEventListener('click', (e) => {
        e.preventDefault();
        const section = document.querySelector(`${id}`);
        section.scrollIntoView(this.options);
      });
    });
  }

  init() {
    if (this.navItems.length) return null;
    this.navItems.forEach((link) => {
      link.addEventListener('click', this.scrollToSection);
    });
    return null;
  }
}

export default ScrollSuave;
