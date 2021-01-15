// https://www.codewars.com/kata/52597aa56021e91c93000cb0/javascript

// function moveZeros(arr) {
//   if (!arr || arr.length < 1) return null

//   const zerosArr = []

//   for (let i = arr.length - 1; i >= 0; --i) {
//     if (arr[i] === 0) {
//       zerosArr.push(arr.splice(i, 1)[0])
//     }
//   }

//   return arr.concat(zerosArr)
// }

function moveZeros(arr) {
  if (!arr || arr.length < 1) return null
  let length = 0
  return arr.filter((e) => (e === 0 ? length++ && false : true)).concat(Array.from({ length }, () => 0))
}

module.exports = moveZeros
