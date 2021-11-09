export default function ShowDesc() {
  const AllSectionsAnimaisDesc = document.querySelectorAll('[data-animais="desc"] section');
  const imgs = document.querySelectorAll('img[src^="img/imagem"]');

  function handleClick(ref) {
    AllSectionsAnimaisDesc.forEach((i) => i.classList.remove('ativo-descAnimals'));
    const SectionSelcted = document.querySelector(`#${ref}`);
    const descricao = SectionSelcted.dataset.anime;
    SectionSelcted.classList.add('ativo-descAnimals', descricao);
  }
  imgs.forEach((img) => {
    img.addEventListener('click', () => {
      const ref = img.getAttribute('class');
      handleClick(ref);
    });
  });
  handleClick('raposa');
}
