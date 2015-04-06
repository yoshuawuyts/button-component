const symbol = require('es6-symbol')
const BtnProto = require('../')

const btn = Object.create(BtnProto)
const count = symbol('count')

module.exports = btn

btn.on('created', function () {
  this[count] = 0
  this.textContent = textContent(this[count])
})

btn.on('attribute', function (name, old, nw) {
  if (name !== 'count') return
  this.count = nw
})

Object.defineProperty(btn.prototype, 'count', {
  get: function () {return this[count]},
  set: function (value) {
    if (this[count] === value) return
    this[count] = value
    this.textContent = textContent(this[count])
  }
})

// create the text content
// textContent(Number:count) -> String:content
function textContent (count) {
  return 'clicked ' + count + ' times'
}
