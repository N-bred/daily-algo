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
  for (let i = 3; i < n; i += 2) {
    if (isPrime(i)) {
      list.push(i)
    }
  }
  return list
}

// Make factorial function

function factorial(n) {
  if (typeof n === 'number') n = BigInt(n)
  if (n <= 1n) return 1n
  return n * factorial(n - 1n)
}

const formatStr = (arr) => `${arr[0]}${arr[1] > 1 ? `^${arr[1]}` : ''}`

// Do logic

// function decomp(n) {
//   const primeNumbers = getPrimeNumbers(n)
//   const factorialNumber = factorial(n)
//   const primeFactors = []
//   let exp = 1

//   for (number of primeNumbers) {
//     const bigNumber = BigInt(number)
//     if (factorialNumber % bigNumber !== 0n) break

//     let result = factorialNumber / bigNumber

//     while (result % bigNumber === 0n) {
//       exp++
//       result /= bigNumber
//     }

//     primeFactors.push(`${number}${exp > 1 ? `^${exp}` : ''}`)
//     exp = 1
//   }

//   return primeFactors.join(' * ')
// }

module.exports = decomp
