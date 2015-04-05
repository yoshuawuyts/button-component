const customElement = require('custom-element')

var ButtonProto = customElement(window.HTMLButtonElement.prototype)
ButtonProto.extends = 'button'

module.exports = ButtonProto
