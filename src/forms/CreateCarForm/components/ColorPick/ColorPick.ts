import { createElementWithClassName } from 'helpers'

import inputStyles from '../input.module.css'

export const ColorPick = () => {
  const label = createElementWithClassName({ tagName: 'label', classname: inputStyles.label })
  const input = createElementWithClassName({ tagName: 'input' })

  input.type = 'color'
  label.append('Car Color:', input)

  return { label, input }
}
