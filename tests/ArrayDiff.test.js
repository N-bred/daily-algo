const { arrayDiff } = require('../kyu6')

const { expect } = require('@jest/globals')

test('Receives two arrays and returns one with the difference between the two inputs', () => {
  expect(arrayDiff([3, 4], [3])).toEqual(expect.arrayContaining([4]))
})
