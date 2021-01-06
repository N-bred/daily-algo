function humanReadable(sec) {
  const minutes = 1 * 60
  const hours = minutes * 60
  const fmtNumber = (n) => `${n < 10 ? '0' : ''}${n}`

  const h = Math.floor(sec / hours)
  const m = Math.floor((sec % hours) / minutes)
  const s = Math.floor((sec % hours) % minutes)

  return `${fmtNumber(h)}:${fmtNumber(m)}:${fmtNumber(s)}`
}

const INPUTS = [0, 5, 60, 86399, 359999]

const OUTPUTS = ['00:00:00', '00:00:05', '00:01:00', '23:59:59', '99:59:59']

const results = INPUTS.map((input, i) => {
  const result = humanReadable(input)
  if (result === OUTPUTS[i]) return true
  return false
}).every((input) => input)

console.log(results)
