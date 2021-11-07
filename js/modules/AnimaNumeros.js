export default function initAnimaNumeros() {
  function AnimaNumbers() {
    const Numeros = document.querySelectorAll('.numero-animal span');
    Numeros.forEach((Numero) => {
      const total = +Numero.innerText;
      let start = 0;
      const Incremento = total / 100;

      const tiamer = setInterval(() => {
        Numero.innerText = start.toFixed(0);

        start += Incremento;
        if (start > total) {
          clearInterval(tiamer);
        }
      }, 10);
    });
  }
  let observer;

  function handleObserver(muta) {
    if (muta[0].target.classList.contains('ativo')) {
      observer.disconnect();
      AnimaNumbers();
    }
  }
  observer = new MutationObserver(handleObserver);
  const ObserverTarget = document.querySelector('.numeros');

  observer.observe(ObserverTarget, { attributes: true });
}
