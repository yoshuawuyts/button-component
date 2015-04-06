// create instance
document.registerElement('custom-button', require('./button'))
const customButton = document.createElement('button', 'custom-button')

document.body.appendChild(customButton)

// update the click counter and set the clicked text
customButton.addEventListener('click', function () {
  this.count = this.count + 1
})
