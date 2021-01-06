function factorial(n) {
  const arr = []
  arr[0] = 1

  let quantity = 2
  let length = 1
  let divResult = 0
  let x = 0

  while (quantity <= n) {
    x = 0
    divResult = 0
    while (x < length) {
      arr[x] = arr[x] * quantity + divResult
      divResult = ~~(arr[x] / 10)
      arr[x] %= 10
      x++
    }

    while (divResult) {
      arr[length] = divResult % 10
      divResult = ~~(divResult / 10)
      length++
    }

    quantity++
  }

  return arr.reverse().join('')
}

const INPUT = 125
const OUTPUT = '720'
const result = factorial(INPUT)

console.log(result === OUTPUT)
console.log(result)
