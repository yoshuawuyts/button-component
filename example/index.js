document.registerElement('custom-button', require('../'))

var count = 0

const customButton = document.createElement('button', 'custom-button')
customButton.textContent = 'clicked ' + count + ' times'
customButton.addEventListener('click', setClickedText)

document.body.appendChild(customButton)

// update the click counter and set the clicked text
// setClickedText() -> Null
function setClickedText () {
  count++
  customButton.textContent = 'clicked ' + count + ' times'
}
