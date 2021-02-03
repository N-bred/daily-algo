const { firstNSmallest } = require('../kyu6')

test('Receives an array and returns the smallest numbers in it, in the original order', () => {
  expect(firstNSmallest([5, 4, 3, 2, 1], 3)).toEqual([3, 2, 1])
})
