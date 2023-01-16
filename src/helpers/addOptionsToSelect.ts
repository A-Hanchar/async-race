import { EmptyOption } from 'components/EmptyOption'
import { SelectOption } from 'types'

import { createElementWithClassName } from './createElementWithClassName'

export const addOptionsToSelect = ({
  select,
  options,
  withEmpty = true,
}: {
  select: HTMLSelectElement
  options: SelectOption[]
  withEmpty?: boolean
}) => {
  if (withEmpty) {
    select.append(EmptyOption())
  }

  options.forEach(({ text, value }) => {
    const option = createElementWithClassName({ tagName: 'option' })

    option.value = value
    option.textContent = text

    select.append(option)
  })
}
