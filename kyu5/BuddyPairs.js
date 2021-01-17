// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

function getSumOfProperDivisors(n) {
  let divisors = 0
  for (let i = 0; i < n; ++i) {
    if (n % i === 0) {
      divisors += i
    }
  }
  return divisors
}

function buddy(min, max) {
  for (let i = min; i <= max; ++i) {
    const sum = getSumOfProperDivisors(i)
    if (sum > i) {
      const otherSum = getSumOfProperDivisors(sum - 1)
      if (otherSum - 1 === i) {
        return [i, sum - 1]
      }
    }
  }
}

module.exports = buddy
