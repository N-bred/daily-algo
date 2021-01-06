// Factorial with cache for multiple function calls

const cache = {}
function factorialCache(n) {
  function helper(n) {
    if (n <= 1) return 1
    if (cache[n]) return cache[n]
    cache[n] = n * helper(n - 1)
    return cache[n]
  }
  return helper(n).toString()
}

// Regular factorial

function factorial(n) {
  if (n <= 1) return String(1)
  return String(BigInt(n * factorial(n - 1)))
}

module.exports = factorial
