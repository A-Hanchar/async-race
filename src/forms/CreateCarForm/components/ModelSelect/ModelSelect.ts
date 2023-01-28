import { LabelWithFormElement } from 'components/LabelWithFormElement'
import { createElementWithClassName } from 'helpers'

import inputStyles from '../input.module.css'

export const ModelSelect = () => {
  const select = createElementWithClassName({ tagName: 'select' })

  const label = LabelWithFormElement({ labelTitle: 'Model: ', classname: inputStyles.label, managedElement: select })

  return { label, select }
}
