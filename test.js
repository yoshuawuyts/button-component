require('webcomponents.js')

const test = require('tape')

document.registerElement('custom-button', require('./'))

test('should set prototype correctly', function (t) {
  t.plan(3)
  const el = document.createElement('button', 'custom-button')
  t.equal(el.nodeName, 'BUTTON')
  t.ok(el instanceof window.HTMLButtonElement, 'prototype')
  t.equal(el.getAttribute('is'), 'custom-button')
})
