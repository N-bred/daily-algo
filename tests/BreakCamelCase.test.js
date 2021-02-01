const { BreakCamelCase } = require('../kyu6')

test('Receives a string in camel case and should return the string splittled', () => {
  expect(BreakCamelCase('camelCase')).toEqual('camel Case')
})
