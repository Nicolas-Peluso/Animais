export default function Cordiao() {
  const faqList = document.querySelectorAll('.faq-lista dt');
  faqList.forEach((faq) => {
    const dd = faq.nextElementSibling;
    faq.addEventListener('click', () => {
      dd.classList.toggle('showDD');
    });
  });
}
