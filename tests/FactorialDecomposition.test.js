const { decomp } = require('../kyu5')
const { expect } = require('@jest/globals')

test("Decomp takes a number should return the number's factorial decomposed into its prime factors", () => {
  expect(decomp(12)).toEqual('2^10 * 3^5 * 5^2 * 7 * 11')
})
