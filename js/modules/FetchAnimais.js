export function createAnimal(Animal) {
  const div = document.createElement('div');
  const Numeros = document.querySelector('.numeros-grid');
  div.classList.add('numero-animal');
  div.innerHTML = `<h3>${Animal.especie}</h3> 
  <span>${Animal.total}</span> `;
  Numeros.appendChild(div);
}
export default async function fetchAnimais() {
  const request = await fetch('./AnimaisApi.json');
  const response = await request.json();

  response.forEach((Animal) => createAnimal(Animal));
}
