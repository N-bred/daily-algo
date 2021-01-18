const { decomp } = require('../kyu5')
const { expect } = require('@jest/globals')

test("Decomp takes a number should return the number's factorial decomposed into its prime factors", () => {
  expect(decomp(12)).toEqual('2^10 * 3^5 * 5^2 * 7 * 11')
})

test("Decomp takes a number should return the number's factorial decomposed into its prime factors", () => {
  expect(decomp(25)).toEqual('2^22 * 3^10 * 5^6 * 7^3 * 11^2 * 13 * 17 * 19 * 23')
})
