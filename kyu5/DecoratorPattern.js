function Decorator(originalFunction, decorator) {
  return (arg, cb) => originalFunction(decorator(arg, cb))
}

function filter(arr, filterFunc) {
  return arr.filter(filterFunc)
}

function multiply(arr) {
  return arr.reduce((a, b) => a * b, 1)
}

module.exports = {
  Decorator,
  filter,
  multiply,
}
