const customElement = require('custom-element')
const symbol = require('es6-symbol')

const textContent = symbol('textContent')
const count = symbol('count')

const btn = customElement(window.HTMLButtonElement.prototype)
btn.extends = 'button'

module.exports = btn

btn.on('created', function () {
  this[count] = 0
})

btn.on('attached', function () {
  this[textContent] = this.textContent
  this.textContent = fmtText(this[textContent], this[count])
})

btn.once('attached', function () {
  addClickListener(this)
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
    this.textContent = fmtText(this[textContent], this[count])
  }
})

// update the click counter and set the clicked text
// obj -> null
function addClickListener (ctx) {
  ctx.addEventListener('click', function () {
    ctx.count = ctx.count + 1
  })
}

// create the text content
// str, num -> str
function fmtText (content, count) {
  return content.replace(/\$\{count\}/g, count)
}
