// Factorial with cache for multiple function calls

const cache = {}
function factorial(n) {
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

// One liner

// const factorial = (n) => String(n <= 1 ? 1 : n * factorial(n - 1))

// TESTING
const INPUTS = [1, 5, 9, 15]

const OUTPUTS = ['1', '120', '362880', '1307674368000']

console.log(factorial(125))

// const result = INPUTS.map((input, i) => factorial(input) === OUTPUTS[i]).every((input) => input)

// console.log(result)
