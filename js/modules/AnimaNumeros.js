export default class InitAnimaNumeros {
  constructor(element, observerClass) {
    this.observer = undefined;
    this.Numeros = document.querySelectorAll(element);
    this.handleObserver = this.handleObserver.bind(this);
    this.observerClass = observerClass;
    this.ObserverTarget = document.querySelector('.numeros');
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
    let start = 0;
    const Incremento = total / 100;

    const tiamer = setInterval(() => {
      numero.innerText = start.toFixed(0);

      start += Incremento;
      if (start > total) {
        clearInterval(tiamer);
      }
    }, 10);
  }

  AnimaNumbers() {
    this.Numeros.forEach((numero) => {
      this.constructor.incrementarNumero(numero);
    });
  }

  handleObserver(muta) {
    if (muta[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect();
      this.AnimaNumbers();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleObserver);
    this.observer.observe(this.ObserverTarget, { attributes: true });
  }

  Init() {
    if (this.ObserverTarget && this.Numeros.length) this.addMutationObserver();
    return this;
  }
}
