import { createElementWithClassName } from 'helpers'
import { addOptionsToSelect } from 'helpers/addOptionsToSelect'
import { manufactoriesOptions } from 'variables'

import inputStyles from '../input.module.css'

export const ManufactorySelect = () => {
  const label = createElementWithClassName({ tagName: 'label', classname: inputStyles.label })
  const select = createElementWithClassName({ tagName: 'select' })

  addOptionsToSelect({ select, options: manufactoriesOptions })

  label.append('Manufactory', select)

  return { label, select }
}
