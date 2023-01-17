import { createElementWithClassName } from 'helpers'

import { InputProps } from './types'

export const Input = ({ type = 'text', classname, defaultValue, placeholder = '', value }: InputProps) => {
  const input = createElementWithClassName({ tagName: 'input', classname })

  input.type = type
  input.placeholder = placeholder

  if (defaultValue) {
    input.defaultValue = defaultValue
  }

  if (value) {
    input.value = value
  }

  return input
}
