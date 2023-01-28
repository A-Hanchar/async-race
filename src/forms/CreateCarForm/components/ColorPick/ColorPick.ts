import { Input } from 'components/Input'
import { LabelWithFormElement } from 'components/LabelWithFormElement'

import inputStyles from '../input.module.css'

export const ColorPick = () => {
  const input = Input({ type: 'color' })

  const label = LabelWithFormElement({
    labelTitle: 'Car Color: ',
    classname: inputStyles.label,
    managedElement: input,
  })

  return { label, input }
}
