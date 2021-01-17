const { buddy } = require('../kyu5')
const { expect } = require('@jest/globals')

test('Receives two numbers denoting the limits to look for the numbers to return, should return a pair of numbers which are buddies', () => {
  expect(buddy(23, 4669)).toEqual(expect.arrayContaining([48, 75]))
})

test('Receives two numbers denoting the limits to look for the numbers to return, should return a pair of numbers which are buddies', () => {
  expect(buddy(4700, 7000)).toEqual(expect.arrayContaining([5775, 6128]))
})
