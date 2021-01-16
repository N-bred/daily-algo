const { variance } = require('../kyu5')
const { expect } = require('@jest/globals')

test('Receives an array of numbers and returns its variance', () => {
  const INPUT = [-10, 0, 10, 20, 30]
  expect(variance(INPUT).toFixed(4)).toEqual('200.0000')
})

test('Receives an array of numbers and returns its variance', () => {
  const INPUT = [1.5, 2.5, 4, 2, 1, 1]
  expect(variance(INPUT).toFixed(4)).toEqual('1.0833')
})
