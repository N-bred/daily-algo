const { ROT13 } = require('../kyu5/')

test('Receives an encrypted string in ROT13 and returns the decrypted version', () => {
  const INPUT = 'Guvf vf npghnyyl gur svefg xngn V rire znqr. Gunaxf sbe svavfuvat vg! :)'
  expect(ROT13(INPUT)).toEqual('This is actually the first kata I ever made. Thanks for finishing it! :)')
})
