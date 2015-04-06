const BtnProto = require('../')
const symbol = require('es6-symbol')

const count = symbol('count')

module.exports = BtnProto

BtnProto.on('created', function () {
  this[count] = 0
})

BtnProto.on('attribute', function (name, old, nw) {
  if (name !== 'count') return
  this.count = nw
})

Object.defineProperty(BtnProto.prototype, 'count', {
  get: function () {return this[count]},
  set: function (value) {
    if (this[count] === value) return
    this[count] = value
    this.textContent = 'clicked ' + this[count] + ' times'
  }
})
