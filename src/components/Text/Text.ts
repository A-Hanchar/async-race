import { createElementWithClassName } from 'helpers'

import { TextProps, TextTagName } from './types'

export const Text = <T extends keyof HTMLElementTagNameMap = keyof TextTagName>({
  tagName,
  text = '',
  classname,
}: TextProps<T>) => {
  const textElement = createElementWithClassName({ tagName, classname })

  textElement.innerText = text

  return textElement
}
