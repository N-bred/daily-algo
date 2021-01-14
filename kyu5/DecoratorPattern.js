class Decorator {
  constructor(value) {
    this.value = value
    this.decorators = []
  }

  addDecorator(...decorators) {
    this.decorators.push(...decorators)
    return this
  }

  apply() {
    this.decorators.forEach((decorator) => {
      this.value = decorator(this.value)
    })
    return this
  }

  return() {
    return this.value
  }
}

function filter(filterFunc) {
  return (arr) => arr.filter(filterFunc)
}

function multiply(multFunction, initialValue) {
  return (arr) => arr.reduce(multFunction, initialValue)
}

function sort(sortFunc) {
  return (arr) => arr.sort(sortFunc)
}

function pow(powFunc) {
  return (arr) => arr.map(powFunc)
}

function sum(sumFunc, initialValue) {
  return (arr) => arr.reduce(sumFunc, initialValue)
}

module.exports = {
  Decorator,
  filter,
  multiply,
  sort,
  pow,
  sum,
}
