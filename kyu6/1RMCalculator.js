// https://www.codewars.com/kata/595bbea8a930ac0b91000130

function calculate1RM(w, r) {
  if (r === 0) return 0
  if (r === 1) return w
  const a = (w, r) => w * (1 + r / 30)
  const b = (w, r) => (w * 100) / (101.3 - 2.67123 * r)
  const c = (w, r) => w * r ** 0.1
  return Math.round([a, b, c].map((f) => f(w, r)).sort((a, b) => b - a)[0])
}

module.exports = calculate1RM
