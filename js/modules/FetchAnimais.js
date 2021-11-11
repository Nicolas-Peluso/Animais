import InitAnimaNumeros from './AnimaNumeros.js';

export default function fetchAnimais(url, target) {
  function CriarAnimal(Animal) {
    const div = document.createElement('div');
    div.classList.add('numero-animal');
    div.innerHTML = `<h3>${Animal.especie}</h3> 
  <span>${Animal.total}</span> `;
    return div;
  }

  async function criarAnimais() {
    const request = await fetch(url);
    const response = await request.json();
    const Numeros = document.querySelector(target);
    response.forEach((Animal) => {
      const DivAnimal = CriarAnimal(Animal);
      Numeros.appendChild(DivAnimal);
    });

    if (request.ok) {
      const animaNumeros = new InitAnimaNumeros('.numeros-grid span', 'ativo');
      animaNumeros.Init();
    }
  }
  return criarAnimais();
}
