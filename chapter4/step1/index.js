import Helloword from './componenet/helloword.js'

window
  .customElements
  .define('hello-world', Helloword)

const changeColorTo = color => {
  document
    .querySelectorAll('hello-world')
    .forEach(helloworld => {
    helloworld.color = color
  })
}
document
  .querySelector('button')
  .addEventListener('click', () => {
    changeColorTo('blue');
  })
