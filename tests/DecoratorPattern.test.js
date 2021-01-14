const { Decorator, filter, multiply } = require('../kyu5/DecoratorPattern')
const { expect } = require('@jest/globals')

test('Decorator receives two functions and returns a function with the functionality combined', () => {
  const decoratedMultiply = Decorator(multiply, filter)
  expect(decoratedMultiply([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], (el) => el % 2 === 0)).toEqual(3840)
})
