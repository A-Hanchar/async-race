import { createElementWithClassName } from 'helpers'

import inputStyles from '../input.module.css'

export const ModelSelect = () => {
  const label = createElementWithClassName({ tagName: 'label', classname: inputStyles.label })
  const select = createElementWithClassName({ tagName: 'select' })

  label.append('Model', select)

  return { label, select }
}
