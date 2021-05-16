const DEFAULT_COLOR = 'black';
export default class Helloword extends HTMLElement {
  get color () {
    return this.getAttribute('color') || DEFAULT_COLOR
  }

  set color (value) {
    this.setAttribute('color', value);
  }
  connectedCallback(){
    window.requestAnimationFrame(() => {
      const div = document.createElement('div');
      div.innerHTML = '<div>HELLO WORLD</div>'

      div.style.color = this.color


      this.appendChild(div)
    })
  }
}
