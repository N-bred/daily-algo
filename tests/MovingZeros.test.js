const { moveZeros } = require('../kyu5')
const { expect } = require('@jest/globals')

test('Takes an array with multiple data type values, should return an array with all the values equal to 0, to the end while preserving the order of the original array', () => {
  expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a'])).toEqual(expect.arrayContaining([false, 1, 1, 2, 1, 3, 'a', 0, 0]))
})

test('2 Takes an array with multiple data type values, should return an array with all the values equal to 0, to the end while preserving the order of the original array', () => {
  expect(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, 'a', 'b', 0, 'c', 1, 4, 5, 6, 7, 0, 'x', 2, { a: 'value' }])).toEqual(
    expect.arrayContaining([false, 1, 1, 2, 1, 3, 'a', 'b', 'c', 1, 4, 5, 6, 7, 'x', 2, { a: 'value' }, 0, 0, 0, 0])
  )
})

test('3 Takes an array with multiple data type values, should return an array with all the values equal to 0, to the end while preserving the order of the original array', () => {
  expect(moveZeros([9, 0, 0, 9, 1, 2, 0, 1, 0, 1, 0, 3, 0, 1, 9, 0, 0, 0, 0, 9])).toEqual(
    expect.arrayContaining([9, 9, 1, 2, 1, 1, 3, 1, 9, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  )
})

test('3 Takes an array with multiple data type values, should return an array with all the values equal to 0, to the end while preserving the order of the original array', () => {
  expect(moveZeros(['a', 0, 0, 'b', null, 'c', 'd', 0, 1, false, 0, 1, 0, 3, [], 0, 1, 9, 0, 0, {}, 0, 0, 9])).toEqual(
    expect.arrayContaining(['a', 'b', null, 'c', 'd', 1, false, 1, 3, [], 1, 9, {}, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
  )
})
