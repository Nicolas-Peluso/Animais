export default class Cordiao {
  constructor() {
    this.faqList = document.querySelectorAll('.faq-lista dt');
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
    console.log(this.faqList);
  }
}
