import { Input } from 'components/Input'

import { LabelWithFormElement } from 'components/LabelWithFormElement'

import { ColorPickProps } from './types'
import inputStyles from '../input.module.css'

export const ColorPick = ({ value }: ColorPickProps) => {
  const input = Input({ type: 'color', value })

  const label = LabelWithFormElement({
    labelTitle: 'Car Color: ',
    managedElement: input,
    classname: inputStyles.label,
  })

  return { label, input }
}
