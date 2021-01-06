function nextBigger(n) {
  const arr = n.toString().split('')

  let pivot = -1
  for (let i = arr.length - 1; i > 0; --i) {
    if (arr[i] > arr[i - 1]) {
      pivot = i - 1
      break
    }
  }

  if (pivot === -1) return -1

  let secondHalf = arr.splice(pivot)
  const pv = secondHalf.splice(0, 1)[0]

  let mininum = null
  let minimunIndex = null

  for (let i = 0; i < secondHalf.length; ++i) {
    if (secondHalf[i] > pv) {
      if (mininum === null || secondHalf[i] < mininum) {
        mininum = secondHalf[i]
        minimunIndex = i
      }
    }
  }

  if (minimunIndex === null) return -1

  secondHalf.splice(minimunIndex, 1)
  secondHalf.push(pv)
  secondHalf = secondHalf.sort()

  const result = Number(arr.concat([mininum]).concat(secondHalf).join(''))

  if (result < n) return -1

  return result
}

module.exports = nextBigger
