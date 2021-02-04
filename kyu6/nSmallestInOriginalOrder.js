// https://www.codewars.com/kata/5aec1ed7de4c7f3517000079

function firstNSmallest(array, n) {
  while (array.length !== n) {
    array.splice(array.lastIndexOf(Math.max(...array)), 1)
  }
  return array
}

module.exports = firstNSmallest
