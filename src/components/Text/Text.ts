import { createElementWithClassName } from 'helpers'

import { TextProps } from './types'

export const Text = ({ tagName, text = '', classname }: TextProps) => {
  const textElement = createElementWithClassName({ tagName, classname })

  textElement.innerText = text

  return textElement
}
