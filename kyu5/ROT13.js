function inRange(number, min, max) {
  if (number >= min && number <= max) return true
  return false
}

function convertChar(char) {
  const charCode = char.charCodeAt(0)
  const number = 13
  const ranges = { uppercase: [65, 90], lowercase: [97, 122] }

  if (inRange(charCode, ranges.uppercase[0], ranges.uppercase[1])) {
    if (charCode > ranges.uppercase[1] - number) return charCode - number
  } else if (inRange(charCode, ranges.lowercase[0], ranges.lowercase[1])) {
    if (charCode > ranges.lowercase[1] - number) return charCode - number
  } else {
    return charCode
  }

  return charCode + number
}

function ROT13(str) {
  return str
    .split('')
    .map((char) => String.fromCharCode(convertChar(char)))
    .join('')
}

const INPUT = 'Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)'

const OUTPUT = ROT13(INPUT)

console.log(OUTPUT)
