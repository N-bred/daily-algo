const { expect } = require('@jest/globals')
const { URLshortener } = require('../kyu5/')

const INPUT =
  'https://www.google.com/search?q=google+images&client=firefox-b-d&sxsrf=ALeKk03VrsZkSrxCChFlQ4Rz_c3hCTTXqQ:1609920599578&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjYy8rL7YbuAhWoGFkFHQoTAi0Q_AUoAXoECBQQAw&biw=1920&bih=977#imgrc=vfDRK-yb66dq5M'
const result = URLshortener.urlShortener(INPUT)

test('Takes a long URL and returns a short version of it', () => {
  const regexValidator = /^short.ly\/[a-z]{1,4}$/
  expect(result).toMatch(regexValidator)
})

test('Takes a short URL and returns a long version of it', () => {
  expect(URLshortener.urlRedirector(result)).toEqual(INPUT)
})
