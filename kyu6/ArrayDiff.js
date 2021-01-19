// https://www.codewars.com/kata/523f5d21c841566fde000009

function arrayDiff(a, b) {
  const freq = {}
  for (let i = 0; i < b.length; ++i) freq[b[i]] = 1

  for (let i = a.length - 1; i >= 0; --i) {
    if (freq[a[i]]) a.splice(i, 1)
  }

  return a
}

module.exports = arrayDiff
