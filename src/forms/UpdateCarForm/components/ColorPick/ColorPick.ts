import { createElementWithClassName } from 'helpers'

import { ColorPickProps } from './types'
import inputStyles from '../input.module.css'

export const ColorPick = ({ value }: ColorPickProps) => {
  const label = createElementWithClassName({ tagName: 'label', classname: inputStyles.label })
  const input = createElementWithClassName({ tagName: 'input' })

  input.type = 'color'
  input.value = value

  label.append('Car Color:', input)

  return { label, input }
}
