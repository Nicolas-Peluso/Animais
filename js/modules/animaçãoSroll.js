export default function Scrolldefault() {
  const sections = document.querySelectorAll('.js-scroll');
  const TotalTop = (window.innerHeight * 70) / 100;
  window.addEventListener('scroll', () => {
    sections.forEach((section) => {
      const { top } = section.getBoundingClientRect();

      if (top < TotalTop) section.classList.add('ativo');

      else if (section.classList.contains('ativo')) section.classList.remove('ativo');
    });
  });
}
