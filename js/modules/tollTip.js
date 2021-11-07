export default function initTolltip() {
  const Tolltips = document.querySelectorAll("[data-tollTip='Tolltip']");

  const mouseMove = {
    handleEvent(event) {
      console.log(this.tolltip);
      this.tolltip.style.top = `${event.pageY + 20} px`;
      this.tolltip.style.left = `${event.pageX + 20} px`;
    },
  };

  const onMouseLeave = {
    handleEvent() {
      this.tollTipBox.remove();
      this.elemento.removeEventListener('mouseleave', onMouseLeave);
      this.elemento.removeEventListener('mousemove', mouseMove);
    },
  };

  function criarTollBox(element) {
    const tollTipBox = document.createElement('div');
    const Text = element.getAttribute('aria-label');
    tollTipBox.classList.add('TollTip');
    tollTipBox.innerHTML = Text;
    document.body.appendChild(tollTipBox);
    return tollTipBox;
  }
  function onMouseover() {
    const tooltipBox = criarTollBox(this);

    mouseMove.tolltip = tooltipBox;
    this.addEventListener('mousemove', mouseMove);

    onMouseLeave.tollTipBox = tooltipBox;
    onMouseLeave.elemento = this;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  Tolltips.forEach((toll) => {
    toll.addEventListener('mouseover', onMouseover);
  });
}
