const { calculate1RM } = require('../kyu6')

test('Receives an array with w and r and should return the correct value', () => {
  expect(calculate1RM(135, 20)).toEqual(282)
})

test('Receives an array with w and r and should return the correct value', () => {
  expect(calculate1RM(200, 8)).toEqual(253)
})
test('Receives an array with w and r and should return the correct value', () => {
  expect(calculate1RM(400, 0)).toEqual(0)
})

test('Receives an array with w and r and should return the correct value', () => {
  expect(calculate1RM(270, 2)).toEqual(289)
})

test('Receives an array with w and r and should return the correct value', () => {
  expect(calculate1RM(234, 3)).toEqual(261)
})
