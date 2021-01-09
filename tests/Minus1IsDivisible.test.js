const { minus1IsDivisible } = require('../kyu5')

test('Receives 2 numbers, does the logic required and returns a number', () => {
  expect(minus1IsDivisible(1000000000, 649735194)).toEqual(16)
})
