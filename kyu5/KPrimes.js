// https://www.codewars.com/kata/5726f813c8dcebf5ed000a6b

function countKprimes(k, start, end) {
  const factors = Array.from({ length: end + 1 }, () => 0)

  for (let p = 2; p <= end + 1; ++p) {
    if (factors[p] === 0) {
      for (let i = p; i <= end + 1; i += p) {
        factors[i]++
      }
    }
  }

  const primes = []

  for (let i = start; i < end + 1; ++i) {
    if (factors[i] === k) {
      primes.push(i)
    }
  }

  return primes
}

console.log(countKprimes(2, 2, 60))
