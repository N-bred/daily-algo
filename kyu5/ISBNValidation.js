// https://www.codewars.com/kata/51fc12de24a9d8cb0e000001

function validISBN10(isbn) {
  if (!isbn || isbn.length < 10 || isbn.match(/^[0-9]{9}(?:X||[0-9])$/)=== null) return false
  return isbn
    .split('')
    .map((n) => (n === 'X' ? 10 : ~~n))
    .reduce((prev, curr, i) => prev + curr * (i + 1), 0) % 11 === 0 
}

module.exports = validISBN10
