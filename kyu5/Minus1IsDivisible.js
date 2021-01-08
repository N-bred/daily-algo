// https://www.codewars.com/kata/5f845fcf00f3180023b7af0a

function minus1IsDivisible(a, b) {
  if (typeof b !== 'number' || typeof a !== 'number' || a < 1 || b < 1) return null
  if (a === b) return a
  if (a < b) [a, b] = [b, a]

  let counter = 0

  do {
    if ((a / b) % 1 === 0) counter++
  } while (a-- > 0 && b-- > 0)

  return counter
}

module.exports = minus1IsDivisible
