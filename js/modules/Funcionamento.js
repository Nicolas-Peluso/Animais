export default function initFuncionamento() {
  const EstaAberto = document.querySelector('.dados');
  const funcionamento = document.querySelector('[data-Semana]');
  const diasSemana = funcionamento.dataset.semana.split(',').map((item) => +item);
  const HorarioSemana = funcionamento.dataset.horario.split(',').map((item) => +item);

  const DataAgora = new Date();
  const DiaAgora = DataAgora.getDay();
  const HorarioAgora = DataAgora.getHours();

  if (diasSemana.includes(DiaAgora) && HorarioAgora >= HorarioSemana[0]
    && HorarioAgora < HorarioSemana[1]) {
    EstaAberto.classList.add('aberto');
  } else {
    EstaAberto.classList.add('fechado');
  }
}
