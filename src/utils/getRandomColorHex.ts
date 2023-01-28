import { SYMBOL } from 'enums'
import { one, zero } from 'variables'

import { getRandomInt } from './getRandomInt'

export const getRandomColorHex = () => {
  const letters = '0123456789ABCDEF'

  const maxHexLetters = 6

  const randomHexLetters = []

  for (let i = zero; i < maxHexLetters; i += one) {
    const letter = letters[getRandomInt(letters.length)]

    randomHexLetters.push(letter)
  }

  return `${SYMBOL.LATTICE}${randomHexLetters.join('')}`
}
