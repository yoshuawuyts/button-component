// create instance
document.registerElement('custom-button', require('./button'))
const customButton = document.createElement('button', 'custom-button')
customButton.innerText = 'clicked ${count} times'

// update the click counter and set the clicked text
customButton.addEventListener('click', function () {
  this.count = this.count + 1
})

// attach button to dom
document.body.appendChild(customButton)
