export default class Helloword extends HTMLElement {
  connectedCallback(){
    window.requestAnimationFrame(() => {
      this.innerHTML = '<div>HELLO WORLD</div>'
    })
  }
}
