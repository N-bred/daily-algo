// https://www.codewars.com/kata/5a045fee46d843effa000070

// Make Prime numbers list

function isPrime(n) {
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false
  }
  return true
}

function getPrimeNumbers(n) {
  const list = [2]
  for (let i = 3; i <= n; i += 2) {
    if (isPrime(i)) {
      list.push(i)
    }
  }
  return list
}

const formatStr = (arr) => `${arr[0]}${arr[1] > 1 ? `^${arr[1]}` : ''}`

function decomp(n) {
  const primes = getPrimeNumbers(n)
  const factors = {}

  for (let i = 2; i < n + 1; ++i) {
    if (primes.indexOf(i) !== -1) {
      factors[i] = 1
    } else {
      for (let p = 0; p < primes.length; ++p) {
        let subI = i
        while (subI % primes[p] === 0) {
          factors[primes[p]] += 1
          subI /= primes[p]
        }
      }
    }
  }

  return Object.entries(factors).map(formatStr).join(' * ')
}

module.exports = decomp
