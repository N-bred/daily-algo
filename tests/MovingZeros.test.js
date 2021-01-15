const { moveZeros } = require('../kyu5')
const { expect } = require('@jest/globals')

test('Takes an array with multiple data type values, should return an array with all the values equal to 0, to the end while preserving the order of the original array', () => {
  expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toEqual([false, 1, 1, 2, 1, 3, 'a'])
})
