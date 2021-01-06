const { expect } = require('@jest/globals')
const { LargeFactorial2 } = require('../kyu4/')

test('Receives a number and returns its factorial, works with bigint numbers', () => {
  const INPUTS = [1, 5, 9, 15, 125]
  const results = INPUTS.map((input) => LargeFactorial2(input))
  const expected = [
    '1',
    '120',
    '362880',
    '1307674368000',
    '188267717688892609974376770249160085759540364871492425887598231508353156331613598866882932889495923133646405445930057740630161919341380597818883457558547055524326375565007131770880000000000000000000000000000000',
  ]

  expect(results).toEqual(expect.arrayContaining(expected))
})
