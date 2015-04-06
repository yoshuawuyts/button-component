// create instance
document.registerElement('custom-button', require('./button'))
const customButton = document.createElement('button', 'custom-button')

const startCount = 0
customButton.setAttribute('data-count', startCount)
customButton.textContent = textContent(startCount)

document.body.appendChild(customButton)

// update the click counter and set the clicked text
customButton.addEventListener('click', function () {
  customButton.count = customButton.count + 1
})

// create a the text content
// textContent(Number:count) -> String:content
function textContent (count) {
  return 'clicked ' + count + ' times'
}
