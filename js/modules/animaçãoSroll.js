import Debouncing from '../helper/debouncing.js';

export default class ScrollAnima {
  constructor(target) {
    this.sections = document.querySelectorAll(target);
    this.TotalTop = (window.innerHeight * 70) / 100;
    this.checkDistance = Debouncing(this.checkDistance.bind(this), 50);
  }

  getDistance() {
    this.Distance = Array.from(this.sections).map(((section) => {
      const SectionTop = section.offsetTop;
      return {
        element: section,
        distancia: Math.floor(SectionTop - this.TotalTop),
      };
    }));
    console.log(this.Distance);
  }

  checkDistance() {
    console.log(window.pageYOffset);
    this.Distance.forEach((item) => {
      if (window.pageYOffset > item.distancia) item.element.classList.add('ativo');
      else if (item.element.classList.contains('ativo')) item.element.classList.remove('ativo');
    });
  }

  init() {
    // a função de callback esta sendo ativada por uma arrow function
    // pois arrow functions nao sobre escreve o constexto do this
    if (this.sections.length) {
      this.getDistance();
      this.checkDistance();
      window.addEventListener('scroll', () => this.checkDistance());
    }
    return this;
  }
}
