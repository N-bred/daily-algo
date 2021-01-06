const { expect } = require('@jest/globals')
const { LargeFactorial } = require('../kyu4/')

test('Receives a number and returns its factorial, works with bigint numbers', () => {
  const INPUTS = [1, 5, 9, 15]
  const results = INPUTS.map((input) => LargeFactorial(input))
  const expected = ['1', '120', '362880', '1307674368000']

  expect(results).toEqual(expect.arrayContaining(expected))
})
