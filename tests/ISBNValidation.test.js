const { expect } = require('@jest/globals')
const validISBN10 = require('../kyu5')

test('Receives a number quantity in a string and returns true if they match ISBN10', () => {
  const INPUTS = ['1112223339', '1234554321', '048665088X']
  const OUTPUTS = [true, true, true]
  const results = INPUTS.map((input) => validISBN10(input))
  expect(results).toEqual(expect.arrayContaining(OUTPUTS))
})

test("Receives a number quantity in a string and returns true if they don't match ISBN10", () => {
  const INPUTS = ['111222333', '1112223339X', '1234512345', 'X123456788']
  const OUTPUTS = [false, false, false, false]
  const results = INPUTS.map((input) => validISBN10(input))
  expect(results).toEqual(expect.arrayContaining(OUTPUTS))
})
