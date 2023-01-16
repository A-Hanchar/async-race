import { EmptyOption } from 'components/EmptyOption'
import { SelectOption } from 'types'

import { createElementWithClassName } from './createElementWithClassName'

export const addOptionsToSelect = <T extends string = string>({
  select,
  options,
  withEmpty = true,
  defaultValue,
}: {
  select: HTMLSelectElement
  options: Array<SelectOption<T>>
  withEmpty?: boolean
  defaultValue?: T
}) => {
  if (withEmpty) {
    select.append(EmptyOption())
  }

  options.forEach(({ text, value }) => {
    const option = createElementWithClassName({ tagName: 'option' })

    option.value = value
    option.textContent = text

    if (value === defaultValue) {
      option.selected = true
    }

    select.append(option)
  })
}
