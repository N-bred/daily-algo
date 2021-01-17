// https://www.codewars.com/kata/59ccf051dcc4050f7800008f

function getSumOfProperDivisors(n) {
  if (n === 1) return 1
  let divisors = 0
  for (let i = 2; i <= Math.sqrt(n); ++i) {
    if (n % i === 0) {
      if (i === n / i) {
        divisors += i
      } else {
        divisors += i + n / i
      }
    }
  }
  return divisors
}

function buddy(min, max) {
  for (let i = min; i <= max; ++i) {
    const sum = getSumOfProperDivisors(i)
    if (sum > i) {
      const otherSum = getSumOfProperDivisors(sum)
      if (otherSum === i) {
        return [i, sum]
      }
    }
  }
  return 'Nothing'
}

module.exports = buddy
