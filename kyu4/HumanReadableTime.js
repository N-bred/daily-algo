function humanReadable(sec) {
  if (typeof sec != 'number') return null
  const minutes = 1 * 60
  const hours = minutes * 60
  const fmtNumber = (n) => `${n < 10 ? '0' : ''}${n}`

  const h = Math.floor(sec / hours)
  const m = Math.floor((sec % hours) / minutes)
  const s = Math.floor((sec % hours) % minutes)

  return `${fmtNumber(h)}:${fmtNumber(m)}:${fmtNumber(s)}`
}

module.exports = humanReadable
