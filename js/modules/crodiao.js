export default class Cordiao {
  constructor(dt) {
    this.faqList = document.querySelectorAll(dt);
  }

  faqMake() {
    this.faqList.forEach((faq) => {
      const dd = faq.nextElementSibling;
      faq.addEventListener('click', () => {
        dd.classList.toggle('showDD');
      });
    });
  }

  initAcordiao() {
    if (this.faqList[0].outerHTML.startsWith('<dt>') && this.faqList[0].nextElementSibling.outerHTML.startsWith('<dd')) {
      this.faqMake();
    } else console.log('voce deve ter um dl seguida por um dt, o elemeto passado nao corresponde a esses parametros');
    return this;
  }
}
