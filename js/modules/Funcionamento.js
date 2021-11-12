export default class Functionamentos {
  constructor(dados, semana) {
    this.EstaAberto = document.querySelector(dados);
    this.funcionamento = document.querySelector(semana);
    this.diasSemana = this.funcionamento.dataset.semana.split(',').map((item) => +item);
    this.HorarioSemana = this.funcionamento.dataset.horario.split(',').map((item) => +item);

    this.DataAgora = new Date();
    this.DiaAgora = this.DataAgora.getDay();
    this.HorarioAgora = this.DataAgora.getUTCHours() - 3;
  }

  wasWorking() {
    if (this.diasSemana.includes(this.DiaAgora) && this.HorarioAgora >= this.HorarioSemana[0]
      && this.HorarioAgora < this.HorarioSemana[1]) {
      this.EstaAberto.classList.add('aberto');
    } else {
      this.EstaAberto.classList.add('fechado');
    }
  }

  init() {
    this.wasWorking();
  }
}
