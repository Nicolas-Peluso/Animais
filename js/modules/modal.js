export default function Modal() {
  const ModalAbrir = document.querySelector('[data-modal="abrir"]');
  const ModalCOntainer = document.querySelector("[data-modal='container']");
  const ModalFechar = document.querySelector('[data-modal="fechar"]');
  const Form = document.querySelector('.modal form');
  const ShowSenha = document.querySelector('.ShowSenha input');
  const senhaInput = document.querySelector('input[type="password"]');

  function abriModal(e) {
    e.preventDefault();
    ModalCOntainer.classList.add('ativo');
  }

  function fecharModal(e) {
    e.preventDefault();
    ModalCOntainer.classList.remove('ativo');
  }

  function clickForaModal(e) {
    if (e.target === this) ModalCOntainer.classList.remove('ativo');
  }

  function showSenha() {
    if (ShowSenha.checked) senhaInput.setAttribute('type', 'text');
    else senhaInput.setAttribute('type', 'password');
  }

  if (ModalCOntainer && ModalFechar && ModalAbrir) {
    ModalCOntainer.addEventListener('click', clickForaModal);

    ModalAbrir.addEventListener('click', abriModal);

    ModalFechar.addEventListener('click', fecharModal);

    Form.addEventListener('submit', fecharModal);

    ShowSenha.addEventListener('click', showSenha);
  }
}
