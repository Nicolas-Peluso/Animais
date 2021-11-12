export default class Modal {
  constructor() {
    this.ModalAbrir = document.querySelector('[data-modal="abrir"]');
    this.ModalCOntainer = document.querySelector("[data-modal='container']");
    this.ModalFechar = document.querySelector('[data-modal="fechar"]');
    this.Form = document.querySelector('.modal form');
    this.ShowSenha = document.querySelector('.ShowSenha input');
    this.senhaInput = document.querySelector('input[type="password"]');
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.showSenha = this.showSenha.bind(this);
    this.clickForaModal = this.clickForaModal.bind(this);
  }

  abriModal(e) {
    e.preventDefault();
    this.ModalCOntainer.classList.add('ativo');
  }

  fecharModal(e) {
    e.preventDefault();
    this.ModalCOntainer.classList.remove('ativo');
  }

  toggleModal() {
    this.ModalCOntainer.classList.toggle('ativo');
  }

  eventToggleModal(e) {
    e.preventDefault();
    this.toggleModal();
  }

  clickForaModal(e) {
    if (e.target === this.ModalCOntainer) this.ModalCOntainer.classList.remove('ativo');
  }

  showSenha() {
    if (this.ShowSenha.checked) this.senhaInput.setAttribute('type', 'text');
    else this.senhaInput.setAttribute('type', 'password');
  }

  EventListeners() {
    this.ModalCOntainer.addEventListener('click', this.clickForaModal);

    this.ModalAbrir.addEventListener('click', this.eventToggleModal);

    this.ModalFechar.addEventListener('click', this.eventToggleModal);

    this.Form.addEventListener('submit', this.fecharModal);

    this.ShowSenha.addEventListener('click', this.showSenha);
  }

  init() {
    if (this.ModalCOntainer && this.ModalFechar && this.ModalAbrir) {
      this.EventListeners();
    }
  }
}
