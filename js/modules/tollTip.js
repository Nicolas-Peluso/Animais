export default class Tolltip {
  constructor(tolltips) {
    this.Tolltips = document.querySelectorAll(tolltips);
    this.onMouseover = this.onMouseover.bind(this);
    this.onMouseLeave = this.onMouseLeave.bind(this);
    this.mouseMove = this.mouseMove.bind(this);
  }

  mouseMove(event) {
    this.tollTipBox.style.top = `${event.pageY + 20}px`;
    this.tollTipBox.style.left = `${event.pageX + 20}px`;
  }

  onMouseLeave({ currentTarget }) {
    this.tollTipBox.remove();
    currentTarget.removeEventListener('mouseleave', this.onMouseLeave);
    currentTarget.removeEventListener('mousemove', this.mouseMove);
  }

  onMouseover({ currentTarget }) {
    this.criarTollBox(currentTarget);

    currentTarget.addEventListener('mousemove', this.mouseMove);
    currentTarget.addEventListener('mouseleave', this.onMouseLeave);
  }

  criarTollBox(element) {
    const tollTipBox = document.createElement('div');
    const Text = element.getAttribute('aria-label');
    tollTipBox.classList.add('TollTip');
    tollTipBox.innerHTML = Text;
    document.body.appendChild(tollTipBox);
    this.tollTipBox = tollTipBox;
  }

  addEventListenerr() {
    this.Tolltips.forEach((tolltip) => {
      tolltip.addEventListener('mouseover', this.onMouseover);
    });
  }

  init() {
    if (this.Tolltips.length) this.addEventListenerr();
    return this;
  }
}
