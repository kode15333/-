import HelloWorld from './componenet/helloword.js'

window
  .customElements
  .define('hello-world', HelloWorld)

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
