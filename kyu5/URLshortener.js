// https://www.codewars.com/kata/5fee4559135609002c1a1841

const db = {}
const host = 'short.ly/'
const hostLength = host.length

function fmtString(str) {
  let formated = str
    .split('')
    .reduce((a, b) => a + b.charCodeAt() - 46, 0)
    .toString(35)
  const matches = formated.match(/[0-9]/g)

  if (matches && matches.length > 0) {
    matches.forEach((n) => (formated = formated.replace(n, String.fromCharCode(Number(n) + 97))))
  }

  return {
    original: str,
    formated: formated,
  }
}

function urlShortener(longURL) {
  const formatObject = fmtString(longURL)

  if (!(formatObject in db)) db[formatObject.formated] = formatObject

  return host + formatObject.formated
}

function urlRedirector(shortURL) {
  if (!shortURL.includes(host)) return null
  const str = shortURL.slice(hostLength)

  if (db[str]) return db[str].original

  return null
}

module.exports = {
  urlShortener,
  urlRedirector,
}
