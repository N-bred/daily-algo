const { variance } = require('../kyu5')
const { expect } = require('@jest/globals')

test('Receives an array of numbers and returns its variance', () => {
  const INPUT = [-10, 0, 10, 20, 30]
  expect(variance(INPUT)).toEqual('200.0000')
})
