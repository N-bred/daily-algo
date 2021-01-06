const { expect } = require('@jest/globals')
const { HumanReadableTime } = require('../kyu4/')

test('Receives a number of seconds and returns a Human Readable Time format as in 00:00:00', () => {
  const INPUTS = [0, 5, 60, 86399, 359999]
  const results = INPUTS.map((input) => HumanReadableTime(input))
  const expected = ['00:00:00', '00:00:05', '00:01:00', '23:59:59', '99:59:59']

  expect(results).toEqual(expect.arrayContaining(expected))
})
