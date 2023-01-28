import { LabelWithFormElement } from 'components/LabelWithFormElement'
import { createElementWithClassName, addOptionsToSelect } from 'helpers'
import { manufactoriesOptions } from 'variables'

import inputStyles from '../input.module.css'

export const ManufactorySelect = () => {
  const select = createElementWithClassName({ tagName: 'select' })

  addOptionsToSelect({ select, options: manufactoriesOptions })

  const label = LabelWithFormElement({
    labelTitle: 'Manufactory: ',
    classname: inputStyles.label,
    managedElement: select,
  })

  return { label, select }
}
