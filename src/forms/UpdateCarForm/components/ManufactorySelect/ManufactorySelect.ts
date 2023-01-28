import { LabelWithFormElement } from 'components/LabelWithFormElement'
import { createElementWithClassName, addOptionsToSelect } from 'helpers'
import { manufactoriesOptions } from 'variables'

import { ManufactorySelectProps } from './types'
import inputStyles from '../input.module.css'

export const ManufactorySelect = ({ defaultValue }: ManufactorySelectProps) => {
  const select = createElementWithClassName({ tagName: 'select' })

  addOptionsToSelect({ select, options: manufactoriesOptions, defaultValue })

  const label = LabelWithFormElement({
    classname: inputStyles.label,
    managedElement: select,
    labelTitle: 'Manufactory: ',
  })

  return { label, select }
}
