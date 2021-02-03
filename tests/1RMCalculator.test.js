const { calculate1RM } = require('../kyu6')

test('Receives an array with w and r and should return the correct value', () => {
  expect(calculate1RM([135, 20])).toEqual(282)
})

test('Receives an array with w and r and should return the correct value', () => {
  expect(calculate1RM([200, 8])).toEqual(253)
})
