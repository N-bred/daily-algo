// https://www.codewars.com/kata/5266fba01283974e720000fa

// O(n*2)
// function variance(nArr) {
//   const mean = nArr.reduce((a, b) => a + b, 0) / nArr.length
//   return nArr.reduce((a, b) => a + (b - mean) ** 2, 0) / nArr.length
// }

// O(n)
function variance(nArr) {
  const length = nArr.length
  let sum = 0
  let mult = 0

  for (let i = 0; i < length; ++i) {
    sum += nArr[i]
    mult += nArr[i] ** 2
  }

  return mult / length - (sum / length) ** 2
}

module.exports = variance

// sum of (x ** 2 / n) - mean **2
