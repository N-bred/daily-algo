const { Decorator, filter, multiply, sort, pow, sum } = require('../kyu5/DecoratorPattern')
const { expect } = require('@jest/globals')

test('Decorator is instantiated with the value to work with, then receives the decorators to apply, should return the product of a filtered array', () => {
  const decorator = new Decorator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  const result = decorator
    .addDecorator(
      filter((el) => el % 2 === 0),
      multiply((a, b) => a * b, 1)
    )
    .apply()
    .return()

  expect(result).toEqual(3840)
})

test('Decorator is instantiated with the value to work with, then receives the decorators to apply, should return the sum of a filtered, sorted, and powed array', () => {
  const decorator = new Decorator([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

  const result = decorator
    .addDecorator(
      filter((el) => el % 2 !== 0),
      sort((a, b) => a < b),
      pow((el) => el ** 3),
      sum((a, b) => a + b, 0)
    )
    .apply()
    .return()

  expect(result).toEqual(1225)
})
