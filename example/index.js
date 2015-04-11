// create instance
document.registerElement('custom-button', require('./button'))
const customButton = document.createElement('button', 'custom-button')
customButton.innerText = 'clicked ${count} times'

// attach button to dom
document.body.appendChild(customButton)
