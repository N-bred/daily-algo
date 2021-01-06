const { expect } = require('@jest/globals')
const { NextBiggerNumber } = require('../kyu4/')

test('Receives a chunk of numbers and returns the next bigger number with those same numbers', () => {
  const INPUTS = [2017, 12, 513, 414, 144, 491, 40883650394]
  const results = INPUTS.map((input) => NextBiggerNumber(input))
  const expected = [2071, 21, 531, 441, 414, 914, 40883650439]

  expect(results).toEqual(expect.arrayContaining(expected))
})

test('Receives numbers that cannot be configured to give a bigger value and returns -1', () => {
  const INPUTS = [111, 9, 531]
  const results = INPUTS.map((input) => NextBiggerNumber(input))
  const expected = [-1, -1, -1]
  expect(results).toEqual(expect.arrayContaining(expected))
})
